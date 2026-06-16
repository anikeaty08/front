import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
app: {
bg: '#000000',
card: '#111111',
border: 'rgba(255, 255, 255, 0.08)',
text: '#f5f5f5',
muted: '#737373',
accent: '#6366f1'
}
},
animation: {
'slide-down': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
slideDown: {
'0%': { transform: 'translateY(-100%)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(100%)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
scaleIn: {
'0%': { transform: 'scale(0.95)', opacity: '0' },
'100%': { transform: 'scale(1)', opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // DOM Elements
            const sendBtn = document.getElementById('sendBtn');
            
            const notificationBanner = document.getElementById('notificationBanner');
            
            const modalBackdrop = document.getElementById('modalBackdrop');
            const upgradeModal = document.getElementById('upgradeModal');
            const notifyBtn = document.getElementById('notifyBtn');
            const goBackBtn = document.getElementById('goBackBtn');
            const helpLink = document.getElementById('helpLink');
            
            const sheetBackdrop = document.getElementById('sheetBackdrop');
            const bottomSheet = document.getElementById('bottomSheet');
            const sendInstructionsBtn = document.getElementById('sendInstructionsBtn');
            
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');

            // State
            let notificationTimeout;
            let toastTimeout;

            // Utilities
            const showElement = (el, classesToRemove, classesToAdd) => {
                el.classList.remove(...classesToRemove.split(' '));
                el.classList.add(...classesToAdd.split(' '));
                el.classList.remove('pointer-events-none');
            };

            const hideElement = (el, classesToRemove, classesToAdd) => {
                el.classList.remove(...classesToRemove.split(' '));
                el.classList.add(...classesToAdd.split(' '));
                el.classList.add('pointer-events-none');
            };

            const showToast = (message) => {
                clearTimeout(toastTimeout);
                toastMessage.textContent = message;
                showElement(toast, 'translate-y-10 opacity-0', 'translate-y-0 opacity-100');
                
                toastTimeout = setTimeout(() => {
                    hideElement(toast, 'translate-y-0 opacity-100', 'translate-y-10 opacity-0');
                }, 3000);
            };

            // Main Flow Interaction
            sendBtn.addEventListener('click', () => {
                // Disable button
                sendBtn.disabled = true;
                sendBtn.innerHTML = `
                    <iconify-icon icon="solar:spinner-linear" class="text-lg animate-spin"></iconify-icon>
                    Processing...
                `;

                // Simulate brief network delay
                setTimeout(() => {
                    sendBtn.innerHTML = `
                        <iconify-icon icon="solar:plain-2-linear" class="text-lg"></iconify-icon>
                        Send
                    `;

                    // 1. Show Banner
                    showElement(notificationBanner, '-translate-y-[150%] opacity-0', 'translate-y-0 opacity-100');
                    
                    // Auto hide banner after 4s
                    notificationTimeout = setTimeout(() => {
                        hideElement(notificationBanner, 'translate-y-0 opacity-100', '-translate-y-[150%] opacity-0');
                    }, 4000);

                    // 2. Show Modal (with slight delay for banner to appear first)
                    setTimeout(() => {
                        modalBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                        modalBackdrop.classList.add('opacity-100');
                        showElement(upgradeModal, 'opacity-0 scale-95', 'opacity-100 scale-100');
                    }, 600);

                }, 800);
            });

            // Modal Interactions
            goBackBtn.addEventListener('click', () => {
                modalBackdrop.classList.remove('opacity-100');
                modalBackdrop.classList.add('opacity-0', 'pointer-events-none');
                hideElement(upgradeModal, 'opacity-100 scale-100', 'opacity-0 scale-95');
                // Optional: Re-enable send button if you want them to be able to try again immediately
                // sendBtn.disabled = false;
            });

            notifyBtn.addEventListener('click', () => {
                modalBackdrop.classList.remove('opacity-100');
                modalBackdrop.classList.add('opacity-0', 'pointer-events-none');
                hideElement(upgradeModal, 'opacity-100 scale-100', 'opacity-0 scale-95');
                
                setTimeout(() => {
                    showToast('Notification Sent');
                }, 300);
            });

            helpLink.addEventListener('click', () => {
                // Hide modal
                modalBackdrop.classList.remove('opacity-100');
                modalBackdrop.classList.add('opacity-0', 'pointer-events-none');
                hideElement(upgradeModal, 'opacity-100 scale-100', 'opacity-0 scale-95');

                // Show Bottom Sheet
                setTimeout(() => {
                    sheetBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                    sheetBackdrop.classList.add('opacity-100');
                    showElement(bottomSheet, 'translate-y-full', 'translate-y-0');
                }, 300);
            });

            // Bottom Sheet Interactions
            const closeSheet = () => {
                sheetBackdrop.classList.remove('opacity-100');
                sheetBackdrop.classList.add('opacity-0', 'pointer-events-none');
                hideElement(bottomSheet, 'translate-y-0', 'translate-y-full');
            };

            sheetBackdrop.addEventListener('click', closeSheet);

            sendInstructionsBtn.addEventListener('click', () => {
                closeSheet();
                setTimeout(() => {
                    showToast('Instructions Sent');
                }, 400);
            });

            // Swipe up to dismiss banner
            let startY = 0;
            notificationBanner.addEventListener('touchstart', e => startY = e.touches[0].clientY);
            notificationBanner.addEventListener('touchmove', e => {
                if (startY - e.touches[0].clientY > 10) {
                    clearTimeout(notificationTimeout);
                    hideElement(notificationBanner, 'translate-y-0 opacity-100', '-translate-y-[150%] opacity-0');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

<main className="w-full h-[100dvh] sm:h-auto sm:max-h-[850px] sm:aspect-[9/19] max-w-[400px] relative flex flex-col justify-between sm:rounded-[2.5rem] sm:border sm:border-app-border sm:bg-black/50 sm:backdrop-blur-xl sm:shadow-2xl overflow-hidden z-10 p-6 pt-12 pb-8">

<header className="flex flex-col items-center gap-1 w-full relative z-10">
<div className="text-xs text-app-muted uppercase tracking-widest font-light">Sending to</div>
<div className="flex items-center gap-2 bg-white/5 py-1.5 px-4 rounded-full border border-white/5 backdrop-blur-md">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-medium text-white shadow-sm">
                    R
                </div>
<span className="text-sm font-normal text-neutral-200">rby92@icloud.com</span>
</div>
</header>

<section className="flex flex-col items-center justify-center flex-1 w-full relative z-10 mt-8">
<h1 className="text-6xl sm:text-7xl font-extralight tracking-tighter text-white mb-6">
                $1,000.00
            </h1>

<div className="w-full max-w-[240px] flex flex-col gap-2.5 pt-6 border-t border-white/10 relative">
<div className="flex justify-between items-center text-xs text-app-muted font-light">
<span>Transfer Fee</span>
<span>$2.00</span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-400 font-normal">
<span>Total</span>
<span>$1,002.00</span>
</div>
</div>
</section>

<div className="w-full mt-auto relative z-10">
<button className="w-full group relative flex items-center justify-center py-4 rounded-2xl bg-white text-black text-base font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed glow-effect overflow-hidden" id="sendBtn">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<span className="relative flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
                    Send
                </span>
</button>
</div>


<div className="absolute top-4 left-4 right-4 z-50 glass-panel border border-app-border rounded-2xl p-4 flex gap-3 shadow-2xl transform -translate-y-[150%] opacity-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)" id="notificationBanner">
<div className="mt-0.5 text-app-accent flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-white tracking-tight">Pay</h3>
<p className="text-xs text-app-muted font-light leading-relaxed">
                    Payment on hold — recipient needs to upgrade their account to receive this transfer.
                </p>
</div>
</div>

<div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="modalBackdrop"></div>

<div className="absolute inset-0 z-50 flex items-center justify-center p-6 opacity-0 pointer-events-none scale-95 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)" id="upgradeModal">
<div className="w-full max-w-[320px] glass-panel border border-app-border rounded-[2rem] p-6 shadow-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-app-card border border-app-border flex items-center justify-center mb-4 text-app-muted">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h2 className="text-xl font-normal text-white tracking-tight mb-2">Upgrade Required</h2>
<p className="text-sm text-app-muted font-light leading-relaxed mb-6">
                    This account needs to be upgraded before it can receive this amount.<br/><br/>
                    Once completed, transfers will be available.
                </p>
<div className="w-full flex flex-col gap-2">
<button className="w-full py-3.5 rounded-xl bg-white text-black text-sm font-medium transition-all active:scale-[0.98]" id="notifyBtn">
                        Notify Recipient
                    </button>
<button className="w-full py-3.5 rounded-xl bg-transparent text-white text-sm font-normal transition-all active:scale-[0.98] hover:bg-white/5" id="goBackBtn">
                        Go Back
                    </button>
</div>
<button className="mt-6 text-xs text-app-accent font-normal hover:text-indigo-400 transition-colors" id="helpLink">
                    Help upgrade this account
                </button>
</div>
</div>

<div className="absolute inset-0 z-40 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="sheetBackdrop"></div>

<div className="absolute bottom-0 left-0 right-0 z-50 glass-panel border-t border-app-border rounded-t-[2.5rem] p-6 pb-10 transform translate-y-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_-20px_40px_rgba(0,0,0,0.5)]" id="bottomSheet">
<div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-8"></div>
<h2 className="text-lg font-medium text-white tracking-tight mb-3">Upgrade Instructions</h2>
<p className="text-sm text-app-muted font-light leading-relaxed mb-8">
                Send an automated email to the recipient with simple, step-by-step instructions on how to verify their identity and remove account limits.
            </p>
<button className="w-full py-4 rounded-2xl bg-app-card border border-app-border text-white text-sm font-medium transition-all active:scale-[0.98] flex items-center justify-center gap-2 hover:bg-white/5" id="sendInstructionsBtn">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                Send Instructions
            </button>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] bg-app-card border border-app-border text-white text-xs font-normal px-5 py-3 rounded-full flex items-center gap-2 shadow-xl transform translate-y-10 opacity-0 pointer-events-none transition-all duration-300" id="toast">
<iconify-icon className="text-app-accent text-base" icon="solar:check-circle-linear"></iconify-icon>
<span id="toastMessage">Action completed</span>
</div>
</main>


    </>
  );
}
