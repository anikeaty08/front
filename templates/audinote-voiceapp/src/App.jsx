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



    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-[var(--cream-200)]');
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-[var(--cream-200)]');
        nav.classList.add('border-transparent');
      }
    });
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.08)_0%,transparent_70%)] blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-[radial-gradient(circle,rgba(107,128,104,0.08)_0%,transparent_70%)] blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
<div className="absolute top-[40%] left-[20%] w-[20rem] h-[20rem] rounded-full bg-[radial-gradient(circle,rgba(159,107,107,0.05)_0%,transparent_70%)] blur-2xl"></div>
</div>

<div className="fixed inset-0 z-[1] opacity-[0.35] pointer-events-none mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-transparent" id="nav">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 lg:py-5 px-4 sm:px-6">
<a className="group flex items-center gap-3 no-underline relative z-10" href="#top">
<div className="w-10 h-10 rounded-xl shadow-lg shadow-[rgba(15,23,42,0.15)] flex items-center justify-center bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
<svg className="w-5 h-5 text-[var(--gold-400)] drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="M2 17l10 5 10-5"></path>
<path d="M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="text-[1.35rem] font-semibold tracking-tight" style={{fontFamily: 'var(--font-serif)', color: 'var(--navy-900)'}}>
          Audi<span className="text-[var(--gold-600)] relative">note
            <svg className="absolute -bottom-1 left-0 w-full h-[3px] text-[var(--gold-400)] opacity-40" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</span>
</a>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[var(--navy-600)] hover:text-[var(--navy-900)] transition-colors" href="#features">How it works</a>
<a className="relative overflow-hidden inline-flex items-center rounded-lg bg-[var(--navy-900)] text-white text-sm font-medium px-5 py-2.5 shadow-md shadow-[rgba(30,41,59,0.2)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(30,41,59,0.3)] hover:-translate-y-0.5 group" href="#signup">
<span className="relative z-10">Join the Beta</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-24 sm:pt-28 lg:pt-36" id="top">

<section className="min-h-[85vh] flex items-center py-10 sm:py-14 lg:py-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">

<div className="animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
<div className="inline-flex items-center gap-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--cream-300)] text-[0.8rem] font-medium text-[var(--navy-700)] px-4 py-1.5 mb-6 shadow-sm hover:bg-white hover:border-[var(--gold-400)] transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage-500)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--sage-600)]"></span>
</span>
              Now in private beta for pastors
            </div>
<h1 className="text-[clamp(2.75rem,4.5vw,4rem)] leading-[1.1] font-semibold tracking-tight mb-6 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
              From sermon thoughts to <span className="transparent-text bg-clip-text bg-gradient-to-r from-[var(--gold-600)] via-[var(--gold-500)] to-[var(--gold-600)] italic pr-1">polished outline</span> in minutes
            </h1>
<p className="text-lg text-[var(--navy-600)] max-w-lg mb-10 leading-relaxed">
              The voice-first app for sermon prep. Dictate freely while walking or driving—Audinote automatically structures your theology, scripture, and illustrations.
            </p>
<div className="flex flex-wrap gap-4 items-center">
<a className="group inline-flex items-center gap-2.5 rounded-xl bg-[var(--navy-900)] text-white text-[1.05rem] font-medium px-7 py-4 shadow-lg shadow-[rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[var(--navy-800)] relative overflow-hidden" href="#signup">
<span className="relative z-10">Get Early Access</span>
<span className="icon-[lucide--arrow-right] w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" style={{strokeWidth: '1.5'}}></span>

<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</a>
<a className="group inline-flex items-center gap-2.5 rounded-xl bg-white border border-[var(--cream-300)] text-[1.05rem] font-medium text-[var(--navy-700)] px-7 py-4 shadow-sm transition-all duration-300 hover:border-[var(--navy-300)] hover:bg-[var(--cream-50)] hover:-translate-y-0.5" href="#features">
<span className="icon-[lucide--play-circle] w-5 h-5 text-[var(--gold-600)] group-hover:scale-110 transition-transform" style={{strokeWidth: '1.5'}}></span>
                See it in action
              </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs font-medium text-[var(--navy-600)] opacity-80">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-[var(--navy-100)] flex items-center justify-center text-[var(--navy-700)]">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-[var(--sage-100)] flex items-center justify-center text-[var(--sage-700)]">RL</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-[var(--gold-100)] flex items-center justify-center text-[var(--gold-700)]">MK</div>
</div>
<p>Trusted by 200+ beta pastors</p>
</div>
</div>

<div className="relative animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 group perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-[var(--gold-400)] via-[var(--sage-500)] to-[var(--navy-400)] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
<div className="bg-white/90 backdrop-blur-md rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-white/50 p-6 sm:p-8 relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] z-10">

<div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--gold-400)] via-[var(--sage-500)] to-[var(--rose-500)]"></div>

<div className="flex items-center justify-between mb-8 mt-2">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[var(--gold-500)] to-[var(--gold-600)] shadow-lg shadow-[rgba(201,169,98,0.3)] text-white text-xl font-semibold transform transition-transform group-hover:rotate-6" style={{fontFamily: 'var(--font-serif)'}}>
                    P
                  </div>
<div>
<div className="text-base font-bold text-[var(--navy-900)]">Sunday Sermon Notes</div>
<div className="text-xs text-[var(--navy-600)] font-medium mt-0.5">Romans 8 – Life in the Spirit</div>
</div>
</div>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-[var(--navy-200)]"></span>
<span className="w-2 h-2 rounded-full bg-[var(--navy-200)]"></span>
<span className="w-2 h-2 rounded-full bg-[var(--navy-200)]"></span>
</div>
</div>

<div className="bg-[var(--cream-100)] border border-[var(--cream-200)] rounded-2xl p-6 mb-6 relative overflow-hidden group-hover:border-[var(--gold-200)] transition-colors">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
</span>
<span className="text-xs font-semibold text-[var(--navy-700)] tracking-wide uppercase">Recording</span>
</div>
<span className="text-xs font-mono text-[var(--navy-500)]">02:34</span>
</div>

<div aria-label="Audio recording waveform" className="flex items-center justify-center gap-[4px] h-14 mb-4" role="img">
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.2s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.1s_ease-in-out_infinite]" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.4s_ease-in-out_infinite]" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--gold-600)] to-[var(--gold-400)] animate-[wave_0.9s_ease-in-out_infinite]" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.3s_ease-in-out_infinite]" style={{animationDelay: '0.4s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.2s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--gold-600)] to-[var(--gold-400)] animate-[wave_1.5s_ease-in-out_infinite]" style={{animationDelay: '0.6s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.1s_ease-in-out_infinite]" style={{animationDelay: '0.7s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.3s_ease-in-out_infinite]" style={{animationDelay: '0.8s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.2s_ease-in-out_infinite]" style={{animationDelay: '0.9s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1s_ease-in-out_infinite]" style={{animationDelay: '1.0s'}}></div>
<div className="w-1.5 rounded-full bg-gradient-to-t from-[var(--navy-800)] to-[var(--navy-600)] animate-[wave_1.4s_ease-in-out_infinite]" style={{animationDelay: '1.1s'}}></div>
</div>
<p className="text-[0.95rem] leading-[1.65] text-[var(--navy-800)] relative z-10" style={{fontFamily: 'var(--font-serif)'}}>
                  “Today we’re in <span className="bg-[rgba(201,169,98,0.2)] text-[var(--gold-600)] font-semibold px-1 py-0.5 rounded cursor-pointer hover:bg-[rgba(201,169,98,0.3)] transition">Romans 8:1–4</span>, where Paul reminds us there is now no condemnation. Notice how this flows from his argument in chapter 7, yet the <span className="border-b-2 border-[var(--sage-500)] text-[var(--sage-700)] font-medium">indwelling Spirit</span> changes everything.”
                </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--cream-50)] transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-[var(--gold-200)] flex items-center justify-center text-[var(--gold-600)]">
<span className="icon-[lucide--book-open] w-3.5 h-3.5" style={{strokeWidth: '2'}}></span>
</div>
<span className="text-xs text-[var(--navy-600)] font-medium">Romans 8 linked to workspace</span>
</div>
<span className="icon-[lucide--check] w-3.5 h-3.5 text-[var(--sage-500)]"></span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--cream-50)] transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-[var(--sage-200)] flex items-center justify-center text-[var(--sage-600)]">
<span className="icon-[lucide--sparkles] w-3.5 h-3.5" style={{strokeWidth: '2'}}></span>
</div>
<span className="text-xs text-[var(--navy-600)] font-medium">"Indwelling" term corrected</span>
</div>
<span className="icon-[lucide--check] w-3.5 h-3.5 text-[var(--sage-500)]"></span>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-2.5 absolute -right-6 top-1/4 bg-white/95 backdrop-blur shadow-xl shadow-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-xs font-semibold text-[var(--navy-800)] animate-[float_4s_ease-in-out_infinite] z-20 border border-white/40">
<div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] text-white shadow-sm">
<span className="icon-[lucide--library] w-3.5 h-3.5"></span>
</div>
<span>Commentary Auto-Linked</span>
</div>
<div className="hidden md:flex items-center gap-2.5 absolute -left-8 bottom-1/3 bg-white/95 backdrop-blur shadow-xl shadow-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-xs font-semibold text-[var(--navy-800)] animate-[float_5s_ease-in-out_infinite_1s] z-20 border border-white/40">
<div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--sage-500)] to-[var(--sage-600)] text-white shadow-sm">
<span className="icon-[lucide--wand-2] w-3.5 h-3.5"></span>
</div>
<span>Theology Check Active</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[var(--navy-950)] text-white py-20 sm:py-24 lg:py-32 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
<h2 className="text-[clamp(2rem,3.5vw,3rem)] tracking-tight font-medium mb-4 leading-tight" style={{fontFamily: 'var(--font-serif)'}}>
            Sermon prep shouldn't feel like<br/> a <span className="text-[var(--gold-400)] italic">battle against distraction</span>
</h2>
<p className="text-lg text-[var(--navy-200)] font-light leading-relaxed">
            The work of capturing ideas, organizing notes, and turning them into clear outlines often fights against the rest of ministry life.
          </p>
</div>
<div className="grid gap-6 md:gap-8 md:grid-cols-3">

<article className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-[var(--gold-500)]/30 hover:shadow-[0_20px_40px_-15px_rgba(212,168,83,0.1)]">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border border-white/10 group-hover:scale-110 transition-transform duration-300">
<span className="icon-[lucide--timer] w-6 h-6 text-[var(--gold-400)]" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3 text-[var(--cream-100)]">Great thoughts, lost forever</h3>
<p className="text-sm leading-relaxed text-[var(--navy-200)] group-hover:text-white transition-colors">
              Ideas come in the car or hospital waiting room. By the time you're at your desk, the specific wording and weight you felt is gone.
            </p>
</article>

<article className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-[var(--sage-500)]/30 hover:shadow-[0_20px_40px_-15px_rgba(107,128,104,0.1)]">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border border-white/10 group-hover:scale-110 transition-transform duration-300">
<span className="icon-[lucide--spell-check-2] w-6 h-6 text-[var(--sage-400)]" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3 text-[var(--cream-100)]">Autocorrect vs. Theology</h3>
<p className="text-sm leading-relaxed text-[var(--navy-200)] group-hover:text-white transition-colors">
              Generic dictation apps mangle theological vocabulary. Fixing "eschatological" and "sanctification" later breaks your flow.
            </p>
</article>

<article className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-[var(--rose-500)]/30 hover:shadow-[0_20px_40px_-15px_rgba(159,107,107,0.1)]">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border border-white/10 group-hover:scale-110 transition-transform duration-300">
<span className="icon-[lucide--layout-list] w-6 h-6 text-[var(--rose-400)]" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3 text-[var(--cream-100)]">Notes everywhere, outlines nowhere</h3>
<p className="text-sm leading-relaxed text-[var(--navy-200)] group-hover:text-white transition-colors">
              Voice memos and random papers don't sort themselves. You remember saying it, but can't find it when it's time to write.
            </p>
</article>
</div>
</div>
</section>

<section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden" id="features">

<div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-[var(--gold-200)] opacity-20 blur-[80px]"></div>
<div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[var(--sage-200)] opacity-20 blur-[80px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
<h2 className="text-[clamp(2.5rem,3.5vw,3rem)] tracking-tight font-medium mb-4 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
            Built for the work of <br/><span className="italic text-[var(--navy-600)]">preaching and pastoring</span>
</h2>
<p className="text-lg text-[var(--navy-600)]">
            Audinote listens like a fellow pastor, not a generic note app—so your ideas flow naturally and turn into something preachable.
          </p>
</div>

<div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center mb-24 lg:mb-32">
<div className="max-w-xl order-2 lg:order-1">
<div className="inline-flex items-center rounded-md bg-[var(--cream-200)] border border-[var(--cream-300)] text-[0.7rem] font-bold text-[var(--navy-700)] uppercase tracking-widest mb-4 px-3 py-1">
              Voice-First Capture
            </div>
<h3 className="text-[2rem] leading-tight tracking-tight font-medium mb-6 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
              Dictate like you preach. <br/>We’ll handle the theology.
            </h3>
<p className="text-[1.05rem] text-[var(--navy-600)] mb-8 leading-relaxed">
              Speak in full sentences, quote Scripture, and use doctrinal language freely. Audinote is tuned to ministry vocabulary—so your transcripts sound like your pulpit, not your phone.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage-100)] flex items-center justify-center text-[var(--sage-600)] group-hover:bg-[var(--sage-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Auto-detects and formats references like “Romans eight, verse one”.
                </span>
</li>
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage-100)] flex items-center justify-center text-[var(--sage-600)] group-hover:bg-[var(--sage-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Corrects theological terms using a curated ministry dictionary.
                </span>
</li>
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage-100)] flex items-center justify-center text-[var(--sage-600)] group-hover:bg-[var(--sage-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Groups recordings automatically by passage, series, and date.
                </span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative">

<div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-100)] to-transparent rounded-[2.5rem] transform rotate-3 scale-105"></div>
<div className="bg-white rounded-[2rem] shadow-2xl shadow-[rgba(15,23,42,0.08)] border border-[var(--cream-200)] overflow-hidden relative z-10 transition-transform hover:-translate-y-1 duration-500">
<div className="bg-[var(--navy-900)] text-white px-6 py-4 flex items-center justify-between border-b border-[var(--navy-800)]">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></span>
<span className="text-sm font-medium tracking-wide">Live Processing</span>
</div>
<span className="text-white/60 text-xs uppercase tracking-wider font-semibold">Dictionary Active</span>
</div>
<div className="p-6 sm:p-8 bg-[var(--cream-50)]">
<div className="space-y-3">
<div className="group flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-[var(--cream-200)] hover:border-[var(--gold-300)] transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[var(--navy-50)] text-[var(--navy-600)] flex items-center justify-center font-serif font-bold italic">E</div>
<div>
<div className="text-sm font-semibold text-[var(--navy-900)]">Eschatological</div>
<div className="text-[0.7rem] font-mono text-[var(--navy-500)]">Audio input: "es-kuh-tah..."</div>
</div>
</div>
<span className="text-[0.65rem] font-bold uppercase rounded bg-[var(--gold-100)] text-[var(--gold-700)] px-2 py-1">Corrected</span>
</div>
<div className="group flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-[var(--cream-200)] hover:border-[var(--gold-300)] transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[var(--navy-50)] text-[var(--navy-600)] flex items-center justify-center font-serif font-bold italic">H</div>
<div>
<div className="text-sm font-semibold text-[var(--navy-900)]">Hypostatic union</div>
<div className="text-[0.7rem] font-mono text-[var(--navy-500)]">Context: Christology</div>
</div>
</div>
<span className="text-[0.65rem] font-bold uppercase rounded bg-[var(--sage-100)] text-[var(--sage-700)] px-2 py-1">Context Match</span>
</div>
<div className="mt-6 pt-4 border-t border-dashed border-[var(--cream-300)] flex items-center gap-3 animate-pulse">
<span className="icon-[lucide--loader-2] w-4 h-4 text-[var(--navy-500)] animate-spin"></span>
<span className="text-xs font-medium text-[var(--navy-600)]">Processing: "perichoresis of the Trinity..."</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center mb-24 lg:mb-32">
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-bl from-[var(--gold-100)] to-transparent rounded-[2.5rem] transform -rotate-2 scale-105"></div>
<div className="bg-white rounded-[2rem] shadow-2xl shadow-[rgba(15,23,42,0.08)] border border-[var(--cream-200)] p-6 sm:p-8 relative z-10 transition-transform hover:-translate-y-1 duration-500 group">
<div className="text-xs font-bold uppercase tracking-widest text-[var(--navy-400)] mb-4 flex justify-between items-center">
<span>Raw Voice Input</span>
<span className="icon-[lucide--arrow-down] w-4 h-4 animate-bounce"></span>
</div>
<div className="bg-[var(--cream-50)] rounded-xl text-sm italic text-[var(--navy-600)] p-4 mb-6 border border-dashed border-[var(--navy-200)] leading-relaxed">
                “Okay, thinking three movements... start with the weight of condemnation, then the shock of 'now' in verse 1... ending with the security of being 'in Christ'.”
              </div>
<div className="relative">
<div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold-300)] to-[var(--cream-200)]"></div>
<h4 className="text-xl font-medium mb-2 pl-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--navy-900)'}}>
                  Generated Outline Draft
                </h4>
<div className="text-xs font-semibold text-[var(--gold-600)] uppercase tracking-wide mb-4 pl-4">
                  Romans 8:1–4 • Life in the Spirit
                </div>
<ul className="space-y-3 pl-4">
<li className="flex gap-3 text-sm text-[var(--navy-700)] opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] delay-100">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--navy-800)] text-white flex items-center justify-center text-[0.65rem] font-bold shadow-md">1</span>
<span><span className="font-bold text-[var(--navy-900)]">The Weight:</span> Understanding "condemnation" as more than vague guilt (v.1a).</span>
</li>
<li className="flex gap-3 text-sm text-[var(--navy-700)] opacity-0 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] delay-200">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--navy-800)] text-white flex items-center justify-center text-[0.65rem] font-bold shadow-md">2</span>
<span><span className="font-bold text-[var(--navy-900)]">The Word:</span> The temporal shock of "NOW" in redemptive history (v.1b–3).</span>
</li>
<li className="flex gap-3 text-sm text-[var(--navy-700)] opacity-0 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards] delay-300">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--navy-800)] text-white flex items-center justify-center text-[0.65rem] font-bold shadow-md">3</span>
<span><span className="font-bold text-[var(--navy-900)]">The Walk:</span> Life "in the Spirit" as the new operating system (v.4).</span>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-xl">
<div className="inline-flex items-center rounded-md bg-[var(--cream-200)] border border-[var(--cream-300)] text-[0.7rem] font-bold text-[var(--navy-700)] uppercase tracking-widest mb-4 px-3 py-1">
              Sermon-Aware AI
            </div>
<h3 className="text-[2rem] leading-tight tracking-tight font-medium mb-6 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
              Turn scattered voice notes <br/>into a <span className="text-[var(--gold-600)]">preachable outline</span>
</h3>
<p className="text-[1.05rem] text-[var(--navy-600)] mb-8 leading-relaxed">
              When you’re ready, Audinote suggests a first-pass outline organized around the text, not clichés. It preserves your unique voice while giving you a structure to build on.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gold-100)] flex items-center justify-center text-[var(--gold-600)] group-hover:bg-[var(--gold-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Identifies movements, transitions, and applications from your audio.
                </span>
</li>
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gold-100)] flex items-center justify-center text-[var(--gold-600)] group-hover:bg-[var(--gold-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Keeps your tone and phrasing—no generic AI-sounding text.
                </span>
</li>
<li className="flex items-start gap-3 group">
<span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gold-100)] flex items-center justify-center text-[var(--gold-600)] group-hover:bg-[var(--gold-500)] group-hover:text-white transition-colors">
<span className="icon-[lucide--check] w-3 h-3"></span>
</span>
<span className="text-[0.95rem] text-[var(--navy-700)]">
                  Fully editable—you are the preacher, Audinote is just the scribe.
                </span>
</li>
</ul>
</div>
</div>

<div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">
<div className="max-w-xl order-2 lg:order-1">
<div className="inline-flex items-center rounded-md bg-[var(--cream-200)] border border-[var(--cream-300)] text-[0.7rem] font-bold text-[var(--navy-700)] uppercase tracking-widest mb-4 px-3 py-1">
              Prayer &amp; People
            </div>
<h3 className="text-[2rem] leading-tight tracking-tight font-medium mb-6 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
              Keep prayer lists and <br/>pastoral care in one place
            </h3>
<p className="text-[1.05rem] text-[var(--navy-600)] mb-8 leading-relaxed">
              Use your voice to capture prayer requests, hospital visits, and counseling notes. Link them to sermons or specific people so you never forget to follow up.
            </p>
<div className="flex gap-4">
<div className="p-4 rounded-xl bg-[var(--cream-100)] border border-[var(--cream-200)] flex flex-col items-center justify-center w-24 text-center">
<span className="text-2xl font-bold text-[var(--navy-800)] mb-1">ACTS</span>
<span className="text-[0.65rem] uppercase tracking-wider text-[var(--navy-500)]">Framework</span>
</div>
<div className="p-4 rounded-xl bg-[var(--cream-100)] border border-[var(--cream-200)] flex flex-col items-center justify-center w-24 text-center">
<span className="text-2xl font-bold text-[var(--navy-800)] mb-1">Tags</span>
<span className="text-[0.65rem] uppercase tracking-wider text-[var(--navy-500)]">Smart Sort</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">

<div className="absolute inset-0 bg-gradient-to-tl from-[var(--sage-100)] to-transparent rounded-[2.5rem] transform rotate-2 scale-105"></div>
<div className="bg-white rounded-[2rem] shadow-2xl shadow-[rgba(15,23,42,0.08)] border border-[var(--cream-200)] p-6 sm:p-8 relative z-10 transition-transform hover:-translate-y-1 duration-500">
<div className="flex items-center justify-between mb-6">
<div>
<div className="text-xs font-bold uppercase tracking-widest text-[var(--navy-500)] mb-1">Prayer Journal</div>
<div className="text-base font-semibold text-[var(--navy-900)]">Weekly Intercession</div>
</div>
<div className="flex -space-x-1">
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-[var(--navy-200)] flex items-center justify-center text-xs font-bold">M</div>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-[var(--gold-200)] flex items-center justify-center text-xs font-bold">S</div>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-[var(--cream-200)] flex items-center justify-center text-xs text-[var(--navy-400)]">+4</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="bg-[var(--cream-50)] p-4 rounded-xl border border-[var(--cream-200)] hover:border-[var(--gold-300)] hover:shadow-sm transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--navy-400)]">Adoration</span>
<span className="icon-[lucide--heart] w-3 h-3 text-[var(--rose-400)] group-hover:scale-125 transition-transform"></span>
</div>
<p className="text-xs text-[var(--navy-800)] leading-relaxed">
                      Praise You that "no condemnation" is a present reality for our church family.
                    </p>
</div>

<div className="bg-[var(--cream-50)] p-4 rounded-xl border border-[var(--cream-200)] hover:border-[var(--gold-300)] hover:shadow-sm transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--navy-400)]">Confession</span>
<span className="icon-[lucide--message-circle] w-3 h-3 text-[var(--sage-500)] group-hover:scale-125 transition-transform"></span>
</div>
<p className="text-xs text-[var(--navy-800)] leading-relaxed">
                      Forgive us when we preach grace but live like the verdict is still out.
                    </p>
</div>

<div className="bg-[var(--cream-50)] p-4 rounded-xl border border-[var(--cream-200)] hover:border-[var(--gold-300)] hover:shadow-sm transition-all group cursor-pointer sm:col-span-2">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--navy-400)]">Supplication • People</span>
<span className="icon-[lucide--users] w-3 h-3 text-[var(--gold-500)] group-hover:scale-125 transition-transform"></span>
</div>
<p className="text-xs text-[var(--navy-800)] leading-relaxed">
                      Pray specifically for <span className="bg-[var(--gold-100)] px-1 rounded font-medium">Marcus and Elena</span> to find rest in the finished work of Christ this week.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[var(--cream-100)] py-20 sm:py-24 lg:py-32 relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-[clamp(2rem,3vw,2.8rem)] tracking-tight font-medium mb-4 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
            Trusted by pastors <br/>preparing week after week
          </h2>
<p className="text-lg text-[var(--navy-600)]">
            Audinote helps you reclaim lost prep time and protect your preaching voice.
          </p>
</div>
<div className="grid gap-6 md:gap-8 md:grid-cols-3 mt-16">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--cream-200)] hover:shadow-md transition-shadow relative">
<span className="absolute top-8 left-8 text-4xl text-[var(--gold-200)] font-serif">“</span>
<blockquote className="text-sm sm:text-[0.95rem] leading-relaxed mb-6 italic pt-4 relative z-10 text-[var(--navy-800)]" style={{fontFamily: 'var(--font-serif)'}}>
              I used to have 20 half-finished voice memos. Now I walk the sanctuary, talk through the text, and get a clean outline instantly.
            </blockquote>
<div className="flex items-center gap-3 pt-6 border-t border-[var(--cream-100)]">
<div className="w-10 h-10 rounded-full bg-[var(--navy-800)] text-white flex items-center justify-center text-xs font-bold tracking-wider">JD</div>
<div>
<div className="text-sm font-bold text-[var(--navy-900)]">James D.</div>
<div className="text-xs text-[var(--navy-500)]">Lead Pastor, Tennessee</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--cream-200)] hover:shadow-md transition-shadow relative">
<span className="absolute top-8 left-8 text-4xl text-[var(--gold-200)] font-serif">“</span>
<blockquote className="text-sm sm:text-[0.95rem] leading-relaxed mb-6 italic pt-4 relative z-10 text-[var(--navy-800)]" style={{fontFamily: 'var(--font-serif)'}}>
              Being bi-vocational, prep happens in the margins. Dictating in the car with accurate theology detection is a game changer.
            </blockquote>
<div className="flex items-center gap-3 pt-6 border-t border-[var(--cream-100)]">
<div className="w-10 h-10 rounded-full bg-[var(--sage-600)] text-white flex items-center justify-center text-xs font-bold tracking-wider">RL</div>
<div>
<div className="text-sm font-bold text-[var(--navy-900)]">Rachel L.</div>
<div className="text-xs text-[var(--navy-500)]">Church Planter, Urban Network</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--cream-200)] hover:shadow-md transition-shadow relative">
<span className="absolute top-8 left-8 text-4xl text-[var(--gold-200)] font-serif">“</span>
<blockquote className="text-sm sm:text-[0.95rem] leading-relaxed mb-6 italic pt-4 relative z-10 text-[var(--navy-800)]" style={{fontFamily: 'var(--font-serif)'}}>
              What surprised me most was the prayer side. Having series, counseling notes, and prayer lists in one place helps me shepherd better.
            </blockquote>
<div className="flex items-center gap-3 pt-6 border-t border-[var(--cream-100)]">
<div className="w-10 h-10 rounded-full bg-[var(--gold-500)] text-white flex items-center justify-center text-xs font-bold tracking-wider">MK</div>
<div>
<div className="text-sm font-bold text-[var(--navy-900)]">Michael K.</div>
<div className="text-xs text-[var(--navy-500)]">Associate Pastor</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden" id="signup">

<div className="absolute inset-0 bg-gradient-to-t from-[var(--cream-200)] to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
<h2 className="text-[clamp(2.5rem,4vw,3.5rem)] tracking-tight font-medium mb-6 text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>
          Preach with a <span className="italic text-[var(--gold-600)]">clearer head</span> <br/>and a <span className="italic text-[var(--sage-600)]">fuller heart</span>
</h2>
<p className="text-lg text-[var(--navy-600)] mb-10 max-w-xl mx-auto">
          Join the private beta. We’re inviting a small group of leaders to shape Audinote around real ministry work.
        </p>
<form className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="icon-[lucide--mail] text-[var(--navy-400)] w-5 h-5"></span>
</div>
<input className="w-full rounded-xl border border-[var(--cream-300)] text-base text-[var(--navy-900)] pl-10 pr-4 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent bg-white transition-all hover:border-[var(--navy-300)]" placeholder="pastor@church.org" required="" type="email"/>
</div>
<button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--navy-900)] text-white text-base font-semibold px-8 py-4 shadow-lg shadow-[rgba(15,23,42,0.2)] whitespace-nowrap transition-all hover:bg-[var(--navy-800)] hover:-translate-y-1 hover:shadow-xl" type="submit">
            Request Invite
            <span className="icon-[lucide--arrow-right] w-4 h-4 group-hover:translate-x-1 transition-transform"></span>
</button>
</form>
<p className="mt-4 text-xs text-[var(--navy-500)] flex items-center justify-center gap-1.5">
<span className="icon-[lucide--lock] w-3 h-3"></span>
          We respect your inbox. Beta updates only.
        </p>
</div>
</section>
</main>

<footer className="border-t border-[var(--cream-200)] bg-[var(--cream-50)] pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-[var(--navy-800)] flex items-center justify-center">
<svg className="w-4 h-4 text-[var(--gold-400)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="M2 17l10 5 10-5"></path>
<path d="M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-[var(--navy-900)]" style={{fontFamily: 'var(--font-serif)'}}>Audinote</span>
</div>
<div className="flex gap-8 text-sm font-medium text-[var(--navy-600)]">
<a className="hover:text-[var(--navy-900)] transition-colors" href="#">Manifesto</a>
<a className="hover:text-[var(--navy-900)] transition-colors" href="#">Pricing</a>
<a className="hover:text-[var(--navy-900)] transition-colors" href="#">Login</a>
<a className="hover:text-[var(--navy-900)] transition-colors" href="mailto:hello@audinote.app">Contact</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[var(--cream-200)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--navy-500)]">
<p>© <span id="year"></span> Audinote for Ministry. Built with pastors, for pastors.</p>
<div className="flex gap-4">
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Terms</a>
</div>
</div>
</div>
</footer>
<style>
    @keyframes wave {
      0%, 100% { transform: scaleY(0.3); opacity: 0.8; }
      50% { transform: scaleY(1); opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-0.8rem); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Custom utility for transparent gradient text */
    .transparent-text {
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  </style>


    </>
  );
}
