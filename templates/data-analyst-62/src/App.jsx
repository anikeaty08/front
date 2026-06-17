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



    const email = "sk524722@gmail.com";
    const phone = "9087860399";

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
      mobileMenu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
    }

    function toast(text) {
      const t = document.getElementById("toast");
      if (!t) return;
      t.textContent = text;
      t.classList.remove("hidden");
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => t.classList.add("hidden"), 1400);
    }

    async function copyToClipboard(value, label) {
      try {
        await navigator.clipboard.writeText(value);
        toast(label + " copied");
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); toast(label + " copied"); } catch (err) {}
        document.body.removeChild(ta);
      }
    }

    document.getElementById("copyEmail")?.addEventListener("click", () => copyToClipboard(email, "Email"));
    document.getElementById("copyEmailTop")?.addEventListener("click", () => copyToClipboard(email, "Email"));
    document.getElementById("copyPhone")?.addEventListener("click", () => copyToClipboard(phone, "Phone"));

    document.getElementById("fillSample")?.addEventListener("click", () => {
      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email");
      const subjectEl = document.getElementById("subject");
      const messageEl = document.getElementById("message");

      if (nameEl && !nameEl.value) nameEl.value = "Hiring Team";
      if (emailEl && !emailEl.value) emailEl.value = "team@company.com";
      if (subjectEl && !subjectEl.value) subjectEl.value = "Data Analyst opportunity — Bangalore";
      if (messageEl && !messageEl.value) {
        messageEl.value =
`Hi Sunny,

We’re looking for a data analyst to support KPI reporting, stakeholder insights, and dashboarding.
Could we schedule a quick call this week?

Thanks,
`;
      }
      toast("Sample filled");
    });

    document.getElementById("contactForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("name")?.value || "").trim();
      const fromEmail = (document.getElementById("email")?.value || "").trim();
      const subject = (document.getElementById("subject")?.value || "Portfolio inquiry").trim();
      const message = (document.getElementById("message")?.value || "").trim();

      const bodyLines = [
        message || "Hi Sunny,",
        "",
        "—",
        name ? `Name: ${name}` : null,
        fromEmail ? `Email: ${fromEmail}` : null
      ].filter(Boolean);

      const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailto;
    });

    // Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Scroll progress
    const bar = document.getElementById("scrollbar");
    function updateScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (bar) bar.style.width = Math.min(100, Math.max(0, p)) + "%";
    }
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    // Smooth anchor scroll (native with scrollIntoView)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
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
      

<div className="fixed top-0 left-0 right-0 z-50">
<div className="h-px bg-white/10"></div>
<div className="h-px bg-white/40 w-0" id="scrollbar"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.04]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05), transparent 50%)'}}></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex items-center justify-between py-4">
<a className="group inline-flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5">
<span className="text-sm font-semibold tracking-tight">SS</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight">Sunny Singh</div>
<div className="text-xs text-white/60">Data Analyst • 6+ years</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white transition" href="#work">Work</a>
<a className="hover:text-white transition" href="#skills">Skills</a>
<a className="hover:text-white transition" href="#projects">Projects</a>
<a className="hover:text-white transition" href="#experience">Experience</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10 transition" id="menuBtn">
<iconify-icon className="text-white/80" height="20" icon="lucide:menu" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#contact">
<iconify-icon height="18" icon="lucide:send" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
            Contact
          </a>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
<div className="grid gap-2 text-sm text-white/80">
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#work">Work</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#skills">Skills</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#projects">Projects</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#experience">Experience</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-6xl px-4 sm:px-6" id="top">

<section className="pt-10 sm:pt-14 lg:pt-16">
<div className="grid items-start gap-8 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
<span className="inline-flex h-2 w-2 rounded-full bg-white/70"></span>
            Bangalore • Open to analytics &amp; BI roles
          </div>
<h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Data Analyst turning messy data into clear, confident decisions.
          </h1>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            I’m <span className="text-white/90 font-medium">Sunny Singh</span>, a data analyst with <span className="text-white/90 font-medium">6+ years</span> of experience
            building dashboards, optimizing KPIs, and partnering with stakeholders to ship measurable outcomes.
            I care deeply about data quality, thoughtful storytelling, and practical analytics that teams actually use.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#projects">
<iconify-icon height="18" icon="lucide:briefcase" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              View projects
            </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#contact">
<iconify-icon height="18" icon="lucide:calendar" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Book a chat
            </a>
<button aria-label="Copy email" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition" id="copyEmailTop">
<iconify-icon height="18" icon="lucide:copy" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Copy email
            </button>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-white/60">Experience</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">6+ years</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-white/60">Focus</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">BI + Insights</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-white/60">Strength</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">SQL</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-white/60">Style</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">Clarity</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Analytics snapshot</div>
<div className="mt-1 text-xs text-white/60">A quick, readable view of what I enjoy doing.</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
<iconify-icon height="16" icon="lucide:activity" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Always learning
              </div>
</div>
<div className="mt-5 space-y-4">
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:bar-chart-3" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                    KPI design &amp; measurement
                  </div>
<span className="text-xs text-white/60">North-star metrics</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[88%] rounded-full bg-white/50"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:database" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                    Data modeling &amp; quality
                  </div>
<span className="text-xs text-white/60">Reliable tables</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[84%] rounded-full bg-white/50"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:line-chart" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                    Forecasting &amp; trend analysis
                  </div>
<span className="text-xs text-white/60">Planning-ready</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[76%] rounded-full bg-white/50"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:message-square-text" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                    Storytelling &amp; stakeholder sync
                  </div>
<span className="text-xs text-white/60">Actionable</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[90%] rounded-full bg-white/50"></div>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">SQL</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Power BI</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Excel</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Python</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">A/B Testing</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">ETL</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 lg:mt-20" id="work">
<div className="flex items-end justify-between gap-6">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-white/50">What I deliver</div>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Analytics that moves the needle</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition" href="#contact">
<span>Let’s collaborate</span>
<iconify-icon height="18" icon="lucide:arrow-right" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3iF=" lg:grid-cols-3"="">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:layout-dashboard" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Executive dashboards</div>
<div className="text-xs text-white/60">Clean KPI design • Drilldowns • Alerts</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70 leading-relaxed">
            I build dashboards that answer the real questions: what changed, why it changed, and what to do next.
            I aim for minimal visuals, maximum clarity, and consistent metric definitions.
          </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:shield-check" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Data reliability</div>
<div className="text-xs text-white/60">Quality checks • Reconciliation • Governance</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70 leading-relaxed">
            Strong analytics starts with trustworthy data. I set up validation rules, automated checks, and
            documentation so teams can use numbers with confidence.
          </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:target" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Experimentation mindset</div>
<div className="text-xs text-white/60">Hypotheses • Testing • Lift measurement</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70 leading-relaxed">
            I enjoy framing problems as testable questions. Whether it’s product funnels or operational workflows,
            I focus on measurable impact and decision-ready insights.
          </p>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 lg:mt-20" id="skills">
<div className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="text-xs uppercase tracking-[0.2em] text-white/50">Skills</div>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">A practical toolkit</h2>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
            I’m comfortable working end-to-end: from raw data to models to dashboards, and then helping teams
            turn insights into execution.
          </p>
</div>
<div className="lg:col-span-8">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:terminal" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                Analytics &amp; Querying
              </div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Advanced SQL (joins, window functions, performance tuning)
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Metric definitions, KPI trees, funnel &amp; cohort analysis
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Root cause analysis and anomaly detection
                </li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:pie-chart" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                BI &amp; Reporting
              </div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Power BI dashboards (DAX, drill-through, governance)
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Executive reporting and stakeholder-ready narratives
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Self-serve analytics enablement and documentation
                </li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:workflow" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                Data Prep &amp; Pipelines
              </div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Data cleaning, transformation, and reproducible datasets
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  ETL concepts, scheduling, and quality checks
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Dimensional modeling for analytics-ready schemas
                </li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:brain" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                Thinking &amp; Communication
              </div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Structured problem solving and hypothesis-driven analysis
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Translating business goals into measurable metrics
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-white/50"></span>
                  Crisp storytelling: context → insight → action
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 lg:mt-20" id="projects">
<div className="text-xs uppercase tracking-[0.2em] text-white/50">Selected projects</div>
<div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Work I’d be excited to discuss</h2>
<div className="text-sm text-white/60 max-w-xl">
          These are representative project types to showcase approach, not confidential client data.
        </div>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-3">
<article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:shopping-cart" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Revenue &amp; retention dashboard
            </div>
<span className="text-xs text-white/50">BI</span>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
            Built a KPI suite covering acquisition, conversion, and retention with clear definitions and drilldowns.
            Introduced cohort views to highlight retention decay and lifecycle opportunities.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Power BI</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">SQL</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Cohorts</span>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:route" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Funnel instrumentation audit
            </div>
<span className="text-xs text-white/50">Product</span>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
            Aligned event definitions across teams, fixed duplicate/missing events, and standardized naming.
            Improved trust in conversion metrics and reduced reporting inconsistencies.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Data QA</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">SQL</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Metrics</span>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:truck" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Operations SLA insights
            </div>
<span className="text-xs text-white/50">Ops</span>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
            Identified bottlenecks driving SLA misses using segmented time-to-complete analysis. Proposed
            workflow changes and monitoring that kept teams focused on leading indicators.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Segmentation</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Power BI</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Process</span>
</div>
</article>
</div>
</section>

<section className="mt-12 sm:mt-16 lg:mt-20" id="experience">
<div className="text-xs uppercase tracking-[0.2em] text-white/50">Experience</div>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">6+ years of steady impact</h2>
<div className="mt-6 grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Sunny Singh</div>
<div className="mt-1 text-xs text-white/60">Data Analyst • Bangalore</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
<iconify-icon height="16" icon="lucide:clock" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                2019 — Present (6+ yrs)
              </div>
</div>
<p className="mt-4 text-sm text-white/70 leading-relaxed">
              I’ve supported business, product, and operations teams with analytics that’s both rigorous and usable.
              My approach is to define metrics clearly, validate data early, and keep insights focused on decisions.
            </p>
<div className="mt-5 space-y-3">
<div className="flex gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Stakeholder partnership</div>
<div className="text-xs text-white/60">Clear briefs, crisp updates, dependable delivery.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Strong fundamentals</div>
<div className="text-xs text-white/60">SQL-first analysis with documented assumptions.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Bias for action</div>
<div className="text-xs text-white/60">Insights framed as options with trade-offs.</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="text-xs text-white/60">What I’m exploring lately</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Forecasting basics</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Semantic layers</span>
<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Data storytelling</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Impact highlights</div>
<div className="mt-1 text-xs text-white/60">Examples of outcomes I typically drive.</div>
</div>
<div className="hidden sm:inline-flex items-center gap-2 text-xs text-white/60">
<iconify-icon height="16" icon="lucide:info" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Tailored per team &amp; domain
              </div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:trending-up" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  KPI alignment
                </div>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Standardized definitions across teams to reduce metric confusion and speed up decision-making.
                </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:search" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Root cause analysis
                </div>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Quickly isolated drivers of performance shifts using segmentation and time-based analysis.
                </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:layers" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Data modeling
                </div>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Built analysis-ready schemas to improve performance, consistency, and self-serve exploration.
                </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-sm font-medium text-white/90">
<iconify-icon height="18" icon="lucide:bell" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Monitoring &amp; alerts
                </div>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Set up leading indicators and lightweight checks to spot issues before they become incidents.
                </p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight">Want a one-page resume?</div>
<div className="mt-1 text-xs text-white/60">I can share it via email.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="mailto:sk524722@gmail.com?subject=Resume%20request%20—%20Sunny%20Singh">
<iconify-icon height="18" icon="lucide:download" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Request resume
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 lg:mt-20 pb-12 sm:pb-16 lg:pb-20" id="contact">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</div>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Let’s talk analytics</h2>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              If you’re looking for someone who enjoys digging into the details and communicating insights clearly,
              I’d love to connect.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:mail" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs text-white/60">Email</div>
<a className="text-sm font-medium text-white/90 hover:text-white transition break-all" href="mailto:sk524722@gmail.com">sk524722@gmail.com</a>
</div>
<button className="ml-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition" id="copyEmail">
<iconify-icon height="16" icon="lucide:copy" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                  Copy
                </button>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:phone" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs text-white/60">Phone</div>
<a className="text-sm font-medium text-white/90 hover:text-white transition" href="tel:+919087860399">+91 9087860399</a>
</div>
<button className="ml-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition" id="copyPhone">
<iconify-icon height="16" icon="lucide:copy" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                  Copy
                </button>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
<iconify-icon height="20" icon="lucide:map-pin" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs text-white/60">Location</div>
<div className="text-sm font-medium text-white/90">Bangalore, India</div>
</div>
<a className="ml-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition" href="https://www.google.com/maps/search/?api=1&amp;query=Bangalore" rel="noreferrer" target="_blank">
<iconify-icon height="16" icon="lucide:external-link" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                  Map
                </a>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="rounded-3xl border border-white/10 bg-black/30 p-6" id="contactForm">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Send a message</div>
<div className="mt-1 text-xs text-white/60">This opens your email app with a prefilled draft.</div>
</div>
<div className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80" id="toast">
                  Copied
                </div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<label className="block">
<span className="text-xs text-white/60">Your name</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/7 transition" id="name" placeholder="e.g., Priya" type="text"/>
</label>
<label className="block">
<span className="text-xs text-white/60">Your email</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/7 transition" id="email" placeholder="e.g., priya@company.com" type="email"/>
</label>
</div>
<label className="block mt-4">
<span className="text-xs text-white/60">Subject</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/7 transition" id="subject" placeholder="e.g., Analytics role / dashboard help" type="text"/>
</label>
<label className="block mt-4">
<span className="text-xs text-white/60">Message</span>
<textarea className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/7 transition" id="message" placeholder="Share a bit about the role, project, or problem you want to solve." rows="6"></textarea>
</label>
<div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" type="submit">
<iconify-icon height="18" icon="lucide:send" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Send email
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition" id="fillSample" type="button">
<iconify-icon height="18" icon="lucide:sparkles" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  Fill sample
                </button>
<p className="text-xs text-white/50 sm:ml-auto">
                  Prefer WhatsApp/call? Use the phone card on the left.
                </p>
</div>
</form>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:focus" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  What I’m looking for
                </div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Roles where analytics influences product, growth, or operations—and where data quality is treated
                  as a first-class priority.
                </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon height="18" icon="lucide:handshake" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                  How I like to work
                </div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Clear requirements, shared definitions, quick iterations, and dashboards that remain useful long
                  after launch.
                </p>
</div>
</div>
</div>
</div>
<footer className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-xs text-white/50">
            © <span id="year"></span> Sunny Singh • Minimalist black &amp; white portfolio
          </div>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition inline-flex items-center gap-2" href="#top">
<iconify-icon height="16" icon="lucide:arrow-up" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
              Back to top
            </a>
<span className="hidden sm:inline text-white/20">•</span>
<a className="hover:text-white transition" href="mailto:sk524722@gmail.com">Email</a>
<a className="hover:text-white transition" href="tel:+919087860399">Call</a>
</div>
</footer>
</div>
</section>
</main>


    </>
  );
}
