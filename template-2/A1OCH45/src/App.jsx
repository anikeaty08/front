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
      
    // Render lucide icons with stroke-width 1.5
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Simple form handlers (no external requests)
    function handleForm(formId, noteId) {
      const form = document.getElementById(formId);
      const emailInput = form.querySelector('input[type="email"]');
      const note = noteId ? document.getElementById(noteId) : null;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = (emailInput.value || '').trim();
        if (!email) return;
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.classList.add('opacity-80');
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-opacity="0.2"></circle><path d="M22 12a10 10 0 0 1-10 10" /></svg> Processing...';
        setTimeout(() => {
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg> You’re in!';
          if (note) note.textContent = 'Welcome to the list — we’ll be in touch soon.';
        }, 900);
      });
    }

    handleForm('hero-form');
    handleForm('cta-form', 'cta-note');

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-28 -right-24 h-80 w-80 rounded-full blur-3xl bg-fuchsia-400/20"></div>
<div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-pink-500/10 blur-[80px]" style={{}}></div>
</div>

<header className="sticky top-0 z-40 border-b backdrop-blur-xl border-black/5 bg-zinc-50/70" style={{}}>
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="grid h-8 w-8 place-items-center rounded-md ring-1 transition group-hover:bg-white/10 bg-black/5 ring-black/10">
<span className="text-xs font-semibold tracking-tight">R</span>
</div>
<span className="text-lg font-semibold tracking-tight">Reul</span>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm transition text-zinc-700 hover:text-black" href="#features" style={{}}>Features</a>
<a className="text-sm transition text-zinc-700 hover:text-black" href="#how" style={{}}>How it helps</a>
<a className="text-sm transition text-zinc-700 hover:text-black" href="#testimonials" style={{}}>Stories</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden rounded-full px-4 py-2 text-sm ring-1 transition md:block text-zinc-700 ring-black/10 hover:text-black hover:ring-black/20" href="#waitlist" style={{}}>Learn more</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight active:scale-[.98] transition will-change-transform bg-black text-zinc-100 hover:bg-zinc-900" href="#waitlist" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Join the waitlist
        </a>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl md:pt-24 mr-auto ml-auto pt-16 pr-6 pl-6">
<div className="grid items-center gap-12 md:grid-cols-2">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 bg-black/5 text-zinc-700 ring-black/10" style={{}}>
<svg className="lucide lucide-mic h-3.5 w-3.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
            Voice & text journaling, built for women
          </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Your voice belongs on the page.
          </h1>
<p className="text-base leading-relaxed text-zinc-700" style={{}}>
            Reul is a private journaling studio—speak or type entries, track your mood and gratitude, build a vision board, and ground your days with devotionals, scriptures, prayers, and affirmations.
          </p>
<div className="flex flex-col gap-3 sm:flex-row">
<form className="flex w-full flex-col gap-3 sm:flex-row" id="hero-form">
<div className="flex-1">
<label className="sr-only" htmlFor="email-hero">Email</label>
<input className="w-full rounded-full px-4 py-3 text-sm placeholder:text-zinc-400 ring-1 focus:outline-none focus:ring-2 focus:ring-rose-500/60 transition bg-black/5 ring-black/10" id="email-hero" name="email" placeholder="Enter your email" required style={{}} type="email" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-5 py-3 text-sm font-medium tracking-tight active:scale-[.98] transition text-black hover:bg-rose-600" style={{}} type="submit">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Join the waitlist
              </button>
</form>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-600" style={{}}>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg><span>Private by design</span>
</div>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span>No spam, ever</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -right-10 -top-10 hidden h-28 w-28 rotate-6 rounded-2xl p-3 ring-1 md:block bg-black/5 ring-black/10">
<div className="flex h-full flex-col justify-between rounded-xl p-3 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="text-[10px] text-zinc-600" style={{}}>Mood</div>
<div className="text-[10px] text-emerald-600">Today</div>
</div>
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-600/90"></span>
<span className="text-[10px] text-zinc-700" style={{}}>Grateful</span>
</div>
</div>
</div>
<div className="mx-auto max-w-sm rounded-[28px] p-2 ring-1 backdrop-blur-xl bg-zinc-100/40 ring-black/10" style={{}}>
<div className="rounded-[22px] p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1960&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/10"></div>
<div className="text-sm">
<div className="font-medium">Reul Journal</div>
<div className="text-[11px] text-zinc-600" style={{}}>Private • synced</div>
</div>
</div>
<div className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] ring-1 bg-black/5 text-zinc-700 ring-black/10" style={{}}>
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Today
                </div>
</div>
<div className="mt-4 space-y-3">
<div className="rounded-2xl p-3 ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-2 text-[11px] text-zinc-600" style={{}}>
<svg className="lucide lucide-mic h-3.5 w-3.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                    Recording
                  </div>
<div className="mt-2 flex items-end gap-1">
<span className="h-6 w-1 rounded-full bg-rose-600/80" style={{}}></span>
<span className="h-4 w-1 rounded-full bg-rose-600/60" style={{}}></span>
<span className="h-8 w-1 rounded-full bg-rose-600/90" style={{}}></span>
<span className="h-5 w-1 rounded-full bg-rose-600/70" style={{}}></span>
<span className="h-7 w-1 rounded-full bg-rose-600/80" style={{}}></span>
<span className="h-3 w-1 rounded-full bg-rose-600/50" style={{}}></span>
<span className="h-6 w-1 rounded-full bg-rose-600/80" style={{}}></span>
<span className="h-4 w-1 rounded-full bg-rose-600/60" style={{}}></span>
<span className="h-7 w-1 rounded-full bg-rose-600/80" style={{}}></span>
<span className="h-5 w-1 rounded-full bg-rose-600/70" style={{}}></span>
<span className="h-8 w-1 rounded-full bg-rose-600/90" style={{}}></span>
<span className="h-4 w-1 rounded-full bg-rose-600/60" style={{}}></span>
</div>
<div className="mt-2 text-xs text-zinc-700" style={{}}>“Walked by the river today and finally felt my shoulders drop...”</div>
</div>
<div className="rounded-2xl p-3 ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-2 text-[11px] text-zinc-600" style={{}}>
<svg className="lucide lucide-type h-3.5 w-3.5" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                    Typed Entry
                  </div>
<p className="mt-2 text-sm text-zinc-800" style={{}}>I’m grateful for slow mornings, warm coffee, and the tiny ways I’m growing braver.</p>
</div>
<div className="flex items-center justify-between rounded-2xl p-3 ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-2 text-[11px] text-zinc-600" style={{}}>
<svg className="lucide lucide-bookmark h-3.5 w-3.5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg> Devotional
                  </div>
<button className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1.5 text-[11px] font-medium transition text-black hover:bg-rose-600" style={{}}>
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Start
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center p-3 ring-1 ring-black/10">
<span className="rounded-md px-2 py-1 text-[10px] ring-1 bg-zinc-100/60 text-zinc-800 ring-black/10" style={{}}>Vision</span>
</div>
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center p-3 ring-1 ring-black/10"></div>
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center p-3 ring-1 ring-black/10"></div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-8 hidden w-56 rounded-2xl p-3 ring-1 md:block bg-black/5 ring-black/10">
<div className="text-[11px] text-zinc-600" style={{}}>Affirmation</div>
<div className="mt-1 text-sm text-zinc-800" style={{}}>I choose peace over perfection.</div>
</div>
</div>
</div>

<div className="mt-16 grid gap-3 sm:grid-cols-3">
<div className="rounded-xl border p-3 text-sm border-black/5 bg-black/5 text-zinc-700" style={{}}>
          Made for women’s wellness—gentle, guided, grounding.
        </div>
<div className="rounded-xl border p-3 text-sm border-black/5 bg-black/5 text-zinc-700" style={{}}>
          Own your story—no feeds, no noise, just you and the page.
        </div>
<div className="rounded-xl border p-3 text-sm border-black/5 bg-black/5 text-zinc-700" style={{}}>
          Encryption and local-first options to keep entries private.
        </div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to process and grow</h2>
<p className="mt-3 text-zinc-700" style={{}}>Capture, reflect, and move forward—one honest entry at a time.</p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-mic h-5 w-5 text-fuchsia-600" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Voice & text journaling</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Hands-free or hands-on. Capture thoughts in seconds with crystal-clear transcripts.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-smile h-5 w-5 text-emerald-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Mood tracker</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Name it, notice it, nurture it. See patterns and give yourself grace.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-heart h-5 w-5 text-rose-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Gratitude tracker</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Collect the little wins and anchor your day in thanks.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-calendar h-5 w-5 text-amber-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Calendar view</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Zoom out and see your story across days, weeks, and seasons.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-image h-5 w-5 text-fuchsia-600" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Vision board</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Pin images and words that point you toward the future you’re building.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-book-open h-5 w-5 text-pink-600" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Devotional</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Guided reflections to center your soul and steady your focus.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-bookmark h-5 w-5 text-violet-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Daily scriptures & prayers</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Fresh words each day—read, reflect, and pray inside the app.</p>
</div>

<div className="group rounded-2xl border p-5 transition border-black/5 bg-black/5 hover:border-black/10 hover:bg-black/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-zinc-100 ring-black/10" style={{}}>
<svg className="lucide lucide-quote h-5 w-5 text-emerald-600" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Affirmations</h3>
<p className="mt-2 text-sm text-zinc-700" style={{}}>Speak truth over your life with daily, customizable affirmations.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="how">
<div className="mx-auto max-w-7xl px-6 pb-8">
<div className="grid items-start gap-10 lg:grid-cols-2">
<div className="rounded-2xl border p-6 border-black/5 bg-black/5">
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-black/5 text-zinc-700 ring-black/10" style={{}}>
<svg className="lucide lucide-feather h-3.5 w-3.5" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Go deeper, gently
          </div>
<h3 className="mt-3 text-2xl font-semibold tracking-tight">Designed for the way you process life</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-700" style={{}}>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Speak freely and let Reul turn voice into beautifully formatted entries.
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Pair mood and gratitude to see what actually lifts you.
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Devotionals, scriptures, and prayer prompts when you want a nudge.
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              A vision board to remind you where you’re headed.
            </li>
</ul>
</div>
<div className="rounded-2xl border p-6 border-black/5 bg-black/5">
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-black/5 text-zinc-700 ring-black/10" style={{}}>
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Your space, protected
          </div>
<h3 className="mt-3 text-2xl font-semibold tracking-tight">Private by default, secure by design</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-700" style={{}}>
<li className="flex items-start gap-3">
<svg className="lucide lucide-lock mt-0.5 h-4 w-4 text-rose-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              End-to-end encryption and local-first options for sensitive entries.
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              No ads, no feeds, no doomscrolling—just focus.
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Export anytime. It’s your story, you own it.
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative" id="testimonials">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">“Journaling finally fits my life.”</h2>
<p className="mt-3 text-zinc-700" style={{}}>Early users share how Reul helps them slow down and show up.</p>
</div>
<div className="mt-10 grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border p-5 border-black/5 bg-black/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/10"></div>
<div>
<div className="text-sm font-medium">Naya</div>
<div className="text-[11px] text-zinc-600" style={{}}>Designer</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-700" style={{}}>I talk out loud on my walks and Reul turns it into beautiful pages. The devotional nudges are gentle and timely.</p>
</div>
<div className="rounded-2xl border p-5 border-black/5 bg-black/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[url('https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/10"></div>
<div>
<div className="text-sm font-medium">Ari</div>
<div className="text-[11px] text-zinc-600" style={{}}>Founder</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-700" style={{}}>The mood + gratitude combo helped me see what actually lifts me. I look forward to it at night.</p>
</div>
<div className="rounded-2xl border p-5 border-black/5 bg-black/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[url('https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1946&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/10"></div>
<div>
<div className="text-sm font-medium">Lena</div>
<div className="text-[11px] text-zinc-600" style={{}}>Teacher</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-700" style={{}}>I’m not consistent with paper journals. Speaking entries made it stick. The vision board is a daily reminder.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="waitlist">
<div className="mx-auto max-w-7xl px-6 pb-24">
<div className="overflow-hidden rounded-3xl border bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 ring-1 border-black/5 ring-black/10">
<div className="grid items-center gap-8 md:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-black/5 text-zinc-700 ring-black/10" style={{}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Coming soon
            </div>
<h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Journal deeply. Speak freely.</h3>
<p className="mt-3 text-sm text-zinc-700" style={{}}>Be first to try Reul. We’ll invite waitlist members in waves and listen closely to your feedback.</p>
<form className="mt-5 flex flex-col gap-3 sm:flex-row" id="cta-form">
<div className="flex-1">
<label className="sr-only" htmlFor="email-cta">Email</label>
<input className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-zinc-400 ring-1 focus:outline-none focus:ring-2 focus:ring-rose-500/60 transition bg-black/5 ring-black/10" id="email-cta" name="email" placeholder="you@example.com" required style={{}} type="email" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium tracking-tight active:scale-[.98] transition bg-black text-zinc-100 hover:bg-zinc-900" style={{}} type="submit">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Join the waitlist
              </button>
</form>
<div className="mt-3 text-xs text-zinc-600" id="cta-note" style={{}}>No spam. Unsubscribe anytime.</div>
</div>
<div className="relative">
<div className="rounded-2xl border p-4 border-black/5 bg-black/5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Daily Scripture</div>
<div className="text-[11px] text-zinc-600" style={{}}>Tomorrow 7:00 AM</div>
</div>
<p className="mt-2 text-sm text-zinc-700" style={{}}>“The steadfast love never ceases; mercies new every morning.”</p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center p-4 ring-1 ring-black/10"></div>
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center p-4 ring-1 ring-black/10"></div>
<div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1529218402470-5dec8fea076c?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center p-4 ring-1 ring-black/10"></div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-zinc-700" style={{}}>
<svg className="lucide lucide-heart h-4 w-4 text-rose-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Gratitude today
                </div>
<button className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-medium transition text-black hover:bg-rose-600" style={{}}>
<svg className="lucide lucide-feather h-4 w-4" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Quick entry
                </button>
</div>
</div>
<div className="pointer-events-none absolute -right-3 -top-3 hidden rounded-xl px-3 py-1.5 text-[11px] ring-1 md:block bg-emerald-600/20 text-emerald-800 ring-emerald-600/30">
              1,200+ on the waitlist
            </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-black/5">
<div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="grid h-7 w-7 place-items-center rounded-md ring-1 bg-black/5 ring-black/10">
<span className="text-[11px] font-semibold tracking-tight">R</span>
</div>
<span className="text-base font-semibold tracking-tight">Reul</span>
</div>
<p className="text-sm text-zinc-600" style={{}}>A gentle space to speak, write, and grow—on your terms.</p>
</div>
<div className="flex items-center justify-start gap-6 md:justify-end">
<a className="text-sm transition text-zinc-700 hover:text-black" href="#features" style={{}}>Features</a>
<a className="text-sm transition text-zinc-700 hover:text-black" href="#waitlist" style={{}}>Waitlist</a>
<a className="text-sm transition text-zinc-700 hover:text-black" href="#" style={{}}>Privacy</a>
<a className="text-sm transition text-zinc-700 hover:text-black" href="#" style={{}}>Terms</a>
</div>
<div className="md:col-span-2 flex items-center justify-between text-xs text-zinc-500" style={{}}>
<span>© <span id="year">2025</span> Reul</span>
<span>Built with care. Journaling, reimagined.</span>
</div>
</div>
</footer>


    </>
  );
}
