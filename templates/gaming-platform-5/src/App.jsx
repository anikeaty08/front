import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(viewId) {
            // Hide all main views
            document.getElementById('login-view').classList.add('hidden');
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('game-view').classList.add('hidden');
            document.getElementById('admin-view').classList.add('hidden');
            
            // Show target view
            document.getElementById(viewId).classList.remove('hidden');

            // Handle bottom nav visibility
            const bottomNav = document.getElementById('bottom-nav');
            if(viewId === 'home-view' || viewId === 'game-view') {
                bottomNav.classList.remove('hidden');
                bottomNav.classList.add('flex');
            } else {
                bottomNav.classList.add('hidden');
                bottomNav.classList.remove('flex');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[420px] bg-[#0a0a0a] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:border-x flex flex-col border-neutral-900 z-50" id="login-view">
<div className="flex-1 flex flex-col justify-center px-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="mb-12">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-black font-bold text-lg tracking-tighter">B</div>
<h1 className="text-3xl font-semibold tracking-tighter text-white">BIGDADDY</h1>
</div>
<p className="text-sm text-neutral-500 font-medium">Log in to your account to continue</p>
</div>
<form className="flex flex-col gap-5" onsubmit="event.preventDefault(); switchView('home-view');">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Phone Number</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-4 text-neutral-500" icon="solar:phone-linear"></iconify-icon>
<input className="w-full h-12 bg-neutral-900/50 border border-neutral-800 rounded-xl pl-11 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-colors" placeholder="+91 98765 43210" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Password</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-4 text-neutral-500" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full h-12 bg-neutral-900/50 border border-neutral-800 rounded-xl pl-11 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-colors" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors">Remember me</span>
</label>
<button className="text-sm font-medium text-amber-500 transition-colors hover:text-amber-400" type="button">Forgot Password?</button>
</div>
<button className="h-12 w-full mt-4 rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(245,158,11,0.15)] bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90 active:scale-[0.98]" type="submit">
                    Log In
                </button>
</form>
<div className="mt-8 pt-8 border-t border-neutral-900 flex flex-col gap-4 text-center">
<p className="text-sm text-neutral-500">Don't have an account? <button className="text-amber-500 font-medium hover:underline">Register</button></p>
<button className="text-xs font-medium text-neutral-600 hover:text-white transition-colors flex items-center justify-center gap-1.5 mt-4" onclick="switchView('admin-view')" type="button">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Admin Access
                </button>
</div>
</div>
</div>

<div className="hidden w-full max-w-[420px] bg-[#0a0a0a] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:border-x flex flex-col border-neutral-900" id="home-view">

<header className="flex items-center justify-between p-4 bg-[#0a0a0a] z-20">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-black font-bold text-sm tracking-tighter">B</div>
<div className="text-lg font-bold tracking-tight text-white">BIGDADDY</div>
</div>
<div className="flex items-center gap-3">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:headphones-round-sound-linear" width="22"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">

<div className="mx-4 mt-2 p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<div className="text-xs font-medium text-neutral-400 mb-1 flex items-center gap-1">Total Balance <iconify-icon icon="solar:eye-linear"></iconify-icon></div>
<div className="text-2xl font-bold tracking-tight text-white tabular-nums">₹ 12,450.00</div>
</div>
<div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase">VIP 3</div>
</div>
<div className="grid grid-cols-2 gap-3 relative z-10">
<button className="h-10 rounded-xl bg-amber-500 text-black text-sm font-semibold transition-all hover:bg-amber-400 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:wallet-add-1-linear"></iconify-icon> Deposit
                    </button>
<button className="h-10 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-sm font-medium transition-all hover:bg-neutral-700 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:card-send-linear"></iconify-icon> Withdraw
                    </button>
</div>
</div>

<div className="mx-4 mt-4 flex items-center gap-3 bg-neutral-900/40 rounded-xl px-3 py-2 border border-neutral-800/50 overflow-hidden">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:volume-loud-linear"></iconify-icon>
<div className="flex-1 overflow-hidden relative">
<span className="text-xs font-medium text-neutral-300 marquee-content">Welcome to BigDaddy. Please beware of fake domains. Official deposit channels only. Play responsibly!</span>
</div>
</div>

<div className="mx-4 mt-4 flex gap-3 overflow-x-auto scrollbar-hide snap-x">
<div className="min-w-full snap-center h-28 rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-indigo-500/20 p-4 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
<iconify-icon icon="solar:gift-linear" width="80"></iconify-icon>
</div>
<div className="text-xs font-bold text-indigo-400 mb-1 tracking-widest uppercase">First Deposit</div>
<div className="text-lg font-bold text-white leading-tight">100% Bonus<br/>Up to ₹50,000</div>
</div>
<div className="min-w-full snap-center h-28 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-teal-500/20 p-4 flex flex-col justify-center relative overflow-hidden">
<div className="text-xs font-bold text-teal-400 mb-1 tracking-widest uppercase">Daily Rebate</div>
<div className="text-lg font-bold text-white leading-tight">Instant Cash<br/>0.5% Returns</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3 px-4 mt-6">
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:ticket-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-300">Lottery</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:gamepad-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-400">Originals</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:spedometer-max-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-400">Slots</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:playing-cards-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-400">Casino</span>
</button>
</div>

<div className="mt-8 px-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-1 h-4 bg-amber-500 rounded-full"></div>
<h2 className="text-sm font-bold tracking-tight text-white">Popular Lottery</h2>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="game-card-wingo border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left" onclick="switchView('game-view')">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-white backdrop-blur-sm border border-white/5">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/20">Hot</span>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">Wingo 1Min</h3>
<p className="text-[10px] font-medium text-neutral-500">Guess Number/Color</p>
</button>
<button className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">Wingo 3Min</h3>
<p className="text-[10px] font-medium text-neutral-500">Guess Number/Color</p>
</button>
<button className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:dice-5-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">K3 Lottery</h3>
<p className="text-[10px] font-medium text-neutral-500">Sum/Dice Game</p>
</button>
<button className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">5D Lottery</h3>
<p className="text-[10px] font-medium text-neutral-500">Pick 5 Numbers</p>
</button>
</div>
</div>

<div className="mt-8 px-4 pb-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-1 h-4 bg-blue-500 rounded-full"></div>
<h2 className="text-sm font-bold tracking-tight text-white">Original Games</h2>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="game-card-aviator border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">Aviator</h3>
<p className="text-[10px] font-medium text-neutral-500">Crash Game</p>
</button>
<button className="game-card-mines border border-neutral-800 rounded-2xl p-3 flex flex-col relative overflow-hidden group hover:border-neutral-600 transition-colors text-left">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:bomb-minimalistic-linear" width="22"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-bold text-white mb-0.5">Mines</h3>
<p className="text-[10px] font-medium text-neutral-500">Find the Gems</p>
</button>
</div>
</div>
</main>
</div>

<div className="hidden w-full max-w-[420px] bg-[#0a0a0a] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:border-x flex flex-col border-neutral-900" id="game-view">

<header className="flex items-center justify-between p-4 border-b sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-xl z-20 border-neutral-900">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors" onclick="switchView('home-view')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="text-base font-bold tracking-tight text-white">Wingo 1Min</div>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto pb-28 scrollbar-hide">

<div className="flex px-4 py-4 gap-2 overflow-x-auto scrollbar-hide">
<button className="px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap bg-neutral-800 text-white border border-neutral-700">Wingo 1Min</button>
<button className="px-5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900">Wingo 3Min</button>
<button className="px-5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900">Wingo 5Min</button>
<button className="px-5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900">Wingo 10Min</button>
</div>

<div className="m-4 p-5 rounded-2xl border relative overflow-hidden backdrop-blur-sm bg-neutral-900/40 border-neutral-800">
<div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<div className="text-xs font-medium mb-1.5 flex items-center gap-1.5 text-neutral-400">
<iconify-icon icon="solar:history-linear"></iconify-icon> Period
                        </div>
<div className="text-2xl font-bold tracking-tight tabular-nums text-white">20231027045</div>
</div>
<div className="text-right">
<div className="text-xs font-medium mb-1.5 text-neutral-400">Time Remaining</div>
<div className="text-3xl font-bold tracking-tight tabular-nums flex gap-1.5 items-center text-emerald-400">
<span className="border rounded-lg w-9 h-11 flex items-center justify-center shadow-inner bg-neutral-950 border-neutral-800">0</span>
<span className="border rounded-lg w-9 h-11 flex items-center justify-center shadow-inner bg-neutral-950 border-neutral-800">1</span>
<span className="pb-1 text-neutral-600">:</span>
<span className="border rounded-lg w-9 h-11 flex items-center justify-center shadow-inner bg-neutral-950 border-neutral-800">2</span>
<span className="border rounded-lg w-9 h-11 flex items-center justify-center shadow-inner bg-neutral-950 border-neutral-800">5</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-8 relative z-10">
<button className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/5 py-3.5 flex flex-col items-center gap-2 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-semibold tracking-tight text-emerald-400">Green</span>
</button>
<button className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-violet-500/5 py-3.5 flex flex-col items-center gap-2 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all group">
<div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-semibold tracking-tight text-violet-400">Violet</span>
</button>
<button className="relative overflow-hidden rounded-xl border border-rose-500/20 bg-rose-500/5 py-3.5 flex flex-col items-center gap-2 hover:bg-rose-500/10 hover:border-rose-500/30 transition-all group">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)] group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-semibold tracking-tight text-rose-400">Red</span>
</button>
</div>

<div className="grid grid-cols-5 gap-2.5 relative z-10">
<button className="h-11 rounded-xl border bg-stripe-zero text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 hover:border-neutral-700 text-neutral-300">0</button>
<button className="h-11 rounded-xl border hover:border-emerald-500/30 hover:bg-emerald-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-emerald-400 text-neutral-300">1</button>
<button className="h-11 rounded-xl border hover:border-rose-500/30 hover:bg-rose-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-rose-400 text-neutral-300">2</button>
<button className="h-11 rounded-xl border hover:border-emerald-500/30 hover:bg-emerald-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-emerald-400 text-neutral-300">3</button>
<button className="h-11 rounded-xl border hover:border-rose-500/30 hover:bg-rose-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-rose-400 text-neutral-300">4</button>
<button className="h-11 rounded-xl border bg-stripe-five text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 hover:border-neutral-700 text-neutral-300">5</button>
<button className="h-11 rounded-xl border hover:border-rose-500/30 hover:bg-rose-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-rose-400 text-neutral-300">6</button>
<button className="h-11 rounded-xl border hover:border-emerald-500/30 hover:bg-emerald-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-emerald-400 text-neutral-300">7</button>
<button className="h-11 rounded-xl border hover:border-rose-500/30 hover:bg-rose-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-rose-400 text-neutral-300">8</button>
<button className="h-11 rounded-xl border hover:border-emerald-500/30 hover:bg-emerald-500/5 text-sm font-semibold transition-all flex items-center justify-center border-neutral-800 bg-neutral-900/50 hover:text-emerald-400 text-neutral-300">9</button>
</div>
</div>

<div className="px-4 mt-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-bold tracking-tight flex items-center gap-2 text-white">
<iconify-icon className="text-neutral-400" icon="solar:list-check-linear"></iconify-icon> Game Record
                    </h2>
</div>
<div className="border rounded-2xl overflow-hidden bg-[#0a0a0a] border-neutral-900">
<div className="grid grid-cols-4 gap-2 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-neutral-500 border-b bg-neutral-900/30 border-neutral-900">
<div>Period</div>
<div className="text-center">Price</div>
<div className="text-center">Number</div>
<div className="text-right">Result</div>
</div>
<div className="grid grid-cols-4 gap-2 px-4 py-3.5 text-sm border-b transition-colors items-center border-neutral-900/50 hover:bg-neutral-900/20">
<div className="tabular-nums text-neutral-300">..044</div>
<div className="text-center text-neutral-500 tabular-nums">48239</div>
<div className="text-center font-bold text-emerald-400">1</div>
<div className="flex justify-end items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</div>
</div>
<div className="grid grid-cols-4 gap-2 px-4 py-3.5 text-sm border-b transition-colors items-center border-neutral-900/50 hover:bg-neutral-900/20">
<div className="tabular-nums text-neutral-300">..043</div>
<div className="text-center text-neutral-500 tabular-nums">48232</div>
<div className="text-center font-bold text-rose-400">2</div>
<div className="flex justify-end items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden w-full max-w-[420px] bg-[#0a0a0a] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:border-x flex flex-col border-neutral-900" id="admin-view">

<header className="flex items-center gap-3 p-4 border-b sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-20 border-neutral-900">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors" onclick="switchView('login-view')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="text-base font-bold tracking-tight text-white">Admin Dashboard</div>
</header>
<main className="flex-1 overflow-y-auto p-4 pb-20 scrollbar-hide space-y-6">

<div className="grid grid-cols-2 gap-3">
<div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-1">
<span className="text-xs text-neutral-500 font-medium">Total Users</span>
<span className="text-2xl font-bold tracking-tight text-white tabular-nums">1,284</span>
</div>
<div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-1">
<span className="text-xs text-neutral-500 font-medium">Today's Deposit</span>
<span className="text-2xl font-bold tracking-tight text-amber-500 tabular-nums">₹ 84K</span>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden">
<div className="p-4 border-b border-neutral-800 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:gamepad-linear"></iconify-icon>
<h2 className="text-sm font-bold text-white">Wingo Result Control</h2>
</div>
<div className="p-4 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">Active Period:</span>
<span className="font-bold text-white tabular-nums tracking-tight">20231027045</span>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Set Winning Number</label>
<div className="grid grid-cols-5 gap-2">
<button className="h-10 rounded-lg border border-neutral-700 bg-neutral-800 text-white text-sm font-semibold">0</button>
<button className="h-10 rounded-lg border border-neutral-800 text-neutral-400 text-sm font-semibold">1</button>
<button className="h-10 rounded-lg border border-neutral-800 text-neutral-400 text-sm font-semibold">2</button>
<button className="h-10 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-500 text-sm font-semibold ring-1 ring-amber-500/50">3</button>
<button className="h-10 rounded-lg border border-neutral-800 text-neutral-400 text-sm font-semibold">4</button>
</div>
</div>
<button className="w-full h-10 rounded-xl bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 transition-colors mt-2">
                        Confirm Result
                    </button>
</div>
</div>
</main>
</div>

<nav className="hidden absolute bottom-0 w-full max-w-[420px] bg-[#0a0a0a]/95 backdrop-blur-xl border-t pb-6 pt-2 px-4 justify-between items-center z-30 border-neutral-900" id="bottom-nav">
<button className="flex flex-col items-center gap-1 p-2 w-16 text-amber-500 transition-colors" onclick="switchView('home-view')">
<iconify-icon icon="solar:home-smile-bold" width="22"></iconify-icon>
<span className="text-[10px] font-bold tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-neutral-500 transition-colors hover:text-neutral-300">
<iconify-icon icon="solar:clipboard-list-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Activity</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-neutral-500 transition-colors hover:text-neutral-300">
<div className="relative">
<iconify-icon icon="solar:gift-linear" width="22"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></div>
</div>
<span className="text-[10px] font-medium tracking-wide">Promo</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-neutral-500 transition-colors hover:text-neutral-300">
<iconify-icon icon="solar:wallet-2-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-neutral-500 transition-colors hover:text-neutral-300" onclick="switchView('login-view')">
<iconify-icon icon="solar:user-rounded-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Account</span>
</button>
</nav>


    </>
  );
}
