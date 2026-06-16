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
      

<main className="w-full max-w-sm bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] thin-border border-gray-100 p-8 animate-card relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50"></div>
<div className="flex flex-col items-center text-center">

<div className="mb-6 relative">

<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 animate-icon-pop animate-pulse-loop">

<iconify-icon className="text-green-600" height="32" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="32">
</iconify-icon>
</div>
</div>

<h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3 animate-text delay-100">
                Request Sent
            </h1>

<p className="text-sm text-gray-500 leading-relaxed max-w-[280px] animate-text delay-200 mb-8">
                Your marriage registrar request has been successfully submitted to the court.
            </p>

<div className="w-full bg-gray-50/80 rounded-xl thin-border border-gray-100 divide-y divide-gray-200/60 animate-text delay-300">

<div className="flex items-center justify-between py-3 px-4">
<span className="text-xs font-medium text-gray-400">Requesting Attorney</span>
<span className="text-xs font-semibold text-gray-700">Marcus Reynolds</span>
</div>

<div className="flex items-center justify-between py-3 px-4">
<span className="text-xs font-medium text-gray-400">Client Name</span>
<span className="text-xs font-semibold text-gray-700">Mary Lefthand</span>
</div>

<div className="flex items-center justify-between py-3 px-4">
<span className="text-xs font-medium text-gray-400">Request Type</span>
<span className="text-xs font-semibold text-gray-700">Marriage Registrar</span>
</div>
</div>

<div className="mt-6 animate-text delay-300">
<div className="flex items-center justify-center space-x-2 text-gray-300">
<iconify-icon className="opacity-60" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide opacity-60">SECURE COURT TRANSMISSION</span>
</div>
</div>
</div>
</main>

    </>
  );
}
