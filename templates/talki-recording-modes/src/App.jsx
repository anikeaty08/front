import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        let isOpen = false;
        let currentSelection = 'Screen Only';

        const drawer = document.getElementById('drawer');
        const settingsDrawer = document.getElementById('settings-drawer');
        const chevron = document.getElementById('chevron');
        const headerLabel = document.getElementById('header-label');
        const divider = document.getElementById('divider');
        const modeButtons = document.querySelectorAll('.mode-btn');
        const posButtons = document.querySelectorAll('.pos-btn');
        const shapeButtons = document.querySelectorAll('.shape-btn');

        function toggleDrawer() {
            isOpen = !isOpen;
            updateUI();
        }

        function selectMode(mode, btnElement) {
            currentSelection = mode;
            const isExtendedMode = mode === 'Screen + Camera';
            if (isExtendedMode) isOpen = true; else isOpen = false;

            modeButtons.forEach(btn => {
                const ring = btn.querySelector('.active-ring');
                const icon = btn.querySelector('.icon-container');
                const text = btn.querySelector('.label-text');
                
                ring.classList.replace('opacity-100', 'opacity-0');
                btn.setAttribute('data-active', 'false');
                icon.classList.replace('text-gray-900', 'text-gray-400');
                text.classList.replace('text-gray-900', 'text-gray-500');
            });

            const activeRing = btnElement.querySelector('.active-ring');
            const activeIcon = btnElement.querySelector('.icon-container');
            const activeText = btnElement.querySelector('.label-text');

            activeRing.classList.replace('opacity-0', 'opacity-100');
            btnElement.setAttribute('data-active', 'true');
            activeIcon.classList.replace('text-gray-400', 'text-gray-900');
            activeText.classList.replace('text-gray-500', 'text-gray-900');

            updateUI();
            
            if (isExtendedMode) {
                settingsDrawer.classList.remove('opacity-0');
                settingsDrawer.classList.add('opacity-100');
                settingsDrawer.style.maxHeight = settingsDrawer.scrollHeight + "px";
                requestAnimationFrame(() => {
                   drawer.style.maxHeight = (drawer.scrollHeight + settingsDrawer.scrollHeight + 50) + "px";
                });
            } else {
                settingsDrawer.classList.remove('opacity-100');
                settingsDrawer.classList.add('opacity-0');
                settingsDrawer.style.maxHeight = "0px";
            }
        }

        function selectPosition(btn) {
            posButtons.forEach(b => {
                b.className = "pos-btn flex-1 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50";
            });
            btn.className = "pos-btn flex-1 py-2 rounded-lg text-xs font-semibold bg-white text-gray-900 shadow-sm ring-1 ring-black/5 transition-all duration-200 outline-none";
        }

        function selectShape(btn) {
            shapeButtons.forEach(b => {
                b.className = "shape-btn group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white border border-gray-200 text-gray-500 shadow-sm hover:border-gray-300 hover:text-gray-700 active:bg-gray-50 transition-all duration-200 outline-none focus:ring-2 focus:ring-indigo-500/20";
                b.classList.remove('ring-1', 'ring-gray-900', 'active-shape');
            });
            btn.classList.add('ring-1', 'ring-gray-900', 'text-gray-900', 'active-shape');
            btn.classList.replace('text-gray-500', 'text-gray-900');
        }

        function updateUI() {
            if (isOpen) {
                // Open State
                drawer.classList.remove('opacity-0');
                drawer.classList.add('opacity-100');
                
                const contentHeight = drawer.scrollHeight;
                drawer.style.maxHeight = (contentHeight + (currentSelection === 'Screen + Camera' ? 250 : 0)) + "px"; 
                
                chevron.style.transform = "rotate(180deg)";
                
                // Hide Label, Show Divider
                headerLabel.classList.add('opacity-0', 'translate-x-2');
                divider.classList.remove('opacity-0', 'scale-x-95');
                divider.classList.add('opacity-100', 'scale-x-100');
                
            } else {
                // Closed State
                drawer.style.maxHeight = "0px";
                drawer.classList.remove('opacity-100');
                drawer.classList.add('opacity-0');
                
                chevron.style.transform = "rotate(0deg)";
                
                // Show Label, Hide Divider
                divider.classList.remove('opacity-100', 'scale-x-100');
                divider.classList.add('opacity-0', 'scale-x-95');
                
                setTimeout(() => {
                    headerLabel.innerText = currentSelection;
                    headerLabel.classList.remove('opacity-0', 'translate-x-2');
                }, 200);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-gray-100 to-indigo-50/30 z-0"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-50"></div>

<div className="relative z-10 w-full max-w-[560px] bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-200/60 overflow-hidden ring-1 ring-gray-900/5 transition-all duration-300">

<div className="relative z-20 cursor-pointer group select-none bg-white transition-colors duration-300 hover:bg-gray-50/50" id="trigger" onclick="toggleDrawer()">
<div className="flex items-center justify-between p-8">

<div className="flex flex-col gap-1">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">
                        Recording Mode
                    </h2>
<p className="text-xs font-medium text-gray-400 tracking-wide uppercase">Source Selection</p>
</div>

<div className="flex items-center gap-3 pl-4">
<span className="text-sm font-medium text-gray-500 transition-all duration-300 translate-x-0 opacity-100" id="header-label">
                        Screen Only
                    </span>
<div className="w-px h-6 bg-gray-200 mx-1"></div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent group-hover:bg-gray-100 transition-all duration-200 text-gray-400 group-hover:text-gray-900" id="chevron-bg">
<i className="w-5 h-5 stroke-[1.5] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" data-lucide="chevron-down" id="chevron"></i>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gray-100 opacity-0 divider-transition scale-x-95 origin-center" id="divider"></div>
</div>


<div className="drawer-transition max-h-0 opacity-0 overflow-hidden bg-gray-50/80 shadow-[inset_0_4px_12px_-6px_rgba(0,0,0,0.05)]" id="drawer">
<div className="p-8">


<div className="grid grid-cols-3 gap-4 mb-2">

<button className="mode-btn group relative flex flex-col items-center justify-center gap-3 p-4 h-32 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 outline-none focus:ring-4 focus:ring-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98]" data-active="true" onclick="selectMode('Screen Only', this)">
<div className="text-gray-900 transition-colors duration-200 icon-container p-2.5 rounded-full bg-gray-50 group-hover:bg-white group-hover:shadow-sm ring-1 ring-gray-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="monitor"></i>
</div>
<span className="text-xs font-semibold tracking-wide text-gray-900 transition-colors duration-200 label-text">
                            Screen Only
                        </span>

<div className="absolute inset-0 rounded-2xl ring-2 ring-gray-900 opacity-100 active-ring pointer-events-none transition-opacity duration-300"></div>
</button>

<button className="mode-btn group relative flex flex-col items-center justify-center gap-3 p-4 h-32 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 outline-none focus:ring-4 focus:ring-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98]" data-active="false" onclick="selectMode('Camera Only', this)">
<div className="text-gray-400 group-hover:text-gray-900 transition-colors duration-200 icon-container p-2.5 rounded-full bg-gray-50 group-hover:bg-white group-hover:shadow-sm ring-1 ring-gray-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="camera"></i>
</div>
<span className="text-xs font-semibold tracking-wide text-gray-500 group-hover:text-gray-900 transition-colors duration-200 label-text">
                            Camera Only
                        </span>
<div className="absolute inset-0 rounded-2xl ring-2 ring-gray-900 opacity-0 active-ring pointer-events-none transition-opacity duration-300"></div>
</button>

<button className="mode-btn group relative flex flex-col items-center justify-center gap-3 p-4 h-32 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 outline-none focus:ring-4 focus:ring-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98]" data-active="false" onclick="selectMode('Screen + Camera', this)">
<div className="relative text-gray-400 group-hover:text-gray-900 transition-colors duration-200 icon-container p-2.5 rounded-full bg-gray-50 group-hover:bg-white group-hover:shadow-sm ring-1 ring-gray-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="monitor"></i>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm ring-1 ring-gray-200">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="video"></i>
</div>
</div>
<span className="text-xs font-semibold tracking-wide text-gray-500 group-hover:text-gray-900 transition-colors duration-200 label-text text-center leading-tight">
                            Screen &amp; Cam
                        </span>
<div className="absolute inset-0 rounded-2xl ring-2 ring-gray-900 opacity-0 active-ring pointer-events-none transition-opacity duration-300"></div>
</button>
</div>

<div className="drawer-transition max-h-0 opacity-0 overflow-hidden" id="settings-drawer">
<div className="pt-6 pb-2 space-y-6">
<div className="w-full h-px bg-gray-200/60"></div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Position</span>
<span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Drag Preview</span>
</div>
<div className="flex p-1 bg-gray-200/40 rounded-xl overflow-hidden shadow-inner">
<button className="pos-btn flex-1 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50" onclick="selectPosition(this)">Top L</button>
<button className="pos-btn flex-1 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50" onclick="selectPosition(this)">Top R</button>
<button className="pos-btn flex-1 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50" onclick="selectPosition(this)">Bot L</button>
<button className="pos-btn flex-1 py-2 rounded-lg text-xs font-semibold bg-white text-gray-900 shadow-sm ring-1 ring-black/5 transition-all duration-200 outline-none" data-active="true" onclick="selectPosition(this)">Bot R</button>
</div>
</div>

<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Shape</span>
<div className="grid grid-cols-2 gap-3">
<button className="shape-btn group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white border border-gray-200 text-gray-900 shadow-sm hover:border-gray-300 active:bg-gray-50 transition-all duration-200 outline-none focus:ring-2 focus:ring-indigo-500/20 ring-1 ring-gray-900 active-shape" data-active="true" onclick="selectShape(this)">
<div className="w-4 h-4 rounded-full border-[1.5px] border-current"></div>
                                    Circle
                                </button>
<button className="shape-btn group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white border border-gray-200 text-gray-500 shadow-sm hover:border-gray-300 hover:text-gray-700 active:bg-gray-50 transition-all duration-200 outline-none focus:ring-2 focus:ring-indigo-500/20" onclick="selectShape(this)">
<div className="w-4 h-4 rounded-sm border-[1.5px] border-current"></div>
                                    Square
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
