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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['Anton', 'Impact', 'sans-serif'],
trap: ['"Bowlby One"', 'serif'],
body: ['Manrope', 'system-ui', 'sans-serif'],
},
colors: {
ink: '#08030f',
ink2: '#11061f',
plum: '#1c0a36',
gold: '#F5C518',
goldlite: '#FFE38A',
magenta: '#FF1A8C',
magdeep: '#B11272',
bull: '#FF5024',
bear: '#22B8FF',
},
boxShadow: {
goldglow: '0 0 0 1px rgba(245,197,24,.5), 0 0 30px rgba(245,197,24,.35), 0 0 60px rgba(245,197,24,.25)',
magglow: '0 0 40px rgba(255,26,140,.35)',
bullglow: '0 0 40px rgba(255,80,36,.45)',
bearglow: '0 0 40px rgba(34,184,255,.45)',
card: '0 20px 60px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(245,197,24,.12)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Year
      document.getElementById('yr').textContent = new Date().getFullYear();

      // Reveal on scroll
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));

      // Sticky CTA after scroll past hero
      const sticky = document.getElementById('sticky');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 700) sticky.classList.add('show');
        else sticky.classList.remove('show');
      }, { passive: true });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-gradient-to-r from-magdeep via-magenta to-magdeep text-white text-center py-2 text-xs sm:text-sm font-semibold tracking-wide">
<div className="flex items-center justify-center gap-2 px-4">
<span className="live-dot"></span>
<span className="">
          LIVE — Trading session opens
          <span className="text-gold">Monday 9:00 AM EST</span>
          · Locked in at $10/mo for life
        </span>
</div>
</div>

<header className="relative z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between gap-2">
<a className="flex items-center gap-2" href="#">
<span className="trap-word text-2xl leading-none">TRAPPING</span>
<span className="gold-word text-2xl leading-none">FX</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-white/80">
<a className="hover:text-gold transition" href="#session">The Session</a>
<a className="hover:text-gold transition" href="#mrp">Mr. P</a>
<a className="hover:text-gold transition" href="#whatyouget">
            What You Get
          </a>
<a className="hover:text-gold transition" href="#ecosystem">Ecosystem</a>
<a className="hover:text-gold transition" href="#proof">Reviews</a>
</nav>
<a className="btn-ghost text-sm !py-2 !px-4" href="#join">
          Lock In
          <iconify-icon icon="solar:arrow-right-up-bold" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none" style={{backgroundImage: 'url(\'https://vibe.filesafe.space/1779414311807979132/assets/d15220d3-f615-45a2-818d-0cb6eba0cb96.png\')', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}></div>
<div className="absolute inset-0 z-0 nebula stars opacity-80 pointer-events-none"></div>
<div className="grid-overlay absolute inset-0"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-5 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-20 lg:pb-32">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

<div className="lg:col-span-7 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/5 mb-7">
<iconify-icon className="text-gold" icon="solar:bolt-bold" width="16"></iconify-icon>
<span className="eyebrow text-gold">
                Live New York Trading Sesion
              </span>
</div>
<h1 className="hero-headline anton text-white" style={{fontSize: 'clamp(54px, 8vw, 116px)', lineHeight: '.92'}}>
              FOLLOW THE TRADES.
              <br/>
              COPY THE PLAYS.
              <br/>
<span className="gold-text">STACK THE BAG.</span>
</h1>
<p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl mx-auto lg:mx-0">
              Sit in the room with
              <span className="text-gold font-bold">Mr. P</span>
              four mornings a week. Watch every entry. Hear every exit. Trade
              alongside a desk that's been calling moves on the NY session for
              years.
            </p>

<div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm">
<span className="price-tag">
<iconify-icon className="text-gold" icon="solar:calendar-bold" width="16"></iconify-icon>
<span className="font-bold">MON–THU</span>
</span>
<span className="price-tag">
<iconify-icon className="text-gold" icon="solar:clock-circle-bold" width="16"></iconify-icon>
<span className="font-bold">9:00 AM EST</span>
</span>
<span className="price-tag">
<iconify-icon className="text-gold" icon="solar:dollar-bold" width="16"></iconify-icon>
<span className="font-bold">$10 / MONTH</span>
</span>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" id="join">
<a className="btn-gold" href="/#">
<iconify-icon icon="solar:lock-keyhole-bold" width="22"></iconify-icon>
                LOCK IN MY SEAT — $10/MO
              </a>
<a className="btn-ghost" href="#mrp">
<iconify-icon className="" icon="solar:user-id-bold" width="18"></iconify-icon>
                Who's Mr. P?
              </a>
</div>
<div className="mt-5 flex items-center justify-center lg:justify-start gap-4 text-xs text-white/50">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                Cancel anytime
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                Instant access
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                5-star rated
              </span>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative max-w-md mx-auto">

<div className="text-center mb-6">
<div className="trap-word hero-trap tracking-tight font-semibold w-full max-w-full break-words" style={{fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: '.85'}}>
                  TRAP'N
                </div>
<div className="gold-word hero-trap" style={{fontSize: 'clamp(80px, 12vw, 150px)', lineHeight: '0.85', marginTop: '-10px'}}>
                  FX
                </div>
</div>

<div className="grid grid-cols-2 gap-3 mb-5 mx-auto">
<div className="creature bull glass flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61df5b5a-74e1-4b92-928a-db37aa48741b_800w.png)] bg-cover items-center justify-center">
</div>
<div className="creature bear glass bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dda0e230-8bd3-4197-8420-dcc04ad90c12_800w.png?w=800&amp;q=80)] bg-cover">
</div>
</div>

<div className="glass rounded-2xl p-6 text-center ring-gold">
<div className="text-xs uppercase tracking-widest text-white/60 mb-2">
                  Locked Founder Rate
                </div>
<div className="flex flex-wrap items-end justify-center gap-1.5 mb-2">
<span className="text-gold text-2xl font-bold leading-none">
                    $
                  </span>
<span className="anton text-6xl leading-none gold-text">10</span>
<span className="text-white/60 text-lg leading-none mb-1">
                    / month
                  </span>
</div>
<div className="text-white/70 text-sm">
                  Lock the price today. Keep it forever — even when we raise it.
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="ticker-wrap bg-ink/60">
<div className="ticker text-gold/70 font-bold tracking-wider">
<span>● TRAPPING KNOWLEDGE</span>
<span>● BUILDING WEALTH</span>
<span>● CREATING FREEDOM</span>
<span>● LIVE MON–THU 9AM EST</span>
<span>● $10 / MO LOCKED IN</span>
<span>● COPY THE PLAYS</span>
<span>● TRAPPING KNOWLEDGE</span>
<span>● BUILDING WEALTH</span>
<span>● CREATING FREEDOM</span>
<span>● LIVE MON–THU 9AM EST</span>
<span>● $10 / MO LOCKED IN</span>
<span>● COPY THE PLAYS</span>
</div>
</div>
</section>

<section className="relative nebula py-24 overflow-hidden" id="story">
<div className="grid-overlay absolute inset-0 opacity-40"></div>
<div className="relative max-w-7xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-14 reveal">
<div className="eyebrow text-magenta mb-3">The Story</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none tracking-tight">
            " I use to over leverage my life.
            <br/>
<span className="gold-text">Now I over leverage accounts."</span>
</h2>
<p className="mt-6 text-white/75 text-lg">
            Same hustle. Same hours. Same risk — just pointed at the wrong bag.
            The block taught us how to read movement, manage inventory, run
            numbers, and stay ten steps ahead. That's
            <span className="text-gold font-semibold">a trader's brain</span>
            . We were running it on the wrong block.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-5 mb-14">
<div className="glass rounded-2xl p-7 reveal">
<div className="eyebrow text-bear mb-2">Old Trap</div>
<h3 className="anton text-3xl text-white mb-3">
              Risk your life for a bag.
            </h3>
<p className="text-white/70 text-[15px]">
              Freedom on the line. Family on the line. One bad night and it's
              all gone — the money, the time, the future.
            </p>
</div>
<div className="glass-mag rounded-2xl p-7 reveal ring-mag">
<div className="eyebrow text-gold mb-2">New Trap</div>
<h3 className="anton text-3xl text-white mb-3">
              Risk the bag for a bag.
            </h3>
<p className="text-white/80 text-[15px]">
              Same instincts, legal rails. You don't have to risk your life,
              bro. You put your mind to it, you risk a controlled bag — and you
              stack the real one.
            </p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5 mb-5"></div>
</div>
</section>
<section className="relative nebula-soft py-24 overflow-hidden" id="session">
<div className="candles"></div>
<div className="relative max-w-7xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<div className="eyebrow text-magenta mb-3">What You're Joining</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none">
            Not a course. Not a Discord full of noise.
            <br/>
<span className="mag-text">A live trading session.</span>
</h2>
<p className="mt-6 text-white/70 text-lg">
            Four mornings a week, the room opens at 9 AM EST sharp. You watch
            the same charts Mr. P watches, hear the reasoning behind every
            position, and — when you're ready — copy the plays in your own
            account.
          </p>
</div>

<div className="grid md:grid-cols-3 gap-5 mb-16">
<div className="glass rounded-2xl p-7 reveal">
<div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/30 grid place-items-center mb-5">
<iconify-icon className="text-gold" icon="solar:videocamera-record-bold" width="28"></iconify-icon>
</div>
<h3 className="anton text-2xl text-white mb-2">
              Real Trades, Real Time
            </h3>
<p className="text-white/70 text-[15px]">
              No theory decks. Watch entries hit, stops adjust, exits trigger —
              exactly as it happens on the NY session.
            </p>
</div>
<div className="glass rounded-2xl p-7 reveal">
<div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/30 grid place-items-center mb-5">
<iconify-icon className="text-gold" icon="solar:microphone-3-bold" width="28"></iconify-icon>
</div>
<h3 className="anton text-2xl text-white mb-2">Hear The Why</h3>
<p className="text-white/70 text-[15px]">
              Mr. P narrates the read — structure, liquidity, sentiment. You
              learn the reasoning, not just the result.
            </p>
</div>
<div className="glass rounded-2xl p-7 reveal">
<div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/30 grid place-items-center mb-5">
<iconify-icon className="text-gold" icon="solar:users-group-rounded-bold" width="28"></iconify-icon>
</div>
<h3 className="anton text-2xl text-white mb-2">Trade With a Room</h3>
<p className="text-white/70 text-[15px]">
              A community of traders posting screenshots, asking questions,
              holding each other accountable.
            </p>
</div>
</div>

<div className="glass rounded-3xl p-8 md:p-10 reveal">
<div className="flex items-center justify-between flex-wrap gap-3 mb-6">
<div className="">
<div className="eyebrow text-gold mb-1">Live Schedule</div>
<div className="anton text-3xl text-white">
                Four Mornings. One Window. 9 AM EST.
              </div>
</div>
<div className="flex items-center gap-2 text-white/70 text-sm">
<span className="live-dot"></span>
<span>Streaming Eastern Time</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-7 gap-2">
<div className="text-center rounded-xl py-5 bg-gradient-to-b from-gold/25 to-gold/5 border border-gold/40">
<div className="anton text-2xl text-gold">MON</div>
<div className="text-xs text-white/70 mt-1">9:00 AM EST</div>
</div>
<div className="text-center rounded-xl py-5 bg-gradient-to-b from-gold/25 to-gold/5 border border-gold/40">
<div className="anton text-2xl text-gold">TUE</div>
<div className="text-xs text-white/70 mt-1">9:00 AM EST</div>
</div>
<div className="text-center rounded-xl py-5 bg-gradient-to-b from-gold/25 to-gold/5 border border-gold/40">
<div className="anton text-2xl text-gold">WED</div>
<div className="text-xs text-white/70 mt-1">9:00 AM EST</div>
</div>
<div className="text-center rounded-xl py-5 bg-gradient-to-b from-gold/25 to-gold/5 border border-gold/40">
<div className="anton text-2xl text-gold">THU</div>
<div className="text-xs text-white/70 mt-1">9:00 AM EST</div>
</div>
<div className="text-center rounded-xl py-5 bg-white/[.02] border border-white/10">
<div className="anton text-2xl text-white/30">FRI</div>
<div className="text-xs text-white/40 mt-1">Off</div>
</div>
<div className="text-center rounded-xl py-5 bg-white/[.02] border border-white/10">
<div className="anton text-2xl text-white/30">SAT</div>
<div className="text-xs text-white/40 mt-1">Off</div>
</div>
<div className="text-center rounded-xl py-5 bg-white/[.02] border border-white/10">
<div className="anton text-2xl text-white/30">SUN</div>
<div className="text-xs text-white/40 mt-1">Off</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative nebula py-24 overflow-hidden" id="mrp">
<div className="grid-overlay absolute inset-0 opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-5">
<div className="grid lg:grid-cols-12 gap-10 items-center">

<div className="lg:col-span-5 reveal">
<div className="relative">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-magenta via-gold to-magdeep opacity-30 blur-2xl"></div>
<div className="relative rounded-3xl overflow-hidden border border-gold/30 ring-gold">

<div className="aspect-[4/5] bg-gradient-to-br from-plum via-ink2 to-ink relative grid place-items-center">
<img alt="Mr. P" className="absolute inset-0 w-full h-full object-cover z-0" src="https://assets.cdn.filesafe.space/arKVCFkb2oO70MsWDvbw/media/6a0fb6b83c3aed7c637788b9.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent z-0"></div>

<div style={{display: 'none'}}></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="trap-word text-3xl leading-none">MR. P</div>
<div className="text-white/80 text-sm mt-1">@MrPedenCEO</div>
</div>
</div>
</div>

<div className="absolute -bottom-5 -right-3 sm:-right-6 glass rounded-xl px-4 py-3 ring-gold rotate-3">
<div className="text-[10px] text-white/60 uppercase tracking-wider">
                  Founder
                </div>
<div className="anton text-lg text-gold">The Trap Institute</div>
</div>
<div className="absolute -top-4 -left-3 sm:-left-6 glass rounded-xl px-4 py-3 ring-mag -rotate-3">
<div className="text-[10px] text-white/60 uppercase tracking-wider">
                  Behind
                </div>
<div className="anton text-lg text-magenta">
                  Equal Gains University
                </div>
</div>
</div>
</div>

<div className="lg:col-span-7 reveal">
<div className="eyebrow text-magenta mb-3">Who Is Mr. P</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none mb-7">
              A visionary leader. A family man.
              <br/>
<span className="gold-text">A wealth-builder on a mission.</span>
</h2>
<p className="text-white/80 text-lg leading-relaxed mb-5">
              Mr. P — also known as
              <span className="text-gold font-semibold">Mr. Peden</span>
              — is the CEO of the Peden Family Group and the architect behind a
              movement helping everyday people build real, generational wealth.
            </p>
<p className="text-white/70 leading-relaxed mb-8">
              He's spent years inside the markets, building businesses, and
              teaching what most never learned in school: how money actually
              moves, how to read a chart, and how to turn discipline into
              freedom. He leads with faith, puts family first, and shows up
              every morning to call the plays for a community that's ready to
              win.
            </p>
<div className="grid sm:grid-cols-2 gap-4 mb-8">
<div className="flex gap-3 items-start">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    CEO · Peden Family Group
                  </div>
<div className="text-white/60 text-sm">
                    Building businesses and ecosystems across finance,
                    education, and trading.
                  </div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Founder · The Trap Institute
                  </div>
<div className="text-white/60 text-sm">
                    Free financial literacy for the community that needs it
                    most.
                  </div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Behind · Equal Gains University
                  </div>
<div className="text-white/60 text-sm">
                    A structured path from beginner to confident trader.
                  </div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div>
<div className="font-bold text-white">
                    Host · The Wealth Play Calls
                  </div>
<div className="text-white/60 text-sm">
                    Weekly sessions on strategy, mindset, and execution.
                  </div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="btn-gold !text-base !py-3 !px-6" href="#join">
<iconify-icon icon="solar:lock-keyhole-bold" width="18"></iconify-icon>
                Join Mr. P Live
              </a>
<a className="btn-ghost !py-3" href="https://link.nurturelycrm.io/widget/booking/VFdvF63Ky9soRrJEWpv7">
<iconify-icon className="" icon="solar:calendar-add-bold" width="18"></iconify-icon>
                Schedule a Free Consultation
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative nebula-soft py-24 overflow-hidden" id="whatyouget">
<div className="relative max-w-7xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-14 reveal">
<div className="eyebrow text-gold mb-3">What's Inside</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none">
            Everything you need to
            <br/>
<span className="gold-text">trade with a real desk.</span>
</h2>
<p className="mt-6 text-white/70 text-lg">
            Locked in at ten dollars a month. No upsells in your inbox, no fake
            countdowns. Just the room, the plays, and the people.
          </p>
</div>
<div className="grid lg:grid-cols-5 gap-6">

<div className="lg:col-span-3 glass rounded-3xl p-7 md:p-10 reveal">
<h3 className="anton text-3xl text-white mb-6">
              Your $10/month seat includes
            </h3>
<ul className="space-y-5">
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Live NY trading session — Mon through Thu
                  </div>
<div className="text-white/60 text-sm mt-1">
                    Four live windows a week with Mr. P at 9 AM EST.
                  </div>
</div>
</li>
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Real-time trade calls — entries, exits, stops
                  </div>
<div className="text-white/60 text-sm mt-1">
                    Hear the read the moment it happens. No replays, no edits.
                  </div>
</div>
</li>
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Access to the Trapping FX community
                  </div>
<div className="text-white/60 text-sm mt-1">
                    A room full of traders — beginners and pros — leveling up
                    together.
                  </div>
</div>
</li>
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">
                    Direct path into Equal Gains University
                  </div>
<div className="text-white/60 text-sm mt-1">
                    Mr. P's structured education for traders who want the full
                    system.
                  </div>
</div>
</li>
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">The Wealth Play Calls</div>
<div className="text-white/60 text-sm mt-1">
                    Strategy, mindset, and the long game of building real
                    wealth.
                  </div>
</div>
</li>
<li className="flex gap-4">
<div className="check-icon">
<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>
</div>
<div className="">
<div className="font-bold text-white">Locked founder pricing</div>
<div className="text-white/60 text-sm mt-1">
                    $10/month for as long as you stay. Lock today, keep it
                    forever.
                  </div>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-2 reveal">
<div className="glass-mag rounded-3xl p-7 md:p-9 ring-mag h-full flex flex-col">
<div className="eyebrow text-magenta mb-3">Founder's Rate</div>
<div className="anton text-white text-3xl leading-tight mb-5">
                Lock the price.
                <br/>
                Run the play.
              </div>
<div className="flex flex-wrap gap-1.5 mb-2 items-end justify-center sm:justify-start">
<span className="text-gold text-3xl font-semibold tracking-tight pb-3">
                  $
                </span>
<span className="anton gold-text tracking-tight" style={{fontSize: '96px', lineHeight: '1'}}>
                  10
                </span>
<span className="text-white/70 text-lg pb-3">/ month</span>
</div>
<div className="text-white/60 text-sm mb-7">
                Cancel anytime. No contracts. Instant access to the live room.
              </div>
<a className="btn-gold w-full justify-center !py-4 mb-4" href="https://buy.stripe.com/3cIbJ098P6Nn2tie9ugIo01">
<iconify-icon icon="solar:lock-keyhole-bold" width="22"></iconify-icon>
                LOCK IN NOW
              </a>
<div className="space-y-2 text-sm text-white/70">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:shield-check-bold" width="16"></iconify-icon>
                  Stripe-secured checkout
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:clock-circle-bold" width="16"></iconify-icon>
                  Access activates instantly
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:close-circle-bold" width="16"></iconify-icon>
                  Cancel in one click anytime
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative nebula py-24 overflow-hidden" id="ecosystem">
<div className="relative max-w-7xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-14 reveal">
<div className="eyebrow text-gold mb-3">The Ecosystem</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none">
            More than a chatroom.
            <br/>
<span className="mag-text">A whole house.</span>
</h2>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="glass rounded-3xl p-8 reveal flex flex-col">
<div className="w-14 h-14 rounded-xl bg-magenta/15 border border-magenta/40 grid place-items-center mb-5">
<iconify-icon className="text-magenta" icon="solar:square-academic-cap-bold" width="28"></iconify-icon>
</div>
<div className="eyebrow text-magenta mb-2">Free Community</div>
<h3 className="anton text-3xl text-white mb-3">The Trap Institute</h3>
<p className="text-white/70 mb-6 flex-grow">
              Mr. P's mission to put financial literacy in the hands of the
              people who were never taught it. Free enrollment, real curriculum,
              zero gatekeeping.
            </p>
<a className="btn-ghost !text-sm w-full justify-center" href="https://trapinstitute.com/">
              Free Enrollment
              <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>

<div className="glass rounded-3xl p-8 reveal flex flex-col">
<div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/40 grid place-items-center mb-5">
<iconify-icon className="text-gold" icon="solar:wallet-money-bold" width="28"></iconify-icon>
</div>
<div className="eyebrow text-gold mb-2">Get Funded</div>
<h3 className="anton text-3xl text-white mb-3">
              Payouts With P · Sway Funded
            </h3>
<p className="text-white/70 mb-6 flex-grow">
              Don't have capital yet? Get funded through the recommended program
              and trade with real size. Mr. P walks you through the path from
              challenge to payout.
            </p>
<a className="btn-ghost !text-sm w-full justify-center" href="/#">
              Click Here To Get Funded
              <iconify-icon className="" icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>

<div className="glass rounded-3xl p-8 reveal flex flex-col">
<div className="w-14 h-14 rounded-xl bg-bear/15 border border-bear/40 grid place-items-center mb-5">
<iconify-icon className="text-bear" icon="solar:graph-up-bold" width="28"></iconify-icon>
</div>
<div className="eyebrow text-bear mb-2">Recommended Broker</div>
<h3 className="anton text-3xl text-white mb-3">
              Trade on the Right Rails
            </h3>
<p className="text-white/70 mb-6 flex-grow">
              Mr. P only recommends what he uses himself. Get set up on the
              broker the desk runs through and skip the trial-and-error.
            </p>
<a className="btn-ghost !text-sm w-full justify-center" href="https://my.liquidbrokers.com/auth/register?partner_code=4385286">
              Join Now
              <iconify-icon className="" icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative nebula-soft py-24 overflow-hidden" id="proof">
<div className="relative max-w-7xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-14 reveal">
<div className="eyebrow text-gold mb-3">From The Room</div>
<h2 className="anton text-white text-5xl md:text-6xl leading-none">
            Real traders.
            <br/>
<span className="gold-text">Real words.</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-5 mb-14">
<div className="glass rounded-2xl p-7 relative reveal">
<iconify-icon className="text-gold absolute -top-3 -left-2" icon="solar:quote-up-square-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-4 mt-2">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/90 text-[15px] leading-relaxed mb-5">
              "Hell of a week, everyone — thank you in the name of Jesus, amen,
              to this skill set. 🙏"
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-magenta to-magdeep grid place-items-center font-bold text-white">
                JA
              </div>
<div>
<div className="font-bold text-white text-sm">J. Alvarez</div>
<div className="text-white/50 text-xs">Verified Member</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-7 relative reveal">
<iconify-icon className="text-gold absolute -top-3 -left-2" icon="solar:quote-up-square-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-4 mt-2">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/90 text-[15px] leading-relaxed mb-5">
              "I am happy and grateful — I love it here. Y'all have been so
              welcoming. Thanks, everyone, for your time and knowledge. 🤍"
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-goldlite grid place-items-center font-bold text-ink">
                TH
              </div>
<div className="">
<div className="font-bold text-white text-sm">Tamika Hardin</div>
<div className="text-white/50 text-xs">Verified Member</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-7 relative reveal">
<iconify-icon className="text-gold absolute -top-3 -left-2" icon="solar:quote-up-square-bold" width="40"></iconify-icon>
<div className="flex gap-1 mb-4 mt-2">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/90 text-[15px] leading-relaxed mb-5">
              "I really do thank God for learning how to trade forex. 🙏🙏🙏"
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-bear to-bear/40 grid place-items-center font-bold text-ink">
                JR
              </div>
<div>
<div className="font-bold text-white text-sm">J. Robinson</div>
<div className="text-white/50 text-xs">Verified Member</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-7 md:p-10 flex flex-col md:flex-row items-center gap-6 reveal">
<div className="w-16 h-16 rounded-full bg-red-600 grid place-items-center shrink-0">
<iconify-icon className="text-white" height="32" icon="solar:play-bold" style={{color: 'rgb(255, 255, 255)'}} width="32"></iconify-icon>
</div>
<div className="flex-grow text-center md:text-left">
<div className="anton text-2xl text-white">
              Watch The Trap House on YouTube
            </div>
<div className="text-white/60 text-sm">
              @TrappingFX · daily recaps, plays, and the building of a new
              generation of traders.
            </div>
</div>
<a className="btn-ghost shrink-0" href="https://www.youtube.com/@TrappingFX/featured">
            Subscribe
            <iconify-icon className="" icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative nebula py-24 overflow-hidden">
<div className="grid-overlay absolute inset-0"></div>
<div className="relative max-w-5xl mx-auto px-5 text-center">
<div className="reveal">
<div className="eyebrow text-magenta mb-5">Last Call</div>
<h2 className="anton text-white leading-none" style={{fontSize: 'clamp(48px, 8vw, 110px)'}}>
            Monday at
            <span className="gold-text">9 AM EST,</span>
<br/>
            the room opens.
          </h2>
<p className="mt-7 text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            You can keep watching from the outside — or you can pull up a seat
            at the desk, lock the price in for life, and start running the plays
            with us.
          </p>
<div className="mt-10">
<a className="btn-gold !text-2xl !py-5 !px-10" href="https://buy.stripe.com/3cIbJ098P6Nn2tie9ugIo01">
<iconify-icon className="" icon="solar:lock-keyhole-bold" width="26"></iconify-icon>
              LOCK IN NOW — $10/MO
            </a>
<div className="mt-5 text-white/50 text-sm flex flex-wrap justify-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                No contracts
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                Cancel anytime
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-gold" icon="solar:check-circle-bold" width="14"></iconify-icon>
                Instant access
              </span>
</div>
</div>

<div className="mt-16 anton text-2xl md:text-3xl text-white/40 tracking-widest">
            TRAPPING KNOWLEDGE · BUILDING WEALTH ·
            <span className="text-gold">CREATING FREEDOM</span>
</div>
</div>
</div>
</section>

<footer className="relative bg-ink border-t border-gold/20 py-12">
<div className="max-w-7xl mx-auto px-5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
<a className="flex items-center gap-2 justify-center md:justify-start" href="#">
<span className="trap-word text-2xl leading-none">TRAPPING</span>
<span className="gold-word text-2xl leading-none">FX</span>
</a>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
<a className="hover:text-gold transition" href="#session">
              The Session
            </a>
<a className="hover:text-gold transition" href="#mrp">Mr. P</a>
<a className="hover:text-gold transition" href="#whatyouget">
              What You Get
            </a>
<a className="hover:text-gold transition" href="#ecosystem">
              Ecosystem
            </a>
<a className="hover:text-gold transition" href="#proof">Reviews</a>
</div>
<div className="flex items-center gap-3 justify-center md:justify-end">
<a className="w-10 h-10 rounded-full border border-white/15 hover:border-gold/50 grid place-items-center text-white/70 hover:text-gold transition" href="#">
<iconify-icon icon="mdi:youtube" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/15 hover:border-gold/50 grid place-items-center text-white/70 hover:text-gold transition" href="#">
<iconify-icon icon="mdi:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/15 hover:border-gold/50 grid place-items-center text-white/70 hover:text-gold transition" href="#">
<iconify-icon icon="mdi:twitter" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="gold-divider mb-8"></div>
<div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/[.04] p-5 md:p-6 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-yellow-400 shrink-0 mt-0.5" icon="solar:danger-triangle-bold" width="22"></iconify-icon>
<div className="text-yellow-200/80 text-xs leading-relaxed">
<strong className="text-yellow-300">Disclaimer.</strong>
              Trapping FX and Mr. Peden are not registered financial advisers,
              and nothing on this page constitutes financial advice. Trading
              foreign exchange carries risk, including the possible loss of
              capital. Past performance does not guarantee future results. You
              are solely responsible for your own trading decisions. Educational
              content only.
            </div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
<div>
            ©
            <span id="yr">2026</span>
            Trapping NYC. All rights reserved.
          </div>
<div className="flex items-center gap-4">
<a className="hover:text-gold transition" href="#">Terms</a>
<span className="text-white/20">·</span>
<a className="hover:text-gold transition" href="#">Privacy</a>
<span className="text-white/20">·</span>
<a className="hover:text-gold transition" href="#">Contact</a>
</div>
</div>
</div>
</footer>

<div className="stickycta md:hidden" id="sticky">
<div className="flex items-center gap-3 px-4 py-3">
<div className="flex-1">
<div className="text-white text-xs">Live Mon–Thu · 9AM EST</div>
<div className="anton text-xl gold-text leading-none">
            $10/MO — LOCKED
          </div>
</div>
<a className="btn-gold !text-sm !py-3 !px-5" href="#">LOCK IN</a>
</div>
</div>


    </>
  );
}
