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



      document.getElementById('lead-form').addEventListener('submit', function(e) {
          e.preventDefault();
          this.classList.add('hidden');
          document.getElementById('scheduler-step').classList.remove('hidden');
          document.getElementById('scheduler-step').classList.add('fade-in');
      });

      function confirmAppointment() {
          document.getElementById('scheduler-step').classList.add('hidden');
          document.getElementById('success-step').classList.remove('hidden');
          document.getElementById('success-step').classList.add('fade-in');
      }

      function toggleReviewForm() {
          const container = document.getElementById('review-form-container');
          container.classList.toggle('hidden');
          if(!container.classList.contains('hidden')) {
              container.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      }

      document.getElementById('submit-review-form').addEventListener('submit', function(e) {
          e.preventDefault();
          this.classList.add('hidden');
          const success = document.getElementById('review-success');
          success.classList.remove('hidden');
          success.classList.add('fade-in');
      });

      const chatWidget = document.getElementById('chat-widget');
      const chatMessages = document.getElementById('chat-messages');
      const chatInput = document.getElementById('chat-input');

      let chatState = 'INITIAL';

      function toggleChat() {
          chatWidget.classList.toggle('hidden');
          chatWidget.classList.toggle('flex');
      }

      function appendMessage(text, isUser = false) {
          const div = document.createElement('div');
          div.className = isUser
              ? 'flex items-start gap-3 max-w-[90%] self-end flex-row-reverse ml-auto fade-in'
              : 'flex items-start gap-3 max-w-[90%] fade-in';

          const avatar = isUser ? '' : `<div class="w-7 h-7 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[0.65rem] shadow-sm">🤖</div>`;
          const bubble = isUser ? 'bg-teal-600 text-white rounded-tr-none' : 'bg-white text-slate-600 rounded-tl-none border border-slate-100';

          div.innerHTML = `${avatar}<div class="${bubble} p-4 rounded-2xl text-[0.9375rem] shadow-sm leading-relaxed">${text}</div>`;
          chatMessages.appendChild(div);
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function handleOption(opt) {
          appendMessage(opt, true);
          setTimeout(() => {
              if(opt === 'Check Rental Value') {
                  appendMessage("Sure! To give you an accurate estimate, what resort name and unit size (e.g. Studio, 1BR) are we looking at?");
              } else if(opt === 'How it works') {
                  appendMessage("We list your week across corporate networks. When it books, you keep the majority of the proceeds and we take a small management fee. Would you like to check a specific resort?");
              }
          }, 600);
      }

      function handleChatSubmit(e) {
          e.preventDefault();
          const val = chatInput.value.trim();
          if(!val) return;
          appendMessage(val, true);
          chatInput.value = '';
          setTimeout(() => appendMessage("Thanks for that information. Let me connect you with a specialist to get those specific rates. What's the best phone number for a quick callback?"), 800);
      }
    
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
      
<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[31.25rem] h-[31.25rem] bg-amber-100/30 rounded-full blur-3xl opacity-60"></div>
<div className="absolute top-[20%] left-[-10%] w-[37.5rem] h-[37.5rem] bg-cyan-100/30 rounded-full blur-3xl opacity-60"></div>
</div>
<nav className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer group" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">
              Rental Super Flexx
            </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-teal-600 transition-colors" href="#opportunity">
              Opportunity
            </a>
<a className="text-slate-500 hover:text-teal-600 transition-colors" href="#how-it-works">
              How it Works
            </a>
<a className="text-slate-500 hover:text-teal-600 transition-colors" href="#reviews">
              Reviews
            </a>
<a className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#contact">
              Get a Callback
            </a>
</div>
<button className="md:hidden text-slate-800" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden bg-white border-b border-slate-100 p-6 absolute w-full shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-5 text-base font-medium">
<a className="text-slate-600" href="#opportunity">Opportunity</a>
<a className="text-slate-600" href="#how-it-works">How it Works</a>
<a className="text-slate-600" href="#reviews">Reviews</a>
<a className="text-teal-600 font-semibold" href="#contact">
            Get a Callback
          </a>
</div>
</div>
</nav>
<section className="sm:px-6 text-center max-w-6xl mr-auto ml-auto pt-40 pr-4 pb-20 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100/50 text-xs font-medium text-teal-700 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
        High demand for beachfront weeks
      </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.05]">
        Turn your unused weeks
        <br className="hidden sm:block"/>
        into
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          vacation cash.
        </span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
        Relax while we handle the rentals. Professional support for premium
        properties in the Caribbean, Florida, Hawaii, and Mexico.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white font-medium rounded-full shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5" href="#contact">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Get a Callback
        </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm" href="#opportunity">
          Learn More
        </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto" id="gallery">
<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 md:col-span-2 md:row-span-2">
<img alt="Beautiful Sunrise" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="text-xs font-medium bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full mb-2">
              Ocean View
            </p>
<p className="text-xl font-semibold tracking-tight">
              Spectacular Sunrises
            </p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
<img alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white text-left">
<p className="font-semibold tracking-tight text-sm">Premium Resorts</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
<img alt="Sandy Beach" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white text-left">
<p className="font-semibold tracking-tight text-sm">Pristine Beaches</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
<img alt="Balcony View" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white text-left">
<p className="font-semibold tracking-tight text-sm">
              Oceanfront Suites
            </p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
<img alt="Sunset" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1616038242814-a6eac7845d88?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white text-left">
<p className="font-semibold tracking-tight text-sm">Golden Hours</p>
</div>
</div>
</div>
</section>
<section className="py-32 px-4 sm:px-6 max-w-6xl mx-auto" id="opportunity">
<div className="grid lg:grid-cols-2 lg:gap-24 gap-x-16 gap-y-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
<img alt="Luxury pool" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-10">
<p className="text-teal-300 font-medium text-xs mb-3 uppercase tracking-[0.2em]">
                Opportunity
              </p>
<p className="text-white text-2xl font-serif italic leading-snug">
                "Where unused time becomes real opportunity."
              </p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-8 leading-tight">
            Turn Unused Timeshare Time Into Opportunity
          </h2>
<div className="space-y-6 text-slate-500 leading-relaxed mb-10">
<p className="">
              At Rental Super Flexx, we help owners who aren’t using their
              allotted vacation time. If you own a timeshare and have unused
              weeks, our program makes it simple to put that time to work.
            </p>
<p className="">
              We handle the marketing through strategic, high-reach campaigns
              that connect your property with corporate travelers and
              vacationers worldwide.
            </p>
</div>
<div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-10 flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-teal-600" icon="solar:monitor-camera-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
<strong className="text-slate-900 font-semibold">
                Total Transparency:
              </strong>
              View your listings directly on
              <span className="text-teal-600 font-medium cursor-help underline decoration-teal-200 decoration-2 underline-offset-4">
                RentalSuperFlexx.net
              </span>
              .
            </p>
</div>
<div className="shadow-slate-200/40 overflow-hidden group bg-white border-slate-100 border rounded-3xl mb-10 pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="absolute top-0 right-0 bg-teal-600 text-white text-[0.65rem] font-bold px-4 py-1.5 rounded-bl-xl tracking-wider uppercase">
              Owner Direct
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-6">
              Advertise Your Resort Here
            </h3>
<div className="flex flex-col gap-2 mb-8">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Starting Packages
              </div>
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<span className="text-base font-medium text-slate-700">Luxe</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tighter">
                  $1197
                </span>
</div>
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<span className="text-base font-medium text-slate-700">Elite</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tighter">
                  $1596
                </span>
</div>
<div className="flex items-center justify-between">
<span className="text-base font-medium text-slate-700">Royal</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tighter">
                  $1995
                </span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-4">
<div className="flex gap-3 text-sm gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" strokeWidth="2" width="18"></iconify-icon>
<span className="text-slate-600">No membership fees</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" strokeWidth="2" width="18"></iconify-icon>
<span className="text-slate-600">No presentations</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-slate-50" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            A simple three-step process
          </h2>
<p className="text-slate-500 text-lg">
            From listing to payout, we handle the tides.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">
<div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm z-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">
              1. Intake &amp; Verify
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Submit resort name, dates, and unit size. We verify ownership
              details to ensure a valid listing for our network.
            </p>
</div>
<div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm z-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon icon="solar:megaphone-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">
              2. Market &amp; Book
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              We promote your week to corporate travelers. Our agents handle all
              guest inquiries and secure bookings.
            </p>
</div>
<div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm z-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">
              3. Get Paid
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Once the guest checks in and the rental is finalized, proceeds are
              released directly to you.
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 px-4 sm:px-6 max-w-6xl mx-auto" id="reviews">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
<iconify-icon className="text-amber-500" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
            Trusted by 500+ Owners
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Voices of experience
          </h2>
<p className="text-slate-500 mt-4 text-lg">
            Verified reviews from our community of timeshare owners.
          </p>
</div>
<button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm flex items-center gap-2" onclick="toggleReviewForm()">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Leave a Review
        </button>
</div>
<div className="hidden mb-16 bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl shadow-slate-200/50" id="review-form-container">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
            Share your story
          </h3>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleReviewForm()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<form className="space-y-6" id="submit-review-form">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Your Name
              </label>
<input className="w-full text-sm px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Rating
              </label>
<select className="w-full text-sm px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all appearance-none cursor-pointer">
<option value="5">⭐⭐⭐⭐⭐ Excellent</option>
<option value="4">⭐⭐⭐⭐ Good</option>
<option value="3">⭐⭐⭐ Average</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Review
            </label>
<textarea className="w-full text-sm px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all" placeholder="Tell us about your rental experience..." required="" rows="4"></textarea>
</div>
<div className="flex justify-end">
<button className="bg-teal-600 text-white px-10 py-3 rounded-full font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20" type="submit">
              Post Review
            </button>
</div>
</form>
<div className="hidden text-center py-4 bg-teal-50 rounded-2xl text-teal-700 font-medium" id="review-success">
<iconify-icon className="mr-1 inline-block" icon="solar:check-circle-linear" width="20"></iconify-icon>
          Your review has been submitted for verification.
        </div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-[0.9375rem] leading-relaxed mb-8">
            "I was skeptical about renting out my Marriott week, but the team
            made it incredibly easy. The payout was prompt and exactly as
            quoted."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-semibold text-xs">
              JD
            </div>
<div>
<p className="text-sm font-semibold text-slate-900">John D.</p>
<p className="text-[0.65rem] text-slate-400 font-medium uppercase tracking-wider">
                Marriott Owner
              </p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-[0.9375rem] leading-relaxed mb-8">
            "Communication was excellent. I knew exactly when the booking
            happened and when my proceeds were sent. Highly recommend."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 font-semibold text-xs">
              SM
            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
<p className="text-[0.65rem] text-slate-400 font-medium uppercase tracking-wider">
                Westin Owner
              </p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-[0.9375rem] leading-relaxed mb-8">
            "Great service for those who can't travel this year. Much more
            professional than listing on general marketplaces."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 font-semibold text-xs">
              RP
            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Robert P.</p>
<p className="text-[0.65rem] text-slate-400 font-medium uppercase tracking-wider">
                Wyndham Owner
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-4 sm:px-6 max-w-6xl mx-auto" id="contact">
<div className="grid lg:grid-cols-12 gap-20">
<div className="lg:col-span-5">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">
            Common Questions
          </h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-5 cursor-pointer text-[0.9375rem] font-medium text-slate-800 hover:bg-slate-50 transition-colors list-none">
                Is the $399 marketing fee recurring?
                <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="2"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-[0.9375rem] text-slate-500 leading-relaxed">
                No, it is a one-time fee per specific week listed. This covers
                our intensive global marketing campaigns for that specific unit.
              </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-5 cursor-pointer text-[0.9375rem] font-medium text-slate-800 hover:bg-slate-50 transition-colors list-none">
                Can I rent my points-based weeks?
                <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="2"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-[0.9375rem] text-slate-500 leading-relaxed">
                Absolutely. We help points-based owners identify the highest
                demand weeks to book, ensuring you get the maximum value for
                your points.
              </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-5 cursor-pointer text-[0.9375rem] font-medium text-slate-800 hover:bg-slate-50 transition-colors list-none">
                How safe is the payout process?
                <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="2"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-[0.9375rem] text-slate-500 leading-relaxed">
                Very. We use secure bank transfers or checks. Funds are held and
                released systematically once the rental period begins and
                ownership is verified.
              </div>
</details>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 sm:p-12 relative overflow-hidden" id="form-container">
<div className="relative z-10">
<div className="mb-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  Check Your Week's Value
                </h3>
<p className="text-slate-500 mt-2">
                  Speak with an agent to see what your specific week could
                  generate.
                </p>
</div>
<form className="space-y-5" id="lead-form">
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      First Name
                    </label>
<input className="w-full text-sm px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all placeholder:text-slate-300" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Last Name
                    </label>
<input className="w-full text-sm px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all placeholder:text-slate-300" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Phone
                    </label>
<input className="w-full text-sm px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all placeholder:text-slate-300" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Email
                    </label>
<input className="w-full text-sm px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all placeholder:text-slate-300" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Resort Name &amp; Details
                  </label>
<textarea className="w-full text-sm px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all placeholder:text-slate-300" placeholder="e.g. Westin Kaanapali, 2BR Oceanfront, August weeks" rows="2"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl hover:bg-slate-800 transition-all flex justify-center items-center gap-2 mt-4" type="submit">
                  Next: Select a Time
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</form>
<div className="hidden space-y-6" id="scheduler-step">
<div className="p-4 bg-teal-50 text-teal-800 text-sm rounded-xl mb-6 flex items-center gap-3 border border-teal-100">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Almost there! When should we call you?</span>
</div>
<div className="grid grid-cols-3 gap-3 mb-6">
<label className="custom-radio cursor-pointer">
<input checked="" className="hidden" name="day" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 text-center transition-all bg-white hover:border-teal-400">
<div className="text-[0.65rem] text-slate-400 uppercase tracking-widest mb-1">
                        Today
                      </div>
<div className="font-semibold text-slate-900">12th</div>
</div>
</label>
<label className="custom-radio cursor-pointer">
<input className="hidden" name="day" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 text-center transition-all bg-white hover:border-teal-400">
<div className="text-[0.65rem] text-slate-400 uppercase tracking-widest mb-1">
                        Tmrw
                      </div>
<div className="font-semibold text-slate-900">13th</div>
</div>
</label>
<label className="custom-radio cursor-pointer">
<input className="hidden" name="day" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 text-center transition-all bg-white hover:border-teal-400">
<div className="text-[0.65rem] text-slate-400 uppercase tracking-widest mb-1">
                        Wed
                      </div>
<div className="font-semibold text-slate-900">14th</div>
</div>
</label>
</div>
<div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2 chat-scroll">
<button className="w-full py-3.5 border border-slate-100 bg-slate-50 text-slate-700 rounded-xl text-sm hover:border-teal-600 hover:bg-teal-50 transition-all font-medium">
                    9:00 AM — 11:00 AM EST
                  </button>
<button className="w-full py-3.5 border border-slate-100 bg-slate-50 text-slate-700 rounded-xl text-sm hover:border-teal-600 hover:bg-teal-50 transition-all font-medium">
                    11:00 AM — 1:00 PM EST
                  </button>
<button className="w-full py-3.5 border border-slate-100 bg-slate-50 text-slate-700 rounded-xl text-sm hover:border-teal-600 hover:bg-teal-50 transition-all font-medium">
                    1:00 PM — 3:00 PM EST
                  </button>
<button className="w-full py-3.5 border border-slate-100 bg-slate-50 text-slate-700 rounded-xl text-sm hover:border-teal-600 hover:bg-teal-50 transition-all font-medium">
                    3:00 PM — 5:00 PM EST
                  </button>
</div>
<button className="w-full bg-teal-600 text-white font-medium py-4 rounded-xl hover:bg-teal-700 transition-all mt-6 shadow-lg shadow-teal-500/20" onclick="confirmAppointment()">
                  Confirm Appointment
                </button>
</div>
<div className="hidden text-center py-12" id="success-step">
<div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  Booking Confirmed
                </h3>
<p className="text-slate-500 mt-3 text-lg">
                  We'll reach out during your chosen window.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-200 pt-20 pb-32 md:pb-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-7 h-7 bg-teal-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 text-base tracking-tight">
                Rental Super Flexx
              </span>
</div>
<p className="text-[0.9375rem] text-slate-500 leading-relaxed max-w-sm">
              Providing transparency and coastal hospitality to owners
              navigating the luxury rental market.
            </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-6 uppercase tracking-wider">
              Connect
            </h4>
<ul className="space-y-3 text-[0.9375rem] text-slate-500">
<li>
<a className="hover:text-teal-600 transition-colors" href="tel:8887239166">
                  (888) 723-9166
                </a>
</li>
<li>info@rentalsuperflexx.net</li>
<li className="pt-2 text-xs font-medium text-slate-400">
                Office Hours: 9-5 EST
              </li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-6 uppercase tracking-wider">
              Compliance
            </h4>
<ul className="space-y-3 text-[0.9375rem] text-slate-500">
<li>
<a className="hover:text-teal-600 transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-teal-600 transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:text-teal-600 transition-colors" href="#">
                  Security
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-10">
<p className="text-[0.7rem] text-slate-400 leading-relaxed text-justify md:text-left">
<strong>Legal Disclaimer:</strong>
            Rental Super Flexx is an independent service provider and is not
            affiliated with, authorized, or endorsed by any specific resort
            developer, hotel chain, RCI, or Interval International. Rental
            amounts and timelines are estimates based on market conditions and
            are not guaranteed. We act solely as a marketing and administrative
            intermediary for individual owners.
          </p>
<div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-medium italic">
              © 2024 Rental Super Flexx. All rights reserved.
            </p>
<div className="flex gap-4">
<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
<div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</footer>
<div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
<a className="w-full bg-slate-900 text-white font-medium py-4 rounded-full shadow-2xl flex items-center justify-center gap-2" href="#contact">
        Speak with an Agent
      </a>
</div>
<button className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 bg-white p-4 rounded-full shadow-2xl border border-slate-100 text-teal-600 hover:scale-105 transition-transform flex items-center gap-2 group" onclick="toggleChat()">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
</span>
<span className="text-sm font-semibold pr-1">Live Chat</span>
</button>
<div className="fixed bottom-24 md:bottom-28 right-6 md:right-8 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-200 hidden flex-col overflow-hidden transform transition-all" id="chat-widget">
<div className="bg-slate-900 p-5 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Concierge</h4>
<p className="text-slate-400 text-[0.65rem] tracking-wider uppercase font-bold">
              Online
            </p>
</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="h-96 overflow-y-auto p-5 bg-slate-50 space-y-4 chat-scroll" id="chat-messages">
<div className="flex items-start gap-3 max-w-[90%]">
<div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[0.65rem] shadow-sm">
            🤖
          </div>
<div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 text-[0.9375rem] text-slate-600 shadow-sm leading-relaxed">
            Hi there! I can help you check your timeshare's rental value or
            answer any questions about our process. What's on your mind?
          </div>
</div>
<div className="flex flex-wrap gap-2 pl-10">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-teal-700 font-medium hover:border-teal-500 hover:bg-teal-50 transition-all shadow-sm" onclick="handleOption('Check Rental Value')">
            Check Rental Value
          </button>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium hover:border-slate-400 transition-all shadow-sm" onclick="handleOption('How it works')">
            How it works
          </button>
</div>
</div>
<div className="p-4 bg-white border-t border-slate-100">
<form className="flex gap-2" onsubmit="handleChatSubmit(event)">
<input className="flex-1 text-sm bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors" id="chat-input" placeholder="Reply here..." type="text"/>
<button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-all" type="submit">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>


    </>
  );
}
