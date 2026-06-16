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
      
<div className="w-full max-w-md">
<div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">

<div className="bg-[#1f2937] px-4 py-2 flex items-center justify-between">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
<div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
</div>
<div className="text-gray-400 text-sm">SignUp.json</div>
<div className="text-gray-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect>
<rect height="6" width="6" x="9" y="9"></rect>
</svg>
</div>
</div>

<div className="bg-gray-700 px-4 py-1.5 text-white">
<span>SignUp.json</span>
</div>

<div className="p-6 bg-[#111827] text-white">
<div className="mb-6">
<div className="flex mb-1">
<span className="text-gray-500 mr-2">1</span>
<span className="text-white">{</span>
</div>
<form id="signup-form">

<div className="flex mb-4 pl-6">
<span className="text-gray-500 mr-2">2</span>
<span className="text-pink-400 mr-2">"name"</span>
<span className="text-white mr-2">:</span>
<div className="relative flex-grow">
<input className="w-full bg-gray-800 border-0 border-b border-gray-700 focus:border-yellow-300 text-yellow-300 py-1 px-2 focus:outline-none" name="name" placeholder="Your Name" required="" type="text"/>
<span className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">,</span>
</div>
</div>

<div className="flex mb-4 pl-6">
<span className="text-gray-500 mr-2">3</span>
<span className="text-pink-400 mr-2">"email"</span>
<span className="text-white mr-2">:</span>
<div className="relative flex-grow">
<input className="w-full bg-gray-800 border-0 border-b border-gray-700 focus:border-yellow-300 text-yellow-300 py-1 px-2 focus:outline-none" name="email" placeholder="your@email.com" required="" type="email"/>
<span className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">,</span>
</div>
</div>

<div className="flex mb-4 pl-6">
<span className="text-gray-500 mr-2">4</span>
<span className="text-pink-400 mr-2">"password"</span>
<span className="text-white mr-2">:</span>
<div className="relative flex-grow">
<input className="w-full bg-gray-800 border-0 border-b border-gray-700 focus:border-yellow-300 text-yellow-300 py-1 px-2 focus:outline-none" name="password" placeholder="••••••••" required="" type="password"/>
<span className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">,</span>
</div>
</div>

<div className="flex mb-6 pl-6">
<span className="text-gray-500 mr-2">5</span>
<span className="text-pink-400 mr-2">"confirmPassword"</span>
<span className="text-white mr-2">:</span>
<div className="relative flex-grow">
<input className="w-full bg-gray-800 border-0 border-b border-gray-700 focus:border-yellow-300 text-yellow-300 py-1 px-2 focus:outline-none" name="confirmPassword" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<div className="flex mb-2">
<span className="text-gray-500 mr-2">6</span>
<span className="text-white">}</span>
</div>

<div className="mt-6 pt-4 border-t border-gray-700">
<div className="flex items-center">
<span className="text-green-400 mr-2">$</span>
<button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition duration-200" type="submit">
                                    user.create(SignUp.json)
                                </button>
</div>

<div className="mt-4 text-center text-gray-400">
<span>Already have an account?</span>
<a className="text-blue-400 hover:text-blue-300 ml-1" href="#">Login</a>
</div>
</div>
</form>
</div>
</div>

<div className="bg-gray-800 px-4 py-2 text-gray-400 text-sm flex justify-between">
<div>Ready</div>
<div>Ln 6, Col 1</div>
</div>
</div>
</div>

    </>
  );
}
