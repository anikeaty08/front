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



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "RevRelay",
"url": "https://revrelay.io/",
"logo": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98f8b846-7f3e-48a3-a495-75edaa388b8c_320w.jpg"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function updateSlider(sliderId, displayId) {
        var slider = document.getElementById(sliderId);
        var display = document.getElementById(displayId);
        if (slider && display) {
          display.textContent = parseFloat(slider.value).toFixed(1) + '%';
        }
      }

      function calc() {
        function getVal(id) {
          var el = document.getElementById(id);
          return el ? (parseFloat(el.value) || 0) : 0;
        }

        var emailsPerDay = getVal('emailsPerDay');
        var emailsPerContact = getVal('emailsPerContact') || 1;
        var replyRate = getVal('replyRate') / 100;
        var posReplyRate = getVal('posReplyRate') / 100;
        var bookingRate = getVal('bookingRate') / 100;
        var closeRate = getVal('closeRate') / 100;
        var salePrice = getVal('salePrice');
        var costPerCall = getVal('costPerCall');

        var monthlyEmails = emailsPerDay * 21;
        var totalContacted = Math.floor(monthlyEmails / emailsPerContact);
        var totalReplied = Math.floor(totalContacted * replyRate);
        var totalPosReplied = Math.floor(totalReplied * posReplyRate);

        var callsBooked = Math.floor(totalPosReplied * bookingRate);
        var clientsClosed = Math.floor(callsBooked * closeRate);

        var monthlyRevenue = clientsClosed * salePrice;
        var agencyCost = 800 + (callsBooked * costPerCall);
        var cac = clientsClosed > 0 ? Math.floor(agencyCost / clientsClosed) : 0;
        var profit = monthlyRevenue - agencyCost;
        var roi = agencyCost > 0 ? Math.floor((profit / agencyCost) * 100) : 0;

        function setText(id, text) {
          var el = document.getElementById(id);
          if (el) el.textContent = text;
        }

        setText('totalContacted', totalContacted.toLocaleString());
        setText('contactedDesc', monthlyEmails.toLocaleString() + ' emails ÷ ' + emailsPerContact + ' emails per contact');

        setText('totalReplied', totalReplied.toLocaleString());
        setText('repliedDesc', totalContacted.toLocaleString() + ' contacts × ' + (replyRate * 100).toFixed(1) + '% reply rate');

        setText('totalPosReplied', totalPosReplied.toLocaleString());
        setText('posRepliedDesc', totalReplied.toLocaleString() + ' replies × ' + (posReplyRate * 100).toFixed(1) + '% positive rate');

        setText('callsBooked', callsBooked.toLocaleString());
        setText('callsBookedDesc', totalPosReplied.toLocaleString() + ' positive replies × ' + (bookingRate * 100).toFixed(1) + '% booking rate');

        setText('clientsClosed', clientsClosed.toLocaleString());
        setText('clientsClosedDesc', callsBooked.toLocaleString() + ' calls booked × ' + (closeRate * 100).toFixed(1) + '% close rate');

        setText('monthlyRevenue', '$' + monthlyRevenue.toLocaleString());
        setText('revenueDesc', clientsClosed.toLocaleString() + ' clients × $' + salePrice.toLocaleString() + ' per sale');

        setText('agencyCost', '$' + agencyCost.toLocaleString());
        setText('agencyCostDesc', '$800 tech fee + (' + callsBooked.toLocaleString() + ' calls × $' + costPerCall.toLocaleString() + ')');

        setText('cac', '$' + cac.toLocaleString());
        setText('cacDesc', '$' + agencyCost.toLocaleString() + ' agency cost ÷ ' + clientsClosed.toLocaleString() + ' clients');

        setText('sumInvestment', '$' + agencyCost.toLocaleString());
        setText('sumRevenue', '$' + monthlyRevenue.toLocaleString());
        setText('sumProfit', '$' + profit.toLocaleString());

        setText('roiPercent', roi.toLocaleString() + '%');

        var badge = document.getElementById('roiBadge');
        if (badge) {
          if (roi > 300) {
            badge.innerHTML = '<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-3 tracking-wide bg-emerald-500/10 border-emerald-500/20 text-emerald-400">Excellent 🚀</div>';
          } else if (roi > 100) {
            badge.innerHTML = '<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-3 tracking-wide bg-blue-500/10 border-blue-500/20 text-blue-400">Good 📈</div>';
          } else {
            badge.innerHTML = '<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-3 tracking-wide bg-gray-500/10 border-gray-500/20 text-gray-400">Needs Review ⚠️</div>';
          }
        }
      }

      document.addEventListener('DOMContentLoaded', calc);
      if (document.readyState === "complete" || document.readyState === "interactive") {
          setTimeout(calc, 10);
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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto bg-[#0a0a0a]/70 backdrop-blur-md border border-white/10 flex gap-4 md:gap-10 transition-all duration-300 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl items-center justify-between">
<a className="group flex items-center gap-2 shrink-0" href="/">
<span className="md:text-2xl text-xl font-normal text-white tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            NAIL EXPO PH
          </span>
</a>
<div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
<a className="hover:text-pink-400 transition-colors" href="#speakers">
            Speakers
          </a>
<a className="hover:text-pink-400 transition-colors" href="#schedule">
            Schedule
          </a>
<a className="hover:text-pink-400 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-pink-400 transition-colors" href="#faq">FAQs</a>
</div>
<a className="group flex items-center gap-2 md:px-5 md:py-2.5 hover:bg-pink-500 transition-all shrink-0 text-sm font-medium text-white bg-pink-600 rounded-full pt-2 pr-4 pb-2 pl-4 glow-effect shadow-[0_0_15px_rgba(236,72,153,0.4)]" href="#pricing" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<span className="">
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:ticket-bold"></iconify-icon>
              Secure Your Seat
            </span>
</span>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">
<div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
<img alt="Background" className="w-full h-full object-cover opacity-30 blur-sm mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ab176b4-1e9f-4e78-90ff-6423ee024c98_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="z-10 flex flex-col max-w-4xl mr-auto ml-auto relative items-center text-center justify-center gap-8">
<div className="md:text-lg leading-relaxed text-base font-light text-gray-300 max-w-2xl mx-auto mb-8">
<div className="text-xs uppercase md:mb-6 font-medium text-pink-400 tracking-widest bg-pink-950/30 w-fit mx-auto border-pink-900/50 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              FOR NAIL TECHS, SALON OWNERS &amp; BEAUTY ENTREPRENEURS READY TO
              SCALE
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] md:leading-[1.05] tracking-tight mb-6 font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              Turn Your Nail Skills Into a
              <span className="text-holographic italic pr-2">
                Fully Booked, High-Income Business
              </span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-gray-300 max-w-2xl mb-8">
              A live one-day beauty business experience designed to help you
              attract better clients, improve your skills, confidently raise
              your prices, and grow your nail business without guessing what
              works anymore.
            </p>
<div className="flex flex-col gap-2 mb-8 text-sm font-medium text-purple-200 items-center">
<div className="flex gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-pink-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
  Hotel Benilde (Arellano Avenue Corner Estrada St.)
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-pink-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
                April 25, 2026 (Saturday) • 9:00 AM – 6:00 PM
              </div>
<div className="flex items-center gap-2 text-yellow-400 mt-2">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
                Limited Slots Filling Up Fast
              </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all glow-effect shadow-[0_0_20px_rgba(236,72,153,0.4)]" href="#pricing" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:ticket-bold"></iconify-icon>
                  SECURE YOUR SEAT
                </span>
</a>
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors glass-panel" href="#" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
<span>WATCH EVENT TRAILER</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 blur-[60px] rounded-full"></div>
<h2 className="text-4xl md:text-5xl mb-8 tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              Most Nail Techs Are Tired of Working Hard Without Seeing Real
              Growth.
            </h2>
<div className="space-y-5 mb-8">
<div className="flex gap-4 text-gray-300 font-light text-lg items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>
                  Inconsistent bookings that make income unpredictable
                </span>
</div>
<div className="flex gap-4 text-gray-300 font-light text-lg items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Clients disappearing after one appointment</span>
</div>
<div className="flex gap-4 text-gray-300 font-light text-lg items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>
                  Feeling pressured to undercharge to stay competitive
                </span>
</div>
<div className="flex gap-4 text-gray-300 font-light text-lg items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Posting online without getting real bookings</span>
</div>
</div>
<p className="text-xl text-pink-300 font-medium leading-relaxed pl-6 border-l-2 border-pink-500/50 italic">
              "You're not untalented. You just haven't been taught the business
              side properly yet."
            </p>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-3xl z-0"></div>
<div className="glass-panel rounded-[2.5rem] p-3 border border-white/10 relative overflow-hidden z-10 shadow-2xl">
<img alt="Nail Tech Frustration" className="w-full aspect-[4/5] object-cover rounded-[2rem] opacity-70 mix-blend-screen" src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent rounded-[2rem]"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
<h3 className="text-3xl md:text-4xl mb-4 font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  The Real Problem Isn't Your Skills.
                </h3>
<p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Most nail techs think they need more trends or followers… But
                  the real issue is lack of business systems, pricing
                  confidence, and client retention.
                </p>
<div className="space-y-3">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-4">
<iconify-icon className="text-pink-400 text-2xl shrink-0" icon="solar:danger-circle-bold"></iconify-icon>
<span className="text-gray-200 text-sm font-medium leading-tight">
                      If nothing changes, burnout is inevitable.
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 border-t border-white/5 mt-8 md:mt-12">
<div className="text-center mb-16 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Imagine Leaving This Event With
            <br/>
<span className="text-holographic">
              More Confidence, Better Clients &amp; Clearer Direction.
            </span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            This isn't just another beauty seminar. This is where skill meets
            strategy — so you stop surviving client-to-client and finally start
            building a real business.
          </p>
</div>
<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-24">
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all glow-effect flex flex-col items-center text-center gap-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-3xl border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg">
              Better-Paying Clients
            </h4>
</div>
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-all glow-effect flex flex-col items-center text-center gap-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl border border-purple-500/20 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-star-bold-duotone"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg">Premium Positioning</h4>
</div>
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 transition-all glow-effect flex flex-col items-center text-center gap-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl border border-cyan-500/20 shadow-[0_0_20px_rgba(45,212,191,0.15)] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tag-price-bold-duotone"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg">Confident Pricing</h4>
</div>
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all glow-effect flex flex-col items-center text-center gap-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-3xl border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-bold-duotone"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg">Stronger Branding</h4>
</div>
</div>
<div className="glass-panel rounded-[2rem] p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 mix-blend-overlay"></div>
<h3 className="text-4xl md:text-5xl font-normal text-white mb-6 relative z-10" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Learn From Artists Who Are Actually Doing It — Not Just Teaching It
          </h3>
<p className="text-gray-300 font-light text-lg max-w-2xl mx-auto relative z-10">
            These are working nail artists, educators, and beauty professionals
            who've built real clients, real income, and real businesses.
          </p>
</div>
</section>

<section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 relative border-t border-white/5">
<div className="mb-24">
<h2 className="text-4xl md:text-5xl text-center mb-12 tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Real Nail Techs. Real Results.
          </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 glow-effect flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex gap-1 text-pink-400 mb-6 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 font-light italic mb-8 flex-1 leading-relaxed text-lg">
                "After improving my branding and customer experience, my
                bookings became incredibly consistent. I finally feel like a
                business owner."
              </p>
<div className="flex items-center gap-4">
<img alt="Attendee" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base text-white font-medium">Sarah M.</div>
<div className="text-xs text-gray-500">Salon Owner</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 glow-effect flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex gap-1 text-purple-400 mb-6 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 font-light italic mb-8 flex-1 leading-relaxed text-lg">
                "I stopped undercharging and finally started treating my nail
                business seriously. My revenue doubled in just 3 months."
              </p>
<div className="flex items-center gap-4">
<img alt="Attendee" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base text-white font-medium">Jessica T.</div>
<div className="text-xs text-gray-500">Independent Nail Tech</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-[2rem] border border-white/10 glow-effect flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex gap-1 text-cyan-400 mb-6 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 font-light italic mb-8 flex-1 leading-relaxed text-lg">
                "This event helped me realize talent alone isn't enough —
                strategy matters too. The networking alone was worth the ticket
                price."
              </p>
<div className="flex items-center gap-4">
<img alt="Attendee" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base text-white font-medium">Amanda R.</div>
<div className="text-xs text-gray-500">Beauty Entrepreneur</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div className="glass-panel p-10 md:p-12 rounded-[2.5rem] border border-red-500/20 bg-gradient-to-br from-[#1a0505] to-[#0A0A0A] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full"></div>
<h3 className="text-2xl text-white font-medium mb-8 font-mono tracking-widest text-red-400 flex items-center gap-3">
<iconify-icon className="text-3xl" icon="solar:shield-warning-bold-duotone"></iconify-icon>
              THIS IS NOT:
            </h3>
<div className="space-y-5 text-gray-300 font-light text-lg">
<div className="flex gap-4 items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>
                  Another generic beauty seminar that wastes your time
                </span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Random networking without clear takeaways</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Empty motivational talks with zero strategy</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-red-400/80 text-2xl mt-0.5 shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span className="">
                  Surface-level tutorials you can easily find on YouTube
                </span>
</div>
</div>
</div>
<div className="glass-panel p-10 md:p-12 rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-[#051a10] to-[#0A0A0A] glow-effect relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
<h3 className="text-2xl text-white font-medium mb-8 font-mono tracking-widest text-emerald-400 flex items-center gap-3">
<iconify-icon className="text-3xl" icon="solar:shield-check-bold-duotone"></iconify-icon>
              THIS IS:
            </h3>
<div className="space-y-5 text-gray-300 font-light text-lg">
<div className="flex gap-4 items-start">
<iconify-icon className="text-emerald-400/80 text-2xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
                  A massive business &amp; skill transformation experience
                </span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-emerald-400/80 text-2xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>A room full of ambitious, like-minded nail techs</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-emerald-400/80 text-2xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Real, proven strategies that work right now in 2026</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-emerald-400/80 text-2xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
                  Practical education you can immediately apply for ROI
                </span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-emerald-400/80 text-2xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">
                  A dedicated space for real growth and lifelong connections
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
<div className="text-center mb-16 relative z-10" id="schedule">
<h2 className="text-4xl md:text-5xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            What To Expect Inside NAIL EXPO PH 2026
          </h2>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            You'll be surrounded by nail techs, salon owners, and beauty
            entrepreneurs who are also ready to grow their income, improve their
            skills, and build something bigger.
          </p>
</div>
<div className="max-w-5xl mx-auto relative pl-8 md:pl-0 z-10">
<div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-30"></div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-pink-500 shadow-[0_0_15px_#ec4899] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-pink-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-pink-900/10">
<div className="text-pink-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                10:00 AM - 10:15 AM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Welcome to Nail Expo
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<img alt="Nica Bulaon" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">Nica Bulaon</div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-16 group">
<div className="absolute left-[26px] md:-left-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-purple-500 shadow-[0_0_15px_#8b5cf6] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all glow-effect text-left relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-purple-900/10">
<div className="text-purple-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                10:15 AM - 11:45 AM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                The New Era of Retention: Building High-Loyalty Clientele
              </h4>
<div className="flex items-center gap-4 mt-2">
<img alt="Biba Castro" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">Biba Castro</div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-cyan-500 shadow-[0_0_15px_#2dd4bf] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-cyan-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-cyan-900/10">
<div className="text-cyan-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                11:45 AM - 12:45 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Elevating Standard Services
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<img alt="Elizabeth Labrador" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Elizabeth Labrador
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-16 group">
<div className="absolute left-[26px] md:-left-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-pink-500 shadow-[0_0_15px_#ec4899] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-pink-500/50 transition-all glow-effect text-left relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-pink-900/10">
<div className="text-pink-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                12:45 PM - 1:00 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Networking, Shopping, Lunch
              </h4>
<div className="flex items-center gap-4 mt-2">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] bg-pink-500/10 flex items-center justify-center text-pink-400">
<iconify-icon className="text-xl" icon="solar:shop-bold"></iconify-icon>
</div>
<div className="text-sm font-medium text-gray-300">Break</div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-purple-500 shadow-[0_0_15px_#8b5cf6] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-purple-900/10">
<div className="text-purple-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                1:00 PM - 2:00 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Difficult Clients
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<img alt="Lulu Roberto" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Lulu Roberto
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-16 group">
<div className="absolute left-[26px] md:-left-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-cyan-500 shadow-[0_0_15px_#2dd4bf] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-cyan-500/50 transition-all glow-effect text-left relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-cyan-900/10">
<div className="text-cyan-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                2:00 PM - 2:30 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Building Client Loyalty
              </h4>
<div className="flex items-center gap-4 mt-2">
<img alt="Laiza Malate" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Laiza Malate
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-pink-500 shadow-[0_0_15px_#ec4899] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-pink-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-pink-900/10">
<div className="text-pink-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                2:30 PM - 3:30 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                From Clicks to Clients: Nailing Your Content Strategy
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<img alt="Marithe Tarroza" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Marithe Tarroza
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-16 group">
<div className="absolute left-[26px] md:-left-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-purple-500 shadow-[0_0_15px_#8b5cf6] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all glow-effect text-left relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-purple-900/10">
<div className="text-purple-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                3:30 PM - 4:00 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Social Media / Branding
              </h4>
<div className="flex items-center gap-4 mt-2">
<img alt="Karen Hickey" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Karen Hickey
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-cyan-500 shadow-[0_0_15px_#2dd4bf] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-cyan-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-cyan-900/10">
<div className="text-cyan-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                4:00 PM - 5:00 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Flawless Russian Manicure
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<img alt="CJ Latiza" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">CJ Latiza</div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-16 group">
<div className="absolute left-[26px] md:-left-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-pink-500 shadow-[0_0_15px_#ec4899] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-pink-500/50 transition-all glow-effect text-left relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-pink-900/10">
<div className="text-pink-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                5:00 PM - 6:00 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Nailing the Extensions: Polygel
              </h4>
<div className="flex items-center gap-4 mt-2">
<img alt="Alenie Pascual" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="text-sm font-medium text-gray-300">
                  Alenie Pascual
                </div>
</div>
</div>
</div>

<div className="relative mb-10 md:w-1/2 md:pr-16 md:text-right group">
<div className="absolute left-[26px] md:left-auto md:-right-[13px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] border-4 border-purple-500 shadow-[0_0_15px_#8b5cf6] z-10"></div>
<div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all glow-effect flex flex-col md:items-end text-left md:text-right relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-purple-900/10">
<div className="text-purple-400 font-mono text-sm tracking-widest mb-3 flex items-center gap-2 md:justify-end">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                6:00 PM - 6:30 PM
              </div>
<h4 className="text-xl md:text-2xl text-white font-medium mb-3">
                Networking
              </h4>
<div className="flex items-center gap-4 md:flex-row-reverse mt-2">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A0A0A] bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<div className="text-sm font-medium text-gray-300">Closing</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 relative z-10">
<a className="group flex items-center justify-center gap-2 px-10 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all glow-effect shadow-[0_0_20px_rgba(236,72,153,0.4)]" href="#pricing" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<iconify-icon className="text-xl" icon="solar:ticket-bold"></iconify-icon>
            SECURE YOUR SLOT
          </a>
</div>
</section>

<section className="py-16 md:py-24 max-w-4xl mx-auto px-4 md:px-6 border-t border-white/5">
<div className="text-center mb-16" id="speakers">
<h2 className="text-4xl md:text-6xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Meet The Experts
          </h2>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Leading the room with real-world strategies for growth, technique,
            and business.
          </p>
</div>
<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-pink-500/30 transition-colors shadow-2xl relative">
<img alt="Marithe Tarroza" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Marithe Tarroza</h3>
<p className="text-[10px] text-pink-400 font-mono mb-4 uppercase tracking-wider">
              Social Media Strategies
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Learn how to turn your aesthetic content into consistent bookings.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-purple-500/30 transition-colors shadow-2xl relative">
<img alt="Biba Castro" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Biba Castro</h3>
<p className="text-[10px] text-purple-400 font-mono mb-4 uppercase tracking-wider">
              Difficult Clients
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Handle demanding clients confidently while protecting your peace.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-cyan-500/30 transition-colors shadow-2xl relative">
<img alt="Karen Hickey" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Karen Hickey</h3>
<p className="text-[10px] text-cyan-400 font-mono mb-4 uppercase tracking-wider">
              Client Experience
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Design an experience that makes clients keep returning.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-pink-500/30 transition-colors shadow-2xl relative">
<img alt="Elizabeth Labrador" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">
              Elizabeth Labrador
            </h3>
<p className="text-[10px] text-pink-400 font-mono mb-4 uppercase tracking-wider">
              Extensions
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Master intricate extension techniques that separate you from
              amateurs.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-purple-500/30 transition-colors shadow-2xl relative">
<img alt="Laiza Malate" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Laiza Malate</h3>
<p className="text-[10px] text-purple-400 font-mono mb-4 uppercase tracking-wider">
              Retention 101
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Improve set retention drastically to increase client trust.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-cyan-500/30 transition-colors shadow-2xl relative">
<img alt="Alenie Pascual" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Alenie Pascual</h3>
<p className="text-[10px] text-cyan-400 font-mono mb-4 uppercase tracking-wider">
              Polygel Mastery
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Create cleaner, stronger, and more aesthetic premium sets.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-pink-500/30 transition-colors shadow-2xl relative">
<img alt="Leighn Pavadora" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Leighn Pavadora</h3>
<p className="text-[10px] text-pink-400 font-mono mb-4 uppercase tracking-wider">
              Safety Standards
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Build immense professional credibility by enforcing protocols.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-purple-500/30 transition-colors shadow-2xl relative">
<img alt="Lulu Roberto" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Lulu Roberto</h3>
<p className="text-[10px] text-purple-400 font-mono mb-4 uppercase tracking-wider">
              Loyal Clients
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              The psychology of converting hesitant visitors into repeat
              clientele.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-cyan-500/30 transition-colors shadow-2xl relative">
<img alt="CJ Latiza" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">CJ Latiza</h3>
<p className="text-[10px] text-cyan-400 font-mono mb-4 uppercase tracking-wider">
              Russian Manicure
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Learn flawless precision cuticle work that instantly elevates
              sets.
            </p>
</div>
<div className="glass-panel p-6 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all group relative overflow-hidden flex flex-col text-center">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white/5 group-hover:border-pink-500/30 transition-colors shadow-2xl relative">
<img alt="Nica Bulaon" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Nica Bulaon</h3>
<p className="text-[10px] text-pink-400 font-mono mb-4 uppercase tracking-wider">
              Work Habits
            </p>
<p className="text-xs text-gray-400 font-light leading-relaxed flex-1">
              Avoid extreme burnout while building a long-term, sustainable
              career.
            </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-5xl mx-auto px-4 md:px-6 border-t border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent pointer-events-none z-0"></div>
<div className="text-center mb-16 relative z-10" id="pricing">
<h2 className="text-4xl md:text-6xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Choose Your Experience
          </h2>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Secure your spot before tiers fill up and prices increase.
          </p>
</div>
<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 relative z-10">

<div className="glass-panel p-8 rounded-3xl border border-pink-500/30 hover:-translate-y-2 transition-transform relative overflow-hidden glow-effect flex flex-col shadow-[0_0_30px_rgba(236,72,153,0.15)]">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
<div className="text-xs font-bold tracking-widest text-pink-400 mb-2 uppercase">
              Best Value
            </div>
<h3 className="text-3xl text-white font-medium mb-2">N-TIER</h3>
<div className="text-4xl text-white font-normal mb-8" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              ₱10,000
            </div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-pink-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>VIP Event access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pink-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Premium Networking</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pink-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>All Demonstrations</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pink-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Certificate</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pink-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Premium Freebies</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:scale-105 transition-transform shadow-lg">
              Select Tier
            </button>
</div>

<div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform relative flex flex-col">
<h3 className="text-3xl text-white font-medium mb-2 mt-6">A-TIER</h3>
<div className="text-4xl text-white font-normal mb-8" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              ₱8,500
            </div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Event access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Networking</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Demonstrations</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Certificate</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Standard Freebies</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20">
              Select Tier
            </button>
</div>

<div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform relative flex flex-col">
<h3 className="text-3xl text-white font-medium mb-2 mt-6">I-TIER</h3>
<div className="text-4xl text-white font-normal mb-8" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              ₱5,500
            </div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Event access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Demonstrations</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Certificate</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20">
              Select Tier
            </button>
</div>

<div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform relative flex flex-col">
<h3 className="text-3xl text-white font-medium mb-2 mt-6">L-TIER</h3>
<div className="text-4xl text-white font-normal mb-8" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              ₱1,000
            </div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Basic Event access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Standing Room</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20">
              Select Tier
            </button>
</div>
</div>
<div className="text-center mt-10 text-sm text-gray-400 relative z-10">
          * Installment options and multiple payment methods available at
          checkout.
        </div>
</section>

<section className="md:py-24 text-center max-w-4xl border-white/5 border-t mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="mb-24">
<h2 className="text-4xl md:text-5xl text-center mb-12 tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
<iconify-icon className="text-pink-500 mr-2" icon="solar:fire-bold"></iconify-icon>
            WHAT YOU'LL ACTUALLY GET
          </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-3xl border border-white/10 text-center glow-effect">
<div className="text-pink-400 font-mono text-sm mb-4 uppercase tracking-widest">
                Bonus #1
              </div>
<h4 className="text-xl text-white font-medium">
                Client Attraction &amp; Social Media Playbook
              </h4>
</div>
<div className="glass-panel p-8 rounded-3xl border border-white/10 text-center glow-effect">
<div className="text-purple-400 font-mono text-sm mb-4 uppercase tracking-widest">
                Bonus #2
              </div>
<h4 className="text-xl text-white font-medium">
                Pricing, Client Handling &amp; Retention Guide
              </h4>
</div>
<div className="glass-panel p-8 rounded-3xl border border-white/10 text-center glow-effect">
<div className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-widest">
                Bonus #3
              </div>
<h4 className="text-xl text-white font-medium">
                Live Demo Access &amp; Advanced Insights
              </h4>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-24">
<div className="glass-panel p-10 md:p-12 rounded-[2.5rem] border border-red-500/20 bg-red-950/10">
<h3 className="text-2xl text-white font-medium mb-8 font-mono tracking-widest text-red-400">
              BEFORE
            </h3>
<div className="space-y-6 text-gray-300 font-light text-lg">
<div className="flex gap-4 items-center">
<iconify-icon className="text-red-400/80 text-2xl shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Random, inconsistent clients</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-red-400/80 text-2xl shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Low pricing confidence &amp; guilt</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-red-400/80 text-2xl shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>Physical and mental burnout</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-red-400/80 text-2xl shrink-0" icon="solar:close-circle-bold"></iconify-icon>
<span>No clear plan for business growth</span>
</div>
</div>
</div>
<div className="glass-panel p-10 md:p-12 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-950/10 glow-effect">
<h3 className="text-2xl text-white font-medium mb-8 font-mono tracking-widest text-emerald-400">
              AFTER
            </h3>
<div className="space-y-6 text-gray-300 font-light text-lg">
<div className="flex gap-4 items-center">
<iconify-icon className="text-emerald-400/80 text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>High-paying, premium clientele</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-emerald-400/80 text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Total confidence in your rates</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-emerald-400/80 text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Structured, sustainable business</span>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-emerald-400/80 text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Clear roadmap for scaling income</span>
</div>
</div>
</div>
</div>

<div className="text-center mb-24 max-w-4xl mx-auto glass-panel p-10 md:p-14 rounded-[2.5rem] border border-white/10">
<h3 className="text-3xl md:text-5xl font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Your Slot Is Secured — No Guesswork, No Surprises
          </h3>
<p className="text-gray-300 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            All tickets are non-refundable but fully transferable if you're
            unable to attend. Once payment is confirmed, your slot is officially
            reserved.
          </p>
<div className="flex flex-wrap justify-center gap-4 text-sm text-white font-medium">
<span className="bg-white/5 px-6 py-3.5 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-pink-400 text-lg" icon="solar:lock-keyhole-bold"></iconify-icon>
              Secure registration
            </span>
<span className="bg-white/5 px-6 py-3.5 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-pink-400 text-lg" icon="solar:qr-code-bold"></iconify-icon>
              Official QR ticket
            </span>
<span className="bg-white/5 px-6 py-3.5 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-pink-400 text-lg" icon="solar:card-bold"></iconify-icon>
              Clear payment terms
            </span>
</div>
</div>

<div className="text-center relative py-16">
<div className="absolute inset-0 bg-pink-600/10 blur-[120px] rounded-full z-0"></div>
<h2 className="text-5xl md:text-7xl font-normal text-white mb-6 relative z-10 tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Don't Wait — Slots Are Limited
          </h2>
<p className="text-2xl text-pink-300 mb-6 font-medium relative z-10">
            Early Bird pricing is only available for a limited time.
          </p>
<p className="text-gray-400 font-light text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Every year, seats fill up fast — and the last thing you want is
            missing your slot because you waited too long.
          </p>
<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-yellow-400/90 text-sm md:text-base font-medium mb-10 relative z-10">
<span className="flex items-center justify-center gap-2 bg-yellow-500/10 px-5 py-2.5 rounded-full border border-yellow-500/20">
<iconify-icon className="text-lg" icon="solar:danger-circle-bold"></iconify-icon>
              Limited Slots Available
            </span>
<span className="flex items-center justify-center gap-2 bg-yellow-500/10 px-5 py-2.5 rounded-full border border-yellow-500/20">
<iconify-icon className="text-lg" icon="solar:danger-circle-bold"></iconify-icon>
              Prices Increase Soon
            </span>
<span className="flex items-center justify-center gap-2 bg-yellow-500/10 px-5 py-2.5 rounded-full border border-yellow-500/20">
<iconify-icon className="text-lg" icon="solar:danger-circle-bold"></iconify-icon>
              Installments Closing Soon
            </span>
</div>
<a className="relative z-10 inline-flex items-center justify-center gap-2 px-12 py-5 text-lg font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:scale-105 transition-transform glow-effect shadow-[0_0_30px_rgba(236,72,153,0.6)]" href="#pricing" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<iconify-icon className="text-xl" icon="solar:ticket-bold"></iconify-icon>
            SECURE YOUR SLOT NOW
          </a>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 px-2 md:px-6 border-t border-white/5" id="faq">
<h2 className="text-4xl md:text-5xl text-center mb-12 tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 glass-panel border-white/10 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-pink-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              Who is this for?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              For ambitious nail techs, salon owners, and beauty entrepreneurs
              who want to scale their income, improve client retention, and
              build a sustainable beauty business.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 glass-panel border-white/10 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-pink-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              Can I pay in installments?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Yes! We offer flexible installment options at checkout so you can
              secure your seat now and pay over time.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 glass-panel border-white/10 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-pink-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              What if I can't attend?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Tickets are non-refundable, but they are fully transferable to
              another person if you notify us before the event.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 glass-panel border-white/10 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-pink-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              Do I need experience?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Whether you're just starting out or have been in the industry for
              years, you'll walk away with actionable strategies to level up
              your business and skills.
            </div>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto py-12 md:py-20 mb-8 md:mb-12 px-2 md:px-6">
<div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center glass-panel border border-white/20 glow-effect shadow-[0_0_50px_rgba(236,72,153,0.2)]">
<div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-900/40 mix-blend-overlay z-0"></div>
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ab176b4-1e9f-4e78-90ff-6423ee024c98_1600w.png"/>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight font-normal text-white mb-8" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              You Can Keep Guessing…
              <br/>
              Or Finally Learn What Actually Helps Nail Techs Build A Real
              Business.
            </h2>
<p className="text-lg md:text-2xl text-gray-200 font-light mb-12 max-w-2xl mx-auto">
              This is your opportunity to improve your skills, increase your
              confidence, attract better clients, and grow your income
              seriously.
            </p>
<a className="inline-flex items-center justify-center gap-2 px-12 py-5 text-xl font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:scale-105 transition-transform glow-effect shadow-[0_0_40px_rgba(236,72,153,0.8)]" href="#pricing" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<iconify-icon className="text-xl" icon="solar:ticket-bold"></iconify-icon>
              SECURE YOUR SLOT NOW
            </a>
<p className="mt-8 text-pink-300 text-sm font-medium uppercase tracking-widest flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:danger-circle-bold"></iconify-icon>
              Limited Slots • Prices Increase Soon
            </p>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 flex flex-col items-center text-gray-500 text-sm">
<div className="mb-4 flex justify-center">
<span className="text-xl font-normal italic text-white tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          NAIL EXPO PH 2026
        </span>
</div>
<div className="mb-4 flex justify-center">
<a className="text-gray-500 hover:text-white transition-colors" href="https://www.linkedin.com/company/revrelay/" target="_blank">
<iconify-icon className="text-2xl" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
<p className="">© 2026 NAIL EXPO PH. All rights reserved.</p>
</footer>


    </>
  );
}
