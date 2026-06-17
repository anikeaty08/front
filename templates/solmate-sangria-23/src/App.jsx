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
      
<div className="min-h-screen flex flex-col items-center justify-center py-6 sm:py-8">

<div className="w-full max-w-5xl rounded-3xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] border border-slate-200 overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<button className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-2.5 py-1 text-[0.65rem] font-medium text-slate-600 tracking-tight">
            View
          </button>
<button className="ml-1 inline-flex items-center rounded-full border border-transparent px-2 py-1 text-[0.65rem] font-medium text-slate-400 tracking-tight">
            ▶
          </button>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[0.65rem] font-medium text-slate-600 tracking-tight">
            Copy
          </button>
<button className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-[0.7rem] font-medium text-white tracking-tight">
            Preview
          </button>
<button className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[0.65rem] font-medium text-slate-600 tracking-tight">
            Code
          </button>
</div>
</div>

<div className="flex flex-col">

<header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-slate-100">
<div className="flex items-center gap-2 sm:gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-[0.7rem] font-semibold text-pink-500 tracking-tight">
              S
            </div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-tight text-slate-900">
                SOLMATE
              </span>
<span className="text-xs text-slate-500">
                By Balgownie Estate
              </span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#what-is-solmate">
              What is Solmate?
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#tasting-notes">
              Tasting Notes
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#our-estate">
              Our Estate
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#pre-order">
              Pre‑Order
            </a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
              Sign in
            </button>
<a className="inline-flex items-center rounded-full bg-[#ff2f92] px-4 sm:px-5 py-1.5 text-sm font-medium text-white hover:bg-[#f0197f]" href="#shop">
              Shop Now
            </a>
</div>
</header>

<main className="px-4 sm:px-8 pt-10 pb-12">

<section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
<div className="max-w-3xl">
<p className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium tracking-[0.16em] text-pink-500 uppercase">
                New · Limited Release
              </p>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                SOLMATE SANGRIA
              </h1>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800">
                Summer in a Can
              </h2>
<p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600">
                Made from Balgownie’s own sun‑kissed shiraz grapes, this fruity,
                refreshing sangria is our spin on a classic favourite. It is summer in
                a can – best served chilled, shared with mates, for those golden
                hour sips.
              </p>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    ABV
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    8.0%
                  </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    Serve
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    Ice‑cold, over fruit
                  </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    Format
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    250 ml cans
                  </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    Occasion
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    Aperitivo &amp; parties
                  </p>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-[#ff2f92] px-6 sm:px-7 py-2.5 text-base font-medium text-white hover:bg-[#f0197f]" href="#pre-order" id="shop">
                  Shop Now
                </a>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 sm:px-7 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50">
                  Learn More
                </button>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[0.7rem] font-semibold text-emerald-600">
                    ✓
                  </span>
<span>
                    Vegan friendly · Small batch · Victoria grown
                  </span>
</div>
</div>
</div>

<aside className="relative">
<div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-pink-50 via-white to-amber-50 p-4 sm:p-5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
                      Limited Drop
                    </p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                      Solmate Mixed 8‑Pack
                    </p>
</div>
<span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-[0.65rem] font-medium text-slate-500">
                    Ships in 3–5 days
                  </span>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="flex-1">
<p className="text-2xl font-semibold tracking-tight text-slate-900">
                      $48
                      <span className="ml-1 text-xs font-medium text-slate-500">
                        AUD · incl. GST
                      </span>
</p>
<p className="mt-2 text-sm text-slate-600">
                      Includes 8 x 250 ml cans of Solmate Sangria, delivered chilled
                      where cold freight is available.
                    </p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.65rem]">
                        ★
                      </span>
                      4.9 average from early tasters
                    </div>
</div>
<div className="hidden sm:flex h-32 w-20 sm:h-40 sm:w-24 items-end justify-center rounded-2xl bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg">
<div className="h-full w-[55%] rounded-full bg-gradient-to-b from-amber-50/90 to-white/90 shadow-inner"></div>
</div>
</div>
<div className="mt-5 flex flex-wrap items-center gap-3">
<button className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
                    Add to Cart
                  </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
                    Gift Options
                  </button>
</div>
<div className="mt-4 flex flex-wrap gap-3 text-[0.7rem] text-slate-500">
<span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    In stock at Yarra Valley &amp; Bendigo
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1">
                    No minimum order
                  </span>
</div>
</div>
</aside>
</section>

<section className="mt-12 border-t border-slate-100 pt-8" id="what-is-solmate">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div className="max-w-xl">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  What is Solmate?
                </h3>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Solmate Sangria is a bright, easy‑drinking sangria crafted from estate‑grown
                  shiraz, layered with citrus and gentle spice. Think juicy red berries, orange
                  peel and a subtle spritz that keeps every sip refreshing.
                </p>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Designed for relaxed afternoons, long lunches and effortless entertaining,
                  Solmate brings winery quality to a ready‑to‑pour format you can take anywhere.
                </p>
</div>
<div className="grid w-full max-w-sm grid-cols-2 gap-3">
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    Style
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    Modern sangria
                  </p>
<p className="mt-1 text-sm text-slate-600">
                    Fruit‑forward, lightly sparkling, balanced sweetness.
                  </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                    Best with
                  </p>
<p className="mt-1 text-sm font-semibold text-slate-900">
                    Tapas &amp; BBQ
                  </p>
<p className="mt-1 text-sm text-slate-600">
                    Perfect alongside grazing boards, grilled seafood and salads.
                  </p>
</div>
</div>
</div>
</section>

<section className="mt-10 border-t border-slate-100 pt-8" id="tasting-notes">
<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
<div className="max-w-xl">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Tasting Notes
                </h3>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  On the nose, expect a burst of ripe strawberries, blood orange and a hint of
                  spice. The palate is juicy and refreshing, with red fruits, citrus and a clean,
                  dry finish that keeps you coming back.
                </p>
</div>
<div className="grid w-full max-w-sm gap-3">
<div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
<span className="text-sm font-medium text-slate-700">Fruitiness</span>
<div className="flex h-1.5 flex-1 items-center rounded-full bg-slate-200 ml-3">
<div className="h-1.5 w-4/5 rounded-full bg-pink-500"></div>
</div>
<span className="ml-2 text-xs text-slate-500">High</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
<span className="text-sm font-medium text-slate-700">Sweetness</span>
<div className="flex h-1.5 flex-1 items-center rounded-full bg-slate-200 ml-3">
<div className="h-1.5 w-1/2 rounded-full bg-pink-500"></div>
</div>
<span className="ml-2 text-xs text-slate-500">Medium</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
<span className="text-sm font-medium text-slate-700">Spritz</span>
<div className="flex h-1.5 flex-1 items-center rounded-full bg-slate-200 ml-3">
<div className="h-1.5 w-3/5 rounded-full bg-pink-500"></div>
</div>
<span className="ml-2 text-xs text-slate-500">Fresh</span>
</div>
</div>
</div>
</section>

<section className="mt-10 border-t border-slate-100 pt-8" id="our-estate">
<div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Our Estate
                </h3>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Balgownie Estate has been growing premium Victorian fruit for decades. Solmate
                  captures that heritage in a more casual, ready‑to‑pour format, without losing the
                  care and character we are known for.
                </p>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  From the Yarra Valley to Bendigo, our vineyards are farmed with a focus on
                  quality and sustainability, so every can of Solmate starts with exceptional fruit.
                </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
<p className="text-[0.7rem] font-medium tracking-[0.14em] text-slate-500 uppercase">
                  Visit the Estate
                </p>
<p className="mt-2 text-sm text-slate-700">
                  Add Solmate Sangria to your next stay, tasting or event at Balgownie.
                </p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li>• Cellar door tastings and shared boards</li>
<li>• Restaurant pairings and long lunches</li>
<li>• Weddings, parties and group bookings</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50">
                  Explore Experiences
                </button>
</div>
</div>
</section>

<section className="mt-10 border-t border-slate-100 pt-8" id="pre-order">
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Solmate Sangria is now pouring
                </h3>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Solmate Sangria is now available to order online and enjoy at home, by the pool
                  or at your next gathering. Stock up for summer with convenient 8‑packs and
                  mixed bundles, delivered from our estate to your door.
                </p>
<p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Choose your pack size, add a gift message if you like, and we’ll take care of the rest.
                </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black" href="/wine-shop/solmate-sangria">
                    Shop Solmate in the Wine Shop
                  </a>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
                    View All Estate Wines
                  </button>
</div>
<p className="mt-3 text-sm text-slate-500">
                  Available while this seasonal release lasts. Delivering across Victoria and select regions.
                </p>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
<p className="text-sm font-semibold tracking-tight text-slate-900">
                  Quick details
                </p>
<p className="mt-1 text-sm text-slate-600">
                  Order directly from our wine shop with secure checkout and flexible delivery options.
                </p>
<div className="mt-4 grid gap-3 text-sm text-slate-700">
<div className="flex items-start justify-between">
<span>Pack sizes</span>
<span className="text-slate-600">4, 8 &amp; 16 cans</span>
</div>
<div className="flex items-start justify-between">
<span>Shipping</span>
<span className="text-slate-600">VIC &amp; selected interstate regions</span>
</div>
<div className="flex items-start justify-between">
<span>Serving</span>
<span className="text-slate-600">Best chilled, over ice &amp; fresh fruit</span>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#ff2f92] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#f0197f]" href="/wine-shop">
                  Go to Wine Shop
                </a>
<p className="mt-2 text-[0.7rem] text-slate-500">
                  You’ll be redirected to the Balgownie Estate wine shop to complete your purchase.
                </p>
</div>
</div>
</section>
</main>
</div>
</div>
</div>

    </>
  );
}
