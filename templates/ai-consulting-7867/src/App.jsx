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
        
        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 w-full z-50 transition-all duration-500 ease-natural opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-default">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform duration-500 ease-natural">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="text-lg font-medium text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300">GROWTHCRED</span>
</div>
<div className="hidden md:flex gap-8 text-slate-400 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300 ease-natural" href="#">Architecture</a>
<a className="hover:text-white transition-colors duration-300 ease-natural" href="#">The 4 Pillars</a>
<a className="hover:text-white transition-colors duration-300 ease-natural" href="#">Diagnostic</a>
</div>
<div className="flex gap-4 items-center">
<a className="text-white text-sm hover:text-blue-300 transition-colors duration-300 ease-natural hidden sm:block" href="#">Client Login</a>
<a className="relative overflow-hidden group bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-natural" href="#apply">
<span className="relative z-10">Apply Now</span>
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
</a>
</div>
</div>
</nav>

<header className="overflow-hidden md:pt-48 md:pb-36 bg-slate-950 pt-36 pb-24 relative min-h-screen flex items-center">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse-glow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">

<div className="reveal active delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-800/30 backdrop-blur-sm group hover:border-blue-700/50 transition-colors duration-500 cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-blue-200 text-xs font-medium tracking-wide uppercase">For the $1M+ CEO</span>
</div>
<h1 className="reveal active delay-200 text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tighter leading-[1.1]">
                    Reclaim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 animate-gradient">Sovereignty</span> with the Four Pillars of AI.
                </h1>
<p className="reveal active delay-300 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                    You didn’t build a business to become its most exhausted employee. Discover the architecture of <strong>"The Autonomous Enterprise"</strong> and scale beyond $1M with zero additional headcount.
                </p>
<div className="reveal active delay-300 flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-500 ease-natural shadow-xl shadow-blue-600/10 hover:shadow-blue-600/30 hover:-translate-y-1 flex items-center justify-center gap-2 group" href="#apply">
                        Start Your Diagnostic 
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-natural" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 px-4 py-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-700 flex items-center justify-center text-xs text-white">AL</div>
<div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-600 flex items-center justify-center text-xs text-white">MK</div>
</div>
<span className="text-slate-500 text-sm">Limited availability</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block perspective-[1000px]">

<div className="animate-float-delayed absolute top-10 right-0 w-[400px] glass-card rounded-[2rem] p-8 z-20 hover:rotate-0 transition-all duration-700 ease-natural group cursor-default">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-center mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-500 ease-natural">
<svg className="lucide lucide-lock text-blue-400 w-5 h-5 stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<div className="text-white text-sm font-medium">Sovereignty Status</div>
<div className="text-blue-400 text-xs flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    System Active
                                </div>
</div>
</div>
<div className="text-white/30 text-xs font-mono border border-white/10 px-2 py-1 rounded">V.4.0</div>
</div>
<div className="space-y-6 relative z-10">
<div className="bg-white/5 rounded-xl p-4 border border-white/5 group-hover:bg-white/10 transition-colors duration-500">
<div className="flex justify-between text-sm text-slate-400 mb-1">
<span>Revenue Velocity</span>
<span className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-xs">+24%</span>
</div>
<div className="text-3xl text-white font-semibold tracking-tight">$1,240,000</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors duration-500">
<div className="flex items-center gap-3">
<svg className="lucide lucide-users text-slate-400 w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-slate-200 text-sm">Headcount</span>
</div>
<span className="text-white font-medium">0 Added</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors duration-500">
<div className="flex items-center gap-3">
<svg className="lucide lucide-clock text-slate-400 w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-slate-200 text-sm">Founder Hours</span>
</div>
<span className="text-white font-medium">12h/week</span>
</div>
</div>
</div>
</div>

<div className="animate-float absolute top-24 right-12 w-[380px] h-[400px] bg-blue-600 rounded-[2.5rem] opacity-20 rotate-[6deg] z-10 blur-2xl"></div>
</div>
</div>
</header>

<section className="py-24 bg-white relative z-20">
<div className="max-w-4xl mx-auto px-6">
<div className="reveal text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
                    The Gilded Cage: <span className="text-slate-400">Trapped by Success</span>
</h2>
<div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent mx-auto"></div>
</div>
<div className="reveal delay-100 prose prose-lg md:prose-xl prose-slate mx-auto font-light leading-relaxed">
<p>
                    You are successful, yet you are trapped. You suffer from <span className="text-slate-900 font-normal">"Opportunity Atrophy"</span>—the invisible "leaks" in your operation where qualified prospects disappear simply because a human was too slow to respond. 
                </p>
<p>
                    You want to scale, but the thought of managing more people, more personalities, and more "mess" makes you hesitate.
                </p>
<div className="bg-red-50/50 border-l-4 border-red-500/80 p-8 my-10 rounded-r-2xl transform hover:scale-[1.02] transition-transform duration-500 ease-natural">
<p className="text-red-900 m-0 font-medium text-lg leading-relaxed">
                        The Brutal Truth: In its current state, your business is a fragile entity that requires your constant presence just to maintain the status quo. You are paying the highest possible price for your growth: <span className="underline decoration-red-300 decoration-2 underline-offset-4">Your Sovereignty.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6 bg-slate-50 overflow-hidden">
<div className="reveal max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl shadow-blue-900/20 group">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-glow"></div>
<div className="relative z-10">
<div className="max-w-3xl mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-blue-300/50"></span>
<span className="text-blue-200 uppercase tracking-widest text-sm font-semibold">The Solution</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                        The 4 Pillars of the "Autonomous Engine"
                    </h2>
<p className="text-xl text-blue-100 font-light leading-relaxed opacity-90">
                        We don't sell "bots." We architect a <strong>Private Revenue Infrastructure</strong> that moves prospects through a "Greased Chute" from initial interest to a paid invoice with mechanical certainty.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="group/card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 ease-natural hover:-translate-y-2">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 ease-natural">
<svg className="lucide lucide-mic w-6 h-6 stroke-[1.5]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-white text-2xl font-medium mb-3">1. The H-to-H Pilot</h3>
<p className="text-blue-100/80 text-lg leading-relaxed group-hover/card:text-blue-50 transition-colors duration-300">
                            We automate personalized, authentic outreach. Your brand "whispers" to your most valuable prospects in their own language, ensuring you are <strong>"Findable"</strong> to those already wanting to buy.
                        </p>
</div>

<div className="group/card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 ease-natural hover:-translate-y-2 delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 ease-natural">
<svg className="lucide lucide-shield-check w-6 h-6 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-white text-2xl font-medium mb-3">2. The Elite Lead Guard</h3>
<p className="text-blue-100/80 text-lg leading-relaxed group-hover/card:text-blue-50 transition-colors duration-300">
                            An AI voice agent acts as your primary filter, conducting a <strong>qualifying diagnostic</strong> in seconds. Only the "Starving Crowd" with the Ability and Willingness to pay enters your calendar.
                        </p>
</div>

<div className="group/card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 ease-natural hover:-translate-y-2">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 ease-natural">
<svg className="lucide lucide-zap w-6 h-6 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white text-2xl font-medium mb-3">3. Instant Win Delivery</h3>
<p className="text-blue-100/80 text-lg leading-relaxed group-hover/card:text-blue-50 transition-colors duration-300">
                            Eliminate human delay. The moment a client invests, they gain instant momentum. AI monitors engagement and sends "Smart Nudges" to ensure a "win" within 72 hours.
                        </p>
</div>

<div className="group/card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 ease-natural hover:-translate-y-2 delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 ease-natural">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-white text-2xl font-medium mb-3">4. Financial Intelligence</h3>
<p className="text-blue-100/80 text-lg leading-relaxed group-hover/card:text-blue-50 transition-colors duration-300">
                            A <strong>Confidential Daily Cash Briefing</strong> delivered to your desk. See your "North Star" metrics in real-time, giving you total certainty without the manual labor.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200 hover:border-slate-300">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
                        Why pay for more employees when you can own the "Machine that Runs the Machine"?
                    </h2>
<p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                        A traditional team for these tasks costs upward of <span className="font-medium text-slate-900">$150,000/year</span> in payroll, management energy, and human error. Our system is reassuringly expensive because it delivers what no employee can: 
                    </p>
<div className="inline-block bg-white border border-slate-200 px-8 py-4 rounded-2xl shadow-sm text-lg font-medium text-slate-800 transform hover:scale-105 transition-transform duration-500 ease-natural">
                        You are not "buying software"—you are <span className="text-blue-600">buying back your life.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="apply">
<div className="max-w-4xl mx-auto px-6">

<div className="reveal mb-16 p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 shadow-lg relative group hover:shadow-xl transition-shadow duration-500">
<div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 ease-natural">
<svg className="lucide lucide-plane w-8 h-8 stroke-[1.5] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="pl-4 md:pl-8">
<h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-3">The Analogy</h4>
<p className="text-lg md:text-xl text-slate-700 italic font-light leading-relaxed">
                        "Running your business now is like navigating a high-performance jet while sitting in the engine room shoveling coal. We are the engineers who move you to the cockpit. We install the Auto-pilot (The 4 Pillars) and the HUD (Financial Intelligence). Your only job is to decide the destination; the system we build handles the flight while you enjoy the <span className="font-medium text-slate-900 not-italic">liberty of the penthouse view</span>."
                    </p>
</div>
</div>
<div className="text-center max-w-2xl mx-auto reveal delay-100">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Apply for Your Private Session
                </h2>
<p className="text-xl text-slate-600 mb-8 font-light">
                    This is not for the masses. We specialize in "cleaning the kitchen" for distinguished CEOs who value their time at $1,000+ per hour.
                </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium mb-10">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Only 3 New Client Partnerships Accepted Per Month
                </div>
</div>
<div className="reveal delay-200 space-y-6 text-left max-w-xl mx-auto mb-12 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-100 transition-colors duration-500">
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-semibold text-sm group-hover:scale-110 transition-transform duration-300 ease-natural">1</div>
<div>
<span className="block font-medium text-slate-900 text-lg">Request "Operational Sovereignty Diagnostic"</span>
<span className="text-slate-500">We analyze where your liberty is leaking.</span>
</div>
</div>
<div className="w-px h-6 bg-slate-200 ml-4"></div>
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-semibold text-sm group-hover:scale-110 transition-transform duration-300 ease-natural">2</div>
<div className="">
<span className="block font-medium text-slate-900 text-lg">Complete Confidential Discovery Briefing</span>
<span className="text-slate-500">We refuse to waste a minute of your time.</span>
</div>
</div>
<div className="w-px h-6 bg-slate-200 ml-4"></div>
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-semibold text-sm group-hover:scale-110 transition-transform duration-300 ease-natural">3</div>
<div className="">
<span className="block font-medium text-slate-900 text-lg">Join us for a Private Prescriptive Session</span>
<span className="text-slate-500">Receive your custom architecture plan.</span>
</div>
</div>
</div>
<div className="text-center reveal delay-300">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium py-5 px-10 rounded-full transition-all duration-500 ease-natural shadow-xl shadow-blue-600/30 hover:-translate-y-1 hover:shadow-blue-600/50 w-full md:w-auto">
                    Apply For A Private Diagnostic Session
                </button>
</div>
</div>
</section>

<footer className="text-slate-400 bg-slate-950 border-slate-900 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
<div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="font-medium text-white tracking-tight">GROWTHCRED Systems</span>
</div>
<div className="text-sm">
                © 2024 Sovereign Systems. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
