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



        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if(menuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                menuBtn.innerHTML = '<i data-lucide="x" stroke-width="1.5"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5"></i>';
            }
            lucide.createIcons();
        });

        // Simple Tab Switcher Logic
        function switchTab(tabId, element) {
            // Remove active state from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('h4').classList.remove('text-black');
                btn.querySelector('h4').classList.add('text-gray-400');
                btn.querySelector('.tab-indicator').classList.remove('bg-[#5a4aff]');
                btn.querySelector('.tab-indicator').classList.add('bg-transparent');
            });

            // Add active state to clicked button
            element.classList.add('active');
            element.querySelector('h4').classList.remove('text-gray-400');
            element.querySelector('h4').classList.add('text-black');
            element.querySelector('.tab-indicator').classList.remove('bg-transparent');
            element.querySelector('.tab-indicator').classList.add('bg-[#5a4aff]');

            // Fake content switch via DOM manipulation for demonstration
            const contentArea = document.getElementById('tab1-content');
            
            if(tabId === 'tab1') {
                contentArea.innerHTML = `
                    <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">US</div>
                            <div><div class="text-sm font-medium">Silicon Valley Bank</div><div class="text-xs text-gray-500">Checking •••• 4829</div></div>
                        </div>
                        <div class="text-sm font-medium">$1,200,000</div>
                    </div>
                    <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">EU</div>
                            <div><div class="text-sm font-medium">Trezy EUR Account</div><div class="text-xs text-gray-500">Virtual •••• 9921</div></div>
                        </div>
                        <div class="text-sm font-medium">€850,000</div>
                    </div>
                `;
            } else if (tabId === 'tab2') {
                contentArea.innerHTML = `
                    <div class="p-4 bg-yellow-50 border border-yellow-100 rounded-lg flex items-start gap-3">
                        <i data-lucide="alert-circle" class="w-5 h-5 text-yellow-600 mt-0.5" stroke-width="1.5"></i>
                        <div>
                            <div class="text-sm font-medium text-yellow-800">Pending Approval</div>
                            <div class="text-xs text-yellow-600 mt-1">Transfer of $150,000 to AWS requires CFO sign-off.</div>
                            <div class="flex gap-2 mt-3">
                                <button class="px-3 py-1 bg-white border border-yellow-200 text-xs font-medium rounded shadow-sm">Review</button>
                            </div>
                        </div>
                    </div>
                `;
                lucide.createIcons();
            } else {
                contentArea.innerHTML = `
                    <div class="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <i data-lucide="check" class="w-5 h-5 text-green-600" stroke-width="2"></i>
                        </div>
                        <div>
                            <div class="text-sm font-medium">Sync Complete</div>
                            <div class="text-xs text-gray-500">42 transactions synced to NetSuite just now.</div>
                        </div>
                    </div>
                `;
                lucide.createIcons();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-[#f4f4f5]/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-[1600px] mx-auto flex items-center justify-between h-16 px-4 lg:px-0">

<div className="lg:w-[320px] lg:border-r border-gray-200 h-full flex items-center lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="grid grid-cols-3 gap-0.5">
<div className="w-1.5 h-1.5 bg-black"></div>
<div className="w-1.5 h-1.5 bg-black"></div>
<div className="w-1.5 h-1.5 bg-black"></div>
<div className="col-start-2 w-1.5 h-3 bg-black"></div>
</div>
<span className="text-xl font-medium tracking-tight">trezy</span>
</a>
</div>

<div className="hidden lg:flex flex-1 items-center justify-center gap-8 h-full">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center" href="#">Product <span className="text-gray-300 ml-4 text-xs font-light">+</span></a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center" href="#">Use Cases <span className="text-gray-300 ml-4 text-xs font-light">+</span></a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center" href="#">Pricing <span className="text-gray-300 ml-4 text-xs font-light">+</span></a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center" href="#">Docs <span className="text-gray-300 ml-4 text-xs font-light">+</span></a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center" href="#">Company <span className="text-gray-300 ml-4 text-xs font-light">+</span></a>
</div>

<div className="hidden lg:flex items-center h-full">
<div className="px-8 border-l border-gray-200 h-full flex items-center">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-2" href="#">Log in <div className="w-1 h-1 bg-black rounded-full"></div></a>
</div>
<a className="h-full bg-black text-white px-8 flex items-center gap-4 text-sm font-medium hover:bg-gray-800 transition-colors group" href="#">
                    Get Started <i className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="lg:hidden p-2 text-gray-600" id="mobile-menu-btn">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#f4f4f5] z-40 hidden flex-col pt-20 px-6 border-t border-gray-200" id="mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium tracking-tight">
<a className="border-b border-gray-200 pb-4" href="#">Product</a>
<a className="border-b border-gray-200 pb-4" href="#">Use Cases</a>
<a className="border-b border-gray-200 pb-4" href="#">Pricing</a>
<a className="border-b border-gray-200 pb-4" href="#">Docs</a>
<a className="border-b border-gray-200 pb-4" href="#">Company</a>
<a className="border-b border-gray-200 pb-4" href="#">Log in</a>
</div>
<div className="mt-8">
<a className="w-full bg-black text-white py-4 flex items-center justify-center gap-4 text-base font-medium" href="#">
                Get Started <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<main className="max-w-[1600px] mx-auto border-x border-gray-200 relative">
<div className="flex flex-col lg:flex-row border-b border-gray-200 min-h-[600px]">

<div className="hidden lg:flex w-16 border-r border-gray-200 flex-col items-center justify-between py-12">
<div className="flex flex-col gap-2">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 border border-gray-400 rounded-full"></div>
<div className="w-1 h-1 border border-gray-400 rounded-full"></div>
<div className="w-1 h-1 border border-gray-400 rounded-full"></div>
</div>
<div className="text-vertical text-[10px] tracking-widest text-gray-500 font-medium uppercase uppercase flex items-center gap-4">
<span>Built Global. From Day One.</span>
</div>
</div>

<div className="w-full lg:w-[500px] xl:w-[600px] border-r border-gray-200 flex flex-col justify-between">
<div className="p-8 lg:p-12 xl:p-16 flex-1">
<div className="flex items-center gap-4 mb-12">
<div className="w-6 h-px bg-black"></div>
<span className="text-[10px] tracking-widest uppercase font-medium text-gray-500">Treasury, Built for Startups</span>
<div className="w-1 h-1 bg-black rounded-full ml-2"></div>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] text-gray-900 mb-8">
                        Multi-currency<br/>
<span className="font-light">treasury<br/>management</span><br/>
<span className="text-[#5a4aff]">for startups</span>
</h1>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm">
                        Open global accounts, hold funds, move money and manage cash flow across currencies — all in one secure platform.
                    </p>
</div>

<div className="bg-[#09090b] text-white flex h-24 lg:h-32 mt-auto">
<div className="w-24 border-r border-gray-800 flex items-center justify-center group cursor-pointer hover:bg-gray-900 transition-colors">
<i className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right" strokeWidth="1"></i>
</div>
<div className="flex-1 flex items-center justify-between px-8 cursor-pointer hover:bg-gray-900 transition-colors group">
<span className="text-lg font-medium">Get started in minutes</span>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="w-full lg:flex-1 relative overflow-hidden flex items-center justify-center p-12 min-h-[400px] lg:min-h-auto border-b lg:border-b-0 border-gray-200">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, transparent 40%, #f4f4f5 70%), repeating-linear-gradient(0deg, transparent, transparent 39px, #d4d4d8 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #d4d4d8 40px)'}}></div>

<div className="absolute top-12 right-12 flex items-center gap-1"><div className="w-2 h-2 bg-black"></div><div className="w-4 h-[1px] bg-black"></div><div className="w-[1px] h-4 bg-black"></div></div>
<div className="absolute bottom-12 right-1/4 flex items-center gap-1"><div className="w-2 h-2 bg-black"></div><div className="w-[1px] h-4 bg-black"></div></div>

<div className="absolute w-[600px] h-[600px] rounded-full border border-gray-200 opacity-50 border-dashed"></div>
<div className="absolute w-[500px] h-[500px] rounded-full border border-gray-200 opacity-60 border-dashed transform rotate-45"></div>
<div className="absolute w-[400px] h-[400px] rounded-full border border-gray-200 opacity-70 border-dashed transform -rotate-45"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" z-index="0">
<path className="opacity-50" d="M 20% 50% L 40% 30% L 60% 50%" fill="none" stroke="#5a4aff" strokeWidth="1"></path>
<rect fill="#09090b" height="6" width="6" x="20%" y="49%"></rect>
<rect fill="#5a4aff" height="6" width="6" x="39.5%" y="29.5%"></rect>
</svg>

<div className="w-32 h-32 bg-black z-10 flex flex-col items-center justify-center gap-1 shadow-2xl relative">

<div className="absolute inset-0 bg-[#5a4aff] opacity-20 blur-2xl -z-10"></div>
<div className="flex gap-1">
<div className="w-4 h-4 bg-white"></div>
<div className="w-4 h-4 bg-white"></div>
<div className="w-4 h-4 bg-white"></div>
</div>
<div className="flex flex-col gap-1 mt-1">
<div className="w-4 h-4 bg-white"></div>
<div className="w-4 h-4 bg-white"></div>
</div>
</div>
</div>

<div className="hidden lg:block w-[320px] border-l border-gray-200 bg-[#fafafa]">
<div className="p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-12">
<span className="text-[10px] tracking-widest uppercase font-medium text-gray-500">Supporting 25+ Currencies</span>
<div className="w-1 h-1 bg-black rounded-full"></div>
</div>
<div className="flex-1 flex flex-col gap-8">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#5a4aff] text-white flex items-center justify-center text-sm font-medium shadow-sm group-hover:scale-105 transition-transform">$</div>
<div>
<div className="text-sm font-medium text-gray-900">USD</div>
<div className="text-xs text-gray-500">US Dollar</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shadow-sm group-hover:scale-105 transition-transform">€</div>
<div>
<div className="text-sm font-medium text-gray-900">EUR</div>
<div className="text-xs text-gray-500">Euro</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#5a4aff] text-white flex items-center justify-center text-sm font-medium shadow-sm group-hover:scale-105 transition-transform">£</div>
<div>
<div className="text-sm font-medium text-gray-900">GBP</div>
<div className="text-xs text-gray-500">Pound Sterling</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shadow-sm group-hover:scale-105 transition-transform">S$</div>
<div>
<div className="text-sm font-medium text-gray-900">SGD</div>
<div className="text-xs text-gray-500">Singapore Dollar</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#5a4aff] text-white flex items-center justify-center text-sm font-medium shadow-sm group-hover:scale-105 transition-transform">₹</div>
<div>
<div className="text-sm font-medium text-gray-900">INR</div>
<div className="text-xs text-gray-500">Indian Rupee</div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-200">
<a className="text-xs font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-2" href="#">
                            + 20 more currencies
                        </a>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row border-b border-gray-200 bg-white">
<div className="lg:w-[400px] border-b lg:border-b-0 lg:border-r border-gray-200 p-8 flex items-center gap-6">
<div className="w-4 h-4 border-t-2 border-l-2 border-gray-300"></div>
<div>
<div className="text-[10px] tracking-widest uppercase font-medium text-gray-500">Trusted By</div>
<div className="text-xs font-medium text-gray-400 mt-1">Fast-growing startups</div>
</div>
</div>
<div className="flex-1 flex flex-wrap lg:flex-nowrap items-center justify-around p-8 gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-medium tracking-tight">sanity</span>
<span className="text-xl font-medium tracking-tight">ryde</span>
<span className="text-xl font-medium tracking-tight">bundle</span>
<span className="text-xl font-medium tracking-tight">Quill</span>
<span className="text-xl font-medium tracking-tight">spiky</span>
</div>
</div>
</main>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200">
<div className="flex flex-col lg:flex-row h-full">
<div className="w-full lg:w-1/3 border-r border-gray-200 p-12 lg:p-16 flex flex-col justify-between bg-[#fafafa]">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight mb-6">Everything you need to scale globally.</h2>
<p className="text-lg text-gray-500">A unified financial stack designed to eliminate the friction of cross-border operations.</p>
</div>
<div className="mt-16 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2">

<div className="border-b md:border-r border-gray-200 p-12 hover:bg-white transition-colors cursor-default">
<div className="w-10 h-10 rounded bg-[#eff0ff] text-[#5a4aff] flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Local Accounts</h3>
<p className="text-base text-gray-500">Open named accounts in USD, EUR, GBP and more in seconds. Receive funds like a local business.</p>
</div>

<div className="border-b border-gray-200 p-12 hover:bg-white transition-colors cursor-default">
<div className="w-10 h-10 rounded bg-gray-100 text-black flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">FX &amp; Transfers</h3>
<p className="text-base text-gray-500">Convert currencies at mid-market rates and send payouts to over 130 countries swiftly.</p>
</div>

<div className="border-b md:border-b-0 md:border-r border-gray-200 p-12 hover:bg-white transition-colors cursor-default">
<div className="w-10 h-10 rounded bg-gray-100 text-black flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Corporate Cards</h3>
<p className="text-base text-gray-500">Issue physical and virtual cards instantly. Set limits and control software spend globally.</p>
</div>

<div className="p-12 hover:bg-white transition-colors cursor-default">
<div className="w-10 h-10 rounded bg-[#eff0ff] text-[#5a4aff] flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Yield &amp; Treasury</h3>
<p className="text-base text-gray-500">Put idle cash to work automatically. Earn yield on balances across multiple currencies securely.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-white">
<div className="grid lg:grid-cols-2">

<div className="p-12 lg:p-24 border-r border-gray-200 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-600 mb-8 w-max">
<div className="w-2 h-2 rounded-full bg-[#5a4aff]"></div> Platform UI
                </div>
<h2 className="text-4xl font-medium tracking-tight mb-8">One dashboard for your entire financial lifecycle.</h2>

<div className="flex flex-col gap-2 relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
<button className="text-left py-4 pl-6 relative group tab-btn active" onclick="switchTab('tab1', this)">
<div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#5a4aff] transition-all tab-indicator"></div>
<h4 className="text-lg font-medium text-black group-hover:text-black transition-colors">Global Cash Flow</h4>
<p className="text-base text-gray-500 mt-1 hidden group-[.active]:block">Visualize balances across all entities and currencies in real-time.</p>
</button>
<button className="text-left py-4 pl-6 relative group tab-btn" onclick="switchTab('tab2', this)">
<div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-gray-300 transition-all tab-indicator"></div>
<h4 className="text-lg font-medium text-gray-400 group-hover:text-black transition-colors">Approval Workflows</h4>
<p className="text-base text-gray-500 mt-1 hidden group-[.active]:block">Set multi-level approvals for large transfers to ensure compliance.</p>
</button>
<button className="text-left py-4 pl-6 relative group tab-btn" onclick="switchTab('tab3', this)">
<div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-gray-300 transition-all tab-indicator"></div>
<h4 className="text-lg font-medium text-gray-400 group-hover:text-black transition-colors">Automated Accounting</h4>
<p className="text-base text-gray-500 mt-1 hidden group-[.active]:block">Sync transactions automatically with Xero, NetSuite, and Quickbooks.</p>
</button>
</div>
</div>

<div className="bg-[#f4f4f5] p-12 lg:p-24 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-40"></div>

<div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-2xl p-6 transition-all duration-500" id="tab-image-container">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
<div>
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Total Balance</div>
<div className="text-3xl font-medium tracking-tight">$2,450,890.00</div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">+12.4%</div>
</div>

<div className="space-y-4" id="tab1-content">
<div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">US</div>
<div><div className="text-sm font-medium">Silicon Valley Bank</div><div className="text-xs text-gray-500">Checking •••• 4829</div></div>
</div>
<div className="text-sm font-medium">$1,200,000</div>
</div>
<div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">EU</div>
<div><div className="text-sm font-medium">Trezy EUR Account</div><div className="text-xs text-gray-500">Virtual •••• 9921</div></div>
</div>
<div className="text-sm font-medium">€850,000</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-[#09090b] text-white">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
<div className="p-12 lg:p-20 flex flex-col items-center text-center">
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-[#5a4aff]">130+</div>
<div className="text-lg font-medium text-gray-300">Countries Supported</div>
<div className="text-sm text-gray-500 mt-2">Send and receive funds globally without friction.</div>
</div>
<div className="p-12 lg:p-20 flex flex-col items-center text-center">
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4">0%</div>
<div className="text-lg font-medium text-gray-300">FX Markup on Majors</div>
<div className="text-sm text-gray-500 mt-2">True mid-market rates for major currency pairs.</div>
</div>
<div className="p-12 lg:p-20 flex flex-col items-center text-center">
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4">99.9%</div>
<div className="text-lg font-medium text-gray-300">Platform Uptime</div>
<div className="text-sm text-gray-500 mt-2">Enterprise-grade reliability for your treasury.</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 py-24 bg-[#fafafa] relative overflow-hidden">
<div className="text-center max-w-2xl mx-auto px-4 relative z-10 mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Plays nice with your stack.</h2>
<p className="text-lg text-gray-500">Seamlessly syncs data to keep your ledger accurate and operations smooth.</p>
</div>

<div className="relative h-[400px] max-w-4xl mx-auto flex items-center justify-center">

<div className="w-24 h-24 bg-black rounded-2xl shadow-xl flex items-center justify-center z-20 border border-gray-800">
<span className="text-white font-medium text-xl tracking-tight">trezy</span>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

<svg className="absolute inset-0" height="100%" width="100%">
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="80%"></line>
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="10%" y1="50%" y2="50%"></line>
<line stroke="#e5e7eb" strokeWidth="2" x1="50%" x2="90%" y1="50%" y2="50%"></line>
</svg>
</div>

<div className="absolute top-[15%] left-[15%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-gray-400 z-20">NetSuite</div>
<div className="absolute top-[15%] right-[15%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-blue-500 z-20">Xero</div>
<div className="absolute bottom-[15%] left-[15%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-green-600 z-20">QBooks</div>
<div className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-gray-600 z-20">Slack</div>
<div className="absolute top-[45%] left-[5%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-purple-600 z-20">Stripe</div>
<div className="absolute top-[45%] right-[5%] w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-xs font-medium text-gray-800 z-20">Gusto</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-white">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-24 flex items-center justify-center bg-[#f4f4f5] border-b lg:border-b-0 lg:border-r border-gray-200">

<div className="w-full max-w-md bg-white border border-gray-200 p-8 shadow-lg">
<h4 className="font-medium text-lg border-b border-gray-100 pb-4 mb-6">Card Controls</h4>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">International Transactions</div>
<div className="text-xs text-gray-500">Allow payments outside home country</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer custom-toggle" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer transition-colors">
<div className="absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full h-4 w-4 transition-transform"></div>
</div>
</label>
</div>

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">ATM Withdrawals</div>
<div className="text-xs text-gray-500">Allow cash access globally</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer custom-toggle" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer transition-colors">
<div className="absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full h-4 w-4 transition-transform"></div>
</div>
</label>
</div>

<div className="pt-4 border-t border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium">Monthly Spending Limit</span>
<span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">$50,000</span>
</div>
<div className="w-full h-1 bg-gray-200 rounded-full relative">
<div className="absolute left-0 top-0 h-full bg-[#5a4aff] rounded-full w-2/3"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#5a4aff] rounded-full shadow cursor-grab"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>$0</span>
<span>$100k+</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-12 lg:p-24 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-8">
<i className="w-6 h-6 text-black" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Granular controls. Zero compromise.</h2>
<p className="text-lg text-gray-500 mb-8">Empower your team with cards while maintaining absolute control over spending limits, merchant categories, and geographical restrictions.</p>
<a className="text-sm font-medium text-[#5a4aff] flex items-center gap-2 hover:gap-3 transition-all" href="#">Explore card features <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-[#09090b] text-white">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Built for developers.</h2>
<p className="text-lg text-gray-400 mb-8">Integrate treasury operations directly into your product. Our REST API is predictable, well-documented, and ready to scale.</p>
<div className="flex gap-4">
<a className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition-colors" href="#">Read Docs</a>
<a className="border border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors" href="#">Get API Keys</a>
</div>
</div>
<div className="p-8 lg:p-16 flex items-center justify-center">

<div className="w-full bg-[#18181b] rounded-lg border border-gray-800 overflow-hidden text-sm font-mono leading-relaxed">
<div className="bg-[#27272a] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="text-xs text-gray-500 ml-2">create_transfer.js</span>
</div>
<div className="p-6 text-gray-300 overflow-x-auto">
<pre><code><span className="text-purple-400">const</span> <span className="text-blue-400">trezy</span> = <span className="text-purple-400">require</span>(<span className="text-green-400">'trezy-node'</span>)(<span className="text-green-400">'sk_test_...'</span>);

<span className="text-gray-500">// Create an instant cross-border transfer</span>
<span className="text-purple-400">const</span> transfer = <span className="text-purple-400">await</span> trezy.<span className="text-blue-400">transfers</span>.<span className="text-blue-400">create</span>({
  <span className="text-yellow-200">amount</span>: <span className="text-orange-400">500000</span>, <span className="text-gray-500">// 5,000.00</span>
  <span className="text-yellow-200">currency</span>: <span className="text-green-400">'EUR'</span>,
  <span className="text-yellow-200">destination</span>: <span className="text-green-400">'acct_1N...'</span>,
  <span className="text-yellow-200">source_currency</span>: <span className="text-green-400">'USD'</span>,
  <span className="text-yellow-200">metadata</span>: {
    <span className="text-yellow-200">invoice_id</span>: <span className="text-green-400">'INV-4829'</span>
  }
});

<span className="text-blue-400">console</span>.<span className="text-blue-400">log</span>(transfer.<span className="text-yellow-200">status</span>); <span className="text-gray-500">// 'processing'</span></code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-[#fafafa] py-32 px-4 lg:px-0">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-12 flex justify-center">
<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-medium border-4 border-white shadow-sm">
                    A
                </div>
</div>
<h3 className="text-3xl lg:text-5xl font-medium tracking-tight leading-tight mb-12 text-gray-900">
                "Trezy completely eliminated the headache of managing subsidiaries. We now handle payroll in 5 currencies from a single dashboard, saving us days of manual work every month."
            </h3>
<div>
<div className="text-lg font-medium text-black">Alex Chen</div>
<div className="text-base text-gray-500 mt-1">CFO at TechNova</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto border-x border-gray-200 bg-white">
<div className="p-12 lg:p-32 flex flex-col items-center text-center border-b border-gray-200">
<div className="w-16 h-1 bg-black mb-8"></div>
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8">Ready to globalize<br/>your treasury?</h2>
<p className="text-xl text-gray-500 mb-12 max-w-2xl">Join hundreds of fast-growing startups managing their global finances on Trezy.</p>
<div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
<input className="flex-1 bg-[#f4f4f5] border border-gray-200 px-6 py-4 text-base focus:outline-none focus:border-gray-400 transition-colors rounded-none placeholder:text-gray-400" placeholder="Enter your work email" type="email"/>
<button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Get Started
                </button>
</div>
<p className="text-xs text-gray-400 mt-6">No credit card required. Free 14-day trial.</p>
</div>
</section>

<footer className="max-w-[1600px] mx-auto border-x border-b border-gray-200 bg-[#fafafa] pt-16 pb-8 px-12 lg:px-24">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-1">
<span className="text-xl font-medium tracking-tight mb-6 block">trezy</span>
<p className="text-sm text-gray-500 leading-relaxed">Built globally.<br/>From day one.</p>
</div>
<div>
<h5 className="text-sm font-medium mb-6 uppercase tracking-wider text-gray-900">Product</h5>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Global Accounts</a></li>
<li><a className="hover:text-black transition-colors" href="#">Corporate Cards</a></li>
<li><a className="hover:text-black transition-colors" href="#">Yield</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium mb-6 uppercase tracking-wider text-gray-900">Resources</h5>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-black transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium mb-6 uppercase tracking-wider text-gray-900">Company</h5>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<div>© 2024 Trezy Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Twitter</a>
<a className="hover:text-black transition-colors" href="#">LinkedIn</a>
<a className="hover:text-black transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>



    </>
  );
}
