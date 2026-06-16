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



        lucide.createIcons();

        // Draggable Functionality
        const dashboard = document.getElementById('dashboard-wrapper');
        const handle = document.getElementById('drag-handle');
        
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        handle.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("mousemove", drag);

        function dragStart(e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target.closest('#drag-handle')) {
                isDragging = true;
                dashboard.classList.add('dragging');
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            dashboard.classList.remove('dragging');
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, dashboard);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }

        // Live Data Simulation
        function updateStats() {
            // Latency
            const latency = document.getElementById('stat-latency');
            if (latency) {
                const currentLat = parseFloat(latency.innerText);
                const newLat = (currentLat + (Math.random() - 0.5) * 5).toFixed(1);
                latency.innerText = newLat > 20 ? newLat : 20.0;
            }

            // Uptime (very rare slight change)
            if(Math.random() > 0.95) {
                const uptime = document.getElementById('stat-uptime');
                if(uptime) uptime.innerText = Math.random() > 0.5 ? '9' : '8';
            }

            // Requests (always up)
            if(Math.random() > 0.7) {
                const req = document.getElementById('stat-req');
                if(req) {
                    const val = parseFloat(req.innerText);
                    req.innerText = (val + 0.001).toFixed(3);
                }
            }
        }
        setInterval(updateStats, 2000);

        // Sidebar Navigation Logic
        function setActiveTab(element, tabName) {
            // Remove active class from all sidebar items
            const items = document.querySelectorAll('.sidebar-item');
            items.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked sidebar item
            element.classList.add('active');

            // Update Title
            const title = document.getElementById('page-title');
            title.innerText = tabName.charAt(0).toUpperCase() + tabName.slice(1);

            // Hide all views
            const views = document.querySelectorAll('.view-content');
            views.forEach(view => {
                view.classList.remove('active');
            });

            // Show selected view
            const selectedView = document.getElementById('view-' + tabName);
            if(selectedView) {
                selectedView.classList.add('active');
                
                // Re-trigger animation
                selectedView.style.animation = 'none';
                selectedView.offsetHeight; /* trigger reflow */
                selectedView.style.animation = null; 
            }
        }

        // Chart Tooltip Logic
        function showTooltip(element, value) {
            const tooltip = document.getElementById('tooltip');
            tooltip.innerText = value + ' req/s';
            tooltip.style.opacity = '1';
            
            // Position tooltip
            const rect = element.getBoundingClientRect();
            const parentRect = element.parentElement.getBoundingClientRect();
            const left = rect.left - parentRect.left;
            
            tooltip.style.left = (left - 10) + 'px'; // adjust for center
        }

        function hideTooltip() {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.opacity = '0';
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center transition-transform group-hover:rotate-12">
<svg className="lucide lucide-box w-4 h-4 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span className="font-semibold tracking-tight text-white">kysox</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#method">Method</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#customers">Customers</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors transform hover:scale-105 active:scale-95 duration-200">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors">
<span className="flex h-2 w-2 rounded-full bg-green-500 relative animate-pulse-ring"></span>
<span className="text-xs font-medium text-neutral-300">Kysox v2.0 is now available</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text max-w-4xl mx-auto leading-[1.1]">
                Infrastructure for themodern web stack.
            </h1>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Deploy, scale, and monitor your applications with a single command. 
                Built for developers who care about speed, reliability, and developer experience.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 pointer-events-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
                    Start Building
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
<svg className="lucide lucide-terminal w-4 h-4 text-neutral-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                    Documentation
                </button>
</div>

<div className="relative max-w-5xl mx-auto pointer-events-auto perspective-1000">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl glow-effect select-none transform-gpu transition-all duration-75" id="dashboard-wrapper">

<div className="grab-handle h-10 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 group" id="drag-handle">
<div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 hover:bg-green-500 transition-colors cursor-pointer"></div>
</div>
<div className="ml-4 flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs text-neutral-500 font-mono hover:bg-white/10 hover:text-neutral-300 transition-colors cursor-text group/url">
<svg className="lucide lucide-lock w-3 h-3 group-hover/url:text-green-400 transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            kysox.com/dashboard
                        </div>
<div className="ml-auto text-xs text-neutral-600 font-medium">Drag to move</div>
</div>

<div className="flex h-[500px] bg-black/80">

<div className="w-64 border-r border-white/5 p-4 flex flex-col gap-1 hidden md:flex bg-black/20">
<div className="flex items-center gap-2 px-3 py-2 text-white bg-white/5 rounded-lg border border-white/5 mb-4 hover:border-white/20 cursor-pointer transition-colors">
<div className="w-5 h-5 bg-gradient-to-tr from-purple-500 to-blue-500 rounded flex items-center justify-center text-[10px] font-bold shadow-lg">K</div>
<span className="text-sm font-medium">Kysox Inc.</span>
<svg className="lucide lucide-chevron-down w-3 h-3 ml-auto text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="space-y-0.5" id="sidebar-menu">
<div className="sidebar-item active px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent" onclick="setActiveTab(this, 'overview')">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                                    Overview
                                </div>
<div className="sidebar-item px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent" onclick="setActiveTab(this, 'analytics')">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                                    Analytics
                                </div>
<div className="sidebar-item px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent" onclick="setActiveTab(this, 'deployments')">
<svg className="lucide lucide-hard-drive w-4 h-4" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
                                    Deployments
                                </div>
<div className="sidebar-item px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent" onclick="setActiveTab(this, 'team')">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                    Team
                                </div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-3 transition-colors">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    Settings
                                </div>
</div>
</div>

<div className="flex-1 p-8 relative overflow-y-auto" id="main-view">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 fade-in sticky top-0 z-30">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<span id="page-title">Overview</span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</h2>
<div className="flex gap-2">
<div className="relative group">
<button className="px-3 py-1.5 rounded-md bg-white/5 text-xs text-neutral-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2">
                                            Last 24h <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 top-full mt-2 w-32 bg-[#111] border border-white/10 rounded-lg p-1 hidden group-hover:block shadow-xl z-50">
<div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Last 24h</div>
<div className="px-2 py-1 text-xs text-neutral-400 hover:bg-white/10 rounded cursor-pointer hover:text-white">Last 7d</div>
<div className="px-2 py-1 text-xs text-neutral-400 hover:bg-white/10 rounded cursor-pointer hover:text-white">Last 30d</div>
</div>
</div>
<button className="p-1.5 rounded-md bg-white text-black hover:bg-neutral-200 hover:scale-105 transition-all active:scale-95">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="view-content active fade-in" id="view-overview">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1">+12% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
</div>
<div className="text-2xl font-semibold text-white mb-1 font-mono"><span id="stat-latency">97.8</span><span className="text-sm font-normal text-neutral-500 ml-1 font-sans">ms</span></div>
<div className="text-xs text-neutral-500">Avg. Latency</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1">+5% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
</div>
<div className="text-2xl font-semibold text-white mb-1 font-mono"><span id="stat-req">1.2</span>M</div>
<div className="text-xs text-neutral-500">Total Requests</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-neutral-500 text-xs">Stable</span>
</div>
<div className="text-2xl font-semibold text-white mb-1 font-mono">99.9<span id="stat-uptime">9</span><span className="text-sm font-normal text-neutral-500 ml-1 font-sans">%</span></div>
<div className="text-xs text-neutral-500">System Uptime</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 h-48 flex flex-col justify-between relative overflow-hidden group">
<div className="flex justify-between items-center z-10">
<h3 className="text-sm font-medium text-neutral-300">Throughput</h3>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
</div>
<div className="flex items-end justify-between gap-1 h-24 mt-4 relative" id="chart-bars">

<div className="absolute -top-8 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 transition-opacity pointer-events-none z-20 whitespace-nowrap" id="tooltip">240 req/s</div>

<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[40%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '1,240')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[60%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '2,100')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[55%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '1,850')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[75%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '3,200')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[45%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '1,500')"></div>
<div className="chart-bar w-full bg-white/10 rounded-t-sm h-[85%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '3,800')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[70%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '2,900')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[65%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '2,400')"></div>
<div className="chart-bar w-full bg-purple-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(168,85,247,0.5)]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '4,102')"></div>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-analytics">
<div className="grid grid-cols-1 gap-6">
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
<h3 className="text-sm font-medium text-white mb-4">Top Paths</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32">/api/v1/users</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[85%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right">85%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32">/dashboard</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right">60%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32">/login</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500/70 w-[35%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right">35%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32">/blog</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-[15%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right">15%</span>
</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
<h3 className="text-sm font-medium text-white mb-4">Traffic Sources</h3>
<div className="flex gap-4">
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1">Direct</span>
<span className="text-lg font-bold text-white">45%</span>
</div>
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1">Social</span>
<span className="text-lg font-bold text-white">32%</span>
</div>
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1">Search</span>
<span className="text-lg font-bold text-white">23%</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-deployments">
<div className="space-y-3">
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Update header component</div>
<div className="text-[10px] text-neutral-500 font-mono">2m ago • master • 8a2b3c</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20">READY</span>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 animate-pulse">
<svg className="lucide lucide-loader-2 w-4 h-4 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Fix: Auth middleware race condition</div>
<div className="text-[10px] text-neutral-500 font-mono">15m ago • dev • 9c1d2e</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] font-bold border border-yellow-500/20">BUILDING</span>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Feat: User profile dashboard</div>
<div className="text-[10px] text-neutral-500 font-mono">1h ago • feature-user • 7b2a1c</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20">FAILED</span>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Chore: Bump dependencies</div>
<div className="text-[10px] text-neutral-500 font-mono">3h ago • master • 5e4f3d</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20">READY</span>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-team">
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                                                JD
                                            </div>
<div>
<div className="text-sm font-medium text-white">John Doe</div>
<div className="text-[10px] text-neutral-500">Engineering Lead</div>
</div>
</div>
<div className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Owner</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                                                AS
                                            </div>
<div>
<div className="text-sm font-medium text-white">Alice Smith</div>
<div className="text-[10px] text-neutral-500">Frontend Developer</div>
</div>
</div>
<div className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Member</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xs font-bold text-white">
                                                MK
                                            </div>
<div>
<div className="text-sm font-medium text-white">Mike K.</div>
<div className="text-[10px] text-neutral-500">DevOps Engineer</div>
</div>
</div>
<div className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Admin</div>
</div>
<button className="w-full py-2 rounded-lg border border-dashed border-white/20 text-neutral-400 text-xs hover:border-white/40 hover:text-white transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                        Invite Member
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pointer-events-auto">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 transition-all duration-500 hover:opacity-100">
<div className="flex items-center gap-2 font-semibold text-xl text-white grayscale hover:grayscale-0 transition-all cursor-default">
<div className="w-6 h-6 bg-white rounded-full"></div> Acme
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-white grayscale hover:grayscale-0 transition-all cursor-default">
<div className="w-6 h-6 bg-white rounded-tr-lg"></div> Vertex
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-white grayscale hover:grayscale-0 transition-all cursor-default">
<div className="w-6 h-6 border-2 border-white rounded-sm"></div> Orbit
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-white grayscale hover:grayscale-0 transition-all cursor-default">
<div className="w-6 h-6 bg-white transform rotate-45"></div> Prism
                </div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/20" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Everything you need to scale</h2>
<p className="text-lg text-neutral-400">Kysox provides the primitives to build modern infrastructure without the overhead of managing it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
<svg className="lucide lucide-cpu w-6 h-6 text-purple-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Edge Compute</h3>
<p className="text-neutral-400 leading-relaxed">
                        Run your code close to your users. Our global edge network ensures low latency and high availability worldwide.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
<svg className="lucide lucide-shield w-6 h-6 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">DDoS Protection</h3>
<p className="text-neutral-400 leading-relaxed">
                        Enterprise-grade protection included by default. We mitigate attacks before they reach your infrastructure.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
<svg className="lucide lucide-git-branch w-6 h-6 text-green-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Rollbacks</h3>
<p className="text-neutral-400 leading-relaxed">
                        Mistakes happen. Revert to a previous deployment version instantly with zero downtime.
                    </p>
</div>
</div>

<div className="mt-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-white/20 transition-colors">
<div className="p-8 md:p-12 flex flex-col justify-center">
<h3 className="text-2xl font-semibold text-white mb-4">Defined in Code</h3>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Define your infrastructure using our type-safe SDK. Infrastructure as Code has never been this intuitive or powerful.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Type-safe configuration
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Automatic resource provisioning
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Integrated secrets management
                        </li>
</ul>
</div>
<div className="bg-black/20 border-l border-white/5 p-8 flex items-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-full rounded-lg bg-[#0A0A0A] border border-white/5 p-4 font-mono text-sm overflow-x-auto shadow-2xl relative z-10 transition-transform group-hover:scale-[1.01] duration-500">
<div className="flex gap-1.5 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="text-purple-400">import</div> <span className="text-white">{</span> <span className="text-yellow-200">Kysox</span>, <span className="text-yellow-200">Service</span> <span className="text-white">}</span> <div className="text-purple-400 inline">from</div> <span className="text-green-400">'@kysox/sdk'</span>;
                        
                        <div className="text-purple-400 inline">const</div> <span className="text-blue-300">app</span> = <div className="text-purple-400 inline">new</div> <span className="text-yellow-200">Kysox</span>({
                          <span className="text-blue-300">region</span>: <span className="text-green-400">'us-east-1'</span>,
                          <span className="text-blue-300">team</span>: <span className="text-green-400">'engineering'</span>
                        });
                        
                        <div className="text-purple-400 inline">await</div> <span className="text-blue-300">app</span>.<span className="text-yellow-200">deploy</span>(<div className="text-purple-400 inline">new</div> <span className="text-yellow-200">Service</span>({
                          <span className="text-blue-300">name</span>: <span className="text-green-400">'api-gateway'</span>,
                          <span className="text-blue-300">replicas</span>: <span className="text-orange-400">3</span>,
                          <span className="text-blue-300">public</span>: <div className="text-purple-400 inline">true</div>
                        }));
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Ready to transform your workflow?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                Join thousands of developers who have switched to Kysox for better performance and reliability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95">
                    Start for free
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all transform hover:scale-105 active:scale-95">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="relative pt-24 pb-12">

<div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">

<div className="absolute inset-0 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

<div>
<h4 className="text-base font-medium text-white mb-6">Platform</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Deployments</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Functions</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Storage</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center border border-white/10">
<svg className="lucide lucide-box w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span className="text-neutral-500 text-sm">© 2024 Kysox Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
