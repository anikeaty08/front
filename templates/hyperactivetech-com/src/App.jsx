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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="47" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="3eLGLP7pmQS4ozfklmrX"></div>

</div></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xs font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
                Hyperactive Tech
            </a>
<div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-neutral-400 uppercase tracking-wide">
<a className="hover:text-cyan-400 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-cyan-400 transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-cyan-400 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="bg-white/10 border border-white/10 text-white text-[11px] font-semibold px-4 py-2 rounded hover:bg-white/20 transition-colors backdrop-blur-md" href="https://calendly.com/amruthg193/30min">
                Book Call
            </a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 pb-20 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none select-none z-0">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-violet-900/10 blur-[90px] rounded-full mix-blend-screen"></div>

<div className="absolute inset-0 perspective-[2000px]">
<div className="absolute inset-0 flex items-center justify-center transform-style-3d opacity-80">

<div className="absolute top-[40%] w-[150%] h-[150%] border-t border-cyan-500/20 rounded-[100%] blur-[2px] transform -translate-y-1/2 scale-y-50"></div>
<div className="absolute top-[42%] w-[140%] h-[140%] border-t-[2px] border-blue-500/30 rounded-[100%] blur-[4px] transform -translate-y-1/2 scale-y-50"></div>
<div className="absolute top-[38%] w-[160%] h-[160%] border-t border-indigo-500/10 rounded-[100%] blur-[1px] transform -translate-y-1/2 scale-y-50"></div>

<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-[4px] w-full"></div>
<div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent w-3/4 mx-auto mix-blend-overlay"></div>

<div className="absolute bottom-[40%] w-[150%] h-[150%] border-b border-fuchsia-500/20 rounded-[100%] blur-[2px] transform translate-y-1/2 scale-y-50"></div>
<div className="absolute bottom-[42%] w-[140%] h-[140%] border-b-[2px] border-violet-500/30 rounded-[100%] blur-[4px] transform translate-y-1/2 scale-y-50"></div>
<div className="absolute bottom-[38%] w-[160%] h-[160%] border-b border-purple-500/10 rounded-[100%] blur-[1px] transform translate-y-1/2 scale-y-50"></div>

<div className="absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm"></div>
<div className="absolute top-[55%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent blur-sm"></div>
</div>
</div>

<div className="absolute inset-0 scanlines opacity-30 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300 text-[10px] font-medium uppercase tracking-wider mb-8 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(34,211,238,0.2)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                Neural Voice Engine v2.0 Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-8 leading-[1.1] font-medium font-sans">
                Every Missed Call Is <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 font-serif italic pr-2">Lost Revenue.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-12 ml-auto">Our AI Agents capture every lead, 24/7. Designed specifically for Clinics, Real Estate Agencies, and Home Service Pro who can't afford to miss a beat.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative w-full md:w-auto overflow-hidden rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-neutral-200" href="https://calendly.com/amruthg193/30min">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Book a Free Call
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 opacity-0 transition-opacity group-hover:opacity-50 blur-lg"></div>
</a>
<a className="group relative w-full md:w-auto overflow-hidden rounded-lg bg-white/5 border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20" href="https://tally.so/r/KYlNe8">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Get a Demo
                        <iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:play-circle-linear" strokeWidth="2" width="18"></iconify-icon>
</span>
</a>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">The Tools We Will Use To Build the AI Voice Agent</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-all duration-500">

<div className="flex items-center">
<span className="text-xl font-bold text-white tracking-tight">n8n</span>
</div>

<div className="flex items-center">
<span className="text-lg font-semibold text-white tracking-tight">Retell AI</span>
</div>

<div className="flex items-center">
<span className="text-lg font-bold text-white tracking-widest">VAPI</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative z-10 border-t border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-5xl text-white tracking-tighter mb-4 font-medium font-playfair">Tailored for your industry.</h2>
<p className="text-neutral-400 text-lg max-w-xl font-light">We don't build generic chatbots. We build specialized voice agents.</p>
</div>
<div className="hidden md:block w-32 h-[1px] bg-white/10 mb-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Clinics &amp; Healthcare</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Eliminate long hold times. Our AI answers patient calls 24/7, schedules appointments directly into your EHR.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500" icon="lucide:check" width="14"></iconify-icon> Reduce front-desk workload
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500" icon="lucide:check" width="14"></iconify-icon> HIPAA compliant protocols
                        </li>
</ul>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Real Estate Agencies</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Be the first to respond. Qualify buyers instantly, book showings, and follow up on property inquiries.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-purple-500" icon="lucide:check" width="14"></iconify-icon> Instant lead qualification
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-purple-500" icon="lucide:check" width="14"></iconify-icon> Automated booking
                        </li>
</ul>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-600/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Home Service Pros</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Turn missed calls into booked jobs. Capture emergency leads and filter spam while you work.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-yellow-500" icon="lucide:check" width="14"></iconify-icon> Filter spam &amp; robo-calls
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-yellow-500" icon="lucide:check" width="14"></iconify-icon> After-hours dispatch
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-900/30 border-t border-white/5 overflow-hidden" id="how-it-works">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-cyan-500 text-[10px] font-semibold tracking-widest uppercase mb-3 block">Process</span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight font-playfair">From Ringing to Revenue</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:border-cyan-500/50 transition-colors duration-500">
<iconify-icon className="text-white group-hover:text-cyan-400 transition-colors" icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">1. Incoming Call</h4>
<p className="text-sm text-neutral-500">Customer calls your line. AI triggers instantly if unanswered.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:border-purple-500/50 transition-colors duration-500">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:micro-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">2. AI Answers</h4>
<p className="text-sm text-neutral-500">Natural voice interaction understanding intent and emotion.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:border-pink-500/50 transition-colors duration-500">
<iconify-icon className="text-white group-hover:text-pink-400 transition-colors" icon="solar:clipboard-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">3. Qualify &amp; Assist</h4>
<p className="text-sm text-neutral-500">Gathers details, answers FAQs, filters unqualified leads.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:border-cyan-500/50 transition-colors duration-500">
<iconify-icon className="text-white group-hover:text-cyan-400 transition-colors" icon="solar:calendar-mark-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">4. Book &amp; Sync</h4>
<p className="text-sm text-neutral-500">Appointment booked in CRM. Confirmation sent.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-2">

<div className="lg:col-span-2 row-span-2 glass-panel p-10 rounded-3xl relative overflow-hidden group border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110">
<iconify-icon className="text-cyan-500" icon="solar:clock-circle-linear" width="240"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-3xl text-white mb-4 tracking-tighter font-playfair">Available 24/7/365.</h3>
<p className="text-lg font-light text-neutral-400 max-w-md">Customers can call at any hours. Our AI voice agents answer instantly—day or night—so no lead, booking, or opportunity slips through.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/30 transition-colors border-neutral-800/50 group">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-purple-400" icon="solar:rocket-2-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">Instant Response</h3>
<p className="text-sm text-neutral-400">Zero wait times. Connect with callers the second they dial.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-colors border-neutral-800/50 group">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-cyan-400" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">CRM Integrated</h3>
<p className="text-sm text-neutral-400">Seamlessly pushes data to Salesforce, HubSpot, and GoHighLevel.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/10" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-6 font-playfair">Simple, Scalable Pricing</h2>
<p className="text-neutral-400 mb-12 font-light">Whether you handle 50 calls a month or 5,000, we have a custom plan.</p>
<div className="p-[1px] rounded-2xl inline-block w-full max-w-md bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
<div className="text-cyan-400 font-medium tracking-widest text-[10px] uppercase mb-4">Enterprise Grade</div>
<div className="text-3xl text-white mb-2 font-playfair">Custom Integration</div>
<p className="text-sm text-neutral-400 mb-8">Tailored specifically to your business logic and booking software.</p>
<a className="block w-full bg-white text-black py-3 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-colors" href="https://calendly.com/amruthg193/30min">
                        Get a Quote
                    </a>
<div className="mt-8 flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Setup &amp; Onboarding</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Script Optimization</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span>24/7 Priority Support</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-neutral-950">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>
<div className="absolute inset-0 scanlines opacity-20"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl text-white tracking-tighter mb-8 font-playfair">
                Stop Losing Calls.<br/>
                Start Booking.
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-lg text-sm font-semibold hover:bg-cyan-50 transition-colors shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]" href="https://calendly.com/amruthg193/30min">
                    Book a Free Call
                </a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors" href="https://tally.so/r/KYlNe8">
                    Get a Demo
                </a>
</div>
<p className="mt-6 text-[11px] text-neutral-500 uppercase tracking-widest">No credit card required for demo call.</p>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-xs">
<a className="text-xs font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        Hyperactive Tech
                    </a>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Intelligent voice automation for businesses that value every lead. Building the future of conversational AI.
                    </p>
<div className="flex items-start gap-3 mt-6 text-xs text-neutral-500 font-light leading-relaxed opacity-60">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<p>Hyperactive Tech<br/>MPL N0.12-1-87, Near Gunj Road<br/>Raichur, 584101, India</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
<div className="">
<h4 className="text-white font-medium mb-6">Solutions</h4>
<ul className="space-y-4 text-neutral-500 text-xs">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Healthcare</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Real Estate</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-neutral-500 text-xs">
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[11px] text-neutral-600 uppercase tracking-wider">
<p className="">© 2024 Hyperactive Tech. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
