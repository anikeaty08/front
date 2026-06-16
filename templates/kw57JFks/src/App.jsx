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
      
<main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
<div className="max-w-2xl mx-auto text-center">
<span className="inline-block mb-6 px-4 py-1 border border-neutral-800 rounded-xl uppercase text-xs font-bold text-neutral-400 tracking-widest">
        Design Platform
      </span>
<h1 className="text-5xl sm:text-6xl font-bold text-neutral-100 mb-4">Minimal Workspace for Creatives</h1>
<p className="text-neutral-400 mb-8 text-lg">
        A focused, distraction-free design space. Create, share, and collaborate on your ideas with perfect clarity.
      </p>
<a className="inline-block px-7 py-3 bg-neutral-800 text-white font-bold rounded-lg shadow hover:bg-neutral-700 transition" href="#">Start Free Trial</a>
</div>
<div className="mt-16 w-full flex flex-col md:flex-row gap-8 items-center justify-center max-w-5xl mx-auto">

<div className="flex flex-col bg-neutral-900 rounded-2xl w-full max-w-xs shadow-lg overflow-hidden border border-neutral-800">
<div className="h-48 bg-neutral-800 flex items-center justify-center">
<svg className="w-20 h-20 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">
<rect height="32" rx="6" stroke="currentColor" width="32" x="8" y="8"></rect>
<path d="M16 24h16M24 16v16" stroke="currentColor"></path>
</svg>
</div>
<div className="p-6 flex-1 flex flex-col items-center">
<h3 className="text-lg text-neutral-100 font-semibold mb-2">Canvas Editor</h3>
<p className="text-neutral-400 text-sm mb-4 text-center">Draw and iterate swiftly on a crisp, infinite canvas using simple gestures.</p>
<span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Vector Tools</span>
</div>
</div>

<div className="flex flex-col bg-neutral-900 rounded-2xl w-full max-w-xs shadow-lg overflow-hidden border border-neutral-800 scale-105 z-10">
<div className="h-48 bg-neutral-800 flex items-center justify-center">
<svg className="w-20 h-20 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">
<circle cx="24" cy="24" r="14" stroke="currentColor"></circle>
<path d="M17 31l14-14M31 31L17 17" stroke="currentColor"></path>
</svg>
</div>
<div className="p-6 flex-1 flex flex-col items-center">
<h3 className="text-lg text-neutral-100 font-semibold mb-2">Collaboration Hub</h3>
<p className="text-neutral-400 text-sm mb-4 text-center">Work together in perfect sync with real-time pointers and seamless feedback.</p>
<span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Live Share</span>
</div>
</div>

<div className="flex flex-col bg-neutral-900 rounded-2xl w-full max-w-xs shadow-lg overflow-hidden border border-neutral-800">
<div className="h-48 bg-neutral-800 flex items-center justify-center">
<svg className="w-20 h-20 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 48 48">
<rect height="12" rx="3" stroke="currentColor" width="24" x="12" y="18"></rect>
<path d="M24 18v-4M24 34v-4" stroke="currentColor"></path>
</svg>
</div>
<div className="p-6 flex-1 flex flex-col items-center">
<h3 className="text-lg text-neutral-100 font-semibold mb-2">Asset Library</h3>
<p className="text-neutral-400 text-sm mb-4 text-center">Organize, version and access all your files in one clutter-free space.</p>
<span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Drag &amp; Drop</span>
</div>
</div>
</div>
</main>

    </>
  );
}
