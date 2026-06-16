import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[400px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden relative flex flex-col h-[844px]">

<div className="h-10 w-full flex justify-between items-end px-8 pb-1">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon icon="solar:transmission-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:wheel-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<section className="p-8 pt-12 flex flex-col items-center text-center" id="onboarding">
<div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl font-semibold tracking-tighter text-blue-500">TP</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight mb-3">Pure Connection.</h1>
<p className="text-sm text-zinc-400 leading-relaxed max-w-[240px]">Fast &amp; reliable Telegram bridge with zero configuration.</p>
</section>

<section className="p-6" id="home">
<div className="flex flex-col items-center justify-center py-10">

<div className="mb-10 text-center">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Status</span>
<h2 className="text-xl font-medium mt-1 text-emerald-400">Securely Connected</h2>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-active:bg-blue-500/40 transition-all"></div>
<button className="relative w-48 h-48 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center shadow-inner active:scale-95 transition-transform">
<div className="w-40 h-40 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 flex flex-col items-center justify-center border border-zinc-600 shadow-xl">
<iconify-icon className="text-blue-400 mb-2" icon="solar:power-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">Disconnect</span>
</div>
</button>
</div>

<div className="grid grid-cols-2 gap-4 w-full mt-16">
<div className="glass-card p-4 rounded-2xl">
<div className="flex items-center gap-2 mb-2 text-zinc-400">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
<span className="text-xs font-medium">Latency</span>
</div>
<span className="text-lg font-medium tracking-tight">24ms</span>
</div>
<div className="glass-card p-4 rounded-2xl">
<div className="flex items-center gap-2 mb-2 text-zinc-400">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-xs font-medium">Stability</span>
</div>
<span className="text-lg font-medium tracking-tight">99.9%</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-4" id="status">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Active Proxy</h3>
<button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
<iconify-icon className="text-zinc-500" icon="solar:refresh-linear" width="18"></iconify-icon>
</button>
</div>
<div className="bg-zinc-800/50 rounded-2xl p-5 border border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:globus-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Frankfurt, Germany</p>
<p className="text-xs text-zinc-500">Auto-rotated 5m ago</p>
</div>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</section>

<section className="px-6 py-8" id="pricing">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Upgrade to Pro</h2>

<div className="relative bg-blue-600 rounded-[2rem] p-6 mb-4 overflow-hidden shadow-lg shadow-blue-900/20">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-white/40" icon="solar:crown-minimalistic-linear" width="64"></iconify-icon>
</div>
<span className="inline-block bg-white/20 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Recommended</span>
<h3 className="text-xl font-semibold text-white mb-1">Premium Plan</h3>
<p className="text-blue-100 text-xs mb-6">Unlimited speed &amp; private servers</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">$4.99</span>
<span className="text-blue-200 text-sm">/mo</span>
</div>
<button className="w-full bg-white text-blue-600 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-100 transition-colors">
                        Get Started
                    </button>
</div>

<div className="bg-zinc-800/30 border border-zinc-800 rounded-[2rem] p-6">
<h3 className="text-base font-medium mb-1">Free Basic</h3>
<p className="text-zinc-500 text-xs mb-4">Limited speed • Shared proxy</p>
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="text-xs font-medium italic">Current Plan</span>
</div>
</div>
</section>

<section className="px-6 py-4" id="settings">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Preferences</h3>
<div className="space-y-1">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:routing-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Auto-connect</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer custom-toggle" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 rounded-full peer-checked:bg-blue-600/30 transition-all"></div>
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-zinc-400 rounded-full transition-all toggle-dot"></div>
</label>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:moon-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Dark Mode</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer custom-toggle" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 rounded-full peer-checked:bg-blue-600/30 transition-all"></div>
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-zinc-400 rounded-full transition-all toggle-dot"></div>
</label>
</div>
<div className="flex items-center justify-between py-3 border-t border-zinc-800/50 mt-2 pt-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Support</span>
</div>
<iconify-icon className="text-zinc-700" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</section>
</div>

<nav className="absolute bottom-0 w-full h-20 bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-800/50 flex items-center justify-around px-4 pb-4">
<button className="flex flex-col items-center gap-1 text-blue-500 transition-colors">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:shield-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[10px] font-medium">Pro</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>

<div className="absolute bottom-1 w-full flex justify-center">
<div className="w-32 h-1 bg-zinc-800 rounded-full"></div>
</div>
</div>

    </>
  );
}
