import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<main className="w-full max-w-[850px] bg-[#FFFFFF] border border-[#E6E8EC] shadow-sm p-8 md:p-14 flex flex-col gap-10 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E3A8A] via-[#C9A646] to-[#1E3A8A] opacity-80"></div>

<header className="flex flex-col md:flex-row justify-between items-start gap-8">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<iconify-icon height="36" icon="solar:shield-check-linear" strokeWidth="1.5" style={{color: '#C9A646'}} width="36"></iconify-icon>
<div className="flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-[#1E3A8A] leading-none uppercase">DiamondChain</h1>
<span className="text-sm font-medium tracking-widest text-[#C9A646] uppercase mt-1">Investments BW</span>
</div>
</div>
<div className="mt-2">
<h2 className="text-lg font-medium text-gray-800">Transaction Report</h2>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Official Record</p>
</div>
</div>

<div className="w-full md:w-auto flex flex-col gap-2 border border-[#E6E8EC] p-4 bg-[#F5F7FA]/50 rounded-sm">
<div className="flex justify-between md:justify-end gap-6 items-center">
<span className="text-xs text-gray-500">Document Type</span>
<span className="text-xs font-medium text-right">Transaction Report</span>
</div>
<div className="flex justify-between md:justify-end gap-6 items-center">
<span className="text-xs text-gray-500">Status</span>
<span className="text-xs font-medium text-red-700 bg-red-50/50 px-2 py-0.5 rounded-sm border border-red-100">Failed / Uncompleted</span>
</div>
<div className="flex justify-between md:justify-end gap-6 items-center">
<span className="text-xs text-gray-500">Date</span>
<span className="text-xs font-medium text-right">April 9, 2026</span>
</div>
<div className="flex justify-between md:justify-end gap-6 items-center">
<span className="text-xs text-gray-500">Time</span>
<span className="text-xs font-medium text-right">14:32:05 UTC+2</span>
</div>
<div className="w-full h-px bg-[#E6E8EC] my-1"></div>
<div className="flex justify-between md:justify-end gap-6 items-center">
<span className="text-xs text-gray-500">Ref ID</span>
<span className="text-xs font-mono tracking-tight text-[#1E3A8A] bg-white px-1.5 py-0.5 border border-[#E6E8EC]">DC-8839-4A-X9</span>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#E6E8EC] pt-8">

<div className="flex flex-col gap-5">
<h3 className="text-xs font-semibold tracking-widest text-[#1E3A8A] uppercase flex items-center gap-2">
<iconify-icon height="16" icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Transaction Details
                </h3>
<div className="grid grid-cols-2 gap-y-4 gap-x-4">
<div className="flex flex-col gap-1 col-span-2">
<span className="text-xs text-gray-500 uppercase tracking-wider">Amount</span>
<span className="text-xl font-medium tracking-tight text-[#111827]">P145,453</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Currency</span>
<span className="text-sm">Botswana Pula (BWP)</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Type</span>
<span className="text-sm">Outgoing Transfer</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Authorized By</span>
<span className="text-sm">Mr. Philip</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Recipient Name</span>
<span className="text-sm">Mositi Seokolo</span>
</div>
<div className="flex flex-col gap-1 col-span-2">
<span className="text-xs text-gray-500 uppercase tracking-wider">Recipient Email</span>
<span className="text-sm">mositiseokolo@yahoo.com</span>
</div>
</div>
</div>

<div className="flex flex-col gap-5">
<h3 className="text-xs font-semibold tracking-widest text-[#1E3A8A] uppercase flex items-center gap-2">
<iconify-icon height="16" icon="solar:bank-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Destination Bank
                </h3>
<div className="grid grid-cols-1 gap-y-4 p-5 bg-[#F5F7FA]/40 border border-[#E6E8EC] rounded-sm">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Bank Name</span>
<span className="text-sm font-medium text-[#111827]">First National Bank (FNB)</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Account Number</span>
<span className="text-base font-mono tracking-tight text-[#1E3A8A]">62318593218</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Account Type</span>
<span className="text-sm">Gold Account</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Branch Code</span>
<span className="text-sm font-mono tracking-tight">283567</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-l-4 border-[#C9A646] bg-[#C9A646]/5 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:shield-warning-linear" strokeWidth="1.5" style={{color: '#C9A646'}} width="20"></iconify-icon>
<span className="text-xs font-semibold text-[#C9A646] uppercase tracking-widest">Verification Requirement</span>
</div>
<span className="text-sm font-medium text-[#111827]">Cross-Network High-Value Verification Fee</span>
</div>
<div className="flex flex-col md:items-end gap-2 w-full md:w-auto border-t md:border-t-0 border-[#C9A646]/20 pt-4 md:pt-0">
<span className="text-2xl font-medium tracking-tight text-[#111827] leading-none">P5,500</span>
<span className="text-xs font-medium text-[#C9A646] bg-white border border-[#C9A646]/30 px-2 py-1 rounded-sm uppercase tracking-wide">Outstanding / Required</span>
</div>
</div>

<div className="flex flex-col gap-8 border-t border-[#E6E8EC] pt-8">
<div className="flex flex-col gap-3">
<h3 className="text-xs font-semibold tracking-widest text-[#1E3A8A] uppercase">Transaction Status Summary</h3>
<p className="text-sm leading-relaxed text-gray-600 max-w-3xl">
                    The transaction was initiated and processed through the DiamondChain Investments BW secure financial routing system. However, completion was not achieved due to unresolved cross-network verification requirements imposed by the recipient's banking network.
                </p>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Reason for Failure</h3>
<p className="text-sm leading-relaxed text-[#111827] max-w-3xl bg-[#F5F7FA] p-4 border border-[#E6E8EC] rounded-sm">
                    Completion of the transfer requires additional compliance verification to authorize high-value cross-network routing. The recipient's account must undergo a verification clearance process, which includes a mandatory processing fee. Until this requirement is fulfilled, the transaction remains in a pending state and cannot be finalized or released.
                </p>
</div>
</div>

<div className="border-t border-[#E6E8EC] pt-8 flex flex-col gap-6">
<h3 className="text-xs font-semibold tracking-widest text-[#1E3A8A] uppercase flex items-center gap-2">
<iconify-icon height="16" icon="solar:user-id-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Identity Verification
            </h3>
<div className="flex flex-col md:flex-row gap-8 items-start">

<div className="w-24 h-32 border-2 border-dashed border-[#E6E8EC] bg-[#F5F7FA] flex flex-col justify-center items-center gap-2 shrink-0">
<iconify-icon height="24" icon="solar:camera-linear" strokeWidth="1.5" style={{color: '#9CA3AF'}} width="24"></iconify-icon>
<span className="text-xs text-gray-400 uppercase tracking-wide text-center px-2 scale-75">Photo Box</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 w-full max-w-md pt-1">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Full Name</span>
<span className="text-sm font-medium">Mositi Seokolo</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-wider">Gender</span>
<span className="text-sm">Female</span>
</div>
<div className="flex flex-col gap-1 col-span-1 sm:col-span-2">
<span className="text-xs text-gray-500 uppercase tracking-wider">ID Number</span>
<span className="text-sm font-mono tracking-tight text-[#1E3A8A]">005720428</span>
</div>
</div>
</div>

<div className="mt-8 flex flex-col gap-2 w-full max-w-[320px]">
<div className="h-16 border-b border-[#111827] bg-[#F5F7FA]/30 relative flex items-end justify-end pb-1 pr-1">
<span className="text-xs text-gray-300 italic">Sign here</span>
</div>
<span className="text-xs text-[#1E3A8A] uppercase tracking-widest">Authorized Signature</span>
</div>
</div>

<footer className="mt-8 pt-8 border-t border-[#E6E8EC] flex flex-col gap-4 text-center">
<p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
                This document is system-generated and does not require a physical stamp or signature for validation. All transaction records are securely stored within the DiamondChain Investments BW financial system.
            </p>
<p className="text-xs text-gray-400 uppercase tracking-widest scale-90">
                Report generated automatically following transaction processing attempt.
            </p>
</footer>
</main>

    </>
  );
}
