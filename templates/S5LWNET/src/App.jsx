import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Open in-page links in a new tab
        document.querySelectorAll('a[href^="#"]').forEach(function(a){
          a.setAttribute('target','_blank');
          a.setAttribute('rel','noopener');
        });

        // Footer year
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Analytics chart (sample data)
        var ctx = document.getElementById('analyticsChart');
        if (ctx && window.Chart) {
          new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
              labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
              datasets: [
                {
                  label: 'Active employees',
                  data: [120,124,128,132,138,141,145,149,152,158,162,168],
                  borderColor: '#6366f1',
                  backgroundColor: 'rgba(99,102,241,0.15)',
                  tension: 0.35,
                  fill: true,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 }, precision: 0 }
                }
              }
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/70 bg-zinc-900/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3" href="https://www.go-emp.com/" rel="noopener" target="_blank">
<img alt="Go-Employee logo" className="h-8 w-auto ring-1 ring-white/20 object-cover rounded-none shadow perspective-dramatic" id="brand-logo" src="https://play-lh.googleusercontent.com/a-SEo1dxNH674-fSjiS8W4PjLbPcbhiCQhvdhwLWYy2b24-nsc3K4R1eBqDI1kPM3_R6RL6elegXYC0C-NVAcA=w240-h480-rw?w=800&amp;q=80"/>
<div className="hidden sm:flex flex-col">
<span className="text-sm font-medium text-white/90 tracking-tight">Go-Employee</span>
<span className="text-[11px] text-zinc-400 tracking-tight">Your 3P Monitoring — People, Performance &amp; Project</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-7">
<a className="hover:text-white transition-colors text-sm text-zinc-300" href="#features">Features</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#analytics">Analytics</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#why">Why Us</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-zinc-900/50 px-3.5 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-white/25 transition-colors" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="phone"></i> Talk to Sales
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white transition-colors ring-1 ring-white/10 shadow-lg bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)]" href="https://myhr.go-emp.com/login" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="rocket"></i> Get Started
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-10" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0"></div>
</div>
<div className="relative max-w-7xl sm:px-6 lg:px-8 sm:py-28 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="max-w-3xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-[11px] text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Unified workforce platform
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Run People, Performance, and Projects in one place.
          </h1>
<p className="mt-5 text-base sm:text-lg text-zinc-300">
            Go-Employee merges Core HR, Productivity, Project Delivery, and Employee Experience into a single, mobile-first platform. Configure it yourself, move fast, and scale confidently.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors ring-1 ring-white/10 shadow-lg bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)]" href="https://www.go-emp.com/#features" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="play"></i> Explore Features
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-white/25 transition-colors" href="#analytics">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> View Analytics
            </a>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Avg. Setup Time</p>
<p className="mt-1 text-xl font-semibold tracking-tight">Under 1 day</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Modules</p>
<p className="mt-1 text-xl font-semibold tracking-tight">20+ live</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Mobile-first</p>
<p className="mt-1 text-xl font-semibold tracking-tight">iOS &amp; Android</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Coverage</p>
<p className="mt-1 text-xl font-semibold tracking-tight">Global + Multi-lingual</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20" id="features">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core platform features</h2>
<p className="mt-2 text-sm text-zinc-400">Everything your HR, managers, and finance teams need — in one workspace.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#detailed">
          Full details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="wand-2"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Self-Onboarding for Company</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Set up org details, units, policies, and structure without vendor support.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Admin-led configuration reduces go-live time drastically.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/self-onboarding">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Dashboard &amp; Analytics</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Role-based KPIs for leaders, HR, PMs, finance, and employees.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Real-time insights for faster decisions.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/dashboard-analytics">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="building-2"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Business Unit Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Run multiple entities with distinct policies and workflows.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Central control with local autonomy.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/business-units">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Role &amp; Access Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Define roles and granular access down to sub-modules.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Protects sensitive data while enabling visibility.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/roles-access">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="layers-3"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Department &amp; Designation</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Map hierarchy and titles that scale as teams grow.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Clear reporting lines and responsibilities.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/departments-designations">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="git-branch"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Company &amp; Team Structure</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Visualize org charts, managers, and reporting lines.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Transparency fosters collaboration.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/org-structure">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="users-2"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Employee Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Profiles, directory, lifecycle, and workforce analytics.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: 360° view with planning insights.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/employee-management">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="fingerprint"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Attendance Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Location, geofence, face recognition, overtime tracking.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: AI validation prevents proxy attendance.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/attendance">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar-range"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Leave, WFH &amp; Holiday</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Configurable policies, approvals, carry-forwards, exports.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Real-time balances in self-service.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/leave-wfh-holiday">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="receipt"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Expense Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Project-linked expenses with approvals and dashboards.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Seamless reimbursement via payroll.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/expenses">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="laptop"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Asset Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Track assignments, approvals, and categories in real-time.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: No more manual registers.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/assets">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="book-text"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Policy Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Central library for leave, WFH, POSH, and compliance.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Transparent, always up-to-date.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/policy">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="megaphone"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Announcements</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Company-wide updates on web and mobile instantly.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: No email or extra tools needed.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/announcements">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="folder-kanban"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Project Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Projects, tasks, milestones, billing, invoices, clients.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: HR + Delivery in one platform.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/projects">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="clipboard-list"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Employee Daily Status Report</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Track task hours with manager/client approvals.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Attendance vs productivity mapping.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/dsr">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Rota Management (Shifts)</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Auto-scheduling, swaps, forecasting, live analytics.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: AI-optimized workforce utilization.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/rota">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="wallet"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Payroll Management</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Salary, tax, reimbursements, compliance reports.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: End-to-end, fully automated.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/payroll">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="timer"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Time Tracking</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Compare attendance and DSR hours for accuracy.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Dual validation builds trust.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/time-tracking">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Analytics &amp; Reporting</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Advanced, customizable reports across all modules.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: AI-driven insights by department.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/analytics-reporting">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="smartphone"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Mobile App (ESS/MSS)</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Attendance, leave, expenses, assets, shifts, updates.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Truly mobile-first HRMS.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/mobile-app">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="plug-2"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Integration Capabilities</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Biometrics, attendance devices, ERP connectors.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Plug-and-play, low IT effort.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/integrations">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="languages"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Multi-Lingual Support</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Platform and mobile app localized for global teams.</p>
<p className="mt-3 text-xs text-emerald-400/90">Unique: Inclusive and adoption-friendly.</p>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="#feature/multilingual">Learn more <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10" id="analytics">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Workforce analytics</h2>
<p className="mt-2 text-sm text-zinc-400">A quick look at people metrics you can track out-of-the-box.</p>
</div>
<div className="mt-8 rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden">
<div className="p-5">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="activity"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Active headcount trend</p>
<p className="text-xs text-zinc-400">Last 12 months (sample)</p>
</div>
</div>
<div className="mt-6">
<div className="relative h-64">
<canvas id="analyticsChart"></canvas>
</div>
</div>
</div>
<div className="border-t border-white/10 px-5 py-4 flex items-center justify-between">
<p className="text-xs text-zinc-400">Drill into departments, locations, and roles.</p>
<a className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1" href="https://www.go-emp.com/#features" rel="noopener" target="_blank">See all analytics <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10" id="pricing">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Flexible pricing</h2>
<p className="mt-2 text-sm text-zinc-400">Choose the modules you need and scale as you grow.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-6">
<h3 className="text-base font-semibold tracking-tight">Starter</h3>
<p className="mt-1 text-sm text-zinc-400">Core HR, Attendance, Leave</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Self-onboarding</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> ESS/MSS Mobile App</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)] ring-1 ring-white/10" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">Request quote <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-6 ring-1 ring-inset ring-indigo-500/30">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[11px] text-indigo-300">Most popular</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Growth</h3>
<p className="mt-1 text-sm text-zinc-300">Projects, DSR, Expenses, Assets</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-200">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Role-based analytics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Integrations</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)] ring-1 ring-white/10" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">Talk to sales <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-6">
<h3 className="text-base font-semibold tracking-tight">Enterprise</h3>
<p className="mt-1 text-sm text-zinc-400">Payroll, Shifts, Advanced security</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Multi-entity support</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> SSO &amp; fine-grained access</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)] ring-1 ring-white/10" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">Get a demo <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10" id="why">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why companies choose us</h2>
<p className="mt-2 text-sm text-zinc-400">Built for speed, control, and adoption across your workforce.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-md bg-emerald-500/15 p-2 ring-1 ring-inset ring-emerald-500/30">
<i className="w-5 h-5 text-emerald-300" data-lucide="sparkles"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Self-configurable</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Admin-led setup reduces go-live time from weeks to days.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-md bg-blue-500/15 p-2 ring-1 ring-inset ring-blue-500/30">
<i className="w-5 h-5 text-blue-300" data-lucide="shield"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Secure &amp; compliant</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Granular roles, approvals, and auditability across modules.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/15 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-300" data-lucide="smartphone"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Truly mobile-first</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">High adoption on iOS and Android with role-based access.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10" id="roadmap">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Product roadmap (high level)</h2>
<p className="mt-2 text-sm text-zinc-400">A glimpse of what's coming next.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<p className="text-xs text-zinc-400">Near-term</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">Deeper analytics</h3>
<p className="mt-2 text-sm text-zinc-400">More prebuilt KPIs and department views.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<p className="text-xs text-zinc-400">Mid-term</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">Expanded integrations</h3>
<p className="mt-2 text-sm text-zinc-400">Connectors for devices and finance tools.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5">
<p className="text-xs text-zinc-400">Ongoing</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">Performance &amp; UX</h3>
<p className="mt-2 text-sm text-zinc-400">Continuous polish for faster workflows.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/10" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Talk to our team</h2>
<p className="mt-2 text-sm text-zinc-400">See how Go-Employee can streamline HR, performance, and project delivery for your organization.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors ring-1 ring-white/10 shadow bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)]" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="mail"></i> Contact Sales
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-white/25 transition-colors" href="https://myhr.go-emp.com/login" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="log-in"></i> Sign in / Get started
            </a>
</div>
</div>
<div className="lg:col-span-1">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-5 h-full">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/20 p-2 ring-1 ring-inset ring-indigo-500/30">
<i className="w-5 h-5 text-indigo-400" data-lucide="map-pin"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Availability</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Global coverage with multi-lingual support.</p>
<div className="mt-4 h-px bg-white/10"></div>
<div className="mt-4 text-xs text-zinc-400">
<p>Need a custom rollout plan? Our team can help.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950/90">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-3" href="https://www.go-emp.com/" rel="noopener" target="_blank">
<img alt="Go-Employee logo" className="h-8 w-auto ring-1 ring-white/20 object-cover" src="https://play-lh.googleusercontent.com/a-SEo1dxNH674-fSjiS8W4PjLbPcbhiCQhvdhwLWYy2b24-nsc3K4R1eBqDI1kPM3_R6RL6elegXYC0C-NVAcA=w240-h480-rw?w=800&amp;q=80"/>
<span className="text-sm font-medium tracking-tight">Go-Employee</span>
</a>
<p className="mt-3 text-sm text-zinc-400 max-w-md">A unified workforce platform combining Core HR, Productivity, Project Delivery, and Employee Experience.</p>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)] ring-1 ring-white/10" href="https://myhr.go-emp.com/login" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="rocket"></i> Get Started
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-zinc-900/60 px-3.5 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-white/25 transition-colors" href="https://www.go-emp.com/#contact" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="phone"></i> Talk to Sales
              </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white/90">Platform</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1" href="#features"><i className="w-4 h-4" data-lucide="sparkles"></i> Features</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1" href="#analytics"><i className="w-4 h-4" data-lucide="bar-chart-3"></i> Analytics</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1" href="#pricing"><i className="w-4 h-4" data-lucide="wallet"></i> Pricing</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1" href="#why"><i className="w-4 h-4" data-lucide="shield-check"></i> Why Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white/90">Modules</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#feature/attendance">Attendance</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#feature/leave-wfh-holiday">Leave &amp; WFH</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#feature/projects">Projects &amp; DSR</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#feature/payroll">Payroll</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white/90">Company</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#roadmap">Roadmap</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="text-zinc-300 hover:text-white transition-colors" href="https://www.go-emp.com/" rel="noopener" target="_blank">Website</a></li>
</ul>
</div>
</div>
<div className="mt-10 h-px bg-white/10"></div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© <span id="year"></span> Go-Employee. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-zinc-400 hover:text-white transition-colors" href="#contact">Support</a>
<span className="text-zinc-700">•</span>
<a className="text-zinc-400 hover:text-white transition-colors" href="https://www.go-emp.com/" rel="noopener" target="_blank">Status</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 bg-[var(--brand-hex)] hover:bg-[var(--brand2-hex)]" href="https://www.go-emp.com/" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="rocket"></i>
      Launch Website
    </a>


    </>
  );
}
