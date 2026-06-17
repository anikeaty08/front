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



        // --- CONFIG & DATA ---
        const products = [
            { id: 'REF-8821', name: 'QREW_MODULAR_VEST', price: 240, stock: true, origin: 'JP_OKAYAMA', spec: '450g_HEAVY_COTTON', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-9902', name: 'HYPER_PANT_V2', price: 180, stock: true, origin: 'PT_LISBON', spec: '320g_TECH_TWILL', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-1029', name: 'SIGNAL_TEE_BLK', price: 65, stock: false, origin: 'US_LOS_ANGELES', spec: '210g_JERSEY', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-3391', name: 'FIELD_JACKET_X', price: 320, stock: true, origin: 'IT_MILAN', spec: '600g_CANVAS_WAX', img: 'https://images.unsplash.com/photo-1551028919-383718eccf3b?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-5501', name: 'UTILITY_BELT_A', price: 45, stock: true, origin: 'CN_SHENZHEN', spec: 'NYLON_WEBBING', img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-7720', name: 'PROXY_HOODIE_GL', price: 150, stock: true, origin: 'KR_SEOUL', spec: '480g_FRENCH_TERRY', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-1102', name: 'GHOST_SHELL_PARKA', price: 420, stock: true, origin: 'CA_VANCOUVER', spec: '3L_GORE_TEX', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000' },
            { id: 'REF-4402', name: 'DATA_LINK_CAP', price: 40, stock: true, origin: 'VN_HANOI', spec: 'COTTON_RIPSTOP', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000' },
        ];

        const missionText = "QREW_SYSTEMS IS A UTILITY-FIRST DESIGN INITIATIVE. > WE BUILD MODULAR APPAREL ARCHITECTURE FOR THE MODERN OPERATOR. > OUR PROTOCOLS PRIORITIZE DURABILITY, FUNCTION, AND AESTHETIC SILENCE. > END OF MESSAGE.";

        // --- CUSTOM CURSOR LOGIC ---
        const cursor = document.getElementById('custom-cursor');
        document.addEventListener('mousemove', (e) => {
            // Grid Snap Logic (16px grid)
            const gridSize = 16;
            const x = Math.round(e.clientX / gridSize) * gridSize;
            const y = Math.round(e.clientY / gridSize) * gridSize;
            
            cursor.style.transform = `translate(${x}px, ${y}px)`;
        });

        // --- CLOCK ---
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', { hour12: false });
        }
        setInterval(updateClock, 1000);
        updateClock();

        // --- GATE LOGIC ---
        const gateInput = document.getElementById('gate-input');
        const gateView = document.getElementById('gate-view');
        const mainInterface = document.getElementById('main-interface');
        const loadingBar = document.getElementById('gate-loading');
        const gateError = document.getElementById('gate-error');
        const blinker = document.getElementById('cursor-blink');

        gateInput.addEventListener('input', (e) => {
            // Character echo is handled natively by input, but we uppercase it
            gateInput.value = gateInput.value.toUpperCase();
        });

        gateInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                blinker.style.display = 'none'; // Stop blinking
                
                if (gateInput.value === 'QREW_ACCESS') {
                    // Success Sequence
                    gateInput.disabled = true;
                    gateError.classList.add('hidden');
                    loadingBar.classList.remove('hidden');
                    
                    // Fill loading bar
                    setTimeout(() => {
                        document.getElementById('loading-bar').style.width = '40%';
                    }, 100);
                    
                    setTimeout(() => {
                        document.getElementById('loading-bar').style.width = '100%';
                    }, 800);

                    // Shatter/Reveal
                    setTimeout(() => {
                        gateView.style.display = 'none';
                        mainInterface.classList.remove('hidden');
                        mainInterface.classList.add('flex');
                        
                        // Small delay for fade in
                        setTimeout(() => mainInterface.style.opacity = '1', 50);
                        
                        // Init
                        renderDirectory();
                        
                        // Unlock restricted badge logic could go here
                        const restrictedTab = document.getElementById('tab-restricted');
                        restrictedTab.querySelector('span').innerText = "[04_RESTRICTED_OPEN]";
                        restrictedTab.classList.remove('text-[#FF3131]');
                        restrictedTab.classList.add('text-[#967BB6]');
                        
                    }, 1500);

                } else {
                    // Fail Sequence
                    gateError.classList.remove('hidden');
                    document.body.classList.add('animate-shake');
                    setTimeout(() => document.body.classList.remove('animate-shake'), 150);
                    gateInput.value = '';
                    blinker.style.display = 'inline-block';
                }
            }
        });

        // --- TABS & TYPEWRITER ---
        let typewriterInterval;

        function switchTab(tabId) {
            // Reset Styles
            ['info', 'directory', 'account', 'restricted'].forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                const view = document.getElementById(`view-${t}`);
                
                // Reset View
                view.classList.add('hidden');
                
                // Reset Button Style (Inactive)
                btn.classList.remove('bg-[#967BB6]', 'text-black');
                if(t === 'restricted') {
                    // Keep red unless unlocked (simplified logic for now)
                    btn.classList.add('text-[#FF3131]', 'hover:bg-[#FF3131]'); 
                } else {
                    btn.classList.add('text-[#967BB6]', 'hover:bg-[#967BB6]');
                }
            });

            // Activate Target
            const activeBtn = document.getElementById(`tab-${tabId}`);
            const activeView = document.getElementById(`view-${tabId}`);
            
            activeView.classList.remove('hidden');
            
            // Set Active Style
            activeBtn.classList.remove('text-[#967BB6]', 'hover:bg-[#967BB6]', 'hover:text-black', 'text-[#FF3131]', 'hover:bg-[#FF3131]');
            activeBtn.classList.add('bg-[#967BB6]', 'text-black');

            // Specific Logic for Info Tab
            if (tabId === 'info') {
                startTypewriter();
            } else {
                clearInterval(typewriterInterval);
            }
        }

        function startTypewriter() {
            const el = document.getElementById('typewriter-text');
            el.innerText = '';
            let i = 0;
            clearInterval(typewriterInterval);
            
            typewriterInterval = setInterval(() => {
                el.innerText += missionText.charAt(i);
                i++;
                if (i > missionText.length - 1) clearInterval(typewriterInterval);
            }, 20); // 20ms per char
        }

        // --- DIRECTORY RENDERER ---
        function renderDirectory() {
            const list = document.getElementById('directory-list');
            let html = '';

            products.forEach(p => {
                const statusColor = p.stock ? 'text-[#00FF41]' : 'text-[#FF3131]';
                const statusText = p.stock ? 'IN_STOCK' : 'SOLD_OUT';
                
                html += `
                <div class="group grid grid-cols-12 gap-2 px-6 py-4 border-b border-[#1E1412] items-center text-xs hover:bg-[#967BB6] hover:text-black transition-none cursor-crosshair"
                     onmouseenter="updatePreview('${p.id}')">
                    <div class="col-span-2 font-mono opacity-70">${p.id}</div>
                    <div class="col-span-6 font-bold tracking-tight">${p.name}</div>
                    <div class="col-span-2 ${statusColor} group-hover:text-black font-bold">${statusText}</div>
                    <div class="col-span-2 text-right">
                        <button class="border border-[#1E1412] px-2 py-1 group-hover:border-black group-hover:bg-black group-hover:text-[#967BB6]">
                            [REQ]
                        </button>
                    </div>
                </div>
                `;
            });
            list.innerHTML = html;
        }

        function updatePreview(id) {
            const p = products.find(x => x.id === id);
            if (!p) return;

            const placeholder = document.getElementById('preview-placeholder');
            const active = document.getElementById('preview-active');
            
            placeholder.classList.add('hidden');
            active.classList.remove('hidden');
            active.classList.add('flex');

            document.getElementById('preview-img').src = p.img;
            document.getElementById('preview-title').innerText = p.name;
            document.getElementById('preview-origin').innerText = p.origin;
            document.getElementById('preview-spec').innerText = p.spec;
            document.getElementById('preview-price').innerText = '$' + p.price + '.00';
        }

        // Initialize Lucide Icons
        lucide.createIcons();

    
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
      

<div className="scanlines"></div>
<div id="custom-cursor"></div>

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A]" id="gate-view">
<div className="w-full max-w-lg p-8 border border-[#1E1412]">
<div className="mb-6 text-[#967BB6] text-xs tracking-widest">
                QREW_OS_KERNEL_v6.0 <br/>
                SECURE_BOOT_SEQUENCE_INITIATED...
            </div>
<div className="flex flex-col gap-2 font-bold text-lg">
<div className="flex items-center text-[#D1D1D1]">
<span className="mr-2">C:\ADMIN\RESOURCES&gt;</span>
<input autocomplete="off" autofocus="" className="bg-transparent outline-none border-none text-[#967BB6] w-full uppercase caret-transparent" id="gate-input" spellcheck="false" type="text"/>
<span className="w-2.5 h-5 bg-[#967BB6] animate-blink inline-block -ml-1" id="cursor-blink"></span>
</div>
</div>
<div className="mt-4 hidden" id="gate-loading">
<div className="text-[#00FF41] text-xs mb-1">DECRYPTING...</div>
<div className="w-full h-4 border border-[#1E1412] p-0.5">
<div className="h-full bg-[#967BB6] w-0 transition-all duration-1000 ease-linear" id="loading-bar"></div>
</div>
</div>
<div className="mt-4 text-[#FF3131] text-xs hidden" id="gate-error">
                ACCESS_DENIED: INVALID_CREDENTIALS
            </div>
</div>
</div>

<div className="hidden flex-col h-full w-full opacity-0" id="main-interface">

<header className="flex-none h-12 border-b border-[#1E1412] flex items-center justify-between px-4 bg-[#0A0A0A] select-none">

<div className="w-1/3 cursor-pointer hover:text-[#967BB6]" onclick="window.location.reload()">
<span className="text-[#666666] text-xs">SYS_ID:</span>
<span className="font-bold tracking-tight">QREW_MK_IV</span>
</div>

<div className="w-1/3 flex justify-center items-center gap-2">
<span className="text-[#666666] text-xs">SECURE_CONNECTION:</span>
<span className="text-[#00FF41] font-bold">[ACTIVE]</span>
<div className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></div>
</div>

<div className="w-1/3 flex justify-end">
<span className="text-[#666666] text-xs mr-2">SESSION_TIMER:</span>
<span className="font-bold tabular-nums" id="clock">00:00:00</span>
</div>
</header>

<nav className="flex-none flex flex-col md:flex-row border-b border-[#1E1412] bg-[#0A0A0A]">

<button className="flex-1 py-3 border-r border-b md:border-b-0 border-[#1E1412] text-xs font-bold text-[#967BB6] hover:bg-[#967BB6] hover:text-black transition-none text-left px-4" id="tab-info" onclick="switchTab('info')">
                [01_INFO]
            </button>
<button className="flex-1 py-3 border-r border-b md:border-b-0 border-[#1E1412] text-xs font-bold bg-[#967BB6] text-black transition-none text-left px-4" id="tab-directory" onclick="switchTab('directory')">
                [02_DIRECTORY]
            </button>
<button className="flex-1 py-3 border-r border-b md:border-b-0 border-[#1E1412] text-xs font-bold text-[#967BB6] hover:bg-[#967BB6] hover:text-black transition-none text-left px-4" id="tab-account" onclick="switchTab('account')">
                [03_ACCOUNT]
            </button>
<button className="flex-1 py-3 border-b md:border-b-0 border-[#1E1412] text-xs font-bold text-[#FF3131] hover:bg-[#FF3131] hover:text-black transition-none text-left px-4 flex justify-between items-center group" id="tab-restricted" onclick="switchTab('restricted')">
<span>[04_RESTRICTED]</span>
<i className="w-3 h-3 group-hover:text-black" data-lucide="lock"></i>
</button>
</nav>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

<div className="w-full md:w-[65%] h-full border-r border-[#1E1412] bg-[#0A0A0A] flex flex-col relative z-10">

<div className="flex flex-col h-full" id="view-directory">

<div className="grid grid-cols-12 gap-2 px-6 py-3 border-b border-[#1E1412] text-[10px] text-[#666666] tracking-wider uppercase bg-[#0A0A0A]">
<div className="col-span-2">REF_ID</div>
<div className="col-span-6">NOMENCLATURE</div>
<div className="col-span-2">STATUS</div>
<div className="col-span-2 text-right">ACTION</div>
</div>

<div className="overflow-y-auto p-0 scrollbar-hide" id="directory-list">

</div>
</div>

<div className="hidden p-8 md:p-12 overflow-y-auto" id="view-info">
<h1 className="text-2xl mb-6 text-[#D1D1D1] font-bold">MISSION_STATEMENT</h1>
<div className="text-[#967BB6] text-sm leading-relaxed max-w-prose font-medium" id="typewriter-text"></div>
</div>

<div className="hidden flex flex-col items-center justify-center h-full text-[#FF3131]" id="view-restricted">
<i className="w-16 h-16 mb-4 animate-pulse" data-lucide="shield-alert"></i>
<h2 className="text-lg font-bold tracking-widest">CLEARANCE_LEVEL_3_REQUIRED</h2>
<p className="text-xs text-[#666666] mt-2">BIOMETRIC_SCAN_FAILED</p>
</div>

<div className="hidden p-12" id="view-account">
<div className="border border-[#1E1412] p-6 max-w-md">
<h3 className="text-[#967BB6] mb-4 text-xs font-bold">[ USER_PROFILE ]</h3>
<div className="grid grid-cols-2 gap-4 text-xs">
<div className="text-[#666666]">USERNAME:</div>
<div>ADMIN_GUEST</div>
<div className="text-[#666666]">LAST_LOGIN:</div>
<div>TODAY</div>
<div className="text-[#666666]">PERMISSIONS:</div>
<div>READ_ONLY</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex w-[35%] flex-col bg-[#0A0A0A] border-l border-[#1E1412] absolute right-0 top-0 bottom-0 z-0">
<div className="flex-none h-8 border-b border-[#1E1412] flex items-center px-4">
<span className="text-[10px] text-[#666666] tracking-widest">ASSET_PREVIEW_WINDOW</span>
</div>
<div className="flex-1 flex flex-col relative overflow-hidden" id="preview-container">

<div className="absolute inset-0 flex flex-col items-center justify-center text-[#333]" id="preview-placeholder">
<i className="w-24 h-24 stroke-[0.5]" data-lucide="crosshair"></i>
<span className="mt-4 text-[10px]">AWAITING_TARGET_SELECTION</span>
</div>

<div className="absolute inset-0 hidden flex-col" id="preview-active">
<div className="relative flex-1 bg-[#050505] overflow-hidden border-b border-[#1E1412]">

<div className="absolute inset-0 z-20 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(#1E1412 1px, transparent 1px), linear-gradient(90deg, #1E1412 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
<img alt="Preview" className="w-full h-full object-cover digital-scan opacity-80" id="preview-img" src=""/>

<div className="absolute top-4 left-4 z-30 bg-black/50 backdrop-blur px-2 py-1 border border-[#967BB6]">
<span className="text-[10px] text-[#967BB6]">LIVE_FEED</span>
</div>
</div>
<div className="h-1/3 p-6 bg-[#0E0E0E] flex flex-col justify-between">
<div>
<h3 className="text-xl text-white font-bold tracking-tight mb-1" id="preview-title"></h3>
<div className="text-[10px] text-[#967BB6]">ORIGIN: <span className="text-[#D1D1D1]" id="preview-origin"></span></div>
</div>
<div className="grid grid-cols-2 gap-4 text-xs mt-4 pt-4 border-t border-[#1E1412] border-dashed">
<div>
<span className="block text-[#666666] text-[10px] mb-1">MATERIAL_SPEC</span>
<span className="text-[#D1D1D1]" id="preview-spec"></span>
</div>
<div className="text-right">
<span className="block text-[#666666] text-[10px] mb-1">UNIT_COST</span>
<span className="text-[#00FF41] font-bold text-lg" id="preview-price"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
