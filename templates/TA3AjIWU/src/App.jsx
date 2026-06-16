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
      
<main className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-8">
<header className="mb-8 text-center flex flex-col items-center">
<svg className="mb-2 h-14 w-14 text-green-400 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" style={{filter: 'drop-shadow(0 0 14px #22c55e66)'}} viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h1 className="text-3xl font-extrabold text-gray-100 tracking-tight mb-2">Build Your Plan</h1>
<p className="text-gray-400 text-base">Personalize your fitness journey. Enter your details to create a plan tailored just for you.</p>
</header>
<form className="flex flex-col gap-7">
<div>
<label className="block text-sm text-gray-300 mb-1 font-medium" htmlFor="age">Your Age</label>
<input className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 text-lg text-gray-100 focus:ring-2 focus:ring-green-500 outline-none transition" id="age" max="100" min="10" name="age" placeholder="e.g. 21" required="" type="number"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1 font-medium" htmlFor="height">Height (cm)</label>
<input className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 text-lg text-gray-100 focus:ring-2 focus:ring-green-500 outline-none transition" id="height" max="250" min="100" name="height" placeholder="e.g. 160" required="" type="number"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1 font-medium" htmlFor="bpm">
          Resting Heart Rate (<span className="text-green-400 font-bold" id="bpm-value">65</span> BPM)
        </label>
<input className="mt-3 mb-2" id="bpm" max="120" min="40" name="bpm" oninput="document.getElementById('bpm-value').textContent=this.value" type="range" value="65"/>
<div className="flex justify-between text-xs text-gray-400 mt-1">
<span>40</span>
<span>120</span>
</div>
</div>
<div className="mt-2">
<button className="w-full py-3 rounded-xl font-bold text-lg shadow-xl text-gray-900 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 transition" type="submit">
          Generate My Plan
        </button>
</div>
</form>
<footer className="mt-8 text-center">
<p className="text-gray-500 text-xs">Start your transformation today. Consistency leads to results!</p>
</footer>
</main>

    </>
  );
}
