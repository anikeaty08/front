import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Elements ---
            const amountDisplay = document.getElementById('amount-display');
            const btnSendPayment = document.getElementById('btn-send-payment');
            
            const masterOverlay = document.getElementById('master-overlay');
            const modalPasscode = document.getElementById('modal-passcode');
            const modalLoading = document.getElementById('modal-loading');
            const modalFailed = document.getElementById('modal-failed');
            
            const passcodeInput = document.getElementById('passcode-input');
            const btnVerifyPasscode = document.getElementById('btn-verify-passcode');
            const btnCancelPasscode = document.getElementById('btn-cancel-passcode');
            const passcodeError = document.getElementById('passcode-error');
            
            const loadingProgress = document.getElementById('loading-progress');
            const loadingText = document.getElementById('loading-text');

            // --- 1. Initial Amount Count Up Animation ---
            const targetAmount = 145453;
            const duration = 1200; // ms
            const frameRate = 1000 / 60;
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;

            const easeOutQuart = x => 1 - Math.pow(1 - x, 4);

            const countUp = setInterval(() => {
                frame++;
                const progress = easeOutQuart(frame / totalFrames);
                const currentVal = Math.round(targetAmount * progress);
                
                amountDisplay.innerText = currentVal.toLocaleString('en-US');
                
                if (frame >= totalFrames) {
                    clearInterval(countUp);
                    amountDisplay.innerText = "145,453"; // Ensure final exact value
                }
            }, frameRate);

            // --- Helper: Toggle Overlay Visibility ---
            function showOverlayContainer() {
                masterOverlay.classList.remove('pointer-events-none', 'opacity-0');
                masterOverlay.classList.add('opacity-100', 'pointer-events-auto');
            }

            function hideOverlayContainer() {
                masterOverlay.classList.add('opacity-0', 'pointer-events-none');
                masterOverlay.classList.remove('opacity-100', 'pointer-events-auto');
            }

            function showModal(modalElement) {
                modalElement.classList.remove('hidden');
                // Trigger reflow
                void modalElement.offsetWidth;
                modalElement.classList.remove('opacity-0', 'scale-95');
                modalElement.classList.add('opacity-100', 'scale-100');
            }

            function hideModal(modalElement, callback) {
                modalElement.classList.remove('opacity-100', 'scale-100');
                modalElement.classList.add('opacity-0', 'scale-95');
                setTimeout(() => {
                    modalElement.classList.add('hidden');
                    if(callback) callback();
                }, 300); // match transition duration
            }

            // --- 2. Passcode Modal Logic ---
            btnSendPayment.addEventListener('click', () => {
                passcodeInput.value = '';
                passcodeError.classList.remove('opacity-100');
                showOverlayContainer();
                showModal(modalPasscode);
                setTimeout(() => passcodeInput.focus(), 300);
            });

            btnCancelPasscode.addEventListener('click', () => {
                hideModal(modalPasscode);
                hideOverlayContainer();
            });

            // Restrict input to numbers
            passcodeInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                passcodeError.classList.remove('opacity-100'); // hide error on type
            });

            function handleVerify() {
                const val = passcodeInput.value;
                if (val === '6685') {
                    // Success
                    hideModal(modalPasscode, startLoadingSequence);
                } else {
                    // Error
                    passcodeError.classList.add('opacity-100');
                    // Simple shake
                    modalPasscode.style.transform = 'translateX(-5px)';
                    setTimeout(() => modalPasscode.style.transform = 'translateX(5px)', 50);
                    setTimeout(() => modalPasscode.style.transform = 'translateX(-5px)', 100);
                    setTimeout(() => modalPasscode.style.transform = 'translateX(0)', 150);
                    passcodeInput.value = '';
                    passcodeInput.focus();
                }
            }

            btnVerifyPasscode.addEventListener('click', handleVerify);
            passcodeInput.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') handleVerify();
            });

            // --- 3. Loading Sequence ---
            const messages = [
                "Initializing transaction...",
                "Connecting to secure network...",
                "Validating routing...",
                "Encrypting payment channel...",
                "Finalizing request..."
            ];

            function startLoadingSequence() {
                showModal(modalLoading);
                
                // Start Progress bar width transition
                setTimeout(() => {
                    loadingProgress.style.width = '100%';
                }, 50);

                // Cycle text
                let msgIndex = 0;
                loadingText.innerText = messages[0];
                
                const textInterval = setInterval(() => {
                    msgIndex++;
                    if (msgIndex < messages.length) {
                        // Fade out
                        loadingText.style.opacity = '0';
                        setTimeout(() => {
                            loadingText.innerText = messages[msgIndex];
                            // Fade in
                            loadingText.style.opacity = '1';
                        }, 300);
                    }
                }, 2000); // Change roughly every 2 seconds

                // End Loading after 9.5 seconds
                setTimeout(() => {
                    clearInterval(textInterval);
                    hideModal(modalLoading, showFailedState);
                }, 9500);
            }

            // --- 4. Failed State ---
            function showFailedState() {
                showModal(modalFailed);
            }

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-glow"></div>
<div className="ambient-wash"></div>

<div className="relative z-10 w-full max-w-[1400px] h-full max-h-[900px] flex flex-col px-8 py-6">

<header className="flex justify-between items-center mb-6 shrink-0 stagger-1">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#1E3A8A] to-blue-950 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tighter text-[#1E3A8A]">
                    DIAMONDCHAIN<span className="text-[#C9A646]">BW</span>
</h1>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">Internal System • Auth Lvl 4</span>
<div className="w-8 h-8 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Philip&amp;backgroundColor=e2e8f0"/>
</div>
</div>
</header>

<main className="flex-1 flex gap-6 min-h-0">

<section className="flex-[1.6] bg-[#F5F7FA] border border-[#E6E8EC] rounded-xl p-6 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden stagger-2">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A646] to-transparent opacity-30"></div>
<h2 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:document-text-linear"></iconify-icon>
                    Transfer Summary
                </h2>
<div className="w-full h-[1px] bg-[#E6E8EC] mb-5"></div>
<div className="mb-6 flex flex-col justify-center items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">Transfer Amount</span>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-gray-900">P</span>
<span className="text-4xl font-semibold tracking-tight text-gray-900" id="amount-display">0</span>
</div>
<span className="text-xs text-gray-500 mt-1">Botswana Pula (BWP)</span>
</div>

<div className="grid grid-cols-2 gap-x-8 gap-y-6 flex-1 content-start">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Date</span>
<span className="text-sm text-gray-900 font-medium">April 9, 2026</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Transaction ID</span>
<span className="text-xs font-mono text-gray-700 bg-gray-200/50 px-2 py-1 rounded w-max border border-gray-200">TXN-8842-9901-A</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Authorized By</span>
<span className="text-sm text-gray-900 font-medium flex items-center gap-1.5">
<iconify-icon className="text-[#C9A646]" icon="solar:shield-check-linear"></iconify-icon>
                            Mr. Philip
                        </span>
</div>
<div className="col-span-2 w-full h-[1px] bg-[#E6E8EC] my-1"></div>

<div className="col-span-2 grid grid-cols-2 gap-x-8">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Recipient Name</span>
<span className="text-sm text-gray-900 font-medium">Mositi Seokolo</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Recipient Email</span>
<span className="text-sm text-gray-900 font-medium">mositiseokolo@yahoo.com</span>
</div>
</div>
<div className="col-span-2 w-full h-[1px] bg-[#E6E8EC] my-1"></div>

<div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Destination Bank</span>
<span className="text-sm text-gray-900 font-medium">First National Bank (FNB)</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Account Number</span>
<span className="text-sm text-gray-900 font-medium font-mono">62318593218</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Account Type</span>
<span className="text-sm text-gray-900 font-medium">Gold Account</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500">Branch Code</span>
<span className="text-sm text-gray-900 font-medium font-mono">283567</span>
</div>
</div>
</div>
</section>

<section className="flex-[1] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] border border-[#E6E8EC] rounded-xl p-6 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] stagger-3">
<div className="flex justify-between items-start mb-5">
<h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-id-linear"></iconify-icon>
                        Verified Identity
                    </h2>
<div className="flex items-center gap-1 text-[#059669] bg-[#059669]/10 px-2 py-1 rounded text-xs font-medium border border-[#059669]/20">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Verified
                    </div>
</div>
<div className="w-full h-[1px] bg-[#E6E8EC] mb-5"></div>
<div className="flex gap-4 mb-6">

<div className="w-20 h-24 bg-gray-200 border border-gray-300 rounded shadow-inner flex flex-col items-center justify-center text-gray-400 shrink-0 relative overflow-hidden">
<iconify-icon className="mb-1" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Photo</span>

<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
</div>
<div className="flex flex-col gap-3 justify-center">
<div className="flex flex-col">
<span className="text-xs text-gray-500 mb-0.5">Full Legal Name</span>
<span className="text-sm text-gray-900 font-medium">Mositi Seokolo</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500 mb-0.5">National ID Number</span>
<span className="text-sm text-gray-900 font-medium font-mono">005720428</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500 mb-0.5">Gender</span>
<span className="text-sm text-gray-900 font-medium">Female</span>
</div>
</div>
</div>
<div className="mt-auto flex flex-col gap-2">
<span className="text-xs text-gray-500">Digital Signature Match</span>
<div className="h-20 border border-[#E6E8EC] border-dashed rounded-lg bg-white flex items-center justify-center relative overflow-hidden">

<svg className="w-32 h-auto opacity-70" fill="none" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 200 50">
<path d="M20,30 C30,10 40,40 50,25 C60,10 70,45 80,30 C90,20 100,20 110,25 C120,30 130,15 140,25 C150,35 160,20 170,25 C180,30 190,20 185,40"></path>
</svg>
<div className="absolute bottom-1 right-2 text-[9px] text-gray-400 font-mono">Ref: SIG-92A</div>
</div>
</div>
</section>
</main>

<footer className="mt-6 pt-5 border-t border-[#E6E8EC] flex justify-end gap-4 shrink-0 stagger-3">
<button className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-[#E6E8EC] rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all active:scale-[0.98]">
                Cancel
            </button>
<button className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#C9A646] to-[#b39138] rounded-lg shadow-md shadow-[#C9A646]/20 hover:shadow-lg hover:shadow-[#C9A646]/30 transition-all active:scale-[0.98] flex items-center gap-2" id="btn-send-payment">
                Send Payment
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</footer>
</div>

<div className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4" id="master-overlay">

<div className="glass-panel w-full max-w-[400px] rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col relative scale-95 opacity-0 transition-all duration-300 hidden" id="modal-passcode">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5 mx-auto border border-blue-100">
<iconify-icon className="text-[#1E3A8A]" icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-center text-gray-900 mb-2">Authorization Required</h3>
<p className="text-sm text-gray-500 text-center mb-6 leading-relaxed">
                Enter company passcode to proceed with this transaction.
            </p>
<div className="flex flex-col gap-1 mb-6">
<input autocomplete="off" className="w-full text-center text-xl passcode-input py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A646] focus:border-transparent transition-all placeholder:text-sm text-gray-800" id="passcode-input" maxlength="4" placeholder="Enter passcode" type="password"/>
<span className="text-xs font-medium text-[#D92D20] text-center mt-2 opacity-0 transition-opacity" id="passcode-error">Incorrect passcode. Please try again.</span>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors active:scale-[0.98]" id="btn-cancel-passcode">
                    Cancel
                </button>
<button className="flex-1 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] hover:bg-blue-900 rounded-lg shadow-sm transition-colors active:scale-[0.98]" id="btn-verify-passcode">
                    Verify
                </button>
</div>
</div>

<div className="w-full max-w-[360px] flex flex-col items-center justify-center hidden opacity-0 transition-opacity duration-300 scale-95" id="modal-loading">

<div className="relative w-16 h-16 mb-6">
<svg className="w-full h-full spinner-ring text-[#C9A646]" viewbox="0 0 50 50">
<circle cx="25" cy="25" fill="none" opacity="0.8" r="20" stroke="currentColor" stroke-dasharray="30 100" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="25" cy="25" fill="none" opacity="0.2" r="20" stroke="currentColor" strokeWidth="1"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-md" icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium text-white drop-shadow-md status-text mb-5 tracking-wide" id="loading-text">Initializing transaction...</span>

<div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
<div className="h-full bg-[#C9A646] rounded-full w-0 transition-all ease-linear" id="loading-progress" style={{transitionDuration: '9.5s'}}></div>
</div>
</div>

<div className="glass-panel w-full max-w-[560px] rounded-2xl shadow-2xl border border-white/20 p-0 flex flex-col overflow-hidden scale-95 opacity-0 transition-all duration-500 hidden" id="modal-failed">
<div className="p-8 pb-6 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-[#D92D20]/10 flex items-center justify-center mb-4 border border-[#D92D20]/20">
<iconify-icon className="text-[#D92D20]" icon="solar:close-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Payment Failed</h3>
<p className="text-sm text-gray-500 mb-6">
                    Transaction ID: TXN-8842-9901-A
                </p>

<div className="w-full bg-gray-50 border border-[#D92D20]/30 rounded-xl p-5 text-left flex flex-col gap-3 shadow-inner">
<p className="text-sm text-gray-800 font-medium leading-relaxed">
                        The transfer failed because the receiving network requires a Cross-Network High-Value Verification fee of <span className="font-semibold text-gray-900">P5,500</span>.
                    </p>
<p className="text-sm text-gray-600 leading-relaxed">
                        This fee is a one-time compliance charge required to unlock the high-value routing channel for the recipient's account.
                    </p>
<p className="text-sm text-[#D92D20] font-medium leading-relaxed bg-[#D92D20]/5 px-3 py-2 rounded-md border border-[#D92D20]/10">
                        Until the fee is cleared, the amount of P145,453 remains in a pending state.
                    </p>
<p className="text-sm text-gray-600 leading-relaxed">
                        Once the P5,500 verification fee is completed, the transaction will automatically process without any further action.
                    </p>
</div>
</div>
<div className="bg-gray-50/80 px-8 py-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 flex-1 text-left sm:pr-4">
                    Your payment could not be completed. Please review the details or try again.
                </p>
<div className="flex gap-3 shrink-0 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors active:scale-[0.98]">
                        Cancel Transaction
                    </button>
<button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-black rounded-lg shadow-sm transition-colors active:scale-[0.98]">
                        Retry Payment
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
