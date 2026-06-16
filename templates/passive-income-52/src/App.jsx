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



      // Initialize Lucide icons
      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#022550] text-[#FEFEFE] relative z-50">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
<span className="bg-[#D01237] text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-widest shrink-0">
            Ends Soon
          </span>
<p className="text-sm md:text-base font-medium truncate">
            Launch Pricing Available
          </p>
</div>
<div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm md:text-base">
<span className="opacity-70 line-through">Regular: $999</span>
<span className="text-[#D8B209] font-bold text-lg md:text-xl">
            TODAY ONLY: $49
          </span>
</div>
</div>
<div className="bg-[#011a38] border-t border-white/10 py-3 text-center px-4">
<p className="text-sm md:text-base max-w-3xl mx-auto text-white/80 flex items-center justify-center gap-2">
<i className="w-4 h-4 shrink-0" data-lucide="hourglass" strokeWidth="1.5"></i>
          This launch price is only available for a limited time. Once this
          window closes, the price increases.
        </p>
</div>
</div>

<section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE] to-gray-50/50 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 text-left">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#022550] leading-tight mb-6">
            Stop Living Paycheck to Paycheck.
            <br className="hidden sm:block"/>
<span className="text-[#D8B209] font-semibold">
              Start Building Wealth…
            </span>
            Even on a W2 Salary.
          </h1>
<p className="text-xl md:text-2xl text-[#022550]/70 font-medium mb-8 tracking-tight">
            First Steps to Passive Income: A Beginner's Guide to Investing and
            Real Estate
          </p>
<p className="text-lg md:text-xl text-[#022550]/80 mb-12 leading-relaxed">
            This beginner-friendly online course gives hard-working employees a
            clear, step-by-step roadmap to understand money, free up investable
            dollars, and start building passive income through investing and
            real estate, even if you're starting from zero.
          </p>
<div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
<div className="flex gap-3 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="w-6 h-6 text-[#D8B209] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-[#022550]/90">
                3 in-depth modules with 9 practical lessons
              </span>
</div>
<div className="flex gap-3 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="w-6 h-6 text-[#D8B209] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-[#022550]/90">
                Personalised 12-Month Action Plan
              </span>
</div>
<div className="flex gap-3 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="w-6 h-6 text-[#D8B209] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-[#022550]/90">
                Tools to find $200–$500/mo in your budget
              </span>
</div>
<div className="flex gap-3 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="w-6 h-6 text-[#D8B209] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-[#022550]/90">
                Guide to REITs, rentals, and multifamily
              </span>
</div>
</div>
<div className="flex flex-col items-start">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4" href="#checkout">
              GET INSTANT ACCESS. START TODAY
              <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<p className="text-lg font-semibold text-[#022550] mb-3">
              Only $49, One Payment. Lifetime Access.
            </p>
<div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-sm md:text-base text-[#022550]/60 font-medium">
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                Secure Checkout
              </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                Instant Access
              </span>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">
<img alt="Modern Real Estate" className="rounded-3xl shadow-2xl object-cover aspect-[4/5] md:aspect-square w-full" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#D8B209]/20 rounded-full flex items-center justify-center text-[#D8B209]">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-sm text-[#022550]/60 font-medium">
                  Course Students
                </p>
<p className="text-2xl font-bold text-[#022550]">1,200+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-normal tracking-tight text-[#022550]">
            Real People. Real Results.
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<div className="flex text-[#D8B209] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#022550]/80 italic mb-6 leading-relaxed">
                "I always thought investing was for people with a lot of money.
                This course completely changed my perspective. Three months
                after finishing it, I set up my first automatic investment
                account and I'm putting away $300 a month without even noticing
                it."
              </p>
</div>
<div className="pt-6 border-t border-gray-50 flex items-center gap-4">
<div className="w-12 h-12 bg-[#022550]/5 rounded-full flex items-center justify-center text-[#022550] font-semibold text-xl">
                M
              </div>
<div>
<p className="font-semibold text-lg text-[#022550]">Marcus T.</p>
<p className="text-sm text-[#022550]/60">
                  Warehouse Supervisor, Age 34
                </p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<div className="flex text-[#D8B209] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#022550]/80 italic mb-6 leading-relaxed">
                "The budgeting module alone paid for this course ten times over.
                I found $450 a month I was just wasting. Now that money goes
                straight into a REIT index fund. The roadmap made it so simple."
              </p>
</div>
<div className="pt-6 border-t border-gray-50 flex items-center gap-4">
<div className="w-12 h-12 bg-[#D8B209]/20 rounded-full flex items-center justify-center text-[#D8B209] font-semibold text-xl">
                S
              </div>
<div>
<p className="font-semibold text-lg text-[#022550]">Sarah J.</p>
<p className="text-sm text-[#022550]/60">Marketing Coordinator</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between md:hidden lg:flex">
<div>
<div className="flex text-[#D8B209] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#022550]/80 italic mb-6 leading-relaxed">
                "I finally understand what real estate investing actually means.
                It's not about being a billionaire. The 12-month action plan
                gave me clarity I've never had. I'm actively saving for my first
                property now."
              </p>
</div>
<div className="pt-6 border-t border-gray-50 flex items-center gap-4">
<div className="w-12 h-12 bg-[#D01237]/10 rounded-full flex items-center justify-center text-[#D01237] font-semibold text-xl">
                D
              </div>
<div>
<p className="font-semibold text-lg text-[#022550]">David R.</p>
<p className="text-sm text-[#022550]/60">IT Technician</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">
<img alt="Stressed professional working" className="rounded-3xl shadow-xl object-cover aspect-[4/5] w-full" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#022550] mb-8 leading-tight">
            You Work Hard. So Why Does It Feel Like You're Going Nowhere?
          </h2>
<div className="space-y-6 text-lg md:text-xl text-[#022550]/80 leading-relaxed">
<p>
              You show up every day. You do the work. You cash the cheque. But
              at the end of the month, after rent, bills, groceries, and
              everything else, there's almost nothing left. And the thought of
              "investing" or "buying property" feels like it's for someone else.
              Someone who had a head start. Someone who just... knew how money
              worked.
            </p>
<div className="p-6 bg-[#022550]/5 rounded-xl border border-[#022550]/10 my-10">
<p className="font-semibold text-[#022550] mb-3">
                Here's the thing nobody told you:
              </p>
<p>
                It's not that you're bad with money. It's that nobody ever
                showed you the right way to use it. Schools don't teach it. Your
                employer certainly doesn't. And most financial advice you find
                online either assumes you already have $50,000 to invest, or is
                trying to sell you something complicated.
              </p>
</div>
<p>
              So you stay stuck. Trading hours for dollars. Hoping for a raise
              that might never come. Watching the years pass while the idea of
              passive income feels further and further away.
            </p>
<p className="font-medium text-[#022550]">
              But what if one small shift in how you think about money changed
              everything?
            </p>
<p>
              What if you could go from relying entirely on your job income to
              having a clear, realistic plan, one you could actually start this
              month, with the money you already earn?
            </p>
<p className="font-semibold text-[#D8B209] text-2xl pt-4">
              That's exactly what this course is built to do.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#022550] text-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">
            Here's Everything You'll Learn Inside
          </h2>
<p className="text-xl text-white/70 max-w-2xl mx-auto">
            A no-fluff, step-by-step curriculum designed for people starting
            from scratch.
          </p>
</div>
<div className="space-y-8 max-w-4xl mx-auto">

<div className="bg-white text-[#022550] rounded-2xl overflow-hidden shadow-xl border border-white/10">
<div className="p-8 sm:p-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#022550] rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">
                  MODULE 1: See the Big Picture, Money, Time &amp; Passive
                  Income
                </h3>
</div>
<p className="text-lg text-[#022550]/80 mb-8 leading-relaxed">
                Most people have never sat down and looked at their full
                financial picture. This module changes that. You'll take a clear
                snapshot of where your money is going, learn how small amounts
                grow into serious wealth over time, and understand exactly why
                passive income, and real estate in particular, is one of the
                most reliable paths forward for everyday people.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">1</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Your Money Snapshot
                    </span>
<p className="text-[#022550]/70 text-base">
                      See clearly where you stand today.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">2</span>
</div>
<div>
<span className="font-semibold text-lg">
                      How Money Really Grows
                    </span>
<p className="text-[#022550]/70 text-base">
                      The power of compounding and small starts.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">3</span>
</div>
<div>
<span className="font-semibold text-lg">
                      What Passive Income Actually Is
                    </span>
<p className="text-[#022550]/70 text-base">
                      And why real estate works for real people.
                    </p>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-white text-[#022550] rounded-2xl overflow-hidden shadow-xl border border-white/10">
<div className="p-8 sm:p-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#022550] rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">
                  MODULE 2: Create Your First Investable Dollars
                </h3>
</div>
<p className="text-lg text-[#022550]/80 mb-8 leading-relaxed">
                You don't need to earn more to start investing. You need to
                redirect what you already earn. In this module, you'll define
                your 'freedom number', find $200–$500/month hidden in your
                current budget, and set up an automatic system so investing
                happens every single month, whether you think about it or not.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">1</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Design Your Freedom Number
                    </span>
<p className="text-[#022550]/70 text-base">
                      And set your first-year target.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">2</span>
</div>
<div>
<span className="font-semibold text-lg">Find the Money</span>
<p className="text-[#022550]/70 text-base">
                      Practical ways to free up $200–$500/month now.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">3</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Build Your Safety Net
                    </span>
<p className="text-[#022550]/70 text-base">
                      And establish your automatic investing system.
                    </p>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-white text-[#022550] rounded-2xl overflow-hidden shadow-xl border border-white/10">
<div className="p-8 sm:p-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#022550] rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">
                  MODULE 3: Your Beginner Investing &amp; Real Estate Roadmap
                </h3>
</div>
<p className="text-lg text-[#022550]/80 mb-8 leading-relaxed">
                Now you have money to invest, here's exactly where to put it.
                This module demystifies stocks, REITs, single-family rentals,
                and multifamily real estate. No jargon. No overwhelm. Just a
                clear look at your options and a personalised 12-month action
                plan you leave with on day one.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">1</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Investing 101 for Real People
                    </span>
<p className="text-[#022550]/70 text-base">
                      Asset types, risk, and simple rules.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">2</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Real Estate for Beginners
                    </span>
<p className="text-[#022550]/70 text-base">
                      From REITs to small multifamily deals.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-[#D8B209]/20 flex items-center justify-center shrink-0">
<span className="text-sm font-bold text-[#D8B209]">3</span>
</div>
<div>
<span className="font-semibold text-lg">
                      Your 12-Month Action Plan
                    </span>
<p className="text-[#022550]/70 text-base">
                      A clear roadmap from where you are to where you want to
                      be.
                    </p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-2xl relative group">
<img alt="Course Dashboard" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#022550]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-20 h-20 text-[#D8B209]" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
</div>

<div className="mt-16 flex flex-col items-center text-center">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4" href="#checkout">
            GET INSTANT ACCESS. START TODAY
            <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<p className="text-lg font-semibold text-white mb-3">
            Only $49, One Payment. Lifetime Access.
          </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60 font-medium">
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
              Secure Checkout
            </span>
<span className="hidden sm:inline text-white/30">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
              Instant Access
            </span>
<span className="hidden sm:inline text-white/30">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="ban" strokeWidth="1.5"></i>
              No Subscription
            </span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 items-center">

<img alt="Charles Wainer" className="w-full aspect-square object-cover rounded-3xl shadow-lg border border-gray-200" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div>
<h2 className="text-3xl font-normal tracking-tight text-[#022550] mb-6">
              Who Built This, and Why He’s Qualified to Teach It
            </h2>
<p className="text-lg text-[#022550]/80 mb-8 leading-relaxed">
              Charles Wainer isn't a retired investor looking back at the good
              old days. He’s actively in the game, working with real money, real
              properties, and real clients.
            </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]">
<strong>12+ years</strong>
                  actively investing in real estate and markets
                </span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]">
<strong>$15M+</strong>
                  in real estate assets managed or acquired
                </span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]">
<strong>1,200+</strong>
                  students and clients helped to start
                </span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]">
                  Personally started from a W2 salary, no windfall
                </span>
</div>
</div>
<div className="pl-6 border-l-4 border-[#D8B209]">
<p className="text-lg italic text-[#022550]/90 leading-relaxed">
                "I remember sitting at my desk at 29, doing the maths on my
                pension and realising it wasn't going to be enough. Nobody
                handed me a roadmap. So I built one, and then I turned it into
                this course."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#022550] mb-4">
            These Are Real Students.
            <br className="sm:hidden"/>
            These Are Real Results.
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="w-10 h-10 bg-[#D8B209]/10 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="trending-up" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-[#022550] mb-4">
              "Set up my first automatic investment in week one."
            </p>
<p className="text-sm text-[#022550]/60">— Jamie R., Nurse</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-green-600" data-lucide="piggy-bank" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-[#022550] mb-4">
              "Found $400/month I didn't know I had in my budget."
            </p>
<p className="text-sm text-[#022550]/60">— Derek M., Logistics</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="w-10 h-10 bg-[#022550]/10 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#022550]" data-lucide="building-2" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-[#022550] mb-4">
              "Bought my first REIT within 60 days of completing."
            </p>
<p className="text-sm text-[#022550]/60">— Priya S., HR Manager</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="file-text" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-[#022550] mb-4">
              "Finally have a 12-month plan I can actually stick to."
            </p>
<p className="text-sm text-[#022550]/60">— Tom H., Teacher</p>
</div>
</div>

<div className="flex flex-col items-center text-center">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4" href="#checkout">
            GET INSTANT ACCESS. START TODAY
            <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<p className="text-lg font-semibold text-[#022550] mb-3">
            Only $49, One Payment. Lifetime Access.
          </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-[#022550]/60 font-medium">
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
              Secure Checkout
            </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
              Instant Access
            </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="ban" strokeWidth="1.5"></i>
              No Subscription
            </span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#022550]">
            Is This Course Right for You?
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">

<div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border-t-4 border-t-green-500 border border-gray-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-green-600" data-lucide="check" strokeWidth="2.5"></i>
</div>
<h3 className="text-2xl font-semibold text-[#022550]">
                This is for you if...
              </h3>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You earn a W2 or self-employed income and feel like your money
                  is just disappearing every month
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You've thought about investing or real estate before but had
                  no idea where to actually start
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You want a clear, honest plan, not hype, not get-rich-quick
                  promises
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You're willing to start small and build consistently over time
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You want something you can act on this month, not someday
                </span>
</li>
</ul>
</div>

<div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border-t-4 border-t-[#D01237] border border-gray-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-[#D01237]/10 rounded-full flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#D01237]" data-lucide="x" strokeWidth="2.5"></i>
</div>
<h3 className="text-2xl font-semibold text-[#022550]">
                This is NOT for you if...
              </h3>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#D01237] shrink-0 mt-1" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You're looking for overnight results or a passive income
                  shortcut
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#D01237] shrink-0 mt-1" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You want someone else to manage your money without
                  understanding it yourself
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#D01237] shrink-0 mt-1" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You're not willing to make any changes to your current
                  spending habits
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#D01237] shrink-0 mt-1" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-[#022550]/80">
                  You want advanced strategies, this is a beginner-focused
                  foundations course
                </span>
</li>
</ul>
</div>
</div>
<p className="text-xl text-[#022550] text-center max-w-3xl mx-auto font-medium leading-relaxed">
          This course is built for the person who's ready to take responsibility
          for their financial future — even if they're starting with very
          little. If that's you, keep reading.
        </p>
</div>
</section>

<section className="py-24 bg-[#022550] text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
            Getting Started Is Simpler Than You Think
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">

<div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-white/10 -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#D8B209] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-[#022550]">
<span className="text-3xl font-bold text-[#022550]">1</span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">JOIN</h3>
<p className="text-lg text-white/70">
              Click the button below, complete your secure checkout in under 2
              minutes. That's it. Instant access.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#011a38] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-[#022550] text-white">
<span className="text-3xl font-bold">2</span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">LEARN</h3>
<p className="text-lg text-white/70">
              Work through the 3 modules at your own pace. Practical,
              jargon-free, and built for busy people.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#011a38] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-[#022550] text-white">
<span className="text-3xl font-bold">3</span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">APPLY</h3>
<p className="text-lg text-white/70">
              Use the tools inside to build your money snapshot, free up
              dollars, and choose your investing path.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#011a38] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-[#022550] text-white">
<span className="text-3xl font-bold">4</span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">GROW</h3>
<p className="text-lg text-white/70">
              Leave with your 12-Month Action Plan and first steps in motion.
              Your financial life starts changing.
            </p>
</div>
</div>

<div className="flex flex-col items-center">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4" href="#checkout">
            GET INSTANT ACCESS. START TODAY
            <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<p className="text-lg font-semibold text-white mb-3">
            Only $49, One Payment. Lifetime Access.
          </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60 font-medium">
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
              Secure Checkout
            </span>
<span className="hidden sm:inline text-white/30">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
              Instant Access
            </span>
<span className="hidden sm:inline text-white/30">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="ban" strokeWidth="1.5"></i>
              No Subscription
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#022550]">
            Common Questions, Answered Honestly
          </h2>
</div>
<div className="space-y-6 mb-24">

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "Is $49 really the full price? What's the catch?"
            </h4>
<p className="text-lg text-[#022550]/80">
              No catch. $49 is the full price during this launch window. You get
              all 3 modules, all 9 lessons, and your 12-month action plan. One
              payment. Lifetime access. The price will increase once this launch
              period closes, but right now, you have access at the introductory
              rate.
            </p>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "I've bought courses before and never finished them. How is this
              different?"
            </h4>
<p className="text-lg text-[#022550]/80">
              Fair question. This course is short by design. There are 9 focused
              lessons, no filler, no fluff. Each lesson ends with a specific
              action step you take that same day. You don't need to block out
              hours. You can move through a lesson on your lunch break. The goal
              isn't to make you a finance expert. It's to get you moving.
            </p>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "I don't have much money to invest. Is this really for me?"
            </h4>
<p className="text-lg text-[#022550]/80">
              Yes and that's exactly who this is built for. Module 2 is entirely
              focused on finding $200–$500 per month inside your current income.
              You don't need a windfall to start. The compounding lesson in
              Module 1 will show you what $100–$200/month becomes over 10 and 20
              years. The numbers speak for themselves.
            </p>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "I know nothing about investing or real estate. Will I be lost?"
            </h4>
<p className="text-lg text-[#022550]/80">
              No background required. We start from zero, genuinely. The course
              is built around the language and situation of someone who's never
              opened an investment account, never bought a property, and never
              had anyone explain this stuff clearly. If you can budget a
              household, you can understand this course.
            </p>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "What if it doesn't work for me?"
            </h4>
<p className="text-lg text-[#022550]/80">
              If you complete the course and feel it wasn't worth your
              investment, contact us within 30 days for a full refund, no
              questions asked. We want this to be a zero-risk decision for you.
            </p>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
<h4 className="text-xl font-semibold text-[#022550] mb-3">
              "How long will I have access?"
            </h4>
<p className="text-lg text-[#022550]/80">
              Lifetime. Once you enrol, the course is yours to keep and revisit
              as your financial situation evolves. As your income grows and
              you're ready for the next step, the material will still be there.
            </p>
</div>
</div>

<div className="bg-white border-2 border-[#022550] rounded-3xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D8B209]/10 rounded-bl-full -z-0"></div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-semibold text-[#022550] mb-6 tracking-tight">
              Here's What You're Getting for $49:
            </h3>
<ul className="text-lg text-[#022550]/80 space-y-3 mb-8 inline-block text-left">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Module 1: See the Big Picture, Money, Time &amp; Passive Income
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Module 2: Create Your First Investable Dollars
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Module 3: Your Beginner Investing &amp; Real Estate Roadmap
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Your personalised 12-Month Action Plan
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Lifetime access, revisit as your situation grows
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#D8B209]" data-lucide="check" strokeWidth="2"></i>
                Beginner-friendly, no finance background needed
              </li>
</ul>
<div className="flex items-center justify-center gap-4 mb-4 text-xl">
<span className="text-gray-400 line-through">
                Regular Price: $999
              </span>
<span className="text-[#D8B209] font-bold text-2xl">TODAY: $49</span>
</div>
<div className="inline-flex items-center gap-2 bg-[#D01237]/10 text-[#D01237] px-4 py-2 rounded-full text-sm font-semibold mb-8">
<i className="w-4 h-4" data-lucide="hourglass" strokeWidth="2"></i>
              Launch pricing ends soon. Lock in your rate now.
            </div>
<div className="flex flex-col items-center">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4" href="#checkout">
                GET INSTANT ACCESS, START TODAY
                <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<p className="text-lg font-semibold text-[#022550] mb-3">
                Only $49, One Payment. Lifetime Access.
              </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-[#022550]/60 font-medium">
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                  Secure Checkout
                </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                  Instant Access
                </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="ban" strokeWidth="1.5"></i>
                  No Subscription
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="checkout">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#022550 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#022550] mb-4">
            You're One Step Away From Your Financial Turning Point
          </h2>
<p className="text-lg text-[#022550]/70 max-w-2xl mx-auto">
            Thousands of people in your exact position—W2 employees,
            side-hustlers, people who've never invested a penny—have started
            building passive income by doing exactly what you're about to do.
          </p>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm mb-8">
<h3 className="text-xl font-semibold text-[#022550] mb-6 pb-4 border-b border-gray-200">
            Your Order Summary
          </h3>
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-lg font-semibold text-[#022550]">
                First Steps to Passive Income: A Beginner's Guide to Investing
                and Real Estate
              </h4>
<p className="text-[#022550]/60 mt-1">
                3 Modules | 9 Lessons | 12-Month Action Plan
              </p>
<p className="text-[#022550]/60 text-sm">
                Lifetime Access | One Payment | Instant Access
              </p>
</div>
<div className="text-right">
<span className="text-gray-400 line-through text-sm block">
                $999.00
              </span>
<span className="text-2xl font-bold text-[#022550]">$49.00</span>
</div>
</div>
<div className="flex justify-between items-center py-4 border-t border-gray-200 mt-6">
<span className="text-xl font-semibold text-[#022550]">
              Total Today
            </span>
<span className="text-3xl font-bold text-[#D8B209]">$49.00</span>
</div>

<button className="w-full mt-8 px-8 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-xl shadow-md hover:bg-[#c4a107] transition-colors flex justify-center items-center gap-2">
            COMPLETE MY ORDER — GET INSTANT ACCESS
            <i className="w-5 h-5" data-lucide="lock" strokeWidth="2"></i>
</button>
<div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#022550]/60 font-medium text-center">
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
              Secure Checkout
            </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
              Instant Access
            </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="infinity" strokeWidth="1.5"></i>
              Lifetime Course Access
            </span>
<span className="hidden sm:inline text-gray-300">|</span>
<span>One Payment of $49</span>
</div>
</div>

<div className="space-y-4 mb-12">
<div className="flex items-start gap-3 bg-[#022550]/5 p-4 rounded-lg">
<i className="w-6 h-6 text-[#022550] shrink-0 mt-0.5" data-lucide="lock-keyhole" strokeWidth="1.5"></i>
<p className="text-sm text-[#022550]/80 leading-relaxed">
              Your payment is 100% secure. All transactions are encrypted. You
              will receive instant access to the full course immediately after
              purchase.
            </p>
</div>
<div className="flex items-start gap-3 bg-[#022550]/5 p-4 rounded-lg">
<i className="w-6 h-6 text-[#022550] shrink-0 mt-0.5" data-lucide="mail" strokeWidth="1.5"></i>
<p className="text-sm text-[#022550]/80 leading-relaxed">
              A confirmation email will be sent to you within minutes. If you
              have any issues accessing the course, contact us directly and we
              will resolve it the same day.
            </p>
</div>
</div>

<div className="text-center">
<p className="text-lg text-[#022550]/80 mb-4 max-w-2xl mx-auto">
            You don't need a finance degree. You don't need a large sum of
            money. You just need a clear plan and the willingness to start.
          </p>
<div className="inline-block text-left bg-white border border-gray-100 shadow-sm p-6 rounded-xl max-w-xl mx-auto mt-6">
<h5 className="font-semibold text-[#022550] mb-2">
              Still on the fence?
            </h5>
<p className="text-[#022550]/70 text-base mb-4">
              Ask yourself this: if you don't make a change today, what changes?
              Another year goes by. Same income. Same uncertainty about the
              future. For the cost of a dinner out, you can start the process of
              building something that actually grows over time.
            </p>
<p className="font-medium text-[#022550] italic">
              The best time to start was ten years ago. The second best time is
              right now.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#022550] text-white/50 py-8 text-center text-sm border-t border-white/10">
<p>© 2024 First Steps to Passive Income. All rights reserved.</p>
</footer>


    </>
  );
}
