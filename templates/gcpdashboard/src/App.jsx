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



// Region data
const regionData = {
  'africa': {
    refugees: '8.2M',
    idp: '24.8M',
    asylum: '1.5M',
    stateless: '0.9M',
    total: '12.4M',
    trend: '+89K today',
    conflictPercent: 75,
    climatePercent: 18,
    economicPercent: 5,
    politicalPercent: 2
  },
  'middle-east': {
    refugees: '13.4M',
    idp: '15.2M',
    asylum: '2.1M',
    stateless: '1.8M',
    total: '18.7M',
    trend: '+156K today',
    conflictPercent: 82,
    climatePercent: 8,
    economicPercent: 7,
    politicalPercent: 3
  },
  'asia': {
    refugees: '11.8M',
    idp: '18.3M',
    asylum: '2.7M',
    stateless: '1.5M',
    total: '24.1M',
    trend: '+234K today',
    conflictPercent: 58,
    climatePercent: 32,
    economicPercent: 7,
    politicalPercent: 3
  },
  'europe': {
    refugees: '6.2M',
    idp: '5.1M',
    asylum: '1.2M',
    stateless: '0.6M',
    total: '8.2M',
    trend: '+12K today',
    conflictPercent: 45,
    climatePercent: 15,
    economicPercent: 25,
    politicalPercent: 15
  },
  'americas': {
    refugees: '7.8M',
    idp: '10.1M',
    asylum: '1.8M',
    stateless: '0.4M',
    total: '15.3M',
    trend: '+67K today',
    conflictPercent: 38,
    climatePercent: 28,
    economicPercent: 22,
    politicalPercent: 12
  }
};

let currentRegion = null;
let updateInterval;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  }

  // Setup region button listeners
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const region = this.dataset.region;
      selectRegion(region);
    });
  });

  // Start update timers
  startUpdateTimers();
});

function selectRegion(region) {
  currentRegion = region;
  const data = regionData[region];
  
  // Update active state on buttons
  document.querySelectorAll('.region-btn').forEach(btn => {
    if (btn.dataset.region === region) {
      btn.style.transform = 'scale(0.98)';
      setTimeout(() => btn.style.transform = 'scale(1)', 100);
    }
  });
  
  // Show banner
  const banner = document.getElementById('regionBanner');
  const regionName = region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  document.getElementById('bannerRegion').textContent = regionName;
  document.getElementById('bannerInfo').textContent = `Showing data for ${regionName} region`;
  banner.classList.remove('hidden');
  banner.classList.add('slide-in');
  
  // Update stats with animation
  animateCount('refugeesCount', data.refugees);
  animateCount('idpCount', data.idp);
  animateCount('asylumCount', data.asylum);
  animateCount('statelessCount', data.stateless);
  animateCount('totalDisplaced', data.total);
  
  document.getElementById('refugeesTrend').textContent = data.trend;
  
  // Update causes with animation
  updateCausesForRegion(data);
  
  // Show notification
  showNotification(`Switched to ${regionName} data`);
}

function clearRegionFilter() {
  currentRegion = null;
  document.getElementById('regionBanner').classList.add('hidden');
  
  // Reset to global data
  animateCount('refugeesCount', '36.4M');
  animateCount('idpCount', '62.5M');
  animateCount('asylumCount', '7.1M');
  animateCount('statelessCount', '4.4M');
  animateCount('totalDisplaced', '110.4M');
  
  showNotification('Showing global data');
}

function animateCount(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.classList.add('flip-animation');
  setTimeout(() => {
    element.textContent = newValue;
  }, 300);
  setTimeout(() => {
    element.classList.remove('flip-animation');
  }, 600);
}

function updateCausesForRegion(data) {
  const causes = ['conflict', 'climate', 'economic', 'political'];
  causes.forEach(cause => {
    const bar = document.querySelector(`#${cause}Count`).parentElement.nextElementSibling.firstElementChild;
    const percent = data[`${cause}Percent`];
    bar.style.width = `${percent}%`;
  });
}

function showDataPoint(location) {
  showNotification(`Hot spot: ${location} region - Click for details`);
}

function showEventDetail(element) {
  element.style.transform = 'scale(0.98)';
  setTimeout(() => element.style.transform = 'scale(1)', 100);
  const title = element.querySelector('.font-medium').textContent;
  showNotification(`Viewing: ${title}`);
}

function filterByStatus(status) {
  showNotification(`Filtering regions by ${status} status`);
}

function highlightCause(cause) {
  const causeName = cause.charAt(0).toUpperCase() + cause.slice(1);
  showNotification(`Analyzing ${causeName} displacement trends`);
}

function selectWeatherZone(zone) {
  showNotification(`Weather zone: ${zone} - Detailed forecast loading`);
}

function showHeartbeatDetail() {
  const bpm = document.getElementById('systemBPM');
  const newBPM = 72 + Math.floor(Math.random() * 10);
  bpm.textContent = `${newBPM} BPM`;
  showNotification(`System heartbeat: ${newBPM} BPM - ${newBPM > 75 ? 'Elevated' : 'Normal'} activity`);
}

function refreshEvents() {
  const feed = document.getElementById('eventFeed');
  feed.style.opacity = '0.5';
  setTimeout(() => {
    feed.style.opacity = '1';
    showNotification('Events refreshed - 2 new alerts');
  }, 500);
}

function resetDashboard() {
  clearRegionFilter();
  showNotification('Dashboard reset to global view');
}

function downloadData() {
  showNotification('Preparing data export...');
}

function openSettings() {
  showNotification('Settings panel opening...');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    showNotification('Entered fullscreen mode');
  } else {
    document.exitFullscreen();
    showNotification('Exited fullscreen mode');
  }
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-slate-800 border border-blue-500/50 rounded-lg px-4 py-3 text-sm shadow-lg z-50 slide-in';
  notification.innerHTML = `
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-blue-400"></div>
      <span>${message}</span>
    </div>
  `;
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-10px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function startUpdateTimers() {
  let seconds = 12;
  let refreshTime = 288; // 4:48 in seconds
  
  setInterval(() => {
    seconds++;
    document.getElementById('lastUpdate').textContent = `${seconds} seconds ago`;
    
    refreshTime--;
    const mins = Math.floor(refreshTime / 60);
    const secs = refreshTime % 60;
    document.getElementById('nextRefresh').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    if (refreshTime <= 0) {
      refreshTime = 300;
      showNotification('Data auto-refreshed');
    }
  }, 1000);
  
  // Simulate live counter updates
  setInterval(() => {
    if (!currentRegion) {
      const counters = ['refugeesCount', 'idpCount', 'asylumCount'];
      counters.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add('flip-animation');
        setTimeout(() => element.classList.remove('flip-animation'), 600);
      });
    }
  }, 8000);
}

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
      
<div className="flex h-screen">

<aside className="w-64 bg-[#0e1a2a] border-r border-slate-800 flex flex-col">
<div className="p-4 border-b border-slate-800">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
<i className="text-white" data-lucide="globe-2" style={{width: '20px', height: '20px'}}></i>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight">Displacement Monitor</h1>
<p className="text-xs text-slate-400">Live Global Data</p>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-2 h-2 rounded-full bg-green-400 heartbeat"></div>
<span className="text-slate-400">Live • Updates every 5min</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3">
<div className="text-xs font-semibold text-slate-400 mb-2">REGIONS</div>
<div className="space-y-2" id="regionButtons">
<button className="region-btn w-full text-left p-3 rounded-lg bg-slate-800/50 border border-blue-500/50 status-blue hover:bg-slate-800 transition-colors" data-region="africa">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium">Africa</span>
<span className="text-xs region-status">Crisis</span>
</div>
<div className="text-xs text-slate-400 region-count">12.4M displaced</div>
<div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
</div>
</button>
<button className="region-btn w-full text-left p-3 rounded-lg bg-slate-800/30 border border-yellow-500/30 status-yellow hover:bg-slate-800 transition-colors" data-region="middle-east">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium">Middle East</span>
<span className="text-xs region-status">Elevated</span>
</div>
<div className="text-xs text-slate-400 region-count">18.7M displaced</div>
<div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
</div>
</button>
<button className="region-btn w-full text-left p-3 rounded-lg bg-slate-800/30 border border-red-500/30 status-red hover:bg-slate-800 transition-colors" data-region="asia">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium">Asia Pacific</span>
<span className="text-xs region-status">Critical</span>
</div>
<div className="text-xs text-slate-400 region-count">24.1M displaced</div>
<div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
</div>
</button>
<button className="region-btn w-full text-left p-3 rounded-lg bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800 transition-colors" data-region="europe">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium">Europe</span>
<span className="text-xs text-slate-500 region-status">Stable</span>
</div>
<div className="text-xs text-slate-400 region-count">8.2M displaced</div>
<div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 rounded-full transition-all duration-500" style={{width: '45%'}}></div>
</div>
</button>
<button className="region-btn w-full text-left p-3 rounded-lg bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800 transition-colors" data-region="americas">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium">Americas</span>
<span className="text-xs text-slate-500 region-status">Moderate</span>
</div>
<div className="text-xs text-slate-400 region-count">15.3M displaced</div>
<div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full transition-all duration-500" style={{width: '62%'}}></div>
</div>
</button>
</div>
<div className="pt-4 mt-4 border-t border-slate-800">
<div className="text-xs font-semibold text-slate-400 mb-2">DATA SOURCES</div>
<div className="space-y-2 text-xs">
<div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 cursor-pointer transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<span>UNHCR API</span>
</div>
<div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 cursor-pointer transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<span>IDMC API</span>
</div>
<div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 cursor-pointer transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<span>UN DESA</span>
</div>
<div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 cursor-pointer transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<span>World Bank</span>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="bg-[#0e1a2a] border-b border-slate-800 p-4">
<div className="grid grid-cols-4 gap-4">
<div className="bg-slate-800/50 rounded-lg p-3 border border-blue-500/30 cursor-pointer hover:bg-slate-800/70 transition-all hover:scale-105">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">REFUGEES</span>
<i className="text-blue-400" data-lucide="users" style={{width: '16px', height: '16px'}}></i>
</div>
<div className="text-2xl font-semibold tracking-tight" id="refugeesCount">36.4M</div>
<div className="text-xs text-green-400 mt-1" id="refugeesTrend">+124K today</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 border border-yellow-500/30 cursor-pointer hover:bg-slate-800/70 transition-all hover:scale-105">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">INTERNALLY DISPLACED</span>
<i className="text-yellow-400" data-lucide="home" style={{width: '16px', height: '16px'}}></i>
</div>
<div className="text-2xl font-semibold tracking-tight" id="idpCount">62.5M</div>
<div className="text-xs text-red-400 mt-1" id="idpTrend">+312K today</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 border border-cyan-500/30 cursor-pointer hover:bg-slate-800/70 transition-all hover:scale-105">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">ASYLUM SEEKERS</span>
<i className="text-cyan-400" data-lucide="shield" style={{width: '16px', height: '16px'}}></i>
</div>
<div className="text-2xl font-semibold tracking-tight" id="asylumCount">7.1M</div>
<div className="text-xs text-green-400 mt-1" id="asylumTrend">+28K today</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 border border-slate-500/30 cursor-pointer hover:bg-slate-800/70 transition-all hover:scale-105">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">STATELESS</span>
<i className="text-slate-400" data-lucide="user-x" style={{width: '16px', height: '16px'}}></i>
</div>
<div className="text-2xl font-semibold tracking-tight" id="statelessCount">4.4M</div>
<div className="text-xs text-slate-400 mt-1" id="statelessTrend">+2K today</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto gradient-mesh">
<div className="p-6">

<div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg hidden slide-in" id="regionBanner">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="text-blue-400" data-lucide="map-pin" style={{width: '20px', height: '20px'}}></i>
<div>
<div className="font-semibold" id="bannerRegion">Africa</div>
<div className="text-xs text-slate-400" id="bannerInfo">Viewing detailed region data</div>
</div>
</div>
<button className="text-xs text-blue-400 hover:text-blue-300 transition-colors" onclick="clearRegionFilter()">Clear Filter</button>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-[#0e1a2a] rounded-2xl p-6 border border-slate-800">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Global Displacement Clock</h2>
<div className="flex items-center gap-2 text-xs text-slate-400">
<div className="w-2 h-2 rounded-full bg-red-400 pulse-ring"></div>
<span id="crisisCount">Active Crisis: 3 regions</span>
</div>
</div>
<div className="relative aspect-square flex items-center justify-center">
<svg className="w-full h-full" viewbox="0 0 200 200">

<circle cx="100" cy="100" fill="none" r="90" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="75" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="60" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="45" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1"></circle>

<circle className="region-ring active" cx="100" cy="100" fill="none" opacity="0.7" r="85" stroke="#3b82f6" stroke-dasharray="150 533" strokeWidth="2" transform="rotate(-90 100 100)"></circle>
<circle className="region-ring" cx="100" cy="100" fill="none" opacity="0.5" r="85" stroke="#eab308" stroke-dasharray="120 563" strokeWidth="2" transform="rotate(0 100 100)"></circle>
<circle className="region-ring active" cx="100" cy="100" fill="none" opacity="0.8" r="85" stroke="#ef4444" stroke-dasharray="140 543" strokeWidth="2" transform="rotate(60 100 100)"></circle>

<circle className="cursor-pointer" cx="100" cy="100" fill="#1e293b" onclick="resetDashboard()" opacity="0.8" r="25" stroke="#3b82f6" strokeWidth="2"></circle>
<circle className="pulse-ring" cx="100" cy="100" fill="none" opacity="0.3" r="20" stroke="#3b82f6" strokeWidth="1"></circle>

<line id="clockHand" opacity="0.9" stroke="#ef4444" strokeLinecap="round" strokeWidth="2" x1="100" x2="100" y1="100" y2="40">
<animatetransform attributename="transform" dur="120s" from="0 100 100" repeatcount="indefinite" to="360 100 100" type="rotate"></animatetransform>
</line>

<circle className="data-point pulse-ring" cx="100" cy="40" fill="#ef4444" onclick="showDataPoint('North')" r="4"></circle>
<circle className="data-point" cx="140" cy="60" fill="#eab308" onclick="showDataPoint('NorthEast')" r="3"></circle>
<circle className="data-point" cx="160" cy="100" fill="#3b82f6" onclick="showDataPoint('East')" r="3"></circle>
<circle className="data-point" cx="140" cy="140" fill="#3b82f6" onclick="showDataPoint('SouthEast')" r="3"></circle>
<circle className="data-point pulse-ring" cx="60" cy="140" fill="#ef4444" onclick="showDataPoint('SouthWest')" r="4"></circle>
</svg>

<div className="absolute inset-0 flex items-center justify-center flex-col cursor-pointer" onclick="resetDashboard()">
<div className="text-3xl font-bold tracking-tight" id="totalDisplaced">110.4M</div>
<div className="text-xs text-slate-400 mt-1">Total Displaced</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-xs">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity" onclick="filterByStatus('stable')">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-slate-400">Stable</span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity" onclick="filterByStatus('elevated')">
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<span className="text-slate-400">Elevated</span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity" onclick="filterByStatus('crisis')">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<span className="text-slate-400">Crisis</span>
</div>
</div>
</div>

<div className="bg-[#0e1a2a] rounded-2xl p-6 border border-slate-800">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Live Displacement Events</h2>
<button className="text-xs text-blue-400 hover:text-blue-300 transition-colors" onclick="refreshEvents()">Refresh</button>
</div>
<div className="space-y-3 max-h-96 overflow-y-auto" id="eventFeed">
<div className="event-card p-3 bg-red-500/10 border border-red-500/30 rounded-lg cursor-pointer hover:bg-red-500/20 transition-all" onclick="showEventDetail(this)">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 pulse-ring"></div>
<span className="text-sm font-medium">Myanmar Border Crisis</span>
</div>
<span className="text-xs text-slate-400">2 min ago</span>
</div>
<p className="text-xs text-slate-300 mb-2">+45,200 new displacements detected across eastern border regions</p>
<div className="flex items-center gap-3 text-xs">
<span className="text-red-400">Crisis Level: High</span>
<span className="text-slate-400">•</span>
<span className="text-slate-400">Conflict-driven</span>
</div>
</div>
<div className="event-card p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg cursor-pointer hover:bg-yellow-500/20 transition-all" onclick="showEventDetail(this)">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium">Horn of Africa Drought</span>
</div>
<span className="text-xs text-slate-400">18 min ago</span>
</div>
<p className="text-xs text-slate-300 mb-2">+12,800 climate-related displacements in Somalia and Ethiopia</p>
<div className="flex items-center gap-3 text-xs">
<span className="text-yellow-400">Crisis Level: Elevated</span>
<span className="text-slate-400">•</span>
<span className="text-slate-400">Climate-driven</span>
</div>
</div>
<div className="event-card p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg cursor-pointer hover:bg-blue-500/20 transition-all" onclick="showEventDetail(this)">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium">Venezuela Returns</span>
</div>
<span className="text-xs text-slate-400">1 hour ago</span>
</div>
<p className="text-xs text-slate-300 mb-2">8,400 voluntary returns from Colombia documented this week</p>
<div className="flex items-center gap-3 text-xs">
<span className="text-blue-400">Positive Trend</span>
<span className="text-slate-400">•</span>
<span className="text-slate-400">Political shift</span>
</div>
</div>
<div className="event-card p-3 bg-slate-800/30 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition-all" onclick="showEventDetail(this)">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
<span className="text-sm font-medium">EU Asylum Policy Update</span>
</div>
<span className="text-xs text-slate-400">3 hours ago</span>
</div>
<p className="text-xs text-slate-300 mb-2">New processing procedures may affect 24,000 pending cases</p>
<div className="flex items-center gap-3 text-xs">
<span className="text-cyan-400">Policy Change</span>
<span className="text-slate-400">•</span>
<span className="text-slate-400">Administrative</span>
</div>
</div>
</div>
</div>

<div className="bg-[#0e1a2a] rounded-2xl p-6 border border-slate-800">
<h2 className="text-lg font-semibold tracking-tight mb-4">Displacement Causes</h2>
<div className="space-y-4" id="causesContainer">
<div className="cause-item cursor-pointer hover:bg-slate-800/30 p-2 -m-2 rounded-lg transition-all" onclick="highlightCause('conflict')">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="text-red-400" data-lucide="flame" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm">Conflict &amp; Violence</span>
</div>
<span className="text-sm font-semibold" id="conflictCount">68.2M (62%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{width: '62%'}}></div>
</div>
</div>
<div className="cause-item cursor-pointer hover:bg-slate-800/30 p-2 -m-2 rounded-lg transition-all" onclick="highlightCause('climate')">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="text-blue-400" data-lucide="cloud-rain" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm">Climate &amp; Disasters</span>
</div>
<span className="text-sm font-semibold" id="climateCount">22.1M (20%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{width: '20%'}}></div>
</div>
</div>
<div className="cause-item cursor-pointer hover:bg-slate-800/30 p-2 -m-2 rounded-lg transition-all" onclick="highlightCause('economic')">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="text-yellow-400" data-lucide="trending-down" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm">Economic Factors</span>
</div>
<span className="text-sm font-semibold" id="economicCount">13.3M (12%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 rounded-full transition-all duration-500" style={{width: '12%'}}></div>
</div>
</div>
<div className="cause-item cursor-pointer hover:bg-slate-800/30 p-2 -m-2 rounded-lg transition-all" onclick="highlightCause('political')">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="text-orange-400" data-lucide="alert-triangle" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm">Political Persecution</span>
</div>
<span className="text-sm font-semibold" id="politicalCount">6.8M (6%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{width: '6%'}}></div>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
<div className="flex items-center gap-2 mb-2">
<i className="text-cyan-400" data-lucide="activity" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm font-semibold">Trend Analysis</span>
</div>
<p className="text-xs text-slate-300" id="trendAnalysis">Climate-driven displacement increased 34% year-over-year, now representing fastest-growing category. Conflict displacement remains highest absolute numbers.</p>
</div>
</div>

<div className="bg-[#0e1a2a] rounded-2xl p-6 border border-slate-800">
<h2 className="text-lg font-semibold tracking-tight mb-4">Environmental Response System</h2>
<div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<i className="text-blue-400" data-lucide="cloud-drizzle" style={{width: '20px', height: '20px'}}></i>
<span className="text-sm font-semibold">Weather-Responsive Monitoring Active</span>
</div>
<p className="text-xs text-slate-300">System automatically highlights climate-affected regions during adverse weather conditions</p>
</div>
<div className="space-y-3">
<div className="p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800/70 transition-all" onclick="selectWeatherZone('monsoon')">
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Southeast Asia Monsoon</span>
<span className="text-xs text-blue-400">Tracking</span>
</div>
<div className="text-xs text-slate-400">Rainfall correlation: +2,400 displaced per day</div>
</div>
<div className="p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800/70 transition-all" onclick="selectWeatherZone('drought')">
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Sahel Drought Pattern</span>
<span className="text-xs text-red-400">Critical</span>
</div>
<div className="text-xs text-slate-400">3-year drought: +180,000 cumulative displacement</div>
</div>
<div className="p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800/70 transition-all" onclick="selectWeatherZone('hurricane')">
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Caribbean Hurricane Season</span>
<span className="text-xs text-yellow-400">Monitoring</span>
</div>
<div className="text-xs text-slate-400">Forecast: High activity, elevated displacement risk</div>
</div>
</div>
<div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 cursor-pointer hover:scale-105 transition-transform" onclick="showHeartbeatDetail()">
<div className="flex items-center gap-2 mb-2">
<i className="text-cyan-400" data-lucide="thermometer" style={{width: '16px', height: '16px'}}></i>
<span className="text-sm font-semibold">System Heartbeat</span>
</div>
<div className="flex items-center gap-3">
<div className="text-2xl font-bold" id="systemBPM">72 BPM</div>
<div className="text-xs text-slate-400">Elevated (Normal: 60 BPM)<br/>Spike detected in <span id="spikeRegions">3 regions</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-[#0e1a2a] border-t border-slate-800 px-6 py-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 heartbeat"></div>
<span className="text-slate-400">System Active</span>
</div>
<span className="text-slate-400">Last Update: <span id="lastUpdate">12 seconds ago</span></span>
<span className="text-slate-400">Next Refresh: <span id="nextRefresh">4:48</span></span>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-300 transition-colors" onclick="downloadData()" title="Download Data">
<i data-lucide="download" style={{width: '14px', height: '14px'}}></i>
</button>
<button className="text-slate-400 hover:text-slate-300 transition-colors" onclick="openSettings()" title="Settings">
<i data-lucide="settings" style={{width: '14px', height: '14px'}}></i>
</button>
<button className="text-slate-400 hover:text-slate-300 transition-colors" onclick="toggleFullscreen()" title="Fullscreen">
<i data-lucide="maximize-2" style={{width: '14px', height: '14px'}}></i>
</button>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
