import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/* Scroll Animation Observer */
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
.animate-on-scroll.animate { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});
})();
/* Pricing Toggle Logic */
function togglePricing() {
const isYearly = document.getElementById('pricing-toggle').checked;
const starterPrice = document.getElementById('price-starter');
const proPrice = document.getElementById('price-pro');
const periodTexts = document.querySelectorAll('.price-period');
if (isYearly) {
// Apply 20% discount logic roughly
starterPrice.innerText = '79';
proPrice.innerText = '159';
periodTexts.forEach(el => el.innerText = '/mo (billed yearly)');
} else {
starterPrice.innerText = '99';
proPrice.innerText = '199';
periodTexts.forEach(el => el.innerText = '/month');
}
}



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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
<div className="glass-card rounded-full p-1.5 pl-3 pr-2 flex items-center gap-4 animate-on-scroll">

<div className="flex items-center gap-2">
<div className="text-emerald-500">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="font-bold text-white tracking-tight">ZatcaFlow <span className="text-amber-400">ZK</span></span>
</div>

<div className="hidden md:flex items-center px-4 gap-6">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">ZATCA Status</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<button className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-emerald-500/20 rounded-full px-4 py-2 transition-all group">
<span className="text-xs font-medium text-emerald-400">Login</span>
</button>
</div>
</nav>

<main className="flex flex-col lg:flex-row min-h-[900px] z-10 w-full pt-32 lg:pt-40 px-6 max-w-7xl mx-auto relative items-center lg:items-start justify-between gap-12 lg:gap-0">

<div className="flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left z-20 pt-10">

<div className="flex gap-2 glass-card bg-emerald-950/20 border-emerald-500/20 rounded-full mb-8 py-1.5 px-4 items-center animate-on-scroll">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-100 tracking-wide uppercase">
            ZATCA Phase 2 Ready
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white glow-text mb-6 animate-on-scroll">
          ZATCA Phase 2 Compliance. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Just send a text.</span>
</h1>
<p className="text-lg text-neutral-400 leading-relaxed font-normal mb-8 max-w-lg animate-on-scroll">
          The first Zero-Knowledge Engine that turns WhatsApp messages into government-compliant XML invoices. Powered by Docker &amp; Java 21.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-on-scroll">
<button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 py-4 transition-all duration-300 shadow-lg shadow-emerald-900/40 animate-pulse-emerald font-semibold">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span>Start WhatsApp Demo</span>
</button>
<button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-8 py-4 transition-all">
<span>Read API Docs</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center lg:justify-end perspective-1000 animate-on-scroll">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none" viewbox="0 0 800 600">
<path d="M 250 300 C 400 300, 400 300, 550 300" fill="none" stroke="rgba(16, 185, 129, 0.2)" stroke-dasharray="10 10" strokeWidth="2"></path>
<path className="animate-[cable-flow_2s_linear_infinite]" d="M 250 300 C 400 300, 400 300, 550 300" fill="none" stroke="#10b981" stroke-dasharray="20 200" strokeWidth="2"></path>
</svg>

<div className="relative w-[260px] h-[520px] bg-black border-[8px] border-neutral-800 rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/10 z-10 transform -rotate-6" style={{animation: 'float 6s ease-in-out infinite'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>

<div className="absolute top-2 right-5 z-20 flex gap-1">
<div className="w-1 h-2 bg-white/50 rounded-full"></div>
<div className="w-1 h-2 bg-white/50 rounded-full"></div>
<div className="w-3 h-2 bg-white/50 rounded-full"></div>
</div>

<div className="w-full h-full bg-[#0b141a] pt-14 px-3 relative flex flex-col font-sans">

<div className="flex items-center gap-2 pb-4 border-b border-white/5 mb-4">
<div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">ZK</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">ZatcaFlow Bot</span>
<span className="text-emerald-400 text-[10px]">Online</span>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="self-end bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-sm">
                       Sold 5 Consulting Hours for 5000 SAR
                       <div className="text-[9px] text-white/50 text-right mt-1">10:42 AM</div>
</div>

<div className="self-start bg-[#202c33] text-white p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[90%] border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="pl-2">
<p className="font-bold text-emerald-400 text-[10px] mb-1">INVOICE GENERATED</p>
<div className="flex items-center gap-1.5 mb-2">
<svg className="text-emerald-400 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-white/90">Invoice #1024 Signed</span>
</div>
<div className="bg-black/20 rounded p-1.5 flex items-center gap-2 mb-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center">
<span className="text-black text-[8px] font-bold">PDF</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-white">INV-1024.xml</span>
<span className="text-[8px] text-white/50">14KB • Signed</span>
</div>
</div>
<div className="text-[10px] text-amber-400 flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                ZATCA Reported
                           </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-48 h-56 glass-card rounded-xl border-t border-l border-emerald-500/30 z-0 flex flex-col p-4 gap-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform rotate-6 translate-z-10 bg-[#050505]/90">
<div className="flex items-center justify-between border-b border-white/10 pb-2">
<span className="text-[10px] font-mono text-emerald-500">ZK_ENGINE.docker</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>
<div className="flex-1 font-mono text-[8px] text-neutral-400 space-y-1 overflow-hidden">
<p>&gt; recv msg_id: 89a2...</p>
<p>&gt; parsing NLP...</p>
<p className="text-white">&gt; signing XML (ECDSA)</p>
<p className="text-amber-400">&gt; gen_proof(0x2A...)</p>
<p>&gt; ZATCA API: 200 OK</p>
<div className="mt-2 h-1 w-full bg-neutral-800 rounded overflow-hidden">
<div className="h-full bg-emerald-500 w-[80%] animate-pulse"></div>
</div>
</div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none"></div>
</div>
</div>
</main>

<section className="w-full border-y border-white/5 bg-black/40 backdrop-blur-sm relative overflow-hidden py-12">
<div className="max-w-7xl mx-auto px-6 text-center mb-8 animate-on-scroll">
<h2 className="text-lg font-medium text-white mb-2">Trusted by 5,000+ Saudi Merchants</h2>
<p className="text-sm text-neutral-500">From Riyadh to Jeddah, businesses rely on our Zero-Knowledge engine.</p>
</div>

<style>
            @keyframes marquee-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
        </style>
<div className="relative w-full overflow-hidden mask-linear-gradient" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max gap-4 animate-[marquee-left_40s_linear_infinite] hover:[animation-play-state:paused]">


<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">PARTNER LOGO</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">RETAIL CO.</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">AL-RAJHI DEV</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">ARAMEX LOG</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">SAUDI FOODS</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">TECH RIYADH</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">OASIS CAFE</div>

<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">PARTNER LOGO</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">RETAIL CO.</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">AL-RAJHI DEV</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">ARAMEX LOG</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">SAUDI FOODS</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">TECH RIYADH</div>
<div className="h-16 w-32 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">OASIS CAFE</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Autonomous Pipeline</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">From unstructured chat to government-cleared XML in milliseconds.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 z-0"></div>

<div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center animate-on-scroll hover:border-emerald-500/30 transition-colors">
<div className="w-16 h-16 rounded-2xl bg-[#005c4b]/20 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,92,75,0.2)]">
<svg className="text-emerald-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Input</h3>
<p className="text-sm text-neutral-400">Natural Language Processing extracts amount, date, and items from text.</p>
</div>

<div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center animate-on-scroll hover:border-amber-400/30 transition-colors group">
<div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform">
<svg className="text-amber-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Black Box</h3>
<p className="text-sm text-neutral-400">Java SDK 4.0.0 signs the XML inside a secure, isolated Docker container.</p>
</div>

<div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center animate-on-scroll hover:border-emerald-500/30 transition-colors">
<div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
<svg className="text-emerald-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
<p className="text-sm text-neutral-400">Instant ZATCA clearance and Zero-Knowledge proof generation.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-2xl font-bold text-white mb-2">Universal Compatibility</h3>
<p className="text-neutral-400 mb-8 max-w-sm">Integrates seamlessly with your existing tech stack. No rip and replace.</p>
<div className="flex items-center gap-6 opacity-70 grayscale group-hover:grayscale-0 transition-all">

<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center"><span className="font-bold text-blue-400">Py</span></div>
<span className="text-xs">Python</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center"><span className="font-bold text-orange-400">J</span></div>
<span className="text-xs">Java 21</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center"><span className="font-bold text-blue-500">Dk</span></div>
<span className="text-xs">Docker</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center"><span className="font-bold text-emerald-500">Nd</span></div>
<span className="text-xs">Node</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden animate-on-scroll hover:border-amber-400/30 transition-colors">
<h3 className="text-xl font-bold text-white mb-2">Bank-Grade Security</h3>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="text-center">
<div className="w-10 h-10 border-2 border-amber-400 rounded-lg flex items-center justify-center mx-auto mb-2">
<svg className="text-amber-400" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
</div>
<span className="text-[10px] font-mono text-amber-400">PVT_KEY</span>
</div>
<div className="h-px w-10 bg-white/20"></div>
<div className="text-center">
<div className="w-10 h-10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
<svg className="text-emerald-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="text-[10px] font-mono text-emerald-500">ECDSA</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden animate-on-scroll">
<h3 className="text-xl font-bold text-white mb-1">Zero Latency</h3>
<p className="text-emerald-400 text-3xl font-mono font-bold tracking-tighter mb-4">&lt; 800ms</p>
<div className="w-full h-16 relative">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0 50 C 20 50, 40 50, 60 40 S 100 10, 150 15 S 200 40, 250 50" fill="none" stroke="#10b981" strokeWidth="2"></path>
<circle className="animate-pulse" cx="150" cy="15" fill="#10b981" r="3"></circle>
</svg>
</div>
<span className="text-xs text-neutral-500 absolute bottom-6">Average signing time</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 animate-on-scroll">
<div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#0c0c0c] shadow-2xl">

<div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<span className="ml-2 text-xs text-neutral-500 font-mono">zatca-sdk-v4.0.0 — bash</span>
</div>

<div className="p-6 font-mono text-sm leading-relaxed">
<div className="flex gap-2">
<span className="text-emerald-500">➜</span>
<span className="text-white">~</span>
<span className="text-neutral-400">./init_zatca_engine.sh</span>
</div>
<div className="mt-2 text-neutral-300">
<p>&gt; Initializing ZATCA SDK 4.0.0...</p>
<p>&gt; Loading Private Key (secp256k1)... <span className="text-emerald-500">OK</span></p>
<p>&gt; Connecting to Docker Container [id: 7f8a91]...</p>
<p className="text-blue-400">&gt; XML Hashing... Success.</p>
<p>&gt; Generating ZK Proof...</p>
<p className="text-amber-400">&gt; ZK Proof: 0x7f3a91b... Verified.</p>
<p>&gt; Submitting to Fatoora Portal...</p>
<p className="text-emerald-400 font-bold">&gt; Status: COMPLIANT.</p>
</div>
<div className="mt-2 w-2 h-4 bg-emerald-500 animate-pulse inline-block"></div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-emerald-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-amber-900/5 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-10 text-sm md:text-base">Choose the plan that fits your transaction volume. No hidden fees.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-sm text-neutral-300 font-medium">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="pricing-toggle" onchange="togglePricing()" type="checkbox"/>
<div className="w-12 h-7 bg-white/5 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-emerald-500 after:border-emerald-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-900/30 peer-checked:border-emerald-500/30"></div>
</label>
<span className="text-sm text-white font-medium flex items-center gap-2">
                        Yearly 
                        <span className="text-[10px] text-emerald-950 bg-emerald-400 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">Save 20%</span>
</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card rounded-2xl p-8 flex flex-col relative animate-on-scroll">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-xs text-neutral-400 h-10">Perfect for small shops &amp; boutiques using WhatsApp only.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white" id="price-starter">99</span>
<span className="text-lg font-bold text-white">SAR</span>
<span className="text-sm text-neutral-500 price-period">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Unlimited WhatsApp Signings
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ZATCA Phase 2 Compliant
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            PDF &amp; XML Storage (1 Year)
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Basic Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors">Start Free Trial</button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col relative border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.1)] transform md:-translate-y-4 z-10 animate-on-scroll">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-emerald-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/20">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            Pro 
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</h3>
<p className="text-xs text-neutral-400 h-10">Advanced features for growing businesses.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white" id="price-pro">199</span>
<span className="text-lg font-bold text-white">SAR</span>
<span className="text-sm text-neutral-500 price-period">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Everything in Starter
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Custom Logo on Invoices
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Multi-User Access (3 Staff)
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Priority WhatsApp Support
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Zero-Knowledge Proof Cert
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-lg shadow-emerald-900/40">Get Pro</button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col relative animate-on-scroll">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">API Enterprise</h3>
<p className="text-xs text-neutral-400 h-10">Full API access for platforms &amp; large retailers.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Full API Access (Docker)
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            White-label Solution
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            High Volume (&gt;10k/day)
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Dedicated Account Manager
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-sm font-semibold transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<div className="text-emerald-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="font-bold text-white text-xl">ZatcaFlow ZK</span>
</div>
<div className="flex gap-8 text-sm text-neutral-400">
<a className="hover:text-emerald-400 transition-colors" href="#">API Documentation</a>
<a className="hover:text-emerald-400 transition-colors" href="#">ZATCA Status</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Login</a>
</div>
</div>
<div className="text-center border-t border-white/5 pt-8">
<p className="text-neutral-500 text-sm">© 2025 ZatcaFlow ZK. Built for Saudi Vision 2030.</p>
</div>
</div>
</footer>

    </>
  );
}
