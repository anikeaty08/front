import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Store Page Templates - Added Tailwind classes for responsiveness (e.g. sm:grid-cols-2)
        const pages = {
            checkout: `
                <div class="editable-element rounded-xl group relative p-1" onclick="selectElement(this, 'checkout')">
                    <div class="w-full rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col bg-[var(--bg-surface)] shadow-sm pointer-events-none">
                        <div class="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-surface)]">
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 text-[var(--text-secondary)]"><i data-lucide="arrow-left" class="w-5 h-5"></i></div>
                                <h1 class="text-lg font-semibold tracking-tight text-[var(--text-primary)]">Secure Checkout</h1>
                            </div>
                            <div class="flex gap-1.5">
                                <div class="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                                <div class="w-2 h-2 rounded-full bg-[var(--border-subtle)]"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-5 bg-[var(--bg-surface)]">
                            <div class="space-y-1 mb-4">
                                <h2 class="text-base font-medium text-[var(--text-primary)]">Shipping Information</h2>
                                <p class="text-xs text-[var(--text-secondary)]">Where should we send your order?</p>
                            </div>
                            <div class="space-y-3 opacity-80">
                                <div class="h-9 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-panel)] flex items-center px-3 text-xs text-[var(--text-muted)]">Full Name</div>
                                <div class="h-9 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-panel)] flex items-center px-3 text-xs text-[var(--text-muted)]">Email Address</div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div class="h-9 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-panel)] flex items-center px-3 text-xs text-[var(--text-muted)]">City</div>
                                    <div class="h-9 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-panel)] flex items-center px-3 text-xs text-[var(--text-muted)]">Zip Code</div>
                                </div>
                            </div>

                            <!-- Order Summary Mock -->
                            <div class="bg-[var(--bg-panel)] rounded-lg p-3 border border-[var(--border-subtle)]">
                                <div class="flex justify-between items-center text-xs mb-2">
                                    <span class="font-medium">Total</span>
                                    <span class="font-bold">$47.00</span>
                                </div>
                            </div>

                            <!-- Bump Mock -->
                            <div class="border-2 border-dashed border-[var(--border-active)] bg-[var(--bg-root)] p-3 rounded-lg flex items-start gap-2">
                                <input type="checkbox" class="mt-1" />
                                <div>
                                    <div class="text-xs font-bold text-red-500">Yes! Add Order Bump</div>
                                    <div class="text-[10px] text-[var(--text-secondary)] leading-tight mt-1">Get the expedited shipping for just $9 extra.</div>
                                </div>
                            </div>

                            <div class="pt-2">
                                <div class="w-full bg-[var(--text-primary)] h-10 rounded-lg flex items-center justify-center text-white text-sm font-medium shadow-md">Complete Order</div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            upsell: `
                <div class="w-full h-1 bg-yellow-400 mb-6 rounded-full"></div>
                <div class="editable-element text-center mb-6" onclick="selectElement(this, 'text')">
                    <span class="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2 block">Wait! Special Offer</span>
                    <h1 class="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Add This To Your Order?</h1>
                    <p class="text-sm text-[var(--text-secondary)] mt-2">Get the premium pack for 50% off. Only available on this page.</p>
                </div>
                
                <div class="editable-element aspect-video bg-[var(--bg-panel)] rounded-lg border border-[var(--border-subtle)] flex items-center justify-center mb-6 relative overflow-hidden" onclick="selectElement(this, 'video')">
                    <div class="w-12 h-12 rounded-full bg-[var(--bg-surface)] shadow-lg flex items-center justify-center text-[var(--text-primary)]">
                        <i data-lucide="play" class="w-5 h-5 ml-1"></i>
                    </div>
                </div>

                <div class="editable-element bg-[var(--bg-panel)] rounded-xl p-6 border border-dashed border-[var(--border-subtle)] mb-6" onclick="selectElement(this, 'box')">
                    <div class="flex items-start gap-3">
                        <div class="mt-1 text-green-500"><i data-lucide="check" class="w-4 h-4"></i></div>
                        <p class="text-xs text-[var(--text-primary)]">Instant upgrade to Premium Support.</p>
                    </div>
                    <div class="flex items-start gap-3 mt-3">
                        <div class="mt-1 text-green-500"><i data-lucide="check" class="w-4 h-4"></i></div>
                        <p class="text-xs text-[var(--text-primary)]">3 Extra templates included.</p>
                    </div>
                </div>

                <div class="editable-element space-y-3" onclick="selectElement(this, 'button')">
                    <button class="w-full bg-[var(--accent)] hover:bg-blue-700 text-white h-12 rounded-lg text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all pointer-events-none">
                        <span>Yes, Add to Order</span>
                        <span class="bg-blue-800/30 px-1.5 py-0.5 rounded text-xs">+$47.00</span>
                    </button>
                    <button class="w-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline text-xs py-2 transition-colors pointer-events-none">
                        No thanks, I'll pass on this offer
                    </button>
                </div>
            `,
            downsell: `
                 <div class="editable-element text-center mb-6" onclick="selectElement(this, 'text')">
                    <span class="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2 block">One Last Chance</span>
                    <h1 class="text-xl font-semibold tracking-tight text-[var(--text-primary)]">What if we split the payments?</h1>
                    <p class="text-sm text-[var(--text-secondary)] mt-2">Get the same access, but pay over 3 months.</p>
                </div>
                <div class="editable-element bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-6 mb-6 shadow-sm" onclick="selectElement(this, 'box')">
                    <div class="flex justify-between items-center border-b border-[var(--border-subtle)] pb-4 mb-4">
                        <span class="text-sm font-medium">Payment Plan</span>
                        <span class="text-lg font-bold">$17 <span class="text-xs text-[var(--text-muted)] font-normal">/ month</span></span>
                    </div>
                    <ul class="space-y-2 text-xs text-[var(--text-secondary)]">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-[var(--success)]"></i> Today's Payment: $17</li>
                        <li class="flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i> Next Payment: 30 days</li>
                    </ul>
                </div>
            `,
            thankyou: `
                <div class="flex flex-col items-center justify-center text-center mt-12 mb-8 editable-element" onclick="selectElement(this, 'text')">
                    <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <i data-lucide="check" class="w-8 h-8"></i>
                    </div>
                    <h1 class="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Order Confirmed!</h1>
                    <p class="text-sm text-[var(--text-secondary)] mt-2 max-w-[280px]">Thank you for your purchase. We've sent a receipt to your email.</p>
                </div>

                <div class="editable-element bg-[var(--bg-panel)] rounded-xl border border-[var(--border-subtle)] p-5 mb-6" onclick="selectElement(this, 'box')">
                    <div class="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-4 border-b border-[var(--border-subtle)] pb-2">
                        <span>Order #4920</span>
                        <span>Today</span>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-[var(--bg-surface)] rounded border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)]"><i data-lucide="box" class="w-4 h-4"></i></div>
                                <div class="text-left">
                                    <div class="text-xs font-medium text-[var(--text-primary)]">Premium Pack</div>
                                    <div class="text-[10px] text-[var(--text-muted)]">Digital Product</div>
                                </div>
                            </div>
                            <span class="text-xs font-medium text-[var(--text-primary)]">$97.00</span>
                        </div>
                         <div class="flex justify-between items-center pt-2 border-t border-[var(--border-subtle)]">
                            <span class="text-xs font-medium text-[var(--text-primary)]">Total</span>
                            <span class="text-sm font-bold text-[var(--text-primary)]">$97.00</span>
                        </div>
                    </div>
                </div>

                <div class="editable-element" onclick="selectElement(this, 'button')">
                    <button class="w-full bg-[var(--bg-surface)] hover:bg-[var(--bg-panel)] text-[var(--text-primary)] border border-[var(--border-subtle)] h-10 rounded-lg text-xs font-medium shadow-sm transition-all pointer-events-none">
                        Download Invoice
                    </button>
                </div>
            `
        };

        const canvas = document.getElementById('page-canvas');
        let selectedElement = null;

        // --- History State Management (Undo/Redo) ---
        const maxHistory = 20;
        let historyStack = [];
        let historyIndex = -1;
        let isNavigatingHistory = false;

        function saveState() {
            if (isNavigatingHistory) return;

            // Remove any future history if we are in the middle of the stack
            if (historyIndex < historyStack.length - 1) {
                historyStack = historyStack.slice(0, historyIndex + 1);
            }

            historyStack.push(canvas.innerHTML);
            if (historyStack.length > maxHistory) {
                historyStack.shift();
            } else {
                historyIndex++;
            }
            updateUndoRedoButtons();
        }

        function undo() {
            if (historyIndex > 0) {
                isNavigatingHistory = true;
                historyIndex--;
                canvas.innerHTML = historyStack[historyIndex];
                loadIcons(); // Re-render icons
                updateUndoRedoButtons();
                isNavigatingHistory = false;
                
                // Deselect elements on undo
                selectedElement = null;
                document.getElementById('prop-empty').classList.remove('hidden');
                document.getElementById('prop-content').classList.add('hidden');
            }
        }

        function redo() {
            if (historyIndex < historyStack.length - 1) {
                isNavigatingHistory = true;
                historyIndex++;
                canvas.innerHTML = historyStack[historyIndex];
                loadIcons(); // Re-render icons
                updateUndoRedoButtons();
                isNavigatingHistory = false;
            }
        }

        function updateUndoRedoButtons() {
            const btnUndo = document.getElementById('btn-undo');
            const btnRedo = document.getElementById('btn-redo');
            
            btnUndo.disabled = historyIndex <= 0;
            btnRedo.disabled = historyIndex >= historyStack.length - 1;
        }

        // --- Viewport Management (PC/Tablet/Mobile) ---
        function setView(view) {
            const btns = document.querySelectorAll('.view-btn');
            btns.forEach(btn => btn.classList.remove('active'));
            document.getElementById(`view-${view}`).classList.add('active');

            // Reset width classes
            canvas.style.maxWidth = '';
            canvas.style.width = '';

            if (view === 'desktop') {
                canvas.style.width = '100%';
                canvas.style.maxWidth = '1024px'; // max-w-5xl equivalent
            } else if (view === 'tablet') {
                canvas.style.width = '768px';
            } else if (view === 'mobile') {
                canvas.style.width = '375px';
            }
        }

        function loadIcons() { lucide.createIcons(); }

        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('theme-icon');
            if(document.body.classList.contains('dark-mode')) {
                icon.setAttribute('data-lucide', 'sun');
            } else {
                icon.setAttribute('data-lucide', 'moon');
            }
            loadIcons();
        }

        // --- Simplified Modern Spacing Control (Input Grid) ---
        const spacingControl = `
            <div class="p-4 border-b border-[var(--border-subtle)]">
                <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Spacing</h4>
                
                <!-- Margin Control -->
                <div class="mb-4">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-medium text-[var(--text-secondary)]">Margin</span>
                        <div class="flex gap-1">
                             <span class="text-[9px] text-[var(--text-muted)] bg-[var(--bg-panel)] px-1 rounded border border-[var(--border-subtle)]">px</span>
                        </div>
                    </div>
                    
                    <!-- Vertical (Top/Bottom) -->
                    <div class="grid grid-cols-2 gap-2 mb-2">
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <i data-lucide="arrow-up" class="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"></i>
                            </div>
                            <input type="text" value="24" class="block w-full pl-7 pr-2 py-1.5 text-xs bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded hover:border-[var(--border-active)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-right text-[var(--text-primary)] font-medium">
                        </div>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <i data-lucide="arrow-down" class="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"></i>
                            </div>
                            <input type="text" value="24" class="block w-full pl-7 pr-2 py-1.5 text-xs bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded hover:border-[var(--border-active)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-right text-[var(--text-primary)] font-medium">
                        </div>
                    </div>

                    <!-- Horizontal (Left/Right) -->
                    <div class="grid grid-cols-2 gap-2">
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <i data-lucide="arrow-left" class="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"></i>
                            </div>
                            <input type="text" value="Auto" class="block w-full pl-7 pr-2 py-1.5 text-xs bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded hover:border-[var(--border-active)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-right text-[var(--text-secondary)] font-medium">
                        </div>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <i data-lucide="arrow-right" class="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"></i>
                            </div>
                            <input type="text" value="Auto" class="block w-full pl-7 pr-2 py-1.5 text-xs bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded hover:border-[var(--border-active)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-right text-[var(--text-secondary)] font-medium">
                        </div>
                    </div>
                </div>

                <!-- Padding Control -->
                <div class="mb-1">
                     <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-medium text-[var(--text-secondary)]">Padding</span>
                    </div>
                    <div class="grid grid-cols-1 gap-2">
                         <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <i data-lucide="maximize" class="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"></i>
                            </div>
                            <input type="text" value="16" class="block w-full pl-7 pr-2 py-1.5 text-xs bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded hover:border-[var(--border-active)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-right text-[var(--text-primary)] font-medium">
                            <div class="absolute inset-y-0 right-7 flex items-center pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                                 <span class="text-[10px] text-[var(--text-muted)]">All</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // --- Templates ---
        const propertiesTemplates = {
            text: `
                <div class="p-4 border-b border-[var(--border-subtle)]">
                    <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Typography</h4>
                    
                    <!-- Font Size -->
                    <div class="mb-5">
                        <div class="flex justify-between mb-2">
                             <label class="text-[10px] text-[var(--text-secondary)] font-medium">Font size</label>
                             <i data-lucide="ban" class="w-3 h-3 text-[var(--text-muted)] opacity-50"></i>
                        </div>
                        <div class="flex items-center gap-3">
                            <input type="range" min="10" max="100" value="70" class="flex-1 h-1 bg-[var(--border-subtle)] rounded-lg appearance-none cursor-pointer">
                            <input type="number" value="70" class="w-12 h-7 rounded border border-[var(--border-subtle)] bg-[var(--input-bg)] text-center text-xs focus:border-[var(--accent)] focus:outline-none number-input-controls">
                        </div>
                    </div>

                    <!-- Line Height -->
                    <div class="mb-5">
                         <div class="flex justify-between mb-2">
                             <label class="text-[10px] text-[var(--text-secondary)] font-medium">Line height</label>
                             <i data-lucide="ban" class="w-3 h-3 text-[var(--text-muted)] opacity-50"></i>
                        </div>
                        <div class="flex items-center gap-3">
                            <input type="range" min="10" max="150" value="85" class="flex-1 h-1 bg-[var(--border-subtle)] rounded-lg appearance-none cursor-pointer">
                            <input type="number" value="85" class="w-12 h-7 rounded border border-[var(--border-subtle)] bg-[var(--input-bg)] text-center text-xs focus:border-[var(--accent)] focus:outline-none number-input-controls">
                        </div>
                    </div>

                    <!-- Font Type -->
                    <div class="mb-5">
                        <label class="text-[10px] text-[var(--text-secondary)] font-medium mb-2 block">Font type</label>
                        <div class="relative">
                            <select class="w-full h-9 rounded border border-[var(--border-subtle)] bg-[var(--input-bg)] px-3 text-xs appearance-none focus:border-[var(--accent)] focus:outline-none">
                                <option>Inter</option>
                                <option>Oxygen</option>
                                <option>Roboto</option>
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-3 top-2.5 w-3.5 h-3.5 text-[var(--text-muted)] pointer-events-none"></i>
                        </div>
                    </div>

                    <!-- Letter Spacing -->
                    <div class="mb-2">
                        <div class="flex justify-between mb-2">
                             <label class="text-[10px] text-[var(--text-secondary)] font-medium">Letter spacing</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <input type="range" min="-5" max="20" value="0" class="flex-1 h-1 bg-[var(--border-subtle)] rounded-lg appearance-none cursor-pointer">
                            <input type="number" value="0" class="w-12 h-7 rounded border border-[var(--border-subtle)] bg-[var(--input-bg)] text-center text-xs focus:border-[var(--accent)] focus:outline-none number-input-controls">
                        </div>
                    </div>
                </div>
            ` + spacingControl,

            // --- Enhanced Checkout Properties ---
            checkout: `
                <div class="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-panel)]">
                    <div class="flex items-center gap-2 text-[var(--accent)] font-medium text-xs">
                        <i data-lucide="settings-2" class="w-4 h-4"></i>
                        Checkout Settings
                    </div>
                </div>

                <!-- Input Fields Manager -->
                <div class="p-4 border-b border-[var(--border-subtle)]">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Input Fields</h4>
                        <button class="text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"><i data-lucide="plus-circle" class="w-4 h-4"></i></button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between bg-[var(--bg-panel)] p-2 rounded border border-[var(--border-subtle)]">
                            <span class="text-xs text-[var(--text-primary)]">Full Name</span>
                            <div class="flex gap-2">
                                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-primary)]"></i>
                                <i data-lucide="eye" class="w-3.5 h-3.5 text-[var(--text-primary)] cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between bg-[var(--bg-panel)] p-2 rounded border border-[var(--border-subtle)]">
                            <span class="text-xs text-[var(--text-primary)]">Email Address</span>
                            <div class="flex gap-2">
                                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-primary)]"></i>
                                <i data-lucide="eye" class="w-3.5 h-3.5 text-[var(--text-primary)] cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between bg-[var(--bg-panel)] p-2 rounded border border-[var(--border-subtle)]">
                            <span class="text-xs text-[var(--text-primary)]">Phone Number</span>
                             <div class="flex gap-2">
                                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-primary)]"></i>
                                <i data-lucide="eye-off" class="w-3.5 h-3.5 text-[var(--text-muted)] cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <button class="w-full mt-3 text-xs border border-dashed border-[var(--border-active)] py-2 rounded text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                        + Add Custom Field
                    </button>
                </div>

                <!-- Styling -->
                <div class="p-4 border-b border-[var(--border-subtle)]">
                    <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Styling</h4>
                    <div class="grid grid-cols-2 gap-3 mb-4">
                        <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Accent</label>
                            <div class="h-8 w-full bg-[var(--accent)] rounded border border-[var(--border-subtle)] cursor-pointer shadow-sm"></div>
                        </div>
                        <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Background</label>
                            <div class="h-8 w-full bg-[var(--bg-surface)] rounded border border-[var(--border-subtle)] cursor-pointer shadow-sm"></div>
                        </div>
                    </div>
                    <div class="space-y-3">
                         <div>
                            <div class="flex justify-between mb-1"><label class="text-[10px] text-[var(--text-secondary)]">Corner Radius</label><span class="text-[10px] text-[var(--text-muted)]">8px</span></div>
                            <input type="range" class="w-full h-1 bg-[var(--border-subtle)] rounded-lg appearance-none cursor-pointer">
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                 <div class="p-4 border-b border-[var(--border-subtle)]">
                    <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Order Summary</h4>
                    <div class="space-y-3">
                        <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Title</label>
                            <input type="text" value="Order Summary" class="w-full custom-input rounded py-1.5 px-2 text-xs">
                        </div>
                         <div class="flex items-center justify-between">
                            <span class="text-xs text-[var(--text-primary)]">Show Product Images</span>
                            <div class="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle-img" class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[var(--border-subtle)] appearance-none cursor-pointer transition-all duration-300"/>
                                <label for="toggle-img" class="toggle-label block overflow-hidden h-4 rounded-full bg-[var(--border-subtle)] cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bump Offer -->
                <div class="p-4 border-b border-[var(--border-subtle)] bg-blue-50/50 dark:bg-blue-900/10">
                    <div class="flex items-center justify-between mb-3">
                         <div class="flex items-center gap-2">
                             <i data-lucide="zap" class="w-3 h-3 text-yellow-500 fill-current"></i>
                             <h4 class="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">Order Bump</h4>
                         </div>
                        <div class="relative inline-block w-8 align-middle select-none">
                            <input type="checkbox" checked class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[var(--border-subtle)] appearance-none cursor-pointer transition-all duration-300 top-0"/>
                            <label class="toggle-label block overflow-hidden h-4 rounded-full bg-[var(--border-subtle)] cursor-pointer"></label>
                        </div>
                    </div>
                    
                    <div class="space-y-3">
                         <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Headline</label>
                            <input type="text" value="Yes! Add Order Bump" class="w-full custom-input rounded py-1.5 px-2 text-xs font-semibold text-red-500">
                        </div>
                        <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Price</label>
                            <div class="relative">
                                <span class="absolute left-2 top-1.5 text-xs text-[var(--text-muted)]">$</span>
                                <input type="text" value="9.00" class="w-full custom-input rounded py-1.5 pl-5 pr-2 text-xs">
                            </div>
                        </div>
                        <div>
                            <label class="text-[10px] text-[var(--text-secondary)] block mb-1">Description</label>
                            <textarea class="w-full custom-input rounded p-2 text-xs h-16 resize-none">Get the expedited shipping for just $9 extra.</textarea>
                        </div>
                    </div>
                </div>
            ` + spacingControl,

            video: `
                <div class="p-4 border-b border-[var(--border-subtle)]">
                    <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Video Source</h4>
                    <input type="text" value="https://vimeo.com/12345" class="w-full custom-input rounded py-1.5 px-2 text-xs mb-3">
                    <div class="flex items-center justify-between py-1">
                        <span class="text-xs text-[var(--text-primary)]">Autoplay</span>
                        <div class="relative inline-block w-8 align-middle select-none">
                            <input type="checkbox" class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[var(--border-subtle)] appearance-none cursor-pointer transition-all duration-300 top-0"/>
                            <label class="toggle-label block overflow-hidden h-4 rounded-full bg-[var(--border-subtle)] cursor-pointer"></label>
                        </div>
                    </div>
                </div>
            ` + spacingControl,
            
            button: `
                <div class="p-4 border-b border-[var(--border-subtle)]">
                    <h4 class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Action</h4>
                    <input type="text" value="Yes, Add to Order" class="w-full custom-input rounded py-1.5 px-2 text-xs mb-2">
                    <div class="grid grid-cols-2 gap-3">
                        <div><label class="text-[10px] text-[var(--text-secondary)] block mb-1">Bg Color</label><div class="h-6 w-full bg-[var(--accent)] rounded border border-[var(--border-subtle)] cursor-pointer"></div></div>
                        <div><label class="text-[10px] text-[var(--text-secondary)] block mb-1">Text Color</label><div class="h-6 w-full bg-white rounded border border-[var(--border-subtle)] cursor-pointer"></div></div>
                    </div>
                </div>
            ` + spacingControl,
            
            box: spacingControl
        };

        function toggleProjectMenu(e) {
            e.stopPropagation();
            document.getElementById('project-menu').classList.toggle('open');
        }

        function closeDropdowns(e) {
            const menu = document.getElementById('project-menu');
            if(menu.classList.contains('open')) menu.classList.remove('open');
        }

        function switchPage(pageKey, clickedElement) {
            document.querySelectorAll('.step-item').forEach(el => {
                el.classList.remove('active');
                const innerDiv = el.querySelector('div');
                innerDiv.classList.remove('bg-[var(--bg-panel)]', 'border-[var(--border-subtle)]');
                innerDiv.classList.add('border-transparent');
            });

            if(clickedElement) {
                clickedElement.classList.add('active');
                const innerDiv = clickedElement.querySelector('div');
                innerDiv.classList.remove('border-transparent');
                innerDiv.classList.add('bg-[var(--bg-panel)]', 'border-[var(--border-subtle)]');
            }

            canvas.style.opacity = '0';
            setTimeout(() => {
                canvas.innerHTML = pages[pageKey] || '';
                loadIcons();
                saveState(); // Save state when switching pages
                canvas.style.opacity = '1';
                selectedElement = null;
                document.getElementById('prop-empty').classList.remove('hidden');
                document.getElementById('prop-content').classList.add('hidden');
            }, 150);
        }

        function switchTab(tab) {
            if(tab === 'elements') {
                document.getElementById('panel-elements').classList.remove('hidden');
                document.getElementById('panel-blocks').classList.add('hidden');
                document.getElementById('tab-elements').classList.add('active');
                document.getElementById('tab-blocks').classList.remove('active');
            } else {
                document.getElementById('panel-elements').classList.add('hidden');
                document.getElementById('panel-blocks').classList.remove('hidden');
                document.getElementById('tab-elements').classList.remove('active');
                document.getElementById('tab-blocks').classList.add('active');
            }
        }

        function selectElement(el, type) {
            if(selectedElement) selectedElement.classList.remove('selected');
            selectedElement = el;
            el.classList.add('selected');
            event.stopPropagation();
            
            document.getElementById('prop-empty').classList.add('hidden');
            const propContent = document.getElementById('prop-content');
            propContent.classList.remove('hidden');
            propContent.innerHTML = propertiesTemplates[type] || propertiesTemplates['box'];
            loadIcons();
        }

        document.getElementById('canvas-wrapper').addEventListener('click', function(e) {
            if(e.target === this && selectedElement) {
                selectedElement.classList.remove('selected');
                selectedElement = null;
                document.getElementById('prop-empty').classList.remove('hidden');
                document.getElementById('prop-content').classList.add('hidden');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            switchPage('checkout', document.querySelector('.step-item.active'));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between px-4 z-50">

<div className="flex items-center gap-4">
<div className="relative w-48">
<button className="flex items-center gap-2 hover:bg-[var(--bg-panel)] px-2 py-1.5 rounded transition-colors group" onclick="toggleProjectMenu(event)">
<div className="w-5 h-5 bg-[var(--text-primary)] rounded flex items-center justify-center text-[var(--bg-surface)]">
<i className="w-3 h-3" data-lucide="box"></i>
</div>
<span className="font-semibold tracking-tight text-[var(--text-primary)]">Nexus Project</span>
<i className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-56 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg shadow-lg p-1 z-50" id="project-menu">
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)] rounded-md transition-colors text-left">
<i className="w-3.5 h-3.5" data-lucide="arrow-left"></i>
                        Back to Dashboard
                    </button>
<div className="h-px bg-[var(--border-subtle)] my-1 mx-2"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)] rounded-md transition-colors text-left">
<i className="w-3.5 h-3.5" data-lucide="settings"></i>
                        Project Settings
                    </button>
</div>
</div>

<div className="flex items-center gap-1 border-l border-[var(--border-subtle)] pl-4 h-6">
<button className="p-1.5 rounded hover:bg-[var(--bg-panel)] text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors" disabled="" id="btn-undo" onclick="undo()">
<i className="w-4 h-4" data-lucide="undo-2"></i>
</button>
<button className="p-1.5 rounded hover:bg-[var(--bg-panel)] text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors" disabled="" id="btn-redo" onclick="redo()">
<i className="w-4 h-4" data-lucide="redo-2"></i>
</button>
</div>
</div>

<div className="flex items-center bg-[var(--bg-panel)] rounded-lg p-0.5 border border-[var(--border-subtle)]">
<button className="view-btn active p-1.5 rounded transition-all" id="view-desktop" onclick="setView('desktop')">
<i className="w-4 h-4" data-lucide="monitor"></i>
</button>
<button className="view-btn p-1.5 rounded transition-all" id="view-tablet" onclick="setView('tablet')">
<i className="w-4 h-4" data-lucide="tablet"></i>
</button>
<button className="view-btn p-1.5 rounded transition-all" id="view-mobile" onclick="setView('mobile')">
<i className="w-4 h-4" data-lucide="smartphone"></i>
</button>
</div>

<div className="flex items-center gap-3 w-64 justify-end">

<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-panel)] text-[var(--text-secondary)] transition-colors" onclick="toggleTheme()" title="Toggle Dark Mode">
<i className="w-4 h-4" data-lucide="moon" id="theme-icon"></i>
</button>
<div className="w-px h-4 bg-[var(--border-subtle)]"></div>
<button className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs px-3 py-1.5 rounded hover:bg-[var(--bg-panel)] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
                Preview
            </button>
<button className="bg-[var(--text-primary)] text-[var(--bg-surface)] px-3 py-1.5 rounded font-medium text-xs hover:opacity-90 transition-opacity">
                Publish
            </button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-[var(--bg-panel)] border-r border-[var(--border-subtle)] flex flex-col z-40">

<div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Funnel Flow</h3>
</div>
<div className="space-y-0.5 ml-2">
<div className="step-item active cursor-pointer group" onclick="switchPage('checkout', this)">
<div className="flex items-center gap-3 p-2 rounded-md bg-[var(--bg-panel)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all">
<div className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]"><i className="w-4 h-4" data-lucide="credit-card"></i></div>
<div className="flex-1">
<div className="text-xs font-medium">Checkout</div>
<div className="text-[10px] text-[var(--text-muted)]">Order Form</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></div>
</div>
</div>
<div className="step-item cursor-pointer group" onclick="switchPage('upsell', this)">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
<div className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"><i className="w-4 h-4" data-lucide="arrow-up-circle"></i></div>
<div className="flex-1">
<div className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Upsell 1</div>
<div className="text-[10px] text-[var(--text-muted)]">One-time Offer</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></div>
</div>
</div>
<div className="step-item cursor-pointer group" onclick="switchPage('downsell', this)">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
<div className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"><i className="w-4 h-4" data-lucide="arrow-down-circle"></i></div>
<div className="flex-1">
<div className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Downsell 1</div>
<div className="text-[10px] text-[var(--text-muted)]">Retention Offer</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--border-active)]"></div>
</div>
</div>
<div className="step-item cursor-pointer group" onclick="switchPage('thankyou', this)">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
<div className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"><i className="w-4 h-4" data-lucide="check-circle"></i></div>
<div className="flex-1">
<div className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Thank You</div>
<div className="text-[10px] text-[var(--text-muted)]">Confirmation</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex border-b border-[var(--border-subtle)] mt-2">
<button className="tab-btn active flex-1 py-3 text-xs font-medium text-center transition-colors" id="tab-elements" onclick="switchTab('elements')">Elements</button>
<button className="tab-btn flex-1 py-3 text-xs font-medium text-center transition-colors" id="tab-blocks" onclick="switchTab('blocks')">Blocks</button>
</div>

<div className="p-4 flex-1 overflow-y-auto no-scrollbar space-y-4" id="panel-elements">
<div className="space-y-2">
<p className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">Basic</p>
<div className="grid grid-cols-2 gap-2">
<div className="draggable-item p-3 rounded flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing transition-all">
<i className="w-5 h-5" data-lucide="type"></i>
<span className="text-[10px] font-medium">Text</span>
</div>
<div className="draggable-item p-3 rounded flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing transition-all">
<i className="w-5 h-5" data-lucide="mouse-pointer-2"></i>
<span className="text-[10px] font-medium">Button</span>
</div>
</div>
</div>
</div>
<div className="hidden p-4 flex-1 overflow-y-auto no-scrollbar space-y-4" id="panel-blocks">
<div className="space-y-3">
<p className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">Components</p>
<div className="group cursor-pointer" onclick="addCheckoutBlock()">
<div className="w-full aspect-[4/3] bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] group-hover:border-[var(--text-muted)] transition-colors overflow-hidden relative mb-1.5 shadow-sm">
<div className="absolute inset-0 flex items-center justify-center bg-black/5">
<i className="w-6 h-6 text-[var(--text-secondary)]" data-lucide="credit-card"></i>
</div>
</div>
<span className="text-xs font-medium text-[var(--text-secondary)]">Checkout</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-[var(--bg-root)] canvas-bg relative overflow-y-auto overflow-x-hidden flex justify-center p-10" id="canvas-wrapper">

<div className="w-full max-w-5xl min-h-[800px] bg-[var(--bg-surface)] shadow-2xl rounded-xl border border-[var(--border-subtle)] relative p-8 transition-all duration-300" id="page-canvas">

</div>
</main>

<aside className="w-80 bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] flex flex-col z-40 transition-transform duration-300" id="properties-panel">
<div className="h-12 border-b border-[var(--border-subtle)] flex items-center px-4 justify-between bg-[var(--bg-surface)]">
<span className="font-medium text-xs text-[var(--text-primary)]">Properties</span>
<i className="w-4 h-4 text-[var(--text-secondary)]" data-lucide="sliders-horizontal"></i>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-[var(--text-muted)] p-6 text-center" id="prop-empty">
<i className="w-8 h-8 mb-3 opacity-50" data-lucide="mouse-pointer-click"></i>
<p className="text-xs">Select an element.</p>
</div>
<div className="hidden flex-1 overflow-y-auto no-scrollbar pb-10" id="prop-content">

</div>
</aside>
</div>


    </>
  );
}
