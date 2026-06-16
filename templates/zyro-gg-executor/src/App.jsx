import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
slate: {
950: '#020617',
}
}
}
}
}



        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 400); 
            });
            
            const target = document.getElementById(tabId);
            setTimeout(() => {
                target.style.display = 'block';
                void target.offsetWidth; 
                target.classList.add('active');
            }, 400);

            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-white/10', 'text-white');
                btn.classList.add('text-slate-400', 'hover:bg-white/5');
            });
            
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.remove('text-slate-400', 'hover:bg-white/5');
            activeBtn.classList.add('bg-white/10', 'text-white');
        }

        function updatePrice(price) {
            document.getElementById('total-price').innerText = '$' + price;
        }

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--x', x + 'px');
            document.documentElement.style.setProperty('--y', y + 'px');
            const orbs = document.querySelectorAll('.orb');
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            orbs.forEach(orb => {
                const speed = orb.getAttribute('data-speed') || 1;
                const moveX = (x - centerX) / 50 * speed;
                const moveY = (y - centerY) / 50 * speed;
                orb.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="glow-cursor" id="cursor-glow"></div>
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="orb w-96 h-96 -top-20 -left-20" data-speed="2"></div>
<div className="orb w-[500px] h-[500px] -bottom-32 -right-32 opacity-10" data-speed="1.5"></div>
<div className="orb w-32 h-32 top-1/2 left-1/4 opacity-5" data-speed="5"></div>
</div>
<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="tracking-tight font-medium text-lg flex items-center gap-2 select-none text-white">
<iconify-icon className="text-blue-500" icon="solar:planet-linear" width="20"></iconify-icon>
<span className="tracking-widest font-display">ZYRO</span>
</div>
<div className="flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/[0.02]">
<button className="nav-btn transition-all duration-300 text-xs font-medium rounded-full py-1.5 px-4 bg-white/10 text-white" id="btn-showcase" onclick="switchTab('showcase')">Showcase</button>
<button className="nav-btn transition-all duration-300 text-xs font-medium rounded-full py-1.5 px-4 text-slate-400 hover:text-white hover:bg-white/5" id="btn-reviews" onclick="switchTab('reviews')">Reviews</button>
<button className="nav-btn transition-all duration-300 text-xs font-medium rounded-full py-1.5 px-4 text-slate-400 hover:text-white hover:bg-white/5" id="btn-discord" onclick="switchTab('discord')">Discord</button>
<button className="nav-btn transition-all duration-300 text-xs font-medium rounded-full py-1.5 px-4 text-slate-400 hover:text-white hover:bg-white/5" id="btn-purchase" onclick="switchTab('purchase')">Purchase</button>
</div>
<button className="transition-all duration-300 hover:scale-110 active:scale-90 active:rotate-12 text-slate-400 hover:text-white">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</button>
</div>
</nav>
<main className="min-h-screen max-w-5xl mx-auto pt-32 px-6 pb-20 relative z-10">

<section className="tab-content active" id="showcase" style={{display: 'block'}}>
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-[10px] uppercase tracking-wider font-medium mb-6 hover:bg-blue-500/10 transition-colors">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                    v2.0 Stable Release
                </div>
<h1 className="text-5xl md:text-7xl tracking-tighter mb-6 shimmer-text font-display text-white">
                    ZYRO EXECUTOR
                </h1>
<p className="leading-relaxed text-lg font-light text-slate-400 max-w-xl mx-auto">
                    The most undetectable and trusted script utility. Engineered for performance with zero compromise on security.
                </p>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl border border-white/10 bg-slate-900 overflow-hidden group shadow-[0_0_50px_-15px_rgba(29,78,216,0.15)] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_70px_-10px_rgba(29,78,216,0.25)]">
<img alt="Zyro UI Showcase" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">
<div className="transform transition-transform duration-500 group-hover:translate-x-2">
<h3 className="text-2xl tracking-tight mb-1 text-white font-display">Kernel Level</h3>
<p className="text-sm text-blue-400">99.9% Uptime SLA</p>
</div>
<div className="flex items-center gap-6 md:gap-8">
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Safe</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-white" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Fast</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-white" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">LuaU</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md group">
<iconify-icon className="mb-4 text-slate-400 group-hover:text-blue-400 transition-colors" icon="solar:lock-password-unlocked-linear" width="24"></iconify-icon>
<h4 className="font-medium mb-2 text-white text-sm">Bypass System</h4>
<p className="text-xs leading-relaxed text-slate-400">Advanced injection methods that remain completely invisible to anti-cheat systems.</p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md group">
<iconify-icon className="mb-4 text-slate-400 group-hover:text-blue-400 transition-colors" icon="solar:cloud-download-linear" width="24"></iconify-icon>
<h4 className="font-medium mb-2 text-white text-sm">Cloud Scripts</h4>
<p className="text-xs leading-relaxed text-slate-400">Access a library of thousands of community verified scripts directly from the UI.</p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md group">
<iconify-icon className="mb-4 text-slate-400 group-hover:text-blue-400 transition-colors" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<h4 className="font-medium mb-2 text-white text-sm">Multi-Instance</h4>
<p className="text-xs leading-relaxed text-slate-400">Run multiple accounts simultaneously with optimized memory usage.</p>
</div>
</div>
</section>

<section className="tab-content" id="reviews">
<div className="max-w-2xl mx-auto mb-12 text-center">
<h2 className="text-3xl tracking-tight mb-4 font-display text-white">Community Trust</h2>
<p className="font-light text-slate-400 text-sm">Verified feedback from our 500+ active userbase.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center gap-0.5 mb-4 text-blue-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-300">"Hands down the most stable executor I've used. The key system is straightforward and the support is instant."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center text-xs font-medium text-white border border-white/10">JD</div>
<div>
<div className="text-xs font-medium text-white">John</div>
<div className="text-[10px] text-slate-500">Verified Lifetime User</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center gap-0.5 mb-4 text-blue-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-300">"Clean UI, no ads in the executor itself, and the script hub is constantly updated. Worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-slate-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">AX</div>
<div>
<div className="text-xs font-medium text-white">Alex</div>
<div className="text-[10px] text-slate-500">Verified Monthly User</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-white/10 transition-all duration-300 group md:col-span-2 hover:-translate-y-1 flex flex-col md:flex-row gap-6 justify-between items-start">
<div className="flex-1">
<div className="flex items-center gap-0.5 mb-4 text-blue-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="mb-4 text-sm leading-relaxed text-slate-300">"I was skeptical at first because of other tools being detected, but Zyro has been safe for over 6 months now. The new update is incredibly fast."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-900/50 to-blue-900/50 flex items-center justify-center text-xs font-medium text-white border border-white/10">S</div>
<div>
<div className="text-xs font-medium text-white">Sam</div>
<div className="text-[10px] text-slate-500">Verified User</div>
</div>
</div>
</div>
<div className="hidden md:flex w-32 h-20 rounded-lg border border-white/5 bg-black/20 items-center justify-center group-hover:border-blue-500/20 transition-colors">
<span className="text-[10px] text-slate-500 font-medium">Verified Purchase</span>
</div>
</div>
</div>
</section>

<section className="tab-content" id="discord">
<div className="min-h-[60vh] flex items-center justify-center">
<div className="w-full max-w-xl mx-auto p-8 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl relative overflow-hidden group">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#5865F2]/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 text-center">

<div className="w-24 h-24 mx-auto mb-6 rounded-2xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-500">
<img alt="Zyro Logo" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/attachments/attachments/e7b8c407-35cc-403d-b45b-4dcdb1f519a3.png"/>
</div>
<h2 className="text-3xl tracking-tight mb-3 font-display text-white">Join the Community</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                            Connect with over <span className="text-white font-semibold">100+ members</span>. Get fast support, exclusive scripts, and release updates.
                        </p>
<div className="flex flex-col gap-4 max-w-xs mx-auto">

<a className="w-full py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium shadow-[0_0_20px_-5px_rgba(88,101,242,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95" href="https://discord.gg/XcFK48pN" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span>Join Server</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span> Online</span>
</div>
<span className="text-xs font-mono text-slate-600">discord.gg/zyro</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="tab-content" id="purchase">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 sticky top-24">
<div className="aspect-square rounded-3xl border border-white/10 bg-slate-900 relative overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-md group">
<img alt="Zyro Interface" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/attachments/attachments/e7b8c407-35cc-403d-b45b-4dcdb1f519a3.png"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-0 w-full text-center">
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Zyro.gg v1</p>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl tracking-tight mb-2 font-display text-white">Get Access</h2>
<p className="text-sm text-slate-400">Instant delivery. Undetected.</p>
</div>

<div className="space-y-6">

<div>
<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Select Plan</label>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group">
<input checked="" className="hidden" name="duration" onclick="updatePrice('7.99')" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex justify-between items-center transition-all duration-300 group-hover:border-white/20 hover:bg-white/5 relative overflow-hidden">
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Monthly</div>
<div className="text-[10px] text-slate-500">Auto-renewal</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-white">$7.99</div>
<div className="text-[10px] text-slate-500">/mo</div>
</div>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden" name="duration" onclick="updatePrice('24.99')" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex justify-between items-center transition-all duration-300 group-hover:border-white/20 hover:bg-white/5 relative overflow-hidden">
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:infinite-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Lifetime</div>
<div className="text-[10px] text-slate-500">One-time payment</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-white">$24.99</div>
<div className="text-[10px] text-slate-500">once</div>
</div>
</div>
</label>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-slate-400">Total Due</span>
<span className="text-2xl font-medium font-display text-white" id="total-price">$7.99</span>
</div>
<button className="w-full py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 font-medium shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95">
<span>Proceed to Checkout</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<div className="flex justify-center gap-4 mt-6 opacity-40">
<iconify-icon className="grayscale invert" icon="logos:stripe" width="30"></iconify-icon>
<iconify-icon className="grayscale invert" icon="logos:bitcoin" width="20"></iconify-icon>
<iconify-icon className="grayscale invert" icon="logos:ethereum" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 bg-slate-950 relative z-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] text-slate-600 uppercase tracking-widest">
                © 2024 Zyro. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors duration-300 hover:scale-110" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors duration-300 hover:scale-110" href="#"><iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors duration-300 hover:scale-110" href="#"><iconify-icon icon="solar:brand-discord-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
