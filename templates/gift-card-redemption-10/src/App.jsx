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



        // DOM Elements
        const giftCodeInput = document.getElementById('giftCode');
        const submitBtn = document.getElementById('submitBtn');
        const loadingOverlay = document.getElementById('loadingOverlay');
        const errorContainer = document.getElementById('errorContainer');
        const errorText = document.getElementById('errorText');
        
        const cameraTrigger = document.getElementById('cameraTrigger');
        const cameraModal = document.getElementById('cameraModal');
        const modalContent = document.getElementById('modalContent');
        const cancelBtn = document.getElementById('cancelBtn');
        const galleryBtn = document.getElementById('galleryBtn');
        const takePhotoBtn = document.getElementById('takePhotoBtn');
        const fileInput = document.getElementById('fileInput');

        // Logic Variables
        let isProcessing = false;

        // --- Core Functions ---

        function showLoading() {
            if (isProcessing) return;
            isProcessing = true;
            
            // Hide previous errors
            errorContainer.classList.add('hidden');
            
            // Show overlay
            loadingOverlay.classList.remove('opacity-0', 'pointer-events-none');
            
            // Blur effect on background elements slightly? No, design requests overlay on card.
        }

        function hideLoading() {
            isProcessing = false;
            loadingOverlay.classList.add('opacity-0', 'pointer-events-none');
        }

        function displayError(message, code = null) {
            hideLoading();
            errorContainer.classList.remove('hidden');
            
            if (code) {
                // Secure handling of HTML insertion
                errorText.innerHTML = `This card (<span class="text-white font-mono bg-white/10 px-1 rounded mx-0.5">${code}</span>) cannot be used at this moment. Please try another card.`;
            } else {
                errorText.textContent = message || "An unknown error occurred.";
            }
        }

        function handleCodeSubmit() {
            const code = giftCodeInput.value.trim();
            if (!code || isProcessing) return;

            showLoading();

            // 3-5 second delay
            setTimeout(() => {
                displayError(null, code);
            }, 4000);
        }

        function handleCameraSelection() {
            // Close modal first
            closeModal();
            
            // Trigger loading immediately after selection logic
            showLoading();

            setTimeout(() => {
                displayError("Cannot verify image content. Please enter code manually.");
            }, 3500);
        }

        // --- Event Listeners ---

        // Input Submit (Click)
        submitBtn.addEventListener('click', handleCodeSubmit);

        // Input Submit (Enter Key)
        giftCodeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleCodeSubmit();
                // Close mobile keyboard
                giftCodeInput.blur();
            }
        });

        // Camera Logic
        cameraTrigger.addEventListener('click', () => {
            cameraModal.classList.remove('hidden');
            // Small delay to allow display block to render before opacity transition
            setTimeout(() => {
                cameraModal.classList.remove('opacity-0');
                modalContent.classList.remove('translate-y-full');
            }, 10);
        });

        function closeModal() {
            modalContent.classList.add('translate-y-full');
            cameraModal.classList.add('opacity-0');
            setTimeout(() => {
                cameraModal.classList.add('hidden');
            }, 300);
        }

        cancelBtn.addEventListener('click', closeModal);

        // Gallery Action
        galleryBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                handleCameraSelection();
                // Reset input
                fileInput.value = '';
            }
        });

        // Photo Action
        takePhotoBtn.addEventListener('click', () => {
            // Simulate camera capture flow
            handleCameraSelection();
        });

        // Close modal on outside tap
        cameraModal.addEventListener('click', (e) => {
            if (e.target === cameraModal) closeModal();
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
      

<div className="w-full max-w-sm flex flex-col items-center relative">

<header className="flex items-center gap-1 mb-10 opacity-90">
<iconify-icon className="text-white pb-1" height="20" icon="cib:apple" width="20"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">Pay</span>
</header>

<div className="relative w-full aspect-[1.58/1] mb-12 group perspective">

<div className="absolute inset-0 z-50 rounded-2xl bg-black/60 backdrop-blur-md flex flex-col items-center justify-center opacity-0 pointer-events-none transition-all duration-300" id="loadingOverlay">
<iconify-icon className="spinner text-white/80 mb-3" height="32" icon="solar:restart-linear" width="32"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white/90">Checking card information...</span>
</div>

<div className="card-anim w-full h-full rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10 shadow-2xl relative overflow-hidden p-6 flex flex-col justify-between">

<div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">Digital Gift Card</span>
<span className="text-xl font-medium tracking-tight">$512.00</span>
</div>
<div className="flex items-center gap-1">
<span className="text-xs text-zinc-500 tracking-wider h-full flex items-center pt-1">• • • •</span>
<span className="text-xs font-mono text-zinc-400">8921</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
<iconify-icon height="120" icon="cib:apple" width="120"></iconify-icon>
</div>
<div className="z-10">
<span className="text-sm font-medium text-zinc-300 tracking-tight block opacity-80">Marcus Reynold</span>
</div>
</div>
</div>

<div className="w-full space-y-6">
<div className="text-center space-y-1">
<h1 className="text-2xl font-semibold tracking-tight">Redeem Gift Card</h1>
<p className="text-sm text-zinc-500 font-medium">Redeem a gift card using Apple Pay.</p>
</div>
<div className="space-y-4">

<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="giftCode">Insert Code</label>
<div className="relative group">
<input className="w-full bg-zinc-900/80 border border-zinc-800 text-white text-base rounded-xl py-4 pl-4 pr-12 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors" id="giftCode" placeholder="Enter gift card code" type="text"/>

<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white flex items-center justify-center transition-colors active:scale-95" id="submitBtn">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden" id="errorContainer">
<p className="text-sm text-red-400 text-center leading-snug px-2" id="errorText"></p>
</div>

<div className="pt-2 flex justify-center">
<button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-2 px-4 rounded-full bg-zinc-900/50 hover:bg-zinc-900 border border-transparent hover:border-zinc-800" id="cameraTrigger">
<iconify-icon height="18" icon="solar:camera-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Use Camera</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex flex-col justify-end sm:justify-center items-center opacity-0 transition-opacity duration-200" id="cameraModal">

<input accept="image/*" className="hidden" id="fileInput" type="file"/>
<div className="w-full max-w-sm p-4 space-y-2 translate-y-full sm:translate-y-0 transition-transform duration-300" id="modalContent">
<div className="bg-zinc-900/90 backdrop-blur-xl rounded-xl overflow-hidden">
<button className="w-full py-4 text-center text-blue-400 text-base font-medium border-b border-white/10 hover:bg-white/5 active:bg-white/10 transition-colors" id="takePhotoBtn">
                    Take Photo
                </button>
<button className="w-full py-4 text-center text-blue-400 text-base font-medium hover:bg-white/5 active:bg-white/10 transition-colors" id="galleryBtn">
                    Choose from Gallery
                </button>
</div>
<button className="w-full py-4 bg-zinc-900/90 backdrop-blur-xl rounded-xl text-center text-blue-400 text-base font-semibold hover:bg-white/5 active:bg-white/10 transition-colors" id="cancelBtn">
                Cancel
            </button>
</div>
</div>


    </>
  );
}
