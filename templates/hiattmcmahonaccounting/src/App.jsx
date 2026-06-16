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
            const cards = document.querySelectorAll('.spotlight-card');
            document.addEventListener('mousemove', (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group cursor-pointer" href="#">
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tight text-sm">HIATT &amp; McMAHON</span>
<span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Bookkeeping</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#approach">Modern Approach</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#testimonials">Testimonials</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group" href="#contact">
                Schedule a Consultation
                <svg className="lucide lucide-arrow-right w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform text-blue-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-md animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-blue-300">Available for new clients</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] text-glow">
                Bookkeeping for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-400 to-blue-600">Modern Business</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                We handle the numbers so you can focus on growth. Accurate financials, seamless bank syncs, and clear reporting without the complexity.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        Schedule a Consultation
                        <svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>

<div className="mt-24 relative max-w-5xl mx-auto perspective-[2000px]">
<div className="relative rounded-xl border border-white/10 bg-[#0B101E]/90 backdrop-blur-xl shadow-2xl overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"></div>

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#05080f]/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">Financial Overview</div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="hidden md:flex flex-col gap-3 border-r border-white/5 pr-6">
<div className="h-8 w-full bg-blue-500/10 rounded-md flex items-center px-3 border border-blue-500/20">
<div className="w-4 h-4 rounded-full bg-blue-500"></div>
<div className="w-16 h-2 bg-blue-200/20 rounded ml-3"></div>
</div>
<div className="h-8 w-full bg-transparent rounded-md flex items-center px-3">
<div className="w-4 h-4 rounded-full bg-slate-700"></div>
<div className="w-12 h-2 bg-slate-700 rounded ml-3"></div>
</div>
<div className="h-8 w-full bg-transparent rounded-md flex items-center px-3">
<div className="w-4 h-4 rounded-full bg-slate-700"></div>
<div className="w-16 h-2 bg-slate-700 rounded ml-3"></div>
</div>
</div>

<div className="md:col-span-3">

<div className="flex justify-between items-end mb-8">
<div>
<div className="h-3 w-24 bg-slate-700 rounded mb-2"></div>
<div className="h-8 w-48 bg-white/10 rounded"></div>
</div>
<div className="h-8 w-24 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
</div>

<div className="w-full h-48 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent rounded-lg relative overflow-hidden flex items-end px-6 pb-0 gap-4">

<div className="absolute inset-0 flex flex-col justify-between py-6 px-6 pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-blue-500 h-[60%] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all group-hover:bg-blue-400"></div>
</div>
<div className="w-full bg-blue-500/20 h-[65%] rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-blue-500 h-[70%] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all group-hover:bg-blue-400"></div>
</div>
<div className="w-full bg-blue-500/20 h-[50%] rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-blue-500 h-[50%] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all group-hover:bg-blue-400"></div>
</div>
<div className="w-full bg-blue-500/20 h-[85%] rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-blue-500 h-[80%] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all group-hover:bg-blue-400"></div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="h-10 w-full bg-white/[0.03] rounded border border-white/5 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div></div>
<div className="h-2 w-20 bg-slate-600 rounded"></div>
</div>
<div className="h-2 w-12 bg-slate-600 rounded"></div>
</div>
<div className="h-10 w-full bg-white/[0.03] rounded border border-white/5 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-2 h-2 bg-blue-400 rounded-full"></div></div>
<div className="h-2 w-24 bg-slate-600 rounded"></div>
</div>
<div className="h-2 w-16 bg-slate-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020408] relative" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Built for Modern Businesses</h2>
<p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                    We combine professional expertise with modern tools to keep your business organized, compliant, and ready for growth.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="relative h-[400px] lg:h-auto w-full bg-[#0B101E] rounded-3xl border border-white/10 overflow-hidden group spotlight-card flex items-center justify-center" style={{-MouseX: '215px', -MouseY: '2268.5px'}}>
<div className="spotlight-border"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

<div className="relative z-10 flex items-center gap-8 md:gap-12">

<div className="flex flex-col gap-4 animate-float">
<div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center shadow-lg text-slate-400">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center shadow-lg text-slate-400">
<svg className="lucide lucide-landmark w-5 h-5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
</div>

<div className="relative w-24 h-24 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.1)]">
<div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-spin-slow"></div>
<svg className="lucide lucide-refresh-cw w-8 h-8 text-blue-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>

<div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

<div className="animate-float-delayed">
<div className="w-16 h-20 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex flex-col p-2 shadow-2xl backdrop-blur-sm">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mb-auto">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-full h-1 bg-white/20 rounded mb-1"></div>
<div className="w-2/3 h-1 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="spotlight-card p-8 rounded-3xl bg-[#0B101E] border border-white/10 group" style={{-MouseX: '-417px', -MouseY: '2268.5px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-Time Clarity</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            No more waiting until the end of the year. Get up-to-date insights into your cash flow and expenses whenever you need them.
                        </p>
</div>

<div className="spotlight-card p-8 rounded-3xl bg-[#0B101E] border border-white/10 group" style={{-MouseX: '-417px', -MouseY: '2049px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Effortless Organization</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            We integrate directly with your bank feeds and credit cards. Every transaction is categorized professionally, keeping your records pristine.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#05080f] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Core Services</h2>
<p className="text-slate-400 max-w-xl mx-auto">Professional bookkeeping tailored for small business owners.</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="spotlight-card rounded-2xl border border-white/10 bg-[#020408] p-6 group" style={{-MouseX: '215px', -MouseY: '1432.5px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:text-blue-300 transition-colors">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Monthly Bookkeeping</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Consistent categorization of all transactions to keep your books accurate month over month.
                    </p>
</div>

<div className="spotlight-card rounded-2xl border border-white/10 bg-[#020408] p-6 group" style={{-MouseX: '-99px', -MouseY: '1432.5px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center mb-5 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Financial Reports</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Clear Profit &amp; Loss statements and Balance Sheets delivered regularly for peace of mind.
                    </p>
</div>

<div className="spotlight-card rounded-2xl border border-white/10 bg-[#020408] p-6 group" style={{-MouseX: '-413px', -MouseY: '1432.5px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center mb-5 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-pie-chart w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Cash Flow Management</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Monitor money in versus money out to ensure your business remains healthy and liquid.
                    </p>
</div>

<div className="spotlight-card rounded-2xl border border-white/10 bg-[#020408] p-6 group" style={{-MouseX: '-727px', -MouseY: '1432.5px'}}>
<div className="spotlight-border"></div>
<div className="w-10 h-10 rounded-lg bg-orange-900/20 border border-orange-500/20 flex items-center justify-center mb-5 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Tax Preparation Support</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Year-end packages that make handing off to your CPA or tax filer completely stress-free.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020408] relative overflow-hidden" id="testimonials">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">What Our Clients Say</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="spotlight-card bg-[#0B101E] border border-white/5 p-8 rounded-2xl relative group hover:border-white/10 transition-colors" style={{-MouseX: '215px', -MouseY: '872px'}}>
<div className="spotlight-border"></div>
<div className="mb-6 text-blue-500">
<svg className="lucide lucide-quote w-6 h-6 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-8">
                        "Thanks to Hiatt &amp; McMahon, I finally have clear financials every month. It’s made running my business so much easier and less stressful."
                    </p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-[10px]">SL</div>
<div>
<div className="text-white text-xs font-medium">Sarah L.</div>
<div className="text-slate-500 text-[10px] uppercase tracking-wide">Business Owner</div>
</div>
</div>
</div>

<div className="spotlight-card bg-[#0B101E] border border-white/5 p-8 rounded-2xl relative group hover:border-white/10 transition-colors" style={{-MouseX: '-203.65625px', -MouseY: '872px'}}>
<div className="spotlight-border"></div>
<div className="mb-6 text-blue-500">
<svg className="lucide lucide-quote w-6 h-6 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-8">
                        "They handle everything from reconciliation to monthly reports. I always know exactly where my money is without having to do the math myself."
                    </p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-[10px]">MR</div>
<div>
<div className="text-white text-xs font-medium">Mark R.</div>
<div className="text-slate-500 text-[10px] uppercase tracking-wide">Retail Owner</div>
</div>
</div>
</div>

<div className="spotlight-card bg-[#0B101E] border border-white/5 p-8 rounded-2xl relative group hover:border-white/10 transition-colors" style={{-MouseX: '-622.328125px', -MouseY: '872px'}}>
<div className="spotlight-border"></div>
<div className="mb-6 text-blue-500">
<svg className="lucide lucide-quote w-6 h-6 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-8">
                        "Professional, reliable, and incredibly easy to work with. I can focus on my clients while they manage the books in the background."
                    </p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-[10px]">ET</div>
<div>
<div className="text-white text-xs font-medium">Emily T.</div>
<div className="text-slate-500 text-[10px] uppercase tracking-wide">Consultant</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020408] pt-32 pb-12 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Ready for Organized Books?
            </h2>
<p className="text-slate-400 mb-10 text-lg">Schedule a free consultation to see how we can help.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="px-8 py-4 text-sm font-semibold text-black bg-white rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                    Schedule a Consultation
                </button>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold text-xs tracking-tight">HIATT &amp; McMAHON</span>
</div>
<div className="text-[10px] text-slate-600">
                    Hiatt &amp; McMahon Accounting | Accurate bookkeeping for small businesses | All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
