import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-[#FCFCFF] flex flex-col shadow-2xl shadow-gray-200/50">

<header className="flex items-center justify-between px-6 py-5 sticky top-0 bg-[#FCFCFF]/80 backdrop-blur-xl z-20 border-b border-gray-100/60">
<button aria-label="Go back" className="w-10 h-10 flex items-center justify-center -ml-3 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100/50 active:scale-95">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-base font-semibold tracking-tight text-[#5E17EB]">Add Mobile Money</h1>
<div className="w-10 h-10 flex items-center justify-center -mr-3">

</div>
</header>

<main className="flex-1 overflow-y-auto pb-40 relative z-10">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="px-6 mt-6">

<h2 className="text-sm font-medium text-gray-900 mb-3">Select Operator</h2>
<div className="grid grid-cols-2 gap-4">

<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="operator" type="radio" value="mtn"/>
<div className="p-5 rounded-xl border-2 border-[#5E17EB] bg-[#5E17EB]/[0.03] flex flex-col items-center gap-3 transition-all shadow-sm">

<div className="w-12 h-12 rounded-full bg-[#FFCC00] flex items-center justify-center text-black text-sm font-semibold tracking-tighter shadow-sm">
                                MTN
                            </div>
<span className="text-sm font-medium text-gray-900">MTN Money</span>

<div className="absolute top-3 right-3 w-5 h-5 bg-[#5E17EB] rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-white" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</div>
</label>

<label className="relative cursor-pointer group">
<input className="peer sr-only" name="operator" type="radio" value="orange"/>
<div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col items-center gap-3 transition-all hover:border-gray-300 peer-checked:border-2 peer-checked:border-[#5E17EB] peer-checked:bg-[#5E17EB]/[0.03] shadow-sm">

<div className="w-12 h-12 rounded-full bg-[#FF6600] flex items-center justify-center text-white text-sm font-semibold tracking-tighter shadow-sm">
                                ORG
                            </div>
<span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Orange Money</span>

<div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center opacity-0 peer-checked:opacity-100 peer-checked:bg-[#5E17EB]">
<iconify-icon className="text-white" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</div>
</label>
</div>

<div className="mt-8 space-y-5">

<div>
<label className="text-xs font-medium text-gray-500 mb-1.5 block ml-1" htmlFor="accountName">Account Holder Name</label>
<div className="relative bg-white rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] focus-within:border-[#5E17EB] focus-within:ring-1 focus-within:ring-[#5E17EB] transition-all overflow-hidden flex items-center">
<input className="w-full bg-transparent px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none font-medium" id="accountName" placeholder="e.g., Sarah Amina" type="text"/>
</div>
</div>

<div>
<label className="text-xs font-medium text-gray-500 mb-1.5 block ml-1" htmlFor="phoneNumber">Phone Number</label>
<div className="relative bg-white rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] focus-within:border-[#5E17EB] focus-within:ring-1 focus-within:ring-[#5E17EB] transition-all flex items-center overflow-hidden">

<div className="flex items-center justify-center pl-4 pr-3 py-3.5 bg-gray-50/80 border-r border-gray-100">
<span className="text-sm font-semibold text-gray-600 tracking-wide">+237</span>
</div>

<input className="flex-1 bg-transparent pl-3 pr-10 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none font-medium tracking-wide" id="phoneNumber" placeholder="670 000 000" type="tel"/>

<div className="absolute right-4 text-gray-400 pointer-events-none flex items-center">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-[#5E17EB]/[0.04] rounded-xl p-4 flex gap-3.5 border border-[#5E17EB]/10">
<div className="mt-0.5 text-[#5E17EB] shrink-0">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-medium text-[#5E17EB]/90 leading-relaxed pr-2">
                        For your security, you will receive an OTP code to verify this account.
                    </p>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gradient-to-t from-[#FCFCFF] via-[#FCFCFF] to-transparent pt-12 pb-8 px-6 z-30 pointer-events-none">
<div className="pointer-events-auto">

<button className="w-full relative overflow-hidden bg-gradient-to-b from-[#FF7A1A] to-[#FF6B00] text-white py-4 rounded-xl text-base font-semibold shadow-[0_8px_20px_rgb(255,107,0,0.25)] ring-1 ring-white/20 transition-all active:scale-[0.98] active:shadow-md flex items-center justify-center group">

<div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
<span className="relative z-10 flex items-center gap-2">
                        Verify &amp; Link Account
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
</div>
</div>
</div>

    </>
  );
}
