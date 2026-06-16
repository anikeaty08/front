import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function handlePurchase(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const email = document.getElementById('email').value;
            
            // Format the message
            const message = `*NEW LIFETIME ORDER ($10)*%0A%0A` +
                            `👤 *Name:* ${name}%0A` +
                            `📱 *WhatsApp:* ${whatsapp}%0A` +
                            `📧 *Email:* ${email}%0A%0A` +
                            `I want to buy the Premium Indicator with Lifetime Access for $10.`;
            
            // Redirect to WhatsApp API
            const targetNumber = "923195060567";
            const url = `https://wa.me/${targetNumber}?text=${message}`;
            
            window.open(url, '_blank');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white text-sm">PROTRADE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-light">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#value">Compare</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<a className="px-4 py-2 text-xs font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors tracking-tight" href="#buy-now">
                Get Lifetime Access
            </a>
</div>
</nav>

<header className="pt-32 pb-20 px-6 relative">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-200 mb-8 font-light">
<iconify-icon className="text-emerald-400" icon="solar:crown-star-linear"></iconify-icon>
<span>Premium Indicator • Lifetime Access $10</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                Institutional Grade Tools.<br/>
<span className="gradient-text">Unbeatable Price.</span>
</h1>
<p className="text-slate-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Stop paying $50/month for basic signals. Get our premium, professional TradingView algorithm for a one-time payment of just <span className="text-white font-medium">$10</span>. Lifetime updates included.
            </p>
<div className="flex items-center justify-center gap-4">
<a className="px-6 py-3 bg-white text-slate-950 font-medium rounded hover:bg-slate-200 transition-colors text-sm flex items-center gap-2" href="#buy-now">
                    Get Lifetime Access
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-6 py-3 border border-white/10 text-slate-300 font-medium rounded hover:bg-white/5 transition-colors text-sm" href="#value">
                    Why so cheap?
                </a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto glass-panel rounded-xl border-t border-white/10 p-2 shadow-2xl shadow-emerald-900/10">
<div className="bg-slate-950/50 rounded-lg aspect-[16/9] md:aspect-[21/9] flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<svg className="w-full h-full absolute bottom-0 opacity-80" preserveaspectratio="none" viewbox="0 0 1000 300">
<path d="M0,250 C100,240 200,100 300,150 C400,200 500,50 600,120 C700,190 800,80 1000,20" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,250 C100,240 200,100 300,150 C400,200 500,50 600,120 C700,190 800,80 1000,20 V300 H0 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-1/4 left-1/3 glass-panel px-3 py-1.5 rounded text-xs flex items-center gap-2 border-l-2 border-emerald-500">
<span className="text-slate-400">Signal</span>
<span className="text-emerald-400 font-medium">PREMIUM LONG</span>
</div>
</div>
</div>
</header>

<section className="py-16 border-t border-white/5" id="value">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Why pay more for less?</h2>
<p className="text-slate-400 text-sm mt-2 font-light">We disrupt the market by offering premium tools without the recurring fees.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 items-center">

<div className="glass-panel p-8 rounded-xl border border-white/5 opacity-60">
<h3 className="text-slate-400 font-medium mb-6 flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                        Other Providers
                    </h3>
<ul className="space-y-4 mb-8">
<li className="flex items-center justify-between text-slate-500 text-sm">
<span>Monthly Subscription</span>
<span className="line-through text-red-400/70">$49/mo</span>
</li>
<li className="flex items-center justify-between text-slate-500 text-sm">
<span>Setup Fees</span>
<span className="line-through text-red-400/70">$10</span>
</li>
<li className="flex items-center justify-between text-slate-500 text-sm">
<span>Access</span>
<span>Limited Time</span>
</li>
</ul>
<div className="pt-4 border-t border-white/5 text-center text-slate-500 text-sm">
                        Annual Cost: ~$600
                    </div>
</div>

<div className="glass-panel-highlight p-8 rounded-xl relative transform md:scale-105 shadow-2xl shadow-emerald-900/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-bold rounded-full uppercase tracking-wider">Best Value</div>
<h3 className="text-white font-medium mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear"></iconify-icon>
                        ProTrade Premium
                    </h3>
<ul className="space-y-4 mb-8">
<li className="flex items-center justify-between text-slate-300 text-sm">
<span>Monthly Subscription</span>
<span className="text-emerald-400 font-medium">$0</span>
</li>
<li className="flex items-center justify-between text-slate-300 text-sm">
<span>Setup Fees</span>
<span className="text-emerald-400 font-medium">$0</span>
</li>
<li className="flex items-center justify-between text-slate-300 text-sm">
<span>Access</span>
<span className="text-emerald-400 font-medium">Lifetime</span>
</li>
</ul>
<div className="pt-4 border-t border-emerald-500/20 flex items-center justify-between">
<span className="text-slate-400 text-sm">Total Cost:</span>
<span className="text-2xl font-bold text-white">$10</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center tracking-tight">Premium Features Included</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-200 font-medium mb-2">Lifetime Access</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">Pay once, trade forever. No hidden fees, no expiration dates. You own the tool.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-200 font-medium mb-2">Pro Algorithms</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">Built with the same logic used by institutional traders. Filter noise and trade trends.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-200 font-medium mb-2">Free Updates</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">As markets change, our indicator evolves. You get Version 3.0 and beyond for free.</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-slate-950" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Verified Traders</h2>
<div className="flex items-center gap-2 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-slate-400 text-sm font-light ml-2">4.9/5 Average</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"I was skeptical because of the $10 price, but this is better than the $200 indicator I bought last month. The lifetime access is real."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">SA</div>
<div>
<div className="text-white text-xs font-medium">Sarah A.</div>
<div className="text-slate-500 text-[10px]">Forex Trader</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"Finally a tool that is affordable for beginners. The signals are clean and the setup took 2 minutes. Thank you!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">RM</div>
<div>
<div className="text-white text-xs font-medium">Rashid M.</div>
<div className="text-slate-500 text-[10px]">Crypto Scalper</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"Unbeatable value. I made the $10 back in my first trade. The fact that I don't have to pay monthly is a game changer."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">DK</div>
<div>
<div className="text-white text-xs font-medium">David K.</div>
<div className="text-slate-500 text-[10px]">Day Trader</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="buy-now">
<div className="max-w-5xl mx-auto">
<div className="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row">

<div className="md:w-1/2 p-10 bg-gradient-to-br from-emerald-900/10 to-slate-900/50 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">BEST SELLER</div>
</div>
<h2 className="text-3xl text-white font-medium mb-4">Lifetime Premium Suite</h2>
<p className="text-slate-400 text-sm font-light mb-6">Get the exact same tools used by pros, for the price of a coffee.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm font-light">Premium Buy/Sell Signals</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm font-light"><strong className="text-white font-medium">Lifetime Access</strong> (No monthly fees)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm font-light">Works on Free TradingView</span>
</li>
</ul>
</div>
<div>
<div className="flex items-end gap-2 mb-1">
<span className="text-5xl font-semibold text-white tracking-tight">$10</span>
<span className="text-slate-500 line-through text-lg mb-1">$99</span>
</div>
<p className="text-emerald-400 text-xs font-medium mt-2 flex items-center gap-1">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                            One-time payment only
                        </p>
</div>
</div>

<div className="md:w-1/2 p-10 bg-slate-950">
<h3 className="text-white font-medium mb-6">Secure Your License</h3>
<form className="space-y-5" id="purchaseForm" onsubmit="handlePurchase(event)">
<div>
<label className="block text-slate-400 text-xs mb-2 ml-1">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<input className="input-field w-full rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:ring-1 focus:ring-emerald-500" id="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-slate-400 text-xs mb-2 ml-1">WhatsApp Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<input className="input-field w-full rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:ring-1 focus:ring-emerald-500" id="whatsapp" placeholder="+92 300 1234567" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-slate-400 text-xs mb-2 ml-1">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="input-field w-full rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:ring-1 focus:ring-emerald-500" id="email" placeholder="john@gmail.com" required="" type="email"/>
</div>
</div>
<button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 group" type="submit">
<span>Get Lifetime Access for $10</span>
<iconify-icon className="group-hover:-translate-y-1 transition-transform" icon="solar:wallet-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-500 mt-4">
                            Clicking button opens WhatsApp to complete secure payment.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-10 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white text-xs">PROTRADE</span>
</div>
<p className="text-slate-600 text-xs font-light">© 2024 ProTrade Indicators. Lifetime Access Guaranteed.</p>
</div>
</footer>



    </>
  );
}
