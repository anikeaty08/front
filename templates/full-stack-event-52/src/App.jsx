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



    const state = {
      checklist: new Set(),
      selections: { db: "mongodb", pay: "stripe", storage: "s3", verify: "email" }
    };

    const checklistButtons = Array.from(document.querySelectorAll(".checkItem"));
    const progressPill = document.getElementById("progressPill");

    function updateProgress() {
      const total = checklistButtons.length;
      const done = state.checklist.size;
      progressPill.textContent = `${done} / ${total}`;
    }

    function setCheckUI(btn, checked) {
      const checkIcon = btn.querySelector(".checkIcon");
      const emptyIcon = btn.querySelector(".emptyIcon");
      const dot = btn.querySelector(".checkDot");
      if (checked) {
        checkIcon.classList.remove("hidden");
        emptyIcon.classList.add("hidden");
        dot.classList.add("bg-emerald-500/15", "ring-emerald-400/20");
        dot.classList.remove("bg-white/5", "ring-white/10");
      } else {
        checkIcon.classList.add("hidden");
        emptyIcon.classList.remove("hidden");
        dot.classList.remove("bg-emerald-500/15", "ring-emerald-400/20");
        dot.classList.add("bg-white/5", "ring-white/10");
      }
    }

    checklistButtons.forEach((btn) => {
      const id = btn.getAttribute("data-id");
      btn.addEventListener("click", () => {
        if (state.checklist.has(id)) state.checklist.delete(id);
        else state.checklist.add(id);
        setCheckUI(btn, state.checklist.has(id));
        updateProgress();
      });
      setCheckUI(btn, false);
    });
    updateProgress();

    function copyText(text) {
      navigator.clipboard.writeText(text);
    }

    const apiText = `AUTH (USER)
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
GET  /api/v1/auth/me
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
POST /api/v1/auth/verify-email

AUTH (ADMIN)
POST /api/v1/admin/auth/register
POST /api/v1/admin/auth/login
POST /api/v1/admin/auth/refresh
POST /api/v1/admin/auth/logout
GET  /api/v1/admin/auth/sessions
DELETE /api/v1/admin/auth/sessions/:id

EVENTS
GET /api/v1/events
GET /api/v1/events/:id
GET /api/v1/categories
GET /api/v1/events/:id/availability

BOOKINGS (USER)
POST /api/v1/bookings
GET  /api/v1/bookings
GET  /api/v1/bookings/:id
PATCH /api/v1/bookings/:id
POST /api/v1/bookings/:id/cancel
GET  /api/v1/bookings/:id/confirmation.pdf

PAYMENTS
POST /api/v1/payments/checkout-session
GET  /api/v1/payments/status
POST /api/v1/payments/webhook
POST /api/v1/payments/refund (admin)

ADMIN
GET   /api/v1/admin/dashboard
CRUD  /api/v1/admin/events
GET   /api/v1/admin/bookings
PATCH /api/v1/admin/bookings/:id/status
GET   /api/v1/admin/users
PATCH /api/v1/admin/users/:id
GET   /api/v1/admin/audit-logs
POST  /api/v1/admin/announcements`;

    const renderText = `RENDER DEPLOY
- Single Node service (SSR + API)
- Build: npm ci
- Start: node src/server.js
- Add /health endpoint
- Set env vars: DB, JWT secrets, cookie/csrf secrets, payment keys, webhook secret, email, storage
- Configure payment webhook URL: /api/v1/payments/webhook
- Use raw body parser on webhook route
- Prefer S3/Cloudinary for uploads`;

    document.getElementById("copyApiBtn").addEventListener("click", () => copyText(apiText));
    document.getElementById("copyFoldersBtn").addEventListener("click", () => copyText(document.getElementById("foldersText").textContent));
    document.getElementById("copyRenderBtn").addEventListener("click", () => copyText(renderText));
    document.getElementById("copyPlanBtn").addEventListener("click", () => {
      const plan = [
        "Event Management System Blueprint",
        "",
        "Includes:",
        "- User registration/login (JWT + refresh)",
        "- Landing events gallery + categories",
        "- Booking workflow with validations + uploads",
        "- Payment integration with webhook verification",
        "- PDF booking confirmation (download + email)",
        "- Admin dashboard to manage users/events/bookings",
        "- Render deployment checklist",
        "",
        apiText,
        "",
        document.getElementById("foldersText").textContent,
        "",
        renderText
      ].join("\n");
      copyText(plan);
    });

    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const selText = document.getElementById("selText");

    function updateSelectionsUI() {
      selText.textContent = `db=${state.selections.db}, pay=${state.selections.pay}, storage=${state.selections.storage}, verify=${state.selections.verify}`;
    }

    function highlightOption(opt, val) {
      document.querySelectorAll(`.optBtn[data-opt="${opt}"]`).forEach((b) => {
        const active = b.getAttribute("data-val") === val;
        b.classList.toggle("bg-white/10", active);
        b.classList.toggle("ring-white/20", active);
        b.classList.toggle("text-white", active);
      });
    }

    document.querySelectorAll(".optBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const opt = btn.getAttribute("data-opt");
        const val = btn.getAttribute("data-val");
        state.selections[opt] = val;
        updateSelectionsUI();
        highlightOption(opt, val);
      });
    });

    ["db","pay","storage","verify"].forEach((k) => highlightOption(k, state.selections[k]));
    updateSelectionsUI();

    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal.firstElementChild) modal.classList.add("hidden");
    });

    document.getElementById("copySelectionsBtn").addEventListener("click", () => {
      copyText(`Selections: ${selText.textContent}`);
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
      
<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-amber-400/10 blur-3xl"></div>
<div className="absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-green-400/10 via-yellow-500/10 to-amber-500/20 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),rgba(255,255,255,0)_45%)]"></div>
</div>
<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>EM</div>
</div>
<div>
<div className="text-sm font-medium text-orange-200">Event Management System</div>
<div className="text-xs text-orange-400">Node.js + EJS + JWT + Payments + PDF</div>
</div>
</div>
<nav className="hidden items-center gap-2 md:flex">
<a className="rounded-lg px-3 py-2 text-sm text-orange-300 hover:bg-white/5 hover:text-white" href="#features">Features</a>
<a className="rounded-lg px-3 py-2 text-sm text-orange-300 hover:bg-white/5 hover:text-white" href="#apis">API Map</a>
<a className="rounded-lg px-3 py-2 text-sm text-orange-300 hover:bg-white/5 hover:text-white" href="#folders">Folder Structure</a>
<a className="rounded-lg px-3 py-2 text-sm text-orange-300 hover:bg-white/5 hover:text-white" href="#render">Render Deploy</a>
</nav>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-orange-100 ring-1 ring-white/10 hover:bg-white/10" id="copyPlanBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
            Copy blueprint
          </button>
</div>
</div>
</div>
</header>
<main className="relative">
<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-7">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="">
<h1 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>
                  Complete Event Management system blueprint
                </h1>
<p className="mt-2 max-w-2xl text-sm text-orange-300">
                  Clean architecture, EJS UI, JWT auth, payments, uploads, validations, admin panel, PDF booking confirmations, and Render deployment.
                </p>
</div>
<div className="hidden sm:flex">
<div className="rounded-xl bg-gradient-to-tr from-amber-500/15 via-yellow-500/10 to-amber-400/10 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-orange-200">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                    Security-first
                  </div>
<div className="mt-2 flex items-center gap-2 text-xs text-orange-200">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                    PDF confirmations
                  </div>
<div className="mt-2 flex items-center gap-2 text-xs text-orange-200">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                    Payments
                  </div>
</div>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-orange-100">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
                    User flows
                  </div>
<span className="rounded-full bg-white/5 px-2 py-1 text-xs text-orange-300 ring-1 ring-white/10">EJS</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>Register/login with JWT + refresh tokens</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>Landing gallery for organized events</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>Event category listing (wedding, birthday, etc.)</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>Booking form with uploads + validation</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>Payment + receipt + PDF confirmation</li>
</ul>
</div>
<div className="rounded-xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-orange-100">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
                    Admin flows
                  </div>
<span className="rounded-full bg-white/5 px-2 py-1 text-xs text-orange-300 ring-1 ring-white/10">Dashboard</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>Admin auth + session hardening</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>Manage users, events, bookings, payouts</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>Booking status pipeline (pending → paid → confirmed)</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>Analytics widgets, export CSV, audit logs</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-400"></span>Refund/cancel flows with notifications</li>
</ul>
</div>
</div>
<div className="mt-6 rounded-xl bg-gradient-to-tr from-white/5 to-white/0 p-4 ring-1 ring-white/10">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs text-orange-300">Recommended stack:</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">Express</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">MongoDB (Mongoose)</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">EJS Views</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">JWT + Refresh</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">Stripe/Razorpay</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">PDFKit/Puppeteer</span>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10">Multer Uploads</span>
</div>
</div>
</div>
<section className="mt-6 grid gap-4 lg:grid-cols-2" id="features">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<h2 className="text-lg font-semibold tracking-tight text-white">Security &amp; validation baseline</h2>
<div className="mt-3 space-y-3 text-sm text-orange-300">
<div className="flex gap-3">
<iconify-icon icon="solar:lock-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">Auth &amp; session handling</div>
<div className="mt-1 text-xs text-orange-300">Access token (short TTL), refresh token (rotating), HttpOnly cookie, CSRF for forms, device/session listing for admin.</div>
</div>
</div>
<div className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">Input validation</div>
<div className="mt-1 text-xs text-orange-300">Email, phone (E.164), strong passwords, file type/size limits, rate limiting, and sanitization.</div>
</div>
</div>
<div className="flex gap-3">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">Hardening</div>
<div className="mt-1 text-xs text-orange-300">Helmet, CORS allowlist, secure headers, logging, audit logs, and safe error responses.</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<h2 className="text-lg font-semibold tracking-tight text-white">User experience requirements</h2>
<div className="mt-3 space-y-3 text-sm text-orange-300">
<div className="flex gap-3">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">Landing gallery</div>
<div className="mt-1 text-xs text-orange-300">Paginated event cards, category filters, featured sections, and SEO-friendly pages.</div>
</div>
</div>
<div className="flex gap-3">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">Booking workflow</div>
<div className="mt-1 text-xs text-orange-300">Step flow: details → review → pay → confirmation → PDF/email. Store drafts and handle payment failures.</div>
</div>
</div>
<div className="flex gap-3">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="font-medium text-orange-100">PDF confirmation</div>
<div className="mt-1 text-xs text-orange-300">Generate after payment webhook. Provide download in profile + email attachment/link.</div>
</div>
</div>
</div>
</div>
</section>
</div>
<aside className="lg:col-span-5">
<div className="sticky top-6 space-y-4">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold tracking-tight text-white">Implementation checklist</h2>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-orange-200 ring-1 ring-white/10" id="progressPill">0 / 9</span>
</div>
<p className="mt-2 text-xs text-orange-300">Click items to track progress locally in this page.</p>
<div className="mt-4 space-y-2">
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="auth">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Auth (JWT + refresh)</div>
<div className="text-xs text-orange-400">User + Admin, cookies, rotation</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="events">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Events gallery + categories</div>
<div className="text-xs text-orange-400">Filters, pagination</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="booking">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Booking workflow</div>
<div className="text-xs text-orange-400">Drafts, status lifecycle</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="payments">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Payment + webhooks</div>
<div className="text-xs text-orange-400">Success/fail, idempotency</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="pdf">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">PDF confirmation</div>
<div className="text-xs text-orange-400">Download + email link</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="uploads">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">File uploads</div>
<div className="text-xs text-orange-400">Profile + booking documents</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="admin">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Admin dashboard</div>
<div className="text-xs text-orange-400">Users, events, bookings</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="notifications">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Email notifications</div>
<div className="text-xs text-orange-400">OTP, booking, receipts</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
<button className="checkItem group flex w-full items-center justify-between rounded-xl bg-black/20 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/5" data-id="deploy">
<div className="flex items-center gap-3">
<span className="checkDot flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="checkIcon hidden" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="emptyIcon" icon="solar:circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-orange-100">Deploy on Render</div>
<div className="text-xs text-orange-400">Env vars + webhook URL</div>
</div>
</div>
<span className="text-xs text-orange-400 group-hover:text-orange-200">Toggle</span>
</button>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<h3 className="text-sm font-semibold text-white">Core pages (EJS)</h3>
<div className="mt-3 grid gap-2 sm:grid-cols-2">
<div className="rounded-xl bg-black/20 p-3 ring-1 ring-white/10">
<div className="text-xs font-medium text-orange-100">User</div>
<div className="mt-1 text-xs text-orange-400">/ , /events, /events/:slug, /book/:id, /pay, /profile</div>
</div>
<div className="rounded-xl bg-black/20 p-3 ring-1 ring-white/10">
<div className="text-xs font-medium text-orange-100">Admin</div>
<div className="mt-1 text-xs text-orange-400">/admin, /admin/events, /admin/bookings, /admin/users, /admin/settings</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/20 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-orange-100">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                  UX notes
                </div>
<p className="mt-2 text-xs text-orange-300">
                  Keep booking as a multi-step server-rendered flow with persistent draft data; finalize only after payment webhook.
                </p>
</div>
</div>
</div>
</aside>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="apis">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>API map (required)</h2>
<p className="mt-2 text-sm text-orange-300">Organized by domain with admin/user separation, webhooks, and uploads.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-orange-100 ring-1 ring-white/10 hover:bg-white/10" id="copyApiBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
            Copy API list
          </button>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Auth (User)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">POST</span> /api/v1/auth/register (name, email, phone, password, avatar)</li>
<li><span className="text-orange-100">POST</span> /api/v1/auth/login (email, password)</li>
<li><span className="text-orange-100">POST</span> /api/v1/auth/refresh (refreshToken cookie)</li>
<li><span className="text-orange-100">POST</span> /api/v1/auth/logout</li>
<li><span className="text-orange-100">GET</span> /api/v1/auth/me</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Auth (Admin)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">POST</span> /api/v1/admin/auth/register (super-admin only)</li>
<li><span className="text-orange-100">POST</span> /api/v1/admin/auth/login</li>
<li><span className="text-orange-100">POST</span> /api/v1/admin/auth/refresh</li>
<li><span className="text-orange-100">POST</span> /api/v1/admin/auth/logout</li>
<li><span className="text-orange-100">GET</span> /api/v1/admin/auth/sessions</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Events (Public/User)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">GET</span> /api/v1/events (filters: category, date, price, q, page)</li>
<li><span className="text-orange-100">GET</span> /api/v1/events/:id</li>
<li><span className="text-orange-100">GET</span> /api/v1/categories</li>
<li><span className="text-orange-100">GET</span> /api/v1/events/:id/availability</li>
<li><span className="text-orange-100">POST</span> /api/v1/events/:id/reviews (auth)</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Bookings (User)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">POST</span> /api/v1/bookings (eventId, date, guests, notes, attachments)</li>
<li><span className="text-orange-100">GET</span> /api/v1/bookings (mine)</li>
<li><span className="text-orange-100">GET</span> /api/v1/bookings/:id</li>
<li><span className="text-orange-100">PATCH</span> /api/v1/bookings/:id (update draft)</li>
<li><span className="text-orange-100">POST</span> /api/v1/bookings/:id/cancel</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Payments (User + Webhooks)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">POST</span> /api/v1/payments/checkout-session (bookingId)</li>
<li><span className="text-orange-100">GET</span> /api/v1/payments/status?bookingId=</li>
<li><span className="text-orange-100">POST</span> /api/v1/payments/webhook (provider signature)</li>
<li><span className="text-orange-100">POST</span> /api/v1/payments/refund (admin)</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Admin (Manage)
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li><span className="text-orange-100">GET</span> /api/v1/admin/dashboard (KPIs)</li>
<li><span className="text-orange-100">CRUD</span> /api/v1/admin/events (with cover gallery upload)</li>
<li><span className="text-orange-100">GET</span> /api/v1/admin/bookings (filters, export)</li>
<li><span className="text-orange-100">PATCH</span> /api/v1/admin/bookings/:id/status</li>
<li><span className="text-orange-100">GET</span> /api/v1/admin/users</li>
</ul>
</div>
</div>
<div className="mt-6 rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" style={{fontSize: '1.3rem'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-white">Important payment rule</div>
<p className="mt-1 text-xs text-orange-300">
                Mark booking as paid only from webhook (not from redirect return) to prevent spoofed confirmations. Use idempotency keys to avoid duplicate processing.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="folders">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Folder structure (clean architecture)</h2>
<p className="mt-2 text-sm text-orange-300">One app serves both server-rendered pages and JSON APIs with shared services.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-orange-100 ring-1 ring-white/10 hover:bg-white/10" id="copyFoldersBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
            Copy structure
          </button>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="text-sm font-semibold text-white">/src</div>
<pre className="mt-3 overflow-auto rounded-xl bg-orange-950/60 p-4 text-xs text-orange-200 ring-1 ring-white/10"><code id="foldersText">src/
  app.js
  server.js
  config/
    env.js
    db.js
    cors.js
    logger.js
  modules/
    auth/
      auth.controller.js
      auth.routes.js
      auth.service.js
      auth.validators.js
    users/
      user.model.js
      user.controller.js
      user.routes.js
      user.service.js
      user.validators.js
    events/
      event.model.js
      event.controller.js
      event.routes.js
      event.service.js
      event.validators.js
    bookings/
      booking.model.js
      booking.controller.js
      booking.routes.js
      booking.service.js
      booking.validators.js
    payments/
      payment.controller.js
      payment.routes.js
      payment.service.js
      payment.webhook.js
    admin/
      admin.controller.js
      admin.routes.js
      admin.service.js
    notifications/
      mailer.js
      templates/
    pdf/
      pdf.service.js
      templates/
    uploads/
      upload.middleware.js
      storage.js
    audit/
      audit.model.js
      audit.service.js
  middlewares/
    auth.middleware.js
    role.middleware.js
    error.middleware.js
    rateLimit.middleware.js
    validate.middleware.js
    csrf.middleware.js
  views/
    layouts/
      main.ejs
      admin.ejs
    pages/
      landing.ejs
      events.ejs
      event-details.ejs
      booking.ejs
      pay.ejs
      profile.ejs
      admin/
        dashboard.ejs
        events.ejs
        bookings.ejs
        users.ejs
        settings.ejs
    partials/
      navbar.ejs
      footer.ejs
      flash.ejs
  public/
    assets/
      uploads/ (or use cloud storage)
  utils/
    apiResponse.js
    asyncHandler.js
    crypto.js
    pagination.js
    sanitize.js</code></pre>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="text-sm font-semibold text-white">Key implementation notes</div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>Keep business logic in services; controllers stay thin.</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>Validators per module (Joi/Zod) with a shared validate middleware.</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>Multer upload middleware with file type checks + size limit + antivirus optional.</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>Payment webhooks use raw body parser route only.</li>
<li className="flex gap-2"><span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>Generate PDF in background (queue optional) and store URL/path in booking.</li>
</ul>
<div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-semibold text-white">
<iconify-icon icon="solar:paperclip-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                Uploads
              </div>
<p className="mt-2 text-xs text-orange-300">
                For Render, prefer S3-compatible storage (or Cloudinary) instead of local disk to avoid ephemeral filesystem issues.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" id="render">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>Render deployment checklist</h2>
<p className="mt-2 text-sm text-orange-300">Single Node service hosting SSR pages + APIs, plus DB and storage.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-orange-100 ring-1 ring-white/10 hover:bg-white/10" id="copyRenderBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
            Copy checklist
          </button>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:server-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Service setup
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li>Build: <span className="text-orange-100">npm ci</span></li>
<li>Start: <span className="text-orange-100">node src/server.js</span></li>
<li>Health: <span className="text-orange-100">GET /health</span></li>
<li>Node version pin via <span className="text-orange-100">engines</span></li>
<li>Enable auto-deploy from Git</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:key-minimalistic-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Environment vars
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li>DATABASE_URL / MONGODB_URI</li>
<li>JWT_ACCESS_SECRET, JWT_REFRESH_SECRET</li>
<li>JWT_ACCESS_TTL, JWT_REFRESH_TTL</li>
<li>COOKIE_SECRET, CSRF_SECRET</li>
<li>PAYMENT keys + WEBHOOK_SECRET</li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
              Payment webhooks
            </div>
<ul className="mt-3 space-y-2 text-xs text-orange-300">
<li>Set webhook URL: <span className="text-orange-100">/api/v1/payments/webhook</span></li>
<li>Use raw body parser on webhook route</li>
<li>Idempotency on event IDs</li>
<li>Verify signature before processing</li>
</ul>
</div>
</div>
<div className="mt-6 rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" style={{fontSize: '1.3rem'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-white">Production must-haves</div>
<p className="mt-1 text-xs text-orange-300">
                Rate limiting on auth routes, strict CORS, secure cookies (sameSite + httpOnly), and disable stack traces in responses.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-gradient-to-tr from-white/5 via-white/5 to-white/0 p-6 ring-1 ring-white/10 sm:p-8">
<div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl" style={{fontFamily: 'Space Grotesk, Inter, system-ui'}}>
              Next: I can generate the full codebase
            </h2>
<p className="mt-2 text-sm text-orange-300">
              Tell me your choices and I will output a production-ready repo (EJS UI + APIs + admin panel + payments + PDF).
            </p>
</div>
<div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-3">
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="text-xs font-semibold text-orange-100">Database</div>
<div className="mt-1 text-xs text-orange-400">MongoDB or PostgreSQL</div>
</div>
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="text-xs font-semibold text-orange-100">Payments</div>
<div className="mt-1 text-xs text-orange-400">Stripe or Razorpay</div>
</div>
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="text-xs font-semibold text-orange-100">Storage</div>
<div className="mt-1 text-xs text-orange-400">S3 or Cloudinary</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500/20 px-4 py-3 text-sm font-semibold text-white ring-1 ring-amber-400/20 hover:bg-amber-500/25 sm:w-auto" id="openModalBtn">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
            Pick options &amp; generate repo
          </button>
<div className="text-xs text-orange-400">
            You can also paste your preferred DB/payment/storage and whether you want OTP login or email verification.
          </div>
</div>
</div>
</section>
</main>
<div className="fixed inset-0 z-50 hidden" id="modal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative mx-auto flex min-h-screen max-w-2xl items-center px-4 py-10">
<div className="w-full rounded-2xl bg-orange-950 ring-1 ring-white/10">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
<div>
<div className="text-sm font-semibold text-white">Project options</div>
<div className="text-xs text-orange-400">Used to generate the complete repo and EJS UI</div>
</div>
<button className="rounded-lg p-2 text-orange-300 hover:bg-white/5 hover:text-white" id="closeModalBtn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<div className="px-5 py-5">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<label className="text-xs font-medium text-orange-200">Database</label>
<div className="mt-3 grid gap-2">
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5 bg-white/10 ring-white/20 text-white" data-opt="db" data-val="mongodb">
                  MongoDB (Mongoose)
                </button>
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5" data-opt="db" data-val="postgres">
                  PostgreSQL (Prisma)
                </button>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<label className="text-xs font-medium text-orange-200">Payments</label>
<div className="mt-3 grid gap-2">
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5 bg-white/10 ring-white/20 text-white" data-opt="pay" data-val="stripe">
                  Stripe Checkout + Webhooks
                </button>
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5" data-opt="pay" data-val="razorpay">
                  Razorpay Orders + Webhooks
                </button>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<label className="text-xs font-medium text-orange-200">Storage</label>
<div className="mt-3 grid gap-2">
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5 bg-white/10 ring-white/20 text-white" data-opt="storage" data-val="s3">
                  S3 compatible (recommended)
                </button>
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5" data-opt="storage" data-val="cloudinary">
                  Cloudinary
                </button>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<label className="text-xs font-medium text-orange-200">Verification</label>
<div className="mt-3 grid gap-2">
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5 bg-white/10 ring-white/20 text-white" data-opt="verify" data-val="email">
                  Email verification (token/OTP)
                </button>
<button className="optBtn w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm text-orange-200 ring-1 ring-white/10 hover:bg-white/5" data-opt="verify" data-val="none">
                  No verification (dev mode)
                </button>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-white">Output format</div>
<p className="mt-1 text-xs text-orange-300">
                  I can generate: routes, controllers, services, models, validators, EJS pages, admin panel, payment integration, PDF generator, and Render config steps.
                </p>
</div>
</div>
</div>
<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-orange-400">
              Selected:
              <span className="font-medium text-orange-200" id="selText">db=mongodb, pay=stripe, storage=s3, verify=email</span>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10" id="copySelectionsBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
              Copy selections
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
