import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
<div className="text-center space-y-3">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Animated Glowing Button</h1>
<p className="text-gray-300 text-base md:text-lg">Experience the mesmerizing rainbow gradient animation</p>
</div>
<div className="flex flex-col sm:flex-row gap-6 items-center justify-center flex-wrap">
<button className="glowing-border relative z-0 px-8 py-3 border-none outline-none cursor-pointer rounded-xl select-none transition-all duration-300 ease-in-out hover:opacity-90 active:scale-95 font-medium text-base" role="button" style={{color: '#072929'}}>
                Glow Button
            </button>
<button className="glowing-border relative z-0 px-10 py-4 border-none outline-none cursor-pointer rounded-xl select-none transition-all duration-300 ease-in-out hover:opacity-90 active:scale-95 font-semibold text-lg" role="button" style={{color: '#072929'}}>
                Get Started
            </button>
<button className="glowing-border relative z-0 px-6 py-2.5 border-none outline-none cursor-pointer rounded-xl select-none transition-all duration-300 ease-in-out hover:opacity-90 active:scale-95 font-medium text-sm" role="button" style={{color: '#072929'}}>
                Learn More
            </button>
</div>
<div className="mt-8 p-6 rounded-2xl backdrop-blur-sm max-w-md" style={{backgroundColor: 'rgba(7, 41, 41, 0.6)', border: '1px solid rgba(177, 250, 99, 0.2)'}}>
<h3 className="text-lg font-semibold text-white mb-3">Features</h3>
<ul className="space-y-2 text-gray-300 text-sm">
<li className="flex items-start gap-2">
<span className="mt-0.5" style={{color: '#B1FA63'}}>✓</span>
<span>Smooth rainbow gradient animation</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5" style={{color: '#B1FA63'}}>✓</span>
<span>Blur effect for enhanced glow</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5" style={{color: '#B1FA63'}}>✓</span>
<span>Active state with scale transform</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5" style={{color: '#B1FA63'}}>✓</span>
<span>Fully responsive design</span>
</li>
</ul>
</div>
</div>

    </>
  );
}
