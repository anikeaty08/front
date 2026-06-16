import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize icons
    lucide.createIcons();

    // App state
    const state = {
      portOpen: false,
      running: false,
      paused: false,
      powered: false,
      modeAuto: true,
      setpoint: 320,
      temp: 20,
      powerPct: 0,
      speed: 3.5,
      startTime: null,
      feedPos: 0,
      alarm: false,
      timer: null
    };

    // Elements
    const portToggle = document.getElementById('portToggle');
    const portBadge = document.getElementById('portBadge');
    const linkState = document.getElementById('linkState');
    const portDot = document.getElementById('portDot');
    const portPing = document.getElementById('portPing');

    const eStop = document.getElementById('eStop');
    const alarmBadge = document.getElementById('alarmBadge');

    const btnStart = document.getElementById('btnStart');
    const btnStop = document.getElementById('btnStop');
    const btnPause = document.getElementById('btnPause');
    const btnResume = document.getElementById('btnResume');

    const modeToggle = document.getElementById('modeToggle');
    const modeBadge = document.getElementById('modeBadge');
    const modeText = document.getElementById('modeText');
    const modeIcon = document.getElementById('modeIcon');

    const powerToggle = document.getElementById('powerToggle');
    const powerKnob = document.getElementById('powerKnob');
    const powerState = document.getElementById('powerState');
    const powerBadge = document.getElementById('powerBadge');
    const powerPct = document.getElementById('powerPct');

    const tempNow = document.getElementById('tempNow');
    const tempSet = document.getElementById('tempSet');
    const speedNow = document.getElementById('speedNow');
    const programState = document.getElementById('programState');

    const spMinus = document.getElementById('spMinus');
    const spPlus = document.getElementById('spPlus');
    const writeController = document.getElementById('writeController');
    const clearFaults = document.getElementById('clearFaults');

    const mmMinus = document.getElementById('mmMinus');
    const mmPlus = document.getElementById('mmPlus');
    const feedPos = document.getElementById('feedPos');
    const writeFeeder = document.getElementById('writeFeeder');
    const resetFeeder = document.getElementById('resetFeeder');
    const feederError = document.getElementById('feederError');
    const feederOn = document.getElementById('feederOn');

    const cycleTime = document.getElementById('cycleTime');
    const log = document.getElementById('log');
    const clearLog = document.getElementById('clearLog');
    const exportLog = document.getElementById('exportLog');

    function addLog(text, type = 'info') {
      const line = document.createElement('div');
      line.className = type === 'error' ? 'text-rose-300' : 'text-slate-300';
      const ts = new Date().toLocaleTimeString();
      line.textContent = `[${ts}] ${text}`;
      log.appendChild(line);
      log.scrollTop = log.scrollHeight;
    }

    // Port toggle
    portToggle.addEventListener('click', () => {
      state.portOpen = !state.portOpen;
      portBadge.style.display = state.portOpen ? 'flex' : 'none';
      portToggle.querySelector('span').textContent = state.portOpen ? 'Disconnect' : 'Connect';
      linkState.textContent = state.portOpen ? 'Connected' : 'Disconnected';
      portDot.className = 'relative inline-flex rounded-full h-2.5 w-2.5 ' + (state.portOpen ? 'bg-emerald-400' : 'bg-slate-400');
      portPing.className = (state.portOpen ? 'animate-ping ' : 'hidden ') + 'absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40';
      addLog(state.portOpen ? 'Port opened.' : 'Port closed.');
    });

    // E-Stop
    eStop.addEventListener('click', () => {
      state.running = false;
      state.paused = false;
      state.powered = false;
      programState.textContent = 'STOP';
      powerState.textContent = 'Off';
      powerToggle.setAttribute('aria-pressed', 'false');
      powerKnob.style.transform = 'translateX(0)';
      updateBadges();
      setAlarm(true, 'Emergency stop engaged');
    });

    function setAlarm(active, text='Alarm active') {
      state.alarm = active;
      alarmBadge.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ' + (active
        ? 'bg-rose-500/10 text-rose-300 ring-rose-500/20'
        : 'bg-emerald-500/10 text-emerald-300 ring-emerald-500/20');
      alarmBadge.querySelector('i').setAttribute('data-lucide', active ? 'alert-triangle' : 'shield-check');
      alarmBadge.querySelector('span').textContent = active ? 'Alarm' : 'Normal';
      lucide.createIcons();
      if (text) addLog(text, active ? 'error' : 'info');
    }

    // Mode toggle
    modeToggle.addEventListener('click', () => {
      state.modeAuto = !state.modeAuto;
      modeText.textContent = state.modeAuto ? 'Auto' : 'Manual';
      modeIcon.setAttribute('data-lucide', state.modeAuto ? 'cpu' : 'hand');
      modeBadge.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ' + (state.modeAuto
        ? 'bg-slate-800 text-slate-200 ring-white/10'
        : 'bg-amber-500/10 text-amber-200 ring-amber-500/20');
      lucide.createIcons();
      addLog('Mode: ' + (state.modeAuto ? 'Auto' : 'Manual'));
    });

    // Power toggle
    powerToggle.addEventListener('click', () => {
      state.powered = !state.powered;
      powerToggle.setAttribute('aria-pressed', state.powered);
      powerKnob.style.transform = state.powered ? 'translateX(2.6rem)' : 'translateX(0)';
      powerState.textContent = state.powered ? 'On' : 'Off';
      addLog('Power ' + (state.powered ? 'enabled' : 'disabled'));
      updateBadges();
    });

    // Program buttons
    btnStart.addEventListener('click', () => {
      if (!state.portOpen) addLog('Cannot start: port is closed.', 'error');
      state.running = true;
      state.paused = false;
      state.startTime = Date.now();
      programState.textContent = 'RUN';
      addLog('Program started.');
      setAlarm(false, '');
    });

    btnStop.addEventListener('click', () => {
      state.running = false;
      state.paused = false;
      programState.textContent = 'STOP';
      addLog('Program stopped.');
    });

    btnPause.addEventListener('click', () => {
      if (!state.running) return;
      state.paused = true;
      addLog('Program paused.');
    });

    btnResume.addEventListener('click', () => {
      if (!state.running) return;
      state.paused = false;
      addLog('Program resumed.');
    });

    // Setpoint adjustments
    function updateSetpointText() {
      tempSet.textContent = state.setpoint + ' °C';
    }
    spMinus.addEventListener('click', () => { state.setpoint = Math.max(0, state.setpoint - 5); updateSetpointText(); });
    spPlus.addEventListener('click', () => { state.setpoint = Math.min(500, state.setpoint + 5); updateSetpointText(); });
    writeController.addEventListener('click', () => addLog('Setpoint written: ' + state.setpoint + ' °C'));

    clearFaults.addEventListener('click', () => setAlarm(false, 'Faults cleared.'));

    // Feeder
    mmMinus.addEventListener('click', () => { state.feedPos -= 5; feedPos.textContent = state.feedPos.toFixed(1) + ' mm'; });
    mmPlus.addEventListener('click', () => { state.feedPos += 5; feedPos.textContent = state.feedPos.toFixed(1) + ' mm'; });
    writeFeeder.addEventListener('click', () => addLog('Feeder position written: ' + state.feedPos.toFixed(1) + ' mm'));
    resetFeeder.addEventListener('click', () => { feederError.classList.add('hidden'); addLog('Feeder error reset.'); });
    // Randomly simulate feeder error sometimes
    setInterval(() => {
      if (state.running && Math.random() < 0.01) {
        feederError.classList.remove('hidden');
        setAlarm(true, 'Feeder jam detected.');
      }
    }, 2000);

    // Chart
    const ctx = document.getElementById('telemetryChart').getContext('2d');
    const temps = [];
    const setpoints = [];
    const powerSeries = [];
    const labels = [];

    const gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, 'rgba(99,102,241,0.5)');
    gradient.addColorStop(1, 'rgba(99,102,241,0.05)');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Temperature',
            data: temps,
            borderColor: '#818cf8',
            backgroundColor: gradient,
            tension: 0.25,
            borderWidth: 2,
            pointRadius: 0,
            fill: true
          },
          {
            label: 'Setpoint',
            data: setpoints,
            borderColor: '#22d3ee',
            borderDash: [6, 6],
            tension: 0,
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Power %',
            data: powerSeries,
            yAxisID: 'y1',
            borderColor: '#34d399',
            borderWidth: 1.5,
            tension: 0.25,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#cbd5e1', boxWidth: 12, usePointStyle: true } },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148,163,184,0.15)' }
          },
          y: {
            beginAtZero: true,
            suggestedMax: 400,
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148,163,184,0.15)' }
          },
          y1: {
            position: 'right',
            beginAtZero: true,
            suggestedMax: 100,
            ticks: { color: '#94a3b8' },
            grid: { drawOnChartArea: false }
          }
        }
      }
    });

    function updateBadges() {
      // Power badge highlight
      powerBadge.className = 'flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ' + (state.powered
        ? 'bg-emerald-500/10 ring-emerald-500/20'
        : 'bg-slate-800/70 ring-white/10');
      powerState.textContent = state.powered ? 'On' : 'Off';
    }

    function tick() {
      // Model: simple first-order approach to setpoint when running & powered
      const ambient = 25;
      const dt = 1; // sec
      const tauHeat = 18; // seconds time constant
      const tauCool = 30;

      let target = ambient;
      if (state.running && state.powered && !state.paused && !state.alarm) {
        target = state.setpoint;
      }
      const tau = target > state.temp ? tauHeat : tauCool;
      state.temp += (target - state.temp) * (dt / tau);

      // Power percentage: proportional control
      state.powerPct = Math.max(0, Math.min(100, (state.setpoint - state.temp) * 0.8));
      if (!state.running || !state.powered || state.paused || state.alarm) state.powerPct = 0;

      // Update stats
      tempNow.textContent = Math.round(state.temp) + ' °C';
      powerPct.textContent = Math.round(state.powerPct);
      speedNow.textContent = state.speed.toFixed(1) + ' mm/s';
      if (state.startTime && state.running) {
        const secs = Math.floor((Date.now() - state.startTime) / 1000);
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        cycleTime.textContent = `${m}:${s.toString().padStart(2,'0')}`;
      } else {
        cycleTime.textContent = '0:00';
      }

      // Chart data
      const now = new Date();
      const label = now.toLocaleTimeString();
      labels.push(label);
      temps.push(Math.round(state.temp));
      setpoints.push(state.setpoint);
      powerSeries.push(Math.round(state.powerPct));
      if (labels.length > 60) { labels.shift(); temps.shift(); setpoints.shift(); powerSeries.shift(); }
      chart.update('none');

      requestAnimationFrameStep();
    }

    function requestAnimationFrameStep() {
      // Drive tick each second
      if (state.timer) clearTimeout(state.timer);
      state.timer = setTimeout(tick, 1000);
    }

    function init() {
      updateSetpointText();
      updateBadges();
      portBadge.style.display = 'none';
      addLog('UI initialized.');
      requestAnimationFrameStep();
    }

    // Log actions
    clearLog.addEventListener('click', () => { log.innerHTML = ''; addLog('Log cleared.'); });
    exportLog.addEventListener('click', () => {
      const lines = Array.from(log.children).map(n => n.textContent).join('\n');
      const blob = new Blob([lines], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'console-log.txt'; a.click();
      URL.revokeObjectURL(url);
    });

    init();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-25" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"></div>
<div className="absolute inset-0 pointer-events-none opacity-25" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, #22d3ee22 0, transparent 35%), radial-gradient(circle at 80% 20%, #a78bfa22 0, transparent 30%), radial-gradient(circle at 50% 80%, #22c55e22 0, transparent 35%)'}}></div>
</div>

<header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/20 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="cpu"></i>
</div>
<div>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Pantes Robotic Soldering</h1>
<p className="text-xs text-slate-400 -mt-0.5">CNC-style console for robotics complex</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 ring-1 ring-white/10" id="portBadge">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" id="portPing"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" id="portDot"></span>
</span>
<span className="text-sm font-medium">Port Open</span>
</div>
<button className="group inline-flex items-center gap-2 px-3.5 h-10 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-slate-800 transition" id="portToggle">
<i className="w-4.5 h-4.5 text-slate-300 group-hover:text-indigo-300" data-lucide="plug"></i>
<span className="text-sm font-medium">Connect</span>
</button>
<button className="inline-flex items-center gap-2 px-3.5 h-10 rounded-xl bg-rose-600/90 hover:bg-rose-600 ring-1 ring-rose-300/30 transition" id="eStop">
<i className="w-4.5 h-4.5" data-lucide="octagon-alert"></i>
<span className="text-sm font-semibold">E‑Stop</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="lg:col-span-5 xl:col-span-4 space-y-6">

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Machine Status</h2>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20" id="alarmBadge">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span className="text-xs font-medium">Normal</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 ring-1 ring-white/10" id="powerBadge">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="power"></i>
<div>
<p className="text-[11px] text-slate-400">Power</p>
<p className="text-sm font-medium" id="powerState">Off</p>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="gauge"></i>
<div>
<p className="text-[11px] text-slate-400">Feed Speed</p>
<p className="text-sm font-medium" id="speedNow">3.5 mm/s</p>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="thermometer"></i>
<div>
<p className="text-[11px] text-slate-400">Temp (actual)</p>
<p className="text-sm font-medium" id="tempNow">20 °C</p>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="target"></i>
<div>
<p className="text-[11px] text-slate-400">Temp (set)</p>
<p className="text-sm font-medium" id="tempSet">320 °C</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Program Control</h2>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 ring-1 ring-white/10" id="modeBadge">
<i className="w-4 h-4" data-lucide="cpu" id="modeIcon"></i>
<span className="text-xs font-medium" id="modeText">Auto</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="group flex items-center justify-center gap-2 h-11 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 ring-1 ring-emerald-300/30 transition" id="btnStart">
<i className="w-4.5 h-4.5" data-lucide="play"></i>
<span className="text-sm font-semibold">Start</span>
</button>
<button className="group flex items-center justify-center gap-2 h-11 rounded-xl bg-rose-600/90 hover:bg-rose-600 ring-1 ring-rose-300/30 transition" id="btnStop">
<i className="w-4.5 h-4.5" data-lucide="stop-circle"></i>
<span className="text-sm font-semibold">Stop</span>
</button>
<button className="group flex items-center justify-center gap-2 h-11 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 ring-1 ring-indigo-300/30 transition" id="btnResume">
<i className="w-4.5 h-4.5" data-lucide="rotate-cw"></i>
<span className="text-sm font-semibold">Resume</span>
</button>
<button className="group flex items-center justify-center gap-2 h-11 rounded-xl bg-amber-600/90 hover:bg-amber-600 ring-1 ring-amber-300/30 transition" id="btnPause">
<i className="w-4.5 h-4.5" data-lucide="pause"></i>
<span className="text-sm font-semibold">Pause</span>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<button aria-pressed="true" className="inline-flex items-center gap-2 px-3.5 h-10 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="modeToggle">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="hand"></i>
<span className="text-sm font-medium">Toggle Auto / Manual</span>
</button>
<button aria-pressed="false" className="relative inline-flex items-center h-10 rounded-full px-1.5 bg-slate-800 ring-1 ring-white/10" id="powerToggle">
<span className="sr-only">Power</span>
<span className="px-2 text-xs text-slate-400">Off</span>
<span className="mx-1 h-7 w-7 rounded-full bg-slate-600 shadow ring-1 ring-white/10 transition-transform" id="powerKnob"></span>
<span className="px-2 text-xs text-emerald-300">On</span>
</button>
</div>
</div>

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Heating &amp; Controller</h2>
<div className="mt-4 grid grid-cols-3 gap-3">
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="spMinus">
<i className="w-4.5 h-4.5" data-lucide="minus"></i>
<span className="text-sm font-medium">-5°C</span>
</button>
<div className="flex items-center justify-center h-11 rounded-xl bg-slate-800/40 ring-1 ring-white/10">
<span className="text-sm text-slate-300">Setpoint</span>
</div>
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="spPlus">
<i className="w-4.5 h-4.5" data-lucide="plus"></i>
<span className="text-sm font-medium">+5°C</span>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-sky-600/90 hover:bg-sky-600 ring-1 ring-sky-300/30 transition" id="writeController">
<i className="w-4.5 h-4.5" data-lucide="download"></i>
<span className="text-sm font-semibold">Write to Controller</span>
</button>
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="clearFaults">
<i className="w-4.5 h-4.5" data-lucide="eraser"></i>
<span className="text-sm font-medium">Clear Faults</span>
</button>
</div>
</div>

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Feeder</h2>
<div className="mt-4 grid grid-cols-3 gap-3">
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="mmMinus">
<i className="w-4.5 h-4.5" data-lucide="arrow-left"></i>
<span className="text-sm font-medium">-5 mm</span>
</button>
<div className="flex items-center justify-center h-11 rounded-xl bg-slate-800/40 ring-1 ring-white/10">
<span className="text-sm text-slate-300" id="feedPos">0.0 mm</span>
</div>
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="mmPlus">
<i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
<span className="text-sm font-medium">+5 mm</span>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-sky-600/90 hover:bg-sky-600 ring-1 ring-sky-300/30 transition" id="writeFeeder">
<i className="w-4.5 h-4.5" data-lucide="save"></i>
<span className="text-sm font-semibold">Write to Feeder</span>
</button>
<button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 ring-1 ring-emerald-300/30 transition" id="resetFeeder">
<i className="w-4.5 h-4.5" data-lucide="rotate-ccw"></i>
<span className="text-sm font-semibold">Reset Error</span>
</button>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/20 hidden" id="feederError">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span className="text-xs font-medium">Feeder Error</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20" id="feederOn">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
<span className="text-xs font-medium">Feeder ON</span>
</div>
</div>
</div>
</section>

<section className="lg:col-span-7 xl:col-span-8 space-y-6">

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Live Telemetry</h2>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 ring-1 ring-white/10 text-xs">
<i className="w-3.5 h-3.5" data-lucide="thermometer"></i> °C
              </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 ring-1 ring-white/10 text-xs">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> %
              </span>
</div>
</div>
<p className="mt-1 text-sm text-slate-400">Sampling at 1s. Start to heat toward the setpoint; Stop to cool to ambient.</p>

<div className="mt-4">
<div className="h-64 md:h-80">
<canvas id="telemetryChart"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl bg-slate-800/70 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-slate-400">Power %</p>
<p className="text-lg font-semibold tracking-tight" id="powerPct">0</p>
</div>
<div className="rounded-xl bg-slate-800/70 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-slate-400">Cycle</p>
<p className="text-lg font-semibold tracking-tight" id="cycleTime">0:00</p>
</div>
<div className="rounded-xl bg-slate-800/70 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-slate-400">Program</p>
<p className="text-lg font-semibold tracking-tight" id="programState">STOP</p>
</div>
<div className="rounded-xl bg-slate-800/70 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-slate-400">Link</p>
<p className="text-lg font-semibold tracking-tight" id="linkState">Disconnected</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Messages</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="clearLog">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="eraser"></i>
<span className="text-sm font-medium">Clear</span>
</button>
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-slate-800/80 ring-1 ring-white/10 hover:bg-slate-800 transition" id="exportLog">
<i className="w-4.5 h-4.5 text-slate-300" data-lucide="download"></i>
<span className="text-sm font-medium">Export</span>
</button>
</div>
</div>
<div className="mt-3 max-h-48 overflow-auto rounded-xl bg-slate-950/60 ring-1 ring-white/10 p-3 space-y-1 text-sm" id="log">
<div className="text-slate-400">Console ready.</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Quick Access</h2>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-slate-800/70 ring-1 ring-white/10 hover:bg-slate-800 transition">
<i className="w-6 h-6 text-slate-200" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-slate-800/70 ring-1 ring-white/10 hover:bg-slate-800 transition">
<i className="w-6 h-6 text-slate-200" data-lucide="wrench"></i>
<span className="text-sm font-medium">Manual</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-slate-800/70 ring-1 ring-white/10 hover:bg-slate-800 transition">
<i className="w-6 h-6 text-slate-200" data-lucide="settings"></i>
<span className="text-sm font-medium">Settings</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-slate-800/70 ring-1 ring-white/10 hover:bg-slate-800 transition">
<i className="w-6 h-6 text-slate-200" data-lucide="book-open-check"></i>
<span className="text-sm font-medium">Docs</span>
</button>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
