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
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto bg-[#0a0a0a]/70 backdrop-blur-md border border-white/10 flex gap-4 md:gap-10 transition-all duration-300 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl items-center justify-between">
<a className="group flex items-center gap-2 shrink-0" href="javascript:void(0)" onclick="window.scrollTo(0,0);">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-normal italic text-white tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            RevRelay
          </span>
</a>
<a className="group flex items-center gap-2 md:px-5 md:py-2.5 hover:bg-gray-200 transition-colors shrink-0 text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span className="">Book your discovery call</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5 hidden sm:block" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">
<div className="text-xs uppercase md:mb-8 font-medium text-rose-400 tracking-widest bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            Attention B2B Owners
          </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] tracking-tight mb-6 md:mb-8 font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            We'll book you
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400 pr-2">
              15-20 prequalified sales meetings
            </span>
<br className="hidden md:block"/>
            in 60 days -
            <span className="border-b-2 md:border-b-4 border-rose-500/30">
              on a pay per show basis
            </span>
</h1>
<p className="md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">
            Our purely performance-based outbound engine floods your calendar
            with highly-qualified, ready-to-buy prospects. You only pay when
            decision-makers show up, so you can focus entirely on closing deals.
          </p>
<div className="relative w-full max-w-4xl rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 bg-black border-white/10 shadow-black ring-white/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-rose-900/20">
<wistia-player aspect="2.1238938053097347" media-id="ipcztr0yx6" unique-id="wistia-ipcztr0yx6-52"></wistia-player>
</div>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span className="">Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="text-xs md:text-sm text-gray-500 font-light" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-normal text-white px-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
<div className="md:p-8 md:rounded-3xl hover:-translate-y-1 hover:border-rose-500/30 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 border border-white/5 shadow-lg shadow-black">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:graph-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-white mb-2 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Paying For Activity, Not Results
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              Your current agency charges you $5,000+ per month whether they
              book you zero meetings or twenty. They send thousands of emails,
              generate hundreds of "leads," and present impressive activity
              reports. But when it comes to actual qualified prospects sitting
              across from you on a sales call? Crickets. You're funding their
              operations, not your pipeline.
            </p>
</div>
<div className="md:p-8 md:rounded-3xl hover:-translate-y-1 hover:border-rose-500/30 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 border border-white/5 shadow-lg shadow-black">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-white mb-2 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Leads That Don't Show up or Buy
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              Even when leads come through, half don't show up to the call. The
              other half aren't decision-makers or have no budget. You're
              burning time on tire-kickers while your real prospects are being
              reached by competitors who actually know how to identify and
              engage serious buyers. Every unqualified call is revenue walking
              out the door.
            </p>
</div>
<div className="md:p-8 md:rounded-3xl hover:-translate-y-1 hover:border-rose-500/30 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 border border-white/5 shadow-lg shadow-black">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-white mb-2 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              The Inconsistent Feast-Or-Famine Cycle
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              This month you close three deals from referrals. Next month,
              nothing. You're constantly scrambling for the next opportunity
              instead of having a predictable system that feeds your pipeline.
              Your revenue is a roller coaster because your lead generation is a
              hope-and-pray situation, not a machine.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span>Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 border-t border-white/5 mt-8 md:mt-12">
<div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            The Performance-Driven Outbound Engine That Guarantees Results
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            A completely risk-free model delivering what most agencies charge
            hefty monthly retainers for—regardless of their output.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Prequalified Meetings
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              We qualify every meeting based on your exact criteria, whether
              that is persona, revenue, location, or other key factors, ensuring
              you only speak with high-quality, relevant prospects.
            </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Pay Only For Performance
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              Unlike traditional agencies that charge regardless of results, our
              pay-per-show model perfectly aligns our success with yours. Every
              dollar spent goes toward booked meetings with qualified prospects.
            </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Signal Based Targeting
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              We identify and target prospects based on buying signals and
              market triggers, allowing us to reach decision-makers at the exact
              moment they're most likely to convert.
            </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:server-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Bi-Weekly Strategy Calls
            </h3>
<p className="leading-relaxed text-base font-light text-gray-400">
              We use these sessions to refine strategy, review results, and
              ensure your outbound system is consistently improving and aligned
              with your growth goals.
            </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:tuning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              A/B Testing &amp; Optimization
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              We continuously test subject lines, angles, and calls to action.
              By letting the data drive decisions, we optimize open rates and
              reply rates week over week.
            </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-rose-500/30 transition-colors group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#111] text-white border border-white/10 group-hover:bg-rose-900/20 group-hover:text-rose-400 group-hover:border-rose-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Dedicated Inbox Management
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              Our trained team monitors all campaign inboxes daily. We handle
              objections, answer questions, and manually shepherd interested
              prospects directly onto your calendar.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span className="">Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 relative border-t border-white/5">
<div className="text-center mb-16 md:mb-20">
<p className="text-xs uppercase md:mb-6 font-medium text-rose-400 tracking-widest bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mx-auto pt-1 pr-3 pb-1 pl-3 mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            How It Works
          </p>
<h2 className="text-4xl md:text-5xl tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            3 Simple Steps to Scale
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-12 relative z-10">
<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111] border border-white/10 text-white flex items-center justify-center text-3xl md:text-4xl font-normal mb-6 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              1
            </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Book Your Discovery Call
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              We'll walk you through exactly how RevRelay operates, review our
              ironclad guarantee, and determine if we're a mutual fit. No
              pressure, just a straightforward strategy session about filling
              your pipeline.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111] border border-white/10 text-white flex items-center justify-center text-3xl md:text-4xl font-normal mb-6 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              2
            </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              Define Your ICP
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              Once you're ready, we jump on an onboarding call to deeply
              understand your business, your ideal customer profile, and what a
              perfect sales call looks like. This ensures we target
              decision-makers who actually need your offer.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111] border border-white/10 text-white flex items-center justify-center text-3xl md:text-4xl font-normal mb-6 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              3
            </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              We Launch Your Campaign
            </h3>
<p className="text-base text-gray-400 font-light leading-relaxed">
              We architect your outbound infrastructure, warm up sending
              domains, craft highly-personalized messaging, and begin booking
              qualified meetings directly onto your calendar while you focus on
              closing.
            </p>
</div>
</div>
<div className="flex justify-center mt-16 md:mt-20 relative z-10">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span className="">Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="text-center mb-20 md:mb-28 relative z-10">
<p className="text-xs uppercase md:mb-6 font-medium text-rose-400 tracking-widest bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mx-auto pt-1 pr-3 pb-1 pl-3 mb-4 shadow-[0_0_20px_rgba(244,63,94,0.2)]" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            The Engine Process
          </p>
<h2 className="text-4xl md:text-6xl tracking-tight font-normal text-white mb-6" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            RevRelay Architecture Flow
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            A completely mapped out, fully managed ecosystem. We handle 100% of
            the technical heavy lifting, data sourcing, and inbox management to
            turn cold prospects into strictly qualified revenue opportunities.
          </p>
</div>
<div className="relative flex flex-col items-center w-full z-10">
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-transparent via-rose-500 to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>

<div className="w-full max-w-4xl grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 relative group">
<div className="bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/80 rounded-2xl p-6 md:p-8 md:col-start-1 relative overflow-hidden hover:border-white/20 transition-all z-10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-rose-900/20 text-rose-400 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
<iconify-icon className="text-2xl" icon="solar:server-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-medium text-white tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                      Technical Infrastructure
                    </h3>
<p className="text-xs text-emerald-400 flex items-center gap-1 font-medium mt-1 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Systems Online
                    </p>
</div>
</div>
</div>
<div className="relative z-10 space-y-3">
<div className="bg-[#111] border border-white/5 rounded-lg p-3">
<div className="leading-snug text-sm font-light text-gray-300">
                    Provisioning and managing separate sending domains
                    <span className="font-medium text-white font-mono">10-40+</span>
</div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3">
<div className="text-sm font-light text-gray-300 leading-snug">
                    Configuring and maintaining
                    <span className="font-mono text-white font-medium">20-80+</span>
                    individual sending inboxes
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3">
<div className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                    Setting up SPF, DKIM, &amp; DMARC across every domain
                  </div>
<div className="flex gap-2">
<span className="text-xs px-2.5 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                      Authenticated
                    </span>
</div>
</div>
<div className="bg-rose-950/20 border border-rose-900/30 rounded-lg p-3 mt-1">
<div className="text-sm font-light text-rose-200 leading-snug flex gap-2 items-start">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:shield-warning-linear"></iconify-icon>
                    Monitoring deliverability daily to prevent domains from
                    being flagged or burned.
                  </div>
</div>
</div>
</div>
<div className="hidden md:flex justify-center items-center z-10">
<div className="w-10 h-10 rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center text-white/50 text-sm font-medium z-10">
                1
              </div>
</div>
<div className="hidden leading-relaxed md:block md:col-start-3 text-sm font-light text-gray-300 border-white/10 border-l pl-6">
              We construct an entirely separate, robust sending infrastructure.
              By using secondary domains, we ensure your primary company
              domain's reputation remains absolutely pristine and untouched by
              cold outreach volume.
              <span className="block text-rose-400 font-medium text-xs tracking-widest uppercase mb-2">
                The Foundation
              </span>
</div>
</div>
<iconify-icon className="text-2xl text-white/20 mb-16 md:hidden" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>

<div className="w-full max-w-4xl grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 relative group">
<div className="hidden leading-relaxed md:block md:col-start-1 text-sm font-light text-gray-300 text-right border-white/10 border-r pr-6">
<span className="block text-rose-400 font-medium text-xs tracking-widest uppercase mb-2">
                Precision Targeting
              </span>
              No spray and pray. We source and verify thousands of ICP-matched
              prospects based on high-intent buying signals, then build
              multi-step, signal-based personalized email sequences to maximize
              relevance.
            </div>
<div className="hidden md:flex justify-center items-center z-10 md:col-start-2">
<div className="w-10 h-10 rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center text-white/50 text-sm font-medium z-10">
                2
              </div>
</div>
<div className="bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/80 rounded-2xl p-6 md:p-8 md:col-start-3 relative overflow-hidden hover:border-white/20 transition-all z-10">
<div className="relative z-10 flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-rose-900/20 text-rose-400 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
<iconify-icon className="text-2xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg md:text-xl font-medium text-white tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    Data &amp; Campaign Build
                  </h3>
<div className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-mono">
                    Processing 10,000+ Records/Mo
                  </div>
</div>
</div>
<div className="space-y-3">
<div className="bg-[#111] border border-white/5 rounded-xl p-4 relative mb-4 hidden sm:block">
<div className="text-xs text-white/70 mb-3 font-medium">
                    Sequence Architecture
                  </div>
<div className="flex items-center gap-2">
<div className="w-1/3 bg-white/5 border border-white/10 rounded p-2 text-center text-xs text-gray-400">
                      Step 1
                      <br/>
<span className="text-white">Email</span>
</div>
<div className="h-px bg-white/20 w-4 flex-shrink-0"></div>
<div className="w-1/3 bg-white/5 border border-white/10 rounded p-2 text-center text-xs text-gray-400">
                      Wait
                      <br/>
<span className="text-white">3 Days</span>
</div>
<div className="h-px bg-white/20 w-4 flex-shrink-0"></div>
<div className="w-1/3 bg-white/5 border border-white/10 rounded p-2 text-center text-xs text-gray-400">
                      Step 2
                      <br/>
<span className="text-white">Follow Up</span>
</div>
</div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3 flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-400 text-lg" icon="solar:user-check-linear"></iconify-icon>
</div>
<div className="text-sm text-gray-300 font-light leading-snug">
                    Sourcing and verifying thousands of ICP-matched prospects
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3 flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-400 text-lg" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="text-sm text-gray-300 font-light leading-snug">
                    Sending signal-based personalized emails without spray and
                    pray
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-lg p-3 flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-400 text-lg" icon="solar:tuning-linear"></iconify-icon>
</div>
<div className="text-sm text-gray-300 font-light leading-snug">
                    Constantly running and iterating A/B tests across every
                    campaign
                  </div>
</div>
</div>
</div>
</div>
<iconify-icon className="text-2xl text-white/20 mb-16 md:hidden" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>

<div className="w-full max-w-4xl grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 relative group">
<div className="bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/80 rounded-2xl p-6 md:p-8 md:col-start-1 relative overflow-hidden hover:border-white/20 transition-all z-10">
<div className="relative z-10 flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-rose-900/20 text-rose-400 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
<iconify-icon className="text-2xl" icon="solar:chat-round-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg md:text-xl font-medium text-white tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    Inbox &amp; Qualification
                  </h3>
<div className="text-xs text-rose-400/80 mt-1 uppercase tracking-widest flex items-center gap-1 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                    Active Monitoring
                  </div>
</div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-3 mb-4 space-y-3">
<div className="flex gap-2 items-start">
<div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-xs text-white">
                    P
                  </div>
<div className="bg-white/5 rounded-r-lg rounded-bl-lg p-2 text-xs text-gray-300 w-full">
                    "This sounds exactly like what we need. Do you have time
                    Thursday?"
                  </div>
</div>
<div className="flex gap-2 items-start flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-rose-900 flex items-center justify-center flex-shrink-0 text-xs text-white">
                    R
                  </div>
<div className="bg-rose-900/20 border border-rose-500/20 rounded-l-lg rounded-br-lg p-2 text-xs text-gray-200 w-full text-right">
                    "Absolutely. Let's confirm a few quick details first..."
                  </div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium leading-snug">
                  Monitoring replies, handling objections &amp; booking calls in
                  real time
                </div>
<div className="flex items-center justify-between text-xs bg-black/40 border border-white/5 p-2 rounded">
<span className="text-gray-400">Decision Maker</span>
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between text-xs bg-black/40 border border-white/5 p-2 rounded">
<span className="text-gray-400">Pain Point Verified</span>
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between text-xs bg-black/40 border border-white/5 p-2 rounded">
<span className="text-gray-400">Budget Capacity</span>
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
<div className="hidden md:flex justify-center items-center z-10">
<div className="w-10 h-10 rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center text-white/50 text-sm font-medium z-10">
                3
              </div>
</div>
<div className="hidden leading-relaxed md:block md:col-start-3 text-sm font-light text-gray-300 border-white/10 border-l pl-6">
<span className="block text-rose-400 font-medium text-xs tracking-widest uppercase mb-2">
                Human Conversion
              </span>
              We don't just generate replies and leave you to figure it out. Our
              trained team is actively monitoring replies, handling complex
              objections, and booking calls in real time while ruthlessly
              qualifying prospects.
            </div>
</div>
<iconify-icon className="text-2xl text-white/20 mb-10 md:hidden" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-full flex justify-center mb-10 z-10 relative">
<div className="hidden md:block absolute w-[2px] h-12 bg-gradient-to-b from-white/10 to-emerald-500 -top-12"></div>
<iconify-icon className="text-4xl text-emerald-500/80 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" icon="solar:diagram-down-linear"></iconify-icon>
</div>

<div className="w-full max-w-5xl z-10 relative">
<div className="absolute inset-0 bg-emerald-600/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] rounded-2xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium uppercase tracking-widest mb-4">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon>
                  The End Result
                </div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Qualified Meetings on Your Calendar
                </h3>
<p className="text-sm text-gray-400 mt-2 font-light">
                  Directly integrated with your schedule. You just show up and
                  close.
                </p>
</div>
<div className="max-w-xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative">
<div className="bg-[#111] px-5 py-4 border-b border-white/5 flex justify-between items-center">
<div className="text-white font-medium text-sm" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    November
                  </div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
<iconify-icon className="text-gray-400 text-xs" icon="solar:alt-arrow-left-linear"></iconify-icon>
</div>
<div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
<iconify-icon className="text-white text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="p-5 flex flex-col md:flex-row gap-6 md:gap-8">
<div className="w-full md:w-1/2">
<div className="grid grid-cols-7 gap-1 mb-2 text-xs text-gray-500 text-center font-medium">
<div>Mo</div>
<div>Tu</div>
<div>We</div>
<div>Th</div>
<div>Fr</div>
<div className="opacity-50">Sa</div>
<div className="opacity-50">Su</div>
</div>
<div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-300 font-mono">
<div className="p-1.5 opacity-30">28</div>
<div className="p-1.5 opacity-30">29</div>
<div className="p-1.5 opacity-30">30</div>
<div className="p-1.5 opacity-30">31</div>
<div className="p-1.5">1</div>
<div className="p-1.5 opacity-50">2</div>
<div className="p-1.5 opacity-50">3</div>
<div className="p-1.5 relative">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
                        4
                      </div>
<div className="p-1.5">5</div>
<div className="p-1.5">6</div>
<div className="p-1.5">7</div>
<div className="p-1.5 relative">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
                        8
                      </div>
<div className="p-1.5 opacity-50">9</div>
<div className="p-1.5 opacity-50">10</div>
<div className="p-1.5">11</div>
<div className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] relative font-medium z-10 cursor-pointer scale-110">
                        12
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-[#0a0a0a]"></div>
</div>
<div className="p-1.5 relative">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
                        13
                      </div>
<div className="p-1.5">14</div>
<div className="p-1.5 relative">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
                        15
                      </div>
<div className="p-1.5 opacity-50">16</div>
<div className="p-1.5 opacity-50">17</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col pt-1 border-t md:border-t-0 md:border-l border-white/5 md:pl-8">
<div className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-widest">
                      Tuesday, Nov 12
                    </div>
<div className="space-y-3">
<div className="bg-emerald-900/10 border border-emerald-500/30 rounded-lg p-3 relative overflow-hidden group hover:bg-emerald-900/20 transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="flex justify-between items-start mb-1">
<div className="text-xs text-emerald-400 font-mono font-medium">
                            10:00 AM - 10:45 AM
                          </div>
<iconify-icon className="text-emerald-400/70 text-sm" icon="solar:videocamera-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-medium leading-tight mb-1" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                          Discovery Call (New Lead)
                        </div>
<div className="flex items-center gap-1.5 text-xs text-gray-400">
<div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                            JD
                          </div>
                          John Doe • VP of Sales
                        </div>
</div>
<div className="border border-transparent p-2 flex items-center gap-3 opacity-50">
<div className="text-xs text-gray-500 w-12 text-right font-mono">
                          11:00 AM
                        </div>
<div className="h-px bg-white/5 flex-grow"></div>
</div>
<div className="bg-emerald-900/10 border border-emerald-500/30 rounded-lg p-3 relative overflow-hidden group hover:bg-emerald-900/20 transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="flex justify-between items-start mb-1">
<div className="text-xs text-emerald-400 font-mono font-medium">
                            01:30 PM - 02:15 PM
                          </div>
<iconify-icon className="text-emerald-400/70 text-sm" icon="solar:videocamera-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-medium leading-tight mb-1" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                          Demo &amp; Walkthrough
                        </div>
<div className="flex items-center gap-1.5 text-xs text-gray-400">
<div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                            SA
                          </div>
                          Sarah Adams • Founder
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-16 md:mt-24 z-10 relative">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span>Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-4xl mx-auto px-4 md:px-6 border-t border-white/5">
<div className="text-center mb-16 md:mb-20">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            The 60-Day Ramp-Up &amp; Beyond
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Here is exactly the volume of heavy lifting we manage entirely
            in-house during your first two months to build a continuous revenue
            engine.
          </p>
</div>
<div className="relative pl-2 md:pl-0">
<div className="absolute left-4 md:left-6 top-8 bottom-8 w-[2px] bg-rose-600/50 -translate-x-1/2 rounded-full hidden sm:block"></div>
<div className="absolute left-6 top-8 bottom-8 w-[2px] bg-rose-600/50 -translate-x-1/2 rounded-full sm:hidden"></div>
<div className="relative pl-10 sm:pl-16 pb-12 md:pb-16 group">
<div className="absolute left-6 sm:left-6 top-8 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)] -translate-x-1/2 border-2 border-[#050505] z-10"></div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-white/10 transition-colors shadow-lg">
<div className="text-rose-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Week 1
              </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                Foundation &amp; List Build
              </h3>
<p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                Your first 2,000–5,000 hand-verified, ICP-matched prospects
                built and segmented into targeted lists. Plus 3–5 custom email
                sequences written, each with A/B tests from subject line to CTA.
              </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  2K–5K Verified Leads
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  3–5 Sequences Built
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  A/B Tests Loaded
                </div>
</div>
</div>
</div>
<div className="relative pl-10 sm:pl-16 pb-12 md:pb-16 group">
<div className="absolute left-6 sm:left-6 top-8 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)] -translate-x-1/2 border-2 border-[#050505] z-10"></div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-white/10 transition-colors shadow-lg">
<div className="text-rose-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Week 2
              </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                Campaigns Go Live
              </h3>
<p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                Email inboxes are warmed and first campaigns launch. Because we
                spent those first two weeks warming domains and dialing in
                deliverability, you're hitting primary inboxes from day one —
                not spam.
              </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Campaigns Launched
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:inbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Primary Inbox Delivery
                </div>
</div>
</div>
</div>
<div className="relative pl-10 sm:pl-16 pb-12 md:pb-16 group">
<div className="absolute left-6 sm:left-6 top-8 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)] -translate-x-1/2 border-2 border-[#050505] z-10"></div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 hover:border-white/10 transition-colors shadow-lg">
<div className="text-rose-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Weeks 3–4
              </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                Replies Start Rolling In
              </h3>
<p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                Real conversations start landing in your inbox — interested
                decision-makers raising their hand. We handle all back-and-forth
                qualification and book meetings directly on your calendar.
              </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Positive Replies
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Meetings Booked
                </div>
</div>
</div>
</div>
<div className="relative pl-10 sm:pl-16 group">
<div className="absolute left-6 sm:left-6 top-8 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)] -translate-x-1/2 border-2 border-[#050505] z-10"></div>
<div className="bg-[#0a0a0a] border border-rose-500/20 rounded-[1.5rem] p-6 md:p-8 shadow-[0_0_30px_rgba(244,63,94,0.05)] hover:shadow-[0_0_40px_rgba(244,63,94,0.1)] transition-all">
<div className="text-rose-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Weeks 5–8+
              </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                Ongoing Scale &amp; Management
              </h3>
<p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                Continuously analyzing campaign data to pause losers and scale
                winners. We increase daily sending volume to 1,000+ targeted
                emails while rotating data lists to maintain a highly
                predictable pipeline flow.
              </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Scale Winners
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs md:text-sm font-medium">
<iconify-icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Predictable Revenue
                </div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-20">
<a className="group flex items-center justify-center gap-2 md:py-4 md:text-base hover:bg-gray-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/leo-revrelay/30min" onclick="if(window.Calendly){Calendly.initPopupWidget({url: 'https://calendly.com/leo-revrelay/30min'}); return false;}" style={{fontFamily: '\'Montserrat\', sans-serif'}} target="_blank">
<span className="">Book your discovery call</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24 max-w-5xl mx-auto px-4 md:px-6 border-t border-white/5 relative">
<div className="absolute inset-0 bg-rose-600/5 blur-[100px] rounded-full pointer-events-none opacity-50 z-0"></div>
<div className="text-center mb-12 md:mb-16 relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tight font-normal text-white mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Cold Email ROI Calculator
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Evaluate your lead generation investment based on industry
            benchmarks and our pay-per-show model.
          </p>
</div>
<div className="relative z-10">
<div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 shadow-lg">
<h3 className="text-xl font-medium text-rose-400 mb-2 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Step 1: Outreach Setup
              </h3>
<p className="text-sm text-gray-500 font-light mb-8">
                Configure your campaign parameters
              </p>
<div className="space-y-6">
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Emails sent per day
                  </label>
<div className="relative">
<select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors cursor-pointer text-sm font-light" id="emailsPerDay" onchange="calc()">
<option value="2381">
                        2,381 emails per day (50,000/mo)
                      </option>
<option value="4762">
                        4,762 emails per day (100,000/mo)
                      </option>
<option value="9524">
                        9,524 emails per day (200,000/mo)
                      </option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Emails sent per contact
                  </label>
<input className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors text-sm font-light" id="emailsPerContact" max="20" min="1" oninput="calc()" type="number" value="3"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Cost Per Call
                  </label>
<div className="flex items-center bg-[#111] border border-white/10 rounded-xl overflow-hidden focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500 transition-colors">
<span className="px-4 py-3 bg-black/40 border-r border-white/10 text-gray-500 text-sm select-none">
                      $
                    </span>
<input className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none text-sm font-light" id="costPerCall" min="0" oninput="calc()" type="number" value="300"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Reply Rate
                    </label>
<span className="text-sm font-medium text-rose-400" id="replyRateVal" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                      2.0%
                    </span>
</div>
<input className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-rose-500 [&amp;::-webkit-slider-thumb]:rounded-full hover:[&amp;::-webkit-slider-thumb]:scale-110 [&amp;::-webkit-slider-thumb]:transition-transform focus:outline-none" id="replyRate" max="5" min="0.5" onchange="calc()" oninput="updateSlider('replyRate', 'replyRateVal'); calc()" step="0.1" type="range" value="2.0"/>
<div className="flex justify-between mt-2">
<span className="text-[10px] text-gray-500">0.5%</span>
<span className="text-[10px] text-gray-500">5%</span>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Positive Reply Rate
                    </label>
<span className="text-sm font-medium text-rose-400" id="posReplyRateVal" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                      15.5%
                    </span>
</div>
<input className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-rose-500 [&amp;::-webkit-slider-thumb]:rounded-full hover:[&amp;::-webkit-slider-thumb]:scale-110 [&amp;::-webkit-slider-thumb]:transition-transform focus:outline-none" id="posReplyRate" max="25" min="5" onchange="calc()" oninput="updateSlider('posReplyRate', 'posReplyRateVal'); calc()" step="0.5" type="range" value="15.5"/>
<div className="flex justify-between mt-2">
<span className="text-[10px] text-gray-500">5%</span>
<span className="text-[10px] text-gray-500">25%</span>
</div>
</div>
</div>
<hr className="border-t border-white/5 my-8"/>
<div className="space-y-3">
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Total people contacted per month
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="totalContacted" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    16,667
                  </div>
<div className="text-xs text-gray-600 font-light" id="contactedDesc">
                    50,001 emails ÷ 3 emails per contact
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Total number of people replied
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="totalReplied" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    333
                  </div>
<div className="text-xs text-gray-600 font-light" id="repliedDesc">
                    16,667 contacts × 2.0% reply rate
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Total number of positive replies
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="totalPosReplied" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    51
                  </div>
<div className="text-xs text-gray-600 font-light" id="posRepliedDesc">
                    333 replies × 15.5% positive rate
                  </div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 md:p-8 shadow-lg">
<h3 className="text-xl font-medium text-rose-400 mb-2 tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Step 2: Sales Conversion
              </h3>
<p className="text-sm text-gray-500 font-light mb-8">
                Define your conversion metrics
              </p>
<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Call Booking Rate
                  </label>
<div className="flex items-center bg-[#111] border border-white/10 rounded-xl overflow-hidden focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500 transition-colors">
<input className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none text-sm font-light" id="bookingRate" max="100" min="0" oninput="calc()" type="number" value="25"/>
<span className="px-4 py-3 bg-black/40 border-l border-white/10 text-gray-500 text-sm select-none">
                      %
                    </span>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Close Rate
                  </label>
<div className="flex items-center bg-[#111] border border-white/10 rounded-xl overflow-hidden focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500 transition-colors">
<input className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none text-sm font-light" id="closeRate" max="100" min="0" oninput="calc()" type="number" value="25"/>
<span className="px-4 py-3 bg-black/40 border-l border-white/10 text-gray-500 text-sm select-none">
                      %
                    </span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Average Sale Price
                  </label>
<div className="flex items-center bg-[#111] border border-white/10 rounded-xl overflow-hidden focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500 transition-colors">
<span className="px-4 py-3 bg-black/40 border-r border-white/10 text-gray-500 text-sm select-none">
                      $
                    </span>
<input className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none text-sm font-light" id="salePrice" min="0" oninput="calc()" type="number" value="10000"/>
</div>
</div>
</div>
<hr className="border-t border-white/5 my-[3.6rem]"/>
<div className="space-y-3">
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Total Calls Booked
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="callsBooked" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    12
                  </div>
<div className="text-xs text-gray-600 font-light" id="callsBookedDesc">
                    51 positive replies × 25.0% booking rate
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Total Clients Closed
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="clientsClosed" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    3
                  </div>
<div className="text-xs text-gray-600 font-light" id="clientsClosedDesc">
                    12 calls booked × 25.0% close rate
                  </div>
</div>
<div className="bg-[#111] border border-emerald-500/10 rounded-xl p-4 md:p-5">
<div className="text-xs text-emerald-500/70 mb-1 font-medium tracking-wide">
                    Net New Monthly Revenue
                  </div>
<div className="text-2xl font-medium text-emerald-400 mb-1" id="monthlyRevenue" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    $30,000
                  </div>
<div className="text-xs text-gray-600 font-light" id="revenueDesc">
                    3 clients × $10,000 per sale
                  </div>
</div>
<div className="bg-[#111] border border-rose-500/10 rounded-xl p-4 md:p-5">
<div className="text-xs text-rose-500/70 mb-1 font-medium tracking-wide">
                    Agency Cost (That Month)
                  </div>
<div className="text-2xl font-medium text-rose-400 mb-1" id="agencyCost" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    $4,400
                  </div>
<div className="text-xs text-gray-600 font-light" id="agencyCostDesc">
                    $800 tech fee + (12 calls × $300)
                  </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-4 md:p-5">
<div className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                    Your Customer Acquisition Cost
                  </div>
<div className="text-2xl font-medium text-white mb-1" id="cac" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    $1,466
                  </div>
<div className="text-xs text-gray-600 font-light" id="cacDesc">
                    $4,400 agency cost ÷ 3 clients
                  </div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/10 rounded-[1.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] pointer-events-none"></div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              Your Investment Summary
            </h3>
<p className="text-sm text-gray-400 font-light mb-8">
              Complete financial overview
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-[#111] border border-white/5 rounded-xl p-6 text-center shadow-inner">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Monthly Investment
                </div>
<div className="text-3xl font-medium text-rose-400 tracking-tight" id="sumInvestment" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  $4,400
                </div>
</div>
<div className="bg-[#111] border border-emerald-500/10 rounded-xl p-6 text-center shadow-inner">
<div className="text-xs text-emerald-500/70 mb-2 uppercase tracking-widest font-medium">
                  Monthly Revenue
                </div>
<div className="text-3xl font-medium text-emerald-400 tracking-tight" id="sumRevenue" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  $30,000
                </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-xl p-6 text-center shadow-inner">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Net Profit
                </div>
<div className="text-3xl font-medium text-white tracking-tight" id="sumProfit" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  $25,600
                </div>
</div>
</div>
<div className="bg-rose-950/20 border border-rose-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
<div>
<div className="text-sm text-gray-400 mb-3 font-medium tracking-wide">
                  Return on Investment
                </div>
<div id="roiBadge">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-3 tracking-wide bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
                    Excellent 🚀
                  </div>
</div>
<div className="text-5xl md:text-6xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300" id="roiPercent" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  581%
                </div>
</div>
<div className="text-sm text-gray-400 font-light md:max-w-xs leading-relaxed border-l-2 border-white/10 pl-4 md:pl-6" id="roiNote">
                ROI = (Monthly Revenue ÷ Agency Cost) × 100% • Excellent
                performance! 🚀
              </div>
</div>
</div>
</div>
</section>

<section className="md:py-24 text-center max-w-4xl border-white/5 border-t mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-3xl md:text-5xl tracking-tight font-normal text-white mb-10" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Who's behind RevRelay?
        </h2>
<div className="flex flex-col items-center">
<img alt="Founder" className="md:w-40 md:h-40 bg-[#111] w-32 h-32 object-cover border-white/5 border-4 rounded-full mb-6 shadow-[0_0_30px_rgba(244,63,94,0.1)] blur-none backdrop-blur-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98f8b846-7f3e-48a3-a495-75edaa388b8c_320w.jpg"/>
<h3 className="md:text-2xl text-xl font-medium text-white tracking-tight mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            Leo Robinson
          </h3>
<p className="md:text-sm uppercase text-xs text-rose-400 tracking-widest bg-rose-900/20 border-rose-500/10 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            Founder
          </p>
<p className="leading-relaxed text-base font-light text-gray-400 max-w-2xl">
            Based in Toronto, Canada, I spent over a decade in sales building
            outbound pipelines as an SDR for SaaS companies. During that time, I
            saw how inconsistent and inefficient most B2B lead generation really
            is. While doing it myself, I consistently booked and qualified
            meetings through cold outreach, giving me a clear understanding of
            what actually works in real-world outbound. That experience led me
            to build RevRelay—focused on creating a more predictable,
            performance-driven approach to outbound. Today, we design and manage
            cold email systems that generate qualified sales meetings through
            highly targeted, data-driven outreach.
          </p>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 px-2 md:px-6 border-t border-white/5" id="faq">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-12 tracking-tight font-normal text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-white/5 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-rose-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              How do you ensure the meetings are actually qualified?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We use a multi-step qualification process including budget
              confirmation, decision-maker verification, and timeline validation
              before any meeting gets booked on your calendar.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-white/5 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-rose-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              What if prospects don't show up to the calls?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              You don't pay. Our model is purely pay-per-show. If a prospect
              no-shows, reschedules and fails to attend, or turns out to be
              unqualified, you owe us nothing for that meeting.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-white/5 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-rose-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              How is this different from other lead generation agencies?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Traditional agencies charge monthly retainers whether they deliver
              results or not. We only get paid when you get qualified prospects
              on sales calls. Our incentives are completely aligned with your
              success.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-white/5 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-rose-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              How quickly can you start generating meetings?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Most clients see their first qualified meetings booked within 3-4
              weeks. Full pipeline flow typically develops by week 6-8.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-white/5 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex md:p-6 cursor-pointer select-none list-none hover:text-rose-400 transition-colors text-base font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
              What industries do you work with?
              <iconify-icon className="transition-transform group-open:rotate-180 text-lg text-gray-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-base text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We specialize in B2B companies selling high-ticket services or
              products ($3K-$50K+) that require sales conversations to close
              deals.
            </div>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto py-12 md:py-20 mb-8 md:mb-12 px-2 md:px-6">
<div className="text-center mb-10 md:mb-12">
<h2 className="text-3xl md:text-5xl tracking-tight font-normal text-white mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            Ready to get started?
          </h2>
<p className="text-base text-gray-400 font-light">
            Book your free discovery call directly on our calendar.
          </p>
</div>
<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/5 rounded-[1.5rem] shadow-xl shadow-black/50 overflow-hidden h-[750px] w-full p-2 md:p-4">
<div className="calendly-inline-widget w-full h-full" data-processed="true" data-url="https://calendly.com/leo-revrelay/30min?hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=f43f5e" style={{position: 'relative', minWidth: '320px', height: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe frameborder="0" height="100%" src="https://calendly.com/leo-revrelay/30min?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=f43f5e" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 flex flex-col items-center text-gray-500 text-sm">
<div className="mb-4 flex justify-center">
<span className="text-xl font-normal italic text-white tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          RevRelay
        </span>
</div>
<div className="mb-4 flex justify-center">
<a className="text-gray-500 hover:text-white transition-colors" href="https://www.linkedin.com/company/revrelay/" target="_blank">
<iconify-icon className="text-2xl" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
<p className="">© 2026 RevRelay. All rights reserved.</p>
</footer>


    </>
  );
}
