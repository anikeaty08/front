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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
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
      
<div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900">
<header className="border-b border-white/10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
<a className="flex items-center gap-3" href="https://theheirsmovement.com/">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="crown"></i>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">The HEIRS Movement</p>
<p className="text-sm font-normal text-stone-300">Speaking &amp; Events</p>
</div>
</a>
<a className="hidden rounded-full border border-amber-300/30 bg-amber-300 px-5 py-2.5 text-sm font-medium text-stone-950 shadow-sm shadow-amber-400/20 transition hover:bg-amber-200 sm:inline-flex" href="#book">
          Book an Engagement
        </a>
</div>
</header>
<main>
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_35%),radial-gradient(circle_at_right,_rgba(255,255,255,0.05),_transparent_30%)]"></div>
<div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-24">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
<i className="h-4 w-4" data-lucide="mic-2"></i>
              Book Us to Speak
            </div>
<h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transformational messages on faith, ownership, and generational legacy
            </h1>
<p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-stone-300 sm:text-xl">
              Bring The HEIRS Movement to your church, summit, organization, or community gathering for practical, faith-centered teaching that empowers audiences to move from survival into stewardship, ownership, and lasting impact.
            </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-medium text-stone-950 transition hover:bg-amber-200" href="#topics">
                Explore Speaking Topics
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/10" href="#engagements">
                View Past Engagements
              </a>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="landmark"></i>
</div>
<p className="mt-3 text-sm font-medium text-white">Faith-centered</p>
<p className="mt-1 text-sm font-normal text-stone-400">Biblical principles with practical application</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<p className="mt-3 text-sm font-medium text-white">Ownership-focused</p>
<p className="mt-1 text-sm font-normal text-stone-400">Real estate, stewardship, and wealth building</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<p className="mt-3 text-sm font-medium text-white">Legacy-driven</p>
<p className="mt-1 text-sm font-normal text-stone-400">Tools for generational transformation</p>
</div>
</div>
</div>
<div className="lg:col-span-6" id="book">
<div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl shadow-black/30 backdrop-blur">
<div className="border-b border-white/10 px-5 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="play-circle"></i>
</div>
<div>
<h2 className="text-lg font-medium text-white">Featured Speaking Video</h2>
<p className="text-sm font-normal text-stone-400">Watch a preview of the message and presence</p>
</div>
</div>
</div>
<div className="p-3 sm:p-4">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
<div style={{padding: '75% 0 0 0', position: 'relative'}}>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1187063740?h=c9f4127edd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} title="Book Us to Speak"></iframe>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="border-t border-white/10 bg-stone-900/70" id="topics">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
<div className="max-w-3xl">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">Speaking Topics</p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Messages that inspire ownership, discipline, and legacy
            </h2>
<p className="mt-5 text-lg font-normal leading-8 text-stone-300 sm:text-xl">
              Each presentation is crafted to encourage transformation with a balance of spiritual clarity, strategic insight, and practical next steps.
            </p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white">Faith, Ownership and the Promise of Legacy</h3>
<p className="mt-3 text-base font-normal leading-7 text-stone-300">
                    A transformational message connecting biblical principles, ownership, and generational wealth. This talk equips audiences to see land, stewardship, and legacy as part of a greater calling.
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="layers-3"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white">The HEIRS™ Framework for Building Wealth</h3>
<p className="mt-3 text-base font-normal leading-7 text-stone-300">
                    An engaging teaching on the five pillars of The HEIRS™, helping individuals and organizations understand how faith, education, intentional investing, repetition, and stewardship create lasting wealth.
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white">From Survival to Stewardship</h3>
<p className="mt-3 text-base font-normal leading-7 text-stone-300">
                    A powerful session on moving beyond scarcity thinking into ownership, disciplined stewardship, and long-term legacy building. Ideal for entrepreneurs, faith communities, and aspiring investors.
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
<i className="h-5 w-5" data-lucide="key-round"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white">Kingdom Principles for Real Estate and Wealth Creation</h3>
<p className="mt-3 text-base font-normal leading-7 text-stone-300">
                    Practical and inspirational insights on using real estate as a vehicle for freedom, impact, and generational blessing, grounded in both strategy and faith.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-white/10" id="engagements">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">Previous Speaking Engagements</p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Trusted by communities, ministries, and growth-centered platforms
              </h2>
<p className="mt-5 max-w-2xl text-lg font-normal leading-8 text-stone-300 sm:text-xl">
                From faith-based gatherings to business and wealth-building stages, these engagements reflect a message that resonates across audiences seeking transformation, ownership, and enduring impact.
              </p>
<div className="mt-10 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">Traffic Sales &amp; Profit</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">Connie Williams Ministries, Inc</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">Master Class Mondays</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">Covenant Christian Center of Canton, Inc.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">The Prophetic Forecast</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">Mechizedek Global Network</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/10 text-amber-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<p className="text-base font-medium text-white">The Generational Wealth Summit</p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative mx-auto max-w-md lg:max-w-none">
<div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-amber-300/20 via-transparent to-white/10 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
<img alt="Speaker on stage at a podium" className="h-full w-full object-cover" src="https://i.postimg.cc/jjQ4V1Jx/speaking-photo.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-white/10 bg-gradient-to-b from-stone-900 to-stone-950">
<div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
<i className="h-4 w-4" data-lucide="calendar-check-2"></i>
            Ready to Invite Us?
          </div>
<h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bring a message of faith, ownership, and legacy to your audience
          </h2>
<p className="mx-auto mt-5 max-w-3xl text-lg font-normal leading-8 text-stone-300 sm:text-xl">
            Whether you are hosting a conference, church gathering, leadership event, or wealth-building experience, The HEIRS Movement is available to serve with a message that equips and inspires.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-medium text-stone-950 transition hover:bg-amber-200" href="https://theheirsmovement.com/">
              Visit Main Website
            </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10" href="#top">
              Back to Top
            </a>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
