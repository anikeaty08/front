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



      const modules = [
        {
          id: 1,
          name: "Microsoft security offerings — v4",
          description: "Prepare SDRs to guide the call with clear narrative and objectives.",
          status: "In Progress",
          current: 3,
          total: 4,
          bestScore: 4,
          rank: null,
          image: "https://images.unsplash.com/photo-1534759846116-579bd503684b?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Continue"
        },
        {
          id: 2,
          name: "Microsoft sales enablement",
          description: "Foundational training for sales readiness at scale.",
          status: "In Progress",
          current: 2,
          total: 7,
          bestScore: 44,
          rank: null,
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Continue"
        },
        {
          id: 3,
          name: "Microsoft Sales Enablement — v3",
          description: "Advanced scenarios and objection handling.",
          status: "In Progress",
          current: 3,
          total: 8,
          bestScore: 29,
          rank: null,
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Resume"
        },
        {
          id: 4,
          name: "Microsoft Security Sales Foundation Enablement",
          description: "Call context, discovery and narrative for security platform.",
          status: "In Progress",
          current: 3,
          total: 5,
          bestScore: 10,
          rank: null,
          image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Resume"
        },
        {
          id: 5,
          name: "MS Security for SMB",
          description: "Prospecting to close for SMB security opportunities.",
          status: "Not Started",
          current: 0,
          total: 5,
          bestScore: null,
          rank: null,
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Start"
        },
        {
          id: 6,
          name: "Microsoft security sales for SMB",
          description: "Complete journey for MS Security platform selling.",
          status: "Not Started",
          current: 0,
          total: 5,
          bestScore: null,
          rank: null,
          image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
          active: true,
          cta: "Start"
        },
        {
          id: 7,
          name: "AI Readiness — Fundamentals",
          description: "Introduce LLM concepts, prompt basics and safe usage.",
          status: "Completed",
          current: 6,
          total: 6,
          bestScore: 92,
          rank: 3,
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
          active: false,
          cta: "Review"
        },
        {
          id: 8,
          name: "Cloud Essentials",
          description: "Core compute, storage and networking for newcomers.",
          status: "Completed",
          current: 5,
          total: 5,
          bestScore: 88,
          rank: 5,
          image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
          active: false,
          cta: "Review"
        }
      ];

      let currentTab = "active";
      let variant = "a";
      let gridCols = "3";
      let searchTerm = "";

      const gridEl = document.getElementById("grid");
      const searchEl = document.getElementById("search");

      const publishedAtLabel = new Date().toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });

      function statusBadge(status) {
        const map = {
          "In Progress": "bg-amber-50 text-amber-700 ring-amber-200",
          "Not Started": "bg-slate-100 text-slate-600 ring-slate-200",
          "Completed": "bg-emerald-50 text-emerald-700 ring-emerald-200"
        };
        return `<span class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ring-1 ${map[status] || "bg-slate-100 text-slate-600 ring-slate-200"}">
          <i data-lucide="${status==='Completed'?'check-circle2':status==='In Progress'?'loader-2':'dot'}" class="h-3.5 w-3.5"></i>${status}
        </span>`;
      }

      function progressBar(current, total) {
        const pct = total ? Math.round((current / total) * 100) : 0;
        return `
          <div class="w-full sm:max-w-[260px]">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Progress</span>
              <span class="font-medium text-slate-700">${current}/${total}</span>
            </div>
            <div class="h-2 w-full rounded-full bg-slate-100">
              <div class="h-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      }

      function statItem(icon, label, value) {
        return `
          <div class="flex items-center gap-2">
            <i data-lucide="${icon}" class="h-4 w-4 text-slate-400"></i>
            <div class="text-xs text-slate-500">${label}</div>
            <div class="text-xs font-medium text-slate-700">${value ?? "--"}</div>
          </div>
        `;
      }

      function cardA(m) {
        return `
          <article class="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition h-[360px] flex flex-col">
            <div class="relative h-32 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="h-full w-full object-cover transition group-hover:scale-[1.02]" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
              <div class="absolute top-3 left-3">${statusBadge(m.status)}</div>
            </div>
            <div class="p-4 flex-1">
              <h3 class="text-base font-semibold tracking-tight line-clamp-1">${m.name}</h3>
              <p class="mt-3 text-sm text-slate-500 line-clamp-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${m.description}</p>
              <div class="mt-3">
                ${progressBar(m.current, m.total)}
              </div>
              <div class="mt-3 grid grid-cols-3 gap-3">
                ${statItem("trophy", "Best", m.bestScore != null ? m.bestScore + "/100" : "--")}
                ${statItem("bar-chart-2", "Score", m.bestScore != null ? m.bestScore : "--")}
                ${statItem("flag", "Rank", m.rank ?? "--")}
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-slate-200 p-4">
              <div class="text-xs text-slate-500">Published at ${publishedAtLabel}</div>
              <button class="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <i data-lucide="play" class="h-4 w-4"></i>${m.cta}
              </button>
            </div>
          </article>
        `;
      }

      function cardB(m) {
        return `
          <article class="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition h-[360px] flex flex-col">
            <div class="flex items-center gap-3 p-4">
              <div class="h-12 w-12 overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="h-full w-full object-cover" />
              </div>
              <div class="min-w-0">
                <h3 class="text-sm font-semibold tracking-tight truncate">${m.name}</h3>
                <div class="mt-1">${statusBadge(m.status)}</div>
              </div>
              <button class="ml-auto rounded-md p-2 hover:bg-slate-50">
                <i data-lucide="bookmark" class="h-4 w-4 text-slate-500"></i>
              </button>
            </div>
            <div class="px-4 flex-1">
              <div class="mt-3 text-sm text-slate-500 line-clamp-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${m.description}</div>
              <div class="mt-3">${progressBar(m.current, m.total)}</div>
            </div>
            <div class="mt-3 grid grid-cols-3 gap-3 px-4 pb-4">
              <div class="rounded-lg bg-slate-50 p-3">
                <div class="text-[11px] text-slate-500">Best</div>
                <div class="text-sm font-medium text-slate-800">${m.bestScore != null ? m.bestScore + "/100" : "--"}</div>
              </div>
              <div class="rounded-lg bg-slate-50 p-3">
                <div class="text-[11px] text-slate-500">Rank</div>
                <div class="text-sm font-medium text-slate-800">${m.rank ?? "--"}</div>
              </div>
              <div class="rounded-lg bg-slate-50 p-3">
                <div class="text-[11px] text-slate-500">Complete</div>
                <div class="text-sm font-medium text-slate-800">${m.total ? Math.round((m.current/m.total)*100) : 0}%</div>
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-slate-200 p-4">
              <button class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">
                <i data-lucide="eye" class="h-4 w-4"></i> Preview
              </button>
              <button class="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <i data-lucide="play" class="h-4 w-4"></i>${m.cta}
              </button>
            </div>
          </article>
        `;
      }

      function cardC(m) {
        return `
          <article class="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition h-[360px]">
            <div class="flex h-full">
              <div class="relative w-40 shrink-0">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="h-full w-full object-cover" />
                <div class="absolute top-3 left-3">${statusBadge(m.status)}</div>
              </div>
              <div class="flex-1 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <h3 class="text-base font-semibold tracking-tight line-clamp-1">${m.name}</h3>
                    <p class="mt-3 text-sm text-slate-500 line-clamp-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${m.description}</p>
                  </div>
                  <button class="rounded-md p-2 hover:bg-slate-50">
                    <i data-lucide="ellipsis" class="h-4 w-4 text-slate-500"></i>
                  </button>
                </div>
                <div class="mt-3 grid grid-cols-3 gap-4">
                  ${progressBar(m.current, m.total)}
                  <div class="space-y-2">
                    ${statItem("trophy", "Best", m.bestScore != null ? m.bestScore + "/100" : "--")}
                    ${statItem("flag", "Rank", m.rank ?? "--")}
                  </div>
                  <div class="flex flex-col items-end justify-between">
                    <button class="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                      <i data-lucide="play" class="h-4 w-4"></i>${m.cta}
                    </button>
                    <button class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">
                      <i data-lucide="bar-chart-2" class="h-3.5 w-3.5"></i> Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      }

      function render() {
        gridEl.className = "mt-6 grid gap-6 " + (gridCols === "2" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3");

        let list = modules.filter(m => (currentTab === "active" ? m.active : !m.active));
        if (searchTerm) {
          const q = searchTerm.toLowerCase();
          list = list.filter(m => m.name.toLowerCase().includes(q) || (m.description || "").toLowerCase().includes(q));
        }

        const tpl = { a: cardA, b: cardB, c: cardC }[variant];
        gridEl.innerHTML = list.map(tpl).join("");

        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".tab-btn").forEach(b => {
            b.classList.remove("border-slate-900", "text-slate-900");
            b.classList.add("border-transparent", "text-slate-500");
          });
          btn.classList.remove("border-transparent", "text-slate-500");
          btn.classList.add("border-slate-900", "text-slate-900");
          currentTab = btn.dataset.tab;
          render();
        });
      });

      document.getElementById("grid3").addEventListener("click", () => {
        gridCols = "3";
        render();
      });
      document.getElementById("grid2").addEventListener("click", () => {
        gridCols = "2";
        render();
      });

      const variantBtn = document.getElementById("variantBtn");
      const variantMenu = document.getElementById("variantMenu");
      const variantLabel = document.getElementById("variantLabel");
      variantBtn.addEventListener("click", () => {
        variantMenu.classList.toggle("hidden");
      });
      variantMenu.querySelectorAll("button").forEach(item => {
        item.addEventListener("click", () => {
          variant = item.dataset.variant;
          variantLabel.textContent = variant.toUpperCase();
          variantMenu.classList.add("hidden");
          render();
        });
      });
      document.addEventListener("click", (e) => {
        if (!variantBtn.contains(e.target) && !variantMenu.contains(e.target)) {
          variantMenu.classList.add("hidden");
        }
      });

      searchEl.addEventListener("input", (e) => {
        searchTerm = e.target.value;
        render();
      });

      render();
    
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
      
<div className="min-h-screen">
<aside className="fixed inset-y-0 left-0 w-72 border-r border-slate-200 bg-white/80 backdrop-blur">
<div className="flex h-16 items-center gap-3 px-6">
<div className="h-8 w-8 rounded-lg bg-slate-900"></div>
<div className="text-lg font-semibold tracking-tight">PitchSense AI</div>
</div>
<nav className="px-2 py-3">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span className="font-medium">Home</span>
</a>
<a className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-900 bg-slate-50 ring-1 ring-slate-200" href="#">
<i className="h-4 w-4" data-lucide="square-stack"></i>
<span className="font-medium">Assessment Modules</span>
</a>
</nav>
<div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200"></div>
<div className="min-w-0">
<div className="truncate text-sm font-medium">Vansh Doe</div>
<div className="truncate text-xs text-slate-500">vansh@hsv.digital</div>
</div>
<button className="ml-auto rounded-md p-1.5 hover:bg-slate-100">
<i className="h-4 w-4 text-slate-500" data-lucide="more-vertical"></i>
</button>
</div>
</div>
</aside>
<main className="ml-72">
<div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3 text-slate-500">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="text-sm">Assessment Modules</span>
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<span className="text-sm">Cards</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="3 x 3" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50" id="grid3">
<i className="h-4 w-4" data-lucide="grid-3x3"></i> 3x3
                </button>
<button aria-label="2 x 2" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50" id="grid2">
<i className="h-4 w-4" data-lucide="grid"></i> 2x2
                </button>
<div className="h-6 w-px bg-slate-200 mx-1"></div>
<div className="relative">
<button aria-haspopup="menu" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50" id="variantBtn">
<i className="h-4 w-4" data-lucide="layers"></i>
                    Variant: <span className="font-medium" id="variantLabel">A</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 hidden w-36 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg" id="variantMenu">
<button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50" data-variant="a">A — Image Top</button>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="mx-auto max-w-7xl px-6 py-8">
<header className="mb-6">
<h1 className="text-3xl tracking-tight font-semibold">Assessment Modules</h1>
<p className="mt-1 text-sm text-slate-500">View and access assessment modules assigned to your organization</p>
</header>
<div className="flex flex-wrap items-center gap-3 justify-between">
<div className="flex items-center gap-6">
<div className="flex">
<button className="tab-btn border-b-2 border-slate-900 text-slate-900 px-0.5 pb-1.5 text-sm font-medium tracking-tight" data-tab="active">Active</button>
<button className="tab-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-3 pb-1.5 text-sm font-medium" data-tab="inactive">Inactive</button>
</div>
</div>
<div className="relative w-full sm:w-80">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" id="search" placeholder="Search modules..." type="text" />
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" id="grid"></div>
</section>
</main>
</div>


    </>
  );
}
