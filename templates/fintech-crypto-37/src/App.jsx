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

        // Simple Intersection Observer for entry animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            });

            // Note: In this specific implementation, I used simple CSS animations 
            // triggered on load via the 'animate-enter' class for simplicity in a standalone block.
            // However, ensuring icons re-render if content changes dynamically is good practice.
            
            // Hover effect for 3D Phones (Optional Javascript enhancement)
            const phoneContainer = document.querySelector('.perspective-\\[2000px\\]');
            if(phoneContainer) {
                phoneContainer.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = phoneContainer.getBoundingClientRect();
                    const x = (e.clientX - left) / width;
                    const y = (e.clientY - top) / height;
                    
                    const moveX = (x - 0.5) * 10; // tilt range
                    const moveY = (y - 0.5) * 10;

                    // Apply subtle parallax to the phones if desired
                    // This is kept subtle to match the CSS hover effects already in place
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe>
</div>

<div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent pointer-events-none"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/20 backdrop-blur-md animate-enter">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors mix-blend-plus-lighter" href="#">Protocol</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors mix-blend-plus-lighter" href="#">Yields</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors mix-blend-plus-lighter" href="#">Cards</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors mix-blend-plus-lighter" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-slate-300 transition-colors hidden sm:block mix-blend-plus-lighter" href="#">Log in</a>
<a className="h-9 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition-all" href="#">
                    Get Started
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-enter delay-100 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">v2.0 is live now</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 animate-enter delay-200 leading-[1.1] drop-shadow-lg">
                    Master your money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">precision.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed animate-enter delay-300 drop-shadow-md">
                    Experience the next generation of financial control. Unified analytics, instant global settlements, and intelligent yield automation in one interface.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-enter delay-500">
<div className="relative flex-1 sm:max-w-xs group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors" data-lucide="mail"></i>
</div>
<input className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none transition-all text-sm text-white placeholder-slate-400" placeholder="email@company.com" type="email"/>
</div>
<button className="h-12 px-8 rounded-xl bg-white text-gray-950 font-medium text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5">
                        Create Account
                    </button>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-slate-400 animate-enter delay-700">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="shield-check"></i>
<span>SOC2 Certified</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="users"></i>
<span>100k+ Users</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="globe"></i>
<span>180+ Countries</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-[2000px] animate-enter delay-500">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[80px] rounded-full -z-10"></div>
<div className="relative w-[300px] sm:w-[340px] h-[580px] transform-style-3d">

<div className="absolute top-12 -left-16 sm:-left-24 w-[240px] rounded-[32px] bg-gray-900 border-gradient shadow-2xl shadow-black/50 p-2 transform -rotate-12 translate-z-[-50px] transition-transform hover:-translate-y-2 duration-500 ease-out z-0 backdrop-blur-xl">
<div className="h-full w-full bg-gray-950/90 rounded-[24px] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
<div className="p-5 relative">
<div className="w-8 h-1 rounded-full bg-white/20 mb-6"></div>
<h3 className="text-2xl font-semibold text-white leading-none tracking-tight">Grow<br/>Wealth<br/>Smartly</h3>
<div className="mt-8 space-y-3">
<div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[10px] text-slate-400">APY Yield</div>
<div className="text-xs font-semibold text-white">+5.4%</div>
</div>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
</div>
<div>
<div className="text-[10px] text-slate-400">Portfolio</div>
<div className="text-xs font-semibold text-white">Automated</div>
</div>
</div>
</div>
<button className="mt-6 w-full py-2 bg-white text-black text-xs font-bold rounded-lg">Start Investing</button>
</div>
</div>
</div>

<div className="absolute top-20 -right-16 sm:-right-24 w-[240px] rounded-[32px] bg-gray-900 border-gradient shadow-2xl shadow-black/50 p-2 transform rotate-12 translate-z-[-80px] transition-transform hover:-translate-y-2 duration-500 ease-out z-0 backdrop-blur-xl">
<div className="h-full w-full bg-gray-950/90 rounded-[24px] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 to-transparent"></div>
<div className="p-5 relative">
<div className="flex justify-between items-center mb-6">
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i>
<span className="text-xs font-medium text-slate-300">Wallet</span>
</div>
<div className="space-y-3">
<div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 p-3 rounded-xl">
<div className="text-[10px] text-indigo-300 mb-1">Total Assets</div>
<div className="text-sm font-bold text-white">$42,850.00</div>
</div>
<div className="bg-white/5 border border-white/5 p-3 rounded-xl">
<div className="text-[10px] text-slate-400 mb-1">Available</div>
<div className="text-sm font-bold text-white">$12,400.00</div>
</div>
</div>
<div className="mt-6">
<div className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">Quick Send</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-900"></div>
<div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-900"></div>
<div className="w-8 h-8 rounded-full bg-gray-600 border border-gray-900"></div>
<div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-900 flex items-center justify-center text-white text-[10px]">+</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full rounded-[40px] bg-gray-950 p-2 border-gradient shadow-2xl shadow-cyan-900/20 z-10">
<div className="h-full w-full bg-gray-950 rounded-[32px] overflow-hidden flex flex-col relative">

<div className="px-6 pt-4 flex justify-between items-center">
<span className="text-[10px] font-medium text-white">9:41</span>
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
</div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 p-0.5">
<div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-[10px] font-bold text-white">AM</div>
</div>
<div>
<div className="text-[10px] text-slate-400">Good morning,</div>
<div className="text-xs font-semibold text-white">Alex Morgan</div>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition">
<i className="w-3.5 h-3.5" data-lucide="bell"></i>
</button>
</div>

<div className="px-4 mt-4">
<div className="w-full bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-[24px] p-5 text-white shadow-lg shadow-blue-900/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="text-xs font-medium opacity-80">Total Balance</div>
<i className="w-4 h-4 opacity-80" data-lucide="wifi"></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-1">$142,894.50</div>
<div className="flex items-center gap-1 text-[10px] opacity-70 mb-6">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
<span>+$1,240.50 (2.4%) today</span>
</div>
<div className="flex justify-between items-end">
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
<div className="text-xs font-mono opacity-90">VISA Infinite</div>
</div>
</div>
</div>
</div>

<div className="px-6 mt-6 flex justify-between gap-4">
<button className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<span className="text-[10px] text-slate-400">Send</span>
</button>
<button className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-down-left"></i>
</div>
<span className="text-[10px] text-slate-400">Receive</span>
</button>
<button className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<span className="text-[10px] text-slate-400">Top up</span>
</button>
<button className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</div>
<span className="text-[10px] text-slate-400">More</span>
</button>
</div>

<div className="mt-8 px-6 pb-6 flex-1">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-white">Recent Activity</span>
<span className="text-[10px] text-cyan-400 cursor-pointer">See all</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
<i className="w-4 h-4" data-lucide="music"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Spotify Premium</div>
<div className="text-[10px] text-slate-500">Today, 9:41 AM</div>
</div>
</div>
<span className="text-xs font-medium text-white">-$14.99</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Apple Store</div>
<div className="text-[10px] text-slate-500">Yesterday</div>
</div>
</div>
<span className="text-xs font-medium text-white">-$1,299.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-down-left"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Salary Deposit</div>
<div className="text-[10px] text-slate-500">Mon, 24 Aug</div>
</div>
</div>
<span className="text-xs font-medium text-green-400">+$4,500.00</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
