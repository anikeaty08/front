import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md mx-auto flex-1 flex flex-col pb-28 sm:pb-32">

<header className="px-5 pt-4 pb-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-[#7A9E87]/15 border border-black/5 flex items-center justify-center">
<span className="text-[13px] font-semibold tracking-tight text-[#5E7E6B]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>T</span>
</div>
<div className="flex flex-col">
<h1 className="text-[18px] leading-tight tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Good morning</h1>
<p className="text-[13px] text-[#5E5B56]">Here for you, as you are</p>
</div>
</div>
<button className="h-10 w-10 rounded-xl bg-white/60 backdrop-blur border border-black/5 flex items-center justify-center hover:bg-white/70 active:scale-[0.98] transition">
<i className="w-5 h-5 text-[#6C6A65]" data-lucide="bell"></i>
</button>
</header>

<main className="px-5 space-y-6">

<section className="rounded-3xl overflow-hidden border border-black/5 bg-white/70 backdrop-blur shadow-sm">
<div className="relative">
<img alt="Serene misty forest" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#F6F0E9] via-[#F6F0E9]/20 to-transparent"></div>
</div>
<div className="p-4">
<div className="mb-1 inline-flex items-center gap-2 text-[12px] text-[#6C6A65]">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#7A9E87]/10 text-[#5E7E6B] border border-[#7A9E87]/20">Today’s Session</span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-[#7A9E87]" data-lucide="clock"></i>
                12 min
              </span>
</div>
<h2 className="text-[22px] sm:text-[24px] leading-[1.2] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Grounded Breathing</h2>
<p className="mt-1 text-[14px] text-[#5E5B56]">Settle your nervous system with a gentle, guided breath practice in nature’s quiet.</p>
<div className="mt-3 flex items-center gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-2xl bg-[#7A9E87] text-white border border-[#5E7E6B]/30 shadow-sm hover:bg-[#6E927A] active:scale-[0.99] transition">
<i className="w-4.5 h-4.5" data-lucide="play"></i>
<span className="text-[15px] font-medium">Begin</span>
</button>
<button aria-label="Save for later" className="h-11 w-11 rounded-2xl bg-white/60 backdrop-blur border border-black/5 flex items-center justify-center hover:bg-white/70 active:scale-[0.98] transition">
<i className="w-5 h-5 text-[#6C6A65]" data-lucide="bookmark"></i>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-3">

<button className="group rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:bg-white/80 active:scale-[0.99] transition text-left">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-[#7A9E87]/15 border border-[#7A9E87]/25 flex items-center justify-center">
<i className="w-5 h-5 text-[#5E7E6B]" data-lucide="wind"></i>
</div>
<h3 className="text-[16px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Breath 4-7-8</h3>
</div>
<span className="text-[12px] text-[#6C6A65]">3 min</span>
</div>
<p className="mt-2 text-[13px] text-[#5E5B56]">Steady the mind, lower stress.</p>
</button>

<button className="group rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:bg-white/80 active:scale-[0.99] transition text-left">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-[#C8A58A]/15 border border-[#C8A58A]/25 flex items-center justify-center">
<i className="w-5 h-5 text-[#9A7B62]" data-lucide="pen-line"></i>
</div>
<h3 className="text-[16px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Morning Journal</h3>
</div>
<span className="text-[12px] text-[#6C6A65]">5 min</span>
</div>
<p className="mt-2 text-[13px] text-[#5E5B56]">Clear thoughts, set intention.</p>
</button>
</section>

<section className="rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[17px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>This Week</h3>
<span className="text-[12px] text-[#6C6A65]">Mon–Sun</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-xl p-3 bg-white/70 border border-black/5">
<div className="text-[12px] text-[#6C6A65]">Sessions</div>
<div className="mt-0.5 text-[20px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>4 / 7</div>
</div>
<div className="rounded-xl p-3 bg-white/70 border border-black/5">
<div className="text-[12px] text-[#6C6A65]">Total time</div>
<div className="mt-0.5 text-[20px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>38 min</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between text-[12px] text-[#6C6A65] mb-1.5">
<span>Progress</span>
<span>57%</span>
</div>
<div className="h-2.5 w-full rounded-full bg-[#7A9E87]/15 overflow-hidden border border-[#7A9E87]/20">
<div className="h-full w-[57%] bg-[#7A9E87] rounded-full"></div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-[17px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Paths</h3>
<button className="text-[13px] text-[#5E7E6B] hover:text-[#4F695A] underline underline-offset-4 decoration-[#7A9E87]/50">See all</button>
</div>

<button className="w-full rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:bg-white/80 active:scale-[0.99] transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#7A9E87]/15 border border-[#7A9E87]/25 flex items-center justify-center text-[18px]">💗</div>
<div>
<div className="text-[15px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Self‑Love</div>
<div className="text-[12px] text-[#6C6A65]">8 sessions</div>
</div>
</div>
<i className="w-5 h-5 text-[#6C6A65]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:bg-white/80 active:scale-[0.99] transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#C8A58A]/15 border border-[#C8A58A]/25 flex items-center justify-center text-[18px]">🌿</div>
<div>
<div className="text-[15px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Grounding</div>
<div className="text-[12px] text-[#6C6A65]">12 sessions</div>
</div>
</div>
<i className="w-5 h-5 text-[#6C6A65]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:bg-white/80 active:scale-[0.99] transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#9BB7A5]/15 border border-[#9BB7A5]/25 flex items-center justify-center text-[18px]">🌙</div>
<div>
<div className="text-[15px] tracking-tight text-[#2C2A28]" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif', fontWeight: '600'}}>Sleep</div>
<div className="text-[12px] text-[#6C6A65]">6 sessions</div>
</div>
</div>
<i className="w-5 h-5 text-[#6C6A65]" data-lucide="chevron-right"></i>
</div>
</button>
</section>
<div className="h-2"></div>
</main>
</div>

<nav className="fixed inset-x-0 bottom-0 z-50">
<div className="mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+8px)]">
<div className="h-16 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/5 shadow-sm flex items-center justify-around">
<button className="flex flex-col items-center justify-center gap-1 text-[#5E5B56] hover:text-[#2C2A28] transition">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[11px]">Home</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#6C6A65] hover:text-[#2C2A28] transition">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
<span className="text-[11px]">Stats</span>
</button>
<button className="-mt-7 h-14 w-14 rounded-2xl bg-[#7A9E87] text-white border border-[#5E7E6B]/30 shadow-sm flex items-center justify-center hover:bg-[#6E927A] active:scale-95 transition">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#6C6A65] hover:text-[#2C2A28] transition">
<i className="w-5 h-5" data-lucide="search"></i>
<span className="text-[11px]">Search</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#6C6A65] hover:text-[#2C2A28] transition">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[11px]">Profile</span>
</button>
</div>
</div>
</nav>




    </>
  );
}
