import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function() {
  'use strict';

  // ─── Theme ───
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  let isDark = true;

  function setTheme(dark) {
    isDark = dark;
    html.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', dark ? 'false' : 'true');
    try { localStorage.setItem('claw-theme', dark ? 'dark' : 'light'); } catch(e){}
  }

  try {
    const saved = localStorage.getItem('claw-theme');
    if (saved) setTheme(saved === 'dark');
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) setTheme(false);
  } catch(e){}

  toggle.addEventListener('click', () => setTheme(!isDark));

  // ─── Mobile sidebar ───
  const sidebar = document.getElementById('sidebar');
  const burger = document.getElementById('burgerBtn');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // ─── Toast system ───
  const toastContainer = document.getElementById('toastContainer');

  window.showToast = function(msg, type) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const icons = { success: '✅', warn: '⚠️', info: 'ℹ️', error: '❌' };
    toast.innerHTML = `<span class="toast-icon" aria-hidden="true">${icons[type] || 'ℹ️'}</span><span>${msg}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
    }, 3000);
  };

  // ─── Counter animation ───
  function animateCount(el, target, suffix, duration) {
    const start = performance.now();
    const update = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target < 1 ? (eased * target).toFixed(1) : Math.round(eased * target);
      el.textContent = cur + (suffix || '');
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const counters = [
    { id: 'statConvos', target: 147, suffix: '' },
    { id: 'statResolution', target: 94.2, suffix: '%' },
    { id: 'statResponse', target: 1.3, suffix: 's' },
    { id: 'statBookings', target: 12, suffix: '' },
  ];

  counters.forEach(c => {
    const el = document.getElementById(c.id);
    if (el) animateCount(el, c.target, c.suffix, 1400);
  });

  // ─── Chart drawing ───
  const chartData = {
    '7d': {
      resolved:  [42, 68, 55, 91, 73, 48, 85],
      escalated: [3, 2, 5, 1, 4, 2, 3],
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    '30d': {
      resolved:  [38, 52, 60, 45, 70, 55, 80, 65, 90, 75, 60, 85, 70, 95, 80, 65, 88, 72, 60, 78, 92, 68, 55, 80, 70, 85, 60, 74, 88, 65],
      escalated: [4, 3, 2, 5, 1, 4, 2, 3, 1, 2, 4, 3, 2, 1, 5, 3, 2, 4, 1, 3, 2, 5, 4, 2, 3, 1, 4, 2, 3, 5],
      labels: ['Wk1','','','','','','','','Wk2','','','','','','','','Wk3','','','','','','','','Wk4','','','','','']
    },
    '90d': {
      resolved:  [40,55,60,48,70,58,80,65,90,74,62,85,70,95,80,65,88,72,60,78,92,68,56,80,70,84,60,74,88,64],
      escalated: [3,4,2,5,1,4,3,2,1,2,4,3,2,1,5,3,2,4,1,3,2,5,4,2,3,1,4,2,3,5],
      labels: ['Jan','','','','','','','','','Feb','','','','','','','','','Mar','','','','','','','','','','','']
    }
  };

  let currentTab = '7d';

  function drawChart(tabKey) {
    const data = chartData[tabKey];
    const svg = document.getElementById('chartSvg');
    const area = document.getElementById('areaPath');
    const line = document.getElementById('linePath');
    const lineBlue = document.getElementById('linePathBlue');
    const dots = document.getElementById('dotsGroup');

    const W = 560, H = 130;
    const maxVal = 120;
    const n = data.resolved.length;
    const step = W / (n - 1);

    function toXY(i, val) {
      return { x: i * step, y: H - (val / maxVal) * H + 10 };
    }

    let linePts = data.resolved.map((v,i) => toXY(i, v));
    let bluePts = data.escalated.map((v,i) => toXY(i, v * 8)); // scale up for visibility

    function buildPath(pts) {
      return pts.reduce((acc, pt, i) => {
        if (i === 0) return `M${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
        const prev = pts[i-1];
        const cpx = (prev.x + pt.x) / 2;
        return acc + ` C${cpx.toFixed(1)},${prev.y.toFixed(1)} ${cpx.toFixed(1)},${pt.y.toFixed(1)} ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
      }, '');
    }

    const orangePath = buildPath(linePts);
    const bluePath = buildPath(bluePts);
    const areaD = orangePath + ` L${(n-1)*step},${H+10} L0,${H+10} Z`;

    area.setAttribute('d', areaD);
    line.setAttribute('d', orangePath);
    lineBlue.setAttribute('d', bluePath);

    // Dots
    dots.innerHTML = '';
    linePts.forEach((pt, i) => {
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', pt.x.toFixed(1));
      dot.setAttribute('cy', pt.y.toFixed(1));
      dot.setAttribute('r', '3.5');
      dot.setAttribute('class', 'chart-dot');
      dot.setAttribute('role', 'img');
      dot.setAttribute('aria-label', `${data.labels[i]}: ${data.resolved[i]} resolved`);
      dot.style.animationDelay = `${i * 0.04}s`;
      dots.appendChild(dot);
    });

    // Update x labels
    const labelEls = document.querySelectorAll('.chart-labels span');
    const step2 = Math.max(1, Math.floor(n / 7));
    const shown = [];
    for (let i = 0; i < n; i += step2) shown.push(data.labels[i]);
    while (shown.length < 7) shown.push('');
    labelEls.forEach((el, i) => { el.textContent = shown[i] || ''; });
  }

  window.switchTab = function(btn, tab) {
    document.querySelectorAll('.chart-tab').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    currentTab = tab;
    drawChart(tab);
  };

  drawChart('7d');

  // ─── Task toggle ───
  window.toggleTask = function(check) {
    const isDone = check.classList.toggle('done');
    const titleEl = check.closest('.task-item').querySelector('.task-title');
    const prioEl = check.closest('.task-item').querySelector('.task-priority');
    titleEl.classList.toggle('done-text', isDone);
    check.setAttribute('aria-checked', isDone ? 'true' : 'false');
    if (isDone) {
      prioEl.textContent = 'DONE';
      prioEl.className = 'task-priority prio-done';
      showToast('✅ Task marked complete!', 'success');
    }
  };

  // ─── Keyboard nav for nav items ───
  document.querySelectorAll('.nav-item').forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter') item.click();
    });
  });

})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="sidebar-overlay" id="overlay"></div>

<div aria-live="polite" className="toast-container" id="toastContainer"></div>
<div className="shell">

<aside aria-label="Main navigation" className="sidebar" id="sidebar" role="navigation">
<div className="sidebar-logo">
<svg aria-hidden="true" className="logo-mark" fill="none" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FF5C1A" height="30" rx="7" width="30"></rect>
<path d="M15 5 L15 12" stroke="white" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M15 12 L11.5 17 M15 12 L18.5 17" stroke="white" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M10 17 L11.5 22 M11.5 17 L10 22" stroke="white" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M17 17 L18.5 22 M18.5 17 L17 22" stroke="white" strokeLinecap="round" strokeWidth="1.8"></path>
</svg>
<span className="sidebar-logo-text">Open<span>Claw</span></span>
</div>
<div className="sidebar-section">
<div className="sidebar-section-label">Overview</div>
<ul>
<li>
<a aria-current="page" className="nav-item active" href="#">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><rect height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" width="7" x="1" y="1"></rect><rect height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" width="7" x="10" y="1"></rect><rect height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" width="7" x="1" y="10"></rect><rect height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" width="7" x="10" y="10"></rect></svg>
            Dashboard
          </a>
</li>
<li>
<a className="nav-item" href="#" onclick="showToast('📊 Analytics coming soon!', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><path d="M2 14L6 9L10 11L16 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M2 16H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Analytics
          </a>
</li>
</ul>
</div>
<div className="sidebar-section">
<div className="sidebar-section-label">Agents</div>
<ul>
<li>
<a className="nav-item" href="#" onclick="showToast('🤖 Agent manager loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"></circle><path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            My Agents
            <span className="nav-badge green">3</span>
</a>
</li>
<li>
<a className="nav-item" href="#" onclick="showToast('📚 Knowledge base loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><rect height="14" rx="2" stroke="currentColor" strokeWidth="1.5" width="14" x="2" y="2"></rect><path d="M5 6h8M5 9h6M5 12h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Knowledge Base
            <span className="nav-badge muted">12</span>
</a>
</li>
<li>
<a className="nav-item" href="#" onclick="showToast('🔗 Integrations page loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><path d="M6 9h6M3.5 5.5l2.5 2.5-2.5 2.5M14.5 5.5l-2.5 2.5 2.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><rect height="16" rx="3" stroke="currentColor" strokeWidth="1.5" width="16" x="1" y="1"></rect></svg>
            Integrations
          </a>
</li>
</ul>
</div>
<div className="sidebar-section">
<div className="sidebar-section-label">Inbox</div>
<ul>
<li>
<a className="nav-item" href="#" onclick="showToast('💬 Conversations loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><path d="M3 3h12a1 1 0 011 1v8a1 1 0 01-1 1H5l-3 3V4a1 1 0 011-1z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Conversations
            <span className="nav-badge">7</span>
</a>
</li>
<li>
<a className="nav-item" href="#" onclick="showToast('🔔 Escalations loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><path d="M9 2a5 5 0 015 5v3l1.5 2H2.5L4 10V7a5 5 0 015-5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M7 13a2 2 0 004 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Escalations
            <span className="nav-badge">2</span>
</a>
</li>
</ul>
</div>
<div className="sidebar-section">
<div className="sidebar-section-label">Account</div>
<ul>
<li>
<a className="nav-item" href="#" onclick="showToast('⚙️ Settings loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"></circle><path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.05 4.05l1.41 1.41M12.54 12.54l1.41 1.41M4.05 13.95l1.41-1.41M12.54 5.46l1.41-1.41" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Settings
          </a>
</li>
<li>
<a className="nav-item" href="#" onclick="showToast('💳 Billing loading...', 'info'); return false;">
<svg aria-hidden="true" className="nav-icon" fill="none" viewbox="0 0 18 18"><rect height="11" rx="2" stroke="currentColor" strokeWidth="1.5" width="16" x="1" y="4"></rect><path d="M1 7h16" stroke="currentColor" strokeWidth="1.5"></path></svg>
            Billing
          </a>
</li>
</ul>
</div>
<div className="sidebar-bottom">
<div className="user-pill">
<div className="user-avatar">SK</div>
<div className="user-info">
<div className="user-name">Sarah K.</div>
<div className="user-plan">Growth Plan</div>
</div>
<svg aria-hidden="true" fill="none" height="14" style={{color: 'var(--text-muted)', flexShrink: '0'}} viewbox="0 0 14 14" width="14">
<path d="M5 3L9 7L5 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</aside>

<main className="main" role="main">

<div className="topbar">
<button aria-controls="sidebar" aria-expanded="false" aria-label="Open navigation menu" className="topbar-burger" id="burgerBtn">
<div className="burger-line"></div>
<div className="burger-line"></div>
<div className="burger-line"></div>
</button>
<div>
<div className="topbar-title">Dashboard</div>
<div className="topbar-subtitle">Summit Dental Care · <span className="live-indicator">3 agents live</span></div>
</div>
<div className="topbar-right">
<div aria-label="All agents operational" className="status-pill" role="status">
<span aria-hidden="true" className="status-dot"></span>
          All systems live
        </div>
<button aria-label="Search" className="topbar-btn" onclick="showToast('🔍 Search coming soon!', 'info')">
<svg aria-hidden="true" fill="none" height="15" viewbox="0 0 15 15" width="15"><circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"></circle><path d="M10.5 10.5L13 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
<button aria-label="Notifications" className="topbar-btn" onclick="showToast('✅ No new escalations — nice!', 'success')">
<svg aria-hidden="true" fill="none" height="15" viewbox="0 0 15 15" width="15"><path d="M7.5 2a4.5 4.5 0 014.5 4.5v2.5L13.5 11h-12L3 9V6.5A4.5 4.5 0 017.5 2z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M6 11a1.5 1.5 0 003 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<span aria-label="2 unread notifications" className="notif-dot"></span>
</button>
<button aria-label="Toggle light/dark mode" aria-pressed="false" className="theme-toggle" id="themeToggle"></button>
</div>
</div>

<div className="page-content">

<div className="welcome-banner" role="banner">
<div className="welcome-text">
<h2>Good morning, Sarah 👋</h2>
<p>Your agents handled <strong>38 conversations</strong> overnight. <strong>2 escalations</strong> need your attention.</p>
</div>
<div className="welcome-actions">
<button className="btn btn-claw" onclick="showToast('🔔 Reviewing 2 escalations...', 'warn')">
<svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14"><path d="M7 2a4 4 0 014 4v2l1.5 2.5h-11L3 8V6a4 4 0 014-4z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M5.5 10.5a1.5 1.5 0 003 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Review Escalations
          </button>
<button className="btn btn-ghost" onclick="showToast('📊 Opening weekly report...', 'info')">
            Weekly Report
          </button>
</div>
</div>

<div aria-label="Key metrics" className="stats-row" role="list">
<div className="stat-card" data-accent="orange" role="listitem">
<div className="stat-label">Conversations Today</div>
<div className="stat-value" id="statConvos">0</div>
<div aria-label="Up 18% from yesterday" className="stat-delta up">
<svg aria-hidden="true" fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M5 2L9 6H1L5 2z" fill="currentColor"></path></svg>
            +18% vs yesterday
          </div>
</div>
<div className="stat-card" data-accent="green" role="listitem">
<div className="stat-label">Resolution Rate</div>
<div className="stat-value" id="statResolution">0%</div>
<div aria-label="Up 3.2% from last week" className="stat-delta up">
<svg aria-hidden="true" fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M5 2L9 6H1L5 2z" fill="currentColor"></path></svg>
            +3.2% vs last week
          </div>
</div>
<div className="stat-card" data-accent="blue" role="listitem">
<div className="stat-label">Avg. Response Time</div>
<div className="stat-value" id="statResponse">0s</div>
<div aria-label="Faster than yesterday" className="stat-delta up">
<svg aria-hidden="true" fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M5 2L9 6H1L5 2z" fill="currentColor"></path></svg>
            0.2s faster
          </div>
</div>
<div className="stat-card" data-accent="warn" role="listitem">
<div className="stat-label">Bookings Captured</div>
<div className="stat-value" id="statBookings">0</div>
<div aria-label="Down 2 from yesterday" className="stat-delta down">
<svg aria-hidden="true" fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M5 8L9 4H1L5 8z" fill="currentColor"></path></svg>
            –2 vs yesterday
          </div>
</div>
</div>

<div className="main-grid">

<div className="card">
<div className="card-header">
<div>
<div className="card-title">Conversation Activity</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<div aria-label="Time period" className="chart-tabs" role="tablist">
<button aria-selected="true" className="chart-tab active" onclick="switchTab(this,'7d')" role="tab">7d</button>
<button aria-selected="false" className="chart-tab" onclick="switchTab(this,'30d')" role="tab">30d</button>
<button aria-selected="false" className="chart-tab" onclick="switchTab(this,'90d')" role="tab">90d</button>
</div>
</div>
</div>
<div className="chart-area">
<div aria-hidden="true" className="chart-labels">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
<div aria-label="Bar chart showing conversation volume over 7 days" className="chart-svg-wrap" role="img">
<svg id="chartSvg" preserveaspectratio="none" viewbox="0 0 560 140">
<defs>
<lineargradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF5C1A" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#FF5C1A" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line className="chart-grid-line" x1="0" x2="560" y1="20" y2="20"></line>
<line className="chart-grid-line" x1="0" x2="560" y1="60" y2="60"></line>
<line className="chart-grid-line" x1="0" x2="560" y1="100" y2="100"></line>

<text fill="var(--text-muted)" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="start" x="0" y="18">120</text>
<text fill="var(--text-muted)" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="start" x="0" y="58">80</text>
<text fill="var(--text-muted)" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="start" x="0" y="98">40</text>

<path className="chart-area-fill" d="" id="areaPath"></path>
<path className="chart-line" d="" id="linePath"></path>

<path className="chart-line chart-line-blue" d="" id="linePathBlue"></path>

<g id="dotsGroup"></g>
</svg>
</div>
<div aria-label="Chart legend" className="chart-legend">
<div className="legend-item">
<div aria-hidden="true" className="legend-dot" style={{background: 'var(--claw)'}}></div>
                Resolved
              </div>
<div className="legend-item">
<div aria-hidden="true" className="legend-dot" style={{background: 'var(--electric)'}}></div>
                Escalated
              </div>
</div>
</div>
</div>

<div aria-label="Agent status" className="card">
<div className="card-header">
<div className="card-title">Active Agents</div>
<button className="card-action" onclick="showToast('🤖 Agent manager opening...', 'info')">Manage →</button>
</div>
<div className="agents-list" role="list">
<div className="agent-row" role="listitem">
<div aria-hidden="true" className="agent-icon orange">💬</div>
<div className="agent-info">
<div className="agent-name">Website Chat</div>
<div className="agent-channel">chat.summitdental.com</div>
</div>
<div>
<div className="agent-status">
<span aria-label="Live status" className="status-indicator live"></span>
<span className="text-green" style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem'}}>live</span>
</div>
</div>
<div className="agent-convo">
<strong>247</strong><br/>
<span>this week</span>
</div>
</div>
<div className="agent-row" role="listitem">
<div aria-hidden="true" className="agent-icon blue">📱</div>
<div className="agent-info">
<div className="agent-name">SMS Agent</div>
<div className="agent-channel">+1 (555) 203-8847</div>
</div>
<div>
<div className="agent-status">
<span aria-label="Live status" className="status-indicator live"></span>
<span className="text-green" style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem'}}>live</span>
</div>
</div>
<div className="agent-convo">
<strong>183</strong><br/>
<span>this week</span>
</div>
</div>
<div className="agent-row" role="listitem">
<div aria-hidden="true" className="agent-icon green">📧</div>
<div className="agent-info">
<div className="agent-name">Email Triage</div>
<div className="agent-channel">hello@summitdental.com</div>
</div>
<div>
<div className="agent-status">
<span aria-label="Live status" className="status-indicator live"></span>
<span className="text-green" style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem'}}>live</span>
</div>
</div>
<div className="agent-convo">
<strong>94</strong><br/>
<span>this week</span>
</div>
</div>
</div>
<button className="add-agent-btn" onclick="showToast('➕ Add agent wizard coming soon!', 'info')">
<svg aria-hidden="true" fill="none" height="16" viewbox="0 0 16 16" width="16"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"></circle><path d="M8 5v6M5 8h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
            Add another agent
          </button>

<div style={{padding: '16px'}}>
<div className="upgrade-card">
<span className="emoji">⚡</span>
<h4>Unlock Voice Agent</h4>
<p>Answer inbound calls automatically. Available on Scale plan.</p>
<div className="usage-bar-label">
<span>Conversations used</span>
<span>740 / 1,000</span>
</div>
<div aria-label="74% of conversation limit used" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" className="usage-bar-track" role="progressbar">
<div className="usage-bar-fill"></div>
</div>
<button className="btn btn-claw" onclick="showToast('💳 Upgrade flow opening...', 'success')" style={{width: '100%', justifyContent: 'center'}}>
                Upgrade to Scale
              </button>
</div>
</div>
</div>
</div>

<div className="second-row">

<div aria-label="Recent conversations" className="card">
<div className="card-header">
<div className="card-title">Recent Conversations</div>
<button className="card-action" onclick="showToast('💬 Inbox opening...', 'info')">View all →</button>
</div>
<div className="convo-list" role="list">
<div className="convo-item" onclick="showToast('📖 Opening conversation with Marcus...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📖 Opening conversation with Marcus...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="convo-avatar ca-1">MT</div>
<div className="convo-body">
<div className="convo-name">
                  Marcus T.
                  <div aria-label="Unread message" className="unread-badge"></div>
</div>
<div className="convo-preview">Need to move my cleaning to next Thursday if possible?</div>
</div>
<div className="convo-meta">
<div className="convo-time">2m ago</div>
<div className="convo-channel-badge">SMS</div>
</div>
</div>
<div className="convo-item" onclick="showToast('📖 Opening conversation with Priya...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📖 Opening conversation...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="convo-avatar ca-2">PN</div>
<div className="convo-body">
<div className="convo-name">
                  Priya N.
                  <div aria-label="Unread message" className="unread-badge"></div>
</div>
<div className="convo-preview">Do you accept Delta Dental? I couldn't find it on the website</div>
</div>
<div className="convo-meta">
<div className="convo-time">14m ago</div>
<div className="convo-channel-badge">Chat</div>
</div>
</div>
<div className="convo-item" onclick="showToast('📖 Opening conversation with Jordan...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📖 Opening conversation...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="convo-avatar ca-3">JL</div>
<div className="convo-body">
<div className="convo-name">Jordan L.</div>
<div className="convo-preview">Thanks for confirming! See you at 3pm on Friday ✓</div>
</div>
<div className="convo-meta">
<div className="convo-time">38m ago</div>
<div className="convo-channel-badge">Email</div>
</div>
</div>
<div className="convo-item" onclick="showToast('📖 Opening conversation with Anika...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📖 Opening conversation...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="convo-avatar ca-4">AR</div>
<div className="convo-body">
<div className="convo-name">Anika R.</div>
<div className="convo-preview">I want to book a whitening consultation, what's your next opening?</div>
</div>
<div className="convo-meta">
<div className="convo-time">1h ago</div>
<div className="convo-channel-badge">Chat</div>
</div>
</div>
<div className="convo-item" onclick="showToast('📖 Opening conversation with David...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📖 Opening conversation...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="convo-avatar ca-5">DK</div>
<div className="convo-body">
<div className="convo-name">David K.</div>
<div className="convo-preview">How much is a standard checkup without insurance?</div>
</div>
<div className="convo-meta">
<div className="convo-time">2h ago</div>
<div className="convo-channel-badge">SMS</div>
</div>
</div>
</div>
</div>

<div aria-label="Performance metrics" className="card">
<div className="card-header">
<div className="card-title">This Week</div>
<button className="card-action" onclick="showToast('📊 Full analytics loading...', 'info')">Details →</button>
</div>
<div className="metric-list" role="list">
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--claw-glow)', border: '1px solid rgba(255,92,26,0.2)'}}>💬</div>
                Conversations
              </div>
<div className="metric-val">
                524
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '72%', background: 'var(--claw)'}}></div></div>
</div>
</div>
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--success-dim)', border: '1px solid rgba(45,255,158,0.15)'}}>✓</div>
                Resolved by AI
              </div>
<div className="metric-val">
                94.2%
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '94%', background: 'var(--success)'}}></div></div>
</div>
</div>
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--electric-dim)', border: '1px solid rgba(0,229,255,0.15)'}}>🗓️</div>
                Bookings Made
              </div>
<div className="metric-val">
                38
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '55%', background: 'var(--electric)'}}></div></div>
</div>
</div>
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--warn-dim)', border: '1px solid rgba(255,184,48,0.15)'}}>⚡</div>
                Escalated
              </div>
<div className="metric-val">
                2
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '6%', background: 'var(--warn)'}}></div></div>
</div>
</div>
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--danger-dim)', border: '1px solid rgba(255,95,112,0.15)'}}>🕐</div>
                Avg Response
              </div>
<div className="metric-val">
                1.3s
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '90%', background: 'var(--success)'}}></div></div>
</div>
</div>
<div className="metric-row" role="listitem">
<div className="metric-label">
<div aria-hidden="true" className="metric-icon" style={{background: 'var(--claw-glow)', border: '1px solid rgba(255,92,26,0.2)'}}>⭐</div>
                CSAT Score
              </div>
<div className="metric-val">
                4.8/5
                <div aria-hidden="true" className="mini-bar-wrap"><div className="mini-bar" style={{width: '96%', background: 'var(--claw)'}}></div></div>
</div>
</div>
</div>
</div>

<div aria-label="Knowledge base" className="card">
<div className="card-header">
<div className="card-title">Knowledge Base</div>
<button className="card-action" onclick="showToast('📚 Knowledge base editor loading...', 'info')">Edit →</button>
</div>
<div className="kb-list" role="list">
<div className="kb-item" onclick="showToast('📄 Opening FAQ document...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📄 Opening...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="kb-icon">📋</div>
<div className="kb-info">
<div className="kb-name">FAQ — Services &amp; Pricing</div>
<div className="kb-meta">Updated 2 days ago · 47 entries</div>
</div>
<div className="kb-status synced">synced</div>
</div>
<div className="kb-item" onclick="showToast('📄 Opening insurance document...', 'info')" onkeydown="if(event.key==='Enter'){showToast('📄 Opening...', 'info')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="kb-icon">🏥</div>
<div className="kb-info">
<div className="kb-name">Insurance Accepted List</div>
<div className="kb-meta">Updated 5 days ago · 23 entries</div>
</div>
<div className="kb-status synced">synced</div>
</div>
<div className="kb-item" onclick="showToast('⚠️ Draft needs review before publishing', 'warn')" onkeydown="if(event.key==='Enter'){showToast('⚠️ Draft needs review', 'warn')}" role="listitem" tabindex="0">
<div aria-hidden="true" className="kb-icon">📝</div>
<div className="kb-info">
<div className="kb-name">New Patient Onboarding</div>
<div className="kb-meta">Draft — needs review · 12 entries</div>
</div>
<div className="kb-status draft">draft</div>
</div>
</div>
</div>
</div>

<div className="bottom-row">

<div aria-label="Task queue" className="card">
<div className="card-header">
<div className="card-title">Needs Your Attention</div>
<button className="card-action" onclick="showToast('📋 Full task list loading...', 'info')">View all →</button>
</div>
<div className="task-list" id="taskList" role="list">
<div className="task-item" role="listitem">
<div aria-checked="false" aria-label="Mark task as done" className="task-check" onclick="toggleTask(this)" onkeydown="if(event.key==='Enter'||event.key===' '){toggleTask(this)}" role="checkbox" tabindex="0"></div>
<div className="task-info">
<div className="task-title">Review escalation from Marcus T. — rescheduling dispute</div>
<div className="task-sub">SMS Agent · 2 min ago</div>
</div>
<div className="task-priority prio-high">HIGH</div>
</div>
<div className="task-item" role="listitem">
<div aria-checked="false" aria-label="Mark task as done" className="task-check" onclick="toggleTask(this)" onkeydown="if(event.key==='Enter'||event.key===' '){toggleTask(this)}" role="checkbox" tabindex="0"></div>
<div className="task-info">
<div className="task-title">Publish "New Patient Onboarding" knowledge base draft</div>
<div className="task-sub">Knowledge Base · pending review</div>
</div>
<div className="task-priority prio-med">MED</div>
</div>
<div className="task-item" role="listitem">
<div aria-checked="false" aria-label="Mark task as done" className="task-check" onclick="toggleTask(this)" onkeydown="if(event.key==='Enter'||event.key===' '){toggleTask(this)}" role="checkbox" tabindex="0"></div>
<div className="task-info">
<div className="task-title">Confirm insurance list is current (last updated 5 days ago)</div>
<div className="task-sub">Knowledge Base · routine check</div>
</div>
<div className="task-priority prio-low">LOW</div>
</div>
<div className="task-item" role="listitem">
<div aria-checked="true" aria-label="Task completed" className="task-check done" role="checkbox" tabindex="0"></div>
<div className="task-info">
<div className="task-title done-text">Connect Google Calendar to scheduling agent</div>
<div className="task-sub">Integration · completed yesterday</div>
</div>
<div className="task-priority prio-done">DONE</div>
</div>
</div>
</div>

<div aria-label="Quick actions" className="card">
<div className="card-header">
<div className="card-title">Quick Actions</div>
</div>
<div className="quick-grid" role="list">
<button className="quick-btn" onclick="showToast('🤖 Agent builder opening...', 'success')" role="listitem">
<span aria-hidden="true" className="quick-emoji">🤖</span>
<span className="quick-label">Add New Agent</span>
</button>
<button className="quick-btn" onclick="showToast('📚 Knowledge editor opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">📚</span>
<span className="quick-label">Update Knowledge</span>
</button>
<button className="quick-btn" onclick="showToast('📊 Weekly report downloading...', 'success')" role="listitem">
<span aria-hidden="true" className="quick-emoji">📊</span>
<span className="quick-label">Export Report</span>
</button>
<button className="quick-btn" onclick="showToast('🔗 Integration catalog opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">🔗</span>
<span className="quick-label">Add Integration</span>
</button>
<button className="quick-btn" onclick="showToast('🧪 Test console opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">🧪</span>
<span className="quick-label">Test Agent</span>
</button>
<button className="quick-btn" onclick="showToast('⚙️ Escalation rules editor opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">⚙️</span>
<span className="quick-label">Edit Escalation Rules</span>
</button>
<button className="quick-btn" onclick="showToast('📅 Scheduling settings opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">📅</span>
<span className="quick-label">Hours &amp; Availability</span>
</button>
<button className="quick-btn" onclick="showToast('🔔 Notification prefs opening...', 'info')" role="listitem">
<span aria-hidden="true" className="quick-emoji">🔔</span>
<span className="quick-label">Notification Prefs</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
