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



      // Revenue leak calculator
      function fmt(n){return '$'+Math.round(n).toLocaleString();}
      function calc(){
        const v=+document.getElementById('jobValue').value||0;
        const m=+document.getElementById('missedCalls').value||0;
        const c=+document.getElementById('coldLeads').value||0;
        const weeklyLost=(m+c)*0.30*v; // 30% would convert
        const monthly=weeklyLost*4.33;
        document.getElementById('leakAmount').textContent=fmt(monthly);
        document.getElementById('leakYear').querySelector('span').textContent=fmt(monthly*12);
      }
      ['jobValue','missedCalls','coldLeads'].forEach(id=>document.getElementById(id).addEventListener('input',calc));
      calc();

      // FAQ accordion
      document.querySelectorAll('.faq-q').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const a=btn.nextElementSibling;
          const icon=btn.querySelector('.faq-icon');
          const open=!a.classList.contains('hidden');
          document.querySelectorAll('.faq-a').forEach(x=>x.classList.add('hidden'));
          document.querySelectorAll('.faq-icon').forEach(x=>x.style.transform='');
          if(!open){a.classList.remove('hidden');icon.style.transform='rotate(180deg)';}
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t-[4px] border-black bg-white/95 backdrop-blur px-4 py-3" style={{}}>
<a className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#ffe500] text-black font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '20px', letterSpacing: '.02em', textTransform: 'uppercase'}}>
        Book my free call
        <iconify-icon icon="solar:arrow-right-linear" width="22"></iconify-icon>
</a>
</div>

<header className="sticky top-0 z-40 border-b-[4px] border-black bg-white/90 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-5 h-[68px]">
<a className="flex items-center gap-2.5" href="#">
<span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-black bg-[#ffe500] text-black font-playfair font-bold" style={{fontFamily: '\'Chewy\',cursive', fontSize: '24px'}}>
            B
          </span>
<span className="tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: '24px'}}>
            BookFlow
          </span>
</a>
<div className="hidden items-center gap-7 md:flex" style={{fontFamily: '\'Patrick Hand\',sans-serif'}}>
<a className="text-lg hover:text-[#13a8ff] font-geist" href="#leak">
            The Leak
          </a>
<a className="text-lg hover:text-[#13a8ff] font-geist" href="#system">
            The System
          </a>
<a className="text-lg hover:text-[#13a8ff] font-geist" href="#proof">
            Results
          </a>
<a className="text-lg hover:text-[#13a8ff] font-geist" href="#faq">FAQ</a>
</div>
<a className="hidden h-11 items-center justify-center rounded-xl bg-[#ffe500] px-5 text-black sm:inline-flex font-geist border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-bold" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '17px', letterSpacing: '.02em', textTransform: 'uppercase'}}>
          Book free call
        </a>
</div>
</header>

<section className="overflow-hidden pt-6 pb-10 relative" style={{background: 'linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px),#fff', backgroundSize: '44px 44px'}}>

<div className="absolute left-[4%] top-28 hidden rotate-[-8deg] bg-[#a8efcf] px-5 py-4 lg:block border-[3px] border-black shadow-[6px_6px_0_0_#000] rounded-xl" style={{fontFamily: '\'Patrick Hand\',sans-serif'}}>
<span className="absolute -top-3 left-10 h-4 w-12 rotate-6 bg-neutral-400/30"></span>
<span className="text-lg font-geist">
          Missed call?
          <br/>
          → Auto text back
        </span>
</div>
<div className="absolute right-[4%] top-40 hidden rotate-[7deg] bg-[#ffc4a6] px-5 py-4 lg:block border-[3px] border-black shadow-[6px_6px_0_0_#000] rounded-xl" style={{fontFamily: '\'Patrick Hand\',sans-serif'}}>
<span className="absolute -top-3 left-10 h-4 w-12 rotate-3 bg-neutral-400/30"></span>
<span className="text-lg font-geist">
          Lead in 2 min,
          <br/>
          not 2 days
        </span>
</div>
<div className="absolute left-[7%] bottom-24 hidden rotate-[5deg] bg-[#bcecff] px-5 py-4 xl:block border-[3px] border-black shadow-[6px_6px_0_0_#000] rounded-xl" style={{fontFamily: '\'Patrick Hand\',sans-serif'}}>
<span className="text-lg font-geist">
          ⭐ More reviews,
          <br/>
          on autopilot
        </span>
</div>
<div className="relative z-10 mx-auto max-w-4xl px-5 pt-16 pb-20 text-center sm:pt-24">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-4 py-1.5 shadow-[4px_4px_0_0_#000]">
<span className="flex -space-x-2">
<img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
</span>
<span className="text-xs font-semibold text-neutral-600 font-geist">
            Trusted by 120+ local service businesses
          </span>
</div>
<h1 className="tracking-tight text-neutral-950 font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(44px,8vw,84px)', lineHeight: '.92'}}>
          More booked jobs,
          <br/>
<span className="inline-block -translate-y-3 -translate-y-1 font-thin tracking-tighter font-instrument-serif relative scale-110">
            on autopilot
            <span className="absolute -bottom-2 left-0 h-2 w-full -rotate-1 rounded-full bg-[#13a8ff]"></span>
</span>
</h1>
<p className="mx-auto mt-8 max-w-xl text-lg text-neutral-600 sm:text-xl font-playfair font-medium">
          A done-for-you booking system for
          <span className="text-neutral-900 font-playfair font-medium">
            barbers, salons, med spas, gyms, trades &amp; clinics
          </span>
          — we catch every lead, follow up instantly, and fill your calendar.
          You don't touch the tech.
        </p>
<div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#ffe500] px-8 text-black sm:w-auto font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '20px', letterSpacing: '.02em', textTransform: 'uppercase'}}>
            Book my free call
            <iconify-icon icon="solar:arrow-right-linear" width="22"></iconify-icon>
</a>
<a className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-7 sm:w-auto font-geist font-bold text-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#leak" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '18px', textTransform: 'uppercase'}}>
            See what you're leaking
          </a>
</div>
<p className="mt-4 text-sm font-medium text-neutral-500 font-geist">
          No contract · No setup fee on the call · 100% done-for-you
        </p>
</div>
</section>

<section className="relative overflow-hidden bg-[#ff90e8] py-20 sm:py-28 text-black" id="leak">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px)', backgroundSize: '48px 48px'}}></div>
<div className="relative z-10 mx-auto max-w-5xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-black uppercase italic tracking-tight text-black font-geist">
            The leak you live with
          </p>
<h2 className="tracking-tight font-playfair font-medium text-black" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(34px,5vw,60px)', lineHeight: '.95'}}>
            Your leads aren't the problem.
            <br/>
<span className="relative inline-block font-playfair font-medium">
              Losing them is.
              <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-black"></span>
</span>
</h2>
<p className="mx-auto mt-6 max-w-xl text-base font-bold text-black font-geist">
            You're already getting calls, clicks and DMs. They're slipping
            through the cracks while you're with a client, on a job, or closing
            up.
          </p>
</div>
<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<iconify-icon className="text-[#f4a6cd]" icon="solar:phone-rounded-linear" width="34"></iconify-icon>
<h3 className="mt-4 text-lg font-bold text-black font-geist">
              Missed calls
            </h3>
<p className="mt-2 text-sm font-semibold text-black font-geist">
              62% of calls to small businesses go unanswered. They don't leave a
              voicemail — they call your competitor.
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<iconify-icon className="text-[#ffc4a6]" icon="solar:clock-circle-linear" width="34"></iconify-icon>
<h3 className="mt-4 text-lg font-bold text-black font-geist">
              Slow follow-up
            </h3>
<p className="mt-2 text-sm font-semibold text-black font-geist">
              Leads contacted in 5 min are 21x more likely to book. By tomorrow,
              they've moved on.
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<iconify-icon className="text-[#a8efcf]" icon="solar:calendar-linear" width="34"></iconify-icon>
<h3 className="mt-4 text-lg font-bold text-black font-geist">
              Calendar gaps
            </h3>
<p className="mt-2 text-sm font-semibold text-black font-geist">
              Empty slots you could've filled with past customers who'd happily
              come back — if anyone asked.
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<iconify-icon className="text-[#bcecff]" icon="solar:dice-linear" width="34"></iconify-icon>
<h3 className="mt-4 text-lg font-bold text-black font-geist">
              Hope marketing
            </h3>
<p className="mt-2 text-sm font-semibold text-black font-geist">
              Relying on word of mouth and crossing your fingers. No system, no
              control, no idea what's working.
            </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-20 sm:py-28" style={{backgroundImage: 'linear-gradient(to right,rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.05) 1px,transparent 1px)', backgroundSize: '36px 36px'}}>
<div className="relative z-10 mx-auto max-w-3xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-semibold uppercase italic tracking-tight text-[#078fff] font-geist">
            The 60-second reality check
          </p>
<h2 className="tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(32px,5vw,56px)', lineHeight: '.95'}}>
            How much money is walking
            <br/>
            out your door?
          </h2>
</div>
<div className="mt-10 rounded-3xl border-[4px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-9">
<div className="grid gap-6 sm:grid-cols-3">
<label className="block">
<span className="text-sm font-semibold text-neutral-700 font-geist">
                Avg. value per job ($)
              </span>
<input className="mt-2 w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 text-lg font-bold focus:outline-none shadow-[4px_4px_0_0_#000]" id="jobValue" type="number" value="120"/>
</label>
<label className="block">
<span className="text-sm font-semibold text-neutral-700 font-geist">
                Missed calls / week
              </span>
<input className="mt-2 w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 text-lg font-bold focus:outline-none shadow-[4px_4px_0_0_#000]" id="missedCalls" type="number" value="12"/>
</label>
<label className="block">
<span className="text-sm font-semibold text-neutral-700 font-geist">
                Cold leads / week
              </span>
<input className="mt-2 w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 text-lg font-bold focus:outline-none shadow-[4px_4px_0_0_#000]" id="coldLeads" type="number" value="8"/>
</label>
</div>
<div className="mt-8 rounded-2xl bg-[#ffe500] border-[4px] border-black p-7 text-center shadow-[6px_6px_0_0_#000]">
<p className="text-sm font-black uppercase tracking-wide text-black font-geist">
              You're leaking around
            </p>
<p className="mt-1 text-5xl tracking-tight text-black sm:text-6xl font-playfair font-bold" id="leakAmount" style={{fontFamily: '\'Chewy\',cursive'}}>
              $3,118
            </p>
<p className="text-sm font-bold text-black font-geist">
              in lost bookings every month
            </p>
<p className="mt-3 text-sm font-bold text-black font-geist" id="leakYear">
              That's about
              <span className="font-black text-black font-geist">$37,411</span>
              a year quietly slipping away.
            </p>
</div>
<a className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#ff90e8] text-black font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '20px', textTransform: 'uppercase'}}>
            Book a call to plug the leak
            <iconify-icon icon="solar:arrow-right-linear" width="22"></iconify-icon>
</a>
<p className="mt-3 text-center text-xs font-medium text-neutral-500 font-geist">
            Conservative estimate — assumes ~30% of missed leads would've
            booked.
          </p>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#a8efcf] py-20 sm:py-28" id="system">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px)', backgroundSize: '48px 48px'}}></div>
<div className="relative z-10 mx-auto max-w-5xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-black uppercase italic tracking-tight text-black font-geist">
            The real fix
          </p>
<h2 className="tracking-tight font-playfair font-medium text-black" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(32px,5vw,56px)', lineHeight: '.95'}}>
            It's not more ads.
            <br/>
<span className="relative inline-block font-playfair font-medium">
              It's a system that converts.
              <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-black"></span>
</span>
</h2>
<p className="mx-auto mt-6 max-w-2xl text-base font-bold text-black font-geist">
            Pouring money into ads while leads leak out the back is like filling
            a bucket with a hole in it. We patch the hole first — then catch and
            convert the leads you already get.
          </p>
</div>

<div className="mt-12 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl border-[3px] border-black bg-white p-7 shadow-[6px_6px_0_0_#000]">
<p className="text-xs font-black uppercase tracking-wide text-black font-geist">
              Option A
            </p>
<h3 className="mt-1 text-xl text-black font-playfair font-bold">
              Duct-tape it yourself
            </h3>
<ul className="mt-4 space-y-3 text-sm font-semibold text-black">
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                5 tools that don't talk to each other
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                Hours you don't have learning tech
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                Breaks the moment you stop babysitting it
              </li>
</ul>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-7 shadow-[6px_6px_0_0_#000]">
<p className="text-xs font-black uppercase tracking-wide text-black font-geist">
              Option B
            </p>
<h3 className="mt-1 text-xl text-black font-playfair font-bold">
              Hire a random freelancer
            </h3>
<ul className="mt-4 space-y-3 text-sm font-semibold text-black">
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                Overpromise, underdeliver, disappear
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                $4k+/mo for a full-time hire
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#f4a6cd]" icon="solar:close-circle-linear" width="20"></iconify-icon>
                You still manage the manager
              </li>
</ul>
</div>
<div className="rounded-2xl border-[4px] border-black bg-[#ffe500] p-7 shadow-[8px_8px_0_0_#000] lg:scale-105">
<p className="text-xs font-black uppercase tracking-wide text-black font-geist">
              Option C — done for you
            </p>
<h3 className="mt-1 text-xl text-neutral-900 font-playfair font-medium">
              We build &amp; run it all
            </h3>
<ul className="mt-4 space-y-3 text-sm font-medium text-neutral-700">
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="20"></iconify-icon>
                One connected system, set up for you
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="20"></iconify-icon>
                Managed monthly — you do nothing
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="20"></iconify-icon>
                More booked jobs, less than one hire
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-20 sm:py-28" style={{backgroundImage: 'linear-gradient(to right,rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.05) 1px,transparent 1px)', backgroundSize: '36px 36px'}}>
<div className="relative z-10 mx-auto max-w-6xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-semibold uppercase italic tracking-tight text-[#078fff] font-geist">
            Everything done for you
          </p>
<h2 className="tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(32px,5vw,56px)', lineHeight: '.95'}}>
            Your complete growth system,
            <br/>
<span className="relative inline-block font-playfair font-medium">
              built &amp; managed.
              <span className="absolute -bottom-1 left-0 h-1.5 w-full -rotate-1 rounded-full bg-[#13a8ff]"></span>
</span>
</h2>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300 bg-sky-100 text-[#13a8ff]">
<iconify-icon icon="solar:laptop-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              High-converting website
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              Built to turn visitors into booked appointments — not just look
              pretty.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $2,500
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              Automated SMS + email follow-up
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              Every lead gets a reply in seconds, then nurtured until they book.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $1,200/mo
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300 bg-violet-100 text-violet-600">
<iconify-icon icon="solar:calendar-mark-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              Online booking
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              Clients book themselves 24/7, syncs to your calendar, fills your
              gaps.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $800
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-300 bg-pink-100 text-rose-500">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              Missed-call text-back
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              Miss a call? They instantly get a text so you never lose them
              again.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $600
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-300 bg-yellow-100 text-yellow-600">
<iconify-icon icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              Reactivation campaigns
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              We text your old customer list and pull dormant clients back in.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $900
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-600">
<iconify-icon icon="solar:star-linear" width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-xl tracking-tight font-playfair font-medium">
              Reviews + CRM
            </h3>
<p className="mt-2 text-sm font-medium text-neutral-600 font-geist">
              Auto-requests Google reviews and keeps every contact in one place.
            </p>
<p className="mt-3 text-xs font-bold uppercase tracking-wide text-neutral-400 font-geist">
              Worth $700
            </p>
</div>
</div>

<div className="mx-auto mt-12 max-w-2xl rounded-3xl border-[4px] border-black bg-[#ff90e8] p-8 text-center shadow-[8px_8px_0_0_#000]">
<p className="text-sm font-black uppercase tracking-wide text-black font-geist">
            If you bought all this separately
          </p>
<p className="mt-1 text-3xl tracking-tight text-neutral-900 line-through decoration-rose-500 decoration-4 font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive'}}>
            $7,000+ in setup
          </p>
<p className="mt-4 text-base font-medium text-neutral-800 font-geist">
            A single lost client can cost you hundreds. A full-time hire costs
            <span className="font-bold font-geist">$4,000+/mo</span>
            . This system costs less than one and never calls in sick.
          </p>
<a className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#ffe500] px-8 text-black font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '20px', textTransform: 'uppercase'}}>
            Get my system → book the call
          </a>
<p className="mt-3 text-xs font-bold text-black font-geist">
            The call is free. No pitch deck, no pressure.
          </p>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#bcecff] py-20 sm:py-28" id="proof">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px)', backgroundSize: '48px 48px'}}></div>
<div className="relative z-10 mx-auto max-w-6xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-black uppercase italic tracking-tight text-black font-geist">
            Real businesses, real bookings
          </p>
<h2 className="tracking-tight font-playfair font-medium text-black" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(32px,5vw,56px)', lineHeight: '.95'}}>
            The leak gets plugged.
            <br/>
<span className="relative inline-block font-playfair font-medium">
              The calendar fills up.
              <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-[#ff90e8]"></span>
</span>
</h2>
</div>

<div className="mt-12 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border-[3px] border-black bg-white p-7 text-center shadow-[6px_6px_0_0_#000]">
<p className="text-6xl tracking-tight text-[#ff90e8] font-playfair font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" style={{fontFamily: '\'Chewy\',cursive'}}>
              +38%
            </p>
<p className="mt-2 text-sm font-bold text-black font-geist">
              more booked jobs in 60 days (avg)
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-7 text-center shadow-[6px_6px_0_0_#000]">
<p className="text-6xl tracking-tight text-[#a8efcf] font-playfair font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" style={{fontFamily: '\'Chewy\',cursive'}}>
              94
            </p>
<p className="mt-2 text-sm font-bold text-black font-geist">
              recovered leads / mo from text-back
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-7 text-center shadow-[6px_6px_0_0_#000]">
<p className="text-6xl tracking-tight text-[#ffe500] font-playfair font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" style={{fontFamily: '\'Chewy\',cursive'}}>
              4.9★
            </p>
<p className="mt-2 text-sm font-bold text-black font-geist">
              avg Google rating after reviews kick in
            </p>
</div>
</div>

<div className="mt-8 grid gap-5 lg:grid-cols-3">
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex items-center gap-3">
<img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="font-semibold leading-tight font-geist">Marcus T.</p>
<p className="text-xs font-medium text-neutral-500 font-geist">
                  Fade Lab Barbershop
                </p>
</div>
</div>
<div className="mt-3 flex gap-0.5 text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-3 text-sm font-medium text-neutral-700 font-geist">
              "Used to miss calls all day cutting hair. Now the system texts
              them back and they book themselves. Picked up 40+ extra cuts a
              month without lifting a finger."
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex items-center gap-3">
<img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="font-semibold leading-tight font-geist">Priya N.</p>
<p className="text-xs font-medium text-neutral-500 font-geist">
                  Glow Med Spa
                </p>
</div>
</div>
<div className="mt-3 flex gap-0.5 text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-3 text-sm font-medium text-neutral-700 font-geist">
              "The reactivation campaign alone paid for the whole thing in week
              one. They texted my old client list and we rebooked 60 people I'd
              written off."
            </p>
</div>
<div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
<div className="flex items-center gap-3">
<img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="font-semibold leading-tight font-geist">Dave R.</p>
<p className="text-xs font-medium text-neutral-500 font-geist">
                  RapidFix Plumbing
                </p>
</div>
</div>
<div className="mt-3 flex gap-0.5 text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-3 text-sm font-medium text-neutral-700 font-geist">
              "I'm on jobs all day so I never answered. Now every missed call
              turns into a booked quote. Went from 4.1 to 4.9 on Google too.
              Total game changer."
            </p>
</div>
</div>
<p className="mt-10 text-center text-sm font-bold text-black font-geist">
          Trusted by barbers · salons · med spas · gyms · trades · clinics
        </p>
</div>
</section>

<section className="relative overflow-hidden bg-white py-20 sm:py-28" style={{backgroundImage: 'linear-gradient(to right,rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.05) 1px,transparent 1px)', backgroundSize: '36px 36px'}}>
<div className="relative z-10 mx-auto max-w-5xl px-5">
<div className="grid gap-6 lg:grid-cols-2">

<div className="rounded-3xl border-[4px] border-black bg-[#a8efcf] p-8 shadow-[8px_8px_0_0_#000]">
<iconify-icon className="text-[#078fff]" icon="solar:shield-check-linear" width="44"></iconify-icon>
<h3 className="mt-4 text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive'}}>
              Zero-risk to say yes
            </h3>
<ul className="mt-5 space-y-3 text-base font-medium text-neutral-800">
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="22"></iconify-icon>
                No long contracts — cancel anytime
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="22"></iconify-icon>
                Setup guarantee — we get it live or you don't pay setup
              </li>
<li className="flex gap-2 font-geist">
<iconify-icon className="shrink-0 text-[#13a8ff]" icon="solar:check-circle-bold" width="22"></iconify-icon>
                The strategy call is 100% free — no obligation
              </li>
</ul>
<p className="mt-5 text-sm font-medium text-neutral-700 font-geist">
              Worst case: you leave the call with a clear plan to fix your
              leaks. Best case: we run the whole thing for you.
            </p>
</div>

<div className="rounded-3xl border-[4px] border-black bg-[#ffef9d] p-8 shadow-[8px_8px_0_0_#000]">
<iconify-icon className="text-amber-700" icon="solar:hourglass-line-linear" width="44"></iconify-icon>
<h3 className="mt-4 text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive'}}>
              Limited onboarding spots
            </h3>
<p className="mt-4 text-base font-medium text-neutral-800 font-geist">
              We build and manage every system by hand, so we only take a
              handful of new businesses each month to keep results high.
            </p>
<div className="mt-5 rounded-2xl border-[3px] border-black bg-white p-5 text-center shadow-[4px_4px_0_0_#000]">
<p className="text-sm font-semibold uppercase tracking-wide text-neutral-500 font-geist">
                This month
              </p>
<p className="text-4xl tracking-tight text-rose-500 font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive'}}>
                3 of 8 spots left
              </p>
</div>
<p className="mt-4 text-sm font-medium text-neutral-700 font-geist">
              Every week without this is leads walking out the door. The sooner
              we start, the sooner your calendar fills.
            </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#ffc4a6] py-20 sm:py-28" id="faq">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px)', backgroundSize: '48px 48px'}}></div>
<div className="relative z-10 mx-auto max-w-3xl px-5">
<div className="text-center">
<p className="mb-3 text-base font-black uppercase italic tracking-tight text-black font-geist">
            Straight answers
          </p>
<h2 className="tracking-tight font-playfair font-medium text-black" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(32px,5vw,56px)', lineHeight: '.95'}}>
            Before you book, this might help.
          </h2>
</div>
<div className="mt-10 space-y-3" id="faqList">
<div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
<button className="faq-q flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-lg font-semibold font-geist">
                What does it cost?
              </span>
<iconify-icon className="faq-icon shrink-0 transition-transform" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</button>
<div className="faq-a hidden px-5 pb-5 text-sm font-semibold text-black font-geist">
              Less than a single part-time hire — and far less than the leads
              you're losing each month. We'll give you exact pricing on the free
              call once we see your setup. No surprise fees.
            </div>
</div>
<div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
<button className="faq-q flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-lg font-semibold font-geist">
                Do I have to learn the tech?
              </span>
<iconify-icon className="faq-icon shrink-0 transition-transform" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</button>
<div className="faq-a hidden px-5 pb-5 text-sm font-semibold text-black font-geist">
              No. It's 100% done-for-you. We build it, connect it, and run it.
              You just show up to the appointments it books. You can watch the
              bookings roll in from your phone.
            </div>
</div>
<div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
<button className="faq-q flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-lg font-semibold font-geist">
                I already have a website — does that matter?
              </span>
<iconify-icon className="faq-icon shrink-0 transition-transform" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</button>
<div className="faq-a hidden px-5 pb-5 text-sm font-semibold text-black font-geist">
              Perfect — we either upgrade it to convert better or plug the
              follow-up, booking and text-back systems straight into it. You
              keep what works, we fix what's leaking.
            </div>
</div>
<div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
<button className="faq-q flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-lg font-semibold font-geist">
                How fast does it actually work?
              </span>
<iconify-icon className="faq-icon shrink-0 transition-transform" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</button>
<div className="faq-a hidden px-5 pb-5 text-sm font-semibold text-black font-geist">
              Missed-call text-back and follow-up go live in days. Most clients
              see recovered leads in the first week and a noticeable jump in
              booked jobs within 30–60 days.
            </div>
</div>
<div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
<button className="faq-q flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-lg font-semibold font-geist">
                What if it doesn't work for me?
              </span>
<iconify-icon className="faq-icon shrink-0 transition-transform" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</button>
<div className="faq-a hidden px-5 pb-5 text-sm font-semibold text-black font-geist">
              No long contracts — cancel anytime. We back the setup with a
              guarantee: we get your system live or you don't pay for setup. The
              risk sits with us, not you.
            </div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#ffe500] px-8 text-black font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '20px', textTransform: 'uppercase'}}>
            Still have questions? Book the call
          </a>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-20 sm:py-28" id="book" style={{backgroundImage: 'linear-gradient(to right,rgba(15,23,42,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.06) 1px,transparent 1px)', backgroundSize: '44px 44px'}}>
<div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 shadow-sm">
<span className="h-2 w-2 animate-pulse rounded-full bg-rose-500"></span>
<span className="text-xs font-semibold text-neutral-600 font-geist">
            Only 3 onboarding spots left this month
          </span>
</div>
<h2 className="tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: 'clamp(38px,6vw,68px)', lineHeight: '.92'}}>
          Stop losing jobs.
          <br/>
<span className="relative inline-block font-playfair font-medium">
            Book your free call.
            <span className="absolute -bottom-2 left-0 h-2 w-full -rotate-1 rounded-full bg-[#13a8ff]"></span>
</span>
</h2>
<p className="mx-auto mt-6 max-w-xl text-lg font-medium text-neutral-600 font-geist">
          In 20 minutes we'll map exactly where you're leaking leads and how the
          done-for-you system fills your calendar — no pressure, no jargon, no
          cost.
        </p>
<div className="mx-auto mt-9 max-w-md rounded-3xl border-[4px] border-black bg-white p-7 shadow-[8px_8px_0_0_#000]">
<div className="flex items-center justify-center gap-2 text-neutral-700">
<iconify-icon className="text-[#13a8ff]" icon="solar:calendar-mark-linear" width="22"></iconify-icon>
<span className="text-sm font-semibold font-geist">
              Pick a time that suits you
            </span>
</div>
<a className="mt-5 flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-[#a8efcf] text-black font-playfair font-bold border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '22px', textTransform: 'uppercase'}}>
            Book my free strategy call
            <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-neutral-500">
<span className="flex items-center gap-1 font-geist">
<iconify-icon className="text-[#13a8ff]" icon="solar:check-circle-bold" width="16"></iconify-icon>
              Free, no obligation
            </span>
<span className="flex items-center gap-1 font-geist">
<iconify-icon className="text-[#13a8ff]" icon="solar:check-circle-bold" width="16"></iconify-icon>
              No contracts
            </span>
<span className="flex items-center gap-1 font-geist">
<iconify-icon className="text-[#13a8ff]" icon="solar:check-circle-bold" width="16"></iconify-icon>
              20 minutes
            </span>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden border-t-[4px] border-black bg-white py-12">
<div className="mx-auto max-w-6xl px-5">
<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
<div>
<a className="flex items-center gap-2.5" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black bg-[#ffe500] text-black font-playfair font-bold" style={{fontFamily: '\'Chewy\',cursive', fontSize: '26px'}}>
                B
              </span>
<span className="tracking-tight font-playfair font-medium" style={{fontFamily: '\'Chewy\',cursive', fontSize: '26px'}}>
                BookFlow
              </span>
</a>
<p className="mt-3 max-w-xs text-sm font-medium text-neutral-600 font-geist">
              Done-for-you booking systems that fill the calendars of local
              service businesses — without the tech headache.
            </p>
</div>
<div className="flex flex-col gap-4">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ff90e8] px-6 text-black font-geist border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-bold" href="#book" style={{fontFamily: '\'Patrick Hand\',sans-serif', fontSize: '17px', textTransform: 'uppercase'}}>
              Book free call
            </a>
<div className="flex items-center gap-3 text-sm font-medium text-neutral-600">
<a className="flex items-center gap-1.5 hover:text-[#13a8ff] font-geist" href="mailto:hello@bookflow.co">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                hello@bookflow.co
              </a>
<span className="text-neutral-300 font-geist">·</span>
<a className="flex items-center gap-1.5 hover:text-[#13a8ff] font-geist" href="tel:+10000000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                Call us
              </a>
</div>
</div>
</div>
<div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-500 sm:flex-row sm:items-center">
<p className="font-geist">© 2026 BookFlow. All rights reserved.</p>
<div className="flex items-center gap-5">
<a className="hover:text-neutral-900 font-geist" href="#">Privacy</a>
<a className="hover:text-neutral-900 font-geist" href="#">Terms</a>
<a className="text-[#13a8ff] hover:underline font-geist" href="#book">
              Book a call
            </a>
</div>
</div>
</div>
<div className="pb-16 lg:pb-0"></div>
</footer>


    </>
  );
}
