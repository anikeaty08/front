import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("header");
const hero = document.getElementById("hero");
if (!header || !hero) return;
const observer = new IntersectionObserver(
([entry]) => {
if (!entry.isIntersecting) {
header.classList.add("backdrop-blur", "bg-slate-950/80", "shadow");
} else {
header.classList.remove(
"backdrop-blur",
"bg-slate-950/80",
"shadow"
);
}
},
{ threshold: 0.1 }
);
observer.observe(hero);
});



      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 bg-slate-950/60">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-3 flex items-center justify-between gap-4">

<a aria-label="Near Far home" className="flex items-center gap-3" href="#hero">
<div className="flex flex-col leading-tight">
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                Near
                <span className="text-[0.65rem] align-middle text-slate-400">
                  //
                </span>
                Far
              </span>
<span className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                Small towns · Big stories
              </span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#journey">
              Journey
            </a>
<a className="hover:text-slate-50 transition-colors" href="#stories">
              Stories
            </a>
<a className="hover:text-slate-50 transition-colors" href="#route">
              Route
            </a>
<a className="hover:text-slate-50 transition-colors" href="#downloads">
              Free tools
            </a>
<a className="hover:text-slate-50 transition-colors" href="#about">
              About
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-amber-200 px-4 py-1.5 text-xs sm:text-sm font-semibold-slate-950 hover:bg-amber-100 transition" href="https://nearxfar.substack.com/" rel="noopener noreferrer" target="_blank">
              Follow on Substack
            </a>
<div className="hidden sm:flex items-center gap-2 text-slate-300">

<a aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://instagram.com/nearxfarxtravel" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<circle cx="17" cy="7" r="0.8"></circle>
</svg>
</a>

<a aria-label="YouTube" className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://www.youtube.com/channel/UCVC05UCet5_rgM3xsbyXgmA" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="3" width="18" x="3" y="6"></rect>
<path d="M10 9l5 3-5 3z"></path>
</svg>
</a>

<a aria-label="TikTok" className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://tiktok.com/@nearxfar" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.5a4 4 0 0 0 3 1.3V7.2A4.8 4.8 0 0 1 16.2 5V4h-3.2v11.1a2.4 2.4 0 1 1-2-2.4"></path>
</svg>
</a>
</div>
<button aria-label="Menu" className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="7" y2="7"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="17" y2="17"></line>
</svg>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative isolate overflow-hidden" id="hero">
<div className="absolute inset-0">
<img alt="Open highway stretching toward distant hills under a wide sky" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/70 to-slate-950"></div>
</div>
<div className="relative mx-auto max-w-6xl px-4 lg:px-6 pt-28 pb-16 sm:pt-32 sm:pb-24">
<div className="max-w-xl space-y-5 sm:space-y-6">
<p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                Still in pre-launch · RV literally still in the driveway
              </p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                Small towns. Big stories.
              </h1>
<p className="text-sm sm:text-base lg:text-lg text-slate-200" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                Near // Far is a long-term RV road trip and storytelling project
                chasing the festivals, diners, and locals that keep small-town
                America interesting — starting soon, and open for you to follow
                from day one.
              </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-900/30 hover:bg-amber-100 transition" href="https://nearxfar.substack.com/" rel="noopener noreferrer" target="_blank">
                  Ride along on Substack
                </a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-300 transition" href="#journey">
                  See the first planned miles
                </a>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 max-w-md rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Miles driven
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Towns visited
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Stories live
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
</div>
<p className="text-[0.7rem] text-slate-400">
                All stats are pre-launch. They’ll start ticking up as soon as
                the RV rolls out.
              </p>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-950" id="journey">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2 sm:space-y-3 max-w-xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  Follow the first leg of the journey
                </h2>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  From the desert edge of Arizona across small towns, county
                  fairs, and riverside camps — the first months are mapped, just
                  waiting on a turn of the key.
                </p>
</div>
<p className="text-[0.7rem] sm:text-xs text-slate-400">
                Status: Pre-launch · Stops and dates may flex a bit as we go.
              </p>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">

<div className="space-y-5">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                        Launch window
                      </p>
<p className="mt-1 text-base sm:text-lg font-semibold text-slate-50">
                        Yuma, Arizona
                      </p>
<p className="text-xs sm:text-sm text-slate-300">
                        Target: early January · Canals, date farms, winter light
                      </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] font-medium text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                      Pre-launch
                    </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        This week
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">
                        0 events
                      </p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        Miles driven
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        Stories live
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center justify-between gap-2 mb-3">
<p className="text-xs font-medium text-slate-100">
                      Planned early stops
                    </p>
<p className="text-[0.7rem] text-slate-400">
                      Draft route · Jan–Feb
                    </p>
</div>
<ol className="space-y-4">
<li className="flex gap-3">
<div className="mt-1">
<span className="flex h-2.5 w-2.5 rounded-full border border-amber-300 bg-amber-300/60"></span>
</div>
<div className="flex-1 border-b border-slate-800 pb-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                              Quartzsite, AZ
                            </p>
<p className="text-[0.7rem] text-slate-400">
                              Hi Jolly Parade &amp; Camelpalooza · early January
                            </p>
</div>
<span className="inline-flex rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[0.65rem] font-medium text-amber-100">
                            Anchor stop
                          </span>
</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1">
<span className="flex h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-900"></span>
</div>
<div className="flex-1 border-b border-slate-800 pb-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                              Lake Havasu City, AZ
                            </p>
<p className="text-[0.7rem] text-slate-400">
                              Balloon Festival &amp; night glows · late January
                            </p>
</div>
<span className="inline-flex rounded-full bg-slate-800 px-2.5 py-0.5 text-[0.65rem] font-medium text-slate-200">
                            Planned
                          </span>
</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1">
<span className="flex h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-900"></span>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                              Small towns across AZ → TX
                            </p>
<p className="text-[0.7rem] text-slate-400">
                              Weeknights in RV parks, diners, and main streets
                              in between.
                            </p>
</div>
<span className="inline-flex rounded-full bg-slate-800 px-2.5 py-0.5 text-[0.65rem] font-medium text-slate-200">
                            In planning
                          </span>
</div>
</div>
</li>
</ol>
<p className="mt-3 text-[0.7rem] text-slate-400">
                    This is a working timeline. If you share a hidden gem along
                    this path, it can still make the cut.
                  </p>
</div>
</div>

<div className="space-y-4">
<div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
<div className="flex items-center justify-between gap-2 border-b border-slate-800 px-4 py-3">
<p className="text-xs font-medium text-slate-100">
                      Route overview
                    </p>
<p className="text-[0.7rem] text-slate-400">
                      Interactive map coming after launch
                    </p>
</div>
<div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<img alt="Map of the United States with highlighted regions" className="h-full w-full object-cover opacity-70 mix-blend-luminosity" src="https://images.unsplash.com/photo-1515861209048-dae6a1e1ed56?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(96,165,250,0.25),transparent_55%)]"></div>
<div className="absolute inset-0 flex items-center justify-center px-4">
<div className="rounded-full border border-slate-200/40 bg-slate-950/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 text-center">
                        Pre-launch snapshot. Live GPS and town-by-town map will
                        unlock once we hit the road.
                      </div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800 px-4 py-3">
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        Total miles
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        Nights out
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">0</p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        Towns mapped
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">
                        50+ planned
                      </p>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                        States in first leg
                      </p>
<p className="mt-1 text-sm font-semibold text-slate-50">
                        3–4
                      </p>
</div>
</div>
</div>
<p className="text-[0.7rem] text-slate-400">
                  Want the full route and date windows? Grab it via email below
                  — it lives on Substack.
                </p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-950" id="stories">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2 sm:space-y-3 max-w-xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  Stories from the road (not yet, promise)
                </h2>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  The plan: slow stories from small places — parades, quiet side
                  streets, night shifts at all-night diners, and the people who
                  know them best. The first pieces will publish shortly after
                  launch.
                </p>
</div>
<p className="text-xs sm:text-sm font-medium text-slate-400">
                All stories below are previews and plans. Nothing has published
                yet — they go live once the wheels actually start turning.
              </p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-5 text-center">
<p className="text-xs sm:text-sm font-medium text-slate-100">
                  Be there for story #1
                </p>
<p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xs">
                  When the first town sign appears in the windshield, the first
                  story goes live. Get the note when that happens.
                </p>
<a className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition" href="https://nearxfar.substack.com/" rel="noopener noreferrer" target="_blank">
                  Follow early chapters on Substack
                </a>
</article>

<article className="flex flex-col overflow-hidden rounded-2xl border-slate-800 bg-slate-900/70 opacity-80">
<div className="relative h-40 sm:h-44">
<img alt="Small town main street at dusk with storefronts and streetlights" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>
<span className="absolute left-3 top-3 inline-flex rounded-full bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-medium text-slate-100">
                    Story preview
                  </span>
</div>
<div className="flex flex-1 flex-col p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Dusk on Main: a town that glows after 5pm
                  </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                    The kind of place we’re hunting for: one stoplight, two
                    bars, and just enough neon to turn the pavement blue.
                  </p>
<p className="mt-3 text-[0.7rem] font-medium text-slate-400">
                    Goes live once we hit our first launch town.
                  </p>
</div>
</article>

<article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 opacity-80">
<div className="relative h-40 sm:h-44">
<img alt="Nighttime festival lights strung above a small-town street" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>
<span className="absolute left-3 top-3 inline-flex rounded-full bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-medium text-slate-100">
                    Planned festival
                  </span>
</div>
<div className="flex flex-1 flex-col p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    One weekend, one highway exit
                  </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                    County fairs and street festivals that briefly turn a quiet
                    town into the loudest place for miles.
                  </p>
<p className="mt-3 text-[0.7rem] font-medium text-slate-400">
                    Planned coverage · Live after we’re on the ground.
                  </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-950" id="about">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  What is Near // Far?
                </h2>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  Near // Far is a slow, long-haul road project: living out of
                  an RV, driving into small towns you might only see on exit
                  signs, and telling the stories you almost never see in big
                  travel guides.
                </p>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  Think: field notes, quiet portraits, festival weekends, and
                  route tools you can steal for your own trip. Right now
                  everything is in “before” mode — gear packed, route sketched,
                  engine off.
                </p>
<a className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-amber-200 hover:text-amber-100" href="https://nearxfar.substack.com/" rel="noopener noreferrer" target="_blank">
                  Read the project intro on Substack
                  <span aria-hidden="true">→</span>
</a>
</div>
<div className="relative h-52 sm:h-64 lg:h-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
<img alt="RV parked at a scenic overlook with mountains in the distance" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-slate-900/60"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[0.7rem] text-slate-200">
<p>Somewhere between near and far.</p>
<p className="text-slate-400">Photo from route scouting</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" id="route">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  See the route &amp; hidden gems
                </h2>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  The first months are mapped from Arizona across the Southwest
                  and toward the Gulf. Anchor events, tiny towns, and the “we’ll
                  see when we get there” gaps are all in the plan.
                </p>
<div className="grid gap-4 sm:grid-cols-2">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

<svg className="h-3.5 w-3.5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="2"></circle>
<circle cx="18" cy="18" r="2"></circle>
<path d="M8 6h5a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h1"></path>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                        Full first-leg overview
                      </p>
<p className="text-[0.75rem] text-slate-400">
                        See where we expect to be and when — from launch in Yuma
                        to festival weekends and river detours.
                      </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

<svg className="h-3.5 w-3.5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
<circle cx="12" cy="11" r="2"></circle>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                        Hidden gem short list
                      </p>
<p className="text-[0.75rem] text-slate-400">
                        Small campgrounds, café counters, and barstools that are
                        already starred on the map for this first run.
                      </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

<svg className="h-3.5 w-3.5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                        Anchor dates
                      </p>
<p className="text-[0.75rem] text-slate-400">
                        Festival weekends and can’t-miss events that the trip
                        will bend around.
                      </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

<svg className="h-3.5 w-3.5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="5"></rect>
<path d="m3 7 9 6 9-6"></path>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-100">
                        1–2 emails a month
                      </p>
<p className="text-[0.75rem] text-slate-400">
                        Enough to follow the route without watching your inbox
                        fill up like a gas receipt drawer.
                      </p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-300/60 bg-amber-50/5 p-5 sm:p-6" id="newsletter">
<p className="text-xs sm:text-sm font-medium text-amber-100">
                  Get the real-time route once we finally roll
                </p>
<p className="mt-2 text-sm text-slate-200">
                  Drop your email, then we’ll send you over to Substack — where
                  the real route, date windows, and hidden gems will live once
                  this is actually on the road.
                </p>
<form className="mt-4 space-y-3" onsubmit="window.open('https://nearxfar.substack.com/', '_blank'); return false;">
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="route-email">
                      Email
                    </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="route-email" placeholder="you@example.com" type="email"/>
</div>
<button className="inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-100 transition" type="submit">
                    Go to Substack for the route
                  </button>
<p className="text-[0.7rem] text-slate-400">
                    No separate list here — Substack is home base for maps,
                    notes, and new stories once they exist.
                  </p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-950" id="downloads">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  Free tools we’re using to prep
                </h2>
<p className="text-sm sm:text-base text-slate-300 max-w-xl" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  Simple checklists and planners built for this trip — but easy
                  to steal for your own RV run, road trip, or long weekend.
                </p>
</div>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800">

<svg className="h-4 w-4 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="10" x="7" y="3"></rect>
<rect height="14" rx="2" width="14" x="5" y="7"></rect>
</svg>
</div>
<h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-50">
                  RV trip checklist
                </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                  A pre-launch packing and setup list that keeps hoses, cables,
                  and the boring-but-critical bits from getting forgotten.
                </p>
<a className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition" href="#">
                  Download PDF
                </a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800">

<svg className="h-4 w-4 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="12" r="4"></circle>
<path d="M15 7h4v10h-4"></path>
</svg>
</div>
<h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-50">
                  Road trip budget sheet
                </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Track fuel, campgrounds, groceries, and “we didn’t plan for
                  that” stops — the same way we’re modeling this first route.
                </p>
<a className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition" href="#">
                  Download sheet
                </a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800">

<svg className="h-4 w-4 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
</div>
<h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-50">
                  Festival calendar view
                </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                  A one-glance layout for fairs, parades, and balloon festivals
                  — with space for your own local favorites.
                </p>
<a className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition" href="#">
                  Download template
                </a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800">

<svg className="h-4 w-4 text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="2" width="10" x="7" y="4"></rect>
<rect height="11" rx="2" width="14" x="5" y="9"></rect>
<path d="M9 13h6"></path>
</svg>
</div>
<h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-50">
                  Packing guide
                </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                  What actually earns a spot in a few cabinets and bins when
                  you’re trading a house for an RV for months.
                </p>
<a className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition" href="#">
                  Download guide
                </a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'PT Serif\',serif'}}>
                  Know a hidden gem on this path?
                </h2>
<p className="text-sm sm:text-base text-slate-300" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                  A festival the internet barely mentions. A counter stool that
                  hasn’t moved in 30 years. A highway exit that deserves a
                  detour. Share it, and we might show up with cameras and
                  notebooks.
                </p>
<p className="text-xs sm:text-sm text-slate-400 max-w-lg">
                  We’re especially listening for small towns across Arizona, New
                  Mexico, Texas, and toward the Gulf Coast, but any good story
                  is worth a pin.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
<form className="space-y-3" onsubmit="alert('Thanks for sharing a hidden gem!'); return false;">
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="gem-name">
                        Your name
                      </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="gem-name" placeholder="Name (optional)" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="gem-email">
                        Email
                      </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="gem-email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="gem-town">
                        Town / place
                      </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="gem-town" placeholder="Town, venue, or spot" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="gem-state">
                        State
                      </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="gem-state" placeholder="AZ, NM, TX…" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[0.75rem] font-medium text-slate-100" htmlFor="gem-why">
                      What makes it special?
                    </label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="gem-why" placeholder="Tell us the story, the season, how to time it, and anything we shouldn’t miss." rows="4"></textarea>
</div>
<button className="inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-100 transition" type="submit">
                    Submit a hidden gem
                  </button>
<p className="text-[0.7rem] text-slate-400">
                    We read every note, especially while we’re still in
                    pre-launch mode.
                  </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-10 sm:py-12 lg:py-14">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">

<div className="space-y-4">
<a aria-label="Near Far home" className="flex items-center gap-3" href="#hero">
<div className="flex flex-col leading-tight">
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                    Near
                    <span className="text-[0.65rem] align-middle text-slate-400">
                      //
                    </span>
                    Far
                  </span>
<span className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                    Small towns · Big stories
                  </span>
</div>
</a>
<p className="text-xs sm:text-sm text-slate-300 max-w-sm" style={{fontFamily: '\'Inter\',system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif'}}>
                A roaming field notebook for small-town America — built out of
                an RV, a few cameras, too much coffee, and the hope that slow
                stories still matter.
              </p>
</div>

<div className="space-y-3">
<p className="text-xs font-semibold text-slate-200">Explore</p>
<div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
<a className="hover:text-slate-50" href="#journey">Journey</a>
<a className="hover:text-slate-50" href="#stories">Stories</a>
<a className="hover:text-slate-50" href="#route">Route</a>
<a className="hover:text-slate-50" href="#downloads">Free tools</a>
<a className="hover:text-slate-50" href="#about">About</a>
</div>
<div className="space-y-1 pt-2">
<p className="text-xs font-semibold text-slate-200">Contact</p>
<p className="text-xs text-slate-300">
                  Tips, collabs, introductions:
                  
                  <a className="underline underline-offset-2 hover:text-slate-50" href="mailto:hello@nearfarroad.com">
                    hello@nearfarroad.com
                  </a>
</p>
</div>
</div>

<div className="space-y-3">
<p className="text-xs font-semibold text-slate-200">
                Follow from day one
              </p>
<form className="space-y-2" onsubmit="window.open('https://nearxfar.substack.com/', '_blank'); return false;">
<div className="space-y-1.5">
<label className="text-[0.75rem] text-slate-300" htmlFor="footer-email">
                    Email
                  </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-0" id="footer-email" placeholder="you@example.com" type="email"/>
</div>
<button className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition" type="submit">
                  Go to Substack &amp; follow
                </button>
<p className="text-[0.7rem] text-slate-400">
                  That’s where the route, photos, and long-form notes will
                  actually live.
                </p>
</form>
<div className="pt-2 space-y-2">
<p className="text-[0.75rem] text-slate-300">Elsewhere</p>
<div className="flex flex-wrap items-center gap-3 text-slate-200">
<a aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://instagram.com/nearxfarxtravel" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<circle cx="17" cy="7" r="0.8"></circle>
</svg>
</a>
<a aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://www.youtube.com/channel/UCVC05UCet5_rgM3xsbyXgmA" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="3" width="18" x="3" y="6"></rect>
<path d="M10 9l5 3-5 3z"></path>
</svg>
</a>
<a aria-label="TikTok" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-50 transition" href="https://tiktok.com/@nearxfar" rel="noopener noreferrer" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.5a4 4 0 0 0 3 1.3V7.2A4.8 4.8 0 0 1 16.2 5V4h-3.2v11.1a2.4 2.4 01 1-2-2.4"></path>
</svg>
</a>
<a className="flex h-8 items-center rounded-full border border-amber-300/70 px-3 text-[0.7rem] font-medium text-amber-100 hover:bg-amber-100/5 transition" href="https://nearxfar.substack.com/" rel="noopener noreferrer" target="_blank">
                    Substack
                  </a>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-800">
<div className="mx-auto max-w-6xl px-4 lg:px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<p className="text-[0.7rem] text-slate-500">
                ©
                <span id="year"></span>
                Near // Far. All rights reserved.
              </p>
<p className="text-[0.7rem] text-slate-500">
                Built in pre-launch mode on the way to mile one.
              </p>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
