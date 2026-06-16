import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: { 950: '#020617' } // Ultra dark background
}
}
}
}



        // State Management
        const state = {
            currentScreen: 'welcome',
            isAuthenticated: false
        };

        const bottomNavScreens = ['home', 'cards', 'mall', 'rewards', 'more'];

        function navigate(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(el => {
                el.classList.remove('active');
            });

            // Show target screen
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }

            // Handle Header State
            const header = document.getElementById('main-header');
            const headerLeft = document.getElementById('header-left');
            
            if (['welcome', 'auth-login', 'auth-otp'].includes(screenId)) {
                header.classList.add('hidden');
                header.classList.remove('flex');
            } else {
                header.classList.remove('hidden');
                header.classList.add('flex');

                if (bottomNavScreens.includes(screenId)) {
                    // Main Tab: Show Logo
                    headerLeft.innerHTML = `
                        <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-600 to-zinc-800 flex items-center justify-center text-white text-xs font-medium">A</div>
                        <h1 class="text-lg font-medium tracking-tighter text-white">aura.</h1>
                    `;
                } else {
                    // Subpage: Show Back Arrow
                    let title = screenId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                    if (screenId === 'product-detail') title = 'Product';
                    if (screenId === 'cart') title = 'My Cart';
                    
                    headerLeft.innerHTML = `
                        <button onclick="history.back()" class="text-zinc-400 hover:text-white mr-2">
                            <iconify-icon icon="lucide:arrow-left" width="24"></iconify-icon>
                        </button>
                        <h1 class="text-lg font-medium tracking-tight text-white">${title}</h1>
                    `;
                    // Simple history mock
                    headerLeft.querySelector('button').onclick = () => {
                        // Simple fallback for prototype
                        navigate('home'); 
                    };
                }
            }

            // Handle Bottom Nav Visibility
            const nav = document.getElementById('bottom-nav');
            if (bottomNavScreens.includes(screenId)) {
                nav.classList.remove('hidden');
                // Update active state
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    const icon = btn.querySelector('iconify-icon');
                    const text = btn.querySelector('span');
                    if (btn.dataset.target === screenId) {
                        btn.classList.remove('text-zinc-500');
                        btn.classList.add('text-white');
                    } else {
                        btn.classList.add('text-zinc-500');
                        btn.classList.remove('text-white');
                    }
                });
            } else {
                nav.classList.add('hidden');
            }
        }

        function completeLogin() {
            state.isAuthenticated = true;
            navigate('home');
        }

        function showModal(modalId) {
            document.getElementById(modalId).classList.remove('hidden');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }

        // Initialize header visibility
        navigate('welcome');

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto min-h-screen max-w-md bg-zinc-950 pb-24 relative shadow-2xl overflow-hidden border-x border-white/5">

<header className="flex items-center justify-between px-6 pt-8 pb-4 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 border-b border-white/5 transition-all" id="main-header">

<div className="flex items-center gap-3" id="header-left">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-600 to-zinc-800 flex items-center justify-center text-white text-xs font-medium">A</div>
<h1 className="text-lg font-medium tracking-tighter text-white">aura.</h1>
</div>

<div className="flex gap-4">
<button className="relative text-zinc-400 hover:text-white transition-colors" onclick="navigate('notifications')">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-zinc-950" id="notif-badge"></span>
</button>
</div>
</header>

<main className="px-6 pt-6" id="app-content">

<div className="screen active h-[80vh] flex flex-col justify-end pb-10" id="welcome">
<div className="flex-1 flex items-center justify-center">
<div className="h-24 w-24 rounded-full bg-violet-500/10 flex items-center justify-center animate-pulse">
<div className="h-16 w-16 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-3xl">A</div>
</div>
</div>
<h1 className="text-3xl font-medium tracking-tight mb-2">Pay smart.<br/>Earn more.</h1>
<p className="text-zinc-400 mb-8">Manage cards, shop exclusive deals, and maximize your rewards in one place.</p>
<div className="space-y-3">
<button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium py-3.5 rounded-xl transition-colors" onclick="navigate('auth-login')">Get Started</button>
<button className="w-full bg-transparent border border-white/10 text-zinc-400 hover:text-white font-medium py-3.5 rounded-xl transition-colors">Log In</button>
</div>
</div>

<div className="screen fade-in pt-10" id="auth-login">
<h2 className="text-2xl font-medium mb-2">Welcome back</h2>
<p className="text-sm text-zinc-400 mb-8">Enter your mobile number to continue.</p>
<div className="space-y-6">
<div>
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-2 block">Mobile Number</label>
<div className="flex gap-3">
<div className="w-16 border-b border-white/10 py-2 text-center text-zinc-400">+91</div>
<input className="flex-1 bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="98765 43210" type="tel" value="9876543210"/>
</div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3.5 rounded-xl mt-4" onclick="navigate('auth-otp')">Get OTP</button>
</div>
</div>

<div className="screen fade-in pt-10" id="auth-otp">
<h2 className="text-2xl font-medium mb-2">Verify OTP</h2>
<p className="text-sm text-zinc-400 mb-8">Code sent to +91 98765 43210</p>
<div className="flex gap-4 mb-8">
<input className="w-12 h-14 rounded-xl bg-zinc-900 border border-white/10 text-center text-xl text-white focus:border-violet-500 focus:outline-none" type="text" value="4"/>
<input className="w-12 h-14 rounded-xl bg-zinc-900 border border-white/10 text-center text-xl text-white focus:border-violet-500 focus:outline-none" type="text" value="2"/>
<input className="w-12 h-14 rounded-xl bg-zinc-900 border border-white/10 text-center text-xl text-white focus:border-violet-500 focus:outline-none" type="text" value="9"/>
<input className="w-12 h-14 rounded-xl bg-zinc-900 border border-white/10 text-center text-xl text-white focus:border-violet-500 focus:outline-none" type="text" value="5"/>
</div>
<button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium py-3.5 rounded-xl" onclick="completeLogin()">Verify &amp; Proceed</button>
<p className="text-center text-xs text-zinc-500 mt-6 cursor-pointer">Resend code in 0:24</p>
</div>

<div className="screen space-y-8 fade-in" id="home">

<div>
<h2 className="text-xl font-medium text-zinc-50">Hi, Alex</h2>
<div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-yellow-500/20" id="kyc-banner">
<div className="flex items-center gap-3">
<iconify-icon className="text-yellow-500" icon="lucide:shield-alert"></iconify-icon>
<div className="text-xs">
<p className="text-white font-medium">Complete KYC</p>
<p className="text-zinc-500">Unlock full card benefits</p>
</div>
</div>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-white transition-colors" onclick="navigate('kyc-step1')">Verify</button>
</div>
</div>

<div className="relative group cursor-pointer" onclick="navigate('cards')">
<div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-zinc-900 rounded-3xl blur-sm transform group-hover:scale-[1.02] transition-transform"></div>
<div className="relative aspect-[1.58/1] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="lucide:credit-card"></iconify-icon>
<span className="text-sm font-medium text-white">Aura Infinite</span>
</div>
<span className="text-xs font-mono text-zinc-500">•••• 8842</span>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Total Due</p>
<h2 className="text-3xl font-medium tracking-tight text-white mt-1">$1,250.00</h2>
<p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> Due in 3 days
                            </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-4 active:scale-95 transition-transform cursor-pointer" onclick="navigate('rewards')">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-violet-400" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">CI Points</span>
</div>
<div className="text-lg font-medium text-white">12,450</div>
</div>
<div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-4 active:scale-95 transition-transform cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400" icon="lucide:trending-up" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Cashback</span>
</div>
<div className="text-lg font-medium text-white">+$42.80</div>
</div>
</div>

<div className="flex justify-between px-2">
<button className="flex flex-col items-center gap-2 group">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/50 transition-colors">
<iconify-icon icon="lucide:banknote" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">Pay Bill</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/50 transition-colors">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">History</span>
</button>
<button className="flex flex-col items-center gap-2 group" onclick="navigate('mall')">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/50 transition-colors">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">Mall</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/50 transition-colors">
<iconify-icon icon="lucide:tag" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">Offers</span>
</button>
</div>

<div className="border border-white/5 bg-gradient-to-r from-zinc-900 to-zinc-900/50 p-4 rounded-xl flex items-center gap-4 cursor-pointer" onclick="navigate('mall')">
<div className="h-10 w-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
<iconify-icon icon="lucide:percent" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">5% Extra Cashback</h4>
<p className="text-xs text-zinc-500">On all electronics in C Mall today.</p>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in" id="cards">
<h2 className="text-xl font-medium text-white">My Cards</h2>

<div className="bg-zinc-900 rounded-3xl border border-white/10 p-6 space-y-6">

<div className="aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-5 relative overflow-hidden border border-white/5 shadow-2xl">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-600/30 blur-3xl"></div>
<div className="flex justify-between items-start relative z-10">
<iconify-icon className="text-zinc-600 rotate-90" icon="lucide:nfc" width="24"></iconify-icon>
<span className="font-bold text-white tracking-widest italic opacity-50">VISA</span>
</div>
<div className="absolute bottom-5 left-5 z-10">
<p className="text-xs text-zinc-400 mb-1 font-mono">•••• 8842</p>
<p className="text-sm text-zinc-300">ALEX ROBINSON</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<p className="text-xs text-zinc-500">Current Balance</p>
<p className="text-xl font-medium text-white">$4,295.50</p>
</div>
<div className="space-y-1 text-right">
<p className="text-xs text-zinc-500">Due Amount</p>
<p className="text-xl font-medium text-white">$1,250.00</p>
</div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-xl hover:bg-zinc-200 transition-colors" onclick="showModal('payment-modal')">Pay Bill</button>
<div className="flex items-center justify-between pt-2 border-t border-white/5">
<button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon> Statement
                        </button>
<button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
<iconify-icon icon="lucide:settings-2" width="14"></iconify-icon> Settings
                        </button>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wider">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="lucide:coffee" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Starbucks</p>
<p className="text-xs text-zinc-500">Today, 9:41 AM</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$12.50</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="lucide:shopping-bag" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Uniqlo</p>
<p className="text-xs text-zinc-500">Yesterday</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$89.90</span>
</div>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in" id="mall">

<div className="flex gap-3">
<div className="flex-1 relative">
<iconify-icon className="absolute left-3 top-3 text-zinc-500" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-violet-500" placeholder="Search products..." type="text"/>
</div>
<button className="relative h-10 w-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400" onclick="navigate('cart')">
<iconify-icon icon="lucide:shopping-cart" width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-violet-600 text-[10px] text-white flex items-center justify-center border border-zinc-950">2</span>
</button>
</div>

<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-medium">All</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium">Electronics</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium">Fashion</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium">Home</button>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="group cursor-pointer" onclick="navigate('product-detail')">
<div className="aspect-square rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden mb-3 p-4 flex items-center justify-center">
<iconify-icon className="text-zinc-500 group-hover:scale-110 transition-transform duration-300" icon="lucide:headphones" strokeWidth="1" width="64"></iconify-icon>
<div className="absolute top-2 right-2 bg-violet-500/10 text-violet-300 text-[10px] font-medium px-2 py-0.5 rounded-full border border-violet-500/20">3% Back</div>
</div>
<h4 className="text-sm text-white font-medium truncate">Sony WH-1000XM5</h4>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-sm font-medium text-white">$348</span>
<span className="text-[10px] text-zinc-500 line-through">$399</span>
</div>
<p className="text-[10px] text-violet-400 mt-1">Earn 348 pts</p>
</div>

<div className="group cursor-pointer" onclick="navigate('product-detail')">
<div className="aspect-square rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden mb-3 p-4 flex items-center justify-center">
<iconify-icon className="text-zinc-500 group-hover:scale-110 transition-transform duration-300" icon="lucide:watch" strokeWidth="1" width="64"></iconify-icon>
</div>
<h4 className="text-sm text-white font-medium truncate">Apple Watch Ultra</h4>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-sm font-medium text-white">$799</span>
</div>
<p className="text-[10px] text-violet-400 mt-1">Earn 800 pts</p>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in pb-20" id="product-detail">
<div className="aspect-square rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center relative">
<iconify-icon className="text-zinc-400" icon="lucide:headphones" strokeWidth="0.8" width="120"></iconify-icon>
<button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
<div>
<h1 className="text-xl font-medium text-white">Sony WH-1000XM5 Wireless Headphones</h1>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-yellow-500 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star-half" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-500">(128 reviews)</span>
</div>
<p className="text-2xl font-medium text-white mt-4">$348.00</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-violet-500/10 rounded-md mt-2 border border-violet-500/20">
<iconify-icon className="text-violet-400" icon="lucide:sparkles" width="12"></iconify-icon>
<span className="text-xs text-violet-300">Earn 348 CI Points</span>
</div>
</div>
<div className="space-y-3">
<h3 className="text-sm font-medium text-zinc-400">Description</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Industry-leading noise cancellation optimized to you. Magnificent Sound, engineered to perfection. Crystal clear hands-free calling.</p>
</div>

<div className="fixed bottom-0 left-0 right-0 p-6 bg-zinc-950 border-t border-white/5 max-w-md mx-auto z-50">
<div className="flex gap-4">
<button className="flex-1 bg-violet-600 hover:bg-violet-500 text-white font-medium py-3.5 rounded-xl transition-colors" onclick="navigate('cart')">Add to Cart</button>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in pb-20" id="cart">
<h2 className="text-xl font-medium text-white">Your Cart (2)</h2>

<div className="space-y-4">
<div className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-white/5">
<div className="h-20 w-20 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-500" icon="lucide:headphones" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white">Sony WH-1000XM5</h4>
<p className="text-xs text-zinc-500 mt-1">Black</p>
<div className="flex justify-between items-center mt-3">
<span className="text-sm font-medium text-white">$348.00</span>
<div className="flex items-center gap-3 bg-zinc-950 rounded-lg px-2 py-1 border border-white/10">
<button className="text-zinc-400 hover:text-white">-</button>
<span className="text-xs text-white w-2 text-center">1</span>
<button className="text-zinc-400 hover:text-white">+</button>
</div>
</div>
</div>
</div>
<div className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-white/5">
<div className="h-20 w-20 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-500" icon="lucide:shirt" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white">Merino Wool Hoodie</h4>
<p className="text-xs text-zinc-500 mt-1">Size M</p>
<div className="flex justify-between items-center mt-3">
<span className="text-sm font-medium text-white">$120.00</span>
<div className="flex items-center gap-3 bg-zinc-950 rounded-lg px-2 py-1 border border-white/10">
<button className="text-zinc-400 hover:text-white">-</button>
<span className="text-xs text-white w-2 text-center">1</span>
<button className="text-zinc-400 hover:text-white">+</button>
</div>
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5 space-y-4">
<h3 className="text-sm font-medium text-zinc-400">Payment Method</h3>

<label className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-4 hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Use Cashback</p>
<p className="text-xs text-zinc-500">Balance: $42.80</p>
</div>
</div>
<input className="accent-violet-600 h-5 w-5 rounded border-zinc-600 bg-zinc-800" type="checkbox"/>
</label>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-zinc-400">Total Amount</span>
<span className="text-xl font-medium text-white">$468.00</span>
</div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3.5 rounded-xl mt-4" onclick="showModal('success-modal')">Place Order</button>
</div>

<div className="screen space-y-6 fade-in" id="rewards">
<div className="bg-gradient-to-br from-violet-900/50 to-zinc-900 rounded-2xl p-6 text-center border border-white/10">
<p className="text-zinc-400 text-xs uppercase tracking-widest font-medium mb-2">Available Points</p>
<h2 className="text-4xl font-semibold text-white">12,450</h2>
<p className="text-zinc-500 text-xs mt-2">≈ $124.50 Value</p>
<button className="mt-6 px-6 py-2 bg-white text-zinc-950 text-sm font-medium rounded-full">Redeem Now</button>
</div>
<div className="space-y-4">
<h3 className="text-sm font-medium text-white">History</h3>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 rounded-xl bg-zinc-900/50 border border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">C Mall Purchase</p>
<p className="text-[10px] text-zinc-500">Yesterday</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-400">+348 pts</span>
</div>
<div className="flex justify-between items-center p-3 rounded-xl bg-zinc-900/50 border border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:credit-card" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">Bill Payment</p>
<p className="text-[10px] text-zinc-500">Oct 20</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-400">+120 pts</span>
</div>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in" id="more">
<div className="flex items-center gap-4 py-4">
<div className="h-16 w-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 text-xl font-medium">AR</div>
<div>
<h2 className="text-lg font-medium text-white">Alex Robinson</h2>
<p className="text-sm text-zinc-500">alex@example.com</p>
<span className="inline-block mt-2 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">KYC Verified</span>
</div>
</div>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-4 bg-zinc-900/30 hover:bg-zinc-900 rounded-xl transition-colors border border-transparent hover:border-white/5 text-zinc-300">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:user" width="18"></iconify-icon>
<span className="text-sm">Profile Details</span>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 bg-zinc-900/30 hover:bg-zinc-900 rounded-xl transition-colors border border-transparent hover:border-white/5 text-zinc-300">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
<span className="text-sm">Settings</span>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 bg-zinc-900/30 hover:bg-zinc-900 rounded-xl transition-colors border border-transparent hover:border-white/5 text-zinc-300">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:help-circle" width="18"></iconify-icon>
<span className="text-sm">Help &amp; Support</span>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 mt-6 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors" onclick="navigate('welcome')">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:log-out" width="18"></iconify-icon>
<span className="text-sm">Log Out</span>
</div>
</button>
</div>
</div>

<div className="screen space-y-4 fade-in" id="notifications">
<h2 className="text-xl font-medium text-white mb-4">Notifications</h2>
<div className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex gap-3">
<div className="h-2 w-2 mt-2 rounded-full bg-violet-500 shrink-0"></div>
<div>
<h4 className="text-sm font-medium text-white">Bill Payment Due</h4>
<p className="text-xs text-zinc-500 mt-1">Your statement for Aura Infinite is due in 3 days. Pay now to avoid charges.</p>
<p className="text-[10px] text-zinc-600 mt-2">2 hours ago</p>
</div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex gap-3 opacity-60">
<div className="h-2 w-2 mt-2 rounded-full bg-transparent shrink-0"></div>
<div>
<h4 className="text-sm font-medium text-white">Order Shipped</h4>
<p className="text-xs text-zinc-500 mt-1">Your order #9982 has been shipped via BlueDart.</p>
<p className="text-[10px] text-zinc-600 mt-2">Yesterday</p>
</div>
</div>
</div>

<div className="screen space-y-6 fade-in" id="kyc-step1">
<h2 className="text-xl font-medium text-white">Identity Verification</h2>
<div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-violet-500"></div>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-500 font-medium uppercase mb-2 block">Full Name (as per PAN)</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500" type="text" value="Alex Robinson"/>
</div>
<div>
<label className="text-xs text-zinc-500 font-medium uppercase mb-2 block">PAN Number</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500" placeholder="ABCDE1234F" type="text"/>
</div>
</div>
<button className="w-full bg-violet-600 text-white font-medium py-3.5 rounded-xl" onclick="navigate('home')">Submit &amp; Continue</button>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-zinc-950/90 backdrop-blur-xl max-w-md mx-auto hidden" id="bottom-nav">
<div className="flex items-center justify-around pb-6 pt-3">
<button className="nav-btn flex flex-col items-center gap-1 text-white" data-target="home" onclick="navigate('home')">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="cards" onclick="navigate('cards')">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Cards</span>
</button>
<div className="relative -top-5">
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-900/20 hover:bg-violet-500 transition-all" onclick="navigate('mall')">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="rewards" onclick="navigate('rewards')">
<iconify-icon icon="lucide:gift" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Rewards</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="more" onclick="navigate('more')">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">More</span>
</button>
</div>
</nav>


<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden" id="success-modal">
<div className="bg-zinc-900 border border-white/10 p-6 rounded-3xl w-80 text-center shadow-2xl transform transition-all scale-100">
<div className="h-16 w-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
<iconify-icon icon="lucide:check" strokeWidth="3" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Payment Successful</h3>
<p className="text-sm text-zinc-400 mt-2 mb-6">Your transaction was processed successfully. Reference ID: #883920</p>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-xl" onclick="closeModal('success-modal'); navigate('home')">Done</button>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm hidden sm:items-center" id="payment-modal">
<div className="bg-zinc-900 border border-white/10 p-6 rounded-t-3xl sm:rounded-3xl w-full max-w-md shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white">Pay Bill</h3>
<button className="text-zinc-500" onclick="closeModal('payment-modal')"><iconify-icon icon="lucide:x" width="24"></iconify-icon></button>
</div>
<div className="space-y-4">
<label className="block p-4 rounded-xl border border-violet-500/50 bg-violet-500/10 cursor-pointer">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Total Due</span>
<input checked="" className="accent-violet-500" name="pay-amt" type="radio"/>
</div>
<span className="text-xl font-medium text-white">$1,250.00</span>
</label>
<label className="block p-4 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-zinc-400">Minimum Due</span>
<input className="accent-violet-500" name="pay-amt" type="radio"/>
</div>
<span className="text-lg font-medium text-zinc-300">$120.00</span>
</label>
<button className="w-full bg-violet-600 text-white font-medium py-3.5 rounded-xl mt-4" onclick="closeModal('payment-modal'); showModal('success-modal')">Confirm Payment</button>
</div>
</div>
</div>
</div>


    </>
  );
}
