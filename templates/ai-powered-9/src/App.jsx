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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(40% 40% at 50% 50%, #60a5fa 0%, rgba(96,165,250,0) 70%)'}}></div>
<div className="absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(40% 40% at 50% 50%, #34d399 0%, rgba(52,211,153,0) 70%)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between gap-4 py-4">
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 grid place-items-center rounded-md bg-white text-neutral-900 text-xs font-semibold tracking-tight">F</div>
<span className="text-[15px] tracking-tight font-medium text-white/90">FACTR</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#how">How it works</a>
<a className="hover:text-white transition-colors" href="#sample">Sample report</a>
<a className="hover:text-white transition-colors" href="#trust">Security</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium tracking-tight bg-white text-neutral-900 hover:bg-neutral-100 outline-none ring-1 ring-white/10 hover:ring-white/20 transition" href="#waitlist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            Join waitlist
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 outline-none transition">
<svg className="h-5 w-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>
<div className="h-px bg-white/10"></div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-14">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Private beta now open
          </div>
<h1 className="mt-5 text-4xl md:text-6xl tracking-tight font-semibold text-white">
            Send a link. Get the facts.
          </h1>
<p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            FACTR is an AI agent that verifies suspicious news you get on WhatsApp, Instagram, Telegram, or TikTok and returns a concise, source-backed report—straight to you.
          </p>

<div className="mt-6 flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
<div className="h-1.5 w-1.5 rounded-full bg-[#25D366]"></div> WhatsApp
            </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
<div className="h-1.5 w-1.5 rounded-full bg-[#E4405F]"></div> Instagram
            </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
<div className="h-1.5 w-1.5 rounded-full bg-[#229ED9]"></div> Telegram
            </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> TikTok
            </div>
</div>

<div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 md:p-5" id="waitlist">
<form action="#" className="grid gap-3" method="POST" onsubmit="event.preventDefault(); document.getElementById('wl-success').classList.remove('hidden'); this.reset();">
<div className="grid md:grid-cols-2 gap-3">
<div className="group">
<label className="text-[12px] text-neutral-300">Email</label>
<div className="mt-1.5 relative">
<input className="w-full rounded-md bg-neutral-900/60 text-sm text-white placeholder:text-neutral-500 px-3.5 py-2.5 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20" name="email" placeholder="you@domain.com" required="" type="email"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" opacity=".05"></path><path d="M4 7l8 5 8-5"></path></svg>
</div>
</div>
</div>
<div className="group">
<label className="text-[12px] text-neutral-300">Phone (to receive reports)</label>
<div className="mt-1.5 relative">
<input className="w-full rounded-md bg-neutral-900/60 text-sm text-white placeholder:text-neutral-500 px-3.5 py-2.5 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20" inputmode="tel" name="phone" placeholder="+1 555 000 1234" type="tel"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.57-.25a2 2 0 0 1 2.11.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92z"></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-1">
<span className="text-[12px] text-neutral-300">Preferred platform</span>
<div className="mt-2 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">

<label className="relative cursor-pointer">
<input className="peer sr-only" name="platform" required="" type="radio" value="whatsapp"/>
<div className="flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-white/5 hover:ring-white/20 transition">
<div className="h-2 w-2 rounded-full bg-[#25D366]"></div>
<span className="text-sm text-neutral-200">WhatsApp</span>
<div className="ml-2 hidden peer-checked:inline-flex">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent peer-checked:ring-emerald-400/40"></div>
</label>

<label className="relative cursor-pointer">
<input className="peer sr-only" name="platform" type="radio" value="instagram"/>
<div className="flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-white/5 hover:ring-white/20 transition">
<div className="h-2 w-2 rounded-full bg-[#E4405F]"></div>
<span className="text-sm text-neutral-200">Instagram</span>
<div className="ml-2 hidden peer-checked:inline-flex">
<svg className="h-4 w-4 text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent peer-checked:ring-rose-400/40"></div>
</label>

<label className="relative cursor-pointer">
<input className="peer sr-only" name="platform" type="radio" value="telegram"/>
<div className="flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-white/5 hover:ring-white/20 transition">
<div className="h-2 w-2 rounded-full bg-[#229ED9]"></div>
<span className="text-sm text-neutral-200">Telegram</span>
<div className="ml-2 hidden peer-checked:inline-flex">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent peer-checked:ring-sky-400/40"></div>
</label>

<label className="relative cursor-pointer">
<input className="peer sr-only" name="platform" type="radio" value="tiktok"/>
<div className="flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-white/5 hover:ring-white/20 transition">
<div className="h-2 w-2 rounded-full bg-white"></div>
<span className="text-sm text-neutral-200">TikTok</span>
<div className="ml-2 hidden peer-checked:inline-flex">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent peer-checked:ring-white/40"></div>
</label>
</div>
</div>

<label className="mt-1.5 flex items-start gap-3 select-none cursor-pointer">
<input className="peer sr-only" required="" type="checkbox"/>
<span className="mt-0.5 inline-flex h-4.5 w-4.5 items-center justify-center rounded-[6px] ring-1 ring-white/15 bg-neutral-900/60 peer-focus:ring-white/25 peer-checked:bg-emerald-500/20 peer-checked:ring-emerald-400/40 transition">
<svg className="h-3.5 w-3.5 text-emerald-400 opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<span className="text-xs text-neutral-400 leading-relaxed">I agree to receive messages for verification and accept the Privacy Policy &amp; Terms.</span>
</label>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-1.5">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium tracking-tight outline-none ring-1 ring-white/10 hover:bg-neutral-100 hover:ring-white/20 transition" type="submit">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7"></path></svg>
                  Join the waitlist
                </button>
<p className="text-xs text-neutral-400">Free during beta. No spam—unsubscribe anytime.</p>
</div>
<div className="hidden rounded-md border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-emerald-300 text-sm" id="wl-success">
                Thanks! You’re on the list. We’ll notify you as soon as your access is ready.
              </div>
</form>
</div>

<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-neutral-400">2,400+ early users are already getting reliable reports.</p>
</div>
</div>

<div className="lg:pl-6">
<div className="relative mx-auto max-w-md">
<div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-30"></div>
<div className="relative rounded-[28px] border border-white/10 bg-neutral-900 p-4">
<div className="rounded-2xl border border-white/10 bg-neutral-950 p-4">

<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-white text-neutral-900 grid place-items-center text-xs font-semibold">Y</div>
<div className="max-w-[75%] rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200">
                      Is this true? "New rule bans cash withdrawals next week."
                    </div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="max-w-[75%] rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-2 text-sm text-emerald-200">
                      Report requested. Analyzing sources...
                    </div>
<div className="h-8 w-8 rounded-full bg-emerald-400/20 grid place-items-center">
<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M6 12h12"></path></svg>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-3" id="sample">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm">
<svg className="h-4.5 w-4.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5l-4 4V4a2 2 0 0 1 2-2h11"></path></svg>
<span className="text-neutral-200">Fact-check report</span>
</div>
<span className="text-xs text-neutral-400">2 min</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs uppercase tracking-wide text-neutral-400">Verdict</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300 ring-1 ring-emerald-400/30">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                          Mostly False
                        </span>
</div>
<p className="text-sm text-neutral-300">
                        The claim misrepresents a draft policy. The proposed change targets ATM withdrawal limits for specific high-risk accounts and is not a blanket ban.
                      </p>
<div className="flex items-center gap-2">
<span className="text-xs uppercase tracking-wide text-neutral-400">Confidence</span>
<div className="flex items-center gap-1">
<div className="h-1.5 w-16 rounded-full bg-emerald-400/50"></div>
<div className="h-1.5 w-10 rounded-full bg-emerald-400/30"></div>
<div className="h-1.5 w-6 rounded-full bg-white/10"></div>
<span className="text-xs text-neutral-400 ml-2">High</span>
</div>
</div>
<div className="pt-2 border-t border-white/10">
<div className="text-xs text-neutral-400">Sources</div>
<ul className="mt-1 space-y-1.5">
<li className="flex items-center gap-2 text-sm">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5A2.5 2.5 0 0 1 19 6v8l-7 4-7-4V6a2.5 2.5 0 0 1 2.5-2.5h10z"></path></svg>
                            Central Bank draft memo (Sec. 4.2)
                          </li>
<li className="flex items-center gap-2 text-sm">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14l-4-4H5a2 2 0 0 1-2-2z"></path></svg>
                            Reuters explainer on policy scope
                          </li>
<li className="flex items-center gap-2 text-sm">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6"></path><path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"></path></svg>
                            Archived press briefing, 12:00 UTC
                          </li>
</ul>
</div>
</div>
</div>
<p className="text-[11px] text-neutral-500">
                    Tip: Forward any message to our number. We’ll reply with a report.
                  </p>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
<div className="h-px bg-white/10"></div>
</section>

<section className="py-14 md:py-18" id="how">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">How it works</h2>
<p className="mt-2 text-neutral-300 text-base">Three steps from rumor to reality check.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h7"></path></svg>
</div>
<div className="text-sm text-neutral-300">Send the news via your app</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Forward any link, screenshot, or text from WhatsApp, Instagram, Telegram, or TikTok to our number.</p>
<div className="mt-4 flex flex-wrap gap-2 text-[11px]">
<span className="rounded-full px-2 py-1 bg-white/5 ring-1 ring-white/10 text-neutral-300">WhatsApp</span>
<span className="rounded-full px-2 py-1 bg-white/5 ring-1 ring-white/10 text-neutral-300">Instagram</span>
<span className="rounded-full px-2 py-1 bg-white/5 ring-1 ring-white/10 text-neutral-300">Telegram</span>
<span className="rounded-full px-2 py-1 bg-white/5 ring-1 ring-white/10 text-neutral-300">TikTok</span>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.7 0-3 .8-3 1.8 0 1 1.3 1.8 3 1.8s3 .8 3 1.8-1.3 1.8-3 1.8m0-9v.5m0 10.5v.5"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-sm text-neutral-300">Agent verifies and scores</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Our AI agent analyzes claims against authoritative sources, checks citations, and assesses credibility and context.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11l3 3L22 4"></path></svg>
<span>Bias-aware • Multilingual • Source-grounded</span>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H3"></path><path d="M12 3l-7 7 7 7"></path></svg>
</div>
<div className="text-sm text-neutral-300">You get a clear report</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Receive a verdict, confidence level, and links to supporting sources—delivered back on the same app.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-neutral-400">
<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h11"></path></svg>
<span>Average response time: under 3 minutes</span>
</div>
</div>
</div>
</div>
<div className="h-px bg-white/10 mt-8"></div>
</section>

<section className="py-14 md:py-18" id="trust">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h3 className="text-2xl tracking-tight font-semibold text-white">Privacy and integrity first</h3>
<p className="mt-2 text-neutral-300 text-base">We’re built to protect your data and provide transparent, source-backed results.</p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<div className="text-sm text-neutral-300">End-to-end approach</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Sensitive messages are processed with strict access controls and encrypted in transit.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M4.93 4.93l14.14 14.14"></path></svg>
</div>
<div className="text-sm text-neutral-300">Source transparency</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Every verdict links to citations so you can verify the verification.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18"></path><path d="M8 21h8"></path><path d="M7 3v8a5 5 0 0 0 10 0V3"></path></svg>
</div>
<div className="text-sm text-neutral-300">Bias checks</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Multiple-source corroboration reduces single-source bias and improves reliability.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<svg className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5A2.5 2.5 0 0 1 19 6v8l-7 4-7-4V6a2.5 2.5 0 0 1 2.5-2.5h10z"></path></svg>
</div>
<div className="text-sm text-neutral-300">Human review (optional)</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Opt-in to escalate sensitive claims to a human auditor for an extra layer of assurance.</p>
</div>
</div>
</div>
</div>
<div className="h-px bg-white/10 mt-8"></div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 md:p-8">
<div className="grid lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Join the beta and get faster, clearer fact-checks</h3>
<p className="mt-2 text-neutral-300 text-sm">We’re onboarding in batches. Secure your spot now—free during beta.</p>
</div>
<div className="lg:justify-self-end">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium tracking-tight outline-none ring-1 ring-white/10 hover:bg-neutral-100 hover:ring-white/20 transition" href="#waitlist">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              Get early access
            </a>
</div>
</div>
</div>
</div>
<div className="h-px bg-white/10 mt-8"></div>
</section>

<section className="py-14 md:py-18" id="faq">
<div className="mx-auto max-w-5xl px-6">
<h3 className="text-2xl tracking-tight font-semibold text-white">Frequently asked questions</h3>
<div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10">
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
            How do I send content to verify?
            <svg className="h-4.5 w-4.5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-400">Once onboarded, you’ll receive our contact for WhatsApp, Instagram, Telegram, and TikTok. Forward any link, text, or screenshot directly.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
            How long does a report take?
            <svg className="h-4.5 w-4.5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-400">Most reports arrive in under 3 minutes. Complex topics may take a little longer to ensure accuracy and proper citations.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
            What sources do you use?
            <svg className="h-4.5 w-4.5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-400">We use a weighted mix of primary publications, official releases, peer‑reviewed research, and high‑reliability outlets, with source links in every report.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
            Is my data safe?
            <svg className="h-4.5 w-4.5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-400">Yes. We encrypt in transit, minimize retention, and never sell your data. You can request deletion anytime.</p>
</details>
</div>
</div>
</section>

<footer className="pb-12">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-7 w-7 grid place-items-center rounded-md bg-white text-neutral-900 text-xs font-semibold tracking-tight">F</div>
<div>
<div className="text-sm text-neutral-200 tracking-tight">FACTR</div>
<div className="text-xs text-neutral-500">Truth, delivered.</div>
</div>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#waitlist">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            Join
          </a>
</div>
</div>
<div className="mt-6 text-xs text-neutral-500">
        Disclaimer: Reports may include automated analysis. Always consult primary sources and official guidance for critical decisions.
      </div>
</div>
</footer>

    </>
  );
}
