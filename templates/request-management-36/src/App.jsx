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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const ADMIN_EMAIL = "kavonfryar@gmail.com";
      const ADMIN_KEY = "CHANGE_ME_IN_PRODUCTION";

      const LS_REQUESTS = "requesthub.requests.v1";
      const LS_VIEWS = "requesthub.views.v1";
      const LS_VIEWED = "requesthub.viewed.v1";
      const LS_ADMIN_SESSION = "requesthub.admin.session.v1";
      const LS_NOTIF = "requesthub.notifications.v1";

      const $ = (id) => document.getElementById(id);

      function safeParse(json, fallback) {
        try {
          const val = JSON.parse(json);
          return val ?? fallback;
        } catch {
          return fallback;
        }
      }

      function getRequests() {
        return safeParse(localStorage.getItem(LS_REQUESTS), []);
      }

      function setRequests(reqs) {
        localStorage.setItem(LS_REQUESTS, JSON.stringify(reqs));
      }

      function incViewsOncePerDevice() {
        const viewed = localStorage.getItem(LS_VIEWED);
        if (viewed === "1") return;

        const current = Number(localStorage.getItem(LS_VIEWS) || "0");
        localStorage.setItem(LS_VIEWS, String(current + 1));
        localStorage.setItem(LS_VIEWED, "1");
      }

      function getViews() {
        return Number(localStorage.getItem(LS_VIEWS) || "0");
      }

      function formatTime(ts) {
        const d = new Date(ts);
        return d.toLocaleString([], { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
      }

      function downloadJSON(filename, dataObj) {
        const blob = new Blob([JSON.stringify(dataObj, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function getNotifSettings() {
        return safeParse(localStorage.getItem(LS_NOTIF), {
          webhookUrl: "",
          notifyEmail: ADMIN_EMAIL,
          notifyPhone: ""
        });
      }

      function setNotifSettings(s) {
        localStorage.setItem(LS_NOTIF, JSON.stringify(s));
      }

      function showNotifyMsg(type, text) {
        const wrap = $("notifyMsg");
        const t = $("notifyMsgText");
        if (!wrap || !t) return;

        t.textContent = text;
        wrap.classList.remove("hidden");

        wrap.classList.toggle("border-red-500/25", type === "error");
        wrap.classList.toggle("bg-red-500/10", type === "error");
        wrap.classList.toggle("border-blue-500/25", type === "info");
        wrap.classList.toggle("bg-blue-500/10", type === "info");
        wrap.classList.toggle("border-slate-800", type === "muted");
        wrap.classList.toggle("bg-slate-950/40", type === "muted");

        clearTimeout(showNotifyMsg._t);
        showNotifyMsg._t = setTimeout(() => wrap.classList.add("hidden"), 5000);
      }

      async function sendSubmissionNotification(req) {
        const s = getNotifSettings();
        if (!s.webhookUrl) return { skipped: true };

        const payload = {
          type: "requesthub.submitted",
          createdAt: req.createdAt,
          notify: {
            email: s.notifyEmail || "",
            phone: s.notifyPhone || ""
          },
          request: req
        };

        const ctrl = new AbortController();
        const to = setTimeout(() => ctrl.abort(), 8000);

        try {
          const res = await fetch(s.webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: ctrl.signal
          });
          clearTimeout(to);

          if (!res.ok) return { ok: false, status: res.status };
          return { ok: true };
        } catch (e) {
          clearTimeout(to);
          return { ok: false, error: String(e && e.message ? e.message : e) };
        }
      }

      function setStockPref(val) {
        $("stockPref").value = val;
        $("stockInDot").classList.toggle("hidden", val !== "In stock");
        $("stockOutDot").classList.toggle("hidden", val !== "Out of stock");

        const inActive = val === "In stock";
        const outActive = val === "Out of stock";

        $("stockInBtn").classList.toggle("border-blue-500/30", inActive);
        $("stockInBtn").classList.toggle("bg-blue-500/10", inActive);
        $("stockOutBtn").classList.toggle("border-blue-500/30", outActive);
        $("stockOutBtn").classList.toggle("bg-blue-500/10", outActive);
      }

      function renderStats() {
        const reqs = getRequests();
        $("statRequests").textContent = String(reqs.length);
        $("statViews").textContent = String(getViews());
        $("adminRequestsCount").textContent = String(reqs.length);
        $("adminViewsCount").textContent = String(getViews());
      }

      function escapeHtml(str) {
        return String(str)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      function renderRecent() {
        const reqs = getRequests().slice().sort((a, b) => b.createdAt - a.createdAt).slice(0, 6);
        const wrap = $("recentList");

        if (!reqs.length) {
          wrap.innerHTML = '<div class="px-4 py-4 text-xs text-slate-500">No requests yet.</div>';
          return;
        }

        wrap.innerHTML = reqs
          .map(
            (r) => `
              <div class="grid grid-cols-12 items-center gap-2 px-4 py-3 text-xs">
                <div class="col-span-4">
                  <div class="font-medium text-slate-200">${escapeHtml(r.itemName)}</div>
                  <div class="mt-0.5 text-[0.6875rem] text-slate-500">${formatTime(r.createdAt)}</div>
                </div>
                <div class="col-span-3 hidden sm:block text-slate-300">${escapeHtml(r.name)}</div>
                <div class="col-span-2 hidden sm:block text-slate-300">${escapeHtml(String(r.quantity))}</div>
                <div class="col-span-3">
                  <span class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-2.5 py-1 text-[0.6875rem] font-medium text-slate-200">
                    <span class="h-1.5 w-1.5 rounded-full ${r.stockPref === "In stock" ? "bg-blue-400" : "bg-cyan-400"}"></span>
                    ${escapeHtml(r.stockPref)}
                  </span>
                </div>
              </div>
            `
          )
          .join("");
      }

      function renderAdminTable(filterText = "") {
        const tbody = $("adminTable");
        const reqs = getRequests().slice().sort((a, b) => b.createdAt - a.createdAt);

        const f = filterText.trim().toLowerCase();
        const filtered = f
          ? reqs.filter((r) => {
              const hay = `${r.name} ${r.email} ${r.phone} ${r.itemName} ${r.description || ""} ${r.stockPref}`.toLowerCase();
              return hay.includes(f);
            })
          : reqs;

        if (!filtered.length) {
          tbody.innerHTML = `<tr><td colspan="5" class="px-4 py-5 text-xs text-slate-500">No matching requests.</td></tr>`;
          return;
        }

        tbody.innerHTML = filtered
          .map(
            (r) => `
            <tr class="text-xs text-slate-200">
              <td class="px-4 py-3 align-top text-slate-400">${formatTime(r.createdAt)}</td>
              <td class="px-4 py-3 align-top">
                <div class="font-medium text-slate-100">${escapeHtml(r.name)}</div>
                <div class="mt-1 text-[0.6875rem] text-slate-400">${escapeHtml(r.email)} • ${escapeHtml(r.phone)}</div>
              </td>
              <td class="px-4 py-3 align-top">
                <div class="font-medium text-slate-100">${escapeHtml(r.itemName)}</div>
                ${
                  r.description
                    ? `<div class="mt-1 text-[0.6875rem] text-slate-400 line-clamp-3">${escapeHtml(r.description)}</div>`
                    : `<div class="mt-1 text-[0.6875rem] text-slate-500">No description</div>`
                }
              </td>
              <td class="px-4 py-3 align-top text-slate-200">${escapeHtml(String(r.quantity))}</td>
              <td class="px-4 py-3 align-top">
                <span class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-2.5 py-1 text-[0.6875rem] font-medium text-slate-200">
                  <span class="h-1.5 w-1.5 rounded-full ${r.stockPref === "In stock" ? "bg-blue-400" : "bg-cyan-400"}"></span>
                  ${escapeHtml(r.stockPref)}
                </span>
              </td>
            </tr>
          `
          )
          .join("");
      }

      function isAdminAuthed() {
        return localStorage.getItem("requesthub.admin.session.v1") === "1";
      }

      function setAdminAuthed(val) {
        localStorage.setItem("requesthub.admin.session.v1", val ? "1" : "0");
      }

      function hydrateNotifUI(scope = document) {
        const s = getNotifSettings();
        const w = scope.querySelector("#notifWebhook");
        const e = scope.querySelector("#notifEmail");
        const p = scope.querySelector("#notifPhone");
        if (w) w.value = s.webhookUrl || "";
        if (e) e.value = s.notifyEmail || "";
        if (p) p.value = s.notifyPhone || "";
      }

      function setNotifAdminMsg(scope, type, text) {
        const box = scope.querySelector("#notifAdminMsg");
        if (!box) return;

        box.textContent = text;
        box.classList.remove("hidden");

        box.classList.toggle("border-red-500/25", type === "error");
        box.classList.toggle("bg-red-500/10", type === "error");
        box.classList.toggle("text-red-100", type === "error");

        box.classList.toggle("border-blue-500/25", type === "ok");
        box.classList.toggle("bg-blue-500/10", type === "ok");
        box.classList.toggle("text-blue-100", type === "ok");

        box.classList.toggle("border-slate-800", type === "muted");
        box.classList.toggle("bg-slate-950/40", type === "muted");
        box.classList.toggle("text-slate-300", type === "muted");

        clearTimeout(setNotifAdminMsg._t);
        setNotifAdminMsg._t = setTimeout(() => box.classList.add("hidden"), 4500);
      }

      function bindNotifEvents(scope = document) {
        const save = scope.querySelector("#notifSaveBtn");
        const clear = scope.querySelector("#notifClearBtn");
        const test = scope.querySelector("#notifTestBtn");

        if (save && !save.dataset.bound) {
          save.dataset.bound = "1";
          save.addEventListener("click", () => {
            const w = scope.querySelector("#notifWebhook")?.value.trim() || "";
            const e = scope.querySelector("#notifEmail")?.value.trim() || "";
            const p = scope.querySelector("#notifPhone")?.value.trim() || "";

            setNotifSettings({ webhookUrl: w, notifyEmail: e, notifyPhone: p });
            setNotifAdminMsg(scope, "ok", "Zapier webhook settings saved.");
          });
        }

        if (clear && !clear.dataset.bound) {
          clear.dataset.bound = "1";
          clear.addEventListener("click", () => {
            setNotifSettings({ webhookUrl: "", notifyEmail: ADMIN_EMAIL, notifyPhone: "" });
            hydrateNotifUI(scope);
            setNotifAdminMsg(scope, "muted", "Cleared webhook settings.");
          });
        }

        if (test && !test.dataset.bound) {
          test.dataset.bound = "1";
          test.addEventListener("click", async () => {
            const fakeReq = {
              id: "test",
              createdAt: Date.now(),
              name: "Test User",
              email: "test@example.com",
              phone: "(555) 000-0000",
              itemName: "Test submission",
              description: "This is a test notification from Request Hub.",
              quantity: 1,
              stockPref: "In stock"
            };

            const r = await sendSubmissionNotification(fakeReq);
            if (r && r.skipped) {
              setNotifAdminMsg(scope, "error", "Add your Zapier Catch Hook URL first to test.");
              return;
            }
            if (r && r.ok) {
              setNotifAdminMsg(scope, "ok", "Test sent (Zapier accepted the webhook).");
              return;
            }
            setNotifAdminMsg(scope, "error", `Test failed. ${r.status ? "HTTP " + r.status : (r.error || "Unknown error")}`);
          });
        }
      }

      function renderAdminShellState() {
        if (isAdminAuthed()) {
          $("adminGate").classList.add("hidden");
          $("adminContent").classList.remove("hidden");
          $("adminSignedInAs").textContent = ADMIN_EMAIL;
        } else {
          $("adminGate").classList.remove("hidden");
          $("adminContent").classList.add("hidden");
        }
      }

      function bindAdminEvents(isMobileClone = false) {
        const scope = isMobileClone ? $("adminPageMobile") : document;
        const q = (sel) => scope.querySelector(sel);

        const loginForm = q("#adminLoginForm");
        const err = q("#adminErr");
        const search = q("#adminSearch");
        const exportBtn = q("#adminExportBtn");
        const clearBtn = q("#adminClearBtn");
        const logoutBtn = q("#adminLogoutBtn");

        if (loginForm && !loginForm.dataset.bound) {
          loginForm.dataset.bound = "1";
          loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = q("#adminEmail").value.trim();
            const key = q("#adminKey").value;

            const ok = email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && key === ADMIN_KEY;

            if (!ok) {
              if (err) {
                err.textContent = "Invalid admin credentials. This demo requires the configured ADMIN_EMAIL and ADMIN_KEY.";
                err.classList.remove("hidden");
              }
              return;
            }

            setAdminAuthed(true);
            if (err) err.classList.add("hidden");

            renderAdminShellState();
            renderStats();
            renderAdminTable(q("#adminSearch")?.value || "");
            hydrateNotifUI(scope);
          });
        }

        if (search && !search.dataset.bound) {
          search.dataset.bound = "1";
          search.addEventListener("input", () => renderAdminTable(search.value));
        }

        if (exportBtn && !exportBtn.dataset.bound) {
          exportBtn.dataset.bound = "1";
          exportBtn.addEventListener("click", () => {
            const payload = { views: getViews(), requests: getRequests(), notifications: getNotifSettings() };
            downloadJSON("request-hub-export.json", payload);
          });
        }

        if (clearBtn && !clearBtn.dataset.bound) {
          clearBtn.dataset.bound = "1";
          clearBtn.addEventListener("click", () => {
            const ok = confirm("Clear all stored requests on this device?");
            if (!ok) return;
            setRequests([]);
            renderStats();
            renderRecent();
            renderAdminTable(search ? search.value : "");
          });
        }

        if (logoutBtn && !logoutBtn.dataset.bound) {
          logoutBtn.dataset.bound = "1";
          logoutBtn.addEventListener("click", () => {
            setAdminAuthed(false);
            renderAdminShellState();
          });
        }

        hydrateNotifUI(scope);
        bindNotifEvents(scope);
      }

      function showHome() {
        $("homePage").classList.remove("hidden");
        $("adminPage").classList.add("hidden");
        $("adminPageMobile").classList.add("hidden");
      }

      function showAdmin() {
        const isLg = window.matchMedia("(min-width: 1024px)").matches;
        if (isLg) {
          $("homePage").classList.remove("hidden");
          $("adminPage").classList.remove("hidden");
          $("adminPageMobile").classList.add("hidden");
        } else {
          $("adminMobileInner").innerHTML = $("adminPage").innerHTML;
          $("adminPageMobile").classList.remove("hidden");
          $("homePage").classList.add("hidden");
          bindAdminEvents(true);
          renderAdminShellState();
          renderStats();
          renderAdminTable($("adminSearch")?.value || "");
        }

        renderAdminShellState();
        renderStats();
        renderAdminTable($("adminSearch")?.value || "");
      }

      incViewsOncePerDevice();

      $("stockInBtn").addEventListener("click", () => setStockPref("In stock"));
      $("stockOutBtn").addEventListener("click", () => setStockPref("Out of stock"));
      setStockPref("In stock");

      $("requestForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const pref = $("stockPref").value;
        if (!pref) {
          alert("Please choose a stock preference.");
          return;
        }

        const req = {
          id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-" + Math.random().toString(16).slice(2),
          createdAt: Date.now(),
          name: $("name").value.trim(),
          email: $("email").value.trim(),
          phone: $("phone").value.trim(),
          itemName: $("itemName").value.trim(),
          description: $("description").value.trim(),
          quantity: Number($("quantity").value),
          stockPref: pref
        };

        const reqs = getRequests();
        reqs.push(req);
        setRequests(reqs);

        $("submitMsg").classList.remove("hidden");
        setTimeout(() => $("submitMsg").classList.add("hidden"), 3500);

        renderStats();
        renderRecent();
        renderAdminTable($("adminSearch")?.value || "");

        const s = getNotifSettings();
        if (s.webhookUrl) {
          showNotifyMsg("muted", "Sending to Zapier…");
          const r = await sendSubmissionNotification(req);
          if (r && r.ok) showNotifyMsg("info", "Sent to Zapier.");
          else showNotifyMsg("error", `Zapier send failed. ${r.status ? "HTTP " + r.status : (r.error || "Unknown error")}`);
        }

        $("name").value = "";
        $("email").value = "";
        $("phone").value = "";
        $("itemName").value = "";
        $("description").value = "";
        $("quantity").value = "";
      });

      $("clearFormBtn").addEventListener("click", () => {
        $("name").value = "";
        $("email").value = "";
        $("phone").value = "";
        $("itemName").value = "";
        $("description").value = "";
        $("quantity").value = "";
        setStockPref("In stock");
      });

      $("exportBtn").addEventListener("click", () => {
        const payload = { views: getViews(), requests: getRequests() };
        downloadJSON("request-hub-export.json", payload);
      });

      $("navHomeBtn").addEventListener("click", showHome);
      $("navAdminBtn").addEventListener("click", showAdmin);

      $("closeAdminMobile").addEventListener("click", () => {
        $("adminPageMobile").classList.add("hidden");
        $("homePage").classList.remove("hidden");
      });

      bindAdminEvents(false);
      renderAdminShellState();
      renderStats();
      renderRecent();

      window.addEventListener("resize", () => {
        const isLg = window.matchMedia("(min-width: 1024px)").matches;
        if (isLg && !$("adminPageMobile").classList.contains("hidden")) {
          $("adminPageMobile").classList.add("hidden");
          $("homePage").classList.remove("hidden");
          $("adminPage").classList.remove("hidden");
          renderAdminShellState();
          renderStats();
          renderAdminTable($("adminSearch")?.value || "");
        }
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
<header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 ring-1 ring-blue-400/20">
<span className="font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>RH</span>
</div>
<div className="leading-tight">
<div className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Request Hub</div>
<div className="text-xs text-slate-400">Request items • Track status • Admin review</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="navHomeBtn">
<iconify-icon className="text-blue-300" icon="solar:home-2-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Home
            </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-blue-500/25 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-100 hover:bg-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="navAdminBtn">
<iconify-icon className="text-blue-300" icon="solar:shield-user-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Admin
            </button>
</div>
</div>
</header>
<main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
<section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-950 to-slate-950 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 right-[-4rem] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 left-[-4rem] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>
                Request items in seconds
              </h1>
<p className="mt-2 text-sm text-slate-300">
                Submit what you need, add details if helpful, choose a stock preference, and track your request. Admin can review all submissions in one place.
              </p>
<div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1.5">
<iconify-icon className="text-blue-300" icon="solar:bolt-linear" style={{fontSize: '1rem'}}></iconify-icon>
                  Fast requests
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1.5">
<iconify-icon className="text-blue-300" icon="solar:checklist-minimalistic-linear" style={{fontSize: '1rem'}}></iconify-icon>
                  Organized admin view
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1.5">
<iconify-icon className="text-blue-300" icon="solar:eye-linear" style={{fontSize: '1rem'}}></iconify-icon>
                  Basic view analytics
                </span>
</div>
</div>
<div className="grid gap-2 rounded-xl border border-slate-800 bg-slate-950/40 p-4 sm:min-w-64">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Total requests</div>
<iconify-icon className="text-blue-300" icon="solar:inbox-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-50" id="statRequests" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>0</div>
<div className="flex items-center justify-between pt-2">
<div className="text-xs text-slate-400">Site views</div>
<div className="text-xs font-medium text-slate-200" id="statViews">0</div>
</div>
</div>
</div>
</section>
<section className="mt-6 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-7" id="homePage">
<div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>New request</h2>
<p className="mt-1 text-xs text-slate-400">Fill in the details below. Fields marked with * are required.</p>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2">
<span className="text-xs text-slate-400">Theme</span>
<span className="text-xs font-medium text-blue-200">Blue / Black</span>
</div>
</div>
<form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" id="requestForm">
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Full name <span className="text-blue-300">*</span></label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:user-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="name" placeholder="Your name" required="" type="text"/>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Email <span className="text-blue-300">*</span></label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="email" placeholder="name@email.com" required="" type="email"/>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Phone number <span className="text-blue-300">*</span></label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:phone-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Item name <span className="text-blue-300">*</span></label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:box-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="itemName" placeholder="e.g., Printer paper" required="" type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-medium text-slate-200">Description <span className="text-slate-500">(optional)</span></label>
<div className="mt-2 flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:document-text-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<textarea className="w-full resize-none bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="description" placeholder="Add details like size, brand, color, or urgency..." rows="4"></textarea>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Quantity <span className="text-blue-300">*</span></label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:cart-large-2-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="quantity" min="1" placeholder="1" required="" type="number"/>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-slate-200">Stock preference <span className="text-blue-300">*</span></label>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="stockInBtn" type="button">
<span className="grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-950/50 group-hover:border-blue-500/40">
<span className="hidden h-2 w-2 rounded-full bg-blue-400" id="stockInDot"></span>
</span>
                      In stock
                    </button>
<button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="stockOutBtn" type="button">
<span className="grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-950/50 group-hover:border-blue-500/40">
<span className="hidden h-2 w-2 rounded-full bg-blue-400" id="stockOutDot"></span>
</span>
                      Out of stock
                    </button>
</div>
<input id="stockPref" required="" type="hidden"/>
<p className="mt-2 text-xs text-slate-500">Choose what you prefer us to do: fulfill only if available, or request even if currently unavailable.</p>
</div>
<div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-500">
                    Submissions are stored in this browser for demo purposes. Use a backend for production.
                  </div>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="clearFormBtn" type="button">
<iconify-icon className="text-slate-300" icon="solar:eraser-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                      Clear
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/15 px-4 py-2.5 text-xs font-medium text-blue-100 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="submit">
<iconify-icon className="text-blue-200" icon="solar:paper-plane-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                      Submit request
                    </button>
</div>
</div>
<div className="sm:col-span-2 hidden rounded-xl border border-blue-500/25 bg-blue-500/10 p-4" id="submitMsg">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-blue-500/15 ring-1 ring-blue-400/20">
<iconify-icon className="text-blue-200" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Request submitted</div>
<div className="mt-1 text-xs text-slate-300">Your request has been recorded. If you need changes, submit a new request with notes.</div>
</div>
</div>
</div>
<div className="sm:col-span-2 hidden rounded-xl border border-slate-800 bg-slate-950/40 p-4" id="notifyMsg">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-slate-900/40 ring-1 ring-slate-700/50">
<iconify-icon className="text-slate-200" icon="solar:bell-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-100">Notification</div>
<div className="mt-1 text-xs text-slate-400" id="notifyMsgText">—</div>
</div>
</div>
</div>
</form>
</div>
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Recent requests (this device)</h3>
<p className="mt-1 text-xs text-slate-400">A quick preview of the last few submissions stored locally.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="exportBtn">
<iconify-icon className="text-slate-300" icon="solar:download-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Export JSON
                </button>
</div>
<div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
<div className="grid grid-cols-12 bg-slate-900/40 px-4 py-3 text-xs font-medium text-slate-300">
<div className="col-span-4">Item</div>
<div className="col-span-3 hidden sm:block">Name</div>
<div className="col-span-2 hidden sm:block">Qty</div>
<div className="col-span-3">Stock pref</div>
</div>
<div className="divide-y divide-slate-800 bg-slate-950/30" id="recentList">
<div className="px-4 py-4 text-xs text-slate-500">No requests yet.</div>
</div>
</div>
</div>
</div>
<div className="hidden lg:col-span-5 lg:block" id="adminPage">
<div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Admin</h2>
<p className="mt-1 text-xs text-slate-400">Review requests and view basic site analytics.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2">
<div className="text-[0.6875rem] text-slate-500">Owner email</div>
<div className="text-xs font-medium text-slate-200">kavonfryar@gmail.com</div>
</div>
</div>
<div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/40 p-4" id="adminGate">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-blue-500/15 ring-1 ring-blue-400/20">
<iconify-icon className="text-blue-200" icon="solar:key-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="w-full">
<div className="text-sm font-medium text-slate-100">Admin access</div>
<div className="mt-1 text-xs text-slate-400">
                      This demo uses a local access key. For real security, connect to a backend and store credentials server-side.
                    </div>
<form className="mt-4 grid gap-3" id="adminLoginForm">
<div>
<label className="text-xs font-medium text-slate-200">Admin email</label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="adminEmail" placeholder="you@domain.com" type="email"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-200">Access key</label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:lock-keyhole-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="adminKey" placeholder="Provided by owner" type="password"/>
</div>
<p className="mt-2 text-xs text-slate-500">
                          Setup: set <span className="font-medium text-slate-300">ADMIN_EMAIL</span> and <span className="font-medium text-slate-300">ADMIN_KEY</span> in the script before deploying.
                        </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/15 px-4 py-2.5 text-xs font-medium text-blue-100 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="submit">
<iconify-icon className="text-blue-200" icon="solar:login-2-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                          Sign in
                        </button>
</div>
<div className="hidden rounded-xl border border-red-500/25 bg-red-500/10 p-3 text-xs text-red-100" id="adminErr"></div>
</form>
</div>
</div>
</div>
<div className="mt-5 hidden" id="adminContent">
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Requests</div>
<iconify-icon className="text-blue-300" icon="solar:inbox-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50" id="adminRequestsCount" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>0</div>
<div className="mt-1 text-xs text-slate-500">Stored on this device</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Views</div>
<iconify-icon className="text-blue-300" icon="solar:eye-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50" id="adminViewsCount" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>0</div>
<div className="mt-1 text-xs text-slate-500">Basic counter</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/30">
<div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-medium text-slate-100">All requests</div>
<div className="mt-1 text-xs text-slate-400">Search, review, and export. (Demo: local storage)</div>
</div>
<div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none sm:w-56" id="adminSearch" placeholder="Search requests..." type="text"/>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="adminExportBtn">
<iconify-icon className="text-slate-300" icon="solar:download-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                          Export
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/25 bg-red-500/10 px-3 py-2.5 text-xs font-medium text-red-100 hover:bg-red-500/15 focus:outline-none focus:ring-2 focus:ring-red-500/30" id="adminClearBtn">
<iconify-icon className="text-red-200" icon="solar:trash-bin-minimalistic-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                          Clear
                        </button>
</div>
</div>
</div>
<div className="max-h-[32rem] overflow-auto" id="adminTableWrap">
<table className="w-full border-collapse">
<thead className="sticky top-0 bg-slate-900/60 backdrop-blur">
<tr className="text-left text-xs font-medium text-slate-300">
<th className="px-4 py-3">Time</th>
<th className="px-4 py-3">Person</th>
<th className="px-4 py-3">Item</th>
<th className="px-4 py-3">Qty</th>
<th className="px-4 py-3">Stock</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800 bg-slate-950/20" id="adminTable">
<tr>
<td className="px-4 py-5 text-xs text-slate-500" colspan="5">No requests yet.</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" icon="solar:bell-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Notifications</div>
</div>
<div className="mt-1 text-xs text-slate-400">
                        Add a Zapier webhook to send you Email + SMS on every submission. (Requires a Zapier Zap with a Catch Hook trigger.)
                      </div>
</div>
<button className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="notifTestBtn">
<iconify-icon className="text-slate-300" icon="solar:play-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                      Test
                    </button>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="sm:col-span-2">
<label className="text-xs font-medium text-slate-200">Zapier Catch Hook URL</label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:link-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="notifWebhook" placeholder="https://hooks.zapier.com/hooks/catch/..." type="url"/>
</div>
<p className="mt-2 text-xs text-slate-500">
                        Tip: In Zapier, use <span className="font-medium text-slate-300">Webhooks by Zapier → Catch Hook</span>, then add Email + SMS actions.
                      </p>
</div>
<div>
<label className="text-xs font-medium text-slate-200">Notify email</label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="notifEmail" placeholder="kavonfryar@gmail.com" type="email"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-200">Notify phone (SMS)</label>
<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500/40">
<iconify-icon className="text-slate-400" icon="solar:phone-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="notifPhone" placeholder="+1..." type="tel"/>
</div>
</div>
<div className="sm:col-span-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-500">Saved locally on this device.</div>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/15 px-3 py-2.5 text-xs font-medium text-blue-100 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="notifSaveBtn">
<iconify-icon className="text-blue-200" icon="solar:diskette-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                          Save
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="notifClearBtn">
<iconify-icon className="text-slate-300" icon="solar:eraser-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                          Clear
                        </button>
</div>
</div>
<div className="sm:col-span-2 hidden rounded-xl border border-slate-800 bg-slate-950/40 p-3 text-xs text-slate-300" id="notifAdminMsg"></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4">
<div className="text-xs text-slate-400">
                    Signed in as <span className="font-medium text-slate-200" id="adminSignedInAs">admin</span>
</div>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="adminLogoutBtn">
<iconify-icon className="text-slate-300" icon="solar:logout-2-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                    Sign out
                  </button>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/15 ring-1 ring-blue-400/20">
<iconify-icon className="text-blue-200" icon="solar:info-circle-linear" style={{fontSize: '1.375rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Admin security note</div>
<div className="mt-1 text-xs text-slate-400">
                    Never hardcode real passwords into a public site. Use a server-side login (Firebase/Auth0/custom) and store data in a database.
                  </div>
</div>
</div>
</div>
</div>
<div className="hidden lg:hidden" id="adminPageMobile">
<div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Admin</h2>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="closeAdminMobile">
<iconify-icon className="text-slate-300" icon="solar:close-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Close
                </button>
</div>
<div className="mt-4" id="adminMobileInner"></div>
</div>
</div>
</section>
<footer className="mt-10 border-t border-slate-800/70 py-8">
<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
<div className="flex items-center gap-2">
<span className="font-medium text-slate-300" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Request Hub</span>
<span>•</span>
<span>Blue/Black theme</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<a className="text-slate-400 hover:text-slate-200" href="mailto:kavonfryar@gmail.com">kavonfryar@gmail.com</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
