import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
black: '#050505',
dark: '#0A0A0A',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Simple Countdown Timer
        const countContainer = document.getElementById('countdown');
        let totalSeconds = 4 * 3600 + 23 * 60 + 12; // Start from 04:23:12

        setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
                const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
                const s = (totalSeconds % 60).toString().padStart(2, '0');
                
                countContainer.innerHTML = `<span>${h}</span><span class="text-zinc-600">:</span><span>${m}</span><span class="text-zinc-600">:</span><span>${s}</span>`;
            }
        }, 1000);

        // Simple Stock Counter Decrement
        const stockEl = document.getElementById('stock-count');
        let stock = 14;
        
        // Randomly decrease stock every 10-30 seconds
        function decreaseStock() {
            if (stock > 2) {
                stock--;
                stockEl.innerText = `${stock} Left`;
                setTimeout(decreaseStock, Math.random() * 20000 + 10000);
            }
        }
        setTimeout(decreaseStock, 15000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
                STEALTH
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#specs">Tech Specs</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span id="stock-count">14 Left</span>
</div>
<button className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all duration-300">
                    Order
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shimmer">
<span className="text-xs font-medium text-white tracking-wide uppercase">Limited Release</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 glow-text pb-2">
                Invisible Power.<br/>
                Absolute Focus.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                The definitive spatial computing experience, now in matte black. 
                Engineered for immersion with zero light leakage and the all-new M3 stealth architecture.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto overflow-hidden">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Pre-order Stealth Edition
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-zinc-800 text-zinc-300 rounded-full font-medium text-sm hover:border-zinc-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
                    View Trailer
                </button>
</div>

<div className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass-card group">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="w-full h-full bg-zinc-900 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50"></div>
<div className="w-2/3 h-2/3 bg-black border border-white/10 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.05)] relative z-0 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<span className="text-zinc-800 font-medium tracking-widest text-2xl">VISION PRO <span className="text-white">STEALTH</span></span>
</div>

<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 blur-3xl rounded-full animate-pulse-slow"></div>
</div>
<div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
<div className="glass-card px-4 py-2 rounded-lg flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Watch The Film</span>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-400">Pre-order window closes in:</span>
</div>
<div className="flex items-center gap-2 font-mono text-lg text-white tracking-tight" id="countdown">
<span>04</span><span className="text-zinc-600">:</span><span>23</span><span className="text-zinc-600">:</span><span>12</span>
</div>
</div>
</div>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Engineered for Silence.</h2>
<p className="text-zinc-400 max-w-xl">Every component has been redesigned to disappear, leaving only you and your content.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:soundwave-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Spatial Audio Pro</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Next-generation ray tracing audio engine maps sound to your environment with sub-millimeter precision.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Midnight Finish</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Anodized aluminum frame with a diamond-like carbon coating. Absorbs 99.8% of ambient light reflections.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">M3 Stealth Chip</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Unlocked performance cores running silently. 20% faster rendering with optimized thermal dispersion.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/20" id="specs">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">Technical Specifications</h2>
<div className="space-y-4">

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-base font-medium text-zinc-200">Display &amp; Optics</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-zinc-400 grid grid-cols-2 gap-4">
<div>
<p className="text-zinc-500 mb-1">Resolution</p>
<p className="text-zinc-200">23 million pixels</p>
</div>
<div>
<p className="text-zinc-500 mb-1">Refresh Rate</p>
<p className="text-zinc-200">90Hz / 96Hz / 100Hz</p>
</div>
<div className="col-span-2 border-t border-white/5 pt-4 mt-2">
<p className="text-zinc-500 mb-1">Lens Technology</p>
<p className="text-zinc-200">Custom catadioptric lenses with darkened periphery</p>
</div>
</div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-base font-medium text-zinc-200">Processor &amp; Memory</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-zinc-400 grid grid-cols-2 gap-4">
<div>
<p className="text-zinc-500 mb-1">Main Chip</p>
<p className="text-zinc-200">Apple M3 (Stealth Tuning)</p>
</div>
<div>
<p className="text-zinc-500 mb-1">R1 Chip</p>
<p className="text-zinc-200">12ms photon-to-photon latency</p>
</div>
</div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-base font-medium text-zinc-200">Sensors &amp; Cameras</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-zinc-400">
<ul className="space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="solar:check-circle-linear"></iconify-icon> LiDAR Scanner</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="solar:check-circle-linear"></iconify-icon> TrueDepth Camera</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="solar:check-circle-linear"></iconify-icon> 2 Main Cameras (High-Res)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="solar:check-circle-linear"></iconify-icon> 4 Eye-tracking cameras</li>
</ul>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12">Early Impressions</h2>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="glass-card min-w-[300px] md:min-w-[400px] p-8 rounded-2xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-zinc-200 font-light italic mb-6">"The Midnight Finish isn't just a color, it completely changes the immersion. The light reflections are gone. It's just you and the data."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">VP Design, TechFlow</p>
</div>
</div>
</div>

<div className="glass-card min-w-[300px] md:min-w-[400px] p-8 rounded-2xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-zinc-200 font-light italic mb-6">"I didn't think Spatial Audio could get better, but the Stealth Edition's ray tracing is terrifyingly accurate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div>
<p className="text-sm font-medium text-white">Marcus Chen</p>
<p className="text-xs text-zinc-500">Director, FrameOne</p>
</div>
</div>
</div>

<div className="glass-card min-w-[300px] md:min-w-[400px] p-8 rounded-2xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-zinc-200 font-light italic mb-6">"The M3 chip handles my entire 3D workflow without a whisper. This is the future of professional work."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div>
<p className="text-sm font-medium text-white">Elena Rodriguez</p>
<p className="text-xs text-zinc-500">Architect</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Enter the void.</h2>
<p className="text-zinc-400 mb-10 text-lg">Limited stock available for this drop. Ships late 2024.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full outline-none focus:border-white/30 w-full transition placeholder:text-zinc-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-zinc-200 transition shrink-0">
                    Reserve Now
                </button>
</form>
<p className="text-xs text-zinc-600 mt-4">By reserving, you agree to our Terms of Service.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium text-white tracking-tight">STEALTH</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Apple Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
