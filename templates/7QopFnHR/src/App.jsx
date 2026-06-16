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
      
<div className="w-[350px] max-w-full bg-white border border-[#e4e8ee] rounded-2xl shadow-sm px-8 py-7 flex flex-col gap-6 font-['Inter']">
<div>
<div className="text-2xl font-semibold text-[#212b40] mb-1">Send E-Transfer</div>
<div className="text-xs text-[#7a859c]">Request money instantly by e-transfer.</div>
</div>
<form autocomplete="off" className="flex flex-col gap-5">
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="recipient">Recipient Email</label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition" id="recipient" placeholder="jane.doe@email.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="amount">Amount</label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition font-medium" id="amount" min="0" placeholder="0.00" required="" step="any" type="number"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="note">Message <span className="text-gray-400 font-normal">(optional)</span></label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition" id="note" placeholder="eg. Invoice #123 or Thanks!" type="text"/>
</div>
<button className="w-full bg-[#4577E3] hover:bg-[#3863c6] text-white rounded-lg py-3 font-semibold mt-2 transition" type="submit">
        Send Request
      </button>
</form>
</div>

    </>
  );
}
