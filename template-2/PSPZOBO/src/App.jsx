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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      const state = {
        activeTab: 'colors',
        preview: true, // always on
        device: 'desktop',
        tokens: {
          colors: {
            primary: { name: 'primary', value: '#6366F1' },
            surface: { name: 'surface', value: '#0A0A0A' },
            text: { name: 'text', value: '#E5E7EB' }
          },
          typography: {
            family: 'Inter',
            weight: 600,
            scale: 1.125
          },
          spacing: { base: 8 },
          sizing: { container: 1200, gutter: 16 },
          borders: { radius: 10, width: 1 },
          effects: { shadow: 0.35, overlayOpacity: 0.3 }
        }
      };

      // Elements
      const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
      const panels = Array.from(document.querySelectorAll('.panel'));
      const deviceMobile = document.getElementById('deviceMobile');
      const deviceDesktop = document.getElementById('deviceDesktop');
      const deviceLabel = document.getElementById('deviceLabel');
      const stage = document.getElementById('stage');
      const frame = document.getElementById('frame');
      const previewTitle = document.getElementById('previewTitle');
      const previewSubtitle = document.getElementById('previewSubtitle');
      const colorSwatchPrimary = document.getElementById('colorSwatchPrimary');
      const previewPrimaryBtn = document.getElementById('previewPrimaryBtn');
      const typeFamily = document.getElementById('typeFamily');
      const typeScale = document.getElementById('typeScale');
      const typeWeight = document.getElementById('typeWeight');
      const spacingRange = document.getElementById('spacingRange');
      const spacingValue = document.getElementById('spacingValue');
      const exportBtn = document.getElementById('exportBtn');
      const mobileEditorToggle = document.getElementById('mobileEditorToggle');
      const editorPanel = document.getElementById('editorPanel');

      // Preview sections
      const previewSections = {
        overview: document.getElementById('previewOverview'),
        colors: document.getElementById('previewColors'),
        typography: document.getElementById('previewTypography'),
        spacing: document.getElementById('previewSpacing'),
        sizing: document.getElementById('previewSizing'),
        borders: document.getElementById('previewBorders'),
        effects: document.getElementById('previewEffects')
      };

      // Helpers
      function setActiveTab(tab) {
        state.activeTab = tab;
        tabButtons.forEach(btn => {
          const isActive = btn.dataset.tab === tab;
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
          btn.classList.toggle('border-neutral-800', isActive);
          btn.classList.toggle('bg-neutral-800/50', isActive);
          btn.classList.toggle('text-white', isActive);
        });
        panels.forEach(p => {
          const match = p.dataset.panel === tab;
          p.classList.toggle('hidden', !match);
        });
        showPreviewForTab(tab);
      }

      function showPreviewForTab(tab) {
        Object.values(previewSections).forEach(el => el && el.classList.add('hidden'));
        // Default to specific previews on each tab, otherwise overview
        if (previewSections[tab]) {
          previewSections[tab].classList.remove('hidden');
        } else {
          previewSections.overview.classList.remove('hidden');
        }
        updateTabPreviews();
      }

      function updateDevice(device) {
        state.device = device;
        const isMobile = device === 'mobile';
        deviceMobile.setAttribute('aria-pressed', isMobile ? 'true' : 'false');
        deviceDesktop.setAttribute('aria-pressed', isMobile ? 'false' : 'true');
        deviceLabel.textContent = isMobile ? 'Mobile' : 'Desktop';

        // Stage sizes
        if (isMobile) {
          stage.className = 'mx-auto border border-neutral-800 bg-neutral-900 rounded-lg';
          stage.style.maxWidth = '380px';
          stage.style.width = '100%';
          frame.style.padding = '18px';
        } else {
          stage.className = 'mx-auto border border-neutral-800 bg-neutral-900 rounded-lg';
          stage.style.maxWidth = '960px';
          stage.style.width = '100%';
                   frame.style.padding = '24px';
        }

        // Toggle visual state on buttons
        deviceMobile.classList.toggle('bg-neutral-800/60', isMobile);
        deviceMobile.classList.toggle('text-neutral-200', isMobile);
        deviceMobile.classList.toggle('text-neutral-400', !isMobile);
        deviceDesktop.classList.toggle('bg-neutral-800/60', !isMobile);
        deviceDesktop.classList.toggle('text-neutral-200', !isMobile);
        deviceDesktop.classList.toggle('text-neutral-400', isMobile);

        // Smooth transition for stage size changes
        stage.style.transition = 'max-width 200ms ease, width 200ms ease, padding 200ms ease';
      }

      function hexToRgb(hex) {
        const clean = hex.replace('#', '');
        const bigint = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
      }

      function toRgba(hex, alpha = 1) {
        const { r, g, b } = hexToRgb(hex);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }

      function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
      }

      function updateColorsPreview() {
        const { colors } = state.tokens;
        // Stage/frame theming
        stage.style.backgroundColor = colors.surface.value;
        frame.style.color = colors.text.value;

        // Overview swatch/button
        colorSwatchPrimary && (colorSwatchPrimary.style.backgroundColor = colors.primary.value);
        if (previewPrimaryBtn) {
          previewPrimaryBtn.style.color = colors.primary.value;
          previewPrimaryBtn.style.borderColor = toRgba(colors.primary.value, 0.25);
        }

        // Grid swatches
        ['primary', 'surface', 'text'].forEach(key => {
          const val = colors[key].value;
          const name = colors[key].name;
          const preview = document.getElementById(`colorPreview-${key}`);
          const nameEl = document.getElementById(`colorName-${key}`);
          const valueEl = document.getElementById(`colorValue-${key}`);
          if (preview) preview.style.backgroundColor = val;
          if (nameEl) nameEl.textContent = name;
          if (valueEl) valueEl.textContent = val.toUpperCase();
        });
      }

      function updateTypographyPreview() {
        const { typography } = state.tokens;
        const base = 16;
        const s = parseFloat(typography.scale) || 1.125;
        const weight = parseInt(typography.weight, 10) || 600;
        const fam = typography.family || 'Inter';

        const sizes = {
          h1: Math.round(base * Math.pow(s, 4)),
          h2: Math.round(base * Math.pow(s, 3)),
          h3: Math.round(base * Math.pow(s, 2)),
          h4: Math.round(base * Math.pow(s, 1)),
          body: base,
          caption: Math.round(base * 0.875)
        };

        const el = id => document.getElementById(id);
        const setStyle = (element, size, w = weight) => {
          if (!element) return;
          element.style.fontFamily = fam;
          element.style.fontWeight = w;
          element.style.fontSize = `${size}px`;
          element.style.lineHeight = '1.25';
        };

        setStyle(el('ty-h1'), sizes.h1);
        setStyle(el('ty-h2'), sizes.h2);
        setStyle(el('ty-h3'), sizes.h3);
        setStyle(el('ty-h4'), sizes.h4);
        if (el('ty-body')) {
          el('ty-body').style.fontFamily = fam;
          el('ty-body').style.fontWeight = 400;
          el('ty-body').style.fontSize = `${sizes.body}px`;
          el('ty-body').style.lineHeight = '1.6';
        }
        if (el('ty-caption')) {
          el('ty-caption').style.fontFamily = fam;
          el('ty-caption').style.fontWeight = 400;
          el('ty-caption').style.fontSize = `${sizes.caption}px`;
          el('ty-caption').style.lineHeight = '1.4';
          el('ty-caption').style.opacity = '0.8';
        }

        // Overview labels
        if (typeFamily) typeFamily.textContent = `Font: ${fam}`;
        if (typeScale) typeScale.textContent = `Scale: ${parseFloat(s).toFixed(3).replace(/0+$/, '').replace(/\.$/, '')}`;
        if (typeWeight) typeWeight.textContent = `Weight: ${weight}`;
      }

      function updateSpacingPreview() {
        const base = parseInt(state.tokens.spacing.base, 10) || 8;
        const bars = [1, 2, 3, 4];
        bars.forEach(i => {
          const bar = document.getElementById(`spacing-bar-${i}`);
          const label = document.getElementById(`spacing-label-${i}`);
          if (bar) bar.style.height = `${base * i}px`;
          if (label) label.textContent = `${base * i}px`;
        });
        if (spacingRange) spacingRange.value = base;
        if (spacingValue) spacingValue.textContent = `${base}px`;
      }

      function updateSizingPreview() {
        const { sizing } = state.tokens;
        const container = document.getElementById('sizingContainer');
        if (container) {
          container.style.width = `${clamp(parseInt(sizing.container, 10) || 1200, 320, 1920)}px`;
        }
        const gutter = document.getElementById('sizingGutter');
        if (gutter) gutter.textContent = `${parseInt(sizing.gutter, 10) || 16}`;
      }

      function updateBordersPreview() {
        const { borders } = state.tokens;
        const r = clamp(parseInt(borders.radius, 10) || 10, 0, 32);
        const w = clamp(parseFloat(borders.width) || 1, 0, 4);

        const el1 = document.getElementById('borderDemo1');
        const el2 = document.getElementById('borderDemo2');
        [el1, el2].forEach(el => {
          if (!el) return;
          el.style.borderRadius = `${r}px`;
          el.style.borderWidth = `${w}px`;
        });

        const radLabel = document.getElementById('borderRadiusLabel');
        const widLabel = document.getElementById('borderWidthLabel');
        if (radLabel) radLabel.textContent = String(r);
        if (widLabel) widLabel.textContent = String(w);
      }

      function updateEffectsPreview() {
        const { effects, borders } = state.tokens;
        const op = clamp(parseFloat(effects.overlayOpacity) || 0.3, 0, 1);
        const sh = clamp(parseFloat(effects.shadow) || 0.35, 0, 1);

        const box = document.getElementById('effectsBox');
        const overlay = document.getElementById('effectsOverlay');
        if (box) {
          box.style.boxShadow = `rgba(0,0,0,${sh}) 0px 1px 2px, rgba(0,0,0,${sh}) 0px 6px 20px`;
          box.style.borderRadius = `${clamp(parseInt(borders.radius, 10) || 10, 0, 32)}px`;
        }
        if (overlay) {
          overlay.style.backgroundColor = `rgba(255,255,255,${op})`;
          overlay.style.borderRadius = `${clamp(parseInt(borders.radius, 10) || 10, 0, 32)}px`;
        }
        const shadowLabel = document.getElementById('shadowLabel');
        const overlayLabel = document.getElementById('overlayLabel');
        if (shadowLabel) shadowLabel.textContent = sh.toFixed(2);
        if (overlayLabel) overlayLabel.textContent = op.toFixed(2);
      }

      function updateTabPreviews() {
        updateColorsPreview();
        updateTypographyPreview();
        updateSpacingPreview();
        updateSizingPreview();
        updateBordersPreview();
        updateEffectsPreview();
      }

      // Token setters
      function getInputByToken(path) {
        return document.querySelector(`[data-token="${path}"]`);
      }

      function setToken(path, value) {
        const parts = path.split('.');
        let obj = state.tokens;
        for (let i = 0; i < parts.length - 1; i++) {
          obj = obj[parts[i]];
        }
        const key = parts[parts.length - 1];

        // Normalize values
        const input = getInputByToken(path);
        const isNumber = input && input.type === 'number';
        let val = value;

        if (isNumber) {
          val = value === '' ? '' : Number(value);
        } else if (typeof value === 'string' && value.trim().startsWith('#')) {
          val = value.toUpperCase();
        }

        obj[key] = val;

        // Keep inputs in sync
        if (input && document.activeElement !== input) {
          input.value = val;
        }

        updateTabPreviews();
      }

      // Event bindings
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
      });

      deviceMobile.addEventListener('click', () => updateDevice('mobile'));
      deviceDesktop.addEventListener('click', () => updateDevice('desktop'));

      // Bind generic token inputs
      const tokenInputs = Array.from(document.querySelectorAll('[data-token]'));
      tokenInputs.forEach(input => {
        input.addEventListener('input', () => {
          setToken(input.dataset.token, input.value);
        });
      });

      // Bind color pickers and sync with value inputs
      const colorPickers = [
        { picker: document.getElementById('colorPrimary'), token: 'colors.primary.value' },
        { picker: document.getElementById('colorSurface'), token: 'colors.surface.value' },
        { picker: document.getElementById('colorText'), token: 'colors.text.value' }
      ];

      colorPickers.forEach(({ picker, token }) => {
        if (!picker) return;
        picker.addEventListener('input', (e) => {
          const hex = e.target.value.toUpperCase();
          setToken(token, hex);
          const valueInput = getInputByToken(token);
          if (valueInput && document.activeElement !== valueInput) {
            valueInput.value = hex;
          }
        });
      });

      // Spacing range mirror
      if (spacingRange) {
        spacingRange.addEventListener('input', (e) => {
          setToken('spacing.base', parseInt(e.target.value, 10));
        });
      }

      // Export tokens to JSON
      function exportTokens() {
        const payload = {
          $schema: 'https://schemas.design-tokens.org/metadata.json',
          name: 'Orbital Editor Tokens',
          version: '1.0.0',
          updated: new Date().toISOString(),
          tokens: state.tokens
        };
        const data = JSON.stringify(payload, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'orbital-tokens.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      exportBtn.addEventListener('click', exportTokens);

      // Mobile editor toggle
      function syncEditorVisibility() {
        if (window.innerWidth < 640) {
          editorPanel.classList.add('hidden');
        } else {
          editorPanel.classList.remove('hidden');
        }
      }

      mobileEditorToggle.addEventListener('click', () => {
        if (window.innerWidth < 640) {
          editorPanel.classList.toggle('hidden');
        } else {
          // On larger screens, focus the panel
          editorPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });

      window.addEventListener('resize', () => {
        // Debounce minimal
        clearTimeout(window.__resizeTimer);
        window.__resizeTimer = setTimeout(syncEditorVisibility, 120);
      });

      // Initialize
      (function init() {
        syncEditorVisibility();
        updateDevice(state.device);
        setActiveTab(state.activeTab);
        updateTabPreviews();
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
      

<div className="flex flex-col min-h-screen">

<header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
<div className="mx-auto max-w-screen-2xl px-4">
<div className="h-14 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-200">
<span className="text-[11px] font-semibold tracking-tighter" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>OE</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-300" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`, letterSpacing: `-0.01em`}}>Orbital Editor</span>
<span className="text-[10px] text-neutral-500">Design Token Workspace</span>
</div>
</div>

<nav className="hidden sm:flex items-center gap-2">
</nav>

<div className="flex sm:hidden">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition" id="mobileEditorToggle">
<svg className="lucide lucide-panel-right-open h-4 w-4" data-lucide="panel-right-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M15 3v18"></path><path d="m10 15-3-3 3-3"></path></svg>
                Editor
              </button>
</div>
</div>
</div>
</header>

<div className="flex-1">
<div className="mx-auto max-w-screen-2xl px-4">
<div className="grid grid-cols-1 gap-6 pt-6 pb-6">

<main className="min-h-[60vh] lg:pr-[392px]" id="mainArea">

<div className="mb-3 flex items-center justify-between">
<h1 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>
                  Main Content Area
                </h1>
</div>

<div className="mb-4">
<div className="h-12 flex gap-1 overflow-x-auto items-center">

<button aria-selected="true" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center border-neutral-800 bg-neutral-800/50 text-white" data-tab="colors">
<svg className="lucide lucide-palette h-3.5 w-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                    Colors
                  </button>
<button aria-selected="false" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-tab="typography">
<svg className="lucide lucide-type h-3.5 w-3.5" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                    Typography
                  </button>
<button aria-selected="false" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-tab="spacing">
<svg className="lucide lucide-space h-3.5 w-3.5" data-lucide="space" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"></path></svg>
                    Spacing
                  </button>
<button aria-selected="false" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-tab="sizing">
<svg className="lucide lucide-square w-[14px] h-[14px]" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `14px`, height: `14px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                    Sizing
                  </button>
<button aria-selected="false" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-tab="borders">
<svg className="lucide lucide-square-split-horizontal h-3.5 w-3.5" data-lucide="square-split-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"></path><path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"></path><line x1="12" x2="12" y1="4" y2="20"></line></svg>
                    Borders
                  </button>
<button aria-selected="false" className="tab-btn inline-flex gap-2 hover:text-white hover:border-neutral-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition text-xs font-medium text-neutral-300 border-transparent border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-tab="effects">
<svg className="lucide lucide-shapes w-[14px] h-[14px]" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `14px`, height: `14px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                    Effects
                  </button>
</div>
</div>

<div className="" id="previewContainer">

<div className="w-full overflow-x-auto">
<div className="mx-auto border border-neutral-800 bg-neutral-900 rounded-lg" id="stage" style={{maxWidth: `960px`, width: `100%`, backgroundColor: `rgb(10, 10, 10)`, borderRadius: `10px`, borderWidth: `1px`, boxShadow: `rgba(0, 0, 0, 0.35) 0px 1px 2px, rgba(0, 0, 0, 0.35) 0px 6px 20px`, transition: `max-width 200ms, width 200ms, padding 200ms`}}>

<div className="pt-6 pr-6 pb-6 pl-6" id="frame" style={{padding: `24px`, borderRadius: `10px`, borderWidth: `1px`, color: `rgb(229, 231, 235)`}}>

<section className="hidden" id="previewOverview">
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight" id="previewTitle" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`, fontWeight: `600`}}>Preview Headline</h2>
<p className="mt-1 text-sm text-neutral-400" id="previewSubtitle" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`, opacity: `0.85`}}>Subtext and descriptions adapt to your tokens.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Primary</div>
<div className="h-5 w-5 rounded-md border border-neutral-800" id="colorSwatchPrimary" style={{backgroundColor: `rgb(99, 102, 241)`}}></div>
</div>
<div className="mt-3 text-xs text-neutral-500">Buttons, links, key accents</div>
<button className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition border border-neutral-800 bg-neutral-900 hover:border-neutral-700" id="previewPrimaryBtn" style={{borderColor: `rgba(99, 102, 241, 0.25)`, color: `rgb(99, 102, 241)`, borderRadius: `10px`, borderWidth: `1px`, boxShadow: `rgba(0, 0, 0, 0.35) 0px 1px 2px, rgba(0, 0, 0, 0.35) 0px 6px 20px`}}>
<svg className="lucide lucide-mouse-pointer-click h-3.5 w-3.5" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
                              Action
                            </button>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="text-sm text-neutral-300">Typography</div>
<div className="mt-2 space-y-1.5">
<div className="text-sm text-neutral-400" id="typeFamily">Font: Inter</div>
<div className="text-sm text-neutral-400" id="typeScale">Scale: 1.125</div>
<div className="text-sm text-neutral-400" id="typeWeight">Weight: 600</div>
</div>
<div className="mt-3 text-xs text-neutral-500">Responsive scaling and weight mapping</div>
</div>
</div>
</section>

<section className="" id="previewColors">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Colors</h3>
<p className="text-xs text-neutral-500">Live swatches reflect token names and values</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="h-16 rounded-md border border-neutral-800" id="colorPreview-primary" style={{backgroundColor: `rgb(99, 102, 241)`}}></div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-neutral-300" id="colorName-primary">primary</span>
<code className="text-neutral-400" id="colorValue-primary">#6366F1</code>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="h-16 rounded-md border border-neutral-800" id="colorPreview-surface" style={{backgroundColor: `rgb(10, 10, 10)`}}></div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-neutral-300" id="colorName-surface">surface</span>
<code className="text-neutral-400" id="colorValue-surface">#0A0A0A</code>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="h-16 rounded-md border border-neutral-800" id="colorPreview-text" style={{backgroundColor: `rgb(229, 231, 235)`}}></div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-neutral-300" id="colorName-text">text</span>
<code className="text-neutral-400" id="colorValue-text">#E5E7EB</code>
</div>
</div>
</div>
</section>

<section className="hidden" id="previewTypography">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Typography Scale</h3>
<p className="text-xs text-neutral-500">Sizes derive from the selected scale and weight</p>
</div>
<div className="space-y-2">
<div className="text-neutral-100 font-semibold tracking-tight" id="ty-h1" style={{fontFamily: `Inter`, fontWeight: `600`, fontSize: `26px`, lineHeight: `1.25`}}>Heading 1</div>
<div className="text-neutral-100 font-semibold tracking-tight" id="ty-h2" style={{fontFamily: `Inter`, fontWeight: `600`, fontSize: `23px`, lineHeight: `1.25`}}>Heading 2</div>
<div className="text-neutral-100 font-semibold tracking-tight" id="ty-h3" style={{fontFamily: `Inter`, fontWeight: `600`, fontSize: `20px`, lineHeight: `1.25`}}>Heading 3</div>
<div className="text-neutral-100 font-semibold tracking-tight" id="ty-h4" style={{fontFamily: `Inter`, fontWeight: `600`, fontSize: `18px`, lineHeight: `1.25`}}>Heading 4</div>
<div className="text-neutral-300" id="ty-body" style={{fontFamily: `Inter`, fontWeight: `400`, fontSize: `16px`, lineHeight: `1.6`}}>Body text — quick brown fox jumps over the lazy dog.</div>
<div className="text-neutral-400" id="ty-caption" style={{fontFamily: `Inter`, fontWeight: `400`, fontSize: `14px`, opacity: `0.8`, lineHeight: `1.4`}}>Caption — supporting information.</div>
</div>
</section>

<section className="hidden" id="previewSpacing">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Spacing Scale</h3>
<p className="text-xs text-neutral-500">Base unit previews (1x–4x)</p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900">
<div className="w-full rounded-md bg-neutral-800/60" id="spacing-bar-1" style={{height: `8px`}}></div>
</div>
<div className="w-14 text-xs text-neutral-400 text-right" id="spacing-label-1">8px</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900">
<div className="w-full rounded-md bg-neutral-800/60" id="spacing-bar-2" style={{height: `16px`}}></div>
</div>
<div className="w-14 text-xs text-neutral-400 text-right" id="spacing-label-2">16px</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900">
<div className="w-full rounded-md bg-neutral-800/60" id="spacing-bar-3" style={{height: `24px`}}></div>
</div>
<div className="div w-14 text-xs text-neutral-400 text-right" id="spacing-label-3">24px</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900">
<div className="w-full rounded-md bg-neutral-800/60" id="spacing-bar-4" style={{height: `32px`}}></div>
</div>
<div className="w-14 text-xs text-neutral-400 text-right" id="spacing-label-4">32px</div>
</div>
</div>
</section>

<section className="hidden" id="previewSizing">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Container & Gutter</h3>
<p className="text-xs text-neutral-500">Scaled within the preview stage</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="text-xs text-neutral-400">Container</div>
<div className="mt-3 relative w-full h-40 rounded-md border border-dashed border-neutral-800 flex items-center">
<div className="h-24 rounded-md border border-neutral-800 bg-neutral-900/70 mx-auto" id="sizingContainer" style={{maxWidth: `100%`, width: `1200px`}}></div>
</div>
<div className="mt-2 text-xs text-neutral-500">Gutter: <span id="sizingGutter">16</span>px</div>
</div>
</section>

<section className="hidden" id="previewBorders">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Borders</h3>
<p className="text-xs text-neutral-500">Radius and stroke width samples</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="h-20 rounded-md border border-neutral-800 bg-neutral-900" id="borderDemo1" style={{borderRadius: `10px`, borderWidth: `1px`}}></div>
<div className="mt-2 text-xs text-neutral-400">Sample 1</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="h-20 rounded-md border border-neutral-800 bg-neutral-900" id="borderDemo2" style={{borderRadius: `10px`, borderWidth: `1px`}}></div>
<div className="mt-2 text-xs text-neutral-400">Sample 2</div>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500">Radius: <span id="borderRadiusLabel">10</span>px · Width: <span id="borderWidthLabel">1</span>px</div>
</section>

<section className="hidden" id="previewEffects">
<div className="mb-3">
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Effects</h3>
<p className="text-xs text-neutral-500">Shadow and overlay opacity</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="relative h-28 rounded-md border border-neutral-800 bg-neutral-900 flex items-center justify-center overflow-hidden">
<div className="absolute inset-3 rounded-md border border-neutral-800 bg-neutral-900" id="effectsBox" style={{boxShadow: `rgba(0, 0, 0, 0.35) 0px 1px 2px, rgba(0, 0, 0, 0.35) 0px 6px 20px`, borderRadius: `10px`}}></div>
<div className="absolute inset-0 rounded-md pointer-events-none" id="effectsOverlay" style={{backgroundColor: `rgba(255, 255, 255, 0.3)`, borderRadius: `10px`}}></div>
<div className="relative z-10 text-xs text-neutral-400">Visual overlay</div>
</div>
<div className="mt-2 text-xs text-neutral-500">Shadow: <span id="shadowLabel">0.35</span> · Overlay: <span id="overlayLabel">0.30</span></div>
</div>
</section>
</div>
</div>
</div>
</div>

<div className="hidden rounded-lg border border-dashed border-neutral-800 p-8" id="emptyState">
<div className="mx-auto max-w-md text-center">
<div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-neutral-400" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>No preview yet</h3>
<p className="mt-1 text-sm text-neutral-500">
                    Select a collection and toggle Live Preview in the Editor Panel to visualize changes here.
                  </p>
</div>
</div>
</main>

<aside className="fixed right-6 top-[72px] bottom-[72px] lg:w-[360px] lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto supports-[backdrop-filter]:bg-neutral-900/70 ring-1 ring-white/5 sm:p-5 flex flex-col bg-neutral-900/80 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur" id="editorPanel">

<div className="flex items-center justify-between pb-4">
<div className="">
<h2 className="text-[18px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Editor Panel</h2>
<p className="text-xs text-neutral-500">Contextual inputs for the selected collection</p>
</div>
<div className="hidden sm:flex">
<div className="inline-flex rounded-md border border-neutral-800 bg-neutral-900/70 p-1">
<button aria-pressed="false" className="inline-flex items-center justify-center rounded-[6px] px-2.5 py-1.5 text-xs text-neutral-400 hover:text-white hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition" id="deviceMobile" title="Mobile preview">
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</button>
<button aria-pressed="true" className="inline-flex items-center justify-center rounded-[6px] px-2.5 py-1.5 text-xs text-neutral-200 bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition" id="deviceDesktop" title="Desktop preview">
<svg className="lucide lucide-monitor luc-monitor h-4 w-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
</div>
</div>
</div>

<div className="h-px bg-neutral-800 mb-5"></div>

<div className="space-y-6">

<section className="panel" data-panel="colors">
<div className="mb-3">
<h3 className="text-[16px] font-semibold text-neutral-100 tracking-tight" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Colors Collection</h3>
<p className="text-xs text-neutral-500">Define color tokens: name and HEX values</p>
</div>
<div className="space-y-3">

<div className="rounded-md border border-neutral-800 bg-neutral-900/70 p-3">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 min-w-0">
<div className="h-7 w-7 rounded-full border border-neutral-800 overflow-hidden" style={{backgroundColor: `#6366f1`, width: `28px`, height: `28px`, borderRadius: `9999px`, aspectRatio: `1 / 1`, display: `inline-flex`, alignItems: `center`, justifyContent: `center`}}>
<input className="h-7 w-7 cursor-pointer border-0 p-0 bg-transparent" id="colorPrimary" onInput={(e) => { e.currentTarget.parentNode.style.backgroundColor=e.currentTarget.value }} style={{webkitAppearance: `none`, appearance: `none`, border: `none`, padding: `0`, margin: `0`, width: `100%`, height: `100%`, borderRadius: `9999px`, backgroundColor: `transparent`, opacity: `0`, display: `block`}} title="Primary color" type="color" value="#6366f1" />
</div>
<input className="w-24 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.primary.name" value="primary" />
</div>
<input className="flex-1 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.primary.value" value="#6366F1" />
</div>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/70 p-3">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 min-w-0">
<div className="h-7 w-7 rounded-full border border-neutral-800 overflow-hidden" style={{backgroundColor: `#0a0a0a`, width: `28px`, height: `28px`, borderRadius: `9999px`, aspectRatio: `1 / 1`, display: `inline-flex`, alignItems: `center`, justifyContent: `center`}}>
<input className="h-7 w-7 cursor-pointer bg-transparent border-0 pt-0 pr-0 pb-0 pl-0" id="colorSurface" onInput={(e) => { e.currentTarget.parentNode.style.backgroundColor=e.currentTarget.value }} style={{webkitAppearance: `none`, appearance: `none`, border: `none`, padding: `0`, margin: `0`, width: `100%`, height: `100%`, borderRadius: `9999px`, backgroundColor: `transparent`, opacity: `0`, display: `block`}} title="Surface color" type="color" value="#0a0a0a" />
</div>
<input className="w-24 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.surface.name" value="surface" />
</div>
<input className="flex-1 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.surface.value" value="#0A0A0A" />
</div>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/70 p-3">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 min-w-0">
<div className="h-7 w-7 rounded-full border border-neutral-800 overflow-hidden" style={{backgroundColor: `#e5e7eb`, width: `28px`, height: `28px`, borderRadius: `9999px`, aspectRatio: `1 / 1`, display: `inline-flex`, alignItems: `center`, justifyContent: `center`}}>
<input className="h-7 w-7 cursor-pointer border-0 p-0 bg-transparent" id="colorText" onInput={(e) => { e.currentTarget.parentNode.style.backgroundColor=e.currentTarget.value }} style={{webkitAppearance: `none`, appearance: `none`, border: `none`, padding: `0`, margin: `0`, width: `100%`, height: `100%`, borderRadius: `9999px`, backgroundColor: `transparent`, opacity: `0`, display: `block`}} title="Text color" type="color" value="#e5e7eb" />
</div>
<input className="w-24 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.text.name" value="text" />
</div>
<input className="flex-1 bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="colors.text.value" value="#E5E7EB" />
</div>
</div>
</div>
</section>

<section className="panel hidden" data-panel="typography">
<div className="mb-3">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Typography Collection</h3>
<p className="text-xs text-neutral-500">Select font family, weight, and scale</p>
</div>
<div className="space-y-3">
<label className="block">
<span className="block text-xs text-neutral-400 mb-1">Font Family</span>
<select className="w-full focus:outline-none focus:ring-2 focus:ring-neutral-600/50 text-xs text-neutral-200 bg-neutral-900/0 border-neutral-800 border rounded-md pt-1.5 pb-1.5 pl-2 pr-8 cursor-pointer hover:border-neutral-700 transition" data-token="typography.family" style={{webkitAppearance: `none`, mozAppearance: `none`, appearance: `none`, backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23A3A3A3%27 stroke-width=%271.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E')`, backgroundRepeat: `no-repeat`, backgroundPosition: `right 8px center`, backgroundSize: `14px 14px`}}>
<option selected>Inter</option>
<option>system-ui</option>
<option>Roboto</option>
<option>SF Pro Text</option>
</select>
</label>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Font Weight</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="typography.weight" max="900" min="100" step="50" type="number" value="600" />
</label>
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Scale (e.g., 1.125)</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="typography.scale" step="0.025" type="number" value="1.125" />
</label>
</div>
</div>
</section>

<section className="panel hidden" data-panel="spacing">
<div className="mb-3">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Spacing Collection</h3>
<p className="text-xs text-neutral-500">Control base spacing unit</p>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/70 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">Base Unit</span>
<span className="text-xs text-neutral-400" id="spacingValue">8px</span>
</div>
<input className="mt-3 w-full accent-neutral-200" data-token="spacing.base" id="spacingRange" max="16" min="4" step="1" type="range" value="8" />
</div>
</section>

<section className="panel hidden" data-panel="sizing">
<div className="mb-3">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Sizing Collection</h3>
<p className="text-xs text-neutral-500">Define container widths</p>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Container (max)</span>
<input className="w-full focus:outline-none focus:ring-2 focus:ring-neutral-600/50 text-xs text-neutral-200 bg-neutral-900/0 border-neutral-800 border rounded-md pt-1.5 pr-2 pb-1.5 pl-2" data-token="sizing.container" max="1920" min="640" onInput={(e) => { (function(el){el.setAttribute('value', el.value);var p=el.parentNode;if(!p)return;var lbl=p.querySelector('#aura-emed4uhj2-readout');if(!lbl){lbl=document.createElement('div');lbl.id='aura-emed4uhj2-readout';lbl.className='mt-1 text-[11px] text-neutral-400';p.appendChild(lbl);}lbl.textContent=el.value+'px';})(e.currentTarget) }} step="10" style={{padding: `0`, borderWidth: `0`, backgroundColor: `transparent`}} type="range" value="1920" />
<div className="mt-1 text-[11px] text-neutral-400">1920px</div>
</label>
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Gutter</span>
<input className="w-full focus:outline-none focus:ring-2 focus:ring-neutral-600/50 accent-neutral-200 text-xs text-neutral-200 bg-neutral-900/0 border-neutral-800 border rounded-md pt-1.5 pr-2 pb-1.5 pl-2" data-token="sizing.gutter" max="48" min="0" onInput={(e) => { (function(el){el.setAttribute('value', el.value);var p=el.parentNode;if(!p)return;var lbl=p.querySelector('#aura-emed4slap-readout');if(!lbl){lbl=document.createElement('div');lbl.id='aura-emed4slap-readout';lbl.className='mt-1 text-[11px] text-neutral-400';p.appendChild(lbl);}lbl.textContent=el.value+'px';})(e.currentTarget) }} step="1" style={{padding: `0`, borderWidth: `0`, backgroundColor: `transparent`}} type="range" value="0" />
<div className="mt-1 text-[11px] text-neutral-400">0px</div>
</label>
</div>
</section>

<section className="panel hidden" data-panel="borders">
<div className="mb-3">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Borders Collection</h3>
<p className="text-xs text-neutral-500">Radius and widths</p>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Radius</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="borders.radius" max="32" min="0" step="1" type="number" value="10" />
</label>
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Width</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="borders.width" max="4" min="0" step="0.5" type="number" value="1" />
</label>
</div>
</section>

<section className="panel hidden" data-panel="effects">
<div className="mb-3">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-100" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`}}>Effects Collection</h3>
<p className="text-xs text-neutral-500">Shadows and opacities</p>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Shadow (0-1)</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="effects.shadow" max="1" min="0" step="0.05" type="number" value="0.35" />
</label>
<label className="block">
<span className="mb-1 block text-xs text-neutral-400">Overlay Opacity</span>
<input className="w-full bg-neutral-900/0 text-neutral-200 text-xs border border-neutral-800 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-600/50" data-token="effects.overlayOpacity" max="1" min="0" step="0.05" type="number" value="0.3" />
</label>
</div>
</section>
</div>

<div className="sticky bottom-0 left-0 right-0 -mx-4 supports-[backdrop-filter]:bg-neutral-900/70 z-10 bg-neutral-900/80 pt-4 pr-4 pb-4 pl-4 backdrop-blur mt-auto">
<div className="h-px bg-neutral-800 mb-4"></div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/70 px-3 py-2 text-sm font-medium text-neutral-200 hover:border-neutral-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/50 transition" id="exportBtn">
<svg className="lucide lucide-package h-4 w-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
      Export to Figma JSON
    </button>
<p className="mt-2 text-[11px] text-neutral-500">Compiles current variables into a JSON file for token systems.</p>
</div>
</aside>
</div>
</div>
</div>
</div>


    </>
  );
}
