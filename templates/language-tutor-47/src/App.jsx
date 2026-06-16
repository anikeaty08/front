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
      

<div className="bg-neutral-900 text-white px-4 py-2 text-center text-base font-normal tracking-wide">
      Start speaking Welsh from your first lesson.
    </div>

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tight uppercase" href="#">
            BRYAN.
          </a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-neutral-900 text-white text-lg font-normal hover:bg-neutral-800 transition-colors shadow-sm" href="#pricing">
            Book a Trial
          </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

<img alt="Bryan Roberts" className="object-cover aspect-square shadow-sm mb-8 ring-1 ring-neutral-900/5" src="https://i.ibb.co/s9Fpc4ZH/bryan-profile.jpg" style={{width: '200px', borderRadius: '50%'}}/>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-base font-normal text-neutral-600">
              Athro Cymraeg (Welsh tutor) &amp; Native Speaker from North Wales
            </span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 max-w-5xl mx-auto text-balance leading-tight">
            Speak Welsh with Confidence —
            <span className="text-neutral-400">Learn with a Native Speaker.</span>
</h1>
<p className="text-2xl md:text-3xl text-neutral-600 mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
            Native Welsh speaker from Bangor, Gwynedd, helping learners build
            confidence speaking Cymraeg.
          </p>
<p className="text-xl md:text-2xl text-neutral-500 mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
            Lessons are relaxed, friendly, and focused on helping you speak
            Welsh with confidence.
          </p>
<p className="text-xl md:text-2xl text-neutral-500 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            Learn Welsh through real conversation from your very first lesson.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white text-lg font-normal hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#pricing">
              Book a Lesson
              <iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-50/40 to-neutral-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</section>

<section className="py-24 bg-white border-y border-neutral-100" id="approach">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              A modern approach to learning Welsh
            </h2>
<p className="text-xl text-neutral-500 mb-12 leading-relaxed max-w-2xl mx-auto">
              With over 10 years’ experience, I help adult learners build
              confidence speaking Welsh through relaxed, conversation-focused
              lessons.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mt-1">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:microphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                    Native Welsh Pronunciation
                  </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                    Perfect those tricky ll and ch sounds with guidance from a
                    native speaker.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mt-1">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                    Personalised Lessons
                  </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                    Whether you're learning Welsh for family, work, relocation
                    to Wales, or personal interest, each lesson is tailored to
                    your goals and learning style.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="audience">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">
              Who my lessons are for
            </h2>
<p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              These lessons are ideal for:
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                  Heritage Seekers
                </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                  Adults reconnecting with Welsh heritage.
                </p>
</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                  New Residents
                </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                  Learners moving to Wales.
                </p>
</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                  Dysgu Cymraeg Students
                </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                  Students who want more speaking practice.
                </p>
</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-5 h-5 text-neutral-700 flex items-center justify-center" icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight mb-1">
                  Language Enthusiasts
                </h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                  Enthusiasts interested in Celtic languages.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-neutral-200" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-base font-medium text-neutral-500 uppercase tracking-wider mb-2">
              Trusted by learners worldwide
            </p>
<h2 className="text-3xl font-medium tracking-tight mb-4">
              What my students say
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-lg text-neutral-600 leading-relaxed mb-8">
                “He is friendly, patient, and very flexible…”
              </p>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-neutral-900">
                  — Stefanie
                </span>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-lg text-neutral-600 leading-relaxed mb-8">
                "I really enjoyed my lesson with Bryan!"
              </p>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-neutral-900">
                  — Nick
                </span>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-lg text-neutral-600 leading-relaxed mb-8">
                "Bryan’s energy and enthusiasm made me feel instantly
                comfortable and supported."
              </p>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-neutral-900">
                  — Carolina
                </span>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-lg text-neutral-600 leading-relaxed mb-8">
                "It really helped my confidence by giving me a focused session
                in spoken Welsh — exactly what I needed."
              </p>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-neutral-900">
                  — Martin
                </span>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-lg text-neutral-600 leading-relaxed mb-8">
                "Bryan was fun and engaging. He helped me relax quickly and I
                really appreciated the extra practice and correction."
              </p>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-neutral-900">
                  — April
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
<p className="text-xl text-neutral-500 mb-4 leading-relaxed">
              Simple pricing — no contracts, flexible scheduling. Flexible
              options to suit different budgets and learning goals.
            </p>
<p className="text-xl text-neutral-500 mb-4 leading-relaxed">
              Learn Welsh through real conversation from your very first lesson.
            </p>
<p className="text-xl text-neutral-500 leading-relaxed">
              Ideal for learners who want to start speaking Welsh with
              confidence — even if you’re a complete beginner or feel out of
              practice.
            </p>
</div>

<div className="mb-8 p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-full">
<div className="inline-flex items-center gap-3 mb-2">
<h3 className="text-xl font-medium tracking-tight text-neutral-900">
                  Trial Lesson
                </h3>
<span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-base font-normal tracking-wide">
                  Recommended
                </span>
</div>
<div className="flex items-baseline text-4xl font-medium tracking-tight text-neutral-900 mb-2">
                £8
                <span className="text-lg font-normal text-neutral-500 tracking-normal ml-2">
                  (30 minutes)
                </span>
</div>
<p className="text-lg text-neutral-600 mb-6">
                An easy way to get started and see if Welsh lessons are right
                for you.
              </p>
<p className="text-base font-normal text-neutral-400 uppercase tracking-wider mb-4">
                Includes:
              </p>
<ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-neutral-700">
<li className="flex items-center gap-2.5">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Level assessment
                </li>
<li className="flex items-center gap-2.5">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Introduction to Welsh pronunciation
                </li>
<li className="flex items-center gap-2.5">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Short conversation practice
                </li>
</ul>
</div>
<a className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center py-3 px-8 rounded-xl bg-neutral-900 text-white text-lg font-normal hover:bg-neutral-800 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="https://paypal.me/yourusername/8" target="_blank">
              Book Trial
            </a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-wrap lg:flex-nowrap items-stretch">

<div className="rounded-3xl p-8 bg-[#FAFAFA] border border-neutral-200 flex flex-col h-full">
<h3 className="text-xl font-normal tracking-tight mb-6">
                Individual Classes
              </h3>
<div className="mb-6 flex items-baseline text-5xl font-medium tracking-tight">
                £15
                <span className="text-lg font-normal text-neutral-500 tracking-normal ml-1">
                  /hour
                </span>
</div>
<ul className="space-y-4 mb-6 flex-grow">
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  60-minute personalized lesson
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Flexible scheduling
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Native-speaker conversation practice
                </li>
</ul>
<div className="mb-8 p-4 rounded-xl bg-neutral-100/60 border border-neutral-200/60">
<p className="text-base font-normal text-neutral-900 mb-2.5">
                  Shorter sessions available:
                </p>
<div className="space-y-2 text-lg text-neutral-600">
<div className="flex justify-between items-center">
<span>45 minutes</span>
<span className="font-normal text-neutral-900">£13</span>
</div>
<div className="flex justify-between items-center">
<span>30 minutes</span>
<span className="font-normal text-neutral-900">£10</span>
</div>
</div>
</div>
<a className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-neutral-200 bg-white text-lg font-normal hover:bg-neutral-50 transition-colors shadow-sm mt-auto" href="https://paypal.me/yourusername/15" target="_blank">
                Book a Session
              </a>
</div>

<div className="rounded-3xl p-8 bg-neutral-900 text-white shadow-xl relative overflow-hidden flex flex-col h-full">
<div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-base font-normal text-white ring-1 ring-inset ring-white/20 mb-4 self-start">
                Most Popular
              </div>
<h3 className="text-xl font-normal tracking-tight mb-2">
                Welsh Progress Plan
              </h3>
<p className="text-lg text-neutral-400 mb-6">
                8 × 45-minute lessons
                <br/>
<span className="text-base block mt-1 opacity-80">
                  8 lessons over 4 weeks
                </span>
</p>
<div className="mb-6 flex items-baseline text-5xl font-medium tracking-tight">
                £78
                <span className="text-lg font-normal text-neutral-400 tracking-normal ml-1">
                  /month
                </span>
</div>
<p className="text-base font-normal text-neutral-300 uppercase tracking-wider mb-4">
                Includes:
              </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-lg text-neutral-200">
<iconify-icon className="w-5 h-5 text-white flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Reserved weekly slot
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-200">
<iconify-icon className="w-5 h-5 text-white flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Personalised feedback
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-200">
<iconify-icon className="w-5 h-5 text-white flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Flexible rescheduling
                </li>
</ul>
<a className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-white text-neutral-900 text-lg font-normal hover:bg-neutral-100 transition-colors mt-auto" href="https://paypal.me/yourusername/78" target="_blank">
                Select Package
              </a>
</div>

<div className="rounded-3xl p-8 bg-[#FAFAFA] border border-neutral-200 flex flex-col h-full">
<h3 className="text-xl font-normal tracking-tight mb-1">
                Saturday Welsh Speaking Club
              </h3>
<p className="text-lg text-neutral-400 mb-4 italic">
                Clwb Cymraeg Dydd Sadwrn
              </p>
<p className="text-lg text-neutral-500 mb-6">
                Friendly and relaxed Welsh conversation practice.
              </p>
<div className="mb-6 flex items-baseline text-5xl font-medium tracking-tight">
                £6
                <span className="text-lg font-normal text-neutral-500 tracking-normal ml-1">
                  /person
                </span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Small group (max 6 learners)
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Beginner to intermediate welcome
                </li>
<li className="flex items-start gap-3 text-lg text-neutral-700">
<iconify-icon className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  1 hour session – Saturdays 10:30 UK time
                </li>
</ul>
<div className="mb-8 p-4 rounded-xl bg-neutral-100/60 border border-neutral-200/60">
<p className="text-base text-neutral-600 leading-relaxed">
                  Ideal for learners who want more speaking practice alongside
                  their Welsh studies.
                  <strong>Dewch i ymarfer Cymraeg gyda ni!</strong>
</p>
<p className="text-sm text-neutral-500 leading-relaxed mt-3">
                  Sessions run with a minimum of 3 participants — if a session
                  doesn’t go ahead, your booking rolls over to the next class.
                </p>
</div>
<a className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-600 text-lg font-normal hover:bg-neutral-200 transition-colors mt-auto" href="mailto:bryancymraeg@gmail.com?subject=Saturday%20Club%20-%20Currently%20Paused">
                Bookings Temporarily Paused
              </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-neutral-200" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                Do I need any Welsh before starting?
              </h3>
<p className="text-lg text-neutral-600 leading-relaxed">
                No — beginners are welcome.
              </p>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                Where are lessons held?
              </h3>
<p className="text-lg text-neutral-600 leading-relaxed">
                Lessons take place online via Google Meet.
              </p>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                How often should I take lessons?
              </h3>
<p className="text-lg text-neutral-600 leading-relaxed">
                I recommend 1–2 lessons per week for steady progress.
              </p>
</div>
<div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                Can I book a trial lesson?
              </h3>
<p className="text-lg text-neutral-600 leading-relaxed">
                Yes — new students are welcome to start with a trial.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900">
            Start speaking Welsh today
          </h2>
<p className="text-xl text-neutral-500 mb-8 leading-relaxed">
            Book your trial lesson below.
          </p>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white text-lg font-normal hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg" href="#pricing">
            Book Trial Lesson
            <iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="bg-[#FAFAFA] border-t border-neutral-200 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-medium tracking-tight uppercase mb-4 inline-block" href="#">
              BRYAN.
            </a>
<p className="text-lg text-neutral-500 max-w-xs">
              Helping students worldwide discover the beauty of the Welsh
              language through personalized online tuition.
            </p>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 uppercase tracking-wider mb-4">
              Connect
            </h4>
<ul className="space-y-3">
<li>
<a className="inline-flex items-center gap-2 text-lg text-neutral-500 hover:text-neutral-900 transition-colors" href="mailto:bryancymraeg@gmail.com">
<iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  bryancymraeg@gmail.com
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-base text-neutral-400">
            © 2024 Bryan Roberts. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<a className="text-base text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-base text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
