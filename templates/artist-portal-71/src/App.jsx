import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to animate stream counters up to their target value
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.stream-val');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // ms
                const increment = target / (duration / 16); // 60fps approx
                let current = target - (increment * 40); // Start closer to target for realistic feel
                if(current < 0) current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString();
                        // Add slow continuous fake growth
                        setInterval(() => {
                            let val = parseInt(counter.innerText.replace(/,/g, ''));
                            counter.innerText = (val + Math.floor(Math.random() * 3)).toLocaleString();
                        }, 3500);
                    }
                };
                updateCounter();
            });

            // Fake countdown ticker
            const countdowns = document.querySelectorAll('.countdown');
            let time = 4 * 3600 + 23 * 60 + 10; // 04:23:10 in seconds
            
            setInterval(() => {
                time--;
                if(time < 0) time = 0;
                const h = Math.floor(time / 3600).toString().padStart(2, '0');
                const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
                const s = (time % 60).toString().padStart(2, '0');
                countdowns.forEach(cd => cd.innerText = `${h}:${m}:${s}`);
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-waveform"></div>
<main className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:px-8">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 animate-fade-in">
<div className="flex items-center gap-6">

<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 border border-zinc-800 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] flex items-center justify-center relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="text-3xl sm:text-4xl tracking-tighter font-medium text-white/70 relative z-10">NB</span>
</div>
<div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white mb-3">NorthSideBaby</h1>
<div className="flex flex-wrap items-center gap-3">
<span className="px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:music-notes-linear"></iconify-icon>
                            Hip-Hop / Rap
                        </span>
<span className="px-3 py-1.5 rounded-full bg-blue-950/40 backdrop-blur-md border border-blue-900/50 text-xs text-blue-400 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
                            Active Artist
                        </span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-5 min-w-[220px] shadow-lg flex flex-col relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="relative z-10">
<p className="text-xs text-zinc-400 mb-1.5 flex items-center gap-1.5 font-medium">
<iconify-icon icon="solar:wallet-linear"></iconify-icon> Balance
                    </p>
<p className="text-4xl tracking-tight font-semibold text-white mb-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">$284</p>
<p className="text-xs text-zinc-500">Available account balance</p>
</div>
</div>
</header>

<section className="mb-20">
<div className="flex items-center gap-3 mb-8">
<h2 className="text-2xl tracking-tight font-semibold text-white">Music</h2>
<span className="px-2 py-0.5 rounded-md bg-zinc-900 text-xs text-zinc-500 border border-zinc-800">Catalog Overview</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-purple-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(168,85,247,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">Without U</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>Sept 2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:40</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="148230">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-purple-500" d="M0,35 Q10,30 20,32 T40,25 T60,15 T80,10 T100,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-blue-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">everything pure</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>Oct 2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:20</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="102410">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-blue-500" d="M0,38 L15,30 L30,35 L50,20 L70,22 L85,10 L100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-purple-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(168,85,247,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">Good Day$ (7 Nightz)</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>Sept 2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:30</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="84900">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-purple-400" d="M0,35 Q20,38 40,25 T70,15 T100,8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-blue-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">no luv $ong</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>Dec 2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:35</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="63210">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-blue-400" d="M0,32 L20,35 L40,28 L60,30 L80,18 L100,12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-purple-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(168,85,247,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">rock$tar</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>May 2025</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:30</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="175320">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-purple-500" d="M0,38 Q15,20 30,25 T60,10 T100,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative bg-[#111318]/60 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:bg-[#161821]/80 transition-all duration-500 hover:border-blue-500/30 overflow-hidden hover:-translate-y-0.5 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.15)]">
<div className="flex items-start gap-4 relative z-10 mb-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/30 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pt-1">
<h3 className="text-base tracking-tight font-medium text-zinc-100 truncate group-hover:text-white transition-colors">Dangerou$</h3>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span>2025</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>2:45</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 relative z-10 flex items-end justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Streams</p>
<p className="text-xl tracking-tight font-medium text-zinc-200 flex items-center gap-2">
<span className="stream-val" data-target="92760">0</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</p>
</div>
<div className="w-20 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="text-blue-500" d="M0,35 L15,36 L30,25 L50,28 L75,15 L100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex flex-col mb-8">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-6">Reserved Beats</h2>

<div className="relative overflow-hidden bg-gradient-to-r from-zinc-900/80 to-[#101322]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_0_40px_-15px_rgba(59,130,246,0.1)]">
<div className="absolute -right-32 -top-32 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-xl tracking-tight font-semibold text-white">Contemporary Rap Beat Bundle</h3>
<span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">Limited Offer</span>
</div>
<p className="text-sm text-zinc-400 max-w-md">Three modern rap instrumentals reserved exclusively for your licensing catalog.</p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto border-t border-zinc-800/50 md:border-none pt-4 md:pt-0">
<div className="text-left sm:text-right">
<p className="text-xs text-zinc-500 line-through mb-0.5">$1,200</p>
<p className="text-3xl tracking-tight font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">$800</p>
</div>
<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02]">
                            Claim Bundle <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col bg-[#111318]/40 backdrop-blur-md border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 relative shadow-sm hover:shadow-lg">

<div className="h-36 bg-gradient-to-br from-zinc-800 to-zinc-950 relative p-5 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 flex items-center justify-center gap-1.5 transition-opacity duration-500 pointer-events-none">
<div className="w-1 h-6 bg-white rounded-full bar-1"></div>
<div className="w-1 h-10 bg-white rounded-full bar-2"></div>
<div className="w-1 h-14 bg-white rounded-full bar-3"></div>
<div className="w-1 h-8 bg-white rounded-full bar-4"></div>
<div className="w-1 h-12 bg-white rounded-full bar-5"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="px-2 py-1 bg-black/40 backdrop-blur-md text-xs rounded-md border border-zinc-700/50 text-zinc-300">Exclusive</span>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon className="text-lg ml-0.5" icon="solar:play-bold"></iconify-icon>
</button>
</div>
<h4 className="relative z-10 text-lg tracking-tight font-medium text-white mt-auto truncate drop-shadow-md">Midnight Skyline</h4>
</div>

<div className="p-5 flex-1 flex flex-col bg-zinc-900/20">
<p className="text-xs text-zinc-400 mb-5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon> Aura Productions
                        </p>
<div className="flex gap-3 mb-6">
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">BPM</p>
<p className="text-sm font-medium text-zinc-200">142</p>
</div>
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">Key</p>
<p className="text-sm font-medium text-zinc-200">F Minor</p>
</div>
</div>
<div className="mt-auto">
<div className="grid grid-cols-2 gap-3 mb-5">
<button className="px-4 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-white text-xs font-medium hover:bg-zinc-800 transition-colors text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:headphones-round-sound-linear"></iconify-icon> Preview
                                </button>
<button className="px-4 py-2.5 rounded-xl bg-blue-600/90 text-white text-xs font-medium hover:bg-blue-500 transition-all text-center shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_-3px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                                    License <span className="opacity-70 border-l border-blue-400/50 pl-2 ml-1">$350</span>
</button>
</div>
<div className="bg-[#2a1711]/40 border border-[#ea580c]/20 rounded-xl p-3.5 flex items-start gap-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/5 to-transparent"></div>
<iconify-icon className="text-[#ea580c] mt-0.5 relative z-10" icon="solar:danger-circle-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-xs font-medium text-[#ea580c] mb-1">Reservation Expires Today</p>
<p className="text-xs text-[#ea580c]/70 flex items-center gap-2">
                                        Thu, 12 Mar 2026 <span className="w-1 h-1 rounded-full bg-[#ea580c]/50"></span> <span className="countdown font-mono tracking-tighter">04:23:10</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-[#111318]/40 backdrop-blur-md border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 relative shadow-sm hover:shadow-lg">
<div className="h-36 bg-gradient-to-bl from-[#171324] to-zinc-950 relative p-5 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 flex items-center justify-center gap-1.5 transition-opacity duration-500 pointer-events-none">
<div className="w-1 h-8 bg-white rounded-full bar-4"></div>
<div className="w-1 h-12 bg-white rounded-full bar-1"></div>
<div className="w-1 h-6 bg-white rounded-full bar-5"></div>
<div className="w-1 h-14 bg-white rounded-full bar-2"></div>
<div className="w-1 h-10 bg-white rounded-full bar-3"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="px-2 py-1 bg-black/40 backdrop-blur-md text-xs rounded-md border border-zinc-700/50 text-zinc-300">Exclusive</span>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon className="text-lg ml-0.5" icon="solar:play-bold"></iconify-icon>
</button>
</div>
<h4 className="relative z-10 text-lg tracking-tight font-medium text-white mt-auto truncate drop-shadow-md">Neon District</h4>
</div>
<div className="p-5 flex-1 flex flex-col bg-zinc-900/20">
<p className="text-xs text-zinc-400 mb-5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon> Aura Productions
                        </p>
<div className="flex gap-3 mb-6">
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">BPM</p>
<p className="text-sm font-medium text-zinc-200">128</p>
</div>
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">Key</p>
<p className="text-sm font-medium text-zinc-200">C# Minor</p>
</div>
</div>
<div className="mt-auto">
<div className="grid grid-cols-2 gap-3 mb-5">
<button className="px-4 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-white text-xs font-medium hover:bg-zinc-800 transition-colors text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:headphones-round-sound-linear"></iconify-icon> Preview
                                </button>
<button className="px-4 py-2.5 rounded-xl bg-blue-600/90 text-white text-xs font-medium hover:bg-blue-500 transition-all text-center shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_-3px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                                    License <span className="opacity-70 border-l border-blue-400/50 pl-2 ml-1">$300</span>
</button>
</div>
<div className="bg-[#2a1711]/40 border border-[#ea580c]/20 rounded-xl p-3.5 flex items-start gap-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/5 to-transparent"></div>
<iconify-icon className="text-[#ea580c] mt-0.5 relative z-10" icon="solar:danger-circle-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-xs font-medium text-[#ea580c] mb-1">Reservation Expires Today</p>
<p className="text-xs text-[#ea580c]/70 flex items-center gap-2">
                                        Thu, 12 Mar 2026 <span className="w-1 h-1 rounded-full bg-[#ea580c]/50"></span> <span className="countdown font-mono tracking-tighter">04:23:10</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-[#111318]/40 backdrop-blur-md border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 relative shadow-sm hover:shadow-lg">
<div className="h-36 bg-gradient-to-tr from-[#0f172a] to-zinc-950 relative p-5 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 flex items-center justify-center gap-1.5 transition-opacity duration-500 pointer-events-none">
<div className="w-1 h-10 bg-white rounded-full bar-2"></div>
<div className="w-1 h-14 bg-white rounded-full bar-5"></div>
<div className="w-1 h-8 bg-white rounded-full bar-1"></div>
<div className="w-1 h-12 bg-white rounded-full bar-3"></div>
<div className="w-1 h-6 bg-white rounded-full bar-4"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="px-2 py-1 bg-black/40 backdrop-blur-md text-xs rounded-md border border-zinc-700/50 text-zinc-300">Exclusive</span>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon className="text-lg ml-0.5" icon="solar:play-bold"></iconify-icon>
</button>
</div>
<h4 className="relative z-10 text-lg tracking-tight font-medium text-white mt-auto truncate drop-shadow-md">Velvet Bounce</h4>
</div>
<div className="p-5 flex-1 flex flex-col bg-zinc-900/20">
<p className="text-xs text-zinc-400 mb-5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon> Aura Productions
                        </p>
<div className="flex gap-3 mb-6">
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">BPM</p>
<p className="text-sm font-medium text-zinc-200">105</p>
</div>
<div className="flex-1 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
<p className="text-xs text-zinc-500 mb-0.5 font-medium">Key</p>
<p className="text-sm font-medium text-zinc-200">A Minor</p>
</div>
</div>
<div className="mt-auto">
<div className="grid grid-cols-2 gap-3 mb-5">
<button className="px-4 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-white text-xs font-medium hover:bg-zinc-800 transition-colors text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:headphones-round-sound-linear"></iconify-icon> Preview
                                </button>
<button className="px-4 py-2.5 rounded-xl bg-blue-600/90 text-white text-xs font-medium hover:bg-blue-500 transition-all text-center shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_-3px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                                    License <span className="opacity-70 border-l border-blue-400/50 pl-2 ml-1">$400</span>
</button>
</div>
<div className="bg-[#2a1711]/40 border border-[#ea580c]/20 rounded-xl p-3.5 flex items-start gap-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/5 to-transparent"></div>
<iconify-icon className="text-[#ea580c] mt-0.5 relative z-10" icon="solar:danger-circle-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-xs font-medium text-[#ea580c] mb-1">Reservation Expires Today</p>
<p className="text-xs text-[#ea580c]/70 flex items-center gap-2">
                                        Thu, 12 Mar 2026 <span className="w-1 h-1 rounded-full bg-[#ea580c]/50"></span> <span className="countdown font-mono tracking-tighter">04:23:10</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
