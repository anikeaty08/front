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
      
<div className="max-w-[376px] w-full mx-auto rounded-3xl shadow-2xl bg-white border border-neutral-200">

<div className="flex flex-col items-center pb-4 pt-7">
<img alt="Avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<button className="edit-link mt-2">Edit Photo</button>
<div className="mt-2 mb-0.5 text-[18px] sf-bold text-gray-900">Alex Hunter</div>
<div className="text-[15px] text-gray-500 sf-regular">alex.hunter@email.com</div>
</div>

<div className="bg-white rounded-2xl shadow-none mt-2 mb-4 p-0 px-0 pb-1">
<div className="text-[15px] px-6 pt-3 sf-bold text-gray-800 mb-0.5 select-none">Personal Info</div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular transition group">
        Change Name
        <svg fill="none" height="18" stroke="#a1a1aa" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular transition group">
        Change Email
        <svg fill="none" height="18" stroke="#a1a1aa" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-red-500 sf-regular transition group">
        Delete Account
        <svg fill="none" height="18" stroke="#ef4444" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="bg-white rounded-2xl shadow-none my-4 p-0 px-0">
<div className="text-[15px] px-6 pt-3 sf-bold text-gray-800 mb-0.5 select-none">Preferences</div>
<div className="flex w-full items-center justify-between px-6 py-3">
<span className="text-gray-700 sf-regular text-[16px]">Email Notifications</span>
<input checked="" className="ios-toggle" type="checkbox"/>
</div>
<div className="section-divider"></div>
<div className="flex w-full items-center justify-between px-6 py-3">
<span className="text-gray-700 sf-regular text-[16px]">Biometric Login</span>
<input className="ios-toggle" type="checkbox"/>
</div>
</div>

<div className="bg-white rounded-2xl shadow-none my-4 p-0 px-0">
<div className="text-[15px] px-6 pt-3 sf-bold text-gray-800 select-none mb-0.5">Support</div>
<button className="w-full text-left px-6 py-3 hover:bg-gray-50 focus:bg-blue-50 transition group">
<div>
<div className="sf-semi text-[15px] text-gray-900 mb-0.5">Help Center</div>
<span className="sf-regular text-[14px] text-gray-500">Find FAQs and contact support</span>
</div>
<svg className="float-right -mt-6" fill="none" height="18" stroke="#a1a1aa" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="w-full text-left px-6 py-3 hover:bg-gray-50 focus:bg-blue-50 transition group">
<div>
<div className="sf-semi text-[15px] text-gray-900 mb-0.5">Privacy Policy</div>
<span className="sf-regular text-[14px] text-gray-500">How we use and protect your info</span>
</div>
<svg className="float-right -mt-6" fill="none" height="18" stroke="#a1a1aa" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="w-full px-8 pb-8 pt-2">
<button className="w-full py-3 rounded-xl bg-gray-200 text-red-600 font-semibold hover:bg-red-100 focus:outline-none transition sf-semi">Log out</button>
</div>
</div>

    </>
  );
}
