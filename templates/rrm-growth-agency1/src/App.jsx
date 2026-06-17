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



            (function () {

  // Respect reduced-motion: skip the WebGL background entirely (perf + accessibility)
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {

    var s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

    s.setAttribute("data-unicorn-loader","true");

    s.onload = function () {
      initUnicorn();
    };

    (document.head || document.body).appendChild(s);
  }

})();
        


                        (function(){
                        var form = document.getElementById('rrm-apply-form');
                        if(!form) return;
                        var ENDPOINT = 'https://api-eu1.hsforms.com/submissions/v3/integration/submit/148629697/7dbcc093-c270-452a-bbc1-a931abe079be';
                        var errEl = document.getElementById('rrm-form-error');
                        var btn = document.getElementById('rrm-submit');
                        var label = document.getElementById('rrm-submit-label');
                        var successEl = document.getElementById('rrm-success');

                        function cookie(n){ var m = document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]+)'); return m ? m.pop() : ''; }
                        function val(id){ var e = document.getElementById(id); return e ? e.value.trim() : ''; }
                        function optText(id){ var s = document.getElementById(id); return (s && s.selectedIndex > 0) ? s.options[s.selectedIndex].text : ''; }

                        form.addEventListener('submit', function(e){
                            e.preventDefault();
                            errEl.classList.add('hidden');
                            if(!form.checkValidity()){ form.reportValidity(); return; }

                            var payload = {
                                fields: [
                                    { objectTypeId: '0-1', name: 'firstname', value: val('firstName') },
                                    { objectTypeId: '0-1', name: 'lastname', value: val('lastName') },
                                    { objectTypeId: '0-1', name: 'email', value: val('email') },
                                    { objectTypeId: '0-1', name: 'website', value: val('website') },
                                    { objectTypeId: '0-1', name: 'monthly_revenue', value: optText('revenue') },
                                    { objectTypeId: '0-1', name: 'monthly_ad_spend', value: optText('spend') },
                                    { objectTypeId: '0-1', name: 'biggest_growth_bottleneck', value: val('message') },
                                    { objectTypeId: '0-2', name: 'name', value: val('company') }
                                ].filter(function(f){ return f.value !== ''; }),
                                context: { pageUri: location.href, pageName: document.title }
                            };
                            var hutk = cookie('hubspotutk'); if(hutk) payload.context.hutk = hutk;

                            var restore = label.innerHTML;
                            btn.disabled = true; label.textContent = 'Sending...';

                            fetch(ENDPOINT, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(payload)
                            })
                            .then(function(r){ if(!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
                            .then(function(){
                                form.classList.add('hidden');
                                successEl.classList.remove('hidden');
                                successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            })
                            .catch(function(){
                                btn.disabled = false; label.innerHTML = restore;
                                errEl.textContent = 'Something went wrong sending your application. Please email daniel@realreturnmarketing.co.uk or book a call below.';
                                errEl.classList.remove('hidden');
                            });
                        });
                    })();
                    


        document.addEventListener("DOMContentLoaded", function() {
            // Initialize Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve if you want the animation to happen only once
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach((el) => {
                observer.observe(el);
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="yvg2jXyIdpjPbto0iE0W"></div>
</div>
</div>

</div>

<div aria-hidden="true" className="fixed inset-0 z-[-5] pointer-events-none" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'}}>
</div>
<div aria-hidden="true" className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full z-[-5] pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)'}}></div>
<div aria-hidden="true" className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full z-[-5] pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)'}}></div>

<nav className="fixed top-0 w-full z-50 rounded-none bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a aria-label="Home" className="flex items-center gap-2 group" href="#">
<div className="flex h-8 items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
<img alt="Real Return Logo" className="w-auto h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/621cb56d-7ff7-4273-90b6-65aff8ba239c_800w.png?w=800&amp;q=80"/>
</div>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#system">The Engine</a>
<a className="hover:text-white transition-colors" href="#creative">Creative</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#criteria">Criteria</a>
</div>
<a className="overflow-hidden group flex items-center justify-center hover:bg-neutral-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm font-medium text-black bg-white h-9 rounded-full px-5 relative" href="#apply">
<span className="relative z-10">Apply Now</span>
</a>
</div>
</nav>
<main className="">

<header className="md:pt-52 md:pb-24 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="reveal-element reveal-tilt-up inline-flex gap-2 border-t-white/10 border-l-white/10 text-xs font-normal text-neutral-300 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/5 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-2xl backdrop-blur-xl gap-x-2 gap-y-2 items-center is-visible">
<span className="w-1.5 h-1.5 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,34,0.6)]"></span>
                    The Revenue Growth Engine
                </div>
<h1 className="reveal-element reveal-tilt-up del-100 md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-8 is-visible">
                    Most Marketing Agencies Are Already
                    <span className="bg-clip-text text-transparent bg-gradient-to-bl from-lime-400 to-lime-600">Obsolete.</span>
</h1>
<p className="reveal-element reveal-tilt-up del-200 md:text-lg leading-relaxed text-base text-neutral-400 max-w-2xl mr-auto mb-6 ml-auto is-visible">
                    Meta's AI makes millions of campaign decisions before you've had your morning coffee. Google
                    auto-optimises your bids, audiences and placements in real time.</p>
<div className="reveal-element reveal-tilt-up del-400 mb-10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl inline-block p-4 rounded-2xl is-visible">
<p className="text-sm text-neutral-300">
<strong className="text-white font-normal">Real Return</strong> is a UK-based growth agency for
                        ambitious brands ready to stop guessing and start scaling. We run one system for every client:
                        The Revenue Growth Engine.
                    </p>
</div>
<div className="reveal-element reveal-tilt-up del-500 flex flex-col sm:flex-row gap-6 w-full mb-12 items-center justify-center is-visible">
<div className="relative w-full sm:w-auto">
<div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-md opacity-60 animate-pulse"></div>
<a className="group z-10 sm:w-auto sm:px-10 flex items-center justify-center gap-2.5 hover:from-indigo-400 hover:to-purple-500 transition-colors duration-300 overflow-hidden text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 w-full h-14 border-lime-500/20 border rounded-full pr-8 pl-8 relative" href="#apply">
<span className="relative z-10 flex items-center gap-2.5">
                                Apply for Your Free Growth Audit
                                <iconify-icon aria-hidden="true" className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
<div className="relative w-full sm:w-auto">
<div aria-hidden="true" className="absolute -inset-1 bg-white/20 rounded-full blur-md opacity-40 animate-pulse"></div>
<a className="group relative z-10 w-full sm:w-auto h-14 px-8 sm:px-10 rounded-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 text-white text-base font-normal flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] overflow-hidden" href="#system">
<span className="relative z-10 flex items-center gap-2.5">
<iconify-icon aria-hidden="true" className="text-xl text-neutral-400 group-hover:text-white transition-colors duration-300" icon="solar:play-circle-linear"></iconify-icon>
                                See How The Engine Works
                            </span>
</a>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 is-visible">
<div className="flex -space-x-3 hover:-space-x-1 transition-all duration-300">
<img alt="Partner" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover hover:z-10 relative transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Partner" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover hover:z-10 relative transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Partner" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover hover:z-10 relative transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Partner" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover hover:z-10 relative transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-white/10 backdrop-blur-md flex items-center justify-center text-xs text-white font-medium hover:z-10 relative transition-transform hover:scale-110">
                            +24</div>
</div>
<div className="text-sm text-neutral-400 font-normal">Trusted by founders scaling
                        <span className="text-white font-medium">£15M+</span> in ad spend</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
<div className="reveal-element reveal-tilt-up del-200 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl rounded-2xl p-6 flex flex-col items-center justify-center text-center is-visible">
<div className="text-3xl font-medium text-white tracking-tight mb-1">3.8×</div>
<div className="text-xs text-neutral-400 font-normal uppercase tracking-widest">Average ROAS
                            Improvement</div>
</div>
<div className="reveal-element reveal-tilt-up del-300 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden is-visible">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">42%</div>
<div className="text-xs text-neutral-400 font-normal uppercase tracking-widest">Average CPA
                            Reduction</div>
</div>
<div className="reveal-element reveal-tilt-up del-400 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl rounded-2xl p-6 flex flex-col items-center justify-center text-center is-visible">
<div className="text-3xl font-medium tracking-tight text-white mb-1">30</div>
<div className="text-xs text-neutral-400 font-normal uppercase tracking-widest">Creatives Per Client
                            / Mo</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden z-10 pt-10 pb-10 relative">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 md:mb-16 text-center">
<div className="reveal-element reveal-tilt-up text-[10px] uppercase sm:text-xs sm:tracking-[0.25em] md:mb-4 text-lime-500/80 tracking-[0.2em] mb-3 font-geist is-visible">
                    TRUSTED BY GROWTH-FOCUSED BUSINESSES
                </div>
</div>

<div className="reveal-element reveal-tilt-up del-200 overflow-hidden md:mb-24 w-full max-w-[1200px] mr-auto mb-16 ml-auto relative is-visible">
<div className="flex w-full justify-center items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 mix-blend-screen text-gray-50">
<div className="flex flex-wrap md:gap-x-20 w-full gap-x-12 gap-y-10 items-center justify-center">
<img alt="Stripe" className="md:h-12 lg:h-14 w-auto h-8 object-cover bg-center invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ef1bd99-079c-4097-b83a-0a669ffc24dc_320w.png"/>
<img alt="Dolby" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc3faa04-3141-4534-a2dc-2608dae0852d_320w.png?w=800&amp;q=80"/>
<img alt="Vercel" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37036c96-19d4-4e01-868d-f636892d974b_1600w.png?w=800&amp;q=80"/>
<img alt="Atlassian" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94bb0ae0-aaa4-423a-bf28-073a67c3642e_320w.png?w=800&amp;q=80"/>
<img alt="Palantir" className="h-8 md:h-12 lg:h-14 w-auto object-contain bg-center invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eba045f7-2a71-45c2-a8e8-cadadde807bd_320w.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="ai">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-element reveal-tilt-right">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                        Every major ad platform just changed the rules.
                        <span className="text-neutral-500">Most agencies haven't noticed.</span>
</h2>
<div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed">
<p className="">For the last decade, the value a digital agency provided was fairly simple: someone
                            who knew how to work the platform better than you did. They knew the bidding strategies.
                            They knew the targeting levers. They knew what buttons to press.</p>
<p className="text-white font-normal">That era is over.</p>
<p className="">Meta and Google have handed the mechanical work over to AI. Campaign optimisation,
                            audience targeting, bid management — the platforms now do this automatically, and they do it
                            better than any human media buyer.</p>
<p className="">This isn't a threat. It's a signal.</p>
<p className="">The signal is this: the advantage has shifted upstream. The brands winning now
                            aren't winning because they've found a smarter bidding strategy. They're winning because
                            they have better creative, stronger offers and a structured system behind everything they
                            do.</p>
<p className="">The question isn't whether your agency knows the platform. The question is whether
                            they know how to build something the platform can actually scale.</p>
</div>
</div>
<div className="reveal-element reveal-tilt-left del-200 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 border-t-white/20 border-l-white/20 shadow-2xl shadow-black/50 rounded-3xl p-8 relative overflow-hidden group">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl flex items-center justify-center text-white mb-6">
<iconify-icon aria-hidden="true" className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">AI didn't threaten
                            our model. It validated it.</h3>
<p className="leading-relaxed text-sm text-neutral-300 mb-8">We don't fear AI. We use every tool it
                            gives us, stay ahead of every development, and let it handle the work it's better suited for
                            - so we can pour everything into the work only humans can do.</p>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon aria-hidden="true" className="text-xl text-indigo-400 shrink-0 mt-0.5" icon="solar:target-linear"></iconify-icon>
<div className="">
<h4 className="text-sm font-normal text-white mb-1">Strategy</h4>
<p className="text-xs text-neutral-400 leading-relaxed">Commercial instinct built from
                                        years of real experience. You can't train a model on it.</p>
</div>
</li>
<li className="flex gap-4">
<iconify-icon aria-hidden="true" className="text-xl text-purple-400 shrink-0 mt-0.5" icon="solar:pen-new-square-linear"></iconify-icon>
<div className="">
<h4 className="text-sm font-normal text-white mb-1">Creative</h4>
<p className="text-xs text-neutral-400 leading-relaxed">The bold call that feels wrong
                                        but turns out to be exactly right. That takes human conviction.</p>
</div>
</li>
<li className="flex gap-4">
<iconify-icon aria-hidden="true" className="text-xl shrink-0 mt-0.5 text-lime-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="">
<h4 className="text-sm font-normal text-white mb-1">Relationships</h4>
<p className="text-xs text-neutral-400 leading-relaxed">Clients don't stay for a decade
                                        because of a dashboard. They stay because someone genuinely cared.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="max-w-4xl mx-auto">
<div className="reveal-element reveal-tilt-up text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Most growing brands hit the same wall.<br/>Here's exactly what it looks like.
                    </h2>
<p className="md:text-base leading-relaxed text-sm text-neutral-400 max-w-2xl mr-auto ml-auto">It starts
                        well. You find a product that works. You put some money behind it, sales come in, and for a
                        while, everything feels like it's working. Then something shifts. The ads that were converting
                        stop converting. You refresh the creative, get a short burst, then it fades again. Your cost per
                        acquisition creeps up. You increase the budget to compensate. The returns get thinner.<br/><br/>
<span className="text-white">You're working harder, spending more, and growing less.</span><br/> This isn't bad luck. It's a pattern and it happens to almost every brand that grows without a system underneath it.
                    </p>
</div>
<div className="relative pl-8 md:pl-0">

<div aria-hidden="true" className="absolute left-[15px] top-4 bottom-4 w-px bg-white/10 md:hidden">
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">

<div className="reveal-element reveal-tilt-up del-100 relative pt-2 md:pt-6 border-t-0 md:border-t border-white/10">
<div aria-hidden="true" className="absolute -left-10 md:left-0 top-3 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
<div className="text-xs font-normal text-neutral-500 mb-2">Stage 01</div>
<h3 className="text-base font-normal text-white mb-2">Early Growth</h3>
<p className="text-xs text-neutral-400">Product-market fit. Ads convert. Revenue climbs.
                                Everything feels like it's working.</p>
</div>

<div className="reveal-element reveal-tilt-up del-200 relative pt-2 md:pt-6 border-t-0 md:border-t border-white/10">
<div aria-hidden="true" className="absolute -left-10 md:left-0 top-3 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="text-xs font-normal text-neutral-500 mb-2">Stage 02</div>
<h3 className="text-base font-normal text-white mb-2">Creative Fatigue</h3>
<p className="text-xs text-neutral-400">The ads that were converting stop converting. Refreshes
                                give short bursts, then fade.</p>
</div>

<div className="reveal-element reveal-tilt-up del-300 relative pt-2 md:pt-6 border-t-0 md:border-t border-white/10">
<div aria-hidden="true" className="absolute -left-10 md:left-0 top-3 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<div className="text-xs font-normal text-neutral-500 mb-2">Stage 03</div>
<h3 className="text-base font-normal text-white mb-2">Rising CPA</h3>
<p className="text-xs text-neutral-400">Cost per acquisition creeps up. Budget increases to
                                compensate. Returns get thinner.</p>
</div>

<div className="reveal-element reveal-tilt-up del-400 relative pt-2 md:pt-6 border-t-0 md:border-t border-white/10">
<div aria-hidden="true" className="absolute -left-10 md:left-0 top-3 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
<div className="text-xs font-normal text-neutral-500 mb-2">Stage 04</div>
<h3 className="text-base font-normal text-white mb-2">Revenue Plateau</h3>
<p className="text-xs text-neutral-400">Working harder, spending more, growing less.</p>
</div>
</div>
</div>
<div className="reveal-element reveal-zoom-out del-500 mt-16 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 border-t-white/20 border-l-white/20 shadow-2xl shadow-black/50 p-6 md:p-8 rounded-2xl text-center">
<p className="text-base md:text-lg font-normal text-white tracking-tight">
                        The problem isn't your product. The problem isn't your budget.<br className="hidden md:block"/>
<span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">The problem is that you're running activity. Not a growth engine.</span>
</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/30 px-6 relative" id="system">
<div className="max-w-6xl mx-auto relative z-10">
<div className="reveal-element reveal-tilt-up mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        While other agencies hand you a report,<br/>we build your revenue machine.
                    </h2>
<p className="text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed mb-6">
                        Most agencies will sell you a service. SEO. Paid ads. Email. Creative. Pick a channel, sign a
                        retainer, hope it works. The problem with that model isn't the people. It's the structure.
                    </p>
<p className="md:text-base leading-relaxed text-sm text-neutral-400 max-w-2xl mb-8">When your paid
                        acquisition isn't talking to your creative strategy, and your creative strategy isn't informed
                        by your offer testing, and your offer testing isn't connected to your retention you don't have a
                        growth engine. You have a collection of moving parts that occasionally crash into each other.
                    </p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 border-t-white/10 border-l-white/10 shadow-2xl">
<iconify-icon aria-hidden="true" className="text-indigo-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-normal text-white">We don't sell services. We run a system.</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="reveal-element reveal-tilt-up del-100 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<iconify-icon aria-hidden="true" className="text-2xl text-white mb-4 group-hover:text-indigo-400 transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Paid Acquisition</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Scaled spend behind proven concepts. The
                            platform gets the right creative, at the right volume, with the right message.</p>
</div>
<div className="reveal-element reveal-tilt-up del-200 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<iconify-icon aria-hidden="true" className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors" icon="solar:clapperboard-play-linear"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Creative Strategy &amp; Production</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Up to 30 still and motion graphics per
                            client, per month. Purpose-built to test, convert, and keep the algorithm fed. Built
                            in-house.</p>
</div>
<div className="reveal-element reveal-tilt-up del-300 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<iconify-icon aria-hidden="true" className="text-2xl text-white mb-4 transition-colors group-hover:text-lime-400" icon="solar:tag-price-linear"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Offer Optimisation</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Price points, positioning, guarantees,
                            bundles. Your offer is either accelerating growth or silently killing it.</p>
</div>
<div className="reveal-element reveal-tilt-up del-400 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<iconify-icon aria-hidden="true" className="text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Conversion Improvements</h3>
<p className="text-xs text-neutral-400 leading-relaxed">More of the traffic we send actually buys.
                            Every pound of ad spend works harder.</p>
</div>
<div className="reveal-element reveal-tilt-up del-500 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<iconify-icon aria-hidden="true" className="text-2xl text-white mb-4 group-hover:text-teal-400 transition-colors" icon="solar:letter-linear"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Email &amp; Retention</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Turns one-time buyers into long-term
                            revenue. The flywheel that makes everything else more profitable.</p>
</div>
<div className="reveal-element reveal-tilt-up del-600 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-6 rounded-2xl flex items-center justify-center text-center">
<p className="text-sm font-normal text-neutral-300">These don't work as separate services. They work
                            as <span className="text-white">one engine</span> and that's exactly how we run them.</p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-transparent to-white/[0.02] border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="creative">
<div className="max-w-6xl z-10 mr-auto ml-auto relative">
<div className="reveal-element reveal-tilt-up text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 text-xs font-normal text-neutral-300 mb-6">
<iconify-icon aria-hidden="true" className="text-indigo-400" height="12" icon="solar:gallery-linear" style={{color: 'rgb(132, 204, 22)'}} width="12"></iconify-icon>
                        Creative Production
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Built to stop the scroll.<br/>
<span className="text-neutral-500">Designed to convert.</span>
</h2>
<p className="md:text-base leading-relaxed text-sm text-neutral-400 max-w-2xl mr-auto ml-auto">A glimpse
                        at the platform-native motion and still graphics we produce for our clients. We don't just make
                        things look good - we build creative specifically designed to manipulate the algorithm, test
                        hypotheses, and lower your CPA.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="reveal-element reveal-tilt-up del-100 group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a8ddb0f-388b-4548-aedc-4e79bd1031d2_original.gif)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
<div className="flex flex-col group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon aria-hidden="true" className="text-5xl text-white/80 mb-2 drop-shadow-lg" icon="solar:play-circle-bold"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl px-2.5 py-1 rounded-md text-[10px] font-normal text-white tracking-widest uppercase flex items-center gap-1.5 border border-white/10">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                            Video Ad
                        </div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<div className="bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 flex justify-between items-center w-full">
<div className="">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">Brand Awareness</div>
<div className="text-xs text-white font-medium">Premium Womanswear</div>
</div>
<div className="text-right">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">
                                        CPA Drop</div>
<div className="text-xs text-indigo-400 font-medium">-32%</div>
</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-200 group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0e3ebb2-540a-4f4f-90e9-82c25cc0e217_original.gif)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
<div className="absolute inset-0 p-8 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="border-dashed flex w-full h-full border-white/30 border rounded-xl relative items-center justify-center bg-black/20 backdrop-blur-sm">
<div className="text-center">
<iconify-icon aria-hidden="true" className="text-4xl text-white mb-2 drop-shadow-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl px-2.5 py-1 rounded-md text-[10px] font-normal text-white tracking-widest uppercase border border-white/10">
                            Direct Response
                        </div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<div className="bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 flex justify-between items-center">
<div className="">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">Gif</div>
<div className="text-xs text-white font-medium">Us vs Them</div>
</div>
<div className="text-right">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">
                                        CTR Lift</div>
<div className="text-xs text-purple-400 font-medium">+1.8%</div>
</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-300 group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b775228-de7c-4d42-876b-5fe9fe5c8553_original.gif)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-lime-500/10">
<div className="text-4xl font-medium tracking-tight text-white mb-2 drop-shadow-lg bg-black/40 px-4 py-2 rounded-xl border border-white/20">
                                50% OFF</div>
</div>
<div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl px-2.5 py-1 rounded-md text-[10px] font-normal text-white tracking-widest uppercase border border-white/10">
                            Promotion
                        </div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<div className="bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 flex justify-between items-center">
<div className="">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">
                                        Strategy</div>
<div className="text-xs text-white font-medium">Bundle Testing</div>
</div>
<div className="text-right">
<div className="text-[10px] text-neutral-300 font-normal uppercase tracking-wider mb-0.5">
                                        ROAS</div>
<div className="text-xs font-medium text-lime-400">4.2x</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6 border-white/5 border-t relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto pt-24 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">

<div className="reveal-element reveal-tilt-up del-100 aspect-[3/4] rounded-2xl overflow-hidden relative group">
<img alt="Client Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a98ec2d-924b-4d69-bdfb-9ca43acdcc1b_800w.png"/>
<div className="group-hover:opacity-80 transition-opacity opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-white text-[10px] px-2 py-1 rounded font-medium">+120% CTR</span>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-200 aspect-[3/4] rounded-2xl overflow-hidden relative group md:mt-8">
<img alt="Client Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585a11c2-b5f2-414f-aeba-86c57d7a296d_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity">
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-white text-[10px] px-2 py-1 rounded font-medium">-40% CPA</span>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-300 aspect-[3/4] rounded-2xl overflow-hidden relative group">
<img alt="Client Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b14fdce4-0cd1-44b2-bb6a-b944c1e6fc62_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity">
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-white text-[10px] px-2 py-1 rounded font-medium">3.5x ROAS</span>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-400 aspect-[3/4] rounded-2xl overflow-hidden relative group md:mt-8">
<img alt="Client Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bc7218c-bee8-4f3a-b11b-da6ba4baf0e9_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity">
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="backdrop-blur-md border text-white text-[10px] px-2 py-1 rounded font-medium bg-lime-500/20 border-lime-500/30">Winner</span>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 border-t border-white/5 bg-[#050505] relative z-10" id="results">
<div className="max-w-6xl mx-auto">
<div className="reveal-element reveal-tilt-up text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 text-xs text-neutral-300 mb-6">
<iconify-icon className="text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
                        Client Results
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Real brands. Real revenue.<br/><span className="text-lime-500">No vanity metrics.</span>
</h2>
<p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">We measure
                        success by the money you keep, not the money you spend. Here's what happens when you plug
                        ambitious brands into The Revenue Growth Engine.</p>
</div>
<div className="space-y-8">

<div className="reveal-element reveal-tilt-up flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 shadow-2xl group">
<div className="w-full md:w-5/12 relative overflow-hidden h-64 md:h-auto">

<img alt="Apparel Brand" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5df1209-ba26-42c9-9bf9-c3599e5fc117_1600w.png"/>
<div className="md:bg-gradient-to-r md:from-transparent md:to-[#050505] bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-[#050505]/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
<div className="text-[10px] font-normal text-indigo-400 tracking-widest uppercase mb-4">Health / Beauty </div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Scaled from £35k to £510.5k MRR in  120 days</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed"><strong className="">The Challenge:</strong> launching into one of the most saturated markets there is, with no brand credibility to stand on. Buyers had no reason to trust a name they'd never heard of over the hundreds of alternatives. The advertising had no creative structure behind it, just one-off ads with no system or testing, and CRO was non-existent, so the traffic that did come through had little chance of converting.<br/><br/><strong className="">The Fix:</strong> RRM built the foundations the brand was missing. We led with differentiation to cut through a crowded market, and built credibility deliberately through social proof and a brand presence that gave buyers a reason to trust it. We put a real creative structure in place, a system of angles and concepts run through constant testing instead of one-off ads, so spend followed what worked. Then we built CRO from the ground up to convert the traffic we were driving. The result was a new brand that scaled fast in a market most never break into.</p>

<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">+1.45k%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Revenue</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">1.15k%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">New Customer Sales</div>
</div>
<div className="">
<div className="text-2xl font-medium text-lime-500 tracking-tight mb-1">-38%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">CPA Drop</div>
</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up flex flex-col md:flex-row-reverse gap-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 shadow-2xl group">
<div className="w-full md:w-5/12 relative overflow-hidden h-64 md:h-auto">

<img alt="Footwear Brand" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4fc9d4b-cea7-4dab-889f-0b3015013a8f_1600w.jpg"/>
<div className="md:bg-gradient-to-l md:from-transparent md:to-[#050505] bg-center bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-[#050505]/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
<div className="text-[10px] font-normal text-purple-400 tracking-widest uppercase mb-4">Home / Garden</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Broke a 6-month revenue
                                plateau to hit £1.2M Q4</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed"><strong className="">The Challenge:</strong> market saturated with cheaper alternatives. Underneath it were three issues doing the real damage. Revenue was declining year on year. Acquisition had dried up, leaving the business dependent on returning customers to hold revenue together. And with no creative strategy and no email retention in place, there was nothing working to win new customers or bring old ones back..<br className=""/><br/><strong className="">The Fix:</strong> We rebuilt growth around creative. We fine-tuned the live ad campaigns to get more from existing spend, then layered in new creative, new angles and new marketing channels to open up fresh demand. Creative and email output both went up significantly, so testing never stalled and the list finally pulled its weight. Tuda stopped relying on returning customers and started winning new ones again.</p>

<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">£1.5M</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Q2 Revenue</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">+45%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">New Cust.</div>
</div>
<div className="">
<div className="text-2xl font-medium text-purple-400 tracking-tight mb-1">20.1x</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Blended ROAS
                                    </div>
</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 shadow-2xl group">
<div className="w-full md:w-5/12 relative overflow-hidden h-64 md:h-auto">

<img alt="Wellness Brand" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43e96cee-7be8-4527-8adc-4072ac86f4a5_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 md:bg-gradient-to-r md:from-transparent md:to-[#050505]">
</div>
</div>
<div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-[#050505]/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
<div className="text-[10px] font-normal tracking-widest uppercase mb-4 text-lime-400">Mens Fashion</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">From local brand to international powerhouse in 24 months.</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed"><strong className="">The Challenge:</strong> The client had a strong product and real demand, but several things were capping growth. The content strategy was one-dimensional, the same angles running on repeat. The brand had almost no presence in the international markets that now perform best for them. The website didn't reflect the quality of the product or back up the pricing, and with little CRO in place, the traffic that did arrive wasn't converting like it should. On top of that, the account was being run for ROAS rather than growth, optimising for an efficient number instead of scaling the business..<br/><br/><strong className="">The Fix:</strong>  A diversified content strategy and higher creative output opened up new audiences and new international markets. We elevated the website to match the product and its pricing, and added CRO to stop traffic leaking. Then we stopped managing to ROAS and started managing to growth, scaling behind the winners. The brand went international and revenue followed.</p>

<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">+1.92k%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Growth in 24 months</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight mb-1">11x</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Avg ROAS</div>
</div>
<div className="">
<div className="text-2xl font-medium tracking-tight mb-1 text-lime-400">+1</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">International Store </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505]/40 backdrop-blur-md relative border-y border-white/5 overflow-hidden">

<div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_100%)] pointer-events-none"></div>
<div aria-hidden="true" className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)', pointerEvents: 'none'}}></div>
<div className="max-w-6xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="reveal-element reveal-tilt-up text-center mb-16 md:mb-24">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs mb-8 font-normal tracking-widest uppercase shadow-lg backdrop-blur-md bg-gradient-to-bl from-white/100 to-white/50 lg:bg-clip-text lg:text-transparent">
<iconify-icon className="text-sm" height="14" icon="solar:bolt-linear" style={{color: 'rgb(132, 204, 22)'}} width="14"></iconify-icon>
                        The Core Methodology
                    </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
                        The Revenue Growth
                        <span className="bg-clip-text text-lime-500 bg-gradient-to-r from-indigo-400 via-purple-400 to-lime-400">Engine</span>
</h2>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        A continuous, four-stage process designed to systematically uncover what works, scale it, and
                        eliminate what doesn't. Here is exactly how we run it for your brand.
                    </p>
</div>

<div className="max-w-5xl mr-auto ml-auto relative">

<div aria-hidden="true" className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/0 via-white/20 to-blue-500/0 md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32 last:mb-0 group">

<div aria-hidden="true" className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-indigo-500 md:-translate-x-1/2 z-10 group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-500"></div>

<div className="reveal-element reveal-tilt-right w-full pl-12 md:pl-0 md:w-[45%] md:text-right md:pr-12 relative">
<div className="text-[6rem] md:text-[8rem] leading-none font-light text-white/5 absolute -top-8 left-8 md:left-auto md:-right-4 pointer-events-none group-hover:text-indigo-500/10 transition-colors duration-500">
                                01</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 mb-4 md:flex-row-reverse font-normal tracking-wide">
<iconify-icon className="text-sm" icon="solar:lightbulb-bolt-linear"></iconify-icon>
                                    Phase One
                                </div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4">Insight
                                    &amp; Strategy</h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed">Understand before we
                                    spend. Before a single ad goes live, we map your brand, your ideal customer, the
                                    competitive landscape, and your target margins. We build a specific roadmap, not a
                                    generic template.</p>
</div>
</div>

<div className="reveal-element reveal-tilt-left del-200 hidden md:block md:w-[45%] pl-12">
<div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-6 rounded-2xl group-hover:border-indigo-500/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors">
</div>
<div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<span className="text-xs text-neutral-500 uppercase tracking-widest font-normal">Engine Output</span>
<iconify-icon className="text-indigo-400 text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-normal">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Bespoke Growth Roadmap</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-normal">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Competitor &amp; Market
                                        Analysis</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-normal">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Offer Structuring &amp;
                                        Margins</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-20 md:mb-32 last:mb-0 group">

<div aria-hidden="true" className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-purple-500 md:-translate-x-1/2 z-10 group-hover:bg-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-500"></div>

<div className="reveal-element reveal-tilt-left w-full pl-12 md:pl-0 md:w-[45%] md:pl-12 relative">
<div className="text-[6rem] md:text-[8rem] leading-none font-light text-white/5 absolute -top-8 left-8 md:-left-4 pointer-events-none group-hover:text-purple-500/10 transition-colors duration-500">
                                02</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 mb-4 font-normal tracking-wide">
<iconify-icon className="text-sm" icon="solar:flask-linear"></iconify-icon> Phase Two
                                </div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4">Methodical
                                    Experimentation</h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed">Move fast. Test
                                    deliberately. We launch high-velocity tests on creative angles, offer variations,
                                    and landing page structures. We are actively gathering data to find what your
                                    specific market actually responds to.</p>
</div>
</div>

<div className="reveal-element reveal-tilt-right del-200 hidden md:block md:w-[45%] pr-12">
<div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-6 rounded-2xl group-hover:border-purple-500/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors">
</div>
<div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<span className="text-xs text-neutral-500 uppercase tracking-widest font-normal">A/B Validation</span>
<iconify-icon className="text-purple-400 text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex-1 bg-white/5 border border-purple-500/30 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
<div className="absolute inset-0 bg-purple-500/10 animate-pulse"></div>
<iconify-icon className="text-purple-400 text-3xl mb-1 relative z-10" icon="solar:flame-linear"></iconify-icon>
<span className="text-[10px] text-white uppercase tracking-wider font-normal relative z-10">Winning Angle</span>
</div>
<div className="text-neutral-600 text-xs font-normal">VS</div>
<div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center opacity-40">
<iconify-icon className="text-neutral-500 text-3xl mb-1" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[10px] text-neutral-400 uppercase tracking-wider font-normal">Control</span>
</div>
</div>
<div className="bg-black/40 rounded-lg p-3 text-xs text-neutral-400 flex justify-between items-center border border-white/5">
<span className="font-normal">Data Confidence</span>
<span className="text-purple-400 font-mono">98.4%</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32 last:mb-0 group">

<div aria-hidden="true" className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 md:-translate-x-1/2 z-10 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-500 border-lime-500 group-hover:bg-lime-500"></div>

<div className="reveal-element reveal-tilt-right w-full pl-12 md:pl-0 md:w-[45%] md:text-right md:pr-12 relative">
<div className="text-[6rem] md:text-[8rem] leading-none font-light text-white/5 absolute -top-8 left-8 md:left-auto md:-right-4 pointer-events-none transition-colors duration-500 group-hover:text-lime-500/10">
                                03</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs mb-4 md:flex-row-reverse font-normal tracking-wide bg-lime-500/10 border-lime-500/20 text-lime-400">
<iconify-icon className="text-sm" icon="solar:rocket-linear"></iconify-icon> Phase Three
                                </div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4">Vertical
                                    Scaling</h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed">Scale what works. Cut
                                    what doesn't. When the data reveals a winning concept, we shift budget aggressively.
                                    We iterate on the winning creative to extend its lifespan and systematically scale
                                    your spend without breaking your CPA.</p>
</div>
</div>

<div className="reveal-element reveal-tilt-left del-200 hidden md:block md:w-[45%] pl-12">
<div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-6 rounded-2xl transition-colors duration-500 relative overflow-hidden h-full flex flex-col justify-center group-hover:border-lime-500/30">
<div className="absolute inset-0 transition-colors bg-lime-500/5 group-hover:bg-lime-500/10">
</div>
<div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4 mb-6">
<span className="text-xs text-neutral-500 uppercase tracking-widest font-normal">Spend Efficiency</span>
<iconify-icon className="text-xl text-lime-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex items-end gap-3 h-20 mb-6 relative z-10">
<div className="w-1/4 bg-white/10 rounded-t-md h-[30%] transition-all duration-1000 group-hover:h-[40%] border border-b-0 border-white/5">
</div>
<div className="w-1/4 bg-white/10 rounded-t-md h-[50%] transition-all duration-1000 group-hover:h-[60%] border border-b-0 border-white/5">
</div>
<div className="w-1/4 border border-b-0 rounded-t-md h-[70%] transition-all duration-1000 group-hover:h-[85%] relative group/bar cursor-default bg-lime-500/20 border-lime-500/40">
<div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono px-2 py-0.5 rounded border opacity-0 group-hover/bar:opacity-100 transition-opacity text-lime-400 bg-lime-500/10 border-lime-500/20">
                                            Push</div>
</div>
<div className="w-1/4 bg-gradient-to-t border border-b-0 rounded-t-md h-[90%] transition-all duration-1000 group-hover:h-[100%] shadow-[0_0_20px_rgba(236,72,153,0.4)] from-lime-600/50 to-lime-400/80 border-lime-400">
</div>
</div>
<div className="bg-black/40 rounded-lg p-3 text-xs text-neutral-400 flex justify-between items-center border border-white/5 relative z-10">
<span className="font-normal">ROAS Multiplier</span>
<span className="font-mono flex items-center gap-1 text-lime-400"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 3.2x</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-10 group">

<div aria-hidden="true" className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-500 md:-translate-x-1/2 z-10 group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-500"></div>

<div className="reveal-element reveal-tilt-left w-full pl-12 md:pl-0 md:w-[45%] md:pl-12 relative">
<div className="text-[6rem] md:text-[8rem] leading-none font-light text-white/5 absolute -top-8 left-8 md:-left-4 pointer-events-none group-hover:text-blue-500/10 transition-colors duration-500">
                                04</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 mb-4 font-normal tracking-wide">
<iconify-icon className="text-sm" icon="solar:refresh-circle-linear"></iconify-icon>
                                    Phase Four
                                </div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4">Optimise
                                    &amp; Repeat</h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed">The engine gets smarter
                                    over time. We analyse the data from every cycle, extract the core learnings, and
                                    feed those insights directly back into the strategy phase. The system doesn't just
                                    run — it compounds.</p>
</div>
</div>

<div className="reveal-element reveal-tilt-right del-200 hidden md:block md:w-[45%] pr-12">
<div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-6 rounded-2xl group-hover:border-blue-500/30 transition-colors duration-500 relative overflow-hidden flex flex-col items-center justify-center py-10">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
</div>
<div className="relative w-32 h-32 flex items-center justify-center group-hover:rotate-180 transition-transform duration-[2000ms] ease-in-out z-10">
<div className="absolute inset-0 rounded-full border-[3px] border-dashed border-blue-500/30">
</div>
<div className="absolute inset-3 rounded-full border border-blue-500/20"></div>
<div className="absolute inset-6 rounded-full bg-blue-500/10 flex items-center justify-center">
<iconify-icon className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" icon="solar:server-square-update-linear"></iconify-icon>
</div>

<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]">
</div>
</div>
<div className="absolute bottom-4 left-6 right-6 bg-black/40 rounded-lg p-3 text-xs text-neutral-400 flex justify-between items-center border border-white/5 z-10">
<span className="font-normal">System Status</span>
<span className="text-blue-400 font-mono flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Compounding
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="criteria">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-element reveal-tilt-right">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                        This system isn't for everyone.<br/>Here's who it's built for.
                    </h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                        We work with a small number of brands at any one time. That's intentional. The Engine only works
                        when we're fully invested in your growth — not stretched across a hundred retainers.
                    </p>
<ul className="space-y-4">
<li className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-4 rounded-xl flex items-start gap-4">
<iconify-icon aria-hidden="true" className="text-xl text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div className="">
<strong className="text-sm font-normal text-white block mb-1">£20k+ monthly revenue</strong>
<span className="text-xs text-neutral-400">You've found product-market fit. The system scales what's already working.</span>
</div>
</li>
<li className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-4 rounded-xl flex items-start gap-4">
<iconify-icon aria-hidden="true" className="text-xl text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="text-sm font-normal text-white block mb-1">£3k+ per channel ad spend</strong>
<span className="text-xs text-neutral-400">The engine runs on fuel. Below this, data cycles take too long.</span>
</div>
</li>
<li className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-4 rounded-xl flex items-start gap-4">
<iconify-icon aria-hidden="true" className="text-xl text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div className="">
<strong className="text-sm font-normal text-white block mb-1">Proven demand</strong>
<span className="text-xs text-neutral-400">Customers want what you sell. We can't manufacture demand that isn't there.</span>
</div>
</li>
</ul>
</div>

<div className="reveal-element reveal-tilt-left del-200">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-8">
                        We're not another agency.<br/>We're your growth partner.
                    </h2>
<div className="space-y-6">
<div className="">
<h4 className="text-sm font-normal text-white mb-2 flex items-center gap-2">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                A real team, in one place.
                            </h4>
<p className="text-xs text-neutral-400 leading-relaxed pl-3.5 border-l border-white/10">No
                                offshore outsourcing. No junior account managers. A senior, UK-based team working in the
                                same room. Faster decisions. Senior eyes from day one.</p>
</div>
<div className="">
<h4 className="text-sm font-normal text-white mb-2 flex items-center gap-2">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Creative-first, always.
                            </h4>
<p className="text-xs text-neutral-400 leading-relaxed pl-3.5 border-l border-white/10">It's the
                                primary growth lever. Up to 30 graphics per client per month, built in-house and
                                optimised around what the data tells us to test next.</p>
</div>
<div className="">
<h4 className="text-sm font-normal text-white mb-2 flex items-center gap-2">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Commercial thinking, not marketing thinking.
                            </h4>
<p className="text-xs text-neutral-400 leading-relaxed pl-3.5 border-l border-white/10">We care
                                about one number: revenue. Every decision is filtered through whether it helps you make
                                more of it.</p>
</div>
</div>

<div className="mt-8 relative rounded-xl overflow-hidden h-48 border border-white/10 group shadow-2xl">
<img alt="Our Team Working" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f9d1422-9640-41f8-9d4d-bb855bd7b421_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-[#050505] to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-xs text-white italic font-normal drop-shadow-md">"Built by people who've been
                                inside ambitious brands — not just managed their ad accounts. We know what it costs when
                                marketing doesn't deliver."</p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-gradient-to-b from-white/[0.02] to-transparent z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="reveal-element reveal-tilt-up text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                        Don't just take our word for it.
                    </h2>
<p className="text-sm text-neutral-400">Hear from the founders we're actively scaling.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element reveal-tilt-up del-100 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-8 rounded-2xl flex flex-col justify-between">
<div className="">
<iconify-icon className="text-indigo-500/50 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"We'd been stuck around £180k a
                                month for nearly a year and kept blaming the ad account. RRM looked at it for a week and
                                basically told us the targeting was fine, the creative was tired. The angle they pulled
                                out of our returns data is now our best performer. We did £310k last month. First time
                                I've worked with people who actually read the numbers before they talk."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<img alt="Client Headshot" className="w-10 h-10 rounded-full grayscale object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm font-normal text-white">Marcus R.</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">Founder, DTC
                                    Menswear</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-200 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-8 rounded-2xl flex flex-col justify-between">
<div className="">
<iconify-icon className="text-purple-500/50 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"Honest review. The first month was
                                slower than I wanted and I told them so. They didn't get defensive, they just showed me
                                the test plan and where it was heading. By round three of creative we found two hooks
                                that dropped our CPA from £41 to £26 and it's held since. They're blunt and they don't
                                overpromise, which after two previous agencies I've come to really value."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<img alt="Client Headshot" className="w-10 h-10 rounded-full grayscale object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<div className="text-sm font-normal text-white">Priya N.</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">Co-Founder,
                                    Clean Beauty</div>
</div>
</div>
</div>

<div className="reveal-element reveal-tilt-up del-300 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 border-t-white/10 border-l-white/10 shadow-2xl p-8 rounded-2xl flex flex-col justify-between">
<div className="">
<iconify-icon className="text-emerald-500/50 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-neutral-300 leading-relaxed mb-8">"We sell a fairly technical product
                                and I was worried they'd just run generic e-com playbooks at it. They didn't. They
                                actually learned the category, talked to a few of our customers, and built creative
                                around the install pain point nobody else was touching. That single angle is now 40% of
                                our paid revenue. Quick to reply, no fluff, gets on with it."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<img alt="Client Headshot" className="w-10 h-10 rounded-full grayscale object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm font-normal text-white">Danny F.</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">Founder,
                                    Smart Home Hardware</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="apply">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="reveal-element reveal-tilt-up text-center mb-12">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6">
                        Apply for your Growth Audit.
                    </h2>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
                        Fill out the details below. We'll review your brand, your current setup, and see if there's
                        immediate potential for scale. If there is, we'll build your strategy.
                    </p>
</div>
<div className="reveal-element reveal-tilt-up del-200 md:p-10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/10 border rounded-3xl pt-8 pr-6 pb-8 pl-6 shadow-2xl backdrop-blur-xl relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
</div>
<form className="space-y-6" id="rrm-apply-form" novalidate="">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="firstName">First Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" id="firstName" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="lastName">Last Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="email">Work Email</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" id="email" name="email" placeholder="john@yourbrand.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="company">Company / Brand</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" id="company" name="company" placeholder="Your brand" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="website">Website URL</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" id="website" name="website" placeholder="https://yourbrand.com" type="url"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 relative">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="revenue">Monthly Revenue</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-neutral-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner appearance-none cursor-pointer" id="revenue" name="revenue" required="">
<option disabled="" selected="" value="">Select revenue...</option>
<option value="under-20k">Under £20k / mo</option>
<option value="20k-50k">£20k - £50k / mo</option>
<option value="50k-100k">£50k - £100k / mo</option>
<option value="100k-plus">£100k+ / mo</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="spend">Monthly Ad Spend</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-neutral-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner appearance-none cursor-pointer" id="spend" name="spend" required="">
<option disabled="" selected="" value="">Select spend...</option>
<option value="under-3k">Under £3k / mo</option>
<option value="3k-10k">£3k - £10k / mo</option>
<option value="10k-50k">£10k - £50k / mo</option>
<option value="50k-plus">£50k+ / mo</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-300 ml-1" htmlFor="message">Biggest Growth Bottleneck</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner resize-none" id="message" name="message" placeholder="What's stopping you from scaling right now?" rows="3"></textarea>
</div>
<p className="hidden text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3" id="rrm-form-error">
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="flex-1 group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100" id="rrm-submit" type="submit">
<span className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 absolute top-0 right-0 bottom-0 left-0"></span>
<span className="z-10 flex items-center gap-2 relative" id="rrm-submit-label">
                                    Apply for Your Growth Audit
                                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<a className="flex-1 group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]" href="https://calendly.com/realreturn/30min" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                                Book a Call Instead
                            </a>
</div>
<p className="text-center text-[10px] text-neutral-500 font-normal mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                            Your information is secure. We never share your data.
                        </p>
</form>

<div className="hidden text-center py-6" id="rrm-success">
<div className="w-14 h-14 rounded-full bg-lime-500/15 border border-lime-500/30 flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-3xl text-lime-400" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Application received.</h3>
<p className="text-sm md:text-base text-neutral-400 max-w-md mx-auto mb-8">We'll review your brand
                            and current setup, then come back to you within one working day. Want to skip the queue?
                            Book your call now.</p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300" href="https://calendly.com/realreturn/30min" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                            Book Your Growth Audit Call
                        </a>
</div>

</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050505]/60 backdrop-blur-xl pt-20 pb-10 px-6 relative overflow-hidden z-10">

<div aria-hidden="true" className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<img alt="Real Return Logo" className="h-8 w-auto object-cover bg-center mb-6 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/621cb56d-7ff7-4273-90b6-65aff8ba239c_800w.png?w=800&amp;q=80"/>
<p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
                        The revenue growth engine for ambitious brands. We don't sell services, we build systems that
                        scale.
                    </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-3 flex flex-col text-sm text-neutral-400 font-normal">
<li><a className="hover:text-white transition-colors" href="#ai">The AI Shift</a></li>
<li><a className="hover:text-white transition-colors" href="#system">The Engine</a></li>
<li><a className="hover:text-white transition-colors" href="#results">Proven Results</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 flex flex-col text-sm text-neutral-400 font-normal">
<li><a className="hover:text-white transition-colors" href="#apply">Apply Now</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-normal">
<div>© 2024 Real Return. All rights reserved.</div>
<div className="flex gap-4">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


<iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe><iframe owner="archetype" style={{display: 'none'}} title="archetype"></iframe>
    </>
  );
}
