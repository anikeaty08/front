import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple View Navigation Logic
        function navigateTo(screenId) {
            const loginScreen = document.getElementById('screen-login');
            const dashboard = document.getElementById('view-dashboard');
            const recharge = document.getElementById('view-recharge');
            const packs = document.getElementById('view-packs');
            
            // Hide all views first
            dashboard.classList.add('hidden');
            recharge.classList.add('hidden');
            packs.classList.add('hidden');

            // Handle Login Screen
            if (screenId !== 'login') {
                loginScreen.style.transform = 'translateY(-100%)';
            }

            // Show selected view
            if (screenId === 'home') {
                dashboard.classList.remove('hidden');
                updateNavState('nav-home');
            } else if (screenId === 'recharge') {
                recharge.classList.remove('hidden');
                updateNavState('none'); // No active nav item for recharge page
            } else if (screenId === 'packs') {
                packs.classList.remove('hidden');
                updateNavState('nav-packs');
            } else {
                // Fallback for demo
                dashboard.classList.remove('hidden');
                updateNavState('nav-home');
            }
        }

        function updateNavState(activeId) {
            const items = document.querySelectorAll('.nav-item');
            items.forEach(item => {
                const activeIcon = item.querySelector('.icon-active');
                const inactiveIcon = item.querySelector('.icon-inactive');
                
                if (item.id === activeId) {
                    item.classList.remove('text-slate-400');
                    item.classList.add('text-blue-600');
                    activeIcon.classList.remove('hidden');
                    activeIcon.classList.add('block');
                    inactiveIcon.classList.add('hidden');
                    inactiveIcon.classList.remove('block');
                } else {
                    item.classList.add('text-slate-400');
                    item.classList.remove('text-blue-600');
                    activeIcon.classList.add('hidden');
                    activeIcon.classList.remove('block');
                    inactiveIcon.classList.remove('hidden');
                    inactiveIcon.classList.add('block');
                }
            });
        }

        // Initialize animation styles
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.4s ease-out forwards;
            }
        `;
        document.head.appendChild(styleSheet);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto min-h-screen bg-slate-50 relative shadow-2xl overflow-hidden flex flex-col" id="app">

<div className="flex flex-col h-full absolute inset-0 z-50 bg-white p-6 transition-transform duration-300" id="screen-login">
<div className="flex justify-end">
<button className="text-xs font-semibold bg-slate-100 px-3 py-1 rounded-full text-slate-600">EN / BN</button>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
<span className="text-2xl font-bold tracking-tighter">T</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight mb-2">Welcome to Telco</h1>
<p className="text-sm text-slate-500 mb-8 max-w-[250px]">Manage your account, recharge, and buy packs effortlessly.</p>
<div className="w-full space-y-4">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-slate-400 font-medium text-sm">+880</span>
</div>
<input className="w-full pl-16 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-lg font-medium outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="17XXXXXXXX" type="tel"/>
</div>
<button className="w-full bg-brand-gradient text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2" onclick="navigateTo('home')">
<span>Continue</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-400 mt-8">By continuing you agree to our Terms &amp; Conditions</p>
</div>
</div>

<header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-5 py-4 flex items-center justify-between border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://ui-avatars.com/api/?name=Rahim+Uddin&amp;background=e2e8f0&amp;color=475569"/>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Good Morning,</p>
<h2 className="text-sm font-semibold tracking-tight text-slate-800">Rahim Uddin</h2>
</div>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-600 relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden pb-24 scroll-smooth">

<div className="animate-fade-in px-5 py-4 space-y-6" id="view-dashboard">

<div className="relative bg-brand-gradient rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full -ml-8 -mb-8 blur-lg"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-blue-100 bg-white/10 px-2 py-1 rounded-lg">Prepaid</span>
<button className="bg-white text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm hover:bg-blue-50 transition-colors" onclick="navigateTo('recharge')">
                                Recharge
                            </button>
</div>
<div className="mt-4 mb-4">
<p className="text-sm text-blue-100 font-medium">Account Balance</p>
<h1 className="text-4xl font-bold tracking-tight mt-1">৳ 45.50</h1>
</div>
<div className="flex justify-between items-end border-t border-white/20 pt-3 mt-4">
<div className="text-xs text-blue-50">
<p>Valid till: <span className="font-semibold text-white">24 Oct, 2023</span></p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-blue-100">
<span>Points: 450</span>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">

<div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
<div className="w-14 h-14 rounded-full border-[3px] border-emerald-100 border-t-emerald-500 flex items-center justify-center mb-2 rotate-45 group-hover:rotate-[225deg] transition-all duration-700 ease-out">
<iconify-icon className="-rotate-45 group-hover:-rotate-[225deg] transition-all duration-700 text-emerald-600" icon="solar:global-linear" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-slate-800">1.2 GB</p>
<p className="text-[10px] text-slate-400">Rem. Data</p>
</div>

<div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
<div className="w-14 h-14 rounded-full border-[3px] border-violet-100 border-t-violet-500 flex items-center justify-center mb-2 -rotate-12">
<iconify-icon className="rotate-12 text-violet-600" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-slate-800">45 Min</p>
<p className="text-[10px] text-slate-400">Rem. Voice</p>
</div>

<div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
<div className="w-14 h-14 rounded-full border-[3px] border-amber-100 border-t-amber-500 flex items-center justify-center mb-2 rotate-90">
<iconify-icon className="-rotate-90 text-amber-500" icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-slate-800">120 SMS</p>
<p className="text-[10px] text-slate-400">Rem. SMS</p>
</div>
</div>

<div className="grid grid-cols-4 gap-4 py-2">
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Buy Pack</span>
</button>
<button className="flex flex-col items-center gap-2 group" onclick="navigateTo('recharge')">
<div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Recharge</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Offers</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">History</span>
</button>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Just for You</h3>
<a className="text-xs font-semibold text-blue-600" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">

<div className="min-w-[260px] bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded-bl-xl text-yellow-900">HOT</div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-800">10 GB + 200 Min</h4>
<p className="text-xs text-slate-500">Validity: 30 Days</p>
</div>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-sm font-bold text-slate-900">৳ 298</span>
<button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg">Buy Now</button>
</div>
</div>

<div className="min-w-[260px] bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-800">Social Pack</h4>
<p className="text-xs text-slate-500">Validity: 7 Days</p>
</div>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-sm font-bold text-slate-900">৳ 89</span>
<button className="bg-white border border-slate-200 text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg">Buy Now</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-800">Active Subscriptions</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-600">Monthly Internet Pack (5GB)</span>
<span className="text-slate-400">Exp: 2 days</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex justify-between items-center text-xs pt-2 border-t border-slate-50">
<span className="text-slate-600">Missed Call Alert</span>
<span className="text-emerald-600 font-semibold">Active</span>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in px-5 py-4 space-y-6 min-h-full bg-slate-50" id="view-recharge">
<div className="flex items-center gap-3 mb-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600" onclick="navigateTo('home')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<h2 className="text-lg font-semibold tracking-tight">Recharge</h2>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Enter Amount</label>
<div className="flex items-center mt-2 border-b-2 border-blue-500 pb-2">
<span className="text-2xl font-bold text-slate-400 mr-2">৳</span>
<input className="w-full text-3xl font-bold text-slate-800 outline-none bg-transparent placeholder:text-slate-200" placeholder="0" type="number" value="100"/>
</div>

<div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
<button className="flex-shrink-0 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">50</button>
<button className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100 hover:bg-slate-100">100</button>
<button className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100 hover:bg-slate-100">200</button>
<button className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100 hover:bg-slate-100">500</button>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-800 mb-3">Pay With</h3>
<div className="space-y-2">

<label className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-pink-500 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-pink-500 flex items-center justify-center text-white font-bold text-[10px]">bkash</div>
<span className="text-sm font-medium text-slate-700">bKash</span>
</div>
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-pink-500 group-hover:bg-pink-50 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100"></div>
</div>
</label>

<label className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-orange-500 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-[10px]">nagad</div>
<span className="text-sm font-medium text-slate-700">Nagad</span>
</div>
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 group-hover:bg-orange-50 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100"></div>
</div>
</label>

<label className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-blue-500 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:card-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Credit / Debit Card</span>
</div>
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-50 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100"></div>
</div>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-brand-gradient text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform">
                        Recharge ৳ 100
                    </button>
<p className="text-center text-[10px] text-slate-400 mt-3">Secure transaction encrypted by SSLCommerz</p>
</div>
</div>

<div className="hidden animate-fade-in px-5 py-4 space-y-6" id="view-packs">
<h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Plans &amp; Packs</h2>

<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
<iconify-icon className="absolute right-0 top-0 text-white opacity-10 -mr-6 -mt-6" icon="solar:settings-minimalistic-linear" width="120"></iconify-icon>
<h3 className="text-lg font-bold mb-1">FlexiPlan</h3>
<p className="text-xs text-white/80 mb-4">Design your own pack and save up to 20%</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span>Internet</span>
<span>5 GB</span>
</div>
<input className="accent-white" max="100" min="0" type="range" value="40"/>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span>Validity</span>
<span>7 Days</span>
</div>
<input className="accent-white" max="30" min="0" type="range" value="7"/>
</div>
</div>
<button className="mt-4 w-full bg-white text-violet-600 text-xs font-bold py-2.5 rounded-lg shadow-sm">Calculate &amp; Buy</button>
</div>

<div className="flex border-b border-slate-200">
<button className="px-4 py-2 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">Internet</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500">Voice</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500">Combo</button>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
<div>
<div className="flex gap-2 items-center mb-1">
<span className="text-lg font-bold text-slate-800">20 GB</span>
<span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold">BEST SELLER</span>
</div>
<p className="text-xs text-slate-500">30 Days Validity</p>
<p className="text-xs text-slate-400 mt-1">4G Only</p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-base font-bold text-slate-900">৳ 399</span>
<button className="px-4 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50">Buy</button>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
<div>
<div className="flex gap-2 items-center mb-1">
<span className="text-lg font-bold text-slate-800">5 GB</span>
</div>
<p className="text-xs text-slate-500">7 Days Validity</p>
<p className="text-xs text-slate-400 mt-1">Video pack</p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-base font-bold text-slate-900">৳ 120</span>
<button className="px-4 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50">Buy</button>
</div>
</div>
</div>
</div>
</main>

<nav className="bg-white border-t border-slate-100 px-6 py-3 pb-5 flex justify-between items-center z-40 sticky bottom-0">
<button className="nav-item flex flex-col items-center gap-1 text-blue-600" id="nav-home" onclick="navigateTo('home')">
<iconify-icon className="icon-active hidden" icon="solar:home-2-bold" width="24"></iconify-icon>
<iconify-icon className="icon-inactive block" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600" id="nav-packs" onclick="navigateTo('packs')">
<iconify-icon className="icon-active hidden" icon="solar:bag-bold" width="24"></iconify-icon>
<iconify-icon className="icon-inactive block" icon="solar:bag-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Packs</span>
</button>

<button className="relative -top-6 bg-brand-gradient text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 border-4 border-slate-50 active:scale-95 transition-transform" onclick="navigateTo('recharge')">
<iconify-icon icon="solar:bolt-linear" strokeWidth="2" width="28"></iconify-icon>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600" id="nav-offers" onclick="navigateTo('offers')">
<iconify-icon className="icon-active hidden" icon="solar:gift-bold" width="24"></iconify-icon>
<iconify-icon className="icon-inactive block" icon="solar:gift-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Offers</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600" id="nav-account" onclick="navigateTo('account')">
<iconify-icon className="icon-active hidden" icon="solar:user-bold" width="24"></iconify-icon>
<iconify-icon className="icon-inactive block" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Menu</span>
</button>
</nav>
</div>


    </>
  );
}
