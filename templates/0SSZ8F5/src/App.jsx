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
      
<div className="w-full max-w-md bg-gray-100 border border-gray-200 rounded-xl p-8 space-y-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="bg-gray-100 border border-gray-200 rounded-lg px-6 py-5 mb-6 shadow-none">
<div className="flex justify-between items-center">
<span className="text-xs uppercase text-gray-500 font-medium tracking-widest">
          Debit Card
        </span>
<div className="flex gap-2">
<span className="block w-8 h-8 rounded-full bg-gray-200"></span>
<span className="block w-8 h-8 rounded-full bg-gray-300 -ml-3"></span>
</div>
</div>
<div className="mt-8 text-gray-700 font-mono text-lg font-semibold tracking-widest select-none">
        **** **** **** 3421
      </div>
<div className="mt-6 flex justify-between text-xs text-gray-400">
<div>
<div className="uppercase tracking-wide">Card Holder</div>
<div className="text-gray-700 font-medium">Alex Johnson</div>
</div>
<div>
<div className="uppercase tracking-wide">Expires</div>
<div className="text-gray-700 font-medium">12/26</div>
</div>
<div>
<div className="uppercase tracking-wide">CVV</div>
<div className="text-gray-700 font-medium">***</div>
</div>
</div>
</div>

<form className="space-y-5">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="card-number">Card Number</label>
<input className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition shadow-none placeholder:text-gray-400 font-medium" id="card-number" maxlength="19" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="expiry">Expiry</label>
<input className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition shadow-none placeholder:text-gray-400 font-medium" id="expiry" maxlength="5" placeholder="MM/YY" type="text"/>
</div>
<div className="flex-1">
<label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="cvv">CVV</label>
<input className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition shadow-none placeholder:text-gray-400 font-medium" id="cvv" maxlength="4" placeholder="•••" type="password"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="card-holder">Card Holder</label>
<input className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition shadow-none placeholder:text-gray-400 font-medium" id="card-holder" placeholder="Full Name" type="text"/>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-indigo-500 text-white px-4 py-2 font-semibold shadow-none hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-200" type="submit">
        Pay Now
      </button>
</form>
</div>

    </>
  );
}
