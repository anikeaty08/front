import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const el = (id) => document.getElementById(id);

    // Year
    el("year").textContent = new Date().getFullYear();

    // Mobile menu
    const mobileMenu = el("mobileMenu");
    el("openMenu").addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Scroll top
    el("scrollTop").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ROI calculator
    const roiInputs = ["teamSize","hoursSaved", "hourlyCost", "weeksYear"];
    const fmtUSD = (n) =>
      new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

    function calcROI() {
      const team = Math.max(0, Number(el("teamSize").value || 0));
      const hrs = Math.max(0, Number(el("hoursSaved").value || 0));
      const cost = Math.max(0, Number(el("hourlyCost").value || 0));
      const weeks = Math.max(0, Number(el("weeksYear").value || 0));
      const annual = team * hrs * cost * weeks;

      el("roiValue").textContent = annual ? fmtUSD(annual) : "$—";
      el("roiLabel").textContent = annual ? `${team} people • ${hrs} hrs/wk • ${weeks} wks/yr` : "—";
      return annual;
    }

    roiInputs.forEach((id) => el(id).addEventListener("input", calcROI));
    calcROI();

    // Copy ROI
    el("copyROI").addEventListener("click", async () => {
      const annual = calcROI();
      const text = annual
        ? `Estimated annual savings: ${fmtUSD(annual)} (team size ${el("teamSize").value}, ${el("hoursSaved").value} hrs/wk, $${el("hourlyCost").value}/hr, ${el("weeksYear").value} wks/yr)`
        : "Estimated annual savings: —";

      try {
        await navigator.clipboard.writeText(text);
        const btn = el("copyROI");
        const prev = btn.innerHTML;
        btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg" style="--iconify-stroke-width: 1.5;"></iconify-icon> Copied`;
        setTimeout(() => (btn.innerHTML = prev), 1400);
      } catch (e) {
        el("roiLabel").textContent = "Copy not supported in this browser.";
        setTimeout(() => calcROI(), 1400);
      }
    });

    // Workflows data + renderer
    const workflows = {
      sales: {
        title: "Sales: lead → meeting",
        desc: "Enrich, score, route, schedule—without manual copy/paste.",
        steps: [
          { icon: "solar:inbox-linear", label: "Trigger", text: "Lead submits a form or emails your sales inbox." },
          { icon: "solar:magnifer-linear", label: "Enrich", text: "Pull firmographic data + intent signals from trusted sources." },
          { icon: "solar:chart-2-linear", label: "Score", text: "Score against ICP rules and route to the right owner." },
          { icon: "solar:letter-linear", label: "Draft", text: "Generate a personalized outreach email using your playbook." },
          { icon: "solar:calendar-linear", label: "Schedule", text: "Propose times, create the calendar event, update CRM." },
          { icon: "solar:bell-linear", label: "Notify", text: "Post to Slack with context + next best action." },
        ],
      },
      support: {
        title: "Support: triage → resolution",
        desc: "Classify tickets, draft replies, and escalate with confidence.",
        steps: [
          { icon: "solar:headphones-round-sound-linear", label: "Trigger", text: "New ticket arrives via email, chat, or helpdesk." },
          { icon: "solar:sort-from-top-to-bottom-linear", label: "Classify", text: "Detect category, urgency, sentiment, and required team." },
          { icon: "solar:document-text-linear", label: "Retrieve", text: "Pull policy + docs snippets to ground the response." },
          { icon: "solar:pen-new-square-linear", label: "Draft", text: "Create a reply with recommended steps and tone." },
          { icon: "solar:shield-check-linear", label: "Guardrails", text: "Apply redaction + safety rules; human approval for edge cases." },
          { icon: "solar:diagram-up-linear", label: "Learn", text: "Log outcomes and improve prompts/evals over time." },
        ],
      },
      ops: {
        title: "Ops: intake → execution",
        desc: "Turn requests into consistent execution with approvals and SOPs.",
        steps: [
          { icon: "solar:clipboard-list-linear", label: "Intake", text: "Standardize requests from forms, Slack, or email." },
          { icon: "solar:checklist-minimalistic-linear", label: "Validate", text: "Ensure required fields and apply business rules." },
          { icon: "solar:user-check-linear", label: "Approve", text: "Route for approval with clear context and audit trail." },
          { icon: "solar:settings-linear", label: "Execute", text: "Create tasks, update systems, and trigger downstream steps." },
          { icon: "solar:bell-linear", label: "Notify", text: "Send status updates and handoffs automatically." },
          { icon: "solar:shield-user-linear", label: "Monitor", text: "Track failures, retries, and exceptions in a dashboard." },
        ],
      },
      finance: {
        title: "Finance: invoices → follow-up",
        desc: "Generate invoices, reconcile payments, and reduce overdue balances.",
        steps: [
          { icon: "solar:bill-list-linear", label: "Generate", text: "Create invoice from CRM/deals or approved timesheets." },
          { icon: "solar:letter-linear", label: "Send", text: "Email invoice with payment link and terms." },
          { icon: "solar:wallet-linear", label: "Reconcile", text: "Match payments and update status automatically." },
          { icon: "solar:calendar-linear", label: "Remind", text: "Send smart reminders based on due date and risk." },
          { icon: "solar:document-add-linear", label: "Log", text: "Write back to accounting system + internal tracking sheet." },
          { icon: "solar:shield-check-linear", label: "Controls", text: "Role-based access and approval steps for exceptions." },
        ],
      },
    };

    function renderSteps(key) {
      const wf = workflows[key] || workflows.sales;
      el("wfTitle").textContent = wf.title;
      el("wfDesc").textContent = wf.desc;

      el("wfSteps").innerHTML = wf.steps
        .map(
          (s, idx) => `
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="flex items-start gap-3">
              <div class="mt-0.5 h-9 w-9 rounded-xl border border-white/10 bg-slate-950/30 flex items-center justify-center shrink-0">
                <iconify-icon icon="${s.icon}" class="text-lg text-slate-100/90" style="--iconify-stroke-width: 1.5;"></iconify-icon>
              </div>
              <div class="min-w-0">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-sm font-semibold tracking-tight text-white">${idx + 1}. ${s.label}</div>
                  <div class="text-[11px] text-slate-200/60">Step ${idx + 1}/${wf.steps.length}</div>
                </div>
                <div class="mt-1 text-xs text-slate-200/75">${s.text}</div>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    }

    document.querySelectorAll(".wfBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-wf");
        renderSteps(key);
        document.querySelectorAll(".wfBtn").forEach((b) => b.classList.remove("ring-2", "ring-sky-400/40"));
        btn.classList.add("ring-2", "ring-sky-400/40");
      });
    });

    // Default selection
    document.querySelector('.wfBtn[data-wf="sales"]')?.classList.add("ring-2", "ring-sky-400/40");
    renderSteps("sales");

    // One-pager download (client-side)
    function buildOnePager() {
      const content = `AutomateIQ — AI Automation One‑Pager

What we do
• Audit → pick 2–4 high-leverage workflows
• Build + deploy production automations
• Monitor, iterate, and support ongoing

Popular workflows
• Sales: lead enrichment, scoring, routing, meeting booking
• Support: triage, grounded drafting, escalation, learning loops
• Ops: intake, validation, approvals, SOP execution
• Finance: invoices, reminders, reconciliation, controls

What you get
• Workflow diagram + logic
• Monitoring + alert rules
• Data retention + access controls
• Documentation + training/handoff

Next step
Book a call: hello@automateiq.com
`;
      return new Blob([content], { type: "text/plain;charset=utf-8" });
    }

    el("downloadOnePager").addEventListener("click", () => {
      const blob = buildOnePager();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AutomateIQ-one-pager.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      el("downloadHint").textContent = "Downloaded.";
      setTimeout(() => (el("downloadHint").textContent = ""), 1400);
    });

    // Planner modal open/close + accessibility
    const plannerModal = el("plannerModal");
    const plannerDialog = plannerModal.querySelector(".w-full");
    let lastFocus = null;

    function openPlanner() {
      lastFocus = document.activeElement;
      plannerModal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
      // Focus first field for accessibility
      setTimeout(() => el("pDept").focus(), 0);
    }

    function closePlanner() {
      plannerModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    ["openPlanner", "openPlannerHero", "openPlannerMobile"].forEach((id) => {
      const node = el(id);
      if (node) node.addEventListener("click", openPlanner);
    });

    el("closePlanner").addEventListener("click", closePlanner);

    // Close on backdrop click (but not dialog click)
    plannerModal.addEventListener("click", (e) => {
      if (!plannerDialog.contains(e.target)) closePlanner();
    });

    // Escape to close + simple focus trap
    document.addEventListener("keydown", (e) => {
      if (plannerModal.classList.contains("hidden")) return;
      if (e.key === "Escape") closePlanner();

      if (e.key === "Tab") {
        const focusables = plannerModal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const list = Array.from(focusables).filter((x) => !x.hasAttribute("disabled") && x.offsetParent !== null);
        if (!list.length) return;
        const first = list[0];
        const last = list[list.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Planner generation
    function makePlan() {
      const dept = el("pDept").value;
      const input = el("pInput").value;
      const system = (el("pSystem").value || "").trim();
      const outcome = (el("pOutcome").value || "").trim();
      const notes = (el("pNotes").value || "").trim();

      const prettyDept = dept.charAt(0).toUpperCase() + dept.slice(1);
      const inputMap = {
        form: "Website form submission",
        email: "Inbound email",
        chat: "Chat message",
        spreadsheet: "New spreadsheet row",
        webhook: "Webhook event",
      };

      const sysText = system ? system : "your primary system";
      const outText = outcome ? outcome : "a measurable business outcome";

      const steps = [
        `1) Trigger: ${inputMap[input] || "New event"} detected.`,
        `2) Parse + validate: extract required fields; reject/ask for missing info.`,
        `3) Enrich (optional): add context from CRM/DB/docs as needed.`,
        `4) Decisioning: apply business rules + confidence thresholds.`,
        `5) Action: update ${sysText}, create tasks, notify owners, and log status.`,
        `6) Monitoring: retries, alerts, and a simple dashboard for visibility.`,
      ];

      const guardrails = [
        `• Human-in-the-loop for low-confidence cases`,
        `• Redact sensitive data before model calls (as needed)`,
        `• Audit trail: who/what/when for every automated action`,
      ];

      const output = `
        <div class="text-sm text-white font-semibold tracking-tight">${prettyDept} workflow outline</div>
        <div class="mt-2 text-xs text-slate-200/70">Goal: <span class="text-slate-100/90">${outText}</span></div>
        <div class="mt-3 space-y-1.5">
          ${steps.map((s) => `<div class="text-sm text-slate-200/80">${s}</div>`).join("")}
        </div>
        <div class="mt-4 text-xs text-slate-200/70 font-semibold tracking-tight">Recommended guardrails</div>
        <div class="mt-2 space-y-1.5">
          ${guardrails.map((g) => `<div class="text-sm text-slate-200/80">${g}</div>`).join("")}
        </div>
        ${notes ? `<div class="mt-4 text-xs text-slate-200/70"><span class="font-semibold tracking-tight">Notes:</span> <span class="text-slate-200/80">${notes.replaceAll("<", "&lt;")}</span></div>` : ""}
      `.trim();

      el("planOutput").innerHTML = output;
      el("planMeta").textContent = system ? `Target: ${system}` : "Add a primary system for more detail.";
      return { prettyDept, outText, sysText, notes, steps, guardrails };
    }

    el("generatePlan").addEventListener("click", () => makePlan());

    // Copy plan
    el("copyPlan").addEventListener("click", async () => {
      const dept = el("pDept").value;
      const input = el("pInput").value;
      const system = (el("pSystem").value || "").trim();
      const outcome = (el("pOutcome").value || "").trim();
      const notes = (el("pNotes").value || "").trim();

      const inputMap = {
        form: "Website form",
        email: "Email",
        chat: "Chat",
        spreadsheet: "Spreadsheet",
        webhook: "Webhook",
      };

      const text = `Automation plan
Department: ${dept}
Input: ${inputMap[input] || input}
Primary system: ${system || "—"}
Outcome: ${outcome || "—"}
Notes: ${notes || "—"}
`;

      try {
        await navigator.clipboard.writeText(text);
        const btn = el("copyPlan");
        const prev = btn.innerHTML;
        btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg" style="--iconify-stroke-width: 1.5;"></iconify-icon> Copied`;
        setTimeout(() => (btn.innerHTML = prev), 1400);
      } catch (e) {
        el("planMeta").textContent = "Copy not supported in this browser.";
        setTimeout(() => (el("planMeta").textContent = "Fill fields and generate."), 1400);
      }
    });

    // Contact form helpers
    const message = el("message");
    const charCount = el("charCount");
    const maxChars = 600;

    function updateCharCount() {
      const len = (message.value || "").length;
      charCount.textContent = `${len}/${maxChars}`;
      charCount.classList.toggle("text-rose-300", len > maxChars);
    }
    message.addEventListener("input", updateCharCount);
    updateCharCount();

    el("insertTemplate").addEventListener("click", () => {
      const template =
`Workflow to automate:
- Trigger: (e.g., form submission / inbound email)
- Current steps: (brief)
- Decision rules: (routing, approvals, edge cases)
- Systems: (CRM/helpdesk/accounting/spreadsheet)
- Output: (what should be created/updated/notified)
- Success metrics: (time saved, SLA, conversion, error rate)
- Constraints: (security, compliance, human review)`;
      message.value = template;
      updateCharCount();
      message.focus();
    });

    // Faux form submit (demo)
    el("contactForm").addEventListener("submit", (e) => {
      e.preventDefault();

      if ((message.value || "").length > maxChars) {
        el("formStatus").textContent = "Please shorten your message to 600 characters.";
        return;
      }

      el("formStatus").textContent = "Sending…";
      const btn = e.target.querySelector('button[type="submit"]');
      const prev = btn.innerHTML;
      btn.disabled = true;
      btn.classList.add("opacity-80", "cursor-not-allowed");

      setTimeout(() => {
        el("formStatus").textContent = "Request received. We’ll reply within 1 business day.";
        btn.disabled = false;
        btn.classList.remove("opacity-80", "cursor-not-allowed");
        btn.innerHTML = prev;
        e.target.reset();
        updateCharCount();
      }, 900);
    });

    // Improve nav: close mobile menu on link click
    mobileMenu.querySelectorAll("a, button").forEach((node) => {
      node.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });

    // Smooth anchor scrolling (honors reduced motion)
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#" || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl opacity-35" style={{background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,.45), rgba(99,102,241,.32), rgba(15,23,42,0) 62%)'}}></div>
<div className="absolute -bottom-24 right-[-8rem] h-[30rem] w-[30rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle at 30% 30%, rgba(34,197,94,.35), rgba(56,189,248,.20), rgba(15,23,42,0) 62%)'}}></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '3.5rem 3.5rem'}}></div>
</div>

<div className="relative">

<header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">
<a className="flex items-center gap-3" href="#top">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-white">AI</span>
</div>
<div className="leading-none">
<div className="text-sm font-semibold tracking-tight text-white">AutomateIQ</div>
<div className="text-xs text-slate-300/80">AI automation studio</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-200/90">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#workflows">Workflows</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#case-studies">Case studies</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" id="openPlanner">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
              Automation planner
            </button>
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#contact">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
              Book a call
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 hover:bg-white/10 transition" id="openMenu">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-xl" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2 text-sm text-slate-200/90">
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#services">Services</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#workflows">Workflows</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#pricing">Pricing</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#case-studies">Case studies</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#faq">FAQ</a>
<button className="text-left rounded-xl px-3 py-2 hover:bg-white/5 transition" id="openPlannerMobile">
              Automation planner
            </button>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#contact">Book a call</a>
</div>
</div>
</div>
</header>

<main id="top">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/90">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
              Ship automation in weeks, not quarters
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              AI automation that removes busywork and grows revenue
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-200/80 max-w-2xl">
              We design and deploy AI-powered workflows across sales, support, ops, and finance—integrated with your tools,
              measurable from day one, and built to scale.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#contact">
<iconify-icon className="text-lg" icon="solar:calendar-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Get a free automation audit
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition" id="openPlannerHero">
<iconify-icon className="text-lg" icon="solar:diagram-up-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Plan my workflow
              </button>
</div>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:clock-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                  Time saved
                </div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">10–25 hrs</div>
<div className="mt-1 text-xs text-slate-200/70">per employee / week</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:shield-check-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                  Reliability
                </div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">99%+</div>
<div className="mt-1 text-xs text-slate-200/70">monitored workflows</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:graph-up-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                  Impact
                </div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">2–6×</div>
<div className="mt-1 text-xs text-slate-200/70">faster throughput</div>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-200/70">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">CRM</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Email</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Helpdesk</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Sheets</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Slack</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Webhooks</span>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Live automation dashboard</div>
<div className="mt-1 text-xs text-slate-200/70">A lightweight view of what your automations do</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Healthy
                  </div>
</div>
</div>
<div className="p-5 sm:p-6 space-y-4">
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-sky-200" icon="solar:inbox-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Lead intake → CRM</div>
<div className="text-xs text-slate-200/70">Extracts data, enriches, routes</div>
</div>
</div>
<div className="text-xs text-slate-200/70">avg 12s</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" style={{width: '76%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>Throughput</span>
<span>76%</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-emerald-200" icon="solar:chat-square-like-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Support triage</div>
<div className="text-xs text-slate-200/70">Classifies + drafts replies</div>
</div>
</div>
<div className="text-xs text-slate-200/70">avg 18s</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" style={{width: '64%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>Automation rate</span>
<span>64%</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-indigo-200" icon="solar:bill-list-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Invoices + reminders</div>
<div className="text-xs text-slate-200/70">Creates invoices, nudges, logs</div>
</div>
</div>
<div className="text-xs text-slate-200/70">avg 9s</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" style={{width: '88%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>On-time rate</span>
<span>88%</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">ROI estimator</div>
<div className="text-xs text-slate-200/70" id="roiLabel">—</div>
</div>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-200/70">Team size</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:users-group-rounded-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="teamSize" min="1" type="number" value="8"/>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Hours saved / week</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:clock-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="hoursSaved" min="1" type="number" value="6"/>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Avg hourly cost</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:dollar-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="hourlyCost" min="1" type="number" value="35"/>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Weeks / year</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:calendar-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="weeksYear" min="1" type="number" value="48"/>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-xs text-slate-200/70">
                      Estimated annual savings
                      <div className="mt-1 text-2xl font-semibold tracking-tight text-white" id="roiValue">$—</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" id="copyROI">
<iconify-icon className="text-lg" icon="solar:copy-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                      Copy estimate
                    </button>
</div>
<div className="mt-3 text-xs text-slate-200/60">
                    This is a directional estimate. We validate assumptions during the audit.
                  </div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-200/60">
              Built for: founders, operators, and teams who want fewer tools—more outcomes.
            </div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="services">
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Services designed for real operations</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75">
              We focus on pragmatic automation: measurable, maintainable, and integrated with your stack.
            </p>
</div>
<a className="text-sm font-medium text-slate-200/80 hover:text-white transition inline-flex items-center gap-2" href="#pricing">
            See pricing
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950/30 flex items-center justify-center">
<iconify-icon className="text-2xl text-sky-200" icon="solar:target-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-white">Automation audit</div>
<p className="mt-2 text-sm text-slate-200/75">
              Map your bottlenecks, quantify impact, and prioritize 2–4 high-leverage workflows.
            </p>
<ul className="mt-4 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> Process mapping + data sources</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Security + compliance checklist</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> ROI + implementation plan</li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950/30 flex items-center justify-center">
<iconify-icon className="text-2xl text-indigo-200" icon="solar:diagram-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-white">Workflow build + deploy</div>
<p className="mt-2 text-sm text-slate-200/75">
              Production-grade automations with monitoring, fallbacks, and human-in-the-loop where needed.
            </p>
<ul className="mt-4 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> Tool integrations + APIs</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Prompting + evals for accuracy</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Alerts + dashboards</li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2 lg:col-span-1">
<div className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950/30 flex items-center justify-center">
<iconify-icon className="text-2xl text-emerald-200" icon="solar:shield-user-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-white">Ongoing support</div>
<p className="mt-2 text-sm text-slate-200/75">
              We maintain and improve automations as your team, tools, and data evolve.
            </p>
<ul className="mt-4 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> SLA-based monitoring</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Monthly improvements</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Documentation + training</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="workflows">
<div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-6 sm:p-8 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Popular automations</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75 max-w-3xl">
              Choose a workflow to preview the steps. These are templates—we tailor them to your business rules and systems.
            </p>
</div>
<div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-5">
<div className="space-y-3">
<button className="wfBtn w-full text-left rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:bg-white/5 transition" data-wf="sales">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-sky-200" icon="solar:hand-money-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Sales: lead → meeting</div>
<div className="text-xs text-slate-200/70">Enrich, score, route, schedule</div>
</div>
</div>
<iconify-icon className="text-lg text-slate-200/70" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
</button>
<button className="wfBtn w-full text-left rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:bg-white/5 transition" data-wf="support">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-emerald-200" icon="solar:headphones-round-sound-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Support: triage → resolution</div>
<div className="text-xs text-slate-200/70">Classify, draft, escalate, learn</div>
</div>
</div>
<iconify-icon className="text-lg text-slate-200/70" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
</button>
<button className="wfBtn w-full text-left rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:bg-white/5 transition" data-wf="ops">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-indigo-200" icon="solar:settings-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Ops: intake → execution</div>
<div className="text-xs text-slate-200/70">Forms, approvals, SOP steps</div>
</div>
</div>
<iconify-icon className="text-lg text-slate-200/70" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
</button>
<button className="wfBtn w-full text-left rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:bg-white/5 transition" data-wf="finance">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-fuchsia-200" icon="solar:wallet-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Finance: invoices → follow-up</div>
<div className="text-xs text-slate-200/70">Generate, send, reconcile</div>
</div>
</div>
<iconify-icon className="text-lg text-slate-200/70" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
</button>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white" id="wfTitle">Sales: lead → meeting</div>
<div className="mt-1 text-xs text-slate-200/70" id="wfDesc">Enrich, score, route, schedule—without manual copy/paste.</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:bolt-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                    Typical: 2–5 days
                  </div>
</div>
<div className="mt-6 space-y-3" id="wfSteps">

</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">What you get</div>
<div className="text-xs text-slate-200/70">Docs + handoff included</div>
</div>
<div className="mt-3 grid sm:grid-cols-2 gap-2 text-xs text-slate-200/70">
<div className="flex items-center gap-2"><span className="text-emerald-300">•</span> Workflow diagram + logic</div>
<div className="flex items-center gap-2"><span className="text-emerald-300">•</span> Monitoring + alert rules</div>
<div className="flex items-center gap-2"><span className="text-emerald-300">•</span> Data retention + access controls</div>
<div className="flex items-center gap-2"><span className="text-emerald-300">•</span> Iteration plan for accuracy</div>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#contact">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                    Talk to an expert
                  </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition" id="downloadOnePager">
<iconify-icon className="text-lg" icon="solar:download-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                    Download one‑pager
                  </button>
<span aria-live="polite" className="text-xs text-slate-200/60" id="downloadHint"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="case-studies">
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Case studies</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75">
              Example outcomes from common automation programs. Replace with your real results.
            </p>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-4 sm:gap-6">
<article className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:shop-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Ecommerce
              </div>
<div className="text-xs text-slate-200/60">8 weeks</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Support deflection with AI triage</h3>
<p className="mt-2 text-sm text-slate-200/75">
              Automated ticket categorization, templated responses, and smart escalation.
            </p>
<div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-200/70">
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Deflection</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">38%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">First reply</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">-62%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">CSAT</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">+0.4</div>
</div>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:buildings-3-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                B2B services
              </div>
<div className="text-xs text-slate-200/60">4 weeks</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Lead routing + personalized outreach</h3>
<p className="mt-2 text-sm text-slate-200/75">
              Enrichment, scoring, and email drafts that match ICP and intent.
            </p>
<div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-200/70">
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Speed-to-lead</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">-71%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Booked</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">+24%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Hours saved</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">120/mo</div>
</div>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">
<iconify-icon className="text-base" icon="solar:document-text-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Back office
              </div>
<div className="text-xs text-slate-200/60">6 weeks</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Invoice automation + reconciliation</h3>
<p className="mt-2 text-sm text-slate-200/75">
              Auto-generated invoices, follow-ups, and clean status tracking.
            </p>
<div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-200/70">
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Overdue</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">-29%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Errors</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">-84%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
<div className="text-slate-200/60">Close time</div>
<div className="mt-1 text-base font-semibold tracking-tight text-white">-3 days</div>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="pricing">
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Simple pricing</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75">
              Pick the engagement model that fits your pace. Replace amounts with your real pricing.
            </p>
</div>
<div className="text-xs text-slate-200/60">
            All plans include monitoring, documentation, and secure credential handling.
          </div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Starter</div>
<div className="mt-1 text-xs text-slate-200/70">For one high-impact workflow</div>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">Best for MVP</div>
</div>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight text-white">$2,500</div>
<div className="mt-1 text-xs text-slate-200/70">one-time implementation</div>
</div>
<ul className="mt-5 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> 1 workflow (up to 6 steps)</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> 1 integration (CRM/helpdesk)</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Basic monitoring</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#contact">
              Choose Starter
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="rounded-3xl border border-sky-400/30 bg-gradient-to-b from-sky-400/10 to-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Growth</div>
<div className="mt-1 text-xs text-slate-200/70">For teams automating key functions</div>
</div>
<div className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs text-slate-100/90">Most popular</div>
</div>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight text-white">$6,500</div>
<div className="mt-1 text-xs text-slate-200/70">per month (minimum 2 months)</div>
</div>
<ul className="mt-5 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> 3–5 workflows</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Multi-tool integrations + APIs</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Evals + accuracy iteration</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Dashboards + alerting</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#contact">
              Choose Growth
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Enterprise</div>
<div className="mt-1 text-xs text-slate-200/70">For multi-team automation programs</div>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/80">Custom</div>
</div>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight text-white">Let’s talk</div>
<div className="mt-1 text-xs text-slate-200/70">security, compliance, SLAs</div>
</div>
<ul className="mt-5 space-y-2 text-xs text-slate-200/70">
<li className="flex gap-2"><span className="text-emerald-300">•</span> Dedicated automation roadmap</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Role-based access + audit logs</li>
<li className="flex gap-2"><span className="text-emerald-300">•</span> Advanced monitoring + on-call</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition" href="#contact">
              Request a proposal
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="faq">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
<div className="lg:col-span-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">FAQ</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75">
              Straight answers so you know what to expect.
            </p>
<div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-semibold tracking-tight text-white">Want a faster answer?</div>
<p className="mt-2 text-sm text-slate-200/75">Send your current process and we’ll reply with automation ideas.</p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition w-full" href="#contact">
<iconify-icon className="text-lg" icon="solar:paperclip-2-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Share a process
              </a>
</div>
</div>
<div className="lg:col-span-8">
<div className="space-y-3">
<details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">Do you replace our team?</div>
<iconify-icon className="text-xl text-slate-200/70 group-open:rotate-180 transition" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="mt-3 text-sm text-slate-200/75">
                  No. We remove repetitive work so your team can focus on higher-value tasks. We also keep humans in the loop where accuracy matters.
                </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">What tools do you integrate with?</div>
<iconify-icon className="text-xl text-slate-200/70 group-open:rotate-180 transition" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="mt-3 text-sm text-slate-200/75">
                  Most modern CRMs, helpdesks, email providers, spreadsheets, databases, and internal APIs. If there’s an API, we can connect it.
                </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">How do you handle security?</div>
<iconify-icon className="text-xl text-slate-200/70 group-open:rotate-180 transition" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="mt-3 text-sm text-slate-200/75">
                  We scope data access, minimize retention, and use least-privilege credentials. We document what touches what, and add monitoring + audit trails.
                </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">How fast can we launch?</div>
<iconify-icon className="text-xl text-slate-200/70 group-open:rotate-180 transition" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="mt-3 text-sm text-slate-200/75">
                  Many teams ship the first workflow in 1–2 weeks after discovery, depending on integrations and approval requirements.
                </p>
</details>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24" id="contact">
<div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-6 sm:p-8 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Book a call</h2>
<p className="mt-2 text-sm sm:text-base text-slate-200/75 max-w-3xl">
              Tell us what you want to automate. We’ll respond with a plan, timeline, and expected ROI.
            </p>
</div>
<div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-6">
<form className="lg:col-span-7 space-y-4" id="contactForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-200/70">Full name</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:user-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="name" placeholder="Alex Johnson" required="" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Work email</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:letter-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="email" placeholder="alex@company.com" required="" type="email"/>
</div>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Company</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:buildings-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="company" placeholder="Your company" required="" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-200/70">Primary goal</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:flag-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<select className="w-full bg-transparent text-sm text-white outline-none" id="goal">
<option className="bg-slate-950" value="save-time">Save time / reduce manual work</option>
<option className="bg-slate-950" value="grow-revenue">Grow revenue / speed sales</option>
<option className="bg-slate-950" value="improve-support">Improve support</option>
<option className="bg-slate-950" value="reduce-errors">Reduce errors / improve quality</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Timeline</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:stopwatch-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<select className="w-full bg-transparent text-sm text-white outline-none" id="timeline">
<option className="bg-slate-950" value="asap">ASAP</option>
<option className="bg-slate-950" value="2-4w">2–4 weeks</option>
<option className="bg-slate-950" value="1-2m">1–2 months</option>
<option className="bg-slate-950" value="exploring">Just exploring</option>
</select>
</div>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">What should we automate first?</label>
<div className="mt-1 rounded-xl border border-white/10 bg-slate-950/30 p-3">
<textarea className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none resize-none" id="message" placeholder="Example: When a lead fills our form, enrich them, score, route to the right rep, and draft a tailored email." required="" rows="5"></textarea>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/60">
<span id="charCount">0/600</span>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition text-xs font-medium text-white" id="insertTemplate" type="button">
<iconify-icon className="text-base" icon="solar:text-square-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                    Insert template
                  </button>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" type="submit">
<iconify-icon className="text-lg" icon="solar:paper-plane-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                  Send request
                </button>
<div aria-live="polite" className="text-xs text-slate-200/60" id="formStatus"></div>
</div>
</form>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6">
<div className="text-sm font-semibold tracking-tight text-white">What happens next</div>
<ol className="mt-4 space-y-3 text-sm text-slate-200/75">
<li className="flex gap-3">
<div className="mt-0.5 h-7 w-7 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs font-semibold text-white">1</div>
<div>We review your process and tools (usually within 1 business day).</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 h-7 w-7 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs font-semibold text-white">2</div>
<div>We propose a workflow plan with ROI assumptions and timeline.</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 h-7 w-7 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs font-semibold text-white">3</div>
<div>We implement, test, and launch with monitoring and handoff.</div>
</li>
</ol>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200/70">
<iconify-icon className="text-base" icon="solar:lock-keyhole-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                    Security-first build
                  </div>
<p className="mt-2 text-sm text-slate-200/75">
                    We minimize data exposure, document access, and add safe fallbacks so your team stays in control.
                  </p>
</div>
<div className="mt-6 text-xs text-slate-200/60">
                  Replace company details:
                  <div className="mt-2 grid gap-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-slate-200/70" icon="solar:letter-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                      hello@automateiq.com
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-slate-200/70" icon="solar:phone-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                      (555) 123‑4567
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-slate-200/70" icon="solar:map-point-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                      Remote • Worldwide
                    </div>
</div>
</div>
</div>
</div>
</div>
<footer className="p-6 sm:p-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-white">AI</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">AutomateIQ</div>
<div className="text-xs text-slate-200/60">© <span id="year"></span> All rights reserved</div>
</div>
</div>
<div className="flex flex-wrap gap-3 text-xs text-slate-200/70">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
<button className="hover:text-white transition inline-flex items-center gap-2" id="scrollTop">
<iconify-icon className="text-base" icon="solar:arrow-up-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Back to top
              </button>
</div>
</footer>
</div>
</section>
</main>

<div className="fixed inset-0 z-[60] hidden" id="plannerModal">
<div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
<div className="w-full rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Automation planner</div>
<div className="mt-1 text-xs text-slate-200/70">Answer a few questions and get a workflow outline.</div>
</div>
<button aria-label="Close" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 hover:bg-white/10 transition" id="closePlanner">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="p-5 sm:p-6 grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-200/70">Department</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:case-round-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<select className="w-full bg-transparent text-sm text-white outline-none" id="pDept">
<option className="bg-slate-950" value="sales">Sales</option>
<option className="bg-slate-950" value="support">Support</option>
<option className="bg-slate-950" value="ops">Operations</option>
<option className="bg-slate-950" value="finance">Finance</option>
<option className="bg-slate-950" value="marketing">Marketing</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Main input</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:inbox-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<select className="w-full bg-transparent text-sm text-white outline-none" id="pInput">
<option className="bg-slate-950" value="form">Website form</option>
<option className="bg-slate-950" value="email">Email</option>
<option className="bg-slate-950" value="chat">Chat</option>
<option className="bg-slate-950" value="spreadsheet">Spreadsheet row</option>
<option className="bg-slate-950" value="webhook">Webhook</option>
</select>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-200/70">Primary system</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:widget-2-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="pSystem" placeholder="Example: HubSpot, Zendesk, Airtable" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Desired outcome</label>
<div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon className="text-lg text-slate-200/80" icon="solar:check-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none" id="pOutcome" placeholder="Example: book meetings faster" type="text"/>
</div>
</div>
</div>
<div>
<label className="text-xs text-slate-200/70">Notes (optional)</label>
<div className="mt-1 rounded-xl border border-white/10 bg-white/5 p-3">
<textarea className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 outline-none resize-none" id="pNotes" placeholder="Any constraints, approvals, or edge cases?" rows="3"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" id="generatePlan">
<iconify-icon className="text-lg" icon="solar:wand-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Generate plan
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition" id="copyPlan">
<iconify-icon className="text-lg" icon="solar:copy-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                Copy
              </button>
</div>
<div className="rounded-3xl border border-white/10 bg-slate-950/30 p-5">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">Your workflow outline</div>
<div className="text-xs text-slate-200/60" id="planMeta">Fill fields and generate.</div>
</div>
<div className="mt-4 space-y-2 text-sm text-slate-200/80" id="planOutput">
<div className="text-xs text-slate-200/60">Nothing yet.</div>
</div>
</div>
<div className="text-xs text-slate-200/60">
              Tip: Paste this outline into your request form to speed up scoping.
            </div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
