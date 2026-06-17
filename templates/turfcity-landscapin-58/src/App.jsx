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



      (function(){
        // Google Apps Script Web App endpoint — replace with your deployed URL
        var GSHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzLRZ_32MNxkGuCliKNhPlnQMVXMCaVs7wNh5lWerTBVPxEkaQXjboTN6_UsBXXmpKk-w/exec';

        // Parse URL params and populate UTM/gclid hidden fields
        function getParam(name){
          var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
          return m ? decodeURIComponent(m[1].replace(/\+/g,' ')) : '';
        }
        var trackingFields = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid'];
        var form = document.getElementById('leadForm');
        if(!form) return;
        trackingFields.forEach(function(f){
          var el = form.querySelector('input[name="'+f+'"]');
          if(el){
            var val = getParam(f);
            // Clear placeholder template values like {utm_source}
            if(!val && /^\{.*\}$/.test(el.value)) val = '';
            el.value = val;
          }
        });

        form.addEventListener('submit', function(e){
          e.preventDefault();
          var btn = form.querySelector('button[type="submit"]');
          var originalHTML = btn ? btn.innerHTML : '';
          if(btn){ btn.disabled = true; btn.innerHTML = 'Sending...'; }

          var data = new FormData(form);
          data.append('page_url', window.location.href);
          data.append('referrer', document.referrer || '');
          data.append('submitted_at', new Date().toISOString());

          fetch(GSHEET_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors',
            body: data
          }).then(function(){
            form.reset();
            if(btn){ btn.innerHTML = '✓ Received! We\'ll call within 1 hour.'; }
          }).catch(function(){
            if(btn){ btn.disabled = false; btn.innerHTML = originalHTML; }
            alert('Something went wrong. Please call us at (855) 696-7747.');
          });
        });
      })();
    
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
      

<header className="bg-white border-b border-stone-200 sticky top-0 z-50">
<div className="sm:px-6 flex max-w-6xl mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3 sm:gap-5">
<div className="flex items-center gap-1.5">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="leaf-linear" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(21, 128, 61)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-lg sm:text-xl font-bold tracking-tighter">
              turfcity
            </span>
</div>
<div className="hidden sm:flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1">
<div className="flex gap-0.5">
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold text-amber-900">
              5-Star Rated in LA
            </span>
</div>
</div>
<a className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-3 sm:px-4 py-2 rounded-lg transition" href="tel:+13105551234">
<iconify-icon className="" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="sm:text-sm text-xs font-semibold">(855) 696-7747</span>
</a>
</div>
</header>

<section className="grass-gradient text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'}}></div>
<div className="sm:px-6 sm:py-14 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

<div className="">
<div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-3 py-1 mb-5">
<iconify-icon className="text-orange-300" icon="solar:tag-price-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold text-orange-200 uppercase tracking-wide">
                Limited LA Offer
              </span>
</div>
<h1 className="sm:text-4xl lg:text-5xl leading-[1.1] text-3xl font-bold tracking-tight mb-4">
              Premium Artificial Turf, Professionally Installed Across Los
              Angeles
            </h1>
<p className="text-base sm:text-lg text-green-100 mb-6 leading-relaxed">
<span className="font-semibold text-white">0% APR for 21 Months</span>
              if qualified — pay nothing today. Most lawns are completed in just
              <span className="font-semibold text-white">1–2 days</span>
              by our in-house crew.
            </p>
<ul className="space-y-2.5 mb-6">
<li className="flex items-start gap-2.5 text-sm">
<iconify-icon className="text-green-300 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">
                  Pet-friendly, child-safe, UV-stabilized premium turf
                </span>
</li>
<li className="flex items-start gap-2.5 text-sm">
<iconify-icon className="text-green-300 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">
                  No more watering, mowing, or fertilizing — ever
                </span>
</li>
<li className="flex items-start gap-2.5 text-sm">
<iconify-icon className="text-green-300 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">
                  Save up to $3,000/year on water + maintenance
                </span>
</li>
<li className="flex items-start gap-2.5 text-sm">
<iconify-icon className="text-green-300 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">
                  Free, no-obligation on-site estimate within 24 hours
                </span>
</li>
</ul>
<div className="hidden lg:flex items-center gap-4 pt-4 border-t border-white/10">
<div className="flex -space-x-2">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-2 border-green-900 flex items-center justify-center text-xs font-bold">
                  JM
                </div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-green-900 flex items-center justify-center text-xs font-bold">
                  SK
                </div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 border-2 border-green-900 flex items-center justify-center text-xs font-bold">
                  RT
                </div>
</div>
<div className="text-xs text-green-100">
<div className="font-semibold text-white">
                  500+ LA homes transformed
                </div>
<div className="">Average 5.0★ on Google &amp; Yelp</div>
</div>
</div>
</div>

<div className="bg-white text-stone-900 rounded-2xl shadow-2xl p-5 sm:p-7 border border-stone-200">
<div className="text-center mb-5">
<div className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 rounded-full px-3 py-1 mb-3">
<iconify-icon icon="solar:gift-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">
                  Free Estimate
                </span>
</div>
<h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Get Your Free On-Site Quote
              </h2>
<p className="text-xs text-stone-500 mt-1">
                Takes 30 seconds. We'll call back within 1 hour.
              </p>
</div>
<form className="space-y-3" id="leadForm">

<input name="utm_source" type="hidden" value="{utm_source}"/>
<input name="utm_medium" type="hidden" value="{utm_medium}"/>
<input name="utm_campaign" type="hidden" value="{utm_campaign}"/>
<input name="utm_term" type="hidden" value="{utm_term}"/>
<input name="utm_content" type="hidden" value="{utm_content}"/>
<input name="gclid" type="hidden" value="{gclid}"/>
<div className="">
<label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name
                </label>
<input className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition" name="full_name" placeholder="John Smith" required="required" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="">
<label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone
                  </label>
<input className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition" name="phone" placeholder="(310) 555-0123" required="required" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email
                  </label>
<input className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition" name="email" placeholder="john@email.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-stone-700 mb-1">
                  Address
                </label>
<input className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition" name="address" placeholder="Street address, Los Angeles, CA" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tell us about your project
                </label>
<textarea className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition resize-none" name="project_details" placeholder="Approx. sq ft, front/backyard, pets, etc." rows="2"></textarea>
</div>
<button className="btn-cta w-full text-white font-bold py-3.5 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5" type="submit">
                CLAIM MY FREE ESTIMATE
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-1.5 pt-1">
<iconify-icon className="text-stone-400" icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
<p className="text-xs text-stone-500 text-center">
                  100% Free • No obligation • Your info is secure
                </p>
</div>
</form>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/15">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-green-300 flex-shrink-0" icon="solar:flag-linear" width="28"></iconify-icon>
<div>
<div className="text-sm font-semibold">Made in USA</div>
<div className="text-xs text-green-200">Premium materials</div>
</div>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-green-300 flex-shrink-0" icon="solar:shield-check-linear" width="28"></iconify-icon>
<div className="">
<div className="text-sm font-semibold">18-Year Warranty</div>
<div className="text-xs text-green-200">Industry leading</div>
</div>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-green-300 flex-shrink-0" icon="solar:document-text-linear" width="28"></iconify-icon>
<div className="">
<div className="text-sm font-semibold">Licensed &amp; Insured</div>
<div className="text-xs text-green-200">Worry-free projects.</div>
</div>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-green-300 flex-shrink-0" icon="solar:medal-ribbons-star-linear" width="28"></iconify-icon>
<div className="">
<div className="text-sm font-semibold">Bonded</div>
<div className="text-xs text-green-200">Fully protected</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-12 sm:py-16 border-b border-stone-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-2">
            How It Works
          </p>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            From Quote to Perfect Lawn in Days
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 sm:gap-4">
<div className="relative bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
<div className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              STEP 1
            </div>
<iconify-icon className="text-green-700 mx-auto mb-3" icon="solar:calendar-mark-linear" width="40"></iconify-icon>
<h3 className="font-semibold text-lg mb-1.5 tracking-tight">
              Get Free Estimate
            </h3>
<p className="text-sm text-stone-600">
              We visit your property, measure, and quote a flat price — no
              surprises, no pressure.
            </p>
</div>
<div className="relative bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
<div className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              STEP 2
            </div>
<iconify-icon className="text-green-700 mx-auto mb-3" icon="solar:settings-linear" width="40"></iconify-icon>
<h3 className="font-semibold text-lg mb-1.5 tracking-tight">
              Install in 1–2 Days
            </h3>
<p className="text-sm text-stone-600">
              Our in-house crew handles everything — demo, base prep, turf, and
              cleanup.
            </p>
</div>
<div className="relative bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
<div className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              STEP 3
            </div>
<iconify-icon className="text-green-700 mx-auto mb-3" icon="solar:cup-hot-linear" width="40"></iconify-icon>
<h3 className="font-semibold text-lg mb-1.5 tracking-tight">
              Enjoy Zero Maintenance
            </h3>
<p className="text-sm text-stone-600">
              No mowing, no watering, no fertilizer. Just a perfect lawn —
              year-round.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-12 sm:py-16 border-b border-stone-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-2">
            Our Work
          </p>
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            See the Beautiful Turf We Install
          </h2>
<p className="text-sm text-stone-500 mt-2">
            Real projects from real Los Angeles homes
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
<div className="relative group overflow-hidden rounded-xl aspect-square">
<img alt="Backyard artificial turf installation" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="group overflow-hidden aspect-square rounded-xl relative">
<img alt="Front yard turf lawn" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4b1ff0-c887-4317-886d-e26cde2ff24e_800w.webp"/>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-square">
<img alt="Lush green artificial grass" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f750e84b-992b-4549-9c92-2951842d5e2e_800w.jpg"/>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-square">
<img alt="Modern home with turf landscaping" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae8d2a99-f7b9-4210-86b8-20ff551e0bbe_800w.webp"/>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-square">
<img alt="Pet-friendly turf yard" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80955b24-d8b7-4eea-9914-d1b654080a7f_800w.webp"/>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-square">
<img alt="Backyard putting green turf" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1e03e3f-f539-4b95-8c29-b321af8e19da_800w.webp"/>
</div>
</div>
</div>
</section>
<section className="sm:py-16 bg-stone-50 border-stone-200 border-b pt-12 pb-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<div className="flex justify-center gap-1 mb-3">
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="22"></iconify-icon>
</div>
<h2 className="sm:text-3xl text-2xl font-bold tracking-tight">
            Trusted by LA Homeowners
          </h2>
<p className="text-sm text-stone-500 mt-2">
            Real reviews from real neighbors across Los Angeles
          </p>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="bg-white border border-stone-200 rounded-xl p-6">
<div className="flex gap-0.5 mb-3">
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 leading-relaxed mb-4">
              "Daniel came out the next morning, quoted a fair price, and his
              team had our entire backyard done in a day and a half. The turf
              looks unreal — every neighbor has asked who did it."
            </p>
<div className="flex items-center gap-3 pt-3 border-t border-stone-100">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                MR
              </div>
<div>
<div className="text-sm font-semibold">Michael R.</div>
<div className="text-xs text-stone-500">Sherman Oaks, CA</div>
</div>
</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl p-6">
<div className="flex gap-0.5 mb-3">
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 leading-relaxed mb-4">
              "I got three quotes — TurfCity was the only company that showed up
              on time, explained everything, and finished early. The 0%
              financing made it a no-brainer. Flawless install."
            </p>
<div className="flex items-center gap-3 pt-3 border-t border-stone-100">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                JL
              </div>
<div className="">
<div className="text-sm font-semibold">Jessica L.</div>
<div className="text-xs text-stone-500">Pasadena, CA</div>
</div>
</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl p-6">
<div className="flex gap-0.5 mb-3">
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 leading-relaxed mb-4">
              "Daniel and his crew are pros — period. They prepped the base
              properly, the seams are invisible, and the turf feels amazing
              under bare feet. Best money I've spent on the house."
            </p>
<div className="flex items-center gap-3 pt-3 border-t border-stone-100">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                AC
              </div>
<div>
<div className="text-sm font-semibold">Anthony C.</div>
<div className="text-xs text-stone-500">Santa Monica, CA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grass-gradient sm:py-16 text-white pt-12 pb-12">
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
          Ready for a Lawn That Looks Perfect Every Day?
        </h2>
<p className="text-green-100 mb-6 text-sm sm:text-base">
          Lock in your
          <span className="font-semibold text-white">0% APR for 21 months</span>
          and free estimate before this offer ends.
        </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="btn-cta inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3.5 rounded-lg text-sm" href="#top">
            GET MY FREE ESTIMATE
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/20 transition text-sm font-semibold text-white bg-white/10 border-white/30 border rounded-lg pt-3.5 pr-6 pb-3.5 pl-6" href="/tel:+1(855) 696-7747">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
            Call (310) 555-1234
          </a>
</div>
</div>
</section>

<footer className="text-stone-400 bg-stone-900 pt-6 pb-6">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" icon="solar:leaf-linear" width="18"></iconify-icon>
<span className="text-sm font-bold text-white tracking-tighter">
            turfcity
          </span>
<span className="text-xs ml-2">© 2026 TurfCity.</span>
</div>
<div className="text-xs">Serving all of Los Angeles County</div>
</div>
</footer>


    </>
  );
}
