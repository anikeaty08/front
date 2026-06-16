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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="uppercase flex items-center gap-2 text-lg font-semibold tracking-tighter" href="/home">
          LUTZVILLE PROPERTIES
        </a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="/home">
            Home
          </a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="/services">
            Services
          </a>

<div className="group relative py-4">
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="/about">
              About
            </a>
</div>
<div className="group relative py-4">
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="/projects">
              Projects
            </a>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="hover:bg-gray-800 transition-colors text-xs font-medium text-white bg-black rounded-full pt-2 pr-4 pb-2 pl-4" href="/contact">
            Contact
          </a>
</div>
<button className="md:hidden text-gray-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-32 md:pb-24 overflow-hidden pt-24 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 leading-tight mb-6">
          Trusted Construction Experts
          <br/>
<span className="text-gray-400">Building Cape Town's Future</span>
</h1>
<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 tracking-tight">
          Specializing in high-end commercial and residential remodeling across
          Cape Town and the greater Western Cape area.
        </p>
<nav className="flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
</nav>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-3 gap-4">
<div className="col-span-1 relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/60 shadow-sm">
<img alt="About NY Built" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/60 shadow-sm">
<img alt="Cape Town Construction Projects" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="">
<h2 className="uppercase text-sm font-medium text-gray-400 tracking-widest mb-3">Who Are we?</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            Trusted Construction Experts Building Cape Town's Future
          </h3>
<div className="flex flex-col gap-6">
<div className="">
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">
                Our Vision
              </h4>
<p className="text-sm text-gray-500 leading-relaxed">
                To shape Cape Town's skyline with high-quality, sustainable, and
                innovative construction that stands the test of time.
              </p>
</div>
<div className="">
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">
                Our Mission
              </h4>
<p className="text-sm text-gray-500 leading-relaxed">
                At NY Built Construction, we deliver top-tier residential,
                commercial, and renovation projects across Cape Town — blending
                modern design with unmatched craftsmanship.
              </p>
</div>
<div className="grid grid-cols-2 gap-4 mt-2">
<div className="p-4 border border-gray-200/60 rounded-xl bg-gray-50/50">
<div className="text-3xl font-semibold tracking-tighter text-gray-900 mb-1">
                  25+
                </div>
<div className="text-xs font-medium text-gray-500 tracking-tight">
                  Projects across Cape Town suburbs
                </div>
</div>
<div className="p-4 border border-gray-200/60 rounded-xl bg-gray-50/50">
<div className="text-3xl font-semibold tracking-tighter text-gray-900 mb-1">
                  50+
                </div>
<div className="text-xs font-medium text-gray-500 tracking-tight">
                  Skilled professionals
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
              Who We Are
            </h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              NY Built Construction
            </h3>
<p className="text-base text-gray-500 mb-8 leading-relaxed">
              NY Built Construction is a trusted name in the construction
              industry, delivering quality craftsmanship, innovative solutions,
              and exceptional service. We specialize in residential, commercial,
              and renovation projects with a focus on reliability,
              sustainability, and customer satisfaction.
            </p>
<ul className="flex flex-col gap-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
<iconify-icon className="text-black" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Expert Construction &amp; Renovation Services
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
<iconify-icon className="text-black" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Trusted by homeowners and bodies corporate across Cape Town
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
<iconify-icon className="text-black" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Commitment to Quality and Timely Delivery
              </li>
</ul>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">
              We work closely with clients to bring their vision to life,
              ensuring every project meets the highest standards of design,
              safety, and durability.
            </p>
<div className="flex items-center gap-4 p-4 border border-gray-200/60 rounded-xl bg-white">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gray-500 tracking-tight">
                  Call Us 24/7
                </div>
<a className="text-base font-semibold tracking-tight text-gray-900" href="tel:+27214000000">
                  +27 21 400 0000
                </a>
</div>
</div>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/60 shadow-sm">
<img alt="NY Built Cape Town" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-8 border border-gray-200/60 rounded-2xl bg-gray-50/30 text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
            643+
          </div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-2">
            Completed Projects
          </h4>
<p className="text-xs text-gray-500 leading-relaxed">
            After more than two decades of success in construction.
          </p>
</div>
<div className="p-8 border border-gray-200/60 rounded-2xl bg-gray-50/30 text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
            4K+
          </div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-2">
            Experienced Workers
          </h4>
<p className="text-xs text-gray-500 leading-relaxed">
            A skilled team committed to exceptional craftsmanship.
          </p>
</div>
<div className="p-8 border border-gray-200/60 rounded-2xl bg-gray-50/30 text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
            89%
          </div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-2">
            Happy Customers
          </h4>
<p className="text-xs text-gray-500 leading-relaxed">
            Trusted by clients across Cape Town and surrounds.
          </p>
</div>
<div className="p-8 border border-gray-200/60 rounded-2xl bg-gray-50/30 text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
            45+
          </div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-2">
            Construction Awards
          </h4>
<p className="text-xs text-gray-500 leading-relaxed">
            Recognised for excellence and innovation in our work.
          </p>
</div>
</div>
</section>

<section className="border-y bg-gray-50/50 border-gray-100 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/60 shadow-sm">
<img alt="FAQ" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="">
<h2 className="uppercase text-sm font-medium text-gray-400 tracking-widest mb-3">Company name</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
<div className="flex flex-col gap-3">
<details className="group p-6 bg-white border border-gray-200/60 rounded-xl" open="">
<summary className="flex items-center justify-between cursor-pointer text-sm font-semibold tracking-tight text-gray-900 list-none">
                  What kind of warranty or guarantee do you offer?
                  <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="leading-relaxed text-sm text-gray-500 mt-4">Company provides a workmanship warranty on all projects, ensuring repairs or adjustments are handled promptly. Product warranties are honored as per the manufacturer's terms.</p>
</details>
<details className="group p-6 bg-white border border-gray-200/60 rounded-xl">
<summary className="flex cursor-pointer list-none text-sm font-semibold text-gray-900 tracking-tight items-center justify-between">Why should I choose Company for my project?</summary>
<p className="text-sm text-gray-500 leading-relaxed mt-4">
                  We combine years of expertise, modern construction methods,
                  and high-quality materials to deliver projects on time and
                  within budget. Our customer-focused approach ensures your
                  vision is brought to life.
                </p>
</details>
<details className="group p-6 bg-white border border-gray-200/60 rounded-xl">
<summary className="flex cursor-pointer list-none text-sm font-semibold text-gray-900 tracking-tight items-center justify-between">What is the process for working with Company?</summary>
<p className="text-sm text-gray-500 leading-relaxed mt-4">
                  Our process includes a consultation to understand your needs,
                  detailed planning, transparent pricing, timely execution, and
                  final inspection to ensure complete satisfaction.
                </p>
</details>
<details className="group bg-white border-gray-200/60 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<summary className="flex cursor-pointer list-none text-sm font-semibold text-gray-900 tracking-tight items-center justify-between">
                  What types of projects do you specialize in?
                  <iconify-icon className="group-open:rotate-180 transition-transform" height="14" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(17, 24, 39)'}} width="14"></iconify-icon>
</summary>
<p className="text-sm text-gray-500 leading-relaxed mt-4">
                  We specialize in residential construction, commercial
                  buildings, remodeling, renovations, and custom design projects
                  with a strong emphasis on quality and sustainability.
                </p>
</details>
</div>
</div>
</div>
</div>
</section>



<footer className="bg-gray-50 border-t border-gray-200/60 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="uppercase flex items-center gap-2 text-lg font-semibold tracking-tighter mb-4" href="./">
              Lutzville Properties
            </a>
<p className="leading-relaxed text-gray-500 mb-6">
              Lutzville Properties is committed to excellence in construction,
              delivering quality projects to clients in Cape Town while
              upholding safety and innovation in every build.
            </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="https://www.facebook.com/people/NY-BUILT/100086049122418/" target="_blank">
<iconify-icon icon="solar:gallery-bold" style={{fontSize: '1.25rem'}}></iconify-icon>

</a>
<a className="hover:text-gray-900 transition-colors" href="https://www.youtube.com/channel/UCz4p_26XImdxZhstIm6Ucvw" target="_blank">
<iconify-icon icon="solar:play-circle-bold" style={{fontSize: '1.25rem'}}></iconify-icon>

</a>
</div>
</div>

<div className="">
<h4 className="font-semibold tracking-tight text-gray-900 mb-4">
              Service Area
            </h4>
<ul className="flex flex-col gap-2">
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="city-bowl.php">
                  City Bowl, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="sea-point.php">
                  Sea Point, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="camps-bay.php">
                  Camps Bay, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="southern-suburbs.php">
                  Southern Suburbs, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="atlantic-seaboard.php">
                  Atlantic Seaboard, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="northern-suburbs.php">
                  Northern Suburbs, Cape Town
                </a>
</li>
<li className="">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="v-and-a-waterfront.php">
                  V&amp;A Waterfront, Cape Town
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-semibold tracking-tight text-gray-900 mb-4">
              Quick Links
            </h4>
<ul className="flex flex-col gap-2">
<li className="">
<a className="hover:text-gray-900 transition-colors text-gray-500" href="/about">
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-gray-900 transition-colors text-gray-500" href="/services">
                  Services
                </a>
</li>
<li className="">
<a className="hover:text-gray-900 transition-colors text-gray-500" href="/projects">
                  Projects
                </a>
</li>
<li className="">
<a className="hover:text-gray-900 transition-colors text-gray-500" href="/home">Home</a>
</li>
<li className="">
<a className="hover:text-gray-900 transition-colors text-gray-500" href="/contact">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold tracking-tight text-gray-900 mb-4">
              Contact Us
            </h4>
<ul className="flex flex-col gap-4 text-gray-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:map-point-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<a className="hover:text-gray-900 transition-colors" href="https://www.google.com/maps" target="_blank">
                  12 Long Street, Cape Town,
                  <br/>
                  Western Cape 8001, South Africa
                </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<a className="hover:text-gray-900 transition-colors" href="tel:+27214000000">
                  +27 21 400 0000
                </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<a className="hover:text-gray-900 transition-colors" href="mailto:info@nybuilt.co.za">
                  info@nybuilt.co.za
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200/60 text-xs text-gray-400">
<p>Copyright © 2026 - All Rights Reserved By NY Built.</p>
<p className="mt-2 sm:mt-0">Powered by D Tech Solution</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
<a aria-label="Call Us" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-gray-900" href="tel:+27214000000">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Email Us" className="group flex items-center justify-center w-12 h-12 rounded-full bg-black border border-black shadow-sm hover:shadow-md transition-all text-white hover:bg-gray-800" href="mailto:info@nybuilt.co.za">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>

    </>
  );
}
