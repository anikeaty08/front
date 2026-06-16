import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mb-12 flex items-center justify-center animate-in fade-in zoom-in duration-700">
<div className="w-32 h-32 rounded-full border-[3px] border-white flex items-center justify-center">

<svg className="text-white translate-y-0.5" fill="none" height="52" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="52">
<circle cx="12" cy="10" r="4"></circle>
<path d="M12 14v7"></path> 
<path d="M8.2 13.4l-1.5 8.6h10.6l-1.5-8.6"></path>

<path d="M7 10a5 5 0 0 1 10 0c0 1.5-.8 2.8-2 3.6l1.5 8.4h-9l1.5-8.4A5 5 0 0 1 7 10z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10 leading-tight max-w-lg">
        Ready to Unlock the Value in Your Life?
    </h1>

<div className="flex flex-row items-center gap-5 mb-16 sm:mb-20">
<button className="bg-white text-black hover:bg-gray-200 transition-all duration-200 ease-out rounded-full px-10 py-2.5 text-xl font-medium min-w-[110px] active:scale-95">
            Yes
        </button>
<button className="bg-white text-black hover:bg-gray-200 transition-all duration-200 ease-out rounded-full px-10 py-2.5 text-xl font-medium min-w-[110px] active:scale-95">
            No
        </button>
</div>

<div className="flex flex-col items-center gap-5">
<p className="text-xl font-medium tracking-normal text-white/90">
            Already a Member?
        </p>

<button className="group bg-white rounded-full p-1.5 pr-8 pl-1.5 flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-200">
<div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5 fill-white stroke-none" data-lucide="user"></i>
</div>
<span className="text-black font-bold text-lg tracking-wide uppercase">Log in</span>
</button>
</div>


    </>
  );
}
