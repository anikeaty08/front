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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 w-full z-50 py-6">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<i className="w-6 h-6 text-white" data-lucide="layout-template" strokeWidth="1.5"></i>
<span className="text-lg font-semibold tracking-tight uppercase tracking-widest">Tri Consulting</span>
</div>
<div className="flex gap-6 text-white">
<a className="hover:text-[#F44913] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-[#F44913] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-[#F44913] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</nav>

<section className="relative bg-black pt-40 pb-24 overflow-hidden flex flex-col items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] bg-[#F44913]/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<p className="text-gray-300 text-lg mb-6">For small business owners tired of guessing.</p>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Your Brand Doesn't Need<br/>More Effort. <span className="text-[#F44913]">It Needs a Plan.</span>
</h1>
<p className="md:text-2xl text-xl font-normal text-gray-300 mb-10">
                Get the step-by-step brand roadmap that turns scattered<br className="hidden md:block"/>ideas into clear direction—in a single weekend.
            </p>
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-10 py-5 rounded-lg transition-all shadow-[0_0_40px_-10px_rgba(244,73,19,0.5)] w-full md:w-auto" href="#pricing">
                Yes — I Want My Brand Roadmap – Just $97
            </a>
<p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
                60-day guarantee • Secure checkout • Instant Access
            </p>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto mt-20 px-6">
<img alt="Brand Propeller Blueprint Product Mockup" className="w-full rounded-2xl shadow-2xl object-cover h-[400px] md:h-[600px] border border-gray-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/324b3b97-2c82-49e0-b038-c484ca7cbc2e_3840w.png"/>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-12 px-6 text-gray-300 text-lg">
<div className="flex items-center gap-3"><i className="text-[#F44913] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i> Gain brand clarity &amp; direction</div>
<div className="flex items-center gap-3"><i className="text-[#F44913] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i> Save time &amp; avoid errors</div>
<div className="flex items-center gap-3"><i className="text-[#F44913] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i> Communicate with confidence</div>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight text-center mb-16">
                Tired of Working Harder but Still Not Seeing Results?
            </h2>
<div className="space-y-6 mb-16">
<div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Are you pouring money into ads, boosted posts, or "marketing hacks"... but still hearing crickets when it comes to sales?</p>
</div>
<div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Are you blending into a sea of "me-too" businesses, even though you know your product or service is better?</p>
</div>
<div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Are you forced to discount, slash prices, and beg prospects just to close a deal?</p>
</div>
<div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Are you watching weaker competitors scoop up the very customers you've been chasing for months?</p>
</div>
<div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Are you spinning your wheels, working twice as hard for half the return because nobody truly gets what makes your business different?</p>
</div>
</div>
<div className="text-center">
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-10 py-5 rounded-lg transition-all w-full md:w-auto" href="#pricing">
                    Get The Brand Propeller – Just $97
                </a>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Frustrated professional" className="relative rounded-xl shadow-lg w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/236c9a62-c270-4afa-b327-1e9b2cc0ccc3_800w.png"/>
</div>
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                    If This Sounds Familiar,<br/>You're in Good Company
                </h2>
<div className="space-y-6 text-lg text-gray-900">
<p className="">Tens of thousands of small business owners are stuck in the same loop.</p>
<p className="">You put in the hours. You deliver a solid product or service. But because your brand isn't clear, you stay invisible to the very people you're trying to reach.</p>
<div className="bg-orange-50 border-l-4 border-[#F44913] p-6 rounded-r-lg mt-8">
<p className="font-medium text-gray-900">The real problem isn't what you sell, <span className="text-[#F44913]">it's how your brand shows up.</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                    Customers Don't Choose the "Best." They Choose the Brand They Trust.
                </h2>
<div className="space-y-6 text-lg text-gray-900">
<p className="">Your logo? Not your brand.<br/>Your colors? Not your brand.<br/>Your ads? Not your brand.</p>
<p className="font-semibold text-gray-900">Your brand is the gut feeling people have about you.</p>
<p className="">If that feeling is fuzzy, confusing, or forgettable, you'll keep blending in. If it's sharp, magnetic, and clear, you'll start attracting customers consistently.</p>
<p className="">The good news? This isn't a talent problem or a budget problem. It's a strategy problem — and strategy is exactly what The Brand Propeller Blueprint gives you.</p>
</div>
</div>
<div className="order-1 md:order-2 relative">
<img alt="Professional with product" className="rounded-xl shadow-lg w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd8b2569-b3b1-4666-87e4-690b87aa16d7_800w.png"/>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 text-center">
<div className="max-w-4xl mx-auto px-6 mb-16">
<p className="text-lg font-medium text-[#F44913] uppercase tracking-widest mb-4">Introducing:</p>
<h2 className="md:text-5xl text-4xl font-semibold text-gray-900 tracking-tight mb-8">
                The Brand Propeller Blueprint
            </h2>
<p className="text-xl leading-relaxed text-gray-900">
<strong className="text-gray-900">A DIY system</strong> that gives you the clarity, confidence, and structure agencies charge $5,000+ for — without the price tag.
            </p>
<p className="text-xl leading-relaxed mt-4 text-gray-900">
                In just 30 days, it walks you through the exact framework used by high-growth businesses to define your brand's foundation, clarify your message, and build a roadmap that attracts the right customers.
            </p>
</div>
<div className="max-w-6xl mx-auto px-6">
<img alt="Product Mockup Collection" className="w-full h-[500px] object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cc8eccd-f8ab-4871-9084-376d19185ffe_3840w.png"/>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-10">With a Clear Brand Roadmap,you'll Finally be Able to:</h2>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<i className="text-green-600 bg-green-100 rounded-full w-7 h-7 shrink-0 p-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Stand out clearly from competitors</p>
</div>
<div className="flex items-start gap-4">
<i className="text-green-600 bg-green-100 rounded-full w-7 h-7 shrink-0 p-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Make every marketing spend count</p>
</div>
<div className="flex items-start gap-4">
<i className="text-green-600 bg-green-100 rounded-full w-7 h-7 shrink-0 p-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Attract the right customers consistently</p>
</div>
<div className="flex items-start gap-4">
<i className="text-green-600 bg-green-100 rounded-full w-7 h-7 shrink-0 p-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Align your business around one unified vision</p>
</div>
<div className="flex items-start gap-4">
<i className="text-green-600 bg-green-100 rounded-full w-7 h-7 shrink-0 p-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Increase your perceived value and stop competing on price</p>
</div>
</div>
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-10 py-5 rounded-lg transition-all w-full md:w-auto text-center" href="#pricing">
                    Get Access Now - Just $97
                </a>
</div>
<div className="">
<img alt="Chess Strategy" className="rounded-xl shadow-lg w-full object-cover h-[600px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86594425-3101-4544-9d87-d9c609294110_800w.png"/>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center flex flex-col justify-center min-h-[400px]">
<h3 className="font-medium text-lg mb-6">Which Path Will Your Business Take?</h3>

<div className="relative h-64 w-full flex items-end justify-between px-4 pb-8 border-l-2 border-b-2 border-gray-300 text-xs text-gray-500">
<div className="absolute -left-10 top-0 h-full flex flex-col justify-between items-end pr-2">
<span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
</div>
<div className="absolute -bottom-8 left-0 w-full flex justify-between px-4">
<span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span>
</div>
<div className="absolute -left-16 top-1/2 -rotate-90 origin-center whitespace-nowrap">Customer Growth Potential</div>
<div className="absolute -bottom-14 left-1/2 -translate-x-1/2">Time (Days)</div>

<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none">

<polyline fill="none" points="0,220 50,200 100,160 150,110 200,80 250,50 300,30" stroke="#eab308" strokeWidth="3"></polyline>
<circle cx="300" cy="30" fill="#eab308" r="4"></circle>
<text fill="#eab308" fontSize="12" font-weight="600" x="210" y="20">Growth (New Opportunities)</text>

<polyline fill="none" points="0,80 50,100 100,120 150,150 200,180 250,210 300,240" stroke="#ef4444" strokeWidth="3"></polyline>
<circle cx="300" cy="240" fill="#ef4444" r="4"></circle>
<text fill="#ef4444" fontSize="12" font-weight="600" x="180" y="235">Decline (Lost Customers)</text>
</svg>

<div className="absolute top-4 left-4 flex flex-col gap-2 bg-white/80 p-2 rounded text-xs">
<div className="flex items-center gap-2"><span className="w-4 h-0.5 bg-red-500"></span> Without Strategy</div>
<div className="flex items-center gap-2"><span className="w-4 h-0.5 bg-yellow-500"></span> With Strategy</div>
</div>
</div>
</div>
<div className="">
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-gray-900 tracking-tight mb-10">
                    Every Day Without a Brand Strategy Costs You Customers
                </h2>
<div className="space-y-6 mb-8">
<div className="flex items-start gap-4">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Your ideal customers are choosing competitors who aren't even as good as you</p>
</div>
<div className="flex items-start gap-4">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're leaving thousands on the table by competing on price instead of value</p>
</div>
<div className="flex items-start gap-4">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're burning cash on ads and marketing that don't stick</p>
</div>
<div className="flex items-start gap-4">
<i className="text-[#F44913] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're working twice as hard for half the return</p>
</div>
</div>
<p className="text-xl font-semibold text-gray-900 border-gray-200 border-t pt-4">
                    How much longer can you afford to stay stuck?
                </p>
</div>
</div>
</section>

<section className="bg-[#2D2D2D] py-24 md:py-32 text-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 leading-tight">
                Everything You Need to Build a Customer<br/>-Attracting Brand (Total Value: $3,247)
            </h2>
<div className="relative pl-8 space-y-16 before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-gray-600">

<div className="relative">
<div className="absolute -left-[35px] top-1 bg-[#2D2D2D] p-1">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xl shadow-lg border border-gray-600">🎯</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-3">Core System</h3>
<ul className="space-y-3 text-lg text-gray-300">
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Workbooks ($297) - Step-by-step frameworks that transform you from ignored to irresistible</li>
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Fill-in-the-Blank Templates ($197) - No guesswork, just plug in and go</li>
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Cheat Sheets ($147) - Quick references to keep your message sharp</li>
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Brand Strategy Master Document ($197) - Your complete roadmap in one place</li>
</ul>
</div>

<div className="relative">
<div className="absolute -left-[35px] top-1 bg-[#2D2D2D] p-1">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xl shadow-lg border border-gray-600">🚀</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-3">Execution &amp; Support</h3>
<ul className="space-y-3 text-lg text-gray-300">
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Video Walkthroughs ($297) - Watch exactly how to position yourself as the premium choice</li>
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Brand Strategy Execution Plan ($347) - Roll out with confidence across every channel</li>
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> AI-Assisted Prompts ($147) - Create content that attracts and converts, faster</li>
</ul>
</div>

<div className="relative">
<div className="absolute -left-[35px] top-1 bg-[#2D2D2D] p-1">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xl shadow-lg border border-gray-600">🧭</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-3">Expert Guidance</h3>
<ul className="space-y-3 text-lg text-gray-300">
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> 1-Hour Expert Strategy Session ($497) - A dedicated, personalised session with Teddy so you implement with total confidence and never get stuck. Normally charged at $497 on its own.</li>
</ul>
</div>

<div className="relative">
<div className="absolute -left-[35px] top-1 bg-[#2D2D2D] p-1">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xl shadow-lg border border-gray-600">🎁</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-[#F44913]">Exclusive Bonuses</h3>
<ul className="space-y-3 text-lg text-gray-300">
<li className="flex gap-3 items-start"><i className="w-5 h-5 text-gray-400 mt-1 shrink-0" data-lucide="check-circle-2"></i> Marketing Plan Template ($147) - Activate your new brand instantly</li>
</ul>
</div>
</div>
<div className="mt-20 text-center border-t border-gray-700 pt-16">
<p className="text-3xl font-medium mb-8">
                    Total Value $3,247 – <span className="text-[#F44913] font-semibold">Yours Today for Just $97</span>
</p>
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-10 py-5 rounded-lg transition-all w-full md:w-auto shadow-lg shadow-orange-500/20" href="#pricing">
                    Claim The Brand Propeller Today – Just $97
                </a>
</div>
</div>
</section>

<section className="bg-[#F7F7F7] pt-24 pb-0">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight text-center mb-16">
                From Struggling to Sold-Out:<br/>What Others Say
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-4">Clarity of purpose is the #1 thing the system made happen for me...</h4>
<p className="text-lg mb-8 leading-relaxed text-gray-900">Despite my success, I wanted to expand beyond my location and share my expertise online. The Brand Propeller program with Teddy helped me build a solid brand foundation and positioned me as an industry expert. I'm truly grateful for this experience and my logo was thoughtfully designed!</p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbe75196-3a9a-432c-a24c-4e21d0c7bc1d_320w.png"/>
<div>
<p className="font-semibold text-gray-900">Dr. Elijah Mba (The Phenom)</p>
<p className="text-sm text-gray-500 mb-1">Network marketing pro</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-4">Knowing what to do now, exploded our customer-base...</h4>
<p className="text-lg mb-8 leading-relaxed text-gray-900">The Brand Propeller was the strategic advantage our startup needed. We went from being virtually unknown to becoming a talked-about brand in our space. The most tangible results? We tripled our customer base and started receiving collaboration offers consistently. It provided a clarity we were missing.</p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19936b5-f918-459a-9f88-d3637b26faba_320w.png"/>
<div>
<p className="font-semibold text-gray-900">Jennifer Ayebatonye</p>
<p className="text-sm text-gray-500 mb-1">Jbonny Hair brand UK</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-4">From struggling to selling out over 60% of the properties we had...</h4>
<p className="text-lg mb-8 leading-relaxed text-gray-900">We had problems attracting right clients, selling out the properties we had, and finding the right employees, but Teddy came through to resolve these issues. Since the rebrand, we've experienced a remarkable upsurge in our performance. His systematic approach was mind blowing, we had fun working with him.</p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca27b82e-62bb-4274-a682-bfac65e3105d_320w.png"/>
<div>
<p className="font-semibold text-gray-900">Mr. Jibril Aliyu</p>
<p className="text-sm text-gray-500 mb-1">MD Urban Abode Ltd</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-center bg-[#F44913] w-full mt-12 pt-8 pb-8 shadow-inner">
<p className="text-white text-xl md:text-2xl font-semibold tracking-tight">Join 100+ Entrepreneurs who transformed their brand.</p>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex justify-center items-center">
<img alt="Brand Expression Tablet" className="rounded-xl shadow-md w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-10">
                    Here's Why The<br/>Brand Propeller Works
                </h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="text-gray-800 w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Built on the same frameworks $10M+ brands use</p>
</div>
<div className="flex items-start gap-4">
<i className="text-gray-800 w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Zero branding experience required</p>
</div>
<div className="flex items-start gap-4">
<i className="text-gray-800 w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Fill-in-the-blank simplicity - no creative guesswork</p>
</div>
<div className="flex items-start gap-4">
<i className="text-gray-800 w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Expert safety net - so you're never left hanging</p>
</div>
<div className="flex items-start gap-4">
<i className="text-gray-800 w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">Proven with 100+ entrepreneurs already</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-10">
                    Who is this for?
                </h2>
<h3 className="text-xl font-semibold text-gray-900 mb-6">This is for you if...</h3>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3">
<i className="text-green-600 bg-green-100 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're tired of wasting money on marketing</p>
</div>
<div className="flex items-center gap-3">
<i className="text-green-600 bg-green-100 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You want to stop blending in and start standing out</p>
</div>
<div className="flex items-center gap-3">
<i className="text-green-600 bg-green-100 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're ready to build a brand that grows</p>
</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-6">This is not for you if...</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<i className="text-[#F44913] bg-red-50 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're already the #1 choice in your market</p>
</div>
<div className="flex items-center gap-3">
<i className="text-[#F44913] bg-red-50 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're comfortable with the chaos in your business</p>
</div>
<div className="flex items-center gap-3">
<i className="text-[#F44913] bg-red-50 rounded-full w-6 h-6 shrink-0 p-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-lg text-gray-900">You're not serious about growing your business</p>
</div>
</div>
</div>
<div className="flex justify-end relative">
<img alt="Brand Core Documentation" className="w-full h-[500px] object-cover z-10 border-white border-0 rounded-xl relative shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a3b60db-f7ad-4358-9dc9-79ef123583a1_800w.png"/>
</div>
</div>
</section>

<section className="md:py-32 text-center bg-white pt-24 pb-24" id="pricing">
<div className="max-w-3xl mx-auto px-6">
<p className="text-[#F44913] font-semibold tracking-widest uppercase text-sm mb-6">Special Launch Price</p>
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-6">
                Why Is This Only $97?
            </h2>
<p className="leading-relaxed text-lg text-gray-900 mb-12">
                Because I want volume over margin. I want 1,000 business owners using this, getting results, and telling others. That word-of-mouth is worth more to me than charging $997 to a handful of people. The low price is intentional. It's not a reflection of the value inside.
            </p>
<div className="flex items-center justify-center gap-6 mb-8">
<span className="line-through text-4xl font-medium text-gray-900">$499</span>
<i className="w-8 h-8 text-gray-300" data-lucide="arrow-right"></i>
<span className="text-5xl md:text-6xl text-[#F44913] font-semibold tracking-tight">Today: $97 Only</span>
</div>
<p className="text-lg text-gray-900 max-w-2xl mb-12">
                If this helps you close one extra client this year that you'd have otherwise lost to a competitor — just one — it pays for itself many times over. $97 is three weeks of daily coffee runs. <strong className="text-gray-900">This is a brand strategy that compounds for years.</strong>
</p>

<div className="flex flex-col md:p-12 md:flex-row text-white text-left bg-zinc-800 max-w-4xl rounded-2xl mr-auto mb-12 ml-auto pt-8 pr-8 pb-8 pl-8 shadow-2xl gap-x-8 gap-y-8 items-center">
<div className="shrink-0">

<div className="relative w-24 h-24 flex items-center justify-center bg-yellow-500 rounded-full border-4 border-yellow-300 shadow-lg">
<div className="border-yellow-700/30 border rounded-full absolute top-2 right-2 bottom-2 left-2"></div>
<div className="text-center">
<span className="block text-[10px] font-bold text-yellow-900 tracking-wider">100%</span>
<span className="block text-[10px] font-bold text-yellow-900 tracking-wider">MONEY BACK</span>
</div>
<svg className="absolute -top-1 -right-1 w-6 h-6 text-yellow-300 drop-shadow" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-2xl font-semibold mb-3">Magnetic Brand or Your Money Back</h3>
<p className="text-gray-300 text-lg">Try The Brand Propeller for 60 days. If you don't have a clear brand strategy that attracts customers, we'll refund every penny. <strong className="text-white">No questions asked.</strong></p>
</div>
</div>
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-12 py-6 rounded-lg transition-all w-full md:w-auto shadow-xl shadow-orange-500/20" href="#">
                Yes — I Want The Brand Propeller Blueprint – $97
            </a>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight text-center mb-16">
                More from our clients
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<p className="leading-relaxed text-lg text-gray-900 mb-8">This toolkit is worth the risk. I've been burnt a few times with online courses and resources, but the brand propeller is an absolute proof of value.<br/><br/>This toolkit made it easier to create a plan for my business brand and have thought me what building a brand is all about. I highly recommend the brand propeller to any business owner who's looking to build a solid brand foundation on a decent budget.</p>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64035097-1cc8-45a5-bbf7-2071c6b10f8e_320w.png"/>
<div className="">
<p className="font-semibold text-gray-900">Mr. Ayo Omolagba</p>
<p className="text-sm text-gray-900 mb-1">Drive Engineering Ltd</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<p className="leading-relaxed text-lg text-gray-900 mb-8">The brand propeller was a game-changer in leveling up my business. I've often struggled with clarifying what my business is about and how best to communicate the value. Doing all the hard work in just 1 week of working with the toolkit, I was able to solve a stalling problem with the expert support provided. It's an efficient solution and I'm glad I purchased the toolkit.</p>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2aee70b-7abb-48b3-bd34-03098ea149b2_320w.png"/>
<div className="">
<p className="font-semibold text-gray-900">Tolulope Akano</p>
<p className="text-sm text-gray-900 mb-1">CEO - The WOW Signature</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<p className="leading-relaxed text-lg text-gray-900 mb-8">I gained a ton of knowledge from using the brand propeller. This tool revolutionized my approach to branding beyond aesthetics and social media. Now, we have a clear direction, a deeper understanding of our target market, and the confidence to communicate effectively.<br/><br/>The impact on my team has been incredible - they're more proactive and aligned with our brand vision. I'm excited to recommend the toolkit.</p>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da9b6dca-13eb-4501-8cff-6511647c8ea4_800w.png"/>
<div className="">
<p className="font-semibold text-gray-900">Mrs Jite Osborn</p>
<p className="text-sm text-gray-900 mb-1">MD Jite Farm Supplies</p>
<div className="flex gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                    Who's Offering this?
                </h2>
<div className="space-y-6 text-lg mb-12 text-gray-900">
<p className="">My name is Teddy Postron Idogho. Over the past decade, I've worked as a brand strategist with a single goal: to transform overlooked businesses into undeniable market leaders.</p>
<p className="">I've developed a proven framework that has helped dozens of clients <strong className="text-gray-900">attract premium clients, increase their perceived value, and achieve significant growth.</strong> This toolkit contains that exact framework.</p>
<p className="">We've invested over 2,200 hours refining it to ensure it delivers a brand blueprint that transforms your business for good and we're here to guide you every step of the way.</p>
</div>
<h4 className="uppercase text-sm font-semibold text-gray-900 tracking-wider mb-6">SOME BUSINESSES I HAVE WORKED WITH:</h4>
<div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">

<span className="font-bold text-xl tracking-tight">GBN AFRICA</span>
<span className="font-bold text-xl tracking-tight flex items-center gap-1"><i className="w-5 h-5" data-lucide="globe"></i> MERCY CORPS</span>
<span className="font-bold text-xl tracking-tight">Iab.</span>
<span className="font-bold text-xl tracking-tight flex items-center gap-1"><i className="w-5 h-5" data-lucide="building"></i> URBAN SHELTER</span>
</div>
</div>
<div className="flex justify-end">
<img alt="Teddy Postron Idogho" className="rounded-xl shadow-lg w-full h-[600px] object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53223190-92b0-47e8-8aac-bf47a53df836_800w.png"/>
</div>
</div>
</section>

<section className="bg-[#F7F7F7] py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight text-center mb-16">
                Common Questions Others Ask Before<br/>Saying Yes to the Brand Propeller
            </h2>
<div className="space-y-4">

<div className="bg-gray-200/60 rounded-xl overflow-hidden border border-gray-200">
<div className="p-6 flex justify-between items-center cursor-pointer">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg">01</span>
<h4 className="text-lg font-medium text-gray-900">Will this toolkit work for any industry or type of business?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="minus" strokeWidth="1.5"></i>
</div>
<div className="text-lg text-gray-900 ml-10 pt-2 pr-6 pb-6 pl-6">
                        Yes. Every business has a brand, no matter the industry. This blueprint gives you a clear framework to define your identity, clarify your message, and build a roadmap that attracts the right customers.
                    </div>
</div>

<div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-200/60 transition-colors border border-transparent">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg opacity-60">02</span>
<h4 className="text-lg font-medium text-gray-900">Can I use the toolkit for rebranding an existing business?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-200/60 transition-colors border border-transparent">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg opacity-60">03</span>
<h4 className="text-lg font-medium text-gray-900">Is the toolkit a one-time purchase, or are there additional costs?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-200/60 transition-colors border border-transparent">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg opacity-60">04</span>
<h4 className="text-lg font-medium text-gray-900">How is this toolkit different from other branding resources available online?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-200/60 transition-colors border border-transparent">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg opacity-60">05</span>
<h4 className="text-lg font-medium text-gray-900">Is there any support available if I have questions while using the toolkit?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-200/60 transition-colors border border-transparent">
<div className="flex gap-6 items-center">
<span className="text-[#F44913] font-semibold text-lg opacity-60">06</span>
<h4 className="text-lg font-medium text-gray-900">Is $97 really worth it?</h4>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-center bg-white border-gray-100 border-t pt-24 pb-24">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                The Only Question Left
            </h2>
<div className="space-y-6 text-lg mb-16 leading-relaxed max-w-3xl mx-auto text-gray-900">
<p className="">You've read this far. Which means you already know your brand needs work. You already know that's costing you customers. And you already know that $97 is not the obstacle. The only real question is whether you'll do something about it today or come back to it later. Later means another month of competing on price. Another month of watching competitors win business that should be yours. Another month of marketing spend that doesn't convert the way it should.</p>
<p className="">The Brand Propeller Blueprint fixes the problem. The math makes sense. The guarantee removes the risk. The 1-hour session ensures you don't get stuck. <strong className="text-gray-900">There's no version of this where $97 is the wrong call — as long as you intend to do the work.</strong></p>
</div>
<div className="mb-16">
<img alt="Dashboard Platform Preview" className="object-top w-full h-[400px] max-w-3xl object-cover border-0 rounded-xl mr-auto ml-auto shadow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27534c20-4ad6-41a9-aea2-0e177f7e1505_1600w.png"/>
</div>
<a className="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-12 py-6 rounded-lg transition-all w-full md:w-auto shadow-xl shadow-orange-500/20 mb-6" href="#pricing">
                Yes! I Want The Brand Propeller – Just $97
            </a>
<p className="text-sm text-gray-900">
                Covered by a 60-Day Money-Back Guarantee. Launch price ends in 30 Days.
            </p>
</div>
</section>

<footer className="bg-black py-16 text-gray-400 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<i className="w-8 h-8" data-lucide="layout-template" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight uppercase tracking-widest">Tri Consulting</span>
</div>
<div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">

<i className="w-10 h-10" data-lucide="award"></i>
<i className="w-10 h-10" data-lucide="shield-check"></i>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Link</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Social</h4>
<ul className="space-y-3">
<li><a className="hover:text-[#F44913] transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-[#F44913] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#F44913] transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="mailto:contact@silvercraftbranding.com">contact@triconsulting.com</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
