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
      

<section className="w-full py-24 bg-black">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight hero-text">Our Features</h2>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Discover what sets us apart in the world of design. Simplicity meets excellence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

<div className="bg-white/5 border border-white/10 rounded-2xl py-12 px-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition">
<div className="mb-6">
<div className="bg-gradient-to-tr from-blue-500 to-pink-500 p-4 rounded-full">
<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-wide">Timeless Design</h3>
<p className="text-gray-400 text-base">We focus on clarity and function, ensuring your brand stands the test of time with elegant solutions.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl py-12 px-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition">
<div className="mb-6">
<div className="bg-gradient-to-tr from-blue-500 to-green-400 p-4 rounded-full">
<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" strokeLinecap="round" strokeLinejoin="round"></path>
<rect height="10" rx="2" width="14" x="5" y="11"></rect>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-wide">Responsive Layout</h3>
<p className="text-gray-400 text-base">Every project is crafted to look stunning on any device, providing a seamless user experience everywhere.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl py-12 px-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition">
<div className="mb-6">
<div className="bg-gradient-to-tr from-pink-500 to-yellow-400 p-4 rounded-full">
<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-wide">Attention to Detail</h3>
<p className="text-gray-400 text-base">From typography to spacing, every element is thoughtfully refined for a flawless finish.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
