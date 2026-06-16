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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05050f]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<div className="w-5 h-5 bg-indigo-500 rounded-sm"></div>
                IntelliSend
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign in</button>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-4 rounded-full transition-all border border-white/10">Start Building</button>
</div>
</div>
</nav>

<main className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-white/5">

<div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start gap-8 max-w-2xl">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs tracking-widest uppercase text-indigo-300 font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Enterprise Delivery Protocol
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Automate with <br/>
<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent glow-text">
                            Failover Intelligence.
                        </span>
</h1>
<p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-lg">
                        IntelliSend is the high-performance automation layer for modern teams. Connect 20+ providers, generate AI-optimized messaging, and let our failover logic handle delivery.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<button className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)] flex items-center justify-center gap-2.5" type="button">
                            Get API Keys 
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="group px-8 py-3.5 rounded-lg border border-white/10 text-slate-200 font-medium text-lg hover:bg-white/5 transition flex items-center justify-center gap-2.5 backdrop-blur-sm" type="button">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors" data-lucide="book-open"></i>
                            Documentation
                        </button>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-white/5 w-full mt-4">
<div className="flex -space-x-3">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#05050f] grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#05050f] grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#05050f] grayscale opacity-70" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm text-slate-500">
                            Trusted by <span className="text-slate-300 font-medium">4,000+</span> developers
                        </div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px]">
<div className="absolute top-1/2 -translate-y-1/2 left-0 w-[140%] perspective-container">
<div className="relative transform rotate-y-[-12deg] rotate-x-[6deg] translate-x-10 hover:rotate-y-[-8deg] hover:rotate-x-[4deg] hover:translate-x-5 transition-all duration-700 ease-out preserve-3d">
<div className="relative rounded-xl bg-[#0f111a] border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
<div className="h-10 bg-[#1e2029] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 px-3 py-1 bg-black/20 rounded text-[10px] text-slate-500 font-mono border border-white/5">dashboard.intellisend.io</div>
</div>
<img alt="Dashboard Interface" className="w-full h-auto opacity-90" src="https://store-wp.mui.com/wp-content/uploads/2019/08/tabler-react.com_-min-e1565617941333.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent opacity-20 pointer-events-none"></div>
</div>
</div>
</div>
</div>

<div className="lg:hidden relative mt-8 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
<img alt="Mobile Dashboard" className="w-full opacity-90" src="https://store-wp.mui.com/wp-content/uploads/2019/08/tabler-react.com_-min-e1565617941333.png"/>
</div>
</div>
</div>
</main>

<section className="relative py-24 lg:py-32 overflow-hidden bg-[#05050f]">

<div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="flex flex-col items-start gap-6 lg:sticky lg:top-32 self-start max-w-lg">
<div className="flex items-center gap-2 text-indigo-400 font-semibold tracking-tight text-sm uppercase">
<i className="w-4 h-4" data-lucide="layers"></i>
                        Modular Solutions
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
                        A fully integrated suite of financial and payments products
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed">
                        Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use IntelliSend to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                    </p>
<div className="mt-4 pt-8 border-t border-white/10 w-full flex flex-col gap-6">
<a className="group inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors gap-2" href="#">
                            Start with Payments
                            <span className="bg-indigo-500/10 p-0.5 rounded-full group-hover:translate-x-1 transition-transform">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</a>
<div>
<h3 className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-3">See also</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors cursor-pointer group">
<div className="mt-0.5"><i className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" data-lucide="file-bar-chart"></i></div>
<span><strong className="text-slate-300">Tax</strong> for automating tax registration, collection, and filing</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors cursor-pointer group">
<div className="mt-0.5"><i className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" data-lucide="shield-check"></i></div>
<span><strong className="text-slate-300">Radar</strong> for AI-powered fraud protection</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors cursor-pointer group">
<div className="mt-0.5"><i className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" data-lucide="smartphone"></i></div>
<span><strong className="text-slate-300">Terminal</strong> for custom in-person payments</span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-[600px] mx-auto lg:mx-0">

<div className="absolute inset-0 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none" viewbox="0 0 600 700">

<defs>
<lineargradient id="line-grad-1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(16, 185, 129, 0)"></stop>
<stop offset="50%" stop-color="rgba(16, 185, 129, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0.5)"></stop>
</lineargradient>
<lineargradient id="line-grad-2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(99, 102, 241, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(236, 72, 153, 0)"></stop>
</lineargradient>
</defs>

<path className="opacity-30" d="M300 350 L120 180" stroke="url(#line-grad-1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="opacity-30" d="M300 350 L480 180" stroke="url(#line-grad-1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="opacity-30" d="M300 350 L120 520" stroke="url(#line-grad-2)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="opacity-30" d="M300 350 L480 520" stroke="url(#line-grad-2)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M300 350 L300 120" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-24 h-24 rounded-2xl bg-[#0f111a] border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)] flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 group cursor-default">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wide text-slate-300">Payments</span>
</div>
</div>


<div className="absolute left-[15%] top-[20%] z-10 animate-pulse" style={{animationDuration: '4s'}}>
<div className="w-16 h-16 rounded-xl glass-panel flex flex-col items-center justify-center gap-1 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
<i className="w-5 h-5 text-cyan-400" data-lucide="link"></i>
<span className="text-[9px] text-slate-400">Connect</span>
</div>
</div>

<div className="absolute right-[15%] top-[20%] z-10 animate-pulse" style={{animationDuration: '5s'}}>
<div className="w-16 h-16 rounded-xl glass-panel flex flex-col items-center justify-center gap-1 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
<i className="w-5 h-5 text-green-400" data-lucide="receipt"></i>
<span className="text-[9px] text-slate-400">Billing</span>
</div>
</div>

<div className="absolute left-[15%] bottom-[20%] z-10 animate-pulse" style={{animationDuration: '6s'}}>
<div className="w-16 h-16 rounded-xl glass-panel flex flex-col items-center justify-center gap-1 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
<i className="w-5 h-5 text-pink-400" data-lucide="radar"></i>
<span className="text-[9px] text-slate-400">Radar</span>
</div>
</div>

<div className="absolute right-[15%] bottom-[20%] z-10 animate-pulse" style={{animationDuration: '4.5s'}}>
<div className="w-16 h-16 rounded-xl glass-panel flex flex-col items-center justify-center gap-1 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
<i className="w-5 h-5 text-yellow-400" data-lucide="terminal-square"></i>
<span className="text-[9px] text-slate-400">Terminal</span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-[10%] z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-400" data-lucide="landmark"></i>
</div>
</div>

<div className="absolute top-[40%] right-0 translate-x-4 lg:translate-x-8 z-30 w-64 glass-panel rounded-lg p-3 border-l-4 border-l-green-500 shadow-2xl animate-[bounce_5s_infinite]">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-slate-400 font-mono uppercase">Payment Succeeded</span>
</div>
<span className="text-[10px] text-slate-500">Now</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-slate-400">Order #9125</div>
<div className="text-sm font-medium text-white">Hanako Yamada</div>
</div>
<div className="text-green-400 font-mono text-sm">$150.00</div>
</div>
</div>

<div className="absolute bottom-[35%] left-0 -translate-x-4 lg:-translate-x-8 z-30 w-64 glass-panel rounded-lg p-3 border-l-4 border-l-blue-500 shadow-2xl animate-[bounce_6s_infinite]" style={{animationDelay: '1s'}}>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<span className="text-[10px] text-slate-400 font-mono uppercase">Processing</span>
</div>
<span className="text-[10px] text-slate-500">2s ago</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-slate-400">Order #9124</div>
<div className="text-sm font-medium text-white">Jacques Muller</div>
</div>
<div className="text-slate-300 font-mono text-sm">$200.00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
