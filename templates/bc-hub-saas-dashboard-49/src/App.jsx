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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Toggle Logic
        const toggleBtn = document.getElementById('toggleBtn');
        const toggleKnob = document.getElementById('toggleKnob');
        let isToggled = false;

        toggleBtn.addEventListener('click', () => {
            isToggled = !isToggled;
            if (isToggled) {
                toggleBtn.classList.remove('bg-neutral-700');
                toggleBtn.classList.add('bg-neutral-200');
                toggleKnob.classList.remove('bg-white');
                toggleKnob.classList.add('bg-neutral-900');
                toggleKnob.style.transform = 'translateX(16px)';
            } else {
                toggleBtn.classList.add('bg-neutral-700');
                toggleBtn.classList.remove('bg-neutral-200');
                toggleKnob.classList.add('bg-white');
                toggleKnob.classList.remove('bg-neutral-900');
                toggleKnob.style.transform = 'translateX(0)';
            }
        });

        // Custom Checkbox Logic
        const checkbox = document.getElementById('customCheckbox');
        const checkboxLabel = document.getElementById('checkboxLabel');
        const checkIcon = document.getElementById('checkIcon');
        let isChecked = false;

        const toggleCheckbox = () => {
            isChecked = !isChecked;
            if (isChecked) {
                checkbox.classList.add('bg-neutral-200', 'border-neutral-200');
                checkbox.classList.remove('border-neutral-700');
                checkIcon.classList.remove('opacity-0', 'text-white');
                checkIcon.classList.add('opacity-100', 'text-neutral-900');
            } else {
                checkbox.classList.remove('bg-neutral-200', 'border-neutral-200');
                checkbox.classList.add('border-neutral-700');
                checkIcon.classList.add('opacity-0', 'text-white');
                checkIcon.classList.remove('opacity-100', 'text-neutral-900');
            }
        };

        checkbox.addEventListener('click', toggleCheckbox);
        checkboxLabel.addEventListener('click', toggleCheckbox);

        // Custom Slider Logic
        const memorySlider = document.getElementById('memorySlider');
        const memoryValue = document.getElementById('memoryValue');
        
        memorySlider.addEventListener('input', (e) => {
            const val = e.target.value;
            memoryValue.textContent = val >= 1024 ? `${(val / 1024).toFixed(1).replace('.0', '')} GB` : `${val} MB`;
        });

        const intervalSlider = document.getElementById('intervalSlider');
        const intervalValue = document.getElementById('intervalValue');
        
        intervalSlider.addEventListener('input', (e) => {
            intervalValue.textContent = `${e.target.value} min`;
        });

        // Custom Dropdown Logic
        const dropdownTrigger = document.getElementById('dropdownTrigger');
        const dropdownMenu = document.getElementById('dropdownMenu');
        let isDropdownOpen = false;

        dropdownTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            isDropdownOpen = !isDropdownOpen;
            if (isDropdownOpen) {
                dropdownMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
                dropdownMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
                dropdownMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (isDropdownOpen && !dropdownMenu.contains(e.target)) {
                isDropdownOpen = false;
                dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
                dropdownMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        });
    
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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-neutral-800/60 bg-[#0a0a0a] flex flex-col shrink-0 z-20">
<div className="h-14 flex items-center px-6 border-b border-neutral-800/60">
<span className="text-base font-medium tracking-tighter text-neutral-100">bc.HUB</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-100 bg-neutral-800/40 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:widget-5-linear"></iconify-icon>
                Overview
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/20 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:chart-square-linear"></iconify-icon>
                Analytics
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/20 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
                Team
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/20 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
                Settings
            </button>
</nav>
<div className="p-4 border-t border-neutral-800/60">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 text-xs font-medium">
                    BC
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-200">Admin User</span>
<span className="text-xs text-neutral-500">Free Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-[#0a0a0a] relative">

<header className="h-14 flex items-center justify-between px-6 border-b border-neutral-800/60 shrink-0 bg-[#0a0a0a]/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm text-neutral-500 font-normal">
<span>bc.HUB</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-neutral-200">Settings</span>
</div>
<div className="flex items-center gap-4 relative">
<button className="text-neutral-400 hover:text-neutral-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>

<button className="flex items-center gap-2 text-sm font-normal text-neutral-300 hover:text-neutral-100 transition-colors py-1 px-2 rounded-md hover:bg-neutral-800/30" id="dropdownTrigger">
                    Options
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-10 right-0 w-48 bg-[#111111] border border-neutral-800 rounded-lg shadow-2xl opacity-0 pointer-events-none transform translate-y-[-10px] transition-all duration-200 z-50" id="dropdownMenu">
<div className="p-1.5 flex flex-col">
<button className="text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors">Profile</button>
<button className="text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors">Billing</button>
<div className="h-px bg-neutral-800 my-1"></div>
<button className="text-left px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-md transition-colors">Log out</button>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
<div className="max-w-3xl mx-auto space-y-10">

<div>
<h1 className="text-2xl font-normal tracking-tighter text-neutral-100">System Preferences</h1>
<p className="text-sm mt-2 text-neutral-500 font-light">Manage your interface and performance settings.</p>
</div>

<div className="space-y-6">

<section className="border border-neutral-800/60 bg-[#111111]/30 rounded-xl overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-800/60 flex items-center justify-between">
<h2 className="text-sm font-medium text-neutral-200">Interface</h2>
</div>
<div className="p-5 space-y-6">

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-normal text-neutral-200">Hardware Acceleration</span>
<span className="text-xs font-light text-neutral-500">Utilize GPU for smoother UI rendering.</span>
</div>
<button className="w-9 h-5 rounded-full bg-neutral-700 relative transition-colors duration-300 focus:outline-none" id="toggleBtn">
<div className="w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] left-[3px] transition-transform duration-300" id="toggleKnob"></div>
</button>
</div>
<div className="h-px w-full bg-neutral-800/60"></div>

<div className="flex items-start gap-3">
<div className="w-4 h-4 mt-0.5 rounded border border-neutral-700 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:border-neutral-500 shrink-0" id="customCheckbox">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity duration-200" icon="solar:check-read-linear" id="checkIcon"></iconify-icon>
</div>
<div className="flex flex-col gap-1 cursor-pointer" id="checkboxLabel">
<span className="text-sm font-normal text-neutral-200">Opt-in to Beta Features</span>
<span className="text-xs font-light text-neutral-500">Get early access to upcoming features before they are widely released.</span>
</div>
</div>
</div>
</section>

<section className="border border-neutral-800/60 bg-[#111111]/30 rounded-xl overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-800/60">
<h2 className="text-sm font-medium text-neutral-200">Performance Limits</h2>
</div>
<div className="p-5 space-y-8">

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-normal text-neutral-200">Memory Allocation</label>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded" id="memoryValue">2048 MB</span>
</div>
<input id="memorySlider" max="8192" min="512" step="512" type="range" value="2048"/>
<div className="flex justify-between text-xs font-light text-neutral-600">
<span>512MB</span>
<span>8GB</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-normal text-neutral-200">Auto-save Interval</label>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded" id="intervalValue">5 min</span>
</div>
<input id="intervalSlider" max="60" min="1" step="1" type="range" value="5"/>
<div className="flex justify-between text-xs font-light text-neutral-600">
<span>1m</span>
<span>1h</span>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>


    </>
  );
}
