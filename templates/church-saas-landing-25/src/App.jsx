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
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 bg-[#0a1628]/90 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white font-medium text-lg tracking-tight">Hello</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#">How It Works</a>
<a className="hover:text-white transition-colors" href="#">What Makes Hello Different</a>
</div>
<a className="bg-[#00E6A0] text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-[#00c98b] transition-colors text-sm" href="#">Get Early Access</a>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00E6A0]/20 bg-[#00E6A0]/10 text-[#00E6A0] text-xs font-medium mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-[#00E6A0]"></div>
                Closed beta now open for early churches
            </div>
<h1 className="text-4xl lg:text-6xl tracking-tight font-medium text-white mb-6 leading-[1.1]">
                Turn More First-Time Visitors Into <span className="text-[#00E6A0]">Second-Time Guests</span>
</h1>
<p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                Hello is an automated first-time guest follow-up system for churches. The moment a guest scans your QR code and fills out your form, Hello starts a 5-day text and email sequence designed to help more guests come back.
            </p>
<form className="flex flex-col sm:flex-row gap-3 mb-4 max-w-md">
<input className="flex-1 bg-[#152033] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E6A0]/50 focus:ring-1 focus:ring-[#00E6A0]/50 transition-all text-base" placeholder="Church work email" type="email"/>
<button className="bg-[#00E6A0] text-slate-900 font-medium px-6 py-3.5 rounded-xl hover:bg-[#00c98b] transition-colors whitespace-nowrap text-base" type="submit">Get Early Access</button>
</form>
<p className="text-xs text-slate-500">Closed beta access for churches who want a better first-time guest return system.</p>
</div>
<div className="relative w-full max-w-[320px] mx-auto lg:ml-auto perspective-[1000px]">

<div className="bg-white rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 relative aspect-[1/2.1] flex flex-col overflow-hidden">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10">
<div className="w-1/3 h-full bg-slate-800 rounded-b-2xl"></div>
</div>

<div className="bg-slate-50 flex-1 rounded-[2.5rem] flex flex-col overflow-hidden pt-6">

<div className="flex items-center gap-3 px-4 pb-3 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-medium text-sm shrink-0">AL</div>
<div className="min-w-0">
<div className="text-slate-900 font-medium text-sm truncate">Abundant Living Church</div>
<div className="text-slate-400 text-xs truncate">Text Message</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 text-[13px] leading-relaxed bg-white">
<div className="text-center text-[10px] text-slate-400 my-1 font-medium">Sunday 3:47 PM</div>
<div className="self-start bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl rounded-bl-sm max-w-[85%] shadow-sm">Hey Sarah 👋 So glad you joined us today. You made our Sunday.</div>
<div className="self-end bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[85%] shadow-sm">We really enjoyed the service. Thank you!</div>
<div className="text-center text-[10px] text-slate-400 my-1 font-medium mt-3">Monday 9:00 AM</div>
<div className="self-start bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl rounded-bl-sm max-w-[85%] shadow-sm">As promised — a small gift of appreciation for visiting us yesterday. Enjoy! hvc.co/gift</div>
<div className="self-end bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[85%] shadow-sm">Wait, seriously? That's so cool.</div>
</div>

<div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="camera"></i>
<div className="flex-1 border border-slate-200 rounded-full px-4 py-1.5 text-slate-400 text-xs flex items-center justify-between">
                            iMessage
                            <i className="w-4 h-4 text-slate-400 stroke-[1.5]" data-lucide="mic"></i>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00E6A0]/20 rounded-full blur-3xl -z-10"></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24">
<div className="bg-[#101b2e] border border-white/5 rounded-[2rem] p-8 lg:p-14 shadow-2xl">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-8">Automated, Personal Follow-up</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-medium mb-10 max-w-4xl leading-tight">
                Every message is timed, written, and delivered automatically, so your team stays consistent without adding weekly follow-up work.
            </h2>
<div className="flex flex-wrap gap-4">
<div className="px-4 py-2.5 rounded-full bg-[#162338] border border-white/5 text-slate-300 text-sm flex items-center gap-2.5 shadow-sm">
<i className="w-4 h-4 text-blue-400 stroke-[1.5]" data-lucide="zap"></i> Instant welcome
                </div>
<div className="px-4 py-2.5 rounded-full bg-[#162338] border border-white/5 text-slate-300 text-sm flex items-center gap-2.5 shadow-sm">
<i className="w-4 h-4 text-blue-400 stroke-[1.5]" data-lucide="gift"></i> Incentive delivered
                </div>
<div className="px-4 py-2.5 rounded-full bg-[#162338] border border-white/5 text-slate-300 text-sm flex items-center gap-2.5 shadow-sm">
<i className="w-4 h-4 text-blue-400 stroke-[1.5]" data-lucide="play-circle"></i> Pastor video
                </div>
<div className="px-4 py-2.5 rounded-full bg-[#162338] border border-white/5 text-slate-300 text-sm flex items-center gap-2.5 shadow-sm">
<i className="w-4 h-4 text-blue-400 stroke-[1.5]" data-lucide="message-square"></i> AI concierge
                </div>
<div className="px-4 py-2.5 rounded-full bg-[#162338] border border-white/5 text-slate-300 text-sm flex items-center gap-2.5 shadow-sm">
<i className="w-4 h-4 text-blue-400 stroke-[1.5]" data-lucide="corner-down-right"></i> Return invite
                </div>
</div>
</div>
</section>

<section className="text-center max-w-4xl mx-auto px-6 py-24">
<div className="inline-flex px-3 py-1 rounded-full bg-[#00E6A0]/10 border border-[#00E6A0]/20 text-[#00E6A0] text-xs font-medium uppercase tracking-widest mb-8">How It Works</div>
<h2 className="text-3xl lg:text-5xl tracking-tight text-white font-medium mb-8 leading-tight">Most churches already collect guest information. Hello automates what happens next.</h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            When a first-time guest fills out your church's QR form, Hello instantly starts a 5-day text and email follow-up sequence designed to build trust, answer questions, and increase the chances they return.
        </p>
</section>

<div className="bg-white text-slate-600">

<section className="max-w-6xl mx-auto px-6 py-16 border-b border-slate-100">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Works with the tools your church already uses</p>
<div className="flex flex-wrap justify-center gap-4 lg:gap-6">
<div className="border border-slate-200 rounded-2xl px-8 py-5 flex items-center justify-center text-sm font-medium text-slate-700 bg-slate-50/50 min-w-[160px]">Planning Center</div>
<div className="border border-slate-200 rounded-2xl px-8 py-5 flex items-center justify-center text-sm font-medium text-slate-700 bg-slate-50/50 min-w-[160px]">SMS + Email</div>
<div className="border border-slate-200 rounded-2xl px-8 py-5 flex items-center justify-center text-sm font-medium text-slate-700 bg-slate-50/50 min-w-[160px]">Multi-Campus Ready</div>
<div className="border border-slate-200 rounded-2xl px-8 py-5 flex items-center justify-center text-sm font-medium text-slate-700 bg-slate-50/50 min-w-[160px] text-center leading-snug">24/7 Guest<br/>Concierge</div>
</div>
</section>

<section className="bg-[#0a1628] py-24 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-16">By the numbers</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-20 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="pt-8 md:pt-0">
<div className="text-6xl font-medium text-blue-500 tracking-tight mb-4">~80%</div>
<p className="text-slate-400 text-base max-w-[250px] mx-auto leading-relaxed">of first-time guests never return if no one follows up within 48 hours.</p>
</div>
<div className="pt-8 md:pt-0">
<div className="text-6xl font-medium text-blue-500 tracking-tight mb-4">5</div>
<p className="text-slate-400 text-base max-w-[250px] mx-auto leading-relaxed">days. That's Hello's entire window to help a first-time guest return.</p>
</div>
<div className="pt-8 md:pt-0">
<div className="text-6xl font-medium text-[#00E6A0] tracking-tight mb-4">$0</div>
<p className="text-slate-400 text-base max-w-[250px] mx-auto leading-relaxed">in extra staff time. Hello runs the entire follow-up on autopilot.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium uppercase tracking-widest mb-6">How it works</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-slate-900 font-medium mb-6">From guest form to second visit <span className="text-blue-600">in 4 simple steps</span></h2>
<p className="text-lg text-slate-500">No tech team required. Hello works with your existing guest flow or gives you one to launch fast.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="user-plus"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Connect Your Guest Flow</h3>
<p className="text-base text-slate-500 leading-relaxed">Connect to Planning Center, your current guest software, or use Hello's built-in QR code and form system.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-sm">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-square"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Follow-Up Starts Instantly</h3>
<p className="text-base text-slate-500 leading-relaxed">The moment a first-time guest fills out the form, Hello automatically starts the text and email sequence. No delay. No manual follow-up.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-sm">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="gift"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Deliver the Incentive</h3>
<p className="text-base text-slate-500 leading-relaxed">Hello sends the digital gift your church offers as part of the guest experience, paired with a personal note that helps drive engagement and makes guests feel remembered.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="line-chart"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">See Who's Most Likely to Return</h3>
<p className="text-base text-slate-500 leading-relaxed">Your dashboard shows who opened, clicked, replied, and who looks most likely to come back.</p>
</div>
</div>
</div>
</section>
</div> 

<section className="bg-[#0a1628] py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-[#00E6A0]/10 border border-[#00E6A0]/20 text-[#00E6A0] text-xs font-medium uppercase tracking-widest mb-6">The 5-Day Sequence</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-medium mb-6">The 5-Day Follow-Up Sequence</h2>
<p className="text-lg text-slate-400">Every message is timed to move a first-time guest toward a second visit by building trust, creating connection, and removing friction.</p>
</div>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-6 hover:bg-[#142238] transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">0</div>
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Sunday</div>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Instant Welcome</h3>
<p className="text-sm text-slate-400 leading-relaxed">The moment a first-time guest fills out the form, Hello sends a warm thank-you message while the visit is still fresh.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-6 hover:bg-[#142238] transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">1</div>
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Monday</div>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">The Gift Arrives</h3>
<p className="text-sm text-slate-400 leading-relaxed">Hello delivers the digital gift your church offers, along with a personal note that reinforces the experience and keeps the guest engaged.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-6 hover:bg-[#142238] transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">2</div>
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Tuesday</div>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Pastor Video Welcome</h3>
<p className="text-sm text-slate-400 leading-relaxed">A short welcome video from the pastor is sent automatically to build a stronger personal connection and reinforce the invitation to return.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-6 hover:bg-[#142238] transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">3</div>
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Wednesday</div>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Questions Answered Instantly</h3>
<p className="text-sm text-slate-400 leading-relaxed">Hello's 24/7 Guest Concierge, an AI assistant trained on your church's information, helps first-time guests get answers about service times, kids ministry, parking, beliefs, events, and what to expect.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-6 hover:bg-[#142238] transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">5</div>
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Saturday</div>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">The Return Invite</h3>
<p className="text-sm text-slate-400 leading-relaxed">A final message reminds the guest about Sunday, including service times, parking details, and a simple invitation to come back.</p>
</div>
</div>
</div>
</section>

<div className="bg-white text-slate-600">

<section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center border-b border-slate-100">
<div>
<div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium uppercase tracking-widest mb-8">24/7 Guest Concierge</div>
<h2 className="text-3xl lg:text-5xl tracking-tight text-slate-900 font-medium mb-6 leading-tight">A 24/7 Guest Concierge for the questions guests actually ask</h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">Hello's AI concierge is trained on your church's information, so first-time guests can get instant answers about service times, kids ministry, parking, beliefs, and upcoming events without waiting on staff.</p>
<p className="text-sm text-slate-400">Powered by your church's service info, FAQs, kids ministry details, parking instructions, and live event updates.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
<div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div>
<div className="font-medium text-slate-900 text-sm">Hello Assistant</div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Online
                        </div>
</div>
</div>
<div className="p-6 flex flex-col gap-4 text-sm bg-white h-[350px] overflow-y-auto">

<div className="self-end bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">What time does kids check-in open?</div>

<div className="flex gap-3 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div className="bg-slate-100 text-slate-700 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm">Kids check-in opens 20 minutes before service in the main lobby.</div>
</div>

<div className="self-end bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm mt-2">Is there something for junior high?</div>

<div className="flex gap-3 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div className="bg-slate-100 text-slate-700 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm">Yes. Middle school meets during the second half of service in Room 204.</div>
</div>

<div className="self-end bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm mt-2">Where should I park?</div>

<div className="flex gap-3 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div className="bg-slate-100 text-slate-700 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm">Guest parking is available in the front lot near the main entrance.</div>
</div>
</div>
<div className="p-4 border-t border-slate-100 bg-white">
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Ask a question..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</section>
</div> 

<section className="bg-[#0a1628] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6">Dashboard</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-medium mb-6">See who's most likely to return</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">Your dashboard shows real-time engagement data for every first-time guest, so your team knows who opened messages, clicked links, asked questions, and who's most likely to come back.</p>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto">
<div className="p-6 md:p-8 bg-white text-slate-900">

<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-medium tracking-tight">First Time Guests</h3>
<div className="flex items-center gap-2 text-sm text-slate-500 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-50">
                            Last 30 days <i className="w-4 h-4" data-lucide="calendar"></i>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="border border-blue-100 bg-blue-50/30 rounded-xl p-5">
<div className="text-3xl font-medium text-blue-600 mb-1 tracking-tight">47</div>
<div className="text-xs text-slate-500 font-medium">Total Guests</div>
</div>
<div className="border border-emerald-100 bg-emerald-50/30 rounded-xl p-5">
<div className="text-3xl font-medium text-emerald-600 mb-1 tracking-tight">89%</div>
<div className="text-xs text-slate-500 font-medium">Message Open Rate</div>
</div>
<div className="border border-blue-100 bg-blue-50/30 rounded-xl p-5">
<div className="text-3xl font-medium text-blue-600 mb-1 tracking-tight">34</div>
<div className="text-xs text-slate-500 font-medium">Active Conversations</div>
</div>
<div className="border border-emerald-100 bg-emerald-50/30 rounded-xl p-5">
<div className="text-3xl font-medium text-emerald-600 mb-1 tracking-tight">12</div>
<div className="text-xs text-slate-500 font-medium">High Return Score</div>
</div>
</div>

<div className="space-y-1">

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-medium">SM</div>
<div>
<div className="font-medium text-sm text-slate-900">Sarah Martinez</div>
<div className="text-xs text-slate-500">Visited Mar 30 • Last message: 2h ago</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="check"></i> Opened all
                                </div>
<div className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-100">High Return Score</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full my-1"></div>

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">JT</div>
<div>
<div className="font-medium text-sm text-slate-900">James Thompson</div>
<div className="text-xs text-slate-500">Visited Mar 30 • Last message: 5h ago</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="message-square"></i> Asked 3 questions
                                </div>
<div className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-100">High Return Score</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full my-1"></div>

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">ER</div>
<div>
<div className="font-medium text-sm text-slate-900">Emily Rodriguez</div>
<div className="text-xs text-slate-500">Visited Mar 29 • Last message: 1d ago</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="check"></i> 3 of 5 opened
                                </div>
<div className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium border border-blue-100">Medium Return Score</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white text-slate-600">

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium uppercase tracking-widest mb-6">What makes hello different</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-slate-900 font-medium">Built specifically for first-time guest follow-up</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Instant Follow-Up</h3>
<p className="text-base text-slate-500">The first message goes out the moment a first-time guest fills out the form, while the visit is still fresh.</p>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="gift"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Digital Incentives</h3>
<p className="text-base text-slate-500">The built-in gift strategy gives first-time guests a reason to complete the form and stay engaged after the visit.</p>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Pastor Connection at Scale</h3>
<p className="text-base text-slate-500">A pastor welcome video is sent automatically, creating personal connection without adding weekly staff work.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-square"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">24/7 Guest Concierge</h3>
<p className="text-base text-slate-500">First-time guests can ask questions anytime and get answers based on your church's information, helping remove friction before the next Sunday.</p>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="line-chart"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Return Score</h3>
<p className="text-base text-slate-500">A real-time engagement score that helps your team see which first-time guests are most likely to return.</p>
</div>

<div className="bg-[#101b2e] border border-white/5 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight relative z-10">Multi-Campus Ready</h3>
<p className="text-base text-slate-400 relative z-10">Whether your church has one campus or many, Hello routes guests and follow-up to the right location.</p>
</div>
</div>
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mt-16">Planning Center Connected</p>
<p className="text-center text-sm text-slate-500 mt-2">Connect to Planning Center, your current guest software, or use Hello's built-in QR code and form system.</p>
</section>
</div>

<section className="bg-[#0a1628] py-24 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6">The Difference</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-medium mb-6">Other tools give you features. <span className="text-[#00E6A0]">Hello runs the follow-up.</span></h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">Most church communication tools still depend on someone on your team to build the workflow, send the messages, and stay consistent every week. Hello automates the entire first-time guest follow-up process, so once it is set up, it works quietly in the background.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

<div className="bg-[#101b2e]/50 border border-white/5 rounded-[2rem] p-8 lg:p-10">
<h3 className="text-lg text-slate-300 font-medium mb-8">Generic church communication tools</h3>
<ul className="space-y-5">
<li className="flex items-start gap-3 text-slate-400 text-base">
<i className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" data-lucide="x-circle"></i> Give you texting and email features
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-base">
<i className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" data-lucide="x-circle"></i> Depend on staff to build and manage follow-up
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-base">
<i className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" data-lucide="x-circle"></i> Require consistency from already busy teams
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-base">
<i className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" data-lucide="x-circle"></i> Help you communicate
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-base">
<i className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" data-lucide="x-circle"></i> Stop short of running a return-focused system
                        </li>
</ul>
</div>

<div className="bg-[#101b2e] border border-[#00E6A0]/20 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[#00E6A0]/5 pointer-events-none"></div>
<h3 className="text-lg text-white font-medium mb-8 relative z-10">Hello</h3>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Automates the full first-time guest follow-up sequence
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Starts instantly when a guest fills out the form
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Delivers the incentive automatically
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Sends the pastor video automatically
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Provides 24/7 guest Q&amp;A automatically
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-base">
<i className="w-5 h-5 text-[#00E6A0] shrink-0 mt-0.5" data-lucide="check-circle-2"></i> Tracks engagement and return likelihood automatically
                        </li>
</ul>
</div>
</div>
</div>
</section>

<div className="bg-white text-slate-600">

<section className="py-24 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium uppercase tracking-widest mb-6">Pricing</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-slate-900 font-medium mb-6">Simple pricing for churches who want better<br/>guest follow-up</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Hello is currently in closed beta. We're working with a limited number of early churches to refine the system and ensure it delivers results.</p>
</div>
<div className="max-w-md mx-auto bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-xl text-center">
<div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-6">Closed Beta</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Early Access Pricing</h3>
<p className="text-slate-500 mb-8 text-sm">Join the first group of churches using Hello. Pricing locks in for early beta participants.</p>
<ul className="space-y-4 text-left mb-10">
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            Complete 5-day automated follow-up sequence
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            24/7 AI guest concierge
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            Real-time return likelihood dashboard
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            Planning Center integration
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            Multi-campus support
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"><i className="w-3 h-3 stroke-[2.5]" data-lucide="check"></i></div>
                            Onboarding and setup support
                        </li>
</ul>
<button className="w-full bg-blue-600 text-white font-medium py-3.5 rounded-xl hover:bg-blue-700 transition-colors mb-4 text-base shadow-sm">Request Beta Access</button>
<p className="text-xs text-slate-400">Limited spots available for churches in the closed beta program.</p>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 text-center border-b border-slate-100">
<h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-slate-900 font-medium leading-relaxed mb-8">
                "Churches already work hard to bring first-time guests through the door. Hello is built to make sure the follow-up actually happens."
            </h2>
<div className="text-sm font-medium text-slate-900">Carlo Krouzian</div>
<div className="text-sm text-slate-500">Founder, Hello for Churches</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium uppercase tracking-widest mb-6">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> Strategic Insight
                </div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-slate-900 font-medium mb-6 max-w-3xl mx-auto leading-tight">
                    You may not have a first-time guest problem. You may have a <span className="text-blue-600">follow-up problem.</span>
</h2>
<p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                    More return visits without needing more first-time guests. Hello helps your church convert more of the guests who already showed up by automating follow-up from the moment they fill out your form.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Immediate follow-up beats delayed follow-up</h3>
<p className="text-base text-slate-500 leading-relaxed">The faster the church responds, the better the chance the guest remembers the experience and engages again.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clipboard-check"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Consistency beats good intentions</h3>
<p className="text-base text-slate-500 leading-relaxed">Most systems depend on busy staff members to remember what to send and when. Hello runs automatically in the background.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
<div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Small conversion gains create meaningful growth</h3>
<p className="text-base text-slate-500 leading-relaxed">When more first-time guests come back, your church gets more value from the traffic it is already generating.</p>
</div>
</div>
</section>
</div> 

<section className="bg-[#0a1628] py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6">FAQ</div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-medium">Common questions about Hello</h2>
</div>
<div className="space-y-4">
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">Does Hello work with our existing guest software?</h3>
<p className="text-sm text-slate-400 leading-relaxed">Yes. Hello integrates with Planning Center and most major church management systems. If you don't have a guest system, we provide a QR code and form solution you can launch immediately.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">How much technical setup does Hello require?</h3>
<p className="text-sm text-slate-400 leading-relaxed">Minimal. Most churches are up and running in under a week. We handle the integration setup and provide onboarding support to make sure your team is comfortable with the system.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">Can we customize the messages Hello sends?</h3>
<p className="text-sm text-slate-400 leading-relaxed">Yes. While Hello comes with a proven message sequence that works across churches, you can customize tone, timing, and content to match your church's voice and ministry approach.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">What if a guest replies to a message?</h3>
<p className="text-sm text-slate-400 leading-relaxed">Your team gets notified immediately. Hello handles the automated sequence, but real conversations go directly to your staff so you can respond personally when guests engage.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">Does Hello work for multi-campus churches?</h3>
<p className="text-sm text-slate-400 leading-relaxed">Absolutely. Hello routes guests and follow-up to the correct campus automatically, so each location gets the right messages with campus-specific details like service times and parking.</p>
</div>
<div className="bg-[#101b2e] border border-white/5 rounded-2xl p-6 lg:p-8">
<h3 className="text-base font-medium text-white mb-2">How does the AI guest concierge work?</h3>
<p className="text-sm text-slate-400 leading-relaxed">We train the AI on your church's information—service times, kids ministry details, parking, beliefs, events, and FAQs. When a guest asks a question, the AI provides accurate, helpful answers based on your church's specific information.</p>
</div>
</div>
</div>
</section>

<section className="bg-white text-slate-900 py-32 border-t border-slate-100 flex-grow">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-5xl tracking-tight font-medium mb-6 leading-tight">
                Ready to turn more first-time visitors into <span className="text-blue-600">second-time guests?</span>
</h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the first group of churches using Hello to automate first-time guest follow-up and build a stronger path back to Sunday.
            </p>
<form className="flex flex-col sm:flex-row justify-center gap-3 mb-4 max-w-lg mx-auto">
<input className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base shadow-sm" placeholder="Church work email" type="email"/>
<button className="bg-blue-600 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap text-base shadow-sm" type="submit">Join The Closed Beta</button>
</form>
<p className="text-xs text-slate-400">Limited beta access for early churches.</p>
</div>
</section>

<footer className="bg-[#0a1628] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<div className="text-white font-medium text-lg tracking-tight mb-1">Hello for Churches</div>
<div className="text-slate-500 text-sm">Built to help more first-time guests come back.</div>
</div>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">How It Works</a>
<a className="hover:text-white transition-colors" href="#">What Makes Hello Different</a>
<a className="hover:text-white transition-colors" href="#">Get Early Access</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 text-center text-xs text-slate-600">
            © 2024 Hello for Churches. Built to bring them back.
        </div>
</footer>


    </>
  );
}
