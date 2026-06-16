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



      lucide.createIcons();

      const ctx = document.getElementById('trainingChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Training activity',
              data: [2, 4, 3, 6, 5, 4, 7],
              borderColor: '#7C3AED',
              backgroundColor: 'rgba(124, 58, 237, 0.12)',
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#64748B', font: { size: 12 } } },
              y: { grid: { color: 'rgba(148, 163, 184, 0.25)' }, ticks: { color: '#64748B', font: { size: 12 } } }
            }
          }
        });
      }

      const tabBrand = document.getElementById('tab-brand-voice');
      const tabVisual = document.getElementById('tab-visual-identity');
      const panelBrand = document.getElementById('panel-brand-voice');
      const panelVisual = document.getElementById('panel-visual-identity');
      const visualForm = document.getElementById('visual-form');
      const visualSuccess = document.getElementById('visual-success');
      const saveVisualBtn = document.getElementById('save-visual');
      const writerushVisualBadge = document.getElementById('writerush-visual-badge');
      const backToBrandBtn = document.getElementById('back-to-brand');
      const goDashboardBtn = document.getElementById('go-dashboard');
      const editVisualBtn = document.getElementById('edit-visual');

      const state = {
        visualConfigured: false,
        selectedMoods: new Set(),
        selectedLayout: null
      };

      function setActiveTab(which) {
        const isBrand = which === 'brand';
        tabBrand.className = isBrand
          ? 'flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-white text-slate-900 border border-slate-200'
          : 'flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900';
        tabVisual.className = !isBrand
          ? 'flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-white text-slate-900 border border-slate-200'
          : 'flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900';

        panelBrand.classList.toggle('hidden', !isBrand);
        panelVisual.classList.toggle('hidden', isBrand);
        lucide.createIcons();
      }

      tabBrand?.addEventListener('click', () => setActiveTab('brand'));
      tabVisual?.addEventListener('click', () => setActiveTab('visual'));
      backToBrandBtn?.addEventListener('click', () => setActiveTab('brand'));
      goDashboardBtn?.addEventListener('click', () => setActiveTab('brand'));
      editVisualBtn?.addEventListener('click', () => {
        visualSuccess?.classList.add('hidden');
        visualForm?.classList.remove('hidden');
        lucide.createIcons();
      });

      const primaryColor = document.getElementById('primaryColor');
      const secondaryColor = document.getElementById('secondaryColor');
      const accentColor = document.getElementById('accentColor');
      const primarySwatch = document.getElementById('primarySwatch');
      const secondarySwatch = document.getElementById('secondarySwatch');
      const accentSwatch = document.getElementById('accentSwatch');
      const primaryAutoFill = document.getElementById('primaryAutoFill');

      function normalizeHex(v) {
        if (!v) return '';
        let s = v.trim();
        if (!s.startsWith('#')) s = '#' + s;
        const shortOk = /^#[0-9a-fA-F]{3}$/;
        const longOk = /^#[0-9a-fA-F]{6}$/;
        if (shortOk.test(s) || longOk.test(s)) return s.toUpperCase();
        return s.toUpperCase();
      }

      function isValidHex(v) {
        const s = (v || '').trim();
        return /^#[0-9a-fA-F]{6}$/.test(s) || /^#[0-9a-fA-F]{3}$/.test(s);
      }

      function setSwatch(el, value) {
        const v = normalizeHex(value);
        if (el) el.style.background = isValidHex(v) ? v : '#FFFFFF';
      }

      function refreshSwatches() {
        setSwatch(primarySwatch, primaryColor?.value);
        setSwatch(secondarySwatch, secondaryColor?.value);
        setSwatch(accentSwatch, accentColor?.value);
      }

      [primaryColor, secondaryColor, accentColor].forEach((inp) => {
        inp?.addEventListener('input', refreshSwatches);
        inp?.addEventListener('blur', () => {
          if (!inp) return;
          inp.value = normalizeHex(inp.value);
          refreshSwatches();
        });
      });

      refreshSwatches();

      const moodButtons = Array.from(document.querySelectorAll('[data-mood-tag]'));
      function updateMoodUI() {
        moodButtons.forEach(btn => {
          const label = btn.textContent.trim();
          const selected = state.selectedMoods.has(label);
          btn.className = selected
            ? 'rounded-full border border-violet-600 bg-violet-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200'
            : 'rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100';
        });
      }

      moodButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const label = btn.textContent.trim();
          if (state.selectedMoods.has(label)) {
            state.selectedMoods.delete(label);
          } else {
            if (state.selectedMoods.size >= 2) return;
            state.selectedMoods.add(label);
          }
          updateMoodUI();
        });
      });
      updateMoodUI();

      const layoutCards = Array.from(document.querySelectorAll('[data-layout-card]'));
      function updateLayoutUI() {
        layoutCards.forEach(card => {
          const val = card.getAttribute('data-value');
          const selected = state.selectedLayout === val;
          card.className = selected
            ? 'rounded-2xl border border-violet-300 bg-violet-50 p-4 text-left hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100'
            : 'rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100';
        });
      }

      layoutCards.forEach(card => {
        card.addEventListener('click', () => {
          state.selectedLayout = card.getAttribute('data-value');
          updateLayoutUI();
        });
      });
      updateLayoutUI();

      const logoUpload = document.getElementById('logoUpload');
      const logoMeta = document.getElementById('logoMeta');
      const logoName = document.getElementById('logoName');
      const logoThumb = document.getElementById('logoThumb');

      function rgbToHex(r, g, b) {
        const toHex = (n) => n.toString(16).padStart(2, '0');
        return ('#' + toHex(r) + toHex(g) + toHex(b)).toUpperCase();
      }

      function detectDominantColorFromImage(img) {
        const canvas = document.createElement('canvas');
        const ctx2 = canvas.getContext('2d', { willReadFrequently: true });
        const w = 64, h = 64;
        canvas.width = w;
        canvas.height = h;
        ctx2.drawImage(img, 0, 0, w, h);
        const data = ctx2.getImageData(0, 0, w, h).data;
        let rSum = 0, gSum = 0, bSum = 0, count = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a < 200) continue;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          if (max > 245 && min > 245) continue;
          if (max < 20 && min < 20) continue;
          rSum += r; gSum += g; bSum += b;
          count++;
        }

        if (!count) return null;
        return rgbToHex(Math.round(rSum / count), Math.round(gSum / count), Math.round(bSum / count));
      }

      logoUpload?.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        if (logoName) logoName.textContent = file.name;

        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          const hex = detectDominantColorFromImage(img);
          URL.revokeObjectURL(url);

          if (logoThumb) {
            logoThumb.innerHTML = '';
            const im = document.createElement('img');
            im.src = img.src;
            im.alt = 'Uploaded logo preview';
            im.className = 'h-full w-full object-cover';
            logoThumb.appendChild(im);
          }

          if (logoMeta) {
            logoMeta.classList.remove('hidden');
            logoMeta.classList.add('flex');
          }
          if (hex && primaryColor) {
            primaryColor.value = hex;
            refreshSwatches();
            if (primaryAutoFill) {
              primaryAutoFill.classList.remove('hidden');
              primaryAutoFill.classList.add('flex');
            }
          }
          lucide.createIcons();
        };
        img.crossOrigin = 'anonymous';
        img.src = url;
      });

      saveVisualBtn?.addEventListener('click', () => {
        state.visualConfigured = true;
        if (writerushVisualBadge) writerushVisualBadge.classList.remove('hidden');
        visualForm?.classList.add('hidden');
        visualSuccess?.classList.remove('hidden');
        lucide.createIcons();
      });

      setActiveTab('brand');
    


      (function() { const modal = document.getElementById('ai-image-modal'); const openBtn = document.getElementById('open-ai-image-modal-btn'); const closeBtn = document.getElementById('close-image-modal'); const toggleAi = document.getElementById('toggle-mode-ai'); const toggleInfo = document.getElementById('toggle-mode-info'); const fieldsAi = document.getElementById('fields-ai-image'); const fieldsInfo = document.getElementById('fields-infographic'); const brandColorsRow = document.getElementById('brand-colors-row'); const infoTypeGrid = document.getElementById('infographic-type-grid'); const generateBtn = document.getElementById('modal-generate-btn'); if (openBtn) { openBtn.addEventListener('click', () => { modal.classList.remove('hidden'); const visualBadge = document.getElementById('writerush-visual-badge'); if (visualBadge && !visualBadge.classList.contains('hidden')) { brandColorsRow.classList.remove('hidden'); } else { brandColorsRow.classList.add('hidden'); } lucide.createIcons(); }); } if (closeBtn) { closeBtn.addEventListener('click', () => { modal.classList.add('hidden'); }); } modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('hidden'); } }); toggleAi.addEventListener('click', () => { toggleAi.className = "flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition bg-violet-600 text-white shadow-sm"; toggleInfo.className = "flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition text-slate-600 hover:text-slate-900"; fieldsAi.classList.remove('hidden'); fieldsInfo.classList.add('hidden'); }); toggleInfo.addEventListener('click', () => { toggleInfo.className = "flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition bg-violet-600 text-white shadow-sm"; toggleAi.className = "flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition text-slate-600 hover:text-slate-900"; fieldsInfo.classList.remove('hidden'); fieldsAi.classList.add('hidden'); const visualBadge = document.getElementById('writerush-visual-badge'); if (visualBadge && !visualBadge.classList.contains('hidden')) { brandColorsRow.classList.remove('hidden'); } else { brandColorsRow.classList.add('hidden'); } }); if (infoTypeGrid) { const tiles = infoTypeGrid.querySelectorAll('.info-type-tile'); tiles.forEach(tile => { tile.addEventListener('click', () => { tiles.forEach(t => { t.className = "info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white text-center transition hover:bg-slate-50 focus:outline-none" + (t.getAttribute('data-type') === 'tips' ? " col-span-2" : ""); const icon = t.querySelector('i'); if (icon) icon.className = "h-5 w-5 text-slate-400 mb-1"; }); tile.className = "info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-violet-600 bg-violet-50 text-center transition focus:outline-none" + (tile.getAttribute('data-type') === 'tips' ? " col-span-2" : ""); const activeIcon = tile.querySelector('i'); if (activeIcon) activeIcon.className = "h-5 w-5 text-violet-600 mb-1"; }); }); } if (generateBtn) { generateBtn.addEventListener('click', () => { modal.classList.add('hidden'); }); } })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5 text-slate-900" data-lucide="sparkles"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Brand Voice
            </h1>
<p className="text-sm text-slate-600">
              Manage voice profiles and training sources.
            </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
<i className="h-4 w-4 text-slate-600" data-lucide="search"></i>
            Search
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700">
<i className="h-4 w-4" data-lucide="plus"></i>
            Create profile
          </button>
</div>
</header>

<main className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="lg:col-span-5" id="brand-voice-main">
<div className="rounded-2xl border border-slate-200 bg-white">
<div className="flex items-start justify-between gap-4 p-5 border-b border-slate-200">
<div>
<h2 className="text-base font-semibold text-slate-900">
                  Brand Profiles
                </h2>
<p className="text-sm text-slate-600">
                  Open a profile to edit voice and visual identity.
                </p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
<i className="h-4 w-4 text-slate-600" data-lucide="sliders-horizontal"></i>
                Filters
              </button>
</div>
<div className="p-5 space-y-4">

<button className="w-full text-left rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition p-5" id="open-writerush" type="button">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                        w
                      </div>
<div className="min-w-0">
<h3 className="text-base font-semibold text-slate-900 truncate">
                          writerush
                        </h3>
<p className="text-sm text-slate-600">
                          Updated May 25, 2026
                        </p>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                        Efficient
                      </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                        Systematic
                      </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                        Authoritative
                      </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                        Direct
                      </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                        Concise
                      </span>

<span className="hidden inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700" id="writerush-visual-badge">
<i className="h-3.5 w-3.5" data-lucide="palette"></i>
                        Visual
                      </span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      Active
                    </span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
</div>
</button>

<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-2 min-w-0">
<div className="h-9 w-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
<i className="h-4 w-4 text-slate-700" data-lucide="building-2"></i>
</div>
<div className="min-w-0">
<h3 className="text-base font-semibold text-slate-900 truncate">
                        acme
                      </h3>
<p className="text-sm text-slate-600">Updated Apr 3, 2026</p>
</div>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                    Friendly
                  </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                    Helpful
                  </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                    Optimistic
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:col-span-7" id="profile-detail">
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
<div className="p-5 border-b border-slate-200">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">
                    writerush
                  </h2>
<p className="text-sm text-slate-600">
                    Edit voice settings and training sources.
                  </p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50" id="open-ai-image-modal-btn">
<i className="h-4 w-4 text-slate-600" data-lucide="sparkles"></i>
                  AI Image
                </button>
</div>

<div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 p-1 border border-slate-200 w-full sm:w-auto">
<button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-white text-slate-900 border border-slate-200" id="tab-brand-voice" type="button">
<i className="h-4 w-4 text-slate-600" data-lucide="mic-2"></i>
                  Brand Voice
                </button>
<button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900" id="tab-visual-identity" type="button">
<i className="h-4 w-4 text-slate-500" data-lucide="palette"></i>
                  Visual Identity
                </button>
</div>
</div>

<div>

<div className="p-5" id="panel-brand-voice">
<div className="grid grid-cols-1 gap-6">
<div className="rounded-2xl border border-slate-200 bg-white">
<div className="p-5 border-b border-slate-200">
<h3 className="text-base font-semibold text-slate-900">
                        Voice settings
                      </h3>
<p className="text-sm text-slate-600">
                        Define how the brand sounds.
                      </p>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="tone">
                          Tone
                        </label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300" id="tone" type="text" value="Efficient, Systematic, Authoritative"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="do">
                          Do
                        </label>
<textarea className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300" id="do" rows="4">
Use short sentences. Be direct. Prefer checklists. Lead with outcomes.</textarea>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="dont">
                          Don’t
                        </label>
<textarea className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300" id="dont" rows="4">
Avoid fluff. Avoid excessive exclamation. Don’t hedge.</textarea>
</div>
<div className="pt-1">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200" id="analyze-voice">
<i className="h-4 w-4" data-lucide="wand-2"></i>
                          Analyze Brand Voice
                        </button>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white">
<div className="p-5 border-b border-slate-200">
<h3 className="text-base font-semibold text-slate-900">
                        Training sources
                      </h3>
<p className="text-sm text-slate-600">
                        Connect content to learn your brand voice.
                      </p>
</div>
<div className="p-5 space-y-4">
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<p className="text-sm font-medium text-slate-900">
                              Website
                            </p>
<p className="text-sm text-slate-600 truncate">
                              https://writerush.io
                            </p>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                            Synced
                          </span>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<p className="text-sm font-medium text-slate-900">
                              Docs
                            </p>
<p className="text-sm text-slate-600 truncate">
                              Product messaging &amp; guidelines
                            </p>
</div>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                            3 files
                          </span>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-white">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="link"></i>
<p className="text-sm font-medium text-slate-900">
                              Add source
                            </p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
<i className="h-4 w-4 text-slate-600" data-lucide="plus"></i>
                            Connect
                          </button>
</div>
</div>
<div className="mt-2">
<canvas aria-label="Training activity chart" height="110" id="trainingChart" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="panel-visual-identity">
<div className="p-5 sm:p-6" id="visual-form">
<div className="mx-auto max-w-3xl">
<div className="mb-6 flex items-start gap-3">
<button aria-label="Back to Brand Voice" className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" id="back-to-brand" type="button">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
</button>
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                          Set Up Visual Identity
                        </h2>
<p className="mt-1 text-sm text-slate-600">
                          For: writerush
                        </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
<p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                        Visual Identity
                      </p>
<div className="mt-5 space-y-6">
<div>
<label className="block text-sm font-medium text-slate-900">
                            Brand Colors
                          </label>
<div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="primaryColor">
                                Primary Color
                              </label>
<div className="mt-2 flex items-center gap-2">
<div className="h-10 w-10 shrink-0 rounded-xl border border-slate-200 bg-white" id="primarySwatch"></div>
<div className="relative flex-1">
<input aria-describedby="primaryAutoFill" autocomplete="off" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="primaryColor" inputmode="text" type="text" value="#6D28D9"/>
<span className="pointer-events-none absolute inset-y-0 right-3 hidden items-center text-emerald-600" id="primaryAutoFill">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
</span>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="secondaryColor">
                                Secondary Color
                              </label>
<div className="mt-2 flex items-center gap-2">
<div className="h-10 w-10 shrink-0 rounded-xl border border-slate-200 bg-white" id="secondarySwatch"></div>
<input autocomplete="off" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="secondaryColor" inputmode="text" type="text" value="#111827"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="accentColor">
                                Accent Color
                              </label>
<div className="mt-2 flex items-center gap-2">
<div className="h-10 w-10 shrink-0 rounded-xl border border-slate-200 bg-white" id="accentSwatch"></div>
<input autocomplete="off" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="accentColor" inputmode="text" type="text" value="#0EA5E9"/>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="logoUpload">
                            Brand Logo
                          </label>
<p className="mt-1 text-sm text-slate-600">
                            Upload your logo to auto-detect your primary brand
                            color. PNG recommended.
                          </p>
<div className="mt-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 transition hover:bg-slate-100">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
<i className="h-5 w-5 text-slate-700" data-lucide="upload"></i>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-900">
                                  Upload logo
                                </p>
<p className="text-sm text-slate-600">
                                  PNG, JPG up to 5MB
                                </p>
</div>
<div className="sm:ml-auto">
<input accept="image/*" className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border file:border-slate-200 file:bg-white file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-900 hover:file:bg-slate-50" id="logoUpload" type="file"/>
</div>
</div>
<div className="mt-4 hidden items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2" id="logoMeta">
<div className="flex min-w-0 items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50" id="logoThumb"></div>
<div className="min-w-0">
<p className="truncate text-sm font-medium text-slate-900" id="logoName">
                                    logo.png
                                  </p>
<p className="text-xs text-slate-600">
                                    Dominant color detected
                                  </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
                                Applied
                              </span>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="imageStyle">
                            Preferred Image Style
                          </label>
<div className="relative mt-2">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="imageStyle">
<option>Natural</option>
<option>Photorealistic</option>
<option>Illustration</option>
<option>Flat Design</option>
<option>Bold Graphic</option>
<option>Minimalist</option>
<option>Cinematic</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900">
                            Visual Mood (pick up to 2)
                          </label>
<div aria-label="Visual mood tags" className="mt-2 flex flex-wrap gap-2" id="moodTags">
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Bright &amp; Energetic
                            </button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Clean &amp; Professional
                            </button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Warm &amp; Friendly
                            </button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Bold &amp; Striking
                            </button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Soft &amp; Elegant
                            </button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-mood-tag="" type="button">
                              Dark &amp; Premium
                            </button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900">
                            Image Layout
                          </label>
<div aria-label="Image Layout" className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3" role="radiogroup">
<button className="rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-layout-card="" data-value="Visual-Heavy" type="button">
<p className="text-sm font-medium text-slate-900">
                                Visual-Heavy
                              </p>
</button>
<button className="rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-layout-card="" data-value="Balanced" type="button">
<p className="text-sm font-medium text-slate-900">
                                Balanced
                              </p>
</button>
<button className="rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-100" data-layout-card="" data-value="Text-Heavy" type="button">
<p className="text-sm font-medium text-slate-900">
                                Text-Heavy
                              </p>
</button>
</div>
</div>
<div className="pt-1">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200" id="save-visual" type="button">
                            Save Visual Identity
                            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<p className="mt-3 text-center text-sm text-slate-500">
                            This will apply to all AI image generation for this
                            brand profile.
                          </p>
</div>
</div>
</div>
</div>
</div>
<div className="hidden p-10 sm:p-14" id="visual-success">
<div className="mx-auto max-w-md text-center">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
<i className="h-7 w-7" data-lucide="shield-check"></i>
</div>
<h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                      Visual Identity Saved!
                    </h2>
<p className="mt-3 text-sm leading-6 text-slate-600">
                      Your brand visuals are ready. They will be applied
                      automatically when generating images for this brand.
                    </p>
<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                        w
                      </span>
<span className="text-sm font-medium text-slate-900">
                        writerush
                      </span>
<span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        Active
                      </span>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200" id="go-dashboard" type="button">
                      Go to Brand Dashboard
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="mt-4 text-sm font-medium text-violet-700 hover:text-violet-800" id="edit-visual" type="button">
                      Edit Visual Identity
                    </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm hidden" id="ai-image-modal">
<div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="bg-gradient-to-r from-violet-600 to-indigo-700 px-6 py-4 flex items-center justify-between shrink-0">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5 text-white" data-lucide="sparkles"></i>
<h3 className="font-semibold text-lg text-white">AI Image</h3>
</div>
<button className="text-white/80 hover:text-white transition focus:outline-none" id="close-image-modal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-6 overflow-y-auto space-y-6 flex-1">
<div className="bg-slate-100 p-1 rounded-full flex shrink-0">
<button className="flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition bg-violet-600 text-white shadow-sm" id="toggle-mode-ai" type="button">
<i className="h-4 w-4" data-lucide="wand-2"></i>
              AI Image
            </button>
<button className="flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-2 transition text-slate-600 hover:text-slate-900" id="toggle-mode-info" type="button">
<i className="h-4 w-4" data-lucide="grid"></i>
              Infographic
            </button>
</div>
<div id="modal-fields-container">
<div className="space-y-4" id="fields-ai-image">
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                  Describe the image you want to generate
                </label>
<textarea className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="ai-image-desc" placeholder="A futuristic office with bright lights and plants..." rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                    Image Size
                  </label>
<select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="ai-image-size">
<option value="1024x1024">1024x1024</option>
<option value="1200x628">1200x628</option>
<option value="1024x1792">1024x1792</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                    Image Style
                  </label>
<select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="ai-image-style">
<option value="Natural">Natural</option>
<option value="Photorealistic">Photorealistic</option>
<option value="Illustration">Illustration</option>
<option value="Flat Design">Flat Design</option>
<option value="Minimalist">Minimalist</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                  Image Alt Text
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="ai-image-alt" placeholder="Describe the image for accessibility..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                  Image File Name
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="ai-image-filename" placeholder="e.g. workspace-hero" type="text"/>
</div>
</div>
<div className="hidden space-y-5" id="fields-infographic">
<div>
<label className="block text-sm font-medium text-slate-900 mb-3">
                  Infographic Type
                </label>
<div className="grid grid-cols-2 gap-3" id="infographic-type-grid">
<button className="info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-violet-600 bg-violet-50 text-center transition focus:outline-none" data-type="step-by-step" type="button">
<i className="h-5 w-5 text-violet-600 mb-1" data-lucide="list-ordered"></i>
<span className="text-xs font-semibold text-slate-900">
                      Step-by-Step
                    </span>
</button>
<button className="info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white text-center transition hover:bg-slate-50 focus:outline-none" data-type="comparison" type="button">
<i className="h-5 w-5 text-slate-400 mb-1" data-lucide="columns"></i>
<span className="text-xs font-medium text-slate-900">
                      Comparison
                    </span>
</button>
<button className="info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white text-center transition hover:bg-slate-50 focus:outline-none" data-type="benefits" type="button">
<i className="h-5 w-5 text-slate-400 mb-1" data-lucide="check-square"></i>
<span className="text-xs font-medium text-slate-900">
                      Benefits List
                    </span>
</button>
<button className="info-type-tile flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white text-center transition hover:bg-slate-50 focus:outline-none" data-type="statistics" type="button">
<i className="h-5 w-5 text-slate-400 mb-1" data-lucide="bar-chart-2"></i>
<span className="text-xs font-medium text-slate-900">
                      Statistics
                    </span>
</button>
<button className="info-type-tile col-span-2 flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white text-center transition hover:bg-slate-50 focus:outline-none" data-type="tips" type="button">
<i className="h-5 w-5 text-slate-400 mb-1" data-lucide="lightbulb"></i>
<span className="text-xs font-medium text-slate-900">
                      Tips List
                    </span>
</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900">
                  Infographic Topic
                  <span className="text-red-500">*</span>
</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="info-topic" type="text" value="writerush - Efficient, Systematic, Authoritative"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900">
                  Key Points to Include
                </label>
<p className="text-xs text-slate-500 mt-0.5">
                  One point per line — these become your infographic content.
                </p>
<textarea className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="info-points" rows="4">
Use short sentences. Be direct.
Prefer checklists. Lead with outcomes.
Avoid fluff. Avoid excessive exclamation.</textarea>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                  Image Size
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="info-size">
<option value="1024x1024">Square (1024x1024)</option>
<option value="1200x628">Landscape (1200x628)</option>
<option selected="" value="1024x1792">
                      Portrait (1024x1792)
                    </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">
                  Image Style
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100" id="info-style">
<option value="Natural">Natural</option>
<option value="Photorealistic">Photorealistic</option>
<option value="Illustration">Illustration</option>
<option selected="" value="Flat Design">Flat Design</option>
<option value="Minimalist">Minimalist</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="hidden flex items-center gap-3 py-1" id="brand-colors-row">
<input className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" id="apply-brand-colors" type="checkbox"/>
<label className="text-sm font-medium text-slate-700" htmlFor="apply-brand-colors">
                  Apply my brand colors to this infographic
                </label>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end shrink-0">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200 shadow-sm transition" id="modal-generate-btn">
            Generate
          </button>
</div>
</div>
</div>


    </>
  );
}
