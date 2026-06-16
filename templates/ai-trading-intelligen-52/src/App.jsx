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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-dark">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="bg-[#ff4f00] rounded-md p-1.5 flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(255,79,0,0.5)] transition-shadow duration-300 group-hover:shadow-[0_0_35px_rgba(255,79,0,0.7)]">
<div className="absolute inset-0 bg-white/30 blur-sm rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
<iconify-icon className="text-white text-lg relative z-10" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">süno</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Markets</a>
<a className="text-sm font-medium text-[#ff4f00] drop-shadow-[0_0_12px_rgba(255,79,0,0.4)]" href="#">Intelligence</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Learn</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-[#ff4f00] transition-colors" href="#">Log In</a>
<a className="bg-white text-slate-950 text-sm font-semibold py-2.5 px-5 rounded-full hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.15)]" href="#">
                    Get Started
                    <iconify-icon className="text-base text-[#ff4f00] group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative bg-[#050505] overflow-hidden pt-40 pb-32 min-h-screen flex items-center">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ff4f00]/10 blur-[130px] rounded-full mix-blend-screen"></div>

<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 blur-[100px] rounded-full mix-blend-screen"></div>

<div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] opacity-70 mix-blend-screen animate-wave-drift">
<svg className="w-full h-full" fill="none" preserveaspectratio="xMidYMid slice" viewbox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
<defs>

<lineargradient id="waveGradient" x1="0%" x2="100%" y1="50%" y2="50%">
<stop offset="0%" stop-color="#fff" stop-opacity="0"></stop>
<stop offset="20%" stop-color="#ff4f00" stop-opacity="0.3"></stop>
<stop offset="45%" stop-color="#fff" stop-opacity="0.9"></stop>
<stop offset="55%" stop-color="#fff" stop-opacity="0.9"></stop>
<stop offset="80%" stop-color="#10b981" stop-opacity="0.2"></stop> 
<stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
</lineargradient>

<lineargradient id="wireGradient" x1="0%" x2="100%" y1="50%" y2="50%">
<stop offset="0%" stop-color="#fff" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#ff4f00" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<g opacity="0.3">
<path d="M-100 450 C 300 450 400 250 700 250 S 1100 450 1500 350" fill="none" stroke="url(#wireGradient)" strokeWidth="1"></path>
</g>

<g filter="url(#glow)">
<path className="animate-pulse-glow" d="M-200 500 C 200 500 400 150 720 150 C 1040 150 1200 500 1600 400" fill="none" stroke="url(#waveGradient)" strokeWidth="3"></path>
<path d="M-200 505 C 200 505 405 155 725 155 C 1045 155 1205 505 1600 405" fill="none" opacity="0.5" stroke="url(#wireGradient)" strokeWidth="1"></path>
</g>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff4f00]/30 bg-orange-950/20 backdrop-blur-md mb-8 shadow-lg shadow-orange-900/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4f00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4f00]"></span>
</span>
<span className="text-xs font-bold text-[#ff9050] tracking-wide uppercase">Integrated Intelligence</span>
</div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-6">
                    Optimize every <br/> trade with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f00] to-white">süno</span>.
                </h1>
<p className="text-lg font-light text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                    Süno isn't just a bot—it's the integrated AI brain of your trading platform. Simple signals. Stronger clarity. Smart execution.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto bg-[#ff4f00] text-white h-12 px-8 rounded-full font-semibold text-sm hover:bg-[#ff6a2b] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,79,0,0.4)] group">
                        View Sample Report
                        <iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full font-semibold text-sm text-slate-300 border border-slate-700/60 hover:bg-slate-800/50 hover:border-[#ff4f00]/50 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        How it works
                    </button>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block perspective-[1000px] scene-3d">

<div className="candle-3d animate-candle-1" style={{left: '60%', top: '25%', zIndex: '10'}}>
<div className="wick" style={{height: '40px', top: '-40px'}}></div>
<div className="cuboid candle-orange" style={{width: '24px', height: '160px', -Height: '160px'}}>
<div className="cuboid__face cuboid__face--front"></div>
<div className="cuboid__face cuboid__face--back"></div>
<div className="cuboid__face cuboid__face--right"></div>
<div className="cuboid__face cuboid__face--left"></div>
<div className="cuboid__face cuboid__face--top"></div>
<div className="cuboid__face cuboid__face--bottom"></div>
</div>
<div className="wick" style={{height: '30px', bottom: '-30px'}}></div>
</div>

<div className="candle-3d animate-candle-2" style={{left: '45%', top: '45%', zIndex: '5', opacity: '0.9', transform: 'scale(0.9)'}}>
<div className="wick" style={{height: '25px', top: '-25px'}}></div>
<div className="cuboid candle-green" style={{width: '24px', height: '110px', -Height: '110px'}}>
<div className="cuboid__face cuboid__face--front"></div>
<div className="cuboid__face cuboid__face--back"></div>
<div className="cuboid__face cuboid__face--right"></div>
<div className="cuboid__face cuboid__face--left"></div>
<div className="cuboid__face cuboid__face--top"></div>
<div className="cuboid__face cuboid__face--bottom"></div>
</div>
<div className="wick" style={{height: '25px', bottom: '-25px'}}></div>
</div>

<div className="candle-3d animate-candle-1" style={{right: '5%', top: '10%', zIndex: '1', opacity: '0.4', animationDelay: '2s', transform: 'scale(0.6)'}}>
<div className="wick" style={{height: '30px', top: '-30px'}}></div>
<div className="cuboid candle-orange" style={{width: '24px', height: '120px', -Height: '120px'}}>
<div className="cuboid__face cuboid__face--front"></div>
<div className="cuboid__face cuboid__face--back"></div>
<div className="cuboid__face cuboid__face--right"></div>
<div className="cuboid__face cuboid__face--left"></div>
<div className="cuboid__face cuboid__face--top"></div>
<div className="cuboid__face cuboid__face--bottom"></div>
</div>
<div className="wick" style={{height: '30px', bottom: '-30px'}}></div>
</div>

<div className="absolute top-10 right-0 animate-float-slow z-20 hover:z-40 transition-all duration-300">
<div className="glass-card p-5 rounded-2xl w-72 border-l-4 border-l-[#ff4f00] relative overflow-hidden group hover:scale-105 transition-transform duration-500 shadow-[0_10px_40px_-10px_rgba(255,79,0,0.1)]">
<iconify-icon className="absolute -bottom-6 -right-6 text-9xl text-white/5 group-hover:text-white/10 transition-colors rotate-[-15deg]" icon="solar:infinity-linear"></iconify-icon>
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ff4f00] text-xl" icon="solar:sun-fog-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-bold text-white uppercase tracking-wider">Daily Brief</span>
</div>
<span className="text-[10px] text-slate-400 font-medium">08:00 AM</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-3 relative z-10 font-light">
                            Market volatility is high today due to CPI data release.
                        </p>
<div className="bg-white/5 rounded p-2.5 flex items-center justify-between border border-white/5 relative z-10">
<span className="text-xs text-slate-400">Sentiment</span>
<span className="text-xs font-semibold text-white flex items-center gap-1">
                                Caution
                                <iconify-icon className="text-sm text-[#ff4f00]" icon="solar:shield-warning-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="absolute bottom-16 left-8 animate-float-medium z-30 hover:z-40 transition-all duration-300">
<div className="glass-card p-5 rounded-2xl w-80 backdrop-blur-xl relative overflow-hidden hover:scale-105 transition-transform duration-500 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.1)]">
<div className="flex justify-between items-center mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 shadow-inner">
<span className="text-[10px] font-bold text-emerald-400">S</span>
</div>
<span className="text-xs font-bold text-white">Trade Audit #492</span>
</div>

<div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)] flex items-center gap-1">
                                Optimized <iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="space-y-3 relative z-10">
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-slate-400">Pair</span>
<span className="text-white font-medium">EUR/USD</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Süno Insight</span>
</div>
<div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20 p-2.5 rounded text-[11px] text-emerald-50 leading-normal flex gap-2.5">
<iconify-icon className="text-emerald-400 text-sm mt-0.5 shrink-0" icon="solar:infinity-bold"></iconify-icon>
                                "Good exit. You closed position before the sentiment shifted. Strong clarity on the stop-loss."
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] py-24 px-6 text-center relative z-20 border-t border-white/5">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                Not a chatbot. <br/> A <span className="text-[#ff4f00]">performance engine</span>.
            </h2>
<div className="grid md:grid-cols-3 gap-8 text-left mt-16">

<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-[#ff4f00]/30 hover:shadow-xl hover:shadow-[#ff4f00]/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-black border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-xl text-[#ff4f00]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-bold text-white mb-2">Pre-Market Briefs</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Süno scans macro data and sentiment to give you a daily condition report before you place a single trade.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-black border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-xl text-emerald-500" icon="solar:tuning-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-bold text-white mb-2">Trade Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Every closed trade is reviewed. Süno compares execution against optimal entry/exit points to improve future results.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-[#ff4f00]/30 hover:shadow-xl hover:shadow-[#ff4f00]/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-black border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-xl text-[#ff4f00]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-bold text-white mb-2">Performance Reports</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Receive a comprehensive breakdown of your trading behavior, risk management, and psychological patterns.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] px-6 pb-24 pt-24">
<div className="max-w-7xl mx-auto bg-[#0f0f0f] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-[#ff4f00]/5 border border-white/5">

<div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[800px] h-[400px] pointer-events-none opacity-[0.03]">
<svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.3" viewbox="0 0 24 24">
<path d="M8 8C5.5 8 3 10 3 12C3 14 5.5 16 8 16C10.5 16 12 14 12 12C12 10 13.5 8 16 8C18.5 8 21 10 21 12C21 14 18.5 16 16 16C13.5 16 12 14 12 12C12 10 10.5 8 8 8Z"></path>
</svg>
</div>

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff4f00]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#ff4f00] text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#ff4f00] text-xs font-bold uppercase tracking-widest">Post-Trade Analysis</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                        "You exited too early."
                    </h2>
<p className="text-slate-400 font-light text-lg mb-8 max-w-md leading-relaxed">
                        Süno doesn't just watch; it teaches. By analyzing the delta between your actions and market conditions, it highlights missed opportunities and successful strategies.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-4">
<div className="bg-emerald-500/10 rounded-full p-1.5 mt-0.5 border border-emerald-500/20">
<iconify-icon className="text-emerald-500 text-sm block" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-bold">Sentiment Alignment</h4>
<p className="text-slate-500 text-xs mt-1 font-light leading-relaxed">Check if your trade direction matched the global market mood.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="bg-emerald-500/10 rounded-full p-1.5 mt-0.5 border border-emerald-500/20">
<iconify-icon className="text-emerald-500 text-sm block" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-bold">Execution Quality</h4>
<p className="text-slate-500 text-xs mt-1 font-light leading-relaxed">Review slippage, timing, and stop-loss placement accuracy.</p>
</div>
</li>
</ul>
</div>
<div className="relative perspective-[1200px]">

<div className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700">

<div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Trade Review: #8821</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="p-6">

<div className="flex justify-between items-end mb-6">
<div>
<div className="text-2xl font-medium text-white tracking-tight">XAU/USD <span className="text-lg text-slate-500 font-normal">Gold</span></div>
<div className="text-xs text-slate-400 mt-1 font-light">Long Position • 2.5 Lots</div>
</div>
<div className="text-right">
<div className="text-xl font-medium text-emerald-400">+$1,240.50</div>
<div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block mt-1 border border-emerald-500/20">RESULT: PROFIT</div>
</div>
</div>

<div className="bg-gradient-to-r from-[#ff4f00]/5 to-transparent border border-[#ff4f00]/20 rounded-lg p-5 mb-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-[#ff4f00]/5 blur-xl group-hover:bg-[#ff4f00]/10 transition-colors duration-500"></div>

<iconify-icon className="absolute right-0 top-0 text-6xl text-[#ff4f00]/10 -rotate-12 translate-x-4 -translate-y-2 pointer-events-none" icon="solar:infinity-linear"></iconify-icon>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#ff4f00] text-lg" icon="solar:stars-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">Süno Optimization</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-4 font-light">
                                        "Great entry at <span className="text-emerald-400 font-medium">2030.50</span> aligning with bullish CPI data. However, your manual exit at <span className="text-white font-medium">2035.00</span> was premature. The trend continued to 2042.00."
                                    </p>
<div className="flex items-center gap-6 pt-4 border-t border-[#ff4f00]/10">
<div>
<div className="text-[10px] text-slate-500 uppercase font-bold">Realized Gain</div>
<div className="text-sm font-medium text-emerald-400 flex items-center gap-1">+45 pips <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div>
<div className="text-[10px] text-slate-500 uppercase font-bold">Potential Gain</div>
<div className="text-sm font-medium text-slate-300">+115 pips</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500">
<span>Guideline: Use trailing stop next time.</span>
<span className="flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer transition-colors font-medium">View Chart <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 overflow-hidden relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">

<div className="md:w-1/2 order-2 md:order-1">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Integrated directly  into your workflow.
                </h2>
<p className="text-lg text-slate-400 font-light mb-10 max-w-md">
                    No need to switch apps. Süno lives inside your trading dashboard. Access your daily condition reports and trade audits with a single tap.
                </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/30 shrink-0 group hover:border-[#ff4f00]/30 transition-colors">
<iconify-icon className="text-2xl text-[#ff4f00]" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-white">Push Notifications</h4>
<p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">Get alerted when Süno detects a change in market sentiment relevant to your open positions.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/30 shrink-0 group hover:border-emerald-500/30 transition-colors">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-white">Historical Review</h4>
<p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">Browse your monthly report card to see how your trading discipline has improved over time.</p>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 flex justify-center relative order-1 md:order-2">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#ff4f00]/20 rounded-full opacity-60"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff4f00]/10 rounded-full blur-3xl mix-blend-screen"></div>

<div className="relative bg-black w-[300px] h-[600px] rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
<div className="w-full h-full bg-[#111] rounded-[2.5rem] overflow-hidden flex flex-col relative">

<div className="h-20 pt-8 px-5 bg-[#1a1a1a] flex justify-between items-center z-10 border-b border-white/5">
<iconify-icon className="text-xl text-white" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-bold text-sm text-white">Portfolio</span>
<iconify-icon className="text-xl text-white" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="px-5 space-y-4 pt-4 opacity-40">
<div className="h-32 bg-slate-800 rounded-xl w-full"></div>
<div className="h-16 bg-slate-800 rounded-xl w-full"></div>
<div className="h-16 bg-slate-800 rounded-xl w-full"></div>
<div className="h-16 bg-slate-800 rounded-xl w-full"></div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-[#1a1a1a] rounded-t-3xl p-5 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] animate-float-delayed border-t border-white/5" style={{animationDuration: '5s'}}>

<div className="absolute top-10 right-0 opacity-10 rotate-12 pointer-events-none">
<iconify-icon className="text-9xl text-[#ff4f00]" icon="solar:infinity-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-6"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-9 h-9 rounded-lg bg-[#ff4f00] flex items-center justify-center shadow-lg shadow-orange-900/30 ring-1 ring-white/10">
<iconify-icon className="text-white text-lg" icon="solar:infinity-bold"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-bold">Süno Daily Report</h3>
<p className="text-[10px] text-slate-400 font-medium">Generated 5 mins ago</p>
</div>
</div>
<div className="space-y-3">
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-3 backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Market Condition</span>
<span className="text-[10px] text-white font-bold uppercase">Volatile</span>
</div>
<div className="text-xs text-slate-300 font-light leading-snug">Avoid breakout strategies today. Range trading is favored.</div>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-3 backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Yesterday's Review</span>
</div>
<div className="flex items-center justify-between mb-1">
<div className="text-xs text-slate-300 font-light">Win Rate</div>
<div className="text-xs font-bold text-emerald-400">65%</div>
</div>
<div className="w-full bg-slate-700 h-1 rounded-full">
<div className="bg-emerald-500 h-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{width: '65%'}}></div>
</div>
</div>
<button className="w-full bg-white text-slate-950 text-xs font-bold py-3.5 rounded-xl mt-2 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                        View Full Analysis
                                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="bg-[#ff4f00] rounded p-1 flex items-center justify-center shadow-lg shadow-orange-900/20">
<iconify-icon className="text-white text-sm" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-white font-bold text-lg tracking-tight">süno</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[160px] font-light">
                        The integrated trading environment for modern investors.
                    </p>
</div>

<div>
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Features</h4>
<ul className="space-y-3 text-xs text-slate-400 font-light">
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Daily Reports</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Sentiment Analysis</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Trade Audits</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Platform</h4>
<ul className="space-y-3 text-xs text-slate-400 font-light">
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Mobile App</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Web Trader</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-xs text-slate-400 font-light">
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Community</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-slate-400 font-light">
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#ff4f00] transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-end gap-6">
<p className="text-[10px] text-slate-600 leading-relaxed max-w-2xl font-light">
<strong>Risk Warning:</strong> Trading involves risk. Süno is an AI-powered analytical tool designed to provide insights and optimization suggestions based on historical data and market sentiment. It does not guarantee future results or profits. All trading decisions remain the sole responsibility of the user.
                </p>
<div className="flex items-center gap-4">
<iconify-icon className="text-slate-600 hover:text-[#ff4f00] cursor-pointer transition-colors" icon="solar:brand-twitter-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-slate-600 hover:text-[#ff4f00] cursor-pointer transition-colors" icon="solar:brand-discord-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-[10px] text-slate-600 font-light whitespace-nowrap">
                        © 2024 Süno Intelligence.
                    </p>
</div>
</div>
</div>
</footer>

    </>
  );
}
