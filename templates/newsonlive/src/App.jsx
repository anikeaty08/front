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



      const CATEGORIES = ["World","Business","Tech","Sports","Politics","Markets","Science","Culture","Health"];
      const SOURCES = ["WireDesk","Global Post","MarketWatchr","Daily Byte","Sportline","Civic Now","Science Hub","Culture Beat","HealthNote"];

      const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      const pick = (arr) => arr[rand(0, arr.length - 1)];
      const nowMinusMinutes = (m) => Date.now() - m * 60000;
      const timeAgo = (ts) => {
        const diff = Math.max(1, Math.floor((Date.now() - ts) / 60000));
        if (diff < 60) return diff + "m ago";
        const h = Math.floor(diff / 60);
        return h + "h ago";
      };

      const IMAGE_POOL = [
        "https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549880181-56a44cf4a9a7?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop"
      ];
      const AVATARS = [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop"
      ];
      const VIDEO_SAMPLE = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

      // Fallbacks for robustness
      const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop";
      const FALLBACK_AVATAR = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop";

      let currentFilter = "All";
      let isLoading = false;
      let loadedCount = 0;

      function generatePost(idOverride) {
        const id = idOverride ?? crypto.randomUUID?.() ?? String(Math.random()).slice(2);
        const category = pick(CATEGORIES);
        const source = pick(SOURCES);
        const type = pick(["image","text","video","image","text"]); // slight bias to images
        const ts = nowMinusMinutes(rand(1, 240));
        const titleSeeds = {
          World: ["Leaders meet to discuss regional stability","Relief efforts expand after storm","Border talks enter new phase"],
          Business: ["Earnings beat expectations in Q3","Startups eye profitability push","Investors reassess risk outlook"],
          Tech: ["New AI tools roll out to creators","Privacy update ships to devices","Open standards gain momentum"],
          Sports: ["Late goal seals dramatic win","Injury update ahead of finals","Rising star sets new record"],
          Politics: ["Policy debate intensifies in senate","Local elections set voter turnout","Reform bill advances to floor"],
          Markets: ["Indices steady as outlook clears","Energy stocks lead session gains","Bonds rally on mixed data"],
          Science: ["Researchers map deep-sea biodiversity","Telescope captures rare event","Open dataset accelerates study"],
          Culture: ["Festival highlights independent voices","Museum unveils modernist wing","Series finale draws reactions"],
          Health: ["Study links sleep to cognition","Clinics expand telehealth access","Nutrition guidelines updated"]
        };
        const title = pick(titleSeeds[category]);
        const summary = "Developing story with verified updates and expert context as details emerge.";
        const image = pick(IMAGE_POOL);
        const avatar = pick(AVATARS);

        return { id, type, category, source, title, summary, image, avatar, ts };
      }

      function categoryChip(cat) {
        return `
          <span class="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">${cat}</span>
        `;
      }

      function renderPost(post) {
        const media = (() => {
          if (post.type === "image") {
            return `
              <div class="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src="${post.image}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  referrerpolicy="no-referrer"
                  onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
                  class="w-full h-56 md:h-72 object-cover transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>
            `;
          }
          if (post.type === "video") {
            return `
              <div class="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <video controls playsinline preload="metadata" class="w-full h-auto block">
                  <source src="${VIDEO_SAMPLE}" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            `;
          }
          return "";
        })();

        return `
          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div class="p-4">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <img
                    src="${post.avatar}"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    referrerpolicy="no-referrer"
                    onerror="this.onerror=null; this.src='${FALLBACK_AVATAR}';"
                    class="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                  />
                  <div>
                    <div class="text-sm font-medium text-slate-900">${post.source}</div>
                    <div class="text-xs text-slate-500">${timeAgo(post.ts)}</div>
                  </div>
                </div>
                ${categoryChip(post.category)}
              </div>

              <h2 class="mt-3 text-lg tracking-tight font-semibold text-slate-900">
                ${post.title}
              </h2>
              <p class="mt-1 text-sm text-slate-600">${post.summary}</p>

              ${media}

              <div class="mt-3 flex items-center gap-4 text-xs text-slate-500">
                <button class="inline-flex items-center gap-1 hover:text-blue-700">
                  <i data-lucide="share-2" class="h-3.5 w-3.5"></i> Share
                </button>
                <button class="inline-flex items-center gap-1 hover:text-blue-700">
                  <i data-lucide="bookmark" class="h-3.5 w-3.5"></i> Save
                </button>
                <button class="inline-flex items-center gap-1 hover:text-blue-700">
                  <i data-lucide="message-square" class="h-3.5 w-3.5"></i> Comments
                </button>
              </div>
            </div>
          </article>
        `;
      }

      function clearFeed() {
        document.getElementById("feed").innerHTML = "";
        loadedCount = 0;
      }

      // Insert posts directly into the feed so the flex gap applies correctly
      function appendPosts(batch) {
        const feed = document.getElementById("feed");
        const html = batch.map(renderPost).join("");
        feed.insertAdjacentHTML("beforeend", html);
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      function loadMore(count = 6) {
        if (isLoading) return;
        isLoading = true;

        const items = [];
        for (let i = 0; i < count; i++) {
          const p = generatePost();
          if (currentFilter === "All" || p.category === currentFilter) {
            items.push(p);
          } else {
            i--;
          }
        }

        setTimeout(() => {
          appendPosts(items);
          loadedCount += items.length;
          isLoading = false;
        }, 400);
      }

      function setActiveCategoryButtons(cat) {
        document.querySelectorAll('[data-tab]').forEach(btn => {
          if (btn.getAttribute('data-tab') === cat) {
            btn.classList.add("bg-blue-50","text-blue-700","ring-blue-200","font-semibold");
            btn.classList.remove("text-slate-700");
          } else if (cat === "All" && btn.getAttribute('data-tab') === "All") {
            btn.classList.add("bg-blue-50","text-blue-700","ring-blue-200","font-semibold");
            btn.classList.remove("text-slate-700");
          } else {
            btn.classList.remove("bg-blue-50","text-blue-700","ring-blue-200","font-semibold");
            btn.classList.add("text-slate-700");
          }
        });
        document.querySelectorAll('[data-nav]').forEach(btn => {
          if ((cat === "All" && btn.getAttribute('data-nav') === "All") || btn.getAttribute('data-nav') === cat) {
            btn.classList.add("text-blue-700");
          } else {
            btn.classList.remove("text-blue-700");
          }
        });
      }

      function applyFilter(cat) {
        currentFilter = cat;
        setActiveCategoryButtons(cat);
        clearFeed();
        loadMore(8);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function attachSearch() {
        const handler = (value) => {
          const q = value.trim().toLowerCase();
          const cards = document.querySelectorAll("#feed article");
          cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(q) ? "" : "none";
          });
        };
        const si = document.getElementById("searchInput");
        const sim = document.getElementById("searchInputMobile");
        si?.addEventListener("input", e => handler(e.target.value));
        sim?.addEventListener("input", e => handler(e.target.value));
      }

      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        btn?.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });

        document.querySelectorAll('[data-tab]').forEach(el => {
          el.addEventListener('click', () => applyFilter(el.getAttribute('data-tab')));
        });
        document.querySelectorAll('[data-nav]').forEach(el => {
          el.addEventListener('click', () => {
            if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
            applyFilter(el.getAttribute('data-nav'));
          });
        });

        setActiveCategoryButtons("All");
        loadMore(8);
        attachSearch();

        const sentinel = document.getElementById("feedSentinel");
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !isLoading) {
              loadMore(6);
            }
          });
        }, { rootMargin: "600px 0px" });
        io.observe(sentinel);
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
      
<div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-red-600"></div>
<header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<img alt="NewsOnlive logo" className="h-8 w-auto" id="brandLogo" onerror="this.style.display='none';document.getElementById('brandWordmark').classList.remove('hidden');" src="logo-newsonlive.png"/>
<span className="hidden text-xl tracking-tight font-semibold" id="brandWordmark">
<span className="text-blue-700">News</span><span className="text-red-600">Onlive</span>
</span>
</a>
<div className="hidden md:flex items-center gap-6">
<nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
<button className="hover:text-blue-700 transition-colors" data-nav="All">Home</button>
<button className="hover:text-blue-700 transition-colors" data-nav="World">World</button>
<button className="hover:text-blue-700 transition-colors" data-nav="Business">Business</button>
<button className="hover:text-blue-700 transition-colors" data-nav="Tech">Tech</button>
<button className="hover:text-blue-700 transition-colors" data-nav="Sports">Sports</button>
</nav>
<div className="relative">
<input className="w-64 rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" id="searchInput" placeholder="Search headlines" type="text"/>
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
</div>
<button className="rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/30">
              Subscribe
            </button>
</div>
<button aria-label="Open menu" className="md:hidden -m-2 p-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-slate-100" id="mobileMenuBtn">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden border-t border-slate-200" id="mobileMenu">
<div className="py-3">
<div className="px-2">
<div className="relative mb-3">
<input className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" id="searchInputMobile" placeholder="Search headlines" type="text"/>
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
</div>
</div>
<nav className="grid grid-cols-2 gap-2 px-2 pb-3 text-sm font-medium">
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="All">Home</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="World">World</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Business">Business</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Tech">Tech</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Sports">Sports</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Politics">Politics</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Markets">Markets</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Science">Science</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Culture">Culture</button>
<button className="rounded-lg px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-left" data-nav="Health">Health</button>
</nav>
<div className="px-2 pb-4">
<button className="w-full rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/30">
                Subscribe
              </button>
</div>
</div>
</div>
</div>
</header>
<section className="mx-auto max-w-7xl px-4 md:px-6">
<div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 pt-4">
<button className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200" data-tab="All">
          For you
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="World">
          World
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Business">
          Business
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Tech">
          Tech
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Sports">
          Sports
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Politics">
          Politics
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Markets">
          Markets
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Science">
          Science
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Culture">
          Culture
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-200" data-tab="Health">
          Health
        </button>
</div>
</section>
<main className="mx-auto max-w-7xl px-4 md:px-6">
<div className="py-6 flex justify-center">
<h1 className="sr-only">NewsOnlive Feed</h1>
</div>
<div className="mx-auto max-w-3xl">

<div className="flex flex-col gap-6 md:gap-7" id="feed"></div>
<div className="py-10 flex justify-center text-slate-500" id="feedSentinel">
<div className="inline-flex items-center gap-2 text-sm">
<i className="h-4 w-4 animate-spin" data-lucide="loader-2"></i>
            Loading more stories
          </div>
</div>
</div>
</main>
<section className="mx-auto max-w-7xl px-4 md:px-6 pb-12">
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 to-blue-700 p-6 md:p-8 text-white">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl tracking-tight font-semibold">Stay ahead with NewsOnlive</h3>
<p className="mt-1 text-sm/6 text-blue-100">Daily brief delivered at 7am. Unsubscribe anytime.</p>
</div>
<form className="w-full md:w-auto flex gap-2">
<input className="w-full md:w-80 rounded-xl border-0 bg-white/95 px-4 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-1 ring-inset ring-blue-300 focus:ring-2 focus:ring-white/60" placeholder="you@example.com" type="email"/>
<button className="rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-white/40" type="submit">
              Join
            </button>
</form>
</div>
</div>
</section>
<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="NewsOnlive logo small" className="h-6 w-auto" onerror="this.style.display='none';" src="logo-newsonlive.png"/>
<span className="text-sm font-medium text-slate-600">© <span className="font-semibold text-slate-800">NewsOnlive</span> · All rights reserved</span>
</div>
<nav className="flex items-center gap-5 text-sm text-slate-600">
<a className="hover:text-blue-700" href="#">About</a>
<a className="hover:text-blue-700" href="#">Careers</a>
<a className="hover:text-blue-700" href="#">Terms</a>
<a className="hover:text-blue-700" href="#">Privacy</a>
</nav>
</div>
</div>
</footer>


    </>
  );
}
