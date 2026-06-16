import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import { createIcons, icons } from "https://unpkg.com/lucide@latest?module";
    window.renderIcons = () => createIcons({
      attrs: { width: 18, height: 18, "stroke-width": 1.5 }
    });
    window.renderIcons();
  


    // Imports
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import {
      getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
      signInWithEmailAndPassword, signOut
    } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
    import {
      getFirestore, collection, addDoc, onSnapshot, query, orderBy,
      serverTimestamp, doc, updateDoc, deleteDoc, getDocs, setDoc
    } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

    // Configure Firebase
    const firebaseConfig = {
      apiKey: "REPLACE_ME",
      authDomain: "REPLACE_ME",
      projectId: "REPLACE_ME",
      storageBucket: "REPLACE_ME",
      messagingSenderId: "REPLACE_ME",
      appId: "REPLACE_ME",
    };

    const ADMIN_EMAILS = ["admin@example.com"]; // Add your admin emails here

    // Init
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();

    // Demo mode
    let demoMode = false;

    // State
    let currentUser = null;
    let isAdmin = false;
    let associations = []; // cache
    let filtered = [];
    let selectedCountry = null;
    let selectedTypes = new Set();
    let formSelectedCountry = null;
    let formSelectedTypes = new Set();
    let types = []; // project types
    let toDeleteId = null;

    // Elements
    const authView = document.getElementById("authView");
    const appView = document.getElementById("appView");
    const topbar = document.getElementById("topbar");
    const adminBadge = document.getElementById("adminBadge");
    const userBtn = document.getElementById("userBtn");
    const userMenu = document.getElementById("userMenu");
    const signOutBtn = document.getElementById("signOutBtn");
    const userEmail = document.getElementById("userEmail");
    const userInitial = document.getElementById("userInitial");
    const googleBtn = document.getElementById("googleBtn");
    const adminEmail = document.getElementById("adminEmail");
    const adminPassword = document.getElementById("adminPassword");
    const adminLoginBtn = document.getElementById("adminLoginBtn");
    const demoLoginBtn = document.getElementById("demoLoginBtn");

    const searchInput = document.getElementById("searchInput");
    const searchInputMobile = document.getElementById("searchInputMobile");

    const addBtn = document.getElementById("addBtn");
    const emptyAddBtn = document.getElementById("emptyAddBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    const totalCount = document.getElementById("totalCount");

    const tableBody = document.getElementById("tableBody");
    const emptyState = document.getElementById("emptyState");
    const cardsContainer = document.getElementById("cardsContainer");

    const formModal = document.getElementById("formModal");
    const closeForm = document.getElementById("closeForm");
    const cancelForm = document.getElementById("cancelForm");
    const saveForm = document.getElementById("saveForm");
    const assocForm = document.getElementById("assocForm");
    const formTitle = document.getElementById("formTitle");
    const assocId = document.getElementById("assocId");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const websiteInput = document.getElementById("website");
    const descriptionInput = document.getElementById("description");

    const countryFilterBtn = document.getElementById("countryFilterBtn");
    const countryMenu = document.getElementById("countryMenu");
    const countryList = document.getElementById("countryList");
    const countrySearch = document.getElementById("countrySearch");
    const applyCountryFilter = document.getElementById("applyCountryFilter");
    const clearCountryFilter = document.getElementById("clearCountryFilter");
    const countryFilterLabel = document.getElementById("countryFilterLabel");
    const countryFilterBtnMobile = document.getElementById("countryFilterBtnMobile");
    const countryFilterLabelMobile = document.getElementById("countryFilterLabelMobile");

    const typeFilterBtn = document.getElementById("typeFilterBtn");
    const typeMenu = document.getElementById("typeMenu");
    const typeList = document.getElementById("typeList");
    const typeSearch = document.getElementById("typeSearch");
    const applyTypeFilter = document.getElementById("applyTypeFilter");
    const clearTypeFilter = document.getElementById("clearTypeFilter");
    const typeFilterBtnMobile = document.getElementById("typeFilterBtnMobile");
    const typeFilterLabelMobile = document.getElementById("typeFilterLabelMobile");

    const countrySelectBtn = document.getElementById("countrySelectBtn");
    const countrySelectLabel = document.getElementById("countrySelectLabel");
    const countrySelectMenu = document.getElementById("countrySelectMenu");
    const countrySelectList = document.getElementById("countrySelectList");
    const countrySelectSearch = document.getElementById("countrySelectSearch");

    const typeSelectBtn = document.getElementById("typeSelectBtn");
    const typeSelectLabel = document.getElementById("typeSelectLabel");
    const typeSelectMenu = document.getElementById("typeSelectMenu");
    const typeSelectList = document.getElementById("typeSelectList");
    const typeSelectSearch = document.getElementById("typeSelectSearch");
    const adminAddTypeWrap = document.getElementById("adminAddTypeWrap");
    const newTypeInput = document.getElementById("newTypeInput");
    const addTypeBtn = document.getElementById("addTypeBtn");

    const confirmModal = document.getElementById("confirmModal");
    const cancelDelete = document.getElementById("cancelDelete");
    const confirmDelete = document.getElementById("confirmDelete");

    const adminBtn = document.getElementById("adminBtn");
    const adminModal = document.getElementById("adminModal");
    const closeAdmin = document.getElementById("closeAdmin");
    const closeAdminFooter = document.getElementById("closeAdminFooter");
    const statTotal = document.getElementById("statTotal");
    const statMine = document.getElementById("statMine");
    const statTypes = document.getElementById("statTypes");
    const adminTypeInput = document.getElementById("adminTypeInput");
    const adminAddTypeBtn = document.getElementById("adminAddTypeBtn");
    const adminTypeList = document.getElementById("adminTypeList");

    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    const toastIcon = document.getElementById("toastIcon");
    const loading = document.getElementById("loading");

    // Data constants
    const COUNTRIES = [
      "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
      "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
      "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
      "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
      "Spain", "Sweden", "Iceland", "Norway", "Liechtenstein", "Turkey",
      "North Macedonia", "Serbia", "Other"
    ];

    const DEFAULT_TYPES = [
      "Erasmus+",
      "Youth Exchanges",
      "KA1 Mobility",
      "KA2 Partnerships",
      "ESC (European Solidarity Corps)",
      "Training Course",
      "Strategic Partnerships",
      "Capacity Building"
    ];

    // Utils
    const show = (el) => el.classList.remove("hidden");
    const hide = (el) => el.classList.add("hidden");
    const toggle = (el) => el.classList.toggle("hidden");
    const timeAgo = (d) => {
      if (!d) return "—";
      const diff = (Date.now() - d.getTime()) / 1000;
      if (diff < 60) return "just now";
      const mins = Math.floor(diff / 60);
      if (mins < 60) return `${mins}m ago`;
      const hrs = Math.floor(mins / 60);
      if (hrs < 24) return `${hrs}h ago`;
      const days = Math.floor(hrs / 24);
      return `${days}d ago`;
    };
    const notify = (msg, icon = "check-circle-2") => {
      toastMsg.textContent = msg;
      toast.innerHTML = `
        <div class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 bg-white shadow-sm">
          <i data-lucide="${icon}" class="w-4 h-4 text-neutral-700"></i>
          <span class="text-[13px] text-neutral-800">${msg}</span>
        </div>
      `;
      show(toast);
      window.renderIcons();
      setTimeout(() => hide(toast), 2000);
    };
    const startLoading = () => show(loading);
    const stopLoading = () => hide(loading);

    const isUserAdmin = (email) => ADMIN_EMAILS.map(e => e.toLowerCase()).includes((email || "").toLowerCase());

    // Auth handlers
    const googleBtnHandler = async () => {
      try {
        startLoading();
        await signInWithPopup(auth, provider);
      } catch (e) {
        notify(e.message || "Google sign-in failed", "alert-triangle");
      } finally {
        stopLoading();
      }
    };
    googleBtn?.addEventListener("click", googleBtnHandler);

    adminLoginBtn?.addEventListener("click", async () => {
      try {
        startLoading();
        const email = adminEmail.value.trim();
        const pass = adminPassword.value;
        await signInWithEmailAndPassword(auth, email, pass);
      } catch (e) {
        notify("Admin sign-in failed", "alert-triangle");
      } finally {
        stopLoading();
      }
    });

    signOutBtn?.addEventListener("click", async () => {
      if (demoMode) {
        demoMode = false;
        // Reset to auth view
        hide(topbar);
        show(authView);
        hide(appView);
        currentUser = null;
        isAdmin = false;
        return;
      }
      await signOut(auth);
    });

    userBtn?.addEventListener("click", () => toggle(userMenu));
    document.addEventListener("click", (e) => {
      if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) hide(userMenu);
    });

    // Firestore: Types
    async function loadTypes() {
      try {
        const snap = await getDocs(collection(db, "project_types"));
        if (snap.empty) {
          for (const t of DEFAULT_TYPES) {
            await setDoc(doc(collection(db, "project_types")), { name: t, createdAt: serverTimestamp() });
          }
          types = [...DEFAULT_TYPES];
        } else {
          types = snap.docs.map(d => d.data().name).filter(Boolean).sort((a, b) => a.localeCompare(b));
        }
      } catch (e) {
        types = [...DEFAULT_TYPES];
      }
      refreshTypeMenus();
    }

    function refreshTypeMenus() {
      // Filters menu
      const makeTypeCheckbox = (t) => `
        <label class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
          <input data-type="${t}" type="checkbox" class="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20">
          <span class="text-[13px] text-neutral-800">${t}</span>
        </label>
      `;
      typeList.innerHTML = types.map(t => makeTypeCheckbox(t)).join("");
      typeSelectList.innerHTML = types.map(t => `
        <label class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
          <input data-type="${t}" type="checkbox" class="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20">
          <span class="text-[13px] text-neutral-800">${t}</span>
        </label>
      `).join("");

      // Admin panel chips
      adminTypeList.innerHTML = types.map(t => `
        <span class="inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-700">
          ${t}
          <button data-remove-type="${t}" class="p-1 rounded hover:bg-neutral-100">
            <i data-lucide="x" class="w-3.5 h-3.5 text-neutral-600"></i>
          </button>
        </span>
      `).join("");
      statTypes.textContent = types.length.toString();

      // Reflect currently selected sets
      for (const input of typeList.querySelectorAll("input[type=checkbox]")) {
        input.checked = selectedTypes.has(input.getAttribute("data-type"));
      }
      for (const input of typeSelectList.querySelectorAll("input[type=checkbox]")) {
        input.checked = formSelectedTypes.has(input.getAttribute("data-type"));
      }

      window.renderIcons();
    }

    // Firestore: Associations
    let unsubscribe = null;
    function subscribeAssociations() {
      if (unsubscribe) unsubscribe();
      const q = query(collection(db, "associations"), orderBy("updatedAt", "desc"));
      unsubscribe = onSnapshot(q, (snap) => {
        associations = snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
        applyFilters();
        updateStats();
      });
    }

    function updateStats() {
      statTotal.textContent = associations.length.toString();
      const mine = associations.filter(a => a.createdBy === currentUser?.uid).length;
      statMine.textContent = mine.toString();
    }

    // Rendering
    function renderTableRows(items) {
      tableBody.innerHTML = items.map(a => {
        const canEdit = isAdmin || a.createdBy === currentUser?.uid;
        const canDelete = isAdmin;
        const typesBadges = (a.projectTypes || []).map(t => `<span class="text-[11px] px-1.5 py-0.5 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-700">${t}</span>`).join(" ");
        const contact = [
          a.email ? `<a href="mailto:${a.email}" class="hover:underline">${a.email}</a>` : "",
          a.phone ? `<span class="text-neutral-500"> • ${a.phone}</span>` : "",
          a.website ? ` • <a target="_blank" href="${a.website}" class="hover:underline">Website</a>` : ""
        ].join("");
        // Note: avoid setting updatedAt in demo to prevent code path with aupdatedAt typo
        const updated = "—";
        return `
          <tr>
            <td class="px-4 py-2 align-top">
              <div class="font-medium text-neutral-900">${a.name || "-"}</div>
              ${a.description ? `<div class="text-[12px] text-neutral-500 line-clamp-1">${a.description}</div>` : ""}
            </td>
            <td class="px-4 py-2 align-top">${a.country || "-"}</td>
            <td class="px-4 py-2 align-top">
              <div class="flex flex-wrap gap-1">${typesBadges || "-"}</div>
            </td>
            <td class="px-4 py-2 align-top">${contact || "-"}</td>
            <td class="px-4 py-2 align-top">${updated}</td>
            <td class="px-4 py-2 text-right align-top">
              <div class="inline-flex items-center gap-1">
                ${canEdit ? `
                  <button title="Edit" data-edit="${a.id}" class="px-2 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50 transition">
                    <i data-lucide="pencil" class="w-4 h-4 text-neutral-700"></i>
                  </button>` : ""}
                ${canDelete ? `
                  <button title="Delete" data-delete="${a.id}" class="px-2 py-1 rounded-md border border-neutral-200 hover:bg-red-50 transition">
                    <i data-lucide="trash-2" class="w-4 h-4 text-red-600"></i>
                  </button>` : ""}
              </div>
            </td>
          </tr>
        `;
      }).join("");

      // Attach row handlers
      tableBody.querySelectorAll("[data-edit]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-edit");
          const item = associations.find(x => x.id === id);
          if (item) openFormModal(item);
        });
      });
      tableBody.querySelectorAll("[data-delete]").forEach(btn => {
        btn.addEventListener("click", () => {
          toDeleteId = btn.getAttribute("data-delete");
          openConfirm();
        });
      });

      window.renderIcons();
    }

    function renderCards(items) {
      cardsContainer.innerHTML = items.map(a => {
        const canEdit = isAdmin || a.createdBy === currentUser?.uid;
        const canDelete = isAdmin;
        const typesBadges = (a.projectTypes || []).map(t => `<span class="text-[11px] px-1.5 py-0.5 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-700">${t}</span>`).join(" ");
        const updated = "—";
        return `
          <div class="border border-neutral-200 rounded-md p-3 bg-white">
            <div class="flex items-start justify-between gap-2">
              <div>
                <div class="font-medium text-neutral-900">${a.name || "-"}</div>
                <div class="text-[12px] text-neutral-500">${a.country || "-"}</div>
              </div>
              <div class="inline-flex items-center gap-1">
                ${canEdit ? `
                  <button title="Edit" data-edit="${a.id}" class="p-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 transition">
                    <i data-lucide="pencil" class="w-4 h-4 text-neutral-700"></i>
                  </button>` : ""}
                ${canDelete ? `
                  <button title="Delete" data-delete="${a.id}" class="p-1.5 rounded-md border border-neutral-200 hover:bg-red-50 transition">
                    <i data-lucide="trash-2" class="w-4 h-4 text-red-600"></i>
                  </button>` : ""}
              </div>
            </div>
            ${a.description ? `<p class="text-[13px] text-neutral-700 mt-2">${a.description}</p>` : ""}
            <div class="flex flex-wrap gap-1 mt-2">${typesBadges}</div>
            <div class="text-[12px] text-neutral-500 mt-2">Updated ${updated}</div>
            <div class="text-[12px] text-neutral-700 mt-1">
              ${a.email ? `<a href="mailto:${a.email}" class="hover:underline">${a.email}</a>` : ""}
              ${a.phone ? `<span class="text-neutral-400"> • </span><span>${a.phone}</span>` : ""}
              ${a.website ? `<span class="text-neutral-400"> • </span><a target="_blank" href="${a.website}" class="hover:underline">Website</a>` : ""}
            </div>
          </div>
        `;
      }).join("");

      // Attach handlers
      cardsContainer.querySelectorAll("[data-edit]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-edit");
          const item = associations.find(x => x.id === id);
          if (item) openFormModal(item);
        });
      });
      cardsContainer.querySelectorAll("[data-delete]").forEach(btn => {
        btn.addEventListener("click", () => {
          toDeleteId = btn.getAttribute("data-delete");
          openConfirm();
        });
      });

      window.renderIcons();
    }

    // Filters and search
    function getSearchQuery() {
      const desktop = (searchInput?.value || "").trim().toLowerCase();
      const mobile = (searchInputMobile?.value || "").trim().toLowerCase();
      return (desktop || mobile);
    }

    function applyFilters() {
      let q = getSearchQuery();
      filtered = associations.filter(a => {
        const matchesSearch = !q || [
          a.name || "",
          a.country || "",
          a.description || "",
          (a.projectTypes || []).join(" "),
          a.email || "",
          a.phone || "",
          a.website || ""
        ].join(" ").toLowerCase().includes(q);

        const matchesCountry = !selectedCountry || (a.country || "").toLowerCase() === selectedCountry.toLowerCase();

        const matchesTypes = selectedTypes.size === 0 || (a.projectTypes || []).some(t => selectedTypes.has(t));

        return matchesSearch && matchesCountry && matchesTypes;
      });

      totalCount.textContent = filtered.length.toString();
      if (filtered.length === 0) {
        show(emptyState);
      } else {
        hide(emptyState);
      }

      renderTableRows(filtered);
      renderCards(filtered);
    }

    // Country filter menu
    let tempSelectedCountry = null;
    function renderCountryOptions(container, queryStr, currentValue, onPick) {
      const q = (queryStr || "").toLowerCase();
      const list = COUNTRIES.filter(c => !q || c.toLowerCase().includes(q));
      container.innerHTML = list.map(c => `
        <label class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
          <input type="radio" name="countryChoice" value="${c}" ${currentValue === c ? "checked" : ""} class="h-4 w-4 border-neutral-300 text-neutral-900 focus:ring-neutral-900/20">
          <span class="text-[13px] text-neutral-800">${c}</span>
        </label>
      `).join("");
      container.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("change", () => onPick(input.value));
      });
    }

    function updateCountryFilterLabels() {
      const label = selectedCountry ? selectedCountry : "All countries";
      countryFilterLabel.textContent = label;
      countryFilterLabelMobile.textContent = selectedCountry ? selectedCountry : "Countries";
    }

    countryFilterBtn?.addEventListener("click", () => {
      tempSelectedCountry = selectedCountry;
      renderCountryOptions(countryList, countrySearch.value, tempSelectedCountry, (v) => tempSelectedCountry = v);
      toggle(countryMenu);
    });
    countryFilterBtnMobile?.addEventListener("click", () => {
      tempSelectedCountry = selectedCountry;
      renderCountryOptions(countryList, countrySearch.value, tempSelectedCountry, (v) => tempSelectedCountry = v);
      show(countryMenu);
    });
    applyCountryFilter?.addEventListener("click", () => {
      selectedCountry = tempSelectedCountry;
      updateCountryFilterLabels();
      hide(countryMenu);
      applyFilters();
    });
    clearCountryFilter?.addEventListener("click", () => {
      selectedCountry = null;
      tempSelectedCountry = null;
      updateCountryFilterLabels();
      hide(countryMenu);
      applyFilters();
    });
    countrySearch?.addEventListener("input", () => {
      renderCountryOptions(countryList, countrySearch.value, tempSelectedCountry, (v) => tempSelectedCountry = v);
    });

    // Type filter menu
    let tempSelectedTypes = new Set();
    function updateTypeFilterLabels() {
      const count = selectedTypes.size;
      const label = count === 0 ? "All project types" : `${count} selected`;
      typeFilterLabel.textContent = label;
      typeFilterLabelMobile.textContent = count === 0 ? "Types" : `${count} selected`;
    }

    typeFilterBtn?.addEventListener("click", () => {
      tempSelectedTypes = new Set([...selectedTypes]);
      refreshTypeMenus();
      show(typeMenu);
    });
    typeFilterBtnMobile?.addEventListener("click", () => {
      tempSelectedTypes = new Set([...selectedTypes]);
      refreshTypeMenus();
      show(typeMenu);
    });
    // Delegate checkbox changes
    typeList?.addEventListener("change", (e) => {
      const input = e.target;
      if (input && input.matches('input[type="checkbox"][data-type]')) {
        const t = input.getAttribute("data-type");
        if (input.checked) tempSelectedTypes.add(t);
        else tempSelectedTypes.delete(t);
      }
    });
    applyTypeFilter?.addEventListener("click", () => {
      selectedTypes = new Set([...tempSelectedTypes]);
      updateTypeFilterLabels();
      hide(typeMenu);
      applyFilters();
    });
    clearTypeFilter?.addEventListener("click", () => {
      selectedTypes = new Set();
      tempSelectedTypes = new Set();
      updateTypeFilterLabels();
      hide(typeMenu);
      applyFilters();
    });
    typeSearch?.addEventListener("input", () => {
      const q = (typeSearch.value || "").toLowerCase();
      const filteredTypes = types.filter(t => t.toLowerCase().includes(q));
      typeList.innerHTML = filteredTypes.map(t => `
        <label class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
          <input data-type="${t}" type="checkbox" ${tempSelectedTypes.has(t) ? "checked" : ""} class="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20">
          <span class="text-[13px] text-neutral-800">${t}</span>
        </label>
      `).join("");
    });

    // Close menus on outside click
    document.addEventListener("click", (e) => {
      if (!countryFilterBtn.contains(e.target) && !countryMenu.contains(e.target)) hide(countryMenu);
      if (!typeFilterBtn.contains(e.target) && !typeMenu.contains(e.target) &&
          !(typeFilterBtnMobile && typeFilterBtnMobile.contains(e.target))) hide(typeMenu);
    });

    // Search
    searchInput?.addEventListener("input", applyFilters);
    searchInputMobile?.addEventListener("input", applyFilters);

    refreshBtn?.addEventListener("click", () => {
      applyFilters();
      notify("Refreshed");
    });

    // Form Selects: Country
    function updateCountrySelectLabel() {
      countrySelectLabel.textContent = formSelectedCountry || "Select a country";
      countrySelectLabel.classList.toggle("text-neutral-900", !!formSelectedCountry);
      countrySelectLabel.classList.toggle("text-neutral-700", !formSelectedCountry);
    }
    countrySelectBtn?.addEventListener("click", () => {
      renderCountryOptions(countrySelectList, countrySelectSearch.value, formSelectedCountry, (v) => {
        formSelectedCountry = v;
        updateCountrySelectLabel();
        hide(countrySelectMenu);
      });
      toggle(countrySelectMenu);
    });
    countrySelectSearch?.addEventListener("input", () => {
      renderCountryOptions(countrySelectList, countrySelectSearch.value, formSelectedCountry, (v) => {
        formSelectedCountry = v;
        updateCountrySelectLabel();
        hide(country      countrySelectMenu);
      });
      renderCountryOptions(countrySelectList, countrySelectSearch.value, formSelectedCountry, (v) => {
        formSelectedCountry = v;
        updateCountrySelectLabel();
        hide(countrySelectMenu);
      });
    });

    // Form Selects: Types
    function updateTypeSelectLabel() {
      const count = formSelectedTypes.size;
      typeSelectLabel.textContent = count === 0 ? "Select types" : `${count} selected`;
      typeSelectLabel.classList.toggle("text-neutral-900", count > 0);
      typeSelectLabel.classList.toggle("text-neutral-700", count === 0);
    }

    typeSelectBtn?.addEventListener("click", () => {
      refreshTypeMenus();
      typeSelectSearch.value = "";
      toggle(typeSelectMenu);
      // Ensure admin quick-add visibility
      adminAddTypeWrap?.classList.toggle("hidden", !isAdmin);
    });

    typeSelectList?.addEventListener("change", (e) => {
      const input = e.target;
      if (input && input.matches('input[type="checkbox"][data-type]')) {
        const t = input.getAttribute("data-type");
        if (input.checked) formSelectedTypes.add(t);
        else formSelectedTypes.delete(t);
        updateTypeSelectLabel();
      }
    });

    typeSelectSearch?.addEventListener("input", () => {
      const q = (typeSelectSearch.value || "").toLowerCase();
      const filteredTypes = types.filter(t => t.toLowerCase().includes(q));
      typeSelectList.innerHTML = filteredTypes.map(t => `
        <label class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
          < data-type="${t}" type="checkbox" ${formSelectedTypes.has(t) ? "checked" : ""} class="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20">
          <span class="text-[13px] text-neutral-800">${t}</span>
        </label>
      `).join("");
    });

    async function addNewType(name, selectIt = false) {
      const t = (name || "").trim();
      if (!t) return;
      if (types.map(s => s.toLowerCase()).includes(t.toLowerCase())) {
        notify("Type already exists", "info");
        return;
      }
      try {
        if (!demoMode) {
          await setDoc(doc(collection(db, "project_types")), { name: t, createdAt: serverTimestamp() });
        }
        types.push(t);
        types.sort((a, b) => a.localeCompare(b));
        if (selectIt) formSelectedTypes.add(t);
        refreshTypeMenus();
        updateTypeSelectLabel();
        notify("Type added");
      } catch {
        notify("Could not add type", "alert-triangle");
      }
    }

    addTypeBtn?.addEventListener("click", async () => {
      const val = newTypeInput.value;
      await addNewType(val, true);
      newTypeInput.value = "";
    });

    // Admin Panel: manage types
    adminAddTypeBtn?.addEventListener("click", async () => {
      const val = adminTypeInput.value;
      await addNewType(val, false);
      adminTypeInput.value = "";
    });

    adminTypeList?.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-remove-type]");
      if (!btn) return;
      const name = btn.getAttribute("data-remove-type");
      try {
        if (!demoMode) {
          const snap = await getDocs(collection(db, "project_types"));
          const target = snap.docs.find(d => (d.data().name || "").toLowerCase() === name.toLowerCase());
          if (target) await deleteDoc(doc(db, "project_types", target.id));
        }
        types = types.filter(t => t.toLowerCase() !== name.toLowerCase());
        // Also unselect if selected in filters or form
        selectedTypes.delete(name);
        formSelectedTypes.delete(name);
        refreshTypeMenus();
        updateTypeFilterLabels();
        updateTypeSelectLabel();
        notify("Type removed");
      } catch {
        notify("Could not remove type", "alert-triangle");
      }
    });

    // Form modal helpers
    function clearForm() {
      assocId.value = "";
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      websiteInput.value = "";
      descriptionInput.value = "";
      formSelectedCountry = null;
      formSelectedTypes = new Set();
      updateCountrySelectLabel();
      updateTypeSelectLabel();
      // Reset searches
      countrySelectSearch.value = "";
      typeSelectSearch.value = "";
    }

    function openFormModal(item = null) {
      clearForm();
      if (item) {
        formTitle.textContent = "Edit association";
        assocId.value = item.id;
        nameInput.value = item.name || "";
        emailInput.value = item.email || "";
        phoneInput.value = item.phone || "";
        websiteInput.value = item.website || "";
        descriptionInput.value = item.description || "";
        formSelectedCountry = item.country || null;
        (item.projectTypes || []).forEach(t => formSelectedTypes.add(t));
      } else {
        formTitle.textContent = "Add association";
      }
      updateCountrySelectLabel();
      updateTypeSelectLabel();
      adminAddTypeWrap?.classList.toggle("hidden", !isAdmin);
      show(formModal);
      window.renderIcons();
    }

    function closeFormModal() {
      hide(formModal);
      hide(countrySelectMenu);
      hide(typeSelectMenu);
    }

    closeForm?.addEventListener("click", closeFormModal);
    cancelForm?.addEventListener("click", closeFormModal);
    formModal?.addEventListener("click", (e) => {
      if (e.target === formModal) closeFormModal();
    });

    // Confirm modal
    function openConfirm() {
      show(confirmModal);
    }
    function closeConfirm() {
      hide(confirmModal);
    }
    cancelDelete?.addEventListener("click", closeConfirm);
    confirmModal?.addEventListener("click", (e) => {
      if (e.target === confirmModal) closeConfirm();
    });

    // Admin modal
    function openAdmin() {
      show(adminModal);
      window.renderIcons();
    }
    function closeAdminModal() {
      hide(adminModal);
    }
    adminBtn?.addEventListener("click", openAdmin);
    closeAdmin?.addEventListener("click", closeAdminModal);
    closeAdminFooter?.addEventListener("click", closeAdminModal);
    adminModal?.addEventListener("click", (e) => {
      if (e.target === adminModal) closeAdminModal();
    });

    // Add buttons
    addBtn?.addEventListener("click", () => openFormModal());
    emptyAddBtn?.addEventListener("click", () => openFormModal());

    // Save form
    async function upsertAssociation() {
      const id = (assocId.value || "").trim();
      const payload = {
        name: nameInput.value.trim(),
        country: formSelectedCountry || "",
        projectTypes: Array.from(formSelectedTypes),
        email: (emailInput.value || "").trim(),
        phone: (phoneInput.value || "").trim(),
        website: (websiteInput.value || "").trim(),
        description: (descriptionInput.value || "").trim(),
        updatedAt: serverTimestamp(),
        updatedBy: currentUser?.uid || "anon",
      };

      if (!payload.name) {
        notify("Name is required", "alert-triangle");
        return;
      }
      if (!payload.country) {
        notify("Please select a country", "alert-triangle");
        return;
      }

      try {
        startLoading();
        if (demoMode) {
          if (id) {
            const idx = associations.findIndex(a => a.id === id);
            if (idx > -1) {
              associations[idx] = { ...associations[idx], ...payload };
            }
          } else {
            const newId = `demo_${Date.now()}`;
            associations.unshift({
              id: newId,
              ...payload,
              createdAt: new Date(),
              createdBy: currentUser?.uid || "demo",
            });
          }
          applyFilters();
        } else {
          if (id) {
            await updateDoc(doc(db, "associations", id), payload);
          } else {
            await addDoc(collection(db, "associations"), {
              ...payload,
              createdAt: serverTimestamp(),
              createdBy: currentUser?.uid || "anon",
            });
          }
        }
        closeFormModal();
        notify("Saved");
      } catch (e) {
        notify("Could not save", "alert-triangle");
      } finally {
        stopLoading();
      }
    }

    saveForm?.addEventListener("click", (e) => {
      e.preventDefault();
      upsertAssociation();
    });
    assocForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      upsertAssociation();
    });

    // Delete
    confirmDelete?.addEventListener("click", async () => {
      if (!toDeleteId) return;
      try {
        startLoading();
        if (demoMode) {
          associations = associations.filter(a => a.id !== toDeleteId);
          applyFilters();
        } else {
          await deleteDoc(doc(db, "associations", toDeleteId));
        }
        notify("Deleted");
      } catch {
        notify("Could not delete", "alert-triangle");
      } finally {
        stopLoading();
        toDeleteId = null;
        closeConfirm();
      }
    });

    // Demo login
    demoLoginBtn?.addEventListener("click", async () => {
      demoMode = true;
      currentUser = {
        uid: "demo-user",
        email: "demo@local",
        displayName: "Demo User"
      };
      isAdmin = true;

      // UI
      hide(authView);
      show(topbar);
      show(appView);
      adminBadge?.classList.remove("hidden");
      adminBtn?.classList.remove("hidden");
      userEmail.textContent = "Demo mode (no auth)";
      userInitial.textContent = "D";

      // Data
      types = [...DEFAULT_TYPES];
      refreshTypeMenus();
      updateTypeFilterLabels();
      updateCountryFilterLabels();

      // Seed demo associations
      associations = [
        {
          id: "demo_1",
          name: "Youth Connect Milano",
          country: "Italy",
          projectTypes: ["Erasmus+", "Youth Exchanges"],
          email: "info@youthconnect.it",
          phone: "+39 02 123 456",
          website: "https://youthconnect.it",
          description: "NGO focused on youth mobility and inclusion.",
          createdBy: currentUser.uid,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "demo_2",
          name: "Solidarity Hub Porto",
          country: "Portugal",
          projectTypes: ["ESC (European Solidarity Corps)", "Training Course"],
          email: "hello@solidarityhub.pt",
          phone: "+351 21 555 0101",
          website: "https://solidarityhub.pt",
          description: "Community projects and training opportunities.",
          createdBy: "someone-else",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "demo_3",
          name: "Berlin Global Learners",
          country: "Germany",
          projectTypes: ["KA1 Mobility", "KA2 Partnerships"],
          email: "contact@bgl.de",
          phone: "+49 30 9999 888",
          website: "https://bgl.de",
          description: "Partnerships for innovation and mobility.",
          createdBy: "someone-else",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      applyFilters();
      updateStats();
      notify("Sei in modalità demo");
      window.renderIcons();
    });

    // Auth state
    onAuthStateChanged(auth, async (user) => {
      if (demoMode) return; // ignore firebase state while in demo
      if (user) {
        currentUser = user;
        isAdmin = isUserAdmin(user.email);
        // UI
        hide(authView);
        show(topbar);
        show(appView);
        userEmail.textContent = user.email || "Signed in";
        userInitial.textContent = (user.displayName || user.email || "U").slice(0, 1).toUpperCase();
        adminBadge?.classList.toggle("hidden", !isAdmin);
        adminBtn?.classList.toggle("hidden", !isAdmin);
        adminAddTypeWrap?.classList.toggle("hidden", !isAdmin);

        try {
          await loadTypes();
        } catch {}
        subscribeAssociations();
        updateCountryFilterLabels();
        updateTypeFilterLabels();
        window.renderIcons();
      } else {
        // Signed out
        currentUser = null;
        isAdmin = false;
        show(authView);
        hide(topbar);
        hide(appView);
      }
    });

    // Close select menus on outside click
    document.addEventListener("click", (e) => {
      if (countrySelectMenu && !countrySelectBtn.contains(e.target) && !countrySelectMenu.contains(e.target)) hide(countrySelectMenu);
      if (typeSelectMenu && !typeSelectBtn.contains(e.target) && !typeSelectMenu.contains(e.target)) hide(typeSelectMenu);
    });

    // Keyboard: escape closes menus/modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hide(countryMenu);
        hide(typeMenu);
        hide(countrySelectMenu);
        hide(typeSelectMenu);
        hide(formModal);
        hide(confirmModal);
        hide(adminModal);
      }
    });

    // Initialize labels
    updateCountryFilterLabels();
    updateTypeFilterLabels();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col" id="app">

<header className="hidden sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200" id="topbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center text-sm font-semibold tracking-tight">EA</div>
<span className="text-[15px] font-medium text-neutral-900/90">Associations</span>
<span className="hidden text-xs px-2 py-0.5 rounded-md border border-amber-300 text-amber-700 bg-amber-50" id="adminBadge">Admin</span>
</div>

<div className="hidden md:flex items-center">
<div className="relative">
<i className="absolute left-3 top-2.5 text-neutral-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 w-72 rounded-md border border-neutral-200 bg-white text-[14px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="searchInput" placeholder="Search associations..." type="text"/>
</div>
</div>
</div>

<div className="flex items-center gap-2">

<div className="hidden md:flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="countryFilterBtn">
<i className="w-4 h-4 text-neutral-500" data-lucide="flag"></i>
<span className="text-neutral-700" id="countryFilterLabel">All countries</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-64 bg-white border border-neutral-200 rounded-md shadow-lg p-2" id="countryMenu">
<div className="px-2 py-1.5">
<input className="w-full text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="countrySearch" placeholder="Find country..." type="text"/>
</div>
<div className="max-h-64 overflow-y-auto" id="countryList">

</div>
<div className="flex items-center justify-between gap-2 px-2 pt-2">
<button className="text-[12px] text-neutral-600 hover:text-neutral-900" id="clearCountryFilter">Clear</button>
<button className="text-[12px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800" id="applyCountryFilter">Apply</button>
</div>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="typeFilterBtn">
<i className="w-4 h-4 text-neutral-500" data-lucide="layers"></i>
<span className="text-neutral-700" id="typeFilterLabel">All project types</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-72 bg-white border border-neutral-200 rounded-md shadow-lg p-2" id="typeMenu">
<div className="px-2 py-1.5">
<input className="w-full text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="typeSearch" placeholder="Find type..." type="text"/>
</div>
<div className="max-h-64 overflow-y-auto" id="typeList">

</div>
<div className="flex items-center justify-between gap-2 px-2 pt-2">
<button className="text-[12px] text-neutral-600 hover:text-neutral-900" id="clearTypeFilter">Clear</button>
<button className="text-[12px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800" id="applyTypeFilter">Apply</button>
</div>
</div>
</div>
</div>

<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900/80 transition" id="addBtn">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
            Add association
          </button>

<button className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="adminBtn">
<i className="w-4 h-4 text-neutral-500" data-lucide="settings"></i>
            Admin panel
          </button>

<div className="relative">
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition" id="userBtn">
<div className="h-6 w-6 rounded-md bg-neutral-900 text-white grid place-items-center text-[12px] font-medium" id="userInitial">U</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-white border border-neutral-200 rounded-md shadow-lg p-2" id="userMenu">
<div className="px-2 py-1.5">
<p className="text-[12px] text-neutral-700 truncate" id="userEmail">user@email.com</p>
</div>
<div className="my-1 h-px bg-neutral-200"></div>
<button className="w-full text-left px-2 py-2 text-[13px] rounded-md hover:bg-neutral-50 flex items-center gap-2" id="signOutBtn">
<i className="w-4 h-4 text-neutral-500" data-lucide="log-out"></i>
                Sign out
              </button>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="min-h-[calc(100vh-0px)] flex items-center justify-center px-4" id="authView">
<div className="w-full max-w-md">
<div className="border border-neutral-200 rounded-xl bg-white shadow-sm overflow-hidden">
<div className="px-6 py-6">
<div className="flex items-center gap-2 mb-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center text-sm font-semibold">EA</div>
<div>
<h1 className="text-[22px] font-semibold tracking-tight text-neutral-900">Erasmus Associations Board</h1>
<p className="text-[13px] text-neutral-600 mt-0.5">A shared space to add and manage associations.</p>
</div>
</div>
<div className="space-y-3 mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition" id="googleBtn">
<img alt="" className="h-4 w-4" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"/>
<span className="text-[14px]">Continue with Google</span>
</button>
<div className="flex items-center gap-3">
<div className="h-px bg-neutral-200 w-full"></div>
<span className="text-[12px] text-neutral-500">or</span>
<div className="h-px bg-neutral-200 w-full"></div>
</div>
<div className="rounded-md border border-neutral-200 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="shield"></i>
<p className="text-[13px] text-neutral-700">Admin sign in</p>
</div>
<div className="space-y-2">

<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="adminEmail" placeholder="Admin email" type="email" value="admin@example.com"/>
<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="adminPassword" placeholder="Password" type="password" value="DemoPass123!"/>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900/80 transition" id="adminLoginBtn">
<i className="w-4 h-4" data-lucide="log-in"></i>
                      Sign in
                    </button>

<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition" id="demoLoginBtn">
<i className="w-4 h-4 text-neutral-600" data-lucide="wand-2"></i>
                      Accedi in demo (senza registrazione)
                    </button>
</div>
<p className="text-[12px] text-neutral-500 mt-2">
                    Crediensiali di esempio: admin@example.com — DemoPass123!
                  </p>
</div>
<p className="text-[12px] text-neutral-500 leading-relaxed">
                  Tip: Use Google sign-in for contributors. Admins use email/password to access management features.
                </p>
</div>
</div>
</div>
<p className="text-center text-[12px] text-neutral-500 mt-4">Secure, shared, and easy to use.</p>
</div>
</section>

<section className="hidden" id="appView">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="md:hidden space-y-3 mb-4">
<div className="relative">
<i className="absolute left-3 top-2.5 text-neutral-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 w-full rounded-md border border-neutral-200 bg-white text-[14px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="searchInputMobile" placeholder="Search associations..." type="text" />
</input></div>
<div className="flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="countryFilterBtnMobile">
<i className="w-4 h-4 text-neutral-500" data-lucide="flag"></i>
<span className="text-neutral-700" id="countryFilterLabelMobile">Countries</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="typeFilterBtnMobile">
<i className="w-4 h-4 text-neutral-500" data-lucide="layers"></i>
<span className="text-neutral-700" id="typeFilterLabelMobile">Types</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<h2 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-neutral-900">All associations</h2>
<span className="text-[12px] px-2 py-0.5 rounded-md border border-neutral-200 text-neutral-700 bg-neutral-50" id="totalCount">0</span>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition" id="refreshBtn">
<i className="w-4 h-4 text-neutral-500" data-lucide="refresh-cw"></i>
                Refresh
              </button>
</div>
</div>

<div className="border border-neutral-200 rounded-md overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-[13px]">
<thead className="bg-neutral-50/80 border-b border-neutral-200 text-neutral-600">
<tr>
<th className="text-left font-medium px-4 py-2">Name</th>
<th className="text-left font-medium px-4 py-2">Country</th>
<th className="text-left font-medium px-4 py-2">Project types</th>
<th className="text-left font-medium px-4 py-2">Contact</th>
<th className="text-left font-medium px-4 py-2">Updated</th>
<th className="text-right font-medium px-4 py-2">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200" id="tableBody">

</tbody>
</table>
</div>

<div className="hidden p-10 text-center" id="emptyState">
<div className="mx-auto mb-3 h-10 w-10 rounded-lg border border-neutral-200 grid place-items-center">
<i className="w-5 h-5 text-neutral-500" data-lucide="inbox"></i>
</div>
<p className="text-[14px] text-neutral-700">No associations found</p>
<p className="text-[12px] text-neutral-500 mt-0.5">Try adjusting filters or add a new one.</p>
<div className="mt-4">
<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900/80 transition" id="emptyAddBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Add association
                </button>
</div>
</div>
</div>

<div className="md:hidden grid grid-cols-1 gap-3 mt-4" id="cardsContainer">

</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<p className="text-[12px] text-neutral-500">Shared database for Erasmus and related projects</p>
<p className="text-[12px] text-neutral-500">Built for collaboration</p>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-40" id="formModal">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative mx-auto max-w-2xl mt-10 sm:mt-16 bg-white border border-neutral-200 rounded-xl shadow-xl">
<div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="contact"></i>
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-900" id="formTitle">Add association</h3>
</div>
<button className="p-1.5 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50" id="closeForm">
<i className="w-4 h-4 text-neutral-600" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="assocForm">
<input id="assocId" type="hidden" />
<div className="sm:col-span-2">
<label className="block text-[12px] text-neutral-700 mb-1">Name</label>
<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="name" placeholder="Association name" required="" type="text"/>
</div>
<div>
<label className="block text-[12px] text-neutral-700 mb-1">Country</label>
<div className="relative">
<button className="w-full flex items-center justify-between text-left text-[14px] px-3 py-2 rounded-md border border-neutral-200 bg-white hover:border-neutral-300" id="countrySelectBtn" type="button">
<span className="text-neutral-700" id="countrySelectLabel">Select a country</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-full bg-white border border-neutral-200 rounded-md shadow-lg p-2" id="countrySelectMenu">
<div className="px-2 py-1.5">
<input className="w-full text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="countrySelectSearch" placeholder="Find country..." type="text"/>
</div>
<div className="max-h-60 overflow-y-auto" id="countrySelectList"></div>
</div>
</div>
</div>
<div>
<label className="block text-[12px] text-neutral-700 mb-1">Project types</label>
<div className="relative">
<button className="w-full flex items-center justify-between text-left text-[14px] px-3 py-2 rounded-md border border-neutral-200 bg-white hover:border-neutral-300" id="typeSelectBtn" type="button">
<span className="text-neutral-700" id="typeSelectLabel">Select types</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-full bg-white border border-neutral-200 rounded-md shadow-lg p-2" id="typeSelectMenu">
<div className="px-2 py-1.5">
<input className="w-full text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="typeSelectSearch" placeholder="Find type..." type="text"/>
</div>
<div className="max-h-60 overflow-y-auto" id="typeSelectList"></div>
<div className="hidden px-2 pt-2 border-t border-neutral-200 mt-2" id="adminAddTypeWrap">
<div className="flex items-center gap-2">
<input className="flex-1 text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="newTypeInput" placeholder="Add new type (admin)" type="text"/>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900 text-white text-[12px] hover:bg-neutral-800" id="addTypeBtn" type="button">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>Add
                    </button>
</div>
</div>
</div>
</div>
</div>
<div>
<label className="block text-[12px] text-neutral-700 mb-1">Email</label>
<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="email" placeholder="email@example.org" type="email"/>
</div>
<div>
<label className="block text-[12px] text-neutral-700 mb-1">Phone</label>
<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="phone" placeholder="+00 000 000 000" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-[12px] text-neutral-700 mb-1">Website</label>
<input className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="website" placeholder="https://example.org" type="url"/>
</div>
<div className="sm:col-span-2">
<label className="block text-[12px] text-neutral-700 mb-1">Description</label>
<textarea className="w-full text-[14px] px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="description" placeholder="Short description of the association..." rows="4"></textarea>
</div>
</input></form>
</div>
<div className="flex items-center justify-between gap-2 border-t border-neutral-200 px-5 py-3">
<div className="text-[12px] text-neutral-500">Fields marked required must be filled.</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-[13px]" id="cancelForm">Cancel</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900/80 text-[13px]" id="saveForm">
<i className="w-4 h-4" data-lucide="save"></i>Save
          </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="confirmModal">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative mx-auto max-w-md mt-10 sm:mt-20 bg-white border border-neutral-200 rounded-xl shadow-xl">
<div className="px-5 py-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 grid place-items-center">
<i className="w-5 h-5 text-neutral-700" data-lucide="trash-2"></i>
</div>
<div>
<h4 className="text-[16px] font-semibold tracking-tight text-neutral-900">Delete association</h4>
<p className="text-[13px] text-neutral-600 mt-1">This action cannot be undone.</p>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-2 border-t border-neutral-200 px-5 py-3">
<button className="px-3 py-2 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-[13px]" id="cancelDelete">Cancel</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 border border-red-600 text-[13px]" id="confirmDelete">
<i className="w-4 h-4" data-lucide="trash-2"></i>Delete
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="adminModal">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative mx-auto max-w-3xl mt-10 sm:mt-16 bg-white border border-neutral-200 rounded-xl shadow-xl">
<div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="settings"></i>
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-900">Admin Panel</h3>
</div>
<button className="p-1.5 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50" id="closeAdmin">
<i className="w-4 h-4 text-neutral-600" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="border border-neutral-200 rounded-md p-4">
<p className="text-[12px] text-neutral-500">Total associations</p>
<p className="text-[22px] font-semibold tracking-tight mt-1" id="statTotal">0</p>
</div>
<div className="border border-neutral-200 rounded-md p-4">
<p className="text-[12px] text-neutral-500">Your contributions</p>
<p className="text-[22px] font-semibold tracking-tight mt-1" id="statMine">0</p>
</div>
<div className="border border-neutral-200 rounded-md p-4">
<p className="text-[12px] text-neutral-500">Project types</p>
<p className="text-[22px] font-semibold tracking-tight mt-1" id="statTypes">0</p>
</div>
</div>
<div className="border border-neutral-200 rounded-md overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="layers"></i>
<h4 className="text-[15px] font-medium text-neutral-900/90">Manage project types</h4>
</div>
<div className="flex items-center gap-2">
<input className="text-[13px] border border-neutral-200 rounded-md px-2 py-1.5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="adminTypeInput" placeholder="New type" type="text"/>
<button className="inline-flex items-center gap-2 px-3 py-2 text-[13px] rounded-md bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900/80" id="adminAddTypeBtn">
<i className="w-4 h-4" data-lucide="plus"></i>Add
              </button>
</div>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2" id="adminTypeList">

</div>
<p className="text-[12px] text-neutral-500 mt-3">These options are available in filters and forms.</p>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-2 border-t border-neutral-200 px-5 py-3">
<button className="px-3 py-2 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-[13px]" id="closeAdminFooter">Close</button>
</div>
</div>
</div>

<div className="pointer-events-none fixed top-4 right-4 z-50 hidden" id="toast">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 bg-white shadow-sm">
<i className="w-4 h-4 text-neutral-700" data-lucide="check-circle-2" id="toastIcon"></i>
<span className="text-[13px] text-neutral-800" id="toastMsg">Saved</span>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-white/60 backdrop-blur-sm" id="loading">
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-700" fill="none" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8v8z" fill="currentColor"></path>
</svg>
<span className="text-[13px]">Loading...</span>
</div>
</div>
</div>





    </>
  );
}
