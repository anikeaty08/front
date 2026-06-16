import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const sliderHandle = document.getElementById("sliderHandle");
      const beforePane = document.getElementById("beforePane");
      const container = sliderHandle?.parentElement;

      if (sliderHandle && beforePane && container) {
        let isDragging = false;

        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

        const updatePosition = (clientX) => {
          const rect = container.getBoundingClientRect();
          const x = clamp(clientX - rect.left, 0, rect.width);
          const percent = (x / rect.width) * 100;

          sliderHandle.style.left = `${percent}%`;
          beforePane.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        };

        const startDrag = (e) => {
          isDragging = true;
          const point = e.touches ? e.touches[0] : e;
          updatePosition(point.clientX);
        };

        const moveDrag = (e) => {
          if (!isDragging) return;
          const point = e.touches ? e.touches[0] : e;
          updatePosition(point.clientX);
        };

        const endDrag = () => {
          isDragging = false;
        };

        sliderHandle.addEventListener("mousedown", startDrag);
        sliderHandle.addEventListener("touchstart", startDrag, {
          passive: true,
        });

        window.addEventListener("mousemove", moveDrag);
        window.addEventListener("touchmove", moveDrag, { passive: true });

        window.addEventListener("mouseup", endDrag);
        window.addEventListener("touchend", endDrag);
        window.addEventListener("touchcancel", endDrag);

        container.addEventListener("click", (e) => {
          if (e.target === sliderHandle || sliderHandle.contains(e.target)) {
            return;
          }
          updatePosition(e.clientX);
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),_transparent_55%)] opacity-60"></div>
<div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,_rgba(24,24,27,0.9)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(24,24,27,0.9)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-70"></div>
<main className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-10 pt-8 sm:pt-12" style={{fontFamily: '\'Satoshi\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>

<header className="w-full max-w-6xl text-center space-y-6 sm:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 sm:px-4 py-1.5 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs sm:text-sm font-medium tracking-tight text-neutral-200">
              New • AI Photo Restoration Studio
            </span>
</div>
<div className="space-y-3 sm:space-y-4">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-50">
              AI Photo Restoration — Bring
              <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-sky-300 bg-clip-text text-transparent">
                Precious Memories
              </span>
              Back to Life
            </h1>
<p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300">
              One-click scratch removal, clarity enhancement, and intelligent
              colorization. Let AI restore your old photos to their original
              glory.
            </p>
</div>

<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-200">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 sm:px-4 py-1.5 border border-white/10">
<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21h10L12 3 7 21z"></path>
</svg>
<span className="font-medium tracking-tight">Instant Restore</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 sm:px-4 py-1.5 border border-white/10">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l2.09 6.26L21 9.27l-4.91 3.58L17.18 21 12 17.77 6.82 21l1.09-8.15L3 9.27l6.91-.01L12 3z"></path>
</svg>
<span className="font-medium tracking-tight">AI-Powered</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 sm:px-4 py-1.5 border border-white/10">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="font-medium tracking-tight">HD Output</span>
</span>
</div>
</header>

<section aria-label="AI restoration preview" className="mt-8 sm:mt-12 w-full max-w-5xl space-y-5 sm:space-y-6">
<div className="relative rounded-3xl sm:rounded-[1.75rem] bg-zinc-900/90 border border-white/10 shadow-2xl overflow-hidden">

<div className="absolute left-4 top-4 z-20 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs sm:text-sm font-medium tracking-tight">
              Before
            </div>
<div className="absolute right-4 top-4 z-20 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs sm:text-sm font-medium tracking-tight">
              After
            </div>

<div className="relative w-full">

<img alt="Restored photo" className="h-[48vh] sm:h-[60vh] w-full object-cover" src="https://images.pexels.com/photos/1587095/pexels-photo-1587095.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>

<div className="pointer-events-none absolute inset-0 overflow-hidden" id="beforePane" style={{clipPath: 'inset(0 50% 0 0)'}}>
<img alt="Original damaged photo" className="h-full w-full object-cover" src="https://images.pexels.com/photos/712568/pexels-photo-712568.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>

<div className="absolute inset-y-0 left-1/2 flex translate-x-[-50%] items-center justify-center touch-none" id="sliderHandle">

<div className="h-full w-px bg-white/60"></div>

<button aria-label="Drag to compare before and after" className="relative z-20 -ml-[0.9rem] flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg shadow-black/40 border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80" type="button">
<svg className="h-4 w-4 text-neutral-900" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 21 12 15 6"></polyline>
<polyline points="9 6 3 12 9 18"></polyline>
</svg>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 bg-gradient-to-t from-black/70 via-zinc-900/70 to-zinc-900/0 px-4 sm:px-6 py-4 sm:py-5">

<div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
<button className="relative flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60">
<img alt="Vintage portrait thumbnail" className="h-16 w-16 sm:h-18 sm:w-18 object-cover opacity-80" src="https://images.pexels.com/photos/712568/pexels-photo-712568.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"/>
</button>
<button className="relative flex-shrink-0 overflow-hidden rounded-xl border border-transparent bg-white/5">
<img alt="Restored portrait thumbnail" className="h-16 w-16 sm:h-18 sm:w-18 object-cover" src="https://images.pexels.com/photos/1587095/pexels-photo-1587095.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"/>
<div className="pointer-events-none absolute inset-0 ring-2 ring-emerald-400/80 ring-offset-2 ring-offset-black rounded-xl"></div>
</button>
<button className="relative flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60">
<img alt="Family photo thumbnail" className="h-16 w-16 sm:h-18 sm:w-18 object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="relative flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60">
<img alt="Old group photo thumbnail" className="h-16 w-16 sm:h-18 sm:w-18 object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</button>
</div>

<div className="flex flex-wrap items-center justify-start sm:justify-end gap-2 sm:gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight shadow-lg shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80" type="button">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
                  Upload Photo
                </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/60 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-tight text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80" type="button">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9v6h6"></path>
<path d="M3 12a9 9 0 1 0 9-9"></path>
</svg>
                  Auto-Restore Preview
                </button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
<div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/40">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5H6a2 2 0 0 0-2 2v11"></path>
<path d="M13 7h5a2 2 0 0 1 2 2v9"></path>
<path d="M2 17h20"></path>
<path d="M8 13h.01"></path>
<path d="M16 13h.01"></path>
</svg>
</div>
<p>
                Drag the slider to compare the original scan with the enhanced
                version in real time.
              </p>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400">
<div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-medium tracking-tight">No signup needed</span>
</div>
<span className="hidden sm:inline text-neutral-600">•</span>
<span>Runs securely in the cloud</span>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
