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
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

<div className="flex items-center gap-2 animate-fade-up z-20">
<a className="text-xl font-semibold tracking-tighter text-white hover:text-zinc-200 transition-colors" href="#">
                    CIKKA
                </a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fade-up delay-100 hidden sm:block z-10">
<div className="flex items-center p-1 rounded-full bg-zinc-900/80 border border-zinc-800">
<button className="px-4 py-1.5 rounded-full bg-zinc-800 text-xs font-medium text-white shadow-sm border border-zinc-700/50 transition-all cursor-default">
                        For Users
                    </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
                        For Business
                    </button>
</div>
</div>

<div className="animate-fade-up delay-100 z-20">
<a className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<span>Login</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<main className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 lg:pt-0 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-12 py-12 lg:h-screen z-10">
<div className="max-w-xl">

<div className="animate-fade-up w-fit mb-8">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-medium text-purple-400 tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                        Waitlist Open
                    </span>
</div>

<h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
                        Credit Rewards for the Real World
                    </span>
</h1>

<p className="animate-fade-up delay-200 text-lg sm:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
                    Earn 1.35% cashback on bill payments. No penalties for life's delays. The card that understands you.
                </p>

<form className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 w-full max-w-md" onsubmit="event.preventDefault();">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<input className="w-full h-12 pl-10 pr-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all" placeholder="enter@email.com" required="" type="email"/>
</div>
<button className="h-12 px-6 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                        Join Early Access
                    </button>
</form>

<div className="animate-fade-up delay-400 mt-8 flex items-center gap-4 text-xs text-zinc-500">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-zinc-400">JM</div>
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-[10px] text-zinc-300">AK</div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-[10px] text-zinc-200">Ls</div>
</div>
<span>Joined by 2,000+ others this week</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[500px] lg:h-screen relative flex items-center justify-center perspective-[2000px] overflow-visible z-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[500px] bg-[#8A2BE2] opacity-20 blur-[100px] rounded-full animate-glow"></div>

<div className="animate-fade-up delay-200 animate-float relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-black rounded-[3rem] border-4 border-zinc-800 shadow-2xl rotate-y-[-12deg] rotate-x-[5deg] rotate-z-[-2deg] transition-transform duration-500 hover:rotate-0">

<div className="absolute inset-1 bg-zinc-950 rounded-[2.7rem] overflow-hidden flex flex-col">

<div className="h-8 w-full flex justify-between items-center px-6 mt-2">
<span className="text-[10px] text-white font-medium">9:41</span>
<div className="flex gap-1">
<div className="w-4 h-2.5 bg-zinc-800 rounded-[2px] border border-zinc-700"></div>
<div className="w-0.5 h-2.5 bg-zinc-800"></div>
</div>
</div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center">
<div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
<i className="w-4 h-4 text-zinc-400" data-lucide="menu"></i>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
<i className="w-4 h-4 text-zinc-400" data-lucide="bell"></i>
</div>
</div>

<div className="px-6 mt-4 flex flex-col gap-6">

<div className="w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-purple-900 to-black border border-white/10 p-5 flex flex-col justify-between shadow-lg relative overflow-hidden group">

<div className="absolute top-0 -inset-full w-full h-full block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 animate-shine group-hover:animate-none group-hover:left-[150%] transition-all duration-1000"></div>
<div className="flex justify-between items-start z-10">
<span className="text-white font-semibold tracking-widest text-sm">CIKKA</span>
<i className="w-5 h-5 text-purple-400/50" data-lucide="nfc"></i>
</div>
<div className="z-10">
<div className="text-xs text-purple-200/60 mb-1 font-mono">Current Balance</div>
<div className="text-2xl text-white font-medium tracking-tight">$12,450.00</div>
</div>
<div className="flex justify-between items-end z-10">
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<div className="w-8 h-5 rounded bg-white/10 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-red-500/80 -mr-2"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
<div className="p-2 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
<i className="w-4 h-4 text-purple-400" data-lucide="trending-up"></i>
</div>
<div className="text-[10px] text-zinc-500 font-medium">Cashback</div>
<div className="text-lg text-white font-medium">+$142.50</div>
</div>
<div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
<div className="p-2 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
<i className="w-4 h-4 text-blue-400" data-lucide="credit-card"></i>
</div>
<div className="text-[10px] text-zinc-500 font-medium">Limit</div>
<div className="text-lg text-white font-medium">$50k</div>
</div>
</div>

<div className="flex flex-col gap-4 mt-2">
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Recent Activity</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="shopping-bag"></i>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Apple Store</span>
<span className="text-[10px] text-zinc-500">Electronics</span>
</div>
</div>
<span className="text-sm text-white font-medium">-$999.00</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="coffee"></i>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Starbucks</span>
<span className="text-[10px] text-zinc-500">Food &amp; Drink</span>
</div>
</div>
<span className="text-sm text-white font-medium">-$12.50</span>
</div>
</div>
</div>

<div className="mt-auto h-16 w-full border-t border-zinc-900 bg-zinc-950/80 backdrop-blur flex justify-around items-center px-2">
<div className="p-2"><i className="w-5 h-5 text-purple-400" data-lucide="home"></i></div>
<div className="p-2"><i className="w-5 h-5 text-zinc-600" data-lucide="pie-chart"></i></div>
<div className="p-2"><i className="w-5 h-5 text-zinc-600" data-lucide="user"></i></div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
