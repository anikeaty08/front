import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
// Flashlight Effect Script
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
const cards = document.querySelectorAll(".flashlight-card");
document.addEventListener("mousemove", (e) => {
cards.forEach((card) => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty("--mouse-x", `${x}px`);
card.style.setProperty("--mouse-y", `${y}px`);
});
});
// Parallax Background
const parallaxBg = document.getElementById('parallax-bg');
window.addEventListener('scroll', () => {
const scrolled = window.scrollY;
if(parallaxBg) parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
});
})();



            const featureData = [
                { id: "01", sub: "The Mechanism", title: "Deflationary<br>Architecture", desc: "Every transaction executes a 3% burn on the principal amount. This permanently removes tokens from the circulating supply.", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_1600w.jpg" },
                { id: "02", sub: "Passive Income", title: "Automated<br>Reflections", desc: "Holders receive 2% of every transaction instantly. No staking, no claiming, no gas fees. Your balance grows automatically.", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d38370-5873-45cf-bab1-60a7b923dc6e_1600w.jpg" },
                { id: "03", sub: "Stability", title: "Liquidity<br>Guardian", desc: "A portion of taxes is automatically paired with PulseChain (PLS) and injected into the liquidity pool, deepening market depth.", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_1600w.jpg" },
                { id: "04", sub: "Security", title: "Audited &<br>Verified", desc: "The contract is immutable and ownership has been renounced. Liquidity is locked for 100 years.", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_1600w.webp" }
            ];
            let currentFeature = 2; // Start at 03 (index 2)
            function updateFeature(index) {
                if(index < 0) index = featureData.length - 1; if(index >= featureData.length) index = 0; currentFeature = index;
                const d = featureData[index];
                const elems = ['feature-img', 'feature-title', 'feature-desc', 'feature-sub'];
                elems.forEach(id => document.getElementById(id).classList.add('opacity-0', 'translate-y-4'));
                
                setTimeout(() => {
                    document.getElementById('feature-img').src = d.img; 
                    document.getElementById('feature-title').innerHTML = d.title;
                    document.getElementById('feature-desc').innerText = d.desc; 
                    document.getElementById('feature-sub').innerHTML = `<span class="iconify" data-icon="solar:layers-minimalistic-bold-duotone"></span> ${d.sub}`;
                    renderDots();
                    elems.forEach(id => document.getElementById(id).classList.remove('opacity-0', 'translate-y-4'));
                }, 300);
            }
            function renderDots() {
                const container = document.getElementById('feature-dots'); container.innerHTML = '';
                featureData.forEach((_, i) => {
                    const btn = document.createElement('button'); 
                    btn.innerText = '0' + (i + 1);
                    btn.className = i === currentFeature ? 'text-white border-b border-emerald-500 pb-1 transition-all' : 'text-zinc-600 hover:text-zinc-400 transition-all';
                    btn.onclick = () => updateFeature(i); container.appendChild(btn);
                });
            }
            document.getElementById('btn-prev').onclick = () => updateFeature(currentFeature - 1);
            document.getElementById('btn-next').onclick = () => updateFeature(currentFeature + 1);
            renderDots();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<div className="fixed inset-0 -z-50 overflow-hidden bg-black">
<div className="absolute inset-0 h-[120%] w-full transition-transform duration-75 ease-linear will-change-transform mask-vertical" id="parallax-bg">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="" src="https://emerald-quickest-swallow-922.mypinata.cloud/ipfs/bafybeifmytg3rwztighnf6djmbwobjaictshwvkf6q6lypq5rnbpjmaa6e"></video>
<div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-[1px]"></div>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '6rem 6rem', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>

<nav className="z-50 sticky top-4 mx-auto w-[95%] max-w-7xl rounded-2xl border border-white/5 bg-[#050505]/60 backdrop-blur-xl transition-all duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]" style={{-FxFilter: 'liquid-glass(0.1, 0.1)'}}>
<div className="flex h-16 px-6 items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300">
<span className="iconify" data-icon="solar:shield-star-bold-duotone" data-width="20"></span>
</div>
<span className="text-sm font-medium tracking-wide text-white font-manrope">THE ARK</span>
</a>
<div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest text-zinc-400 uppercase font-mono">
<a className="hover:text-white transition-colors flex items-center gap-2" href="#features">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Ecosystem
                    </a>
<a className="hover:text-white transition-colors" href="#terminal">Terminal</a>
<a className="hover:text-white transition-colors" href="#vaults">Vaults</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="group relative flex items-center gap-2 overflow-hidden rounded-full py-1.5 px-4 text-[10px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] bg-white/5 border border-white/5 hover:border-emerald-500/30 font-mono">
<span>Connect</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="solar:wallet-bold-duotone" data-width="14"></span>
</button>
</div>
</div>
</nav>

<header className="relative z-10 pt-24 pb-32">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="max-w-3xl">

<div className="flex items-center gap-3 mb-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400/80 font-mono">
                        Protocol v2.1 Live
                    </span>
</div>
<h1 className="text-5xl md:text-8xl leading-[0.95] text-glow animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-white tracking-tighter font-manrope mb-8 font-light">
                    Guardian of<br/>
                    the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Crypto‑Verse</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed mb-10 font-light font-manrope animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
                    A deflationary vessel forged to ferry value through the storm. 
                    <span className="text-zinc-200">Burn supply. Secure yield.</span>
</p>
<div className="flex flex-wrap items-center gap-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">

<a className="group flex relative overflow-hidden rounded-full py-4 px-8 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] bg-zinc-900 border border-emerald-500/30 font-mono" href="https://pulsex.com" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-2">
                            Initialize Swap
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-bold-duotone" data-width="16"></span>
</span>
</a>
<a className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors font-mono flex items-center gap-2" href="#audit">
<span className="iconify text-emerald-500" data-icon="solar:shield-check-bold-duotone" data-width="16"></span>
                         Audited
                    </a>
</div>
</div>

<div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block pointer-events-none animate-on-scroll [animation:animationIn_1.2s_ease-out_0.5s_both]">
<div className="w-full h-full rounded-full bg-emerald-500/10 blur-[100px] animate-pulse"></div>
</div>
</div>
</header>

<section className="border-y border-white/5 relative z-20 bg-[#050505]/40 backdrop-blur-sm mask-horizontal">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 max-w-7xl mx-auto">
<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-default animate-on-scroll [animation:animationIn_0.6s_ease-out_0.1s_both]">
<span className="flex items-center gap-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 font-mono">
<span className="iconify" data-icon="solar:graph-up-bold-duotone"></span> Price
                </span>
<h3 className="text-xl font-medium font-manrope text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">$0.0093</h3>
<p className="text-xs text-emerald-500 flex items-center gap-1 font-mono">+4.2%</p>
</div>
<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-default animate-on-scroll [animation:animationIn_0.6s_ease-out_0.2s_both]">
<span className="flex items-center gap-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 font-mono">
<span className="iconify" data-icon="solar:flame-bold-duotone"></span> Burned
                </span>
<h3 className="text-xl font-medium font-manrope text-white tracking-tight mb-1 group-hover:text-rose-400 transition-colors">14,203,991</h3>
<p className="text-xs text-zinc-400 font-mono">ARK Removed</p>
</div>
<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-default animate-on-scroll [animation:animationIn_0.6s_ease-out_0.3s_both]">
<span className="flex items-center gap-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 font-mono">
<span className="iconify" data-icon="solar:users-group-rounded-bold-duotone"></span> Holders
                </span>
<h3 className="text-xl font-medium font-manrope text-white tracking-tight mb-1 group-hover:text-sky-400 transition-colors">18,492</h3>
<p className="text-xs text-zinc-400 font-mono">Count</p>
</div>
<div className="relative p-8 border-b-2 md:border-b-0 md:border-t-2 border-emerald-500/50 bg-emerald-500/5 animate-on-scroll [animation:animationIn_0.6s_ease-out_0.4s_both]">
<span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest mb-2 text-emerald-400 font-mono">
<span className="iconify" data-icon="solar:server-square-bold-duotone"></span> Block
                </span>
<h3 className="text-xl font-medium font-manrope text-white tracking-tight mb-1">#19,203,441</h3>
<p className="text-xs text-zinc-400 flex items-center gap-2 font-mono"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Synced</p>
</div>
</div>
</section>

<section className="overflow-hidden border-b border-white/5 relative bg-[#050505]" id="features">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] max-w-7xl mx-auto">

<div className="lg:border-r border-b lg:border-b-0 border-white/5 p-12 relative flex items-center justify-center overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-emerald-900/5 to-[#050505]"></div>
<div className="aspect-square w-full max-w-md relative z-10">
<div className="relative w-full h-full rounded-2xl border-gradient before:rounded-2xl shadow-2xl shadow-black/50">
<img alt="Feature Visual" className="opacity-90 mix-blend-lighten w-full h-full object-cover rounded-2xl mask-vertical" id="feature-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a7abaa-5616-4f75-97c0-48f5bbccaef8_1600w.png"/>
</div>
</div>
</div>

<div className="p-12 lg:p-20 flex flex-col justify-center relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest mb-6 text-emerald-400 block transition-all duration-300 font-mono" id="feature-sub">
<span className="iconify" data-icon="solar:layers-minimalistic-bold-duotone"></span>
                    Stability Mechanism
                </span>
<h2 className="text-4xl lg:text-5xl text-white mb-6 min-h-[2.4em] transition-all duration-300 font-manrope tracking-tighter font-light leading-tight" id="feature-title">Liquidity<br/>Guardian</h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light min-h-[5em] transition-all duration-300 font-manrope" id="feature-desc">A portion of taxes is automatically paired with PulseChain (PLS) and injected into the liquidity pool, deepening market depth and reducing volatility over time.</p>
<div className="flex items-center gap-6">
<div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
<button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white text-zinc-500 transition-all" id="btn-prev">
<span className="iconify" data-icon="solar:arrow-left-linear" data-width="20"></span>
</button>
<div className="w-px h-6 bg-white/10 self-center"></div>
<button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white text-zinc-500 transition-all" id="btn-next">
<span className="iconify" data-icon="solar:arrow-right-linear" data-width="20"></span>
</button>
</div>
<div className="flex gap-4 text-[10px] font-semibold tracking-widest font-mono" id="feature-dots">

</div>
</div>
</div>
</div>

</section>

<section className="overflow-hidden bg-[#050505] border-b border-white/5 pt-24 pb-24 relative" id="terminal">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-16 justify-between animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl text-white leading-none mb-6 font-manrope tracking-tighter font-light">The Ecosystem</h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-md font-light font-manrope">Real-time visualization of the protocol's health.</p>
</div>
<div className="flex items-center gap-4 text-[10px] font-semibold tracking-widest uppercase mb-2 text-emerald-400 font-mono">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live Data Feed
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 flashlight-card rounded-2xl border border-white/5 bg-zinc-900/20 min-h-[400px] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="z-10 flex flex-col p-8 absolute inset-0">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] font-mono text-zinc-600">ark_node — v2.1.0</span>
</div>

<div className="font-mono text-xs space-y-3 text-zinc-400 overflow-hidden relative mask-vertical h-full">
<div className="opacity-50">&gt; connecting to node...</div>
<div className="text-emerald-500">&gt; connection established (32ms)</div>
<div className="flex justify-between border-b border-white/5 pb-1 mt-4 text-[10px] tracking-wider text-zinc-500">
<span>TYPE</span> <span>AMOUNT</span> <span>TIME</span>
</div>
<div className="flex justify-between text-white">
<span className="text-emerald-400">BUY</span> <span>15,000 ARK</span> <span className="text-zinc-500">2s ago</span>
</div>
<div className="flex justify-between">
<span className="text-rose-400">SELL</span> <span>4,200 ARK</span> <span className="text-zinc-500">12s ago</span>
</div>
<div className="flex justify-between">
<span className="text-sky-400">ADD_LIQ</span> <span>85,000 ARK</span> <span className="text-zinc-500">45s ago</span>
</div>
<div className="flex justify-between text-white/50">
<span className="text-emerald-400/50">BUY</span> <span>2,100 ARK</span> <span className="text-zinc-500">51s ago</span>
</div>
</div>
<div className="mt-auto pt-4 flex gap-2">
<span className="text-emerald-500">➜</span>
<span className="text-zinc-500 font-mono text-xs typing-effect">view_contract_status()</span>
</div>
</div>
</div>

<div className="flashlight-card rounded-2xl border border-white/5 bg-zinc-900/20 flex flex-col justify-between p-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-zinc-300">
<span className="iconify" data-icon="solar:chart-2-bold-duotone" data-width="24"></span>
</div>
<h3 className="text-xl text-white mb-2 font-manrope font-medium">Market Data</h3>
<p className="text-xs text-zinc-400 font-manrope leading-relaxed">Deep liquidity paired with automated buybacks.</p>
</div>

<svg className="w-full h-24 text-emerald-500/20 stroke-current mt-4" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 50 L0 40 Q25 40 25 30 T50 25 T75 15 L100 5 L100 50 Z" fill="currentColor" fillOpacity="0.2"></path>
<path className="text-emerald-500" d="M0 40 Q25 40 25 30 T50 25 T75 15 L100 5" fill="none" strokeWidth="1"></path>
</svg>
</div>

<div className="flashlight-card rounded-2xl border border-white/5 bg-zinc-900/20 p-8 flex flex-col justify-end min-h-[280px] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-zinc-300">
<span className="iconify" data-icon="solar:users-group-two-rounded-bold-duotone" data-width="24"></span>
</div>
<h3 className="text-xl text-white mb-2 font-manrope font-medium">Community</h3>
<p className="text-xs text-zinc-400 font-manrope leading-relaxed">Join 5,000+ holders. Access private channels.</p>
</div>
</div>

<div className="md:col-span-2 flashlight-card rounded-2xl border border-white/5 bg-zinc-900/20 p-8 flex flex-col justify-center min-h-[280px] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<div className="relative z-10 max-w-lg">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-zinc-300">
<span className="iconify" data-icon="solar:lock-keyhole-bold-duotone" data-width="24"></span>
</div>
<h3 className="text-xl text-white mb-2 font-manrope font-medium">Security First</h3>
<p className="text-sm text-zinc-400 font-manrope leading-relaxed">Contracts audited by industry leaders. Liquidity locked via locker contracts. No admin keys, no pause functions. Absolute immutability.</p>
<div className="flex gap-4 mt-6">
<span className="iconify text-zinc-600" data-icon="simple-icons:ethereum" data-width="20"></span>
<span className="iconify text-zinc-600" data-icon="simple-icons:binance" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-b border-white/5 pt-32 pb-32 relative" id="vaults">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4"><span className="w-1 h-1 rounded-full bg-emerald-500"></span><span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 font-mono">Staking Pools Open</span></div>
<h2 className="text-4xl md:text-6xl text-white mb-6 font-manrope tracking-tighter font-light">Lock supply,<br/>multiply rewards</h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-md font-manrope font-light">Choose your commitment level. Longer locks earn higher multipliers.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="flashlight-card flex flex-col p-8 rounded-2xl border border-white/5 bg-[#0A0A0B] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="relative z-10 flex justify-between items-start mb-8">
<div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
<span className="iconify" data-icon="solar:anchor-bold-duotone" data-width="24"></span>
</div>
<div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase font-mono bg-amber-500/10 px-2 py-1.5 rounded">Entry</div>
</div>
<div className="relative z-10 mb-8">
<h3 className="text-white text-lg font-semibold tracking-wide font-manrope uppercase mb-1">Bronze</h3>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tighter font-manrope font-light">1x</span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Multiplier</span>
</div>
</div>
<ul className="relative z-10 space-y-4 mb-10 flex-grow border-t border-white/5 pt-6">
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-amber-500" data-icon="solar:check-circle-bold-duotone"></span> Entry level blessing</li>
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-amber-500" data-icon="solar:check-circle-bold-duotone"></span> 30-89 Days Lock</li>
</ul>
<button className="relative z-10 w-full py-3 bg-amber-500/10 hover:bg-amber-500 hover:text-white text-amber-500 font-semibold font-mono text-[10px] uppercase tracking-widest rounded-lg transition-all duration-300">Enter Bronze</button>
</div>

<div className="flashlight-card flex flex-col p-8 rounded-2xl border border-white/5 bg-[#0A0A0B] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<div className="relative z-10 flex justify-between items-start mb-8">
<div className="p-3 rounded-xl bg-zinc-300/10 text-zinc-300">
<span className="iconify" data-icon="solar:shield-bold-duotone" data-width="24"></span>
</div>
<div className="text-[9px] font-bold tracking-widest text-zinc-300 uppercase font-mono bg-zinc-300/10 px-2 py-1.5 rounded">Standard</div>
</div>
<div className="relative z-10 mb-8">
<h3 className="text-white text-lg font-semibold tracking-wide font-manrope uppercase mb-1">Silver</h3>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tighter font-manrope font-light">1.5x</span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Multiplier</span>
</div>
</div>
<ul className="relative z-10 space-y-4 mb-10 flex-grow border-t border-white/5 pt-6">
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-zinc-300" data-icon="solar:check-circle-bold-duotone"></span> Enhanced rewards</li>
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-zinc-300" data-icon="solar:check-circle-bold-duotone"></span> 90-179 Days Lock</li>
</ul>
<button className="relative z-10 w-full py-3 bg-zinc-300/10 hover:bg-zinc-300 hover:text-black text-zinc-300 font-semibold font-mono text-[10px] uppercase tracking-widest rounded-lg transition-all duration-300">Enter Silver</button>
</div>

<div className="flashlight-card flex flex-col p-8 rounded-2xl border border-white/5 bg-[#0A0A0B] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="relative z-10 flex justify-between items-start mb-8">
<div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
<span className="iconify" data-icon="solar:crown-bold-duotone" data-width="24"></span>
</div>
<div className="text-[9px] font-bold tracking-widest text-yellow-400 uppercase font-mono bg-yellow-400/10 px-2 py-1.5 rounded">Premium</div>
</div>
<div className="relative z-10 mb-8">
<h3 className="text-white text-lg font-semibold tracking-wide font-manrope uppercase mb-1">Gold</h3>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tighter font-manrope font-light">2x</span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Multiplier</span>
</div>
</div>
<ul className="relative z-10 space-y-4 mb-10 flex-grow border-t border-white/5 pt-6">
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-yellow-400" data-icon="solar:check-circle-bold-duotone"></span> Governance rights</li>
<li className="text-xs text-zinc-300 font-manrope flex items-center gap-3"><span className="iconify text-yellow-400" data-icon="solar:check-circle-bold-duotone"></span> 180-364 Days Lock</li>
</ul>
<button className="relative z-10 w-full py-3 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black text-yellow-400 font-semibold font-mono text-[10px] uppercase tracking-widest rounded-lg transition-all duration-300">Enter Gold</button>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#050505] border-white/5 border-t pt-20 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="flex flex-col justify-between h-full">
<div className="flex items-center gap-3 mb-8">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<span className="iconify" data-icon="solar:shield-star-bold-duotone"></span>
</div>
<span className="text-lg font-medium tracking-wide text-white font-manrope">THE ARK</span>
</div>
<div className="mt-auto">
<p className="text-[10px] text-zinc-600 font-mono">© 2025 The Ark Protocol. Immutable.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">Protocol</h5>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-manrope" href="#">Contract</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-manrope" href="#">Tokenomics</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">Resources</h5>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-manrope" href="#">Audit</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors font-manrope" href="#">Whitepaper</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">Socials</h5>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="simple-icons:x" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="simple-icons:telegram" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="simple-icons:discord" data-width="16"></span></a>
</div>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
