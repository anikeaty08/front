import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple View Router for Demonstration
        function switchTab(tabId) {
            // Hide all views
            document.getElementById('login-view').classList.add('hidden');
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('admin-view').classList.add('hidden');
            
            // Show selected view
            const selectedView = document.getElementById(tabId + '-view');
            selectedView.classList.remove('hidden');
            
            // Re-trigger animation
            selectedView.classList.remove('fade-in');
            void selectedView.offsetWidth; // trigger reflow
            selectedView.classList.add('fade-in');

            // Update nav active state (visual only)
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                link.classList.remove('active-nav', 'text-white');
                if(link.innerText.toLowerCase().includes(tabId) || 
                  (tabId === 'login' && link.innerText.includes('Sign In'))) {
                    link.classList.add('active-nav', 'text-white');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -z-10" style={{transform: 'translate3d(-50%, -50%, 0)'}}></div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-orange-500 text-xl" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter uppercase">IMODia</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
<button className="hover:text-white transition-colors nav-link active-nav text-white" onclick="switchTab('dashboard')">Dashboard</button>
<button className="hover:text-white transition-colors nav-link" onclick="switchTab('admin')">Admin Panel</button>
<button className="hover:text-white transition-colors nav-link" onclick="switchTab('login')">Sign In</button>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 text-xs text-zinc-300">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Bal: 0.00 BDT</span>
</div>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col relative z-10">

<section className="hidden flex-1 flex items-center justify-center fade-in" id="login-view">
<div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="text-center mb-8">
<iconify-icon className="text-orange-500 text-4xl mb-2" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-white">Welcome back</h2>
<p className="text-sm text-zinc-400 mt-1">Enter your details to sign in to your account</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); switchTab('dashboard');">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Email address</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between ml-1">
<label className="text-xs font-medium text-zinc-400">Password</label>
<a className="text-xs text-orange-500 hover:text-orange-400 transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-semibold rounded-xl px-4 py-3 text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] mt-2" type="submit">
                            Sign In
                        </button>
</form>
<p className="text-center text-xs text-zinc-500 mt-6">
                        Don't have an account? <a className="text-zinc-300 hover:text-white transition-colors" href="#">Register</a>
</p>
</div>
</div>
</section>

<section className="fade-in w-full space-y-8" id="dashboard-view">
<header className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-white">Top-Up Diamonds</h1>
<p className="text-sm text-zinc-400 mt-1">Instant IMO diamond recharge to your account.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<form className="bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 space-y-8 relative overflow-hidden">

<div className="space-y-3">
<div className="flex items-center gap-2 text-zinc-300 border-b border-white/5 pb-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">1</span>
<h3 className="text-base font-medium tracking-tight">Enter IMO Details</h3>
</div>
<div className="relative mt-4">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all shadow-inner" placeholder="Enter IMO Phone Number" type="text"/>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-zinc-300 border-b border-white/5 pb-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">2</span>
<h3 className="text-base font-medium tracking-tight">Select Package</h3>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">

<label className="cursor-pointer relative group">
<input checked="" className="peer hidden" name="package" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 hover:border-zinc-700 transition-all text-center">
<div className="flex items-center justify-center gap-1 mb-1">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-white peer-checked:text-white">100</span>
</div>
<div className="text-xs text-zinc-500 peer-checked:text-orange-400 font-medium">120 BDT</div>
</div>

<div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 transition-opacity shadow-sm">
<iconify-icon className="text-[10px]" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>

<label className="cursor-pointer relative group">
<input className="peer hidden" name="package" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 hover:border-zinc-700 transition-all text-center">
<div className="flex items-center justify-center gap-1 mb-1">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-white peer-checked:text-white">500</span>
</div>
<div className="text-xs text-zinc-500 peer-checked:text-orange-400 font-medium">580 BDT</div>
</div>
</label>

<label className="cursor-pointer relative group">
<input className="peer hidden" name="package" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 hover:border-zinc-700 transition-all text-center">
<div className="flex items-center justify-center gap-1 mb-1">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-white peer-checked:text-white">1000</span>
</div>
<div className="text-xs text-zinc-500 peer-checked:text-orange-400 font-medium">1150 BDT</div>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="peer hidden" name="package" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 hover:border-zinc-700 transition-all text-center">
<div className="flex items-center justify-center gap-1 mb-1">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-white peer-checked:text-white">5000</span>
</div>
<div className="text-xs text-zinc-500 peer-checked:text-orange-400 font-medium">5500 BDT</div>
</div>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-zinc-300 border-b border-white/5 pb-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">3</span>
<h3 className="text-base font-medium tracking-tight">Payment Details</h3>
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="payment" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-3 flex items-center gap-3 peer-checked:border-pink-500/50 peer-checked:bg-pink-500/5 transition-all">
<div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-500 font-bold tracking-tighter text-xs">bK</div>
<div>
<div className="text-sm font-medium text-white">bKash</div>
<div className="text-xs text-zinc-500">Personal</div>
</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="payment" type="radio"/>
<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-3 flex items-center gap-3 peer-checked:border-orange-500/50 peer-checked:bg-orange-500/5 transition-all">
<div className="w-8 h-8 rounded bg-orange-600/20 flex items-center justify-center text-orange-500 font-bold tracking-tighter text-xs">Ng</div>
<div>
<div className="text-sm font-medium text-white">Nagad</div>
<div className="text-xs text-zinc-500">Personal</div>
</div>
</div>
</label>
</div>

<div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-4 mt-4">
<p className="text-sm text-zinc-400 mb-2">Please send exactly <span className="text-orange-400 font-medium">120 BDT</span> to the following number via Send Money.</p>
<div className="flex items-center justify-between bg-black border border-zinc-800 rounded-lg p-3">
<span className="text-base font-medium text-white tracking-widest">+8801700000000</span>
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1" type="button">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon> Copy
                                    </button>
</div>
</div>

<div className="mt-4">
<label className="text-xs font-medium text-zinc-400 ml-1 mb-1 block">Transaction ID (TrxID)</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all uppercase" placeholder="e.g. 9J8B7C6D5E" type="text"/>
</div>
</div>

<div className="pt-2">
<button className="w-full relative group overflow-hidden bg-zinc-100 hover:bg-white text-zinc-900 font-semibold rounded-xl px-4 py-4 text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]" type="button">
<span className="relative z-10 flex items-center justify-center gap-2">
                                    Confirm Top-Up <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</span>
</button>
<p className="text-center text-[11px] text-zinc-500 mt-3">Orders are processed within 5-10 minutes automatically.</p>
</div>
</form>
</div>

<div className="space-y-6">

<div className="bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon> My Orders
                            </h3>
<a className="text-xs text-orange-500 hover:text-orange-400 transition-colors" href="#">View All</a>
</div>
<div className="space-y-3">

<div className="group border border-zinc-800/50 bg-zinc-950/30 rounded-xl p-3.5 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs font-medium text-zinc-300">#ORD-8924</span>
<div className="text-[11px] text-zinc-500 mt-0.5">2 mins ago</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-1 text-white font-medium">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 100
                                    </div>
<span className="text-zinc-400 text-xs">120 BDT</span>
</div>
</div>

<div className="group border border-zinc-800/50 bg-zinc-950/30 rounded-xl p-3.5 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs font-medium text-zinc-300">#ORD-8910</span>
<div className="text-[11px] text-zinc-500 mt-0.5">Yesterday</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Completed</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-1 text-white font-medium">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 500
                                    </div>
<span className="text-zinc-400 text-xs">580 BDT</span>
</div>
</div>

<div className="group border border-zinc-800/50 bg-zinc-950/30 rounded-xl p-3.5 hover:bg-zinc-900/50 transition-colors opacity-70 grayscale-[50%]">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs font-medium text-zinc-300">#ORD-8895</span>
<div className="text-[11px] text-zinc-500 mt-0.5">Oct 12</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">Rejected</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-1 text-zinc-400 font-medium">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 100
                                    </div>
<span className="text-zinc-500 text-xs">Invalid TrxID</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-zinc-900/40 to-black border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-2xl rounded-full"></div>
<h3 className="text-base font-medium tracking-tight text-white mb-2 relative z-10">Need Help?</h3>
<p className="text-xs text-zinc-400 mb-5 relative z-10">Contact our support team for any issues regarding your top-up.</p>
<div className="space-y-2 relative z-10">
<a className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors border border-emerald-500/10 text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon> WhatsApp Support
                            </a>
<a className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 transition-colors border border-zinc-700/50 text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> Email Us
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in w-full space-y-6" id="admin-view">
<header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon> Control Panel
                    </h1>
<p className="text-sm text-zinc-400 mt-1">Manage top-up orders and system settings.</p>
</div>
<div className="flex gap-2">
<button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors">Export CSV</button>
<button className="bg-orange-500/10 border border-orange-500/20 text-orange-500 hover:bg-orange-500/20 text-xs font-medium px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon> Refresh
                    </button>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-5">
<div className="text-zinc-400 text-xs font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:inbox-linear" strokeWidth="1.5"></iconify-icon> Total Orders
                    </div>
<div className="text-2xl font-semibold text-white tracking-tight">1,248</div>
</div>
<div className="bg-zinc-900/30 border border-amber-500/20 rounded-xl p-5 relative overflow-hidden">
<div className="absolute inset-0 bg-amber-500/5 pointer-events-none"></div>
<div className="text-amber-500 text-xs font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Pending Review
                    </div>
<div className="text-2xl font-semibold text-white tracking-tight">24</div>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-5">
<div className="text-zinc-400 text-xs font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon> Today's Revenue
                    </div>
<div className="text-2xl font-semibold text-white tracking-tight flex items-baseline gap-1">
                        12,450 <span className="text-sm text-zinc-500 font-normal">BDT</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden flex flex-col">

<div className="border-b border-zinc-800/80 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex bg-zinc-950/50 p-1 rounded-lg border border-zinc-800/80 w-full sm:w-auto">
<button className="px-4 py-1.5 text-xs font-medium rounded-md bg-zinc-800 text-white shadow-sm flex-1 sm:flex-none">All</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white transition-colors flex-1 sm:flex-none">Pending</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white transition-colors flex-1 sm:flex-none">Paid</button>
</div>
<div className="relative w-full sm:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors" placeholder="Search TrxID or IMO..." type="text"/>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-zinc-950/50 text-zinc-400 text-[11px] uppercase tracking-wider font-medium border-b border-zinc-800/80">
<th className="px-4 py-3">Order ID</th>
<th className="px-4 py-3">IMO Number</th>
<th className="px-4 py-3">Package</th>
<th className="px-4 py-3">Payment</th>
<th className="px-4 py-3">TrxID</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-800/50">

<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-4 py-3 text-zinc-300 font-medium text-xs">#ORD-8924</td>
<td className="px-4 py-3 text-white">017XXXXXXXX</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-cyan-400 font-medium text-xs">
<iconify-icon icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 100
                                    </div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
<span className="w-2 h-2 rounded-full bg-pink-500"></span> bKash
                                    </span>
</td>
<td className="px-4 py-3 font-mono text-xs text-zinc-400">9J8B7C6D5E</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span>
</td>
<td className="px-4 py-3 text-right space-x-1">
<button className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors tooltip-trigger" title="Confirm Payment">
<iconify-icon className="text-base block" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1.5 rounded-md bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition-colors tooltip-trigger" title="Reject Order">
<iconify-icon className="text-base block" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-4 py-3 text-zinc-300 font-medium text-xs">#ORD-8923</td>
<td className="px-4 py-3 text-white">019XXXXXXXX</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-cyan-400 font-medium text-xs">
<iconify-icon icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 500
                                    </div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
<span className="w-2 h-2 rounded-full bg-orange-500"></span> Nagad
                                    </span>
</td>
<td className="px-4 py-3 font-mono text-xs text-zinc-400">7A6B5C4D3E</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Paid</span>
</td>
<td className="px-4 py-3 text-right">
<span className="text-xs text-zinc-500">Processed</span>
</td>
</tr>

<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-4 py-3 text-zinc-300 font-medium text-xs">#ORD-8922</td>
<td className="px-4 py-3 text-white">018XXXXXXXX</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-cyan-400 font-medium text-xs">
<iconify-icon icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon> 1000
                                    </div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
<span className="w-2 h-2 rounded-full bg-pink-500"></span> bKash
                                    </span>
</td>
<td className="px-4 py-3 font-mono text-xs text-zinc-400">2X3Y4Z5W6V</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span>
</td>
<td className="px-4 py-3 text-right space-x-1">
<button className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors tooltip-trigger" title="Confirm Payment">
<iconify-icon className="text-base block" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1.5 rounded-md bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition-colors tooltip-trigger" title="Reject Order">
<iconify-icon className="text-base block" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="border-t border-zinc-800/80 p-4 flex items-center justify-between bg-zinc-950/30">
<span className="text-xs text-zinc-500">Showing 1 to 3 of 24 entries</span>
<div className="flex gap-1">
<button className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-50" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded border border-zinc-800 bg-zinc-800 flex items-center justify-center text-white text-xs font-medium">1</button>
<button className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-medium">2</button>
<button className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-8 mt-auto z-10 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-zinc-500 font-medium">
                © 2023 IMODia. All rights reserved. Premium Diamond Service.
            </div>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg block" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg block" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>

<style>
        /* Smooth view transitions */
        .fade-in {
            animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Hide scrollbar for clean look in table */
        .overflow-x-auto::-webkit-scrollbar {
            height: 6px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
            background: rgba(24, 24, 27, 0.5);
            border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
            background: rgba(82, 82, 91, 0.5);
            border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(113, 113, 122, 0.8);
        }

        /* Active Nav Indicator */
        .active-nav {
            position: relative;
        }
        .active-nav::after {
            content: '';
            position: absolute;
            bottom: -20px; /* Align with bottom of nav */
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #f97316; /* Orange 500 */
            border-radius: 2px 2px 0 0;
        }
    </style>


    </>
  );
}
