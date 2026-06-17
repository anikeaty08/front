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



{
"@context": "https://schema.org",
"@type": "Movie",
"name": "Final Cut",
"description": "His camera saw the truth. Now he has to develop the lie. A young film student discovers disturbing footage hidden in his late professor's archive.",
"genre": ["Psychological Thriller", "Drama"],
"dateCreated": "2025",
"director": {
"@type": "Person",
"name": "Alex Petrosian"
},
"creator": {
"@type": "Person",
"name": "Alex Petrosian"
},
"productionCompany": {
"@type": "EducationalOrganization",
"name": "USC School of Cinematic Arts"
},
"duration": "PT128M",
"countryOfOrigin": {
"@type": "Country",
"name": "United States"
},
"inLanguage": "en",
"contentRating": "R",
"image": "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/440c2fea-a409-4d32-8a07-1798b9e24fa1_1600w.webp",
"trailer": {
"@type": "VideoObject",
"name": "Final Cut - Official Trailer",
"description": "Official trailer for Final Cut",
"thumbnailUrl": "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/440c2fea-a409-4d32-8a07-1798b9e24fa1_1600w.webp"
}
}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      const modal = document.getElementById('trailerModal');
      const overlay = document.getElementById('overlay');
      const video = document.getElementById('trailerVideo');
      const openers = ['openTrailerTop','openTrailerHero','openTrailerPoster','watchNow'].map(id => document.getElementById(id)).filter(Boolean);
      const closeBtn = document.getElementById('closeModal');
      const muteBtn = document.getElementById('muteBtn');
      const muteText = document.getElementById('muteText');

      function openModal() {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        // Try to autoplay muted for browser compatibility
        video.muted = true;
        if (muteText) muteText.textContent = 'Unmute';
        video.currentTime = 0;
        video.play().catch(() => {});
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function closeModal() {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        video.pause();
        video.currentTime = 0;
      }

      openers.forEach(btn => btn && btn.addEventListener('click', openModal));
      closeBtn && closeBtn.addEventListener('click', closeModal);
      overlay && overlay.addEventListener('click', closeModal);
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });

      muteBtn && muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (muteText) {
          muteText.textContent = video.muted ? 'Unmute' : 'Mute';
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Smooth scroll for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"></div>
<div className="absolute top-64 -right-24 h-80 w-80 rounded-full bg-amber-600/10 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-2/3 bg-gradient-to-t from-red-500/5 to-transparent blur-2xl"></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-3 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-900/60">
<div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5">
<a className="group inline-flex items-center gap-2" href="#">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
<span className="text-[10px] font-semibold tracking-tight text-white">FC</span>
</div>
<span className="hidden text-sm font-medium tracking-tight text-white/90 sm:block">Final Cut</span>
</a>
<nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#cast">Cast</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#details">Details</a>
</nav>
<div className="flex items-center gap-2">
<button className="inline-flex transition hover:bg-white/15 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 text-sm font-medium text-white bg-white/10 rounded-lg ring-white/15 ring-1 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" id="openTrailerTop">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Watch trailer
              </button>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(80%_120%_at_0%_0%,rgba(220,38,38,0.10),transparent_60%),radial-gradient(60%_120%_at_100%_0%,rgba(217,119,6,0.10),transparent_60%)]">
<img alt="Film noir scene" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=2560&amp;q=80"/>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(10,10,11,0.1),rgba(10,10,11,0.6),rgba(10,10,11,0.95))]"></div>
<div className="flex flex-col sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16 pt-14 pr-5 pb-14 pl-5 items-center">
<div className="max-w-2xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>
                World Premiere
              </div>
<h1 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight">FINAL CUT</h1>
<p className="sm:text-lg text-base text-neutral-300 mt-4">His camera saw the truth. Now he has to develop the lie.</p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium tracking-tight ring-1 ring-white/10 transition hover:bg-neutral-100 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" id="openTrailerHero">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Watch Trailer
                </button>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" href="#overview">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg>
                  Explore
                </a>
<div className="hidden gap-2 sm:flex text-xs text-neutral-400 ml-2 gap-x-2 gap-y-2 items-center">Psychological • Thriller<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(163, 163, 163)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="10" r="8"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 22h10"></path><path d="M12 22v-4"></path></svg><span className="mx-2 h-3 w-px bg-white/10"></span><svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg></div>
</div>
</div>
<div className="mt-10 w-full max-w-xl lg:mt-0">
<div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 ring-1 ring-inset ring-white/5">
<img alt="Final Cut poster" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/440c2fea-a409-4d32-8a07-1798b9e24fa1_1600w.webp"/>
<div className="bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-900 ring-1 ring-white/20 transition hover:scale-105 hover:ring-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" id="openTrailerPoster">
<svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 ring-1 ring-white/10 backdrop-blur-sm">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Official Trailer
                  </span>
<span className="text-neutral-300 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">2:34</span>
</div>
</div>
</div>
</div>
<div className="mx-5 mb-5 mt-2 rounded-xl border border-white/10 bg-neutral-900/70 p-3 text-xs text-neutral-300 backdrop-blur-md lg:mx-8">
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<div className="inline-flex gap-x-2 gap-y-2 items-center">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 212)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                Worldwide • 2025
              </div>
<div className="inline-flex items-center gap-2">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 212)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                128 minutes
              </div>
<div className="inline-flex gap-2 gap-x-2 gap-y-2 items-center">Rated R</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="overview">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
<div className="lg:col-span-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">Overview</h2>
<p className="mt-3 text-neutral-300 leading-relaxed">A young film student discovers disturbing footage hidden in his late professor's archive. As he attempts to piece together the truth, the line between documentary and reality begins to blur—and someone doesn't want the final cut to be seen.</p>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 ring-1 ring-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-film text-red-400 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="film" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(248, 113, 113)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<span className="text-sm font-medium">Genre</span>
</div>
<span className="text-xs text-neutral-400">Psychological Thriller</span>
</div>
<p className="mt-2 text-sm text-neutral-300">A tense exploration of obsession, truth, and the power of the lens.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 ring-1 ring-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-medium">Vision</span>
</div>
<span className="text-xs text-neutral-400">Director's Debut</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Alex Petrosian's gripping USC thesis film brings fresh perspective to found footage.</p>
</div>
</div>
<div className="mt-8 flex gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-red-500/20 transition hover:bg-red-500 hover:ring-red-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60" id="watchNow">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch Trailer
            </button>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20" href="#details">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              More Details
            </a>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 ring-1 ring-white/5">
<div className="flex items-center gap-2 text-sm">
<svg className="h-5 w-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="font-medium">Get Notified</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Be first to know when Final Cut premieres near you.</p>
<form className="mt-4 flex gap-2">
<input className="flex-1 rounded-lg bg-neutral-800/80 px-3 py-2 text-sm text-white placeholder:text-neutral-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/60" placeholder="you@example.com" type="email"/>
<button className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-900 ring-1 ring-white/20 transition hover:bg-neutral-100 hover:ring-white/30" type="submit">Notify</button>
</form>
</div>
</aside>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="cast">
<h2 className="text-2xl font-semibold tracking-tight text-white">Cast</h2>
<p className="mt-2 text-sm text-neutral-400">Meet the talent behind Final Cut.</p>
<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Dominic" className="w-full h-40 object-cover rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<p className="text-sm font-medium">Dominic Reed</p>
<p className="text-xs text-neutral-400">The Student</p>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Sofia" className="h-40 w-full rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_800w.webp"/>
<div className="mt-3">
<p className="text-sm font-medium">Sofia Martinez</p>
<p className="text-xs text-neutral-400">The Witness</p>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Edward" className="h-40 w-full rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_800w.jpg"/>
<div className="mt-3">
<p className="text-sm font-medium">Edward Lane</p>
<p className="text-xs text-neutral-400">The Rival</p>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Professor Mills" className="h-40 w-full rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5a8f3649-9a97-4446-955e-d3ced353790f_800w.jpg"/>
<div className="mt-3">
<p className="text-sm font-medium">Professor Mills</p>
<p className="text-xs text-neutral-400">The Mentor</p>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Garrett" className="h-40 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=400&amp;h=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<p className="text-sm font-medium">Garrett Hayes</p>
<p className="text-xs text-neutral-400">The Detective</p>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-3 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-neutral-900 hover:ring-white/10">
<img alt="Mackenzie" className="h-40 w-full rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48efba97-0b3f-4a79-a4e3-6d8f000e4515_800w.jpg"/>
<div className="mt-3">
<p className="text-sm font-medium">Mackenzie Cole</p>
<p className="text-xs text-neutral-400">The Archivist</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="gallery">
<h2 className="text-2xl font-semibold tracking-tight text-white">Gallery</h2>
<p className="mt-2 text-sm text-neutral-400">Stills from the film.</p>
<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 1" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/04cf950b-7612-44ac-a767-6b8b9dc3e83b_800w.jpg"/>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 2" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 3" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 4" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5b63873e-f995-4739-95e5-15e2b39800b1_800w.jpg"/>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 5" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f971ef72-4d25-48d0-a326-c839964c3bcd_800w.webp"/>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 hover:ring-white/10">
<img alt="Still 6" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4" id="details">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
<div className="flex items-center gap-2">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path className="" d="m12.4 3.4 3.1 4"></path><path className="" d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
<h3 className="text-lg font-semibold tracking-tight">Production</h3>
</div>
<dl className="mt-4 space-y-2 text-sm">
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Director</dt>
<dd className="text-neutral-200">Alex Petrosian</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Writer</dt>
<dd className="text-neutral-200">Alex Petrosian</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Runtime</dt>
<dd className="text-neutral-200">128 min</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">School</dt>
<dd className="text-neutral-200">USC Film</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
<div className="flex items-center gap-2">
<svg className="text-stone-400 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path className="" d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<h3 className="text-lg font-semibold tracking-tight">Release</h3>
</div>
<dl className="mt-4 space-y-2 text-sm">
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Festival Premiere</dt>
<dd className="text-neutral-200">Fall 2025</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Theatrical</dt>
<dd className="text-neutral-200">TBA</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Rating</dt>
<dd className="text-neutral-200">R</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">Language</dt>
<dd className="text-neutral-200">English</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight">Recognition</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/40"></span> USC Thesis Film Selection</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/40"></span> Director's Debut Feature</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/40"></span> Festival Circuit 2025</li>
</ul>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-10 pb-10 relative">

<div className="absolute top-0 left-0 right-0 flex justify-between px-4 sm:px-6 lg:px-8" style={{transform: 'translateY(-50%)'}}>
<div className="flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
<div className="hidden sm:flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
<div className="flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
</div>
<div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
<div className="inline-flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[11px] font-semibold text-white tracking-tight">FC</span>
</div>
<span className="text-sm text-neutral-400">© 2025 Final Cut</span>
</div>
<div className="text-xs text-neutral-400">Directed by Alex Petrosian • USC School of Cinematic Arts</div>
</div>

<div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 sm:px-6 lg:px-8" style={{transform: 'translateY(50%)'}}>
<div className="flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
<div className="hidden sm:flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
<div className="flex gap-1">
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
<div className="h-2 w-2 border border-white/20 bg-white/5 rounded-sm"></div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="trailerModal">

<div className="transition-opacity duration-300 bg-black/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-md" id="overlay"></div>

<div className="relative z-10 w-full max-w-5xl animate-in fade-in zoom-in-95 duration-300">
<div className="rounded-2xl border border-white/10 bg-neutral-900/90 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl">

<div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="h-4 w-4 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Final Cut — Official Trailer
            </div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" id="muteBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>
<span id="muteText">Unmute</span>
</button>
<button aria-label="Close trailer" className="inline-flex items-center rounded-md bg-white/5 p-2 text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" id="closeModal">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="p-2 sm:p-3">
<div className="relative">
<div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
<video className="h-full w-full bg-black" controls="" id="trailerVideo" playsinline="" poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>

<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent"></div>
</div>

<div className="mt-3 flex items-center justify-between px-1 text-xs text-neutral-400">
<div className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  Secure streaming
                </div>
<div className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
                  1080p HD
                </div>
</div>
</div>
</div>
</div>

<div className="mx-auto mt-3 flex max-w-5xl items-center justify-between px-1 text-[11px] text-neutral-400">
<div className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Press Esc to close
          </div>
<div className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            Click outside to dismiss
          </div>
</div>
</div>
</div>


    </>
  );
}
