import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



"use strict";
gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const touch = matchMedia("(pointer: coarse)").matches;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- substrate ---------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- cursor ---------- */
if (!touch && !reduce) {
  const cur = $("#cursor");
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; });
  gsap.ticker.add(() => {
    cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
    cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
  });
  $$("a,button,.lic-row,.glyph,input,[contenteditable]").forEach(el => {
    el.addEventListener("pointerenter", () => cur.classList.add("is-link"));
    el.addEventListener("pointerleave", () => cur.classList.remove("is-link"));
  });
} else { $("#cursor").style.display = "none"; }

/* ---------- hero: build chars + entrance ---------- */
$$(".hero-title [data-chars]").forEach(row => {
  row.innerHTML = row.dataset.chars.split("").map(c => `<span class="ch">${c}</span>`).join("");
});
const veil = $("#veil");
if (reduce) { veil.remove(); }
else {
  const intro = gsap.timeline({ delay: 0.25 });
  intro.to(veil, { yPercent: -100, duration: 0.9, ease: "power3.inOut" })
    .set(veil, { display: "none" })
    .from(".reg-v", { scaleY: 0, duration: 1.0, ease: "expo.out" }, "-=0.45")
    .from(".reg-h", { scaleX: 0, duration: 1.0, ease: "expo.out" }, "<")
    .to(".reg-cross", { opacity: 0.5, duration: 0.6 }, "<0.3")
    .to(".hero-title .row > span", { y: 0, duration: 1.1, ease: "expo.out", stagger: 0.12 }, "-=0.7")
    .to("#heroSub", { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.5")
    .to(".hero-bed", { opacity: 1, duration: 1.4, ease: "power2.out" }, "-=0.9");
}

/* hero: cursor proximity drives per-glyph weight (the variable axis, felt) */
const heroChs = $$("#heroTitle .ch");
if (!touch && !reduce && heroChs.length) {
  let hx = -9999, hy = -9999, heroOn = false;
  const hero = $("#hero");
  hero.addEventListener("pointermove", e => { hx = e.clientX; hy = e.clientY; heroOn = true; });
  hero.addEventListener("pointerleave", () => { heroOn = false; });
  const states = heroChs.map(ch => ({ ch, w: ch.closest(".row").classList.contains("thin") ? 100 : 900,
    base: ch.closest(".row").classList.contains("thin") ? 100 : 900 }));
  gsap.ticker.add(() => {
    for (const s of states) {
      let target = s.base;
      if (heroOn) {
        const r = s.ch.getBoundingClientRect();
        const d = Math.hypot(hx - (r.left + r.width / 2), hy - (r.top + r.height / 2));
        const f = Math.max(0, 1 - d / 340);
        target = s.base === 900 ? 900 - 800 * f : 100 + 800 * f;  /* bold thins, thin bolds */
      }
      s.w += (target - s.w) * 0.16;
      s.ch.style.fontVariationSettings = `'wght' ${s.w.toFixed(0)}, 'wdth' 100`;
    }
  });
}

/* ---------- ribbons: infinite + scroll-velocity coupling ---------- */
const GLYPH_LINE = "Aa Bb Gg Kk Qq Rr Ss &amp; ? 0 4 7 # @ ";
["#ribbon1", "#ribbon2"].forEach((sel, i) => {
  const el = $(sel);
  el.innerHTML = `<span>${GLYPH_LINE.repeat(6)}</span><span>${GLYPH_LINE.repeat(6)}</span>`;
});
if (!reduce) {
  const r1 = { x: 0 }, r2 = { x: -50 };
  let vel = 0;
  ScrollTrigger.create({ onUpdate: self => { vel = self.getVelocity() / 4000; } });
  gsap.ticker.add((t, dt) => {
    const base = dt * 0.0022;
    r1.x -= base * (1 + Math.min(Math.abs(vel), 3)); if (r1.x <= -50) r1.x += 50;
    r2.x += base * (1 + Math.min(Math.abs(vel), 3)); if (r2.x >= 0) r2.x -= 50;
    $("#ribbon1").style.transform = `translate3d(${r1.x}%,0,0)`;
    $("#ribbon2").style.transform = `translate3d(${r2.x}%,0,0)`;
  });
}

/* ---------- portal: through the counter, palette flips on the stroke ---------- */
{
  const stage = $("#portalStage"), oWrap = $("#oWrap"), line = $("#portalLine");
  const oGlyph = stage.querySelector(".o-glyph");
  const shards = $$(".shard");
  const prox = { p: 0 };
  const eyebrow = stage.querySelector(".portal-eyebrow");
  const FLIP = 0.69;                     /* flip only once the stroke owns every pixel */
  if (!reduce) {
    /* the trigger spans slide-in AND pin (300vh): the O is already growing while
       the stage enters, and the interior is still moving when it leaves */
    gsap.to(prox, {
      p: 1, ease: "none",
      scrollTrigger: { trigger: "#portal", start: "top bottom", end: "bottom bottom", scrub: 0.6,
        invalidateOnRefresh: true },
      onUpdate: () => {
        const p = prox.p;
        const travel = Math.min(Math.max((p - 0.15) / 0.597, 0), 1);
        if (p < FLIP + 0.03) {                         /* stop paying layout cost once hidden */
          const fs = 64 * Math.pow(46, travel);        /* exponential = constant z-speed */
          const dx = 36 * gsap.parseEase("power2.inOut")(Math.min(Math.max((travel - 0.1) / 0.7, 0), 1));
          oGlyph.style.fontSize = fs.toFixed(2) + "vmin";
          oWrap.style.transform = `translate3d(${dx.toFixed(2)}%,0,0)`;
        }
        eyebrow.style.opacity = 1 - Math.min(Math.max((p - 0.42) / 0.16, 0), 1);
        stage.classList.toggle("inked", p >= FLIP);
        /* shards travel from long BEFORE they are visible: the develop reveals
           them already mid-flight, in step with the zoom, never parked */
        const ip = Math.min(Math.max((p - 0.40) / 0.60, 0), 1);
        const lk = Math.min(Math.max((p - 0.66) / 0.10, 0), 1);
        line.style.opacity = lk;
        line.style.transform = `translate(-50%,-50%) translateY(${(1 - lk) * 22}px)`;
        shards.forEach((sh, i) => {
          const depth = sh.classList.contains("s-near") ? 190 : sh.classList.contains("s-mid") ? 130 : 85;
          const drift = (i % 2 ? 1 : -1) * ip * 7;
          sh.style.transform = `translate3d(${drift.toFixed(2)}vw,${(-ip * depth).toFixed(2)}vh,0)`;
        });
        /* continuous develop to ink: the bone outside the bowl darkens in sync
           with the zoom, so there is no discrete flip frame at all */
        stage.style.backgroundColor = gsap.utils.interpolate("#f4f1ea", "#161513")(
          Math.min(Math.max((p - 0.613) / 0.077, 0), 1));
        oWrap.style.opacity = p >= FLIP ? 0 : 1;       /* glyph has merged into the room */
      }
    });
  } else { stage.classList.add("inked"); stage.style.backgroundColor = "#161513"; oWrap.style.display = "none"; line.style.opacity = 1; }
}

/* ---------- manifesto: word-breath ---------- */
{
  const p = $("#maniText");
  p.innerHTML = p.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(" ");
  const words = $$("#maniText .w");
  if (!reduce) {
    ScrollTrigger.create({
      trigger: "#manifesto", start: "top 85%", end: "bottom bottom", scrub: 0.4,
      onUpdate: self => {
        const k = Math.min(Math.max((self.progress - 0.05) / 0.75, 0), 1);
        const n = Math.floor(k * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < n));
      }
    });
    $$(".mani-shard").forEach((sh, i) => gsap.fromTo(sh,
      { yPercent: i ? -70 : 80 },
      { yPercent: i ? 80 : -100, ease: "none",
        scrollTrigger: { trigger: "#manifesto", start: "top bottom", end: "bottom top", scrub: true } }));
  } else words.forEach(w => w.classList.add("on"));
}

/* ---------- weight axis: nine detents ---------- */
{
  const NAMES = ["hairline","thin","light","book","regular","medium","nerve","bold","black"];
  const word = $("#zeroWord"), hud = $("#axisHud"), tick = $("#railTick"),
        num = $("#wghtNum"), name = $("#wghtName"), rail = $("#axisRail");
  for (let i = 0; i < 9; i++) { const n = document.createElement("i"); n.style.left = (i / 8 * 100) + "%"; rail.appendChild(n); }
  let detent = -1;
  const apply = idx => {
    if (idx === detent) return; detent = idx;
    const w = 100 + idx * 100;
    word.style.fontVariationSettings = `'wght' ${w}`;
    num.textContent = "wght " + w;
    name.textContent = NAMES[idx];
    name.classList.remove("stamped"); void name.offsetWidth; name.classList.add("stamped");
  };
  if (!reduce) {
    const st = { p: 0 };
    /* trigger spans slide-in AND pin: the word is already rising during the
       transition, detents run across the dwell */
    gsap.to(st, { p: 1, ease: "none",
      scrollTrigger: { trigger: "#axis", start: "top bottom", end: "bottom bottom", scrub: 0.5, invalidateOnRefresh: true },
      onUpdate: () => {
        const p = st.p;
        const rev = gsap.parseEase("expo.out")(Math.min(Math.max((p - 0.08) / 0.34, 0), 1));
        word.style.transform = `translateY(${(1 - rev) * 115}%)`;
        hud.style.opacity = Math.min(Math.max((p - 0.30) / 0.12, 0), 1);
        const wp = Math.min(Math.max((p - 0.44) / 0.52, 0), 1);
        apply(Math.round(wp * 8));
        tick.style.left = (wp * 100) + "%";
      } });
  } else { word.style.transform = "none"; hud.style.opacity = 1; apply(4); }
}

/* ---------- tester (real component) ---------- */
{
  const line = $("#testerLine"), read = $("#testerRead");
  const cW = $("#cWght"), cD = $("#cWdth"), cS = $("#cSize");
  const rW = $("#rWght"), rD = $("#rWdth"), rS = $("#rSize");
  const state = { w: 700, d: 100, s: 96 };
  const render = () => {
    line.style.fontVariationSettings = `'wght' ${state.w}, 'wdth' ${state.d}`;
    line.style.fontSize = state.s + "px";
    rW.textContent = state.w; rD.textContent = state.d; rS.textContent = state.s;
    read.innerHTML = `wght ${state.w} &middot; wdth ${state.d} &middot; ${state.s}px`;
  };
  cW.addEventListener("input", () => { state.w = +cW.value; render(); clearPreset(); });
  cD.addEventListener("input", () => { state.d = +cD.value; render(); clearPreset(); });
  cS.addEventListener("input", () => { state.s = +cS.value; render(); });
  const presets = $$("#presets button");
  const clearPreset = () => presets.forEach(b => b.classList.remove("on"));
  presets.forEach(b => b.addEventListener("click", () => {
    clearPreset(); b.classList.add("on");
    gsap.to(state, { w: +b.dataset.w, d: +b.dataset.d, duration: 0.6, ease: "expo.out",
      onUpdate: () => { state.w = Math.round(state.w); state.d = Math.round(state.d);
        cW.value = state.w; cD.value = state.d; render(); } });
  }));
  line.addEventListener("paste", e => { e.preventDefault();
    document.execCommand("insertText", false, (e.clipboardData || window.clipboardData).getData("text/plain")); });
  render();
}

/* ---------- features: hover demos ---------- */
{
  const anims = {
    count: el => { const o = { n: 0 }; const final = 1000000;
      gsap.to(o, { n: final, duration: 0.9, ease: "power2.out",
        onUpdate: () => el.textContent = "$" + o.n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }); },
    case: el => gsap.fromTo(el, { letterSpacing: "0.2em", opacity: 0.4 }, { letterSpacing: "0em", opacity: 1, duration: 0.6, ease: "expo.out" }),
    alt: el => gsap.fromTo(el, { fontVariationSettings: "'wght' 100" }, { fontVariationSettings: "'wght' 800", duration: 0.7, ease: "expo.out" }),
    arrows: el => gsap.fromTo(el, { x: -16, opacity: 0.3 }, { x: 0, opacity: 1, duration: 0.5, ease: "back.out(1.6)" }),
  };
  $$(".feat-row").forEach(row => {
    const demo = row.querySelector(".demo");
    const kind = demo.dataset.anim;
    const orig = demo.innerHTML;
    row.addEventListener("pointerenter", () => { if (!reduce && anims[kind]) anims[kind](demo); });
    row.addEventListener("pointerleave", () => { if (kind === "count") demo.innerHTML = orig; });
  });
}

/* ---------- in use: pinned horizontal + inner parallax ---------- */
{
  const track = $("#track");
  if (!reduce) {
    const dist = () => track.scrollWidth - innerWidth;
    const move = gsap.to(track, { x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: "#hPin", start: "top 12%", end: () => "+=" + dist(),
        pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    $$(".frame").forEach(f => {
      gsap.fromTo(f, { clipPath: "inset(0 0 0 28%)" }, { clipPath: "inset(0 0 0 0%)", duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: f, containerAnimation: move, start: "left 90%" } });
      gsap.fromTo(f.querySelector("img"), { xPercent: -8 }, { xPercent: 0, ease: "none",
        scrollTrigger: { trigger: f, containerAnimation: move, start: "left right", end: "right left", scrub: true } });
    });
  }
}

/* ---------- interlude parallax ---------- */
if (!reduce) {
  gsap.fromTo("#interImg", { yPercent: -8 }, { yPercent: 8, ease: "none",
    scrollTrigger: { trigger: "#interlude", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.fromTo(".knock .fill span:nth-child(1)", { backgroundPositionY: "36%" }, { backgroundPositionY: "48%", ease: "none",
    scrollTrigger: { trigger: "#interlude", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.fromTo(".knock .fill span:nth-child(2)", { backgroundPositionY: "48%" }, { backgroundPositionY: "60%", ease: "none",
    scrollTrigger: { trigger: "#interlude", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.from(".interlude .knock span", { yPercent: 70, opacity: 0, stagger: 0.16, duration: 1.5, ease: "expo.out",
    scrollTrigger: { trigger: "#interlude", start: "top 78%" } });
}

/* ---------- glyph grid ---------- */
{
  const chars = "AGHKMQRSW&agkrst?!&0479#@";
  const grid = $("#glyphGrid");
  chars.split("").forEach(c => { const d = document.createElement("span");
    d.className = "glyph"; d.textContent = c; grid.appendChild(d); });
  /* pad to full rows of 8 */
  while (grid.children.length % 8) { const d = document.createElement("span");
    d.className = "glyph"; d.innerHTML = "&middot;"; grid.appendChild(d); }
  if (!reduce) {
    gsap.to(".glyph", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)",
      stagger: { each: 0.018, grid: "auto", from: "random" },
      scrollTrigger: { trigger: "#glyphGrid", start: "top 78%" } });
  } else $$(".glyph").forEach(g => { g.style.opacity = 1; g.style.transform = "none"; });
}

/* ---------- generic reveals ---------- */
if (!reduce) {
  ScrollTrigger.batch(".reveal", { start: "top 88%",
    onEnter: els => gsap.from(els, { y: 30, autoAlpha: 0, duration: 0.7, ease: "expo.out", stagger: 0.08 }) });
}

/* ---------- footer wordmark: weight follows cursor X ---------- */
{
  const mark = $("#footMark");
  mark.innerHTML = "GROTESK ZERO".split("").map(c =>
    c === " " ? "&nbsp;" : `<span class="fch">${c}</span>`).join("");
  const fchs = $$("#footMark .fch");
  if (!touch && !reduce) {
    addEventListener("pointermove", e => {
      const t = e.clientX / innerWidth;
      fchs.forEach((ch, i) => {
        const pos = i / (fchs.length - 1);
        const d = Math.abs(pos - t);
        const w = 900 - Math.min(d * 2.2, 1) * 750;
        ch.style.fontVariationSettings = `'wght' ${w.toFixed(0)}`;
      });
    });
  }
}

/* footer ghost zero drifts up as the page uncovers it */
if (!reduce) {
  gsap.fromTo(".foot-zero", { yPercent: 16 }, { yPercent: -6, ease: "none",
    scrollTrigger: { trigger: "#footer", start: "top bottom", end: "bottom bottom", scrub: true } });
}

addEventListener("load", () => ScrollTrigger.refresh());

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="cursor" id="cursor"></div>
<div className="veil" id="veil">
<div className="mono">est. 2019 · type for architecture you can read</div>
<div className="mark">HALFTONE FOUNDRY</div>
</div>
<nav>
<a className="wordmark" href="#top">GROTESK ZERO</a>
<div className="links">
<a href="#tester">Specimen</a>
<a href="#inuse">In use</a>
<a className="buy" href="#license">Get Grotesk Zero</a>
</div>
</nav>
<main id="top">

<header className="hero" id="hero">
<span className="reg-v"></span><span className="reg-h"></span><span className="reg-cross"></span>
<div className="hero-kicker mono">Halftone Foundry presents · release 2.1</div>
<h1 aria-label="Grotesk Zero" className="hero-title" id="heroTitle">
<span className="row"><span data-chars="GROTESK"></span></span>
<span className="row thin"><span data-chars="ZERO"></span></span>
</h1>
<figure className="hero-bed" id="heroBed">
<img alt="A case of metal type sorts, Halftone archive" loading="eager" src="https://images.unsplash.com/photo-1576529365111-4f58baa70f7a?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<figcaption>set from case 12 · halftone archive</figcaption>
</figure>
<p className="hero-sub" id="heroSub">A grotesk that holds its counters open at 7 pixels and its
      nerve at 700 weight. Nine weights, two widths, fully variable. Move your cursor across the
      letters. That is the variable axis working.</p>
<div className="hero-meta">
<b>9</b> weights · <b>2</b> widths<br/>
<b>1,243</b> glyphs · <b>217</b> languages<br/>
      variable <b>wght + wdth</b><br/>
      desktop · web · app
    </div>
<div className="hero-cue mono">Scroll ↓</div>
</header>

<div aria-hidden="true" className="ribbons">
<div className="ribbon r1" id="ribbon1"></div>
<div className="ribbon r2" id="ribbon2"></div>
</div>

<section id="portal">
<div className="stage" id="portalStage">
<div className="portal-eyebrow mono">A letter is a room. Enter it.</div>
<div className="o-wrap" id="oWrap"><span className="o-glyph">O</span></div>
<p className="portal-line mono" id="portalLine">you are now inside the counter.</p>
<div aria-hidden="true" className="shards">
<span className="shard s-deep" style={{left: '12%', top: '70%'}}>k</span>
<span className="shard s-mid" style={{left: '64%', top: '85%'}}>R</span>
<span className="shard s-near" style={{left: '30%', top: '110%'}}>g</span>
<span className="shard s-deep" style={{left: '80%', top: '120%'}}>a</span>
<span className="shard s-mid" style={{left: '8%', top: '135%'}}>Q</span>
</div>
<div className="scene-tag" style={{color: 'var(--bone)'}}>02 portal</div>
</div>
</section>

<section id="manifesto">
<div className="stage manifesto">
<span className="mani-shard" style={{right: '-4vw', top: '8%'}}>7</span>
<span className="mani-shard" style={{left: '-6vw', bottom: '4%'}}>&amp;</span>
<div className="inner">
<span className="mono">/ the argument</span>
<p id="maniText">You spend your whole day inside type. Tickets, timelines, term sheets,
        the news. Most of it was built cheap, and you can feel it before you can say why.
        Grotesk Zero is the room with the lights on: counters held open at seven pixels,
        terminals cut square, a spine that does not flinch at 700. Architecture you can read.</p>
</div>
<div className="scene-tag" style={{color: 'var(--bone)'}}>02b argument</div>
</div>
</section>

<section id="axis">
<div className="stage">
<span className="axis-rule" style={{top: '24%'}}><small>cap</small></span>
<span className="axis-rule" style={{bottom: '24%'}}><small>baseline</small></span>
<div className="zero-mask"><span id="zeroWord">ZERO</span></div>
<div className="axis-hud" id="axisHud">
<div className="axis-rail" id="axisRail"><span id="railTick"></span></div>
<div className="axis-read"><span id="wghtNum">wght 100</span><span id="wghtName">hairline</span></div>
</div>
<div className="scene-tag" style={{color: 'var(--bone)'}}>03 wght axis</div>
</div>
</section>

<section className="tester" id="tester">
<div className="head">
<h2>Try the room before you rent it.</h2>
<span className="mono" id="testerRead">wght 700 · wdth 100 · 96px</span>
</div>
<div contenteditable="true" id="testerLine" spellcheck="false">Type something true</div>
<div className="tester-controls">
<div className="ctl">
<label>Weight <b id="rWght">700</b></label>
<input id="cWght" max="900" min="100" step="1" type="range" value="700"/>
</div>
<div className="ctl">
<label>Width <b id="rWdth">100</b></label>
<input id="cWdth" max="125" min="62" step="1" type="range" value="100"/>
</div>
<div className="ctl">
<label>Size <b id="rSize">96</b></label>
<input id="cSize" max="220" min="24" step="1" type="range" value="96"/>
</div>
<div className="presets" id="presets">
<button data-d="100" data-w="100">Hairline 100</button>
<button data-d="100" data-w="400">Book 400</button>
<button className="on" data-d="100" data-w="700">Nerve 700</button>
<button data-d="62" data-w="900">Black condensed</button>
</div>
</div>
</section>

<section className="features">
<div className="feat-row reveal">
<span className="idx">ot/01</span><h3>Tabular figures hold the line.</h3>
<div className="demo tnum" data-anim="count">$1,000,000.00</div>
</div>
<div className="feat-row reveal">
<span className="idx">ot/02</span><h3>Case-sensitive forms.</h3>
<div className="demo" data-anim="case">[H–O] (ZERO) «700»</div>
</div>
<div className="feat-row reveal">
<span className="idx">ot/03</span><h3>Two storeys, your choice.</h3>
<div className="demo" data-anim="alt">a g → ɑ g</div>
</div>
<div className="feat-row reveal">
<span className="idx">ot/04</span><h3>Arrows that match the metal.</h3>
<div className="demo" data-anim="arrows">← ↑ → ↓ ↗ ↘</div>
</div>
</section>

<section id="inuse">
<div className="head">
<h2>In use, not in theory.</h2>
<span className="mono">drag of scroll · 6 commissions</span>
</div>
<div className="h-pin" id="hPin">
<div className="track" id="track">
<figure className="frame w-a">
<img alt="Wood letterpress type sorted in a case" loading="eager" src="https://images.unsplash.com/photo-1446688568582-55ddb4b37cad?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<span className="num">01</span><figcaption className="cap">Halftone archive, wood type room</figcaption>
</figure>
<figure className="frame w-b">
<img alt="Poster wall" loading="lazy" src="https://images.unsplash.com/photo-1543487945-139a97f387d5?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<span className="num">02</span><figcaption className="cap">Brutalist Film Week, poster series</figcaption>
</figure>
<figure className="frame w-c">
<img alt="Stack of printed magazines" loading="lazy" src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<span className="num">03</span><figcaption className="cap">Counter Journal, issues 01 to 09</figcaption>
</figure>
<figure className="frame w-b">
<img alt="Neon sign typography" loading="lazy" src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<span className="num">04</span><figcaption className="cap">Night signage, Dundas West</figcaption>
</figure>
<figure className="frame w-a">
<img alt="Open magazine editorial spread" loading="lazy" src="https://images.unsplash.com/photo-1512143889056-b57b4153f038?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<span className="num">05</span><figcaption className="cap">Annual report, set entirely in Zero</figcaption>
</figure>
<figure className="frame w-c">
<img alt="Letterpress print detail" loading="lazy" src="https://images.unsplash.com/photo-1436918898788-ebce04d38e46?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<span className="num">06</span><figcaption className="cap">Specimen No. 0, letterpress edition</figcaption>
</figure>
</div>
</div>
</section>

<section className="interlude" id="interlude">
<img alt="Letterpress printing press detail" id="interImg" loading="lazy" src="https://images.unsplash.com/photo-1471890701797-59336a877de4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="knock"><div className="fill"><span>PRESSURE</span><span>MAKES TYPE.</span></div></div>
<span className="credit mono">photograph · unsplash · to be reshot in zero</span>
</section>

<section className="ledger">
<div className="grid2">
<div>
<h2>The ledger.</h2>
<div className="led-row reveal"><span className="k">Glyphs per style</span><span className="v">1,243</span></div>
<div className="led-row reveal"><span className="k">Languages, Latin ext.</span><span className="v">217</span></div>
<div className="led-row reveal"><span className="k">Weights × widths</span><span className="v">9 × 2</span></div>
<div className="led-row reveal"><span className="k">Variable axes</span><span className="v">wght, wdth</span></div>
<div className="led-row reveal"><span className="k">Smallest open counter</span><span className="v">7 px</span></div>
<div className="led-row reveal"><span className="k">Kerning pairs, hand set</span><span className="v">4,108</span></div>
</div>
<div>
<h2>Touch the glyphs.</h2>
<div className="glyphs" id="glyphGrid"></div>
</div>
</div>
</section>

<section className="license" id="license">
<div className="head">
<h2>License the family.</h2>
<span className="mono">one purchase · no subscriptions</span>
</div>
<div className="lic-row reveal">
<div><h3>Single style</h3><p>One weight, one width · desktop + web</p></div>
<span className="price">$90</span>
<span className="go">Choose style <i>→</i></span>
</div>
<div className="lic-row reveal">
<div><h3>Complete family</h3><p>18 styles · desktop + web + app</p></div>
<span className="price">$480</span>
<span className="go">Get the family <i>→</i></span>
</div>
<div className="lic-row reveal">
<div><h3>Variable family</h3><p>Both variable files + 18 statics · everything, forever</p></div>
<span className="price">$640</span>
<span className="go">Go variable <i>→</i></span>
</div>
<p className="lic-note">Student or studio under 3 people? Write to type@halftone.example for 50 percent off.</p>
</section>
</main>

<footer id="footer">
<span aria-hidden="true" className="foot-zero">0</span>
<span className="foot-cross"></span>
<div>
<div className="mono" style={{marginBottom: '3vh', opacity: '.85'}}>Halftone Foundry · Grotesk Zero 2.1</div>
<div aria-label="Grotesk Zero" className="foot-mark" id="footMark"></div>
<a className="foot-cta" href="#tester">Type something true <span>→</span></a>
</div>
<div className="foot-cols">
<span>Halftone Foundry is a fictional foundry.<br/>Built by Claude Fable 5 as a production demo.</span>
<span>Typeface on this page: Archivo variable<br/>standing in for Grotesk Zero</span>
<span>Photography: Unsplash, interim<br/>to be replaced with art-directed shots</span>
<span>No cookies. No tracking.<br/>Just type.</span>
</div>
</footer>





    </>
  );
}
