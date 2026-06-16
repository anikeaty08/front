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



        // Simple Router
        function navigateTo(targetId) {
            // Update URL hash without jumping
            history.pushState(null, null, '#' + targetId);
            
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.classList.add('active');
            } else {
                // Fallback to home if invalid hash
                document.getElementById('home').classList.add('active');
            }

            // Update Nav active states
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.getAttribute('data-target') === targetId) {
                    link.classList.add('text-slate-900');
                    link.classList.remove('text-slate-500');
                } else {
                    link.classList.remove('text-slate-900');
                    link.classList.add('text-slate-500');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }

        // Handle initial load and back/forward buttons
        function handleRouting() {
            let hash = window.location.hash.substring(1);
            if(!hash) hash = 'home';
            navigateTo(hash);
        }

        window.addEventListener('hashchange', handleRouting);
        window.addEventListener('load', handleRouting);

        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Add blur to header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="nav-link font-medium tracking-tighter text-lg text-slate-950 uppercase flex items-center gap-2" data-target="home" href="#home">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="24"></iconify-icon>
                Boats on Finance
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="finance" href="#finance">Boat Finance</a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="how-it-works" href="#how-it-works">How It Works</a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="boat-types" href="#boat-types">Boat Types</a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="about" href="#about">About</a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="faqs" href="#faqs">FAQs</a>
</nav>
<div className="hidden md:block">
<button className="bg-slate-900 text-white text-sm font-medium py-2.5 px-5 rounded-full hover:bg-slate-800 transition-all shadow-sm" onclick="navigateTo('contact')">
                    Get a Quote
                </button>
</div>

<button className="md:hidden text-slate-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200 px-6 py-4 flex-col gap-4" id="mobile-menu">
<a className="nav-link block text-sm font-medium text-slate-600" data-target="finance" href="#finance">Boat Finance</a>
<a className="nav-link block text-sm font-medium text-slate-600" data-target="how-it-works" href="#how-it-works">How It Works</a>
<a className="nav-link block text-sm font-medium text-slate-600" data-target="boat-types" href="#boat-types">Boat Types</a>
<a className="nav-link block text-sm font-medium text-slate-600" data-target="about" href="#about">About</a>
<a className="nav-link block text-sm font-medium text-slate-600" data-target="faqs" href="#faqs">FAQs</a>
<button className="w-full mt-4 bg-slate-900 text-white text-sm font-medium py-3 rounded-xl" onclick="navigateTo('contact')">Get a Quote</button>
</div>
</header>

<main className="flex-grow pt-20">

<section className="page-section active" id="home">

<div className="relative overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-8 border border-slate-200/60">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                            Specialist marine finance
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-950 leading-tight mb-6">
                            Finance your next boat with confidence.
                        </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-normal">
                            Whether you’re buying your first boat, upgrading to something bigger, or exploring finance before making an offer, Boats on Finance helps you understand your options and move forward with clarity.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 text-white text-sm font-medium py-3.5 px-6 rounded-full hover:bg-slate-800 transition-all shadow-sm text-center" onclick="navigateTo('contact')">
                                Get a Finance Quote
                            </button>
<button className="bg-white text-slate-900 border border-slate-200 text-sm font-medium py-3.5 px-6 rounded-full hover:bg-slate-50 transition-all text-center" onclick="navigateTo('how-it-works')">
                                How It Works
                            </button>
</div>
<div className="mt-10 flex items-center gap-6 text-xs text-slate-500 font-medium">
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Flexible options</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Simple process</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Clear guidance</div>
</div>
</div>
<div className="relative hidden lg:block h-[600px] w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
<img alt="Luxury yacht on the water" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>
</div>

<div className="bg-slate-50 py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl tracking-tight font-semibold text-slate-950 mb-6">Finance built around your boat purchase</h2>
<p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mb-16">
                        Boat finance is not one-size-fits-all. The right structure depends on what you’re buying, how much you want to borrow, your deposit, and whether the boat is new, used, private sale or dealer supplied. We help simplify the options so you can move forward with a clearer view of what may work for you.
                    </p>
</div>

<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer group" onclick="navigateTo('boat-types')">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Motorboats &amp; RIBs</h3>
<p className="text-sm text-slate-500">Flexible options for leisure, family use and performance vessels.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer group" onclick="navigateTo('boat-types')">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:sailing-boat-water-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Yachts &amp; Sailing</h3>
<p className="text-sm text-slate-500">Structured finance for higher-value vessels and extended cruising.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer group" onclick="navigateTo('finance')">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">New &amp; Used</h3>
<p className="text-sm text-slate-500">Support whether purchasing brand new or from the brokerage market.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer group" onclick="navigateTo('finance')">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Dealer or Private</h3>
<p className="text-sm text-slate-500">Guidance for purchasing through recognized dealers or private sellers.</p>
</div>
</div>
</div>

<div className="bg-white py-24 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl tracking-tight font-semibold text-slate-950 mb-4">A simpler way to arrange finance</h2>
<p className="text-base text-slate-500">We keep the process clear from the start, helping you understand what information is needed and what happens after you enquire.</p>
</div>
<button className="text-sm font-medium text-slate-900 flex items-center gap-2 hover:text-blue-600 transition-colors" onclick="navigateTo('how-it-works')">
                            View full process <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-slate-100 z-0"></div>

<div className="relative z-10 bg-white pt-8">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium mb-6">1</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Tell us about the boat</h4>
<p className="text-sm text-slate-500 leading-relaxed">Share the vessel type, price, deposit and where you are in the purchase stage.</p>
</div>

<div className="relative z-10 bg-white pt-8">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center text-xs font-medium mb-6">2</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">We review your options</h4>
<p className="text-sm text-slate-500 leading-relaxed">Your enquiry is assessed by specialists to understand what finance routes may be suitable.</p>
</div>

<div className="relative z-10 bg-white pt-8">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center text-xs font-medium mb-6">3</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Move forward</h4>
<p className="text-sm text-slate-500 leading-relaxed">Receive clear guidance, identify the right option, and progress your purchase with confidence.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-950 py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-6">Thinking about buying a boat?<br/><span className="text-slate-400">Start with the finance.</span></h2>
<p className="text-base text-slate-400 mb-10 max-w-xl mx-auto">
                        Before making an offer or visiting a dealer, it helps to understand what finance could look like. Submit a short enquiry and we’ll help you take the next step.
                    </p>
<button className="bg-white text-slate-900 text-sm font-medium py-3.5 px-8 rounded-full hover:bg-slate-100 transition-all shadow-sm" onclick="navigateTo('contact')">
                        Get a Boat Finance Quote
                    </button>
</div>
</div>
</section>

<section className="page-section" id="finance">
<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-950 mb-6">Boat Finance Explained</h1>
<p className="text-lg text-slate-500">
                        Boat finance helps spread the cost of purchasing a boat, making it easier to buy the vessel you want without paying the full amount upfront. The right option depends on your budget, deposit, boat type and purchase plans.
                    </p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-20">
<div className="prose prose-slate max-w-none">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">What Is Boat Finance?</h2>
<p className="text-slate-600 text-sm leading-relaxed mb-12">
                        Similar to financing a car, marine finance allows you to borrow the funds required to purchase a vessel, repaying the amount over an agreed term with interest. However, boats are specialized assets, and lenders assess them differently based on their age, type, registration, and intended use.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">How Much Can I Borrow?</h2>
<p className="text-slate-600 text-sm leading-relaxed mb-12">
                        Borrowing amounts depend on your personal affordability, credit profile, the deposit available, and the value of the vessel. While we don't guarantee exact outcomes before an assessment, we help structure your enquiry to present the most viable options based on lender criteria.
                    </p>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h3 className="text-base font-semibold text-slate-900 mb-2">New vs Used Boats</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                                Both new and used boats can be financed. New boats often benefit from predictable valuations. Used boats may require surveys depending on their age and value, and lenders will look closely at the vessel's condition and title history.
                            </p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h3 className="text-base font-semibold text-slate-900 mb-2">Dealer vs Private Sale</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                                Purchasing through a reputable marine broker or dealer is usually the most straightforward route for finance. Private sales are possible but often involve stricter underwriting, proof of title, and independent surveys to satisfy the lender.
                            </p>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">What Information Do You Need?</h2>
<p className="text-slate-600 text-sm leading-relaxed mb-6">To help us understand your options, a basic enquiry usually requires:</p>
<ul className="space-y-3 text-sm text-slate-600 mb-12 pl-4">
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Boat type, make and model</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Anticipated purchase price</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Available deposit amount</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Whether the boat is new or used</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Purchasing from a dealer or private seller</li>
</ul>
<div className="text-center mt-16">
<button className="bg-slate-900 text-white text-sm font-medium py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all shadow-sm" onclick="navigateTo('contact')">
                            Check Your Boat Finance Options
                        </button>
</div>
</div>
</div>
</section>

<section className="page-section" id="how-it-works">
<div className="bg-slate-50 py-20 border-b border-slate-200/60">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-950 mb-6">A simpler way to arrange boat finance</h1>
<p className="text-lg text-slate-500">
                        We keep the process clear from the start, helping you understand what information is needed and what happens after you enquire.
                    </p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-24">
<div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-medium text-sm">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<h3 className="font-semibold text-slate-900 mb-2">Step 1: Submit Your Enquiry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complete our short online form. Tell us about the boat you’re looking to buy, the anticipated price, your deposit, and your buying timeframe.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-medium text-sm">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<h3 className="font-semibold text-slate-900 mb-2">Step 2: We Review the Details</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our specialists review your enquiry to understand your purchase. We assess the vessel type and your requirements to identify suitable finance routes.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-medium text-sm">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<h3 className="font-semibold text-slate-900 mb-2">Step 3: Finance Options Are Discussed</h3>
<p className="text-sm text-slate-500 leading-relaxed">We get in touch to explain your options clearly, without confusing jargon. We answer your questions and outline what terms might look like.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-medium text-sm">4</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<h3 className="font-semibold text-slate-900 mb-2">Step 4: Progress Your Purchase</h3>
<p className="text-sm text-slate-500 leading-relaxed">Once you are comfortable and ready to proceed, we facilitate the formal application, working towards approval so you can purchase your boat.</p>
</div>
</div>
</div>
<div className="text-center mt-20">
<button className="bg-slate-900 text-white text-sm font-medium py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all shadow-sm" onclick="navigateTo('contact')">
                        Start Your Enquiry
                    </button>
</div>
</div>
</section>

<section className="page-section" id="boat-types">
<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-950 mb-6">Finance options for different types of boats</h1>
<p className="text-lg text-slate-500">
                        From RIBs and motorboats to yachts and narrowboats, different vessels can require different finance considerations.
                    </p>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-20 space-y-8">

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
<img alt="RIB boat on water" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">RIB Finance</h2>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Ideal for leisure buyers, family use, coastal trips and performance boating. Rigid Inflatable Boats (RIBs) are highly popular and often straightforward to finance, especially when new or nearly new.</p>
<div className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-wider">Consideration: Trailer finance can sometimes be included.</div>
<button className="text-sm font-medium text-slate-900 border border-slate-200 py-2 px-5 rounded-full hover:bg-slate-50 transition-colors" onclick="navigateTo('contact')">Enquire about RIBs</button>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
<img alt="Motorboat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Motorboat Finance</h2>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">For users purchasing sports boats, day cruisers, or larger motor yachts. Finance terms can vary widely depending on the size, value, and whether it's a trailerable day boat or a permanently moored cruiser.</p>
<div className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-wider">Consideration: Mooring details may be required for larger vessels.</div>
<button className="text-sm font-medium text-slate-900 border border-slate-200 py-2 px-5 rounded-full hover:bg-slate-50 transition-colors" onclick="navigateTo('contact')">Enquire about Motorboats</button>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
<img alt="Luxury Yacht" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Yacht Finance</h2>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">For higher-value vessels and more complex purchase journeys. Yacht finance often requires structured underwriting, marine mortgages, and thorough checks on surveys and registration (e.g., Part 1 Registry).</p>
<div className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-wider">Consideration: Surveys are almost always mandatory.</div>
<button className="text-sm font-medium text-slate-900 border border-slate-200 py-2 px-5 rounded-full hover:bg-slate-50 transition-colors" onclick="navigateTo('contact')">Enquire about Yachts</button>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
<img alt="Sailing Boat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Sailing Boat Finance</h2>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Supporting buyers looking at new or used sailing vessels, from dinghies to blue-water cruisers. The age of the vessel can impact the maximum term a lender is willing to offer.</p>
<button className="text-sm font-medium text-slate-900 border border-slate-200 py-2 px-5 rounded-full hover:bg-slate-50 transition-colors" onclick="navigateTo('contact')">Enquire about Sailing Boats</button>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
<img alt="Narrowboat" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Narrowboat Finance</h2>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">For lifestyle, leisure or liveaboard purchases on the inland waterways. Lenders may have specific requirements regarding hull surveys and whether the vessel is a primary residence.</p>
<button className="text-sm font-medium text-slate-900 border border-slate-200 py-2 px-5 rounded-full hover:bg-slate-50 transition-colors" onclick="navigateTo('contact')">Enquire about Narrowboats</button>
</div>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="bg-slate-900 text-white py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold mb-6">Specialist support for boat buyers</h1>
<p className="text-lg text-slate-400">
                        We believe that buying a boat should be an exciting milestone, not weighed down by confusing finance processes.
                    </p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20">
<div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-8">
<p>
                        Boats on Finance was created to make marine finance easier to understand. Buying a boat is a significant decision, and the finance process should feel clear, structured and supportive from the start.
                    </p>
<p>
                        Rather than sending buyers through a generic loan journey, Boats on Finance focuses specifically on the marine market. We understand that financing a 10-year-old sailing yacht is fundamentally different from financing a brand-new RIB, and we treat every enquiry with that nuance.
                    </p>
<div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Our Approach</h3>
<p className="text-sm text-slate-500">We prioritize transparency. We won't promise guaranteed approvals or instantaneous unrealistic rates. Instead, we provide honest assessments based on your specific vessel and circumstances.</p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Who We Help</h3>
<p className="text-sm text-slate-500">From first-time buyers navigating the water for the first time, to experienced owners upgrading to their dream yacht. We work with private individuals and corporate entities.</p>
</div>
</div>
<p>
                        Our goal is simple: to help customers explore suitable options based on the boat they want to buy, providing a premium, knowledgeable service that instills confidence.
                    </p>
<div className="mt-16 text-center not-prose border-t border-slate-100 pt-16">
<button className="bg-slate-900 text-white text-sm font-medium py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all shadow-sm" onclick="navigateTo('contact')">
                            Speak to a Boat Finance Specialist
                        </button>
</div>
</div>
</div>
</section>

<section className="page-section" id="faqs">
<div className="bg-slate-50 py-20 border-b border-slate-200/60">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-950 mb-6">Frequently Asked Questions</h1>
<p className="text-lg text-slate-500">Clear answers to help you understand how boat finance works.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-20">
<div className="space-y-4">

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>Can I finance a used boat?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            Yes, used boat finance may be available depending on the age, value, condition and lender criteria. Older vessels may require a marine survey before finance can be approved.
                        </div>
</details>

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>How much deposit do I need?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            Deposit requirements vary depending on the boat, purchase price, finance type and your circumstances. Typically, lenders look for a deposit of between 10% and 30%, though this can fluctuate.
                        </div>
</details>

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>Can I get finance before choosing a boat?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            You may be able to explore your likely options and gain an agreement in principle before committing to a specific boat. This can help with budgeting and give you confidence when negotiating.
                        </div>
</details>

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>Can I finance a boat from a private seller?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            Potentially, but the process may differ from buying through a dealer. Lenders will require stricter proof of title, ownership history, and often independent surveys to mitigate risk.
                        </div>
</details>

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>How long does boat finance take?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            Timescales vary depending on the complexity of the purchase and the information required. Simple leisure boat purchases from a dealer can be quick, while larger yachts requiring surveys and registry changes take longer.
                        </div>
</details>

<details className="bg-white border border-slate-200/60 rounded-2xl group overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-slate-900">
<span>Does enquiring guarantee approval?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm p-6 pt-0 leading-relaxed">
                            No. An enquiry helps start the process to understand your options, but any formal finance offer is always subject to comprehensive checks, affordability assessments, lender criteria and final approval.
                        </div>
</details>
</div>
<div className="mt-16 text-center">
<p className="text-sm text-slate-500 mb-6">Still have questions?</p>
<button className="bg-white text-slate-900 border border-slate-200 text-sm font-medium py-3 px-6 rounded-full hover:bg-slate-50 transition-all shadow-sm" onclick="navigateTo('contact')">
                        Ask About Your Finance Options
                    </button>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-950 mb-6">Get a boat finance quote</h1>
<p className="text-lg text-slate-500">
                        Tell us a little about the boat you’re looking to buy and we’ll help you understand the next step.
                    </p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20">
<div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<form className="space-y-8" onsubmit="event.preventDefault(); alert('Enquiry submitted (simulation).');">

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Your Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="07123 456789" required="" type="tel"/>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Boat Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Boat Type / Make / Model</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g. Princess V40 or RIB" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Condition</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none text-slate-700">
<option disabled="" selected="" value="">Select condition</option>
<option value="new">New</option>
<option value="used">Used</option>
<option value="undecided">Undecided</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Anticipated Purchase Price (£)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="50000" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Available Deposit (£)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="10000" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Seller Type</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none text-slate-700">
<option disabled="" selected="" value="">Select seller type</option>
<option value="dealer">Marine Dealer / Broker</option>
<option value="private">Private Seller</option>
<option value="undecided">Undecided</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Buying Timeframe</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none text-slate-700">
<option disabled="" selected="" value="">When are you buying?</option>
<option value="asap">ASAP</option>
<option value="1-3">1-3 Months</option>
<option value="3-6">3-6 Months</option>
<option value="research">Just researching</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-2">Any additional information or questions?</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell us more about what you need..." rows="4"></textarea>
</div>
</div>
</div>

<div className="pt-4 border-t border-slate-100">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="custom-checkbox mt-0.5" required="" type="checkbox"/>
<span className="text-xs text-slate-500 leading-relaxed select-none">
                                    I consent to Boats on Finance contacting me regarding this enquiry. I understand my details will only be used to respond to this request.
                                </span>
</label>
</div>

<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="text-xs text-slate-400 flex-1">
<iconify-icon className="inline-block align-text-bottom mr-1" icon="solar:lock-keyhole-linear"></iconify-icon>
                                Your information is secure. Finance is subject to status, affordability and lender criteria.
                            </p>
<button className="w-full sm:w-auto bg-slate-900 text-white text-sm font-medium py-3.5 px-8 rounded-xl hover:bg-slate-800 transition-all shadow-sm shrink-0" type="submit">
                                Submit Enquiry
                            </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-medium tracking-tighter text-lg text-white uppercase flex items-center gap-2 mb-4" href="#home" onclick="navigateTo('home')">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        Boats on Finance
                    </a>
<p className="text-slate-400 text-sm leading-relaxed">
                        Boats on Finance helps buyers explore specialist finance options for boats, ribs, yachts and marine purchases. We make the process clearer, simpler and easier to start.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Navigation</h4>
<ul className="space-y-3">
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('finance')">Boat Finance</button></li>
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('how-it-works')">How It Works</button></li>
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('boat-types')">Boat Types</button></li>
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('about')">About</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Support</h4>
<ul className="space-y-3">
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('faqs')">FAQs</button></li>
<li><button className="text-slate-400 hover:text-white text-sm transition-colors" onclick="navigateTo('contact')">Contact</button></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@boatsonfinance.co.uk</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 0800 123 4567</li>
<li className="mt-4 pt-4 border-t border-slate-800">
<button className="text-white font-medium hover:text-slate-300 transition-colors flex items-center gap-1" onclick="navigateTo('contact')">
                                Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<p className="text-xs text-slate-500 max-w-3xl leading-relaxed">
<strong>Disclaimer:</strong> Finance is subject to status, affordability and lender criteria. Terms may vary depending on personal circumstances and the vessel being purchased. This website provides general information and does not constitute financial advice unless authorised to do so. Boats on Finance is a trading style.
                </p>
<p className="text-xs text-slate-500 shrink-0">
                    © 2023 Boats on Finance. All rights reserved.
                </p>
</div>
</div>
</footer>



    </>
  );
}
