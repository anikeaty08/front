import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="blob bg-indigo-600 w-96 h-96 rounded-full top-0 left-[-100px]"></div>
<div className="blob bg-purple-600 w-80 h-80 rounded-full bottom-0 right-[-50px]"></div>
<div className="blob bg-blue-600 w-64 h-64 rounded-full top-[20%] right-[10%] opacity-30"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#05050A]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg">PAYBION</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="glass-btn px-4 py-2 rounded-full text-xs font-medium text-white tracking-wide">
                    GET STARTED
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    New: Crypto Ramp-up API v2.0
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Global payments <br/>
<span className="gradient-text">made transparent.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Accept payments, send payouts, and manage your business finances with a single unified platform engineered for the modern economy.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="bg-white text-black hover:bg-slate-200 px-8 py-3.5 rounded-full text-sm font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
                        Start Integration
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="glass-btn px-8 py-3.5 rounded-full text-sm font-medium text-white w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        View Demo
                    </button>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
<span>Trusted by</span>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:stripe" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:coinbase" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:binance" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 relative w-full perspective-[1000px]">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl"></div>

<div className="glass-card rounded-2xl p-6 relative z-10 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="flex items-center justify-between mb-8">
<div className="flex flex-col">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Current Balance</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-3xl font-medium text-white">$24,593.00</span>
<span className="text-emerald-400 text-xs font-medium flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                                    +12.5%
                                </span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:bell-bing-linear" width="20"></iconify-icon>
</div>
</div>

<div className="space-y-4">

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
<iconify-icon icon="solar:card-send-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Stripe Payout</div>
<div className="text-xs text-slate-500">Today, 10:23 AM</div>
</div>
</div>
<span className="text-sm font-medium text-white">+$1,200.00</span>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Shopify Store</div>
<div className="text-xs text-slate-500">Yesterday, 4:45 PM</div>
</div>
</div>
<span className="text-sm font-medium text-white">+$843.50</span>
</div>
</div>

<div className="mt-8 grid grid-cols-2 gap-3">
<button className="py-3 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors">
                            Send Money
                        </button>
<button className="py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-colors shadow-lg shadow-indigo-500/25">
                            Add Funds
                        </button>
</div>
</div>

<div className="absolute top-1/2 -right-12 glass-panel p-3 rounded-xl flex items-center gap-3 animate-[pulse_4s_infinite] z-20">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="text-xs font-medium text-white whitespace-nowrap">API Connected</span>
</div>
</div>
</div>
</main>

<section className="py-24 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to <br/> accept payments</h2>
<p className="text-slate-400 text-sm max-w-lg mx-auto">A fully integrated suite of payment products. We bring together everything that’s required to build websites and apps that accept payments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fraud Protection</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Real-time machine learning models that adapt to new fraud patterns instantly. Block high-risk transactions automatically.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:global-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Coverage</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Accept payments from anywhere in the world. Support for 135+ currencies and dozens of payment methods.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-emerald-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Payouts</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Access your funds immediately. Configure automated payout schedules or trigger them via API instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="glass-card rounded-3xl border border-white/5 overflow-hidden">
<div className="grid lg:grid-cols-2">

<div className="p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
<div className="flex items-center gap-2 mb-6 text-indigo-400">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Developers First</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Integrate in minutes, <br/>not weeks.</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-10">
                        Our modern API is designed with developer experience at its core. Comprehensive documentation, predictable URLs, and robust webhooks.
                    </p>

<div className="glass-panel rounded-xl p-6 max-w-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-white">Live Mode</span>

<div className="relative inline-block w-10 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1e1e24] appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5 checked:left-5" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
<div className="space-y-4">
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400">Webhook URL</label>
<input className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs text-indigo-300 font-mono focus:outline-none focus:border-indigo-500/50" type="text" value="https://api.myapp.com/webhooks"/>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded border border-indigo-500 bg-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-slate-300">Retry failed webhooks</span>
</div>
</div>
</div>
</div>

<div className="bg-[#0b0b12] p-10 lg:p-16 relative overflow-hidden flex items-center">
<div className="absolute top-0 right-0 p-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<div className="w-full font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto custom-scroll">
<pre><code className="language-javascript"><span className="text-purple-400">const</span> <span className="text-blue-400">paybion</span> <span className="text-slate-400">=</span> <span className="text-yellow-200">require</span>(<span className="text-green-400">'paybion'</span>)(<span className="text-green-400">'sk_test_...'</span>);

<span className="text-slate-500">// Create a payment session</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">session</span> <span className="text-slate-400">=</span> <span className="text-purple-400">await</span> <span className="text-blue-400">paybion</span>.<span className="text-blue-300">checkout</span>.<span className="text-yellow-200">create</span>({
  <span className="text-blue-300">amount</span>: <span className="text-orange-400">2400</span>,
  <span className="text-blue-300">currency</span>: <span className="text-green-400">'usd'</span>,
  <span className="text-blue-300">payment_method</span>: [<span className="text-green-400">'card'</span>, <span className="text-green-400">'crypto'</span>],
  <span className="text-blue-300">success_url</span>: <span className="text-green-400">'https://example.com/success'</span>,
  <span className="text-blue-300">metadata</span>: {
    <span className="text-blue-300">order_id</span>: <span className="text-green-400">'6735_22'</span>
  }
});

<span className="text-slate-500">// Redirect user</span>
<span className="text-blue-400">console</span>.<span className="text-yellow-200">log</span>(<span className="text-blue-400">session</span>.<span className="text-blue-300">url</span>);</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white mb-1">$500M+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Processed</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">99.99%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Uptime</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">135+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Currencies</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Support</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Ready to transform your <br/> payment experience?
            </h2>
<p className="text-slate-400 text-lg font-light mb-10">
                Join thousands of businesses that trust Paybion to power their payments. 
                Simple pricing. No hidden fees.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                    Create free account
                </button>
<button className="text-slate-300 hover:text-white px-8 py-4 text-sm font-medium transition-colors flex items-center gap-2">
                    Contact Sales
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030305] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-indigo-500" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-white font-semibold tracking-tight">PAYBION</span>
</div>
<p className="text-slate-500 text-sm mb-6 max-w-xs">
                        The financial infrastructure platform for the internet. Payments, crypto, and commerce re-imagined.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Billing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Connect</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Payouts</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Paybion Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-400 font-medium">All Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
