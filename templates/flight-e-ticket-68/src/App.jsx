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
      

<main className="w-full max-w-[800px] bg-white shadow-2xl relative overflow-hidden flex flex-col">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.03]">
<svg className="w-[150%] h-auto" fill="none" viewbox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
<path d="M100 300 Q 250 100 400 300 T 700 300" stroke="#0B1624" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M50 400 Q 250 200 500 450 T 800 200" stroke="#0B1624" stroke-dasharray="5 5" strokeWidth="1"></path>
<circle cx="400" cy="300" r="200" stroke="#0B1624" stroke-dasharray="4 8" strokeWidth="1"></circle>
<circle cx="400" cy="300" r="300" stroke="#0B1624" stroke-dasharray="4 12" strokeWidth="1"></circle>
<path d="M400 0 L400 600 M0 300 L800 300" stroke="#0B1624" stroke-dasharray="2 10" strokeWidth="1"></path>
</svg>
</div>

<header className="bg-[#0B1624] text-white w-full z-10 relative">
<div className="p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
<div className="flex flex-col">
<h1 className="text-3xl font-semibold tracking-tighter uppercase leading-none mb-1">Airpaz</h1>
<span className="text-xs uppercase tracking-widest text-[#D0D6DD] font-medium">E-Ticket Itinerary Receipt</span>
</div>
<div className="flex flex-col sm:items-end text-xs text-[#E9EDF2] gap-1 text-left sm:text-right">
<div className="flex gap-2 justify-start sm:justify-end w-full">
<span className="text-[#4F5B66] uppercase">Booking Reference:</span>
<span className="font-semibold text-white tracking-wide">AP742</span>
</div>
<div className="flex gap-2 justify-start sm:justify-end w-full">
<span className="text-[#4F5B66] uppercase">Document ID:</span>
<span className="font-medium tracking-wide text-[#D0D6DD]">APZ-6K92XQ4L</span>
</div>
<div className="flex gap-2 justify-start sm:justify-end w-full">
<span className="text-[#4F5B66] uppercase">Issued:</span>
<span className="font-medium tracking-wide text-[#D0D6DD]">25 FEB 2026 08:12 GMT</span>
</div>
</div>
</div>

<div className="h-[2px] w-full bg-[#C8102E]"></div>
</header>

<div className="p-8 flex flex-col gap-8 z-10 relative bg-white/90">

<div className="flex justify-end -mt-4 mb-2">
<div className="bg-[#1E7E34]/10 border border-[#1E7E34]/20 text-[#1E7E34] px-4 py-1.5 rounded-sm flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1E7E34]"></div>
<span className="text-xs font-semibold uppercase tracking-wider">Rescheduled — Confirmed</span>
</div>
</div>

<section className="flex flex-col gap-3">
<h2 className="text-xs uppercase font-semibold text-[#0B1624] tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Passenger Details
                </h2>
<div className="bg-[#E9EDF2] rounded-sm p-1">
<div className="bg-white border border-[#D0D6DD] rounded-sm p-4 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">

<div className="flex flex-col gap-1">
<span className="text-xs uppercase text-[#4F5B66]">Name</span>
<div className="flex items-center gap-2 text-sm font-semibold text-[#0B1624] uppercase">
<iconify-icon className="text-[#4F5B66]" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Dawson / Pastion Harry
                            </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase text-[#4F5B66]">Passport / Nationality</span>
<div className="flex items-center gap-2 text-sm font-semibold text-[#0B1624] uppercase">
<iconify-icon className="text-[#4F5B66]" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                KA7843921 <span className="text-[#D0D6DD] mx-1">|</span> Canada
                            </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase text-[#4F5B66]">Email Contact</span>
<div className="flex items-center gap-2 text-sm font-medium text-[#0B1624]">
<iconify-icon className="text-[#4F5B66]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                northsidebabyonlyemail@gmail.com
                            </div>
</div>

<div className="col-span-1 md:col-span-2 h-[1px] bg-[#E9EDF2] my-1"></div>

<div className="flex flex-col gap-1">
<span className="text-xs uppercase text-[#4F5B66]">Cabin</span>
<div className="flex items-center gap-2 text-sm font-semibold text-[#BFA34A] uppercase">
<iconify-icon icon="solar:star-ring-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Business
                            </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase text-[#4F5B66]">Assigned Seat</span>
<div className="flex items-center gap-2 text-sm font-semibold text-[#0B1624] uppercase">
<iconify-icon className="text-[#4F5B66]" icon="solar:chair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                3F
                            </div>
</div>
</div>
</div>
</section>
<div className="h-[1px] w-full bg-[#D0D6DD]"></div>

<section className="flex flex-col gap-4">
<div className="flex justify-between items-center">
<h2 className="text-xs uppercase font-semibold text-[#0B1624] tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Flight Segment 01
                    </h2>
<span className="text-xs font-semibold text-[#1E7E34] uppercase tracking-wide">Confirmed</span>
</div>

<div className="border border-[#D0D6DD] rounded-sm p-6 flex flex-col gap-8 bg-white">

<div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E9EDF2] pb-4">
<div className="flex items-center gap-6">
<div className="flex flex-col gap-0.5">
<span className="text-xs uppercase text-[#4F5B66]">Carrier</span>
<span className="text-sm font-semibold text-[#0B1624]">Airpaz</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs uppercase text-[#4F5B66]">Flight No.</span>
<span className="text-sm font-semibold text-[#0B1624]">AP742</span>
</div>
</div>
<div className="border border-[#BFA34A] bg-[#BFA34A]/5 px-3 py-1 rounded-sm flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#BFA34A]"></div>
<span className="text-xs font-semibold text-[#BFA34A] uppercase tracking-wide">Business Class</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-6">

<div className="flex flex-col w-full sm:w-1/3">
<span className="text-3xl font-semibold tracking-tighter text-[#0B1624] mb-1">YWG</span>
<span className="text-xs text-[#0B1624] font-medium leading-tight mb-2">Winnipeg James Armstrong Richardson Intl. Airport</span>
<div className="flex flex-col gap-1 mt-auto">
<div className="flex justify-between text-xs">
<span className="text-[#4F5B66] uppercase">Date</span>
<span className="font-semibold text-[#0B1624]">25 FEB 2026</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#4F5B66] uppercase">Terminal</span>
<span className="font-semibold text-[#0B1624]">2</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#4F5B66] uppercase">Gate</span>
<span className="font-semibold text-[#0B1624]">B17</span>
</div>
</div>
</div>

<div className="hidden sm:flex flex-1 flex-col items-center justify-center relative px-4">
<div className="w-full h-[1px] bg-[#D0D6DD] absolute top-1/2 -translate-y-1/2 z-0"></div>
<div className="bg-white px-3 z-10 text-[#0B1624] border border-[#E9EDF2] rounded-full p-1.5 shadow-sm">
<iconify-icon className="text-lg rotate-90" icon="solar:plane-outline" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest text-[#4F5B66] mt-2 bg-white px-2">Direct</span>
</div>

<div className="flex flex-col w-full sm:w-1/3 text-left sm:text-right">
<span className="text-3xl font-semibold tracking-tighter text-[#0B1624] mb-1">YYC</span>
<span className="text-xs text-[#0B1624] font-medium leading-tight mb-2">Calgary International Airport</span>
<div className="flex flex-col gap-1 mt-auto">
<div className="flex justify-between sm:justify-end gap-4 text-xs">
<span className="text-[#4F5B66] uppercase">Date</span>
<span className="font-semibold text-[#0B1624]">25 FEB 2026</span>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="h-[1px] w-full bg-[#D0D6DD]"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<section className="flex flex-col gap-3">
<h2 className="text-xs uppercase font-semibold text-[#0B1624] tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Payment Summary
                    </h2>
<div className="border border-[#D0D6DD] rounded-sm bg-white overflow-hidden text-xs">
<div className="flex justify-between p-3 border-b border-[#E9EDF2]">
<span className="text-[#4F5B66] uppercase">Method</span>
<span className="font-semibold text-[#0B1624]">Apple Pay</span>
</div>
<div className="flex justify-between p-3 border-b border-[#E9EDF2] bg-[#E9EDF2]/30">
<span className="text-[#4F5B66] uppercase">Status</span>
<span className="font-semibold text-[#1E7E34]">Confirmed</span>
</div>
<div className="flex justify-between p-3 border-b border-[#E9EDF2]">
<span className="text-[#4F5B66] uppercase">Transaction Ref</span>
<span className="font-medium text-[#0B1624]">APZ-6K92XQ4L</span>
</div>
<div className="flex justify-between p-3 bg-[#E9EDF2]/30">
<span className="text-[#4F5B66] uppercase">Timestamp</span>
<span className="font-medium text-[#0B1624]">25 FEB 2026 08:05 GMT</span>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<h2 className="text-xs uppercase font-semibold text-[#0B1624] tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:suitcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Baggage &amp; Services
                    </h2>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2.5 bg-[#E9EDF2]/50 border border-[#E9EDF2] rounded-sm">
<iconify-icon className="text-[#4F5B66] text-base" icon="solar:bag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-semibold text-[#0B1624]">Carry-On</span>
<span className="text-xs text-[#4F5B66]">1 standard cabin bag included</span>
</div>
</div>
<div className="flex items-center gap-3 p-2.5 bg-[#E9EDF2]/50 border border-[#E9EDF2] rounded-sm">
<iconify-icon className="text-[#4F5B66] text-base" icon="solar:suitcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-semibold text-[#0B1624]">Checked Baggage</span>
<span className="text-xs text-[#4F5B66]">1 piece included</span>
</div>
</div>
<div className="flex items-center justify-between gap-3 p-2.5 border border-[#BFA34A]/30 bg-[#BFA34A]/5 rounded-sm">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#BFA34A] text-base" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-[#0B1624]">Lounge &amp; Priority</span>
</div>
<span className="text-xs font-medium text-[#BFA34A]">Eligible (Business)</span>
</div>
</div>
</section>
</div>
<div className="h-[1px] w-full bg-[#D0D6DD]"></div>

<section className="flex flex-col gap-2">
<h2 className="text-xs uppercase font-semibold text-[#0B1624] tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Check-in Information
                </h2>
<ul className="list-disc list-inside text-xs text-[#4F5B66] flex flex-col gap-1.5 ml-1">
<li>Online check-in opens 24 hours before departure.</li>
<li>Passengers must arrive at the gate at least 30 minutes prior to departure.</li>
<li>Government-issued identification required for boarding.</li>
</ul>
</section>

<section className="mt-8 flex justify-between items-end border-t border-[#D0D6DD] pt-6 pb-2">

<div className="flex flex-col gap-2">
<span className="text-xs uppercase text-[#4F5B66] tracking-widest font-medium">Ticket Data</span>
<div className="flex h-12 gap-[3px] items-end opacity-80">
<div className="w-1.5 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
<div className="w-2 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
<div className="w-1.5 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-3 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-2 h-full bg-[#0B1624]"></div>
<div className="w-1.5 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-1.5 h-full bg-[#0B1624]"></div>
<div className="w-2 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
<div className="w-0.5 h-full bg-[#0B1624]"></div>
<div className="w-1 h-full bg-[#0B1624]"></div>
</div>
</div>

<div className="flex flex-col items-end gap-2 text-right">
<span className="text-xs uppercase text-[#4F5B66] tracking-widest font-medium">System QR</span>
<div className="w-16 h-16 border border-[#D0D6DD] p-1 flex relative bg-white">
<div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-[2px]">

<div className="bg-[#0B1624]"></div><div className="bg-[#0B1624]"></div><div className="bg-transparent"></div><div className="bg-[#0B1624]"></div>
<div className="bg-[#0B1624]"></div><div className="bg-transparent"></div><div className="bg-[#0B1624]"></div><div className="bg-[#0B1624]"></div>
<div className="bg-transparent"></div><div className="bg-[#0B1624]"></div><div className="bg-[#0B1624]"></div><div className="bg-transparent"></div>
<div className="bg-[#0B1624]"></div><div className="bg-[#0B1624]"></div><div className="bg-transparent"></div><div className="bg-[#0B1624]"></div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-[#E9EDF2] w-full border-t border-[#0B1624] mt-auto">
<div className="px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
<span className="text-[#4F5B66] font-medium tracking-wider uppercase">Doc: APZ-6K92XQ4L</span>
<span className="font-semibold text-[#0B1624] tracking-widest uppercase bg-white px-3 py-1 rounded-sm shadow-sm border border-[#D0D6DD]">UI Concept – Not Valid for Travel</span>
<span className="font-semibold text-[#0B1624] tracking-tighter uppercase text-sm">Airpaz</span>
</div>
</footer>
</main>

    </>
  );
}
