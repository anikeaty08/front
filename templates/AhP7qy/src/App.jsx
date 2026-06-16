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
      
<div className="w-full max-w-md bg-zinc-50 border border-zinc-200 rounded-2xl shadow-xl py-6 px-6">

<div className="flex items-center border border-zinc-200 bg-white rounded-xl px-4 py-3">
<svg className="w-5 h-5 mr-3 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="w-full bg-transparent text-zinc-900 placeholder-zinc-500 focus:outline-none" placeholder="Where are you going?" type="text"/>
</div>

<div className="h-5"></div>
<div className="flex gap-2">
<button className="flex-1 flex flex-col items-center justify-center border border-zinc-200 rounded-xl py-3 bg-zinc-50 hover:bg-zinc-100 transition">
<svg className="w-6 h-6 mb-1 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4H9v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11.5z"></path>
</svg>
<span className="text-xs text-zinc-700 font-medium">Take me home</span>
</button>
<button className="flex-1 flex flex-col items-center justify-center border border-zinc-200 rounded-xl py-3 bg-zinc-50 hover:bg-zinc-100 transition">
<svg className="w-6 h-6 mb-1 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="7" x="3" y="7"></rect>
<rect height="17" rx="2" width="7" x="14" y="3"></rect>
</svg>
<span className="text-xs text-zinc-700 font-medium">Office</span>
</button>
<button className="flex-1 flex flex-col items-center justify-center border border-zinc-200 rounded-xl py-3 bg-zinc-50 hover:bg-zinc-100 transition">
<svg className="w-6 h-6 mb-1 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 19.5L4.77 23l1.36-8.07L0 8.63l8.19-1.19L12 0l3.81 7.44L24 8.63l-6.13 6.3L19.23 23z"></path>
</svg>
<span className="text-xs text-zinc-700 font-medium">Favorite</span>
</button>
</div>
<div className="h-6"></div>

<div>
<h2 className="text-zinc-900 font-semibold text-base mb-3 tracking-tight">Your last trip:</h2>
<div className="space-y-3">
<div className="flex items-center justify-between border border-zinc-200 bg-white rounded-xl px-4 py-3">
<div className="flex items-center">
<span className="bg-zinc-100 rounded-lg p-2 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 21s6-4.35 6-10A6 6 0 0 0 6 11c0 5.65 6 10 6 10z"></path>
<circle cx="12" cy="11" r="2"></circle>
</svg>
</span>
<div>
<p className="text-zinc-800 font-bold text-base -mb-1 tracking-tight">Central Park Station</p>
<p className="text-zinc-500 text-sm">384 Main Street, Springfield.</p>
</div>
</div>
<span className="text-xs text-zinc-400 font-medium">Aug 21</span>
</div>
<div className="flex items-center justify-between border border-zinc-200 bg-white rounded-xl px-4 py-3">
<div className="flex items-center">
<span className="bg-zinc-100 rounded-lg p-2 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 21s6-4.35 6-10A6 6 0 0 0 6 11c0 5.65 6 10 6 10z"></path>
<circle cx="12" cy="11" r="2"></circle>
</svg>
</span>
<div>
<p className="text-zinc-800 font-bold text-base -mb-1 tracking-tight">Eastside Library</p>
<p className="text-zinc-500 text-sm">384 Main Street, Springfield.</p>
</div>
</div>
<span className="text-xs text-zinc-400 font-medium">Aug 21</span>
</div>
</div>
</div>
<div className="h-8"></div>

<div>
<h2 className="text-zinc-900 font-semibold text-base mb-3 tracking-tight">Popular destination:</h2>
<div className="flex items-center border border-zinc-200 bg-white rounded-xl px-4 py-3">
<span className="bg-zinc-100 rounded-lg p-2 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 21s6-4.35 6-10A6 6 0 0 0 6 11c0 5.65 6 10 6 10z"></path>
<circle cx="12" cy="11" r="2"></circle>
</svg>
</span>
<div>
<p className="text-zinc-800 font-bold text-base -mb-1 tracking-tight">Central Park Station</p>
<p className="text-zinc-500 text-sm">384 Main Street, Springfield.</p>
</div>
</div>
</div>
</div>

    </>
  );
}
