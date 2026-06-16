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



      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      const slides = Array.from(document.querySelectorAll('.slide'));
      const prev = document.getElementById('prevSlide');
      const next = document.getElementById('nextSlide');
      let activeSlide = 0;

      function showSlide(index) {
        activeSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === activeSlide));
      }

      prev.addEventListener('click', () => showSlide(activeSlide - 1));
      next.addEventListener('click', () => showSlide(activeSlide + 1));

      if (!reduceMotion) {
        setInterval(() => showSlide(activeSlide + 1), 7000);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full overflow-hidden bg-[#0038ff] text-white">
<div className="ticker-track flex w-max whitespace-nowrap py-3 text-xs font-medium uppercase tracking-[0.125rem]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<span className="mx-8">Now accepting Web3 founders for incubation</span>
<span className="mx-8">
          Proof-powered quests, referrals, rewards, analytics, KOL activation,
          and launch execution
        </span>
<span className="mx-8">
          Build demand before you ship. Launch with proof.
        </span>
<span className="mx-8">Now accepting Web3 founders for incubation</span>
<span className="mx-8">
          Proof-powered quests, referrals, rewards, analytics, KOL activation,
          and launch execution
        </span>
<span className="mx-8">
          Build demand before you ship. Launch with proof.
        </span>
</div>
</div>
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
<div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 relative">
<a aria-label="Proof home" className="flex items-center gap-3 text-white" href="#">
<img alt="Proof" className="h-8 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<a className="transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0038ff] text-xs font-medium text-[#c3c6cd] rounded-full pt-3 pr-5 pb-3 pl-5" href="#program">
            Incubation
          </a>
<a className="transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0038ff] text-xs font-medium text-[#c3c6cd] rounded-full pt-3 pr-5 pb-3 pl-5" href="#investors">
            Investors
          </a>
<a className="transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0038ff] text-xs font-medium text-[#c3c6cd] rounded-full pt-3 pr-5 pb-3 pl-5" href="#experts">Past Projects</a>
<a className="transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0038ff] text-xs font-medium text-[#c3c6cd] rounded-full pt-3 pr-5 pb-3 pl-5" href="#reviews">Stake $PROOF</a>
</nav>
<div className="hidden items-center gap-3 lg:flex">
<a className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-xs font-semibold uppercase tracking-[0.08rem] text-white transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#0038ff]" href="#apply" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
            Login
          </a>
<a className="gradient-button relative isolate overflow-hidden rounded-full bg-[#0038ff] px-6 py-4 text-xs font-semibold uppercase tracking-[0.08rem] text-white transition focus:outline-none focus:ring-2 focus:ring-[#0038ff]" href="#apply" onmousemove="this.style.setProperty('--mx', event.offsetX + 'px'); this.style.setProperty('--my', event.offsetY + 'px');" style={{fontFamily: 'InterCustom, system-ui, sans-serif', -Mx: '98px', -My: '25px'}}>
<span className="relative z-10">Apply for incubation</span>
</a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="hidden border-t border-white/10 bg-black px-5 py-5 lg:hidden" id="mobileMenu">
<nav className="grid gap-2" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<a className="rounded-full bg-white/[0.04] px-5 py-4 text-sm font-medium text-white" href="#program">
            Incubation
          </a>
<a className="rounded-full bg-white/[0.04] px-5 py-4 text-sm font-medium text-white" href="#investors">
            Investors
          </a>
<a className="rounded-full bg-white/[0.04] px-5 py-4 text-sm font-medium text-white" href="#experts">
            Operators
          </a>
<a className="rounded-full bg-white/[0.04] px-5 py-4 text-sm font-medium text-white" href="#reviews">
            Results
          </a>
<a className="rounded-full bg-white/[0.04] px-5 py-4 text-center text-sm font-semibold text-white" href="#apply">
            Login
          </a>
<a className="mt-2 rounded-full bg-[#0038ff] px-5 py-4 text-center text-sm font-semibold text-white" href="#apply">
            Apply for incubation
          </a>
</nav>
</div>
</header>
<main className="">
<section className="overflow-hidden relative">
<img alt="" className="pointer-events-none absolute left-1/2 top-0 w-[88rem] max-w-none -translate-x-1/2 opacity-70" src="https://proofplatform.io/images/new-homepage/intro-bg.svg"/>
<div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0038ff]/25 blur-3xl"></div>
<div className="sm:px-8 sm:pt-28 lg:pb-28 lg:pt-32 text-center max-w-[68rem] mr-auto ml-auto pt-24 pr-5 pb-20 pl-5 relative">
<div className="inline-flex gap-3 uppercase text-xs font-semibold text-white tracking-[0.125rem] border-white/10 border rounded-full mr-auto mb-7 ml-auto pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-3 gap-y-3 items-center" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>Web3 incubation built differently<span className="h-2 w-2 rounded-full bg-[#77e7ff]"></span></div>
<h1 className="leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-semibold text-white tracking-tight max-w-[62rem] mr-auto ml-auto">We make your launch <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f1b29e] via-[#b354fe] to-[#77e7ff]">
              unforgettable
            </span></h1>
<p className="leading-[1.8] sm:text-lg text-base text-[#c3c6cd] max-w-[46rem] mt-8 mr-auto ml-auto">Full-stack incubation for serious founders. GTM Strategy, content, community building, and a loyal community of investors ready to back your launch from day one. We're empowering the next generation of Web3 founders.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="gradient-button relative isolate inline-flex min-h-16 items-center justify-center overflow-hidden rounded-full bg-[#0038ff] px-8 text-sm font-semibold uppercase tracking-[0.08rem] text-white transition focus:outline-none focus:ring-2 focus:ring-[#0038ff]" href="#apply" onmousemove="this.style.setProperty('--mx', event.offsetX + 'px'); this.style.setProperty('--my', event.offsetY + 'px');" style={{fontFamily: 'InterCustom, system-ui, sans-serif', -Mx: '0px', -My: '16px'}}>
<span className="relative z-10 flex items-center gap-3">
                Apply for incubation
                <iconify-icon className="" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</a>
<a className="inline-flex min-h-16 items-center justify-center uppercase transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#0038ff] text-sm font-semibold text-white tracking-[0.08rem] border-white/10 border rounded-full pr-8 pl-8" href="#program" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
              LEARN MORE
            </a>
</div>
<div className="mx-auto mt-16 grid max-w-[48rem] grid-cols-1 gap-3 sm:grid-cols-3" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
<p className="text-3xl font-semibold tracking-tight text-white">
                12w
              </p>
<p className="mt-2 text-xs font-medium uppercase tracking-[0.125rem] text-[#c3c6cd]">
                Incubation sprint
              </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
<p className="text-3xl font-semibold tracking-tight text-white">
                $80m+
              </p>
<p className="mt-2 text-xs font-medium uppercase tracking-[0.125rem] text-[#c3c6cd]">
                Launch network
              </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
<p className="text-3xl font-semibold tracking-tight text-white">
                1:1
              </p>
<p className="uppercase text-xs font-medium text-[#c3c6cd] tracking-[0.125rem] mt-2">
                hands-on support
              </p>
</div>
</div>
</div>
</section>
<section className="sm:px-8 lg:py-28 pt-24 pr-5 pb-24 pl-5" id="investors">
<div className="mx-auto max-w-[68rem]">
<div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
<div className="">
<p className="uppercase text-xs font-semibold text-[#b354fe] tracking-[0.125rem] mb-5" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>What we do</p>
<h2 className="leading-[1.1] sm:text-5xl text-4xl font-semibold text-white tracking-tight">Built to take founders from zero to launch-ready.</h2>
</div>
<p className="text-base leading-[1.8] text-[#c3c6cd]">
              PROOF gives early-stage Web3 teams the support, visibility, and
              structure to launch successfully and grow sustainably—so investors
              see clearer, better-prepared opportunities.
            </p>
</div>
<div className="grid auto-rows-[minmax(17rem,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
<article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-7 lg:col-span-2">
<div className="relative z-10 max-w-sm">
<p className="text-xs font-semibold uppercase tracking-[0.125rem] text-[#77e7ff]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Full incubation &amp; advisory
                </p>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Pre and post-launch support.
                </h3>
<p className="mt-4 text-sm leading-[1.8]">
                  From tokenomics and contracts to messaging, branding, and
                  community growth, we work hands-on at every stage.
                </p>
</div>
<div className="absolute bottom-7 left-7 right-7 grid grid-cols-4 gap-3 sm:left-auto sm:w-56">
</div>
</article>
<article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-7 lg:col-span-2">
<div className="relative z-10 max-w-[18rem]">
<p className="text-xs font-semibold uppercase tracking-[0.125rem] text-[#f1b29e]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Launch readiness
                </p>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  We ensure teams are launch-ready.
                </h3>
<p className="mt-3 text-sm leading-[1.7]">
                  Before going live, we make sure the critical pieces are in
                  place—reducing rushed launches and lost momentum.
                </p>
</div>
<img alt="Token pass mockup" className="-bottom-10 sm:w-56 w-60 absolute right-2" src="https://proofplatform.io/images/new-homepage/overview/img-05.png" srcset="https://proofplatform.io/images/new-homepage/overview/img-05@2x.png 2x"/>
</article>
<article className="rounded-[2.5rem] border border-white/10 bg-[#19191b] p-7">
<div className="flex -space-x-4">
<img alt="KOL partner avatar" className="h-14 w-14 rounded-full border-2 border-[#19191b] object-cover" src="https://proofplatform.io/images/new-homepage/overview/img-06.jpg" srcset="https://proofplatform.io/images/new-homepage/overview/img-06@2x.jpg 2x"/>
<img alt="Community partner avatar" className="h-14 w-14 rounded-full border-2 border-[#19191b] object-cover" src="https://proofplatform.io/images/new-homepage/overview/img-07.jpg"/>
<img alt="Launch partner avatar" className="h-14 w-14 rounded-full border-2 border-[#19191b] object-cover" src="https://proofplatform.io/images/new-homepage/overview/img-08.jpg"/>
<img alt="Investor partner avatar" className="h-14 w-14 rounded-full border-2 border-[#19191b] object-cover" src="https://proofplatform.io/images/new-homepage/overview/img-09.jpg"/>
</div>
<h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                Marketing &amp; KOL network access
              </h3>
<p className="mt-3 text-sm leading-[1.75]">
                Teams tap into vetted KOLs and marketing partners to improve
                reach, visibility, and campaign quality before and after launch.
              </p>
</article>
<article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-7">
<h3 className="text-2xl font-semibold tracking-tight text-white">
                Instant investor community access
              </h3>
<p className="mt-3 text-sm leading-[1.75]">
                Avoid launching to an empty room. PROOF connects teams with a
                loyal investor community ready for PROOF-launched tokens.
              </p>
<img alt="Investor community illustration" className="absolute -bottom-4 -right-5 w-36 opacity-90" src="https://proofplatform.io/images/new-homepage/overview/img-11.svg"/>
</article>
<article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-7 lg:col-span-2">
<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0038ff]/20 blur-3xl"></div>
<div className="relative z-10 max-w-[24rem]">
<p className="text-xs font-semibold uppercase tracking-[0.125rem] text-[#77e7ff]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Market-making
                </p>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Market-making from day one.
                </h3>
<p className="mt-3 text-sm leading-[1.75]">
                  We can help create a smoother trading environment and support
                  long-term price resilience after launch.
                </p>
</div>
</article>
</div>
</div>
</section>
<section className="sm:px-8 lg:py-28 pt-24 pr-5 pb-24 pl-5" id="program">
<div className="mx-auto max-w-[68rem]">
<div className="mb-12 max-w-[46rem]">
<p className="uppercase text-xs font-semibold text-[#77e7ff] tracking-[0.125rem] mb-5" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>BUIld your treasury and development runway</p>
<h2 className="leading-[1.1] sm:text-5xl text-4xl font-semibold text-white tracking-tight">
              We give founders an alternative way to raise funds without the
              stress of presales
            </h2>
</div>
<div className="grid lg:grid-cols-3 gap-x-5 gap-y-5">
<article className="transition hover:border-[#0038ff]/60 hover:bg-white/[0.06] bg-[#19191b] border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8">
<div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-[#0038ff] text-white">
<iconify-icon height="28" icon="solar:rocket-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Your launch, your terms</h3>
<p className="leading-[1.8] text-sm text-[#c3c6cd] mt-4">Skip the presale. Skip the VC round. Our fair launch model lets founders build robust treasuries from day one, without giving up control before trading even begins.</p>
</article>
<article className="transition hover:border-[#b354fe]/60 hover:bg-white/[0.06] bg-[#19191b] border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8">
<div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-[#b354fe] text-white">
<iconify-icon className="" height="28" icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Results that speak for themselves</h3>
<p className="leading-[1.8] text-sm text-[#c3c6cd] mt-4">Our launch method is proven. Founders on PROOF have raised up to $500k in the first 31 days of trading.</p>
</article>
<article className="rounded-[2.5rem] border border-white/10 bg-[#19191b] p-8 transition hover:border-[#f1b29e]/60 hover:bg-white/[0.06]">
<div className="grid place-items-center text-white bg-gradient-to-br from-[#f1b29e] to-[#0038ff] w-14 h-14 rounded-full mb-8">
<iconify-icon className="" height="28" icon="solar:chart-square-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Community-backed</h3>
<p className="leading-[1.8] text-sm text-[#c3c6cd] mt-4">We specialise in community-driven fair launches, backed by a loyal network of investors who are already waiting to buy in and support every project we bring to market.</p>
</article>
</div>
</div>
</section>
<section className="sm:px-8 lg:py-28 pt-24 pr-5 pb-24 pl-5" id="experts">
<div className="mx-auto max-w-[68rem]">
<div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div className="max-w-[42rem]">
<p className="uppercase text-xs font-semibold text-[#77e7ff] tracking-[0.125rem] mb-5" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>MEET THE TEAM</p>
<h2 className="leading-[1.1] sm:text-5xl text-4xl font-semibold text-white tracking-tight">
                Work hands-on with a team with over 25 years experience in
                building out real-businesses in Web2 and Web3
              </h2>
</div>
<a className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-xs font-semibold uppercase tracking-[0.08rem] text-white transition hover:bg-white/[0.08]" href="#apply" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
              Explore incubation
              <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
<article className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-4">
<img alt="" className="coin-float pointer-events-none absolute right-4 top-4 z-20 h-14 w-14 opacity-90" src="https://proofplatform.io/images/new-homepage/proof-coin.svg" style={{animation: 'floatCoin 4.5s ease-in-out infinite'}}/>
<img alt="JP, founder operator" className="h-72 w-full rounded-[2rem] object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://proofplatform.io/images/new-homepage/experts/img-01.jpg" srcset="https://proofplatform.io/images/new-homepage/experts/img-01@2x.jpg 2x"/>
<div className="p-4">
<h3 className="text-xl font-semibold text-white">JP</h3>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem] text-[#c3c6cd]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Launch systems
                </p>
<div className="mt-5 flex gap-2">
<a aria-label="JP social profile" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:link-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="JP messages" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-4">
<img alt="" className="coin-float pointer-events-none absolute right-4 top-4 z-20 h-14 w-14 opacity-90" src="https://proofplatform.io/images/new-homepage/proof-coin.svg" style={{animation: 'floatCoin 5s ease-in-out infinite'}}/>
<img alt="Ozgur, partner operator" className="h-72 w-full rounded-[2rem] object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://proofplatform.io/images/new-homepage/experts/img-09.jpg" srcset="https://proofplatform.io/images/new-homepage/experts/img-09@2x.jpg 2x"/>
<div className="p-4">
<h3 className="text-xl font-semibold text-white">Ozgur</h3>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem] text-[#c3c6cd]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Capital strategy
                </p>
<div className="mt-5 flex gap-2">
<a aria-label="Ozgur social profile" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:link-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="Ozgur messages" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-4">
<img alt="" className="coin-float pointer-events-none absolute right-4 top-4 z-20 h-14 w-14 opacity-90" src="https://proofplatform.io/images/new-homepage/proof-coin.svg" style={{animation: 'floatCoin 4.8s ease-in-out infinite'}}/>
<img alt="Duke, growth partner" className="h-72 w-full rounded-[2rem] object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://proofplatform.io/images/new-homepage/experts/img-10.jpg" srcset="https://proofplatform.io/images/new-homepage/experts/img-10@2x.jpg 2x"/>
<div className="p-4">
<h3 className="text-xl font-semibold text-white">Duke</h3>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem] text-[#c3c6cd]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Growth campaigns
                </p>
<div className="mt-5 flex gap-2">
<a aria-label="Duke social profile" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:link-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="Duke messages" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b] p-4">
<img alt="" className="coin-float pointer-events-none absolute right-4 top-4 z-20 h-14 w-14 opacity-90" src="https://proofplatform.io/images/new-homepage/proof-coin.svg" style={{animation: 'floatCoin 5.2s ease-in-out infinite'}}/>
<img alt="Benji, lead engineer" className="h-72 w-full rounded-[2rem] object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://proofplatform.io/images/new-homepage/experts/img-02.jpg" srcset="https://proofplatform.io/images/new-homepage/experts/img-02@2x.jpg 2x"/>
<div className="p-4">
<h3 className="text-xl font-semibold text-white">Benji</h3>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem] text-[#c3c6cd]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                  Protocol review
                </p>
<div className="mt-5 flex gap-2">
<a aria-label="Benji social profile" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:link-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="Benji messages" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0038ff]" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="sm:px-8 lg:py-28 pt-24 pr-5 pb-24 pl-5" id="reviews">
<div className="mx-auto max-w-[68rem]">
<div className="mb-12 max-w-[42rem]">
<p className="mb-5 text-xs font-semibold uppercase tracking-[0.125rem] text-[#f1b29e]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
              Founder results
            </p>
<h2 className="leading-[1.1] sm:text-5xl text-4xl font-semibold text-white tracking-tight">PROOF ensures you launch with momentum. Here's what our founders are saying.</h2>
</div>
<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b]">
<div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0038ff]/25 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#b354fe]/20 blur-3xl"></div>
<div className="slide active relative gap-0 lg:grid-cols-[1fr_0.85fr]" data-slide="0">
<div className="p-8 sm:p-12 lg:p-14">
<img alt="" className="mb-8 h-10 w-10 opacity-80" src="https://proofplatform.io/images/new-homepage/quotes.svg"/>
<blockquote className="leading-[1.35] sm:text-3xl text-2xl font-semibold text-white tracking-tight">
                  “Momentum helped us turn scattered launch ideas into a clear
                  campaign system. The team stayed hands-on through narrative,
                  community activation, and final launch execution.”
                </blockquote>
<div className="mt-10 flex items-center gap-4">
<img alt="Wassim H" className="h-14 w-14 rounded-full object-cover" src="https://proofplatform.io/images/customers/wassimh.jpg" srcset="https://proofplatform.io/images/customers/wassimh@2x.jpg 2x"/>
<div>
<p className="font-semibold text-white">Wassim H</p>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                      Founder, protocol network
                    </p>
</div>
</div>
</div>
<img alt="Founder launch review" className="h-full min-h-80 w-full object-cover" src="https://proofplatform.io/images/new-homepage/reviews/img-01.jpg" srcset="https://proofplatform.io/images/new-homepage/reviews/img-01@2x.jpg 2x"/>
</div>
<div className="slide relative gap-0 lg:grid-cols-[1fr_0.85fr]" data-slide="1">
<div className="p-8 sm:p-12 lg:p-14">
<img alt="" className="mb-8 h-10 w-10 opacity-80" src="https://proofplatform.io/images/new-homepage/quotes.svg"/>
<blockquote className="text-2xl font-semibold leading-[1.35] tracking-tight text-white sm:text-3xl">
                  “They challenged our token model, rebuilt the story, and
                  focused us on proof of demand before introductions. It
                  compressed months of learning into weeks.”
                </blockquote>
<div className="mt-10 flex items-center gap-4">
<img alt="Mira L" className="h-14 w-14 rounded-full object-cover" src="https://proofplatform.io/images/new-homepage/overview/img-08.jpg"/>
<div>
<p className="font-semibold text-white">Mira L</p>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.1rem]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                      Co-founder, infra studio
                    </p>
</div>
</div>
</div>
<img alt="Incubator founder result" className="h-full min-h-80 w-full object-cover" src="https://proofplatform.io/images/new-homepage/reviews/img-03.jpg"/>
</div>
<div className="absolute bottom-6 right-6 flex gap-3">
<button aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-[#0038ff]" id="prevSlide">
<iconify-icon height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-[#0038ff]" id="nextSlide">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="px-5 py-24 sm:px-8 lg:py-28" id="apply">
<div className="mx-auto max-w-[68rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#19191b]">
<div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
<div className="p-8 sm:p-12 lg:p-14">
<p className="mb-5 text-xs font-semibold uppercase tracking-[0.125rem] text-[#77e7ff]" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
                Apply for incubation
              </p>
<h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                If you are building something ambitious, we should talk.
              </h2>
<p className="mt-6 text-base leading-[1.8]">
                Tell us what you are building, where you are in the launch
                cycle, and what kind of growth, community, token, or capital
                support you need next.
              </p>
<div className="mt-10 grid gap-4 sm:grid-cols-2" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<div className="rounded-[2rem] border border-white/10 bg-black/30 p-5">
<p className="text-sm font-semibold text-white">Best fit</p>
<p className="mt-2 text-sm leading-[1.7]">
                    Pre-seed to Series A Web3 teams preparing for public launch,
                    TGE, ecosystem growth, or major network activation.
                  </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-black/30 p-5">
<p className="text-sm font-semibold text-white">
                    What happens next
                  </p>
<p className="mt-2 text-sm leading-[1.7]">
                    We review founder-market fit, traction, launch timing, token
                    needs, community signals, and support gaps.
                  </p>
</div>
</div>
</div>
<form className="space-y-4 bg-black/35 p-8 sm:p-12 lg:p-14" onsubmit="event.preventDefault(); document.getElementById('formStatus').textContent='Application received. We will follow up shortly.';" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<label className="block">
<span className="mb-2 block text-xs font-semibold uppercase tracking-[0.125rem] text-white">
                  Name
                </span>
<input className="h-16 w-full rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm text-white outline-none transition placeholder:text-[#c3c6cd]/60 focus:border-[#0038ff] focus:ring-2 focus:ring-[#0038ff]/40" placeholder="Founder name" required="" type="text"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-semibold uppercase tracking-[0.125rem] text-white">
                  Email
                </span>
<input className="h-16 w-full rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm text-white outline-none transition placeholder:text-[#c3c6cd]/60 focus:border-[#0038ff] focus:ring-2 focus:ring-[#0038ff]/40" placeholder="you@company.xyz" required="" type="email"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-semibold uppercase tracking-[0.125rem] text-white">
                  Project
                </span>
<input className="h-16 w-full rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm text-white outline-none transition placeholder:text-[#c3c6cd]/60 focus:border-[#0038ff] focus:ring-2 focus:ring-[#0038ff]/40" placeholder="Project name or URL" required="" type="text"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-semibold uppercase tracking-[0.125rem] text-white">
                  Launch goal
                </span>
<textarea className="min-h-32 w-full rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-5 text-sm leading-[1.7] text-white outline-none transition placeholder:text-[#c3c6cd]/60 focus:border-[#0038ff] focus:ring-2 focus:ring-[#0038ff]/40" placeholder="What are you preparing to launch?" required=""></textarea>
</label>
<button className="gradient-button relative isolate flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-[#0038ff] px-8 text-sm font-semibold uppercase tracking-[0.08rem] text-white" onmousemove="this.style.setProperty('--mx', event.offsetX + 'px'); this.style.setProperty('--my', event.offsetY + 'px');" type="submit">
<span className="relative z-10 flex items-center gap-3">
                  Submit application
                  <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
<p className="min-h-6 text-sm text-[#77e7ff]" id="formStatus"></p>
</form>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden border-t border-white/10 px-5 pb-10 pt-20 sm:px-8 lg:pt-28">
<img alt="" className="pointer-events-none absolute bottom-0 left-1/2 w-[90rem] max-w-none -translate-x-1/2 opacity-75" src="https://proofplatform.io/images/new-homepage/footer-bg.svg"/>
<div className="relative mx-auto max-w-[78rem]">
<div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-12">
<div>
<a className="inline-flex items-center gap-3 text-white" href="#">
<img alt="Proof" className="h-8 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<p className="mt-6 max-w-sm text-sm leading-[1.8]">
              Proof-powered incubation for Web3 founders who want to launch with
              narrative clarity, verified community demand, and investor
              conviction.
            </p>
</div>
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white">
              Stay close to the next launch cycle.
            </h3>
<form className="mt-7 flex min-h-20 flex-col gap-3 rounded-[2rem] border border-white/10 bg-black p-2 sm:flex-row sm:items-center sm:rounded-full" onsubmit="event.preventDefault(); document.getElementById('subscribeStatus').textContent='You are subscribed.';" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<input className="min-h-16 flex-1 rounded-full bg-transparent px-6 text-sm text-white outline-none placeholder:text-[#c3c6cd]/60 focus:ring-2 focus:ring-[#0038ff]/40" placeholder="Enter your email" required="" type="email"/>
<button aria-label="Subscribe" className="grid h-16 w-full place-items-center rounded-full bg-[#0038ff] text-white transition hover:bg-[#1b4dff] sm:w-16" type="submit">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</form>
<p className="mt-3 min-h-5 text-sm text-[#77e7ff]" id="subscribeStatus" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}></p>
</div>
</div>
<div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between" style={{fontFamily: 'InterCustom, system-ui, sans-serif'}}>
<p className="text-xs text-[#c3c6cd]">
            © 2026 Momentum. All rights reserved.
          </p>
<div className="flex flex-wrap gap-3">
<a className="rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-[#c3c6cd] transition hover:bg-white/10 hover:text-white" href="#">
              Privacy
            </a>
<a className="rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-[#c3c6cd] transition hover:bg-white/10 hover:text-white" href="#">
              Terms
            </a>
<a className="rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-[#c3c6cd] transition hover:bg-white/10 hover:text-white" href="#">
              Contact
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
