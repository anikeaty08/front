import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:arrow-right-left" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">Transfer<span className="text-zinc-400">Flow</span></span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Send Money</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Track Transfer</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Locations</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Plus Rewards</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">Log In</button>
<button className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-200">Sign Up</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Best exchange rates for Bangladesh today
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-zinc-900">
                    Send money to <br/>
<span className="text-rose-600">Bangladesh</span> fast &amp; reliably.
                </h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
                    Transfer funds directly to bank accounts, mobile wallets like bKash, or for cash pickup at thousands of locations across Bangladesh. Low fees, zero hidden costs.
                </p>
<div className="flex flex-wrap gap-4 items-center text-sm font-medium text-zinc-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="lucide:check-circle-2"></iconify-icon>
<span>Verified Security</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="lucide:zap"></iconify-icon>
<span>Instant Transfers*</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="lucide:globe"></iconify-icon>
<span>24/7 Support</span>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto">
<div className="bg-white rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 p-6 relative overflow-hidden">

<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold tracking-tight">Estimate Fees</h3>
<div className="text-xs font-medium text-zinc-400">1 RON = 24.12 BDT</div>
</div>

<div className="space-y-4 relative">
<div className="group relative rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all focus-within:ring-2 focus-within:ring-rose-500/20 focus-within:border-rose-500 hover:border-zinc-300">
<label className="block text-xs font-medium text-zinc-500 mb-1">You send</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent text-2xl font-semibold text-zinc-900 outline-none placeholder:text-zinc-300" placeholder="0.00" type="number" value="1000"/>
<div className="flex items-center gap-2 pl-4 border-l border-zinc-200 ml-4">
<img alt="Romania" className="w-5 h-5 rounded-full object-cover shadow-sm" src="https://flagcdn.com/w40/ro.png"/>
<span className="font-medium text-zinc-700">RON</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-400 z-10 shadow-sm">
<iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</div>

<div className="group relative rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all focus-within:ring-2 focus-within:ring-rose-500/20 focus-within:border-rose-500 hover:border-zinc-300">
<label className="block text-xs font-medium text-zinc-500 mb-1">Receiver gets</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent text-2xl font-semibold text-zinc-900 outline-none placeholder:text-zinc-300" placeholder="0.00" readonly="" type="number" value="24120"/>
<div className="flex items-center gap-2 pl-4 border-l border-zinc-200 ml-4">
<img alt="Bangladesh" className="w-5 h-5 rounded-full object-cover shadow-sm" src="https://flagcdn.com/w40/bd.png"/>
<span className="font-medium text-zinc-700">BDT</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-zinc-500 flex items-center gap-1">
                                Transfer fee 
                                <iconify-icon className="text-zinc-300" icon="lucide:info" width="14"></iconify-icon>
</span>
<span className="font-medium text-zinc-900">+ 4.99 RON</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Total to pay</span>
<span className="font-medium text-zinc-900">1,004.99 RON</span>
</div>
<div className="h-px bg-zinc-100 my-2"></div>
<div className="flex justify-between text-sm items-center">
<span className="text-zinc-500">Delivery Method</span>
<button className="flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
                                Mobile Wallet
                                <iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
</div>

<button className="w-full mt-6 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-zinc-900/10 active:scale-[0.98] flex items-center justify-center gap-2">
                        Get Started
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-400 mt-4">
                        By clicking send, you agree to our <a className="underline hover:text-zinc-600" href="#">Terms of Service</a>.
                    </p>
</div>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-8">Supported receive methods in Bangladesh</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">

<div className="flex items-center gap-2 font-bold text-xl text-zinc-800">
<span className="bg-rose-600 text-white px-1 rounded-sm">b</span>Kash
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-zinc-800">
                    Dutch-Bangla Bank
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-zinc-800 italic">
<span className="text-blue-600">Islami</span>Bank
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-zinc-800">
<iconify-icon className="text-zinc-900" icon="lucide:landmark"></iconify-icon>
                    Sonali Bank
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-zinc-800">
                    Nagad
                </div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">How to send money to Bangladesh</h2>
<p className="text-zinc-500">Sending money is easier than ever. Just three simple steps to get your funds where they need to go.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:user-plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">1. Create a free account</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Sign up in seconds online or via our mobile app using your email address. It's completely free.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:pen-line" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">2. Enter transfer details</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Choose Bangladesh as destination, enter the amount, and select how your receiver should get the money.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">3. Send securely</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Pay with your card or bank transfer. You and your receiver will get updates until the money arrives.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-rose-100 to-zinc-100 rounded-[2rem] -z-10 blur-xl opacity-60"></div>
<img alt="Family in Bangladesh" className="rounded-2xl shadow-2xl shadow-zinc-200 border border-white rotate-1 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-8 -right-4 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900">Transfer Complete</div>
<div className="text-[10px] text-zinc-500">Just now</div>
</div>
</div>
<div className="text-sm font-medium text-zinc-700">Sent 24,120 BDT to Rahim</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Ways to receive money in Bangladesh</h2>
<p className="text-lg text-zinc-500 mb-10">We offer multiple payout options to ensure convenience for your loved ones.</p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900">Mobile Wallets</h4>
<p className="text-sm text-zinc-500 mt-1">Send instantly to bKash, Nagad, or Rocket wallets. Funds are usually available within minutes.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:landmark" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900">Bank Deposit</h4>
<p className="text-sm text-zinc-500 mt-1">Direct transfers to all major banks including Islami Bank, Dutch-Bangla, and Sonali Bank.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900">Cash Pickup</h4>
<p className="text-sm text-zinc-500 mt-1">Cash can be picked up at thousands of agent locations across the country immediately after transfer.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Send on the go with our app</h2>
<p className="text-zinc-400 text-lg mb-8">Track your transfers, get rate alerts, and send money again with just a few taps. Available for iOS and Android.</p>
<div className="flex gap-4">
<button className="flex items-center gap-3 bg-white text-zinc-900 px-5 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors">
<iconify-icon icon="lucide:apple" width="22"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">Download on</div>
<div>App Store</div>
</div>
</button>
<button className="flex items-center gap-3 bg-zinc-800 text-white px-5 py-3 rounded-xl font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors">
<iconify-icon icon="lucide:play-circle" width="22"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Get it on</div>
<div>Google Play</div>
</div>
</button>
</div>
</div>
<div className="relative w-full max-w-sm lg:translate-y-24">

<div className="bg-zinc-800 border-4 border-zinc-700 rounded-[2.5rem] p-2 shadow-2xl">
<div className="bg-zinc-900 rounded-[2rem] h-[400px] w-full relative overflow-hidden flex flex-col items-center justify-center">
<div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-xl w-32 mx-auto z-20"></div>
<iconify-icon className="text-green-500 mb-4" icon="lucide:check-circle" width="64"></iconify-icon>
<div className="text-xl font-semibold">Sent!</div>
<div className="text-zinc-500 text-sm mt-2">1,000 RON → BDT</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-zinc-200 open:ring-2 open:ring-zinc-900/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">How long does a transfer to Bangladesh take?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                        Transfers to mobile wallets like bKash are typically instant. Bank deposits usually arrive within the same business day if sent before the cut-off time, or the next business day. Cash pickup is available instantly.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 open:ring-2 open:ring-zinc-900/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">What is the exchange rate for RON to BDT?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                        Our exchange rates are updated in real-time to give you the best value. Currently, 1 RON equals approximately 24.12 BDT, but please check the calculator above for the exact live rate.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 open:ring-2 open:ring-zinc-900/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">Is it safe to send money online?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                        Yes. We use bank-level encryption to protect your data and money. We are fully regulated and trusted by millions of customers worldwide.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:arrow-right-left" width="14"></iconify-icon>
</div>
<span className="font-semibold text-zinc-900">TransferFlow</span>
</a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">Making global money transfers fast, secure, and affordable for everyone.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900" href="#">Press</a></li>
<li><a className="hover:text-zinc-900" href="#">Investors</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-900" href="#">Safety</a></li>
<li><a className="hover:text-zinc-900" href="#">Track Transfer</a></li>
<li><a className="hover:text-zinc-900" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms of Use</a></li>
<li><a className="hover:text-zinc-900" href="#">Cookies</a></li>
<li><a className="hover:text-zinc-900" href="#">Licenses</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 TransferFlow Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Sitemap</a>
<a className="hover:text-zinc-600" href="#">Security</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
