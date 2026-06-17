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
      
<main className="w-full max-w-4xl bg-[#faf8f3] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.08)] animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">

<header className="bg-[#1e2b1a] px-6 py-10 md:px-12 md:py-12 relative overflow-hidden group">

<div className="absolute -top-[50%] -right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(109,154,92,0.15)_0%,transparent_70%)] pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-110"></div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a22e] via-[#e0c44f] to-[#c9a22e]"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-6 relative z-10">
<div>
<h1 className="font-['DM_Serif_Display',serif] text-4xl md:text-5xl text-white tracking-tight leading-none mb-2.5 font-light">
            Spring Lawn <em className="not-italic italic text-[#e0c44f]">Reset</em>
</h1>
<div className="text-xs text-[#9dbd8a] font-light tracking-wide opacity-90">
            Aledo, TX · 76108 · 3rd Year Serving Your Neighborhood
          </div>
</div>
<a className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 text-xs font-medium text-[#9dbd8a] tracking-wider backdrop-blur-md shadow-sm transition-colors hover:bg-white/10 cursor-pointer" href="sms:+16827748744">
<span className="w-1.5 h-1.5 bg-[#6d9a5c] rounded-full animate-[pulse_2s_ease-in-out_infinite]"></span>
          Booking Now
        </a>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 pt-6 border-t border-white/5 relative z-10">
<span className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 flex items-center gap-1.5">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon> Dethatching
        </span>
<span className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 flex items-center gap-1.5">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon> Core Aeration
        </span>
<span className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> Premium Feeding
        </span>
</div>
</header>

<div className="bg-[#f0ede3] px-6 py-3.5 md:px-12 text-xs text-[#787872] border-b border-[#ddd8cb]/60 leading-relaxed font-light flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
      Limited weekend availability — scheduled by neighborhood. Please mark sprinkler heads, shallow wires &amp; lighting before service.
    </div>
<div className="p-6 md:p-12">

<section className="mb-12">
<h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5230] mb-5">How It Works — 2-Phase Reset</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-[#f0ede3] rounded-xl p-6 border border-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-black/[0.06] group cursor-default">
<div className="text-xs font-medium uppercase tracking-[0.12em] text-[#6d9a5c] mb-1.5">Phase 1</div>
<div className="font-['DM_Serif_Display',serif] text-xl text-[#1a1a1a] mb-2 transition-colors group-hover:text-[#3a5230]">Dethatching</div>
<div className="text-xs text-[#787872] leading-relaxed font-light">Power rake removes dead grass buildup so water and nutrients can reach the soil.</div>
</div>
<div className="bg-[#f0ede3] rounded-xl p-6 border border-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-black/[0.06] group cursor-default">
<div className="text-xs font-medium uppercase tracking-[0.12em] text-[#6d9a5c] mb-1.5">Phase 2 · Following Weekend</div>
<div className="font-['DM_Serif_Display',serif] text-xl text-[#1a1a1a] mb-2 transition-colors group-hover:text-[#3a5230]">Core Aeration + Feeding</div>
<div className="text-xs text-[#787872] leading-relaxed font-light">Relieves compaction and feeds the lawn while it's open for maximum results.</div>
</div>
</div>
</section>

<div className="flex items-center justify-center gap-2.5 bg-[#1e2b1a] rounded-xl py-3.5 px-6 mb-8 shadow-inner ring-1 ring-white/10">
<iconify-icon className="text-[#e0c44f] text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#e0c44f]">Most Popular</span>
<span className="hidden md:inline text-xs text-[#787872] px-1">•</span>
<span className="text-xs md:text-sm text-white/80 font-light">Full Spring Reset (Both Phases)</span>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-12">

<div className="relative p-5 rounded-xl transition-colors hover:bg-black/[0.02]">
<h3 className="font-medium text-sm text-[#1a1a1a] mb-0.5 tracking-tight">Phase 1 – Dethatching</h3>
<div className="text-xs text-[#787872] mb-5 font-light">Power Rake</div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5">Front Yard Only</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$149</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$185</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$229</span></div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5 mt-5">Front + Back</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$215</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$265</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$325</span></div>
</div>

<div className="relative p-5 rounded-xl border border-[#6d9a5c]/30 bg-[#6d9a5c]/[0.04] shadow-sm transform md:-translate-y-2 order-first md:order-none ring-1 ring-[#6d9a5c]/20">
<div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#6d9a5c] text-white text-xs font-medium px-2.5 py-0.5 rounded-full tracking-wide shadow-sm">Best Value</div>
<h3 className="font-medium text-sm text-[#1a1a1a] mb-0.5 tracking-tight mt-1">Full Spring Reset</h3>
<div className="text-xs text-[#787872] mb-5 font-light">Dethatch + Aerate + Pro Finish</div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5">Front Yard Only</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$249</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$295</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$349</span></div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5 mt-5">Front + Back</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$329</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$399</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-white/40 -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#3a5230]">$469</span></div>
</div>

<div className="relative p-5 rounded-xl transition-colors hover:bg-black/[0.02]">
<h3 className="font-medium text-sm text-[#1a1a1a] mb-0.5 tracking-tight">Phase 2 – Aeration</h3>
<div className="text-xs text-[#787872] mb-5 font-light">Core Aeration</div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5">Front Yard Only</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$125</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$149</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$179</span></div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4a4a4a] mb-2.5 mt-5">Front + Back</div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Small</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$169</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Medium</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$209</span></div>
<div className="flex justify-between items-center py-1.5 border-b border-[#ddd8cb]/50 last:border-0 hover:bg-black/[0.02] -mx-2 px-2 rounded-md transition-colors"><span className="text-xs text-[#787872]">Large</span><span className="font-['JetBrains_Mono',monospace] text-xs font-medium text-[#1a1a1a]">$245</span></div>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-[#ddd8cb] to-transparent mb-10 opacity-70"></div>

<section className="mb-14">
<h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5230] mb-6">Add-Ons</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group">
<h4 className="text-sm font-medium text-[#3a5230] mb-2 flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
              Premium Feeding
            </h4>
<p className="text-xs text-[#787872] leading-relaxed mb-1 font-light">Yard Mastery Flagship 24-0-6 with Iron.</p>
<div className="text-xs italic text-[#6d9a5c] mb-3 opacity-90">Same fertilizer I use on my own lawn.</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#1a1a1a] font-medium my-2 bg-black/[0.03] inline-block px-2 py-1 rounded">
              Front $95 · F+B $145
            </div>
<div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3">
<span className="text-xs text-[#6d9a5c] font-medium flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Deeper roots</span>
<span className="text-xs text-[#6d9a5c] font-medium flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Darker green</span>
<span className="text-xs text-[#6d9a5c] font-medium flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Thicker turf</span>
</div>
<p className="mt-4 text-xs text-[#787872]/70 font-light">Water within 24hrs. Results in 7–14 days.</p>
</div>
<div className="group">
<h4 className="text-sm font-medium text-[#3a5230] mb-2 flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:scissors-linear" strokeWidth="1.5"></iconify-icon>
              Scalping
            </h4>
<p className="text-xs text-[#787872] leading-relaxed mb-3 font-light">Optional pre-reset cut recommended for warm-season grass to remove winter dormancy.</p>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#1a1a1a] font-medium my-2 bg-black/[0.03] inline-block px-2 py-1 rounded">
              Front $49 · F+B $79
            </div>
</div>
<div className="group">
<h4 className="text-sm font-medium text-[#3a5230] mb-2 flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:broom-linear" strokeWidth="1.5"></iconify-icon>
              Cleanup Policy
            </h4>
<p className="text-xs text-[#787872] leading-relaxed mb-2 font-light">Standard cleanup included with every service.</p>
<p className="text-xs text-[#787872] leading-relaxed mb-2 font-light">Heavy debris (if needed):</p>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#1a1a1a] font-medium my-2 leading-relaxed bg-black/[0.03] inline-block px-2 py-1.5 rounded">
              Curbside <span className="text-[#787872] font-light">+$55 / +$85</span><br/>
              Bag + Haul <span className="text-[#787872] font-light">+$80 / +$120</span>
</div>
<p className="text-xs italic text-[#787872]/80 mt-3 font-light">Confirmed before starting. No surprises.</p>
</div>
</div>
</section>

<section className="bg-[#1e2b1a] rounded-xl p-7 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group">

<div className="absolute top-0 left-0 right-0 md:bottom-0 md:right-auto h-1.5 md:h-auto md:w-1.5 bg-gradient-to-b from-[#e0c44f] to-[#c9a22e]"></div>

<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:20px_20px] pointer-events-none opacity-50"></div>
<div className="text-center md:text-left z-10 w-full md:pl-2">
<h3 className="font-['DM_Serif_Display',serif] text-2xl md:text-3xl text-white mb-3 font-light tracking-tight group-hover:text-[#e0c44f] transition-colors">Reserve Your Spot</h3>
<p className="text-xs md:text-sm text-[#9dbd8a] leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
            Text to book → <span className="text-white/80 font-medium">Name · Address · Front Only or Front+Back · Service choice</span><br/>
<span className="opacity-70 mt-1 block">Phase 2 scheduled at booking · Payment due at Phase 1 · Cash · Card · Venmo</span>
</p>
</div>
<div className="text-center md:text-right shrink-0 z-10 w-full md:w-auto bg-white/5 md:bg-transparent rounded-lg p-6 md:p-0 border border-white/10 md:border-transparent backdrop-blur-sm flex flex-col items-center md:items-end">
<div className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#e0c44f] mb-1">Limited Spots</div>
<div className="text-xs text-white/60 tracking-wider font-light flex items-center justify-center md:justify-end gap-1.5 mb-5 md:mb-4">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Each Weekend
          </div>
<a className="inline-flex flex-col items-center justify-center bg-[#e0c44f] hover:bg-[#d6ba4a] text-[#1e2b1a] px-6 py-2.5 rounded-lg transition-all duration-300 shadow-[0_2px_10px_rgba(224,196,79,0.2)] w-full md:w-auto hover:-translate-y-0.5" href="sms:+16827748744">
<span className="text-sm font-semibold flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
              Text for Availability
            </span>
<span className="text-xs font-medium opacity-80 mt-0.5 tracking-wider font-['JetBrains_Mono',monospace]">682-774-8744</span>
</a>
</div>
</section>
</div>

<footer className="text-center pb-8 pt-2">
<div className="font-['DM_Serif_Display',serif] italic text-base md:text-lg text-[#6d9a5c] mb-2 tracking-wide">Servicing your neighborhood this weekend.</div>
<div className="text-xs text-[#787872] tracking-[0.1em] uppercase font-medium">Aledo, TX · Spring 2026 · Residential Lawn Care</div>
</footer>
</main>

    </>
  );
}
