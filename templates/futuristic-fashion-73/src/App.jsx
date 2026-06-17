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



        // ========== CONFIGURATION ==========
        const CONFIG = {
            STANDARD_PASSWORD: 'QREW_ACCESS',
            EXCLUSIVE_PASSWORD: 'QREW_EXCLUSIVE',
            EXCLUSIVE_PREORDER_PASSWORD: 'PREORDER_2024'
        };

        // Product Data from your image
        const PRODUCTS = [
            {
                id: 'P_001',
                name: 'WYPEL_PART_V2',
                origin: 'JP_BRAYANA',
                spec: 'PRODUCT_NONSULATION',
                price: 240,
                stock: true,
                exclusive: false,
                img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: 'P_002',
                name: 'STORAGE_TEE_RAN',
                origin: 'JP_BRAYANA',
                spec: '58%_NETINT_448g_NEWY',
                price: 180,
                stock: true,
                exclusive: false,
                img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: 'P_003',
                name: 'FIELD_MORE1_X',
                origin: 'JP_BRAYANA',
                spec: 'FIELD_SPEC',
                price: 420,
                stock: true,
                exclusive: true,
                img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: 'P_004',
                name: 'UTILITY_RAT_A',
                origin: 'JP_BRAYANA',
                spec: 'UTILITY_SPEC',
                price: 150,
                stock: true,
                exclusive: false,
                img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: 'P_005',
                name: 'PWRY_MODULE_H',
                origin: 'JP_BRAYANA',
                spec: 'MODULE_SPEC',
                price: 45,
                stock: false,
                exclusive: false,
                img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800'
            }
        ];

        // Exclusive Products
        const EXCLUSIVE_PRODUCTS = [
            {
                id: 'EX_001',
                name: 'QREML_VEST_MODULAR',
                origin: 'JP_BRAYANA',
                spec: '58%_NETINT_448g_NEWY',
                price: 249,
                stock: true,
                exclusive: true,
                img: 'https://images.unsplash.com/photo-1551028719-5d8f2b8b6342?auto=format&fit=crop&q=80&w=800',
                preorder: true
            }
        ];

        // ========== STATE MANAGEMENT ==========
        let currentModule = 'dashboard';
        let exclusiveAccess = false;
        let preorderAccess = false;

        // ========== DOM ELEMENTS ==========
        const terminalGate = document.getElementById('terminal-gate');
        const mainInterface = document.getElementById('main-interface');
        const gatePassword = document.getElementById('gate-password');
        const cursorBlink = document.getElementById('cursor-blink');
        const gateFeedback = document.getElementById('gate-feedback');
        const systemClock = document.getElementById('system-clock');
        const accessLevel = document.getElementById('access-level');
        const terminalCursor = document.getElementById('terminal-cursor');
        const exclusiveTab = document.getElementById('tab-exclusive');
        const exclusivePassword = document.getElementById('exclusive-password');
        const exclusiveFeedback = document.getElementById('exclusive-feedback');
        const moduleExclusive = document.getElementById('module-exclusive');
        const moduleExclusiveContent = document.getElementById('module-exclusive-content');

        // ========== INITIALIZATION ==========
        document.addEventListener('DOMContentLoaded', () => {
            initCustomCursor();
            initClock();
            renderDirectory();
            initLucideIcons();
        });

        // ========== CUSTOM CURSOR ==========
        function initCustomCursor() {
            document.addEventListener('mousemove', (e) => {
                const gridSize = 16;
                const x = Math.round(e.clientX / gridSize) * gridSize;
                const y = Math.round(e.clientY / gridSize) * gridSize;
                
                terminalCursor.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            // Hide cursor on input focus
            gatePassword.addEventListener('focus', () => {
                terminalCursor.style.display = 'none';
                cursorBlink.style.display = 'block';
            });
            
            gatePassword.addEventListener('blur', () => {
                terminalCursor.style.display = 'block';
                cursorBlink.style.display = 'none';
            });
        }

        // ========== SYSTEM CLOCK ==========
        function initClock() {
            function updateClock() {
                const now = new Date();
                systemClock.textContent = now.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            }
            setInterval(updateClock, 1000);
            updateClock();
        }

        // ========== TERMINAL GATE LOGIC ==========
        gatePassword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const password = gatePassword.value.trim();
                
                if (password === CONFIG.STANDARD_PASSWORD) {
                    grantAccess('STANDARD');
                } else if (password === CONFIG.EXCLUSIVE_PASSWORD) {
                    grantAccess('EXCLUSIVE');
                } else {
                    showGateFeedback('ACCESS_DENIED: INVALID_CREDENTIALS', 'error');
                    gatePassword.value = '';
                    shakeElement(terminalGate);
                }
            }
        });

        function showGateFeedback(message, type = 'info') {
            gateFeedback.innerHTML = `
                <div class="text-xs ${type === 'error' ? 'text-[#FF3131]' : 'text-[#00FF41]'}">
                    > ${message}
                </div>
            `;
        }

        function grantAccess(level) {
            gatePassword.disabled = true;
            
            if (level === 'EXCLUSIVE') {
                exclusiveAccess = true;
                showGateFeedback('ELEVATED_ACCESS_GRANTED', 'success');
                accessLevel.textContent = 'EXCLUSIVE';
                accessLevel.classList.add('text-[#00FF41]');
                
                // Unlock exclusive tab
                exclusiveTab.classList.remove('tab-restricted');
                exclusiveTab.classList.add('tab-restricted-unlocked');
                exclusiveTab.querySelector('i').setAttribute('data-lucide', 'unlock');
                lucide.createIcons();
            } else {
                showGateFeedback('STANDARD_ACCESS_GRANTED', 'success');
                accessLevel.textContent = 'STANDARD';
            }
            
            // Simulate loading sequence
            setTimeout(() => {
                showGateFeedback('INITIALIZING_SYSTEM...', 'info');
                
                setTimeout(() => {
                    showGateFeedback('LOADING_MODULES...', 'info');
                    
                    setTimeout(() => {
                        terminalGate.style.display = 'none';
                        mainInterface.classList.remove('hidden');
                        mainInterface.classList.add('flex');
                        
                        // Initialize default module
                        switchModule('dashboard');
                    }, 800);
                }, 800);
            }, 800);
        }

        // ========== MODULE NAVIGATION ==========
        function switchModule(moduleId) {
            // Update tab states
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('tab-active');
                if (!btn.classList.contains('tab-restricted') && !btn.classList.contains('tab-restricted-unlocked')) {
                    btn.classList.add('tab-inactive');
                }
            });
            
            const activeTab = document.getElementById(`tab-${moduleId}`);
            activeTab.classList.remove('tab-inactive');
            activeTab.classList.add('tab-active');
            
            // Hide all modules
            document.querySelectorAll('[id^="module-"]').forEach(module => {
                module.classList.add('hidden');
            });
            
            // Show active module
            const activeModule = document.getElementById(`module-${moduleId}`);
            activeModule.classList.remove('hidden');
            
            currentModule = moduleId;
            
            // Special handling for exclusive module
            if (moduleId === 'exclusive') {
                if (exclusiveAccess) {
                    moduleExclusive.classList.add('hidden');
                    moduleExclusiveContent.classList.remove('hidden');
                    renderExclusiveContent();
                } else {
                    moduleExclusive.classList.remove('hidden');
                    moduleExclusiveContent.classList.add('hidden');
                }
            }
        }

        // ========== EXCLUSIVE ACCESS LOGIC ==========
        function attemptExclusiveAccess() {
            const password = exclusivePassword.value.trim();
            
            if (password === CONFIG.EXCLUSIVE_PASSWORD) {
                exclusiveAccess = true;
                
                // Update UI
                exclusiveTab.classList.remove('tab-restricted');
                exclusiveTab.classList.add('tab-restricted-unlocked');
                exclusiveTab.querySelector('i').setAttribute('data-lucide', 'unlock');
                lucide.createIcons();
                
                // Show success feedback
                exclusiveFeedback.innerHTML = `
                    <div class="text-[#00FF41] text-xs">
                        ACCESS_GRANTED // ELEVATED_PERMISSIONS_ACTIVE
                    </div>
                `;
                
                // Switch to exclusive content
                setTimeout(() => {
                    moduleExclusive.classList.add('hidden');
                    moduleExclusiveContent.classList.remove('hidden');
                    renderExclusiveContent();
                }, 1000);
                
            } else if (password === CONFIG.EXCLUSIVE_PREORDER_PASSWORD) {
                exclusiveAccess = true;
                preorderAccess = true;
                
                exclusiveFeedback.innerHTML = `
                    <div class="text-[#00FF41] text-xs">
                        PREORDER_ACCESS_GRANTED // EXCLUSIVE_CONTENT_UNLOCKED
                    </div>
                `;
                
                setTimeout(() => {
                    moduleExclusive.classList.add('hidden');
                    moduleExclusiveContent.classList.remove('hidden');
                    renderExclusiveContent();
                }, 1000);
                
            } else {
                exclusiveFeedback.innerHTML = `
                    <div class="text-[#FF3131] text-xs">
                        ACCESS_DENIED // INVALID_CREDENTIALS
                    </div>
                `;
                exclusivePassword.value = '';
                shakeElement(moduleExclusive);
            }
        }

        // ========== DIRECTORY RENDERING ==========
        function renderDirectory() {
            const directoryList = document.getElementById('directory-list');
            let html = '';
            
            PRODUCTS.forEach(product => {
                const statusColor = product.stock ? 'text-[#00FF41]' : 'text-[#FF3131]';
                const statusText = product.stock ? 'IN_STOCK' : 'OUT_OF_STOCK';
                const exclusiveBadge = product.exclusive ? 
                    '<span class="text-[#FFB347] text-[10px] ml-2">[EXCLUSIVE]</span>' : '';
                
                html += `
                <div class="module-card p-4 hover:terminal-highlight cursor-pointer"
                     onmouseenter="updatePreview('${product.id}')">
                    <div class="flex items-center justify-between mb-2">
                        <div class="font-bold">${product.name}${exclusiveBadge}</div>
                        <div class="${statusColor} text-xs font-bold">${statusText}</div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <div class="text-[#666]">REF: ${product.id}</div>
                        <div class="text-[#967BB6]">$${product.price}.00</div>
                    </div>
                </div>
                `;
            });
            
            directoryList.innerHTML = html;
        }

        function renderExclusiveContent() {
            const container = document.querySelector('#module-exclusive-content .grid');
            let html = '';
            
            EXCLUSIVE_PRODUCTS.forEach(product => {
                const preorderBadge = product.preorder ? 
                    '<div class="text-[10px] text-[#FFB347] bg-black/50 px-2 py-1 inline-block mb-2">PREORDER_ACTIVE</div>' : '';
                
                html += `
                <div class="module-card p-4">
                    ${preorderBadge}
                    <div class="mb-3">
                        <h3 class="font-bold text-lg">${product.name}</h3>
                        <div class="text-xs text-[#666]">${product.id} // ${product.origin}</div>
                    </div>
                    
                    <div class="mb-4 text-sm">
                        <div class="text-[#666] mb-1">SPECIFICATION</div>
                        <div>${product.spec}</div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="text-lg font-bold text-[#00FF41]">$${product.price}.00</div>
                        ${product.preorder ? 
                            `<button class="text-xs px-4 py-2 border border-[#2D1E2D] hover:border-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all">
                                [PREORDER_NOW]
                            </button>` :
                            `<button class="text-xs px-4 py-2 border border-[#2D1E2D] hover:border-[#967BB6] hover:bg-[#967BB6] hover:text-black transition-all">
                                [REQUEST_ACCESS]
                            </button>`
                        }
                    </div>
                </div>
                `;
            });
            
            container.innerHTML = html;
        }

        // ========== PREVIEW SYSTEM ==========
        function updatePreview(productId) {
            const product = [...PRODUCTS, ...EXCLUSIVE_PRODUCTS].find(p => p.id === productId);
            if (!product) return;
            
            const placeholder = document.getElementById('preview-placeholder');
            const active = document.getElementById('preview-active');
            const actionBtn = document.getElementById('preview-action');
            
            placeholder.classList.add('hidden');
            active.classList.remove('hidden');
            
            document.getElementById('preview-image').src = product.img;
            document.getElementById('preview-title').textContent = product.name;
            document.getElementById('preview-id').textContent = product.id;
            document.getElementById('preview-origin').textContent = product.origin;
            document.getElementById('preview-spec').textContent = product.spec;
            document.getElementById('preview-price').textContent = `$${product.price}.00`;
            
            // Update action button based on product status
            if (product.exclusive && !exclusiveAccess) {
                actionBtn.textContent = '[ELEVATED_ACCESS_REQUIRED]';
                actionBtn.classList.add('opacity-50');
                actionBtn.disabled = true;
            } else if (product.preorder && preorderAccess) {
                actionBtn.textContent = '[PREORDER_NOW]';
                actionBtn.classList.remove('opacity-50');
                actionBtn.disabled = false;
            } else {
                actionBtn.textContent = product.stock ? '[REQUEST_ACCESS]' : '[OUT_OF_STOCK]';
                actionBtn.classList.remove('opacity-50');
                actionBtn.disabled = !product.stock;
            }
        }

        // ========== UTILITY FUNCTIONS ==========
        function shakeElement(element) {
            element.classList.add('animate-shake');
            setTimeout(() => element.classList.remove('animate-shake'), 300);
        }

        function logout() {
            const confirmation = confirm('TERMINATE_SESSION?');
            if (confirmation) {
                terminalGate.style.display = 'flex';
                mainInterface.classList.add('hidden');
                mainInterface.classList.remove('flex');
                gatePassword.disabled = false;
                gatePassword.value = '';
                gatePassword.focus();
                showGateFeedback('SESSION_TERMINATED', 'info');
                
                // Reset state
                exclusiveAccess = false;
                preorderAccess = false;
                exclusiveTab.classList.add('tab-restricted');
                exclusiveTab.classList.remove('tab-restricted-unlocked');
                exclusiveTab.querySelector('i').setAttribute('data-lucide', 'lock');
                lucide.createIcons();
                accessLevel.textContent = 'STANDARD';
                accessLevel.classList.remove('text-[#00FF41]');
            }
        }

        function initLucideIcons() {
            lucide.createIcons();
        }

        // Add CSS animation for shake
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                20%, 40%, 60%, 80% { transform: translateX(2px); }
            }
            .animate-shake {
                animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both;
            }
        `;
        document.head.appendChild(style);
    
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
      

<div className="grid-bg"></div>
<div className="scanlines"></div>
<div className="terminal-cursor" id="terminal-cursor"></div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]" id="terminal-gate">
<div className="password-gate w-full max-w-2xl p-8">
<div className="mb-6">
<div className="flex items-center gap-3 mb-2">
<div className="status-online animate-pulse"></div>
<div className="text-xs text-[#967BB6] tracking-widest">
                        QREW_SYSTEM_v6.2 // SECURE_BOOT // ENCRYPTED_CHANNEL
                    </div>
</div>
<div className="text-xs text-[#666] mb-4">
                    &gt; SYSTEM_INITIALIZED: 2024-05-20_04:32:17_UTC<br/>
                    &gt; ENTRY_POINT: TERMINAL_GATE<br/>
                    &gt; AUTHENTICATION_REQUIRED
                </div>
</div>
<div className="mb-6">
<div className="flex items-center text-lg font-bold">
<span className="text-[#D1D1D1] mr-2">root@qrew:~#</span>
<div className="flex-1 relative">
<input autocomplete="off" autofocus="" className="terminal-input w-full uppercase" id="gate-password" placeholder="ENTER_ACCESS_CODE" spellcheck="false" type="password"/>
<span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-5 bg-[#967BB6] animate-blink" id="cursor-blink"></span>
</div>
</div>
</div>
<div className="h-6" id="gate-feedback">

</div>
<div className="text-xs text-[#666] mt-8 pt-4 border-t border-[#2D1E2D]">
                &gt; SYSTEM_PROMPT: ENTER "QREW_ACCESS" FOR STANDARD_ENTRY<br/>
                &gt; ENTER "QREW_EXCLUSIVE" FOR RESTRICTED_ACCESS
            </div>
</div>
</div>

<div className="hidden h-full w-full flex-col" id="main-interface">

<header className="flex-none h-12 border-b border-[#2D1E2D] flex items-center justify-between px-6 bg-[#0A0A0A]">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#967BB6]"></div>
<span className="text-xs font-bold tracking-tight">QREW_SYSTEM</span>
</div>
<div className="text-xs text-[#666]">//</div>
<div className="text-xs">
<span className="text-[#666]">SESSION_ID:</span>
<span className="ml-1">ADMIN_${Date.now().toString().slice(-6)}</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="status-online"></div>
<span className="text-xs text-[#00FF41]">SECURE</span>
</div>
<div className="text-xs">
<span className="text-[#666]">TIME:</span>
<span className="ml-1 font-mono" id="system-clock">00:00:00</span>
</div>
<button className="text-xs text-[#666] hover:text-[#967BB6] transition-colors" onclick="logout()">
                    [LOGOUT]
                </button>
</div>
</header>

<nav className="flex-none flex border-b border-[#2D1E2D] bg-[#0A0A0A]">
<button className="tab-active px-6 py-3 text-xs font-bold transition-none" id="tab-dashboard" onclick="switchModule('dashboard')">
                [DASHBOARD]
            </button>
<button className="tab-inactive px-6 py-3 text-xs font-bold transition-none" id="tab-directory" onclick="switchModule('directory')">
                [PRODUCT_DIRECTORY]
            </button>
<button className="tab-restricted px-6 py-3 text-xs font-bold transition-none flex items-center gap-2" id="tab-exclusive" onclick="switchModule('exclusive')">
<i className="w-3 h-3" data-lucide="lock"></i>
                [QREW_EXCLUSIVE]
            </button>
<button className="tab-inactive px-6 py-3 text-xs font-bold transition-none" id="tab-system" onclick="switchModule('system')">
                [SYSTEM_INFO]
            </button>
<button className="tab-inactive px-6 py-3 text-xs font-bold transition-none" id="tab-admin" onclick="switchModule('admin')">
                [ADMIN_PANEL]
            </button>
</nav>

<main className="flex-1 overflow-hidden flex">

<div className="w-full md:w-2/3 h-full overflow-y-auto p-6">

<div className="h-full" id="module-dashboard">
<div className="mb-6">
<h2 className="text-lg font-bold mb-2">SYSTEM_DASHBOARD</h2>
<div className="text-xs text-[#666]">ACTIVE_SESSIONS: 1 | LAST_UPDATE: TODAY</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<div className="module-card p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-bold">INVENTORY_STATUS</h3>
<div className="status-online"></div>
</div>
<div className="text-xs text-[#666] mb-2">ACTIVE_PRODUCTS</div>
<div className="text-2xl font-bold">8</div>
</div>
<div className="module-card p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-bold">EXCLUSIVE_ACCESS</h3>
<div className="status-offline"></div>
</div>
<div className="text-xs text-[#666] mb-2">RESTRICTED_CONTENT</div>
<div className="text-2xl font-bold">LOCKED</div>
</div>
</div>
<div className="module-card p-4">
<h3 className="text-sm font-bold mb-4">RECENT_ACTIVITY</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span>SYSTEM_BOOT</span>
<span className="text-[#00FF41]">COMPLETE</span>
</div>
<div className="flex items-center justify-between text-xs">
<span>USER_AUTHENTICATION</span>
<span className="text-[#00FF41]">VERIFIED</span>
</div>
<div className="flex items-center justify-between text-xs">
<span>EXCLUSIVE_MODULE</span>
<span className="text-[#FF3131]">RESTRICTED</span>
</div>
</div>
</div>
</div>

<div className="hidden h-full" id="module-directory">
<div className="mb-6">
<h2 className="text-lg font-bold mb-2">PRODUCT_DIRECTORY</h2>
<div className="text-xs text-[#666]">REFERENCE_ID | NOMENCLATURE | STATUS | ACTION</div>
</div>
<div className="space-y-1" id="directory-list">

</div>
</div>

<div className="hidden h-full flex items-center justify-center" id="module-exclusive">
<div className="text-center max-w-md">
<i className="w-16 h-16 mx-auto mb-4 text-[#FF3131]" data-lucide="shield"></i>
<h3 className="text-xl font-bold mb-2">ACCESS_RESTRICTED</h3>
<p className="text-sm text-[#666] mb-6">
                            THIS_MODULE_REQUIRES_ELEVATED_PERMISSIONS.<br/>
                            ENTER_CREDENTIALS_TO_CONTINUE.
                        </p>
<div className="mb-4">
<div className="flex items-center justify-center gap-2 mb-2">
<span className="text-xs text-[#666]">root@qrew-exclusive:~#</span>
<input autocomplete="off" className="terminal-input flex-1 max-w-xs text-center" id="exclusive-password" placeholder="ENTER_EXCLUSIVE_CODE" type="password"/>
</div>
<button className="text-xs px-4 py-2 border border-[#2D1E2D] hover:border-[#FF3131] transition-colors" onclick="attemptExclusiveAccess()">
                                [REQUEST_ACCESS]
                            </button>
</div>
<div className="text-xs h-6" id="exclusive-feedback"></div>
</div>
</div>

<div className="hidden h-full" id="module-exclusive-content">
<div className="mb-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-bold mb-2">QREW_EXCLUSIVE</h2>
<div className="text-xs text-[#00FF41]">ACCESS_GRANTED: PREORDER_MODULE_ACTIVE</div>
</div>
<div className="flex items-center gap-2">
<div className="status-online"></div>
<span className="text-xs">SECURE_CHANNEL</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

</div>
</div>

<div className="hidden h-full" id="module-system">
<div className="mb-6">
<h2 className="text-lg font-bold mb-2">SYSTEM_INFORMATION</h2>
<div className="text-xs text-[#666]">QREW_SYSTEMS // UTILITY-FIRST_DESIGN_INITIATIVE</div>
</div>
<div className="module-card p-6">
<div className="text-sm leading-relaxed mb-6">
                            &gt; QREW_SYSTEMS IS A UTILITY-FIRST DESIGN INITIATIVE.<br/>
                            &gt; WE BUILD MODULAR APPAREL ARCHITECTURE FOR THE MODERN OPERATOR.<br/>
                            &gt; OUR PROTOCOLS PRIORITIZE DURABILITY, FUNCTION, AND AESTHETIC SILENCE.<br/>
                            &gt; ALL PRODUCTS ARE DEVELOPED UNDER STRICT QUALITY CONTROL PROTOCOLS.<br/>
                            &gt; ACCESS TO EXCLUSIVE CONTENT IS TIERED AND MONITORED.<br/>
                            &gt; END_OF_TRANSMISSION.
                        </div>
<div className="grid grid-cols-2 gap-6 text-xs">
<div>
<div className="text-[#666] mb-1">VERSION</div>
<div>v6.2_RELEASE</div>
</div>
<div>
<div className="text-[#666] mb-1">LAST_UPDATE</div>
<div>2024-05-20</div>
</div>
<div>
<div className="text-[#666] mb-1">ENCRYPTION</div>
<div className="text-[#00FF41]">ACTIVE</div>
</div>
<div>
<div className="text-[#666] mb-1">ACCESS_LEVEL</div>
<div id="access-level">STANDARD</div>
</div>
</div>
</div>
</div>

<div className="hidden h-full" id="module-admin">
<div className="mb-6">
<h2 className="text-lg font-bold mb-2">ADMINISTRATION_PANEL</h2>
<div className="text-xs text-[#666]">SYSTEM_CONTROL // ACCESS_MANAGEMENT</div>
</div>
<div className="module-card p-6">
<div className="mb-6">
<h3 className="text-sm font-bold mb-3">ACCESS_CONTROL</h3>
<div className="space-y-4">
<div>
<div className="text-xs text-[#666] mb-1">UPDATE_EXCLUSIVE_PASSWORD</div>
<div className="flex gap-2">
<input className="terminal-input flex-1 border border-[#2D1E2D] px-3 py-1" placeholder="NEW_PASSWORD" type="password"/>
<button className="text-xs px-3 py-1 border border-[#2D1E2D] hover:border-[#967BB6] transition-colors">
                                            [UPDATE]
                                        </button>
</div>
</div>
<div>
<div className="text-xs text-[#666] mb-1">MODULE_VISIBILITY</div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 text-xs">
<input checked="" type="checkbox"/>
<span>QREW_EXCLUSIVE</span>
</label>
<label className="flex items-center gap-2 text-xs">
<input checked="" type="checkbox"/>
<span>PREORDER_SYSTEM</span>
</label>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-bold mb-3">SYSTEM_LOGS</h3>
<div className="text-xs bg-black p-3 border border-[#2D1E2D] h-32 overflow-y-auto">
<div className="text-[#00FF41]">[04:32:17] SYSTEM_BOOT_COMPLETE</div>
<div className="text-[#00FF41]">[04:32:45] USER_AUTHENTICATED</div>
<div className="text-[#FF3131]">[04:33:10] EXCLUSIVE_ACCESS_DENIED</div>
<div className="text-[#967BB6]">[04:33:22] DIRECTORY_ACCESSED</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex w-1/3 flex-col border-l border-[#2D1E2D] bg-[#0A0A0A]">
<div className="flex-none h-10 border-b border-[#2D1E2D] flex items-center px-4">
<span className="text-xs text-[#666]">ASSET_PREVIEW // LIVE_FEED</span>
</div>
<div className="flex-1 flex flex-col" id="preview-container">
<div className="flex-1 flex flex-col items-center justify-center text-[#333]" id="preview-placeholder">
<i className="w-16 h-16 mb-3" data-lucide="monitor"></i>
<span className="text-xs">NO_ASSET_SELECTED</span>
</div>
<div className="hidden flex-1 flex-col" id="preview-active">
<div className="flex-1 bg-black relative overflow-hidden">
<img className="w-full h-full object-cover opacity-90" id="preview-image" src=""/>
<div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4">
<div className="text-xs text-[#967BB6]">LIVE_PREVIEW</div>
</div>
</div>
<div className="flex-none p-4 border-t border-[#2D1E2D]">
<h3 className="text-lg font-bold mb-2" id="preview-title"></h3>
<div className="grid grid-cols-2 gap-4 text-xs">
<div>
<div className="text-[#666] mb-1">REF_ID</div>
<div className="font-mono" id="preview-id"></div>
</div>
<div>
<div className="text-[#666] mb-1">ORIGIN</div>
<div id="preview-origin"></div>
</div>
<div>
<div className="text-[#666] mb-1">SPEC</div>
<div id="preview-spec"></div>
</div>
<div className="text-right">
<div className="text-[#666] mb-1">UNIT_COST</div>
<div className="text-lg font-bold text-[#00FF41]" id="preview-price"></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-[#2D1E2D]">
<button className="w-full text-xs py-2 border border-[#2D1E2D] hover:border-[#967BB6] hover:bg-[#967BB6] hover:text-black transition-all" id="preview-action">
                                    [REQUEST_ACCESS]
                                </button>
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
