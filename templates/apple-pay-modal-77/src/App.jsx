import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let pin = "";
        
        function goToPasscode() {
            document.getElementById('screen-1').classList.add('hidden');
            const s2 = document.getElementById('screen-2');
            s2.classList.remove('hidden');
            s2.classList.add('flex'); // Add flex back
            pin = "";
            updateDots();
        }

        function enterDigit(num) {
            if (pin.length < 4) {
                pin += num;
                updateDots();
                
                if (pin.length === 4) {
                    processPayment();
                }
            }
        }

        function removeDigit() {
            if (pin.length > 0) {
                pin = pin.slice(0, -1);
                updateDots();
            }
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index < pin.length) {
                    dot.classList.remove('border', 'border-[#38383A]');
                    dot.classList.add('bg-[#0A84FF]');
                } else {
                    dot.classList.add('border', 'border-[#38383A]');
                    dot.classList.remove('bg-[#0A84FF]');
                }
            });
        }

        function processPayment() {
            // Simulate processing
            setTimeout(() => {
                document.getElementById('dots-container').classList.add('hidden');
                document.getElementById('keypad').classList.add('opacity-50', 'pointer-events-none');
                document.getElementById('processing-spinner').classList.remove('hidden');
                
                setTimeout(() => {
                    // Go to screen 3
                    const s2 = document.getElementById('screen-2');
                    s2.classList.add('hidden');
                    s2.classList.remove('flex');
                    document.getElementById('screen-3').classList.remove('hidden');
                }, 2000);
            }, 300);
        }

        function resetFlow() {
            // Reset UI states
            document.getElementById('screen-3').classList.add('hidden');
            const s2 = document.getElementById('screen-2');
            s2.classList.add('hidden');
            s2.classList.remove('flex');
            document.getElementById('screen-1').classList.remove('hidden');
            
            // Reset PIN UI
            pin = "";
            updateDots();
            document.getElementById('dots-container').classList.remove('hidden');
            document.getElementById('keypad').classList.remove('opacity-50', 'pointer-events-none');
            document.getElementById('processing-spinner').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[500px] bg-[#1C1C1E] rounded-2xl shadow-2xl shadow-white/5 overflow-hidden fade-enter relative" id="screen-1">

<div className="flex justify-between items-center px-8 pt-6 pb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:apple-linear" width="20"></iconify-icon>
<span className="text-base font-medium text-white tracking-tight">Apple Pay</span>
</div>
<span className="text-base font-normal text-[#A1A1A6]">••541</span>
</div>
<div className="px-8 pb-8">

<div className="mt-6 mb-8">
<h1 className="text-5xl font-semibold text-white tracking-tight">$500.00</h1>
</div>

<div className="border-t border-[#38383A] py-4 flex justify-between items-start group">
<span className="text-xs font-medium text-[#A1A1A6] uppercase tracking-wide mt-1">Payee</span>
<div className="text-right">
<div className="text-lg font-medium text-white">NmexBasePortal</div>
<div className="text-base font-normal text-[#A1A1A6] mt-0.5">New Mexico · Verified Recipient</div>
</div>
</div>

<div className="border-t border-[#38383A] py-4 flex justify-between items-center">
<span className="text-xs font-medium text-[#A1A1A6] uppercase tracking-wide">Card</span>
<div className="text-right">
<span className="text-[17px] font-normal text-white">Apple Cash ••541</span>
</div>
</div>

<div className="border-t border-[#38383A] py-4 flex justify-between items-center">
<span className="text-xs font-medium text-[#A1A1A6] uppercase tracking-wide">Memo</span>
<div className="text-right">
<span className="text-base font-normal text-[#A1A1A6]">Vehicle release payment</span>
</div>
</div>

<div className="border-t border-[#38383A] pt-4 pb-8 flex justify-between items-center">
<span className="text-xs font-normal text-[#A1A1A6]">Transaction Reference</span>
<div className="text-right">
<span className="text-sm font-medium text-white font-mono tracking-wide">NMP-500-2611-7FXK</span>
</div>
</div>

<button className="w-full bg-[#0A84FF] hover:bg-[#0071e3] active:scale-[0.99] transition-all duration-200 text-white text-[17px] font-medium py-4 rounded-xl mb-4" onclick="goToPasscode()">
                Pay with Passcode
            </button>

<button className="text-[15px] font-normal text-[#0A84FF] hover:text-[#409cff] transition-colors">
                Cancel
            </button>
</div>
</div>

<div className="hidden w-full max-w-[500px] bg-[#1C1C1E] rounded-2xl shadow-2xl shadow-white/5 overflow-hidden fade-enter relative flex-col items-center py-10 min-h-[600px] justify-center" id="screen-2">

<div className="text-center mb-8 space-y-1">
<h2 className="text-lg font-medium text-white tracking-tight">Enter Passcode</h2>
<p className="text-[15px] font-normal text-[#A1A1A6]">Apple Cash</p>
</div>

<div className="flex gap-4 mb-12" id="dots-container">
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200 dot"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200 dot"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200 dot"></div>
<div className="w-3 h-3 rounded-full border border-[#38383A] transition-all duration-200 dot"></div>
</div>

<div className="hidden mb-12 relative w-20 h-5" id="processing-spinner">
<div className="loader-dots relative w-full h-full">
<div className="absolute top-0 w-3 h-3 rounded-full bg-[#0A84FF]"></div>
<div className="absolute top-0 w-3 h-3 rounded-full bg-[#0A84FF]"></div>
<div className="absolute top-0 w-3 h-3 rounded-full bg-[#0A84FF]"></div>
<div className="absolute top-0 w-3 h-3 rounded-full bg-[#0A84FF]"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-10" id="keypad">
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(1)">1</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(2)">2</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(3)">3</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(4)">4</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(5)">5</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(6)">6</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(7)">7</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(8)">8</button>
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(9)">9</button>
<div className="w-[72px] h-[72px]"></div> 
<button className="w-[72px] h-[72px] rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-2xl font-normal text-white flex items-center justify-center transition-colors select-none" onclick="enterDigit(0)">0</button>
<button className="w-[72px] h-[72px] rounded-full hover:bg-[#2C2C2E]/50 active:bg-[#2C2C2E] text-white flex items-center justify-center transition-colors select-none group" onclick="removeDigit()">
<iconify-icon className="text-white group-active:scale-95 transition-transform" height="26" icon="solar:backspace-linear" width="26"></iconify-icon>
</button>
</div>
<button className="text-[15px] font-normal text-[#0A84FF] hover:text-[#409cff] transition-colors mt-2" onclick="resetFlow()">
            Cancel
        </button>
</div>

<div className="hidden w-full max-w-[500px] bg-[#1C1C1E] rounded-2xl shadow-2xl shadow-white/5 overflow-hidden fade-enter relative px-8 py-10 text-center" id="screen-3">

<div className="flex justify-center mb-6">
<iconify-icon className="text-[#FF453A]" height="48" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>

<h2 className="text-xl font-medium text-white mb-2 tracking-tight">Weekly Send Limit Reached</h2>

<p className="text-base font-normal text-[#A1A1A6] mb-8 leading-relaxed">
            You have used your $500 weekly limit.
        </p>

<div className="bg-[#2C2C2E]/30 rounded-lg p-6 mb-8 border border-[#38383A]">
<p className="text-base font-normal text-[#A1A1A6] mb-1">Next available:</p>
<p className="text-lg font-semibold text-white mb-3">February 18, 2026</p>
<p className="text-xs font-normal text-[#8E8E93]">7-day rolling reset · Limit refreshes automatically</p>
</div>

<p className="text-[15px] font-normal text-[#FF453A] mb-8">
            This transaction cannot be completed.
        </p>

<button className="w-full text-[17px] font-medium text-[#0A84FF] hover:bg-[#2C2C2E] py-3 rounded-xl transition-colors" onclick="resetFlow()">
            OK
        </button>
</div>


    </>
  );
}
