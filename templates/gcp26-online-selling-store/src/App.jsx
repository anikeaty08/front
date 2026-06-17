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
      

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] h-[50vh] w-[50vw] rounded-full bg-blue-600/10 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] h-[50vh] w-[50vw] rounded-full bg-purple-600/10 blur-[120px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="text-lg font-semibold tracking-tight text-white uppercase">
                UGCP<span className="text-blue-500">26</span>
</div>
<a className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20" href="#pricing">
                Get Access
            </a>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center pt-32 pb-24">

<section className="flex w-full max-w-7xl flex-col items-center px-6 text-center">

<div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300">4.9/5 rating</span>
</div>
<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                Level Up Your <br className="hidden sm:block"/>
<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gaming Brand</span> Instantly
            </h1>
<p className="mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
                Everything you need to build a professional gaming presence — overlays, thumbnails, branding, and more.
            </p>
<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-200" href="#pricing">
                    Get Instant Access
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 backdrop-blur-md" href="#includes">
                    View What’s Included
                </a>
</div>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="h-8 w-8 rounded-full border-2 border-neutral-950 bg-neutral-800"></div>
<div className="h-8 w-8 rounded-full border-2 border-neutral-950 bg-neutral-700"></div>
<div className="h-8 w-8 rounded-full border-2 border-neutral-950 bg-neutral-600"></div>
<div className="h-8 w-8 rounded-full border-2 border-neutral-950 bg-neutral-500"></div>
</div>
<p className="text-sm text-neutral-400">
<span className="font-medium text-white">500+</span> creators using this pack
                </p>
</div>

<div className="relative mt-20 h-64 w-full max-w-5xl sm:h-96">

<div className="absolute left-1/2 top-0 z-20 h-full w-4/5 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 shadow-2xl backdrop-blur-xl sm:w-2/3">
<div className="flex h-8 w-full items-center border-b border-white/5 bg-white/5 px-4">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
</div>
</div>
<div className="p-6">
<div className="h-8 w-1/3 rounded-md bg-white/10"></div>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="h-32 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-white/5"></div>
<div className="h-32 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute -left-4 top-12 z-10 h-3/4 w-1/2 -rotate-6 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-xl backdrop-blur-md sm:left-4 sm:w-1/3">
<div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
</div>

<div className="absolute -right-4 top-16 z-10 h-2/3 w-1/2 rotate-3 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-xl backdrop-blur-md sm:right-4 sm:w-1/3">
<div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50"></div>
</div>
</div>
</section>

<section className="mt-32 w-full max-w-7xl px-6" id="includes">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need. <br className="hidden sm:block"/>Nothing you don't.</h2>
<p className="mt-4 text-base text-neutral-400">A comprehensive toolkit designed specifically for modern content creators.</p>
</div>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">50+ 4K Wallpapers</h3>
<p className="text-sm text-neutral-400">High-resolution gaming backgrounds for your desktop, stream breaks, or video backdrops.</p>
</div>

<div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">20 Overlay Templates</h3>
<p className="text-sm text-neutral-400">Professional stream overlays including starting soon, BRB, chatting, and gameplay screens.</p>
</div>

<div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">15 Thumbnail Templates</h3>
<p className="text-sm text-neutral-400">Click-worthy YouTube thumbnail designs proven to increase your click-through rate.</p>
</div>

<div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
<iconify-icon icon="solar:discord-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">10 Discord Templates</h3>
<p className="text-sm text-neutral-400">Server banners, role icons, and community branding assets for your private community.</p>
</div>

<div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">25 Social Media Posts</h3>
<p className="text-sm text-neutral-400">Ready-to-use templates for Twitter, Instagram, and TikTok to keep your audience engaged.</p>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition-colors hover:border-white/10">
<div className="absolute right-0 top-0 rounded-bl-xl bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">Bonus</div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Minimal Esports Logos</h3>
<p className="text-sm text-neutral-400">A curated collection of clean, modern mascot and typography logos to kickstart your identity.</p>
</div>
</div>
</section>

<section className="mt-32 w-full max-w-4xl px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Work smarter, not harder.</h2>
<p className="mt-4 text-base text-neutral-400">See why top creators choose our templates over doing it from scratch.</p>
</div>
<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
<table className="w-full text-left text-sm text-neutral-300">
<thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-neutral-400">
<tr>
<th className="px-6 py-4 font-medium" scope="col">Feature</th>
<th className="px-6 py-4 font-medium text-white" scope="col">This Pack</th>
<th className="px-6 py-4 font-medium" scope="col">DIY / Agency</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 font-medium text-white">Ready Templates</td>
<td className="px-6 py-4">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
</td>
<td className="px-6 py-4">
<iconify-icon className="text-neutral-600" icon="solar:close-circle-linear" width="20"></iconify-icon>
</td>
</tr>
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 font-medium text-white">Professional Quality</td>
<td className="px-6 py-4">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
</td>
<td className="px-6 py-4">
<iconify-icon className="text-neutral-600" icon="solar:close-circle-linear" width="20"></iconify-icon>
</td>
</tr>
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 font-medium text-white">Saves Time</td>
<td className="px-6 py-4">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
</td>
<td className="px-6 py-4">
<iconify-icon className="text-neutral-600" icon="solar:close-circle-linear" width="20"></iconify-icon>
</td>
</tr>
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 font-medium text-white">One-Time Cost</td>
<td className="px-6 py-4">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
</td>
<td className="px-6 py-4">
<iconify-icon className="text-neutral-600" icon="solar:close-circle-linear" width="20"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mt-32 w-full max-w-6xl px-6" id="pricing">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing.</h2>
<p className="mt-4 text-base text-neutral-400">Choose the tier that best fits your creator journey.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:items-center">

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-white">
                        $9
                    </div>
<p className="mt-2 text-sm text-neutral-400">Perfect for new creators getting started.</p>
<ul className="mt-8 mb-8 space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Full digital pack
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Lifetime access
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Instant download
                        </li>
</ul>
<button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                        Get Starter
                    </button>
</div>

<div className="relative rounded-3xl border border-blue-500/30 bg-neutral-900 p-8 shadow-2xl md:scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        Most Popular
                    </div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-white">
                        $19
                    </div>
<p className="mt-2 text-sm text-neutral-400">Everything you need to grow your channel.</p>
<ul className="mt-8 mb-8 space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Everything in Starter
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Bonus 10 premium overlays
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Future updates included
                        </li>
</ul>
<button className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        Get Pro Now
                    </button>
</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
<h3 className="text-lg font-medium text-white">Creator Elite</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-white">
                        $39
                    </div>
<p className="mt-2 text-sm text-neutral-400">For serious creators building a brand.</p>
<ul className="mt-8 mb-8 space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Everything in Pro
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Private Discord access
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Monthly bonus templates
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Early access to new releases
                        </li>
</ul>
<button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                        Get Elite
                    </button>
</div>
</div>
</section>

<section className="mt-24 w-full max-w-5xl px-6 border-y border-white/5 py-12">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="flex flex-col items-center text-center">
<iconify-icon className="mb-3 text-neutral-500" icon="solar:lock-keyhole-linear" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-white">Secure Payment</h4>
<p className="mt-1 text-xs text-neutral-400">Processed by Stripe/Polar</p>
</div>
<div className="flex flex-col items-center text-center">
<iconify-icon className="mb-3 text-neutral-500" icon="solar:box-linear" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-white">Instant Download</h4>
<p className="mt-1 text-xs text-neutral-400">Access files immediately</p>
</div>
<div className="flex flex-col items-center text-center">
<iconify-icon className="mb-3 text-neutral-500" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-white">7-Day Refund</h4>
<p className="mt-1 text-xs text-neutral-400">Money-back guarantee</p>
</div>
<div className="flex flex-col items-center text-center">
<iconify-icon className="mb-3 text-neutral-500" icon="solar:help-linear" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-white">24/7 Support</h4>
<p className="mt-1 text-xs text-neutral-400">Email assistance anytime</p>
</div>
</div>
</section>

<section className="mt-32 w-full max-w-3xl px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white">Frequently Asked Questions</h2>
</div>
<div className="divide-y divide-white/5">
<details className="group py-5" open="">
<summary className="flex cursor-pointer items-center justify-between font-medium text-white outline-none">
                        Is this beginner friendly?
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 group-open:rotate-180">
<iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        Absolutely. All templates are organized with clear layer names and come with a quick-start guide. You don't need to be a design expert to customize them to fit your brand.
                    </p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-white outline-none">
                        What software do I need?
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 group-open:rotate-180">
<iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        The templates are provided in PSD (Photoshop) format for maximum editability, along with standard PNGs that can be used directly in OBS, Streamlabs, or Premiere Pro without any editing software required.
                    </p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-white outline-none">
                        Is it an instant download?
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 group-open:rotate-180">
<iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        Yes! As soon as your payment is processed securely via Stripe, you will be redirected to a download page and receive an email with your unique download link instantly.
                    </p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-white outline-none">
                        Do I get lifetime access?
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 group-open:rotate-180">
<iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        Yes, one payment gives you lifetime access to the files. If you purchase the Pro or Elite plans, you will also receive all future updates and additions to the pack for free forever.
                    </p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-white outline-none">
                        Can I use it for commercial projects?
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 group-open:rotate-180">
<iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        Yes. You are free to use these assets for your own monetized YouTube channels, Twitch streams, and social media. Reselling the raw templates is the only restriction.
                    </p>
</details>
</div>
</section>

<section className="mt-32 w-full max-w-5xl px-6">
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 px-6 py-20 text-center backdrop-blur-xl sm:px-16">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
<div className="relative z-10 mx-auto max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Start Building Your <br className="hidden sm:block"/>Gaming Empire Today
                    </h2>
<p className="mt-6 text-base text-neutral-400">
                        Join 500+ creators who have already leveled up their visual identity.
                    </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-neutral-950 transition-all hover:scale-105 hover:bg-neutral-100 shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="#pricing">
                            Download Now
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-4 text-xs font-medium text-pink-400 uppercase tracking-widest">
                            Limited launch pricing – Price increases soon.
                        </p>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 text-center text-sm text-neutral-600">
<p>© 2026 UGCP. All rights reserved.</p>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Get 10% Off</h4>
<p className="text-xs text-neutral-400">Join our newsletter for a discount code.</p>
</div>
<button className="ml-auto rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20">
            Subscribe
        </button>
</div>

    </>
  );
}
