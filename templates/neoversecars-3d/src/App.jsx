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



import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";
const state = {
route: "home",
selected: null,
modelsLoaded: false,
viewers: new Map(),
preferReduced: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
};
const CARS = [
{
id: "aether-gt",
brand: "Aether",
model: "GT One",
year: "2026",
tag: "Concept",
accent: "from-cyan-400/20 via-sky-400/10 to-transparent",
specs: { engine: "Dual e-motor", power: "640 hp", torque: "810 Nm", topSpeed: "205 mph", drivetrain: "AWD" },
highlights: ["Active aero", "Glass roof", "Adaptive matrix lights"],
},
{
id: "noir-rs",
brand: "Noir",
model: "RS Vanta",
year: "2025",
tag: "Track",
accent: "from-sky-400/20 via-cyan-400/10 to-transparent",
specs: { engine: "4.0L V8 TT", power: "710 hp", torque: "850 Nm", topSpeed: "210 mph", drivetrain: "RWD" },
highlights: ["Carbon tub", "Magnetic dampers", "Ceramic brakes"],
},
{
id: "solara-e",
brand: "Solara",
model: "Eclipse E",
year: "2027",
tag: "EV",
accent: "from-cyan-300/20 via-sky-300/10 to-transparent",
specs: { engine: "Tri e-motor", power: "980 hp", torque: "1100 Nm", topSpeed: "218 mph", drivetrain: "AWD" },
highlights: ["Torque vectoring", "Fast charge", "AR HUD"],
},
{
id: "kepler-s",
brand: "Kepler",
model: "S-9 Coupe",
year: "2024",
tag: "Signature",
accent: "from-sky-300/20 via-cyan-300/10 to-transparent",
specs: { engine: "3.0L I6 hybrid", power: "520 hp", torque: "650 Nm", topSpeed: "190 mph", drivetrain: "AWD" },
highlights: ["Adaptive suspension", "Spatial audio", "Nano paint"],
},
{
id: "ion-x",
brand: "ION",
model: "X Vector",
year: "2026",
tag: "Hyper",
accent: "from-cyan-400/20 via-sky-400/10 to-transparent",
specs: { engine: "Quad e-motor", power: "1200 hp", torque: "1400 Nm", topSpeed: "225 mph", drivetrain: "AWD" },
highlights: ["Launch control", "Active cooling", "Carbon wheels"],
}
];
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function setRoute(route, carId = null) {
state.route = route;
state.selected = carId ? CARS.find(c => c.id === carId) : null;
const home = $("#home");
const detail = $("#detail");
const skip = $("#skip");
if (route === "home") {
home.classList.remove("hidden");
detail.classList.add("hidden");
skip.setAttribute("href", "#main");
$("#pageTitle").textContent = "Explore every car on Earth — in 3D.";
window.history.replaceState({}, "", "#/");
} else {
home.classList.add("hidden");
detail.classList.remove("hidden");
skip.setAttribute("href", "#detailMain");
$("#pageTitle").textContent = `${state.selected.brand} ${state.selected.model} — 3D`;
window.history.replaceState({}, "", `#/car/${state.selected.id}`);
renderCarDetail(state.selected);
}
requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
}
function initRouting() {
const hash = window.location.hash || "#/";
const match = hash.match(/^#\/car\/(.+)$/);
if (match) {
const id = match[1];
const found = CARS.find(c => c.id === id);
if (found) setRoute("detail", id);
else setRoute("home");
} else setRoute("home");
window.addEventListener("hashchange", () => {
const h = window.location.hash || "#/";
const m = h.match(/^#\/car\/(.+)$/);
if (m) {
const id = m[1];
const found = CARS.find(c => c.id === id);
if (found) setRoute("detail", id);
else setRoute("home");
} else setRoute("home");
});
}
function mountIcon(el) {
if (!el) return;
el.innerHTML = "";
const icon = el.getAttribute("data-icon");
const size = el.getAttribute("data-size") || "1.125rem";
const stroke = el.getAttribute("data-stroke") || "1.5";
const span = document.createElement("span");
span.className = "inline-flex";
span.style.width = size;
span.style.height = size;
span.style.display = "inline-flex";
span.style.alignItems = "center";
span.style.justifyContent = "center";
span.innerHTML = `<span class="iconify" data-icon="${icon}" data-width="${size}" data-height="${size}" data-inline="false" data-flip="" data-rotate="" data-color="currentColor" data-stroke-width="${stroke}"></span>`;
el.appendChild(span);
}
function mountAllIcons(root = document) {
$$("[data-icon]", root).forEach(mountIcon);
if (window.Iconify && window.Iconify.scan) window.Iconify.scan(root);
}
function buildCarCard(car) {
const a = document.createElement("a");
a.href = `#/car/${car.id}`;
a.className =
"group relative snap-start w-[18rem] sm:w-[20rem] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-cyan-300/30 hover:bg-white/[0.07] transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30";
a.setAttribute("aria-label", `Open ${car.brand} ${car.model}`);
a.innerHTML = `
<div class="absolute inset-0 bg-gradient-to-br ${car.accent} opacity-70"></div>
<div class="relative p-5">
<div class="flex items-start justify-between gap-3">
<div class="min-w-0">
<div class="text-xs tracking-wide text-white/60">${car.brand}</div>
<div class="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-white truncate">${car.model}</div>
<div class="mt-1 flex items-center gap-2 text-xs text-white/60">
<span>${car.year}</span>
<span class="text-white/20">•</span>
<span class="rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 px-2 py-0.5">${car.tag}</span>
</div>
</div>
<div class="mt-0.5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-2 text-white/80 group-hover:text-white transition">
<span data-icon="lucide:arrow-up-right" data-size="1.125rem" data-stroke="1.5"></span>
</div>
</div>
<div class="mt-4 rounded-xl border border-white/10 bg-black/30 overflow-hidden">
<div class="relative aspect-[16/9]">
<canvas class="car-thumb absolute inset-0 w-full h-full" data-view="thumb" data-car="${car.id}"></canvas>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
<div class="absolute left-3 bottom-3 right-3 flex items-center justify-between text-xs text-white/70">
<div class="flex items-center gap-2">
<span class="inline-flex items-center gap-1.5">
<span class="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.6)]"></span>
Interactive 3D
</span>
</div>
<div class="inline-flex items-center gap-1.5">
<span data-icon="lucide:mouse-pointer-2" data-size="1rem" data-stroke="1.5"></span>
Drag
</div>
</div>
</div>
</div>
<div class="mt-4 grid grid-cols-2 gap-3 text-xs">
<div class="rounded-xl border border-white/10 bg-black/25 p-3">
<div class="text-white/50">Power</div>
<div class="mt-1 font-medium text-white/90">${car.specs.power}</div>
</div>
<div class="rounded-xl border border-white/10 bg-black/25 p-3">
<div class="text-white/50">Top speed</div>
<div class="mt-1 font-medium text-white/90">${car.specs.topSpeed}</div>
</div>
</div>
</div>
`;
return a;
}
function renderFeatured() {
const rail = $("#featuredRail");
rail.innerHTML = "";
CARS.forEach(c => rail.appendChild(buildCarCard(c)));
mountAllIcons(rail);
}
function renderBrands() {
const brands = [
"AETHER", "NOIR", "SOLARA", "KEPLER", "ION",
"ASTRA", "ORIGIN", "VANTA", "LUMEN", "KAIRO"
];
const grid = $("#brandGrid");
grid.innerHTML = "";
brands.forEach((b) => {
const btn = document.createElement("button");
btn.className =
"group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-4 text-left hover:border-cyan-300/30 hover:bg-white/[0.06] transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30";
btn.innerHTML = `
<div class="flex items-center justify-between gap-3">
<div class="min-w-0">
<div class="text-xs text-white/50">Brand</div>
<div class="mt-1 text-sm sm:text-base font-semibold tracking-tight text-white/90 truncate">${b}</div>
</div>
<div class="rounded-xl border border-white/10 bg-black/25 p-2 text-white/70 group-hover:text-cyan-100 group-hover:border-cyan-300/20 transition">
<span data-icon="lucide:sparkles" data-size="1.125rem" data-stroke="1.5"></span>
</div>
</div>
<div class="mt-3 h-px bg-gradient-to-r from-cyan-300/20 via-white/10 to-transparent"></div>
<div class="mt-3 text-xs text-white/60">Hover glow • Quick browse</div>
`;
btn.addEventListener("click", () => {
const q = $("#q");
q.value = b.toLowerCase();
q.focus();
doSearch();
});
grid.appendChild(btn);
});
mountAllIcons(grid);
}
function doSearch() {
const q = ($("#q").value || "").trim().toLowerCase();
const results = $("#searchResults");
const hint = $("#searchHint");
if (!q) {
results.innerHTML = "";
hint.textContent = "Try “ion”, “gt”, or “v8”.";
return;
}
const hits = CARS.filter(c => `${c.brand} ${c.model} ${c.year} ${c.tag}`.toLowerCase().includes(q));
results.innerHTML = "";
if (hits.length === 0) {
hint.textContent = "No matches — refine your search.";
return;
}
hint.textContent = `${hits.length} match${hits.length === 1 ? "" : "es"} found.`;
hits.slice(0, 6).forEach((c) => {
const a = document.createElement("a");
a.href = `#/car/${c.id}`;
a.className =
"flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:border-cyan-300/30 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30";
a.innerHTML = `
<div class="min-w-0">
<div class="text-xs text-white/60">${c.brand}</div>
<div class="text-sm font-medium text-white/90 truncate">${c.model}</div>
</div>
<div class="shrink-0 text-xs text-white/60 inline-flex items-center gap-2">
<span class="rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 px-2 py-0.5">${c.tag}</span>
<span data-icon="lucide:chevron-right" data-size="1.125rem" data-stroke="1.5" class="text-white/70"></span>
</div>
`;
results.appendChild(a);
});
mountAllIcons(results);
}
function softSetText(id, value) {
const el = $(id);
if (el) el.textContent = value;
}
function renderCarDetail(car) {
softSetText("#detailBrand", car.brand);
softSetText("#detailModel", car.model);
softSetText("#detailYear", car.year);
softSetText("#detailTag", car.tag);
const chips = $("#detailChips");
chips.innerHTML = "";
car.highlights.forEach(h => {
const span = document.createElement("span");
span.className = "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur";
span.textContent = h;
chips.appendChild(span);
});
const spec = car.specs;
const rows = [
["Engine", spec.engine, "lucide:cog"],
["Power", spec.power, "lucide:zap"],
["Torque", spec.torque, "lucide:activity"],
["Top speed", spec.topSpeed, "lucide:gauge"],
["Drivetrain", spec.drivetrain, "lucide:git-merge"],
];
const specGrid = $("#specGrid");
specGrid.innerHTML = "";
rows.forEach(([k, v, icon]) => {
const card = document.createElement("div");
card.className = "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 hover:border-cyan-300/25 transition";
card.innerHTML = `
<div class="flex items-start justify-between gap-3">
<div>
<div class="text-xs text-white/55">${k}</div>
<div class="mt-1 text-sm sm:text-base font-medium text-white/90">${v}</div>
</div>
<div class="rounded-xl border border-white/10 bg-black/25 p-2 text-white/70">
<span data-icon="${icon}" data-size="1.125rem" data-stroke="1.5"></span>
</div>
</div>
`;
specGrid.appendChild(card);
});
mountAllIcons(specGrid);
$("#viewerBadge").textContent = "Interactive 3D • Drag to rotate • Scroll/pinch to zoom";
$("#arNote").textContent = "AR View: uses device Quick Look / Scene Viewer in production builds.";
requestAnimationFrame(() => {
initViewerIfNeeded("detailViewer", { quality: "high", interactive: true });
});
}
function initViewerIfNeeded(canvasId, opts = {}) {
const canvas = document.getElementById(canvasId);
if (!canvas) return;
if (state.viewers.has(canvas)) return;
const renderer = new THREE.WebGLRenderer({
canvas,
antialias: true,
alpha: true,
powerPreference: "high-performance"
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = opts.quality === "high" ? 1.1 : 1.0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(3.2, 1.7, 4.2);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enablePan = false;
controls.rotateSpeed = 0.6;
controls.minDistance = 2.2;
controls.maxDistance = 7.0;
controls.minPolarAngle = Math.PI * 0.12;
controls.maxPolarAngle = Math.PI * 0.48;
controls.autoRotate = !opts.interactive;
controls.autoRotateSpeed = 0.7;
const hemi = new THREE.HemisphereLight(0xbfefff, 0x0b0f14, 0.75);
scene.add(hemi);
const key = new THREE.DirectionalLight(0xe8fbff, 2.1);
key.position.set(4, 5, 3);
scene.add(key);
const fill = new THREE.DirectionalLight(0x7dd3fc, 0.9);
fill.position.set(-6, 2, 4);
scene.add(fill);
const rim = new THREE.DirectionalLight(0x22d3ee, 1.2);
rim.position.set(-2, 3, -6);
scene.add(rim);
const floorGeo = new THREE.CircleGeometry(6, 64);
const floorMat = new THREE.MeshStandardMaterial({
color: 0x05070b,
roughness: 0.25,
metalness: 0.1,
emissive: new THREE.Color(0x020307),
emissiveIntensity: 0.85
});
const floor = new THREE.MeshloorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.72;
scene.add(floor);
const glowGeo = new THREE.RingGeometry(1.2, 2.5, 96);
const glowMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
const glow = new THREE.Mesh(glowGeo, glowMat);
glow.rotation.x = -Math.PI / 2;
glow.position.y = -0.715;
scene.add(glow);
const carGroup = new THREE.Group();
scene.add(carGroup);
const paint = new THREE.MeshPhysicalMaterial({
color: 0x0b111a,
metalness: 0.65,
roughness: 0.18,
clearcoat: 1.0,
clearcoatRoughness: 0.12,
sheen: 0.25,
sheenRoughness: 0.7,
reflectivity: 0.9
});
const glass = new THREE.MeshPhysicalMaterial({
color: 0x7dd3fc,
metalness: 0.0,
roughness: 0.05,
transmission: 1.0,
thickness: 0.25,
ior: 1.4,
transparent: true,
opacity: 0.85
});
const trim = new THREE.MeshStandardMaterial({
color: 0x0b0f14,
metalness: 0.8,
roughness: 0.35
});
const emissive = new THREE.MeshStandardMaterial({
color: 0x0a1017,
emissive: new THREE.Color(0x22d3ee),
emissiveIntensity: 1.35,
roughness: 0.6,
metalness: 0.2
});
const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.65, 1.45), paint);
body.position.y = 0.0;
body.geometry.computeVertexNormals();
carGroup.add(body);
const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.55, 1.25), glass);
cabin.position.set(0.2, 0.48, 0);
carGroup.add(cabin);
const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.8, 1.2, 24, 1, false, 0, Math.PI * 2), paint);
nose.rotation.z = Math.PI / 2;
nose.position.set(1.45, -0.05, 0);
carGroup.add(nose);
const diffuser = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.18, 1.1), trim);
diffuser.position.set(-1.55, -0.22, 0);
carGroup.add(diffuser);
const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0a0f16, metalness: 0.25, roughness: 0.65 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0x0c1722, metalness: 0.85, roughness: 0.22 });
const wheelGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.26, 28);
const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.28, 28);
function wheel(x, z) {
const g = new THREE.Group();
const tire = new THREE.Mesh(wheelGeo, wheelMat);
tire.rotation.z = Math.PI / 2;
const rim = new THREE.Mesh(rimGeo, rimMat);
rim.rotation.z = Math.PI / 2;
g.add(tire);
g.add(rim);
g.position.set(x, -0.33, z);
return g;
}
carGroup.add(wheel(1.05, 0.7));
carGroup.add(wheel(1.05, -0.7));
carGroup.add(wheel(-1.05, 0.7));
carGroup.add(wheel(-1.05, -0.7));
const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.6), emissive);
hl1.position.set(1.62, 0.05, 0.42);
const hl2 = hl1.clone();
hl2.position.z = -0.42;
carGroup.add(hl1, hl2);
const under = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.06, 1.25), new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.07 }));
under.position.set(0.0, -0.36, 0);
carGroup.add(under);
carGroup.rotation.y = -0.65;
const ro = new ResizeObserver(() => {
const rect = canvas.getBoundingClientRect();
const w = Math.max(1, Math.floor(rect.width));
const h = Math.max(1, Math.floor(rect.height));
renderer.setSize(w, h, false);
camera.aspect = w / h;
camera.updateProjectionMatrix();
});
ro.observe(canvas);
let isVisible = true;
const io = new IntersectionObserver((entries) => {
isVisible = entries.some(e => e.isIntersecting);
}, { threshold: 0.08 });
io.observe(canvas);
let raf = 0;
const tick = () => {
raf = requestAnimationFrame(tick);
if (!isVisible) return;
if (!opts.interactive && !state.preferReduced) {
carGroup.rotation.y += 0.0025;
}
if (!state.preferReduced) {
glow.material.opacity = 0.10 + 0.03 * Math.sin(performance.now() * 0.001);
}
controls.update();
renderer.render(scene, camera);
};
tick();
state.viewers.set(canvas, { renderer, scene, camera, controls, carGroup, glow, io, ro, dispose() {
cancelAnimationFrame(raf);
io.disconnect();
ro.disconnect();
renderer.dispose();
state.viewers.delete(canvas);
}});
canvas.addEventListener("wheel", (e) => {
if (canvasId !== "detailViewer") return;
e.preventDefault();
const v = state.viewers.get(canvas);
if (!v) return;
const delta = e.deltaY > 0 ? 1 : -1;
v.controls.dollyIn(delta > 0 ? 1.08 : 0.92);
v.controls.update();
}, { passive: false });
let touchDist = null;
canvas.addEventListener("touchstart", (e) => {
if (canvasId !== "detailViewer") return;
if (e.touches && e.touches.length === 2) {
const dx = e.touches[0].clientX - e.touches[1].clientX;
const dy = e.touches[0].clientY - e.touches[1].clientY;
touchDist = Math.hypot(dx, dy);
}
}, { passive: true });
canvas.addEventListener("touchmove", (e) => {
if (canvasId !== "detailViewer") return;
if (e.touches && e.touches.length === 2 && touchDist != null) {
const dx = e.touches[0].clientX - e.touches[1].clientX;
const dy = e.touches[0].clientY - e.touches[1].clientY;
const nd = Math.hypot(dx, dy);
const diff = nd - touchDist;
const v = state.viewers.get(canvas);
if (v) {
v.controls.dollyIn(diff > 0 ? 0.98 : 1.02);
v.controls.update();
}
touchDist = nd;
}
}, { passive: true });
canvas.addEventListener("touchend", () => { touchDist = null; }, { passive: true });
}
function initThumbViewersLazy() {
const canvases = $$(".car-thumb");
const io = new IntersectionObserver((entries) => {
entries.forEach((e) => {
if (!e.isIntersecting) return;
const c = e.target;
initViewerIfNeeded(c.id || (c.id = `thumb_${Math.random().toString(16).slice(2)}`), { quality: "low", interactive: false });
io.unobserve(c);
});
}, { threshold: 0.12 });
canvases.forEach(c => io.observe(c));
}
function bindUI() {
$("#q").addEventListener("input", doSearch);
$("#searchBtn").addEventListener("click", () => { doSearch(); $("#q").focus(); });
$("#homeBtn").addEventListener("click", (e) => { e.preventDefault(); setRoute("home"); });
$("#logoBtn").addEventListener("click", (e) => { e.preventDefault(); setRoute("home"); });
$("#rotateBtn").addEventListener("click", () => {
const v = state.viewers.get($("#detailViewer"));
if (!v) return;
v.controls.autoRotate = !v.controls.autoRotate;
$("#rotateBtnLabel").textContent = v.controls.autoRotate ? "Rotate: On" : "Rotate: Off";
});
$("#zoomInBtn").addEventListener("click", () => {
const v = state.viewers.get($("#detailViewer"));
if (!v) return;
v.controls.dollyIn(0.92);
v.controls.update();
});
$("#zoomOutBtn").addEventListener("click", () => {
const v = state.viewers.get($("#detailViewer"));
if (!v) return;
v.controls.dollyIn(1.08);
v.controls.update();
});
$("#fullscreenBtn").addEventListener("click", async () => {
const wrap = $("#viewerWrap");
try {
if (!document.fullscreenElement) await wrap.requestFullscreen();
else await document.exitFullscreen();
} catch (_) {}
});
$("#arBtn").addEventListener("click", () => {
const dlg = $("#arDialog");
dlg.classList.remove("hidden");
dlg.setAttribute("aria-hidden", "false");
$("#arClose").focus();
});
$("#arClose").addEventListener("click", () => {
const dlg = $("#arDialog");
dlg.classList.add("hidden");
dlg.setAttribute("aria-hidden", "true");
});
$("#backBtn").addEventListener("click", (e) => {
e.preventDefault();
setRoute("home");
});
$("#arDialog").addEventListener("click", (e) => {
if (e.target.id === "arDialog") $("#arClose").click();
});
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
const dlg = $("#arDialog");
if (!dlg.classList.contains("hidden")) $("#arClose").click();
}
});
}
// Continuous background glow effect (subtle drift + breathing intensity)
function animateBackground() {
const a = $("#bgA");
const b = $("#bgB");
const c = $("#bgC");
const pulse = $("#bgPulse");
if (!a || !b || !c) return;
if (state.preferReduced) {
if (pulse) pulse.style.opacity = "0.35";
return;
}
const tick = (t) => {
const time = t * 0.00006;
const x1 = 50 + 18 * Math.sin(time * 2.4);
const y1 = 50 + 16 * Math.cos(time * 2.0);
const x2 = 50 + 20 * Math.cos(time * 1.8);
const y2 = 50 + 14 * Math.sin(time * 2.2);
const x3 = 50 + 22 * Math.sin(time * 1.4);
const y3 = 50 + 18 * Math.cos(time * 1.6);
a.style.transform = `translate3d(${(x1 - 50) * 0.25}%, ${(y1 - 50) * 0.25}%, 0) scale(1.15)`;
b.style.transform = `translate3d(${(x2 - 50) * 0.22}%, ${(y2 - 50) * 0.22}%, 0) scale(1.2)`;
c.style.transform = `translate3d(${(x3 - 50) * 0.18}%, ${(y3 - 50) * 0.18}%, 0) scale(1.25)`;
if (pulse) {
const breathe = 0.55 + 0.20 * Math.sin(t * 0.0007) + 0.10 * Math.sin(t * 0.0013);
pulse.style.opacity = String(breathe);
}
requestAnimationFrame(tick);
};
requestAnimationFrame(tick);
}
function attachThumbIds() {
$$(".car-thumb").forEach((cv, i) => {
if (!cv.id) cv.id = `thumb_${i}_${Math.random().toString(16).slice(2)}`;
});
}
function init() {
const s = document.createElement("script");
s.src = "https://code.iconify.design/3/3.1.1/iconify.min.js";
s.async = true;
document.head.appendChild(s);
renderFeatured();
renderBrands();
mountAllIcons(document);
attachThumbIds();
initThumbViewersLazy();
bindUI();
initRouting();
initViewerIfNeeded("heroViewer", { quality: "high", interactive: false });
animateBackground();
if ("serviceWorker" in navigator) {
const sw = `
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
`;
const blob = new Blob([sw], { type: "text/javascript" });
const url = URL.createObjectURL(blob);
navigator.serviceWorker.register(url).catch(() => {});
}
}
window.addEventListener("DOMContentLoaded", init);



        window.addEventListener("DOMContentLoaded", () => {
          const zi = document.getElementById("zoomInBtnDesktop");
          const zo = document.getElementById("zoomOutBtnDesktop");
          const zi2 = document.getElementById("zoomInBtn");
          const zo2 = document.getElementById("zoomOutBtn");
          const rMobile = document.getElementById("rotateBtnMobile");
          if (zi && zi2) zi.addEventListener("click", () => zi2.click());
          if (zo && zo2) zo.addEventListener("click", () => zo2.click());
          if (rMobile) rMobile.addEventListener("click", () => document.getElementById("rotateBtn").click());
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
      
<a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-xl focus:border focus:border-cyan-300/30 focus:bg-black/70 focus:px-4 focus:py-2 focus:text-sm focus:backdrop-blur-xl" href="#main" id="skip">
    Skip to content
  </a>

<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 bg-[#05060a]"></div>
<div className="absolute inset-0 opacity-90">
<div className="absolute -inset-32 blur-3xl" id="bgA" style={{background: 'radial-gradient(closest-side, rgba(34,211,238,0.18), rgba(34,211,238,0.00) 65%)'}}></div>
<div className="absolute -inset-32 blur-3xl" id="bgB" style={{background: 'radial-gradient(closest-side, rgba(56,189,248,0.16), rgba(56,189,248,0.00) 62%)'}}></div>
<div className="absolute -inset-32 blur-3xl" id="bgC" style={{background: 'radial-gradient(closest-side, rgba(99,102,241,0.10), rgba(99,102,241,0.00) 68%)'}}></div>
</div>

<div className="absolute inset-0 opacity-60" id="bgPulse" style="background:
        radial-gradient(1100px circle at 50% 30%, rgba(34,211,238,0.10), rgba(34,211,238,0.00) 60%),
        radial-gradient(900px circle at 70% 70%, rgba(56,189,248,0.09), rgba(56,189,248,0.00) 62%),
        radial-gradient(950px circle at 25% 75%, rgba(99,102,241,0.07), rgba(99,102,241,0.00) 64%);
        filter: blur(40px);">
</div>

<div className="absolute inset-0 opacity-70">
<div className="absolute -inset-40" style="background:
          conic-gradient(from 180deg at 50% 50%,
            rgba(34,211,238,0.00),
            rgba(34,211,238,0.10),
            rgba(56,189,248,0.00),
            rgba(99,102,241,0.07),
            rgba(34,211,238,0.00));
          filter: blur(56px);">
</div>
</div>

<div className="absolute inset-0" style="background-image:
        radial-gradient(circle at 12% 22%, rgba(255,255,255,0.06) 0.5px, transparent 1px),
        radial-gradient(circle at 78% 34%, rgba(34,211,238,0.08) 0.5px, transparent 1px),
        radial-gradient(circle at 62% 78%, rgba(255,255,255,0.05) 0.5px, transparent 1px),
        radial-gradient(circle at 32% 66%, rgba(56,189,248,0.07) 0.5px, transparent 1px);
        background-size: 22rem 22rem, 28rem 28rem, 26rem 26rem, 30rem 30rem;
        background-repeat: repeat;">
</div>

<div className="absolute inset-0" style={{background: 'radial-gradient(1200px circle at 50% 20%, rgba(0,0,0,0.10), rgba(0,0,0,0.78) 70%)'}}>
</div>
</div>
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between gap-4">
<a className="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 rounded-xl px-2 py-1" href="#/" id="logoBtn">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<div className="text-sm font-semibold tracking-tight text-white/90">NC</div>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-white/90">NEO CARVERSE</div>
<div className="text-xs text-white/50">Global 3D car universe</div>
</div>
</a>
<nav className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" href="#/" id="homeBtn">
<span data-icon="lucide:home" data-size="1.125rem" data-stroke="1.5"></span>
            Home
          </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" href="#featured">
<span data-icon="lucide:star" data-size="1.125rem" data-stroke="1.5"></span>
            Featured
          </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" href="#brands">
<span data-icon="lucide:grid-2x2" data-size="1.125rem" data-stroke="1.5"></span>
            Brands
          </a>
</nav>
</div>
</div>
</header>
<div aria-hidden="false" className="sr-only">
<h1 id="pageTitle">Explore every car on Earth — in 3D.</h1>
</div>
<main className="mx-auto max-w-7xl px-4 sm:px-6" id="home">
<section className="pt-8 sm:pt-12 pb-10 sm:pb-14" id="main">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="p-6 sm:p-8">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.10)]">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]"></span>
                No login • Instant 3D exploration
              </div>
<h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                A global digital car universe — cinematic 3D, instantly.
              </h2>
<p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                Explore brands, models, and next-gen concepts with interactive 360° rotation, zoom, fullscreen viewing, and AR-ready experiences — optimized for smooth performance across devices.
              </p>
<div className="mt-6">
<div className="relative rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<div className="flex items-center gap-2 p-2">
<div className="ml-1 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/75">
<span data-icon="lucide:search" data-size="1.125rem" data-stroke="1.5"></span>
</div>
<label className="sr-only" htmlFor="q">Search</label>
<input className="w-full bg-transparent text-sm sm:text-base text-white/90 placeholder:text-white/35 outline-none py-2" id="q" placeholder="Search brand or model (e.g., ion, gt, v8)" type="search"/>
<button className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-50 hover:bg-cyan-300/15 hover:border-cyan-300/35 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="searchBtn">
<span data-icon="lucide:arrow-right" data-size="1.125rem" data-stroke="1.5"></span>
                      Go
                    </button>
</div>
<div className="px-4 pb-3">
<div className="text-xs text-white/50" id="searchHint">Try “ion”, “gt”, or “v8”.</div>
<div className="mt-3 grid grid-cols-1 gap-2" id="searchResults"></div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:rotate-3d" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">360° Control</div>
</div>
<div className="mt-2 text-xs text-white/55">Drag, touch, zoom — smooth and precise.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:sparkles" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">Studio Lighting</div>
</div>
<div className="mt-2 text-xs text-white/55">Realistic reflections and premium feel.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:scan-face" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">AR-ready</div>
</div>
<div className="mt-2 text-xs text-white/55">Mobile-first AR pipeline compatible.</div>
</div>
</div>
</div>
<div className="border-t border-white/10 bg-gradient-to-r from-cyan-300/10 via-white/0 to-sky-300/10 p-5 sm:p-6">
<div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:leaf" data-size="1rem" data-stroke="1.5"></span>
                  Lazy-loaded 3D
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:rocket" data-size="1rem" data-stroke="1.5"></span>
                  60fps-first motion
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:shield-check" data-size="1rem" data-stroke="1.5"></span>
                  Accessible UI
                </span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-sky-300/10"></div>
<div className="relative p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-white/55">Showroom</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-white">Hero 3D Preview</div>
<div className="mt-1 text-xs text-white/55">Auto-rotate • Real-time lighting • Subtle glow floor</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/65">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.6)]"></span>
                    Live
                  </div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-black/30 overflow">
<div className="relative aspect-[16/10]">
<canvas className="absolute inset0 w-full h-full" id="heroViewer"></canvas>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/ via-black/0 to-black/0"></div>
<div className="absolute left-4 bottom-4 right-4 items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10-black/35 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
<span data-icon="luc:rotate-3d" data-size="1rem" data-stroke="1.5"></span>
                      Cinematic rotation                    </div>
<a className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-50 hover:bg-cyan-300/15 hover:border-cyan-300/35 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" href="#featured">
                      Explore featured
                      <span data-icon="lucide:arrow-down" data-size="1rem" data-stroke="1.5"></span>
</a>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-white/55">Controls</div>
<div className="mt-1 text-white/85 font-medium">Drag / Touch</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-white/55">Zoom</div>
<div className="mt-1 text-white/85 font-medium">Scroll / Pinch</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-white/55">Lighting</div>
<div className="mt-1 text-white/85 font-medium">Studio HDR feel</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-white/55">Mode</div>
<div className="mt-1 text-white/85 font-medium">Dark glass</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></section>
<section className="pb-10 sm:pb-14" id="featured">
<div className="flex items-end justify-between gap-4">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Featured cars</h3>
<p className="mt-1 text-sm text-white/60">Horizontal snap browsing with interactive 3D previews.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-white/55">
<span data-icon="lucide:mouse" data-size="1rem" data-stroke="1.5"></span>
          Scroll
          <span className="text-white/20">•</span>
          Snap
        </div>
</div>
<div className="mt-5">
<div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" id="featuredRail"></div>
</div>
</section>
<section className="pb-14 sm:pb-20" id="brands">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Browse by brand</h3>
<p className="mt-1 text-sm text-white/60">A glowing grid of brands for fast discovery.</p>
</div>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4" id="brandGrid"></div>
</section>
<footer className="pb-10">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white/90">NEO CARVERSE</div>
<div className="mt-1 text-xs text-white/55">Prototype: interactive viewer, lazy thumbnails, AR-ready entry points.</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:smartphone" data-size="1rem" data-stroke="1.5"></span>
              Mobile-first
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:badge-check" data-size="1rem" data-stroke="1.5"></span>
              Accessible
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:layers" data-size="1rem" data-stroke="1.5"></span>
              PWA-ready
            </span>
</div>
</div>
</div>
</footer>
</main>
<main className="hidden mx-auto max-w-7xl px-4 sm:px-6" id="detail">
<section className="pt-8 sm:pt-12 pb-12 sm:pb-16" id="detailMain">
<div className="flex items-start justify-between gap-4">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" href="#/" id="backBtn">
<span data-icon="lucide:arrow-left" data-size="1.125rem" data-stroke="1.5"></span>
          Back
        </a>
<div className="hidden sm:flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.10)]">
<span data-icon="lucide:badge" data-size="1rem" data-stroke="1.5"></span>
            No login required
          </div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
<div className="lg:col-span-7">
<div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]" id="viewerWrap">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-sky-300/10"></div>
<div className="relative p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="text-xs text-white/55" id="detailBrand">Brand</div>
<div className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-white truncate">
<span id="detailModel">Model</span>
</div>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/60">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur-xl">
<span data-icon="lucide:calendar" data-size="1rem" data-stroke="1.5"></span>
<span id="detailYear">—</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-cyan-100">
<span data-icon="lucide:sparkle" data-size="1rem" data-stroke="1.5"></span>
<span id="detailTag">—</span>
</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-sm text-white/80 hover:bg-black/45 hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="rotateBtn">
<span data-icon="lucide:refresh-cw" data-size="1.125rem" data-stroke="1.5"></span>
<span id="rotateBtnLabel">Rotate: Off</span>
</button>
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-sm text-white/80 hover:bg-black/45 hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="fullscreenBtn">
<span data-icon="lucide:fullscreen" data-size="1.125rem" data-stroke="1.5"></span>
                    Fullscreen
                  </button>
<button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-50 hover:bg-cyan-300/15 hover:border-cyan-300/35 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30 shadow-[0_0_36px_rgba(34,211,238,0.12)]" id="arBtn">
<span data-icon="lucide:scan" data-size="1.125rem" data-stroke="1.5"></span>
                    AR View
                  </button>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
<div className="relative aspect-[16/11]">
<canvas className="absolute inset-0 w-full h-full" id="detailViewer"></canvas>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-black/0 to-black/0"></div>
<div className="sm:hidden absolute left-3 right-3 bottom-3 flex items-center justify-between gap-2">
<button aria-label="Zoom out" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/45 px-3 py-2 text-sm text-white/80 backdrop-blur-xl hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="zoomOutBtn">
<span data-icon="lucide:minus" data-size="1.125rem" data-stroke="1.5"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/45 px-4 py-2 text-sm text-white/80 backdrop-blur-xl hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="rotateBtnMobile">
<span data-icon="lucide:refresh-cw" data-size="1.125rem" data-stroke="1.5"></span>
                      Rotate
                    </button>
<button aria-label="Zoom in" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/45 px-3 py-2 text-sm text-white/80 backdrop-blur-xl hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="zoomInBtn">
<span data-icon="lucide:plus" data-size="1.125rem" data-stroke="1.5"></span>
</button>
</div>
<div className="absolute left-4 top-4 hidden sm:flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.6)]"></span>
<span id="viewerBadge">Interactive 3D</span>
</div>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex flex-wrap items-center gap-2" id="detailChips"></div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="zoomOutBtnDesktop">
<span data-icon="lucide:minus" data-size="1.125rem" data-stroke="1.5"></span>
                    Zoom out
                  </button>
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.05] hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="zoomInBtnDesktop">
<span data-icon="lucide:plus" data-size="1.125rem" data-stroke="1.5"></span>
                    Zoom in
                  </button>
</div>
</div>
<div className="mt-3 text-xs text-white/50" id="arNote"></div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="p-6 sm:p-7">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">Specs</h3>
<p className="mt-1 text-sm text-white/60">Core performance and drivetrain details.</p>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3" id="specGrid"></div>
<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
<div className="flex items-center justify-between gap-3">
<div className="text-sm font-semibold tracking-tight text-white/90">Gallery</div>
<div className="text-xs text-white/55">Optional</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-cyan-300/10"></div>
<div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-sky-300/10"></div>
<div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-indigo-300/10"></div>
</div>
<div className="mt-3 text-xs text-white/55">In production: real studio images + interior shots.</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:cpu" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">Performance strategy</div>
</div>
<div className="mt-2 text-xs text-white/55 leading-relaxed">
                    Lazy-load 3D assets, progressive LOD, and responsive rendering with intersection-based pausing to preserve battery and keep motion smooth.
                  </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:glasses" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">Showroom feel</div>
</div>
<div className="mt-2 text-xs text-white/55 leading-relaxed">
                    Soft floor glow + studio rim lights for a premium reflective silhouette. Replace the procedural model with photoreal assets for final quality.
                  </div>
</div>
</div>
<div className="mt-6">
<a className="sr-only" href="#/ ">Home</a>
</div>
</div>
</div>
</div>
</div>

</section>
</main>
<div aria-hidden="true" aria-label="AR View" aria-modal="true" className="hidden fixed inset-0 z-[80] p-4 sm:p-6" id="arDialog" role="dialog">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-white/55">AR View</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-white">Ready for mobile AR pipelines</div>
</div>
<button aria-label="Close" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-white/80 hover:bg-black/45 hover:border-cyan-300/25 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="arClose">
<span data-icon="lucide:x" data-size="1.125rem" data-stroke="1.5"></span>
</button>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/70 leading-relaxed">
          This prototype shows the entry point and UI behavior. In production, connect:
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:apple" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">iOS</div>
</div>
<div className="mt-2 text-white/55">USDZ + Quick Look via <span className="text-white/70">rel="ar"</span>.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-white/85">
<span data-icon="lucide:android" data-size="1.125rem" data-stroke="1.5"></span>
<div className="text-sm font-medium">Android</div>
</div>
<div className="mt-2 text-white/55">glTF/GLB via Scene Viewer intent.</div>
</div>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<div className="text-xs text-white/50">Tip: keep AR models optimized with LOD + compressed textures.</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 hover:bg-cyan-300/15 hover:border-cyan-300/35 transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30" onclick="document.getElementById('arClose').click()">
<span data-icon="lucide:check" data-size="1.125rem" data-stroke="1.5"></span>
              Done
            </button>
</div>
</div>
</div>
<div className="border-t border-white/10 bg-gradient-to-r from-cyan-300/10 via-white/0 to-sky-300/10 p-5 sm:p-6">
<div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:package" data-size="1rem" data-stroke="1.5"></span>
            GLB + USDZ builds
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:image" data-size="1rem" data-stroke="1.5"></span>
            KTX2 textures
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
<span data-icon="lucide:badge-check" data-size="1rem" data-stroke="1.5"></span>
            Safe defaults
          </span>
</div>
</div>
</div>
</div>

    </>
  );
}
