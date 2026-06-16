import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data (from JSON)
      const rows = [
        { id: "AT-101", location: "Room 101", status: "Active",   lastUpdated: "2025-11-11 10:15 AM" },
        { id: "AT-102", location: "Room 102", status: "Disabled", lastUpdated: "2025-11-10 08:20 PM" },
        { id: "AT-103", location: "Lobby",    status: "Active",   lastUpdated: "2025-11-11 09:50 AM" },
      ];

      // State
      let searchQuery = "";
      let statusFilter = "All";
      let sortKey = "id";
      let sortDir = "asc"; // 'asc' | 'desc'
      let page = 1;
      const rowsPerPage = 10;

      // Elements
      const tableBody = document.getElementById("tableBody");
      const mobileList = document.getElementById("mobileList");
      const emptyState = document.getElementById("emptyState");
      const searchInput = document.getElementById("searchInput");
      const clearSearch = document.getElementById("clearSearch");
      const statusButton = document.getElementById("statusButton");
      const statusMenu = document.getElementById("statusMenu");
      const statusLabel = document.getElementById("statusLabel");
      const resetButton = document.getElementById("resetButton");
      const emptyReset = document.getElementById("emptyReset");
      const prevPage = document.getElementById("prevPage");
      const nextPage = document.getElementById("nextPage");
      const pageNumbers = document.getElementById("pageNumbers");
      const resultsRange = document.getElementById("resultsRange");
      const resultsTotal = document.getElementById("resultsTotal");
      const countTotal = document.getElementById("countTotal");
      const countActive = document.getElementById("countActive");
      const countDisabled = document.getElementById("countDisabled");

      function refreshIcons() {
        // Recreate lucide icons with stroke-width 1.5
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      function parseDate(value) {
        // Attempt robust parse: fallback to original string ordering if invalid
        const d = new Date(value);
        return isNaN(d.getTime()) ? null : d;
      }

      function compare(a, b, key) {
        const va = a[key];
        const vb = b[key];
        if (key === "lastUpdated") {
          const da = parseDate(va);
          const db = parseDate(vb);
          if (da && db) return da - db;
          return String(va).localeCompare(String(vb));
        }
        return String(va).localeCompare(String(vb), undefined, { numeric: true, sensitivity: "base" });
      }

      function apply() {
        // Filter
        let filtered = rows.filter((r) => {
          const q = searchQuery.trim().toLowerCase();
          const matchesQ =
            !q ||
            r.id.toLowerCase().includes(q) ||
            r.location.toLowerCase().includes(q);
          const matchesStatus = statusFilter === "All" || r.status === statusFilter;
          return matchesQ && matchesStatus;
        });

        // Sort
        filtered.sort((a, b) => {
          const cmp = compare(a, b, sortKey);
          return sortDir === "asc" ? cmp : -cmp;
        });

        // Pagination
        const total = filtered.length;
        const totalPages = Math.max(1, Math.ceil(total / rowsPerPage));
        if (page > totalPages) page = totalPages;
        const start = (page - 1) * rowsPerPage;
        const end = Math.min(start + rowsPerPage, total);
        const pageRows = filtered.slice(start, end);

        // Render desktop table
        tableBody.innerHTML = pageRows
          .map((r) => {
            const badge =
              r.status === "Active"
                ? `<span class="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2.5 py-1.5"><span class='h-1.5 w-1.5 bg-emerald-500 rounded-full'></span>${r.status}</span>`
                : `<span class="inline-flex items-center gap-1.5 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-md px-2.5 py-1.5"><span class='h-1.5 w-1.5 bg-rose-500 rounded-full'></span>${r.status}</span>`;
            return `
              <tr class="group hover:bg-neutral-50 transition">
                <td class="px-4 py-3">
                  <div class="inline-flex items-center gap-2">
                    <span class="text-neutral-900 font-medium">${r.id}</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-neutral-700">${r.location}</td>
                <td class="px-4 py-3">${badge}</td>
                <td class="px-4 py-3 text-neutral-700">${r.lastUpdated}</td>
              </tr>
            `;
          })
          .join("");

        // Render mobile cards
        mobileList.innerHTML = pageRows
          .map((r) => {
            const badge =
              r.status === "Active"
                ? `<span class="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1"><span class='h-1.5 w-1.5 bg-emerald-500 rounded-full'></span>${r.status}</span>`
                : `<span class="inline-flex items-center gap-1.5 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-md px-2 py-1"><span class='h-1.5 w-1.5 bg-rose-500 rounded-full'></span>${r.status}</span>`;
            return `
              <div class="px-4 py-4 border-t first:border-t-0 border-neutral-200">
                <div class="flex items-start justify-between">
                  <div>
                    <div class="text-base font-medium tracking-tight text-neutral-900">${r.id}</div>
                    <div class="text-sm text-neutral-600 mt-0.5">${r.location}</div>
                  </div>
                  ${badge}
                </div>
                <div class="mt-3 flex items-center gap-2 text-xs text-neutral-600">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  Last updated: ${r.lastUpdated}
                </div>
              </div>
            `;
          })
          .join("");

        // Empty state
        if (total === 0) {
          emptyState.classList.remove("hidden");
        } else {
          emptyState.classList.add("hidden");
        }

        // Counts (overall, not just page)
        const activeCount = rows.filter((r) => r.status === "Active").length;
        const disabledCount = rows.filter((r) => r.status === "Disabled").length;
        countTotal.textContent = rows.length;
        countActive.textContent = activeCount;
        countDisabled.textContent = disabledCount;

        // Footer info
        resultsRange.textContent = total ? `${start + 1}–${end}` : `0–0`;
        resultsTotal.textContent = String(total);

        // Pagination controls
        prevPage.disabled = page <= 1;
        nextPage.disabled = page >= totalPages;
        pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, i) => {
          const p = i + 1;
          const isCurrent = p === page;
          return `
            <button data-page="${p}" class="min-w-[2rem] h-9 px-2 rounded-lg border ${isCurrent ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"} text-sm focus:outline-none focus:ring-4 focus:ring-neutral-900/5 transition">
              ${p}
            </button>
          `;
        }).join("");

        // Update sort indicators on headers
        document.querySelectorAll('thead [data-sort]').forEach((btn) => {
          const key = btn.getAttribute('data-sort');
          const icon = btn.querySelector('[data-lucide]');
          if (!icon) return;
          if (key === sortKey) {
            icon.setAttribute('data-lucide', sortDir === 'asc' ? 'arrow-up' : 'arrow-down');
          } else {
            icon.setAttribute('data-lucide', 'chevrons-up-down');
          }
        });

        // Refresh icons after DOM updates
        refreshIcons();
      }

      // Event wiring
      // Search
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value || "";
        page = 1;
        clearSearch.classList.toggle("hidden", searchQuery.length === 0);
        apply();
      });
      clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        page = 1;
        clearSearch.classList.add("hidden");
        apply();
        searchInput.focus();
      });

      // Status dropdown open/close
      function closeStatusMenu() {
        statusMenu.classList.add("hidden");
        statusButton.setAttribute("aria-expanded", "false");
      }
      function openStatusMenu() {
        statusMenu.classList.remove("hidden");
        statusButton.setAttribute("aria-expanded", "true");
      }
      statusButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = statusMenu.classList.contains("hidden") === false;
        isOpen ? closeStatusMenu() : openStatusMenu();
      });
      document.addEventListener("click", (e) => {
        if (!statusMenu.contains(e.target) && !statusButton.contains(e.target)) {
          closeStatusMenu();
        }
      });
      statusMenu.querySelectorAll("button[data-status]").forEach((btn) => {
        btn.addEventListener("click", () => {
          statusFilter = btn.getAttribute("data-status");
          statusLabel.textContent = statusFilter;
          // Visual checkmark
          statusMenu.querySelectorAll("button[data-status]").forEach((b) => {
            const icon = b.querySelector("i[data-lucide='check']");
            if (icon) icon.style.opacity = b === btn ? "1" : "0";
          });
          page = 1;
          apply();
          closeStatusMenu();
        });
      });

      // Reset filters
      function resetAll() {
        searchQuery = "";
        searchInput.value = "";
        clearSearch.classList.add("hidden");
        statusFilter = "All";
        statusLabel.textContent = "All";
        // Reset checkmarks
        statusMenu.querySelectorAll("button[data-status]").forEach((b) => {
          const icon = b.querySelector("i[data-lucide='check']");
          if (icon) icon.style.opacity = b.getAttribute("data-status") === "All" ? "1" : "0";
        });
        sortKey = "id";
        sortDir = "asc";
        page = 1;
        apply();
      }
      resetButton.addEventListener("click", resetAll);
      emptyReset.addEventListener("click", resetAll);

      // Sorting
      document.querySelectorAll("thead [data-sort]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-sort");
          if (sortKey === key) {
            sortDir = sortDir === "asc" ? "desc" : "asc";
          } else {
            sortKey = key;
            sortDir = "asc";
          }
          page = 1;
          apply();
        });
      });

      // Pagination
      prevPage.addEventListener("click", () => {
        if (page > 1) {
          page -= 1;
          apply();
        }
      });
      nextPage.addEventListener("click", () => {
        // Max is handled in apply()
        page += 1;
        apply();
      });
      pageNumbers.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-page]");
        if (!btn) return;
        const p = Number(btn.getAttribute("data-page"));
        if (!Number.isNaN(p)) {
          page = p;
          apply();
        }
      });

      // Initial render
      apply();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto px-6 py-8">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center tracking-tight" style={{letterSpacing: '-0.02em'}}>
<span className="text-sm font-medium">AA</span>
</div>
<div className="hidden sm:flex items-center text-sm text-neutral-500">
<span className="hover:text-neutral-700 transition">Admin</span>
<span className="mx-2 text-neutral-300">/</span>
<span className="text-neutral-900">AeroTags</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 bg-white border border-neutral-200 rounded-md px-2.5 py-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
            Live
          </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 bg-white border border-neutral-200 rounded-md px-2.5 py-1.5">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
            Read-only
          </span>
</div>
</div>

<div className="mb-6">
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">AeroTags Overview</h1>
<p className="mt-1 text-neutral-600">View all Active and Disabled AeroTags by room or location</p>
</div>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

<div className="flex flex-1 items-stretch gap-3">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400 pointer-events-none" data-lucide="search"></i>
<input className="w-full h-11 rounded-lg bg-white border border-neutral-200 pl-10 pr-10 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 hover:border-neutral-300 transition" id="searchInput" placeholder="Search AeroTag by ID, Room, or Location" type="text"/>
<button aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 hidden text-neutral-400 hover:text-neutral-600 p-1 rounded-md hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300" id="clearSearch">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="relative">
<button aria-expanded="false" aria-haspopup="listbox" className="h-11 inline-flex items-center gap-2 rounded-lg bg-white border border-neutral-200 px-3.5 text-sm text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 transition" id="statusButton">
<i className="w-4.5 h-4.5 text-neutral-500" data-lucide="filter"></i>
<span>Status: <span className="font-medium" id="statusLabel">All</span></span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg bg-white border border-neutral-200 shadow-lg shadow-black/5 p-1.5" id="statusMenu">
<button className="w-full flex items-center justify-between gap-2 text-sm text-neutral-800 rounded-md px-2.5 py-2 hover:bg-neutral-50 focus:outline-none focus:bg-neutral-50" data-status="All">
<span>All</span>
<i className="w-4 h-4 text-neutral-400 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full flex items-center justify-between gap-2 text-sm text-neutral-800 rounded-md px-2.5 py-2 hover:bg-neutral-50 focus:outline-none focus:bg-neutral-50" data-status="Active">
<span>Active</span>
<i className="w-4 h-4 text-neutral-400 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full flex items-center justify-between gap-2 text-sm text-neutral-800 rounded-md px-2.5 py-2 hover:bg-neutral-50 focus:outline-none focus:bg-neutral-50" data-status="Disabled">
<span>Disabled</span>
<i className="w-4 h-4 text-neutral-400 opacity-0" data-lucide="check"></i>
</button>
</div>
</div>

<button className="h-11 inline-flex items-center gap-2 rounded-lg border border-transparent px-3 text-sm text-neutral-600 hover:text-neutral-900 hover:border-neutral-200 hover:bg-white focus:outline-none focus:ring-4 focus:ring-neutral-900/5 transition" id="resetButton">
<i className="w-4.5 h-4.5" data-lucide="rotate-ccw"></i>
            Reset
          </button>
</div>

<div className="flex items-center gap-2 text-sm">
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-neutral-200 px-2.5 py-1.5 text-neutral-700">
<i className="w-4 h-4" data-lucide="tag"></i>
<span id="countTotal">0</span> total
          </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-neutral-200 px-2.5 py-1.5 text-emerald-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span id="countActive">0</span> active
          </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-neutral-200 px-2.5 py-1.5 text-rose-700">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span id="countDisabled">0</span> disabled
          </span>
</div>
</div>

<div className="mt-6 rounded-xl bg-white border border-neutral-200 overflow-hidden">

<div className="hidden md:block">
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="bg-neutral-50/60 border-b border-neutral-200">
<tr>
<th className="text-left font-medium text-neutral-700 px-4 py-3">
<button className="group inline-flex items-center gap-1.5 hover:text-neutral-900 focus:outline-none" data-sort="id">
<span>AeroTag ID</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="chevrons-up-down"></i>
</button>
</th>
<th className="text-left font-medium text-neutral-700 px-4 py-3">
<button className="group inline-flex items-center gap-1.5 hover:text-neutral-900 focus:outline-none" data-sort="location">
<span>Location</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="chevrons-up-down"></i>
</button>
</th>
<th className="text-left font-medium text-neutral-700 px-4 py-3">
<button className="group inline-flex items-center gap-1.5 hover:text-neutral-900 focus:outline-none" data-sort="status">
<span>Status</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="chevrons-up-down"></i>
</button>
</th>
<th className="text-left font-medium text-neutral-700 px-4 py-3">
<button className="group inline-flex items-center gap-1.5 hover:text-neutral-900 focus:outline-none" data-sort="lastUpdated">
<span>Last Updated</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="chevrons-up-down"></i>
</button>
</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200" id="tableBody"></tbody>
</table>
</div>
</div>

<div className="md:hidden" id="mobileList"></div>

<div className="hidden flex flex-col items-center justify-center py-16 text-center" id="emptyState">
<div className="h-12 w-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-neutral-500" data-lucide="scan-search"></i>
</div>
<div className="text-lg font-medium tracking-tight text-neutral-900">No AeroTags found</div>
<p className="text-neutral-600 mt-1">Try adjusting your search or filter to find what you’re looking for.</p>
<button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-3.5 py-2.5 text-sm hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 transition" id="emptyReset">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
            Reset filters
          </button>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-neutral-200 bg-neutral-50/60">
<div className="text-sm text-neutral-600">
<span id="resultsRange">0–0</span>
            of
            <span id="resultsTotal">0</span>
            results
          </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-neutral-200 transition" id="prevPage">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
              Prev
            </button>
<div className="flex items-center gap-1" id="pageNumbers"></div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-neutral-200 transition" id="nextPage">
              Next
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="mt-4 text-[13px] text-neutral-600">
        This panel is for monitoring purposes only. AeroTags cannot be added or removed here.
      </div>
</div>


    </>
  );
}
