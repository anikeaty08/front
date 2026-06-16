import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
ios: {
bg: '#1C1C1E',
blue: '#0A84FF',
red: '#FF453A',
text: '#FFFFFF',
subtext: '#A1A1A6',
border: '#38383A',
keypad: '#2C2C2E',
fine: '#8E8E93'
}
},
fontFamily: {
mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
}
}
}
}



        // State
        let passcode = "";
        const correctPasscode = "9090"; // For simulation
        
        // DOM Elements
        const screenPayment = document.getElementById('screen-payment');
        const screenPasscode = document.getElementById('screen-passcode');
        const screenLimit = document.getElementById('screen-limit');
        const dots = document.querySelectorAll('#dots-container div');

        function goToPasscode() {
            // Hide Pay, Show Passcode
            screenPayment.classList.add('-translate-x-full', 'opacity-0', 'pointer-events-none');
            
            screenPasscode.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
            screenPasscode.classList.add('translate-x-0', 'opacity-100', 'z-40');
        }

        function handleInput(num) {
            if (passcode.length < 4) {
                passcode += num;
                updateDots();
                
                if (passcode.length === 4) {
                    // Simulate processing
                    setTimeout(() => {
                        processPayment();
                    }, 300);
                }
            }
        }

        function handleBackspace() {
            if (passcode.length > 0) {
                passcode = passcode.slice(0, -1);
                updateDots();
            }
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index < passcode.length) {
                    dot.classList.remove('border-ios-border', 'bg-transparent');
                    dot.classList.add('bg-ios-blue', 'border-ios-blue');
                } else {
                    dot.classList.add('border-ios-border', 'bg-transparent');
                    dot.classList.remove('bg-ios-blue', 'border-ios-blue');
                }
            });
        }

        function processPayment() {
            // Hardcoded "9090" check for the demo flow, or just proceed anyway since it's a demo
            if (passcode === "9090") {
                 // Transition to Limit Screen
                 screenPasscode.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
                 
                 // Show loading or just wait slightly for realism
                 setTimeout(() => {
                    screenLimit.classList.remove('opacity-0', 'pointer-events-none');
                    screenLimit.classList.add('opacity-100', 'z-50');
                 }, 400);

            } else {
                // Shake animation for wrong pin (optional polish)
                const container = document.getElementById('dots-container');
                container.classList.add('dots-shake');
                setTimeout(() => {
                    container.classList.remove('dots-shake');
                    passcode = "";
                    updateDots();
                }, 400);
            }
        }

        function resetFlow() {
            // Reload page or reset states
            location.reload();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-[500px] bg-ios-bg rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] border border-ios-border relative min-h-[600px] flex flex-col transition-all duration-300" id="modal-container">

<section className="flex flex-col h-full w-full p-8 absolute inset-0 z-30 bg-ios-bg transition-all duration-300" id="screen-payment">

<header className="flex justify-between items-center mb-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:apple-linear" width="20"></iconify-icon>
<span className="text-base font-medium tracking-tight">Apple Pay</span>
</div>
<span className="text-base text-ios-subtext tracking-tight">••8921</span>
</header>

<div className="mb-10">
<h1 className="text-5xl font-semibold tracking-tight">$500.00</h1>
</div>

<div className="space-y-6 flex-grow">

<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-ios-subtext uppercase tracking-wide">PAYEE</label>
<div className="flex flex-col">
<span className="text-lg font-medium text-white tracking-tight">NmexBasePortal</span>
<span className="text-sm text-ios-subtext">New Mexico · Verified Recipient</span>
</div>
</div>
<div className="h-px bg-ios-border w-full"></div>

<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-ios-subtext uppercase tracking-wide">CARD</label>
<span className="text-base text-white tracking-tight">Apple Cash ••8921</span>
</div>

<div className="flex flex-col gap-1">
<span className="text-sm text-ios-subtext tracking-tight">Vehicle release payment</span>
</div>

<div className="flex flex-col gap-1 mt-2">
<label className="text-xs text-ios-subtext tracking-wide">Transaction Reference</label>
<span className="text-sm font-medium text-white font-mono uppercase tracking-wide">NMP-500-2611-7FXK</span>
</div>
</div>

<div className="mt-10 space-y-4">
<button className="w-full bg-ios-blue hover:bg-blue-600 active:scale-[0.98] transition-all text-white font-medium text-base py-4 rounded-xl shadow-sm tracking-tight" onclick="goToPasscode()">
                    Pay with Passcode
                </button>
<button className="w-full text-ios-blue text-sm font-normal text-left px-1 hover:opacity-80 transition-opacity">
                    Cancel
                </button>
</div>
</section>

<section className="flex flex-col h-full w-full p-8 absolute inset-0 z-20 bg-ios-bg translate-x-full opacity-0 pointer-events-none transition-all duration-300" id="screen-passcode">
<div className="flex-grow flex flex-col items-center justify-center pt-8">
<h2 className="text-lg font-medium text-white mb-2 tracking-tight">Enter Passcode</h2>
<p className="text-sm text-ios-subtext mb-8 tracking-tight">Apple Cash</p>

<div className="flex gap-6 mb-12" id="dots-container">
<div className="w-3 h-3 rounded-full border border-ios-border transition-colors duration-200" data-index="0"></div>
<div className="w-3 h-3 rounded-full border border-ios-border transition-colors duration-200" data-index="1"></div>
<div className="w-3 h-3 rounded-full border border-ios-border transition-colors duration-200" data-index="2"></div>
<div className="w-3 h-3 rounded-full border border-ios-border transition-colors duration-200" data-index="3"></div>
</div>

<div className="grid grid-cols-3 gap-x-8 gap-y-5">
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(1)">1</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(2)">2</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(3)">3</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(4)">4</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(5)">5</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(6)">6</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(7)">7</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(8)">8</button>
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(9)">9</button>
<div className="w-[72px]"></div> 
<button className="key-btn w-[72px] h-[72px] rounded-full bg-ios-keypad text-2xl font-normal flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-600 transition-colors" onclick="handleInput(0)">0</button>
<button className="key-btn w-[72px] h-[72px] text-white flex items-center justify-center hover:opacity-70 active:opacity-50 transition-opacity" onclick="handleBackspace()">
<iconify-icon icon="solar:backspace-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 text-center pb-4">
<button className="text-ios-blue text-sm font-normal hover:opacity-80" onclick="resetFlow()">Cancel</button>
</div>
</section>

<section className="flex flex-col h-full w-full p-8 absolute inset-0 z-10 bg-ios-bg opacity-0 pointer-events-none transition-all duration-500" id="screen-limit">
<div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
<div className="mb-2">
<iconify-icon className="text-ios-red" icon="solar:info-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-white tracking-tight">Weekly Send Limit Reached</h2>
<p className="text-base text-ios-subtext tracking-tight px-4">You have used your weekly limit.</p>
<div className="py-2">
<p className="text-base text-ios-subtext tracking-tight">Next available:</p>
<p className="text-lg font-semibold text-white tracking-tight mt-1">February 18, 2026</p>
</div>
<p className="text-xs text-ios-fine tracking-tight">7-day rolling reset · Limit refreshes automatically</p>
<p className="text-sm text-ios-red tracking-tight pt-4">This transaction cannot be completed.</p>
</div>
<div className="mt-auto w-full border-t border-ios-border pt-4">
<button className="w-full text-ios-blue font-medium text-base py-3 hover:bg-white/5 rounded-lg transition-colors" onclick="resetFlow()">OK</button>
</div>
</section>
</main>


    </>
  );
}
