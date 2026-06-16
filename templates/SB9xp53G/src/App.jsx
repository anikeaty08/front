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
      
<div className="bg-white rounded-xl shadow-md w-full max-w-sm p-6">

<div className="text-center mb-6">
<div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
<span className="text-white text-xl font-bold">A</span>
</div>
<h1 className="text-gray-800 font-medium">Abstraction Magazine</h1>
<p className="text-gray-500 text-sm">$19 per month</p>
</div>

<form>
<div className="space-y-4">

<div>
<label className="block text-sm text-gray-600 mb-1" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" id="email" required="" type="email"/>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1">Card information</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none mb-2" placeholder="Card number" required="" type="text"/>
<div className="flex space-x-2">
<input className="w-1/2 px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="MM / YY" required="" type="text"/>
<input className="w-1/2 px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="CVC" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1">Country</label>
<div className="relative">
<select className="appearance-none w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" id="country" required="">
<option value="sg">Singapore</option>
<option value="us">United States</option>
<option value="ca">Canada</option>
<option value="au">Australia</option>
<option value="uk">United Kingdom</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg className="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
</svg>
</div>
</div>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1" htmlFor="postal">ZIP/Postal code</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" id="postal" required="" type="text"/>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200" type="submit">
          Subscribe now
        </button>
</div>
</form>

<p className="text-xs text-gray-500 text-center mt-6">
      By subscribing, you agree to our terms and conditions.
    </p>
</div>

    </>
  );
}
