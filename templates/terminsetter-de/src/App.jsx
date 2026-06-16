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

      // Sidebar Navigation Logic
      function setActiveTab(element, tabName) {
          const items = document.querySelectorAll('.sidebar-item');
          items.forEach(item => item.classList.remove('active'));

          element.classList.add('active');

          const title = document.getElementById('page-title');
          const titleMap = {
              'overview': 'Übersicht',
              'pipeline': 'Live Pipeline',
              'calendar': 'Kalender',
              'setters': 'Setter Team'
          };
          title.innerText = titleMap[tabName] || 'Übersicht';

          const views = document.querySelectorAll('.view-content');
          views.forEach(view => {
              view.classList.remove('active');
          });

          const selectedView = document.getElementById('view-' + tabName);
          // Default to overview if view doesn't exist yet
          if(selectedView) {
              selectedView.classList.add('active');
              selectedView.style.animation = 'none';
              selectedView.offsetHeight;
              selectedView.style.animation = null;
          } else {
               document.getElementById('view-overview').classList.add('active');
          }
      }

      // Chart Tooltip Logic
      function showTooltip(element, text) {
          const tooltip = document.getElementById('tooltip');
          tooltip.innerText = text;
          tooltip.style.opacity = '1';

          const rect = element.getBoundingClientRect();
          const parentRect = element.parentElement.getBoundingClientRect();
          const left = rect.left - parentRect.left;

          tooltip.style.left = (left - 5) + 'px';
      }

      function hideTooltip() {
          const tooltip = document.getElementById('tooltip');
          tooltip.style.opacity = '0';
      }

      // Live Stat Simulation
      setInterval(() => {
          const statLeads = document.getElementById('stat-leads');
          if(statLeads && Math.random() > 0.7) {
              statLeads.innerText = parseInt(statLeads.innerText) + 1;

              // Flash effect
              statLeads.style.color = '#4ade80';
              setTimeout(() => statLeads.style.color = 'white', 500);
          }
      }, 3000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 bg-gradient-to-br from-white to-neutral-400 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-3 shadow-lg shadow-white/5">
<span className="font-bold text-black text-lg tracking-tighter">TS</span>
</div>
<span className="font-bold text-lg tracking-tight text-white font-space-grotesk">
            TerminSetter.de
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#process">
            Unser Prozess
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#results">
            Ergebnisse
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#calculator">
            ROI Rechner
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#faq">
            FAQ
          </a>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors transform hover:scale-105 active:scale-95 duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Strategiegespräch buchen
          </button>
</div>
</div>
</nav>

<section className="overflow-hidden min-h-screen flex flex-col pt-36 pb-24 relative justify-center">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-[100%] blur-[120px] opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 border border-blue-500/20 mb-8 pointer-events-auto cursor-pointer hover:bg-blue-900/20 transition-colors animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-blue-400 relative animate-pulse-ring"></span>
<span className="text-xs font-medium text-blue-200 tracking-wide uppercase">
            Neue Partner für Q4 gesucht
          </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 gradient-text max-w-5xl mx-auto leading-[1.05] font-space-grotesk">
          Wir füllen Ihren Kalender mit qualifizierten Terminen.
        </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Die führende Setter-Infrastruktur für deutschsprachige Coaches &amp;
          Berater. Hören Sie auf, Leads hinterherzujagen – lassen Sie unsere
          geprüften Setter Ihre gesamte Pipeline übernehmen.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24 pointer-events-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Qualifizierte Leads erhalten
            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 backdrop-blur-sm">
<svg className="w-4 h-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
            Fallstudien ansehen
          </button>
</div>

<div className="relative max-w-6xl mx-auto pointer-events-auto perspective-1000 group">

<div className="absolute -left-12 top-20 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-xs text-neutral-300 hidden xl:flex items-center gap-2 animate-bounce shadow-xl z-50">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Neuer Lead: Markus W.
          </div>
<div className="absolute -right-8 bottom-40 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-xs text-neutral-300 hidden xl:flex items-center gap-2 shadow-xl z-50">
<svg className="text-blue-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
            Setter Aktiv
          </div>
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl glow-effect select-none transform-gpu transition-all duration-75 mx-4 md:mx-0" id="dashboard-wrapper">

<div className="grab-handle h-12 bg-[#0F0F0F] border-b border-white/5 flex items-center px-5 gap-3 group" id="drag-handle">
<div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
</div>
<div className="ml-4 flex items-center gap-2 px-3 py-1 bg-black/50 border border-white/5 rounded-md text-[11px] text-neutral-500 font-mono hover:text-neutral-300 transition-colors cursor-text">
<svg className="text-green-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                app.terminsetter.de/pipeline
              </div>
</div>

<div className="flex h-[550px] bg-[#0A0A0A]">

<div className="w-64 border-r border-white/5 flex flex-col hidden md:flex bg-[#080808]">
<div className="p-4">
<div className="flex items-center gap-3 px-3 py-2 text-white bg-white/5 rounded-lg border border-white/5 mb-6 hover:border-white/10 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold ring-2 ring-black">
                      DA
                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium leading-none mb-1">
                        DACH Agentur
                      </span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
<svg className="ml-auto text-neutral-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="space-y-1" id="sidebar-menu">
<div className="sidebar-item active px-3 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-3 transition-all cursor-pointer border-l-2 border-transparent" onclick="setActiveTab(this, 'overview')">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                      Übersicht
                    </div>
<div className="sidebar-item px-3 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-3 transition-all cursor-pointer border-l-2 border-transparent" onclick="setActiveTab(this, 'pipeline')">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
                      Live Pipeline
                      <span className="ml-auto bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded-full">
                        12
                      </span>
</div>
<div className="sidebar-item px-3 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-3 transition-all cursor-pointer border-l-2 border-transparent" onclick="setActiveTab(this, 'calendar')">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                      Kalender
                    </div>
<div className="sidebar-item px-3 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-3 transition-all cursor-pointer border-l-2 border-transparent" onclick="setActiveTab(this, 'setters')">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                      Meine Setter
                    </div>
</div>
</div>
<div className="mt-auto p-4 border-t border-white/5">
<div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 rounded-lg p-3">
<div className="text-xs text-neutral-400 mb-1">
                      Prognostizierter Umsatz
                    </div>
<div className="text-lg font-bold text-white tracking-tight">
                      €42,500
                      <span className="text-neutral-500 font-normal">.00</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-blue-500 w-[70%]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 relative overflow-y-auto bg-black/20" id="main-view">

<div className="flex items-center justify-between mb-8 fade-in sticky top-0 z-30">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight" id="page-title">
                      Übersicht
                    </h2>
<p className="text-xs text-neutral-500 mt-1">
                      Überblick über Ihre Setter-Performance
                    </p>
</div>
<div className="flex gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://i.pravatar.cc/100?img=47"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                        +3
                      </div>
</div>
<button className="bg-white text-black text-xs font-bold px-3 py-2 rounded-md hover:bg-neutral-200 transition-colors">
                      + Lead hinzufügen
                    </button>
</div>
</div>

<div className="view-content active fade-in" id="view-overview">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="p-5 rounded-xl border border-white/5 bg-[#111] hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 rounded">
                          +12%
                        </span>
</div>
<div className="text-2xl font-bold text-white mb-1">
<span id="stat-leads">142</span>
</div>
<div className="text-xs text-neutral-500">
                        Qualifizierte Leads
                      </div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111] hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<span className="text-green-400 text-xs flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 rounded">
                          +8%
                        </span>
</div>
<div className="text-2xl font-bold text-white mb-1">
<span id="stat-booked">38</span>
</div>
<div className="text-xs text-neutral-500">
                        Gebuchte Anrufe
                      </div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111] hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="text-neutral-500 text-xs">
                          Diesen Monat
                        </span>
</div>
<div className="text-2xl font-bold text-white mb-1">
                        €
                        <span id="stat-revenue">18.5</span>
                        k
                      </div>
<div className="text-xs text-neutral-500">Pipeline-Wert</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-[#111] p-6 h-48 flex flex-col justify-between relative overflow-hidden mb-6">
<div className="flex justify-between items-center z-10">
<h3 className="text-sm font-medium text-neutral-300">
                        Gebuchte Termine (Täglich)
                      </h3>
<div className="flex gap-2">
<div className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded font-mono">
                          LIVE
                        </div>
</div>
</div>
<div className="flex items-end justify-between gap-1.5 h-24 mt-4 relative" id="chart-bars">
<div className="absolute -top-10 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 transition-opacity pointer-events-none z-20 whitespace-nowrap shadow-lg" id="tooltip">
                        4 Anrufe
                      </div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[30%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '3 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[45%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '5 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[25%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '2 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[60%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '7 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[40%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '4 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[55%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '6 Anrufe')"></div>
<div className="chart-bar w-full bg-white/5 rounded-sm h-[75%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '9 Anrufe')"></div>
<div className="chart-bar w-full bg-white/10 rounded-sm h-[50%]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '5 Anrufe')"></div>
<div className="chart-bar w-full bg-blue-500 rounded-sm h-[85%] shadow-[0_0_15px_rgba(59,130,246,0.5)]" onmouseout="hideTooltip()" onmouseover="showTooltip(this, '11 Anrufe')"></div>
</div>
</div>
</div>

<div className="view-content fade-in" id="view-pipeline">
<div className="space-y-3">
<div className="p-4 rounded-lg border border-white/5 bg-[#111] hover:bg-[#161616] transition-all flex items-center justify-between group cursor-pointer border-l-2 border-l-blue-500">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold">
                          SK
                        </div>
<div>
<div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                            Stefan Klein
                          </div>
<div className="text-[11px] text-neutral-500">
                            Agenturinhaber • 10k€ Angebot
                          </div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20">
                          QUALIFIZIERT
                        </span>
<div className="text-[10px] text-neutral-600 mt-1">
                          vor 2m
                        </div>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-[#111] hover:bg-[#161616] transition-all flex items-center justify-between group cursor-pointer border-l-2 border-l-green-500">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold">
                          LM
                        </div>
<div>
<div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                            Lisa Müller
                          </div>
<div className="text-[11px] text-neutral-500">
                            Life Coach • 3k€ Angebot
                          </div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20">
                          GEBUCHT
                        </span>
<div className="text-[10px] text-neutral-600 mt-1">
                          vor 15m
                        </div>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-[#111] hover:bg-[#161616] transition-all flex items-center justify-between group cursor-pointer border-l-2 border-l-yellow-500">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold">
                          TW
                        </div>
<div>
<div className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors">
                            Thomas Weber
                          </div>
<div className="text-[11px] text-neutral-500">
                            SaaS Gründer • Beratungsgespräch
                          </div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-[10px] font-bold border border-yellow-500/20">
                          NACHFASSEN
                        </span>
<div className="text-[10px] text-neutral-600 mt-1">
                          vor 1h
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

<div className="w-full mt-24 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
            Vertrauen von 50+ deutschen Agenturen
          </p>
<div className="flex gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold font-space-grotesk text-white flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full"></div>
              NEXUS
            </div>
<div className="text-xl font-bold font-space-grotesk text-white flex items-center gap-2">
<div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              SCALE.IO
            </div>
<div className="text-xl font-bold font-space-grotesk text-white flex items-center gap-2">
<div className="w-5 h-5 bg-white skew-x-12"></div>
              APEX
            </div>
<div className="text-xl font-bold font-space-grotesk text-white flex items-center gap-2">
<div className="w-5 h-5 border border-white rounded-full"></div>
              CORE
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Hören Sie auf, Zeit mit
              <span className="text-neutral-500 line-through">Kaltakquise</span>
              zu verschwenden.
            </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Die meisten Coaches verbringen 80% ihrer Zeit damit, Leads zu
              jagen und nur 20% damit, Kunden zu betreuen. Manuelle Akquise ist
              tot. Sie brauchen ein System.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</div>
                Inkonsistenter Lead-Flow von Monat zu Monat
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</div>
                Niedrige Erscheinungsraten bei gebuchten Terminen
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</div>
                Verwaltung untrainierbarer VAs
              </li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30"></div>
<div className="relative bg-black border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between mb-8">
<h3 className="font-medium text-white">
                  Der TerminSetter.de Unterschied
                </h3>
<span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded border border-green-500/30">
                  Geprüfte Daten
                </span>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                      Traditionelle Agentur
                    </div>
<div className="text-sm font-medium text-neutral-300">
                      Generischer Massen-DM Spam
                    </div>
</div>
<div className="w-px h-8 bg-white/10 mx-4"></div>
<div className="text-right">
<div className="text-xs text-blue-400 uppercase tracking-wider mb-1">
                      TerminSetter.de
                    </div>
<div className="text-sm font-bold text-white">
                      Hyper-Personalisierte Assets
                    </div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                      Antwortrate
                    </div>
<div className="text-sm font-medium text-neutral-300">
                      1-3% Durchschnitt
                    </div>
</div>
<div className="w-px h-8 bg-white/10 mx-4"></div>
<div className="text-right">
<div className="text-xs text-blue-400 uppercase tracking-wider mb-1">
                      TerminSetter.de
                    </div>
<div className="text-sm font-bold text-white">
                      12-18% Konstant
                    </div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                      Setter Standort
                    </div>
<div className="text-sm font-medium text-neutral-300">
                      Offshore / Nicht-Muttersprachler
                    </div>
</div>
<div className="w-px h-8 bg-white/10 mx-4"></div>
<div className="text-right">
<div className="text-xs text-blue-400 uppercase tracking-wider mb-1">
                      TerminSetter.de
                    </div>
<div className="text-sm font-bold text-white">
                      Deutsche Muttersprachler
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Komplette Pipeline-Infrastruktur
          </h2>
<p className="text-lg text-neutral-400">
            Wir versenden nicht nur Nachrichten. Wir bauen ein komplettes
            Akquise-Ökosystem in Ihrem Unternehmen auf.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300 text-neutral-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Deutsche Muttersprachler als Setter
            </h3>
<p className="text-neutral-400 leading-relaxed text-sm">
              Unser Team besteht aus geschulten deutschen Muttersprachlern, die
              kulturelle Nuancen und High-Ticket-Verkaufspsychologie verstehen.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300 text-neutral-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Multi-Channel Outreach
            </h3>
<p className="text-neutral-400 leading-relaxed text-sm">
              Wir sprechen Interessenten gleichzeitig auf LinkedIn, Instagram
              und per E-Mail an und nutzen einen Unified Inbox-Ansatz für
              maximale Kontaktpunkte.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 group-hover:text-green-400 transition-all duration-300 text-neutral-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Individuelle Skript-Entwicklung
            </h3>
<p className="text-neutral-400 leading-relaxed text-sm">
              Keine Copy-Paste-Vorlagen. Wir testen individuelle Skripte per
              A/B-Test, zugeschnitten auf Ihr Angebot und Ihre
              Zielgruppen-Avatare.
            </p>
</div>
</div>

<div className="mt-6 rounded-2xl bg-[#080808] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-white/20 transition-colors">
<div className="p-8 md:p-12 flex flex-col justify-center">
<h3 className="text-2xl font-semibold text-white mb-4">
              Technologie-gestütztes Setting
            </h3>
<p className="text-neutral-400 mb-8 leading-relaxed">
              Wir integrieren uns direkt in Ihr CRM. Sehen Sie Ihre
              Pipeline-Gesundheit, hören Sie Gesprächsaufzeichnungen an und
              verfolgen Sie den ROI in Echtzeit über unser Partnerportal.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300 check-list-item p-2 rounded">
<svg className="text-blue-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                CRM Integration (GoHighLevel, HubSpot)
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 check-list-item p-2 rounded">
<svg className="text-blue-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Automatisierte Terminerinnerungen
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 check-list-item p-2 rounded">
<svg className="text-blue-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Wöchentliche Qualitätssicherungsberichte
              </li>
</ul>
</div>
<div className="bg-black/40 border-l border-white/5 p-8 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>

<div className="flex flex-col gap-4 w-full max-w-sm relative z-10">
<div className="bg-[#111] border border-white/10 p-4 rounded-xl shadow-2xl transform translate-x-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-neutral-400 uppercase font-mono">
                    Neuer Termin
                  </span>
</div>
<div className="text-white font-medium text-sm">
                  Strategiegespräch mit
                  <span className="text-blue-400">CEO von TechStart</span>
</div>
<div className="text-xs text-neutral-500 mt-1">
                  Morgen, 14:00 Uhr • via Zoom
                </div>
</div>
<div className="bg-[#111] border border-white/10 p-4 rounded-xl shadow-2xl opacity-60 scale-95">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs text-neutral-400 uppercase font-mono">
                    Lead Qualifiziert
                  </span>
</div>
<div className="text-white font-medium text-sm">
                  Pipeline-Wert erhöht um
                  <span className="text-green-400">5.000€</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-black pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Bereit, Ihre Agentur zu skalieren?
        </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
          Wir arbeiten nur mit 5 neuen Partnern pro Monat zusammen, um Qualität
          zu sichern. Prüfen Sie, ob Ihr Angebot für unsere Garantie
          qualifiziert ist.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95">
            Strategiegespräch buchen
          </button>
<div className="flex items-center gap-4 px-6">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=12"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=59"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=3"/>
</div>
<div className="text-left">
<div className="text-white text-sm font-bold">500+ Buchungen</div>
<div className="text-neutral-500 text-xs">Diesen Monat generiert</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-24 pb-12 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="font-bold text-xl text-white font-space-grotesk">
                TerminSetter.de
              </span>
</div>
<p className="text-sm text-neutral-500 mb-6">
              Premium Terminierungs-Infrastruktur für High-Ticket-Angebote in
              der DACH-Region.
            </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Dienstleistungen
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  LinkedIn Outreach
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Kaltakquise E-Mail
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Setter Vermittlung
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Unternehmen
            </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Über Uns
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Fallstudien
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Karriere
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Rechtliches
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Impressum
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  Datenschutz
                </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                  AGB
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<span className="text-neutral-600 text-sm">
            © 2024 TerminSetter.de GmbH. Alle Rechte vorbehalten.
          </span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
