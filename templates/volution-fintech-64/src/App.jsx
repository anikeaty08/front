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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Volution" className="h-16 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccd33a44-2496-4df7-a06e-27eed76e1627_320w.jpg"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            ABOUT
          </a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            PORTFOLIO
          </a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            TEAM
          </a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            NEWS
          </a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            CONTACT
          </a>
</nav>
<div className="hidden md:flex items-center">
<a className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<span className="text-sm font-medium">Follow Us</span>
<div className="flex items-center justify-center w-5 h-5 rounded bg-[#0A66C2] text-white font-bold text-xs pb-[1px]">
              in
            </div>
</a>
</div>
<button className="md:hidden text-zinc-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch min-h-[600px] rounded-[2.5rem] bg-white shadow-sm ring-1 ring-zinc-200/50 p-4 lg:p-6">
<div className="bg-emerald-600 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden rounded-[2rem]">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
<div className="relative z-10 space-y-8 max-w-xl">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                Volution doubles down on booming UK fintech with new $100M fund
              </h1>
<p className="text-lg text-emerald-50 font-medium">
                Mike Butcher, TechCrunch, April 28, 2025
              </p>
<div>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition-all bg-blue-800 hover:bg-blue-900" href="#">
                  Learn More
                </a>
</div>
</div>
</div>
<div className="relative min-h-[400px] lg:min-h-full w-full rounded-[2rem] overflow-hidden">
<img alt="Volution Team" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97de7003-586d-462f-b033-ef816b4ee870_1600w.jpg"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="text-center max-w-4xl mx-auto space-y-6">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900">
            Building for you, with you
          </h2>
<div className="pt-4 space-y-4">
<span className="text-sm font-semibold tracking-widest uppercase text-blue-900">
              ABOUT
            </span>
<p className="text-xl lg:text-2xl font-medium tracking-tight text-zinc-600 leading-relaxed">
              We back ambitious Fintech and SaaS businesses, ready to accelerate
              their growth to Series B and beyond
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-24">
<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              For founders, by founders
            </h3>
<p className="text-base text-zinc-600 leading-relaxed">
              As a team of serial entrepreneurs, we know what it takes to build
              venture-backed businesses. We make our network and expertise work
              for you. We play to our strengths at the forefront of FinTech and
              SaaS, seeking out ambitious entrepreneurs who are building
              world-class businesses on a global scale.
            </p>
</div>
<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Getting you to (series) B
            </h3>
<p className="text-base text-zinc-600 leading-relaxed">
              Too many brilliant businesses stumble after Series A. We support
              our founders with extra runway when they need it, in the form of
              flexible financing options. Then, we roll up our sleeves to help
              with next-stage funding, go-to-market strategies and leadership
              support. Our mission is to give you what you need to reach Series
              B and beyond.
            </p>
</div>
<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Upside at the outset
            </h3>
<p className="text-base text-zinc-600 leading-relaxed">
              Volution's collaborative carry structure keeps us aligned on a
              common purpose, to grow and succeed together. All of our founders
              share in the upside of the fund and we supplement this with Carbon
              Carry - the cornerstone of our ESG initiative - rewarding those
              who share our values, so we can build better together.
            </p>
</div>
</div>
</section>

<section className="bg-zinc-100/50 py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6 space-y-8">

<div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm ring-1 ring-zinc-200/60 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 max-w-lg">
<div className="space-y-4">
<h3 className="text-lg font-semibold tracking-widest text-zinc-900 uppercase">
                  PORTFOLIO
                </h3>
<p className="text-2xl font-medium tracking-tight text-blue-900">
                  Our portfolio includes some of the UK's most disruptive
                  high-growth tech companies
                </p>
</div>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition-colors shadow-sm bg-blue-800 hover:bg-blue-900" href="#">
                Learn more
              </a>
</div>
<div className="grid grid-cols-3 gap-6 lg:gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-semibold text-xl tracking-tight text-zinc-800">
                cognism
              </div>
<div className="font-semibold text-xl tracking-tight text-rose-500">
                rotageek
              </div>
<div className="font-semibold text-xl tracking-tight text-orange-500">
                SIGNAL AI
              </div>
<div className="font-semibold text-xl tracking-tight text-zinc-900">
                HABITO
              </div>
<div className="font-semibold text-xl tracking-tight text-blue-900">
                WAYHOME
              </div>
<div className="font-semibold text-xl tracking-tight text-blue-900">
                ZOPA
              </div>
<div className="font-semibold text-xl tracking-tight text-indigo-900">
                DEYDHAPPY
              </div>
<div className="font-semibold text-xl tracking-tight text-blue-600">
                FLAGSTONE
              </div>
<div className="font-semibold text-xl tracking-tight text-blue-900">
                FullCircl
              </div>
<div className="font-semibold text-xl tracking-tight text-zinc-800">
                Runa
              </div>
<div className="font-semibold text-xl tracking-tight text-zinc-900">
                Apperio
              </div>
<div className="font-semibold text-xl tracking-tight text-purple-600">
                Freemarket
              </div>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm ring-1 ring-zinc-200/60 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 rounded-2xl overflow-hidden h-64 lg:h-full w-full relative">
<img alt="Professional Corporate Team in Modern Office" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="order-1 lg:order-2 space-y-8 max-w-lg lg:ml-auto">
<div className="space-y-4">
<h3 className="text-lg font-semibold tracking-widest text-zinc-900 uppercase">
                  TEAM
                </h3>
<p className="text-2xl font-medium tracking-tight text-blue-900">
                  Meet our team of experienced founders, investors and business
                  professionals
                </p>
</div>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition-colors shadow-sm bg-blue-800 hover:bg-blue-900" href="#">
                Learn more
              </a>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm ring-1 ring-zinc-200/60 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
<div className="space-y-8 max-w-lg mx-auto lg:mx-0">
<div className="space-y-4">
<h3 className="text-lg font-semibold tracking-widest text-zinc-900 uppercase">
                  NEWS
                </h3>
<div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-500 font-medium">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="text-sm">1 June 2026</span>
</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900">
                  Ownera investment
                </h4>
<p className="text-base text-zinc-600">
<a className="hover:underline text-blue-800 hover:text-blue-900" href="#">
                    Ownera
                  </a>
                  , the firm building interoperability for institutional
                  tokenised assets, joins the Volution portfolio
                </p>
</div>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition-colors shadow-sm bg-blue-800 hover:bg-blue-900" href="#">
                Learn more
              </a>
</div>
<div className="flex justify-center">
<div className="flex flex-col items-center">

<div className="grid grid-cols-3 gap-1 mb-4 w-32 h-20 transform -skew-x-12 rotate-12">
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
<div className="bg-emerald-400 opacity-80 border border-emerald-500"></div>
</div>
<span className="text-4xl font-semibold tracking-tight text-zinc-900">
                  OWNERA
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 lg:py-32 border-y border-zinc-200/60">
<div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-8 text-white">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
<path d="M10.1 14v4.5"></path>
<path d="M10.1 14h2.5a1.25 1.25 0 0 1 0 2.5h-2.5"></path>
</svg>
</div>
<div className="text-center space-y-2 mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 uppercase">
              Sign up to our quarterly newsletter
            </h2>
<p className="text-base font-medium text-zinc-600 uppercase tracking-wide">
              For the latest from Volution.
            </p>
</div>
<form className="w-full space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full rounded-xl border-0 py-3.5 px-4 text-base text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 outline-none transition-all bg-white" placeholder="First name*" required="" type="text"/>
<input className="w-full rounded-xl border-0 py-3.5 px-4 text-base text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 outline-none transition-all bg-white" placeholder="Last name*" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full rounded-xl border-0 py-3.5 px-4 text-base text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 outline-none transition-all bg-white" placeholder="Company name*" required="" type="text"/>
<div className="relative w-full">
<select className="w-full appearance-none rounded-xl border-0 py-3.5 pl-4 pr-10 text-base text-zinc-500 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 outline-none transition-all bg-white cursor-pointer">
<option disabled="" selected="" value="">About you*</option>
<option value="founder">Founder</option>
<option value="investor">Investor</option>
<option value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<input className="w-full rounded-xl border-0 py-3.5 px-4 text-base text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 outline-none transition-all bg-white" placeholder="Your email*" required="" type="email"/>
<div className="pt-4 space-y-6">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-1">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded bg-white peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-colors shadow-sm group-hover:border-emerald-500 flex items-center justify-center">
<i className="text-white w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<span className="text-base text-zinc-600 select-none">
                  Receive updates and agree to our
                  <a className="hover:underline underline-offset-4 text-blue-800 hover:text-blue-900" href="#">
                    Privacy Policy
                  </a>
                  *
                </span>
</label>

<div className="w-72 bg-zinc-50 border border-zinc-200 rounded-lg p-3 flex items-center justify-between shadow-sm">
<label className="flex items-center gap-3 cursor-pointer">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 border-zinc-300 rounded-sm bg-white peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center">
<i className="text-white w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2.5"></i>
</div>
</div>
<span className="text-sm font-medium text-zinc-700">
                    I'm not a robot
                  </span>
</label>
<div className="flex flex-col items-center opacity-60">
<i className="w-6 h-6 text-blue-600 mb-1" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span className="text-[10px] text-zinc-500 tracking-tight">
                    reCAPTCHA
                  </span>
</div>
</div>
<p className="text-sm text-zinc-500">*Required field</p>
<button className="w-full sm:w-auto rounded-full px-8 py-3.5 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors shadow-sm bg-blue-800 hover:bg-blue-900 focus-visible:outline-blue-800" type="submit">
                SUBMIT
              </button>
</div>
</form>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-5xl mx-auto px-6 text-center space-y-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 uppercase">
            CONTACT
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
<div className="space-y-4 pt-8 md:pt-0">
<p className="text-base text-zinc-500">Email us</p>
<a className="flex items-center justify-center gap-2 font-medium transition-colors text-blue-800 hover:text-blue-900" href="mailto:info@volution.vc">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                info@volution.vc
              </a>
</div>
<div className="pt-8 md:pt-0 px-6">
<button className="w-full rounded-full px-8 py-4 text-base font-medium text-white transition-colors shadow-sm bg-blue-800 hover:bg-blue-900">
                Submit your pitch deck
              </button>
</div>
<div className="space-y-4 pt-8 md:pt-0">
<p className="text-base text-zinc-500">Follow us</p>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 transition-colors text-blue-800 hover:bg-blue-50" href="#">
<div className="flex items-center justify-center w-5 h-5 rounded bg-[#0A66C2] text-white font-bold text-xs pb-[1px]">
                  in
                </div>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 space-y-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800/60">
<p className="text-sm font-medium">© 2025 Volution Ventures LLP</p>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-sm hover:text-white transition-colors" href="#">
              Cookies
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Privacy
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Terms
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Complaints
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Investment Risks
            </a>
</div>
</div>
<div className="space-y-4 text-xs leading-relaxed max-w-5xl opacity-80">
<p>
            Volution Ventures LLP ("we", "us", "our") is an appointed
            representative of Kin Capital Partners LLP, which is authorised and
            regulated by the Financial Conduct Authority ("FCA") under firm
            reference number 656789. Our firm reference number is 969221.
          </p>
<p>
            The content of this website is provided for general information
            purposes only and does not constitute a financial promotion within
            the meaning of section 21 of the Financial Services and Markets Act
            2000. No information on this website is intended to invite or induce
            any person to engage in investment activity or to make any
            investment decision.
          </p>
<p>
            Nothing on this website should be construed as investment advice or
            a recommendation. If you are in any doubt about the suitability of
            any investment or course of action, you should consult a suitably
            qualified and regulated financial adviser.
          </p>
<p>
            This website is not intended for distribution in any jurisdiction
            where such distribution would be contrary to local law or
            regulation.
          </p>
</div>
</div>
</footer>


    </>
  );
}
