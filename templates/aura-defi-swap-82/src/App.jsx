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
colors: {
aura: {
bg: '#0F1115',
card: '#181920',
input: '#121318',
border: '#262830',
primary: '#C7F284',
primaryHover: '#B4E070',
text: '#E8E8E8',
muted: '#7A7F90',
green: '#22C55E',
accent: '#FC7226'
}
},
fontSize: { xxs: '0.65rem' }
}
}
}



        // --- STATE MANAGEMENT ---
        const state = {
            connected: false,
            walletType: null,
            balances: { SOL: 0.00, USDC: 1000.00 },
            prices: { SOL: 142.34, USDC: 1.00 },
            settings: { slippage: 'Auto', priority: 'Fast', rpc: 'Helius' },
            orders: [],
            dca: []
        };

        // --- DOM REFERENCES ---
        const views = {
            swap: document.getElementById('view-swap'),
            limit: document.getElementById('view-limit'),
            dca: document.getElementById('view-dca'),
            bridge: document.getElementById('view-bridge')
        };
        const navBtns = {
            swap: document.getElementById('nav-swap'),
            limit: document.getElementById('nav-limit'),
            dca: document.getElementById('nav-dca'),
            bridge: document.getElementById('nav-bridge')
        };

        // --- NAVIGATION ---
        function navigateTo(page) {
            // Views
            Object.values(views).forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            views[page].classList.remove('hidden');
            views[page].classList.add('flex');
            
            // Buttons style
            Object.values(navBtns).forEach(btn => {
                btn.classList.remove('text-aura-primary', 'bg-aura-primary/5', 'border-aura-primary/10');
                btn.classList.add('text-aura-muted', 'border-transparent', 'hover:bg-aura-input');
            });
            navBtns[page].classList.add('text-aura-primary', 'bg-aura-primary/5', 'border-aura-primary/10');
            navBtns[page].classList.remove('text-aura-muted', 'border-transparent', 'hover:bg-aura-input');

            // Hero Text visibility
            const hero = document.getElementById('hero-text');
            if(page === 'swap') {
                hero.style.display = 'block';
                setTimeout(() => hero.classList.remove('opacity-0'), 50);
            } else {
                hero.style.display = 'none';
            }
        }

        // --- MOBILE MENU ---
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        function mobileNavigate(page) {
            navigateTo(page);
            toggleMobileMenu();
        }

        // --- MODALS ---
        function openModal(id) {
            const modal = document.getElementById(id);
            const backdrop = document.getElementById('modal-backdrop');
            backdrop.classList.remove('hidden');
            modal.classList.remove('hidden');
            
            // Animation tick
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                modal.classList.remove('opacity-0', 'scale-95');
            });
        }

        function closeAllModals() {
            const backdrop = document.getElementById('modal-backdrop');
            const modals = document.querySelectorAll('[id$="-modal"]');
            
            backdrop.classList.add('opacity-0');
            modals.forEach(m => m.classList.add('opacity-0', 'scale-95'));
            
            setTimeout(() => {
                backdrop.classList.add('hidden');
                modals.forEach(m => m.classList.add('hidden'));
            }, 200);
        }

        // --- SETTINGS LOGIC ---
        function openSettings() {
            // Sync UI with state
            setSlippageUI(state.settings.slippage);
            setPriorityUI(state.settings.priority);
            document.getElementById('rpc-select').value = state.settings.rpc;
            openModal('settings-modal');
        }

        function setSlippage(val) {
            state.settings.slippage = val;
            setSlippageUI(val);
            document.getElementById('custom-slippage').value = ''; // clear custom if preset selected
        }

        function setSlippageUI(val) {
            document.querySelectorAll('.slip-btn').forEach(btn => {
                if(btn.innerText.includes(val)) {
                    btn.className = "slip-btn bg-aura-primary text-aura-bg border border-aura-primary font-medium text-xs py-2 rounded-lg transition-all font-grotesk";
                } else {
                    btn.className = "slip-btn bg-aura-input text-aura-muted border border-aura-border hover:border-aura-muted/50 font-medium text-xs py-2 rounded-lg transition-all font-grotesk";
                }
            });
            document.getElementById('active-slippage').innerText = val === 'Auto' ? 'Auto' : val + '%';
        }

        // Handle Custom Input
        document.getElementById('custom-slippage').addEventListener('input', (e) => {
            const val = e.target.value;
            state.settings.slippage = val;
            setSlippageUI(''); // Clear preset styling
            document.getElementById('active-slippage').innerText = val + '%';
        });

        function setPriority(val) {
            state.settings.priority = val;
            setPriorityUI(val);
            
            // Fake cost calc
            const costs = { 'Fast': 0.0001, 'Turbo': 0.0005, 'Ultra': 0.002 };
            document.getElementById('prio-cost').innerText = `${costs[val]} SOL`;
        }

        function setPriorityUI(val) {
            document.querySelectorAll('.prio-btn').forEach(btn => {
                if(btn.innerText === val) {
                    btn.className = "prio-btn px-3 py-1 rounded text-xs font-medium text-aura-bg bg-aura-primary transition-all font-grotesk";
                } else {
                    btn.className = "prio-btn px-3 py-1 rounded text-xs font-medium text-aura-muted hover:text-white transition-all font-grotesk";
                }
            });
        }

        function saveSettings() {
            const rpc = document.getElementById('rpc-select').value;
            state.settings.rpc = rpc;
            document.getElementById('active-rpc').innerText = rpc;
            
            closeAllModals();
            showToast('Preferences Saved', 'success');
        }

        // --- WALLET LOGIC ---
        function openWalletModal() { openModal('wallet-modal'); }

        function connectWallet(type) {
            closeAllModals();
            showToast(`Connecting ${type}...`, 'info');
            setTimeout(() => {
                state.connected = true;
                state.walletType = type;
                state.balances.SOL = (Math.random() * 10 + 2).toFixed(4); // Sim balance
                updateUI();
                showToast('Wallet Connected', 'success');
            }, 1000);
        }

        function disconnectWallet() {
            state.connected = false;
            state.balances = { SOL: 0.00, USDC: 1000.00 };
            updateUI();
            showToast('Wallet Disconnected', 'default');
        }

        // --- SWAP LOGIC ---
        function calculateSwap() {
            const val = parseFloat(document.getElementById('swap-in').value);
            const out = document.getElementById('swap-out');
            if (val > 0) {
                out.value = (val / state.prices.SOL).toFixed(4);
            } else {
                out.value = '';
            }
        }

        function setMax(token) {
            if (!state.connected) return openWalletModal();
            if (token === 'USDC') {
                document.getElementById('swap-in').value = state.balances.USDC;
                calculateSwap();
            }
        }

        function switchTokens() {
            // Animation only, logic omitted for brevity
            const div = document.querySelector('.fa-arrow-right-arrow-left'); // abstract
            showToast('Switched direction', 'default');
            calculateSwap();
        }

        function openReviewModal() {
            if (!state.connected) return openWalletModal();
            const val = document.getElementById('swap-in').value;
            if (!val || val <= 0) return;

            document.getElementById('review-pay-amt').innerText = `${val} USDC`;
            document.getElementById('review-receive-amt').innerText = `${document.getElementById('swap-out').value} SOL`;
            openModal('review-modal');
        }

        function confirmTransaction() {
            const btn = document.getElementById('confirm-swap-btn');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = `<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin text-xl"></iconify-icon> Processing...`;
            btn.disabled = true;

            setTimeout(() => {
                const amt = parseFloat(document.getElementById('swap-in').value);
                const received = parseFloat(document.getElementById('swap-out').value);
                
                state.balances.USDC -= amt;
                state.balances.SOL = (parseFloat(state.balances.SOL) + received).toFixed(4);
                
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                closeAllModals();
                
                document.getElementById('swap-in').value = '';
                document.getElementById('swap-out').value = '';
                
                updateUI();
                showToast(`Swapped ${amt} USDC to SOL`, 'success');
            }, 2000);
        }

        // --- LIMIT LOGIC ---
        function placeLimitOrder() {
            if (!state.connected) return openWalletModal();
            const amt = document.getElementById('limit-amount').value;
            const price = document.getElementById('limit-price').value;
            
            if(!amt || !price) return;

            state.orders.push({ pair: 'SOL/USDC', side: 'Buy', size: amt, price: price, filled: '0%' });
            renderOrders();
            showToast('Limit Order Placed', 'success');
        }

        function renderOrders() {
            const body = document.getElementById('limit-orders-body');
            const count = document.getElementById('open-orders-count');
            
            if(state.orders.length === 0) {
                body.innerHTML = `<tr id="empty-orders-row"><td colspan="6" class="px-5 py-12 text-center text-aura-muted text-xs font-grotesk flex-col items-center"><iconify-icon icon="solar:box-linear" width="32" class="opacity-50 mb-2 mx-auto"></iconify-icon>No open orders</td></tr>`;
                count.innerText = "0 Active";
                return;
            }

            body.innerHTML = state.orders.map((o, i) => `
                <tr class="border-b border-aura-border/30 hover:bg-aura-input/50 transition-colors">
                    <td class="px-5 py-3 text-white font-grotesk">${o.pair}</td>
                    <td class="px-5 py-3 text-aura-green font-grotesk">${o.side}</td>
                    <td class="px-5 py-3 text-white font-grotesk">${o.size}</td>
                    <td class="px-5 py-3 text-white font-grotesk">${o.price}</td>
                    <td class="px-5 py-3 text-aura-muted font-grotesk">${o.filled}</td>
                    <td class="px-5 py-3 text-right">
                        <button onclick="cancelOrder(${i})" class="text-xs text-red-400 hover:text-red-300 font-grotesk">Cancel</button>
                    </td>
                </tr>
            `).join('');
            count.innerText = `${state.orders.length} Active`;
        }

        function cancelOrder(i) {
            state.orders.splice(i, 1);
            renderOrders();
            showToast('Order Cancelled', 'default');
        }

        // --- DCA LOGIC ---
        function startDCA() {
            if (!state.connected) return openWalletModal();
            const amt = document.getElementById('dca-amount').value;
            if(!amt) return;
            
            const interval = document.getElementById('dca-interval').value;
            state.dca.push({ amt, interval });
            
            const list = document.getElementById('dca-list');
            list.innerHTML = state.dca.map(d => `
                <div class="bg-aura-input rounded-xl p-3 border border-aura-border flex justify-between items-center slide-in-right">
                    <div>
                        <div class="text-sm text-white font-medium font-grotesk">Buy SOL with ${d.amt} USDC</div>
                        <div class="text-xs text-aura-muted font-grotesk">Every ${d.interval}</div>
                    </div>
                    <div class="text-[10px] text-aura-primary bg-aura-primary/10 px-2 py-0.5 rounded font-bold uppercase tracking-wide">Active</div>
                </div>
            `).join('');
            
            showToast('Strategy Started', 'success');
        }

        // --- BRIDGE LOGIC ---
        document.getElementById('bridge-amt').addEventListener('input', (e) => {
            document.getElementById('bridge-out').value = e.target.value; // 1:1 demo
        });

        function startBridge() {
            const amt = document.getElementById('bridge-amt').value;
            if (!amt) return;

            const overlay = document.getElementById('bridge-progress');
            overlay.classList.remove('hidden');
            overlay.classList.add('flex');

            // Step Simulation
            setTimeout(() => document.getElementById('step-1').classList.remove('opacity-50', 'text-white'), 500);
            setTimeout(() => document.getElementById('step-1').classList.add('text-aura-green'), 500);
            
            setTimeout(() => document.getElementById('step-2').classList.remove('opacity-50', 'text-white'), 1500);
            setTimeout(() => document.getElementById('step-2').classList.add('text-aura-green'), 1500);

            setTimeout(() => {
                overlay.classList.add('hidden');
                overlay.classList.remove('flex');
                showToast(`Bridged ${amt} USDC successfully`, 'success');
                // reset styles
                document.getElementById('step-1').className = "flex items-center gap-3 text-xs text-white font-grotesk opacity-50 transition-opacity";
                document.getElementById('step-2').className = "flex items-center gap-3 text-xs text-white font-grotesk opacity-50 transition-opacity";
                document.getElementById('bridge-amt').value = '';
                document.getElementById('bridge-out').value = '';
            }, 3000);
        }

        // --- COMMON UI UPDATES ---
        function updateUI() {
            const btnConnect = document.getElementById('btn-connect');
            const btnConnected = document.getElementById('btn-connected');
            const mainSwapBtn = document.getElementById('main-swap-btn');

            if (state.connected) {
                btnConnect.classList.add('hidden');
                btnConnected.classList.remove('hidden');
                btnConnected.classList.add('flex');
                mainSwapBtn.innerText = "Review Order";
                
                document.getElementById('bal-usdc').innerText = state.balances.USDC.toFixed(2);
                document.getElementById('bal-sol').innerText = parseFloat(state.balances.SOL).toFixed(4);
                
                document.getElementById('wallet-balance').innerText = `${parseFloat(state.balances.SOL).toFixed(2)} SOL`;
                
                // Dropdown update
                const netWorth = (state.balances.SOL * state.prices.SOL) + state.balances.USDC;
                document.getElementById('dropdown-networth').innerText = `$${netWorth.toFixed(2)}`;
                
                document.getElementById('dropdown-assets').innerHTML = `
                    <div class="flex justify-between items-center p-2 hover:bg-aura-input rounded-lg">
                        <div class="flex items-center gap-2">
                             <div class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><iconify-icon icon="solar:dollar-minimalistic-linear"></iconify-icon></div>
                            <span class="text-sm text-white font-grotesk">USDC</span>
                        </div>
                        <span class="text-sm text-aura-muted font-mono">${state.balances.USDC.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between items-center p-2 hover:bg-aura-input rounded-lg">
                        <div class="flex items-center gap-2">
                             <div class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center"><iconify-icon icon="logos:solana" width="12"></iconify-icon></div>
                            <span class="text-sm text-white font-grotesk">SOL</span>
                        </div>
                        <span class="text-sm text-aura-muted font-mono">${parseFloat(state.balances.SOL).toFixed(4)}</span>
                    </div>
                `;
            } else {
                btnConnect.classList.remove('hidden');
                btnConnected.classList.add('hidden');
                btnConnected.classList.remove('flex');
                mainSwapBtn.innerText = "Connect Wallet";
                document.getElementById('bal-usdc').innerText = "0.00";
                document.getElementById('bal-sol').innerText = "0.00";
            }
        }

        function refreshQuote() {
            const icon = document.querySelector('iconify-icon[icon="solar:restart-linear"]');
            icon.classList.add('animate-spin');
            setTimeout(() => icon.classList.remove('animate-spin'), 1000);
            
            // Jitter price
            state.prices.SOL = 142.34 + (Math.random() - 0.5);
            document.getElementById('price-ticker').innerText = `1 SOL ≈ ${state.prices.SOL.toFixed(2)} USDC`;
            calculateSwap(); // recalc if input exists
        }

        function showToast(msg, type) {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            
            let icon = 'solar:check-circle-bold';
            let color = 'text-aura-green';
            if(type === 'info') { icon = 'solar:info-circle-linear'; color = 'text-blue-400'; }
            if(type === 'default') { icon = 'solar:bell-linear'; color = 'text-aura-muted'; }

            el.className = "flex items-center gap-3 p-4 bg-aura-card border border-aura-border rounded-xl shadow-xl fade-in min-w-[300px]";
            el.innerHTML = `
                <iconify-icon icon="${icon}" class="${color} text-lg"></iconify-icon>
                <span class="text-sm font-medium text-white font-grotesk">${msg}</span>
            `;
            container.appendChild(el);
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(-10px)';
                setTimeout(() => el.remove(), 300);
            }, 3000);
        }

        // Loop for Price & TPS updates
        setInterval(() => {
            const tps = Math.floor(Math.random() * 800) + 2200;
            document.getElementById('tps-val').innerText = tps.toLocaleString();
            
            // Small price movement
            if(Math.random() > 0.7) refreshQuote();
        }, 3000);

    
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="fixed top-20 right-6 z-[70] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-200" id="modal-backdrop" onclick="closeAllModals()"></div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-aura-card border border-aura-border rounded-2xl shadow-2xl z-[51] hidden opacity-0 scale-95 transition-all duration-200 p-6" id="review-modal">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white font-grotesk">Review Transaction</h3>
<button className="text-aura-muted hover:text-white" onclick="closeAllModals()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div className="bg-aura-input rounded-xl p-4 border border-aura-border/50">
<div className="flex justify-between text-sm mb-2">
<span className="text-aura-muted font-grotesk">You pay</span>
<span className="text-white font-medium font-grotesk" id="review-pay-amt">0.00 USDC</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-aura-muted font-grotesk">You receive</span>
<span className="text-aura-primary font-medium font-grotesk" id="review-receive-amt">0.00 SOL</span>
</div>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Rate</span>
<span className="text-white font-grotesk" id="review-rate">1 SOL ≈ 142.34 USDC</span>
</div>
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Network Fee</span>
<span className="text-white font-grotesk" id="review-fee">~$0.0004</span>
</div>
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Price Impact</span>
<span className="text-aura-accent font-grotesk">&lt; 0.1%</span>
</div>
</div>
<button className="w-full h-12 bg-aura-primary hover:bg-aura-primaryHover text-aura-bg font-semibold rounded-xl transition-all mt-4 flex items-center justify-center gap-2 font-grotesk tracking-tight" id="confirm-swap-btn" onclick="confirmTransaction()">
                Confirm Swap
            </button>
</div>
</div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-aura-card border border-aura-border rounded-2xl shadow-2xl z-[51] hidden opacity-0 scale-95 transition-all duration-200 overflow-hidden" id="settings-modal">
<div className="p-5 border-b border-aura-border flex justify-between items-center bg-aura-bg/50">
<h3 className="text-lg font-medium text-white font-grotesk flex items-center gap-2">
<iconify-icon className="text-aura-muted" icon="solar:settings-linear"></iconify-icon> Preferences
            </h3>
<button className="text-aura-muted hover:text-white transition-colors" onclick="closeAllModals()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-aura-muted font-grotesk">Slippage Tolerance</label>
<span className="text-xs text-aura-primary bg-aura-primary/10 px-2 py-0.5 rounded font-grotesk" id="active-slippage">Auto</span>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="slip-btn bg-aura-primary text-aura-bg border border-aura-primary font-medium text-xs py-2 rounded-lg transition-all font-grotesk" onclick="setSlippage('Auto')">Auto</button>
<button className="slip-btn bg-aura-input text-aura-muted border border-aura-border hover:border-aura-muted/50 font-medium text-xs py-2 rounded-lg transition-all font-grotesk" onclick="setSlippage('0.5')">0.5%</button>
<button className="slip-btn bg-aura-input text-aura-muted border border-aura-border hover:border-aura-muted/50 font-medium text-xs py-2 rounded-lg transition-all font-grotesk" onclick="setSlippage('1.0')">1.0%</button>
<div className="relative">
<input className="w-full h-full bg-aura-input text-center text-white text-xs rounded-lg border border-aura-border focus:border-aura-primary/50 outline-none p-0 font-grotesk" id="custom-slippage" placeholder="Custom" type="number"/>
<span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-aura-muted">%</span>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="text-sm font-medium text-aura-muted font-grotesk">Priority Fee</label>
<iconify-icon className="text-aura-muted opacity-50 text-xs" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 bg-aura-input p-1 rounded-lg border border-aura-border">
<button className="prio-btn px-3 py-1 rounded text-xs font-medium text-aura-bg bg-aura-primary transition-all font-grotesk" onclick="setPriority('Fast')">Fast</button>
<button className="prio-btn px-3 py-1 rounded text-xs font-medium text-aura-muted hover:text-white transition-all font-grotesk" onclick="setPriority('Turbo')">Turbo</button>
<button className="prio-btn px-3 py-1 rounded text-xs font-medium text-aura-muted hover:text-white transition-all font-grotesk" onclick="setPriority('Ultra')">Ultra</button>
</div>
</div>
<p className="text-xs text-aura-muted/60 font-grotesk leading-relaxed">
                    Prioritizes your transaction to ensure it lands on-chain during congestion. Estimated cost: <span className="text-aura-text" id="prio-cost">0.0001 SOL</span>.
                </p>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-aura-muted font-grotesk">RPC Endpoint</label>
<div className="relative group">
<select className="w-full bg-aura-input text-white text-sm rounded-xl px-4 py-3 border border-aura-border outline-none appearance-none font-grotesk cursor-pointer hover:border-aura-muted/50 transition-colors" id="rpc-select">
<option value="Helius">Helius (Mainnet)</option>
<option value="Triton">Triton (Mainnet)</option>
<option value="QuickNode">QuickNode (Mainnet)</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-aura-muted">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full py-3 bg-aura-border hover:bg-aura-border/80 text-white font-medium rounded-xl transition-all font-grotesk mt-2" onclick="saveSettings()">
                Save Preferences
            </button>
</div>
</div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-aura-card border border-aura-border rounded-2xl shadow-2xl z-[51] hidden opacity-0 scale-95 transition-all duration-200 p-6" id="wallet-modal">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white font-grotesk">Connect Wallet</h3>
<button className="text-aura-muted hover:text-white" onclick="closeAllModals()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-aura-input border border-transparent hover:border-aura-border transition-all group" onclick="connectWallet('Phantom')">
<div className="w-10 h-10 rounded-full bg-[#AB9FF2]/10 flex items-center justify-center">
<iconify-icon className="text-[#AB9FF2] text-xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="font-medium text-white font-grotesk">Phantom</span>
<span className="text-xs text-aura-muted">Detected</span>
</div>
</button>
<button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-aura-input border border-transparent hover:border-aura-border transition-all group" onclick="connectWallet('Solflare')">
<div className="w-10 h-10 rounded-full bg-[#FC7226]/10 flex items-center justify-center">
<iconify-icon className="text-[#FC7226] text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="font-medium text-white font-grotesk">Solflare</span>
<span className="text-xs text-aura-muted">Detected</span>
</div>
</button>
</div>
</div>

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-aura-bg/80 border-b border-aura-border/50">
<div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<div className="flex items-center gap-2 group cursor-pointer" onclick="navigateTo('swap')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-aura-primary to-aura-accent flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white font-grotesk">Aura</span>
</div>

<div className="hidden md:flex items-center gap-1">
<button className="nav-btn px-4 py-2 text-sm text-aura-primary bg-aura-primary/5 rounded-lg border border-aura-primary/10 font-grotesk transition-all" id="nav-swap" onclick="navigateTo('swap')">Swap</button>
<button className="nav-btn px-4 py-2 text-sm text-aura-muted hover:text-white rounded-lg border border-transparent hover:bg-aura-input font-grotesk transition-all" id="nav-limit" onclick="navigateTo('limit')">Limit</button>
<button className="nav-btn px-4 py-2 text-sm text-aura-muted hover:text-white rounded-lg border border-transparent hover:bg-aura-input font-grotesk transition-all" id="nav-dca" onclick="navigateTo('dca')">DCA</button>
<button className="nav-btn px-4 py-2 text-sm text-aura-muted hover:text-white rounded-lg border border-transparent hover:bg-aura-input font-grotesk transition-all" id="nav-bridge" onclick="navigateTo('bridge')">Bridge</button>
</div>
</div>

<div className="flex items-center gap-3">

<button className="md:hidden p-2 text-aura-muted hover:text-white" onclick="showToast('Search coming soon', 'info')">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-2 px-3 py-2 bg-aura-input rounded-lg border border-aura-border text-aura-muted w-56 lg:w-64 group focus-within:border-aura-muted/50 transition-colors">
<iconify-icon className="text-aura-muted group-focus-within:text-white transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-aura-muted/70 text-white font-grotesk" placeholder="Search tokens..." type="text"/>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-aura-border text-aura-muted font-mono">/</span>
</div>

<button className="p-2.5 rounded-lg hover:bg-aura-border/50 text-aura-muted hover:text-white transition-colors" onclick="openSettings()">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</button>

<div className="relative group" id="wallet-container">
<button className="px-4 py-2 bg-aura-text hover:bg-white text-aura-bg font-bold text-sm rounded-lg transition-colors font-grotesk" id="btn-connect" onclick="openWalletModal()">
                        Connect
                    </button>
<button className="hidden items-center gap-2.5 pl-3 pr-2 py-1.5 bg-aura-input border border-aura-border hover:border-aura-muted/50 rounded-lg transition-all shadow-sm group-hover:bg-aura-card" id="btn-connected">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-aura-green to-aura-accent flex items-center justify-center text-[10px] text-white font-bold font-grotesk">A</div>
<div className="hidden sm:flex flex-col items-start mr-2">
<span className="text-xs font-medium text-white leading-none font-grotesk" id="wallet-balance">0.00 SOL</span>
<span className="text-[10px] text-aura-muted leading-none mt-0.5 font-mono" id="wallet-address">0x...</span>
</div>
<iconify-icon className="text-aura-muted group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full right-0 mt-2 w-[280px] sm:w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
<div className="bg-aura-card rounded-2xl border border-aura-border shadow-2xl overflow-hidden p-4">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-aura-muted font-grotesk uppercase tracking-wider">Net Worth</p>
<p className="text-2xl font-bold text-white font-grotesk mt-1" id="dropdown-networth">$0.00</p>
</div>
<button className="text-xs text-red-400 hover:text-red-300 font-grotesk border border-red-500/20 bg-red-500/10 px-2 py-1 rounded" onclick="disconnectWallet()">Disconnect</button>
</div>
<div className="h-px bg-aura-border mb-3"></div>
<div className="space-y-2 max-h-40 overflow-y-auto" id="dropdown-assets">

</div>
</div>
</div>
</div>

<button className="md:hidden p-2 text-aura-muted hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-aura-bg transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-20 px-6" id="mobile-menu">
<div className="space-y-4">
<button className="w-full text-left py-4 text-xl font-medium text-white border-b border-aura-border font-grotesk flex items-center gap-3" onclick="mobileNavigate('swap')">
<iconify-icon className="text-aura-primary" icon="solar:transfer-horizontal-linear"></iconify-icon> Swap
            </button>
<button className="w-full text-left py-4 text-xl font-medium text-aura-muted hover:text-white border-b border-aura-border font-grotesk flex items-center gap-3" onclick="mobileNavigate('limit')">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon> Limit
            </button>
<button className="w-full text-left py-4 text-xl font-medium text-aura-muted hover:text-white border-b border-aura-border font-grotesk flex items-center gap-3" onclick="mobileNavigate('dca')">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon> DCA
            </button>
<button className="w-full text-left py-4 text-xl font-medium text-aura-muted hover:text-white border-b border-aura-border font-grotesk flex items-center gap-3" onclick="mobileNavigate('bridge')">
<iconify-icon icon="solar:global-linear"></iconify-icon> Bridge
            </button>
</div>
<button className="absolute top-5 right-5 text-aura-muted p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<main className="flex-1 flex flex-col items-center pt-8 md:pt-16 px-4 pb-24 w-full max-w-[1400px] mx-auto">

<div className="mb-10 text-center space-y-3 fade-in" id="hero-text">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-tight font-grotesk font-bold">
                The Home of <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-primary to-aura-accent">Onchain Finance</span>
</h1>
<p className="text-aura-muted text-base md:text-lg font-light tracking-wide max-w-lg mx-auto font-grotesk">
                Best price routing. Minimal slippage. Professional execution.
            </p>
</div>
<div className="w-full flex justify-center relative">

<div className="w-full max-w-[480px] bg-aura-card rounded-2xl border border-aura-border shadow-2xl flex flex-col slide-up relative z-10" id="view-swap">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-1 bg-aura-input p-1 rounded-xl border border-aura-border/50">
<button className="px-4 py-1.5 text-xs md:text-sm font-medium text-aura-card bg-aura-primary rounded-lg shadow-sm font-grotesk">Market</button>
<button className="px-4 py-1.5 text-xs md:text-sm font-medium text-aura-muted hover:text-white transition-colors font-grotesk" onclick="navigateTo('limit')">Limit</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-aura-primary/5 text-xs text-aura-primary border border-aura-primary/20">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="font-grotesk">Auto</span>
</button>
<button className="p-2 rounded-lg hover:bg-aura-border/50 text-aura-muted hover:text-white transition-colors" onclick="refreshQuote()">
<iconify-icon icon="solar:restart-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="px-4 pb-4 space-y-1">

<div className="bg-aura-input rounded-xl p-4 border border-transparent hover:border-aura-border/50 transition-colors group relative">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-aura-muted font-grotesk">Sell</span>
<div className="flex items-center gap-2">
<span className="text-xs text-aura-muted font-grotesk">Balance: <span className="text-white" id="bal-usdc">0.00</span></span>
<button className="text-[10px] uppercase font-bold bg-aura-border/50 hover:bg-aura-border px-1.5 py-0.5 rounded text-aura-primary transition-colors font-grotesk" onclick="setMax('USDC')">Max</button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-aura-card hover:bg-aura-border px-3 py-2 rounded-full border border-aura-border transition-all shadow-sm shrink-0">
<img className="w-6 h-6 rounded-full" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
<span className="text-lg font-medium text-white font-grotesk">USDC</span>
<iconify-icon className="text-aura-muted text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<input className="w-full bg-transparent text-right text-3xl font-medium text-white placeholder-aura-muted/40 outline-none h-10 font-grotesk" id="swap-in" oninput="calculateSwap()" placeholder="0.00" type="number"/>
</div>
</div>

<div className="relative h-2 flex items-center justify-center z-10">
<div className="absolute bg-aura-bg border-[3px] border-aura-bg rounded-lg p-1.5 cursor-pointer hover:bg-aura-border transition-colors group text-aura-muted hover:text-aura-primary" onclick="switchTokens()">
<iconify-icon icon="solar:transfer-vertical-linear" width="18"></iconify-icon>
</div>
</div>

<div className="bg-aura-input rounded-xl p-4 border border-transparent hover:border-aura-border/50 transition-colors group">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-aura-muted font-grotesk">Buy</span>
<span className="text-xs text-aura-muted font-grotesk">Balance: <span className="text-white" id="bal-sol">0.00</span></span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-aura-card hover:bg-aura-border px-3 py-2 rounded-full border border-aura-border transition-all shadow-sm shrink-0">
<img className="w-6 h-6 rounded-full" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"/>
<span className="text-lg font-medium text-white font-grotesk">SOL</span>
<iconify-icon className="text-aura-muted text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<input className="w-full bg-transparent text-right text-3xl font-medium text-white placeholder-aura-muted/40 outline-none h-10 font-grotesk cursor-default" id="swap-out" placeholder="0.00" readonly="" type="text"/>
</div>
</div>

<div className="pt-2 px-2 flex items-center justify-between text-xs text-aura-muted font-grotesk">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-aura-primary animate-pulse"></span>
<span id="price-ticker">1 SOL ≈ 142.34 USDC</span>
</div>
<div className="flex items-center gap-1 cursor-pointer hover:text-white">
<iconify-icon icon="solar:gas-station-linear" width="12"></iconify-icon>
<span>$0.0004</span>
</div>
</div>

<button className="w-full h-14 mt-4 bg-aura-primary hover:bg-aura-primaryHover text-aura-bg text-lg font-semibold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(199,242,132,0.4)] flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed font-grotesk tracking-tight" id="main-swap-btn" onclick="openReviewModal()">
                        Connect Wallet
                    </button>
</div>
</div>

<div className="w-full max-w-[900px] hidden flex-col gap-6 fade-in" id="view-limit">
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-aura-card rounded-2xl border border-aura-border p-5 flex flex-col justify-between h-[400px]">
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium flex items-center gap-2 font-grotesk"><img className="w-5 h-5" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"/> SOL / USDC</h3>
<p className="text-3xl text-white mt-2 font-grotesk font-semibold" id="limit-chart-price">142.34</p>
<p className="text-xs text-aura-green font-grotesk">+2.4%</p>
</div>
<div className="flex gap-1">
<span className="px-2 py-1 rounded bg-aura-input text-xs text-aura-muted font-grotesk cursor-pointer hover:text-white">1H</span>
<span className="px-2 py-1 rounded bg-aura-border text-xs text-white font-grotesk cursor-pointer">4H</span>
<span className="px-2 py-1 rounded bg-aura-input text-xs text-aura-muted font-grotesk cursor-pointer hover:text-white">1D</span>
</div>
</div>

<div className="flex-1 flex items-end gap-1 mt-4 opacity-80 overflow-hidden">

<div className="w-full bg-aura-green/20 h-[40%] rounded-t-sm relative group hover:bg-aura-green/30 transition-all"><div className="absolute bottom-0 w-full bg-aura-green/40 h-[60%]"></div></div>
<div className="w-full bg-red-500/20 h-[30%] rounded-t-sm relative group hover:bg-red-500/30 transition-all"><div className="absolute bottom-0 w-full bg-red-500/40 h-[40%]"></div></div>
<div className="w-full bg-aura-green/20 h-[50%] rounded-t-sm relative group hover:bg-aura-green/30 transition-all"><div className="absolute bottom-0 w-full bg-aura-green/40 h-[70%]"></div></div>
<div className="w-full bg-aura-green/20 h-[65%] rounded-t-sm relative group hover:bg-aura-green/30 transition-all"><div className="absolute bottom-0 w-full bg-aura-green/40 h-[30%]"></div></div>
<div className="w-full bg-red-500/20 h-[45%] rounded-t-sm relative group hover:bg-red-500/30 transition-all"><div className="absolute bottom-0 w-full bg-red-500/40 h-[50%]"></div></div>
<div className="w-full bg-aura-green/20 h-[55%] rounded-t-sm relative group hover:bg-aura-green/30 transition-all"><div className="absolute bottom-0 w-full bg-aura-green/40 h-[80%]"></div></div>
<div className="w-full bg-aura-green/20 h-[75%] rounded-t-sm relative group hover:bg-aura-green/30 transition-all"><div className="absolute bottom-0 w-full bg-aura-green/40 h-[60%]"></div></div>
<div className="w-full bg-red-500/20 h-[60%] rounded-t-sm relative group hover:bg-red-500/30 transition-all"><div className="absolute bottom-0 w-full bg-red-500/40 h-[20%]"></div></div>
</div>
</div>

<div className="w-full md:w-[360px] bg-aura-card rounded-2xl border border-aura-border p-5 shadow-xl flex flex-col gap-4">
<div className="flex gap-2">
<button className="flex-1 py-2.5 rounded-lg bg-aura-green/10 text-aura-green font-bold text-sm border border-aura-green/20 font-grotesk">Buy</button>
<button className="flex-1 py-2.5 rounded-lg bg-aura-input text-aura-muted font-bold text-sm hover:text-white transition-colors font-grotesk">Sell</button>
</div>
<div>
<label className="text-xs text-aura-muted block mb-1.5 font-grotesk">Price (USDC)</label>
<div className="bg-aura-input rounded-xl px-3 py-3 border border-aura-border flex justify-between focus-within:border-aura-muted transition-colors">
<input className="bg-transparent text-white text-sm outline-none w-full font-grotesk" id="limit-price" type="number" value="140.00"/>
<span className="text-xs text-aura-muted self-center font-grotesk">USDC</span>
</div>
</div>
<div>
<label className="text-xs text-aura-muted block mb-1.5 font-grotesk">Amount (SOL)</label>
<div className="bg-aura-input rounded-xl px-3 py-3 border border-aura-border flex justify-between focus-within:border-aura-muted transition-colors">
<input className="bg-transparent text-white text-sm outline-none w-full font-grotesk" id="limit-amount" placeholder="0.00" type="number"/>
<span className="text-xs text-aura-muted self-center font-grotesk">SOL</span>
</div>
</div>
<div className="pt-2">
<div className="flex justify-between text-xs text-aura-muted mb-2 font-grotesk">
<span>Total</span>
<span>0.00 USDC</span>
</div>
<button className="w-full h-12 bg-aura-primary hover:bg-aura-primaryHover text-aura-bg font-bold rounded-xl transition-all font-grotesk" onclick="placeLimitOrder()">
                                Place Limit Order
                             </button>
</div>
</div>
</div>

<div className="bg-aura-card rounded-2xl border border-aura-border overflow-hidden">
<div className="px-5 py-4 border-b border-aura-border flex justify-between items-center">
<h3 className="text-sm font-medium text-white font-grotesk">Open Orders</h3>
<span className="text-xs text-aura-muted font-grotesk" id="open-orders-count">0 Active</span>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="text-xs text-aura-muted border-b border-aura-border/50">
<th className="px-5 py-3 font-medium font-grotesk">Pair</th>
<th className="px-5 py-3 font-medium font-grotesk">Side</th>
<th className="px-5 py-3 font-medium font-grotesk">Size</th>
<th className="px-5 py-3 font-medium font-grotesk">Price</th>
<th className="px-5 py-3 font-medium font-grotesk">Filled</th>
<th className="px-5 py-3 font-medium text-right font-grotesk">Action</th>
</tr>
</thead>
<tbody className="text-sm" id="limit-orders-body">
<tr id="empty-orders-row">
<td className="px-5 py-12 text-center text-aura-muted text-xs font-grotesk flex-col items-center" colspan="6">
<iconify-icon className="opacity-50 mb-2 mx-auto" icon="solar:box-linear" width="32"></iconify-icon>
                                        No open orders
                                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="w-full max-w-[480px] hidden flex-col gap-4 fade-in" id="view-dca">
<div className="bg-aura-card rounded-2xl border border-aura-border shadow-2xl p-6">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
<iconify-icon icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white font-grotesk">Setup Strategy</h3>
</div>
<div className="space-y-4">
<div className="bg-aura-input rounded-xl p-3 border border-aura-border/50">
<label className="text-xs text-aura-muted block mb-1 font-grotesk">I want to allocate</label>
<div className="flex items-center gap-2">
<input className="w-full bg-transparent text-xl font-medium text-white outline-none font-grotesk" id="dca-amount" placeholder="100" type="number"/>
<span className="text-sm font-medium text-aura-muted font-grotesk">USDC</span>
</div>
</div>
<div className="bg-aura-input rounded-xl p-3 border border-aura-border/50">
<label className="text-xs text-aura-muted block mb-1 font-grotesk">To buy</label>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"/>
<span className="text-lg font-medium text-white font-grotesk">SOL</span>
</div>
</div>
<div className="flex gap-2">
<div className="flex-1 bg-aura-input rounded-xl p-3 border border-aura-border/50">
<label className="text-xs text-aura-muted block mb-1 font-grotesk">Every</label>
<select className="w-full bg-aura-input text-white outline-none text-sm font-grotesk" id="dca-interval">
<option value="Minute">Minute</option>
<option value="Hour">Hour</option>
<option value="Day">Day</option>
<option value="Week">Week</option>
</select>
</div>
<div className="flex-1 bg-aura-input rounded-xl p-3 border border-aura-border/50">
<label className="text-xs text-aura-muted block mb-1 font-grotesk">Orders</label>
<input className="w-full bg-transparent text-white outline-none text-sm font-grotesk" id="dca-cycles" placeholder="5" type="number" value="5"/>
</div>
</div>
<button className="w-full h-12 bg-aura-primary hover:bg-aura-primaryHover text-aura-bg font-bold rounded-xl transition-all font-grotesk mt-2" onclick="startDCA()">
                            Start Strategy
                        </button>
</div>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-aura-muted ml-1 font-grotesk uppercase tracking-wide text-xs">Active Strategies</h4>
<div className="space-y-2" id="dca-list">

</div>
</div>
</div>

<div className="w-full max-w-[480px] hidden flex-col gap-4 fade-in" id="view-bridge">
<div className="bg-aura-card rounded-2xl border border-aura-border shadow-2xl p-5 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white font-grotesk flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:global-linear"></iconify-icon> Bridge
                        </h3>
<div className="text-[10px] px-2 py-1 bg-aura-input border border-aura-border rounded text-aura-muted font-grotesk flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Wormhole
                        </div>
</div>
<div className="space-y-1">

<div className="bg-aura-input rounded-xl p-4 border border-transparent hover:border-aura-border/50 transition-colors">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-aura-muted font-grotesk">From</span>
<div className="flex items-center gap-1 bg-[#262830] px-2 py-0.5 rounded-full cursor-pointer hover:bg-[#333540]">
<iconify-icon icon="logos:ethereum" width="12"></iconify-icon>
<span className="text-xs text-white font-grotesk">Ethereum</span>
<iconify-icon className="text-aura-muted" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full grayscale opacity-80" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
<span className="text-lg font-medium text-white font-grotesk">USDC</span>
</div>
<input className="w-full bg-transparent text-right text-3xl font-medium text-white placeholder-aura-muted/40 outline-none h-10 font-grotesk" id="bridge-amt" placeholder="0.00" type="number"/>
</div>
</div>

<div className="relative h-2 flex items-center justify-center z-10">
<div className="absolute bg-aura-bg border-[3px] border-aura-bg rounded-lg p-1.5 text-aura-muted">
<iconify-icon icon="solar:double-alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-aura-input rounded-xl p-4 border border-transparent hover:border-aura-border/50 transition-colors">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-aura-muted font-grotesk">To</span>
<div className="flex items-center gap-1 bg-[#262830] px-2 py-0.5 rounded-full">
<iconify-icon icon="logos:solana" width="12"></iconify-icon>
<span className="text-xs text-white font-grotesk">Solana</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
<span className="text-lg font-medium text-white font-grotesk">USDC</span>
</div>
<input className="w-full bg-transparent text-right text-3xl font-medium text-white placeholder-aura-muted/40 outline-none h-10 font-grotesk cursor-default" id="bridge-out" placeholder="0.00" readonly="" type="text"/>
</div>
</div>
</div>
<div className="mt-4 p-3 bg-aura-input/50 border border-aura-border/30 rounded-xl text-xs space-y-2">
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Route</span>
<span className="text-white font-grotesk flex items-center gap-1"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> Portal</span>
</div>
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Est. Time</span>
<span className="text-white font-grotesk">~20 seconds</span>
</div>
<div className="flex justify-between">
<span className="text-aura-muted font-grotesk">Fee</span>
<span className="text-white font-grotesk">$0.00</span>
</div>
</div>
<button className="w-full h-12 mt-4 bg-aura-primary hover:bg-aura-primaryHover text-aura-bg text-lg font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(199,242,132,0.4)] font-grotesk tracking-tight" onclick="startBridge()">
                        Bridge Assets
                    </button>

<div className="absolute inset-0 bg-aura-card z-20 hidden flex-col items-center justify-center p-6 text-center" id="bridge-progress">
<div className="relative w-16 h-16 mb-4">
<iconify-icon className="text-aura-primary w-16 h-16 animate-spin" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg font-grotesk mb-1">Bridging Assets</h4>
<p className="text-aura-muted text-sm font-grotesk mb-6">Confirming on Ethereum...</p>
<div className="w-full max-w-[200px] space-y-3">
<div className="flex items-center gap-3 text-xs text-white font-grotesk opacity-50 transition-opacity" id="step-1">
<iconify-icon className="text-aura-green" icon="solar:check-circle-bold"></iconify-icon> Approve USDC
                            </div>
<div className="flex items-center gap-3 text-xs text-white font-grotesk opacity-50 transition-opacity" id="step-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Finalize on ETH
                            </div>
<div className="flex items-center gap-3 text-xs text-white font-grotesk opacity-50 transition-opacity" id="step-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mint on Solana
                            </div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-aura-bg/90 backdrop-blur border-t border-aura-border/50 px-4 py-2 flex items-center justify-between text-[10px] md:text-xs text-aura-muted z-40">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-grotesk hidden sm:inline">Solana Mainnet</span>
</div>
<span className="font-grotesk">TPS: <span className="text-white" id="tps-val">2,491</span></span>
</div>
<div className="flex items-center gap-4">
<span className="font-grotesk flex items-center gap-1"><iconify-icon icon="solar:server-linear"></iconify-icon> <span id="active-rpc">Helius</span></span>
<span className="font-grotesk text-aura-primary">v2.4.1</span>
</div>
</div>


    </>
  );
}
