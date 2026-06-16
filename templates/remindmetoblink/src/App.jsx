import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
void: '#050505',
glass: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
},
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.6s ease-out forwards',
'vibrant-osc': 'vibrantOsc 6s linear infinite'
},
keyframes: {
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
vibrantOsc: {
'0%': { transform: 'scale(1) translateY(0)' },
'50%': { transform: 'scale(1.05) translateY(-6px)' },
'100%': { transform: 'scale(1) translateY(0)' }
}
}
}
}
}



        // --- Dynamic Manifest & Service Worker (updated app name) ---
    const manifest = {
      name: "blink.",
      short_name: "blink",
      start_url: ".",
      display: "standalone",
      background_color: "#050505",
      theme_color: "#050505",
      icons: [
        { src: "https://api.iconify.design/lucide:eye.svg?color=white", sizes: "192x192", type: "image/svg+xml" },
        { src: "https://api.iconify.design/lucide:eye.svg?color=white", sizes: "512x512", type: "image/svg+xml" }
      ]
    };
    const stringManifest = JSON.stringify(manifest);
    const blobManifest = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blobManifest);
    const linkTag = document.createElement('link');
    linkTag.rel = 'manifest';
    linkTag.href = manifestURL;
    document.head.appendChild(linkTag);

    // Register a small service worker stub
    if ('serviceWorker' in navigator) {
      const swContent = `
        self.addEventListener('install', (e) => self.skipWaiting());
        self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
        self.addEventListener('notificationclick', function(e){ e.notification.close(); });
      `;
      const blobSw = new Blob([swContent], {type: "text/javascript"});
      const swUrl = URL.createObjectURL(blobSw);
      navigator.serviceWorker.register(swUrl).then(() => console.log("SW Registered")).catch(console.error);
    }

    // --- State & DOM ---
    const state = {
      isRunning: false,
      intervalMinutes: 20,
      targetTime: null,
      worker: null
    };

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    const els = {
      slider: document.getElementById('time-slider'),
      display: document.getElementById('interval-display'),
      toggle: document.getElementById('toggle'),          // hidden accessible checkbox
      toggleWrap: document.getElementById('toggleWrap'), // visual wrapper for the toggle
      nextBlink: document.getElementById('next-blink'),
      statusLine: document.getElementById('status-line'),
      permGuide: document.getElementById('permission-guide'),
      iosGuide: document.getElementById('ios-install-guide'),
      toast: document.getElementById('toast'),
      toastMsg: document.getElementById('toast-msg'),
      testNotifBtn: document.getElementById('testNotifBtn'),
      animToggle: document.getElementById('animToggle'),
      ambient: document.getElementById('ambient'),
      statusDot: document.getElementById('status-dot'),
      statusText: document.getElementById('status-text'),
      toggleThumb: document.querySelector('#toggleWrap .thumb'),
    };

    // --- Blob worker for timer ---
    const workerScript = `
      let timer = null;
      self.onmessage = function(e) {
        if (e.data.type === 'START') {
          if(timer) clearTimeout(timer);
          const now = Date.now();
          const target = e.data.targetTime;
          const delay = Math.max(0, target - now);
          timer = setTimeout(() => { self.postMessage({ type: 'TRIGGER' }); }, delay);
        } else if (e.data.type === 'STOP') {
          if(timer) clearTimeout(timer);
        }
      };
    `;
    const blob = new Blob([workerScript], { type: "text/javascript" });
    state.worker = new Worker(window.URL.createObjectURL(blob));

    state.worker.onmessage = (e) => {
      if (e.data.type === 'TRIGGER') {
        triggerNotification();
        // Auto-restart
        const newTarget = Date.now() + (state.intervalMinutes * 60 * 1000);
        savePersistence(true, newTarget);
        state.targetTime = newTarget;
        state.worker.postMessage({ type: 'START', targetTime: newTarget });
        renderCountdown();
      }
    };

    // --- Persistence ---
    function savePersistence(active, target) {
      localStorage.setItem('oculus_active', active);
      localStorage.setItem('oculus_interval', state.intervalMinutes);
      if (target) localStorage.setItem('oculus_target', target);
      else localStorage.removeItem('oculus_target');
    }

    function loadPersistence() {
      const savedInterval = localStorage.getItem('oculus_interval');
      const savedActive = localStorage.getItem('oculus_active') === 'true';
      const savedTarget = parseInt(localStorage.getItem('oculus_target'));

      if (savedInterval) {
        state.intervalMinutes = parseInt(savedInterval);
        els.slider.value = state.intervalMinutes;
        updateDisplay(state.intervalMinutes);
        updateSliderBackground(state.intervalMinutes);
      }

      if (savedActive && savedTarget) {
        const now = Date.now();
        if (savedTarget > now) {
          state.targetTime = savedTarget;
          // restore visual toggle as the user intended; we'll start only if permission is granted
          setToggleVisual(true);
          // Only actually start if permission is present
          if ('Notification' in window && Notification.permission === 'granted') {
            startSystem(true);
          } else {
            // don't start, but keep the visual reflecting saved intent
            showToast("Monitoring saved but notifications need permission");
          }
        } else {
          savePersistence(false, null);
          setToggleVisual(false);
        }
      } else {
        setToggleVisual(false);
      }
    }

    // --- Permission & Start checks ---
    function checkPermissionAndStart() {
      if (isIOS && !isStandalone) {
        showOverlay('ios-install-guide');
        setToggleVisual(false);
        return;
      }

      if (!("Notification" in window)) {
        showToast("Notifications not supported in this browser");
        setToggleVisual(false);
        return;
      }

      if (Notification.permission === "granted") {
        startSystem();
      } else if (Notification.permission !== "denied") {
        showOverlay('permission-guide');
      } else {
        setToggleVisual(false);
        showToast("Notifications blocked in settings");
      }
    }

    window.requestPermission = async function() {
      const permission = await Notification.requestPermission();
      closeOverlay('permission-guide');
      if (permission === "granted") {
        startSystem();
      } else {
        setToggleVisual(false);
        showToast("Access denied");
      }
    }

    // --- UI helpers ---
    function showOverlay(id) {
      const el = document.getElementById(id);
      el.style.display = 'flex';
      setTimeout(() => el.style.opacity = '1', 10);
    }
    window.closeOverlay = function(id) {
      const el = document.getElementById(id);
      el.style.opacity = '0';
      setTimeout(() => el.style.display = 'none', 500);
      if (id === 'permission-guide' || id === 'ios-install-guide') {
        if (!state.isRunning) setToggleVisual(false);
      }
    }

    function updateSliderBackground(val) {
      const min = els.slider.min || 1;
      const max = els.slider.max || 60;
      const percentage = ((val - min) / (max - min)) * 100;
      els.slider.style.setProperty('--progress', `${percentage}%`);
    }

    function updateDisplay(mins) {
      els.display.innerHTML = `${mins} <span class="text-neutral-600 text-lg font-sans font-light ml-1">min</span>`;
    }

    function setToggleVisual(on) {
      // keep both the hidden checkbox and the visual wrapper in sync
      els.toggle.checked = !!on;
      if (!!on) {
        els.toggleWrap.classList.add('checked');
        els.toggleWrap.setAttribute('aria-checked', 'true');
      } else {
        els.toggleWrap.classList.remove('checked');
        els.toggleWrap.setAttribute('aria-checked', 'false');
      }
    }

    function startSystem(resume = false) {
      state.isRunning = true;
      els.toggle.checked = true;
      setToggleVisual(true);
      if (!resume) state.targetTime = Date.now() + (state.intervalMinutes * 60 * 1000);
      savePersistence(true, state.targetTime);
      state.worker.postMessage({ type: 'START', targetTime: state.targetTime });

      els.statusLine.style.backgroundColor = "#e5e5e5";
      els.statusLine.style.boxShadow = "0 0 10px rgba(255,255,255,0.3)";
      els.nextBlink.style.opacity = '1';
      els.statusDot.classList.remove('bg-neutral-700');
      els.statusDot.classList.add('bg-green-500');
      els.statusText.innerText = "Monitoring";
      renderCountdown();
      if (!resume) showToast("blink. Active");
    }

    function stopSystem() {
      state.isRunning = false;
      state.targetTime = null;
      state.worker.postMessage({ type: 'STOP' });
      savePersistence(false, null);
      setToggleVisual(false);

      els.statusLine.style.backgroundColor = "rgba(255,255,255,0.05)";
      els.statusLine.style.boxShadow = "none";
      els.nextBlink.style.opacity = '0';
      els.statusDot.classList.remove('bg-green-500');
      els.statusDot.classList.add('bg-neutral-700');
      els.statusText.innerText = "System Ready";
    }

    async function triggerNotification() {
      try {
        // Use service worker notification if available
        if (navigator.serviceWorker && navigator.serviceWorker.ready) {
          const reg = await navigator.serviceWorker.ready;
          reg.showNotification("blink.", {
            body: `Time to rest your eyes. Look away for ${state.intervalMinutes} seconds.`,
            icon: "https://api.iconify.design/lucide:eye.svg?color=white",
            tag: 'blink-alert'
          });
        } else {
          // fallback
          new Notification("blink.", {
            body: `Time to rest your eyes. Look away for ${state.intervalMinutes} seconds.`,
            icon: "https://api.iconify.design/lucide:eye.svg?color=white"
          });
        }
      } catch (e) {
        console.warn("Notification trigger failed", e);
        showToast("Time to rest (notification failed)");
      }
    }

    function renderCountdown() {
      if (!state.isRunning || !state.targetTime) return;
      const diff = state.targetTime - Date.now();
      if (diff > 0) {
        const mins = Math.floor(diff / 60000).toString().padStart(2, '0');
        const secs = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        els.nextBlink.innerText = `${mins}:${secs}`;
        requestAnimationFrame(renderCountdown);
      } else {
        els.nextBlink.innerText = "00:00";
      }
    }

    function showToast(msg) {
      els.toastMsg.innerText = msg;
      els.toast.classList.add('show');
      setTimeout(() => { els.toast.classList.remove('show'); }, 3000);
    }

    // --- Event wiring (toggle, slider, test button, animation toggle) ---
    els.slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      state.intervalMinutes = val;
      updateDisplay(val);
      updateSliderBackground(val);
      // if active, restart with new interval to keep behavior consistent
      if (state.isRunning) {
        stopSystem();
        startSystem();
      } else {
        savePersistence(false, null);
      }
    });

    // Visual wrapper click toggles hidden checkbox and triggers change
    els.toggleWrap.addEventListener('click', () => {
      const will = !els.toggle.checked;
      // set visual optimistically
      setToggleVisual(will);
      // trigger actual behavior
      if (will) checkPermissionAndStart();
      else stopSystem();
    });

    // allow keyboard toggle
    els.toggleWrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        els.toggleWrap.click();
      }
    });

    // Test notification button
    els.testNotifBtn.addEventListener('click', async () => {
      // Ensure notification permission is present (request if not denied)
      if (!("Notification" in window)) {
        showToast("Notifications unsupported here");
        return;
      }
      if (Notification.permission === "granted") {
        triggerNotification();
      } else if (Notification.permission !== "denied") {
        const perm = await Notification.requestPermission();
        if (perm === "granted") triggerNotification();
        else showToast("Permission denied");
      } else {
        showToast("Notifications blocked in settings");
      }
    });

    // Ambient animation toggle
    els.animToggle.addEventListener('click', () => {
      els.ambient.classList.toggle('vibrant');
      if (els.ambient.classList.contains('vibrant')) showToast("Vibrant background enabled");
      else showToast("Soft background enabled");
    });

    // --- Init and load persistence ---
    function init() {
      updateSliderBackground(state.intervalMinutes);
      lucide.createIcons();
      loadPersistence();
    }

    init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient" id="ambient">
<div className="soft-pulse"></div>
</div>

<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md hidden flex-col items-center justify-center transition-opacity duration-500 opacity-0" id="permission-guide">
<div className="text-center max-w-sm px-8">
<div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 bg-neutral-900">
<i className="w-5 h-5 text-neutral-400" data-lucide="bell"></i>
</div>
<h3 className="font-serif text-3xl text-white mb-3">Enable Notifications</h3>
<p className="text-neutral-400 font-sans font-light mb-8 text-sm leading-6">
                blink. runs in the background to preserve your vision.<br/>Please allow permissions to continue.
            </p>
<button className="bg-white text-black hover:bg-neutral-200 px-6 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest transition-colors font-medium" onclick="requestPermission()">Allow Access</button>
<button className="block mt-6 text-[10px] text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors" onclick="closeOverlay('permission-guide')">Dismiss</button>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md hidden flex-col items-center justify-center transition-opacity duration-500 opacity-0" id="ios-install-guide">
<div className="text-center max-w-sm px-6 w-full">
<h3 className="font-serif text-3xl text-white mb-4">Install App</h3>
<p className="text-neutral-400 font-sans font-light mb-8 text-sm leading-6">
                To enable notifications on iOS, add this website to your Home Screen.
            </p>
<div className="space-y-4 text-left font-sans text-sm text-neutral-300 max-w-[280px] mx-auto mb-8">
<div className="flex items-center gap-4 p-3 rounded-lg ios-btn">
<i className="w-5 h-5 text-neutral-500" data-lucide="share"></i>
<span className="font-light">1. Tap the <span className="font-medium text-white">Share</span> button</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg ios-btn">
<i className="w-5 h-5 text-neutral-500" data-lucide="plus-square"></i>
<span className="font-light">2. Select <span className="font-medium text-white">Add to Home Screen</span></span>
</div>
</div>
<button className="text-[10px] text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors" onclick="closeOverlay('ios-install-guide')">I understand</button>
</div>
</div>

<main className="relative z-10 w-full max-w-[420px] p-6 flex flex-col items-center">
<header className="text-center mb-10 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex justify-center mb-6">
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-void shadow-2xl relative overflow-hidden group cursor-pointer transition-colors hover:border-neutral-600">
<div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-500">
</div>
</div>
</div>
<h1 className="font-serif text-5xl text-white tracking-tight mb-3">blink.</h1>
<p className="font-sans text-xs text-neutral-500 font-normal tracking-wide leading-relaxed">Vision preservation
                system.</p>
</header>

<div className="w-full glass-panel rounded-xl p-6 animate-slide-up space-y-7 relative overflow-hidden" style={{animationDelay: '0.2s'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-800/50 transition-colors duration-700" id="status-line"></div>
<div className="space-y-6">
<div className="flex justify-between items-end px-1">
<label className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Interval</label>
<span className="font-serif text-2xl text-white tabular-nums" id="interval-display">20 <span className="text-neutral-600 text-base font-sans font-light ml-1">min</span></span>
</div>
<div className="relative w-full h-6 flex items-center">
<input className="group z-10" id="time-slider" max="60" min="1" step="1" type="range" value="20"/>
</div>
<div className="flex justify-between text-[9px] text-neutral-600 font-mono uppercase tracking-wider px-1">
<span>1 min</span>
<span>60 min</span>
</div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="font-sans text-sm font-medium text-neutral-200">Monitoring</span>
<span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest opacity-0 transition-opacity" id="next-blink">--:--</span>
</div>
<div className="flex items-center gap-3">

<div aria-checked="false" className="toggle" id="toggleWrap" role="switch" tabindex="0" title="Toggle monitoring">
<input aria-hidden="false" className="sr-only" id="toggle" type="checkbox"/>
<div className="thumb"></div>
</div>

<button aria-label="Test notification" className="icon-btn" id="testNotifBtn" title="Test notification">
<i className="w-4 h-4 text-neutral-300" data-lucide="bell"></i>
</button>

<button aria-label="Toggle background animation" className="icon-btn" id="animToggle" title="Toggle background animation">
<i className="w-4 h-4 text-neutral-300" data-lucide="wind"></i>
</button>
</div>
</div>
</div>

<div className="mt-8 text-center animate-slide-up opacity-0" style={{animationDelay: '0.4s'}}>
<div className="flex items-center justify-center gap-2 mb-2" id="connection-status">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700 animate-pulse" id="status-dot"></div>
<span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest" id="status-text">System Ready</span>
</div>
</div>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel px-5 py-3 rounded-full flex items-center gap-3 translate-y-20 opacity-0 transition-all duration-500 z-50 shadow-2xl w-max max-w-[90vw]" id="toast">
<i className="w-4 h-4 text-neutral-300 flex-shrink-0" data-lucide="info"></i>
<span className="text-xs font-sans text-neutral-300 font-medium truncate" id="toast-msg"></span>
</div>


    </>
  );
}
