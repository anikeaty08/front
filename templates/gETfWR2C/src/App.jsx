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
      
<div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-xl border border-slate-200">

<div className="bg-slate-50 px-4 py-2 flex items-center justify-between border-b border-slate-200">
<div className="flex items-center">
<div className="flex space-x-2 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500"></div>
</div>
<div className="text-slate-500 font-medium">server.js</div>
</div>
<button className="text-slate-500 hover:text-slate-700 px-2 py-1 rounded border border-slate-200 hover:bg-slate-100 transition text-xs">
<svg className="h-3 w-3 inline-block mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Copy
            </button>
</div>

<div className="bg-white flex divide-x divide-slate-200">

<div className="bg-slate-50 text-slate-400 py-3 px-2 text-right select-none w-10">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</div>

<div className="py-3 px-3 overflow-auto w-full bg-white">
<pre><code><span className="text-purple-600">const</span> <span className="text-slate-700">stripe</span> = <span className="text-purple-600">require</span>(<span className="text-amber-600">'stripe'</span>)(<span className="text-amber-600">'sk_test_51NXwJ4Kh4q5DHZkLJxULnZ9z'</span>);

<span className="text-purple-600">async</span> <span className="text-blue-600">function</span> <span className="text-amber-700">createPayment</span>() {
  <span className="text-purple-600">const</span> <span className="text-slate-700">payment</span> = <span className="text-purple-600">await</span> <span className="text-slate-700">stripe</span>.<span className="text-blue-600">paymentIntents</span>.<span className="text-blue-600">create</span>({
    <span className="text-blue-500">amount</span>: <span className="text-amber-600">2000</span>,
    <span className="text-blue-500">currency</span>: <span className="text-amber-600">'sgd'</span>
  });</code></pre>
</div>
</div>

<div className="bg-slate-800 p-3 border-t border-slate-700">
<div className="text-slate-300">
<div className="mb-1"><span className="text-green-400">$</span> node server.js</div>
<div className="mb-1 text-blue-300">&gt; Payment intent created: pi_3Oz7LKh4q5DHZkL10WvnKs2M</div>
<div className="text-green-300">&gt; Success! Payment processed.</div>
</div>
</div>

<div className="bg-slate-100 px-3 py-1 border-t border-slate-200 flex justify-between items-center text-slate-500 text-xs">
<div className="flex items-center space-x-3">
<span>JavaScript</span>
<span>UTF-8</span>
</div>
<div className="flex items-center space-x-3">
<span>Ln 4, Col 12</span>
<span>Spaces: 2</span>
<span>6 lines</span>
</div>
</div>
</div>

    </>
  );
}
