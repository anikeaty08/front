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
      
<div className="w-[384px] max-w-[100vw] rounded-3xl shadow-xl bg-neutral-950/95 border border-neutral-900 flex flex-col">

<div className="flex items-center justify-between px-7 pt-7 pb-4">
<span className="text-[28px] sf-bold text-white tracking-tight">Settings</span>
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-800 transition focus:ring-2 focus:ring-blue-400">
<svg fill="none" height="24" stroke="white" strokeWidth="2" width="24"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="flex-1 px-4 pb-6 overflow-y-auto space-y-5">

<div className="bg-neutral-900/80 rounded-2xl p-4 pt-3 shadow">
<h2 className="text-base sf-bold text-white mb-2">Account</h2>
<ul>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition sf-regular text-white/90 text-[15px] group">
              Personal information
              <svg fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition sf-regular text-white/90 text-[15px] group">
              Notifications
              <svg fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition sf-regular text-white/90 text-[15px] group">
              Payments and payouts
              <svg fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition sf-regular text-white/90 text-[15px] group">
              Privacy and sharing
              <svg fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
</ul>
</div>

<div className="bg-neutral-900/80 rounded-2xl p-4 pt-3 shadow">
<h2 className="text-base sf-bold text-white mb-2">Support</h2>
<button className="block w-full text-left p-3 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition group">
<div>
<div className="sf-semi text-[15px] mb-0.5 text-white">Safety Center</div>
<div className="text-[14px] sf-regular text-white/80 leading-5">Get the support, tools &amp; info you need to be safe.</div>
</div>
<svg className="float-right mt-1" fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="block w-full text-left p-3 mt-2 rounded-xl hover:bg-white/5 focus:ring-2 focus:ring-blue-400 transition group">
<div>
<div className="sf-semi text-[15px] mb-0.5 text-white">Contact Support</div>
<div className="text-[14px] sf-regular text-white/80 leading-5">Let our team know about your concerns.</div>
</div>
<svg className="float-right mt-1" fill="none" height="18" stroke="white" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>

<div className="w-full px-8 pb-7">
<button className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-base font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition sf-semi">Log out</button>
</div>
</div>

    </>
  );
}
