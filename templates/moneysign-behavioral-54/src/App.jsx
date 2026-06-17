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



      // Initialize Lucide Icons
      lucide.createIcons();

      // Intersection Observer for scroll animations (Fade Reveal)
      document.addEventListener("DOMContentLoaded", () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      // Optional: unobserve after animating once
                      // observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach((element) => {
              observer.observe(element);
          });

          // Scroll Spy for TOC
          const sections = document.querySelectorAll('.section-block');
          const navLinks = document.querySelectorAll('.toc-link');

          const spyObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const id = entry.target.getAttribute('id');
                      navLinks.forEach(link => {
                          link.classList.remove('active');
                          if (link.getAttribute('href') === `#${id}`) {
                              link.classList.add('active');
                          }
                      });
                  }
              });
          }, {
              rootMargin: '-20% 0px -60% 0px' // Trigger slightly above middle of screen
          });

          sections.forEach(section => {
              spyObserver.observe(section);
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
      

<nav className="fixed w-full z-50 top-0 bg-stone-950/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px] h-16 flex items-center justify-between text-sm">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5 text-amber-500" data-lucide="bar-chart-2"></i>
<span className="font-medium tracking-tight">1 Finance</span>
</div>
<div className="hidden md:flex gap-8 text-stone-300">
<a className="hover:text-white transition-colors" href="#">
            Financial Planning
          </a>
<a className="hover:text-white transition-colors" href="#">Calculators</a>
<a className="hover:text-white transition-colors" href="#">
            Scoring &amp; Ranking
          </a>
<a className="text-white font-medium" href="#">MoneySign®</a>
</div>
<div>
<a className="text-amber-500 hover:text-amber-400 transition-colors font-medium" href="#">
            Login/Register
          </a>
</div>
</div>
</nav>

<header className="relative min-h-[80vh] flex items-center justify-center bg-stone-950 overflow-hidden pt-16">
<div className="absolute inset-0 bg-grain z-10"></div>

<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute inset-0 z-0 opacity-60">
<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/0 via-amber-500/10 to-white/0"></div>
<div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-white/0 via-amber-500/20 to-white/0"></div>
<div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-white/0 via-amber-500/10 to-white/0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]"></div>
</div>
<div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-40 text-stone-500 font-display text-lg uppercase tracking-widest">
<div className="absolute top-[20%] left-[10%] animate-float-1 text-gold">
            Emotion
          </div>
<div className="absolute top-[60%] left-[15%] animate-float-2">Risk</div>
<div className="absolute top-[30%] right-[15%] animate-float-3">
            Behaviour
          </div>
<div className="absolute top-[70%] right-[10%] animate-float-1 text-gold">
            Wealth
          </div>
<div className="absolute top-[40%] left-[40%] animate-float-2">
            Personality
          </div>
<div className="absolute top-[80%] left-[60%] animate-float-3">Bias</div>
</div>
</div>
<div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-[140px] text-center reveal">
<span className="text-amber-500/80 uppercase tracking-widest text-xs font-medium mb-8 block">
          Research Report
        </span>
<h1 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto font-medium">
          The Science behind
          <br/>
<span className="text-white/80">MoneySign®</span>
</h1>
</div>
</header>

<section className="py-32 relative bg-[#FDFBF7] overflow-hidden">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px]">
<div className="grid md:grid-cols-2 gap-16 items-center reveal">
<div className="relative w-full max-w-md mx-auto overflow-hidden rounded-sm group">
<div className="absolute inset-0 bg-grain z-10 opacity-20 pointer-events-none"></div>
<img alt="Portrait" className="w-full aspect-[3/4] object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent z-10"></div>
</div>
<div className="relative glass-light p-8 md:p-16 rounded-2xl border-l-4 border-gold">
<i className="w-20 h-20 text-gold absolute -top-10 -left-10 opacity-30" data-lucide="quote" strokeWidth="1"></i>
<blockquote className="relative z-10 font-display text-4xl md:text-5xl leading-tight text-stone-900 tracking-tight mb-12">
              "The investor's chief problem — and even his worst enemy — is
              likely to be himself."
            </blockquote>
<div className="flex items-center gap-6 border-t border-stone-200/50 pt-8">
<div className="w-12 h-[1px] bg-gold"></div>
<div>
<div className="font-display font-semibold text-stone-900 text-xl tracking-wide uppercase">
                  Benjamin Graham
                </div>
<div className="text-stone-500 text-sm tracking-widest uppercase mt-1">
                  Investor &amp; Economist
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-stone-100">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px]">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<div className="sticky top-32">
<h2 className="font-display text-4xl md:text-5xl tracking-tight text-stone-900 mb-8 leading-tight">
                The emotional foundation of finance
              </h2>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-light border border-stone-200/50 flex items-center justify-center p-8 bg-[#FDFBF7]/50">
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<svg className="w-full h-full stroke-stone-300" fill="none" strokeWidth="1" viewbox="0 0 200 100">
<path className="animate-[pulse_3s_ease-in-out_infinite]" d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50"></path>
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M0,50 Q25,80 50,50 T100,50 T150,50 T200,50" stroke-dasharray="4 4"></path>
</svg>
</div>
<div className="relative z-10 flex gap-4">
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center animate-float-1 border border-stone-100">
<i className="w-6 h-6 text-rose-400" data-lucide="heart"></i>
</div>
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center animate-float-2 border border-stone-100 mt-12">
<i className="w-6 h-6 text-indigo-400" data-lucide="brain"></i>
</div>
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center animate-float-3 border border-stone-100 -mt-8">
<i className="w-6 h-6 text-emerald-400" data-lucide="wallet"></i>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-12 max-w-2xl reveal delay-100 text-body-custom text-stone-600">
<div className="space-y-8 max-w-2xl reveal delay-100">
<div className="glass-light p-8 rounded-2xl flex gap-6 items-start group hover:shadow-lg transition-all hover:border-gold/50 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 border border-stone-200 group-hover:bg-gold/10 transition-colors">
<i className="w-5 h-5 text-stone-600 group-hover:text-gold transition-colors" data-lucide="zap"></i>
</div>
<div>
<h4 className="font-display text-xl text-stone-900 mb-2">
                    Fight-or-Flight Instincts
                  </h4>
<p className="text-stone-600 text-body-custom text-sm">
                    Humans have been wired to lead with emotion since our
                    earliest days, honing instincts over millennia. Financial
                    decisions are no exception.
                  </p>
</div>
</div>
<div className="glass-light p-8 rounded-2xl flex gap-6 items-start group hover:shadow-lg transition-all hover:border-gold/50 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 border border-stone-200 group-hover:bg-gold/10 transition-colors">
<i className="w-5 h-5 text-stone-600 group-hover:text-gold transition-colors" data-lucide="brain"></i>
</div>
<div>
<h4 className="font-display text-xl text-stone-900 mb-2">
                    Emotion Overriding Logic
                  </h4>
<p className="text-stone-600 text-body-custom text-sm">
                    Decades of behavioral finance research reveals our
                    investment and saving goals are overwhelmingly driven by
                    personality traits, overriding rational thoughts.
                  </p>
</div>
</div>
<div className="glass-light p-8 rounded-2xl flex gap-6 items-start group hover:shadow-lg transition-all hover:border-gold/50 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 border border-stone-200 group-hover:bg-gold/10 transition-colors">
<i className="w-5 h-5 text-stone-600 group-hover:text-gold transition-colors" data-lucide="repeat"></i>
</div>
<div>
<h4 className="font-display text-xl text-stone-900 mb-2">
                    Lifestyle Behaviour Patterns
                  </h4>
<p className="text-stone-600 text-body-custom text-sm">
                    Over time, this emotional financial behavior seeps into our
                    lifestyles, manifesting as our recurring financial habits.
                  </p>
</div>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-2xl flex gap-6 items-start group shadow-xl relative overflow-hidden mt-8">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent)]"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
<i className="w-5 h-5 text-gold" data-lucide="fingerprint"></i>
</div>
<div className="relative z-10">
<h4 className="font-display text-2xl text-white mb-2">
                    MoneySign® Uncovers Traits
                  </h4>
<p className="text-stone-300 text-body-custom text-sm mb-4">
                    1 Finance's personality assessment built on this research
                    uncovers the core traits shaping your financial decisions.
                  </p>
<div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
<span>Personalised Planning</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1A1A] relative text-white border-t border-white/10 overflow-hidden">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px]">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">

<div className="reveal">
<div className="sticky top-32">
<span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
                Methodology
              </span>
<h2 className="font-display text-4xl md:text-5xl tracking-tight text-white mb-6">
                The research behind your money behaviour
              </h2>
<p className="text-stone-400 text-body-custom mb-12">
                A scientific approach explaining why rational people react
                differently in identical financial situations.
              </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-stone-300">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<i className="w-4 h-4 text-gold" data-lucide="check"></i>
</div>
                  Evolutionary Basis
                </li>
<li className="flex items-center gap-4 text-stone-300">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<i className="w-4 h-4 text-gold" data-lucide="check"></i>
</div>
                  Financial Psychology
                </li>
<li className="flex items-center gap-4 text-stone-300">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<i className="w-4 h-4 text-gold" data-lucide="check"></i>
</div>
                  Emotional Biases
                </li>
</ul>
</div>
</div>

<div className="relative py-8 reveal delay-100">

<div className="hidden"></div>
<div className="space-y-16">
<div className="space-y-8">
<div className="glass-dark p-8 rounded-2xl group hover:border-gold/50 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-gold" data-lucide="dna"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
<span className="font-display font-semibold">01</span>
</div>
<div className="text-xs text-gold uppercase tracking-widest font-semibold">
                        Evolutionary Basis
                      </div>
</div>
<h3 className="font-display text-3xl tracking-tight text-white mb-4">
                      Inherited Predispositions
                    </h3>
<ul className="space-y-3 text-sm text-stone-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Stems from Darwin's Theory of Evolution.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Behavioral traits are inherited and developed over
                        generations.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Evolves into financial habits through recurring
                        real-world responses.
                      </li>
</ul>
</div>
</div>
<div className="glass-dark p-8 rounded-2xl group hover:border-gold/50 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-gold" data-lucide="line-chart"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
<span className="font-display font-semibold">02</span>
</div>
<div className="text-xs text-gold uppercase tracking-widest font-semibold">
                        Financial Psychology
                      </div>
</div>
<h3 className="font-display text-3xl tracking-tight text-white mb-4">
                      Challenging Rationality
                    </h3>
<ul className="space-y-3 text-sm text-stone-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Built on work by Kahneman, Tversky, and Shiller.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Proves people rely on mental shortcuts over pure
                        rational analysis.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Highlights the misjudgment of probabilities.
                      </li>
</ul>
</div>
</div>
<div className="glass-dark p-8 rounded-2xl group hover:border-gold/50 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-gold" data-lucide="scale"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
<span className="font-display font-semibold">03</span>
</div>
<div className="text-xs text-gold uppercase tracking-widest font-semibold">
                        The Result
                      </div>
</div>
<h3 className="font-display text-3xl tracking-tight text-white mb-4">
                      Emotional Biases
                    </h3>
<ul className="space-y-3 text-sm text-stone-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Cognitive biases drive decisions more than logic.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Explains vastly different reactions to identical
                        financial situations.
                      </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gold shrink-0 mt-0.5" data-lucide="arrow-right"></i>
                        Frameworks must map these unique emotional footprints.
                      </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1A1A] relative overflow-hidden flex items-center justify-center min-h-[60vh]">
<div className="absolute inset-0 bg-grain z-10"></div>
<div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.15)_0%,transparent_70%)]"></div>
<div className="max-w-3xl mx-auto px-4 relative z-20 text-center reveal">
<div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center reveal">
<div className="glass-dark p-16 md:p-24 rounded-[3rem] border border-gold/20 shadow-[0_0_80px_rgba(212,175,55,0.1)] relative overflow-hidden group">
<div className="absolute inset-0 pointer-events-none opacity-50">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-[ping_3s_infinite]"></div>
<div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-[ping_4s_infinite]"></div>
<div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-gold rounded-full animate-[ping_5s_infinite]"></div>
</div>
<h2 className="font-display text-5xl md:text-6xl tracking-tight text-white mb-8 relative z-10">
              Discover your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                MoneySign®
              </span>
</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-stone-300 text-lg mb-12 font-light relative z-10">
<span>World's first financial personality assessment.</span>
<span className="hidden md:block w-1.5 h-1.5 bg-gold rounded-full"></span>
<span className="text-white font-medium uppercase tracking-widest text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                Patented in US &amp; India
              </span>
</div>
<a className="relative z-10 inline-flex items-center gap-3 bg-gold hover:bg-yellow-400 text-stone-950 px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]" href="#">
              Take the assessment
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7] relative">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px]">
<div className="grid lg:grid-cols-[1fr_3fr] gap-16 relative items-start">

<aside className="hidden lg:block sticky top-32">
<div className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-6">
              Table of Content
            </div>
<ul className="space-y-4 text-sm relative border-l border-stone-100 pl-4" id="toc-list">
<ul className="space-y-8 text-sm relative border-l-2 border-stone-200 pl-6" id="toc-list">
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative active font-medium" href="#q1">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    How does psychology influence decisions?
                  </a>
</li>
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative font-medium" href="#q2">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    What is MoneySign®?
                  </a>
</li>
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative font-medium" href="#q3">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    How was it built?
                  </a>
</li>
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative font-medium" href="#q4">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    How is it assessed?
                  </a>
</li>
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative font-medium" href="#q5">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    Why is it important?
                  </a>
</li>
<li>
<a className="toc-link block text-stone-400 hover:text-stone-900 transition-colors relative font-medium" href="#q6">
<span className="absolute -left-[33px] bg-[#FDFBF7] py-1">
<div className="w-3 h-3 rounded-full border-2 border-stone-300 toc-indicator"></div>
</span>
                    Improving financial decisions
                  </a>
</li>
</ul>
<style>
                .toc-link.active { color: #1A1A1A; }
                .toc-link.active .toc-indicator { border-color: #D4AF37; background-color: #D4AF37; box-shadow: 0 0 10px rgba(212,175,55,0.5); }
                .toc-link::before { display: none !important; }
              </style>
</ul>
</aside>

<div className="space-y-32">

<div className="scroll-mt-32 reveal section-block" id="q1">
<h3 className="font-display text-3xl tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-100">
                How Does psychology influence your financial decisions?
              </h3>
<div className="prose prose-stone max-w-none text-stone-600 text-body-custom mb-12 space-y-6">
<div className="glass-light p-8 rounded-3xl border border-stone-200/50 shadow-sm mb-12 relative overflow-hidden">
<div className="absolute -right-10 -top-10 text-stone-100 opacity-50">
<i className="w-64 h-64" data-lucide="git-merge"></i>
</div>
<div className="relative z-10">
<h4 className="font-display text-2xl text-stone-900 mb-6">
                      The Decision Flow
                    </h4>
<div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full">
<div className="text-center w-full bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-gold mb-2 flex justify-center">
<i data-lucide="heart"></i>
</div>
<div className="font-semibold text-sm">Emotion</div>
</div>
<i className="text-stone-300 hidden md:block" data-lucide="arrow-right"></i>
<i className="text-stone-300 md:hidden" data-lucide="arrow-down"></i>
<div className="text-center w-full bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-gold mb-2 flex justify-center">
<i data-lucide="brain"></i>
</div>
<div className="font-semibold text-sm">Bias</div>
</div>
<i className="text-stone-300 hidden md:block" data-lucide="arrow-right"></i>
<i className="text-stone-300 md:hidden" data-lucide="arrow-down"></i>
<div className="text-center w-full bg-white p-4 rounded-xl shadow-sm border border-stone-100">
<div className="text-gold mb-2 flex justify-center">
<i data-lucide="repeat"></i>
</div>
<div className="font-semibold text-sm">Habit</div>
</div>
<i className="text-stone-300 hidden md:block" data-lucide="arrow-right"></i>
<i className="text-stone-300 md:hidden" data-lucide="arrow-down"></i>
<div className="text-center w-full bg-stone-900 text-white p-4 rounded-xl shadow-md border border-stone-800">
<div className="text-gold mb-2 flex justify-center">
<i data-lucide="target"></i>
</div>
<div className="font-semibold text-sm">Outcome</div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-white p-8 rounded-2xl border-t-4 border-amber-600 shadow-sm">
<div className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trending-down"></i>
                      Early Exposure
                    </div>
<p className="text-stone-600 text-sm">
                      Someone who started investing in the late-2010s crypto
                      wave learned about markets in an environment of sharp
                      spikes, crashes, and constant headlines.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl border-t-4 border-stone-800 shadow-sm">
<div className="text-xs uppercase tracking-widest text-stone-800 font-semibold mb-2 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield"></i>
                      Traditional Path
                    </div>
<p className="text-stone-600 text-sm">
                      Someone saving in the 1980s via fixed deposits and real
                      estate absorbed a slower, security-first idea of wealth.
                    </p>
</div>
</div>
<div className="glass-light p-6 rounded-xl border-l-4 border-gold">
<p className="text-stone-800 font-medium">
                    Both are rational responses from real experience.
                    Hyper-personalised advice curates portfolios around your
                    specific behavior, history, and preferences rather than
                    generic age-based buckets.
                  </p>
</div>
</div>

</div>

<div className="scroll-mt-32 reveal section-block" id="q2">
<h3 className="font-display text-3xl tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-100">
                What is MoneySign®?
              </h3>
<p className="text-stone-600 text-body-custom mb-12">
                MoneySign® is a scientific assessment of your core traits and
                emotions, represented in the zoomorphic depiction, like an
                animal, a bird, or an aquatic creature. It captures your risk
                comfort, pressure response, and financial motivations.
              </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="paw-print"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Lion
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Opportunistic
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="fish"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Whale
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Enlightened
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="bird"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Eagle
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Far-sighted
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="cat"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Tiger
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Tactical
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="waves"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Shark
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Stealthy
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="bug"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Turtle
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Vigilant
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="star"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Elephant
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Virtuous
                    </div>
</div>
<div className="glass-light p-8 border border-stone-200/60 rounded-2xl text-center hover:border-gold hover:-translate-y-1 transition-all group shadow-sm">
<div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" data-lucide="zap"></i>
</div>
<div className="font-display font-semibold text-stone-900 mb-1">
                      Horse
                    </div>
<div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                      Persistent
                    </div>
</div>
</div>
</div>
</div>

<div className="scroll-mt-32 reveal section-block" id="q3">
<h3 className="font-display text-3xl tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-100">
                How the MoneySign® framework was built?
              </h3>
<p className="text-stone-600 text-body-custom mb-12">
                Developed in consultation with practising psychological experts,
                using established principles of psychological assessment. Shaped
                with inputs from field experts.
              </p>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative pt-12 pb-8">
<div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 -z-10 hidden md:block"></div>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center group bg-[#FDFBF7] pt-2">
<div className="w-4 h-4 bg-gold rounded-full mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-150 transition-transform"></div>
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 bg-white border-2 border-stone-100 group-hover:border-gold transition-colors shadow-sm flex items-center justify-center">
<i className="w-10 h-10 text-stone-400 group-hover:text-gold" data-lucide="microscope"></i>
</div>
<div className="font-display text-lg font-semibold text-stone-900">
                        Dr Lokesh Gupta
                      </div>
<div className="text-xs uppercase tracking-widest text-stone-500 mt-1">
                        PhD in Psychology
                      </div>
</div>
<div className="text-center group bg-[#FDFBF7] pt-2">
<div className="w-4 h-4 bg-gold rounded-full mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-150 transition-transform"></div>
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 bg-white border-2 border-stone-100 group-hover:border-gold transition-colors shadow-sm flex items-center justify-center">
<i className="w-10 h-10 text-stone-400 group-hover:text-gold" data-lucide="book-open"></i>
</div>
<div className="font-display text-lg font-semibold text-stone-900">
                        Dr Anita Manglani
                      </div>
<div className="text-xs uppercase tracking-widest text-stone-500 mt-1">
                        PhD in Psychology
                      </div>
</div>
<div className="text-center group bg-[#FDFBF7] pt-2">
<div className="w-4 h-4 bg-gold rounded-full mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-150 transition-transform"></div>
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 bg-white border-2 border-stone-100 group-hover:border-gold transition-colors shadow-sm flex items-center justify-center">
<i className="w-10 h-10 text-stone-400 group-hover:text-gold" data-lucide="brain-circuit"></i>
</div>
<div className="font-display text-lg font-semibold text-stone-900">
                        Mr Hardik Singh Ahuja
                      </div>
<div className="text-xs uppercase tracking-widest text-stone-500 mt-1">
                        Master's in Psychology
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-mt-32 reveal section-block" id="q4">
<h3 className="font-display text-3xl tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-100">
                How is your MoneySign® assessed?
              </h3>
<p className="text-stone-600 text-body-custom mb-12">
                Determined through the Five-Factor Model of personality, widely
                known as the OCEAN framework. It draws on specific facets that
                most directly influence financial behavior.
              </p>

<div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
<div className="bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-stone-800 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>
<div className="text-center mb-16 text-white/5 font-display text-7xl md:text-9xl tracking-[0.2em] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-bold">
                    OCEAN
                  </div>
<div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display text-2xl text-stone-900 shadow-lg font-bold group-hover:scale-110 transition-transform">
                          O
                        </div>
<h4 className="font-display font-semibold text-xl text-white">
                          Openness
                        </h4>
</div>
<p className="text-sm text-stone-400 mb-4">
                        Captures the desire and ability to seek new experiences,
                        think unconventionally.
                      </p>
<div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-stone-300">
<strong className="text-[10px] uppercase tracking-widest block text-gold mb-1">
<i className="w-3 h-3 inline mr-1" data-lucide="zap"></i>
                          Financial Implication
                        </strong>
                        Shapes how receptive a person is to newer investment
                        options.
                      </div>
</div>
<div className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display text-2xl text-stone-900 shadow-lg font-bold group-hover:scale-110 transition-transform">
                          C
                        </div>
<h4 className="font-display font-semibold text-xl text-white">
                          Conscientiousness
                        </h4>
</div>
<p className="text-sm text-stone-400 mb-4">
                        Reflects capacity to follow through on goals, exercise
                        self-discipline.
                      </p>
<div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-stone-300">
<strong className="text-[10px] uppercase tracking-widest block text-gold mb-1">
<i className="w-3 h-3 inline mr-1" data-lucide="zap"></i>
                          Financial Implication
                        </strong>
                        Drives savings habits, long-term decisions, holding to a
                        plan.
                      </div>
</div>
<div className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display text-2xl text-stone-900 shadow-lg font-bold group-hover:scale-110 transition-transform">
                          E
                        </div>
<h4 className="font-display font-semibold text-xl text-white">
                          Extraversion
                        </h4>
</div>
<p className="text-sm text-stone-400 mb-4">
                        Indicates how readily a person draws energy from social
                        interaction.
                      </p>
<div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-stone-300">
<strong className="text-[10px] uppercase tracking-widest block text-gold mb-1">
<i className="w-3 h-3 inline mr-1" data-lucide="zap"></i>
                          Financial Implication
                        </strong>
                        Decisions shaped more by peer behaviour than independent
                        analysis.
                      </div>
</div>
<div className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display text-2xl text-stone-900 shadow-lg font-bold group-hover:scale-110 transition-transform">
                          A
                        </div>
<h4 className="font-display font-semibold text-xl text-white">
                          Agreeableness
                        </h4>
</div>
<p className="text-sm text-stone-400 mb-4">
                        Measures how cooperatively and compassionately a person
                        relates to others.
                      </p>
<div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-stone-300">
<strong className="text-[10px] uppercase tracking-widest block text-gold mb-1">
<i className="w-3 h-3 inline mr-1" data-lucide="zap"></i>
                          Financial Implication
                        </strong>
                        Shapes weight given to partner's preferences or advisor
                        recommendations.
                      </div>
</div>
<div className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group lg:col-start-2">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display text-2xl text-stone-900 shadow-lg font-bold group-hover:scale-110 transition-transform">
                          N
                        </div>
<h4 className="font-display font-semibold text-xl text-white">
                          Neuroticism
                        </h4>
</div>
<p className="text-sm text-stone-400 mb-4">
                        Considers tendency toward impulsive behaviour, emotional
                        instability.
                      </p>
<div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-stone-300">
<strong className="text-[10px] uppercase tracking-widest block text-gold mb-1">
<i className="w-3 h-3 inline mr-1" data-lucide="zap"></i>
                          Financial Implication
                        </strong>
                        Higher susceptibility to reactive decision-making during
                        volatility.
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-mt-32 reveal section-block" id="q5">
<h3 className="font-display text-2xl tracking-tight text-stone-900 mb-6">
                Why it is important to know your MoneySign®?
              </h3>
<div className="text-stone-600 space-y-4 text-body-custom">
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-stone-100 rounded-bl-full -z-0"></div>
<h4 className="font-display text-xl text-stone-500 mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-stone-400" data-lucide="x-circle"></i>
                      Without MoneySign®
                    </h4>
<ul className="space-y-4 text-sm text-stone-600 relative z-10">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5"></div>
                        Emotional decisions during volatility
                      </li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5"></div>
                        Generic planning around basic numbers
                      </li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5"></div>
                        Hidden biases undermine goals
                      </li>
</ul>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gold/30 shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent)]"></div>
<h4 className="font-display text-xl text-white mb-6 flex items-center gap-2 relative z-10">
<i className="w-5 h-5 text-gold" data-lucide="check-circle"></i>
                      With MoneySign®
                    </h4>
<ul className="space-y-4 text-sm text-stone-300 relative z-10">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                        Self-awareness changes engagement
                      </li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                        Built-in safeguards before volatility arrives
                      </li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                        Accountable and measurable habit tracking
                      </li>
</ul>
</div>
</div>
</div>
</div>
<div className="scroll-mt-32 reveal section-block" id="q6">
<h3 className="font-display text-2xl tracking-tight text-stone-900 mb-6">
                How does knowing your MoneySign® helps improve your financial
                decisions?
              </h3>
<div className="text-stone-600 space-y-4 text-body-custom">
<div className="flex flex-col md:flex-row items-stretch gap-4 justify-between w-full mb-8">
<div className="flex-1 glass-light p-8 rounded-2xl border border-stone-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center mb-4 text-gold border border-stone-200">
<i className="w-6 h-6" data-lucide="fingerprint"></i>
</div>
<div className="font-semibold text-stone-900 text-sm mb-2">
                      1. Personality
                    </div>
<div className="text-xs text-stone-500">
                      Clarity on temperament
                    </div>
</div>
<div className="hidden md:flex items-center justify-center text-stone-300">
<i data-lucide="arrow-right"></i>
</div>
<div className="flex-1 glass-light p-8 rounded-2xl border border-stone-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center mb-4 text-gold border border-stone-200">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<div className="font-semibold text-stone-900 text-sm mb-2">
                      2. Advisor Insights
                    </div>
<div className="text-xs text-stone-500">
                      Reinforce positive behaviours
                    </div>
</div>
<div className="hidden md:flex items-center justify-center text-stone-300">
<i data-lucide="arrow-right"></i>
</div>
<div className="flex-1 glass-light p-8 rounded-2xl border border-stone-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center mb-4 text-gold border border-stone-200">
<i className="w-6 h-6" data-lucide="line-chart"></i>
</div>
<div className="font-semibold text-stone-900 text-sm mb-2">
                      3. Better Planning
                    </div>
<div className="text-xs text-stone-500">
                      Achieve 'peace of mind'
                    </div>
</div>
</div>
</div>
</div>

<div className="mt-16 bg-stone-900 rounded-3xl p-10 text-center reveal">
<div className="bg-[#1A1A1A] rounded-[2rem] p-12 md:p-16 text-center reveal border border-gold/20 shadow-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.2),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
<h4 className="font-display text-3xl md:text-4xl text-white mb-6 relative z-10">
                  Discover your MoneySign®...
                </h4>
<p className="text-stone-300 text-sm mb-10 max-w-md mx-auto relative z-10">
                  Most people carry financial biases they have never examined.
                  Know your financial personality before you make your next
                  move.
                </p>
<a className="relative z-10 inline-flex items-center gap-2 bg-gold hover:bg-yellow-400 text-stone-950 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]" href="#">
                  Take the assessment
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-stone-400 py-16 border-t border-white/5">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[140px]">
<div className="flex flex-col items-center mb-16">
<div className="flex items-center gap-2 text-white mb-2">
<i className="w-6 h-6 text-stone-300" data-lucide="bar-chart-2"></i>
<span className="font-medium tracking-tight text-xl">1 Finance</span>
</div>
<div className="text-xs text-stone-500">CIN No: U67190G2021PTC126723</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-sm">
<div>
<h5 className="text-white font-medium mb-4">Services</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Income &amp; Expense
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Investment Planning
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Insurance Planning
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Calculators</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Loan Prepayment
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Advance Tax
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Scoring &amp; Ranking</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Credit Card
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Mutual Fund
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Home</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  MoneySign®
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Explore</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  In the news
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Support
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Others</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#">
                  India Macro
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Glossary
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p>© Copyright 2025 1finance.co.in All Rights Reserved</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
