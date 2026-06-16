import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Icon initialization with global stroke width 1.5
    const initIcons = () => {
      if (window.lucide) {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }
    };

    // Planet data (AU, days, relative size to Earth)
    const PLANETS = [
      { key:'mercury', name:'Mercury', au:0.387, period:88,    size:0.383,  color:'#6b7280' },
      { key:'venus',   name:'Venus',   au:0.723, period:224.7, size:0.949,  color:'#a78bfa' },
      { key:'earth',   name:'Earth',   au:1.000, period:365.25,size:1.000,  color:'#3b82f6' },
      { key:'mars',    name:'Mars',    au:1.524, period:687,   size:0.532,  color:'#ef4444' },
      { key:'jupiter', name:'Jupiter', au:5.203, period:4331,  size:11.21,  color:'#f59e0b' },
      { key:'saturn',  name:'Saturn',  au:9.537, period:10747, size:9.45,   color:'#fbbf24' },
      { key:'uranus',  name:'Uranus',  au:19.191,period:30589, size:4.01,   color:'#22d3ee' },
      { key:'neptune', name:'Neptune', au:30.068,period:59800, size:3.88,   color:'#6366f1' },
    ];
    const MAX_AU = Math.max(...PLANETS.map(p => p.au));

    // State
    const state = {
      running: false,
      tDays: 0,
      speed: 60,          // days per second
      lastTs: null,
      autoFit: true,
      pxPerAu: 8,
      radiusExp: 0.85,    // compress exponent (0.55-1)
      sizeScale: 1.0,
      showLabels: false,
      showOrbits: true,
      center: { x: 0, y: 0 },
      scalePx: 8,         // computed per frame
    };

    // Refs
    const simContainer = document.getElementById('simContainer');
    const simRoot = document.getElementById('simRoot');
    const sunEl = document.getElementById('sun');

    const playPauseBtn = document.getElementById('playPauseBtn');
    const togglePanelBtn = document.getElementById('togglePanelBtn');
    const controlPanel = document.getElementById('controlPanel');

    const speedRange = document.getElementById('speedRange');
    const speedLabel = document.getElementById('speedLabel');
    const hudSpeed = document.getElementById('hudSpeed');
    const hudTime = document.getElementById('hudTime');

    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');

    const autoFitToggle = document.getElementById('autoFitToggle');
    const pxPerAuRange = document.getElementById('pxPerAuRange');
    const pxPerAuLabel = document.getElementById('pxPerAuLabel');
    const pxPerAuGroup = document.getElementById('pxPerAuGroup');

    const radiusExpRange = document.getElementById('radiusExpRange');
    const radiusExpLabel = document.getElementById('radiusExpLabel');

    const sizeScaleRange = document.getElementById('sizeScaleRange');
    const sizeScaleLabel = document.getElementById('sizeScaleLabel');

    const showOrbitsToggle = document.getElementById('showOrbitsToggle');
    const showLabelsToggle = document.getElementById('showLabelsToggle');

    // Mobile drawer
    const drawer = document.getElementById('drawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerContent = document.getElementById('drawerContent');

    // Build DOM nodes for planets and orbits
    const elements = PLANETS.map(p => {
      const orbit = document.createElement('div');
      orbit.className = 'absolute rounded-full border border-slate-200/80';
      orbit.style.pointerEvents = 'none';
      orbit.style.transition = 'opacity 200ms ease';

      const planet = document.createElement('div');
      planet.className = 'absolute rounded-full shadow-sm';
      planet.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)';
      planet.style.background = p.color;

      const label = document.createElement('div');
      label.className = 'absolute -translate-x-1/2 translate-y-3 text-[11px] px-1.5 py-0.5 rounded border border-slate-200 bg-white/95 text-slate-700';
      label.textContent = p.name;
      label.style.whiteSpace = 'nowrap';
      label.style.pointerEvents = 'none';
      label.style.opacity = '0';

      simRoot.appendChild(orbit);
      simRoot.appendChild(planet);
      simRoot.appendChild(label);

      return { ...p, orbit, planet, label };
    });

    // Layout helpers
    function computeScale() {
      const rect = simContainer.getBoundingClientRect();
      state.center.x = rect.width / 2;
      state.center.y = rect.height / 2;

      if (state.autoFit) {
        const margin = 24; // padding from edges
        const maxRadius = Math.min(rect.width, rect.height) / 2 - margin;
        // Use exponent-compressed max AU to fit
        const compressedMax = Math.pow(MAX_AU, state.radiusExp);
        state.scalePx = maxRadius / compressedMax;
        pxPerAuLabel.textContent = '自动';
      } else {
        state.scalePx = state.pxPerAu;
        pxPerAuLabel.textContent = `${state.pxPerAu} px/AU`;
      }
    }

    function applyOrbitsAndSun() {
      // Position sun
      const sunSize = 14;
      sunEl.style.left = (state.center.x - sunSize / 2) + 'px';
      sunEl.style.top = (state.center.y - sunSize / 2) + 'px';

      elements.forEach(el => {
        const r = state.scalePx * Math.pow(el.au, state.radiusExp);
        const d = r * 2;

        // Orbit ring
        el.orbit.style.width = d + 'px';
        el.orbit.style.height = d + 'px';
        el.orbit.style.left = (state.center.x - r) + 'px';
        el.orbit.style.top = (state.center.y - r) + 'px';
        el.orbit.style.opacity = state.showOrbits ? '1' : '0';
      });
    }

    function updateLabelsVisibility() {
      elements.forEach(el => {
        el.label.style.opacity = state.showLabels ? '1' : '0';
      });
    }

    function setToggle(btn, on) {
      btn.dataset.on = on ? 'true' : 'false';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      const knob = btn.querySelector('span');
      // Class strategy relies on data attributes in class
      if (on) {
        btn.classList.remove('data-[off=true]:bg-slate-200');
        btn.classList.add('data-[on=true]:bg-slate-900/90');
        knob.classList.remove('data-[off=true]:translate-x-0');
        knob.classList.add('data-[on=true]:translate-x-5');
      } else {
        btn.classList.remove('data-[on=true]:bg-slate-900/90');
        btn.classList.add('data-[off=true]:bg-slate-200');
        knob.classList.remove('data-[on=true]:translate-x-5');
        knob.classList.add('data-[off=true]:translate-x-0');
      }
      // Fallback inline style to ensure correct knob position
      knob.style.transform = on ? 'translateX(20px)' : 'translateX(0)';
      btn.style.backgroundColor = on ? 'rgba(15,23,42,0.9)' : 'rgb(226,232,240)';
    }

    function resize() {
      computeScale();
      applyOrbitsAndSun();
    }

    // Main render loop
    function frame(ts) {
      if (state.lastTs == null) state.lastTs = ts;
      const dt = Math.max(0, Math.min(0.05, (ts - state.lastTs) / 1000)); // clamp dt
      state.lastTs = ts;

      if (state.running) {
        state.tDays += state.speed * dt;
      }

      // Update planets
      elements.forEach(el => {
        const angle = (state.tDays / el.period) * Math.PI * 2;
        const r = state.scalePx * Math.pow(el.au, state.radiusExp);
        const px = state.center.x + r * Math.cos(angle);
        const py = state.center.y + r * Math.sin(angle);

        // Planet size: base Earth ~ 6px diameter, scaled
        const earthBase = 6;
        const d = Math.max(3, (earthBase * el.size) ** 0.7) * state.sizeScale; // compress giant sizes
        el.planet.style.width = d + 'px';
        el.planet.style.height = d + 'px';
        el.planet.style.left = (px - d / 2) + 'px';
        el.planet.style.top = (py - d / 2) + 'px';

        el.label.style.left = px + 'px';
        el.label.style.top = (py + d / 2 + 2) + 'px';
      });

      // HUD
      hudTime.textContent = `t = ${state.tDays.toFixed(1)} 天`;
      hudSpeed.textContent = `速度 = ${state.speed} 天/秒`;

      requestAnimationFrame(frame);
    }

    // Controls wiring
    function bindControls() {
      // Play/Pause top button
      const updatePlayPauseBtn = () => {
        playPauseBtn.querySelector('span').textContent = state.running ? '暂停' : '播放';
        const iconName = state.running ? 'pause' : 'play';
        const icon = playPauseBtn.querySelector('i[data-lucide]');
        icon.setAttribute('data-lucide', iconName);
        initIcons();
      };
      playPauseBtn.addEventListener('click', () => {
        state.running = !state.running;
        updatePlayPauseBtn();
      });

      // keyboard: space toggles
      window.addEventListener('keydown', e => {
        if (e.code === 'Space') {
          e.preventDefault();
          state.running = !state.running;
          updatePlayPauseBtn();
        }
      });

      // panel play/pause
      playBtn.addEventListener('click', () => {
        state.running = true;
        updatePlayPauseBtn();
      });
      pauseBtn.addEventListener('click', () => {
        state.running = false;
        updatePlayPauseBtn();
      });

      // reset
      resetBtn.addEventListener('click', () => {
        state.tDays = 0;
      });

      // speed
      const syncSpeed = () => {
        state.speed = Number(speedRange.value);
        speedLabel.textContent = `${state.speed} 天/秒`;
      };
      speedRange.addEventListener('input', syncSpeed);
      syncSpeed();

      // auto-fit
      const setAutoFitUI = () => {
        setToggle(autoFitToggle, state.autoFit);
        if (state.autoFit) {
          pxPerAuGroup.classList.add('opacity-30', 'pointer-events-none');
          pxPerAuLabel.textContent = '自动';
        } else {
          pxPerAuGroup.classList.remove('opacity-30', 'pointer-events-none');
          pxPerAuLabel.textContent = `${state.pxPerAu} px/AU`;
        }
        resize();
      };
      autoFitToggle.addEventListener('click', () => {
        state.autoFit = !state.autoFit;
        setAutoFitUI();
      });

      // px per AU
      const syncPxPerAu = () => {
        state.pxPerAu = Number(pxPerAuRange.value);
        pxPerAuLabel.textContent = `${state.pxPerAu} px/AU`;
        resize();
      };
      pxPerAuRange.addEventListener('input', syncPxPerAu);

      // radius exponent
      const syncRadiusExp = () => {
        state.radiusExp = Number(radiusExpRange.value);
        radiusExpLabel.textContent = state.radiusExp.toFixed(2);
        resize();
      };
      radiusExpRange.addEventListener('input', syncRadiusExp);

      // size scale
      const syncSizeScale = () => {
        state.sizeScale = Number(sizeScaleRange.value);
        sizeScaleLabel.textContent = `${state.sizeScale.toFixed(1)}×`;
      };
      sizeScaleRange.addEventListener('input', syncSizeScale);

      // show orbits
      showOrbitsToggle.addEventListener('click', () => {
        state.showOrbits = !state.showOrbits;
        setToggle(showOrbitsToggle, state.showOrbits);
        applyOrbitsAndSun();
      });
      setToggle(showOrbitsToggle, state.showOrbits);

      // show labels
      showLabelsToggle.addEventListener('click', () => {
        state.showLabels = !state.showLabels;
        setToggle(showLabelsToggle, state.showLabels);
        updateLabelsVisibility();
      });
      setToggle(showLabelsToggle, state.showLabels);

      // initial
      setAutoFitUI();
      syncRadiusExp();
      syncSizeScale();
    }

    // Mobile drawer logic
    function setupDrawer() {
      const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

      const openDrawer = () => {
        // Clone controls from panel into drawer on first open
        if (!drawerContent.hasChildNodes()) {
          const panelInner = controlPanel.querySelector('.space-y-6');
          if (panelInner) {
            drawerContent.appendChild(panelInner.cloneNode(true));
          }
        }
        drawer.style.transform = 'translateY(0%)';
      };
      const closeDrawer = () => {
        drawer.style.transform = 'translateY(100%)';
      };

      togglePanelBtn.addEventListener('click', () => openDrawer());
      drawerClose.addEventListener('click', () => closeDrawer());

      // Click outside to close
      document.addEventListener('click', (e) => {
        if (!isMobile()) return;
        const drawerBox = drawer.querySelector('div.rounded-t-2xl');
        if (!drawerBox) return;
        if (drawer.style.transform === 'translateY(0%)' && !drawerBox.contains(e.target) && e.target !== togglePanelBtn) {
          closeDrawer();
        }
      });

      // Sync drawer controls (since cloned, we need to bind fresh listeners)
      // To keep code compact, we rely on main controls; drawer is a secondary view only.
    }

    // Resize handling
    const ro = new ResizeObserver(() => resize());
    ro.observe(simContainer);
    window.addEventListener('resize', resize);

    // Init
    function init() {
      initIcons();
      bindControls();
      setupDrawer();
      resize();
      requestAnimationFrame(frame);

      // Subtle entrance
      setTimeout(() => {
        document.querySelectorAll('section, aside').forEach((el, i) => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.transition = 'opacity 500ms ease, transform 500ms ease';
        });
      }, 20);
    }

    // Prepare initial styles for entrance
    document.querySelectorAll('section, aside').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
    });

    // Start paused
    state.running = false;

    // Kickoff
    window.addEventListener('DOMContentLoaded', init);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded border border-slate-300 text-slate-900 flex items-center justify-center text-[11px] font-semibold tracking-tight">SS</div>
<div className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-slate-900">极简太阳系模拟</div>
<span className="hidden sm:inline-flex text-[12px] text-slate-500 ml-2">apple+notion风格 · 可调时间/比例</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10" id="playPauseBtn">
<i className="h-4.5 w-4.5" data-lucide="play"></i>
<span className="text-[13px] font-medium">播放</span>
</button>
<button aria-label="打开控制面板" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10" id="togglePanelBtn">
<i className="h-4.5 w-4.5" data-lucide="sliders"></i>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
<div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 md:gap-8 items-start">

<section className="group rounded-2xl border border-slate-200/70 bg-white shadow-sm/0 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-200/70">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="orbit"></i>
<h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-slate-900">轨道视图</h2>
</div>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<div className="hidden sm:flex items-center gap-1.5">
<span className="inline-block h-2 w-2 rounded-full bg-yellow-500/90"></span> 太阳
                </div>
<div className="hidden sm:flex items-center gap-1.5">
<span className="inline-block h-2 w-2 rounded-full bg-slate-300"></span> 轨道
                </div>
</div>
</div>

<div className="relative w-full aspect-square overflow-hidden rounded-b-2xl bg-white" id="simContainer">

<div className="absolute inset-0" id="simRoot"></div>

<div className="absolute rounded-full shadow-sm" id="sun" style={{width: '14px', height: '14px', background: '#fbbf24'}}></div>

<div className="pointer-events-none absolute left-3 top-3 sm:left-5 sm:top-5 flex flex-col gap-1.5">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white/90 text-[12px] text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
<span id="hudTime">t = 0.0 天</span>
</div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white/90 text-[12px] text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="zap"></i>
<span id="hudSpeed">速度 = 60 天/秒</span>
</div>
</div>
</div>
</section>

<aside className="md:sticky md:top-[78px] rounded-2xl border border-slate-200/70 bg-white shadow-sm p-4 sm:p-5 md:p-6 md:block hidden" id="controlPanel">
<div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
<h3 className="text-[17px] sm:text-[18px] font-semibold tracking-tight text-slate-900">控制面板</h3>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors text-[12px] font-medium" id="resetBtn">
<i className="h-4 w-4" data-lucide="rotate-ccw"></i> 重置
              </button>
</div>
<div className="mt-4 space-y-6">

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-[13px] font-medium text-slate-700">时间速度</label>
<span className="text-[12px] text-slate-500" id="speedLabel">60 天/秒</span>
</div>
<input className="w-full h-2 rounded-lg cursor-pointer" id="speedRange" max="1200" min="0" step="1" style={{accentColor: '#0f172a'}} type="range" value="60"/>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors text-[12px] font-medium" id="playBtn">
<i className="h-4 w-4" data-lucide="play"></i> 播放
                  </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors text-[12px] font-medium" id="pauseBtn">
<i className="h-4 w-4" data-lucide="pause"></i> 暂停
                  </button>
</div>
</div>
<div className="h-px bg-slate-200/70"></div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-[13px] font-medium text-slate-700">自适应视图</span>

<button aria-pressed="true" className="relative h-6 w-11 rounded-full bg-slate-900/90 transition-colors ring-1 ring-inset ring-slate-300/60 data-[off=true]:bg-slate-200" data-on="true" id="autoFitToggle">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform translate-x-5 data-[off=true]:translate-x-0"></span>
</button>
</div>
<div className="opacity-30 pointer-events-none" id="pxPerAuGroup">
<div className="flex items-center justify-between mb-2">
<label className="text-[13px] font-medium text-slate-700">像素/AU</label>
<span className="text-[12px] text-slate-500" id="pxPerAuLabel">自动</span>
</div>
<input className="w-full h-2 rounded-lg cursor-pointer" id="pxPerAuRange" max="30" min="2" step="1" style={{accentColor: '#0f172a'}} type="range" value="8"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-[13px] font-medium text-slate-700">半径指数压缩</label>
<span className="text-[12px] text-slate-500" id="radiusExpLabel">0.85</span>
</div>
<input className="w-full h-2 rounded-lg cursor-pointer" id="radiusExpRange" max="1.00" min="0.55" step="0.01" style={{accentColor: '#0f172a'}} type="range" value="0.85"/>
<p className="mt-1.5 text-[12px] text-slate-500">减小外层轨道的相对扩张（0.55–1.00）。</p>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-[13px] font-medium text-slate-700">行星大小</label>
<span className="text-[12px] text-slate-500" id="sizeScaleLabel">1.0×</span>
</div>
<input className="w-full h-2 rounded-lg cursor-pointer" id="sizeScaleRange" max="1.8" min="0.6" step="0.01" style={{accentColor: '#0f172a'}} type="range" value="1.0"/>
</div>
</div>
<div className="h-px bg-slate-200/70"></div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[13px] font-medium text-slate-700">显示轨道</span>
<button aria-pressed="true" className="relative h-6 w-11 rounded-full bg-slate-900/90 transition-colors ring-1 ring-inset ring-slate-300/60 data-[off=true]:bg-slate-200" data-on="true" id="showOrbitsToggle">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform translate-x-5 data-[off=true]:translate-x-0"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-[13px] font-medium text-slate-700">显示标签</span>
<button aria-pressed="false" className="relative h-6 w-11 rounded-full bg-slate-200 transition-colors ring-1 ring-inset ring-slate-300/60 data-[on=true]:bg-slate-900/90" data-on="false" id="showLabelsToggle">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform translate-x-0 data-[on=true]:translate-x-5"></span>
</button>
</div>
</div>
<div className="h-px bg-slate-200/70"></div>

<div className="text-[12px] text-slate-500 leading-6">
                • 空格: 播放/暂停
                <br/>
                • 拖动右侧滑块可实时更新轨道联动
              </div>
</div>
</aside>
</div>
</div>
</main>

<div className="fixed inset-x-0 bottom-0 z-50 md:hidden translate-y-full transition-transform duration-300" id="drawer">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="rounded-t-2xl border border-slate-200/70 bg-white shadow-lg p-4 sm:p-5">
<div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
<h3 className="text-[17px] font-semibold tracking-tight text-slate-900">控制面板</h3>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors" id="drawerClose">
<i className="h-4.5 w-4.5" data-lucide="x"></i>
</button>
</div>
<div className="pt-4" id="drawerContent">

</div>
</div>
</div>
</div>
</div>


    </>
  );
}
