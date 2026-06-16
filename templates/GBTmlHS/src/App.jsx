import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-[380px] flex flex-col rounded-3xl shadow-xl bg-neutral-900/85" id="settings-root">

<div className="flex items-center justify-between px-7 pt-8 pb-3">
<h1 className="text-2xl sf-bold text-white tracking-tight">Settings</h1>
<button aria-label="Close Settings" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-700 focus:ring-2 focus:ring-indigo-400 transition outline-none">
<svg fill="none" height="24" stroke="white" strokeWidth="2" width="24"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
<div className="flex-1 px-4 pb-6 overflow-y-auto no-scrollbar">

<div className="bg-neutral-800/80 rounded-2xl p-5 mb-5 shadow">
<h2 className="text-base sf-bold text-white mb-2">Account</h2>
<ul>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 mb-1 transition sf-regular text-white/90 text-[15px] group">
              Personal information
              <svg fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 mb-1 transition sf-regular text-white/90 text-[15px] group">
              Notifications
              <svg fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 mb-1 transition sf-regular text-white/90 text-[15px] group">
              Payments and payouts
              <svg fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex w-full justify-between items-center py-3 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 transition sf-regular text-white/90 text-[15px] group">
              Privacy and sharing
              <svg fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
</ul>
</div>

<div className="bg-neutral-800/80 rounded-2xl p-5 mb-5 shadow">
<h2 className="text-base sf-bold text-white mb-2">Support</h2>
<button className="block w-full text-left p-3 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 transition group">
<div>
<div className="sf-semi text-[15px] mb-0.5 text-white">Safety Center</div>
<div className="text-[14px] sf-regular text-white/80 leading-5">Get the support, tools &amp; info you need to be safe.</div>
</div>
<svg className="mt-1 float-right" fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="block w-full text-left p-3 mt-2 rounded-xl hover:bg-indigo-900/10 focus:ring-2 focus:ring-indigo-400 transition group">
<div>
<div className="sf-semi text-[15px] mb-0.5 text-white">Contact Support</div>
<div className="text-[14px] sf-regular text-white/80 leading-5">Let our team know about your concerns.</div>
</div>
<svg className="mt-1 float-right" fill="none" height="20" stroke="white" strokeWidth="2" width="20"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>

<div className="w-full px-9 pb-7">
<button className="w-full py-2.5 rounded-xl bg-indigo-500 text-white text-base font-semibold shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition sf-semi">Log out</button>
</div>
</div>

    </>
  );
}
