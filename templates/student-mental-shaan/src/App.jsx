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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-slate-950/80 border-slate-800">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:mind-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg group-hover:opacity-80 transition-opacity text-slate-100">MINDFLOW</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-slate-100" href="#moods">Moods</a>
<a className="transition-colors hover:text-slate-100" href="#features">Features</a>
<a className="transition-colors hover:text-slate-100" href="#resources">Resources</a>
<a className="text-rose-500 transition-colors flex items-center gap-1 hover:text-rose-400" href="#emergency">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Crisis Support
                </a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-sm font-medium transition-colors px-3 py-2 text-slate-400 hover:text-slate-100">
                    Log in
                </button>
<button className="text-sm font-medium transition-all px-4 py-2 rounded-lg shadow-sm hover:shadow-md flex items-center gap-2 bg-slate-100 text-black hover:bg-white border border-transparent hover:border-slate-300">
<span className="">Get Started</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-20 pt-32 pr-6 pb-16 pl-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 bg-indigo-950/30 border-indigo-900/50 text-indigo-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
</span>
                New: AI-Powered Mood Analytics for Students
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-slate-100">
                Mental health support designed for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">academic journey</span>.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                A private, accessible digital ecosystem connecting students with professional counseling, peer support, and self-care tools tailored for higher education.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto text-sm font-medium transition-all px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 bg-slate-100 text-black hover:bg-white shadow-indigo-500/10">
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon>
                    Student Registration
                </button>
<button className="w-full sm:w-auto text-sm font-medium border transition-all px-6 py-3 rounded-lg flex items-center justify-center gap-2 bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-slate-100">
<iconify-icon className="" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    How it works
                </button>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-900/50 bg-slate-950 relative overflow-hidden" id="moods">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-950/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100 mb-4">Mood Discovery</h2>
<p className="text-slate-500 max-w-xl mx-auto">Select a card below to reveal the psychological insights hidden behind your current feeling.</p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> High Intensity
                    </div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-rose-950/50 text-rose-400 flex items-center justify-center border border-rose-900/30">
<iconify-icon icon="solar:shocked-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Anxious</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-rose-900/30 bg-rose-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-rose-400 mb-2 uppercase tracking-wide">Quick Relief</div>
<p className="text-sm text-slate-300 leading-relaxed">"Try the 3-3-3 rule. Name 3 things you see, 3 sounds you hear, and move 3 parts of your body. This grounds your nervous system instantly."</p>
</div>
</div>
</div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-orange-950/50 text-orange-400 flex items-center justify-center border border-orange-900/30">
<iconify-icon icon="solar:bomb-emoji-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Overwhelmed</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-orange-900/30 bg-orange-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wide">Strategy</div>
<p className="text-sm text-slate-300 leading-relaxed">"Stop looking at the whole mountain. Focus only on the next 20 minutes. What is the single smallest step you can take right now?"</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Balanced State
                    </div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-900/30">
<iconify-icon icon="solar:spa-flower-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Calm</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-emerald-900/30 bg-emerald-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Maintenance</div>
<p className="text-sm text-slate-300 leading-relaxed">"This is your equilibrium. It's a perfect time to reflect or tackle deep work while your cortisol levels are low. Enjoy the peace."</p>
</div>
</div>
</div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-blue-950/50 text-blue-400 flex items-center justify-center border border-blue-900/30">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Focused</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-blue-900/30 bg-blue-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Optimization</div>
<p className="text-sm text-slate-300 leading-relaxed">"You are in flow. Eliminate distractions now to maximize this state. Set a timer for 50 minutes and go."</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Low Intensity
                    </div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-indigo-950/50 text-indigo-400 flex items-center justify-center border border-indigo-900/30">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Exhausted</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-indigo-900/30 bg-indigo-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wide">Self-Care</div>
<p className="text-sm text-slate-300 leading-relaxed">"Productivity requires recovery. You have permission to rest without guilt. Your brain consolidates learning during sleep."</p>
</div>
</div>
</div>

<div className="mood-card group h-48 w-full cursor-pointer perspective-1000" onclick="this.classList.toggle('flipped')">
<div className="mood-inner relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl">

<div className="absolute w-full h-full backface-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 transition-colors">
<div className="w-12 h-12 rounded-full bg-violet-950/50 text-violet-400 flex items-center justify-center border border-violet-900/30">
<iconify-icon icon="solar:cloud-rain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200">Feeling Down</h3>
<p className="text-xs text-slate-500">Click to reveal insight</p>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-violet-900/30 bg-violet-950/20 p-6 flex flex-col justify-center items-center text-center">
<div className="text-xs font-semibold text-violet-400 mb-2 uppercase tracking-wide">Compassion</div>
<p className="text-sm text-slate-300 leading-relaxed">"Emotions are like weather; they pass. Be gentle with yourself today. Consider a short walk or messaging a friend."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-100">Comprehensive care ecosystem</h2>
<p className="text-slate-500">Integrating technology with human empathy to provide a seamless support structure specifically tailored for university challenges.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-indigo-800 hover:bg-indigo-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-indigo-400">
<iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Tele-Counseling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Secure, encrypted video and chat sessions with licensed university psychologists available 24/7.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-teal-800 hover:bg-teal-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-teal-400">
<iconify-icon icon="solar:graph-up-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Progress Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Data-driven insights into mood patterns and stress triggers to help students build resilience.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-rose-800 hover:bg-rose-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-rose-400">
<iconify-icon icon="solar:heart-pulse-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Crisis Intervention</h3>
<p className="text-sm text-slate-500 leading-relaxed">One-touch SOS protocols that immediately connect students with campus emergency services.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-amber-800 hover:bg-amber-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-amber-400">
<iconify-icon icon="solar:library-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Resource Library</h3>
<p className="text-sm text-slate-500 leading-relaxed">Curated articles, guided meditations, and podcasts focusing on exam stress and social anxiety.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-blue-800 hover:bg-blue-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-blue-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Peer Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Anonymous, moderated forums to connect with fellow students facing similar academic pressures.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-slate-950 border-slate-800 hover:border-purple-800 hover:bg-purple-950/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform bg-slate-900 border-slate-700 text-purple-400">
<iconify-icon icon="solar:calendar-mark-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Smart Scheduling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamlessly book appointments with campus counselors that fit around your class timetable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 font-medium text-sm text-indigo-400">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span>Private &amp; Secure</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100">Your personal mental health companion.</h2>
<p className="text-lg text-slate-500">We understand that university life is demanding. Our platform is designed to be a quiet, non-intrusive safe harbor where you can decompress, analyze your well-being, and seek help without stigma.</p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-400">End-to-end encryption for all chat and video sessions.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-400">Anonymous mode for initial consultations and peer groups.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-400">Integration with university health services for seamless care referrals.</span>
</li>
</ul>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative rounded-2xl shadow-2xl border overflow-hidden bg-black shadow-slate-900/50 border-slate-800">
<div className="px-4 py-3 border-b flex items-center gap-2 bg-slate-950 border-slate-900">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="mx-auto text-xs font-medium text-slate-600">mindflow.edu/dashboard</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="text-lg font-semibold text-slate-100">Hello, Alex</h4>
<p className="text-xs text-slate-500">Computer Science • Year 2</p>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-900 text-slate-400 border border-slate-800">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 border rounded-xl bg-indigo-950/20 border-indigo-900/40">
<div className="mb-2 text-indigo-400">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100">14:00</div>
<div className="text-xs font-medium text-indigo-300/70">Session with Dr. Richards</div>
</div>
<div className="p-4 border rounded-xl shadow-sm bg-slate-950 border-slate-800">
<div className="text-emerald-500 mb-2">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100">Good</div>
<div className="text-xs font-medium text-slate-600">Avg. Weekly Mood</div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs font-semibold uppercase tracking-wider text-slate-600">Recommended</div>
<div className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors border-slate-900 hover:bg-slate-900 hover:border-slate-800">
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-orange-950/30 text-orange-400 border border-orange-900/20">
<iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Exam Anxiety Guided Audio</div>
<div className="text-xs text-slate-500">10 mins • Meditation</div>
</div>
<div className="ml-auto text-slate-600">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden relative bg-slate-100 text-black">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="mb-6 text-indigo-600" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">"Before MindFlow, I felt overwhelmed by deadlines and isolated. Being able to anonymously track my mood and easily book a counselor without jumping through administrative hoops changed my entire semester."</h3>
<div className="flex items-center justify-center gap-4">
<div className="text-right">
<div className="font-semibold text-black">Sarah J.</div>
<div className="text-sm text-slate-600">Engineering Student</div>
</div>
<div className="w-px h-10 bg-slate-300"></div>
<div className="text-left">
<div className="font-semibold text-black">University of Tech</div>
<div className="text-sm text-slate-600">Class of 2024</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative border-t border-slate-900">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-100">Ready to prioritize your well-being?</h2>
<p className="text-slate-500 text-lg">Join over 10,000 students using MindFlow to navigate the psychological challenges of higher education with confidence.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="px-5 py-3 rounded-lg border w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-sm bg-slate-900 border-slate-800 text-slate-200" placeholder="Enter your university email" type="email"/>
<button className="font-medium px-6 py-3 rounded-lg transition-colors text-sm bg-slate-100 text-black hover:bg-white">Get Early Access</button>
</div>
<p className="text-xs text-slate-600">Institutional licenses available for University Admin. <a className="underline hover:text-slate-400" href="#">Contact Sales</a>.</p>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-black border-slate-900">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-100 text-black">
<iconify-icon icon="solar:mind-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-100">MINDFLOW</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Digital Mental Health and Psychological Support System designed specifically for the higher education sector.
                    </p>
<div className="flex gap-4 text-slate-600">
<a className="hover:text-slate-100" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-100" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-100" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 text-slate-100">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="transition-colors hover:text-slate-100" href="#">Students</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Counselors</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Universities</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 text-slate-100">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="transition-colors hover:text-slate-100" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Crisis Hotline</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Mental Health Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 text-slate-100">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="transition-colors hover:text-slate-100" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-slate-100" href="#">Data Security</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-900">
<p className="text-xs text-slate-600">© 2023 MindFlow Systems. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-medium">System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
