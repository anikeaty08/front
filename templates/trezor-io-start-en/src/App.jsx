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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">

<a className="text-2xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white group-hover:bg-slate-900 transition-colors duration-300">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span>TREZOR<span className="text-slate-400">.IO</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Products</a>
<a className="hover:text-emerald-600 transition-colors" href="#">App</a>
<a className="text-slate-900" href="#">Learn</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Cart
                </button>
<a className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-emerald-200/50 flex items-center gap-2" href="#">
<span>Get App</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="pt-32 pb-24">

<header className="max-w-4xl mx-auto px-6 mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Security Update
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                The Definitive Guide to<br/>Self-Custody in 2024
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                Understanding the mechanisms of hardware wallets, private keys, and why taking control of your digital assets is more important than ever.
            </p>
<div className="flex items-center justify-center gap-8 mt-10 border-y border-slate-100 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Alex V.</div>
<div className="text-xs text-slate-400">Security Lead</div>
</div>
</div>
<div className="h-8 w-px bg-slate-100"></div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-900">Oct 24, 2023</span>
<span className="text-xs text-slate-400">8 min read</span>
</div>
<div className="h-8 w-px bg-slate-100"></div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="max-w-5xl mx-auto px-6 mb-20">
<div className="aspect-[21/9] rounded-3xl bg-slate-100 overflow-hidden relative shadow-sm border border-slate-100">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white flex items-center justify-center">
<div className="relative w-full h-full opacity-60">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
</div>
<div className="absolute z-10 flex flex-col items-center">
<iconify-icon className="text-emerald-500 mb-4" icon="solar:shield-check-linear" strokeWidth="1" width="64"></iconify-icon>
<span className="text-slate-300 font-mono text-xs uppercase tracking-widest">Secure Architecture</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-32">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Contents</h3>
<ul className="space-y-4 border-l border-slate-100">
<li>
<a className="block pl-4 text-sm text-emerald-600 border-l-2 border-emerald-500 -ml-[1px] font-medium" href="#intro">Introduction</a>
</li>
<li>
<a className="block pl-4 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#custody">Not Your Keys, Not Your Coins</a>
</li>
<li>
<a className="block pl-4 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#hardware">Hardware Wallets Explained</a>
</li>
<li>
<a className="block pl-4 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#setup">The Setup Process</a>
</li>
<li>
<a className="block pl-4 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#future">The Future of Security</a>
</li>
</ul>
<div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="text-sm font-semibold text-slate-900 mb-2">Ready to secure your assets?</div>
<p className="text-xs text-slate-500 mb-4">Get the latest hardware wallet today.</p>
<button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors">Shop Now</button>
</div>
</div>
</aside>

<article className="col-span-1 lg:col-span-7 prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
<p className="lead text-xl text-slate-500 font-light" id="intro">
                    In the rapidly evolving landscape of digital assets, the concept of ownership has shifted from physical possession to cryptographic proof. The maxim "not your keys, not your coins" isn't just a slogan—it is the fundamental law of the blockchain ecosystem.
                </p>
<p>
                    As adoption grows, so does the sophistication of threats. Centralized exchanges, while convenient, have repeatedly demonstrated that they can be points of failure. From high-profile hacks to mismanagement of funds, the history of crypto is littered with examples of why entrusting third parties with your wealth is a risk that contradicts the very ethos of decentralization.
                </p>
<h2 className="text-2xl mt-12 mb-6" id="custody">Not Your Keys, Not Your Coins</h2>
<p>
                    At its core, a cryptocurrency wallet doesn't actually store your coins. Your coins live on the blockchain. What the wallet stores is the <strong>private key</strong>—a sophisticated form of digital signature that allows you to authorize transactions. Whoever holds this key controls the funds.
                </p>
<div className="my-10 p-8 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex gap-6 items-start not-prose">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-1">
<iconify-icon icon="solar:info-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Key Takeaway</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            When you keep funds on an exchange, the exchange holds the private keys. You only hold a "claim" or an IOU. If the exchange halts withdrawals, your claim becomes worthless.
                        </p>
</div>
</div>
<p>
                    Self-custody means you generate and store these keys yourself. This responsibility eliminates counterparty risk but introduces a new requirement: you must secure your keys against digital theft (malware, phishing) and physical loss.
                </p>
<h2 className="text-2xl mt-12 mb-6" id="hardware">Hardware Wallets Explained</h2>
<p>
                    This is where hardware wallets come into play. A hardware wallet is a dedicated physical device designed to generate and store private keys offline. Because the keys are never exposed to an internet-connected computer, they are immune to remote attacks, keyloggers, and most forms of malware.
                </p>
<ul className="list-none pl-0 space-y-4 my-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>Cold Storage:</strong> Keys are generated offline and never leave the device.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>Physical Verification:</strong> Transactions must be confirmed on the device's screen.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>Pin Protection:</strong> Access to the device is protected by a PIN code.</span>
</li>
</ul>
<p>
                    Even if your computer is compromised, a hacker cannot extract the keys from the hardware wallet. When you want to send a transaction, your computer sends the unsigned transaction data to the wallet. The wallet signs it internally using the private key and sends the signed data back to the computer to be broadcast to the network.
                </p>
<h2 className="text-2xl mt-12 mb-6" id="setup">The Setup Process</h2>
<p>
                    Setting up a hardware wallet is a straightforward process, but it requires attention to detail. The most critical step is recording the <strong>Recovery Seed</strong>. This is a sequence of 12 to 24 words that represents your master private key.
                </p>
<p>
                    If you lose your device, or if it breaks, you can buy a new one and enter these words to restore access to your funds. However, if anyone else gets these words, they can clone your wallet and steal your funds. Therefore, the seed must be written down on paper (or etched in metal) and never stored digitally—no photos, no cloud storage, no password managers.
                </p>
<figure className="my-10 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
<div className="h-64 flex items-center justify-center bg-slate-50 relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
<div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-sm w-full mx-6">
<div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-4">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step 2</span>
<iconify-icon className="text-emerald-500" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-100 rounded w-3/4"></div>
<div className="h-2 bg-slate-100 rounded w-1/2"></div>
<div className="h-2 bg-slate-100 rounded w-full"></div>
</div>
<div className="mt-6 flex justify-between items-center">
<span className="text-xs text-slate-400">Write down seed words</span>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</div>
<figcaption className="p-4 text-center text-sm text-slate-500 bg-white border-t border-slate-100">
                        Always verify the seed words on the device screen, not your computer.
                    </figcaption>
</figure>
<h2 className="text-2xl mt-12 mb-6" id="future">The Future of Security</h2>
<p>
                    As we look toward the future, security models are evolving. Multi-signature setups, where multiple keys are required to authorize a transaction, are becoming more user-friendly. This eliminates single points of failure. If one key is lost or stolen, the funds remain secure.
                </p>
<p>
                    Additionally, open-source firmware and hardware designs ensure that the community can audit the code running on these devices, ensuring there are no backdoors. Transparency is the only way to build true trust in a trustless system.
                </p>
<p>
                    In conclusion, while the learning curve for self-custody might seem steep initially, the peace of mind it offers is unparalleled. By taking control of your keys, you are not just securing your wealth; you are participating in a financial revolution that prioritizes individual sovereignty.
                </p>
<hr className="my-12 border-slate-100"/>

<div className="flex flex-wrap gap-2 mb-12">
<a className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors" href="#">Bitcoin</a>
<a className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors" href="#">Security</a>
<a className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors" href="#">Cold Storage</a>
<a className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors" href="#">Guides</a>
</div>
</article>

<div className="hidden xl:block col-span-2"></div>
</div>
</main>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Secure your digital legacy.</h2>
<p className="text-slate-400 text-lg font-light mb-8">Get the hardware wallet that set the standard for crypto security.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg text-center transition-colors shadow-lg shadow-emerald-900/20" href="#">
                        Buy Trezor Model T
                    </a>
<a className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg text-center transition-colors" href="#">
                        Compare Models
                    </a>
</div>
</div>
<div className="relative">
<div className="w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 flex items-center justify-center shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-keyhole-bold" width="64"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-minimalistic-bold" width="14"></iconify-icon>
</div>
                        TREZOR
                    </a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        The original hardware wallet. Security made simple for everyone.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Model T</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Model One</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Trezor Suite</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Support Center</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Forum</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Firmware Updates</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2024 Trezor Company. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
