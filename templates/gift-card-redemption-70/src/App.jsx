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



        // Elements
        const codeInput = document.getElementById('code-input');
        const enterBtn = document.getElementById('enter-btn');
        const cameraBtn = document.getElementById('camera-btn');
        const overlay = document.getElementById('action-sheet-overlay');
        const sheet = document.getElementById('action-sheet');
        const cancelSheet = document.getElementById('cancel-sheet');
        const galleryOpt = document.getElementById('gallery-opt');
        const photoOpt = document.getElementById('photo-opt');
        const fileInput = document.getElementById('file-input');
        const loadingView = document.getElementById('loading-view');
        const errorView = document.getElementById('error-view');
        const retryBtn = document.getElementById('retry-btn');
        const mainView = document.getElementById('main-view');

        let typingTimer;
        const doneTypingInterval = 600; // ms

        // --- Logic: Input & Enter Button ---
        codeInput.addEventListener('input', () => {
            // Hide button while typing
            enterBtn.classList.add('hidden');
            enterBtn.classList.remove('fade-enter-active');
            
            clearTimeout(typingTimer);
            
            if (codeInput.value.length > 0) {
                typingTimer = setTimeout(() => {
                    // Show button when typing stops
                    enterBtn.classList.remove('hidden');
                    // Small delay for CSS transition to grab
                    requestAnimationFrame(() => {
                        enterBtn.classList.add('fade-enter-active');
                    });
                }, doneTypingInterval);
            }
        });

        enterBtn.addEventListener('click', () => {
            triggerLoading();
        });

        // --- Logic: Camera Action Sheet ---
        cameraBtn.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            // Force reflow
            void overlay.offsetWidth; 
            overlay.classList.remove('opacity-0');
            
            // Slide up sheet
            sheet.classList.remove('translate-y-full');
            sheet.classList.add('translate-y-0');
        });

        const closeSheet = () => {
            sheet.classList.remove('translate-y-0');
            sheet.classList.add('translate-y-full');
            overlay.classList.add('opacity-0');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        };

        cancelSheet.addEventListener('click', closeSheet);
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) closeSheet();
        });

        // --- Logic: Gallery & Photo Actions ---
        galleryOpt.addEventListener('click', () => {
            closeSheet();
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                triggerLoading();
            }
        });

        photoOpt.addEventListener('click', () => {
            closeSheet();
            triggerLoading();
        });

        // --- Logic: Loading & Error ---
        function triggerLoading() {
            // Check if mobile or desktop to size the loading overlay correctly
            // For this design, loading covers the full screen or the card? 
            // Apple Pay usually covers the card content. 
            // I'll make it cover the body or main view.
            
            loadingView.classList.remove('hidden');
            
            // Simulate network request
            setTimeout(() => {
                loadingView.classList.add('hidden');
                showError();
            }, 2000);
        }

        function showError() {
            errorView.classList.remove('hidden');
            // Subtle entrance animation
            errorView.firstElementChild.classList.add('fade-enter');
            requestAnimationFrame(() => {
                errorView.firstElementChild.classList.add('fade-enter-active');
                errorView.firstElementChild.classList.remove('fade-enter');
            });
        }

        retryBtn.addEventListener('click', () => {
            // Reset everything
            errorView.classList.add('hidden');
            codeInput.value = '';
            enterBtn.classList.add('hidden');
            fileInput.value = ''; // clear file input
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
      

<main className="relative w-full h-full md:h-auto md:max-w-md md:rounded-[2rem] bg-black md:bg-zinc-900 md:shadow-2xl md:shadow-black/50 flex flex-col overflow-hidden transition-all duration-500" id="main-view">

<header className="pt-6 pb-4 flex justify-center items-center w-full z-10">
<div className="flex items-center gap-1 opacity-90">
<iconify-icon className="text-white mb-0.5" icon="solar:apple-linear" width="20"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Pay</span>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col items-center">

<div className="w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-xl relative overflow-hidden mb-8 transform transition-transform hover:scale-[1.02] duration-500 group cursor-default">
<div className="absolute inset-0 card-shine"></div>

<div className="absolute top-4 left-5 right-5 flex justify-between items-start">
<iconify-icon className="text-white/90" icon="solar:apple-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-white/60">DIGITAL GIFT CARD</span>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="text-2xl font-medium text-white tracking-tight mb-2">$512.00</div>
<div className="flex gap-1.5 opacity-60">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-xs ml-1 font-mono tracking-widest text-white">8842</span>
</div>
</div>
</div>

<div className="text-center mb-8 w-full max-w-xs">
<h1 className="text-2xl font-medium tracking-tight mb-2 text-white">Redeem Gift Card</h1>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                    Redeem a gift card using your computer in Apple Pay.
                </p>
</div>

<div className="w-full space-y-2 mb-6 relative group">
<label className="text-sm font-medium text-zinc-300 ml-1" htmlFor="code-input">Insert Code</label>
<div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-3">
<div className="relative flex-1">
<input autocomplete="off" className="w-full bg-zinc-800 text-white text-lg px-4 py-3.5 rounded-xl border border-zinc-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-600 font-normal tracking-wide" id="code-input" placeholder="Enter gift card code" type="text"/>
</div>

<button className="hidden bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium text-base px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 md:w-auto w-full" id="enter-btn">
<span>Enter</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="w-full">
<button className="w-full bg-zinc-800/80 hover:bg-zinc-800 active:bg-zinc-700 text-blue-400 font-medium text-base py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2.5" id="camera-btn">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Use Camera
                </button>
</div>
</div>

<footer className="py-6 text-center border-t border-zinc-800/50 bg-black md:bg-transparent">
<div className="flex justify-center items-center gap-1.5 text-zinc-500">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-xs font-normal">Secure redemption via Apple Pay</span>
</div>
</footer>

<input accept="image/*" className="hidden" id="file-input" type="file"/>
</main>

<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="action-sheet-overlay">
<div className="absolute inset-0 flex items-end md:items-center justify-center p-4">

<div className="w-full max-w-sm transform translate-y-full transition-transform duration-300 ease-spring" id="action-sheet">

<div className="bg-zinc-800/90 backdrop-blur-xl rounded-xl overflow-hidden mb-3">
<button className="w-full p-4 text-center text-blue-400 text-lg hover:bg-zinc-700/50 active:bg-zinc-700/70 transition-colors border-b border-zinc-700/50" id="gallery-opt">
                        Choose from Gallery
                    </button>
<button className="w-full p-4 text-center text-blue-400 text-lg hover:bg-zinc-700/50 active:bg-zinc-700/70 transition-colors" id="photo-opt">
                        Take Photo
                    </button>
</div>

<button className="w-full p-4 bg-zinc-800/90 backdrop-blur-xl rounded-xl text-center text-blue-400 font-semibold text-lg hover:bg-zinc-700/50 active:bg-zinc-700/70 transition-colors mb-4 md:mb-0" id="cancel-sheet">
                    Cancel
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center hidden" id="loading-view">
<div className="relative">

<svg className="spinner text-zinc-500 w-10 h-10 mb-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
<circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="60" strokeWidth="3"></circle>
</svg>
</div>
<p className="text-zinc-400 font-normal text-base animate-pulse">Checking card information...</p>
</div>

<div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center p-6 hidden" id="error-view">
<div className="w-full max-w-sm text-center">
<div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-white mb-3">Unable to Redeem</h2>
<p className="text-zinc-400 text-base leading-relaxed mb-10 px-4">
                This card cannot be used at this moment. <br className="hidden md:block"/>Please try another card.
            </p>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-base py-4 rounded-xl transition-colors" id="retry-btn">
                Try Another Card
            </button>
</div>
</div>


    </>
  );
}
