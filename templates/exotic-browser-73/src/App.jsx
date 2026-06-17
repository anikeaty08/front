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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 3s linear infinite',
'float': 'float 3s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-5px)' },
}
}
}
}
}



        // Constants
        const HOME_PROTOCOL = 'Exotic://Home';
        
        // Devil SVG Path String for reuse
        const DEVIL_ICON_SVG = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                <path d="M4 8l2-4 2 4" />
                <path d="M16 8l2-4 2 4" />
                <path d="M12 21c-4 0-7-3-7-8 0-4 2.5-6 7-6s7 2 7 6c0 5-3 8-7 8z" />
                <path d="M9 13.5l1 1" />
                <path d="M14 13.5l-1 1" />
            </svg>
        `;

        // State
        const state = {
            tabs: [
                { id: 1, title: 'Home', active: true, url: HOME_PROTOCOL }
            ],
            isDark: false, 
            micaEnabled: true,
            tabCounter: 1
        };

        // DOM Elements
        const browserFrame = document.getElementById('browser-frame');
        const viewport = document.getElementById('viewport');
        const micaIndicator = document.getElementById('mica-indicator');
        const tabContainer = document.getElementById('tab-container');
        const urlInput = document.getElementById('url-input');
        const homeContent = document.getElementById('home-content');
        const websiteFrame = document.getElementById('website-frame');
        const progressBar = document.getElementById('progress-bar-container');
        const refreshBtn = document.getElementById('refresh-btn');
        const newTabBtn = document.getElementById('new-tab-btn');
        const urlLockIcon = document.getElementById('url-lock-icon');

        // Functions
        function renderTabs() {
            tabContainer.innerHTML = '';
            state.tabs.forEach(tab => {
                const tabEl = document.createElement('div');
                // Tab Styling
                // When active, we want it to look "connected" to the toolbar.
                // In Mica mode, the toolbar is semi-transparent, so the tab should probably match opacity or be slightly more opaque.
                const activeClass = tab.active 
                    ? 'bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm text-black dark:text-white shadow-sm z-10 scale-100 opacity-100' 
                    : 'bg-transparent text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 scale-95 opacity-80 hover:opacity-100';
                
                tabEl.className = `group relative h-9 min-w-[160px] max-w-[240px] rounded-t-lg rounded-b-none flex items-center justify-between px-3 cursor-pointer transition-all duration-200 select-none ${activeClass}`;
                
                // Icon selection
                const isHome = tab.url === HOME_PROTOCOL;
                const iconHtml = isHome 
                    ? DEVIL_ICON_SVG
                    : `<span class="iconify opacity-70" data-icon="lucide:globe" data-width="14"></span>`;
                
                tabEl.innerHTML = `
                    <div class="flex items-center space-x-2 overflow-hidden" onclick="switchTab(${tab.id})">
                        <div class="flex-shrink-0 opacity-80">${iconHtml}</div>
                        <span class="text-xs font-medium truncate tracking-tight">${tab.title}</span>
                    </div>
                    <button onclick="closeTab(event, ${tab.id})" class="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="iconify" data-icon="lucide:x" data-width="12"></span>
                    </button>
                `;
                tabContainer.appendChild(tabEl);
            });
            updateViewport();
        }

        function switchTab(id) {
            state.tabs.forEach(t => t.active = (t.id === id));
            renderTabs();
        }

        function closeTab(e, id) {
            e.stopPropagation();
            if (state.tabs.length === 1) return; // Keep at least one tab
            
            const idx = state.tabs.findIndex(t => t.id === id);
            const wasActive = state.tabs[idx].active;
            
            state.tabs.splice(idx, 1);
            
            if (wasActive && state.tabs.length > 0) {
                // Activate previous tab or first
                const newIdx = idx > 0 ? idx - 1 : 0;
                state.tabs[newIdx].active = true;
            }
            renderTabs();
        }

        function createTab() {
            state.tabCounter++;
            state.tabs.forEach(t => t.active = false);
            state.tabs.push({
                id: state.tabCounter,
                title: 'Home',
                active: true,
                url: HOME_PROTOCOL
            });
            renderTabs();
            setTimeout(() => {
                tabContainer.scrollLeft = tabContainer.scrollWidth;
            }, 10);
        }

        function updateViewport() {
            const activeTab = state.tabs.find(t => t.active);
            if (!activeTab) return;

            urlInput.value = activeTab.url;

            if (activeTab.url === HOME_PROTOCOL) {
                homeContent.classList.remove('hidden');
                websiteFrame.classList.add('hidden');
                urlLockIcon.setAttribute('data-icon', 'lucide:sparkles');
                // Allow transparency on home page if mica is on
                updateMicaVisuals();
            } else {
                homeContent.classList.add('hidden');
                websiteFrame.classList.remove('hidden');
                websiteFrame.querySelector('p').innerText = `Browsing ${activeTab.url}...`;
                urlLockIcon.setAttribute('data-icon', 'lucide:lock');
                // Websites are solid
                viewport.classList.remove('viewport-mica');
                viewport.classList.add('viewport-solid');
            }
        }

        function loadUrl(url) {
            if(!url) return;
            const activeTab = state.tabs.find(t => t.active);
            
            if(url.toLowerCase() === 'exotic://home' || url.toLowerCase() === 'home') {
                activeTab.url = HOME_PROTOCOL;
                activeTab.title = 'Home';
            } else {
                let cleanUrl = url;
                if (!url.startsWith('http') && !url.includes('://')) {
                    cleanUrl = 'https://' + url;
                }
                activeTab.url = cleanUrl;
                
                let domain = cleanUrl.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0];
                activeTab.title = domain.split('.')[0];
                if(activeTab.title.length < 2) activeTab.title = "Website";
                activeTab.title = activeTab.title.charAt(0).toUpperCase() + activeTab.title.slice(1);
            }
            
            progressBar.style.opacity = '1';
            document.getElementById('loading-indicator').classList.remove('hidden');
            
            setTimeout(() => {
                progressBar.style.opacity = '0';
                document.getElementById('loading-indicator').classList.add('hidden');
                renderTabs();
            }, 1000);
        }

        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                state.isDark = false;
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                state.isDark = true;
            }
        }

        function updateMicaVisuals() {
            const activeTab = state.tabs.find(t => t.active);
            
            if(state.micaEnabled) {
                // Apply Mica to main frame
                browserFrame.classList.remove('mica-disabled');
                browserFrame.classList.add('mica-enabled');
                
                // If on Home page, make viewport transparent to see through
                if(activeTab && activeTab.url === HOME_PROTOCOL) {
                    viewport.classList.remove('viewport-solid');
                    viewport.classList.add('viewport-mica');
                } else {
                    // Browsing a site implies solid background usually
                    viewport.classList.remove('viewport-mica');
                    viewport.classList.add('viewport-solid');
                }
                
                micaIndicator.classList.remove('bg-gray-400', 'shadow-none');
                micaIndicator.classList.add('bg-green-500', 'shadow-[0_0_5px_rgba(34,197,94,0.5)]');
            } else {
                // Solid Mode
                browserFrame.classList.remove('mica-enabled');
                browserFrame.classList.add('mica-disabled');
                
                viewport.classList.remove('viewport-mica');
                viewport.classList.add('viewport-solid');
                
                micaIndicator.classList.remove('bg-green-500', 'shadow-[0_0_5px_rgba(34,197,94,0.5)]');
                micaIndicator.classList.add('bg-gray-400', 'shadow-none');
            }
        }

        function toggleMica() {
            state.micaEnabled = !state.micaEnabled;
            updateMicaVisuals();
        }

        function simulateWindowAction(action) {
            console.log(`Window Action: ${action}`);
        }

        // Event Listeners
        newTabBtn.addEventListener('click', createTab);

        urlInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                loadUrl(urlInput.value);
                urlInput.blur();
            }
        });

        refreshBtn.addEventListener('click', () => {
            const activeTab = state.tabs.find(t => t.active);
            if(activeTab.url) {
                loadUrl(activeTab.url);
            }
        });

        // Initialize
        renderTabs();
        updateMicaVisuals();

    
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
      

<div className="absolute inset-0 bg-black/10 pointer-events-none"></div>


<div className="flex flex-col h-[90vh] w-[90vw] relative z-10 transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 mica-enabled" id="browser-frame">


<div className="h-12 w-full flex items-center justify-between px-3 pt-2 pb-0 z-50 border-b-0 transition-all" id="title-bar">

<div className="flex items-center space-x-2 w-20">
<button className="group w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 flex items-center justify-center overflow-hidden relative shadow-sm" onclick="simulateWindowAction('close')">
<span className="opacity-0 group-hover:opacity-100 text-[rgb(76,0,0)] text-[8px] font-bold">×</span>
</button>
<button className="group w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 flex items-center justify-center overflow-hidden relative shadow-sm" onclick="simulateWindowAction('minimize')">
<span className="opacity-0 group-hover:opacity-100 text-[rgb(89,69,0)] text-[8px] font-bold">−</span>
</button>
<button className="group w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 flex items-center justify-center overflow-hidden relative shadow-sm" onclick="simulateWindowAction('maximize')">
<span className="opacity-0 group-hover:opacity-100 text-[rgb(0,56,12)] text-[8px] font-bold">+</span>
</button>
</div>

<div className="flex-1 flex items-end space-x-1 mx-4 overflow-x-auto h-full px-2" id="tab-container">

</div>

<div className="flex items-center space-x-3 w-auto justify-end">
<button className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors" id="new-tab-btn">
<span className="iconify" data-icon="lucide:plus" data-width="16" strokeWidth="1.5"></span>
</button>
<div className="h-4 w-[1px] bg-black/10 dark:bg-white/10"></div>
<div className="flex items-center space-x-2">
<span className="text-xs font-semibold tracking-tighter opacity-50 text-black dark:text-white">Exotic</span>

<div className="w-6 h-6 flex items-center justify-center text-black dark:text-white animate-float cursor-pointer hover:scale-110 transition-transform" id="app-logo">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 8l2-4 2 4"></path>
<path d="M16 8l2-4 2 4"></path>
<path d="M12 21c-4 0-7-3-7-8 0-4 2.5-6 7-6s7 2 7 6c0 5-3 8-7 8z"></path>
<path d="M9 13.5l1 1"></path>
<path d="M14 13.5l-1 1"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="h-12 w-full flex items-center px-4 space-x-3 z-40 border-b border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40" id="toolbar">

<div className="flex items-center space-x-1 text-black dark:text-white">
<button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 opacity-60 hover:opacity-100 disabled:opacity-30">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18" strokeWidth="1.5"></span>
</button>
<button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 opacity-60 hover:opacity-100">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18" strokeWidth="1.5"></span>
</button>
<button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 opacity-60 hover:opacity-100" id="refresh-btn">
<span className="iconify" data-icon="lucide:rotate-cw" data-width="16" strokeWidth="1.5"></span>
</button>
</div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-black/40 dark:text-white/40" data-icon="lucide:lock" data-width="14" id="url-lock-icon" strokeWidth="1.5"></span>
</div>
<input className="w-full h-9 bg-black/5 dark:bg-white/10 rounded-lg pl-9 pr-24 text-sm text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all font-mono shadow-sm" id="url-input" placeholder="Search or enter website name" type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center space-x-1">
<div className="hidden" id="loading-indicator">
<span className="iconify animate-spin text-black/40 dark:text-white/40" data-icon="lucide:loader-2" data-width="14"></span>
</div>
<button className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded text-black/50 dark:text-white/50">
<span className="iconify" data-icon="lucide:star" data-width="14" strokeWidth="1.5"></span>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-lg overflow-hidden opacity-0 transition-opacity" id="progress-bar-container">
<div className="loading-bar w-full h-full bg-black dark:bg-white origin-left"></div>
</div>
</div>

<div className="flex items-center space-x-2 pl-2">

<button className="group relative px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all cursor-pointer" id="mica-toggle" onclick="toggleMica()">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)] transition-colors" id="mica-indicator"></div>
<span className="text-[10px] font-semibold tracking-wide uppercase text-black dark:text-white">Mica</span>
</div>
</button>

<button className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform" id="theme-toggle" onclick="toggleTheme()">
<span className="iconify block dark:hidden" data-icon="lucide:moon" data-width="14" strokeWidth="1.5"></span>
<span className="iconify hidden dark:block" data-icon="lucide:sun" data-width="14" strokeWidth="1.5"></span>
</button>
<button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 opacity-70 hover:opacity-100 text-black dark:text-white">
<span className="iconify" data-icon="lucide:more-vertical" data-width="18" strokeWidth="1.5"></span>
</button>
</div>
</div>

<div className="flex-1 w-full relative overflow-hidden transition-colors viewport-mica" id="viewport">

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-100 transition-opacity duration-500" id="home-content">

<div className="mb-8 relative group">
<div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 blur-3xl rounded-full opacity-50 dark:opacity-30 group-hover:opacity-70 transition-opacity"></div>
<svg className="w-24 h-24 text-black dark:text-white drop-shadow-2xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24">
<path d="M4 8l2-4 2 4"></path>
<path d="M16 8l2-4 2 4"></path>
<path d="M12 21c-4 0-7-3-7-8 0-4 2.5-6 7-6s7 2 7 6c0 5-3 8-7 8z"></path>
<path d="M9 13.5l1 1"></path>
<path d="M14 13.5l-1 1"></path>
</svg>
</div>
<h1 className="text-4xl tracking-tight font-semibold text-black dark:text-white mb-2 drop-shadow-sm">Exotic</h1>
<p className="text-sm text-black/60 dark:text-white/60 mb-8 tracking-wide font-medium">The Sinfully Fast Browser.</p>

<div className="w-full max-w-lg relative group">
<div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/0 to-black/5 dark:from-white/5 dark:via-white/0 dark:to-white/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

<input className="relative w-full py-4 px-6 rounded-2xl bg-white/80 dark:bg-[#111]/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-black/5 dark:border-white/5 text-lg text-black dark:text-white outline-none focus:ring-2 ring-black/5 dark:ring-white/10 transition-all placeholder:text-gray-400" placeholder="Search the web..." type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform shadow-lg">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>

<div className="mt-12 grid grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-black/5 dark:border-white/5 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
<span className="iconify text-black dark:text-white" data-icon="lucide:mail" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs text-black/70 dark:text-white/70 font-semibold shadow-black/10">Mail</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-black/5 dark:border-white/5 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
<span className="iconify text-black dark:text-white" data-icon="lucide:youtube" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs text-black/70 dark:text-white/70 font-semibold">Video</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-black/5 dark:border-white/5 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
<span className="iconify text-black dark:text-white" data-icon="lucide:image" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs text-black/70 dark:text-white/70 font-semibold">Design</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-black/5 dark:border-white/5 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
<span className="iconify text-black dark:text-white" data-icon="lucide:github" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs text-black/70 dark:text-white/70 font-semibold">Code</span>
</div>
</div>
</div>


<div className="w-full h-full hidden bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center transition-colors" id="website-frame">
<div className="animate-pulse flex flex-col items-center">
<span className="iconify text-gray-300 dark:text-gray-700 mb-4" data-icon="lucide:globe" data-width="64" strokeWidth="1"></span>
<p className="text-gray-400 dark:text-gray-600 text-sm">Simulating external content...</p>
</div>
</div>
</div>
</div>



    </>
  );
}
