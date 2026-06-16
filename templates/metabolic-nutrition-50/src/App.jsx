import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Interactive Pricing Logic
        const slider = document.getElementById('mealSlider');
        const priceDisplay = document.getElementById('priceDisplay');
        
        slider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            // Dynamic pricing algorithm simulation
            // Base price drops as volume increases
            let cost = 14.50;
            if(val > 8) cost = 13.00;
            if(val > 14) cost = 11.50;
            if(val > 18) cost = 10.50;
            
            // Add a little randomness to make it feel like "calculating"
            priceDisplay.style.opacity = '0.5';
            setTimeout(() => {
                priceDisplay.innerText = cost.toFixed(2);
                priceDisplay.style.opacity = '1';
            }, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-card rounded-full px-2 py-2 flex items-center gap-2 shadow-xl shadow-zinc-200/50">
<a className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform" href="#">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<div className="hidden md:flex items-center bg-zinc-100/50 rounded-full px-1 border border-zinc-200/50">
<a className="px-5 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Protocols</a>
<a className="px-5 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Research</a>
<a className="px-5 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</div>
<button className="btn-primary flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ml-1">
<span>Deploy System</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20 space-y-32">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 relative z-10 pt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-200 bg-lime-50/80 backdrop-blur-sm text-lime-700 text-[10px] font-mono font-medium uppercase tracking-widest mb-8 shadow-sm">
<span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse"></span>
                    Bio-OS Kernel v2.4 Loaded
                </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
                    Metabolic <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200">Overclock.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed font-light mb-10">
                    High-fidelity nutrition engineered for cognitive output. Reduce digestive latency. Optimize cellular energy.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 hover:gap-4 duration-300">
                        Start Configuration
                        <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<div className="flex -space-x-3 items-center px-4">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="w-8 h-8 rounded-full bg-lime-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-lime-800">AS</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white flex items-center justify-center text-white">
<iconify-icon icon="lucide:star" width="10"></iconify-icon>
</div>
<span className="ml-5 text-xs font-medium text-zinc-500">Trusted by 2,400+ Engineers</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50 border border-white group scan-container bg-zinc-100">

<div className="scan-line"></div>
<div className="scan-overlay"></div>

<img alt="Nutrient Bowl" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out filter contrast-110" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 glass-card p-3 rounded-xl flex flex-col items-end gap-1 animate-pulse">
<span className="text-[10px] font-mono text-zinc-400 uppercase">Caloric Density</span>
<span className="text-xl font-bold tracking-tight text-zinc-900">640 kcal</span>
</div>
<div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl flex items-center gap-4 max-w-[240px]">
<div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-mono text-zinc-400 uppercase mb-0.5">Focus Agent</div>
<div className="text-xs font-semibold text-zinc-900 leading-tight">Lion's Mane + MCT Oil Detected</div>
</div>
</div>
</div>

<div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-lime-300/30 rounded-full blur-3xl"></div>
<div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-zinc-300/30 rounded-full blur-3xl"></div>
</div>
</section>

<section className="py-10 border-y border-zinc-200/50 bg-white/30 backdrop-blur-sm overflow-hidden">
<div className="flex marquee-track w-[200%] hover:[animation-play-state:paused]">
<div className="flex items-center gap-20 min-w-full justify-around px-10">
<span className="text-2xl font-bold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default font-serif italic">Wired</span>
<span className="text-xl font-bold tracking-widest uppercase text-zinc-300 hover:text-zinc-800 transition-colors cursor-default">TechCrunch</span>
<span className="text-2xl font-bold tracking-tighter text-zinc-300 hover:text-zinc-800 transition-colors cursor-default font-serif">Vogue</span>
<span className="text-xl font-semibold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default">HYPEBEAST</span>
<span className="text-xl font-bold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default italic">FastCompany</span>
</div>
<div className="flex items-center gap-20 min-w-full justify-around px-10">
<span className="text-2xl font-bold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default font-serif italic">Wired</span>
<span className="text-xl font-bold tracking-widest uppercase text-zinc-300 hover:text-zinc-800 transition-colors cursor-default">TechCrunch</span>
<span className="text-2xl font-bold tracking-tighter text-zinc-300 hover:text-zinc-800 transition-colors cursor-default font-serif">Vogue</span>
<span className="text-xl font-semibold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default">HYPEBEAST</span>
<span className="text-xl font-bold tracking-tight text-zinc-300 hover:text-zinc-800 transition-colors cursor-default italic">FastCompany</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-zinc-900 mb-4">System Architecture</h2>
<p className="text-zinc-500 max-w-md">Modular nutritional components designed for specific biological outcomes.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors">
<iconify-icon icon="lucide:grid" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors">
<iconify-icon icon="lucide:list" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="col-span-1 md:col-span-8 glass-card rounded-3xl p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-lime-300 transform rotate-12" icon="lucide:activity" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 rounded-full bg-lime-500"></span>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Protocol 01</span>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight mb-3">Cognitive Prime</h3>
<p className="text-zinc-500 max-w-md">Formulations containing L-Theanine and Caffeine in a 2:1 ratio to induce flow states without the jitter.</p>
</div>
<div className="mt-8 flex gap-4">
<div className="px-4 py-2 rounded-lg bg-white/50 border border-zinc-100 text-xs font-mono">
<span className="text-zinc-400 block text-[10px]">UPTIME</span>
<span className="font-semibold text-zinc-900">4-6 HRS</span>
</div>
<div className="px-4 py-2 rounded-lg bg-white/50 border border-zinc-100 text-xs font-mono">
<span className="text-zinc-400 block text-[10px]">TYPE</span>
<span className="font-semibold text-zinc-900">NOOTROPIC</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between bg-zinc-900 text-white border-zinc-800">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-950"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-lime-400" icon="lucide:battery-charging" width="32"></iconify-icon>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Metabolic Drive</h3>
<p className="text-zinc-400 text-sm">Sustained kinetic output through complex carbohydrates.</p>
</div>
<div className="relative z-10 w-full bg-zinc-800 rounded-full h-1 mt-6 overflow-hidden">
<div className="bg-lime-500 h-full w-[75%] shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>
</div>
</div>

<div className="col-span-1 md:col-span-12 glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 group">
<div className="flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Protocol 03</span>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-3">Recovery Mode</h3>
<p className="text-zinc-500 mb-6">Optimized for cellular repair during sleep cycles. Magnesium-rich matrices.</p>
<a className="text-sm font-semibold text-zinc-900 hover:text-lime-600 transition-colors flex items-center gap-2" href="#">
                            View Clinical Data <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2 h-32 md:h-40 flex items-end justify-between gap-1 px-4 relative">

<div className="w-full bg-zinc-100 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Mg</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[60%] group-hover:h-[80%] transition-all duration-700 delay-75 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Zn</div></div>
<div className="w-full bg-zinc-200 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-500 delay-100 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Fe</div></div>
<div className="w-full bg-lime-500 rounded-t-sm h-[80%] group-hover:h-[95%] transition-all duration-1000 delay-150 relative shadow-lg shadow-lime-200"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity text-lime-700">O2</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-500 delay-75 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">K</div></div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6">
<div className="bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden">

<div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-[10px] font-mono text-zinc-400">menu_config.json</div>
<div className="w-3"></div>
</div>

<div className="divide-y divide-zinc-100">

<div className="group p-6 hover:bg-zinc-50 transition-colors cursor-pointer relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
<div className="flex items-start md:items-center justify-between gap-4">
<div className="flex gap-4">
<div className="text-xs font-mono text-zinc-300 pt-1 group-hover:text-lime-600">01</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 group-hover:translate-x-1 transition-transform">Neural Matcha Bowl</h4>
<div className="flex gap-2 mt-2">
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"MCT_OIL"</span>
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"LIONS_MANE"</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-semibold text-zinc-900">$14.50</div>
<div className="text-xs text-zinc-400 mt-1">540 kcal</div>
</div>
</div>
</div>

<div className="group p-6 hover:bg-zinc-50 transition-colors cursor-pointer relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
<div className="flex items-start md:items-center justify-between gap-4">
<div className="flex gap-4">
<div className="text-xs font-mono text-zinc-300 pt-1 group-hover:text-lime-600">02</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 group-hover:translate-x-1 transition-transform">Kinetic Kale Complex</h4>
<div className="flex gap-2 mt-2">
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"HEMP_SEEDS"</span>
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"SPIRULINA"</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-semibold text-zinc-900">$12.00</div>
<div className="text-xs text-zinc-400 mt-1">420 kcal</div>
</div>
</div>
</div>

<div className="group p-6 hover:bg-zinc-50 transition-colors cursor-pointer relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
<div className="flex items-start md:items-center justify-between gap-4">
<div className="flex gap-4">
<div className="text-xs font-mono text-zinc-300 pt-1 group-hover:text-lime-600">03</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 group-hover:translate-x-1 transition-transform">Deep Work Bento</h4>
<div className="flex gap-2 mt-2">
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"SALMON"</span>
<span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-mono">"EDAMAME"</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-semibold text-zinc-900">$16.50</div>
<div className="text-xs text-zinc-400 mt-1">680 kcal</div>
</div>
</div>
</div>
</div>
<div className="bg-zinc-50 p-4 text-center border-t border-zinc-200">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Load Full Directory
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="bg-zinc-900 rounded-[2rem] p-8 md:p-20 text-white relative overflow-hidden isolate">

<div className="absolute inset-0 z-[-1] opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-5xl font-semibold tracking-tighter mb-6">Subscription Fuel</h2>
<p className="text-zinc-400 text-lg mb-12">Select your weekly volume. The OS adapts pricing based on your commitment level.</p>

<div className="space-y-10">
<div className="relative pt-6">
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-500 hover:accent-lime-400" id="mealSlider" max="21" min="5" type="range" value="12"/>
<div className="flex justify-between mt-4 text-xs font-mono text-zinc-500 uppercase">
<span>Min: 5 Meals</span>
<span>Max: 21 Meals</span>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
<iconify-icon className="text-lime-500 mt-0.5" icon="lucide:info" width="16"></iconify-icon>
<div className="text-sm text-zinc-300">
<span className="text-white font-medium">Auto-Pilot Mode:</span> 
                                    Meals are selected based on your previous week's biometric data feedback.
                                </div>
</div>
</div>
</div>
<div className="bg-zinc-950/50 rounded-2xl p-8 border border-zinc-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-lime-500/5 blur-xl"></div>
<div className="relative z-10">
<div className="text-xs font-mono text-lime-500 mb-2 uppercase tracking-widest">Calculated Cost Per Unit</div>
<div className="flex items-start justify-center leading-none text-white">
<span className="text-4xl text-zinc-600 mt-2 font-light">$</span>
<span className="text-9xl font-bold tracking-tighter" id="priceDisplay">10.50</span>
</div>
<div className="mt-8">
<button className="w-full bg-white text-zinc-900 hover:bg-zinc-200 font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    Initiate Subscription
                                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 text-center pb-12">
<h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-12 border-b border-zinc-200 pb-4 inline-block px-10">Lab Verified Certifications</h2>
<div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-800" icon="lucide:leaf" width="24"></iconify-icon>
<span className="font-medium tracking-tight">Non-GMO Verified</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-800" icon="lucide:droplet" width="24"></iconify-icon>
<span className="font-medium tracking-tight">Keto Certified</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-800" icon="lucide:shield-check" width="24"></iconify-icon>
<span className="font-medium tracking-tight">Whole30 Approved</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-800" icon="lucide:wheat-off" width="24"></iconify-icon>
<span className="font-medium tracking-tight">Gluten Free</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-10 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-lg font-bold tracking-tighter">NUTRI.OS</span>
</div>
<p className="text-zinc-500 max-w-xs text-sm">
                            The first operating system for human metabolism. 
                            San Francisco, CA.
                        </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Platform</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Menu</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Pricing</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Enterprise</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Company</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Manifesto</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Careers</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
<div className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
                        © 2024 NUTRI.OS LABS INC.
                    </div>
<div className="flex gap-6 mt-4 md:mt-0">
<iconify-icon className="text-zinc-400 hover:text-zinc-900 cursor-pointer" icon="lucide:twitter" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-zinc-900 cursor-pointer" icon="lucide:instagram" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-zinc-900 cursor-pointer" icon="lucide:linkedin" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-[-5%] left-0 w-full text-center pointer-events-none opacity-[0.03]">
<h1 className="text-[15vw] font-bold tracking-tighter leading-none text-black">NUTRI.OS</h1>
</div>
</footer>
</main>


    </>
  );
}
