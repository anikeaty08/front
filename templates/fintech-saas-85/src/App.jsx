import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const navbar = document.getElementById('navbar');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#f6f5f3]/80 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300" id="navbar">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-2 cursor-pointer">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">LUMEN<sup className="text-xs font-normal ml-0.5">AI</sup></span>
</div>

<div className="hidden md:flex items-center gap-8 text-base text-zinc-600">
<a className="hover:text-black transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-black transition-colors" href="#why-lumen">Why Lumen</a>
<a className="hover:text-black transition-colors" href="#for-you">For You</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-black transition-colors" href="#resources">Resources</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-base text-zinc-600 hover:text-black transition-colors" href="#">Log in</a>
<a className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">
                        Start Free Assessment <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="md:hidden text-zinc-900" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#f6f5f3] z-40 hidden flex-col pt-24 px-6 pb-8" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
<a className="mobile-link" href="#how-it-works">How It Works</a>
<a className="mobile-link" href="#why-lumen">Why Lumen</a>
<a className="mobile-link" href="#for-you">For You</a>
<a className="mobile-link" href="#pricing">Pricing</a>
<a className="mobile-link" href="#resources">Resources</a>
</div>
<div className="mt-auto flex flex-col gap-4">
<a className="text-center py-3 border border-zinc-300 rounded-full text-base" href="#">Log in</a>
<a className="text-center py-3 bg-black text-white rounded-full text-base flex justify-center items-center gap-2" href="#">
                Start Free Assessment <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<main className="pt-20">

<section className="max-w-[1600px] mx-auto border-b border-zinc-200">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5rem)]">

<div className="lg:col-span-5 px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 border border-zinc-200 rounded-full px-3 py-1 mb-8 bg-white/50">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">AI Financial Coach</span>
</div>
<h1 className="text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-tight text-zinc-900 mb-8">
                            Your wealth.<br/>
                            Your terms.<br/>
<span className="font-semibold">Intelligently grown.</span>
</h1>
<p className="text-xl text-zinc-600 max-w-md mb-10 leading-relaxed">
                            The AI financial coach for high-earning millennials who want clarity, strategy, and compounding freedom.
                        </p>
<a className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl text-base font-medium hover:bg-zinc-800 transition-all hover:gap-4 w-fit" href="#">
                            Start Free Assessment <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="mt-20 lg:mt-0">
<p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-6">Trusted by professionals at</p>
<div className="flex flex-wrap items-center gap-8 lg:gap-10 opacity-60 grayscale">
<span className="text-xl font-medium tracking-tight">Google</span>
<span className="text-xl font-medium tracking-tight flex items-center gap-1"><i className="w-5 h-5 fill-current border-none" data-lucide="layout-grid"></i> Microsoft</span>
<span className="text-xl font-medium tracking-tight flex items-center gap-1"><i className="w-5 h-5" data-lucide="triangle"></i> airbnb</span>
<span className="text-xl font-medium tracking-tight italic">NVIDIA</span>
<span className="text-xl font-medium tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="infinity"></i> Meta</span>
</div>
</div>
</div>

<div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l lg:border-r border-zinc-200 flex flex-col">
<div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
<span className="text-sm font-medium text-zinc-400 mb-4 block">01</span>
<h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">AI-Personalized</h3>
<p className="text-base text-zinc-600 leading-relaxed">Strategies tailored to your income, goals &amp; lifestyle.</p>
</div>
<div className="p-6 lg:p-8 flex-1 flex flex-col justify-center border-t border-zinc-200">
<span className="text-sm font-medium text-zinc-400 mb-4 block">02</span>
<h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">Real-Time Coaching</h3>
<p className="text-base text-zinc-600 leading-relaxed">Get guidance when decisions matter most.</p>
</div>
<div className="p-6 lg:p-8 flex-1 flex flex-col justify-center border-t border-zinc-200">
<span className="text-sm font-medium text-zinc-400 mb-4 block">03</span>
<h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">Compounding Freedom</h3>
<p className="text-base text-zinc-600 leading-relaxed">Build wealth today, design freedom for tomorrow.</p>
</div>
</div>

<div className="lg:col-span-5 px-6 lg:px-12 py-12 lg:py-16 flex flex-col gap-6 bg-[#f0efeb]/30 border-t lg:border-t-0 border-zinc-200">

<div className="bg-[#09090b] rounded-3xl p-8 relative overflow-hidden flex-1 min-h-[400px] flex flex-col justify-between group">

<div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/10 rotate-12 scale-y-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-white/20 rotate-[-10deg] scale-y-50 mt-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-white/30 rotate-6 scale-y-50 mt-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-white/40 rotate-[-5deg] scale-y-50 mt-30"></div>
</div>

<div className="absolute top-8 left-8 text-white/30"><i className="w-4 h-4" data-lucide="plus"></i></div>
<div className="absolute top-32 right-32 text-white/30"><i className="w-5 h-5" data-lucide="plus"></i></div>

<div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-50"></div>
<div className="relative z-10 flex flex-col items-end gap-12 mt-8">
<div className="text-right">
<h2 className="text-4xl text-white font-medium tracking-tight mb-2">$240K+</h2>
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Potential Wealth<br/>10-Year Projection</p>
</div>
<div className="text-right">
<h2 className="text-4xl text-white font-medium tracking-tight mb-2">28%</h2>
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">AI-Optimized<br/>Savings Rate</p>
</div>
<div className="text-right">
<h2 className="text-4xl text-white font-medium tracking-tight mb-2 text-zinc-300">7.3Y</h2>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Earlier Financial<br/>Freedom</p>
</div>
</div>
</div>

<div className="bg-[#f0efeb] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-200">
<div className="flex-1 w-full">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-black"></div>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Your Financial Clarity Score</span>
</div>
<div className="flex items-end gap-2">
<span className="text-5xl font-medium tracking-tight text-zinc-900 leading-none">82</span>
<span className="text-base text-zinc-400 mb-1">/100</span>
</div>
</div>
<div className="flex-1 w-full px-4 hidden md:block">

<svg className="w-full h-12 overflow-visible stroke-zinc-400 fill-none" strokeWidth="1.5" viewbox="0 0 100 30">
<path d="M0,25 C10,25 15,20 20,22 C30,26 35,15 45,18 C55,21 60,10 70,8 C80,6 85,15 95,5 L100,2" stroke-dasharray="2 2"></path>
<circle className="fill-green-500 stroke-none" cx="95" cy="5" r="2"></circle>
</svg>
</div>
<div className="flex-1 w-full flex items-center justify-between md:justify-end gap-4">
<div>
<span className="text-xs font-medium text-zinc-500 block mb-1">Next Best Action</span>
<p className="text-sm text-zinc-700 leading-snug">Increase investments by $1,200/mo to hit your freedom date faster.</p>
</div>
<button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto border-b border-zinc-200" id="how-it-works">
<div className="max-w-3xl mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Intelligence that acts,<br/>not just advises.</h2>
<p className="text-xl text-zinc-600">Connect your accounts once. Lumen continuously analyzes your cash flow, detects inefficiencies, and surfaces high-yield opportunities automatically.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">

<div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-zinc-200 -z-10"></div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xl font-medium mb-8">1</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Sync Everything</h3>
<p className="text-base text-zinc-600">Securely connect bank accounts, brokerages, debt, and equity via Plaid. We get a 360° view of your net worth.</p>
</div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-medium mb-8 shadow-lg shadow-black/10">2</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">AI Analysis</h3>
<p className="text-base text-zinc-600">Our engine cross-references your habits with tax codes, market conditions, and millionaire wealth models.</p>
</div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xl font-medium mb-8">3</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Execute Strategy</h3>
<p className="text-base text-zinc-600">Receive 1-click execution prompts. "Move $500 to VTI to save $120 on taxes." You approve, we execute.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto bg-white border-b border-zinc-200">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-[#f6f5f3] rounded-2xl border border-zinc-200 p-2 shadow-sm">
<div className="bg-white rounded-xl border border-zinc-100 p-6 flex flex-col gap-6">
<div className="flex justify-between items-center pb-4 border-b border-zinc-100">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Optimization Opportunity</span>
<h4 className="text-lg font-medium text-zinc-900 tracking-tight">Tax-Loss Harvesting</h4>
</div>
<div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">+$4,200 Est. Value</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-base">
<span className="text-zinc-600">Current Tech Holdings</span>
<span className="text-zinc-900 font-medium">Down 12%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2">
<div className="bg-red-400 h-2 rounded-full w-1/3"></div>
</div>
<p className="text-sm text-zinc-500">Sell underperforming RSUs and reinvest in equivalent ETFs to lock in tax deductions while maintaining market exposure.</p>
</div>
<button className="w-full py-3 bg-black text-white rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors">
                                Execute Trade &amp; Harvest Loss
                            </button>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-[-10%] w-64 h-64 bg-zinc-100 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Find money hidden in plain sight.</h2>
<p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                        Lumen doesn't just track your spending. It actively hunts for optimizations. From tax-loss harvesting to optimizing high-yield savings distribution, the AI does the heavy lifting of a family office.
                    </p>
<ul className="space-y-4 text-base text-zinc-700">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-300 shrink-0" data-lucide="check-circle-2"></i>
<span>Automated Tax-Loss Harvesting monitoring.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-300 shrink-0" data-lucide="check-circle-2"></i>
<span>RSU &amp; Equity compensation diversification strategies.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-300 shrink-0" data-lucide="check-circle-2"></i>
<span>Debt paydown vs. invest calculators run daily.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto border-b border-zinc-200 bg-[#f6f5f3]" id="why-lumen">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">The modern wealth stack.</h2>
<p className="text-lg text-zinc-600">Traditional advisors charge 1% AUM to put you in mutual funds. Lumen is a fraction of the cost, infinitely smarter, and totally unbiased.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col justify-between group hover:border-zinc-300 transition-colors min-h-[300px]">
<div className="mb-8">
<i className="w-8 h-8 text-black mb-4" data-lucide="brain-circuit"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">Unbiased AI Logic</h3>
<p className="text-base text-zinc-600 max-w-md">No commissions. No hidden fees. Our AI's only objective function is maximizing your net worth over your specified time horizon.</p>
</div>

<div className="h-32 w-full bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:24px_24px] relative border-b border-zinc-200">
<svg className="absolute bottom-0 w-full h-full preserve-3d" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,30 C20,28 30,35 50,20 C70,5 80,15 100,0 L100,40 Z" fill="rgba(0,0,0,0.03)"></path>
<path d="M0,30 C20,28 30,35 50,20 C70,5 80,15 100,0" fill="none" stroke="black" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col hover:border-zinc-300 transition-colors">
<i className="w-8 h-8 text-black mb-4" data-lucide="shield-check"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Bank-Grade Security</h3>
<p className="text-base text-zinc-600 mb-6 flex-1">Read-only access via Plaid. AES-256 encryption. We never touch your money directly, only analyze it.</p>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
<i className="w-4 h-4" data-lucide="lock"></i> SOC2 Type II Certified
                    </div>
</div>

<div className="bg-[#09090b] text-white rounded-2xl p-8 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Direct Indexing</h3>
<p className="text-base text-zinc-400 mb-6">Own the individual stocks of an index to harvest micro-losses and boost returns by up to 1.5% annually.</p>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-sm text-zinc-400">Available on Pro plan</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 flex items-center justify-between hover:border-zinc-300 transition-colors">
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Scenario Modeling</h3>
<p className="text-base text-zinc-600">"What if I buy a $800k house next year?" or "Can I take a sabbatical?" Ask the AI, get mathematically sound projections instantly.</p>
</div>
<div className="hidden md:flex w-16 h-16 rounded-full bg-zinc-100 items-center justify-center shrink-0">
<i className="w-6 h-6 text-zinc-600" data-lucide="git-branch"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto border-b border-zinc-200">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Calculate your upside.</h2>
<p className="text-xl text-zinc-600">See how minor optimizations compounded over time change your financial trajectory.</p>
</div>
<div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col gap-8">
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Current Income</label>
<span className="text-lg font-medium text-zinc-900" id="income-val">$150,000</span>
</div>

<div className="relative h-2 w-full bg-zinc-100 rounded-full cursor-pointer group">
<div className="absolute top-0 left-0 h-full bg-black rounded-full w-[40%] group-hover:bg-zinc-800 transition-colors"></div>
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black rounded-full shadow-md"></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Monthly Savings Rate</label>
<span className="text-lg font-medium text-zinc-900" id="savings-val">20%</span>
</div>
<div className="relative h-2 w-full bg-zinc-100 rounded-full cursor-pointer group">
<div className="absolute top-0 left-0 h-full bg-black rounded-full w-[20%] group-hover:bg-zinc-800 transition-colors"></div>
<div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black rounded-full shadow-md"></div>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<div>
<span className="block text-base font-medium text-zinc-900">Enable Lumen AI Optims</span>
<span className="block text-sm text-zinc-500">Tax-loss harvesting &amp; direct indexing</span>
</div>
<div className="w-12 h-6 bg-black rounded-full relative cursor-pointer shadow-inner">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
</div>
</div>
</div>

<div className="bg-[#f6f5f3] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
<i className="absolute top-6 right-6 w-32 h-32 text-zinc-200/50 -rotate-12" data-lucide="trending-up"></i>
<div className="relative z-10">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider block mb-2">Projected Net Worth (10 Yrs)</span>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-2">$1.84M</div>
<div className="text-base text-green-600 font-medium flex items-center gap-1">
<i className="w-4 h-4" data-lucide="arrow-up"></i> +$342k vs traditional investing
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto border-b border-zinc-200">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-12 text-center">Built for modern professionals.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-zinc-200 rounded-2xl bg-white flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 leading-relaxed flex-1">"I used to spend hours managing spreadsheets to track my RSUs and backdoor Roths. Lumen automated all of it and found a tax optimization I didn't even know existed."</p>
<div className="flex items-center gap-3 border-t border-zinc-100 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-sm font-medium">S</div>
<div>
<div className="text-base font-medium text-zinc-900">Sarah Chen</div>
<div className="text-sm text-zinc-500">Staff Engineer at Tech Co</div>
</div>
</div>
</div>

<div className="p-8 border border-zinc-200 rounded-2xl bg-white flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 leading-relaxed flex-1">"The clarity score is addicting. Knowing exactly what 'next best action' to take takes the anxiety out of managing high income. It's like having a CFO in my pocket."</p>
<div className="flex items-center gap-3 border-t border-zinc-100 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-sm font-medium">M</div>
<div>
<div className="text-base font-medium text-zinc-900">Marcus T.</div>
<div className="text-sm text-zinc-500">Partner at Consulting Firm</div>
</div>
</div>
</div>

<div className="p-8 border border-zinc-200 rounded-2xl bg-white flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 leading-relaxed flex-1">"Fired my traditional advisor who was charging 1.2% to underperform the S&amp;P. Lumen does direct indexing for a flat monthly fee. A no-brainer transition."</p>
<div className="flex items-center gap-3 border-t border-zinc-100 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-sm font-medium">E</div>
<div>
<div className="text-base font-medium text-zinc-900">Elena R.</div>
<div className="text-sm text-zinc-500">Attending Physician</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto border-b border-zinc-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group bg-white border border-zinc-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-zinc-900">
                            Is Lumen a registered investment advisor?
                            <i className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-zinc-600 border-t border-zinc-100 pt-4">
                            Yes, Lumen AI operates under an SEC-registered investment advisor. We are fiduciaries, meaning we are legally bound to act in your best financial interest at all times.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-zinc-900">
                            How does Lumen make money?
                            <i className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-zinc-600 border-t border-zinc-100 pt-4">
                            We charge a transparent flat monthly subscription fee. We do not charge AUM (Assets Under Management) fees, and we receive no kickbacks or commissions for recommending specific funds.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-zinc-900">
                            Is my data and money secure?
                            <i className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-zinc-600 border-t border-zinc-100 pt-4">
                            Absolutely. We use read-only APIs via Plaid to view your accounts. We use AES-256 encryption for all data storage. Your funds remain at your respective brokerages (like Fidelity, Schwab, or Vanguard).
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#09090b] rounded-3xl p-12 lg:p-24 text-center flex flex-col items-center relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
<div className="w-[800px] h-[800px] border border-white rounded-full"></div>
<div className="w-[600px] h-[600px] border border-white rounded-full absolute"></div>
<div className="w-[400px] h-[400px] border border-white rounded-full absolute"></div>
</div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">Stop leaving wealth on the table.</h2>
<p className="text-xl text-zinc-400 mb-10">Join thousands of high-earners using AI to optimize their net worth automatically.</p>
<a className="inline-flex items-center gap-3 bg-white text-black px-8 py-5 rounded-xl text-lg font-medium hover:bg-zinc-200 transition-all hover:gap-4 w-fit mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="#">
                        Get Your Free Clarity Score <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white pt-20 pb-10 px-6 lg:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">LUMEN<sup className="text-xs font-normal ml-0.5">AI</sup></span>
</div>
<p className="text-sm text-zinc-500 mb-6 max-w-xs">Intelligent wealth management for the modern professional. Unbiased, automated, and compounding.</p>

<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-600">
<li><a className="hover:text-black transition-colors" href="#">How it works</a></li>
<li><a className="hover:text-black transition-colors" href="#">Tax Harvesting</a></li>
<li><a className="hover:text-black transition-colors" href="#">Direct Indexing</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-600">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-medium text-zinc-900 mb-4">Subscribe to Wealth Insights</h4>
<p className="text-sm text-zinc-500 mb-4">Advanced strategies sent monthly.</p>
<div className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400" placeholder="Email address" type="email"/>
<button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">Join</button>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
<p>© 2024 Lumen AI, Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
<a className="hover:text-zinc-600" href="#">Disclosures</a>
</div>
</div>
</footer>




    </>
  );
}
