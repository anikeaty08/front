import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // --- DOM Elements ---
            const balanceContainer = document.getElementById('balance-container');
            const balanceDisplay = document.getElementById('balance-display');
            const balanceInput = document.getElementById('balance-input');
            const giftInput = document.getElementById('gift-code');
            const enterBtn = document.getElementById('enter-btn');
            const statusArea = document.getElementById('status-area');
            const loadingState = document.getElementById('loading-state');
            const errorState = document.getElementById('error-state');
            
            // Camera / Sheet Elements
            const cameraTrigger = document.getElementById('camera-trigger');
            const actionSheet = document.getElementById('action-sheet');
            const sheetBackdrop = document.getElementById('sheet-backdrop');
            const sheetContent = document.getElementById('sheet-content');
            const btnCancel = document.getElementById('btn-cancel');
            const btnGallery = document.getElementById('btn-gallery');
            const btnPhoto = document.getElementById('btn-photo');
            const fileInput = document.getElementById('file-input');

            // --- 1. Editable Balance Interaction ---
            let lastTap = 0;

            function enableEdit() {
                balanceDisplay.classList.add('opacity-0');
                balanceInput.classList.remove('opacity-0', 'pointer-events-none');
                balanceInput.focus();
                // Select all text
                balanceInput.setSelectionRange(0, balanceInput.value.length);
            }

            function saveEdit() {
                const val = parseFloat(balanceInput.value).toFixed(2);
                if (!isNaN(val)) {
                    balanceDisplay.innerText = val;
                    balanceInput.value = val;
                } else {
                    balanceInput.value = balanceDisplay.innerText;
                }
                balanceDisplay.classList.remove('opacity-0');
                balanceInput.classList.add('opacity-0', 'pointer-events-none');
            }

            // Desktop Double Click
            balanceContainer.addEventListener('dblclick', (e) => {
                e.preventDefault();
                enableEdit();
            });

            // Mobile Double Tap
            balanceContainer.addEventListener('touchend', (e) => {
                const currentTime = new Date().getTime();
                const tapLength = currentTime - lastTap;
                if (tapLength < 300 && tapLength > 0) {
                    e.preventDefault();
                    enableEdit();
                }
                lastTap = currentTime;
            });

            // Save on Enter or Blur
            balanceInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    balanceInput.blur();
                }
            });
            
            balanceInput.addEventListener('blur', saveEdit);

            // --- 2. Code Input & Enter Logic ---
            
            function resetStatus() {
                loadingState.classList.add('hidden');
                errorState.classList.add('hidden');
                statusArea.classList.remove('hidden');
            }

            giftInput.addEventListener('input', (e) => {
                resetStatus();
                if (e.target.value.length > 0) {
                    enterBtn.classList.remove('opacity-0', 'translate-x-2', 'pointer-events-none');
                } else {
                    enterBtn.classList.add('opacity-0', 'translate-x-2', 'pointer-events-none');
                }
            });

            function processSubmission() {
                // Hide button, blur input
                enterBtn.classList.add('opacity-0', 'translate-x-2', 'pointer-events-none');
                giftInput.blur();
                
                // Show Loading
                loadingState.classList.remove('hidden');
                errorState.classList.add('hidden');

                // Simulate Network Request
                setTimeout(() => {
                    loadingState.classList.add('hidden');
                    errorState.classList.remove('hidden');
                    // Re-show button if text exists
                    if(giftInput.value.length > 0) {
                         enterBtn.classList.remove('opacity-0', 'translate-x-2', 'pointer-events-none');
                    }
                }, 2000);
            }

            enterBtn.addEventListener('click', processSubmission);

            // Allow Enter key in main input
            giftInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && giftInput.value.length > 0) {
                    processSubmission();
                }
            });

            // --- 3. Camera / Action Sheet Logic ---

            function openSheet() {
                resetStatus();
                actionSheet.classList.remove('hidden');
                // Trigger reflow
                void actionSheet.offsetWidth;
                
                sheetBackdrop.classList.remove('opacity-0');
                sheetContent.classList.remove('translate-y-full', 'sm:translate-y-10');
            }

            function closeSheet() {
                sheetBackdrop.classList.add('opacity-0');
                sheetContent.classList.add('translate-y-full', 'sm:translate-y-10');
                
                setTimeout(() => {
                    actionSheet.classList.add('hidden');
                }, 300);
            }

            cameraTrigger.addEventListener('click', openSheet);
            btnCancel.addEventListener('click', closeSheet);
            sheetBackdrop.addEventListener('click', closeSheet);

            // Handle Gallery Selection
            btnGallery.addEventListener('click', () => {
                closeSheet();
                fileInput.click();
            });

            fileInput.addEventListener('change', () => {
                if (fileInput.files.length > 0) {
                    // Simulate processing
                    loadingState.classList.remove('hidden');
                    setTimeout(() => {
                        loadingState.classList.add('hidden');
                        errorState.classList.remove('hidden');
                        // Clear input so same file can be selected again
                        fileInput.value = '';
                    }, 2000);
                }
            });

            // Handle Take Photo
            btnPhoto.addEventListener('click', () => {
                closeSheet();
                loadingState.classList.remove('hidden');
                // Simulate camera delay
                setTimeout(() => {
                    loadingState.classList.add('hidden');
                    errorState.classList.remove('hidden');
                }, 2500);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full flex justify-center items-center space-x-1 mb-8 opacity-90">
<iconify-icon className="text-white pb-1" icon="fa-brands:apple" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-wide">Pay</span>
</header>

<main className="w-full max-w-sm flex flex-col items-center space-y-8 relative z-10">

<div className="w-full aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-[#2c2c2e] via-[#1c1c1e] to-black border border-white/10 shadow-2xl relative overflow-hidden animate-float group cursor-pointer select-none">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Digital Gift Card</span>
<iconify-icon className="text-white/30" icon="solar:card-linear" width="24"></iconify-icon>
</div>
<div className="space-y-1">
<div className="text-xs text-white/50 font-medium">Balance</div>

<div className="relative flex items-center" id="balance-container">
<span className="text-2xl font-medium tracking-tight mr-0.5" id="currency-symbol">$</span>

<span className="text-3xl font-medium tracking-tight text-white transition-opacity duration-200" id="balance-display">512.00</span>

<input className="absolute left-6 top-0 w-32 bg-transparent text-3xl font-medium tracking-tight text-white outline-none border-none p-0 opacity-0 pointer-events-none focus:ring-0 placeholder-white/20" id="balance-input" inputmode="decimal" type="text" value="512.00"/>
</div>
</div>
<div className="flex justify-end items-center">
<span className="text-sm font-mono text-white/40 tracking-widest">•••• 8921</span>
</div>
</div>
</div>

<div className="text-center space-y-1">
<h1 className="text-2xl font-semibold tracking-tight">Redeem Gift Card</h1>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">Redeem a gift card using Apple Pay.</p>
</div>

<div className="w-full space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide ml-1" htmlFor="gift-code">Insert Code</label>
<div className="relative w-full flex items-center">
<input autocomplete="off" className="w-full bg-[#1c1c1e] text-white text-base rounded-lg py-3 px-4 outline-none border border-transparent focus:border-blue-500/50 focus:bg-[#2c2c2e] transition-all placeholder-neutral-600" id="gift-code" placeholder="Enter gift card code" type="text"/>

<button className="absolute right-2 bg-white text-black text-sm font-medium px-4 py-1.5 rounded-md opacity-0 translate-x-2 pointer-events-none transition-all duration-300 hover:bg-neutral-200" id="enter-btn">
                    Enter
                </button>
</div>

<div className="h-6 flex items-center justify-center w-full" id="status-area">

<div className="hidden flex items-center space-x-2 text-neutral-400" id="loading-state">
<iconify-icon className="animate-spin text-lg" icon="solar:spinner-linear"></iconify-icon>
<span className="text-xs">Checking card information…</span>
</div>

<div className="hidden text-red-500 text-xs text-center fade-enter-active" id="error-state">
                    This card cannot be used at this moment. Please try another card.
                </div>
</div>
</div>


<button className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#1c1c1e] rounded-xl active:scale-95 transition-transform duration-200 group border border-white/5 hover:border-white/10" id="camera-trigger">
<iconify-icon className="text-blue-500 text-xl" icon="solar:camera-linear"></iconify-icon>
<span className="text-blue-500 text-base font-medium">Use Camera</span>
</button>
</main>

<input accept="image/*" className="hidden" id="file-input" type="file"/>

<div className="fixed inset-0 z-50 hidden" id="action-sheet">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="sheet-backdrop"></div>

<div className="absolute bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-80 bg-transparent sm:bg-transparent p-4 transform translate-y-full sm:translate-y-10 transition-transform duration-300 flex flex-col items-center" id="sheet-content">

<div className="w-full space-y-2">
<div className="bg-[#1c1c1e]/90 backdrop-blur-heavy rounded-xl overflow-hidden text-center">
<button className="w-full py-4 border-b border-white/10 active:bg-white/10 transition-colors" id="btn-gallery">
<span className="text-blue-500 text-base font-normal">Choose from Gallery</span>
</button>
<button className="w-full py-4 active:bg-white/10 transition-colors" id="btn-photo">
<span className="text-blue-500 text-base font-normal">Take Photo</span>
</button>
</div>
<button className="w-full bg-[#1c1c1e] py-4 rounded-xl font-semibold active:scale-[0.98] transition-transform" id="btn-cancel">
<span className="text-blue-500 text-base">Cancel</span>
</button>
</div>
</div>
</div>


    </>
  );
}
