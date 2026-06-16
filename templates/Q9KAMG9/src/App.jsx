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
      
<div className="w-full max-w-6xl px-4">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-3">What Our Customers Say</h2>
<p className="text-lg text-indigo-100">Real stories from real users. Experience the difference yourself.</p>
</div>
<div className="grid grid-cols-4 grid-rows-2 gap-6 auto-rows-fr">

<div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/10 col-span-1 row-span-1">
<img alt="James" className="w-12 h-12 rounded-full border-2 border-indigo-400 mb-2 object-cover" src="https://randomuser.me/api/portraits/men/40.jpg"/>
<div className="text-white text-center mb-2">"Seamless integration and excellent support."</div>
<div className="text-indigo-200 font-medium text-sm">James Lee</div>
<div className="text-indigo-400 text-xs">CTO, BetaTech</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col justify-between border border-white/10 col-span-2 row-span-1">
<div className="flex flex-col items-center">
<img alt="Sarah" className="w-20 h-20 rounded-full border-4 border-indigo-500 mb-4 shadow-lg object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<blockquote className="text-xl text-white text-center font-semibold mb-4">"Absolutely life-changing! Our team is more productive than ever."</blockquote>
<div className="text-indigo-200 font-medium">Sarah Williams</div>
<div className="text-indigo-400 text-sm">Project Lead, Acme Inc.</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/10 col-span-1 row-span-1">
<img alt="Ana" className="w-12 h-12 rounded-full border-2 border-indigo-400 mb-2 object-cover" src="https://randomuser.me/api/portraits/women/52.jpg"/>
<div className="text-white text-center mb-2">"Our workflow improved dramatically. Highly recommend."</div>
<div className="text-indigo-200 font-medium text-sm">Ana Silva</div>
<div className="text-indigo-400 text-xs">Designer, Creatify</div>
</div>

<div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/10 col-span-1 row-span-1">
<img alt="David" className="w-12 h-12 rounded-full border-2 border-indigo-400 mb-2 object-cover" src="https://randomuser.me/api/portraits/men/24.jpg"/>
<div className="text-white text-center mb-2">"Fast, reliable, and easy to use."</div>
<div className="text-indigo-200 font-medium text-sm">David Kim</div>
<div className="text-indigo-400 text-xs">Engineer, HexaWorks</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/10 col-span-1 row-span-1">
<img alt="Emily" className="w-12 h-12 rounded-full border-2 border-indigo-400 mb-2 object-cover" src="https://randomuser.me/api/portraits/women/29.jpg"/>
<div className="text-white text-center mb-2">"Customer support is top-notch. Solved my issue within minutes."</div>
<div className="text-indigo-200 font-medium text-sm">Emily Zhang</div>
<div className="text-indigo-400 text-xs">Manager, BluePeak</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/10 col-span-1 row-span-1">
<img alt="Martin" className="w-12 h-12 rounded-full border-2 border-indigo-400 mb-2 object-cover" src="https://randomuser.me/api/portraits/men/53.jpg"/>
<div className="text-white text-center mb-2">"The features are exactly what we needed."</div>
<div className="text-indigo-200 font-medium text-sm">Martin Perez</div>
<div className="text-indigo-400 text-xs">Founder, Startly</div>
</div>
<div className="col-span-1 row-span-1"></div>
</div>
</div>

    </>
  );
}
