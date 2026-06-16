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
      

<nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<img alt="Minnesota Chiropractic Neurology" className="w-[11.25rem] h-auto" src="https://images.squarespace-cdn.com/content/v1/66c4b69768211755ce87a144/423af0f4-730d-4e60-aab1-383d453b9c9f/Minnesota+no+tagline.jpg?format=1500w"/>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#1A3E6A]">
<a className="hover:opacity-70 transition-opacity" href="#">
            763-398-7770
          </a>
<a className="bg-[#22C55E] text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors" href="#">
            Book Now
          </a>
</div>
</div>
</nav>

<section className="py-16 md:py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-[#1A3E6A] tracking-tight leading-tight mb-6">
          Most Patients Get Relief in the First 7 Days.
        </h1>
<p className="text-lg md:text-xl text-[#333333] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          17 years helping people in the Twin Cities find real answers for
          neuropathy, thyroid disease, and chronic conditions that other doctors
          couldn't fix.
        </p>
<div className="flex flex-col items-center space-y-4">
<a className="inline-block bg-[#22C55E] text-white text-base md:text-lg font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
            Click Here to Book Your Free Consultation
          </a>
<p className="text-xs font-semibold text-[#1A3E6A] tracking-widest uppercase mt-4">
            MINNESOTA CHIROPRACTIC NEUROLOGY | MOUNDS VIEW, MN | 763-398-7770
          </p>
</div>
</div>
</section>

<section className="pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-8">
<h2 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight">
            Watch This Before Your First Visit
          </h2>
</div>
<div className="relative aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden vsl-shadow border-4 border-[#1A3E6A]">

<div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-4xl" icon="solar:play-bold"></iconify-icon>
</div>
<img alt="Video Preview" className="absolute inset-0 -z-10 object-cover opacity-60" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<p className="text-center text-sm text-slate-600 mt-6 max-w-2xl mx-auto">
          Dr. Josh Huffman explains what we look for, why most treatments miss
          the root cause, and what the Brain-Body RESET Program actually does.
        </p>
</div>
</section>

<section className="py-20 px-6 bg-[#F8F8F8]">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A3E6A] text-center tracking-tight mb-16">
          Sound Familiar?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-[#1A3E6A] text-3xl mb-4" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#1A1A1A] leading-relaxed">
              You have been told your labs look fine. But you still feel
              terrible.
            </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-[#1A3E6A] text-3xl mb-4" icon="solar:pill-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#1A1A1A] leading-relaxed">
              You have tried the medications. They dulled the pain but nothing
              actually got better.
            </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-[#1A3E6A] text-3xl mb-4" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#1A1A1A] leading-relaxed">
              You have been to multiple doctors and walked out with no real
              answers.
            </p>
</div>
</div>
<p className="text-center text-lg text-[#333333] mt-16 max-w-2xl mx-auto">
          This is exactly the kind of case we specialize in. And we have been
          doing this for over 17 years.
        </p>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A3E6A] tracking-tight mb-16 text-center md:text-left">
          The Brain-Body RESET Program
        </h2>
<div className="space-y-12">
<div className="flex gap-6">
<span className="text-3xl font-semibold text-[#1A3E6A] tabular-nums">
              01
            </span>
<div>
<h3 className="text-xl font-semibold text-[#1A3E6A] mb-3">
                Find the Root Cause
              </h3>
<p className="text-base text-[#333333] leading-relaxed">
                We run advanced lab testing most standard offices never order.
                We look at inflammation, fuel delivery, and metabolic imbalances
                that explain why you feel the way you do.
              </p>
</div>
</div>
<div className="flex gap-6">
<span className="text-3xl font-semibold text-[#1A3E6A] tabular-nums">
              02
            </span>
<div>
<h3 className="text-xl font-semibold text-[#1A3E6A] mb-3">
                Build Your Program
              </h3>
<p className="text-base text-[#333333] leading-relaxed">
                Every patient gets a specific plan based on their labs and their
                neurological exam. Not a generic protocol. An actual plan built
                around what we find.
              </p>
</div>
</div>
<div className="flex gap-6">
<span className="text-3xl font-semibold text-[#1A3E6A] tabular-nums">
              03
            </span>
<div>
<h3 className="text-xl font-semibold text-[#1A3E6A] mb-3">
                Activate the Healing Process
              </h3>
<p className="text-base text-[#333333] leading-relaxed">
                We use functional neurology, chiropractic, and advanced
                therapies including low-level laser to stimulate nerve repair
                and restore brain-body communication.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block bg-[#22C55E] text-white text-base md:text-lg font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all" href="#">
            Click Here to Book Your Free Consultation
          </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#1A3E6A] text-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-16">
          What Patients Are Saying
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#244b7d] p-8 rounded-2xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base mb-6 leading-relaxed opacity-90">
              "Dr. Josh and his team gave me my life back. I've tried it all
              from Chinese medicine to acupuncture to prescription drugs and it
              never worked."
            </p>
<p className="text-sm font-medium">— Ashley M.</p>
</div>

<div className="bg-[#244b7d] p-8 rounded-2xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base mb-6 leading-relaxed opacity-90">
              "For years my tests said I was fine. Dr. Huffman identified my
              thyroid issue and provided targeted treatments. I feel so much
              better."
            </p>
<p className="text-sm font-medium">— Teresa K.</p>
</div>

<div className="bg-[#244b7d] p-8 rounded-2xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base mb-6 leading-relaxed opacity-90">
              "I have 75% of feeling back in my feet. Lost twenty pounds,
              lowered my blood pressure. In terms of my overall health this is
              the best I have ever felt."
            </p>
<p className="text-sm font-medium">— Bob T.</p>
</div>

<div className="bg-[#244b7d] p-8 rounded-2xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base mb-6 leading-relaxed opacity-90">
              "I spent years going from doctor to doctor only to be given pills
              with no real solutions. They actually listen. Really listen. Now I
              finally have some answers."
            </p>
<p className="text-sm font-medium">— Jen M.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-[#1A3E6A] text-center tracking-tight mb-12">
          More Patient Stories
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-3">
<div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-[#1A3E6A] text-4xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-500">
              [Patient video testimonial]
            </p>
</div>
<div className="space-y-3">
<div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-[#1A3E6A] text-4xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-500">
              [Patient video testimonial]
            </p>
</div>
<div className="space-y-3">
<div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-[#1A3E6A] text-4xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-500">
              [Patient video testimonial]
            </p>
</div>
</div>
<p className="text-center text-base text-[#333333] mt-10">
          Real patients. Real outcomes. No scripts.
        </p>
</div>
</section>

<section className="py-20 px-6 bg-[#F8F8F8]">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-inner">
<img alt="Dr. Josh Huffman" className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/v2/C5603AQFAn-hj4JXr3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517694468295?e=2147483647&amp;v=beta&amp;t=kN84wK5_cM_XYchtG6cyTA5g377SowJ8puvJ-FRLSOY"/>
</div>
<div className="space-y-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A3E6A] tracking-tight">
                Dr. Josh Huffman
              </h2>
<p className="text-xs font-semibold text-[#1A3E6A] tracking-widest mt-2">
                DC, DACNB, CFMP, FICT, DABAAHP
              </p>
</div>
<div className="space-y-4 text-base text-[#333333] leading-relaxed">
<p>
                Dr. Huffman has been in private practice for over 17 years
                helping patients with chronic neurological and metabolic
                conditions find answers when nobody else could.
              </p>
<p>
                He is a board certified chiropractic neurologist, certified
                functional medicine practitioner, and 2019 Educator of the Year
                for the International Association of Functional Neurology and
                Rehabilitation.
              </p>
<p>
                He teaches other doctors the methods he uses. His patients
                travel from across the country for his intensive programs.
              </p>
</div>
<div className="pt-6">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                As Seen On
              </p>
<div className="flex items-center space-x-6 opacity-50 grayscale">
<span className="text-xl font-semibold tracking-tighter">ABC</span>
<span className="text-xl font-semibold tracking-tighter">CBS</span>
<span className="text-xl font-semibold tracking-tighter">FOX</span>
<span className="text-xl font-semibold tracking-tighter">NBC</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1A3E6A] text-white text-center">
<div className="max-w-4xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Ready to Find Out What Is Actually Going On?
        </h2>
<p className="text-lg md:text-xl font-normal opacity-90">
          Book a free phone consultation with our new patient coordinator. No
          commitment. Just answers.
        </p>
<div className="pt-4">
<a className="inline-block bg-[#22C55E] text-white text-lg md:text-xl font-medium px-10 py-5 rounded-lg shadow-2xl hover:bg-green-600 transition-all hover:scale-105 active:scale-95" href="#">
            Click Here to Book Your Free Consultation
          </a>
</div>
<p className="text-sm font-medium pt-8 opacity-70 uppercase tracking-wide">
          Minnesota Chiropractic Neurology | 5372 Edgewood Dr. Mounds View, MN
          55112 | 763-398-7770
        </p>
</div>
</section>

<footer className="bg-[#0f243e] py-12 px-6 text-white border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
<div className="flex flex-col items-center md:items-start space-y-2">
<span className="text-xl font-semibold tracking-tighter">MINNESOTA</span>
<span className="text-[10px] tracking-[0.2em] uppercase opacity-60">
            Chiropractic Neurology
          </span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center space-x-2 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<span>763-398-7770</span>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left">
<p className="text-xs text-slate-500">
          © 2024 Minnesota Chiropractic Neurology. All rights reserved.
        </p>
</div>
</footer>

    </>
  );
}
