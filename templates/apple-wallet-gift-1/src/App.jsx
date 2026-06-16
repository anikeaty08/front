import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function handleRedeem() {
            const input = document.getElementById('giftCodeInput');
            const btn = document.getElementById('redeemBtn');
            const loader = document.getElementById('loader');
            const errorMsg = document.getElementById('errorMessage');
            const targetCode = document.getElementById('errorTargetCode');
            
            const code = input.value;
            
            if (!code) return;

            // UI State: Loading
            btn.classList.add('hidden');
            loader.classList.remove('hidden');
            errorMsg.classList.add('hidden');
            input.disabled = true;
            input.classList.add('opacity-50');

            // Simulate Network Request
            setTimeout(() => {
                // UI State: Error
                loader.classList.add('hidden');
                btn.classList.remove('hidden'); 
                input.disabled = false;
                input.classList.remove('opacity-50');
                input.focus();
                
                targetCode.innerText = `(${code})`;
                errorMsg.classList.remove('hidden');
                
            }, 4000); 
        }

        // Add Enter key listener
        document.getElementById('giftCodeInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleRedeem();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-[420px] min-h-screen flex flex-col p-6 sm:py-8 relative">

<header className="flex justify-center items-center gap-1.5 mb-8 opacity-90">
<iconify-icon className="text-white invert brightness-0 saturate-100" icon="logos:apple" width="18"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white leading-none">Pay</span>
</header>


<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-8 z-10">

<div className="absolute inset-0 bg-gradient-to-br from-[#2c2c2e] via-[#151515] to-[#000000]"></div>

<div className="absolute inset-0 card-texture mix-blend-overlay opacity-50"></div>

<div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

<div className="absolute inset-0 p-5 flex flex-col justify-between z-20">

<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Digital Gift Card</span>
<span className="text-3xl font-medium tracking-tight text-gray-100">$705.00</span>
</div>
<span className="text-sm font-medium text-gray-400 tracking-wide translate-y-0.5">•••• 8921</span>
</div>

<div className="text-sm font-medium text-gray-300 tracking-normal">
                    Marcus Reynold
                </div>
</div>
</div>

<section className="mb-10">
<h2 className="text-xl font-semibold tracking-tight text-white mb-1">Redeem Gift Card</h2>
<p className="text-sm text-gray-400 mb-4">Redeem a gift card using Apple Pay.</p>
<div className="relative group">
<input autocomplete="off" className="w-full bg-[#1c1c1e] text-white placeholder-gray-500 rounded-xl py-3.5 pl-4 pr-12 text-base outline-none ring-0 focus:ring-1 focus:ring-blue-500/50 transition-all font-sans" id="giftCodeInput" placeholder="Enter Code" spellcheck="false" type="text"/>

<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-full text-gray-400 hover:text-white transition-colors flex items-center justify-center" id="redeemBtn" onclick="handleRedeem()">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<div className="hidden absolute right-3.5 top-1/2 -translate-y-1/2" id="loader">
<div className="loader"></div>
</div>
</div>

<p className="hidden text-red-500 text-xs mt-3 leading-relaxed font-medium animate-pulse" id="errorMessage">
                This card <span className="font-mono" id="errorTargetCode"></span> cannot be used at this moment. Please try another card.
            </p>

<button className="w-full mt-6 flex items-center justify-center gap-2 text-[#0A84FF] active:opacity-70 transition-opacity">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Use Camera</span>
</button>
</section>

<section className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Transaction History</h3>
<p className="text-xs text-gray-500 uppercase font-semibold mb-4 tracking-wide pl-0.5">Today</p>
<div className="flex flex-col gap-y-4">

<div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 items-center text-xs">
<span className="text-gray-500 font-medium whitespace-nowrap">09 Feb 2026</span>
<span className="text-gray-400/80 font-mono tracking-wide truncate">X9YL3PC97Z95MLM7</span>
<span className="text-white font-medium text-right whitespace-nowrap">$200</span>
<span className="text-green-500 font-medium text-right whitespace-nowrap">Valid</span>
</div>

<div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 items-center text-xs">
<span className="text-gray-500 font-medium whitespace-nowrap">09 Feb 2026</span>
<span className="text-gray-400/80 font-mono tracking-wide truncate">XTYZHLQN9QL6XCTD</span>
<span className="text-white font-medium text-right whitespace-nowrap">$300</span>
<span className="text-red-500 font-medium text-right whitespace-nowrap">Invalid</span>
</div>

<div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 items-center text-xs">
<span className="text-gray-500 font-medium whitespace-nowrap">09 Feb 2026</span>
<span className="text-gray-400/80 font-mono tracking-wide truncate">XTQNZWNWYH72FPCW</span>
<span className="text-white font-medium text-right whitespace-nowrap">$500</span>
<span className="text-green-500 font-medium text-right whitespace-nowrap">Valid</span>
</div>
</div>
</section>

<footer className="mt-auto pt-10 pb-2">
<p className="text-xs text-gray-500/60 text-center leading-normal max-w-xs mx-auto">
                Your balance is held by Green Dot Bank, Member FDIC. Apple Payments Inc. is a licensed money transmitter.
            </p>
</footer>
</main>


    </>
  );
}
