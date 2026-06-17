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



        // --- SIMULATED BACKEND API ---
        class MockBackend {
            constructor() {
                this.dbKey = 'estate_app_db';
                this.initDB();
            }

            initDB() {
                if (!localStorage.getItem(this.dbKey)) {
                    const initialData = {
                        user: { name: 'Aman Resident' },
                        bills: [{
                            id: 'b1',
                            title: 'Oct Maintenance',
                            amount: 4500,
                            dueDate: 'Due in 2 days',
                            status: 'pending'
                        }]
                    };
                    localStorage.setItem(this.dbKey, JSON.stringify(initialData));
                }
            }

            async fetchDashboardData() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(JSON.parse(localStorage.getItem(this.dbKey)));
                    }, 400); // Simulate network latency
                });
            }

            async processPayment(billId) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let db = JSON.parse(localStorage.getItem(this.dbKey));
                        const billIndex = db.bills.findIndex(b => b.id === billId);
                        
                        if (billIndex > -1) {
                            db.bills.splice(billIndex, 1); // Mark as paid/remove
                            localStorage.setItem(this.dbKey, JSON.stringify(db));
                            resolve({ success: true, transactionId: 'TXN' + Date.now() });
                        } else {
                            reject(new Error('Bill not found'));
                        }
                    }, 1500); // Simulate payment processing time
                });
            }
        }

        const api = new MockBackend();
        let currentPendingBillId = null;

        // --- APP INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', async () => {
            try {
                const data = await api.fetchDashboardData();
                renderDashboard(data);
            } catch (error) {
                showToast('Failed to load data', 'error');
            }
        });

        function renderDashboard(data) {
            // Update User Profile
            document.getElementById('user-name-display').textContent = data.user.name;
            document.getElementById('profile-name-display').textContent = data.user.name;

            // Render Bills/Attention Section
            const attentionSection = document.getElementById('section-attention');
            const attentionList = document.getElementById('attention-list');
            
            if (data.bills && data.bills.length > 0) {
                attentionSection.classList.remove('hidden');
                
                data.bills.forEach(bill => {
                    const billCard = document.createElement('div');
                    billCard.id = `card-bill-${bill.id}`;
                    billCard.className = 'bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between transition-all duration-300';
                    billCard.innerHTML = `
                        <div class="flex items-center gap-3.5">
                            <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 text-slate-600">
                                <iconify-icon icon="solar:wallet-money-linear" width="20" height="20"></iconify-icon>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-slate-900 tracking-tight">${bill.title}</p>
                                <p class="text-xs text-red-500 font-medium mt-0.5">${bill.dueDate}</p>
                            </div>
                        </div>
                        <button onclick="triggerPayment('${bill.id}', ${bill.amount}, '${bill.title}')" class="bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-slate-800 transition-colors active:scale-95 outline-none">
                            Pay ₹${bill.amount.toLocaleString('en-IN')}
                        </button>
                    `;
                    attentionList.prepend(billCard);
                });
            } else {
                attentionSection.classList.add('hidden');
            }
        }

        // --- TOAST NOTIFICATIONS ---
        function showToast(message, type = 'default') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let icon = 'solar:info-circle-linear';
            let colors = 'bg-slate-900 text-white shadow-lg shadow-slate-900/20';
            
            if (type === 'success') {
                icon = 'solar:check-circle-linear';
                colors = 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20';
            } else if (type === 'error') {
                icon = 'solar:close-circle-linear';
                colors = 'bg-red-500 text-white shadow-lg shadow-red-500/20';
            }

            toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl ${colors} fade-in max-w-[90%] mx-auto`;
            toast.innerHTML = `
                <iconify-icon icon="${icon}" width="18" height="18"></iconify-icon>
                <span class="text-xs font-medium tracking-wide">${message}</span>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.replace('fade-in', 'fade-out');
                setTimeout(() => toast.remove(), 200);
            }, 3000);
        }

        // --- NAVIGATION TABS ---
        const navBtns = document.querySelectorAll('.nav-btn');
        const views = document.querySelectorAll('.page-view');
        
        const iconMap = {
            'home': { linear: 'solar:home-smile-linear', bold: 'solar:home-smile-bold' },
            'activity': { linear: 'solar:clipboard-list-linear', bold: 'solar:clipboard-list-bold' },
            'social': { linear: 'solar:users-group-two-rounded-linear', bold: 'solar:users-group-two-rounded-bold' },
            'profile': { linear: 'solar:user-circle-linear', bold: 'solar:user-circle-bold' }
        };

        function switchTab(targetId) {
            views.forEach(view => view.classList.add('hidden'));
            const activeView = document.getElementById(`view-${targetId}`);
            if (activeView) activeView.classList.remove('hidden');

            navBtns.forEach(btn => {
                const id = btn.dataset.target;
                const iconEl = btn.querySelector('iconify-icon');
                
                if (id === targetId) {
                    btn.classList.remove('text-slate-400');
                    btn.classList.add('text-slate-900');
                    iconEl.setAttribute('icon', iconMap[id].bold);
                } else {
                    btn.classList.add('text-slate-400');
                    btn.classList.remove('text-slate-900');
                    iconEl.setAttribute('icon', iconMap[id].linear);
                }
            });
            window.scrollTo(0, 0);
        }

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn.dataset.target));
        });

        // --- QUICK ACTIONS ---
        const quickActionBtns = document.querySelectorAll('#quick-actions button');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                if(action === 'SOS') {
                    showToast('Initiating SOS sequence...', 'error');
                } else {
                    showToast(`Opening ${action}...`);
                }
            });
        });

        document.getElementById('btn-notifications').addEventListener('click', () => {
            showToast('No new notifications right now.');
            document.getElementById('notification-badge').classList.add('hidden');
        });

        const noticeBtn = document.getElementById('btn-dismiss-notice');
        if(noticeBtn) {
            noticeBtn.addEventListener('click', (e) => {
                e.target.closest('section').style.display = 'none';
                showToast('Notice dismissed');
            });
        }

        // --- MODALS ---
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('.modal-content');
            modal.classList.remove('hidden');
            requestAnimationFrame(() => content.classList.remove('translate-y-full'));
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('.modal-content');
            content.classList.add('translate-y-full');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }

        document.getElementById('btn-show-pass').addEventListener('click', () => openModal('modal-pass'));

        // --- PAYMENT FLOW ---
        window.triggerPayment = function(id, amount, title) {
            currentPendingBillId = id;
            document.getElementById('pay-modal-title').textContent = title;
            document.getElementById('pay-modal-amount').textContent = `₹${amount.toLocaleString('en-IN')}.00`;
            openModal('modal-pay');
        };

        document.getElementById('btn-confirm-pay').addEventListener('click', async function() {
            if(!currentPendingBillId) return;
            
            const btn = this;
            const textSpan = btn.querySelector('span');
            const spinner = document.getElementById('pay-spinner');
            
            // Loading state
            textSpan.textContent = 'Processing...';
            spinner.classList.remove('hidden');
            btn.classList.add('opacity-80', 'pointer-events-none');

            try {
                // Call Mock Backend
                const response = await api.processPayment(currentPendingBillId);
                
                if(response.success) {
                    closeModal('modal-pay');
                    showToast('Payment successful!', 'success');
                    
                    // Update DOM
                    const billCard = document.getElementById(`card-bill-${currentPendingBillId}`);
                    if(billCard) {
                        billCard.classList.add('opacity-0', 'scale-95');
                        setTimeout(() => {
                            billCard.remove();
                            // Hide section if empty
                            const attentionList = document.getElementById('attention-list');
                            const remainingCards = attentionList.querySelectorAll('[id^="card-bill-"]');
                            if(remainingCards.length === 0) {
                                document.getElementById('section-attention').style.display = 'none';
                            }
                        }, 300);
                    }
                }
            } catch (error) {
                showToast('Payment failed. Try again.', 'error');
            } finally {
                // Reset button state
                textSpan.textContent = 'Confirm Payment';
                spinner.classList.add('hidden');
                btn.classList.remove('opacity-80', 'pointer-events-none');
                currentPendingBillId = null;
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
      

<header className="px-5 pt-12 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-100 flex justify-between items-center pt-safe">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center tracking-tighter font-semibold text-lg shadow-sm">
                SE
            </div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Welcome home</p>
<h1 className="text-lg font-semibold tracking-tight leading-none text-slate-900" id="user-name-display">...</h1>
</div>
</div>
<div className="flex items-center gap-2">
<button className="relative p-2 text-slate-500 hover:text-slate-800 transition-colors rounded-full hover:bg-slate-50 outline-none" id="btn-notifications">
<iconify-icon height="24" icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" id="notification-badge"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative">

<div className="page-view pb-28" id="view-home">

<section className="px-5 pt-6">
<div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 rounded-2xl p-5 relative overflow-hidden">
<button className="absolute top-3 right-3 text-blue-400 hover:text-blue-700 z-20 p-1 rounded-full hover:bg-blue-100/50 transition-colors outline-none" id="btn-dismiss-notice">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="relative z-10 w-2/3">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-white/60 border border-white/80 text-xs font-medium text-blue-700 mb-3 backdrop-blur-sm">
<iconify-icon height="14" icon="solar:info-circle-linear" width="14"></iconify-icon>
                            Notice
                        </span>
<h2 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Water Supply Update</h2>
<p className="text-xs text-slate-600 leading-relaxed">Routine maintenance scheduled for tomorrow 10 AM - 2 PM.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 text-blue-600 pointer-events-none">
<iconify-icon height="120" icon="solar:drop-linear" width="120"></iconify-icon>
</div>
</div>
</section>

<section className="px-5 pt-8">
<h3 className="text-sm font-medium text-slate-500 mb-4 tracking-tight">Quick Actions</h3>
<div className="grid grid-cols-4 gap-y-6 gap-x-2" id="quick-actions">
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Report">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:shield-warning-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Report</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Services">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:wrench-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Services</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Pay Bills">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:bill-list-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Pay Bills</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Pre-Approve">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:user-id-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Pre-Approve</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Events">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:calendar-date-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Events</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Directory">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:documents-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Directory</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="Helpdesk">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-active:scale-95 transition-all group-hover:border-slate-300">
<iconify-icon height="26" icon="solar:chat-round-line-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">Helpdesk</span>
</button>
<button className="flex flex-col items-center gap-2 group outline-none" data-action="SOS">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-500 shadow-sm border border-red-100 bg-red-50 group-active:scale-95 transition-all group-hover:border-red-300">
<iconify-icon height="26" icon="solar:phone-calling-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600">SOS</span>
</button>
</div>
</section>

<section className="px-5 mt-10 hidden" id="section-attention">
<h3 className="text-sm font-medium text-slate-500 mb-4 tracking-tight">Needs Attention</h3>
<div className="space-y-3" id="attention-list">


<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-slate-300 transition-colors" onclick="showToast('Opening ticket details...')">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-600 uppercase tracking-wider">In Progress</span>
</div>
<span className="text-xs text-slate-400 font-medium">#REQ-849</span>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Electrical Repair - Kitchen</p>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">Technician assigned for today, 2:00 PM.</p>
</div>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-1 outline-none">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="px-5 mt-10 mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-500 tracking-tight">Today at the Gate</h3>
<button className="text-xs font-medium text-slate-900 hover:text-slate-600 transition-colors outline-none" onclick="switchTab('activity')">View All</button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onclick="showToast('Viewing package details')">
<div className="flex items-center gap-3.5">
<div className="relative">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 text-slate-600">
<iconify-icon height="20" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
<iconify-icon className="text-white" height="8" icon="solar:check-read-linear" width="8"></iconify-icon>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Amazon Package</p>
<p className="text-xs text-slate-500 mt-0.5">Left at security desk</p>
</div>
</div>
<span className="text-xs font-medium text-slate-400">10m ago</span>
</div>
<div className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onclick="showToast('Viewing visitor details')">
<div className="flex items-center gap-3.5">
<div className="relative">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 text-slate-600">
<iconify-icon height="20" icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
<iconify-icon className="text-white" height="8" icon="solar:login-2-linear" width="8"></iconify-icon>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Suresh (Maid)</p>
<p className="text-xs text-slate-500 mt-0.5">Checked In</p>
</div>
</div>
<span className="text-xs font-medium text-slate-400">2h ago</span>
</div>
</div>
</section>
</div>

<div className="page-view hidden pb-28 px-5 pt-6 h-full flex flex-col" id="view-activity">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Recent Activity</h2>
<div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
<iconify-icon className="mb-4 text-slate-400" height="48" icon="solar:clipboard-list-linear" width="48"></iconify-icon>
<p className="text-sm font-medium text-slate-900">No new activity</p>
<p className="text-xs text-slate-500 mt-1">You're all caught up!</p>
</div>
</div>

<div className="page-view hidden pb-28 px-5 pt-6 h-full flex flex-col" id="view-social">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Community Board</h2>
<div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
<iconify-icon className="mb-4 text-slate-400" height="48" icon="solar:users-group-two-rounded-linear" width="48"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Quiet around here</p>
<p className="text-xs text-slate-500 mt-1">Be the first to post something.</p>
</div>
</div>

<div className="page-view hidden pb-28 px-5 pt-6 h-full flex flex-col" id="view-profile">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">My Profile</h2>
<div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm mb-6">
<div className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center tracking-tighter font-semibold text-xl">
                    AR
                </div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900" id="profile-name-display">...</h3>
<p className="text-xs text-slate-500 mt-0.5">Unit A-402 • Tenant</p>
</div>
</div>
<button className="w-full bg-white border border-slate-200 rounded-xl p-4 text-left text-sm font-medium text-red-500 hover:bg-red-50 transition-colors outline-none" onclick="showToast('Logging out...')">
                Log Out
            </button>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 py-3 flex justify-between items-end z-30 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-900 w-12 pb-1 outline-none transition-colors" data-target="home">
<iconify-icon height="24" icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 w-12 pb-1 outline-none transition-colors" data-target="activity">
<iconify-icon height="24" icon="solar:clipboard-list-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Activity</span>
</button>

<button className="relative flex flex-col items-center justify-center -mt-8 group outline-none" id="btn-show-pass">
<div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-md border-4 border-slate-50 group-active:scale-95 transition-transform">
<iconify-icon height="26" icon="solar:qr-code-linear" width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 mt-1.5 tracking-tight">Pass</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 w-12 pb-1 outline-none transition-colors" data-target="social">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Social</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 w-12 pb-1 outline-none transition-colors" data-target="profile">
<iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Profile</span>
</button>
</nav>


<div className="fixed top-16 left-0 w-full px-5 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 z-50 hidden" id="modal-pass">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm modal-backdrop" onclick="closeModal('modal-pass')"></div>
<div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl pt-6 pb-12 px-6 shadow-2xl modal-content transform translate-y-full transition-transform duration-300">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
<div className="text-center mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Your Gate Pass</h3>
<p className="text-xs text-slate-500 mt-1">Scan this at the main entrance</p>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-center justify-center mb-6 w-4/5 mx-auto aspect-square">

<iconify-icon className="text-slate-900 w-full h-full" icon="solar:qr-code-linear" style={{fontSize: '160px'}}></iconify-icon>
</div>
<p className="text-center text-xs font-medium text-slate-400 tracking-widest uppercase mb-8">Valid until 11:59 PM</p>
<button className="w-full bg-slate-100 text-slate-900 font-medium py-3.5 rounded-xl hover:bg-slate-200 transition-colors outline-none text-sm" onclick="closeModal('modal-pass')">
                Close
            </button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-pay">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm modal-backdrop" onclick="closeModal('modal-pay')"></div>
<div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl pt-6 pb-12 px-6 shadow-2xl modal-content transform translate-y-full transition-transform duration-300">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900" id="pay-modal-title">Pay Maintenance</h3>
<p className="text-xs text-slate-500 mt-1">October 2023</p>
</div>
<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6 flex justify-between items-center">
<span className="text-sm font-medium text-slate-600">Total Amount</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="pay-modal-amount">₹0.00</span>
</div>
<div className="space-y-3 mb-8">
<label className="flex items-center justify-between p-4 border border-blue-600 bg-blue-50/50 rounded-xl cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-600" height="24" icon="solar:card-2-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Credit Card (...4242)</span>
</div>
<div className="w-4 h-4 rounded-full border-4 border-blue-600 bg-white"></div>
</label>
<label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-500" height="24" icon="solar:banknotes-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-900">UPI / Net Banking</span>
</div>
<div className="w-4 h-4 rounded-full border border-slate-300"></div>
</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98] outline-none text-sm flex items-center justify-center gap-2" id="btn-confirm-pay">
<span>Confirm Payment</span>
<iconify-icon className="hidden animate-spin" height="18" icon="solar:spinner-linear" id="pay-spinner" width="18"></iconify-icon>
</button>
</div>
</div>


    </>
  );
}
