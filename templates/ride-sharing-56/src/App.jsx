import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0F0F11',
surfaceHighlight: '#1A1A1D',
border: '#27272A',
primary: '#EEEEF0',
secondary: '#A1A1AA',
accent: '#6366f1' // Indigo
},
backgroundImage: {
'glow': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
'grid': 'linear-gradient(to right, #27272A 1px, transparent 1px), linear-gradient(to bottom, #27272A 1px, transparent 1px)'
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" height="16" icon="lucide:zap" width="16"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">Rideum</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-secondary hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#fleet">Fleet</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#drivers">Drivers</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#business">Business</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-secondary hover:text-white transition-colors" href="#">Log in</a>
<a className="h-9 px-4 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#">
                    Get the app
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 bg-glow opacity-40 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwdi41aDMyLjhMMzMuMyAwaC41TDM0IC41VjM5LjVMMzkuNSA0MGguNVYwaC0uNXY0MEgwIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDI1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-30 pointer-events-none mask-image-linear-gradient"></div>
<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-secondary tracking-wide uppercase">Live in 40+ Cities</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                    Movement <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient bg-300%">Redefined.</span>
</h1>
<p className="text-lg text-secondary max-w-md leading-relaxed">
                    Experience the next generation of urban mobility. Precision tracking, premium fleet, and carbon-neutral rides at the tap of a button.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                        Start Riding
                    </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                        Watch Demo
                    </button>
</div>
<div className="flex items-center gap-6 pt-4 text-secondary text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:shield-check"></iconify-icon>
<span>Verified Drivers</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:clock"></iconify-icon>
<span>2 min pickup</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-surface border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">

<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-white">Estimate Ride</h3>
<div className="flex items-center bg-surfaceHighlight rounded-full p-1 border border-white/5">
<button className="px-3 py-1 rounded-full text-xs font-medium text-black bg-white shadow-sm">Ride</button>
<button className="px-3 py-1 rounded-full text-xs font-medium text-secondary hover:text-white transition">Delivery</button>
</div>
</div>

<div className="space-y-4 mb-6 relative">

<div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 to-zinc-700"></div>
<div className="relative pl-8">
<span className="absolute left-1.5 top-3 w-3 h-3 rounded-full border-2 border-indigo-500 bg-surface z-10"></span>
<div className="bg-surfaceHighlight border border-white/5 rounded-lg p-3 group-focus-within:border-indigo-500/50 transition-colors">
<label className="block text-[10px] uppercase tracking-wider text-secondary font-semibold mb-1">Pickup Location</label>
<div className="flex items-center justify-between">
<input className="bg-transparent text-white text-sm outline-none w-full placeholder-zinc-600" readonly="" type="text" value="Current Location"/>
<iconify-icon className="text-indigo-400" icon="lucide:crosshair" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="relative pl-8">
<span className="absolute left-1.5 top-3 w-3 h-3 rounded-none border border-zinc-500 bg-surface z-10 rotate-45"></span>
<div className="bg-surfaceHighlight border border-white/5 rounded-lg p-3 hover:border-white/20 transition-colors cursor-pointer">
<label className="block text-[10px] uppercase tracking-wider text-secondary font-semibold mb-1">Dropoff Point</label>
<input className="bg-transparent text-white text-sm outline-none w-full placeholder-zinc-500" placeholder="Where to?" type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<div className="border border-indigo-500/50 bg-indigo-500/10 rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all">
<iconify-icon className="text-indigo-400" icon="lucide:car" width="24"></iconify-icon>
<div className="text-center">
<span className="block text-xs text-white font-medium">Standard</span>
<span className="block text-[10px] text-indigo-300">$12-15</span>
</div>
</div>
<div className="border border-white/5 bg-surfaceHighlight hover:bg-white/5 rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all opacity-60 hover:opacity-100">
<iconify-icon className="text-white" icon="lucide:zap" width="24"></iconify-icon>
<div className="text-center">
<span className="block text-xs text-white font-medium">Electric</span>
<span className="block text-[10px] text-secondary">$14-18</span>
</div>
</div>
<div className="border border-white/5 bg-surfaceHighlight hover:bg-white/5 rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all opacity-60 hover:opacity-100">
<iconify-icon className="text-white" icon="lucide:star" width="24"></iconify-icon>
<div className="text-center">
<span className="block text-xs text-white font-medium">Premium</span>
<span className="block text-[10px] text-secondary">$22-28</span>
</div>
</div>
</div>

<button className="w-full h-12 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn">
                        Request Rideum
                        <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                        Secure encrypted connection
                    </div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-surfaceHighlight/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium text-white tracking-tight">2.5M+</span>
<span className="text-sm text-secondary">Rides completed</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium text-white tracking-tight">40+</span>
<span className="text-sm text-secondary">Cities active</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium text-white tracking-tight">4.9/5</span>
<span className="text-sm text-secondary">User rating</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium text-white tracking-tight">0g</span>
<span className="text-sm text-secondary">Net carbon emissions</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for experience</h2>
<p className="text-secondary text-lg">Every detail of Rideum is built to provide the safest, fastest, and most comfortable journey possible.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-surface border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Safety First</h3>
<p className="text-secondary text-sm leading-relaxed">
                    Real-time ride monitoring, SOS emergency integration, and thoroughly vetted drivers ensure your peace of mind.
                </p>
</div>

<div className="group bg-surface border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="lucide:leaf" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Eco-Friendly Fleet</h3>
<p className="text-secondary text-sm leading-relaxed">
                    Choose from our growing fleet of electric and hybrid vehicles to reduce your carbon footprint with every mile.
                </p>
</div>

<div className="group bg-surface border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-purple-400 transition-colors">
<iconify-icon icon="lucide:wallet" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Transparent Pricing</h3>
<p className="text-secondary text-sm leading-relaxed">
                    Know exactly what you pay before you ride. No hidden fees, no surprises, just honest, competitive pricing.
                </p>
</div>
</div>

<div className="mt-6 bg-surface border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                        New Feature
                    </div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Schedule ahead with precision</h3>
<p className="text-secondary text-lg mb-8">
                        Need a ride for an early flight? Schedule your Rideum up to 30 days in advance. We'll lock in your price and guarantee a driver.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle" width="18"></iconify-icon>
                            Guaranteed pickup window
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle" width="18"></iconify-icon>
                            Price protection
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle" width="18"></iconify-icon>
                            Free cancellation up to 60 min before
                        </li>
</ul>
<button className="text-white border-b border-white hover:border-indigo-400 hover:text-indigo-400 pb-0.5 transition-colors text-sm font-medium">Learn more about scheduling</button>
</div>

<div className="relative bg-black/40 border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center p-8">

<div className="w-full h-full bg-surfaceHighlight border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-6 flex-1 flex flex-col justify-center items-center gap-4">
<div className="flex items-center gap-4 w-full">
<div className="h-12 w-12 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                                    24
                                </div>
<div className="flex-1">
<div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
<div className="px-3 py-1 bg-white/5 rounded text-xs text-white">08:00 AM</div>
</div>
<div className="w-full h-px bg-white/5 my-1"></div>
<div className="flex items-center gap-4 w-full opacity-50">
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 font-bold text-lg">
                                    25
                                </div>
<div className="flex-1">
<div className="h-2 w-20 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-12 bg-white/5 rounded"></div>
</div>
</div>
</div>
<div className="bg-indigo-600/10 p-4 border-t border-indigo-500/20 flex justify-between items-center">
<span className="text-xs text-indigo-300">Ride Scheduled</span>
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight/20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Drive with Rideum</h2>
<p className="text-secondary text-lg mb-8">
                        Set your own schedule, earn competitive rates, and get paid instantly. Join the fleet of the future.
                    </p>
<div className="space-y-6">

<div className="p-6 bg-surface border border-white/10 rounded-xl">
<div className="flex justify-between items-end mb-4">
<span className="text-sm text-zinc-400">Hours per week</span>
<span className="text-2xl font-medium text-white" id="hoursValue">25h</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="60" min="5" oninput="document.getElementById('hoursValue').innerText = this.value + 'h'; document.getElementById('earnings').innerText = '$' + (this.value * 32)" type="range" value="25"/>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-sm text-zinc-400">Est. Weekly Earnings</span>
<span className="text-3xl font-semibold text-emerald-400" id="earnings">$800</span>
</div>
</div>
<button className="w-full h-12 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-all">
                            Apply to Drive
                        </button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-[300px] h-[600px] border-[8px] border-surfaceHighlight rounded-[3rem] bg-black overflow-hidden shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surfaceHighlight rounded-b-xl z-20"></div>

<div className="absolute inset-0 bg-zinc-900 opacity-50 z-0">

<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0 V600 M150 0 V600 M250 0 V600 M0 100 H300 M0 300 H300 M0 500 H300" fill="none" stroke="#333" strokeWidth="1"></path>
</svg>
</div>

<div className="absolute bottom-0 w-full p-4 z-10 bg-gradient-to-t from-black via-black to-transparent pt-12">
<div className="bg-surface border border-white/10 rounded-2xl p-4 mb-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-black" icon="lucide:user"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Driver arriving</div>
<div className="text-xs text-zinc-400">Toyota Camry • 2 min away</div>
</div>
<div className="ml-auto bg-surfaceHighlight p-2 rounded-full border border-white/10">
<iconify-icon className="text-white" icon="lucide:phone" width="16"></iconify-icon>
</div>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 w-3/4 h-full"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 animate-bounce">
<iconify-icon className="text-black" icon="lucide:car-front" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-background pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center">
<iconify-icon className="text-black" icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">Rideum</span>
</a>
<p className="text-secondary text-sm max-w-xs mb-6">
                        Reinventing how the world moves. Reliable, safe, and sustainable transportation for everyone.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Company</h4>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">About</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Careers</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Blog</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Press</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Product</h4>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Ride</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Drive</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Business</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Safety</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Legal</h4>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Terms</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Privacy</a>
<a className="text-sm text-zinc-400 hover:text-white transition" href="#">Guidelines</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-xs text-zinc-500">© 2024 Rideum Technologies Inc. All rights reserved.</span>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        All systems operational
                    </div>
</div>
</div>
</div>
</footer>

    </>
  );
}
