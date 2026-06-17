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



tailwind.config = {
theme: {
extend: {
colors: {
highlands: {
50: '#ebfdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#009444',
600: '#007a38',
700: '#00632d',
800: '#004d23',
900: '#002e15',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let loopTimeout;
      function processDeposit() {
        clearTimeout(loopTimeout);
        const initial = document.getElementById('state-initial');
        const processing = document.getElementById('state-processing');
        const success = document.getElementById('state-success');

        if (initial.classList.contains('opacity-0')) return;

        initial.classList.remove('opacity-100');
        initial.classList.add('opacity-0', 'pointer-events-none');

        setTimeout(() => {
          processing.classList.remove('opacity-0', 'pointer-events-none');
          processing.classList.add('opacity-100');

          setTimeout(() => {
            processing.classList.remove('opacity-100');
            processing.classList.add('opacity-0', 'pointer-events-none');

            setTimeout(() => {
              success.classList.remove('opacity-0', 'pointer-events-none');
              success.classList.add('opacity-100');

              setTimeout(() => {
                success.classList.remove('opacity-100');
                success.classList.add('opacity-0', 'pointer-events-none');

                setTimeout(() => {
                  initial.classList.remove('opacity-0', 'pointer-events-none');
                  initial.classList.add('opacity-100');

                  loopTimeout = setTimeout(processDeposit, 3000);
                }, 300);
              }, 2500);
            }, 300);
          }, 1500);
        }, 300);
      }

      loopTimeout = setTimeout(processDeposit, 3000);
    
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
      

<nav className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-highlands-600 rounded-lg flex items-center justify-center text-white">
<span className="text-lg font-medium leading-none">L</span>
</div>
              LocalStalls
            </a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Features
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Solutions
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Pricing
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Resources
            </a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
              Sign in
            </a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#">
              Start free trial
            </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-highlands-50 border border-highlands-100 text-xs font-normal text-highlands-600 mb-8 shadow-sm">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
          New Feature
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-tight">
          Lock in vendors early with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlands-600 to-highlands-400">
            Deposits
          </span>
</h1>
<p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Collect a deposit when you accept a vendor, then automatically send
          the balance invoice before the event. Vendors commit sooner, and you
          fill your market faster.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto text-sm font-normal bg-highlands-600 text-white px-6 py-3 rounded-full hover:bg-highlands-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#">
            Set up Deposits
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-normal bg-white text-zinc-700 border border-zinc-200 px-6 py-3 rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
            See how it works
          </a>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-zinc-200/60 overflow-hidden transform transition-all hover:scale-[1.01] duration-500">

<div className="bg-zinc-50 border-b border-zinc-100 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
</div>
<div className="mx-auto bg-white border border-zinc-200 rounded-md px-32 py-1 text-xs text-zinc-400 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
              app.localstalls.com/events
            </div>
</div>

<div className="md:p-8 flex flex-col md:flex-row text-left bg-gradient-to-b from-white to-zinc-50/50 pt-6 pr-6 pb-6 pl-6 gap-x-8 gap-y-8">

<div className="flex-1 space-y-4 self-start sticky top-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm text-zinc-900">
                  Pending Applications
                </h3>
<span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded-md">
                  Summer Market
                </span>
</div>

<div className="p-3 rounded-xl border border-highlands-200 bg-highlands-50/50 flex items-center justify-between cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-highlands-100 flex items-center justify-center text-highlands-600 text-sm">
                    AC
                  </div>
<div className="">
<p className="text-sm text-zinc-900">
                      Artisan Crafts Co.
                    </p>
<p className="text-xs text-zinc-500">Applied 2 hours ago</p>
</div>
</div>
<i className="w-5 h-5 text-highlands-400" data-lucide="arrow-right"></i>
</div>

<div className="p-3 rounded-xl border border-zinc-100 bg-white hover:bg-zinc-50 flex items-center justify-between cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-sm">
                    BB
                  </div>
<div className="">
<p className="text-sm text-zinc-700">
                      Bella's Bakery
                    </p>
<p className="text-xs text-zinc-400">Applied yesterday</p>
</div>
</div>
</div>
</div>

<div className="flex-[1.5] flex flex-col gap-6 gap-x-6 gap-y-6">

<div className="border border-zinc-200 bg-white rounded-xl p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center w-full pb-6 border-b border-zinc-100 mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-highlands-600 flex items-center justify-center text-white text-xl">
                      AC
                    </div>
<div className="">
<p className="text-lg text-zinc-900 leading-none mb-1.5">
                        Artisan Crafts Co.
                      </p>
<p className="text-xs text-zinc-500 uppercase tracking-widest leading-none">
                        STANDARD STALL
                      </p>
</div>
</div>
<div className="bg-zinc-50 text-zinc-700 px-3 py-1.5 rounded-md text-sm border border-zinc-200/50">
                    Total: $150.00
                  </div>
</div>
<div className="flex flex-col justify-between h-full">
<div className="">
<div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100 mb-6">
<div className="flex justify-between items-center mb-3 pb-3 border-b border-zinc-200">
<span className="text-sm text-zinc-600">Total Stall Fee</span>
<span className="text-sm text-zinc-900">
                          $300.00
                        </span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-highlands-600">
<i className="w-4 h-4" data-lucide="wallet"></i>
<span className="text-sm">
                            Require Deposit (50%)
                          </span>
</div>
<span className="text-sm text-highlands-600">
                          $150.00
                        </span>
</div>
<p className="text-xs text-zinc-500 mt-2">
                        Balance of $150.00 will be auto-invoiced 14 days before
                        event.
                      </p>
</div>
</div>
<div className="flex gap-3 mt-auto">
<button className="px-4 bg-white border border-zinc-200 text-zinc-600 text-sm rounded-lg hover:bg-zinc-50 transition-colors font-light">
                      Decline
                    </button><button className="flex-1 bg-highlands-600 text-white text-sm py-2.5 rounded-lg hover:bg-highlands-700 transition-colors shadow-sm flex justify-center items-center gap-2 font-light">
                      Accept &amp; Request Deposit
                    </button>
</div>
</div>
</div>

<div className="border border-zinc-200 bg-white rounded-xl p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center w-full pb-6 border-b border-zinc-100 mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-highlands-600 flex items-center justify-center text-white text-xl">
                      AC
                    </div>
<div className="">
<p className="text-lg text-zinc-900 leading-none mb-1.5">
                        Artisan Crafts Co.
                      </p>
<p className="text-xs text-zinc-500 uppercase tracking-widest leading-none">
                        STANDARD STALL
                      </p>
</div>
</div>
<div className="bg-zinc-50 text-zinc-700 px-3 py-1.5 rounded-md text-sm border border-zinc-200/50">
                    Total: $150.00
                  </div>
</div>
<div className="bg-white flex flex-col items-center justify-center py-8">
<i className="mb-4 animate-spin w-10 h-10 text-highlands-600" data-lucide="refresh-cw" strokeWidth="2"></i>
<p className="text-base font-light text-zinc-900 mb-1">
                    Processing Deposit Payment...
                  </p>
<p className="text-sm text-zinc-500">
                    Securing deposit payment framework
                  </p>
</div>
</div>

<div className="border border-zinc-200 bg-white rounded-xl p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center w-full pb-6 border-b border-zinc-100 mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-highlands-600 flex items-center justify-center text-white text-xl">
                      AC
                    </div>
<div className="">
<p className="text-lg text-zinc-900 leading-none mb-1.5">
                        Artisan Crafts Co.
                      </p>
<p className="text-xs text-zinc-500 uppercase tracking-widest leading-none">
                        STANDARD STALL
                      </p>
</div>
</div>
<div className="bg-zinc-50 text-zinc-700 px-3 py-1.5 rounded-md text-sm border border-zinc-200/50">
                    Total: $150.00
                  </div>
</div>
<div className="bg-white flex flex-col items-center justify-center py-8">
<div className="w-12 h-12 bg-highlands-100 text-highlands-600 rounded-full flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-900 mb-1.5">
                    Deposit Paid
                  </p>
<p className="text-base text-zinc-500">Balance due May 16th</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
            How it works
          </h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">
            Automate your cash flow and secure commitments without lifting a
            finger.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="relative group">

<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-5 mb-6 h-40 flex flex-col justify-center transition-all group-hover:border-highlands-200 group-hover:shadow-md">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-700 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:settings-linear"></iconify-icon>
                  Enable Deposits
                </span>

<div className="w-9 h-5 bg-highlands-600 rounded-full relative cursor-pointer shadow-inner">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white border border-zinc-200 rounded-lg p-2.5">
<div className="text-xs text-zinc-400 mb-1">Amount</div>
<div className="text-sm font-medium text-zinc-900">50%</div>
</div>
<div className="bg-white border border-zinc-200 rounded-lg p-2.5">
<div className="text-xs text-zinc-400 mb-1">Cutoff</div>
<div className="text-sm font-medium text-zinc-900">14 Days</div>
</div>
</div>
</div>

<h3 className="text-lg font-medium text-zinc-900 mb-3 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-highlands-50 text-highlands-600 text-xs font-semibold">
                1
              </span>
              Set your terms
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Turn on deposits at the event level and set your deposit
              percentage or fixed amount. Choose how many days before the event
              the cutoff applies.
            </p>
</div>

<div className="relative group">

<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-5 mb-6 h-40 flex flex-col justify-center transition-all group-hover:border-highlands-200 group-hover:shadow-md">
<div className="bg-white border border-zinc-100 rounded-lg p-4 shadow-sm relative">
<div className="absolute -top-3 -right-3 bg-green-100 text-green-700 w-8 h-8 flex items-center justify-center rounded-full shadow-sm border border-green-200">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-3 text-sm">
<iconify-icon className="text-highlands-600 text-lg" icon="solar:letter-linear"></iconify-icon>
<span className="font-medium text-zinc-800">
                    Deposit Invoice Sent
                  </span>
</div>
<div className="flex justify-between text-xs text-zinc-500 mb-1.5">
<span className="">Total Fee</span>
<span className="">$200.00</span>
</div>
<div className="flex justify-between text-xs font-medium text-zinc-900 pt-1.5 border-t border-zinc-100">
<span className="">Due Now (50%)</span>
<span>$100.00</span>
</div>
</div>
</div>

<h3 className="text-lg font-medium text-zinc-900 mb-3 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-highlands-50 text-highlands-600 text-xs font-semibold">
                2
              </span>
              Accept &amp; request
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              When you accept a vendor before the cutoff date, they
              automatically receive a deposit invoice. After the cutoff, they
              get the full amount instead.
            </p>
</div>

<div className="relative group">

<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-5 mb-6 h-40 flex flex-col justify-center relative overflow-hidden transition-all group-hover:border-highlands-200 group-hover:shadow-md">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
<div className="relative z-10 bg-white border border-zinc-100 rounded-lg p-4 shadow-sm">
<div className="flex items-center gap-2 mb-3 text-sm">
<div className="w-6 h-6 rounded-md bg-highlands-100 flex items-center justify-center text-highlands-600">
<iconify-icon className="" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium text-zinc-800">
                    Process Balance Payment
                  </span>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<div className="h-2 bg-zinc-100 rounded w-full"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
<div className="h-2 bg-zinc-100 rounded w-3/4"></div>
</div>
</div>
</div>
</div>

<h3 className="text-lg font-medium text-zinc-900 mb-3 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-highlands-50 text-highlands-600 text-xs font-semibold">
                3
              </span>
              Automated collection
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              On the cutoff date, LocalStalls automatically sends the remaining
              balance invoice to every vendor who paid a deposit. No manual
              follow-up needed.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 py-16 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">
          Ready to secure your vendors faster?
        </h2>
<div className="flex justify-center gap-4">
<a className="text-sm font-medium bg-white text-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-100 transition-colors shadow-sm" href="#">
            Start your free trial
          </a>
</div>
<div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
<p>© 2023 LocalStalls. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</div>
</footer>
<style>
      @keyframes shimmer {
          100% {
              transform: translateX(100%);
          }
      }
    </style>


    </>
  );
}
