import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }

        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');

        if (toggle && menu) {
          toggle.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) {
              menu.classList.remove('hidden');
            } else {
              menu.classList.add('hidden');
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-black/5 bg-gradient-to-r from-[#ffb36b] via-[#ff7f6c] to-[#ffef9f]">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10">
<div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#111827] to-[#4b5563]"></div>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-900" style={{fontWeight: '500'}}>Recordbase</span>
</div>
<nav className="hidden items-center gap-6 text-sm sm:flex">
<a className="text-neutral-900/70 hover:text-neutral-900" href="#features">Features</a>
<a className="text-neutral-900/70 hover:text-neutral-900" href="#how-it-works">How it works</a>
<a className="text-neutral-900/70 hover:text-neutral-900" href="#testimonials">Stories</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm shadow-black/40 hover:bg-black" style={{fontWeight: '500'}}>
              Start recording
            </button>
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-neutral-900 shadow-sm shadow-black/10 backdrop-blur sm:hidden" id="mobile-menu-toggle">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden border-t border-black/5 bg-white" id="mobile-menu">
<div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-neutral-50 overflow-hidden shadow-sm shadow-black/10 border border-black/5">
<div className="aspect-video w-full bg-gradient-to-br from-[#e0f2fe] via-[#f5e7ff] to-[#fee2e2]">
<img alt="Navigation preview" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-4 py-4 space-y-3">
<p className="text-base tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                  Move between your recording spaces in one tap.
                </p>
<div className="flex flex-col gap-2 text-sm text-neutral-700">
<button className="flex items-center justify-between rounded-xl bg-white px-3 py-2 border border-black/5">
<span className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900/90 text-white text-xs font-medium" style={{fontWeight: '500'}}>
                        R
                      </span>
<span>Dashboard</span>
</span>
<span className="text-xs text-neutral-500">Home</span>
</button>
<button className="flex items-center justify-between rounded-xl bg-white px-3 py-2 border border-black/5">
<span className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ffb36b]/80 text-neutral-900 text-xs font-medium" style={{fontWeight: '500'}}>
                        C
                      </span>
<span>Capture</span>
</span>
<span className="text-xs text-neutral-500">New recording</span>
</button>
<button className="flex items-center justify-between rounded-xl bg-white px-3 py-2 border border-black/5">
<span className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6366f1]/90 text-white text-xs font-medium" style={{fontWeight: '500'}}>
                        L
                      </span>
<span>Library</span>
</span>
<span className="text-xs text-neutral-500">All videos</span>
</button>
</div>
</div>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-black/5 bg-gradient-to-b from-[#fff7eb] via-[#fdfaf5] to-[#f8ffe4]">
<div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">

<div className="w-full max-w-3xl rounded-3xl bg-white shadow-[0_18px_65px_rgba(15,23,42,0.25)] overflow-hidden border border-black/5">
<div className="relative aspect-video w-full bg-gradient-to-br from-[#e0f2fe] via-[#f5e7ff] to-[#fee2e2]">
<img alt="Recordbase UI preview" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute left-1/2 top-1/2 w-11/12 max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/95 shadow-lg shadow-black/20 backdrop-blur px-4 py-3 sm:px-5 sm:py-4">
<div className="flex items-center justify-between gap-3">
<p className="text-sm leading-snug text-neutral-900">
                      Capture a tab, window, or full desktop. We’ll handle the clean cuts and sharing.
                    </p>
<span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm">
<svg className="lucide lucide-mouse-pointer-2 h-4 w-4" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-neutral-900 text-white px-3 py-1 shadow-sm shadow-black/30">
<span className="h-2 w-2 rounded-full bg-[#22c55e]"></span>
                      Start recording
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]"></span>
                      Smart cuts
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-[#f97316]"></span>
                      Share link
                    </button>
</div>
</div>
</div>
<div className="px-5 py-6 sm:px-7 sm:py-8">
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 text-center" style={{fontFamily: '\'Space Grotesk\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif', fontWeight: '500'}}>
                  Capture anything.
                </h1>
<p className="mt-3 text-base leading-relaxed text-neutral-700 text-center max-w-2xl mx-auto">
                  One shortcut to record, clean up, and share your screen in a link that feels like a conversation.
                </p>
<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-black/40 hover:bg-black" style={{fontWeight: '500'}}>
                    Start recording
                    <svg className="lucide lucide-flashlight h-4 w-4" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-medium text-neutral-900 shadow-sm shadow-black/10 backdrop-blur hover:bg-neutral-50" style={{fontWeight: '500'}}>
                    Watch 30s demo
                    <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600">
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"></span>
<span>No install, works in your browser.</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]"></span>
<span>AI trims silences and distractions.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-transparent" id="features">
<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-3">

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#e0f2fe] via-[#f5e7ff] to-[#fee2e2]">
<img alt="Instant capture" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-3">
<h3 className="text-xl tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    Record in one click
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Tap the shortcut, choose what to show, and start talking. The rest is automatic.
                  </p>
</div>
</article>

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#e9d5ff] via-[#fee2e2] to-[#cffafe]">
<img alt="Smart editing timeline" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-3">
<h3 className="text-xl tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    Clean, smart edits
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Silence, hesitations, and mistakes are suggested as cuts so your video feels intentional.
                  </p>
</div>
</article>

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#dcfce7] via-[#e0f2fe] to-[#fef3c7]">
<img alt="Shareable page" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-3">
<h3 className="text-xl tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    Shareable in a link
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Every recording gets a page with comments, reactions, and playback controls built in.
                  </p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-transparent" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-3">

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#e0f2fe] via-[#fef3c7] to-[#fee2e2]">
<img alt="Capture step" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-2">
<h3 className="text-lg tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    1 · Capture
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Start from the browser and pick screen, window, or tab plus camera.
                  </p>
</div>
</article>

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#e9d5ff] via-[#cffafe] to-[#fee2e2]">
<img alt="Polish step" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-2">
<h3 className="text-lg tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    2 · Polish
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Trim, blur, and highlight in a simple timeline that suggests smart edits.
                  </p>
</div>
</article>

<article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm shadow-black/10">
<div className="aspect-video w-full bg-gradient-to-br from-[#dcfce7] via-[#e0f2fe] to-[#f5e7ff]">
<img alt="Share step" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="px-5 py-6 sm:px-6 sm:py-7 space-y-2">
<h3 className="text-lg tracking-tight text-neutral-900" style={{fontWeight: '500'}}>
                    3 · Share
                  </h3>
<p className="text-base leading-relaxed text-neutral-700">
                    Send a single link with comments, reactions, and viewer analytics.
                  </p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-transparent" id="testimonials">
<div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
<div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-black/10 border border-black/5">
<div className="aspect-video w-full bg-gradient-to-br from-[#e0f2fe] via-[#f5e7ff] to-[#dcfce7]">
<img alt="Team using Recordbase" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="px-6 py-7 sm:px-8 sm:py-9 text-center space-y-4">
<p className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontWeight: '400'}}>
                  “We send a quick Recordbase link instead of booking another call.”
                </p>
<p className="text-base text-neutral-600">
                  Async updates, walkthroughs, and feedback that feel personal without sharing your calendar.
                </p>
<button className="mt-2 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-black/40 hover:bg-black" style={{fontWeight: '500'}}>
                  Start recording now
                  <svg className="lucide lucide-flashlight h-4 w-4" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-black/5 bg-white">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="text-neutral-900">Recordbase</span>
<span>·</span>
<span>Capture anything.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-800" href="#">Privacy</a>
<a className="hover:text-neutral-800" href="#">Terms</a>
<a className="hover:text-neutral-800" href="#">Status</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
