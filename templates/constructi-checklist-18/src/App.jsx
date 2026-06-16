import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    const STORAGE_KEY = "obracheck_v1";
    const DEFAULT = {
      building: { name: "Torre A", floors: 27 },
      apartments: [],
      issuesByApt: {}
    };

    function uid() {
      return Math.random().toString(16).slice(2) + Date.now().toString(16);
    }

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return structuredClone(DEFAULT);
        const parsed = JSON.parse(raw);
        return {
          building: parsed.building ?? structuredClone(DEFAULT.building),
          apartments: parsed.apartments ?? [],
          issuesByApt: parsed.issuesByApt ?? {}
        };
      } catch (e) {
        return structuredClone(DEFAULT);
      }
    }

    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function aptNumber(floor, unitIndex) {
      const unit = unitIndex === 1 ? "01" : "02";
      return `${floor}${unit}`;
    }

    function generateApartments(floors) {
      const keepIssues = state.issuesByApt || {};
      const list = [];
      for (let f = 1; f <= floors; f++) {
        for (let u = 1; u <= 2; u++) {
          const num = aptNumber(f, u);
          list.push({ id: num, number: num, floor: f, label: `Apto ${num}` });
          if (!keepIssues[num]) keepIssues[num] = [];
        }
      }
      state.apartments = list;
      state.issuesByApt = keepIssues;
      saveState();
      toast("Apartamentos gerados", `${floors} pavimentos • ${floors*2} apartamentos (2 por andar).`);
      renderAll();
    }

    function resetApartments() {
      state.apartments = [];
      state.issuesByApt = {};
      saveState();
      selectedAptId = null;
      currentAptId = null;
      toast("Lista limpa", "Apartamentos e pendências foram removidos.");
      renderAll();
    }

    function issueCounts(aptId) {
      const items = state.issuesByApt[aptId] || [];
      const done = items.filter(i => i.done).length;
      const open = items.length - done;
      const total = items.length;
      const progress = total === 0 ? 0 : Math.round((done / total) * 100);
      return { open, done, total, progress };
    }

    function globalCounts() {
      let open = 0, done = 0, total = 0;
      for (const a of state.apartments) {
        const c = issueCounts(a.id);
        open += c.open; done += c.done; total += c.total;
      }
      const progress = total === 0 ? 0 : Math.round((done / total) * 100);
      return { open, done, total, progress };
    }

    function toast(title, body) {
      $("#toastTitle").textContent = title;
      $("#toastBody").textContent = body;
      const el = $("#toast");
      el.classList.remove("hidden");
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => el.classList.add("hidden"), 3200);
    }

    // --- UI state
    let state = loadState();
    let view = "dashboard";
    let selectedAptId = null;
    let currentAptId = null;

    const filters = { floor: "all", apartment: "all", status: "all", q: "" };

    function setView(next) {
      view = next;
      $("#viewDashboard").classList.toggle("hidden", view !== "dashboard");
      $("#viewBuilding").classList.toggle("hidden", view !== "building");
      $("#viewApartments").classList.toggle("hidden", view !== "apartments");
      $("#viewAptPanel").classList.toggle("hidden", view !== "aptpanel");
      $$(".navBtn").forEach(b => {
        const active = b.dataset.view === view;
        b.classList.toggle("bg-white/10", active);
        b.classList.toggle("bg-white/5", !active);
        b.classList.toggle("text-slate-100", active);
        b.classList.toggle("text-slate-200", !active);
      });
      renderAll();
    }

    // --- Dropdown helpers (minimal)
    function toggleMenu(btn, menu) {
      const isOpen = !menu.classList.contains("hidden");
      closeAllMenus();
      if (!isOpen) menu.classList.remove("hidden");
    }
    function closeAllMenus() {
      ["#filterFloorMenu","#filterApartmentMenu","#filterStatusMenu","#modalAptMenu","#userMenu"].forEach(id => {
        const el = $(id);
        if (el) el.classList.add("hidden");
      });
    }

    // --- Render
    function renderFilters() {
      // Floor menu
      const floors = state.building.floors || 27;
      const floorMenu = $("#filterFloorMenu");
      floorMenu.innerHTML = "";
      const floorItems = [{ key:"all", label:"Todos" }].concat(
        Array.from({length:floors}, (_,i)=>({ key:String(i+1), label:`${i+1}º` }))
      );
      floorItems.forEach(it => {
        const btn = document.createElement("button");
        btn.className = "w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5";
        btn.textContent = it.label;
        btn.onclick = () => {
          filters.floor = it.key;
          $("#filterFloorLabel").textContent = it.label;
          closeAllMenus();
          renderAll();
        };
        floorMenu.appendChild(btn);
      });

      // Apartment menu
      const aptMenu = $("#filterApartmentMenu");
      aptMenu.innerHTML = "";
      const aptItems = [{ key:"all", label:"Todos" }].concat(
        state.apartments.map(a => ({ key:a.id, label:a.label }))
      );
      aptItems.forEach(it => {
        const btn = document.createElement("button");
        btn.className = "w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5";
        btn.textContent = it.label;
        btn.onclick = () => {
          filters.apartment = it.key;
          $("#filterApartmentLabel").textContent = it.label;
          closeAllMenus();
          renderAll();
        };
        aptMenu.appendChild(btn);
      });

      // Status menu
      const stMenu = $("#filterStatusMenu");
      stMenu.innerHTML = "";
      const statusItems = [
        { key:"all", label:"Todos" },
        { key:"open", label:"Abertas" },
        { key:"done", label:"Concluídas" }
      ];
      statusItems.forEach(it => {
        const btn = document.createElement("button");
        btn.className = "w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5";
        btn.textContent = it.label;
        btn.onclick = () => {
          filters.status = it.key;
          $("#filterStatusLabel").textContent = it.label;
          closeAllMenus();
          renderAll();
        };
        stMenu.appendChild(btn);
      });

      // Default labels
      if (!$("#filterFloorLabel").textContent || $("#filterFloorLabel").textContent === "—") $("#filterFloorLabel").textContent = "Todos";
      if (!$("#filterApartmentLabel").textContent || $("#filterApartmentLabel").textContent === "—") $("#filterApartmentLabel").textContent = "Todos";
      if (!$("#filterStatusLabel").textContent || $("#filterStatusLabel").textContent === "—") $("#filterStatusLabel").textContent = "Todos";
    }

    function filteredApts() {
      const q = (filters.q || "").trim().toLowerCase();
      return state.apartments.filter(a => {
        if (filters.floor !== "all" && String(a.floor) !== String(filters.floor)) return false;
        if (filters.apartment !== "all" && a.id !== filters.apartment) return false;

        if (filters.status !== "all") {
          const c = issueCounts(a.id);
          if (filters.status === "open" && c.open === 0) return false;
          if (filters.status === "done" && c.done === 0) return false;
        }

        if (q) {
          const inApt = a.number.toLowerCase().includes(q) || a.label.toLowerCase().includes(q);
          const issues = (state.issuesByApt[a.id] || []);
          const inIssues = issues.some(i => (i.title||"").toLowerCase().includes(q) || (i.desc||"").toLowerCase().includes(q));
          return inApt || inIssues;
        }
        return true;
      });
    }

    function renderSidebarStats() {
      $("#buildingNameSide").textContent = state.building.name || "—";
      $("#floorsCountSide").textContent = String(state.building.floors || 27);
      $("#unitsCountSide").textContent = String(state.apartments.length || 0);
      const gc = globalCounts();
      $("#progressAllSide").textContent = `${gc.progress}%`;
      $("#resultsCount").textContent = String(filteredApts().length);
    }

    function renderDashboard() {
      const gc = globalCounts();
      $("#dashUnits").textContent = String(state.apartments.length);
      $("#dashUnitsMeta").textContent = state.apartments.length === 54 ? "Meta atingida (54/54)" : `Meta: 54 • faltam ${Math.max(0, 54 - state.apartments.length)}`;
      $("#dashIssuesOpen").textContent = String(gc.open);
      $("#dashIssuesDone").textContent = String(gc.done);
    }

    function renderBuilding() {
      $("#buildingName").value = state.building.name || "";
      $("#buildingFloors").value = state.building.floors || 27;

      $("#sumFloors").textContent = String(state.building.floors || 27);
      $("#sumApts").textContent = String(state.apartments.length);
      $("#sumIssues").textContent = String(globalCounts().total);

      const floors = state.building.floors || 27;
      const target = floors * 2;
      const ok = state.apartments.length === target;
      $("#generatedSummary").textContent = ok ? `Gerados: ${target}/${target}` : `Gerados: ${state.apartments.length}/${target}`;
    }

    function renderApartmentsList() {
      const list = filteredApts();
      $("#aptsListCount").textContent = `${list.length} itens`;
      $("#aptsCount").textContent = String(state.apartments.length);

      let open = 0, done = 0;
      list.forEach(a => {
        const c = issueCounts(a.id);
        open += c.open; done += c.done;
      });
      $("#aptsIssuesOpen").textContent = String(open);
      $("#aptsIssuesDone").textContent = String(done);

      const container = $("#aptsList");
      container.innerHTML = "";

      if (state.apartments.length === 0) {
        const empty = document.createElement("div");
        empty.className = "rounded-2xl border border-white/10 bg-white/5 p-3";
        empty.innerHTML = `
          <p class="text-sm font-medium">Nenhum apartamento cadastrado</p>
          <p class="mt-1 text-xs text-slate-400">Vá em “Prédio” e clique em “Gerar apartamentos” para criar os 54 (27 andares, 2 por andar).</p>
        `;
        container.appendChild(empty);
        return;
      }

      list.forEach(a => {
        const c = issueCounts(a.id);
        const row = document.createElement("button");
        row.className = "w-full text-left rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30";
        row.onclick = () => {
          selectedAptId = a.id;
          renderAll();
        };
        const active = selectedAptId === a.id;
        if (active) row.classList.add("ring-1","ring-indigo-400/40","bg-white/10");
        row.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium truncate">${a.label}</p>
              <p class="text-xs text-slate-400">Pavimento ${a.floor}º</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-2 py-0.5 text-xs text-slate-200">${c.open} aberta(s)</span>
              <span class="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-2 py-0.5 text-xs text-slate-200">${c.progress}%</span>
            </div>
          </div>
        `;
        container.appendChild(row);
      });
    }

    function renderSelectedAptCard() {
      const apt = state.apartments.find(a => a.id === selectedAptId) || null;

      if (!apt && state.apartments.length) selectedAptId = state.apartments[0].id;
      const apt2 = state.apartments.find(a => a.id === selectedAptId) || null;

      if (!apt2) {
        $("#selectedAptTitle").textContent = "—";
        $("#selectedAptFloor").textContent = "—";
        $("#selectedAptOpen").textContent = "—";
        $("#selectedAptDone").textContent = "—";
        $("#selectedAptProgress").textContent = "—";
        return;
      }

      const c = issueCounts(apt2.id);
      $("#selectedAptTitle").textContent = apt2.label;
      $("#selectedAptFloor").textContent = `${apt2.floor}º`;
      $("#selectedAptOpen").textContent = String(c.open);
      $("#selectedAptDone").textContent = String(c.done);
      $("#selectedAptProgress").textContent = `${c.progress}%`;
    }

    function renderAptPanel() {
      const apt = state.apartments.find(a => a.id === currentAptId) || null;
      if (!apt) return;

      const c = issueCounts(apt.id);
      $("#aptPanelTitle").textContent = apt.label;
      $("#aptPanelMeta").textContent = `Pavimento ${apt.floor}º • ${c.total} item(ns)`;
      $("#aptPanelOpen").textContent = String(c.open);
      $("#aptPanelDone").textContent = String(c.done);
      $("#aptPanelProgress").textContent = `${c.progress}%`;

      const list = $("#issuesList");
      list.innerHTML = "";

      const items = state.issuesByApt[apt.id] || [];
      if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "rounded-2xl border border-white/10 bg-white/5 p-4";
        empty.innerHTML = `
          <p class="text-sm font-medium">Sem pendências</p>
          <p class="mt-1 text-xs text-slate-400">Clique em “Nova pendência” para registrar o primeiro item.</p>
        `;
        list.appendChild(empty);
        return;
      }

      items
        .slice()
        .sort((a,b) => Number(a.done) - Number(b.done) || (b.createdAt||0)-(a.createdAt||0))
        .forEach(item => {
          const card = document.createElement("div");
          card.className = "rounded-3xl border border-white/10 bg-slate-950/40 p-4";
          const statusPill = item.done
            ? `<span class="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-100">
                 <iconify-icon icon="solar:check-circle-linear" width="14" height="14" style="stroke-width:1.5"></iconify-icon>
                 Concluída
               </span>`
            : `<span class="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-2 py-0.5 text-xs text-amber-100">
                 <iconify-icon icon="solar:clock-circle-linear" width="14" height="14" style="stroke-width:1.5"></iconify-icon>
                 Aberta
               </span>`;

          card.innerHTML = `
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-medium">${escapeHtml(item.title || "Sem título")}</p>
                ${item.desc ? `<p class="mt-1 text-xs text-slate-400">${escapeHtml(item.desc)}</p>` : `<p class="mt-1 text-xs text-slate-500">Sem descrição</p>`}
              </div>
              ${statusPill}
            </div>
            <div class="mt-3 flex flex-wrap items-center gap-2">
              <button data-action="toggle" data-id="${item.id}" class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
                <iconify-icon icon="solar:check-square-linear" width="18" height="18" style="stroke-width:1.5"></iconify-icon>
                ${item.done ? "Reabrir" : "Concluir"}
              </button>
              <button data-action="delete" data-id="${item.id}" class="inline-flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-100 hover:bg-rose-500/15">
                <iconify-icon icon="solar:trash-bin-trash-linear" width="18" height="18" style="stroke-width:1.5"></iconify-icon>
                Remover
              </button>
              <span class="ml-auto text-xs text-slate-500">Registrada em ${formatDate(item.createdAt)}</span>
            </div>
          `;
          list.appendChild(card);
        });

      $$("button[data-action='toggle']", list).forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          const arr = state.issuesByApt[apt.id] || [];
          const it = arr.find(x => x.id === id);
          if (!it) return;
          it.done = !it.done;
          it.updatedAt = Date.now();
          saveState();
          renderAll();
        };
      });

      $$("button[data-action='delete']", list).forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          const arr = state.issuesByApt[apt.id] || [];
          state.issuesByApt[apt.id] = arr.filter(x => x.id !== id);
          saveState();
          toast("Pendência removida", `Removida do ${apt.label}.`);
          renderAll();
        };
      });
    }

    function renderAll() {
      renderFilters();
      renderSidebarStats();
      renderDashboard();
      renderBuilding();
      renderApartmentsList();
      renderSelectedAptCard();
      renderAptPanel();

      // Results badge in sidebar and counts cards already updated
    }

    function formatDate(ts) {
      if (!ts) return "—";
      const d = new Date(ts);
      const dd = String(d.getDate()).padStart(2,"0");
      const mm = String(d.getMonth()+1).padStart(2,"0");
      const hh = String(d.getHours()).padStart(2,"0");
      const mi = String(d.getMinutes()).padStart(2,"0");
      return `${dd}/${mm} ${hh}:${mi}`;
    }

    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, s => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
      }[s]));
    }

    // --- Modal (add issue)
    function openIssueModal(prefAptId) {
      if (state.apartments.length === 0) {
        toast("Cadastre os apartamentos", "Vá em “Prédio” e gere os 54 apartamentos para começar.");
        setView("building");
        return;
      }
      $("#modalBackdrop").classList.remove("hidden");
      $("#modalBackdrop").classList.add("flex");

      // Fill apartment dropdown
      const menu = $("#modalAptMenu");
      menu.innerHTML = "";
      state.apartments.forEach(a => {
        const b = document.createElement("button");
        b.className = "w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5";
        b.textContent = a.label;
        b.onclick = () => {
          $("#modalAptLabel").textContent = a.label;
          $("#modalAptLabel").dataset.aptId = a.id;
          closeAllMenus();
        };
        menu.appendChild(b);
      });

      const chosen = state.apartments.find(a => a.id === prefAptId) || state.apartments[0];
      $("#modalAptLabel").textContent = chosen.label;
      $("#modalAptLabel").dataset.aptId = chosen.id;

      $("#issueTitle").value = "";
      $("#issueDesc").value = "";
      $("#issueTitle").focus();
    }

    function closeModal() {
      $("#modalBackdrop").classList.add("hidden");
      $("#modalBackdrop").classList.remove("flex");
      closeAllMenus();
    }

    // --- Events
    $("#toastClose").onclick = () => $("#toast").classList.add("hidden");

    $$(".navBtn").forEach(b => b.onclick = () => setView(b.dataset.view));

    $("#btnGoApartments").onclick = () => setView("apartments");

    $("#btnGenerateApts").onclick = () => {
      const floors = Number($("#buildingFloors").value || state.building.floors || 27);
      state.building.floors = floors;
      state.building.name = ($("#buildingName").value || state.building.name || "Torre A").trim();
      saveState();
      generateApartments(floors);
    };

    $("#btnSaveBuilding").onclick = () => {
      state.building.name = ($("#buildingName").value || "Torre A").trim();
      state.building.floors = Number($("#buildingFloors").value || 27);
      saveState();
      toast("Configuração salva", `${state.building.name} • ${state.building.floors} pavimentos`);
      renderAll();
    };

    $("#btnResetApts").onclick = () => {
      if (!confirm("Limpar apartamentos e pendências?")) return;
      resetApartments();
    };

    $("#btnSelectFirstMatch").onclick = () => {
      const list = filteredApts();
      if (!list.length) return;
      selectedAptId = list[0].id;
      renderAll();
    };

    function openSelectedApt() {
      const apt = state.apartments.find(a => a.id === selectedAptId) || null;
      if (!apt) {
        toast("Selecione um apartamento", "Escolha uma unidade na lista.");
        return;
      }
      currentAptId = apt.id;
      setView("aptpanel");
    }

    $("#btnOpenAptPanel").onclick = openSelectedApt;
    $("#btnOpenSelectedApt").onclick = openSelectedApt;

    $("#btnBackToApts").onclick = () => setView("apartments");

    $("#btnAddIssue").onclick = () => openIssueModal(currentAptId);
    $("#btnQuickAdd").onclick = () => openIssueModal(selectedAptId || currentAptId);

    $("#modalClose").onclick = closeModal;
    $("#modalCancel").onclick = closeModal;
    $("#modalBackdrop").addEventListener("click", (e) => {
      if (e.target === $("#modalBackdrop")) closeModal();
    });

    $("#modalAptBtn").onclick = () => toggleMenu($("#modalAptBtn"), $("#modalAptMenu"));

    $("#modalSave").onclick = () => {
      const aptId = $("#modalAptLabel").dataset.aptId;
      const title = ($("#issueTitle").value || "").trim();
      const desc = ($("#issueDesc").value || "").trim();
      if (!aptId) { toast("Selecione um apartamento", "Escolha a unidade."); return; }
      if (!title) { toast("Título obrigatório", "Informe um título para a pendência."); $("#issueTitle").focus(); return; }

      if (!state.issuesByApt[aptId]) state.issuesByApt[aptId] = [];
      state.issuesByApt[aptId].push({
        id: uid(),
        title,
        desc,
        done: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      saveState();

      const apt = state.apartments.find(a => a.id === aptId);
      toast("Pendência cadastrada", `Adicionada em ${apt ? apt.label : aptId}.`);

      closeModal();

      // If user is on apt panel, keep it updated
      if (view === "aptpanel" && currentAptId === aptId) {
        renderAll();
        return;
      }

      // Else, keep selection and refresh
      selectedAptId = aptId;
      renderAll();
    };

    // Filters dropdown events
    $("#filterFloorBtn").onclick = () => toggleMenu($("#filterFloorBtn"), $("#filterFloorMenu"));
    $("#filterApartmentBtn").onclick = () => toggleMenu($("#filterApartmentBtn"), $("#filterApartmentMenu"));
    $("#filterStatusBtn").onclick = () => toggleMenu($("#filterStatusBtn"), $("#filterStatusMenu"));
    $("#btnClearFilters").onclick = () => {
      filters.floor = "all";
      filters.apartment = "all";
      filters.status = "all";
      filters.q = "";
      $("#filterFloorLabel").textContent = "Todos";
      $("#filterApartmentLabel").textContent = "Todos";
      $("#filterStatusLabel").textContent = "Todos";
      $("#globalSearch").value = "";
      $("#globalSearchMobile").value = "";
      renderAll();
    };

    function bindSearch(el) {
      el.addEventListener("input", () => {
        filters.q = el.value || "";
        const other = el.id === "globalSearch" ? $("#globalSearchMobile") : $("#globalSearch");
        if (other) other.value = el.value;
        renderAll();
      });
    }
    bindSearch($("#globalSearch"));
    bindSearch($("#globalSearchMobile"));

    // Sidebar (mobile)
    function openSidebar() {
      $("#sidebar").classList.remove("hidden");
      $("#sidebar").classList.add("block");
    }
    function closeSidebar() {
      $("#sidebar").classList.add("hidden");
      $("#sidebar").classList.remove("block");
    }
    $("#btnSidebar").onclick = openSidebar;
    $("#btnCloseSidebar").onclick = closeSidebar;
    $("#sidebarOverlay").onclick = closeSidebar;

    // User menu
    $("#btnUserMenu").onclick = (e) => {
      e.stopPropagation();
      toggleMenu($("#btnUserMenu"), $("#userMenu"));
    };
    $("#btnResetDemo").onclick = () => {
      if (!confirm("Restaurar dados? Isso substitui o estado salvo.")) return;
      state = structuredClone(DEFAULT);
      saveState();
      selectedAptId = null;
      currentAptId = null;
      toast("Dados restaurados", "Estado reiniciado.");
      closeAllMenus();
      renderAll();
    };

    document.addEventListener("click", () => closeAllMenus());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllMenus();
        closeModal();
        closeSidebar();
      }
    });

    // Initial boot: keep existing look, but ensure default floors and optional initial generation is not forced.
    if (!state.building || !state.building.floors) state.building = { name: "Torre A", floors: 27 };
    if (!Array.isArray(state.apartments)) state.apartments = [];
    if (!state.issuesByApt) state.issuesByApt = {};

    // Default selection
    if (state.apartments.length && !selectedAptId) selectedAptId = state.apartments[0].id;

    setView("dashboard");
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen" id="app">
<header className="sticky top-0 z-40 border-b backdrop-blur border-white/10 bg-gray-950/80" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-3">
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40 lg:hidden border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="btnSidebar" style={{}}>
<iconify-icon height="20" icon="solar:sidebar-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="flex items-center">
<div className="flex bg-gradient-to-br from-blue-500/20 to-purple-400/10 w-10 h-10 rounded-2xl ring-white/10 ring-1 items-center justify-center">
</div>
<div className="leading-tight">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-200 bg-white/5 border-white/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2">
<iconify-icon className="" height="14" icon="solar:shield-keyhole-minimalistic-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="" id="rolePill">Administrador</span>
</span>
</div>
<p className="hidden sm:block text-xs text-gray-400">Checklist por apartamento • comentários • pendências • progresso</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2 rounded-2xl border px-3 py-2 border-white/10 bg-white/5">
<iconify-icon className="" height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<input className="w-72 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none text-gray-100" id="globalSearch" placeholder="Buscar: apto, pendência..." style={{}}/>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white" id="btnQuickAdd" style={{}}>
<iconify-icon className="" height="18" icon="solar:add-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="hidden sm:inline">Nova pendência</span>
</button>
<div className="relative">
<button className="inline-flex focus:outline-none focus:ring-2 focus:ring-blue-400/40 hover:bg-white/10 text-sm text-gray-200 bg-white/5 border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" id="btnUserMenu">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-semibold tracking-tight bg-white/10" id="userAvatar">A</span>
<span className="hidden sm:inline" id="userNameTop">Admin</span>
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" id="userMenu" style={{}}>
<div className="p-3 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-white/5 ring-white/10">
<span className="text-sm font-semibold tracking-tight" id="userAvatarLarge">A</span>
</div>
<div className="min-w-0">
<p className="truncate text-sm font-medium" id="userNameMenu">Admin</p>
<p className="truncate text-xs text-gray-400" id="userEmailMenu" style={{}}>admin@obra.local</p>
</div>
</div>
</div>
<div className="p-2 border-t border-white/10">
<button className="w-full text-left inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-pink-500/10 text-pink-200" id="btnResetDemo">
<iconify-icon height="18" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Restaurar dados
                  </button>
</div>
</div>
</div>
</div>
</div>
<div className="md:hidden pb-3">
<div className="flex items-center gap-2 rounded-2xl border px-3 py-2 border-white/10 bg-white/5">
<iconify-icon height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<input className="w-full bg-transparent text-sm placeholder:text-gray-400 focus:outline-none text-gray-100" id="globalSearchMobile" placeholder="Buscar..." style={{}}/>
</div>
</div>
</div>
</header>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-12 gap-6 py-6">
<aside className="fixed inset-0 z-40 hidden lg:static lg:inset-auto lg:z-auto lg:block col-span-12 lg:col-span-3" id="sidebar">
<div className="absolute inset-0 lg:hidden bg-black/60" id="sidebarOverlay"></div>
<div className="relative h-full lg:h-auto">
<div className="lg:sticky lg:top-20 gap-x-2 gap-y-2">
<div className="border rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-xl gap-x-2 gap-y-2 shadow-black/20 bg-white/5 border-white/10">
<div className="flex items-start justify-between gap-3">
<div className="">
<p className="text-xs text-gray-400" style={{}}>Navegação</p>
<h2 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Painel</h2>
</div>
<button className="lg:hidden inline-flex items-center justify-center rounded-xl border p-2 border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="btnCloseSidebar" style={{}}>
<iconify-icon height="18" icon="solar:close-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 space-y-2 gap-x-2 gap-y-2">
<button className="navBtn inline-flex hover:bg-white/10 text-sm w-full border-white/10 border rounded-2xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center text-gray-100 bg-white/10 text-slate-100" data-view="dashboard" style={{}}>
<iconify-icon height="18" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Dashboard
                  </button>
<button className="navBtn inline-flex hover:bg-white/10 text-sm text-gray-200 w-full border-white/10 border rounded-2xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center bg-white/5 text-slate-200" data-view="building" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>DOM - HORTO FLORESTAL</button>
<button className="navBtn inline-flex hover:bg-white/10 text-sm text-gray-200 w-full border-white/10 border rounded-2xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center bg-white/5 text-slate-200" data-view="apartments">
<iconify-icon className="" height="18" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Apartamentos
                  </button>
</div>
<div className="mt-4 rounded-2xl border p-3 border-white/10 bg-gray-950/50" style={{}}>
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<p className="text-xs text-gray-400" style={{}}>Edifício</p>
<p className="truncate text-sm font-medium" id="buildingNameSide">DOM</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs border-white/10 bg-white/5 text-gray-200" style={{}}>
<iconify-icon className="" height="14" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3">
<p className="text-xs text-gray-400" style={{}}>Unidades</p>
<p className="text-lg font-semibold tracking-tight" id="unitsCountSide" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>54</p>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-3xl border p-4 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Filtros</h3>
<button className="hover:text-white text-xs text-gray-300" id="btnClearFilters">Limpar</button>
</div>
<div className="mt-3 space-y-3">
<div className="">
<label className="text-xs text-gray-400" style={{}}>Pavimento</label>
<div className="relative mt-1">
<button className="inline-flex hover:bg-gray-950/60 text-sm text-gray-100 bg-gray-950/40 w-full border-white/10 border rounded-2xl pt-2 pr-3 pb-2 pl-3 items-center justify-between" id="filterFloorBtn">
<span className="truncate" id="filterFloorLabel">20º</span>
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5', color: 'rgb(243, 244, 246)'}} width="16"></iconify-icon>
</button>
<div className="absolute z-20 mt-2 w-full max-h-72 overflow-auto rounded-2xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" id="filterFloorMenu" style={{}}><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Todos</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">1º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">2º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">3º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">4º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">5º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">6º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">7º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">8º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">9º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">10º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">11º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">12º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">13º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">14º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">15º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">16º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">17º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">18º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">19º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">20º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">21º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">22º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">23º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">24º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">25º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">26º</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">27º</button></div>
</div>
</div>
<div className="">
<label className="text-xs text-gray-400" style={{}}>Apartamento</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-2xl border px-3 py-2 text-sm border-white/10 bg-gray-950/40 text-gray-100 hover:bg-gray-950/60" id="filterApartmentBtn" style={{}}>
<span className="truncate" id="filterApartmentLabel">Todos</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="absolute z-20 mt-2 hidden w-full max-h-72 overflow-auto rounded-2xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" id="filterApartmentMenu" style={{}}><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Todos</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 101</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 102</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 201</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 202</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 301</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 302</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 401</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 402</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 501</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 502</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 601</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 602</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 701</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 702</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 801</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 802</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 901</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 902</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1001</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1002</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1101</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1102</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1201</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1202</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1301</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1302</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1401</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1402</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1501</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1502</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1601</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1602</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1701</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1702</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1801</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1802</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1901</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 1902</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2001</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2002</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2101</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2102</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2201</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2202</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2301</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2302</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2401</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2402</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2501</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2502</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2601</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2602</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2701</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Apto 2702</button></div>
</div>
</div>
<div>
<label className="text-xs text-gray-400" style={{}}>Status</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-2xl border px-3 py-2 text-sm border-white/10 bg-gray-950/40 text-gray-100 hover:bg-gray-950/60" id="filterStatusBtn" style={{}}>
<span className="truncate" id="filterStatusLabel">Todos</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="absolute z-20 mt-2 hidden w-full overflow-hidden rounded-2xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" id="filterStatusMenu" style={{}}><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Todos</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Abertas</button><button className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5">Concluídas</button></div>
</div>
</div>
<div className="pt-2">
<div className="rounded-2xl border p-3 border-white/10 bg-gray-950/50" style={{}}>
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-gray-400" style={{}}>Resultados</p>
<span className="text-xs text-gray-200" id="resultsCount" style={{}}>54</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</aside>
<main className="col-span-12 lg:col-span-9 space-y-6">
<div className="hidden rounded-3xl border p-4 border-white/10 bg-white/5" id="toast">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-200" style={{}}>
<iconify-icon height="20" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium tracking-tight" id="toastTitle" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>—</p>
<p className="text-xs text-gray-300" id="toastBody" style={{}}>—</p>
</div>
<button className="ml-auto inline-flex items-center justify-center rounded-xl border p-2 border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="toastClose" style={{}}>
<iconify-icon height="18" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<section className="space-y-6" id="viewDashboard">
<div className="shadow-black/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 via-white/5 border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-xl">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between gap-x-4 gap-y-4">
<div className="">
<h2 className="sm:text-2xl text-xl font-semibold text-white tracking-tight" style={{fontFamily: '"Plus Jakarta Sans", Inter, system-ui'}}>CHECKLIST OBRA</h2>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex text-sm font-medium rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center hover:bg-gray-100 text-gray-950 bg-white" id="btnGoApartments" style={{}}>
<iconify-icon className="" height="18" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Abrir apartamentos
                  </button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Unidades cadastradas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="dashUnits" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>54</p>
<p className="mt-1 text-xs text-gray-400" id="dashUnitsMeta" style={{}}>Meta atingida (54/54)</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Pendências em aberto</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="dashIssuesOpen" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>0</p>
<p className="mt-1 text-xs text-gray-400" style={{}}>Somatório de todas as unidades</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Pendências concluídas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="dashIssuesDone" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>0</p>
<p className="mt-1 text-xs text-gray-400" style={{}}>Itens marcados como concluídos</p>
</div>
</div>
</div>
</section>
<section className="space-y-6 hidden" id="viewBuilding">
<div className="rounded-3xl border p-5 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-xs text-gray-400" style={{}}>Configuração</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Prédio</h2>
<p className="mt-1 text-sm text-gray-300" style={{}}>Gere 54 apartamentos (27 pavimentos, 2 por andar). Você pode regenerar sem perder pendências.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white" id="btnGenerateApts" style={{}}>
<iconify-icon height="18" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Gerar apartamentos
                  </button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Parâmetros</h3>
<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
<div>
<label className="text-xs text-gray-400" style={{}}>Nome do prédio</label>
<input className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-gray-950/50 text-gray-100" id="buildingName" placeholder="Ex.: Torre A" style={{}}/>
</div>
<div>
<label className="text-xs text-gray-400" style={{}}>Pavimentos</label>
<input className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-gray-950/50 text-gray-100" id="buildingFloors" max="60" min="1" placeholder="27" style={{}} type="number"/>
<p className="mt-1 text-xs text-gray-500" style={{}}>Do 1º ao 27º • aptos 01 e 02 por pavimento.</p>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-gray-400" style={{}}>Padrão de numeração</label>
<div className="mt-1 rounded-2xl border px-3 py-2 text-sm border-white/10 bg-gray-950/50 text-gray-200" style={{}}>
<span className="text-gray-400" style={{}}>Exemplo:</span> 101, 102 … 2701, 2702
                      </div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="btnSaveBuilding" style={{}}>
<iconify-icon height="18" icon="solar:diskette-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                      Salvar
                    </button>
<button className="inline-flex items-center gap-2 rounded-xl border bg-pink-500/10 px-3 py-2 text-sm hover:bg-pink-500/15 border-pink-400/20 text-pink-100" id="btnResetApts">
<iconify-icon height="18" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                      Limpar apartamentos
                    </button>
</div>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Resumo</h3>
<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Pavimentos</p>
<p className="text-lg font-semibold tracking-tight" id="sumFloors" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>27</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Apartamentos</p>
<p className="text-lg font-semibold tracking-tight" id="sumApts" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>54</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Pendências</p>
<p className="text-lg font-semibold tracking-tight" id="sumIssues" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>0</p>
</div>
</div>
<div className="mt-4 rounded-2xl border p-3 border-white/10 bg-gray-950/50" style={{}}>
<div className="flex items-center justify-between">
<p className="text-xs text-gray-400" style={{}}>Status</p>
<span className="text-xs text-gray-300" id="generatedSummary" style={{}}>Gerados: 54/54</span>
</div>
<p className="mt-2 text-xs text-gray-500" style={{}}>Ao gerar novamente, as pendências já registradas por apartamento são mantidas.</p>
</div>
</div>
</div>
</div>
</section>
<section className="space-y-6 hidden" id="viewApartments">
<div className="rounded-3xl border p-5 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<p className="text-xs text-gray-400" style={{}}>Unidades</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Apartamentos</h2>
<p className="mt-1 text-sm text-gray-300" style={{}}>Selecione um apartamento e registre pendências dentro dele.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-white text-gray-950 hover:bg-gray-100" id="btnOpenSelectedApt" style={{}}>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Abrir selecionado
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Cadastrados</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptsCount" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>54</p>
<p className="mt-1 text-xs text-gray-400" style={{}}>Meta: 54 unidades</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Pendências abertas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptsIssuesOpen" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>0</p>
<p className="mt-1 text-xs text-gray-400" style={{}}>No filtro atual</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Pendências concluídas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptsIssuesDone" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>0</p>
<p className="mt-1 text-xs text-gray-400" style={{}}>No filtro atual</p>
</div>
</div>
</div>
<div className="rounded-3xl border p-5 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex items-center justify-between gap-3">
<div className="">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Lista de apartamentos</h3>
<p className="text-xs text-gray-400" style={{}}>27 pavimentos • 2 unidades por andar • total 54</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="btnSelectFirstMatch" style={{}}>
<iconify-icon height="18" icon="solar:cursor-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Selecionar 1º
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium">Resultados</p>
<span className="text-xs text-gray-400" id="aptsListCount" style={{}}>54 itens</span>
</div>
<div className="mt-3 max-h-[32rem] overflow-auto pr-1 space-y-2" id="aptsList"><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 ring-1 border-white/10 bg-white/5 hover:bg-white/10 ring-blue-400/40 bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 101</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 1º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 102</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 1º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 201</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 2º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 202</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 2º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 301</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 3º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 302</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 3º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 401</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 4º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 402</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 4º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 501</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 5º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 502</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 5º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 601</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 6º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 602</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 6º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 701</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 7º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 702</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 7º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 801</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 8º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 802</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 8º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 901</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 9º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 902</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 9º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1001</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 10º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1002</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 10º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1101</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 11º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1102</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 11º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1201</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 12º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1202</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 12º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1301</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 13º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1302</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 13º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1401</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 14º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1402</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 14º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1501</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 15º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1502</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 15º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1601</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 16º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1602</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 16º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1701</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 17º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1702</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 17º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1801</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 18º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1802</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 18º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1901</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 19º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 1902</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 19º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2001</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 20º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2002</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 20º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2101</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 21º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2102</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 21º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2201</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 22º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2202</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 22º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2301</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 23º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2302</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 23º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2401</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 24º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2402</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 24º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2501</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 25º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2502</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 25º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2601</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 26º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2602</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 26º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2701</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 27º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button><button className="w-full text-left rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-white/5 hover:bg-white/10" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">Apto 2702</p>
<p className="text-xs text-gray-400" style={{}}>Pavimento 27º</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0 aberta(s)</span>
<span className="hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-white/10 bg-gray-950/40 text-gray-200" style={{}}>0%</span>
</div>
</div>
</button></div>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs text-gray-400" style={{}}>Selecionado</p>
<h4 className="text-lg font-semibold tracking-tight" id="selectedAptTitle" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Apto 101</h4>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-medium hover:bg-blue-500 text-white" id="btnOpenAptPanel" style={{}}>
<iconify-icon height="18" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                      Abrir
                    </button>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Pavimento</p>
<p className="text-sm font-medium" id="selectedAptFloor">1º</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Pendências (abertas)</p>
<p className="text-sm font-medium" id="selectedAptOpen">0</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Pendências (concluídas)</p>
<p className="text-sm font-medium" id="selectedAptDone">0</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="text-xs text-gray-400" style={{}}>Progresso</p>
<p className="text-sm font-medium" id="selectedAptProgress">0%</p>
</div>
</div>
<div className="mt-4 rounded-2xl border p-3 border-white/10 bg-gray-950/50" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Dica</p>
<p className="mt-1 text-xs text-gray-500" style={{}}>Use “Nova pendência” para registrar diretamente no apartamento selecionado.</p>
</div>
</div>
</div>
</div>
</section>
<section className="hidden space-y-6" id="viewAptPanel">
<div className="rounded-3xl border p-5 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="min-w-0">
<p className="text-xs text-gray-400" style={{}}>Apartamento</p>
<h2 className="truncate text-xl sm:text-2xl font-semibold tracking-tight" id="aptPanelTitle" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>—</h2>
<p className="mt-1 text-sm text-gray-300" id="aptPanelMeta" style={{}}>—</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="btnBackToApts" style={{}}>
<iconify-icon height="18" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Voltar
                  </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white" id="btnAddIssue" style={{}}>
<iconify-icon height="18" icon="solar:add-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Nova pendência
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Abertas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptPanelOpen" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>—</p>
<p className="mt-1 text-xs text-gray-500" style={{}}>Itens pendentes</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Concluídas</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptPanelDone" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>—</p>
<p className="mt-1 text-xs text-gray-500" style={{}}>Itens finalizados</p>
</div>
<div className="rounded-3xl border p-4 border-white/10 bg-gray-950/40" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Progresso</p>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="aptPanelProgress" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>—</p>
<p className="mt-1 text-xs text-gray-500" style={{}}>Concluídas / total</p>
</div>
</div>
</div>
<div className="rounded-3xl border p-5 shadow-xl border-white/10 bg-white/5 shadow-black/20">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Pendências</h3>
<p className="text-xs text-gray-400" style={{}}>Registre o que precisa de correção/ajuste nesta unidade.</p>
</div>
</div>
<div className="mt-4 space-y-3" id="issuesList"></div>
<div className="mt-4 rounded-2xl border p-3 border-white/10 bg-gray-950/50" style={{}}>
<p className="text-xs text-gray-400" style={{}}>Observação</p>
<p className="mt-1 text-xs text-gray-500" style={{}}>Clique em “Concluir” para marcar uma pendência como resolvida. Você pode reabrir quando necessário.</p>
</div>
</div>
</section>
</main>
</div>
</div>
<div className="fixed inset-0 z-50 hidden items-end sm:items-center justify-center p-4 bg-black/60" id="modalBackdrop">
<div className="w-full max-w-xl rounded-3xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" style={{}}>
<div className="p-4 border-b flex items-start justify-between gap-3 border-white/10">
<div>
<p className="text-xs text-gray-400" style={{}}>Cadastrar</p>
<h3 className="text-lg font-semibold tracking-tight" id="modalTitle" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui'}}>Nova pendência</h3>
</div>
<button className="inline-flex items-center justify-center rounded-xl border p-2 border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="modalClose" style={{}}>
<iconify-icon height="18" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="p-4 space-y-3">
<div>
<label className="text-xs text-gray-400" style={{}}>Apartamento</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-2xl border px-3 py-2 text-sm border-white/10 bg-gray-950/40 text-gray-100 hover:bg-gray-950/60" id="modalAptBtn" style={{}}>
<span className="truncate" id="modalAptLabel">—</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="absolute z-20 mt-2 hidden w-full max-h-72 overflow-auto rounded-2xl border shadow-2xl border-white/10 bg-gray-950 shadow-black/40" id="modalAptMenu" style={{}}></div>
</div>
<p className="mt-1 text-xs text-gray-500" style={{}}>Selecione a unidade para registrar a pendência.</p>
</div>
<div>
<label className="text-xs text-gray-400" style={{}}>Título</label>
<input className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-gray-950/50 text-gray-100" id="issueTitle" placeholder="Ex.: Ajustar porta do banheiro" style={{}}/>
</div>
<div>
<label className="text-xs text-gray-400" style={{}}>Descrição (opcional)</label>
<textarea className="mt-1 w-full resize-none rounded-2xl border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 border-white/10 bg-gray-950/50 text-gray-100" id="issueDesc" placeholder="Detalhes, local, observações..." rows="3" style={{}}></textarea>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-white/10 bg-white/5 text-gray-200 hover:bg-white/10" id="modalCancel" style={{}}>
              Cancelar
            </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white" id="modalSave" style={{}}>
<iconify-icon height="18" icon="solar:diskette-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Salvar pendência
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
