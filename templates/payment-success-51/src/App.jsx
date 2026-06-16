import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function closeCard() {
            document.getElementById('card').classList.add('hidden');
        }
        // Dismiss on Escape key
        window.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') closeCard();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fade-in bg-[#181C23] border border-[#2D2F36] max-w-sm w-full rounded-xl shadow-2xl overflow-hidden relative" id="card">
<div className="p-6 flex flex-col items-center">
<div className="w-14 h-14 flex items-center justify-center bg-green-500/10 rounded-full mb-4 shadow-md text-green-400">
<iconify-icon height="32" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h2 className="text-gray-100 text-xl font-bold mb-1 text-center tracking-tight">Payment Successful</h2>
<p className="text-gray-400 text-sm text-center mb-5">Your payment has been processed securely. Thank you!</p>
<div className="bg-[#23262E] rounded-lg w-full px-4 py-3 mb-4">
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">Amount</span>
<span className="text-gray-100 font-semibold">2500 r.s</span>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">To</span>
<span className="text-gray-100">Little Angel High School</span>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">For</span>
<span className="text-gray-100">School fees</span>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">Payment Date</span>
<span className="text-gray-100">03/10/2026</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-400">Transaction ID</span>
<span className="text-gray-100">7849567355663</span>
</div>
</div>
<button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors mb-2">Download Receipt</button>
<button className="w-full py-2 bg-[#23262E] hover:bg-[#2d313b] text-gray-200 font-medium rounded-md transition-colors" onclick="closeCard()">Dismiss</button>
</div>
<button aria-label="Close" className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 p-1 rounded transition-colors flex items-center justify-center" onclick="closeCard()">
<iconify-icon height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>


    </>
  );
}
