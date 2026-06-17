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



      // 1. Countdown Timer Logic
      function initCountdown() {
          // Target date: June 10, 2026 at 10:00 AM EST (UTC-4 for EDT)
          const targetDate = new Date("2026-06-10T10:00:00-04:00");

          function update() {
              const now = new Date().getTime();
              const distance = targetDate.getTime() - now;

              if (distance < 0) {
                  document.getElementById('days').innerText = '00';
                  document.getElementById('hours').innerText = '00';
                  document.getElementById('minutes').innerText = '00';
                  document.getElementById('seconds').innerText = '00';
                  return;
              }

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              document.getElementById('days').innerText = days.toString().padStart(2, '0');
              document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
              document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
              document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
          }

          update();
          setInterval(update, 1000);
      }

      // 2. Modal Logic
      function initModal() {
          const modal = document.getElementById('booking-modal');
          const openButtons = document.querySelectorAll('.open-modal');
          const closeElements = document.querySelectorAll('.modal-close');

          function openModal() {
              modal.classList.remove('hidden');
              setTimeout(() => {
                  modal.classList.remove('opacity-0');
                  modal.classList.add('opacity-100');
              }, 10);
              document.body.style.overflow = 'hidden';
          }

          function closeModal() {
              modal.classList.remove('opacity-100');
              modal.classList.add('opacity-0');
              setTimeout(() => {
                  modal.classList.add('hidden');
                  document.body.style.overflow = '';
              }, 300);
          }

          openButtons.forEach(btn => btn.addEventListener('click', (e) => {
              e.preventDefault();
              openModal();
          }));

          closeElements.forEach(el => el.addEventListener('click', closeModal));

          modal.querySelector('.bg-white').addEventListener('click', e => e.stopPropagation());
      }

      document.addEventListener('DOMContentLoaded', () => {
          initCountdown();
          initModal();
      });
    
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
      

<nav className="sticky top-0 z-40 w-full bg-[#04243c]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center md:justify-between">
<div className="flex flex-col items-center md:items-start">
<img alt="Back in Motion Chiropractic Logo" className="h-8 md:h-9 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e825f043-b3d3-4a90-bfdc-2c9cd2e70292_320w.png"/>
<span className="text-[#00afeb] text-xs font-medium tracking-wide mt-1">
            Yorktown, VA
          </span>
</div>
<button className="open-modal hidden md:inline-flex items-center justify-center bg-[#00afeb] text-[#04243c] hover:bg-white hover:text-[#04243c] transition-colors duration-200 rounded-full px-6 py-2.5 text-sm font-medium">
          Reserve My Seat
        </button>
</div>
</nav>
<main className="flex-grow">

<section className="relative bg-[#04243c] pt-12 pb-16 overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00afeb] via-transparent to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
<span className="w-2 h-2 rounded-full bg-[#00afeb] animate-pulse"></span>
<span className="text-white/80 text-xs font-medium tracking-wide uppercase">
                Free Workshop · June 10, 2026 @ 10:00 AM EST
              </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1] mb-4">
              Why Is Your Body Holding Onto That Weight — And What We've Found
              That Actually Works
            </h1>
<p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl font-normal">
              Join Dr. Chris Connolly of Back in Motion for a free 60-minute
              workshop where you'll finally understand why diets keep failing
              your body — and see the technology that targets fat where it
              actually lives, live in the room.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
<button className="open-modal w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00afeb] text-[#04243c] hover:bg-white transition-colors duration-200 rounded-full px-8 py-4 text-base font-medium group">
                Reserve My Free Seat
                <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#00afeb] text-[#00afeb] hover:bg-[#00afeb]/10 transition-colors duration-200 rounded-full px-8 py-4 text-base font-medium" href="#discover">
                See What's Inside
              </a>
</div>
<p className="text-xs text-white/50 font-normal">
              No pressure. No sales pitch. Just 60 minutes of real answers —
              free to attend.
            </p>
</div>
<div className="lg:col-span-5 relative">

<div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 bg-[#1a2d50] shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#04243c] to-transparent opacity-60 z-10"></div>
<img alt="Seminar Presentation in a Professional Office Setting" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aabc43c-91b8-4953-9073-93bdfcf9bb32_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 z-20 bg-[#04243c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">
<p className="text-white text-sm font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-[#00afeb] text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                  Workshop Starts In
                </p>
<div className="grid grid-cols-4 gap-4 text-center">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight" id="days">
                      00
                    </span>
<span className="text-xs text-white/50 mt-1">Days</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight" id="hours">
                      00
                    </span>
<span className="text-xs text-white/50 mt-1">Hours</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight" id="minutes">
                      00
                    </span>
<span className="text-xs text-white/50 mt-1">Mins</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-[#00afeb] tracking-tight" id="seconds">
                      00
                    </span>
<span className="text-xs text-white/50 mt-1">Secs</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F2F4F5] py-24 md:py-32">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl text-[#04243c] font-medium tracking-tight mb-4">
            Does any of this sound like you?
          </h2>
<p className="text-base md:text-lg text-[#04243c]/70 font-normal">
            You're not alone — and it's not your fault. Most weight loss
            programs are built for the average body. Yours isn't average.
          </p>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="-mx-8 -mt-8 mb-8 h-48 overflow-hidden">
<img alt="Woman Checking Midsection in Workout Clothes" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4812da25-94f5-472d-b182-1c467e2d8049_800w.webp"/>
</div>
<div className="w-12 h-12 rounded-full bg-[#00afeb]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-[#00afeb] text-2xl" icon="solar:body-shape-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-3">
              Stubborn fat that won't budge
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
              No matter what you try — diet, exercise, cutting carbs — certain
              areas just refuse to change.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="-mx-8 -mt-8 mb-8 h-48 overflow-hidden">
<img alt="Healthy Meal Prep and Fitness Tracking Layout" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efbe1d25-0cbf-4dad-804b-64d1014017d7_800w.webp"/>
</div>
<div className="w-12 h-12 rounded-full bg-[#00afeb]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-[#00afeb] text-2xl" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-3">
              Tried everything — nothing sticks
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
              Keto. Weight Watchers. Intermittent fasting. Maybe it worked for a
              bit. Then the weight came back.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="-mx-8 -mt-8 mb-8 h-48 overflow-hidden">
<img alt="Two Women Eating Healthy Salads in a Bright Cafe" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1130d6da-bc7e-487f-9b67-b56cb0301e14_800w.webp"/>
</div>
<div className="w-12 h-12 rounded-full bg-[#00afeb]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-[#00afeb] text-2xl" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-3">
              Feels like your body is working against you
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
              Your friend eats the same things and stays thin. You look at a
              slice of bread and gain weight.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="-mx-8 -mt-8 mb-8 h-48 overflow-hidden">
<img alt="Tired Woman in Athletic Wear at Kitchen Counter" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddb8aaec-d33c-4334-a06b-3aa4de7d597f_800w.webp"/>
</div>
<div className="w-12 h-12 rounded-full bg-[#00afeb]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-[#00afeb] text-2xl" icon="solar:battery-charge-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-3">
              Low energy all day
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
              Even when you eat well, you're dragging. Exercise feels impossible
              when you're running on empty.
            </p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6">
<div className="bg-[#04243c] rounded-3xl p-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute -left-10 -top-10 w-32 h-32 bg-[#00afeb] rounded-full blur-3xl opacity-20"></div>
<div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#00afeb] rounded-full blur-3xl opacity-20"></div>
<p className="text-[#00afeb] text-lg md:text-xl font-medium tracking-tight mb-2 relative z-10">
              "If you raised your hand at any of those — you're in exactly the
              right place."
            </p>
<p className="text-white/80 text-sm font-normal relative z-10">
              — Dr. Chris Connolly, Back in Motion
            </p>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 border-t border-gray-100" id="discover">
<div className="max-w-3xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl text-[#04243c] font-medium tracking-tight mb-4">
            Here's what you'll walk away with the workshop
          </h2>
<p className="text-base md:text-lg text-[#04243c]/70 font-normal">
            In just 60 minutes, you'll understand more about your body than most
            people learn in years of trial and error.
          </p>
</div>
<div className="max-w-4xl mx-auto px-6 space-y-4 mb-16">

<div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl bg-[#F2F4F5] border border-gray-200/50 hover:border-[#00afeb]/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#00afeb] text-[#04243c] flex items-center justify-center font-semibold text-lg shrink-0">
              1
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-2">
                Why your body has been holding onto this weight
              </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
                It's not lack of willpower. It's not eating too much. We'll show
                you exactly why generic programs never worked — and what's
                different about an approach designed around YOUR body.
              </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl bg-[#F2F4F5] border border-gray-200/50 hover:border-[#00afeb]/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#00afeb] text-[#04243c] flex items-center justify-center font-semibold text-lg shrink-0">
              2
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-2">
                The blood type connection nobody talks about
              </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
                Your blood type actually affects how your body processes food.
                Type A, B, AB, or O — each thrives on a different diet. You'll
                learn what foods are working for your body, and which ones are
                fighting you.
              </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl bg-[#F2F4F5] border border-gray-200/50 hover:border-[#00afeb]/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#00afeb] text-[#04243c] flex items-center justify-center font-semibold text-lg shrink-0">
              3
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-2">
                Live proof — you'll see the technology work in real time
              </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
                We won't just talk about Red Light Therapy. A volunteer from the
                room will experience it live while you watch. FDA cleared.
                Completely painless. Same-day visible inch loss.
              </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl bg-[#F2F4F5] border border-gray-200/50 hover:border-[#00afeb]/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#00afeb] text-[#04243c] flex items-center justify-center font-semibold text-lg shrink-0">
              4
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-2">
                Your personal starting point — before you leave
              </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal">
                Every guest gets their actual measurements taken at the
                workshop. You'll leave with your own numbers on paper. That's
                day one of your Body Blueprint.
              </p>
</div>
</div>
</div>
<div className="text-center px-6">
<button className="open-modal inline-flex items-center justify-center gap-2 bg-[#00afeb] text-[#04243c] hover:bg-[#009bd1] transition-colors duration-200 rounded-full px-10 py-4 text-base font-medium mb-4 group">
            Reserve My Free Seat
            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-[#04243c]/50 font-medium tracking-wide uppercase">
            Seats fill fast — this is a small, hands-on event
          </p>
</div>
</section>

<section className="bg-[#E8ECED] py-24 md:py-32">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl text-[#04243c] font-medium tracking-tight mb-4">
            One system. Designed for your body.
          </h2>
<p className="text-base md:text-lg text-[#04243c]/70 font-normal">
            Most programs give everyone the same plan. The Body Blueprint
            combines three components that work together — because your body is
            not the same as anyone else's.
          </p>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
<span className="text-[#00afeb] text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Component 1
            </span>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-4">
              Red Light Therapy Contouring
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal mt-auto">
              FDA-cleared technology that opens fat cells directly — letting
              your body flush the contents naturally. 18 minutes. Same-day
              visible inch loss. No needles, no surgery, no downtime.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
<span className="text-[#00afeb] text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Component 2
            </span>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-4">
              Blood Type Nutrition Plan
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal mt-auto">
              Your blood type — A, B, AB, or O — determines how your body
              processes food. We test you at the clinic and build your personal
              nutrition plan around your biology.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
<span className="text-[#00afeb] text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Component 3
            </span>
<h3 className="text-xl font-medium tracking-tight text-[#04243c] mb-4">
              Monthly Body Measurements
            </h3>
<p className="text-[#04243c]/70 text-sm leading-relaxed font-normal mt-auto">
              The scale only tells part of the story. We track five measurements
              every month so you can see exactly where your body is changing and
              stay on track.
            </p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6">
<div className="bg-[#04243c] rounded-2xl py-6 px-8 text-center">
<p className="text-white text-base md:text-lg font-medium tracking-tight">
              On their own, each of these is good. Together — this is why our
              patients see results that actually last.
            </p>
</div>
</div>
</section>

<section className="bg-[#1a2d50] py-24 md:py-32 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
            Your 60 Minutes — Minute by Minute
          </h2>
<p className="text-base md:text-lg text-white/60 font-normal">
            A small, personal event. Not a lecture. Not a high-pressure sales
            room.
          </p>
</div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
<span className="text-[#00afeb] text-xs font-medium tracking-wide mb-2 inline-block">
              0–10 min
            </span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Welcome &amp; Introduction
            </h3>
<p className="text-white/60 text-sm leading-relaxed font-normal">
              Meet Dr. Connolly. Understand what makes this different from
              anything you've tried before.
            </p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
<span className="text-[#00afeb] text-xs font-medium tracking-wide mb-2 inline-block">
              10–30 min
            </span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              How the Program Works — Live Demo
            </h3>
<p className="text-white/60 text-sm leading-relaxed font-normal">
              Blood type nutrition. Why diets fail. Red Light Therapy
              demonstrated live with a volunteer.
            </p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
<span className="text-[#00afeb] text-xs font-medium tracking-wide mb-2 inline-block">
              30–42 min
            </span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Real Patient Stories
            </h3>
<p className="text-white/60 text-sm leading-relaxed font-normal">
              Before-and-after results from real patients at Back in Motion.
              Q&amp;A included.
            </p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
<span className="text-[#00afeb] text-xs font-medium tracking-wide mb-2 inline-block">
              42–50 min
            </span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Your Personal Body Assessment
            </h3>
<p className="text-white/60 text-sm leading-relaxed font-normal">
              Our team takes your starting measurements. You leave with your own
              numbers on paper.
            </p>
</div>
<div className="md:col-span-2 bg-[#04243c]/50 backdrop-blur-md border border-[#00afeb]/50 rounded-3xl p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#00afeb]/10 to-transparent"></div>
<div className="relative z-10">
<span className="text-[#00afeb] text-xs font-semibold tracking-wide uppercase mb-2 inline-flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:ticket-sale-linear"></iconify-icon>
                50–60 min · GOLDEN TICKET
              </span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Your Exclusive Workshop Offer
              </h3>
<p className="text-white/70 text-sm leading-relaxed font-normal max-w-3xl">
                Because you showed up in person, you receive a special offer
                available only to guests who attended this workshop.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 flex justify-center md:justify-start">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#F2F4F5] border-4 border-white shadow-xl overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon className="text-6xl" icon="solar:user-circle-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<img alt="Dr. Chris Connolly" className="w-full h-full object-cover relative z-10 opacity-90" src="https://www.drchristopherconnolly.com/wp-content/uploads/2024/07/dr-Christopher-Connolly.jpg.webp"/>
</div>
</div>
<div className="md:col-span-7">
<h2 className="text-3xl md:text-4xl text-[#04243c] font-medium tracking-tight mb-2">
              Your presenter
            </h2>
<p className="text-[#04243c] text-xl font-medium mb-1 mt-6">
              Dr. Chris Connolly
            </p>
<p className="text-[#00afeb] text-sm font-medium tracking-wide mb-6">
              Chiropractor &amp; Founder · Back in Motion · Yorktown, VA
            </p>
<div className="space-y-4 text-[#04243c]/70 text-base leading-relaxed font-normal">
<p>
                "I've been practicing in this community for over 15 years,
                helping people get out of pain and get their bodies working the
                way they're supposed to. Over the years, I kept seeing the same
                thing — patients coming in with back pain, knee pain, fatigue —
                and so much of it was connected to weight their bodies just
                couldn't handle anymore."
              </p>
<p>
                "They weren't lazy. They weren't undisciplined. They just hadn't
                found the right approach for their body. That's why I brought
                The Body Blueprint to Back in Motion."
              </p>
</div>
</div>
</div>
</section>

<section className="bg-[#04243c] py-24 md:py-32 relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<span className="inline-block text-[#00afeb] text-xs font-semibold tracking-wide uppercase px-3 py-1 bg-[#00afeb]/10 rounded-full mb-6">
            For Workshop Guests Only
          </span>
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
            The Golden Ticket — Today Only
          </h2>
<p className="text-base md:text-lg text-white/60 font-normal max-w-2xl mx-auto">
            Because you took the time to be here, we have a special offer
            available only to guests who attend in person. It will not be
            available afterward — and it includes everything you need to start
            your Body Blueprint the same day.
          </p>
</div>
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  1 Red Light Therapy contouring session
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  Full body composition analysis
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  Blood type test (if needed)
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  Personalized nutrition starter guide
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  Starting measurements on file
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00afeb] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-white/90 text-sm font-medium">
                  Access to your clinical team
                </span>
</div>
</div>
</div>
<div className="text-center">
<button className="open-modal inline-flex items-center justify-center gap-2 bg-[#00afeb] text-[#04243c] hover:bg-white transition-colors duration-200 rounded-full px-10 py-4 text-base font-medium mb-4 group">
              Reserve My Seat — It's Free
              <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-white/40 font-normal">
              Space is very limited. This is a small, personal event.
            </p>
</div>
</div>
</section>

<section className="bg-[#04243c] border-t border-white/10 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div>
<h2 className="text-2xl text-white font-medium tracking-tight mb-1">
              Ready to finally understand your body?
            </h2>
<p className="text-sm text-white/60 font-normal">
              Free. 60 minutes. June 10, 2026 @ 10:00 AM EST. Seats are limited.
            </p>
</div>
<button className="open-modal whitespace-nowrap inline-flex items-center justify-center bg-[#00afeb] text-[#04243c] hover:bg-white transition-colors duration-200 rounded-full px-8 py-3.5 text-base font-medium">
            Reserve My Free Seat →
          </button>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-[#04243c]/60 text-center md:text-left">
<img alt="Back in Motion Chiropractic Logo" className="h-6 md:h-7 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2ae0bc8-a5b0-41d6-9304-5779155ea5c9_320w.png"/>
<div>
          © 2026 Back in Motion · 4102 George Washington Memorial Hwy,
          Yorktown, VA 23692 · All Rights Reserved
        </div>
<div>
          Questions? Call us at
          <a className="text-[#00afeb] hover:underline hover:underline-offset-4" href="tel:7572346222">
            757-234-6222
          </a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="booking-modal">

<div className="absolute inset-0 bg-[#04243c]/80 backdrop-blur-sm modal-close cursor-pointer"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
<div className="bg-white rounded-[2rem] shadow-2xl relative max-h-[95vh] overflow-y-auto overflow-x-hidden">

<button className="modal-close absolute top-5 right-5 text-gray-400 hover:text-[#04243c] transition-colors z-10">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="w-full h-full min-h-[800px] flex items-center justify-center" id="modal-form-view">

<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="971DQflQ5S0KWCwmbUHk" data-form-name="The Body Blueprint Workshop Form" data-height="800" data-layout="{'id':'INLINE'}" data-layout-iframe-id="popup-971DQflQ5S0KWCwmbUHk" data-trigger-type="alwaysShow" data-trigger-value="" id="popup-971DQflQ5S0KWCwmbUHk" src="https://api.3sixtycrm.com/widget/form/971DQflQ5S0KWCwmbUHk" style={{display: 'block', width: '100%', height: '800px', border: 'none', borderRadius: '3px'}} title="The Body Blueprint Workshop Form"></iframe>

</div>
</div>
</div>
</div>



    </>
  );
}
