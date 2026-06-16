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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-reveal').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[180px] opacity-20 bg-[#6366F1]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900 rounded-full blur-[150px] opacity-10" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<div className="relative w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#4338ca] rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
<svg className="lucide lucide-layers w-4 h-4" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div className="ml-2 text-lg tracking-tight">
<span className="font-medium text-white">Sub</span><span className="font-light text-white/70">Tracker</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#features">Funkcje</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Jak to działa</a>
<a className="hover:text-white transition-colors" href="#reviews">Opinie</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#818CF8] hover:text-white transition-all duration-300" href="#pricing">
                Zacznij Oszczędzać
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-white/80">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex animate-reveal text-xs font-medium text-[#818CF8] tracking-wide bg-[#6366F1]/10 opacity-100 border-[#6366F1]/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 translate-y-0 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#6366F1]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]"></span>
</span>
                    KONTROLA WYDATKÓW 2.0
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] animate-reveal delay-100 opacity-100 translate-y-0">
                    Ogarnij chaos. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-[#6366F1] via-[#A5B4FC] to-white">Oszczędzaj mądrze.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 font-light mb-10 max-w-lg leading-relaxed animate-reveal delay-200 opacity-100 translate-y-0">
                    Wszystkie Twoje subskrypcje, abonamenty i cykliczne płatności w jednym miejscu. Otrzymuj powiadomienia, anuluj zbędne usługi i odzyskaj kontrolę nad portfelem.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-300 opacity-100 translate-y-0">
<a className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#4f46e5] transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] bg-[#6366F1]" href="#pricing">
                        Wypróbuj za darmo
                        <svg className="lucide lucide-sparkles w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors" href="#how-it-works">
                        Zobacz demo
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-white/40 font-light animate-reveal delay-300 opacity-100 translate-y-0">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-xs text-white">A</div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-xs text-white">M</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-xs text-white">K</div>
</div>
<p className="">Ponad 15,000 użytkowników oszczędza z nami</p>
</div>
</div>

<div className="relative flex items-center justify-center animate-reveal delay-200 opacity-100 translate-y-0 min-h-[500px]">

<div className="grid-bg opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#6366F1]/20 to-[#A5B4FC]/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>

<div className="relative z-10 w-80 perspective-1000">

<div className="absolute top-12 left-8 w-full glass-panel h-48 rounded-2xl bg-[#1e1b4b]/80 border-[#6366F1]/20 scale-90 opacity-40 animate-float-delayed shadow-2xl"></div>

<div className="absolute top-6 left-4 w-full glass-panel h-48 rounded-2xl bg-[#1e1b4b]/90 border-[#6366F1]/30 scale-95 opacity-70 animate-float shadow-2xl flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="lucide lucide-music" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<div>
<div className="text-white text-sm font-medium">Spotify Duo</div>
<div className="text-white/40 text-xs">Muzyka</div>
</div>
</div>
<div className="text-white font-medium">-24.99 PLN</div>
</div>

<div className="relative w-full glass-panel p-6 rounded-2xl bg-[#0F0F12] border border-white/10 animate-float shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-1">Najbliższa płatność</div>
<div className="text-2xl text-white font-medium">Jutro</div>
</div>
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<svg className="lucide lucide-tv" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="15" rx="2" ry="2" width="20" x="2" y="7"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-white font-medium text-lg">Netflix Premium</span>
<span className="text-white font-medium text-lg">-60.00 PLN</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-white/40">Status</span>
<span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-xs border border-green-400/20">Aktywna</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-white/40">Cykl</span>
<span className="text-white/60">Miesięczny</span>
</div>
</div>
<div className="mt-6 flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-[#6366F1] text-white text-xs font-medium hover:bg-[#4f46e5] transition-colors">Opłać</button>
<button className="flex-1 py-2 rounded-lg bg-white/5 text-white/60 text-xs font-medium hover:bg-white/10 transition-colors">Edytuj</button>
</div>
</div>

<div className="absolute -right-12 top-10 glass-panel p-3 rounded-lg flex items-center gap-3 animate-bounce shadow-lg z-20 backdrop-blur-xl bg-black/60 border-l-2 border-l-[#E42910] border-y border-y-white/5 border-r border-r-white/5" style={{animationDuration: '3s'}}>
<div className="bg-red-500/20 p-1.5 rounded text-red-400">
<svg className="lucide lucide-alert-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<div>
<div className="text-[10px] text-white/50 uppercase font-semibold">Uwaga</div>
<div className="text-xs font-medium text-white">Wzrost ceny +15%</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-[#050505] border-white/5 border-t pt-24 pb-24 relative" id="how-it-works">
<style>
        @keyframes chart-grow {
            0% { height: 10%; opacity: 0; }
            100% { height: var(--h); opacity: 1; }
        }
        .chart-bar { animation: chart-grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    </style>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Wszystko w jednym miejscu</h2>
<p className="text-xl text-white/60 font-light leading-relaxed">
                Zastąp chaos w Excelu i notatkach jedną, inteligentną aplikacją.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">Centralny Dashboard</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Widok wszystkich aktywnych usług
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Szybkie dodawanie i edycja
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Kategoryzacja wydatków
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-end group-hover:border-white/20 transition-colors">
<div className="absolute top-6 left-6 right-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></div>
<span className="text-xs font-mono text-white/40 uppercase tracking-widest">Wydatki</span>
</div>
<span className="text-xs font-mono text-[#6366F1]">SUMA: 420 PLN</span>
</div>
<div className="flex gap-3 h-32 items-end justify-between px-2">
<div className="w-full bg-[#6366F1]/20 rounded-t-sm chart-bar relative group/bar" style={{-H: '40%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-white/0 group-hover/bar:text-white transition-all">Sty</div>
</div>
<div className="w-full bg-[#6366F1]/40 rounded-t-sm chart-bar relative group/bar" style={{-H: '65%', animationDelay: '0.1s'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-white/0 group-hover/bar:text-white transition-all">Lut</div>
</div>
<div className="w-full bg-[#6366F1]/60 rounded-t-sm chart-bar relative group/bar" style={{-H: '50%', animationDelay: '0.2s'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-white/0 group-hover/bar:text-white transition-all">Mar</div>
</div>
<div className="w-full bg-[#6366F1] rounded-t-sm chart-bar relative group/bar" style={{-H: '85%', animationDelay: '0.3s'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-white/0 group-hover/bar:text-white transition-all">Kwi</div>
</div>
<div className="w-full bg-[#6366F1]/30 rounded-t-sm chart-bar relative group/bar" style={{-H: '60%', animationDelay: '0.4s'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-white/0 group-hover/bar:text-white transition-all">Maj</div>
</div>
</div>
<div className="h-px bg-white/10 w-full mt-2"></div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">Inteligentne Przypomnienia</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Alerty push i e-mail
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Uniknij odsetek i blokad
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Widok kalendarza płatności
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex items-center justify-center group-hover:border-white/20 transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="relative w-full max-w-[240px] space-y-3">

<div className="glass-panel p-3 rounded-lg flex items-center gap-3 border-l-2 border-l-[#6366F1] animate-float opacity-100">
<div className="bg-[#6366F1]/20 p-2 rounded-full text-[#6366F1]">
<svg className="lucide lucide-bell" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-xs text-white font-medium">Netflix</span>
<span className="text-[10px] text-white/40">Teraz</span>
</div>
<div className="text-[10px] text-white/60">Płatność 60 PLN jutro</div>
</div>
</div>

<div className="glass-panel p-3 rounded-lg flex items-center gap-3 border-l-2 border-l-white/20 animate-float-delayed opacity-50">
<div className="bg-white/10 p-2 rounded-full text-white/60">
<svg className="lucide lucide-calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-xs text-white font-medium">Adobe CC</span>
<span className="text-[10px] text-white/40">2h temu</span>
</div>
<div className="text-[10px] text-white/60">Subskrypcja odnowiona</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4" style={{}}>Pełna Analityka</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Wykresy wydatków rocznych
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Porównanie kategorii
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Eksport danych do CSV
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center items-center group-hover:border-white/20 transition-colors">
<div className="relative w-32 h-32 rounded-full border-8 border-white/5 flex items-center justify-center">

<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#6366F1 0% 45%, transparent 45% 100%)', maskImage: 'radial-gradient(transparent 60%, black 61%)', WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(transparent 0% 48%, #A5B4FC 48% 70%, transparent 70% 100%)', maskImage: 'radial-gradient(transparent 60%, black 61%)', WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(transparent 0% 73%, #4338ca 73% 90%, transparent 90% 100%)', maskImage: 'radial-gradient(transparent 60%, black 61%)', WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'}}></div>
<div className="text-center z-10">
<div className="text-[10px] text-white/40 font-mono">TOTAL</div>
<div className="text-sm font-bold text-white">420 zł</div>
</div>
</div>
<div className="flex gap-4 mt-4 text-[10px] text-white/40 font-mono">
<span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#6366F1]"></div> VOD</span>
<span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#A5B4FC]"></div> SOFTWARE</span>
<span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#4338ca]"></div> INNE</span>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4" style={{}}>Zawsze pod ręką</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Synchronizacja w chmurze
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Dostęp WWW, iOS i Android
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#6366F1]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Szyfrowanie AES-256
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center gap-6 group-hover:border-white/20 transition-colors">
<div className="flex justify-center items-center gap-8 text-white/20">
<svg className="lucide lucide-smartphone group-hover:text-white transition-colors duration-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
<div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
<svg className="lucide lucide-laptop group-hover:text-white transition-colors duration-500" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
</div>
<div className="flex items-center justify-center gap-2 text-[#6366F1] text-[10px] font-mono mt-4">
<svg className="lucide lucide-shield-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        SECURE CONNECTION
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] pt-24 pb-24" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] aspect-square flex items-center justify-center">
<div className="opacity-20 grid-bg absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-full px-12">

<div className="flex items-end justify-between h-48 gap-4">
<div className="w-full h-[90%] rounded-t opacity-90 relative group bg-[#6366F1]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#818CF8]">Wysoka</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold rotate-0 whitespace-nowrap">SubTracker</div>
</div>
<div className="bg-white/10 w-full h-[40%] rounded-t relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40">Średnia</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-0 whitespace-nowrap">Excel</div>
</div>
<div className="w-full bg-white/10 h-[20%] rounded-t relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40">Niska</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-0 whitespace-nowrap">Pamięć</div>
</div>
</div>
<div className="mt-6 border-t border-white/10 pt-4 flex justify-center text-xs text-white/40 uppercase tracking-widest">
<span>Poziom Kontroli Finansowej</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Dlaczego warto?</h2>
<p className="text-lg text-white/60 font-light mb-8">
                        Przestań marnować pieniądze na zapomniane subskrypcje. Przeciętny użytkownik oszczędza z nami do 600 PLN rocznie.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg">Automatyczne wykrywanie</h4>
<p className="text-white/50 font-light text-sm mt-1">Połącz swoje konto bankowe, a my automatycznie znajdziemy płatności cykliczne.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg">Powiadomienia przed płatnością</h4>
<p className="text-white/50 font-light text-sm mt-1">Dostaniesz info 3 dni przed pobraniem środków, byś mógł zrezygnować na czas.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-lg">Współdzielenie kosztów</h4>
<p className="text-white/50 font-light text-sm mt-1">Śledź, kto ile wisi za wspólne konto Netflix czy Spotify Family.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight text-center">Co mówią użytkownicy?</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-[#6366F1]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"Dzięki SubTracker odkryłem, że wciąż płacę za karnet na siłownię, na którą nie chodzę od pół roku. Aplikacja zwróciła się w jeden dzień."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium">MK</div>
<div className="text-sm">
<div className="text-white font-medium">Michał K.</div>
<div className="text-white/40">Freelancer</div>
</div>
</div>
</div>

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-[#6366F1]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"Interface jest przepiękny, dark mode idealny. Wreszcie mam porządek w subskrypcjach firmowych."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium">AN</div>
<div className="text-sm">
<div className="text-white font-medium">Anna N.</div>
<div className="text-white/40">Przedsiębiorca</div>
</div>
</div>
</div>

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-[#6366F1]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"Najlepsza funkcja to powiadomienia e-mail. Wcześniej ciągle zapominałem o próbnym okresie Amazon Prime. Polecam każdemu."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium">TR</div>
<div className="text-sm">
<div className="text-white font-medium">Tomek R.</div>
<div className="text-white/40">Student</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.05] pointer-events-none bg-[#6366F1]"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">
<span className="font-medium tracking-wide text-sm uppercase mb-3 block text-[#6366F1]">Prosty Cennik</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Wybierz plan dla siebie.</h2>
<p className="text-white/50 text-lg">30-dniowa gwarancja zwrotu pieniędzy.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">

<div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h3 className="text-xl font-medium text-white">Starter</h3>
<p className="text-white/50 text-sm mt-1">Dla początkujących.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white">0 zł</span>
<span className="text-white/40 text-lg">/ mc</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Do 5 subskrypcji
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Powiadomienia e-mail
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Podstawowe raporty
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">
                        Załóż konto
                    </button>
</div>

<div className="flex flex-col z-10 bg-[#121212] border-[#6366F1] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(99,102,241,0.1)] scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg bg-[#6366F1]">
                        Polecane
                    </div>
<div className="mb-4">
<h3 className="text-xl font-medium text-white">Pro</h3>
<p className="text-white/50 text-sm mt-1">Pełna automatyzacja.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white">19 zł</span>
<span className="text-white/40 text-lg">/ mc</span>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Nielimitowane subskrypcje
                        </li>
<li className="flex gap-3 text-sm text-white gap-x-3 gap-y-3 items-center" style={{}}>Synchronizacja z gmail<svg className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(99, 102, 241)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg></li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg> Eksport do Excel/CSV
                        </li>
</ul>
<button className="w-full py-3 rounded-lg text-white font-medium hover:bg-[#4f46e5] transition-colors shadow-lg shadow-indigo-900/20 bg-[#6366F1]">
                        Rozpocznij próbny okres
                    </button>
<div className="mt-4 text-center text-xs text-white/50">7 dni za darmo, anuluj kiedy chcesz</div>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h3 className="text-xl font-medium text-white">Rodzina</h3>
<p className="text-white/50 text-sm mt-1">Dla par i domowników.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white">49 zł</span>
<span className="text-white/40 text-lg">/ mc</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Do 5 użytkowników
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Współdzielone wydatki
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priorytetowe wsparcie
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">
                        Wybierz plan
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-1 mb-4">
<div className="w-6 h-6 bg-gradient-to-br from-[#6366F1] to-[#4338ca] rounded flex items-center justify-center">
<svg className="lucide lucide-layers" fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div className="ml-2 text-lg tracking-tight">
<span className="font-medium text-white">Sub</span><span className="font-light text-white/70">Tracker</span>
</div>
</div>
<p className="text-white/40 text-sm max-w-xs">
                        Inteligentne zarządzanie finansami osobistymi w erze subskrypcji.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-4 text-sm">Produkt</h4>
<ul className="space-y-2 text-sm text-white/40">
<li><a className="hover:text-white transition-colors" href="#">Funkcje</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bezpieczeństwo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cennik</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Firma</h4>
<ul className="space-y-2 text-sm text-white/40">
<li><a className="hover:text-white transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/30 text-xs">© 2024 SubTracker Polska. Wszelkie prawa zastrzeżone.</p>
<div className="flex items-center gap-4">
<svg className="lucide lucide-twitter w-5 h-5 text-white/30 hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-white/30 hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
