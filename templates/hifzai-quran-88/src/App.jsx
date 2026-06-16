import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-black/80 border-slate-800/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-slate-100">hifzAI</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-100" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-100" href="#features">Features</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-black bg-emerald-400 hover:bg-emerald-300" href="#early-access">
                        Get Early Access
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 text-slate-500 focus:outline-none hover:text-slate-100">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b to-transparent -z-10 from-emerald-950/50"></div>
<div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl -z-10 bg-emerald-800/30"></div>
<div className="absolute top-40 left-10 w-96 h-96 rounded-full blur-3xl -z-10 bg-blue-900/30"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8 bg-emerald-950 border-emerald-800/60 text-emerald-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Waitlist now open for early testers
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto leading-tight text-slate-100">
                Memorizing the Quran alone shouldn’t feel <span className="text-emerald-400">uncertain.</span>
</h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Your personal, AI-powered Hifz companion. Get real-time feedback on your recitation, spot mistakes instantly, and build confidence without waiting for a teacher.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
<form className="w-full relative flex items-center">
<input className="w-full pl-5 pr-36 py-3.5 border rounded-full text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm transition-shadow placeholder:text-slate-400 bg-black border-slate-800/80 text-slate-100" placeholder="Enter your email address" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 text-sm font-medium rounded-full transition-colors flex items-center gap-2 bg-slate-100 text-black hover:bg-slate-200" type="submit">
                        Get Access
                    </button>
</form>
</div>

<div className="relative mx-auto max-w-2xl mt-12 perspective-1000">
<div className="rounded-2xl shadow-xl border p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out relative z-10 text-left bg-black shadow-slate-800/50 border-slate-800/60">
<div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-900">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden bg-emerald-950 text-emerald-400">
<iconify-icon className="text-xl z-10" icon="solar:microphone-2-linear"></iconify-icon>
<div className="absolute inset-0 animate-pulse z-0 bg-emerald-900"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-100">Surah Al-Fatihah</p>
<p className="text-xs font-medium text-emerald-400">Listening...</p>
</div>
</div>
<div className="flex gap-1">
<span className="w-1 h-3 rounded-full animate-[bounce_1s_infinite] bg-emerald-600"></span>
<span className="w-1 h-4 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
<span className="w-1 h-2 rounded-full animate-[bounce_1s_infinite_0.4s] bg-emerald-700"></span>
</div>
</div>
<div className="space-y-6">

<div className="arabic-text text-right text-2xl md:text-3xl leading-[2.5] text-slate-200" dir="rtl">
                            ٱلْحَمْدُ لِلَّهِ رَبِّ 
                            <span className="relative inline-block group">
<span className="rounded-md px-1 py-0.5 border-b-2 transition-colors bg-red-950 text-red-300 border-red-800">ٱلْعَـٰلَمِينَ</span>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-100 transform scale-100 transition-all flex items-center gap-1.5 bg-slate-100 text-black">
<iconify-icon className="text-red-600" icon="solar:danger-circle-linear"></iconify-icon>
                                    Elongation (Madd) missed
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-100"></div>
</div>
</span>
</div>

<div className="border rounded-xl p-4 flex items-start gap-3 bg-slate-950 border-slate-900">
<div className="mt-0.5 text-slate-600">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-300">Correction detected</p>
<p className="text-xs text-slate-500 mt-1">You recited the word correctly, but missed the required elongation (Madd Arid Li-Sukun). Try holding it for 2-6 counts.</p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-2xl shadow-lg border transform -rotate-2 -z-10 translate-y-4 scale-[0.98] bg-emerald-950/50 border-emerald-900/50"></div>
</div>
</div>
</section>

<section className="py-20 border-t bg-black border-slate-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-100">The journey of Hifz is beautiful, but often solitary.</h2>
<p className="text-base text-slate-500">Memorizing without guidance leads to ingrained mistakes and lost motivation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border transition-colors bg-slate-950/50 border-slate-900/80 hover:bg-slate-950">
<div className="w-12 h-12 rounded-xl border shadow-sm flex items-center justify-center mb-6 bg-black border-slate-800/60 text-slate-400">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">Hard to find time</h3>
<p className="text-sm text-slate-500 leading-relaxed">Busy schedules make it difficult to commit to regular classes or find a teacher available when you are.</p>
</div>

<div className="p-8 rounded-2xl border transition-colors bg-slate-950/50 border-slate-900/80 hover:bg-slate-950">
<div className="w-12 h-12 rounded-xl border shadow-sm flex items-center justify-center mb-6 bg-black border-slate-800/60 text-slate-400">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">Unnoticed mistakes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Practicing alone means you might memorize words or tajweed rules incorrectly without realizing it.</p>
</div>

<div className="p-8 rounded-2xl border transition-colors bg-slate-950/50 border-slate-900/80 hover:bg-slate-950">
<div className="w-12 h-12 rounded-xl border shadow-sm flex items-center justify-center mb-6 bg-black border-slate-800/60 text-slate-400">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">Inconsistent revision</h3>
<p className="text-sm text-slate-500 leading-relaxed">Without structured feedback, keeping track of weak spots and maintaining previous memorization is overwhelming.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-950" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-medium text-sm tracking-wide uppercase mb-2 block text-emerald-400">The Solution</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-100">Practice perfectly, every time.</h2>
<p className="text-base text-slate-500">hifzAI listens, understands, and guides you just like a real teacher would.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 z-0 bg-slate-800"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="text-center group">
<div className="w-16 h-16 mx-auto rounded-2xl border shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 bg-black border-slate-800 text-slate-300">
<iconify-icon className="text-3xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">1. Recite</h3>
<p className="text-sm text-slate-500 max-w-xs mx-auto">Open the app, select your surah, and simply start reciting from memory.</p>
</div>

<div className="text-center group">
<div className="w-16 h-16 mx-auto rounded-2xl border border-emerald-500 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 bg-emerald-400 shadow-emerald-800 text-black">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">2. AI Detects</h3>
<p className="text-sm text-slate-500 max-w-xs mx-auto">Our specialized AI analyzes your voice in real-time, matching it against proper tajweed.</p>
</div>

<div className="text-center group">
<div className="w-16 h-16 mx-auto rounded-2xl border shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 bg-black border-slate-800 text-slate-300">
<iconify-icon className="text-3xl" icon="solar:chart-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-100">3. Improve</h3>
<p className="text-sm text-slate-500 max-w-xs mx-auto">Get immediate visual and audio feedback highlighting exactly what to correct.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-black" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2 space-y-6">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-emerald-950 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:text-selection-linear"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">Word-level mistake detection.</h2>
<p className="text-base text-slate-500 leading-relaxed">
                        General feedback isn't enough for Hifz. hifzAI highlights the exact letter or word where a mistake occurred, whether it's a pronunciation error, missed word, or tajweed ruling.
                    </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Identifies missed words instantly
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Catches hidden Harakah (vowel) mistakes
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr rounded-3xl transform rotate-3 scale-105 -z-10 from-slate-900 to-slate-950"></div>
<div className="border shadow-sm rounded-2xl p-6 md:p-8 bg-black border-slate-800/80">
<div className="space-y-4">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium uppercase tracking-wider text-slate-600">Live Recitation</span>
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="arabic-text text-right text-2xl leading-loose text-slate-700" dir="rtl">
<span className="text-slate-200">قُلْ أَعُوذُ بِرَبِّ</span>
<span className="px-1 rounded border-b bg-red-950 text-red-300 border-red-800">ٱلنَّاسِ</span>
<span className="text-slate-700"> مَلِكِ ٱلنَّاسِ</span>
</div>
<div className="mt-4 text-xs py-2 px-3 rounded-lg border flex items-center gap-2 bg-red-950 text-red-300 border-red-900">
<iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon>
                                "An-Naas" requires a 2-count Ghunnah.
                            </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2 space-y-6">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-slate-900 text-slate-300">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">Practice anytime, anywhere.</h2>
<p className="text-base text-slate-500 leading-relaxed">
                        Don't let a busy schedule pause your memorization. Whether it's post-Fajr, during your commute, or late at night, your AI companion is always ready to listen.
                    </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-lg text-slate-600" icon="solar:check-circle-linear"></iconify-icon>
                            No scheduling required
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-lg text-slate-600" icon="solar:check-circle-linear"></iconify-icon>
                            Private, judgment-free environment
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-bl rounded-3xl transform -rotate-3 scale-105 -z-10 from-emerald-900/50 to-slate-950"></div>
<div className="border shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center min-h-[250px] bg-black border-slate-800/80">
<div className="w-20 h-20 rounded-full border-4 flex items-center justify-center shadow-sm mb-4 relative border-emerald-950 bg-black">
<div className="absolute inset-0 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"></div>
<iconify-icon className="text-2xl text-emerald-400" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-100">Listening to Surah Yaseen...</p>
<p className="text-xs text-slate-500 mt-1">Ayah 12</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y bg-slate-950 border-slate-900">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="flex justify-center -space-x-3 mb-6">
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium bg-slate-800 border-black text-slate-400">A</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium bg-emerald-800 border-black text-emerald-200">Y</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium bg-blue-800 border-black text-blue-200">M</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium bg-slate-200 border-black text-black">+</div>
</div>
<p className="text-base font-medium text-slate-300">Join early believers building the future of Hifz.</p>
<p className="text-sm text-slate-500 mt-2">Built specifically for students of knowledge.</p>
</div>
</section>

<section className="py-20 bg-black" id="early-access">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl bg-slate-100 shadow-slate-100/20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">Start memorizing with confidence today.</h2>
<p className="text-base mb-10 text-slate-600">We are currently in private beta. Join the waitlist to get early access and help shape the future of Quranic learning.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-5 py-3.5 border rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm bg-slate-200/50 border-slate-300 text-black" placeholder="Enter your email" required="" type="email"/>
<button className="px-6 py-3.5 hover:bg-emerald-500 text-sm font-medium rounded-xl transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500 bg-emerald-400 text-black" type="submit">
                            Join Waitlist
                        </button>
</form>
<p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 mt-auto bg-black border-slate-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-slate-100">hifzAI</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="transition-colors hover:text-slate-100" href="#">About</a>
<a className="transition-colors hover:text-slate-100" href="#">Privacy</a>
<a className="transition-colors hover:text-slate-100" href="#">Terms</a>
<a className="transition-colors hover:text-slate-100" href="mailto:hello@hifzai.com">Contact</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 hifzAI. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
