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
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 glass transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold tracking-tighter group-hover:opacity-80 transition-opacity">CIKKA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#rewards">Rewards</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#merchants">Merchants</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors" id="theme-toggle">
<i className="w-5 h-5 hidden dark:block text-zinc-400" data-lucide="sun"></i>
<i className="w-5 h-5 block dark:hidden text-zinc-600" data-lucide="moon"></i>
</button>
<a className="hidden md:flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity" href="#">
                    Get App
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Waitlist is over. Open for everyone.
                </div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-6 gradient-text">
                    Your Financial <br/> Wardrobe.
                </h1>
<p className="reveal text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed">
                    The dual-sided fintech platform merging credit card management with premium e-commerce. Pay bills, shop brands, and earn rewards—even if you pay late.
                </p>
<div className="reveal flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
<button className="w-full md:w-auto px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
                        Download Cikka
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto px-8 py-3 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                        Explore for Merchants
                    </button>
</div>
</div>

<div className="reveal mt-20 relative mx-auto max-w-5xl">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent dark:from-zinc-950 z-20 h-full w-full"></div>
<div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group hover:border-indigo-500/30 transition-colors duration-500 relative">

<div className="absolute inset-0 flex">

<div className="w-64 border-r border-zinc-100 dark:border-zinc-800 p-6 hidden md:block bg-zinc-50/50 dark:bg-zinc-900/50">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
<div className="h-3 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-full"></div>
<div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-800/50 rounded-full"></div>
<div className="h-2 w-5/6 bg-zinc-200 dark:bg-zinc-800/50 rounded-full"></div>
</div>
</div>

<div className="flex-1 p-6 md:p-10 flex flex-col justify-center items-center relative overflow-hidden">

<div className="absolute top-10 right-20 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 animate-float" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-3">
<div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<div>
<div className="text-xs text-zinc-500">Cashback Earned</div>
<div className="text-sm font-bold dark:text-white">₹ 1,240</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-20 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xs text-zinc-500">Credit Score</div>
<div className="text-sm font-bold dark:text-white">+15 pts</div>
</div>
</div>
</div>
<div className="text-center z-10">
<h3 className="text-2xl font-semibold mb-2 dark:text-white">CI Points Balance</h3>
<div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tight">12,450</div>
<p className="text-sm text-zinc-500 mt-2">Redeemable for premium products</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 dark:bg-zinc-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight mb-4 dark:text-white">Financial inclusion, <br/>redefined.</h2>
<p className="reveal text-zinc-500 dark:text-zinc-400">We don't just cater to the top 1%. Cikka is built for the builders, the starters, and everyone in between.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-zinc-900 dark:text-white group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold mb-2 dark:text-white">No Waitlist, No Bias</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Unlike others focusing on the top 1%, we welcome first-time users and those with scores &lt; 650. Start your journey today.
                    </p>
</div>

<div className="reveal group p-8 bg-zinc-900 dark:bg-zinc-100 rounded-2xl border border-zinc-800 dark:border-zinc-200 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center mb-6 text-white dark:text-zinc-900 relative z-10">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-semibold mb-2 text-white dark:text-zinc-900 relative z-10">Paid Late? Get Rewarded.</h3>
<p className="text-sm text-zinc-400 dark:text-zinc-600 leading-relaxed relative z-10">
                        Life happens. Cikka rewards you even for late payments, offsetting the "natural interest" so you don't fall behind.
                    </p>
</div>

<div className="reveal group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-zinc-900 dark:text-white group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2 dark:text-white">Total Transparency</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        No hidden "frontier" charges. We analyze expenses to reveal secret costs, protecting your wallet and your trust.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden" id="rewards">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 dark:text-white">
                    Turn payments into <br/> <span className="text-indigo-500">CI Points.</span>
</h2>
<p className="text-zinc-500 dark:text-zinc-400 mb-8">
                    Every transaction earns you Cashback, which converts to CI Points at 1.5x value. Treat points like money to redeem premium gifts.
                </p>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-zinc-400" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="text-sm font-semibold dark:text-white">Direct Payments</h4>
<p className="text-sm text-zinc-500">Earn 1.1% – 1.35% cashback directly.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-zinc-400" data-lucide="shopping-bag"></i>
</div>
<div>
<h4 className="text-sm font-semibold dark:text-white">E-Commerce</h4>
<p className="text-sm text-zinc-500">Earn up to 2.1% cashback on store purchases.</p>
</div>
</div>
</div>
</div>

<div className="reveal bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 relative">
<div className="absolute top-4 right-4">
<i className="w-5 h-5 text-indigo-500" data-lucide="sparkles"></i>
</div>
<div className="space-y-8">
<div>
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Monthly Bill Payment</label>
<div className="flex items-center gap-4">
<input className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" max="100000" min="0" type="range" value="45000"/>
<span className="text-sm font-mono dark:text-white">₹45k</span>
</div>
</div>
<div className="flex justify-between items-center p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
<div>
<div className="text-xs text-zinc-500">Cashback Value</div>
<div className="text-lg font-bold dark:text-white">₹ 607.00</div>
</div>
<i className="w-4 h-4 text-zinc-400" data-lucide="arrow-right"></i>
<div className="text-right">
<div className="text-xs text-indigo-500 font-semibold">CI Points (1.5x)</div>
<div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">910 <span className="text-xs font-normal text-zinc-500">pts</span></div>
</div>
</div>
<div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
<p className="text-xs text-center text-zinc-500">
                            Redeem for boAt, Noise, Upsilon &amp; more.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50 relative overflow-hidden" id="merchants">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="reveal max-w-xl">
<div className="text-indigo-400 text-xs font-bold tracking-wider uppercase mb-2">For Business</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Sell smarter. <br/> Grow faster.</h2>
<p className="text-zinc-400 text-lg font-light">
                        Open a zero-cost storefront and access business credit up to ₹30 Cr. Cikka is the partner that carries the bags.
                    </p>
</div>
<div className="reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 hover:border-white pb-1 transition-colors" href="#">
                        Partner with us <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">

<div className="reveal bg-zinc-900 p-8 hover:bg-zinc-800/50 transition-colors">
<div className="mb-4 text-indigo-400"><i className="w-6 h-6" data-lucide="store"></i></div>
<h3 className="text-lg font-semibold mb-2">Zero-Cost Storefront</h3>
<p className="text-sm text-zinc-400">Unlike major aggregators, list your brand for free. No hidden onboarding fees.</p>
</div>

<div className="reveal bg-zinc-900 p-8 hover:bg-zinc-800/50 transition-colors">
<div className="mb-4 text-indigo-400"><i className="w-6 h-6" data-lucide="percent"></i></div>
<h3 className="text-lg font-semibold mb-2">Lowest Commissions</h3>
<p className="text-sm text-zinc-400">Maximize your margins with the lowest commission fees in the fintech market.</p>
</div>

<div className="reveal bg-zinc-900 p-8 hover:bg-zinc-800/50 transition-colors">
<div className="mb-4 text-indigo-400"><i className="w-6 h-6" data-lucide="zap"></i></div>
<h3 className="text-lg font-semibold mb-2">Credit Line</h3>
<p className="text-sm text-zinc-400">Access business credit at industry-best rates (1.0% - 1.2% p.m.) to scale operations.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="text-lg font-bold tracking-tighter text-zinc-900 dark:text-white">CIKKA</span>
<span className="text-xs text-zinc-500 border-l border-zinc-300 dark:border-zinc-700 pl-2 ml-2">© 2024 Cikka Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
