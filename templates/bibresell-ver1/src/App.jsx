import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
400: '#f97316', // Orange for action
500: '#ea580c',
600: '#c2410c',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-brand-500" data-lucide="footprints" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight">Relay</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#races">Find a Race</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#safety">Trust &amp; Safety</a>
</div>
<div className="flex items-center gap-4">
<button className="text-lg font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block">Log in</button>
<button className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Runners in a race" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-700/50 backdrop-blur-sm mb-8">
<span className="flex w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-base font-medium text-zinc-300">Live: 142 Bibs available right now</span>
</div>
<h1 className="text-6xl sm:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
                    Don't miss the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">starting line.</span>
</h1>
<p className="text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
                    The secure platform to buy and sell race entries. We verify every runner and facilitate instant, safe transfers so you can focus on the training.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-600 transition-colors shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
                        Find a Bib
                    </button>
<button className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5 text-zinc-400" data-lucide="tag" strokeWidth="1.5"></i>
                        Sell My Bib
                    </button>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-[2.5rem] blur-3xl"></div>
<div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-8 rounded-[2rem] shadow-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-semibold tracking-tight text-white">Quick Match Setup</h3>
<i className="w-6 h-6 text-zinc-500" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
<div className="space-y-6">
<div>
<label className="block text-base font-medium text-zinc-400 mb-3">Target Distance</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full border border-brand-500 bg-brand-500/10 text-brand-400 text-base font-medium">Marathon</button>
<button className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 text-base font-medium hover:border-zinc-500 transition-colors">Half Marathon</button>
<button className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 text-base font-medium hover:border-zinc-500 transition-colors">10K</button>
</div>
</div>
<div>
<label className="block text-base font-medium text-zinc-400 mb-3">Expected Pace</label>
<div className="relative w-full h-12 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center px-4">
<span className="text-zinc-500 mr-2"><i className="w-5 h-5" data-lucide="timer" strokeWidth="1.5"></i></span>
<input className="w-full bg-transparent border-none outline-none text-lg text-white placeholder:text-zinc-600 font-medium" placeholder="e.g. 8:30 /mi" type="text"/>
</div>
</div>
<div className="bg-zinc-950/50 rounded-xl p-5 border border-zinc-800/50 mt-4">
<div className="flex gap-3 items-start">
<div className="mt-1 flex-shrink-0">
<i className="w-5 h-5 text-yellow-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-200 mb-1">Instant Match Enabled</h4>
<p className="text-base text-zinc-500 leading-snug">Once verified, we'll automatically secure a bib that matches your criteria the second it's listed.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-zinc-950 relative border-t border-zinc-900" id="races">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4">Trending Near You</h2>
<p className="text-xl text-zinc-400 font-medium">High demand events with active exchanges.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-brand-400 font-medium text-lg hover:text-brand-300 transition-colors">
                    View all events <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="h-48 overflow-hidden relative">
<img alt="Chicago Marathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700/50 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm font-medium">12 Bibs Available</span>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">Chicago Marathon</h3>
<p className="text-lg text-zinc-400 font-medium">Oct 13, 2024 • Chicago, IL</p>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-800/50 flex justify-between items-center">
<span className="text-lg text-zinc-400">From <span className="text-white font-medium">$230</span></span>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors">View details</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="h-48 overflow-hidden relative">
<img alt="NYC Half" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2]" src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700/50 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-sm font-medium">High Demand</span>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">Brooklyn Half</h3>
<p className="text-lg text-zinc-400 font-medium">May 18, 2024 • Brooklyn, NY</p>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-800/50 flex justify-between items-center">
<span className="text-lg text-zinc-400">Join <span className="text-white font-medium">Waitlist</span></span>
<button className="bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 px-4 py-2 rounded-lg text-base font-medium transition-colors">Set Alert</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="h-48 overflow-hidden relative">
<img alt="Trail Race" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700/50 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm font-medium">4 Bibs Available</span>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">Big Sur Marathon</h3>
<p className="text-lg text-zinc-400 font-medium">Apr 28, 2024 • Carmel, CA</p>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-800/50 flex justify-between items-center">
<span className="text-lg text-zinc-400">From <span className="text-white font-medium">$295</span></span>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors">View details</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative" id="safety">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Built for athletes. <br/>Secured by technology.</h2>
<p className="text-xl text-zinc-400 font-medium leading-relaxed">
                    Buying a bib on social media is risky. We eliminate the stress with a platform designed specifically to prevent scams and ensure legitimate transfers.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Identity Verification</h3>
<p className="text-lg text-zinc-400 font-medium leading-relaxed">
                        Every buyer and seller goes through strict identity verification. We cross-reference race registrations to ensure the bib actually exists before it can be listed.
                    </p>
</div>

<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 shadow-inner">
<i className="w-7 h-7 text-brand-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Instant Allocation</h3>
<p className="text-lg text-zinc-400 font-medium leading-relaxed">
                        Set your profile and pacing criteria. Once you are validated, if a suitable bib becomes available, our system instantly assigns it to you. No refreshing pages.
                    </p>
</div>

<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Buyer Protection</h3>
<p className="text-lg text-zinc-400 font-medium leading-relaxed">
                        Powered by Stripe compliance. Your payment is held securely and only released to the seller once the official race transfer is confirmed. 100% money-back guarantee if the transfer fails.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10 text-brand-400 mb-8">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Looking to race?</h2>
<p className="text-lg text-zinc-400 font-medium mb-10">Create your runner profile. Tell us what you're training for, and we'll secure your spot safely.</p>
<form className="space-y-6">
<div>
<label className="block text-base font-medium text-zinc-300 mb-2">Search Event</label>
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="e.g. Berlin Marathon" type="text"/>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950/50">
<div>
<span className="block text-base font-medium text-white">Enable Auto-Buy</span>
<span className="block text-sm text-zinc-500 mt-1">Automatically purchase if a match is found</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-7 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-500"></div>
</label>
</div>
<button className="w-full bg-white text-zinc-950 py-4 rounded-xl text-lg font-semibold hover:bg-zinc-200 transition-colors mt-4" type="button">
                                Setup Buyer Profile
                            </button>
</form>
</div>

<div className="p-10 lg:p-16 relative overflow-hidden group">

<div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 text-white border border-zinc-700 mb-8">
<i className="w-6 h-6" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Plans changed?</h2>
<p className="text-lg text-zinc-400 font-medium mb-10">Don't let your training go to waste. List your bib securely and recoup your entry fee.</p>
<div className="space-y-6">
<div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
<h4 className="text-lg font-medium text-white mb-2">Transparent Pricing</h4>
<p className="text-base text-zinc-400 mb-4">We charge a flat <span className="text-white font-semibold">10% commission</span> on successful sales to cover payment processing, Stripe compliance, and our secure transfer infrastructure. No hidden fees.</p>
<div className="flex items-center gap-2 text-sm text-zinc-500">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i> Free to list
                                    </div>
</div>
<button className="w-full bg-zinc-800 border border-zinc-700 text-white py-4 rounded-xl text-lg font-medium hover:bg-zinc-700 transition-colors" type="button">
                                    Start Selling Process
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-zinc-500" data-lucide="footprints" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-zinc-400">Relay</span>
</div>
<div className="flex gap-8 text-base font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<p className="text-sm text-zinc-600 font-medium">© 2024 Relay Exchange. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
