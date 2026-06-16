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



      // REPLACE THIS URL with your published Google Apps Script Web App URL
      const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

      const form = document.forms['submit-to-google-sheet'];
      const formContainer = document.getElementById('formContainer');
      const successMessage = document.getElementById('successMessage');
      const submitBtn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const btnIcon = document.getElementById('btnIcon');

      form.addEventListener('submit', e => {
          e.preventDefault();

          // Check if user has updated the scriptURL
          if (!scriptURL.startsWith('https://script.google.com/macros/s/')) {
              alert('Setup Required: Please paste your deployed Google Apps Script Web App URL into the scriptURL variable in the code.');
              return;
          }

          // Loading state
          submitBtn.disabled = true;
          btnText.textContent = 'Sending...';
          btnIcon.setAttribute('icon', 'solar:spinner-linear');
          btnIcon.classList.add('animate-spin');

          // Send as application/x-www-form-urlencoded to ensure Google Apps Script parses e.parameter correctly
          fetch(scriptURL, {
              method: 'POST',
              body: new URLSearchParams(new FormData(form))
          })
              .then(response => {
                  // Show success state
                  formContainer.classList.add('hidden');
                  successMessage.classList.remove('hidden');
              })
              .catch(error => {
                  // Handle error state
                  console.error('Error!', error.message);
                  submitBtn.disabled = false;
                  btnText.textContent = 'Request Free Estimate';
                  btnIcon.setAttribute('icon', 'solar:arrow-right-linear');
                  btnIcon.classList.remove('animate-spin');
                  alert('There was an error sending your request. Please check your script URL and ensure it is deployed correctly.');
              });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center">
<span className="text-xl font-semibold tracking-tighter text-gray-900">
              TCLA
            </span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
              How it Works
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Benefits
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Portfolio
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Reviews
            </a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:flex items-center text-sm font-medium text-gray-600 hover:text-gray-900" href="tel:5551234567">
<iconify-icon className="mr-2" icon="solar:phone-linear" width="18"></iconify-icon>
              (555) 123-4567
            </a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-24 lg:pb-32 overflow-hidden bg-white pt-16 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 mb-6">
<span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              Serving all of Los Angeles County
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
              Transform your LA lawn into a
              <span className="text-emerald-700">zero-maintenance</span>
              oasis.
            </h1>
<p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
              Get the lush, green yard you've always wanted without the mowing,
              fertilizers, or skyrocketing water bills. Expert installation
              guaranteed.
            </p>
<ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0 mb-8">
<li className="flex items-start">
<iconify-icon className="text-emerald-600 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-600">
                  Dramatically reduce your monthly water bill.
                </span>
</li>
<li className="flex items-start">
<iconify-icon className="text-emerald-600 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-600">
                  Pet and child safe, non-toxic materials.
                </span>
</li>
<li className="flex items-start">
<iconify-icon className="text-emerald-600 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-600">
                  15-year warranty on all installations.
                </span>
</li>
</ul>
</div>

<div className="lg:col-span-6 relative">
<div className="absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 -z-10 overflow-hidden shadow-sm">
<img alt="Lush artificial grass background" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8 relative z-10 min-h-[420px] flex flex-col justify-center">

<div className="hidden text-center py-8" id="successMessage">
<div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">
                  Request Received!
                </h3>
<p className="text-sm text-gray-500">
                  Thank you for your interest. Our team will contact you shortly
                  to provide your free estimate.
                </p>
</div>

<div id="formContainer">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">
                  Get Your Free Estimate
                </h2>
<p className="text-sm text-gray-500 mb-6">
                  Fill out the form below and our team will contact you within
                  24 hours.
                </p>
<form className="space-y-4" id="leadForm" name="submit-to-google-sheet">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="firstName">
                        First Name
                      </label>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" id="firstName" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="lastName">
                        Last Name
                      </label>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">
                      Email Address
                    </label>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="phone">
                        Phone Number
                      </label>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" id="phone" name="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="zip">
                        Zip Code
                      </label>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" id="zip" name="zip" placeholder="90001" required="" type="text"/>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm py-3 px-4 rounded-lg transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed" id="submitBtn" type="submit">
<span id="btnText">Request Free Estimate</span>
<iconify-icon className="ml-2" icon="solar:arrow-right-linear" id="btnIcon" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-center text-gray-400 mt-4">
                    By submitting, you agree to our privacy policy. No spam,
                    ever.
                  </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
          Trusted by homeowners across Los Angeles
        </p>
<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-50 grayscale">
<div className="flex items-center space-x-2">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">
              5 STAR RATED
            </span>
</div>
<div className="flex items-center space-x-2">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">
              LICENSED &amp; BONDED
            </span>
</div>
<div className="flex items-center space-x-2">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">
              ECO FRIENDLY
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
            Why LA is switching to artificial turf
          </h2>
<p className="text-base text-gray-500">
            Modern synthetic grass offers unparalleled benefits over traditional
            lawns, specifically designed for the Southern California climate.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-600" icon="solar:waterdrop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Save Water &amp; Money
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Eliminate watering completely. Significantly reduce your monthly
              utility bills and avoid drought restrictions.
            </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-600" icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Zero Maintenance
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Reclaim your weekends. No more mowing, weeding, edging, or
              applying toxic fertilizers ever again.
            </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-600" icon="solar:paw-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Pet &amp; Child Friendly
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Durable enough for active dogs, soft enough for kids.
              Antimicrobial infill prevents odors and bacteria.
            </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-600" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Always Perfect
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Enjoy a pristine, lush green yard 365 days a year, regardless of
              the season or extreme weather.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
              Picture-perfect lawns, year-round.
            </h2>
<p className="text-base text-gray-500">
              Take a look at some of our recent artificial turf installations
              across Los Angeles.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm group relative aspect-[4/3] md:aspect-[3/4]">
<img alt="Modern backyard with artificial turf" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm group relative aspect-[4/3] md:aspect-[3/4] md:mt-12">
<img alt="Pet friendly artificial grass" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm group relative aspect-[4/3] md:aspect-[3/4]">
<img alt="Front yard turf installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-xl font-semibold tracking-tighter text-gray-900">
            TCLA
          </span>
<p className="text-xs text-gray-500 mt-2">
            Premium artificial turf installation for Los Angeles County.
          </p>
</div>
<div className="flex space-x-6">
<a className="text-xs text-gray-500 hover:text-gray-900" href="#">
            Privacy Policy
          </a>
<a className="text-xs text-gray-500 hover:text-gray-900" href="#">
            Terms of Service
          </a>
<a className="text-xs text-gray-500 hover:text-gray-900" href="#">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
<p className="text-xs text-gray-400 text-center md:text-left">
          © 2024 Turf City LA. All rights reserved.
        </p>
</div>
</footer>



    </>
  );
}
