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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
secondary: '#C1A5FF',
darkbg: '#161517'
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(0,0,0) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))`
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(0,0,0) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))`
};
}
});
addUtilities({...rotateXUtilities});
}
]
};



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
            // Stats updates simulation
            if (Math.random() > 0.7) {
                const latency = document.getElementById('stat-latency');
                if (latency) {
                    const current = parseFloat(latency.innerText);
                    // fluctuate slightly around 1.8
                    const newVal = (1.8 + (Math.random() - 0.5) * 0.1).toFixed(1);
                    latency.innerText = newVal;
                }
            }
        }
        setInterval(updateStats, 3000);

        // Sidebar Navigation Logic
        function setActiveTab(element, tabName) {
            const items = document.querySelectorAll('.sidebar-item');
            items.forEach(item => item.classList.remove('active'));
            
            element.classList.add('active');

            const titleMap = {
                'overview': "Vue d'ensemble",
                'projects': "Mes Projets",
                'seo': "Rapports SEO"
            };

            const title = document.getElementById('page-title');
            title.innerText = titleMap[tabName] || "Vue d'ensemble";

            const views = document.querySelectorAll('.view-content');
            views.forEach(view => {
                view.classList.remove('active');
            });

            const selectedView = document.getElementById('view-' + tabName);
            if(selectedView) {
                selectedView.classList.add('active');
                selectedView.style.animation = 'none';
                selectedView.offsetHeight; 
                selectedView.style.animation = null; 
            }
        }

        // Chart Tooltip Logic
        function showTooltip(element, value) {
            const tooltip = document.getElementById('tooltip');
            tooltip.innerText = value + ' visites';
            tooltip.style.opacity = '1';
            
            const rect = element.getBoundingClientRect();
            const parentRect = element.parentElement.getBoundingClientRect();
            const left = rect.left - parentRect.left;
            
            tooltip.style.left = (left - 10) + 'px'; 
        }

        function hideTooltip() {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.opacity = '0';
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-30" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 w-full h-full bg-[#161517]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="flex transition-transform group-hover:rotate-12 bg-center bg-[#C1A5FF] w-6 h-6 rounded-md items-center justify-center">
<svg className="lucide lucide-layers w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(22, 21, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path className="" d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path className="" d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<span className="font-semibold text-white tracking-tight" style={{}}>Floweb</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-[#C1A5FF] transition-colors text-sm font-medium text-neutral-400 tracking-tight" href="#" style={{}}>Accueil</a>
<a className="text-sm font-medium text-neutral-400 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#solutions" style={{}}>Solutions</a>
<a className="text-sm font-medium text-neutral-400 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#projets" style={{}}>Réalisations</a>
<a className="text-sm font-medium text-neutral-400 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#contact" style={{}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-[#161517] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#C1A5FF] transition-colors transform hover:scale-105 active:scale-95 duration-200 tracking-tight" style={{}}>
                    Commencer
                </button>
</div>
</div>
</nav>

<section className="overflow-hidden min-h-screen pt-32 pb-20 relative">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C1A5FF]/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1A5FF]/5 border border-[#C1A5FF]/20 mb-8 pointer-events-auto cursor-pointer hover:bg-[#C1A5FF]/10 transition-colors">
<span className="flex h-2 w-2 rounded-full bg-[#C1A5FF] relative animate-pulse-ring"></span>
<span className="text-xs font-medium text-[#C1A5FF] tracking-tight" style={{}}>Créneaux disponibles</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight mb-6 gradient-text max-w-4xl mx-auto leading-[1.1] font-bold" style={{}}>
                Votre identité numérique, propulsée vers l'excellence
            </h1>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed tracking-tight" style={{}}>
                Floweb transforme votre vision en réalité digitale. Création de sites web performants, identités visuelles uniques et stratégies de communication sur mesure pour faire décoller votre activité.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 pointer-events-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#161517] font-medium rounded-full hover:bg-[#C1A5FF] transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 tracking-tight" style={{}}>
                    Lancer mon projet
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 tracking-tight" style={{}}>
                    Découvrir nos offres
                </button>
</div>

<div className="relative max-w-5xl mx-auto pointer-events-auto perspective-1000">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl glow-effect select-none transform-gpu transition-all duration-75" id="dashboard-wrapper">

<div className="grab-handle h-10 bg-[#1a191c] border-b border-white/5 flex items-center px-4 gap-2 group" id="drag-handle">
<div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 hover:bg-green-500 transition-colors cursor-pointer"></div>
</div>
<div className="ml-4 flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs text-neutral-500 font-mono hover:bg-white/10 hover:text-neutral-300 transition-colors cursor-text group/url tracking-tight" style={{}}>
<svg className="lucide lucide-lock w-3 h-3 group-hover/url:text-[#C1A5FF] transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            floweb.net/espace-client
                        </div>
<div className="ml-auto text-xs text-neutral-600 font-medium tracking-tight" style={{}}>Floweb Panel v2.0</div>
</div>

<div className="flex h-[500px] bg-[#161517]">

<div className="w-64 border-r border-white/5 p-4 flex flex-col gap-1 hidden md:flex bg-[#1a191c]/50">
<div className="flex items-center gap-2 px-3 py-2 text-white bg-white/5 rounded-lg border border-white/5 mb-4 hover:border-[#C1A5FF]/30 cursor-pointer transition-colors">
<div className="w-5 h-5 bg-[#C1A5FF] rounded flex items-center justify-center text-[10px] font-bold shadow-lg text-[#161517] tracking-tight" style={{}}>F</div>
<span className="text-sm font-medium tracking-tight" style={{}}>Agence Floweb</span>
<svg className="lucide lucide-chevron-down w-3 h-3 ml-auto text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="space-y-0.5" id="sidebar-menu">
<div className="sidebar-item px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent active tracking-tight" onclick="setActiveTab(this, 'overview')" style={{}}>
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                                    Vue d'ensemble
                                </div>
<div className="sidebar-item hover:text-white flex transition-all cursor-pointer text-sm text-neutral-400 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center tracking-tight" onclick="setActiveTab(this, 'projects')" style={{}}>
<svg className="lucide lucide-folder-kanban w-4 h-4" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
                                    Mes Projets
                                </div>
<div className="sidebar-item px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md flex items-center gap-3 transition-all cursor-pointer border border-transparent tracking-tight" onclick="setActiveTab(this, 'seo')" style={{}}>
<svg className="lucide lucide-line-chart w-4 h-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                                    Rapports SEO
                                </div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-3 transition-colors tracking-tight" style={{}}>
<svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                                    Support Client
                                </div>
</div>
</div>

<div className="flex-1 p-8 relative overflow-y-auto" id="main-view">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C1A5FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 fade-in sticky top-0 z-30">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<span className="tracking-tight" id="page-title" style={{}}>Vue d'ensemble</span>
<span className="w-2 h-2 rounded-full bg-[#C1A5FF] animate-pulse"></span>
</h2>
<div className="flex gap-2">
<div className="relative group">
<button className="px-3 py-1.5 rounded-md bg-white/5 text-xs text-neutral-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2 tracking-tight" style={{}}>
                                            30 jours <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="view-content fade-in active" id="view-overview" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-[#C1A5FF]/10 rounded-lg text-[#C1A5FF] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1 tracking-tight" style={{}}>+24% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
</div>
<div className="text-2xl text-white mb-1 font-bold" style={{}}><span className="font-bold" id="stat-latency" style={{}}>1.8</span>k</div>
<div className="text-xs text-neutral-500 tracking-tight" style={{}}>Visiteurs Uniques</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-mouse-pointer-click w-4 h-4" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1 tracking-tight" style={{}}>+12% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
</div>
<div className="text-2xl text-white mb-1 font-bold" style={{}}><span className="font-bold" id="stat-req" style={{}}>4.2</span>%</div>
<div className="text-xs text-neutral-500 tracking-tight" style={{}}>Taux de Conversion</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-neutral-500 text-xs tracking-tight" style={{}}>Optimum</span>
</div>
<div className="text-2xl text-white mb-1 font-bold" style={{}}>100<span className="text-sm font-normal text-neutral-500 ml-1 font-sans tracking-tight" style={{}}>%</span></div>
<div className="text-xs text-neutral-500 tracking-tight" style={{}}>Santé du Site</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 h-48 flex flex-col justify-between relative overflow-hidden group">
<div className="flex justify-between items-center z-10">
<h3 className="text-sm font-medium text-neutral-300 tracking-tight" style={{}}>Trafic Global</h3>
<div className="flex gap-2">
<span className="text-xs text-[#C1A5FF] tracking-tight" style={{}}>Clients potentiels</span>
</div>
</div>
<div className="flex items-end justify-between gap-1 h-24 mt-4 relative" id="chart-bars">

<div className="absolute -top-8 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 transition-opacity pointer-events-none z-20 whitespace-nowrap tracking-tight" id="tooltip" style={{opacity: '0', left: '62.8906px'}}>78 visites</div>

<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[40%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '45')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[60%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '78')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[55%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '65')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[75%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '92')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[45%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '51')"></div>
<div className="chart-bar w-full bg-white/10 rounded-t-sm h-[85%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '104')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[70%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '85')"></div>
<div className="chart-bar w-full bg-white/5 rounded-t-sm h-[65%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '74')"></div>
<div className="chart-bar w-full bg-[#C1A5FF] rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(193,165,255,0.5)]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '120')"></div>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-projects" style={{}}>
<div className="space-y-3">
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>E-commerce Mode</div>
<div className="text-[10px] text-neutral-500 font-mono tracking-tight" style={{}}>Boutique en ligne • Shopify</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20 tracking-tight" style={{}}>LIVRÉ</span>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 animate-pulse">
<svg className="lucide lucide-pen-tool w-4 h-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>Refonte Identité Visuelle</div>
<div className="text-[10px] text-neutral-500 font-mono tracking-tight" style={{}}>Design • Cabinet Avocat</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] font-bold border border-yellow-500/20 tracking-tight" style={{}}>EN COURS</span>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#C1A5FF]/10 flex items-center justify-center text-[#C1A5FF]">
<svg className="lucide lucide-layout w-4 h-4" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>Landing Page SaaS</div>
<div className="text-[10px] text-neutral-500 font-mono tracking-tight" style={{}}>Webflow • Startup FinTech</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-[#C1A5FF]/10 text-[#C1A5FF] text-[10px] font-bold border border-[#C1A5FF]/20 tracking-tight" style={{}}>MAQUETTE</span>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-seo" style={{}}>
<div className="grid grid-cols-1 gap-6">
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
<h3 className="text-sm font-medium text-white mb-4 tracking-tight" style={{}}>Mots-clés Positionnés</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32 tracking-tight" style={{}}>"agence web paris"</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#C1A5FF] w-[85%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right tracking-tight" style={{}}>#3</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32 tracking-tight" style={{}}>"création site"</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right tracking-tight" style={{}}>#8</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 font-mono w-32 tracking-tight" style={{}}>"design logo"</span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-[35%] rounded-full"></div>
</div>
<span className="text-xs text-white w-10 text-right tracking-tight" style={{}}>#12</span>
</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
<h3 className="text-sm font-medium text-white mb-4 tracking-tight" style={{}}>Sources de Trafic</h3>
<div className="flex gap-4">
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1 tracking-tight" style={{}}>Google</span>
<span className="text-lg font-bold text-white tracking-tight" style={{}}>55%</span>
</div>
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1 tracking-tight" style={{}}>LinkedIn</span>
<span className="text-lg font-bold text-white tracking-tight" style={{}}>30%</span>
</div>
<div className="flex-1 p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-center">
<span className="text-xs text-neutral-400 mb-1 tracking-tight" style={{}}>Direct</span>
<span className="text-lg font-bold text-white tracking-tight" style={{}}>15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pointer-events-auto">
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#1a191c]/50" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-4 font-bold" style={{}}>Des solutions digitales pour votre croissance</h2>
<p className="text-lg text-neutral-400 tracking-tight" style={{}}>Floweb vous accompagne de la conception à la mise en ligne, avec une approche centrée sur vos résultats.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#161517]/80 backdrop-blur-xl border border-white/10 hover:border-[#C1A5FF]/30 transition-all duration-300">
<div className="w-12 h-12 bg-[#C1A5FF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C1A5FF]/20 transition-all duration-300">
<svg className="lucide lucide-layout-template w-6 h-6 text-[#C1A5FF]" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight" style={{}}>Sites Web Sur Mesure</h3>
<p className="text-neutral-400 leading-relaxed tracking-tight" style={{}}>
                        Design unique, expérience utilisateur optimisée et responsive. Nous créons des vitrines digitales qui convertissent vos visiteurs en clients.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#161517]/80 backdrop-blur-xl border border-white/10 hover:border-[#C1A5FF]/30 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
<svg className="lucide lucide-search w-6 h-6 text-blue-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight" style={{}}>Référencement SEO</h3>
<p className="text-neutral-400 leading-relaxed tracking-tight" style={{}}>
                        Soyez visible là où vos clients vous cherchent. Optimisation technique et sémantique pour dominer les résultats de recherche.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#161517]/80 backdrop-blur-xl border border-white/10 hover:border-[#C1A5FF]/30 transition-all duration-300">
<div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
<svg className="lucide lucide-smartphone w-6 h-6 text-green-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight" style={{}}>Communication Digitale</h3>
<p className="text-neutral-400 leading-relaxed tracking-tight" style={{}}>
                        Réseaux sociaux, newsletters, publicités. Nous définissons une stratégie globale pour engager votre communauté.
                    </p>
</div>
</div>

<div className="mt-6 rounded-2xl bg-[#161517]/80 backdrop-blur-xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-[#C1A5FF]/20 transition-colors">
<div className="p-8 md:p-12 flex flex-col justify-center">
<h3 className="text-2xl text-white mb-4 font-bold" style={{}}>Une méthodologie éprouvée</h3>
<p className="text-neutral-400 mb-8 leading-relaxed tracking-tight" style={{}}>
                        Nous ne laissons rien au hasard. Chaque projet suit un processus rigoureux pour garantir qualité, rapidité et performance.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300 tracking-tight" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#C1A5FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Audit et Stratégie
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 tracking-tight" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#C1A5FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Design et Développement
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 tracking-tight" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#C1A5FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Suivi et Optimisation
                        </li>
</ul>
</div>
<div className="bg-[#1a191c]/50 border-l border-white/5 p-8 flex items-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#C1A5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="w-full space-y-4 relative z-10">
<div className="flex items-center gap-4 p-3 bg-[#161517] border border-white/10 rounded-lg transform translate-x-4">
<div className="w-8 h-8 bg-[#C1A5FF]/20 text-[#C1A5FF] rounded flex items-center justify-center font-bold text-sm tracking-tight" style={{}}>1</div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>Brief &amp; Analyse</div>
</div>
<div className="flex items-center gap-4 p-3 bg-[#161517] border border-white/10 rounded-lg transform translate-x-8">
<div className="w-8 h-8 bg-[#C1A5FF]/40 text-white rounded flex items-center justify-center font-bold text-sm tracking-tight" style={{}}>2</div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>Maquettage UI/UX</div>
</div>
<div className="flex items-center gap-4 p-3 bg-[#161517] border border-white/10 rounded-lg transform translate-x-12 border-[#C1A5FF]/50 shadow-[0_0_15px_rgba(193,165,255,0.2)]">
<div className="w-8 h-8 bg-[#C1A5FF] text-[#161517] rounded flex items-center justify-center font-bold text-sm tracking-tight" style={{}}>3</div>
<div className="text-sm font-medium text-white tracking-tight" style={{}}>Déploiement</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C1A5FF]/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 font-bold" style={{}}>Prêt à transformer votre activité ?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto tracking-tight" style={{}}>
                Rejoignez les entrepreneurs qui ont choisi Floweb pour leur présence en ligne et leur développement.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-[#161517] font-medium rounded-full hover:bg-[#C1A5FF] transition-all transform hover:scale-105 active:scale-95 tracking-tight" style={{}}>
                    Demander un devis
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all transform hover:scale-105 active:scale-95 tracking-tight" style={{}}>
                    Contacter l'équipe
                </button>
</div>
</div>
</section>

<footer className="relative pt-24 pb-12 bg-[#161517]">

<div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight" style={{}}>Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Création Sites Web</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Audit SEO</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Identité Visuelle</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight" style={{}}>Agence</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>À propos</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Réalisations</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight" style={{}}>Ressources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Guides Gratuits</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight" style={{}}>Légal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Mentions Légales</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>CGV</a></li>
<li><a className="text-sm text-neutral-500 hover:text-[#C1A5FF] transition-colors tracking-tight" href="#" style={{}}>Confidentialité</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="w-6 h-6 bg-white/5 rounded-md flex items-center justify-center border border-white/10">
<svg className="lucide lucide-layers w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<span className="text-neutral-500 text-sm tracking-tight" style={{}}>© 2024 Floweb.net</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
