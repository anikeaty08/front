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
      

<header className="fixed w-full top-0 z-50 bg-[#F7F8FA]/90 backdrop-blur-md border-b border-[#C7CED8]/40 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="flex items-center" href="#">
<div className="flex items-center gap-4 select-none">
<span className="text-[2.5rem] leading-none font-serif font-bold tracking-tight text-[#0B1423]">
              BDS
            </span>
<span className="w-[1.5px] h-8 bg-[#C7CED8]"></span>
<span className="text-lg font-serif tracking-[0.45em] text-[#0B1423] pt-1">
              CAPITAL
            </span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#1E2430] hover:text-[#234A84] transition-colors" href="#">
            Home
          </a>

<div className="relative dropdown h-20 flex items-center">
<a className="text-sm font-medium text-[#5E6B7D] hover:text-[#1E2430] transition-colors flex items-center gap-1" href="#">
              Specializations
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="absolute top-[80px] left-0 w-64 bg-white border border-[#C7CED8]/40 shadow-xl dropdown-menu py-3 rounded-b-sm">
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Commercial Banking
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Investment Banking
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Wealth Management
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Capital Markets
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Private Markets
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Insurance
              </a>
</div>
</div>

<div className="relative dropdown h-20 flex items-center">
<a className="text-sm font-medium text-[#5E6B7D] hover:text-[#1E2430] transition-colors flex items-center gap-1" href="#">
              Clients
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="absolute top-[80px] left-0 w-56 bg-white border border-[#C7CED8]/40 shadow-xl dropdown-menu py-3 rounded-b-sm">
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Hiring Solutions
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Search Process
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Market Intelligence
              </a>
</div>
</div>

<div className="relative dropdown h-20 flex items-center">
<a className="text-sm font-medium text-[#5E6B7D] hover:text-[#1E2430] transition-colors flex items-center gap-1" href="#">
              Candidates
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="absolute top-[80px] left-0 w-56 bg-white border border-[#C7CED8]/40 shadow-xl dropdown-menu py-3 rounded-b-sm">
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Open Opportunities
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Submit Resume
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Candidate Advisory
              </a>
</div>
</div>

<div className="relative dropdown h-20 flex items-center">
<a className="text-sm font-medium text-[#5E6B7D] hover:text-[#1E2430] transition-colors flex items-center gap-1" href="#">
              About
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="absolute top-[80px] left-0 w-48 bg-white border border-[#C7CED8]/40 shadow-xl dropdown-menu py-3 rounded-b-sm">
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Our Firm
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Leadership
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Approach
              </a>
</div>
</div>

<div className="relative dropdown h-20 flex items-center">
<a className="text-sm font-medium text-[#5E6B7D] hover:text-[#1E2430] transition-colors flex items-center gap-1" href="#">
              Insights
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="absolute top-[80px] left-0 w-72 bg-white border border-[#C7CED8]/40 shadow-xl dropdown-menu py-3 rounded-b-sm">
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Commercial Banking Insights
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Investment Banking Insights
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Hiring Trends
              </a>
<a className="block px-6 py-2 text-sm text-[#5E6B7D] hover:text-[#234A84] hover:bg-[#F7F8FA] transition-colors" href="#">
                Market Commentary
              </a>
</div>
</div>
</nav>

<div className="hidden lg:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0B1423] text-[#F7F8FA] text-sm font-medium hover:bg-[#234A84] transition-colors duration-300" href="#">
            Connect With Us
          </a>
</div>

<button className="lg:hidden text-[#1E2430]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0B1423]">

<div className="absolute inset-0 z-0">
<img alt="Financial District Architecture" className="w-full h-full object-cover object-center opacity-60" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
<div className="max-w-3xl">
<p className="text-xs font-medium tracking-widest text-[#C7CED8] uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#C7CED8]/60"></span>
            Strategic Financial Talent
          </p>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F7F8FA] tracking-tight leading-[1.1] mb-8">
            Strategic Talent for Financial Institutions
          </h1>
<p className="text-base lg:text-lg text-[#C7CED8] leading-relaxed mb-10 max-w-2xl font-light">
            BDS Capital partners with banks, investment firms, and financial
            organizations to identify and secure high-impact talent across
            commercial banking, capital markets, wealth management, and
            institutional finance.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-[#234A84] text-[#F7F8FA] text-sm font-medium hover:bg-[#F7F8FA] hover:text-[#0B1423] transition-colors duration-300 border border-[#234A84] hover:border-[#F7F8FA]" href="#">
              Connect With Us
            </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#C7CED8]/40 text-[#F7F8FA] text-sm font-medium hover:bg-[#F7F8FA]/10 transition-colors duration-300" href="#">
              Explore Specializations
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#C7CED8]/30 pb-8">
<div className="max-w-2xl">
<p className="text-xs font-medium tracking-widest text-[#5E6B7D] uppercase mb-4">
              Market Coverage
            </p>
<h2 className="text-3xl lg:text-4xl font-medium text-[#1E2430] tracking-tight">
              Focused Expertise Across Financial Markets
            </h2>
</div>
<div className="max-w-md">
<p className="text-sm text-[#5E6B7D] leading-relaxed">
              BDS Capital supports financial institutions across banking,
              capital markets, investment advisory, and insurance through
              targeted executive search and specialized recruiting solutions.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:bank-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Commercial Banking
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Relationship-driven talent solutions across commercial lending,
              treasury, credit, and middle market banking.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Investment Banking
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Search execution for associates, VPs, directors, and managing
              directors across advisory and capital markets.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:safe-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Wealth Management
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Strategic recruiting for RIAs, private banking teams, and
              high-performing financial advisors.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Capital Markets
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Institutional talent across trading, research, structured
              products, and market coverage functions.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Private Markets
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Search support for private equity, private credit, alternatives,
              and portfolio operations.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>

<div className="group cursor-pointer">
<div className="mb-6 text-[#234A84]">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Insurance
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed mb-6">
              Talent solutions across underwriting, brokerage, claims, and
              commercial risk leadership.
            </p>
<div className="w-full h-[1px] bg-[#C7CED8]/40 group-hover:bg-[#234A84] transition-colors duration-300"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-0 bg-[#F7F8FA]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 px-6 lg:px-12 py-12 lg:py-32 order-2 lg:order-1">
<p className="text-xs font-medium tracking-widest text-[#5E6B7D] uppercase mb-4">
            Commercial Banking
          </p>
<h2 className="text-3xl lg:text-4xl font-medium text-[#1E2430] tracking-tight mb-6">
            Specialized Search for Commercial &amp; Middle Market Banking
          </h2>
<p className="text-base text-[#5E6B7D] leading-relaxed mb-10 font-light">
            BDS Capital works closely with regional and middle market financial
            institutions to identify high-impact talent across commercial
            lending, treasury management, credit, and relationship banking.
          </p>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-sm text-[#1E2430] font-medium">
<iconify-icon className="text-[#234A84] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Commercial Lending
            </li>
<li className="flex items-center gap-3 text-sm text-[#1E2430] font-medium">
<iconify-icon className="text-[#234A84] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Treasury Management
            </li>
<li className="flex items-center gap-3 text-sm text-[#1E2430] font-medium">
<iconify-icon className="text-[#234A84] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Credit &amp; Risk
            </li>
<li className="flex items-center gap-3 text-sm text-[#1E2430] font-medium">
<iconify-icon className="text-[#234A84] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Portfolio Management
            </li>
<li className="flex items-center gap-3 text-sm text-[#1E2430] font-medium">
<iconify-icon className="text-[#234A84] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Relationship Banking
            </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#234A84] hover:text-[#0B1423] transition-colors group" href="#">
            Explore Commercial Banking
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="w-full lg:w-1/2 h-[50vh] lg:h-[800px] order-1 lg:order-2">
<img alt="Premium Commercial Banking Environment" className="w-full h-full object-cover grayscale-[20%] contrast-125" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1E2430] text-[#F7F8FA]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="max-w-3xl mb-16 md:mb-24">
<p className="text-xs font-medium tracking-widest text-[#C7CED8] uppercase mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#C7CED8]/40"></span>
            Why BDS Capital
          </p>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-6">
            Institutional Search.
            <br/>
            Relationship-Driven Execution.
          </h2>
<p className="text-base text-[#C7CED8] leading-relaxed max-w-2xl font-light">
            We combine targeted market expertise with relationship-based
            recruiting to deliver talent solutions aligned with the long-term
            objectives of financial institutions and advisory firms.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 lg:divide-x divide-[#5E6B7D]/30 border-t border-[#5E6B7D]/30 pt-12">
<div className="lg:pr-8">
<span className="block text-[#C7CED8] mb-4 text-sm font-light">01</span>
<h3 className="text-lg font-medium mb-3 tracking-tight text-white">
              Market Understanding
            </h3>
<p className="text-sm text-[#C7CED8] leading-relaxed font-light">
              Deep familiarity with the structure, compensation, and hiring
              dynamics across financial services.
            </p>
</div>
<div className="lg:px-8">
<span className="block text-[#C7CED8] mb-4 text-sm font-light">02</span>
<h3 className="text-lg font-medium mb-3 tracking-tight text-white">
              Precision Search
            </h3>
<p className="text-sm text-[#C7CED8] leading-relaxed font-light">
              Focused search execution built around quality, alignment, and
              long-term fit.
            </p>
</div>
<div className="lg:px-8">
<span className="block text-[#C7CED8] mb-4 text-sm font-light">03</span>
<h3 className="text-lg font-medium mb-3 tracking-tight text-white">
              Relationship Network
            </h3>
<p className="text-sm text-[#C7CED8] leading-relaxed font-light">
              Access to high-performing professionals across banking,
              investment, and institutional finance.
            </p>
</div>
<div className="lg:pl-8">
<span className="block text-[#C7CED8] mb-4 text-sm font-light">04</span>
<h3 className="text-lg font-medium mb-3 tracking-tight text-white">
              Strategic Partnership
            </h3>
<p className="text-sm text-[#C7CED8] leading-relaxed font-light">
              A consultative approach designed to support long-term hiring and
              growth objectives.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 md:mb-20">
<p className="text-xs font-medium tracking-widest text-[#5E6B7D] uppercase mb-4">
            Featured Markets
          </p>
<h2 className="text-3xl lg:text-4xl font-medium text-[#1E2430] tracking-tight">
            Coverage Across Banking, Advisory &amp; Capital Markets
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-6 relative bg-[#1E2430]">
<img alt="Commercial Banking Architecture" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Commercial Banking
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed">
              Middle market banking, commercial lending, treasury, credit, and
              regional leadership talent.
            </p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-6 relative bg-[#1E2430]">
<img alt="Investment Banking District" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Investment Banking
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed">
              Advisory and capital markets talent from associate through
              managing director level.
            </p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-6 relative bg-[#1E2430]">
<img alt="Wealth Management Advisory" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out grayscale-[30%]" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-[#1E2430] mb-3 tracking-tight group-hover:text-[#234A84] transition-colors">
              Wealth Management
            </h3>
<p className="text-sm text-[#5E6B7D] leading-relaxed">
              Recruiting solutions for RIAs, private banking groups, and advisor
              growth initiatives.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F7F8FA] border-t border-[#C7CED8]/40">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="lg:w-1/3 shrink-0">
<p className="text-xs font-medium tracking-widest text-[#5E6B7D] uppercase mb-4">
            Market Insights
          </p>
<h2 className="text-3xl lg:text-4xl font-medium text-[#1E2430] tracking-tight mb-8">
            Insights Across Financial Hiring &amp; Market Trends
          </h2>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-[#1E2430] text-[#1E2430] text-sm font-medium hover:bg-[#1E2430] hover:text-white transition-colors duration-300" href="#">
            View All Insights
          </a>
</div>

<div className="lg:w-2/3 flex flex-col">

<a className="group block border-t border-[#C7CED8]/60 py-8 first:border-t-0 first:pt-0" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
<span className="text-xs text-[#5E6B7D] font-medium shrink-0 w-32">
                Nov 14, 2024
              </span>
<div>
<h3 className="text-xl font-medium text-[#1E2430] tracking-tight mb-2 group-hover:text-[#234A84] transition-colors">
                  Commercial Banking Hiring Trends in 2026
                </h3>
<p className="text-sm text-[#5E6B7D] line-clamp-2 font-light">
                  An analysis of talent demands across regional middle-market
                  institutions and evolving compensation structures in
                  commercial lending.
                </p>
</div>
</div>
</a>

<a className="group block border-t border-[#C7CED8]/60 py-8" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
<span className="text-xs text-[#5E6B7D] font-medium shrink-0 w-32">
                Oct 28, 2024
              </span>
<div>
<h3 className="text-xl font-medium text-[#1E2430] tracking-tight mb-2 group-hover:text-[#234A84] transition-colors">
                  The Evolving Market for Investment Banking Associates
                </h3>
<p className="text-sm text-[#5E6B7D] line-clamp-2 font-light">
                  How boutique advisory firms are competing with bulge bracket
                  banks for top-tier associate and VP level talent in a shifting
                  economic landscape.
                </p>
</div>
</div>
</a>

<a className="group block border-t border-[#C7CED8]/60 py-8" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
<span className="text-xs text-[#5E6B7D] font-medium shrink-0 w-32">
                Oct 05, 2024
              </span>
<div>
<h3 className="text-xl font-medium text-[#1E2430] tracking-tight mb-2 group-hover:text-[#234A84] transition-colors">
                  Talent Movement Across Regional Financial Institutions
                </h3>
<p className="text-sm text-[#5E6B7D] line-clamp-2 font-light">
                  Examining the migration of executive leadership from tier-one
                  national banks to agile regional players seeking market
                  expansion.
                </p>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-32 lg:py-48 overflow-hidden bg-[#0B1423] text-center">

<div className="absolute inset-0 z-0">
<img alt="Night Skyline Architecture" className="w-full h-full object-cover object-center opacity-20 grayscale" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 cta-gradient"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
          Building High-Performing Financial Teams Starts With the Right
          Relationships
        </h2>
<p className="text-base lg:text-lg text-[#C7CED8] mb-12 max-w-2xl mx-auto font-light">
          Connect with BDS Capital to discuss strategic hiring initiatives
          across banking, capital markets, wealth management, and institutional
          finance.
        </p>
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0B1423] text-sm font-medium hover:bg-[#C7CED8] transition-colors duration-300" href="#">
          Connect With Us
        </a>
</div>
</section>

<footer className="bg-[#0B1423] border-t border-white/10 pt-16 pb-8 text-[#C7CED8]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<div className="flex items-center gap-3 select-none mb-6">
<span className="text-[2rem] leading-none font-serif font-bold tracking-tight text-white">
                BDS
              </span>
<span className="w-[1px] h-6 bg-white/30"></span>
<span className="text-sm font-serif tracking-[0.45em] text-white pt-1">
                CAPITAL
              </span>
</div>
<p className="text-xs text-[#5E6B7D] font-light leading-relaxed max-w-xs">
              Institutional executive search and strategic talent advisory for
              the financial services sector.
            </p>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-white uppercase mb-6">
              Expertise
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Commercial Banking
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Investment Banking
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Wealth Management
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Capital Markets
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-white uppercase mb-6">
              Firm
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Our Approach
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Market Insights
                </a>
</li>
<li>
<a className="text-sm font-light hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-white uppercase mb-6">
              Contact
            </h4>
<ul className="space-y-3 text-sm font-light">
<li>New York, NY</li>
<li>
<a className="hover:text-white transition-colors" href="mailto:contact@bdscapital.com">
                  contact@bdscapital.com
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#5E6B7D]">
            © 2024 BDS Capital. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-[#5E6B7D] hover:text-white transition-colors text-xs" href="#">
              Privacy Policy
            </a>
<a className="text-[#5E6B7D] hover:text-white transition-colors text-xs" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
