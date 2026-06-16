import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('confettiButton').addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#FFFFFF', '#1E40AF']
            });
        });
        
        // Auto launch confetti on page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                confetti({
                    particleCount: 80,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#FFFFFF', '#1E40AF']
                });
            }, 600);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black bg-opacity-60 backdrop z-10"></div>

<div className="w-full max-w-md bg-[#13151A] border border-[#2D2F36] rounded-lg shadow-xl overflow-hidden relative z-20 modal-animation ring-glow">

<div className="relative z-10 flex flex-col p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-blue-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="text-gray-100 text-lg font-medium tracking-tight">Operation successful</h3>
</div>
<button className="text-gray-400 hover:text-gray-200 transition-colors">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
<div className="py-2">
<p className="text-gray-400 text-sm leading-relaxed">
                    Your changes have been successfully saved. All team members will now see the updated workflow.
                </p>
<div className="mt-6 flex flex-col space-y-2">
<button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors duration-150" id="confettiButton">
                        Celebrate
                    </button>
<button className="w-full px-4 py-2 bg-[#2D2F36] hover:bg-[#3A3D47] text-gray-200 text-sm font-medium rounded transition-colors duration-150">
                        View changes
                    </button>
</div>
<div className="mt-4 pt-4 border-t border-[#2D2F36]">
<div className="flex items-center justify-between">
<span className="text-gray-500 text-xs">Created 15s ago</span>
<div className="flex items-center text-xs text-gray-500">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></span>
                            System message
                        </div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
