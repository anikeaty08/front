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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



/* ============ DATA ============ */
const CLIENTS = [
  { id:"el", name:"Electric Loft", space:"Electric Loft", tasks:[
    { id:"el1", name:"Set up venue for today's event", pri:"u", due:"today", section:"Venue — Today", note:"Polish the floor first, before any furniture goes down.", subs:[
      {id:"el1a",name:"Polish the upstairs floor (do this first)"},
      {id:"el1b",name:"Mop the staircase"},
      {id:"el1c",name:"Set up tables and chairs (after the floor)"},
      {id:"el1d",name:"Set up pipe and drape"},
      {id:"el1e",name:"Put linens on all tables"},
      {id:"el1f",name:"Position all trash bags"},
      {id:"el1g",name:"Stock restrooms — toilet paper + paper towels"},
      {id:"el1h",name:"Clear the fridge of ice (one bag OK to leave)"},
      {id:"el1i",name:"Buy air freshener"} ]},
    { id:"el2", name:"10:00 AM venue walkthrough", pri:"u", due:"today", section:"Venue — Today", note:"Conflicts with the CA Greenworks board meeting at 10:00 — decide who covers it." },
    { id:"el3", name:"Text today's scheduled event", pri:"u", due:"today", section:"Venue — Today" },
    { id:"el4", name:"Finalize pages + update review section (all pages)", pri:"n", section:"Website" },
    { id:"el5", name:"Update vendor page", pri:"n", section:"Website" },
    { id:"el6", name:"Run QA — verify everything connected + working", pri:"h", section:"Website", note:"Do this last, after the page work and before any promo goes out." },
    { id:"el7", name:"Prep socials (new website + vendor signups)", pri:"n", section:"Website", note:"Stage now; push only after QA confirms the site is clean." },
    { id:"el8", name:"Port SEO checklist + strategy into ClickUp", pri:"n", section:"Website" },
    { id:"el9", name:"Connect Claude to Nurturely via API", pri:"n", section:"Website" } ]},

  { id:"eg", name:"Evergreen OC", space:"Evergreen OC", tasks:[
    { id:"eg1", name:"Submit A2P verification", pri:"h" },
    { id:"eg2", name:"Set up Google review reply manager", pri:"n" },
    { id:"eg3", name:"Provide current Google review report (baseline)", pri:"n", note:"Before-picture to show the lift once review requests start firing." },
    { id:"eg4", name:"Complete landing page (convert template → Elementor JSON)", pri:"n" },
    { id:"eg5", name:"Set up + test Meadow integration", pri:"n" } ]},

  { id:"sg", name:"Sage Event Space", space:"TEMP list (move to own space)", parked:true, tasks:[
    { id:"sg1", name:"Submit A2P verification", pri:"h" },
    { id:"sg2", name:"Load the event snapshot (do first)", pri:"n", note:"The foundation — workflows, pipeline, and payments all build on it." },
    { id:"sg3", name:"Update all workflows with their offer", pri:"n" },
    { id:"sg4", name:"Set up pipeline + payment automations", pri:"n" },
    { id:"sg5", name:"Update event-space pricing on the website", pri:"n", note:"Keep matched to the offer in the workflows." },
    { id:"sg6", name:"Set up the walkthrough", pri:"n" },
    { id:"sg7", name:"Set up the next training call", pri:"n", note:"Book after the build is live, so you train on a working system." } ]},

  { id:"fz", name:"Fraztax", space:"Fraztax", tasks:[
    { id:"fz1", name:"Submit A2P verification", pri:"h" },
    { id:"fz2", name:"Contact chat support — email visibility / permissions", pri:"h", note:"Ask both: (1) can admins restrict which users see emails from specific senders? (2) can an admin send email AS a user, or is it one shared inbox?" },
    { id:"fz3", name:"Create automation workflows", pri:"n" },
    { id:"fz4", name:"Identify the pipeline", pri:"n", note:"Map this before the workflows — they reference the stages." },
    { id:"fz5", name:"Publish the site", pri:"h", note:"Publish only after the pre-publish steps below.", subs:[
      {id:"fz5a",name:"Create the forms + connect them to the new site"},
      {id:"fz5b",name:"Load the resources page on the Vibe builder"},
      {id:"fz5c",name:"Update logo — name: Fraztax, subtitle: Taxes and Accounting"},
      {id:"fz5d",name:"Publish the site"} ]} ]},

  { id:"cg", name:"California Greenworks", space:"California Greenworks", tasks:[
    { id:"cg1", name:"Submit website to Mike & Nancy for review", pri:"u", due:"today", note:"Send before the 10:00 board meeting today." },
    { id:"cg2", name:"Submit A2P verification", pri:"h" },
    { id:"cg3", name:"Migrate email list: Constant Contact → Nurturely", pri:"h", subs:[
      {id:"cg3a",name:"Export from Constant Contact with the right Nurturely tagging (first)"},
      {id:"cg3b",name:"Import the CSV into Nurturely"} ]} ]},

  { id:"rf", name:"Rockford Ave", space:"Rockford Ave", tasks:[
    { id:"rf1", name:"Finalize + publish site (unlocks IDX)", pri:"h", note:"Publishing triggers IDX approval — don't sit on it once ready.", subs:[
      {id:"rf1a",name:"Finalize the site + update the About page"},
      {id:"rf1b",name:"Modify the landing pages for each agent"},
      {id:"rf1c",name:"Update all agent images"},
      {id:"rf1d",name:"Update logo in the menu header (visible or removed)"},
      {id:"rf1e",name:"Ensure all emails are connected to the site"},
      {id:"rf1f",name:"Connect the IDX"},
      {id:"rf1g",name:"Publish live → kicks off IDX approval"} ]},
    { id:"rf2", name:"Audit Follow Up Boss → identify Nurturely optimizations", pri:"n", note:"Do this first on the CRM side — it tells you what to build." },
    { id:"rf3", name:"Build Nurturely workflows + automations (Stacey + agents)", pri:"n" },
    { id:"rf4", name:"Create pipelines", pri:"n" } ]},

  { id:"gg", name:"G&G Boxing", space:"GNG Boxing", tasks:[
    { id:"gg1", name:"Get site approved and live today", pri:"u", due:"today", subs:[
      {id:"gg1a",name:"Draft + send the review email"},
      {id:"gg1b",name:"Get them on a call for approval"},
      {id:"gg1c",name:"Publish the site live on Nurturely"},
      {id:"gg1d",name:"Verify it's live and working"} ]},
    { id:"gg2", name:"Create new payment link (test before go-live)", pri:"h", due:"today" },
    { id:"gg3", name:"Member signup / cancellation flow", pri:"n" },
    { id:"gg4", name:"Cancel old SiteGround subscription", pri:"h", note:"Only after the new site is confirmed live — otherwise downtime." } ]},

  { id:"sl", name:"Sweat Logic", space:"Sweat Logic", tasks:[
    { id:"sl1", name:"Content pass across the site", pri:"n", note:"Carry the same humanized standard into the new pages too.", subs:[
      {id:"sl1a",name:"Update all pages"},
      {id:"sl1b",name:"Remove the AI hyphens (em-dashes)"},
      {id:"sl1c",name:"Correct messaging on the product / service cards"} ]},
    { id:"sl2", name:"Add events page", pri:"n" },
    { id:"sl3", name:"Add coach page + coach training page", pri:"n" },
    { id:"sl4", name:"Embed new images across the site", pri:"n" },
    { id:"sl5", name:"Connect payment links to wellness platform", pri:"n" } ]},

  { id:"rc", name:"Randy Casango — Foundry", space:"Foundry", tasks:[
    { id:"rc1", name:"Submit A2P verification", pri:"h" },
    { id:"rc2", name:"Schedule Nurturely onboarding", pri:"n" },
    { id:"rc3", name:"Create sitemap for full site (do first)", pri:"n", note:"The blueprint — defines what gets built." },
    { id:"rc4", name:"Build landing page + full site", pri:"n", note:"Flyer not yet uploaded — drop it in chat when ready.", subs:[
      {id:"rc4a",name:"Reposition her flyer for web (visual anchor)"},
      {id:"rc4b",name:"Add imagery / photos across the site"} ]} ]},

  { id:"kb", name:"KannaBeast", space:"Kanna Beast", tasks:[
    { id:"kb1", name:"Export Kive images → convert HEIC to JPEG", pri:"n", note:"Do early — unblocks the product/design work. (Confirm product name: 'bait'?)" },
    { id:"kb2", name:"Pull Klaviyo report", pri:"n", note:"Do before optimizing — tells you what to build." },
    { id:"kb3", name:"Run analytics report", pri:"n" },
    { id:"kb4", name:"Update + optimize Klaviyo (off the report)", pri:"n" },
    { id:"kb5", name:"Product concepts and designs", pri:"n" },
    { id:"kb6", name:"Write + optimize blogs from the blog strategy", pri:"n" },
    { id:"kb7", name:"Email campaigns (shape off Klaviyo report)", pri:"n" } ]},

  { id:"ys", name:"Yellow School — Fallon", space:"Mason Aces", tasks:[
    { id:"ys1", name:"Create social media post", pri:"n" },
    { id:"ys2", name:"Optimize Google Business Profile", pri:"n", note:"Fold into the SEO strategy as a local pillar." },
    { id:"ys3", name:"Complete website resize + optimize images", pri:"n" },
    { id:"ys4", name:"Create SEO strategy", pri:"n", note:"The umbrella that GMB + technical cleanup feed into." } ]},

  { id:"bv", name:"Bigger Vision Agency", space:"Bigger Vision Agency", tasks:[
    { id:"bv1", name:"Connect all APIs to the cloud (for reporting)", pri:"h", note:"Your Railway / SiteScore direction — off the local Mac Mini." },
    { id:"bv2", name:"Get JJ's website live", pri:"h" },
    { id:"bv3", name:"Get Edgar's Gravity Excel website live", pri:"h" },
    { id:"bv4", name:"Contact Ronnie for event details (do first)", pri:"h", note:"Confirms the booth and shapes the presentation." },
    { id:"bv5", name:"Pay for Nurturely booth (with Ronnie)", pri:"n" },
    { id:"bv6", name:"Presentation strategy for June 5th", pri:"h", due:"jun5" },
    { id:"bv7", name:"Schedule call with Melody (Nurturely demo)", pri:"n" },
    { id:"bv8", name:"Onboarding — Steve's client", pri:"n" },
    { id:"bv9", name:"Onboarding — Steve's sister", pri:"n" },
    { id:"bv10", name:"Invoice Chi-town + launch trader campaign automation", pri:"n" } ]},
];

const CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 12.5l5 5 10-11" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const STORE_KEY = "bva-agenda-state-live";

/* ============ LIVE SYNC STORE ============ */
let bucketId = window.location.hash.substring(1) || localStorage.getItem("bva-last-bucket") || "";

const Store = {
  async load() {
    if (bucketId) {
      localStorage.setItem("bva-last-bucket", bucketId);
      if (window.location.hash.substring(1) !== bucketId) {
        window.history.replaceState(null, null, `#${bucketId}`);
      }
      try {
        const res = await fetch(`https://kvdb.io/${bucketId}/state`);
        if (res.ok) {
          const txt = await res.text();
          if (txt) {
            const parsed = JSON.parse(txt);
            localStorage.setItem(STORE_KEY, txt);
            return parsed;
          }
        }
      } catch(e) { console.warn("Live sync check failed", e); }
    }
    // Fallback locally
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch(e) { return {}; }
  },

  async save(s) {
    const str = JSON.stringify(s);
    try { localStorage.setItem(STORE_KEY, str); } catch(e){}

    if (!bucketId) {
      try {
        const res = await fetch('https://kvdb.io/', { method: 'POST' });
        if (res.ok) {
          bucketId = await res.text();
          localStorage.setItem("bva-last-bucket", bucketId);
          window.history.replaceState(null, null, `#${bucketId}`);
        } else return false;
      } catch(e) { return false; }
    }

    if (bucketId) {
      try {
        const res = await fetch(`https://kvdb.io/${bucketId}/state`, {
          method: 'POST', body: str
        });
        return res.ok;
      } catch(e) { return false; }
    }
    return false;
  }
};

/* ============ STATE ============ */
let state = {};
let active = "today";
let saving = false;
let lastLocal = 0;
let lastSerialized = "{}";

/* ============ HELPERS ============ */
const allTasks   = () => CLIENTS.flatMap(c => c.tasks);
const leavesOf   = (t) => (t.subs && t.subs.length) ? t.subs : [t];
const clientLeaves = (c) => c.tasks.flatMap(leavesOf);
const todayTasks = () => CLIENTS.flatMap(c => c.tasks.filter(t => t.due === "today").map(t => ({...t, _client:c.name})));
const todayLeaves = () => todayTasks().flatMap(leavesOf);

function progressOf(leaves){ const total = leaves.length; const done = leaves.filter(l => state[l.id]).length; return {done, total, pct: total ? done/total : 0}; }
function taskDone(t){ return leavesOf(t).every(l => state[l.id]); }
function taskPartial(t){ const lv = leavesOf(t); return !!t.subs && lv.some(l => state[l.id]) && !lv.every(l => state[l.id]); }
function clientProgress(c){ return progressOf(clientLeaves(c)); }
function overallProgress(){ return progressOf(CLIENTS.flatMap(clientLeaves)); }
function clientHasToday(c){ return c.tasks.some(t => t.due === "today" && !taskDone(t)); }
function clientHasHigh(c){ return c.tasks.some(t => t.pri === "h" && !taskDone(t)); }

function badgesFor(t){
  let h = "";
  if(t.due === "today") h += '<span class="badge today">TODAY</span>';
  else if(t.due === "jun5") h += '<span class="badge date">JUN 5</span>';
  if(t.pri === "h" && t.due !== "today") h += '<span class="badge high">HIGH</span>';
  return h;
}
function setSync(cls, txt){ const s = document.getElementById("sync"); if(!s) return; s.className = "sync" + (cls ? " "+cls : ""); document.getElementById("syncTxt").textContent = txt; }

/* ============ SIDEBAR ============ */
function renderNav(){
  const nav = document.getElementById("nav");
  const td = todayLeaves();
  const tdDone = td.filter(l => state[l.id]).length;
  let h = '<div class="nav-head">Priority</div>';
  h += navItem({ id:"today", name:"Today's Fires", special:true, count:`${tdDone}/${td.length}`, today: td.length > tdDone });
  h += '<div class="divider"></div><div class="nav-head">Clients</div>';
  CLIENTS.forEach(c => {
    const p = clientProgress(c);
    h += navItem({ id:c.id, name:c.name, count:`${p.done}/${p.total}`, today:clientHasToday(c), high:!clientHasToday(c)&&clientHasHigh(c), complete:p.done===p.total });
  });
  nav.innerHTML = h;
  nav.querySelectorAll(".item").forEach(el => el.addEventListener("click", () => { active = el.dataset.id; renderMain(); renderNav(); }));
  const ov = overallProgress();
  document.getElementById("ovNum").innerHTML = `<b>${ov.done}</b> / ${ov.total}`;
  requestAnimationFrame(() => { document.getElementById("ovBar").style.width = ov.pct*100 + "%"; });
}
function navItem(o){
  const cls = ["item"];
  if(o.id === active) cls.push("active");
  if(o.special) cls.push("special");
  if(o.today) cls.push("has-today"); else if(o.high) cls.push("has-high");
  if(o.complete) cls.push("done-all");
  const countCls = o.complete ? "item-count complete" : "item-count";
  const right = (o.special && o.today)
    ? `<span class="badge-mini">${o.count}</span>`
    : `<span class="${countCls}">${o.complete ? '✓' : o.count}</span>`;
  return `<button class="${cls.join(' ')}" data-id="${o.id}"><span class="item-dot"></span><span class="item-name">${o.name}</span>${right}</button>`;
}

/* ============ MAIN ============ */
function renderMain(){
  const wrap = document.getElementById("wrap");
  document.getElementById("main").scrollTop = 0;
  wrap.innerHTML = (active === "today") ? renderTodayView() : renderClientView(CLIENTS.find(c => c.id === active));
  wire(wrap);
}
function renderTodayView(){
  const tasks = todayTasks();
  const pr = progressOf(todayLeaves());
  let h = `<div class="head">
    <div class="eyebrow today"><span class="pip"></span>Time-critical · flagged for today</div>
    <h1 class="title">Today's Fires</h1>
    <div class="meta"><span><b>${pr.done}</b> of ${pr.total} steps cleared</span><span class="sep"></span><span>${tasks.length} fires</span></div>
    <div class="hbar"><i id="hbar"></i></div></div>`;
  if(!tasks.length){ h += allClear(); return h; }
  let i = 0; h += '<div class="section">';
  tasks.forEach(t => { h += taskRow(t, i++, {showClient:true}); });
  h += '</div>'; return h;
}
function renderClientView(c){
  const p = clientProgress(c);
  let h = `<div class="head">
    <div class="eyebrow"><span class="pip"></span>${c.space}</div>
    <h1 class="title">${c.name}</h1>
    <div class="meta"><span><b>${p.done}</b> of ${p.total} steps done</span><span class="sep"></span><span>${c.tasks.length} task${c.tasks.length>1?'s':''}</span></div>`;
  if(c.parked) h += `<div class="note-chip">${warnSvg()}<span>Parked in a temporary list. Create a dedicated <b>Sage Event Space</b> in ClickUp and move these tasks over.</span></div>`;
  h += `<div class="hbar"><i id="hbar"></i></div></div>`;
  const sections = [];
  c.tasks.forEach(t => { const key = t.section || "__none"; let g = sections.find(s=>s.key===key); if(!g){ g={key,label:t.section||null,items:[]}; sections.push(g);} g.items.push(t); });
  let i = 0;
  sections.forEach(sec => { h += '<div class="section">'; if(sec.label) h += `<div class="section-lab">${sec.label}</div>`; sec.items.forEach(t => { h += taskRow(t, i++, {}); }); h += '</div>'; });
  if(p.done === p.total) h += allClear();
  return h;
}
function taskRow(t, idx, opt){
  const done = taskDone(t), partial = taskPartial(t);
  const delay = Math.min(idx*42, 520);
  let cbCls = "cb"; if(done) cbCls += " on"; else if(partial) cbCls += " partial";
  let h = `<div class="task ${done?'done':''}" style="--tdelay:${delay}ms" data-task="${t.id}">`;
  h += `<button class="${cbCls}" data-cb="task" data-id="${t.id}" role="checkbox" aria-checked="${done}" aria-label="${t.name}">${CHECK_SVG}</button>`;
  h += `<div class="task-body">`;
  if(opt.showClient && t._client) h += `<div class="client-tag">${t._client}</div>`;
  h += `<div class="task-top"><span class="task-name">${t.name}</span><span class="badges">${badgesFor(t)}</span></div>`;
  if(t.note) h += `<div class="task-note">${t.note}</div>`;
  if(t.subs){
    h += `<div class="subs">`;
    t.subs.forEach(s => { const sd = !!state[s.id];
      h += `<div class="sub ${sd?'done':''}" data-sub-row="${s.id}"><button class="cb sm ${sd?'on':''}" data-cb="sub" data-id="${s.id}" data-parent="${t.id}" role="checkbox" aria-checked="${sd}" aria-label="${s.name}">${CHECK_SVG}</button><span class="sub-name">${s.name}</span></div>`; });
    h += `</div>`;
  }
  h += `</div></div>`;
  return h;
}
function allClear(){ return `<div class="allclear"><b>All clear.</b>Every step in this view is done.</div>`; }
function warnSvg(){ return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }

/* ============ INTERACTION ============ */
function wire(scope){
  scope.querySelectorAll("[data-cb]").forEach(btn => {
    btn.addEventListener("click", () => onToggle(btn));
    btn.addEventListener("keydown", e => { if(e.key===" "||e.key==="Enter"){ e.preventDefault(); onToggle(btn); } });
  });
  const hb = scope.querySelector("#hbar");
  if(hb){ const pr = (active==="today") ? progressOf(todayLeaves()) : progressOf(clientLeaves(CLIENTS.find(x=>x.id===active))); requestAnimationFrame(() => { hb.style.width = pr.pct*100 + "%"; }); }
}
function applyMuts(obj, muts){ muts.forEach(m => { if(m.val) obj[m.id] = true; else delete obj[m.id]; }); }

async function onToggle(btn){
  const id = btn.dataset.id; let muts = [];
  if(btn.dataset.cb === "task"){
    const t = allTasks().find(x => x.id === id);
    if(t.subs && t.subs.length){ const nv = !taskDone(t); t.subs.forEach(s => muts.push({id:s.id, val:nv})); }
    else muts.push({id, val: !state[id]});
  } else muts.push({id, val: !state[id]});
  
  applyMuts(state, muts); // Update interface instantly
  refreshMainInPlace(); renderNav();
  
  // Push live update to the cloud
  lastLocal = Date.now(); saving = true; setSync("saving", "Saving to cloud...");
  const latest = await Store.load();
  applyMuts(latest, muts);
  const ok = await Store.save(latest);
  state = latest; lastSerialized = JSON.stringify(latest); saving = false;
  refreshMainInPlace(); renderNav();
  setSync(ok ? "saved" : "", ok ? "Cloud synced ✓" : "Offline — saved locally");
  if(ok) setTimeout(() => setSync("saved", "Live Shared Board"), 1500);
}

// Background poller keeps everyone viewing the same live data
async function poll(){
  if(saving || Date.now() - lastLocal < 2500) return;
  const latest = await Store.load();
  const ser = JSON.stringify(latest);
  if(ser !== lastSerialized){ 
    state = latest; lastSerialized = ser; 
    refreshMainInPlace(); renderNav(); 
    setSync("saved", "Updated by teammate"); 
    setTimeout(() => setSync("saved", "Live Shared Board"), 1600); 
  }
}

function refreshMainInPlace(){
  const wrap = document.getElementById("wrap");
  wrap.querySelectorAll("[data-task]").forEach(row => {
    const t = allTasks().find(x => x.id === row.dataset.task);
    const done = taskDone(t), partial = taskPartial(t);
    row.classList.toggle("done", done);
    const cb = row.querySelector('[data-cb="task"]');
    cb.classList.toggle("on", done); cb.classList.toggle("partial", !done && partial); cb.setAttribute("aria-checked", done);
  });
  wrap.querySelectorAll("[data-sub-row]").forEach(sr => {
    const sd = !!state[sr.dataset.subRow];
    sr.classList.toggle("done", sd);
    const cb = sr.querySelector('[data-cb="sub"]'); cb.classList.toggle("on", sd); cb.setAttribute("aria-checked", sd);
  });
  const hb = wrap.querySelector("#hbar");
  const pr = (active==="today") ? progressOf(todayLeaves()) : progressOf(clientLeaves(CLIENTS.find(x=>x.id===active)));
  if(hb) hb.style.width = pr.pct*100 + "%";
  const m = wrap.querySelector(".meta b"); if(m) m.textContent = pr.done;
  if(pr.total && pr.done === pr.total && !wrap.querySelector(".allclear")) renderMain();
}

/* ============ MANUAL SAVE BUTTON ============ */
document.getElementById("saveBtn").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  if (btn.classList.contains("saved")) return;
  
  const ogHTML = btn.innerHTML;
  btn.innerHTML = '<iconify-icon icon="solar:cloud-upload-linear" width="13" stroke-width="1.5"></iconify-icon> Saving';
  
  saving = true;
  setSync("saving", "Saving to cloud...");
  const ok = await Store.save(state);
  saving = false;
  
  btn.classList.add("saved");
  btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="13" stroke-width="1.5"></iconify-icon> Saved';
  setSync(ok ? "saved" : "", ok ? "Cloud synced ✓" : "Offline — saved locally");
  
  setTimeout(() => { 
    btn.innerHTML = ogHTML; 
    btn.classList.remove("saved"); 
    setSync("saved", "Live Shared Board");
  }, 2000);
});

/* ============ INIT ============ */
(async function init(){
  state = await Store.load();
  lastSerialized = JSON.stringify(state);
  
  // Create shared cloud container if one doesn't exist yet
  if(!bucketId) await Store.save(state);
  
  setSync("saved", "Live Shared Board");
  renderNav(); renderMain();
  setInterval(poll, 4000); // Check cloud every 4 seconds for teammate updates
})();

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
      
<div className="app">
<aside className="side">
<div className="brand">
<div className="brand-row"><span className="brand-mark"></span><span className="brand-name">Agenda Command</span></div>
<div className="brand-sub">Bigger Vision Agency</div>
<div className="sync-wrap">
<div className="sync" id="sync"><span className="sync-dot"></span><span id="syncTxt">Connecting...</span></div>
<button className="save-btn" id="saveBtn">
<iconify-icon icon="solar:diskette-linear" strokeWidth="1.5" width="13"></iconify-icon> Save
        </button>
</div>
<div className="overall">
<div className="overall-top"><span className="overall-lab">Overall</span><span className="overall-num" id="ovNum"><b>0</b> / 0</span></div>
<div className="bar"><i id="ovBar"></i></div>
</div>
</div>
<nav className="nav" id="nav"></nav>
</aside>
<main className="main" id="main"><div className="wrap" id="wrap"></div></main>
</div>


    </>
  );
}
