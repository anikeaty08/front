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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<header className="border-b border-zinc-200 px-4 py-12 sticky top-0 bg-white/80 backdrop-blur-md z-20">
<div className="max-w-2xl mx-auto">
<h1 className="text-zinc-950 font-semibold text-4xl tracking-tighter uppercase">PLO SERIES 2026</h1>
<div className="flex items-center justify-between mt-3">
<p className="text-zinc-500 text-xs font-medium tracking-widest uppercase">Official Schedule • 23 Events</p>
<div className="flex gap-4 items-center">
<span className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
<iconify-icon icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        RE: Entry Limit
                    </span>
</div>
</div>
</div>
</header>
<main className="max-w-2xl mx-auto pb-32">

<div className="bg-zinc-50 px-4 py-3 border-b border-zinc-100">
<span className="text-zinc-400 font-semibold text-xs uppercase tracking-widest">May 2026</span>
</div>
<div className="flex flex-col">

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>05/28</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$5,000</div>
</div>
</div>
</div>

<div className="bg-zinc-50 px-4 py-3 border-b border-zinc-100">
<span className="text-zinc-400 font-semibold text-xs uppercase tracking-widest">June 2026</span>
</div>
<div className="flex flex-col">

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/01</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO/8 - O/8 - Big O</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/02</span><span className="text-zinc-300">•</span><span>10:00 AM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Deepstack</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$600</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/04</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO/8</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/08</span><span className="text-zinc-300">•</span><span>10:00 AM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">NLH - PLO Deepstack</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$600</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-zinc-950">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-400 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:cup-first-linear"></iconify-icon>
<span>06/09</span><span className="text-zinc-600">•</span><span>2:00 PM</span><span className="text-zinc-600">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight">PLO/8 Championship</h3>
</div>
<div className="bg-white text-zinc-950 px-3 py-1 rounded-sm font-semibold text-base">$10,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/10</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 1A</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>
<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/11</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 1B</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-zinc-50">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>06/15</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Highroller 1A</h3>
</div>
<div className="bg-zinc-950 text-white px-3 py-1 rounded-sm font-semibold text-base">$25,000</div>
</div>
</div>
<div className="border-b border-zinc-100 px-4 py-6 bg-zinc-50">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>06/16</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Highroller 1B</h3>
</div>
<div className="bg-zinc-950 text-white px-3 py-1 rounded-sm font-semibold text-base">$25,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/18</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">5-Card PLO</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-amber-50">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:crown-linear"></iconify-icon>
<span>06/19</span><span className="text-amber-300">•</span><span>12:00 PM</span><span className="text-amber-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Highroller</h3>
</div>
<div className="bg-amber-600 text-white px-3 py-1 rounded-sm font-semibold text-base">$50,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/20</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 1A</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,000</div>
</div>
</div>
<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/21</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 1B</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,000</div>
</div>
</div>
<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/22</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 1C</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-zinc-50">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>06/23</span><span className="text-zinc-300">•</span><span>12:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO - NLH High Roller</h3>
</div>
<div className="bg-zinc-950 text-white px-3 py-1 rounded-sm font-semibold text-base">$25,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-zinc-950">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-400 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:cup-first-linear"></iconify-icon>
<span>06/26</span><span className="text-zinc-600">•</span><span>2:00 PM</span><span className="text-zinc-600">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 0</span>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight uppercase">PLO Championship</h3>
</div>
<div className="bg-white text-zinc-950 px-3 py-1 rounded-sm font-semibold text-base">$10,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 bg-amber-100">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-amber-900 font-semibold text-xs uppercase tracking-wider">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
<span>06/30</span><span className="text-amber-300">•</span><span>12:00 PM</span><span className="text-amber-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Highroller</h3>
</div>
<div className="bg-amber-600 text-white px-3 py-1 rounded-sm font-semibold text-base">$100,000</div>
</div>
</div>
</div>

<div className="bg-zinc-50 px-4 py-3 border-b border-zinc-100">
<span className="text-zinc-400 font-semibold text-xs uppercase tracking-widest">July 2026</span>
</div>
<div className="flex flex-col">

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>07/02</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Double Board Bomb Pot</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>07/07</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Mystery Bounty 1A</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,000</div>
</div>
</div>
<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>07/08</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2/FL</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Mystery Bounty 1B</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,000</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>07/09</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO Dealers Choice</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$1,500</div>
</div>
</div>

<div className="border-b border-zinc-100 px-4 py-6 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
<span>07/12</span><span className="text-zinc-300">•</span><span>2:00 PM</span><span className="text-zinc-300">•</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 2</span>
</div>
<h3 className="text-zinc-950 font-semibold text-lg tracking-tight">PLO 6-max</h3>
</div>
<div className="bg-zinc-100 px-3 py-1 rounded-sm font-semibold text-base">$3,000</div>
</div>
</div>
</div>
<footer className="px-4 py-20 text-center border-t border-zinc-100 mt-10">
<p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">End of Series • Total 23 Events Recorded</p>
</footer>
</main>

    </>
  );
}
