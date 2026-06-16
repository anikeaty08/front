import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.DOTS({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 256,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8a5cf7,
        color2: 0x14b8a6,
        backgroundColor: 0x111827,
        size: 2.80,
        spacing: 22.00,
        showLines: true,
        points: 12,
        maxDistance: 20.00,
        backgroundColor: 0x111827
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md w-full bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-800">
<div className="relative h-64" id="vanta-canvas">
<div className="absolute top-3 left-4 z-10">
<h2 className="text-2xl font-bold text-white">Global Network</h2>
<p className="text-gray-400 text-sm">Interactive 3D visualization</p>
</div>
<div className="absolute bottom-3 right-4 bg-gray-900/70 backdrop-blur-sm rounded-lg p-2 z-10 shadow-sm">
<div className="flex space-x-3 text-xs text-gray-300">
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-1.5"></span>
<span>Main Hub</span>
</div>
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-1.5"></span>
<span>Regional Office</span>
</div>
</div>
</div>
</div>
<div className="p-5 bg-gray-900/80">
<div className="flex justify-between text-gray-300 text-sm">
<div>
<p className="font-medium">San Francisco</p>
<p className="text-xs text-gray-500">Headquarters</p>
</div>
<div>
<p className="font-medium">New York</p>
<p className="text-xs text-gray-500">East Coast Office</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-800">
<p className="text-gray-400 text-sm">Our global presence spans key strategic locations, enabling us to serve clients worldwide with localized expertise and 24/7 support capabilities.</p>
</div>
</div>
</div>


    </>
  );
}
