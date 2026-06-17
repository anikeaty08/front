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



      // Sample dataset
      const data = [
        { id: 1, name: "asdf", sub: "asdf", url: "https://nova-techs.com", score: 83, status: "Good", issues: 19, lastScan: "about 1 hour ago", img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
        { id: 2, name: "asef", sub: "asdf", url: "https://www.better-auth.com/", score: 92, status: "Excellent", issues: 1284, lastScan: "about 1 hour ago", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" },
        { id: 3, name: "reab", sub: "asdf", url: "https://reab.com/", score: 79, status: "Good", issues: 231, lastScan: "2 days ago", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600&auto=format&fit=crop" },
        { id: 4, name: "betenbab", sub: "asdfafsd", url: "http://betenbab.com/", score: 92, status: "Excellent", issues: 68, lastScan: "2 days ago", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop" },
        { id: 5, name: "nova-tech", sub: "asdfasdf", url: "https://nova-techs.com/", score: 83, status: "Good", issues: 16, lastScan: "2 days ago", img: "https://images.unsplash.com/photo-1547658719-54cb785db6fd?q=80&w=600&auto=format&fit=crop" },
        { id: 6, name: "a11y-labs", sub: "core", url: "https://a11y-labs.dev", score: 65, status: "Attention", issues: 410, lastScan: "3 days ago", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" },
        { id: 7, name: "bright-ui", sub: "marketing", url: "https://bright-ui.app", score: 96, status: "Excellent", issues: 5, lastScan: "today", img: "https://images.unsplash.com/photo-1503576408730-5a26c57b1b40?q=80&w=600&auto=format&fit=crop" },
        { id: 8, name: "orbit", sub: "docs", url: "https://orbit.dev/docs", score: 74, status: "Good", issues: 120, lastScan: "5 hours ago", img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=600&auto=format&fit=crop" },
        { id: 9, name: "neo-cms", sub: "platform", url: "https://neo.cms", score: 47, status: "Poor", issues: 1210, lastScan: "1 week ago", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=600&auto=format&fit=crop" },
        { id: 10, name: "pixel-works", sub: "design", url: "https://pixel.works", score: 81, status: "Good", issues: 54, lastScan: "yesterday", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop" },
        { id: 11, name: "cloud-io", sub: "prod", url: "https://cloud.io", score: 89, status: "Good", issues: 77, lastScan: "yesterday", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" },
        { id: 12, name: "zen-mail", sub: "email", url: "https://zenmail.app", score: 91, status: "Excellent", issues: 9, lastScan: "3 hours ago", img: "https://images.unsplash.com/photo-1498050108023-2f4fdf4f2b99?q=80&w=600&auto=format&fit=crop" },
        { id: 13, name: "atlas", sub: "internal", url: "https://atlas.local", score: 72, status: "Good", issues: 160, lastScan: "4 days ago", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop" },
        { id: 14, name: "delta-pay", sub: "billing", url: "https://delta.pay", score: 58, status: "Attention", issues: 380, lastScan: "6 hours ago", img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=600&auto=format&fit=crop" },
        { id: 15, name: "quartz", sub: "blog", url: "https://quartz.blog", score: 86, status: "Good", issues: 31, lastScan: "today", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" }
      ];

      // State
      let state = {
        page: 1,
        perPage: 6,
        search: "",
        status: "All",
        sort: "scoreDesc", // scoreDesc, scoreAsc, issuesDesc, issuesAsc, recent
        view: "table", // table | cards
      };

      // Utilities
      const $ = (s) => document.querySelector(s);
      const $$ = (s) => Array.from(document.querySelectorAll(s));

      const statusClass = (status) => {
        switch (status) {
          case "Excellent":
            return "bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/20";
          case "Good":
            return "bg-emerald-300/10 text-emerald-300 ring-1 ring-inset ring-emerald-300/20";
          case "Attention":
            return "bg-amber-500/15 text-amber-400 ring-1 ring-inset ring-amber-500/20";
          default:
            return "bg-rose-500/15 text-rose-400 ring-1 ring-inset ring-rose-500/20";
        }
      };

      const scoreBarClass = (score) => {
        if (score >= 90) return "bg-emerald-500";
        if (score >= 75) return "bg-emerald-400";
        if (score >= 60) return "bg-amber-500";
        return "bg-rose-500";
      };

      // Filtering, sorting, pagination
      function getFiltered() {
        let out = data.slice();
        if (state.search) {
          const q = state.search.toLowerCase();
          out = out.filter(
            (d) =>
              d.name.toLowerCase().includes(q) ||
              d.sub.toLowerCase().includes(q) ||
              d.url.toLowerCase().includes(q)
          );
        }
        if (state.status !== "All") {
          out = out.filter((d) => d.status === state.status);
        }
        switch (state.sort) {
          case "scoreDesc":
            out.sort((a, b) => b.score - a.score);
            break;
          case "scoreAsc":
            out.sort((a, b) => a.score - b.score);
            break;
          case "issuesDesc":
            out.sort((a, b) => b.issues - a.issues);
            break;
          case "issuesAsc":
            out.sort((a, b) => a.issues - b.issues);
            break;
          case "recent":
            // Naive: treat "today" > "yesterday" > hours > days > week
            const weight = (s) => {
              if (s.includes("today")) return 5;
              if (s.includes("yesterday")) return 4;
              if (s.includes("hour")) return 3;
              if (s.includes("hours")) return 2;
              if (s.includes("days")) return 1;
              if (s.includes("week")) return 0;
              return 0;
            };
              out.sort((a, b) => weight(b.lastScan) - weight(a.lastScan));
            break;
        }
        return out;
      }

      function getPaged() {
        const list = getFiltered();
        const start = (state.page - 1) * state.perPage;
        return { total: list.length, items: list.slice(start, start + state.perPage) };
      }

      // Renderers
      function renderTable() {
        const tbody = $("#tableBody");
        tbody.innerHTML = "";
        const { items } = getPaged();

        for (const d of items) {
          const tr = document.createElement("tr");
          tr.className = "hover:bg-neutral-900/40 transition";
          tr.innerHTML = `
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-8 w-8 rounded-md object-cover" alt="">
                <div>
                  <div class="text-sm font-medium text-neutral-100">${d.name}</div>
                  <div class="text-xs text-neutral-500">${d.sub}</div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3">
              <a class="text-emerald-400 hover:text-emerald-300 underline-offset-2 hover:underline" href="${d.url}" target="_blank" rel="noreferrer">${d.url}</a>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div class="w-32 h-2 rounded-full bg-neutral-800 overflow-hidden">
                  <div class="h-full ${scoreBarClass(d.score)}" style="width:${d.score}%"></div>
                </div>
                <div class="text-neutral-200">${d.score}%</div>
                <span class="text-[11px] px-2 py-1 rounded-full ${statusClass(d.status)}">${d.status}</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="inline-flex items-center gap-1 text-neutral-300">
                <i data-lucide="triangle-alert" class="w-4 h-4 ${d.status==='Poor' || d.status==='Attention' ? 'text-amber-500' : 'text-neutral-500'}"></i>
                <span>${d.issues.toLocaleString()}</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <span class="text-neutral-300">${d.lastScan}</span>
            </td>
            <td class="px-4 py-3 text-right">
              <div class="flex justify-end items-center gap-2">
                <button class="p-2 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/80" title="Details">
                  <i data-lucide="scan-line" class="w-4 h-4"></i>
                </button>
                <button class="p-2 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/80" title="Edit">
                  <i data-lucide="pencil" class="w-4 h-4"></i>
                </button>
                <button class="p-2 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/80" title="Delete">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </td>
          `;
          tbody.appendChild(tr);
        }
        lucide.createIcons();
      }

      function renderCards() {
        const wrap = $("#cardsWrap");
        wrap.innerHTML = "";
        const { items } = getPaged();
        for (const d of items) {
          const card = document.createElement("div");
          card.className = "rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden";
          card.innerHTML = `
            <div class="h-24 w-full">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <h3 class="text-lg tracking-tight font-semibold">${d.name}</h3>
                  <p class="text-xs text-neutral-500">${d.sub}</p>
                </div>
                <span class="text-[11px] px-2 py-1 rounded-full ${statusClass(d.status)}">${d.status}</span>
              </div>
              <a href="${d.url}" target="_blank" class="mt-2 block text-emerald-400 hover:text-emerald-300 text-sm underline-offset-2 hover:underline">${d.url}</a>
              <div class="mt-3 grid grid-cols-3 gap-3">
                <div class="col-span-2">
                  <div class="flex items-center justify-between text-xs text-neutral-400">
                    <span>Compliance</span>
                    <span class="text-neutral-300">${d.score}%</span>
                  </div>
                  <div class="mt-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div class="h-full ${scoreBarClass(d.score)}" style="width:${d.score}%"></div>
                  </div>
                </div>
                <div class="flex items-center justify-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 text-sm">
                  <i data-lucide="triangle-alert" class="w-4 h-4 ${d.status==='Poor'||d.status==='Attention'?'text-amber-500':'text-neutral-500'}"></i>
                  <span>${d.issues}</span>
                </div>
              </div>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-xs text-neutral-400">Scanned ${d.lastScan}</span>
                <div class="flex items-center gap-2">
                  <button class="p-2 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/80" title="Details">
                    <i data-lucide="scan-line" class="w-4 h-4"></i>
                  </button>
                  <button class="p-2 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/80" title="Edit">
                    <i data-lucide="pencil" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
          wrap.appendChild(card);
        }
        lucide.createIcons();
      }

      function renderPagination(total) {
        const totalPages = Math.max(1, Math.ceil(total / state.perPage));
        state.page = Math.min(state.page, totalPages);

        $("#pageInfo").textContent = `Showing ${(total === 0) ? 0 : (state.page - 1) * state.perPage + 1}–${Math.min(state.page * state.perPage, total)} of ${total}`;
        const prev = $("#prevPage");
        const next = $("#nextPage");
        prev.disabled = state.page <= 1;
        next.disabled = state.page >= totalPages;

        const holder = $("#pageNumbers");
        holder.innerHTML = "";
        for (let i = 1; i <= totalPages && i <= 7; i++) {
          const btn = document.createElement("button");
          btn.className = `px-3 py-2 rounded-md text-sm border ${i === state.page ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:bg-neutral-800/80"}`;
          btn.textContent = i;
          btn.addEventListener("click", () => {
            state.page = i;
            render();
          });
          holder.appendChild(btn);
        }
      }

      function updateSummary() {
        const list = getFiltered();
        const total = list.length;
        const avg = total ? Math.round(list.reduce((a, b) => a + b.score, 0) / total) : 0;
        const issues = list.reduce((a, b) => a + b.issues, 0);
        $("#summaryTotal").textContent = total;
        $("#summaryAvg").textContent = `${avg}%`;
        $("#summaryIssues").textContent = issues.toLocaleString();
        $("#summaryAvgBar").style.width = `${avg}%`;

        const dist = {
          Excellent: list.filter((d) => d.status === "Excellent").length,
          Good: list.filter((d) => d.status === "Good").length,
          Attention: list.filter((d) => d.status === "Attention").length,
          Poor: list.filter((d) => d.status === "Poor").length,
        };
        statusChart.data.datasets[0].data = [dist.Excellent, dist.Good, dist.Attention, dist.Poor];
        statusChart.update();
      }

      function render() {
        const { total } = getPaged();
        if (state.view === "table") {
          $("#tableWrap").classList.remove("hidden");
          $("#cardsWrap").classList.add("hidden");
          renderTable();
        } else {
          $("#tableWrap").classList.add("hidden");
          $("#cardsWrap").classList.remove("hidden");
          renderCards();
        }
        renderPagination(getFiltered().length);
        updateSummary();
      }

      // Event listeners
      function bindUI() {
        $("#search").addEventListener("input", (e) => {
          state.search = e.target.value.trim();
          state.page = 1;
          render();
        });

        $$(".status-chip").forEach((btn) => {
          btn.addEventListener("click", () => {
            state.status = btn.dataset.status;
            state.page = 1;
            $$(".status-chip").forEach((b) => b.classList.remove("bg-neutral-800/80", "text-neutral-200"));
            btn.classList.add("bg-neutral-800/80", "text-neutral-200");
            render();
          });
        });
        // default select 'All'
        $$(".status-chip")[0].classList.add("bg-neutral-800/80","text-neutral-200");

        // Sort menu
        $("#sortBtn").addEventListener("click", () => {
          $("#sortMenu").classList.toggle("hidden");
        });
        $$("#sortMenu button").forEach((b) =>
          b.addEventListener("click", () => {
            state.sort = b.dataset.sort;
            $("#sortLabel").textContent = "Sort: " + b.textContent;
            $("#sortMenu").classList.add("hidden");
            render();
          })
        );
        document.addEventListener("click", (e) => {
          if (!$("#sortBtn").contains(e.target) && !$("#sortMenu").contains(e.target)) {
            $("#sortMenu").classList.add("hidden");
          }
          if (!$("#perPageBtn").contains(e.target) && !$("#perPageMenu").contains(e.target)) {
            $("#perPageMenu").classList.add("hidden");
          }
        });

        // Per page
        $("#perPageBtn").addEventListener("click", () => $("#perPageMenu").classList.toggle("hidden"));
        $$("#perPageMenu button").forEach((b) =>
          b.addEventListener("click", () => {
            state.perPage = parseInt(b.dataset.pp, 10);
            $("#perPageLabel").textContent = `Rows: ${state.perPage}`;
            state.page = 1;
            $("#perPageMenu").classList.add("hidden");
            render();
          })
        );

        // Pagination
        $("#prevPage").addEventListener("click", () => {
          state.page = Math.max(1, state.page - 1);
          render();
        });
        $("#nextPage").addEventListener("click", () => {
          const total = getFiltered().length;
          const totalPages = Math.ceil(total / state.perPage);
          state.page = Math.min(totalPages, state.page + 1);
          render();
        });

        // View toggle
        $("#viewToggle").addEventListener("click", () => {
          state.view = state.view === "table" ? "cards" : "table";
          $("#viewLabel").textContent = state.view === "table" ? "Table" : "Cards";
          $("#viewToggle").querySelector("i").setAttribute("data-lucide", state.view === "table" ? "layout-list" : "layout-grid");
          lucide.createIcons();
          render();
        });
      }

      // Chart.js setup
      let statusChart;
      function initChart() {
        const ctx = document.getElementById("statusChart").getContext("2d");
        statusChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Excellent", "Good", "Attention", "Poor"],
            datasets: [
              {
                data: [0, 0, 0, 0],
                backgroundColor: ["#10b981", "#6ee7b7", "#f59e0b", "#ef4444"],
                borderWidth: 0,
                hoverOffset: 4
              }
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "70%",
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`
                }
              }
            }
          }
        });
      }

      // Init
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();
        bindUI();
        initChart();
        render();
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
      

<div className="min-h-screen">

<header className="relative">
<div className="absolute inset-0 opacity-30">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative backdrop-blur-sm bg-neutral-950/40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-3xl tracking-tight font-semibold">Websites</h1>
<p className="mt-1 text-neutral-400 text-sm">Manage your properties and track accessibility compliance in one place.</p>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/80 transition" id="viewToggle">
<i className="w-4 h-4" data-lucide="layout-list"></i>
<span className="hidden md:inline">View</span>
<span className="text-neutral-500">/</span>
<span className="text-neutral-200" id="viewLabel">Table</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 text-neutral-950 px-3.5 py-2.5 text-sm font-medium hover:bg-emerald-400 transition">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Add Website
                </button>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Total Websites</p>
<i className="w-4 h-4 text-neutral-500" data-lucide="globe"></i>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold" id="summaryTotal">—</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Average Score</p>
<i className="w-4 h-4 text-neutral-500" data-lucide="gauge"></i>
</div>
<div className="mt-2 flex items-end gap-2">
<p className="text-2xl tracking-tight font-semibold" id="summaryAvg">—</p>
<span className="text-xs text-neutral-400 mb-1">compliance</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-500 w-[0%] transition-[width] duration-500" id="summaryAvgBar"></div>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Open Issues</p>
<i className="w-4 h-4 text-amber-500" data-lucide="triangle-alert"></i>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold" id="summaryIssues">—</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Status Mix</p>
<i className="w-4 h-4 text-neutral-500" data-lucide="pie-chart"></i>
</div>
<div className="mt-2">
<div className="w-full">
<div className="relative">
<div className="mx-auto w-40">
<div>
<div className="rounded-lg bg-neutral-900">
<div>
<div className="relative">
<div className="p-2">
<div>
<div className="relative">
<div className="rounded-md bg-neutral-900">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">

<div className="relative">
<div className="aspect-square">
<div className="relative h-full w-full">
<div className="absolute inset-0">
<div className="p-2">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative">
<div className="rounded-md">
<div className="relative h-40">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="statusChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
<div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Excellent</div>
<div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-emerald-300"></span> Good</div>
<div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-amber-500"></span> Attention</div>
<div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-rose-500"></span> Poor</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-2">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-72 rounded-md border border-neutral-800 bg-neutral-900 pl-9 pr-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-neutral-700" id="search" placeholder="Search websites, URLs…"/>
</div>
<div className="hidden sm:flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 p-1">
<button className="status-chip px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-800/80" data-status="All">All</button>
<button className="status-chip px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-800/80" data-status="Excellent">Excellent</button>
<button className="status-chip px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-800/80" data-status="Good">Good</button>
<button className="status-chip px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-800/80" data-status="Attention">Attention</button>
<button className="status-chip px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-800/80" data-status="Poor">Poor</button>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/80" id="sortBtn">
<i className="w-4 h-4" data-lucide="arrow-up-down"></i>
<span id="sortLabel">Sort: Score (desc)</span>
</button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-md border border-neutral-800 bg-neutral-900 p-1 shadow-xl" id="sortMenu">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-sort="scoreDesc">Score (desc)</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-sort="scoreAsc">Score (asc)</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-sort="issuesDesc">Issues (desc)</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-sort="issuesAsc">Issues (asc)</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-sort="recent">Most recent scan</button>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/80" id="perPageBtn">
<i className="w-4 h-4" data-lucide="rows"></i>
<span id="perPageLabel">Rows: 6</span>
</button>
<div className="hidden absolute right-0 mt-2 w-36 rounded-md border border-neutral-800 bg-neutral-900 p-1 shadow-xl" id="perPageMenu">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-pp="6">6</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-pp="10">10</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70" data-pp="20">20</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<div className="rounded-xl border border-neutral-800 bg-neutral-950/60 overflow-hidden hidden lg:block" id="tableWrap">
<table className="w-full text-sm">
<thead className="bg-neutral-900/60 text-neutral-400">
<tr className="border-b border-neutral-800">
<th className="text-left font-medium px-4 py-3">Website</th>
<th className="text-left font-medium px-4 py-3">URL</th>
<th className="text-left font-medium px-4 py-3">Compliance</th>
<th className="text-left font-medium px-4 py-3">Issues</th>
<th className="text-left font-medium px-4 py-3">Last Scan</th>
<th className="text-right font-medium px-4 py-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-900" id="tableBody"></tbody>
</table>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden" id="cardsWrap"></div>

<div className="mt-6 flex items-center justify-between">
<p className="text-xs text-neutral-400" id="pageInfo">—</p>
<div className="inline-flex items-center gap-1">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/80 disabled:opacity-50 disabled:pointer-events-none" id="prevPage">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
              Prev
            </button>
<div className="hidden sm:flex items-center gap-1" id="pageNumbers"></div>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/80 disabled:opacity-50 disabled:pointer-events-none" id="nextPage">
              Next
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</main>
</div>





    </>
  );
}
