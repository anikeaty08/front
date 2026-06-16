import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data
      const currentUserRoles = ["Analyst", "Manager"]; // simulate assigned roles

      const reports = [
        {
          id: "r1",
          name: "Monthly Sales Overview",
          description: "Revenue, pipeline and conversion health by region.",
          businessLine: "Sales",
          roles: ["Analyst", "Manager"],
          type: "Dashboard",
          tags: ["Sales", "Pipeline"],
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
          url: "#",
          purpose: [
            "Monitor revenue performance vs. targets by region and segment.",
            "Track pipeline conversions and highlight at-risk deals.",
            "Provide leadership a monthly snapshot for decision-making."
          ],
          how: [
            "Use the region filter to narrow the view.",
            "Hover each bar to see tooltips with exact values.",
            "Export the summary table for executive review."
          ]
        },
        {
          id: "r2",
          name: "Operations Efficiency Dashboard",
          description: "Throughput, cycle time and bottleneck analysis for ops.",
          businessLine: "Operations",
          roles: ["Analyst", "Executive"],
          type: "Dashboard",
          tags: ["Ops", "Efficiency"],
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
          url: "#",
          purpose: [
            "Identify bottlenecks across key process stages.",
            "Track cycle times and SLA adherence.",
            "Support continuous improvement initiatives."
          ],
          how: [
            "Start with the overview to spot spikes in cycle time.",
            "Drill into a process stage to see driver metrics.",
            "Download the CSV to share with the ops team."
          ]
        },
        {
          id: "r3",
          name: "Finance Flash Report",
          description: "Daily snapshot of cash, AR/AP, and P&L highlights.",
          businessLine: "Finance",
          roles: ["Manager", "Executive"],
          type: "Report",
          tags: ["Finance", "Daily"],
          image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
          url: "#",
          purpose: [
            "Provide a quick financial health check each morning.",
            "Highlight variances vs. plan that require attention."
          ],
          how: [
            "Review top-line P&L first, then drill into AR aging.",
            "Flag any large payments or variances in comments."
          ]
        },
        {
          id: "r4",
          name: "Campaign Performance Summary",
          description: "Cross-channel metrics and ROI for current campaigns.",
          businessLine: "Marketing",
          roles: ["Analyst", "Manager"],
          type: "Report",
          tags: ["Marketing", "ROI"],
          image: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
          url: "#",
          purpose: [
            "Understand which channels are driving qualified leads.",
            "Compare ROI across campaigns to optimize spend."
          ],
          how: [
            "Filter by channel to analyze CPC and CPL trends.",
            "Use the attribution toggle to switch models."
          ]
        }
      ];

      // State
      let searchTerm = "";
      let blFilter = "All";
      let roleMode = "Assigned"; // Assigned, All, or specific role
      let typeFilter = "All";
      let page = 1;
      const pageSize = 3;
      let selectedReport = null;

      // Elements
      const listEl = document.getElementById("reportList");
      const paginationEl = document.getElementById("pagination");
      const searchEl = document.getElementById("searchInput");

      // Dropdown toggles
      const blBtn = document.getElementById("blDropdownBtn");
      const blMenu = document.getElementById("blMenu");
      const blLabel = document.getElementById("blLabel");

      const roleBtn = document.getElementById("roleDropdownBtn");
      const roleMenu = document.getElementById("roleMenu");
      const roleLabel = document.getElementById("roleLabel");

      const typeBtn = document.getElementById("typeDropdownBtn");
      const typeMenu = document.getElementById("typeMenu");
      const typeLabel = document.getElementById("typeLabel");

      // Detail elements
      const detailTitle = document.getElementById("detailTitle");
      const detailSubtitle = document.getElementById("detailSubtitle");
      const detailImage = document.getElementById("detailImage");
      const detailType = document.getElementById("detailType");
      const openReportBtn = document.getElementById("openReportBtn");
      const detailReportIssueBtn = document.getElementById("detailReportIssueBtn");

      const tabPurpose = document.getElementById("tabPurpose");
      const tabHow = document.getElementById("tabHow");
      const purposeContent = document.getElementById("purposeContent");
      const howContent = document.getElementById("howContent");

      // Modals
      const issueModal = document.getElementById("issueModal");
      const requestModal = document.getElementById("requestModal");
      const issueReportName = document.getElementById("issueReportName");
      const sevBtn = document.getElementById("sevBtn");
      const sevMenu = document.getElementById("sevMenu");
      const sevLabel = document.getElementById("sevLabel");

      const requestReportTop = document.getElementById("requestReportTop");
      const reportIssueTop = document.getElementById("reportIssueTop");
      const makeSuggestionBtn = document.getElementById("makeSuggestionBtn");

      // Support
      const supportDrawer = document.getElementById("supportDrawer");
      const openSupportTop = document.getElementById("openSupportTop");
      const openSupportFab = document.getElementById("openSupportFab");
      const closeSupport = document.getElementById("closeSupport");
      const supportInput = document.getElementById("supportInput");
      const supportMessages = document.getElementById("supportMessages");
      const sendSupport = document.getElementById("sendSupport");

      // Utility
      const clickOutside = (menuEl, btnEl, handler) => {
        document.addEventListener("click", (e) => {
          if (!menuEl.contains(e.target) && !btnEl.contains(e.target)) handler();
        });
      };

      function applyFilters() {
        let filtered = reports.filter((r) => {
          const matchesSearch = r.name.toLowerCase().includes(searchTerm) || r.description.toLowerCase().includes(searchTerm);
          const matchesBL = blFilter === "All" || r.businessLine === blFilter;
          const matchesType = typeFilter === "All" || r.type === typeFilter;

          let matchesRole = true;
          if (roleMode === "Assigned") {
            matchesRole = r.roles.some((role) => currentUserRoles.includes(role));
          } else if (roleMode === "All") {
            matchesRole = true;
          } else {
            matchesRole = r.roles.includes(roleMode);
          }

          return matchesSearch && matchesBL && matchesType && matchesRole;
        });

        renderList(filtered);
      }

      function renderList(items) {
        // Pagination
        const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
        if (page > totalPages) page = totalPages;
        const start = (page - 1) * pageSize;
        const slice = items.slice(start, start + pageSize);

        listEl.innerHTML = slice
          .map(
            (r) => `
            <div class="bg-white border border-slate-200 rounded-xl shadow-sm p-4 hover:border-blue-300 transition">
              <div class="flex items-start gap-3">
                <div class="hidden sm:block h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 ring-1 ring-slate-200 flex items-center justify-center">
                  <i data-lucide="${r.type === "Dashboard" ? "layout-dashboard" : "file-text"}" class="h-5 w-5 text-blue-600"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <button data-open="${r.id}" class="text-[17px] tracking-tight font-semibold text-slate-900 hover:text-blue-700">${r.name}</button>
                      <p class="text-sm text-slate-500 mt-0.5">${r.description}</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">${r.businessLine}</span>
                        ${r.roles.map(role => `<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">${role}</span>`).join("")}
                      </div>
                    </div>
                    <div class="flex flex-col gap-2 shrink-0">
                      <a href="${r.url}" target="_blank" class="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-blue-700">
                        <i data-lucide="external-link" class="h-4 w-4 mr-1.5"></i>Open
                      </a>
                      <button data-issue="${r.id}" class="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50">
                        <i data-lucide="bug" class="h-4 w-4 mr-1.5"></i>Report Issue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
          )
          .join("");

        // Pagination UI
        paginationEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1)
          .map(
            (p) => `
            <button data-page="${p}" class="h-9 w-9 rounded-md border ${p === page ? "border-blue-500 text-blue-700 bg-blue-50" : "border-slate-300 hover:bg-slate-50"} text-sm font-medium">
              ${p}
            </button>`
          )
          .join("");

        // Attach events
        listEl.querySelectorAll("[data-open]").forEach((btn) =>
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-open");
            const rep = reports.find((r) => r.id === id);
            if (rep) selectReport(rep);
          })
        );

        listEl.querySelectorAll("[data-issue]").forEach((btn) =>
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-issue");
            const rep = reports.find((r) => r.id === id);
            openIssueModal(rep);
          })
        );

        paginationEl.querySelectorAll("[data-page]").forEach((b) =>
          b.addEventListener("click", () => {
            page = Number(b.getAttribute("data-page"));
            applyFilters();
          })
        );

        lucide.createIcons();
      }

      function selectReport(rep) {
        selectedReport = rep;
        detailTitle.textContent = rep.name;
        detailSubtitle.textContent = rep.description;
        detailImage.src = rep.image;
        detailType.textContent = rep.type;
        detailType.classList.remove("hidden");
        openReportBtn.href = rep.url;
        renderDetailText(rep);
      }

      function renderDetailText(rep) {
        purposeContent.innerHTML = `<ul class="list-disc pl-5">${rep.purpose.map(p => `<li>${p}</li>`).join("")}</ul>`;
        howContent.innerHTML = `<ol class="list-decimal pl-5">${rep.how.map(h => `<li>${h}</li>`).join("")}</ol>`;
      }

      // Detail tabs
      tabPurpose.addEventListener("click", () => {
        tabPurpose.classList.add("text-blue-700","border-b-2","border-blue-600","font-medium");
        tabHow.classList.remove("text-blue-700","border-b-2","border-blue-600","font-medium");
        purposeContent.classList.remove("hidden");
        howContent.classList.add("hidden");
      });
      tabHow.addEventListener("click", () => {
        tabHow.classList.add("text-blue-700","border-b-2","border-blue-600","font-medium");
        tabPurpose.classList.remove("text-blue-700","border-b-2","border-blue-600","font-medium");
        purposeContent.classList.add("hidden");
        howContent.classList.remove("hidden");
      });

      // Search
      searchEl.addEventListener("input", (e) => {
        searchTerm = e.target.value.trim().toLowerCase();
        page = 1;
        applyFilters();
      });

      // Business line dropdown
      blBtn.addEventListener("click", () => blMenu.classList.toggle("hidden"));
      blMenu.querySelectorAll("button[data-bl]").forEach((b) =>
        b.addEventListener("click", () => {
          blFilter = b.getAttribute("data-bl");
          blLabel.textContent = `Business Line: ${blFilter}`;
          blMenu.classList.add("hidden");
          page = 1;
          applyFilters();
        })
      );
      clickOutside(blMenu, blBtn, () => blMenu.classList.add("hidden"));

      // Role dropdown
      roleBtn.addEventListener("click", () => roleMenu.classList.toggle("hidden"));
      roleMenu.querySelectorAll("button[data-role]").forEach((b) =>
        b.addEventListener("click", () => {
          roleMode = b.getAttribute("data-role");
          roleLabel.textContent = `Roles: ${roleMode}`;
          roleMenu.classList.add("hidden");
          page = 1;
          applyFilters();
        })
      );
      clickOutside(roleMenu, roleBtn, () => roleMenu.classList.add("hidden"));

      // Type dropdown
      typeBtn.addEventListener("click", () => typeMenu.classList.toggle("hidden"));
      typeMenu.querySelectorAll("button[data-type]").forEach((b) =>
        b.addEventListener("click", () => {
          typeFilter = b.getAttribute("data-type");
          typeLabel.textContent = typeFilter === "All" ? "All types" : typeFilter;
          typeMenu.classList.add("hidden");
          page = 1;
          applyFilters();
        })
      );
      clickOutside(typeMenu, typeBtn, () => typeMenu.classList.add("hidden"));

      // Issue modal
      function openIssueModal(rep) {
        if (!rep && selectedReport) rep = selectedReport;
        issueReportName.value = rep ? rep.name : "";
        issueModal.classList.remove("hidden");
      }
      function closeAllModals() {
        document.querySelectorAll("#issueModal, #requestModal").forEach(m => m.classList.add("hidden"));
      }
      document.querySelectorAll(".modal-close").forEach((b) => b.addEventListener("click", closeAllModals));
      reportIssueTop.addEventListener("click", () => openIssueModal(selectedReport));
      detailReportIssueBtn.addEventListener("click", () => openIssueModal(selectedReport));

      // Issue severity dropdown
      sevBtn.addEventListener("click", () => sevMenu.classList.toggle("hidden"));
      sevMenu.querySelectorAll("button[data-sev]").forEach((b) =>
        b.addEventListener("click", () => {
          sevLabel.textContent = b.getAttribute("data-sev");
          sevMenu.classList.add("hidden");
        })
      );
      clickOutside(sevMenu, sevBtn, () => sevMenu.classList.add("hidden"));

      // Request modal
      requestReportTop.addEventListener("click", () => requestModal.classList.remove("hidden"));
      document.getElementById("makeSuggestionBtn").addEventListener("click", () => requestModal.classList.remove("hidden"));

      // Request BL dropdown
      const reqBLBtn = document.getElementById("reqBLBtn");
      const reqBLMenu = document.getElementById("reqBLMenu");
      const reqBLLabel = document.getElementById("reqBLLabel");
      reqBLBtn.addEventListener("click", () => reqBLMenu.classList.toggle("hidden"));
      reqBLMenu.querySelectorAll("button[data-bl]").forEach(b => {
        b.addEventListener("click", () => {
          reqBLLabel.textContent = b.getAttribute("data-bl");
          reqBLMenu.classList.add("hidden");
        });
      });
      clickOutside(reqBLMenu, reqBLBtn, () => reqBLMenu.classList.add("hidden"));

      // Support drawer
      function openSupport() { supportDrawer.classList.remove("translate-x-full"); }
      function closeSupportDrawer() { supportDrawer.classList.add("translate-x-full"); }
      openSupportTop.addEventListener("click", openSupport);
      openSupportFab.addEventListener("click", openSupport);
      closeSupport.addEventListener("click", closeSupportDrawer);

      // Support messaging (mock)
      function addSupportMsg(text, from = "user") {
        const wrap = document.createElement("div");
        wrap.className = `flex ${from === "user" ? "justify-end" : "justify-start"}`;
        wrap.innerHTML = `
          <div class="max-w-[80%] rounded-lg px-3 py-2 text-sm ${from === "user" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"}">
            ${text}
          </div>`;
        supportMessages.appendChild(wrap);
        supportMessages.scrollTop = supportMessages.scrollHeight;
      }
      sendSupport.addEventListener("click", () => {
        const text = supportInput.value.trim();
        if (!text) return;
        addSupportMsg(text, "user");
        supportInput.value = "";
        setTimeout(() => addSupportMsg("Thanks! A support specialist will respond shortly."), 600);
      });

      // Initialize
      applyFilters();
      lucide.createIcons();

      // Select first report by default
      if (reports[0]) selectReport(reports[0]);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b border-slate-200 backdrop-blur bg-white/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-sm">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
</div>
<div>
<h1 className="text-[22px] tracking-tight font-semibold text-slate-900">Reporting Portal</h1>
<p className="text-xs text-slate-500 -mt-0.5">Discover, use, and manage internal reports</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" id="requestReportTop">
<i className="h-4 w-4" data-lucide="file-plus-2"></i>
              Request Report
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" id="reportIssueTop">
<i className="h-4 w-4" data-lucide="bug"></i>
              Report Issue
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-blue-700 transition shadow-sm" id="openSupportTop">
<i className="h-4 w-4" data-lucide="message-circle"></i>
              Support
            </button>
<div className="h-6 w-px bg-slate-200 mx-2"></div>
<div className="flex items-center gap-3">
<img alt="user avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<div className="text-sm font-medium text-slate-900">Truc Linh</div>
<div className="text-xs text-blue-600">Data Analyst</div>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<section className="mb-5">
<div className="flex flex-col gap-3 md:flex-row md:items-center">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition" id="searchInput" placeholder="Search by report name" type="text"/>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-700 hover:bg-slate-50" id="blDropdownBtn">
<i className="h-4 w-4" data-lucide="layers"></i>
<span id="blLabel">Business Line: All</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2" id="blMenu">
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="All">All</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Sales">Sales</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Operations">Operations</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Finance">Finance</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Marketing">Marketing</button>
</div>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-700 hover:bg-slate-50" id="roleDropdownBtn">
<i className="h-4 w-4" data-lucide="shield"></i>
<span id="roleLabel">Roles: Assigned</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2" id="roleMenu">
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-role="Assigned">Assigned</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-role="All">All Roles</button>
<div className="my-1 h-px bg-slate-100"></div>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-role="Analyst">Analyst</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-role="Manager">Manager</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-role="Executive">Executive</button>
</div>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-700 hover:bg-slate-50" id="typeDropdownBtn">
<i className="h-4 w-4" data-lucide="list-filter"></i>
<span id="typeLabel">All types</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg p-2" id="typeMenu">
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-type="All">All</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-type="Dashboard">Dashboard</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-type="Report">Report</button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="lg:col-span-2 space-y-3" id="reportList">

</div>

<aside className="lg:col-span-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm" id="detailPanel">
<div className="h-40 w-full overflow-hidden bg-slate-100">
<img alt="report hero" className="h-full w-full object-cover" id="detailImage" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-xl tracking-tight font-semibold text-slate-900" id="detailTitle">Select a report</h2>
<p className="text-sm text-slate-500 mt-1" id="detailSubtitle">Details, purpose and how to use will appear here.</p>
</div>
<div className="flex gap-1">
<span className="hidden px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100" id="detailType">Type</span>
</div>
</div>

<div className="mt-4">
<div className="flex border-b border-slate-200">
<button className="flex-1 text-sm py-2.5 text-blue-700 border-b-2 border-blue-600 font-medium" id="tabPurpose">Purpose</button>
<button className="flex-1 text-sm py-2.5 text-slate-600 hover:text-slate-900" id="tabHow">How to use</button>
</div>
<div className="prose prose-sm max-w-none mt-3 text-slate-700" id="purposeContent">
<p>Select a report on the left to view its purpose.</p>
</div>
<div className="prose prose-sm max-w-none mt-3 text-slate-700 hidden" id="howContent">
<p>Usage steps will be shown once you pick a report.</p>
</div>
</div>

<div className="mt-5 flex flex-col sm:flex-row gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none" href="#" id="openReportBtn" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i>
                Open Report
              </a>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="detailReportIssueBtn">
<i className="h-4 w-4" data-lucide="bug"></i>
                Report Issue
              </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="makeSuggestionBtn">
<i className="h-4 w-4" data-lucide="lightbulb"></i>
                Request Report
              </button>
</div>
</div>
</aside>
</section>

<div className="mt-6 flex justify-center gap-2" id="pagination"></div>
</main>

<div className="fixed inset-y-0 right-0 w-full sm:w-[380px] bg-white border-l border-slate-200 shadow-2xl translate-x-full transition-transform" id="supportDrawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="life-buoy"></i>
<h3 className="text-base font-semibold tracking-tight">Support</h3>
</div>
<button className="p-2 rounded-md hover:bg-slate-50" id="closeSupport">
<i className="h-4 w-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="h-[calc(100%-56px)] flex flex-col">
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="supportMessages">
<div className="text-xs text-slate-500 text-center">Ask questions, share issues, or request guidance.</div>
</div>
<div className="border-t border-slate-200 p-3">
<div className="flex items-end gap-2">
<textarea className="flex-1 resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" id="supportInput" placeholder="Type your message…" rows="1"></textarea>
<button className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white h-10 w-10 hover:bg-blue-700" id="sendSupport">
<i className="h-4 w-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>

<button className="fixed bottom-5 right-5 sm:hidden inline-flex items-center justify-center h-12 w-12 rounded-full shadow-lg bg-blue-600 text-white" id="openSupportFab">
<i className="h-5 w-5" data-lucide="message-circle"></i>
</button>

<div className="fixed inset-0 z-[60] hidden" id="issueModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="bug"></i>
<h3 className="text-base font-semibold tracking-tight">Report Issue</h3>
</div>
<button className="modal-close p-2 rounded-md hover:bg-slate-50">
<i className="h-4 w-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-4 space-y-3" id="issueForm">
<div>
<label className="text-sm text-slate-600">Report</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" id="issueReportName" readonly=""/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-600">Severity</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" id="sevBtn" type="button">
<span id="sevLabel">Medium</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg p-1" id="sevMenu">
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-sev="Low">Low</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-sev="Medium">Medium</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-sev="High">High</button>
</div>
</div>
</div>
<div>
<label className="text-sm text-slate-600">Contact Email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-slate-600">Describe the issue</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="What happened? Steps to reproduce…" required="" rows="4"></textarea>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="modal-close inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm hover:bg-slate-50" type="button">Cancel</button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3.5 py-2 text-sm hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="send"></i>
                Submit
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="requestModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-2xl rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="file-plus-2"></i>
<h3 className="text-base font-semibold tracking-tight">Request New Report</h3>
</div>
<button className="modal-close p-2 rounded-md hover:bg-slate-50">
<i className="h-4 w-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-4 space-y-3" id="requestForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-600">Title</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="e.g., Quarterly Pipeline Health" required=""/>
</div>
<div>
<label className="text-sm text-slate-600">Business Line</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" id="reqBLBtn" type="button">
<span id="reqBLLabel">Select</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg p-1" id="reqBLMenu">
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Sales">Sales</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Operations">Operations</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Finance">Finance</button>
<button className="w-full text-left px-2.5 py-2 rounded-md text-sm hover:bg-slate-50" data-bl="Marketing">Marketing</button>
</div>
</div>
</div>
</div>
<div>
<label className="text-sm text-slate-600">Purpose</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="What decisions will this report inform?" required="" rows="3"></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-600">Data Sources</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="CRM, ERP, Data Warehouse..."/>
</div>
<div>
<label className="text-sm text-slate-600">Needed By</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" type="date"/>
</div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="modal-close inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm hover:bg-slate-50" type="button">Cancel</button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3.5 py-2 text-sm hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="send"></i>
                Submit Request
              </button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
