import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.stream-counter');
            
            counters.forEach(counter => {
                let val = parseInt(counter.getAttribute('data-val'), 10);
                
                // Randomize interval between 2s and 5s for organic feel
                const intervalTime = Math.floor(Math.random() * 3000) + 2000;
                
                setInterval(() => {
                    // 60% chance to increase to keep it slow
                    if (Math.random() > 0.4) {
                        // Increase by 1 to 3 streams
                        const increment = Math.floor(Math.random() * 3) + 1;
                        val += increment;
                        counter.textContent = val.toLocaleString('en-US');
                        // Add subtle highlight flash
                        counter.classList.add('text-indigo-300');
                        setTimeout(() => counter.classList.remove('text-indigo-300'), 300);
                    }
                }, intervalTime);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">

<div className="flex items-center gap-5">
<div className="relative">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-indigo-900 via-slate-800 to-cyan-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.15)]">
<span className="text-xl sm:text-2xl tracking-tighter text-white/50 font-medium">NB</span>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
</div>
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">NorthSideBaby</h1>
<div className="flex items-center gap-3 mt-1.5 text-sm text-zinc-400">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
                            Hip-Hop / Rap
                        </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="flex items-center gap-1.5 text-zinc-300">
                            Status: Active Artist
                        </span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-5 flex flex-col md:items-end w-full md:w-auto hover:border-white/10 transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Balance</p>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-0.5">$1,012.00</div>
<p className="text-xs text-zinc-400 flex items-center gap-1.5">
<iconify-icon className="text-indigo-400" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    Available account balance
                </p>
</div>
</header>

<section className="mb-14">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-5 flex items-center gap-2">
                Music
                <iconify-icon className="text-zinc-500 text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">Without U</h3>
<p className="text-xs text-zinc-500 mt-0.5">Sept 2024 • 2:40</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 14L12 8L20 10L32 4L46 2" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="148230">148,230</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">everything pure</h3>
<p className="text-xs text-zinc-500 mt-0.5">Oct 2024 • 2:20</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 12L10 9L18 11L30 5L46 3" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="102410">102,410</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">Good Day$ (7 Nightz)</h3>
<p className="text-xs text-zinc-500 mt-0.5">Sept 2024 • 2:30</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 13L14 10L22 12L34 7L46 4" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="84900">84,900</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">no luv $ong</h3>
<p className="text-xs text-zinc-500 mt-0.5">Dec 2024 • 2:35</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 15L16 11L24 13L36 8L46 5" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="63210">63,210</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">rock$tar</h3>
<p className="text-xs text-zinc-500 mt-0.5">May 2025 • 2:30</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 10L12 4L20 6L32 2L46 1" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="175320">175,320</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate">Dangerou$</h3>
<p className="text-xs text-zinc-500 mt-0.5">2025 • 2:45</p>
</div>
</div>
<div className="flex flex-col items-end">
<svg className="w-12 h-4 mb-1 sparkline-glow" fill="none" viewbox="0 0 48 16">
<path d="M2 12L12 7L20 9L32 4L46 2" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium text-zinc-300 stream-counter" data-val="92760">92,760</span>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-5 flex items-center gap-2">
                Reserved Beats
                <iconify-icon className="text-zinc-500 text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 glass-panel bg-gradient-to-b from-slate-900/60 to-zinc-950/80 rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="inline-flex items-center justify-center px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
                        Limited Offer
                    </div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight">Contemporary Rap Beat Bundle</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Three modern rap instrumentals reserved exclusively for your licensing review.</p>
<div className="mb-6">
<div className="text-sm text-zinc-500 line-through decoration-zinc-600 mb-0.5">$3,250.00</div>
<div className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                            $2,015.00
                            <span className="text-xs text-indigo-400 font-medium bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">-38%</span>
</div>
</div>
<div className="urgency-pulse bg-red-950/30 border border-red-900/50 rounded-lg p-3 flex gap-3 items-start mb-6">
<iconify-icon className="text-red-400 text-lg mt-0.5 shrink-0" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-red-400 font-medium">Reservation Expires Today</p>
<p className="text-xs text-red-500/80 mt-0.5">March 29, 2026</p>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                        Claim Bundle License
                    </button>
</div>

<div className="lg:col-span-2 flex flex-col gap-3">

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/10 shrink-0">

<div className="flex items-end gap-0.5 h-4 opacity-50">
<div className="w-1 bg-white rounded-t-sm h-full playing-bar"></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar"></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar"></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar"></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-zinc-100">Midnight Skyline</h4>
<span className="flex items-center gap-1 text-[10px] text-red-400 font-medium bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">
<svg className="w-2 h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        Expires Today
                                    </span>
</div>
<p className="text-xs text-zinc-400 mb-1">Producer: Aura Productions</p>
<div className="flex items-center gap-2 text-[11px] text-zinc-500">
<span className="bg-white/5 px-1.5 py-0.5 rounded">142 BPM</span>
<span className="bg-white/5 px-1.5 py-0.5 rounded">F Minor</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
<div className="text-sm font-medium text-white">$1,150</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-colors border border-white/5">
                                    License
                                </button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/10 shrink-0">
<div className="flex items-end gap-0.5 h-4 opacity-50">
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-zinc-100">Neon District</h4>
<span className="flex items-center gap-1 text-[10px] text-red-400 font-medium bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">
<svg className="w-2 h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        Expires Today
                                    </span>
</div>
<p className="text-xs text-zinc-400 mb-1">Producer: Aura Productions</p>
<div className="flex items-center gap-2 text-[11px] text-zinc-500">
<span className="bg-white/5 px-1.5 py-0.5 rounded">142 BPM</span>
<span className="bg-white/5 px-1.5 py-0.5 rounded">F Minor</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
<div className="text-sm font-medium text-white">$1,050</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-colors border border-white/5">
                                    License
                                </button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-white/10 shrink-0">
<div className="flex items-end gap-0.5 h-4 opacity-50">
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-white rounded-t-sm h-full playing-bar" style={{animationDelay: '0.0s'}}></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-zinc-100">Velvet Bounce</h4>
<span className="flex items-center gap-1 text-[10px] text-red-400 font-medium bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">
<svg className="w-2 h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        Expires Today
                                    </span>
</div>
<p className="text-xs text-zinc-400 mb-1">Producer: Aura Productions</p>
<div className="flex items-center gap-2 text-[11px] text-zinc-500">
<span className="bg-white/5 px-1.5 py-0.5 rounded">142 BPM</span>
<span className="bg-white/5 px-1.5 py-0.5 rounded">F Minor</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
<div className="text-sm font-medium text-white">$1,050</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-colors border border-white/5">
                                    License
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>



    </>
  );
}
