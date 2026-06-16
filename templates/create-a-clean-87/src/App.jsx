import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let passcode = [];
        
        function goToScreen2() {
            const s1 = document.getElementById('screen-1');
            const s2 = document.getElementById('screen-2');
            
            s1.classList.add('hidden');
            s2.classList.remove('hidden');
            s2.classList.add('fade-enter-active');
        }

        function updateDots() {
            const dots = document.querySelectorAll('#dots-container div');
            dots.forEach((dot, index) => {
                if (index < passcode.length) {
                    dot.classList.remove('border', 'border-[#38383A]');
                    dot.classList.add('bg-[#0A84FF]');
                } else {
                    dot.classList.add('border', 'border-[#38383A]');
                    dot.classList.remove('bg-[#0A84FF]');
                }
            });
        }

        function pressKey(num) {
            if (passcode.length < 4) {
                passcode.push(num);
                updateDots();

                if (passcode.length === 4) {
                    setTimeout(() => {
                        processTransaction();
                    }, 400); // Slight pause after last digit for visual feedback
                }
            }
        }

        function deleteKey() {
            if (passcode.length > 0) {
                passcode.pop();
                updateDots();
            }
        }

        function processTransaction() {
            // Simulate processing
            const s2 = document.getElementById('screen-2');
            const s3 = document.getElementById('screen-3');

            // Fade out visuals (optional loader could go here)
            s2.style.opacity = '0.7';
            
            setTimeout(() => {
                s2.classList.add('hidden');
                s2.style.opacity = '1';
                s3.classList.remove('hidden');
                s3.classList.add('fade-enter-active');
            }, 3000); // 3 seconds delay
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-[500px] bg-[#1C1C1E] rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.03)] overflow-hidden relative" id="screen-1">
<div className="p-8 pb-6">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<span className="text-white font-medium text-base tracking-tight">Apple Pay</span>
</div>
<span className="text-[#A1A1A6] text-base">••8921</span>
</div>

<div className="mb-8">
<h1 className="text-5xl font-bold tracking-tight text-white">$500.00</h1>
</div>
<div className="border-t border-[#38383A] my-5"></div>

<div className="mb-5">
<h3 className="text-[#A1A1A6] text-xs font-medium uppercase tracking-wider mb-1.5">Recipient</h3>
<div className="flex flex-col gap-0.5">
<span className="text-white text-lg font-semibold tracking-tight">NmexBasePortal</span>
<span className="text-[#A1A1A6] text-sm">New Mexico · Verified Recipient</span>
<span className="text-[#A1A1A6] text-sm mt-0.5 tracking-wider">•••-•••-6156</span>
</div>
</div>
<div className="border-t border-[#38383A] my-5"></div>

<div className="mb-5">
<h3 className="text-[#A1A1A6] text-xs font-medium uppercase tracking-wider mb-1.5">Card</h3>
<span className="text-white text-[1.0625rem]">Apple Cash ••8921</span>
</div>
<div className="border-t border-[#38383A] my-5"></div>

<div className="mb-5">
<div className="flex justify-between">
<span className="text-[#A1A1A6] text-sm">Memo</span>
<span className="text-[#A1A1A6] text-sm text-right">Vehicle release payment</span>
</div>
</div>

<div className="mb-8">
<h3 className="text-[#A1A1A6] text-xs mb-1">Transaction Reference</h3>
<span className="text-white font-mono text-sm font-medium tracking-wide">NMP-500-2611-7FXK</span>
</div>

<button className="w-full bg-[#0A84FF] hover:bg-[#0077E6] active:bg-[#0062BD] transition-colors text-white text-[1.0625rem] font-medium py-3.5 rounded-xl mb-4" onclick="goToScreen2()">
                Pay with Passcode
            </button>

<div className="text-left">
<button className="text-[#0A84FF] text-[0.9375rem] hover:text-[#409CFF] transition-colors">Cancel</button>
</div>
</div>
</div>

<div className="w-[500px] bg-[#1C1C1E] rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.03)] overflow-hidden relative hidden p-8 flex flex-col items-center" id="screen-2">
<div className="mt-4 mb-2 text-center">
<h2 className="text-white text-lg font-semibold tracking-tight mb-1">Enter Passcode</h2>
<p className="text-[#A1A1A6] text-[0.9375rem]">Apple Cash</p>
</div>

<div className="flex gap-4 my-10" id="dots-container">
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200" data-dot="1"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200" data-dot="2"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200" data-dot="3"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200" data-dot="4"></div>
</div>

<div className="grid grid-cols-3 gap-x-8 gap-y-5 mb-8">
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(1)">1</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(2)">2</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(3)">3</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(4)">4</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(5)">5</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(6)">6</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(7)">7</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(8)">8</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(9)">9</button>
<div className="w-[72px] h-[72px]"></div> 
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] text-white text-2xl hover:bg-[#3A3A3C] active:bg-[#48484A] transition-colors flex items-center justify-center select-none" onclick="pressKey(0)">0</button>
<button className="w-[72px] h-[72px] rounded-full text-white text-xl flex items-center justify-center hover:bg-white/5 active:bg-white/10 transition-colors select-none" onclick="deleteKey()">
<iconify-icon icon="solar:backspace-linear" width="26"></iconify-icon>
</button>
</div>
<button className="text-[#0A84FF] text-[0.9375rem] font-normal hover:text-[#409CFF] transition-colors mt-2" onclick="location.reload()">Cancel</button>
</div>

<div className="w-[500px] bg-[#1C1C1E] rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.03)] overflow-hidden relative hidden" id="screen-3">
<div className="p-8 pt-10 flex flex-col items-center text-center">

<div className="mb-6 text-[#FF453A]">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>

<h2 className="text-white text-xl font-semibold tracking-tight mb-3">Weekly Send Limit Reached</h2>

<p className="text-[#A1A1A6] text-base mb-8 max-w-[80%] leading-relaxed">You have used your weekly limit.</p>
<div className="w-full border-t border-[#38383A] mb-6"></div>

<div className="mb-2">
<p className="text-[#A1A1A6] text-base mb-1">Next available:</p>
<p className="text-white text-lg font-bold tracking-tight">February 18, 2026</p>
</div>
<p className="text-[#8E8E93] text-xs mt-3 mb-8">7-day rolling reset · Limit refreshes automatically</p>

<p className="text-[#FF453A] text-[0.9375rem] mb-8">This transaction cannot be completed.</p>

<div className="w-full border-t border-[#38383A] pt-4">
<button className="w-full text-[#0A84FF] text-[1.0625rem] font-medium py-2 hover:opacity-80 transition-opacity" onclick="location.reload()">
                    OK
                </button>
</div>
</div>
</div>


    </>
  );
}
