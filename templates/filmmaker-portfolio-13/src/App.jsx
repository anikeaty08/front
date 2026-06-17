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
      

<div className="min-h-screen flex flex-col">

<header className="bg-black/40 border-white/5 border-b backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center space-x-3">
<div className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-xs font-semibold tracking-[0.25em] uppercase bg-white/5">
            RK
          </div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-[0.22em] uppercase text-slate-200">
              R. KAN
            </span>
<span className="text-[11px] text-slate-500 tracking-[0.19em] uppercase">
              Filmmaker &amp; Director
            </span>
</div>
</div>

<nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center space-x-3">
<a className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase border border-white/15 text-slate-50 hover:border-slate-50 hover:bg-white/10 transition-colors" href="#contact">
            Let’s collaborate
          </a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors">
<i className="lucide lucide-menu text-slate-100" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-white/5 border-b">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-center">

<div className="">
<p className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-3">
              Narrative • Commercial • Music Video
            </p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
              Crafting cinematic stories that linger long after the credits roll.
            </h1>
<p className="text-sm sm:text-base text-slate-400 max-w-xl">
              I’m a filmmaker and director focused on intimate, visually-driven narratives. 
              From small crews to full productions, I help brands and artists tell stories that feel honest, textured, and undeniably human.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center px-4 py-2.5 rounded-full bg-slate-100 text-slate-950 text-xs font-medium tracking-[0.18em] uppercase hover:bg-white transition-colors shadow-sm" href="#work">
                View selected work
                <i className="lucide lucide-arrow-right ml-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</a>
<button className="inline-flex items-center px-3.5 py-2 rounded-full border border-white/12 text-xs font-medium tracking-[0.18em] uppercase text-slate-200 hover:border-white/40 hover:bg-white/5 transition-colors">
                Download reel
                <i className="lucide lucide-download ml-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl text-xs text-slate-400">
<div className="border border-white/5 rounded-xl px-4 py-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Years</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">7+</p>
</div>
<div className="border border-white/5 rounded-xl px-4 py-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Films</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">18</p>
</div>
<div className="border border-white/5 rounded-xl px-4 py-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Awards</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">12</p>
</div>
<div className="border border-white/5 rounded-xl px-4 py-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Locations</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">LA • BER • LDN</p>
</div>
</div>
</div>

<div className="space-y-4">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
<img alt="Filmmaker behind camera" className="w-full h-64 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.19em] text-slate-300 mb-1">Feature • 2024</p>
<p className="text-sm font-medium text-slate-50">
                    “Midnight Static”
                  </p>
<p className="text-xs text-slate-400">
                    A neon-soaked portrait of a city that never sleeps.
                  </p>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-black/40 hover:border-white hover:bg-black/70 transition-colors">
<i className="lucide lucide-play text-slate-50" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900">
<img alt="Film still" className="w-full h-28 sm:h-32 object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2.5">
<p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">
                    Festival Circuit
                  </p>
</div>
</div>
<div className="border border-white/10 rounded-xl p-3 sm:p-4 bg-gradient-to-br from-white/5 via-white/0 to-white/0 flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Currently booking
                  </p>
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                    2025
                  </span>
</div>
<ul className="space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center">
<span className="h-1 w-1 rounded-full bg-slate-400 mr-2"></span>
                    Short-form narrative campaigns
                  </li>
<li className="flex items-center">
<span className="h-1 w-1 rounded-full bg-slate-400 mr-2"></span>
                    Music videos &amp; live sessions
                  </li>
<li className="flex items-center">
<span className="h-1 w-1 rounded-full bg-slate-400 mr-2"></span>
                    Documentary &amp; branded content
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="work">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div>
<p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 mb-2">
                Selected work
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                A focused selection of films and commissions.
              </h2>
</div>
<button className="hidden sm:inline-flex items-center text-xs font-medium tracking-[0.18em] uppercase text-slate-300 border border-white/12 rounded-full px-3.5 py-1.5 hover:border-white/40 hover:bg-white/5 transition-colors">
              Full filmography
              <i className="lucide lucide-arrow-up-right ml-2" style={{width: '15px', height: '15px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-7">

<article className="group border border-white/8 rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 via-black/50 to-black/90 hover:border-white/30 transition-colors">
<div className="relative">
<img alt="Film still - Midnight Static" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/90 transition-colors"></div>
<div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-300 mb-1">
                      Feature Film • 102 min
                    </p>
<p className="text-sm font-medium text-slate-50">
                      Midnight Static
                    </p>
<p className="text-xs text-slate-400">
                      Neo-noir drama set in the late-night frequencies of an anonymous city.
                    </p>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/30 bg-black/50 group-hover:border-white group-hover:bg-black/80 transition-colors">
<i className="lucide lucide-play text-slate-50" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="text-xs text-slate-400">
<p className="mb-1.5">
                    Premiered at the 2024 Aurora Film Festival. Shot on location over 21 nights, 
                    blending practical neon with natural rain to create a dense, tactile world.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.16em]">
                      Director
                    </span>
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.16em]">
                      Writer
                    </span>
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.16em]">
                      Editor
                    </span>
</div>
</div>
<div className="flex flex-col items-end justify-between text-right text-[11px] text-slate-300">
<div>
<p className="uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Recognitions
                    </p>
<p>Aurora • Best Direction</p>
<p>Parallel • Audience Award</p>
</div>
<a className="mt-3 inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-slate-200 hover:text-white" href="#">
                    View case study
                    <i className="lucide lucide-arrow-right ml-1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</article>

<article className="group border border-white/8 rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 via-black/50 to-black/90 hover:border-white/30 transition-colors">
<div className="relative">
<img alt="Music video still" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/90 transition-colors"></div>
<div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-300 mb-1">
                      Music Video • 4 min
                    </p>
<p className="text-sm font-medium text-slate-50">
                      “Glass Echoes” — KAYA
                    </p>
<p className="text-xs text-slate-400">
                      A single-take performance piece exploring the tension between intimacy and distance.
                    </p>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/30 bg-black/50 group-hover:border-white group-hover:bg-black/80 transition-colors">
<i className="lucide lucide-play text-slate-50" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="text-xs text-slate-400">
<p className="mb-1.5">
                    Shot across two mirrored sets stitched invisible in-camera using motion-controlled lighting cues.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.16em]">
                      Direction
                    </span>
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.16em]">
                      Concept
                    </span>
</div>
</div>
<div className="flex flex-col items-end justify-between text-right text-[11px] text-slate-300">
<div>
<p className="uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Client
                    </p>
<p>Mercury Records</p>
<p>Released 2023</p>
</div>
<a className="mt-3 inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-slate-200 hover:text-white" href="#">
                    Watch on Vimeo
                    <i className="lucide lucide-arrow-up-right ml-1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</article>

<article className="group border border-white/8 rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 via-black/50 to-black/90 hover:border-white/30 transition-colors md:col-span-2">
<div className="relative grid md:grid-cols-[1.4fr,1fr]">
<div className="relative">
<img alt="Documentary still" className="w-full h-56 md:h-full object-cover" src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors"></div>
</div>
<div className="relative p-4 sm:p-6 flex flex-col justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-300 mb-1">
                      Short Documentary • 18 min
                    </p>
<p className="text-sm sm:text-base font-medium text-slate-50 mb-1">
                      Beneath the Neon
                    </p>
<p className="text-xs text-slate-400 mb-3">
                      A portrait of late-night workers in a downtown district told entirely through reflections and indirect glimpses.
                    </p>
<p className="text-[11px] text-slate-400">
                      Commissioned by the City Arts Council, this film combines observational footage with staged vignettes to blur the line between documentary and fiction.
                    </p>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-wrap gap-2 text-[11px]">
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.16em]">
                        Documentary
                      </span>
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.16em]">
                        16mm
                      </span>
<span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.16em]">
                        Street
                      </span>
</div>
<button className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/20 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-200 hover:border-white hover:bg-white/5 transition-colors">
                      View excerpt
                      <i className="lucide lucide-play-circle ml-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-white/5" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid lg:grid-cols-[0.9fr,1.1fr] gap-10 lg:gap-16 items-start">

<div className="space-y-5">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
<img alt="Filmmaker portrait" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                    Filmmaker • Director
                  </p>
<p className="text-sm font-medium text-slate-50">
                    Ryo Kan
                  </p>
</div>
<div className="flex items-center space-x-2">
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-black/50 hover:border-white hover:bg-black/80 transition-colors" href="#">
<i className="lucide lucide-instagram text-slate-50" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-black/50 hover:border-white hover:bg-black/80 transition-colors" href="#">
<i className="lucide lucide-vimeo text-slate-50" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-black/50 hover:border-white hover:bg-black/80 transition-colors" href="#">
<i className="lucide lucide-youtube text-slate-50" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
<div className="border border-white/10 rounded-2xl px-4 py-4 sm:px-5 sm:py-4 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2">
                Recent festivals
              </p>
<div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
<div>
<p>Aurora Film Festival</p>
<p className="text-[11px] text-slate-500">2024 • Official Selection</p>
</div>
<div>
<p>Midnight Frames</p>
<p className="text-[11px] text-slate-500">2023 • Jury Award</p>
</div>
<div>
<p>Circuit Breaker</p>
<p className="text-[11px] text-slate-500">2023 • Grand Prix</p>
</div>
<div>
<p>City Lights</p>
<p className="text-[11px] text-slate-500">2022 • Best Short</p>
</div>
</div>
</div>
</div>

<div>
<p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 mb-2">
              About
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-4">
              I’m obsessed with framing quiet moments like they’re the climax.
            </h2>
<p className="text-sm sm:text-base text-slate-400 mb-3">
              I grew up between cities, train stations, and late-night diners. That sense of in-between spaces defines how 
              I approach film: I’m interested in what people do when nobody appears to be watching, and what light does 
              when we’re not trying to control it.
            </p>
<p className="text-sm sm:text-base text-slate-400 mb-3">
              My work lives somewhere between narrative and documentary. I love building small, focused crews that can 
              move quickly, respond to the environment, and give performers space to exist instead of simply hitting marks.
            </p>
<p className="text-sm sm:text-base text-slate-400 mb-5">
              I’m based between Los Angeles and Berlin, and collaborate with artists, labels, and brands worldwide on 
              narrative commercials, music videos, and short-form series.
            </p>
<div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-300">
<div className="border border-white/10 rounded-xl p-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Focus
                </p>
<ul className="space-y-1">
<li>Narrative shorts</li>
<li>Music videos</li>
<li>Docu-fiction</li>
</ul>
</div>
<div className="border border-white/10 rounded-xl p-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Roles
                </p>
<ul className="space-y-1">
<li>Direction</li>
<li>Creative development</li>
<li>Editing</li>
</ul>
</div>
<div className="border border-white/10 rounded-xl p-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  On set
                </p>
<ul className="space-y-1">
<li>Intimate crews</li>
<li>Actor-first approach</li>
<li>Practical effects</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8 gap-4">
<div>
<p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 mb-2">
                Process
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                From first conversation to final frame.
              </h2>
</div>
<p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Every project is different, but the workflow stays intentionally small, transparent, and collaborative.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="border border-white/10 rounded-2xl p-4 sm:p-5 bg-white/0 hover:border-white/30 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-2">
<span className="h-7 w-7 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[11px] text-slate-200">
                    01
                  </span>
<p className="text-sm font-medium text-slate-50">
                    Discovery &amp; treatment
                  </p>
</div>
<i className="lucide lucide-pen-square text-slate-300" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<p className="text-xs text-slate-400 mb-3">
                We’ll talk references, constraints, and what success looks like—then build a concise visual treatment and 
                production plan around your goals.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1">
<li>• Mood &amp; reference deck</li>
<li>• Script or outline</li>
<li>• High-level budget &amp; schedule</li>
</ul>
</div>

<div className="border border-white/10 rounded-2xl p-4 sm:p-5 bg-white/0 hover:border-white/30 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-2">
<span className="h-7 w-7 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[11px] text-slate-200">
                    02
                  </span>
<p className="text-sm font-medium text-slate-50">
                    Production
                  </p>
</div>
<i className="lucide lucide-video text-slate-300" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<p className="text-xs text-slate-400 mb-3">
                A small, experienced team handles everything from casting to crew. I prioritize efficient setups and 
                space for discovery on set.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1">
<li>• Directing &amp; coverage strategy</li>
<li>• On-set creative decisions</li>
<li>• Daily stills &amp; selects</li>
</ul>
</div>

<div className="border border-white/10 rounded-2xl p-4 sm:p-5 bg-white/0 hover:border-white/30 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-2">
<span className="h-7 w-7 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[11px] text-slate-200">
                    03
                  </span>
<p className="text-sm font-medium text-slate-50">
                    Edit &amp; delivery
                  </p>
</div>
<i className="lucide lucide-clapperboard text-slate-300" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<p className="text-xs text-slate-400 mb-3">
                I cut the first assembly personally. From there we refine pacing, sound, and grade, keeping feedback rounds 
                structured and efficient.
              </p>
<ul className="text-[11px] text-slate-400 space-y-1">
<li>• Offline &amp; online edit</li>
<li>• Color &amp; sound mix</li>
<li>• Platform-specific exports</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16">

<div>
<p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 mb-2">
              Contact
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-4">
              Tell me about the story you want to tell.
            </h2>
<p className="text-sm sm:text-base text-slate-400 mb-4">
              Whether you have a fully formed script, a rough concept, or just a feeling, I’d love to hear about it. 
              I typically respond within 48 hours.
            </p>
<div className="border border-white/10 rounded-2xl p-4 sm:p-5 bg-white/0 mb-4">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2">
                Direct
              </p>
<div className="space-y-1 text-sm text-slate-300">
<p>
                  Email: 
                  <a className="underline underline-offset-4 decoration-slate-500 hover:decoration-slate-200" href="mailto:hello@ryokanfilms.com">
                    hello@ryokanfilms.com
                  </a>
</p>
<p>
                  Representation: 
                  <span className="text-slate-400">Northlight Agency (US/EU)</span>
</p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-400">
<div className="border border-white/10 rounded-xl p-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Availability
                </p>
<p>Currently booking projects for Q2–Q4 2025.</p>
</div>
<div className="border border-white/10 rounded-xl p-3 bg-white/0">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Ideal projects
                </p>
<p>Narrative-driven campaigns, music videos, and short films with room for experimentation.</p>
</div>
</div>
</div>

<div className="border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 bg-white/0">
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                    Name
                  </label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-white/50 focus:ring-0" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                    Email
                  </label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-white/50 focus:ring-0" placeholder="you@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                  Project type
                </label>
<div className="grid sm:grid-cols-3 gap-2 text-xs">
<button className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/5 text-slate-100 hover:border-white/50 hover:bg-white/10 transition-colors" type="button">
                    Narrative
                  </button>
<button className="w-full px-3 py-2 rounded-lg border border-white/10 bg-black/40 text-slate-200 hover:border-white/40 hover:bg-white/5 transition-colors" type="button">
                    Music video
                  </button>
<button className="w-full px-3 py-2 rounded-lg border border-white/10 bg-black/40 text-slate-200 hover:border-white/40 hover:bg-white/5 transition-colors" type="button">
                    Commercial / brand
                  </button>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                    Estimated timeline
                  </label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-white/50 focus:ring-0" placeholder="e.g. June 2025, flexible" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                    Rough budget
                  </label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-white/50 focus:ring-0" placeholder="e.g. 15–30k USD" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-1.5">
                  Project overview
                </label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-white/50 focus:ring-0" placeholder="Share a few lines about the story, references, and what you’re hoping to make together." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-1">
<p className="text-[11px] text-slate-500 max-w-xs">
                  I respect your time and inbox. No mailing lists, no automated follow-ups—just a direct response.
                </p>
<button className="inline-flex items-center px-4 py-2.5 rounded-full bg-slate-100 text-slate-950 text-xs font-medium tracking-[0.18em] uppercase hover:bg-white transition-colors" type="submit">
                  Send inquiry
                  <i className="lucide lucide-send ml-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<div className="flex items-center space-x-2">
<span className="tracking-[0.25em] uppercase text-slate-300">RK</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>Filmmaker &amp; Director</span>
</div>
<div className="flex items-center space-x-4">
<span>© 2025</span>
<a className="hover:text-slate-200 transition-colors" href="#work">Selected work</a>
<a className="hover:text-slate-200 transition-colors" href="#contact">Contact</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
