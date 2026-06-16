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
      
<div className="fixed inset-0 bg-black bg-opacity-60 z-0"></div>
<div className="relative z-10 w-full max-w-lg px-4">
<div className="futurist-glass rounded-3xl px-10 py-9">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-bold tracking-widest text-cyan-200 uppercase drop-shadow-xl">Add New Card</h2>
<button className="p-2 rounded-full bg-transparent hover:bg-cyan-900/50 active:bg-cyan-700/70 focus:outline-none focus:ring-2 focus:ring-[#1de9b6] transition">
<svg className="w-7 h-7 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<form className="space-y-7">
<div>
<label className="futurist-label block mb-2">Cardholder Name</label>
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg placeholder-gray-400 outline-none" placeholder="Enter full name" type="text" value="Alice Smith"/>
</div>
<div>
<label className="futurist-label block mb-2">Card Number</label>
<div className="relative flex items-center">
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg pr-16 placeholder-gray-400 outline-none" maxlength="19" placeholder="Card number" type="text" value="4321 8765 2109 3344"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
<span className="bg-gradient-to-r from-[#1de9b6] to-[#0093e9] rounded-lg w-10 h-7 flex items-center justify-center shadow-xl border border-[#1de9b670]">
<svg fill="none" height="14" viewbox="0 0 24 14" width="24">
<rect fill="#0093e9" fillOpacity="0.19" height="8" rx="2" width="20" x="2" y="3"></rect>
<circle cx="12" cy="7" fill="#1de9b6" r="3"></circle>
</svg>
</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="futurist-label block mb-2">Expiry</label>
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg placeholder-gray-400 outline-none" maxlength="5" placeholder="MM/YY" type="text" value="05/28"/>
</div>
<div>
<label className="futurist-label block mb-2">CVV</label>
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg placeholder-gray-400 outline-none" maxlength="4" placeholder="CVV" type="text" value="789"/>
</div>
</div>
<div>
<label className="futurist-label flex items-center mb-2 gap-2">
<svg className="h-5 w-5 text-[#6fffe9]" fill="none" stroke="currentColor" strokeWidth="2.4" viewbox="0 0 24 24">
<path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="11" fill="#00fff7" r="2.5"></circle>
</svg>
            Verified Address
            <a className="ml-auto text-xs font-bold text-[#1de9b6] hover:text-[#0093e9] hover:underline transition" href="#">Edit</a>
</label>
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg placeholder-gray-400 outline-none mb-3" placeholder="Address" type="text" value="456 Ocean Ave, Los Angeles, CA"/>
<input className="futurist-input w-full rounded-xl py-2.5 px-5 text-lg placeholder-gray-400 outline-none" placeholder="Postal Code" type="text" value="90001"/>
</div>
<button className="turquoise-btn w-full mt-2 py-3 text-lg" type="submit">Confirm</button>
</form>
</div>
</div>

    </>
  );
}
