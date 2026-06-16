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



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach((element) => {
              observer.observe(element);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-gray-950 uppercase" href="#">
              Viza
              <span className="text-orange-500">.</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">
              About Us
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#services">
              Services
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#process">
              Process
            </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#work">
              Our Work
            </a>
</div>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-gray-950 text-white hover:bg-gray-800 rounded-full px-5 py-2.5 shadow-sm" href="tel:9515059538">
<iconify-icon className="mr-2 text-base" icon="solar:phone-linear"></iconify-icon>
              951-505-9538
            </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 hero-bg">
<div className="absolute inset-0 bg-gray-950/85 backdrop-blur-[2px]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal active">
<span className="inline-flex items-center text-orange-400 font-medium text-xs uppercase tracking-widest mb-4">
<span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
          Fontana's Trusted Roofing Experts
        </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Reliable Roofing You Can
          <span className="text-gray-400">Trust</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Top-tier quality, unwavering reliability, and decades of expertise.
          Don't let the name fool you—we are Fontana's premier roofing
          specialists.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5" href="tel:9515059538">
            Call Now: 951-505-9538
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-full bg-transparent border border-gray-600 text-white hover:bg-white/10 transition-all" href="#services">
            Explore Services
          </a>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 mb-6">
              Built on 30+ Years of Experience &amp; Integrity.
            </h2>
<p className="text-base text-gray-500 leading-relaxed mb-6">
              Led by Victor, a seasoned professional with over three decades of
              hands-on experience, Viza Plumbing is dedicated exclusively to
              providing top-quality roofing solutions.
            </p>
<p className="text-base text-gray-500 leading-relaxed mb-8">
              We believe in doing things right the first time. From minor leak
              detections to full roof installations, our commitment to
              exceptional workmanship and total customer satisfaction remains
              unmatched in Fontana and surrounding areas.
            </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
<div>
<p className="text-3xl font-semibold text-gray-950 tracking-tight">
                  30+
                </p>
<p className="text-sm text-gray-500 mt-1">Years Experience</p>
</div>
<div>
<p className="text-3xl font-semibold text-gray-950 tracking-tight">
                  100%
                </p>
<p className="text-sm text-gray-500 mt-1">Satisfaction</p>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 relative">
<img alt="Roofing Professional" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ac3dbb1-4e92-459b-a47b-d6c1b632ba0c_1600w.png"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>

<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 mb-4">
            Comprehensive Roofing Solutions
          </h2>
<p className="text-base text-gray-500">
            Expert care for every aspect of your roof, ensuring long-lasting
            protection for your home.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 reveal">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors text-gray-700">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-950 mb-3">
              Roof Installation
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Precision installation of new roofs using high-quality materials
              built to withstand California weather.
            </p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 reveal delay-100">
<div className="flex group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors text-gray-700 bg-gray-50 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:tools-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl" height="23" icon="solar:clipboard-check-linear" strokeWidth="1.5" style={{color: 'rgb(249, 115, 22)'}} width="23"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-950 mb-3">
              Roof Repair
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Fast, reliable repairs for damaged shingles, structural issues,
              and wear-and-tear.
            </p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors text-gray-700">
<iconify-icon className="text-2xl" height="23" icon="solar:clipboard-check-linear" strokeWidth="1.5" style={{color: 'rgb(249, 115, 22)'}} width="23"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-950 mb-3">
              Roof Inspection
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Thorough assessments to identify potential issues early and extend
              the lifespan of your roof.
            </p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 reveal delay-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors text-gray-700">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-950 mb-3">
              Leak Detection
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Advanced techniques to pinpoint and seal hard-to-find leaks before
              they cause major damage.
            </p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 reveal">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors text-gray-700">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-950 mb-3">
              Maintenance
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Routine preventative maintenance to keep your roof in optimal
              condition year-round.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 mb-4">
            Our Process
          </h2>
<p className="text-base text-gray-500">
            Simple, transparent, and hassle-free from start to finish.
          </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center reveal">
<div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6 text-gray-900 shadow-sm relative">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-950 text-white text-xs flex items-center justify-center font-medium">
                  1
                </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-950 mb-2">
                Consultation
              </h3>
<p className="text-sm text-gray-500">
                We carefully assess your roofing needs and inspect the property.
              </p>
</div>

<div className="flex flex-col items-center text-center reveal delay-100">
<div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6 text-gray-900 shadow-sm relative">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-950 text-white text-xs flex items-center justify-center font-medium">
                  2
                </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-950 mb-2">
                Planning &amp; Estimate
              </h3>
<p className="text-sm text-gray-500">
                Clear, honest pricing and a solid timeline with no hidden
                surprises.
              </p>
</div>

<div className="flex flex-col items-center text-center reveal delay-200">
<div className="w-16 h-16 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center mb-6 text-orange-500 shadow-sm relative bg-orange-50">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-medium">
                  3
                </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-950 mb-2">
                Execution
              </h3>
<p className="text-sm text-gray-500">
                Professional, efficient completion leaving your property clean
                and secure.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-950 text-white" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Recent Projects
            </h2>
<p className="text-base text-gray-400">
              A glimpse into our commitment to quality craftsmanship.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 reveal">
<img alt="Roofing Project" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc674fe4-ff1d-4b01-8575-3d91b6d75dd1_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-sm font-medium text-white tracking-tight">
                Complete Shingle Replacement
              </span>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 reveal delay-100">
<img alt="Roofing Project" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1582f3b-fcf0-4a28-90cc-f158dd896068_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-sm font-medium text-white tracking-tight">
                New Roof Installation
              </span>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 reveal delay-200">
<img alt="Roofing Project" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c71022b-c6a1-4ffe-acd7-81474b659623_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-sm font-medium text-white tracking-tight">
                Structural Repair
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 mb-4">
            Trusted by the Community
          </h2>
<p className="text-base text-gray-500">
            Don't just take our word for it.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm reveal">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">
              "Victor and his team were incredibly professional. We had a severe
              leak during the storms, and they found it quickly and repaired it
              flawlessly. Highly recommend their roofing services!"
            </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">
                SM
              </div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-950">Sarah M.</p>
<p className="text-xs text-gray-500">Fontana, CA</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm reveal delay-100">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">
              "Despite the name saying plumbing, these guys are master roofers.
              They replaced our entire roof in just a few days. Clean site, fair
              pricing, and outstanding quality."
            </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">
                JD
              </div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-950">John D.</p>
<p className="text-xs text-gray-500">Fontana, CA</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm reveal delay-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">
              "Honest and reliable. Victor gave me a straight answer about what
              needed to be fixed versus what could wait. It's rare to find such
              integrity in contractors today."
            </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">
                MR
              </div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-950">Mike R.</p>
<p className="text-xs text-gray-500">Rancho Cucamonga, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-500 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-400/50 mix-blend-multiply filter blur-3xl opacity-70"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-orange-600/50 mix-blend-multiply filter blur-3xl opacity-70"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Need Roofing Help? We’ve Got You Covered.
        </h2>
<p className="text-lg text-orange-100 font-medium mb-10 max-w-2xl mx-auto">
          Don't wait for a small leak to become a massive problem. Contact
          Victor and the team for immediate, professional assistance.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-gray-950 text-white hover:bg-gray-900 transition-all hover:shadow-xl hover:-translate-y-0.5" href="tel:9515059538">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon>
            Call Now: 951-505-9538
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-white text-gray-950 hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5" href="#">
            Request a Free Estimate
          </a>
</div>
</div>
</section>

<footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div className="col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white uppercase inline-block mb-4" href="#">
              Viza
              <span className="text-orange-500">.</span>
</a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Premium roofing services delivered with integrity and 30+ years of
              expertise. Your trusted partner in Fontana, CA.
            </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-tight mb-4">
              Contact
            </h4>
<ul className="space-y-3">
<li className="flex items-start text-xs text-gray-400">
<iconify-icon className="mr-2 text-base shrink-0 text-gray-500" icon="solar:map-point-linear"></iconify-icon>
<span>Fontana, California</span>
</li>
<li className="flex items-center text-xs text-gray-400">
<iconify-icon className="mr-2 text-base shrink-0 text-gray-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:9515059538">
                  951-505-9538
                </a>
</li>
<li className="flex items-center text-xs text-gray-400">
<iconify-icon className="mr-2 text-base shrink-0 text-gray-500" icon="solar:user-linear"></iconify-icon>
<span>Ask for Victor</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-tight mb-4">
              Quick Links
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#services">
                  Services
                </a>
</li>
<li>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#process">
                  Our Process
                </a>
</li>
<li>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#work">
                  Gallery
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-gray-600 mb-4 md:mb-0">
            © 2023 Viza Plumbing. All rights reserved.
          </p>
<div className="flex space-x-4">
<p className="text-xs text-gray-600">
              Licensed &amp; Insured | License # 934187 C-39
            </p>
</div>
</div>
</div>
</footer>



    </>
  );
}
