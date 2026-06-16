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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-[#0B0B1E]/80 backdrop-blur-lg border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-600 rounded flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">IT-PARTNER</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#platform">Platforma</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#rozwiazania">Rozwiązania</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#wiedza">Wiedza</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#case-studies">Klienci</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-purple-300 transition-colors" href="#kontakt">Kontakt</a>
<a className="px-5 py-2 text-sm font-medium text-slate-900 bg-white rounded-full hover:bg-slate-200 transition-colors" href="#demo">
                    Umów Demo
                </a>
</div>

<button className="md:hidden text-white"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2D1B69] via-[#0B0B1E] to-[#000000]"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Tylko IT-PARTNER<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">gwarantuje powrót.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-light">
                Platforma, która zabezpiecza, zarządza i odzyskuje Twoje procesy biznesowe. Gdziekolwiek są Twoje dane.
            </p>

<div className="relative max-w-4xl mx-auto rounded-xl bg-[#1E1E2E] border border-white/10 shadow-2xl shadow-purple-900/20 overflow-hidden group">

<div className="h-8 bg-[#2A2A3C] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="p-1 md:p-2 bg-[#13131F]">
<div className="grid grid-cols-12 gap-1 h-64 md:h-96">

<div className="col-span-2 hidden md:block bg-[#1E1E2E] rounded border border-white/5 p-4 space-y-3">
<div className="h-2 w-16 bg-white/10 rounded"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
</div>

<div className="col-span-12 md:col-span-10 relative bg-[#0B0B15] rounded border border-white/5 p-6 flex items-center justify-center">

<div className="glass-card p-6 rounded-lg max-w-sm w-full border-l-4 border-l-pink-500 shadow-2xl transform transition-transform group-hover:scale-105 duration-500">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-pink-400">
<i className="w-5 h-5" data-lucide="alert-octagon"></i>
<span className="font-medium text-sm">Threat Detected</span>
</div>
<span className="text-xs text-slate-500">Now</span>
</div>
<h3 className="text-white font-medium mb-2">LockBit 3.0 Signature</h3>
<p className="text-xs text-slate-400 mb-4">Anomalous encryption activity detected in /finance-core volume. Automatic isolation engaged.</p>
<div className="flex gap-2">
<button className="text-xs bg-pink-600 text-white px-3 py-1.5 rounded hover:bg-pink-500 transition">Analyze</button>
<button className="text-xs bg-white/10 text-white px-3 py-1.5 rounded hover:bg-white/20 transition">Recover from Vault</button>
</div>
</div>

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveaspectratio="none">
<path d="M0,100 Q200,50 400,80 T800,120" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<path d="M0,120 Q300,90 600,100 T900,60" fill="none" stroke="#ec4899" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<h3 className="text-2xl font-light text-white mb-8">Definiujemy odporność na nowo</h3>
</div>
</div>
</header>

<section className="bg-[#FDF8F3] text-slate-900 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 md:gap-16">

<div>
<div className="w-full h-px bg-slate-900/10 mb-6"></div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                        Jedyny integrator<br/>
                        z certyfikacją Cleanroom
                    </h3>
<p className="text-slate-600 leading-relaxed">
                        Nie tylko backup. Oferujemy w pełni izolowane środowisko odzyskiwania, które gwarantuje 100% pewności, że przywracane dane są wolne od złośliwego oprogramowania.
                    </p>
</div>

<div>
<div className="w-full h-px bg-slate-900/10 mb-6"></div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                        Najbardziej kompletna<br/>
                        odporność chmurowa
                    </h3>
<p className="text-slate-600 leading-relaxed">
                        Zabezpieczamy środowiska hybrydowe, SaaS i on-premise w jednej konsoli zarządczej. Widoczność całego ataku w czasie rzeczywistym.
                    </p>
</div>

<div>
<div className="w-full h-px bg-slate-900/10 mb-6"></div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                        Platforma łącząca<br/>
                        Security i Recovery
                    </h3>
<p className="text-slate-600 leading-relaxed">
                        Zacieramy granice między cyberbezpieczeństwem a backupem. Wykrywamy zagrożenia szybciej, niż systemy antywirusowe zdążą zareagować.
                    </p>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-all group" href="#report">
                    Pobierz raport Cyber Readiness
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-slate-950">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[120px] -translate-y-1/2"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6">
<span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-4 block">Cyber Shift | Watch Now</span>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                Rewolucja Cyber Resilience<br/>Staje się Globalna
            </h2>
<p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Zobacz, jak liderzy rynku zmieniają podejście z "czy zostaniemy zaatakowani" na "jak szybko wrócimy".
            </p>
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                Zobacz materiał wideo
            </button>
</div>
</section>

<section className="bg-white py-16 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-slate-500 mb-10 text-lg">Najbardziej <span className="text-purple-600 font-medium">odporne</span> firmy polegają na nas</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><i className="fill-slate-800" data-lucide="hexagon"></i> LOGISTICS</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><i className="fill-slate-800" data-lucide="box"></i> RETAIL GRP</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><i className="fill-slate-800" data-lucide="globe"></i> BANKING</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><i className="fill-slate-800" data-lucide="cpu"></i> ENERGY</div>
</div>
</div>
</section>

<section className="bg-white py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
                    Security, Identity i Recovery.<br/>
<span className="text-purple-600">Zjednoczone.</span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h3 className="text-3xl font-medium text-slate-900 mb-6">Identity Resilience</h3>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Unikaj niechcianych zmian w systemach tożsamości. Po ataku przywracamy czysty, zaufany dostęp w ciągu minut, nie dni. Bez Active Directory, firma nie istnieje. My o tym pamiętamy.
                    </p>
<a className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                        Dowiedz się więcej o tożsamości
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center perspective-container">

<div className="absolute w-64 h-80 bg-purple-100 rounded-2xl iso-card opacity-50 shadow-xl" style={{transform: 'translateZ(-50px) translateX(40px) rotateY(-20deg) rotateX(10deg)'}}></div>

<div className="absolute w-64 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl iso-card shadow-2xl border border-white/50" style={{transform: 'translateZ(0px) rotateY(-20deg) rotateX(10deg)'}}>
<div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl"></div>
</div>

<div className="absolute w-64 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl iso-card shadow-2xl border border-white/20 flex flex-col p-6 text-white justify-between" style={{transform: 'translateZ(50px) translateX(-40px) rotateY(-20deg) rotateX(10deg)'}}>
<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
<i className="w-6 h-6 text-white" data-lucide="fingerprint"></i>
</div>
<div>
<div className="h-2 w-16 bg-white/40 rounded mb-2"></div>
<div className="h-2 w-full bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-[#E0C3FC] via-[#F3C4D8] to-[#F8D4C0]">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
                Przedstawiamy IT-PARTNER Cloud Unity
            </h2>
<p className="text-lg text-slate-700 mb-10">Jedna platforma. Jeden widok. Wszystkie Twoje dane.</p>
<a className="inline-flex items-center gap-2 px-6 py-2 border border-slate-900 rounded-full text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-all mb-16" href="#">
                Poznaj nową chmurę <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<div className="relative max-w-5xl mx-auto">
<div className="bg-[#1e1e24] rounded-xl shadow-2xl border border-white/10 p-2 md:p-4 text-left transform hover:-translate-y-2 transition-transform duration-500">

<div className="flex items-center justify-between mb-6 px-2">
<div className="flex gap-4 text-slate-400 text-sm">
<span className="text-white font-medium">Dashboard</span>
<span>Incidents</span>
<span>Recovery Plans</span>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-[#272730] p-5 rounded-lg border border-white/5">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-slate-300 text-sm font-medium">Critical Risk Resources</span>
</div>
<div className="text-3xl font-semibold text-white mb-1">21 <span className="text-base text-slate-500 font-normal">/ 5,430</span></div>
<div className="text-xs text-red-400 mt-2">-3% last 7 days</div>
</div>

<div className="bg-[#272730] p-5 rounded-lg border border-white/5 md:col-span-2">
<span className="text-slate-300 text-sm font-medium block mb-4">Scan status by Resource</span>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>VMware Cluster 01</span>
<span>Clean</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[98%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>SAP HANA Core</span>
<span className="text-yellow-400">Scanning (84%)</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 w-[84%] animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="bg-[#272730] p-5 rounded-lg border border-white/5 md:col-span-3">
<div className="flex justify-between items-end">
<div>
<span className="text-slate-400 text-xs uppercase tracking-wider">Recovery Time Actual (RTA)</span>
<div className="text-2xl text-white font-medium mt-1">4h 12m</div>
</div>
<div className="text-right">
<span className="text-slate-400 text-xs uppercase tracking-wider">SLA Target</span>
<div className="text-xl text-green-400 font-medium mt-1">&lt; 6h 00m</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900 overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Witamy w świecie gotowości</h2>
<p className="text-lg text-slate-300 mb-10">Gdzie eksperci dzielą się wiedzą, jak przetrwać najgorszy scenariusz.</p>
<a className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-cyan-50 transition-colors inline-block" href="#">
                Start your readiness journey
            </a>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-white" data-lucide="shield"></i>
<span className="text-xl font-bold">IT-PARTNER</span>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition"><i className="w-4 h-4" data-lucide="facebook"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition"><i className="w-4 h-4" data-lucide="instagram"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition"><i className="w-4 h-4" data-lucide="linkedin"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition"><i className="w-4 h-4" data-lucide="youtube"></i></div>
</div>
<a className="inline-flex items-center gap-2 mt-8 border border-slate-700 rounded-full px-4 py-2 text-sm hover:border-white transition-colors" href="#contact">
                        Skontaktuj się z nami <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div>
<h4 className="font-semibold mb-6">Firma</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zarząd</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kariera</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6">Dlaczego my?</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Platforma Cloud Unity</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cleanroom Recovery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analizy Gartnera</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nasi Klienci</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6">Zasoby</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Webinary</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dokumentacja</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 IT-PARTNER. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Prawna</a>
<a className="hover:text-slate-300" href="#">Prywatność</a>
<a className="hover:text-slate-300" href="#">Zaufanie</a>
<a className="hover:text-slate-300" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
