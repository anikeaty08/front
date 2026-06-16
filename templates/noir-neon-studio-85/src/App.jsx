import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // --------------------------
    // Minimal router (kept structure)
    // --------------------------
    const pages = ["home","work","services","about","contact"];
    const pageEls = Object.fromEntries(pages.map(p => [p, document.getElementById(`page-${p}`)]));

    function showPage(route){
      pages.forEach(p => pageEls[p].classList.add("hidden"));
      pageEls[route].classList.remove("hidden");
      pageEls[route].classList.add("block");
      document.querySelectorAll(".navBtn").forEach(b=>{
        const active = b.dataset.route === route;
        b.classList.toggle("bg-sky-50", active);
        b.classList.toggle("text-slate-900", active);
      });
      window.scrollTo({top: 0, behavior: "instant"});
      closeMobileMenu();
    }

    document.querySelectorAll(".navBtn").forEach(btn=>{
      btn.addEventListener("click", ()=> showPage(btn.dataset.route));
    });

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    function closeMobileMenu(){ mobileMenu.classList.add("hidden"); }
    menuBtn?.addEventListener("click", ()=>{
      mobileMenu.classList.toggle("hidden");
    });

    // --------------------------
    // Command palette
    // --------------------------
    const cmdBackdrop = document.getElementById("cmdBackdrop");
    const cmdPalette = document.getElementById("cmdPalette");
    const cmdInput = document.getElementById("cmdInput");
    const cmdList = document.getElementById("cmdList");
    const openCmd = document.getElementById("openCmd");
    const cmdClose = document.getElementById("cmdClose");

    const cmdItems = pages.map(p => ({key:p, label:p}));
    let cmdActiveIndex = 0;

    function renderCmd(filter=""){
      cmdList.innerHTML = "";
      const f = filter.trim().toLowerCase();
      const shown = cmdItems.filter(i => i.label.includes(f));
      if (cmdActiveIndex >= shown.length) cmdActiveIndex = 0;

      shown.forEach((item, idx)=>{
        const btn = document.createElement("button");
        btn.className = "w-full border border-sky-200 bg-white px-4 py-3 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60";
        btn.innerHTML = `
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">route</div>
              <div class="mt-1 text-sm font-[500] tracking-tight text-slate-900" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">${item.label}</div>
            </div>
            <iconify-icon icon="solar:arrow-right-linear" width="18" class="text-slate-700" style="stroke-width:1.5;"></iconify-icon>
          </div>
        `;
        if (idx === cmdActiveIndex) btn.classList.add("bg-sky-50");
        btn.addEventListener("click", ()=>{
          closeCmd();
          showPage(item.key);
        });
        cmdList.appendChild(btn);
      });
      return shown;
    }

    function openCmdPalette(){
      cmdBackdrop.classList.remove("hidden");
      cmdPalette.classList.remove("hidden");
      cmdActiveIndex = 0;
      cmdInput.value = "";
      renderCmd("");
      setTimeout(()=>cmdInput.focus(), 0);
    }
    function closeCmd(){
      cmdBackdrop.classList.add("hidden");
      cmdPalette.classList.add("hidden");
    }

    openCmd?.addEventListener("click", openCmdPalette);
    cmdClose?.addEventListener("click", closeCmd);
    cmdBackdrop?.addEventListener("click", closeCmd);

    window.addEventListener("keydown", (e)=>{
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const cmdK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k";
      if (cmdK){
        e.preventDefault();
        if (cmdPalette.classList.contains("hidden")) openCmdPalette();
        else closeCmd();
      }
      if (!cmdPalette.classList.contains("hidden")){
        if (e.key === "Escape"){ closeCmd(); }
        if (e.key === "ArrowDown"){ e.preventDefault(); cmdActiveIndex++; renderCmd(cmdInput.value); }
        if (e.key === "ArrowUp"){ e.preventDefault(); cmdActiveIndex--; if (cmdActiveIndex < 0) cmdActiveIndex = 0; renderCmd(cmdInput.value); }
        if (e.key === "Enter"){
          e.preventDefault();
          const shown = cmdItems.filter(i => i.label.includes(cmdInput.value.trim().toLowerCase()));
          if (!shown.length) return;
          const pick = shown[Math.min(cmdActiveIndex, shown.length-1)];
          closeCmd();
          showPage(pick.key);
        }
      }
    });

    cmdInput?.addEventListener("input", ()=>{
      cmdActiveIndex = 0;
      renderCmd(cmdInput.value);
    });

    // --------------------------
    // Mini deck modal
    // --------------------------
    const deckBackdrop = document.getElementById("deckBackdrop");
    const deckModal = document.getElementById("deckModal");
    const openDeck = document.getElementById("openDeck");
    const closeDeck = document.getElementById("closeDeck");

    function openDeckModal(){
      deckBackdrop.classList.remove("hidden");
      deckModal.classList.remove("hidden");
    }
    function closeDeckModal(){
      deckBackdrop.classList.add("hidden");
      deckModal.classList.add("hidden");
    }
    openDeck?.addEventListener("click", openDeckModal);
    closeDeck?.addEventListener("click", closeDeckModal);
    deckBackdrop?.addEventListener("click", closeDeckModal);

    // --------------------------
    // Detail modal
    // --------------------------
    const detailBackdrop = document.getElementById("detailBackdrop");
    const detailModal = document.getElementById("detailModal");
    const detailClose = document.getElementById("detailClose");
    const detailTitle = document.getElementById("detailTitle");
    const detailBody = document.getElementById("detailBody");

    function openDetail(title, html){
      detailTitle.textContent = title;
      detailBody.innerHTML = html;
      detailBackdrop.classList.remove("hidden");
      detailModal.classList.remove("hidden");
    }
    function closeDetail(){
      detailBackdrop.classList.add("hidden");
      detailModal.classList.add("hidden");
    }
    detailClose?.addEventListener("click", closeDetail);
    detailBackdrop?.addEventListener("click", closeDetail);

    // --------------------------
    // Work grid + filters
    // --------------------------
    const workData = [
      {id:"onboarding", tag:["platform","systems"], title:"Onboarding flow", desc:"Step hierarchy, states, and fast iteration loops."},
      {id:"landing", tag:["landing","motion"], title:"Landing sections", desc:"Readable structure with scroll-trigger reveals."},
      {id:"search", tag:["platform","systems"], title:"Search UI", desc:"Density tuned for scanning and decision-making."},
      {id:"billing", tag:["platform"], title:"Invoices & milestones", desc:"Clear status trails, predictable review flows."}
    ];
    let pinnedTag = "all";

    function renderWork(){
      const grid = document.getElementById("workGrid");
      if (!grid) return;
      grid.innerHTML = "";
      const filtered = pinnedTag === "all" ? workData : workData.filter(w => w.tag.includes(pinnedTag));
      filtered.forEach(w=>{
        const card = document.createElement("button");
        card.className = "reveal w-full border border-sky-200 bg-white p-5 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60";
        card.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">case</div>
              <div class="mt-1 text-lg font-[500] tracking-tight text-slate-900" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">${w.title}</div>
              <div class="mt-2 text-sm text-slate-700" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">${w.desc}</div>
              <div class="mt-4 flex flex-wrap gap-2">
                ${w.tag.map(t=>`<span class="border border-sky-200 bg-white px-2.5 py-1 text-xs text-slate-700" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${t}</span>`).join("")}
              </div>
            </div>
            <iconify-icon icon="solar:arrow-right-linear" width="18" class="text-slate-700" style="stroke-width:1.5;"></iconify-icon>
          </div>
        `;
        card.addEventListener("click", ()=>{
          openDetail(w.title, `
            <div class="grid gap-4">
              <div class="border border-sky-200 bg-sky-50 p-4">
                <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">summary</div>
                <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                  ${w.desc}
                </div>
              </div>
              <div class="border border-sky-200 bg-white p-4">
                <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">highlights</div>
                <ul class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                  <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Defined interaction states and hierarchy rules.</span></li>
                  <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Componentized patterns for speed and consistency.</span></li>
                  <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Motion tuned to support reading flow.</span></li>
                </ul>
              </div>
              <div class="border border-sky-200 bg-white p-4">
                <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">deliverables</div>
                <div class="mt-3 grid gap-2 sm:grid-cols-2">
                  <div class="border border-sky-200 bg-sky-50 p-3">
                    <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">doc</div>
                    <div class="mt-1 text-sm font-[500] tracking-tight text-slate-900" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">Component spec</div>
                    <div class="mt-1 text-xs text-slate-700" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">Props, states, and usage notes.</div>
                  </div>
                  <div class="border border-sky-200 bg-sky-50 p-3">
                    <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">ui</div>
                    <div class="mt-1 text-sm font-[500] tracking-tight text-slate-900" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">Screens + flows</div>
                    <div class="mt-1 text-xs text-slate-700" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">Key paths mapped end-to-end.</div>
                  </div>
                </div>
              </div>
            </div>
          `);
        });
        grid.appendChild(card);
      });
      observeReveals();
    }

    document.querySelectorAll(".tagBtn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        pinnedTag = btn.dataset.tag;
        document.querySelectorAll(".tagBtn").forEach(b=>{
          const active = b.dataset.tag === pinnedTag;
          b.classList.toggle("bg-sky-50", active);
        });
        renderWork();
      });
    });

    // --------------------------
    // Logs (work notes)
    // --------------------------
    const logs = {
      perf: {
        title: "Scroll motion without readability loss",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">approach</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Motion intensity is tied to scroll velocity, then softened with a spring-like smoothing. Content never blurs or scales; it simply translates subtly.
              </div>
            </div>
            <div class="border border-sky-200 bg-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">rules</div>
              <ul class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Prefer translateY / translate3d for GPU efficiency.</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Never animate font-size / line-height.</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Cap effects on fast scroll to avoid distraction.</span></li>
              </ul>
            </div>
          </div>
        `
      },
      hierarchy: {
        title: "Hierarchy-first layout decisions",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">principle</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Make reading order obvious before adding visual emphasis. Space is the primary tool; color is secondary.
              </div>
            </div>
            <div class="border border-sky-200 bg-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">checks</div>
              <div class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <div class="border border-sky-200 bg-sky-50 p-3">Headlines state the promise; subheads state the proof.</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Metadata stays in mono and never competes with titles.</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Actions align to the right on wide layouts; stack on mobile.</div>
              </div>
            </div>
          </div>
        `
      },
      stack: {
        title: "Stacked cards as section anchors",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">why</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Stacking/pinning creates a clear sense of progression while preserving scan-ability. It’s a navigation hint, not an animation trick.
              </div>
            </div>
            <div class="border border-sky-200 bg-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">implementation</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Use <span class="font-[500]">position: sticky</span> with small offsets per card; reduce translation to keep text stable.
              </div>
            </div>
          </div>
        `
      }
    };

    document.querySelectorAll(".logBtn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const key = btn.dataset.log;
        const entry = logs[key];
        if (!entry) return;
        openDetail(entry.title, entry.html);
      });
    });

    // --------------------------
    // Services detail
    // --------------------------
    const serviceDetails = {
      systems: {
        title: "Design systems",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">includes</div>
              <ul class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Design tokens: color, type scale, spacing, radii (kept square here).</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Core components with documented states.</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Usage rules to keep hierarchy consistent.</span></li>
              </ul>
            </div>
            <div class="border border-sky-200 bg-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">output</div>
              <div class="mt-2 grid gap-2 sm:grid-cols-2 text-sm" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <div class="border border-sky-200 bg-sky-50 p-3">Component inventory</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Token sheet</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Interaction spec</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Handoff notes</div>
              </div>
            </div>
          </div>
        `
      },
      landing: {
        title: "Landing pages",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">focus</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Sections that read in order: promise → proof → details → action. Motion is used to reinforce section boundaries and priority.
              </div>
            </div>
            <div class="border border-sky-200-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">deliverables</div>
              <ul class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Section map + content hierarchy</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Reusable components (pricing, FAQ, testimonials)</span></li>
                <li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 bg-sky-400 shrink-0"></span><span>Responsive layout rules</span></li>
              </ul>
            </div>
          </div>
        `
      },
      motion: {
        title: "Scroll motion",
        html: `
          <div class="grid gap-4">
            <div class="border border-sky-200 bg-sky-50 p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">what you get</div>
              <div class="mt-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                Subtle parallax and reveals tied to velocity — with caps, smoothing, and a quick toggle.
              </div>
            </div>
            <div class="border border-sky-200 bg-white p-4">
              <div class="text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">constraints</div>
              <div class="mt-2 grid gap-2 text-sm text-slate-800" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
                <div class="border border-sky-200 bg-sky-50 p-3">No blur effects; keep text crisp.</div>
                <div class="border border-sky-200 bg-sky-50 p-3">No scaling headings; avoid “wobble”.</div>
                <div class="border border-sky-200 bg-sky-50 p-3">Respect reduced-motion preferences.</div>
              </div>
            </div>
          </div>
        `
      }
    };

    document.querySelectorAll(".serviceBtn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const key = btn.dataset.service;
        const entry = serviceDetails[key];
        if (!entry) return;
        openDetail(entry.title, entry.html);
      });
    });

    // --------------------------
    // Scroll progress
    // --------------------------
    const progressBar = document.getElementById("progressBar");
    function updateProgress(){
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
      progressBar.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`;
    }
    window.addEventListener("scroll", updateProgress, {passive:true});
    updateProgress();

    // --------------------------
    // Reveal on scroll (IntersectionObserver)
    // --------------------------
    function observeReveals(){
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const els = document.querySelectorAll(".reveal");
      if (prefersReduced){
        els.forEach(el => {
          el.style.opacity = 1;
          el.style.transform = "none";
        });
        return;
      }

      els.forEach(el=>{
        if (el.dataset.revealInit) return;
        el.dataset.revealInit = "1";
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
        el.style.transition = "opacity 500ms ease, transform 650ms cubic-bezier(.2,.8,.2,1)";
      });

      const io = new IntersectionObserver((entries)=>{
        entries.forEach(ent=>{
          if (ent.isIntersecting){
            ent.target.style.opacity = 1;
            ent.target.style.transform = "translateY(0)";
            io.unobserve(ent.target);
          }
        });
      }, {threshold: 0.12, rootMargin: "0px 0px -8% 0px"});

      els.forEach(el=>{
        // only observe if not already fully shown
        if (getComputedStyle(el).opacity !== "1") io.observe(el);
      });
    }
    observeReveals();

    // --------------------------
    // Sticky stacked cards (home page)
    // --------------------------
    function initStackedCards(){
      const items = document.querySelectorAll(".stackItem");
      items.forEach((el, idx)=>{
        el.style.position = "sticky";
        el.style.top = `${92 + idx * 14}px`;
        el.style.zIndex = `${10 + idx}`;
      });
    }
    initStackedCards();

    // --------------------------
    // Velocity-based motion (traveller + parallax)
    // --------------------------
    const toggleScrollMode = document.getElementById("toggleScrollMode");
    const scrollModeLabel = document.getElementById("scrollModeLabel");
    const scrollModeDot = document.getElementById("scrollModeDot");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let motionEnabled = !prefersReduced;

    // persist locally
    try {
      const saved = localStorage.getItem("nn_motion");
      if (saved === "off") motionEnabled = false;
      if (saved === "on") motionEnabled = !prefersReduced;
    } catch {}

    function setMotionState(on){
      motionEnabled = on && !prefersReduced;
      if (scrollModeLabel) scrollModeLabel.textContent = motionEnabled ? "ON" : "OFF";
      if (scrollModeDot) scrollModeDot.classList.toggle("bg-sky-400", motionEnabled);
      if (scrollModeDot) scrollModeDot.classList.toggle("bg-slate-300", !motionEnabled);
      try { localStorage.setItem("nn_motion", motionEnabled ? "on" : "off"); } catch {}
    }
    setMotionState(motionEnabled);

    toggleScrollMode?.addEventListener("click", ()=>{
      setMotionState(!motionEnabled);
    });

    let lastY = window.scrollY;
    let lastT = performance.now();
    let vel = 0;          // px/ms
    let smoothVel = 0;    // smoothed
    let rafId = null;

    function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

    function tick(){
      const y = window.scrollY;
      const t = performance.now();
      const dy = y - lastY;
      const dt = Math.max(16, t - lastT);
      vel = dy / dt; // px per ms

      // smooth velocity: ease toward vel
      smoothVel += (vel - smoothVel) * 0.12;

      // intensity from velocity; keep subtle
      const intensity = clamp(Math.abs(smoothVel) * 180, 0, 10); // 0..10
      const dir = smoothVel >= 0 ? 1 : -1;

      const traveller = document.getElementById("traveller");
      if (traveller){
        if (motionEnabled){
          const translate = dir * intensity * 0.9;
          traveller.style.transform = `translate3d(0, ${translate}px, 0)`;
        } else {
          traveller.style.transform = "none";
        }
      }

      document.querySelectorAll(".parallax").forEach(el=>{
        const depth = parseFloat(el.dataset.depth || "0.15");
        if (motionEnabled){
          const tY = dir * intensity * depth * 6;
          el.style.transform = `translate3d(0, ${tY}px, 0)`;
        } else {
          el.style.transform = "none";
        }
      });

      lastY = y;
      lastT = t;
      rafId = requestAnimationFrame(tick);
    }

    // start loop
    rafId = requestAnimationFrame(tick);

    // --------------------------
    // Drill (3 levels)
    // --------------------------
    const drillData = [
      {
        id: "system",
        label: "System",
        desc: "Tokens, components, and rules.",
        modules: [
          { id: "tokens", label: "Tokens", desc: "Color, type, spacing.", items: [
            { id: "palette", label: "Palette sheet", desc: "Light-blue-only scale and usage." },
            { id: "type", label: "Type scale", desc: "Manrope + Plex Mono pairing." },
            { id: "spacing", label: "Spacing rules", desc: "Consistent rhythm for layout." }
          ]},
          { id: "components", label: "Components", desc: "Buttons, cards, inputs.", items: [
            { id: "buttons", label: "Button spec", desc: "States, focus rings, density." },
            { id: "cards", label: "Card patterns", desc: "No rounded corners, consistent borders." },
            { id: "forms", label: "Form spec", desc: "Error/disabled states and messaging." }
          ]}
        ]
      },
      {
        id: "landing",
        label: "Landing",
        desc: "Sections, copy, conversion.",
        modules: [
          { id: "structure", label: "Structure", desc: "Order and hierarchy.", items: [
            { id: "hero", label: "Hero map", desc: "Headline, proof, action." },
            { id: "proof", label: "Proof blocks", desc: "Grid cards + short claims." },
            { id: "cta", label: "CTA patterns", desc: "Primary/secondary actions." }
          ]},
          { id: "content", label: "Content", desc: "Voice and clarity.", items: [
            { id: "headlines", label: "Headlines", desc: "Promise-first writing." },
            { id: "microcopy", label: "Microcopy", desc: "Buttons, errors, hints." },
            { id: "faq", label: "FAQ set", desc: "Objections and concise answers." }
          ]}
        ]
      },
      {
        id: "motion",
        label: "Motion",
        desc: "Reveals, parallax, velocity.",
        modules: [
          { id: "reveals", label: "Reveals", desc: "Scroll-triggered entry.", items: [
            { id: "thresholds", label: "Threshold tuning", desc: "Avoid pop-in; reveal early." },
            { id: "durations", label: "Timing", desc: "Fast and quiet; no bounce." },
            { id: "reduced", label: "Reduced motion", desc: "Respect user preference." }
          ]},
          { id: "parallax", label: "Parallax", desc: "Depth without noise.", items: [
            { id: "depth", label: "Depth rules", desc: "Small offsets; cap intensity." },
            { id: "stack", label: "Stack behavior", desc: "Sticky offsets to imply progression." },
            { id: "velocity", label: "Velocity mapping", desc: "Tie intensity to scroll speed." }
          ]}
        ]
      }
    ];

    const l1 = document.getElementById("l1");
    const l2 = document.getElementById("l2");
    const l3 = document.getElementById("l3");
    const drillDetail = document.getElementById("drillDetail");
    const drillTitle = document.getElementById("drillTitle");
    const drillDesc = document.getElementById("drillDesc");
    const drillClear = document.getElementById("drillClear");

    let sel1 = null, sel2 = null, sel3 = null;

    function mkOption(label, meta, onClick, active=false){
      const btn = document.createElement("button");
      btn.className = "w-full border border-sky-200 bg-white px-4 py-3 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60 transition-colors";
      if (active) btn.classList.add("bg-sky-50");
      btn.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-sm font-[500] tracking-tight text-slate-900" style="font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">${label}</div>
            <div class="mt-1 text-xs text-slate-600" style="font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${meta}</div>
          </div>
          <iconify-icon icon="solar:arrow-right-linear" width="18" class="text-slate-700" style="stroke-width:1.5;"></iconify-icon>
        </div>
      `;
      btn.addEventListener("click", onClick);
      return btn;
    }

    function renderDrill(){
      if (!l1 || !l2 || !l3) return;

      l1.innerHTML = "";
      l2.innerHTML = "";
      l3.innerHTML = "";

      drillData.forEach(track=>{
        l1.appendChild(mkOption(track.label, track.desc, ()=>{
          sel1 = track.id;
          sel2 = null;
          sel3 = null;
          renderDrill();
        }, sel1 === track.id));
      });

      const track = drillData.find(t=>t.id === sel1);
      if (track){
        track.modules.forEach(mod=>{
          l2.appendChild(mkOption(mod.label, mod.desc, ()=>{
            sel2 = mod.id;
            sel3 = null;
            renderDrill();
          }, sel2 === mod.id));
        });
      }

      const mod = track?.modules.find(m=>m.id === sel2);
      if (mod){
        mod.items.forEach(it=>{
          l3.appendChild(mkOption(it.label, it.desc, ()=>{
            sel3 = it.id;
            // show detail
            if (drillDetail){
              drillDetail.classList.remove("hidden");
              drillTitle.textContent = `${track.label} → ${mod.label} → ${it.label}`;
              drillDesc.textContent = it.desc;
            }
          }, sel3 === it.id));
        });
      }

      if (!sel3 && drillDetail){
        drillDetail.classList.add("hidden");
      }
      observeReveals();
    }

    drillClear?.addEventListener("click", ()=>{
      sel1 = sel2 = sel3 = null;
      if (drillDetail) drillDetail.classList.add("hidden");
      renderDrill();
    });

    renderDrill();

    // --------------------------
    // Jump + copy email + form local save
    // --------------------------
    const jumpToWork = document.getElementById("jumpToWork");
    jumpToWork?.addEventListener("click", ()=>{
      const a = document.getElementById("anchor-work");
      a?.scrollIntoView({behavior:"smooth", block:"start"});
    });

    async function copyText(text){
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        document.body.removeChild(ta);
        return true;
      }
    }

    function flashButton(btn, label){
      const prev = btn.textContent;
      btn.textContent = label;
      setTimeout(()=>btn.textContent = prev, 900);
    }

    const email = "hello@noir-neon.agency";
    const copyEmail = document.getElementById("copyEmail");
    const copyEmail2 = document.getElementById("copyEmail2");

    copyEmail?.addEventListener("click", async ()=>{
      await copyText(email);
      flashButton(copyEmail, "Copied");
    });
    copyEmail2?.addEventListener("click", async ()=>{
      await copyText(email);
      flashButton(copyEmail2, "Copied");
    });

    const contactForm = document.getElementById("contactForm");
    const formToast = document.getElementById("formToast");
    contactForm?.addEventListener("submit", (e)=>{
      e.preventDefault();
      const fd = new FormData(contactForm);
      const payload = {
        name: fd.getAll("")[0] ?? null
      };
      // safer manual read (inputs have no name attrs in this demo)
      const inputs = contactForm.querySelectorAll("input, textarea");
      const values = Array.from(inputs).map(i=>i.value);
      try {
        localStorage.setItem("nn_contact_draft", JSON.stringify({values, ts: Date.now()}));
      } catch {}
      formToast?.classList.remove("hidden");
      setTimeout(()=>formToast?.classList.add("hidden"), 2400);
      contactForm.reset();
    });

    // --------------------------
    // Modal close on Esc
    // --------------------------
    window.addEventListenerkeydown", (e)=>{
      if (e.key !== "Escape") return;
      if (!detailModal.classList.contains("hidden")) closeDetail();
      if (!deckModal.classList.contains("hidden")) closeDeckModal();
      if (!cmdPalette.classList.contains("hidden")) closeCmd();
    });

    // --------------------------
    // Initial render
    // --------------------------
    renderWork();
    showPage("home");
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-x-clip">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-none bg-sky-200/55 blur-3xl"></div>
<div className="absolute top-28 -right-32 h-[30rem] w-[30rem] rounded-none bg-sky-100/60 blur-3xl"></div>
<div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-none bg-sky-200/35 blur-3xl"></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(2,132,199,0.35) 1px, rgba(255,255,255,0) 0)', backgroundSize: '28px 28px'}}></div>
</div>

<header className="sticky top-0 z-50 border-b border-sky-200/70 bg-white/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center border border-sky-200/80 bg-white">
<span className="font-[600] tracking-tight text-sm text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>NN</span>
</div>
<div className="leading-tight">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
              NOIR/NEON
            </div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
              product &amp; systems studio
            </div>
</div>
</div>
<nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
<button className="navBtn rounded-none px-3 py-2 text-sm font-[500] text-slate-700 hover:bg-sky-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="home" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Home</button>
<button className="navBtn rounded-none px-3 py-2 text-sm font-[500] text-slate-700 hover:bg-sky-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="work" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Work</button>
<button className="navBtn rounded-none px-3 py-2 text-sm font-[500] text-slate-700 hover:bg-sky-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="services" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Services</button>
<button className="navBtn rounded-none px-3 py-2 text-sm font-[500] text-slate-700 hover:bg-sky-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="about" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>About</button>
<button className="navBtn rounded-none px-3 py-2 text-sm font-[500] text-slate-700 hover:bg-sky-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Contact</button>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 border border-sky-200/80 bg-white px-3 py-2 text-xs text-slate-700 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="openCmd" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="text-slate-500">Cmd</span>
<span className="border border-sky-200 bg-white px-1.5 py-0.5">K</span>
</button>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center border border-sky-200/80 bg-white p-2.5 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="menuBtn">
<iconify-icon className="text-slate-800" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="md:hidden hidden border-t border-sky-200/70 bg-white/80 backdrop-blur-xl" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
<div className="grid gap-2">
<button className="navBtn w-full text-left border border-sky-200/80 bg-white px-3 py-2.5 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="home" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Home</button>
<button className="navBtn w-full text-left border border-sky-200/80 bg-white px-3 py-2.5 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="work" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Work</button>
<button className="navBtn w-full text-left border border-sky-200/80 bg-white px-3 py-2.5 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="services" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Services</button>
<button className="navBtn w-full text-left border border-sky-200/80 bg-white px-3 py-2.5 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="about" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>About</button>
<button className="navBtn w-full text-left border border-sky-200/80 bg-white px-3 py-2.5 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Contact</button>
</div>
</div>
</div>
</header>

<div aria-hidden="true" className="fixed inset-0 z-[80] hidden bg-slate-900/30 backdrop-blur-sm" id="cmdBackdrop"></div>
<div className="fixed left-1/2 top-1/2 z-[90] hidden w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 border border-sky-200/80 bg-white/85 shadow-2xl shadow-slate-900/10 backdrop-blur-xl" id="cmdPalette">
<div className="flex items-center gap-3 border-b border-sky-200/70 px-4 py-3">
<iconify-icon className="text-slate-700" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" id="cmdInput" placeholder="Type: home, work, services, about, contact…" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}} type="text"/>
<button aria-label="Close" className="p-2 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="cmdClose">
<iconify-icon className="text-slate-700" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="p-2">
<div className="px-2 pb-2 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
          Enter opens the highlighted route. Esc closes.
        </div>
<div className="grid gap-2 p-2" id="cmdList"></div>
</div>
</div>

<div className="fixed left-0 top-0 z-[70] h-0.5 w-full bg-transparent">
<div className="h-full w-0 bg-gradient-to-r from-sky-400 to-sky-200" id="progressBar"></div>
</div>
<main className="relative" id="app">

<section className="page block" id="page-home">
<section className="relative min-h-[100vh] overflow-hidden">
<div className="mx-auto grid max-w-7xl items-end gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-12 lg:pb-16 lg:pt-14">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 border border-sky-200/80 bg-white px-3 py-1.5">
<span className="h-1.5 w-1.5 rounded-none bg-sky-400"></span>
<span className="text-xs text-slate-700" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                  design systems • motion • product delivery
                </span>
</div>
<h1 className="mt-6 text-4xl font-[500] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Freelance work, packaged like a product.
              </h1>
<p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Clear scope. Fast iterations. Interfaces that stay readable. Motion that explains hierarchy instead of decorating it.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="navBtn inline-flex items-center justify-center gap-2 border border-sky-300 bg-sky-200/70 px-5 py-3 text-sm font-[600] text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-900" icon="solar:chat-square-call-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                  Start a project
                </button>
<button className="inline-flex items-center justify-center gap-2 border border-sky-200/80 bg-white px-5 py-3 text-sm font-[500] text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="openDeck" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-800" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                  Open mini deck
                </button>
<div className="sm:ml-auto flex items-center gap-3 border border-sky-200/80 bg-white px-4 py-3">
<div className="flex -space-x-2">
<div className="h-7 w-7 border border-sky-200 bg-sky-100"></div>
<div className="h-7 w-7 border border-sky-200 bg-sky-50"></div>
<div className="h-7 w-7 border border-sky-200 bg-white"></div>
</div>
<div className="leading-tight">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      typical kickoff
                    </div>
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                      9 days
                    </div>
</div>
</div>
</div>
<div className="mt-10 grid gap-3 sm:grid-cols-3">
<div className="reveal border border-sky-200/80 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>delivery</div>
<iconify-icon className="text-sky-700" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>iteration-first</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>weekly demos, tight feedback loops</div>
</div>
<div className="reveal border border-sky-200/80 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>motion</div>
<iconify-icon className="text-sky-700" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>scroll-driven</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>reveals that explain sections</div>
</div>
<div className="reveal border border-sky-200/80 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>handoff</div>
<iconify-icon className="text-sky-700" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>clean &amp; documented</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>components, guidelines, notes</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative">
<div className="will-change-transform" id="traveller">
<div className="relative border border-sky-200/80 bg-white p-4 shadow-2xl shadow-slate-900/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-none bg-sky-400"></div>
<div className="text-xs text-slate-700" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                          active sprint
                        </div>
</div>
<span className="border border-sky-200 bg-white px-2 py-1 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                        v3.2
                      </span>
</div>
<div className="mt-4 grid gap-3">
<div className="reveal parallax stackCard border border-sky-200 bg-white p-4" data-depth="0.18">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Design System</div>
<div className="mt-1 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>tokens / components / usage</div>
</div>
<iconify-icon className="text-sky-700" icon="solar:widget-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-1.5 flex-1 bg-sky-100 overflow-hidden">
<div className="h-full w-[76%] bg-sky-400"></div>
</div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>76%</div>
</div>
</div>
<div className="reveal parallax stackCard border border-sky-200 bg-white p-4" data-depth="0.26">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Landing Pages</div>
<div className="mt-1 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>sections / copy / conversion</div>
</div>
<iconify-icon className="text-sky-700" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-1.5 flex-1 bg-sky-100 overflow-hidden">
<div className="h-full w-[61%] bg-sky-400"></div>
</div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>61%</div>
</div>
</div>
<div className="reveal parallax stackCard border border-sky-200 bg-white p-4" data-depth="0.12">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Motion</div>
<div className="mt-1 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>scroll / velocity / parallax</div>
</div>
<iconify-icon className="text-sky-700" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-1.5 flex-1 bg-sky-100 overflow-hidden">
<div className="h-full w-[88%] bg-sky-400"></div>
</div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>88%</div>
</div>
</div>
</div>
<div className="mt-4 border border-sky-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                          scroll mode
                        </div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-none bg-sky-400"></span>
<span className="text-xs text-slate-700" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                            velocity
                          </span>
</div>
</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        smooth, responsive motion
                      </div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        motion reacts to speed; content stays readable.
                      </div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-16 left-6 h-10 w-10 border border-sky-200 bg-white opacity-0" id="anchor-home"></div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
<div className="reveal flex flex-col items-start justify-between gap-3 border border-sky-200/80 bg-white p-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center border border-sky-200 bg-white">
<iconify-icon className="text-slate-800" icon="solar:mouse-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Velocity scroll</div>
<div className="text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Toggle scroll feel + motion intensity. Local only.</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 border border-sky-200 bg-white px-4 py-2 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="toggleScrollMode" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-none bg-sky-400" id="scrollModeDot"></span>
<span id="scrollModeLabel">ON</span>
</button>
<button className="inline-flex items-center gap-2 border border-sky-200 bg-white px-4 py-2 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="jumpToWork" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<iconify-icon className="text-slate-800" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  go
                </button>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
<div className="grid items-end gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<h2 className="text-2xl font-[500] tracking-tight text-slate-900 sm:text-3xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Recent builds
                </h2>
<p className="mt-3 text-sm leading-relaxed text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Scroll to stack cards. Each one pins briefly, then hands off to the next.
                </p>
<div className="mt-6">
<button className="navBtn inline-flex items-center gap-2 border border-sky-200 bg-white px-5 py-3 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="work" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-800" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    View case studies
                  </button>
</div>
<div className="mt-10 h-10 w-10 border border-sky-200 bg-white opacity-0" id="anchor-work"></div>
</div>
<div className="lg:col-span-8">
<div className="relative" id="stackWrap">
<div className="stackItem reveal border border-sky-200 bg-white p-6 shadow-xl shadow-slate-900/5" data-stack="0">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>01 / platform</div>
<iconify-icon className="text-sky-700" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Freelancer onboarding</h3>
<p className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                      Structured steps, clear states, and motion that shows progress without noise.
                    </p>
</div>
<div className="stackItem reveal border border-sky-200 bg-white p-6 shadow-xl shadow-slate-900/5" data-stack="1">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>02 / marketplace</div>
<iconify-icon className="text-sky-700" icon="solar:widget-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Search &amp; filtering</h3>
<p className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                      Lightweight density, readable metadata, and consistent interaction patterns.
                    </p>
</div>
<div className="stackItem reveal border border-sky-200 bg-white p-6 shadow-xl shadow-slate-900/5" data-stack="2">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>03 / payments</div>
<iconify-icon className="text-sky-700" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Invoices &amp; milestones</h3>
<p className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                      Clear line items, status trails, and predictable review flows.
                    </p>
</div>
</div>

<div className="mt-6 reveal border border-sky-200 bg-white p-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>interactive</div>
<div className="mt-2 text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        Hierarchical drill
                      </div>
<div className="mt-1 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        Choose a track → pick a module → open a deliverable.
                      </div>
</div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      3 levels
                    </div>
</div>
<div className="mt-5 grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>level 1</div>
<div className="mt-2 grid gap-2" id="l1"></div>
</div>
<div className="lg:col-span-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>level 2</div>
<div className="mt-2 grid gap-2" id="l2"></div>
</div>
<div className="lg:col-span-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>level 3</div>
<div className="mt-2 grid gap-2" id="l3"></div>
</div>
</div>
<div className="mt-5 hidden border border-sky-200 bg-sky-50 p-4" id="drillDetail">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>selection</div>
<div className="mt-1 text-sm font-[500] tracking-tight text-slate-900" id="drillTitle" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}></div>
<div className="mt-1 text-xs text-slate-700" id="drillDesc" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}></div>
</div>
<button className="inline-flex items-center gap-2 border border-sky-200 bg-white px-3 py-2 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="drillClear" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<iconify-icon className="text-slate-800" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        clear
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative">
<div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
<div className="reveal border border-sky-200 bg-sky-50 p-6 sm:p-8">
<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-2xl font-[500] tracking-tight text-slate-900 sm:text-3xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                    Ready to ship a clean landing?
                  </h2>
<p className="mt-3 text-sm text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                    Tight hierarchy, scroll-trigger reveals, and components that scale.
                  </p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<button className="navBtn inline-flex items-center justify-center gap-2 border border-sky-300 bg-sky-200/70 px-5 py-3 text-sm font-[600] text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-900" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Talk to us
                  </button>
<button className="inline-flex items-center justify-center gap-2 border border-sky-200 bg-white px-5 py-3 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="copyEmail" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-900" icon="solar:copy-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Copy email
                  </button>
</div>
</div>
<div className="mt-4 text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                email: hello@noir-neon.agency
              </div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-work">
<section className="relative min-h-[100vh]">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h1 className="text-3xl font-[500] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Work
                </h1>
<p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Case studies with constraints, structure, and outcomes.
                </p>
<div className="mt-8 border border-sky-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>filter</div>
<div className="text-xs text-slate-500" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>click to pin</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="tagBtn border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-tag="all" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>all</button>
<button className="tagBtn border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-tag="platform" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>platform</button>
<button className="tagBtn border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-tag="landing" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>landing</button>
<button className="tagBtn border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-tag="motion" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>motion</button>
<button className="tagBtn border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-tag="systems" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>systems</button>
</div>
</div>
<div className="mt-6">
<button className="navBtn inline-flex items-center gap-2 border border-sky-300 bg-sky-200/70 px-5 py-3 text-sm font-[600] text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-900" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Book a scoping call
                  </button>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2" id="workGrid"></div>
<div className="mt-6 reveal border border-sky-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                      Notes
                    </div>
<div className="text-xs text-slate-500" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      click entries
                    </div>
</div>
<div className="mt-4 grid gap-2">
<button className="logBtn w-full border border-sky-200 bg-white px-4 py-3 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-log="perf">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>note</div>
<div className="mt-1 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Scroll motion without readability loss</div>
</div>
<iconify-icon className="text-slate-700" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</button>
<button className="logBtn w-full border border-sky-200 bg-white px-4 py-3 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-log="hierarchy">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>note</div>
<div className="mt-1 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Hierarchy-first layout decisions</div>
</div>
<iconify-icon className="text-slate-700" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</button>
<button className="logBtn w-full border border-sky-200 bg-white px-4 py-3 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-log="stack">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>note</div>
<div className="mt-1 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Stacked cards as section anchors</div>
</div>
<iconify-icon className="text-slate-700" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</button>
</div>
</div>
<div className="mt-10 h-10 w-10 border border-sky-200 bg-white opacity-0" id="anchor-contact"></div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-services">
<section className="relative min-h-[100vh]">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<h1 className="text-3xl font-[500] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Services
                </h1>
<p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Modular engagements you can mix, match, and extend.
                </p>
<div className="mt-8 reveal border border-sky-200 bg-white p-5">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                        typical deliverable
                      </div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        “sections that read in order”
                      </div>
<div className="mt-1 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                        Structure, copy, and interaction hierarchy stay aligned.
                      </div>
</div>
<iconify-icon className="text-sky-700" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<button className="navBtn inline-flex items-center justify-center gap-2 border border-sky-200 bg-white px-5 py-3 text-sm font-[500] text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="work" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-800" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    See work
                  </button>
<button className="navBtn inline-flex items-center justify-center gap-2 border border-sky-300 bg-sky-200/70 px-5 py-3 text-sm font-[600] text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-route="contact" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<iconify-icon className="text-slate-900" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Get an estimate
                  </button>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4">
<button className="serviceBtn reveal w-full border border-sky-200 bg-white p-5 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-service="systems">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Design systems</div>
<div className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                          Tokens, components, and usage rules that keep shipping consistent.
                        </div>
</div>
<iconify-icon className="text-sky-700" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</button>
<button className="serviceBtn reveal w-full border border-sky-200 bg-white p-5 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-service="landing">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Landing pages</div>
<div className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                          Scroll sections, conversion structure, and consistent component patterns.
                        </div>
</div>
<iconify-icon className="text-sky-700" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</button>
<button className="serviceBtn reveal w-full border border-sky-200 bg-white p-5 text-left hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" data-service="motion">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-lg font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Scroll motion</div>
<div className="mt-2 text-sm text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                          Parallax, reveals, and velocity-based motion that stays subtle.
                        </div>
</div>
<iconify-icon className="text-sky-700" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</button>
</div>
<div className="mt-10 h-10 w-10 border border-sky-200 bg-white opacity-0" id="anchor-services"></div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-about">
<section className="relative min-h-[100vh]">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<h1 className="text-3xl font-[500] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  About
                </h1>
<p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  A small studio with a product mindset: define hierarchy, build components, ship fast.
                </p>
</div>
<div className="lg:col-span-7">
<div className="reveal border border-sky-200 bg-white p-6">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                    principles
                  </div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="border border-sky-200 bg-white p-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Hierarchy wins</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Structure first, visuals second.</div>
</div>
<div className="border border-sky-200 bg-white p-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Motion explains</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Animation reflects intent and state.</div>
</div>
<div className="border border-sky-200 bg-white p-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Components scale</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Reusable patterns over one-offs.</div>
</div>
<div className="border border-sky-200 bg-white p-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Less noise</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Subtle contrast, clear typography.</div>
</div>
</div>
</div>
<div className="mt-10 h-10 w-10 border border-sky-200 bg-white opacity-0" id="anchor-about2"></div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-contact">
<section className="relative min-h-[100vh]">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<h1 className="text-3xl font-[500] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Contact
                </h1>
<p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                  Share scope, timeline, and constraints. We’ll reply with a short plan.
                </p>
<div className="mt-6 border border-sky-200 bg-sky-50 p-5">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>email</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>hello@noir-neon.agency</div>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-2 border border-sky-200 bg-white px-4 py-2 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="copyEmail2" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<iconify-icon className="text-slate-800" icon="solar:copy-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                      copy
                    </button>
<a className="inline-flex items-center gap-2 border border-sky-200 bg-white px-4 py-2 text-xs text-slate-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="mailto:hello@noir-neon.agency" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<iconify-icon className="text-slate-800" icon="solar:chat-square-call-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                      email
                    </a>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="reveal border border-sky-200 bg-white p-6" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>name</span>
<input className="border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60" placeholder="Your name" required="" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}/>
</label>
<label className="grid gap-2">
<span className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>email</span>
<input className="border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60" placeholder="you@company.com" required="" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}} type="email"/>
</label>
<label className="grid gap-2 sm:col-span-2">
<span className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>message</span>
<textarea className="border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60" placeholder="What are you building? Timeline? Constraints?" required="" rows="5" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}></textarea>
</label>
</div>
<div className="mt-4 flex items-center justify-between gap-3">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
                      reply within 1–2 business days
                    </div>
<button className="inline-flex items-center gap-2 border border-sky-300 bg-sky-200/70 px-5 py-3 text-sm font-[600] text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}} type="submit">
<iconify-icon className="text-slate-900" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                      Send
                    </button>
</div>
</form>
<div className="mt-4 hidden border border-sky-200 bg-sky-50 p-4" id="formToast">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Message saved locally</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>This is a demo form. Hook it to your endpoint when ready.</div>
</div>
</div>
</div>
</div>
</section>
</section>
</main>

<div className="fixed inset-0 z-[85] hidden bg-slate-900/25 backdrop-blur-sm" id="deckBackdrop"></div>
<div className="fixed left-1/2 top-1/2 z-[90] hidden w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-sky-200 bg-white shadow-2xl shadow-slate-900/10" id="deckModal">
<div className="flex items-center justify-between border-b border-sky-200 px-5 py-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Mini deck</div>
<button aria-label="Close deck" className="p-2 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="closeDeck">
<iconify-icon className="text-slate-700" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="grid gap-3 sm:grid-cols-3">
<div className="border border-sky-200 bg-white p-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>scope</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>tight</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>small, shippable units</div>
</div>
<div className="border border-sky-200 bg-white p-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>delivery</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>fast</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>weekly progress</div>
</div>
<div className="border border-sky-200 bg-white p-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>handoff</div>
<div className="mt-2 text-sm font-[500] tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>clean</div>
<div className="mt-1 text-xs text-slate-700" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>components + notes</div>
</div>
</div>
<div className="mt-4 border border-sky-200 bg-sky-50 p-4">
<div className="text-xs text-slate-600" style={{fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>tip</div>
<div className="mt-1 text-sm text-slate-800" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            Use <span className="font-[500]">Cmd K</span> to navigate quickly.
          </div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[85] hidden bg-slate-900/25 backdrop-blur-sm" id="detailBackdrop"></div>
<div className="fixed left-1/2 top-1/2 z-[90] hidden w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-sky-200 bg-white shadow-2xl shadow-slate-900/10" id="detailModal">
<div className="flex items-center justify-between border-b border-sky-200 px-5 py-4">
<div className="text-sm font-[500] tracking-tight text-slate-900" id="detailTitle" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Detail</div>
<button aria-label="Close detail" className="p-2 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300/60" id="detailClose">
<iconify-icon className="text-slate-700" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="p-5" id="detailBody"></div>
</div>
</div>


    </>
  );
}
