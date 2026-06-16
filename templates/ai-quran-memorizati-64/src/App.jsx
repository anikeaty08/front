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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030014]/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
<i className="w-4 h-4" data-lucide="book-open"></i>
</div>
<span className="text-white font-semibold text-lg tracking-tight">Tahfeez</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#mission">Mission</a>
<a className="hover:text-white transition-colors" href="#download">Download</a>
</div>
<button className="hidden md:flex bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium transition-all border border-white/10 backdrop-blur-sm">
                Open Web App
            </button>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span>100% Free for Everyone</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        Perfect your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Hifz</span> with AI.
                    </h1>
<p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
                        Advanced recitation analysis, Tajweed detection, and offline memorization tools. Usually premium, now completely free for the Ummah.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                            Start Memorizing
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
                            Download App
                        </button>
</div>
<div className="mt-12 flex items-center gap-6 text-slate-500 text-xs font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="wifi-off"></i>
<span>Offline First</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="monitor-smartphone"></i>
<span>All Platforms</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Private &amp; Secure</span>
</div>
</div>
</div>

<div className="relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

<div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden shine-border min-h-[500px] flex">

<div className="w-20 lg:w-64 border-r border-white/5 bg-[#050505] hidden sm:flex flex-col p-4">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-violet-400">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div className="hidden lg:block">
<div className="text-sm text-white font-medium">Hafiz Profile</div>
<div className="text-[10px] text-slate-500">Juz 28 in progress</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 text-sm font-medium cursor-pointer">
<i className="w-4 h-4" data-lucide="mic"></i>
<span className="hidden lg:block">Recite &amp; Check</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer">
<i className="w-4 h-4" data-lucide="book"></i>
<span className="hidden lg:block">Mushaf</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
<span className="hidden lg:block">Analytics</span>
</div>
</div>
<div className="mt-auto">
<div className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5">
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-slate-400">Daily Goal</span>
<span className="text-xs text-white">85%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-[85%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#0a0a0a] p-6 lg:p-8 relative">

<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-white font-semibold text-lg">Surah Al-Mulk</h3>
<p className="text-xs text-slate-500">Verses 1-5 • Makkia</p>
</div>
<div className="flex gap-2">
<div className="px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        Live Listening
                                    </div>
</div>
</div>

<div className="space-y-4">

<div className="p-4 rounded-xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<div className="text-sm text-white font-medium">AI Analysis</div>
<div className="text-xs text-slate-400">Processing recitation...</div>
</div>
</div>
<span className="text-lg font-bold text-white">98<span className="text-sm text-slate-500 font-normal">%</span></span>
</div>

<div className="flex items-center gap-1 h-8 justify-between opacity-70">
<div className="w-1 h-3 bg-slate-700 rounded-full"></div>
<div className="w-1 h-5 bg-slate-700 rounded-full"></div>
<div className="w-1 h-8 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
<div className="w-1 h-6 bg-violet-500 rounded-full"></div>
<div className="w-1 h-4 bg-slate-700 rounded-full"></div>
<div className="w-1 h-7 bg-violet-500 rounded-full"></div>
<div className="w-1 h-3 bg-slate-700 rounded-full"></div>
<div className="w-1 h-5 bg-slate-700 rounded-full"></div>
<div className="w-1 h-2 bg-slate-700 rounded-full"></div>
<div className="w-1 h-4 bg-white rounded-full"></div> 
<div className="w-1 h-2 bg-slate-800 rounded-full"></div>
<div className="w-1 h-2 bg-slate-800 rounded-full"></div>
</div>
</div>

<div className="space-y-2 mt-6">
<div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-xs text-slate-600 font-mono">01</span>
<div className="text-right font-serif text-lg text-slate-300">تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ</div>
</div>
<i className="w-4 h-4 text-green-500" data-lucide="check-circle-2"></i>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-4">
<span className="text-xs text-violet-400 font-mono">02</span>
<div className="text-right font-serif text-lg text-white">الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ</div>
</div>
<div className="w-4 h-4 relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center justify-between">
<p className="text-sm text-slate-500">Trusted by Huffaz and educators globally</p>
<div className="flex gap-8 opacity-40 grayscale">

<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="globe"></i>
<span className="font-bold text-lg">GlobalHifz</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="school"></i>
<span className="font-bold text-lg">Al-Maqra'a</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="library"></i>
<span className="font-bold text-lg">QuranInstitute</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Premium Features. <br/><span className="text-violet-400">Zero Cost.</span></h2>
<p className="text-slate-400">We removed the paywall from Quran education. Experience state-of-the-art AI technology designed to help you memorize efficiently.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="mic-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Recitation Coach</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Get real-time feedback on your pronunciation and Tajweed. Our AI listens verse-by-verse and highlights areas for improvement instantly.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wifi-off"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">True Offline Mode</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        No internet? No problem. Download the entire database once and practice anywhere—from subway commutes to remote retreats.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="gift"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Forever Free</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        No subscriptions, no ads, no locked content. Our mission is accessibility, ensuring financial barriers never stop you from the Quran.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#05050A]">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full opacity-30"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="glass-panel rounded-xl p-4 h-64 flex items-center justify-center translate-y-8">
<div className="text-center">
<i className="w-12 h-12 text-slate-600 mx-auto mb-4" data-lucide="smartphone"></i>
<span className="text-sm text-slate-400">iOS &amp; Android</span>
</div>
</div>
<div className="glass-panel rounded-xl p-4 h-64 flex items-center justify-center">
<div className="text-center">
<i className="w-12 h-12 text-violet-500 mx-auto mb-4" data-lucide="laptop"></i>
<span className="text-sm text-white">Web &amp; Desktop</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Seamless across <br/>every device.</h2>
<p className="text-slate-400 mb-8 text-lg">
                        Start memorizing on your phone during your commute, review on your desktop at home, and quick-check on the web. Your progress syncs locally or optionally via cloud, but the core engine runs everywhere.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                            Windows, macOS, and Linux support
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                            Optimized for touch and keyboard
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                            Smart repetition scheduling system
                        </li>
</ul>
<a className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-2" href="#">
                        View System Requirements <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-[#0f0529]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Democratizing Quran Education</h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                We believe access to high-quality learning tools should not depend on payment, internet availability, or device limitations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-8 rounded-full bg-white text-slate-950 font-semibold text-base hover:bg-slate-200 transition-colors w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Download for Free
                </button>
<button className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-base hover:bg-white/10 transition-colors w-full sm:w-auto">
                    Read Our Mission
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020205] pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white font-semibold">
<i className="w-5 h-5 text-violet-500" data-lucide="book-open"></i>
                        Tahfeez
                    </div>
<p className="text-slate-500 mb-4">Empowering the Ummah with ethical AI for Quran memorization.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Web App</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Tajweed Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Ethics Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
<p>© 2024 Tahfeez. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
