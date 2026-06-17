import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="w-[375px] h-[812px] shrink-0 bg-white border-[12px] border-gray-800 rounded-[3rem] relative overflow-hidden flex flex-col shadow-xl">

<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-medium text-gray-900">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:cellular-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="px-6 pt-4 pb-6">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Season Hub</h1>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 flex flex-col gap-4">

<div className="p-4 border border-gray-200 rounded-2xl bg-gray-50 flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Current Stage</span>
<span className="text-base font-semibold text-gray-900">Stage 1 – Development Driver</span>
</div>

<div className="p-4 border border-gray-200 rounded-2xl bg-gray-50 flex flex-col gap-3">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Primary Season Goal</span>
<span className="text-sm font-medium text-gray-900">Complete 8 races this season</span>
</div>

<div className="flex flex-col gap-1.5">
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="w-3/8 h-full bg-gray-800 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-gray-500 font-medium">
<span>3 Completed</span>
<span>8 Total</span>
</div>
</div>
</div>

<div className="p-4 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-gray-800"></div>
<div className="flex justify-between items-start pl-2">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Next Event</span>
<span className="text-base font-semibold text-gray-900">Club CMP Evening Race</span>
<span className="text-sm text-gray-600">Carolina Motorsports Park</span>
</div>
<div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center justify-center min-w-[3rem]">
<span className="text-xs text-gray-500 font-medium">OCT</span>
<span className="text-base font-semibold text-gray-900">14</span>
</div>
</div>
</div>

<div className="p-4 border border-gray-200 rounded-2xl bg-gray-50 flex flex-col gap-4">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Budget Summary</span>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-end">
<span className="text-sm text-gray-600">Total Spent</span>
<span className="text-lg font-semibold tracking-tight text-gray-900">$12,450</span>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
<div className="w-[45%] h-full bg-gray-800"></div>
</div>
<div className="flex justify-between text-xs font-medium text-gray-500">
<div className="flex flex-col gap-0.5">
<span>Remaining</span>
<span className="text-gray-900">$15,550</span>
</div>
<div className="flex flex-col gap-0.5 text-right">
<span>Total Budget</span>
<span className="text-gray-900">$28,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-200 flex justify-around items-center px-4 pb-4">
<div className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon height="24" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Hub</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Events</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Budget</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Profile</span>
</div>
</div>
</div>

<div className="w-[375px] h-[812px] shrink-0 bg-white border-[12px] border-gray-800 rounded-[3rem] relative overflow-hidden flex flex-col shadow-xl">
<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-medium text-gray-900">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:cellular-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="px-4 pt-2 pb-4 border-b border-gray-100 flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
<iconify-icon className="text-gray-900" height="24" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Season Events</h1>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<div className="p-6 border-b border-gray-100 flex gap-4 items-start">
<div className="bg-gray-100 rounded-xl p-2 flex flex-col items-center justify-center min-w-[3.5rem] mt-1">
<span className="text-xs text-gray-500 font-medium">SEP</span>
<span className="text-lg font-semibold text-gray-900">12</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<span className="text-base font-semibold text-gray-900">HPDE Test</span>
<span className="text-sm text-gray-600">Virginia International Raceway</span>
<div className="mt-2 flex items-center gap-2 text-gray-900 bg-gray-50 px-3 py-1.5 rounded-md w-fit">
<iconify-icon height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span className="text-xs font-medium">Participated</span>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100 flex gap-4 items-start">
<div className="bg-gray-100 rounded-xl p-2 flex flex-col items-center justify-center min-w-[3.5rem] mt-1">
<span className="text-xs text-gray-500 font-medium">SEP</span>
<span className="text-lg font-semibold text-gray-900">28</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<span className="text-base font-semibold text-gray-900">Club Race</span>
<span className="text-sm text-gray-600">Road Atlanta</span>
<div className="mt-2 flex items-center gap-2 text-gray-900 bg-gray-50 px-3 py-1.5 rounded-md w-fit">
<iconify-icon height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span className="text-xs font-medium">Participated</span>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100 flex gap-4 items-start">
<div className="bg-gray-100 rounded-xl p-2 flex flex-col items-center justify-center min-w-[3.5rem] mt-1">
<span className="text-xs text-gray-500 font-medium">OCT</span>
<span className="text-lg font-semibold text-gray-900">14</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<span className="text-base font-semibold text-gray-900">Formula Libre Race</span>
<span className="text-sm text-gray-600">Carolina Motorsports Park</span>
<div className="mt-2 flex items-center gap-2 text-gray-500 border border-gray-200 px-3 py-1.5 rounded-md w-fit">
<iconify-icon height="16" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium">Not Participated</span>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100 flex gap-4 items-start opacity-75">
<div className="bg-gray-50 border border-gray-100 rounded-xl p-2 flex flex-col items-center justify-center min-w-[3.5rem] mt-1">
<span className="text-xs text-gray-400 font-medium">NOV</span>
<span className="text-lg font-semibold text-gray-500">05</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<span className="text-base font-semibold text-gray-900">Endurance Test</span>
<span className="text-sm text-gray-600">Sebring International Raceway</span>
<div className="mt-2 flex items-center gap-2 text-gray-500 border border-gray-200 px-3 py-1.5 rounded-md w-fit">
<iconify-icon height="16" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium">Not Participated</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-200 flex justify-around items-center px-4 pb-4">
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Hub</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon height="24" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Events</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Budget</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Profile</span>
</div>
</div>
</div>

<div className="w-[375px] h-[812px] shrink-0 bg-white border-[12px] border-gray-800 rounded-[3rem] relative overflow-hidden flex flex-col shadow-xl">
<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-medium text-gray-900">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:cellular-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="px-6 pt-4 pb-2">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Season Budget</h1>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<div className="px-6 py-6 border-b border-gray-100 flex flex-col gap-6">
<div className="flex flex-col gap-1 items-center text-center">
<span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Total Spent</span>
<span className="text-4xl font-semibold tracking-tight text-gray-900">$12,450</span>
</div>
<div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500">Remaining</span>
<span className="text-sm font-semibold text-gray-900">$15,550</span>
</div>
<div className="w-px h-8 bg-gray-300"></div>
<div className="flex flex-col gap-1 text-right">
<span className="text-xs font-medium text-gray-500">Total Budget</span>
<span className="text-sm font-semibold text-gray-900">$28,000</span>
</div>
</div>
</div>

<div className="px-6 py-4 flex flex-col">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Breakdown by Category</span>
<div className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-gray-900">Team and Program Fees</span>
<span className="text-xs text-gray-500">2 items</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900">$6,500</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-gray-900">Event Fees</span>
<span className="text-xs text-gray-500">4 items</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900">$2,400</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-gray-900">Tires</span>
<span className="text-xs text-gray-500">3 items</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900">$1,800</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-gray-900">Technical Support</span>
<span className="text-xs text-gray-500">4 items</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900">$1,250</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-gray-900">Optional Services</span>
<span className="text-xs text-gray-500">4 items</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900">$500</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-200 flex justify-around items-center px-4 pb-4">
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Hub</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Events</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon height="24" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Budget</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon height="24" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[0.65rem] font-medium">Profile</span>
</div>
</div>
</div>

<div className="w-[375px] h-[812px] shrink-0 bg-white border-[12px] border-gray-800 rounded-[3rem] relative overflow-hidden flex flex-col shadow-xl">
<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-medium text-gray-900">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:cellular-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="px-4 pt-2 pb-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
<iconify-icon className="text-gray-900" height="20" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Category Detail</span>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Event Fees</h1>
</div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pb-8">
<div className="px-6 py-6 border-b border-gray-100 flex justify-between items-end">
<span className="text-sm font-medium text-gray-500">Category Total</span>
<span className="text-2xl font-semibold tracking-tight text-gray-900">$2,400</span>
</div>

<div className="flex flex-col">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-sm font-medium text-gray-900">HPDE</span>
<span className="text-xs text-gray-500">High Performance Driver Ed.</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-sm font-semibold text-gray-900">$600</span>
<span className="text-xs text-gray-400">1 x $600</span>
</div>
</div>
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-sm font-medium text-gray-900">Club CMP Full Day</span>
<span className="text-xs text-gray-500">Track entry fee</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-sm font-semibold text-gray-900">$800</span>
<span className="text-xs text-gray-400">2 x $400</span>
</div>
</div>
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-sm font-medium text-gray-900">Club CMP Evening Race</span>
<span className="text-xs text-gray-500">Race entry fee</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-sm font-semibold text-gray-900">$250</span>
<span className="text-xs text-gray-400">1 x $250</span>
</div>
</div>
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-sm font-medium text-gray-900">Formula Libre Race</span>
<span className="text-xs text-gray-500">Race entry fee</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-sm font-semibold text-gray-900">$750</span>
<span className="text-xs text-gray-400">1 x $750</span>
</div>
</div>
</div>
</div>

<div className="h-8 w-full bg-white flex justify-center items-start pt-2">
<div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
</div>
</div>

    </>
  );
}
