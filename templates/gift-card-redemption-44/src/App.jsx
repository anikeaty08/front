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



        const codeInput = document.getElementById('code-input');
        const enterBtn = document.getElementById('enter-btn');
        const actionSheet = document.getElementById('action-sheet');
        const backdrop = document.getElementById('action-sheet-backdrop');
        const loadingOverlay = document.getElementById('loading-overlay');
        const formSection = document.getElementById('redemption-form');
        const resultSection = document.getElementById('result-state');

        // Input Logic: Show "Enter" button when typing
        codeInput.addEventListener('input', (e) => {
            if (e.target.value.length > 0) {
                enterBtn.classList.remove('opacity-0', 'translate-x-4', 'pointer-events-none');
                enterBtn.classList.add('opacity-100', 'translate-x-0', 'pointer-events-auto');
            } else {
                enterBtn.classList.add('opacity-0', 'translate-x-4', 'pointer-events-none');
                enterBtn.classList.remove('opacity-100', 'translate-x-0', 'pointer-events-auto');
            }
        });

        // Trigger on Enter key
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && codeInput.value.length > 0) {
                triggerVerification();
            }
        });

        function triggerVerification() {
            // Simulate processing
            handleImageSelect();
        }

        // Action Sheet Logic
        function openActionSheet() {
            backdrop.classList.remove('hidden');
            // Trigger reflow
            void backdrop.offsetWidth; 
            backdrop.classList.remove('opacity-0');
            
            actionSheet.classList.remove('translate-y-full');
        }

        function closeActionSheet() {
            actionSheet.classList.add('translate-y-full');
            backdrop.classList.add('opacity-0');
            
            setTimeout(() => {
                backdrop.classList.add('hidden');
            }, 300);
        }

        // Flow Logic: Loading -> Error
        function handleImageSelect() {
            closeActionSheet();
            
            // Show Loading
            loadingOverlay.classList.remove('hidden');
            // Small delay for fade in
            setTimeout(() => {
                loadingOverlay.classList.remove('opacity-0');
            }, 50);

            // Simulate Verification Network Request
            setTimeout(() => {
                finishLoadingAndShowError();
            }, 2500);
        }

        function finishLoadingAndShowError() {
            // Hide Loading
            loadingOverlay.classList.add('opacity-0');
            
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                
                // Hide Form, Show Result
                formSection.classList.add('hidden');
                resultSection.classList.remove('hidden');
                resultSection.classList.add('flex'); // restore flex display
                
                // Animate fade in of result
                resultSection.animate([
                    { opacity: 0, transform: 'translateY(10px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], {
                    duration: 500,
                    easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
                });

            }, 300);
        }

        function resetUI() {
            // Reset to initial state
            resultSection.classList.add('hidden');
            resultSection.classList.remove('flex');
            
            formSection.classList.remove('hidden');
            
            // Clear input
            codeInput.value = '';
            enterBtn.classList.add('opacity-0', 'translate-x-4', 'pointer-events-none');
            
            // Animate form back in
            formSection.animate([
                { opacity: 0, transform: 'scale(0.98)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 400,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full flex justify-center pt-6 pb-2 z-10">
<div className="flex items-center gap-1 opacity-90">
<iconify-icon className="text-white" icon="cib:apple" width="20"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Pay</span>
</div>
</header>

<main className="flex-1 w-full max-w-md flex flex-col items-center px-6 relative z-10 mt-4">


<div className="w-full aspect-[1.586/1] mb-10 relative animate-float perspective-1000 group cursor-default">

<div className="w-full h-full rounded-2xl relative overflow-hidden shadow-2xl shadow-zinc-900/50 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10 transition-transform duration-700">

<div className="absolute inset-0 w-full h-full pointer-events-none z-20">
<div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sheen h-full blur-md"></div>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">Digital Gift Card</span>
<iconify-icon className="text-white opacity-80" icon="cib:apple" width="24"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Balance</span>
<span className="text-2xl font-semibold tracking-tight text-white">$512.00</span>
</div>

<div className="flex gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
<span className="text-xs text-white/60 ml-1 font-mono">8921</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col items-center transition-all duration-500" id="redemption-form">
<h1 className="text-2xl font-medium tracking-tight text-center mb-2">Redeem Gift Card</h1>
<p className="text-sm text-zinc-400 text-center mb-8 max-w-xs leading-relaxed">
                Redeem a gift card using your computer or camera in Apple Pay.
            </p>

<div className="w-full relative group mb-4">
<label className="absolute -top-2 left-3 bg-black px-1 text-xs text-zinc-500 transition-colors group-focus-within:text-blue-500" htmlFor="code-input">Insert Code</label>
<div className="w-full h-12 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center px-3 focus-within:border-blue-500/50 transition-colors relative overflow-hidden">
<input autocomplete="off" className="w-full bg-transparent text-base text-white placeholder-zinc-600 focus:outline-none tracking-widest font-mono uppercase" id="code-input" placeholder="Enter gift card code" type="text"/>

<button className="absolute right-1 top-1 bottom-1 bg-white text-black text-xs font-semibold px-4 rounded hover:bg-zinc-200 transition-all duration-300 opacity-0 translate-x-4 pointer-events-none" id="enter-btn" onclick="triggerVerification()">
                        Enter
                    </button>
</div>
</div>
<div className="relative w-full flex items-center justify-center my-4">
<span className="bg-black px-2 text-xs text-zinc-600">or</span>
<div className="absolute inset-0 border-t border-zinc-900 -z-10"></div>
</div>

<button className="w-full h-12 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-blue-400 text-sm font-medium flex items-center justify-center gap-2 transition-colors active:scale-[0.98] duration-200" onclick="openActionSheet()">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Use Camera
            </button>
</div>

<div className="w-full hidden flex-col items-center text-center animate-pulse-fade-in" id="result-state">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight mb-2">Card Error</h2>
<p className="text-sm text-zinc-400 mb-8 max-w-[260px] leading-relaxed">
                This card cannot be used at this moment. Please try another card.
            </p>
<button className="w-full h-12 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors active:scale-95 duration-200" onclick="resetUI()">
                Try Another Card
            </button>
</div>
</main>

<footer className="w-full py-6 text-center z-10">
<div className="flex items-center justify-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium">Secure redemption via Apple Pay</span>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center hidden opacity-0 transition-opacity duration-300" id="loading-overlay">

<div className="w-64 aspect-[1.586/1] mb-8 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl animate-float opacity-50 scale-90"></div>
<div className="w-8 h-8 rounded-full border-[3px] loader-ring mb-4"></div>
<span className="text-sm font-medium text-white/90 tracking-wide">Checking card information...</span>
</div>

<div className="fixed inset-0 bg-black/60 z-40 hidden transition-opacity duration-300 opacity-0" id="action-sheet-backdrop" onclick="closeActionSheet()"></div>
<div className="fixed bottom-0 left-0 right-0 z-50 transform translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] max-w-md mx-auto" id="action-sheet">
<div className="bg-zinc-900/90 backdrop-blur-xl rounded-t-2xl p-4 pb-8 border-t border-white/5 ring-1 ring-white/10">
<div className="w-10 h-1 rounded-full bg-zinc-600 mx-auto mb-6 opacity-50"></div>
<div className="space-y-3">
<button className="w-full p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center gap-4 transition-colors text-left group" onclick="handleImageSelect()">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Choose from Gallery</div>
<div className="text-xs text-zinc-500">Upload an image of your code</div>
</div>
</button>
<button className="w-full p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center gap-4 transition-colors text-left group" onclick="handleImageSelect()">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Take Photo</div>
<div className="text-xs text-zinc-500">Scan the card directly</div>
</div>
</button>
<button className="w-full p-4 mt-2 rounded-xl bg-black text-white font-medium text-sm hover:bg-zinc-900 border border-zinc-800 transition-colors" onclick="closeActionSheet()">
                    Cancel
                </button>
</div>
</div>
</div>


    </>
  );
}
