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



        lucide.createIcons();
    
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
      

<nav className="w-full fixed top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E5E5]">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-6 h-6">
<svg className="lucide lucide-book-open" data-icon-replaced="true" data-icon-set="lucide" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(43, 43, 43)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight uppercase">Mira</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B2B2B]/70">
<a className="hover:text-[#2B2B2B] transition-colors" href="#">Methodology</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#">For Therapists</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#">Log in</a>
<a className="bg-[#2B2B2B] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all" href="#early-access">Get early access</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-lg">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#2B2B2B]">
                    See yourself clearly <br/> <span className="text-[#2B2B2B]/60">between sessions.</span>
</h1>
<p className="text-lg text-[#2B2B2B]/80 leading-relaxed font-normal">
                    Mira helps you capture meaningful daily moments and share them with your therapist—so every session starts with clarity.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 bg-white border border-[#E5E5E5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CBDDCB] placeholder:text-gray-400 text-sm transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-[#2B2B2B] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors whitespace-nowrap" type="button">
                        Get early access
                    </button>
</form>
<div className="flex items-center gap-2 text-xs text-[#2B2B2B]/50 font-medium">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>For individuals &amp; therapists. Private by default. HIPAA-ready.</span>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-[#FAFAFA]">

<div className="absolute inset-0 border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white">

<div className="absolute top-8 right-8 w-32 h-48 border border-[#E5E5E5] rounded-t-full bg-[#DCE6F2]/30 flex items-end justify-center">
<div className="w-full h-[1px] bg-[#E5E5E5] mb-16"></div>
<div className="absolute h-full w-[1px] bg-[#E5E5E5] left-1/2"></div>
</div>

<div className="absolute bottom-0 right-24 w-16 h-32 bg-[#CBDDCB]/40 rounded-t-full border border-[#CBDDCB]"></div>

<div className="absolute bottom-12 left-12 right-12 h-1 bg-[#E5E5E5]"></div>
<div className="absolute bottom-0 left-24 w-1 h-12 bg-[#E5E5E5]"></div>
<div className="absolute bottom-0 right-48 w-1 h-12 bg-[#E5E5E5]"></div>

<div className="absolute bottom-[52px] left-32 w-24 h-4 bg-[#EFE7D8] rounded-sm border border-[#E5E5E5] flex items-center justify-center">
<div className="w-16 h-[1px] bg-[#2B2B2B]/10"></div>
</div>

<div className="absolute top-1/3 left-12 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5E5] p-5 rounded-xl max-w-[240px] transform -rotate-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#F5D6C6] flex items-center justify-center text-[#2B2B2B]">
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="h-2 w-20 bg-gray-100 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-gray-50 rounded-full"></div>
<div className="h-2 w-3/4 bg-gray-50 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-[#E5E5E5]">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-medium tracking-widest uppercase text-[#2B2B2B]/50">Why Mira Exists</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group p-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-[#E5E5E5]">
<div className="w-12 h-12 rounded-xl bg-[#DCE6F2] flex items-center justify-center mb-6 text-[#2B2B2B]">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Real life happens between sessions</h3>
<p className="text-[#2B2B2B]/70 text-sm leading-relaxed">
                        Most emotional breakthroughs and struggles happen outside the therapy room. Mira helps preserve what matters.
                    </p>
</div>

<div className="group p-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-[#E5E5E5]">
<div className="w-12 h-12 rounded-xl bg-[#EFE7D8] flex items-center justify-center mb-6 text-[#2B2B2B]">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">A journal that actually gets used</h3>
<p className="text-[#2B2B2B]/70 text-sm leading-relaxed">
                        Record thoughts naturally—text, voice notes, quick mood tags. Mira turns them into meaningful reflections.
                    </p>
</div>

<div className="group p-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-[#E5E5E5]">
<div className="w-12 h-12 rounded-xl bg-[#CBDDCB] flex items-center justify-center mb-6 text-[#2B2B2B]">
<svg className="lucide lucide-sparkles w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="partly-cloud-daytime-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '20px', height: '20px', color: 'rgb(43, 43, 43)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path d="M12 6a6 6 0 0 0-5.996 6.212a3.75 3.75 0 0 1 4.661 1.986a3.5 3.5 0 0 1 2.31 3.723A6.002 6.002 0 0 0 12 6m-.05 14a3.5 3.5 0 0 1-2.45 1H5a3 3 0 0 1-1.483-5.608a3.74 3.74 0 0 1 .647-1.773a8 8 0 0 1 12.103-8.387a2.526 2.526 0 0 1 4.313.204a2.388 2.388 0 0 1-.831 4.57A8 8 0 0 1 12 20l-.05-.001Zm6.985-11.991h.676a.389.389 0 0 0 .064-.773a1 1 0 0 1-.804-.726a.528.528 0 0 0-1.026.028c.416.445.783.939 1.09 1.471M7.25 14c-.501 0-.952.21-1.273.549a1.74 1.74 0 0 0-.466 1.399a1 1 0 0 1-.753 1.081A1 1 0 0 0 5 19h4.5a1.497 1.497 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.255-1.48a1 1 0 0 1-.805-.727A1.75 1.75 0 0 0 7.25 14" fill="#2b2b2b"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Clarity for you and your therapist</h3>
<p className="text-[#2B2B2B]/70 text-sm leading-relaxed">
                        Your therapist sees the insights you choose to share, helping every conversation start grounded in context.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

<div className="relative flex justify-center order-2 md:order-1">
<div className="relative w-[280px] h-[560px] bg-white rounded-[40px] border-[6px] border-[#2B2B2B] shadow-2xl overflow-hidden">

<div className="h-full w-full bg-[#FAFAFA] p-6 flex flex-col">
<div className="flex justify-between items-center mb-8">
<svg className="lucide lucide-chevron-left w-5 h-5 text-gray-400" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span className="text-xs font-medium text-gray-400">Today</span>
<svg className="lucide lucide-more-horizontal w-5 h-5 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="space-y-6">
<h3 className="text-xl font-medium tracking-tight">How are you feeling?</h3>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<span className="px-3 py-1.5 bg-[#DCE6F2] rounded-full text-xs font-medium text-[#2B2B2B]">Anxious</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-500">Calm</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-500">Tired</span>
</div>
<div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
<p className="text-sm text-gray-600 leading-relaxed font-normal">
                                        Felt a bit overwhelmed at work today. Needed to step outside for a moment to breathe...
                                    </p>
</div>
<div className="flex items-center gap-3 p-3 bg-[#F5D6C6]/20 rounded-xl border border-[#F5D6C6]/30">
<div className="w-8 h-8 rounded-full bg-[#F5D6C6] flex items-center justify-center">
<svg className="lucide lucide-mic w-4 h-4 text-[#2B2B2B]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="h-1 flex-1 bg-[#F5D6C6]/40 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-[#2B2B2B]"></div>
</div>
<span className="text-xs font-medium text-[#2B2B2B]">0:42</span>
</div>
</div>

<div className="mt-auto flex justify-center">
<div className="w-14 h-14 bg-[#2B2B2B] rounded-full flex items-center justify-center text-white shadow-lg">
<svg className="lucide lucide-plus w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-6">
<div className="w-10 h-10 rounded-lg bg-[#EFE7D8] flex items-center justify-center text-[#2B2B2B]">
<svg className="lucide lucide-pen-line w-5 h-5" data-lucide="pen-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
<h2 className="text-3xl font-medium tracking-tight text-[#2B2B2B]">Write naturally, without friction.</h2>
<p className="text-lg text-[#2B2B2B]/70 font-normal">
                        Free-form daily notes, quick emotion tagging, or voice memos when you can't type. Mira captures your state of mind with zero judgment.
                    </p>
<ul className="space-y-3 text-sm text-[#2B2B2B]/80">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#CBDDCB] stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Voice-to-text transcription
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#CBDDCB] stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Mood tracking patterns
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#CBDDCB] stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Private by default
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

<div className="space-y-6">
<div className="w-10 h-10 rounded-lg bg-[#DCE6F2] flex items-center justify-center text-[#2B2B2B]">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h2 className="text-3xl font-medium tracking-tight text-[#2B2B2B]">Share securely, with total control.</h2>
<p className="text-lg text-[#2B2B2B]/70 font-normal">
                        Every entry is yours. Choose exactly what and when to share with your therapist via our HIPAA-ready secure channel.
                    </p>
</div>

<div className="bg-[#FAFAFA] rounded-2xl border border-[#E5E5E5] p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#DCE6F2]/20 rounded-full blur-3xl -mr-12 -mt-12"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CBDDCB]/20 rounded-full blur-3xl -ml-12 -mb-12"></div>
<div className="relative z-10 bg-white shadow-sm border border-[#E5E5E5] rounded-xl p-6 w-full max-w-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Weekly Summary</span>
<span className="px-2 py-1 bg-[#CBDDCB]/30 text-[#2B2B2B] text-xs rounded-md font-medium">Ready to share</span>
</div>
<div className="h-px bg-gray-100 w-full mb-4"></div>
<div className="flex items-center gap-4">
<div className="flex-1 space-y-2">
<div className="h-2 bg-gray-100 rounded-full w-full"></div>
<div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
</div>
<button className="bg-[#2B2B2B] text-white p-2 rounded-lg hover:bg-opacity-90 transition">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
<p className="mt-6 text-xs text-gray-400 font-medium uppercase tracking-widest">End-to-End Encrypted</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] p-6 md:p-8">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-[#EFE7D8] flex items-center justify-center text-sm font-medium">JS</div>
<div>
<div className="text-sm font-medium">Julie Smith</div>
<div className="text-xs text-gray-500">Next session: Tuesday, 2pm</div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Recent Themes</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-[#DCE6F2]/50 border border-[#DCE6F2] rounded-md text-xs text-gray-700">Work Stress</span>
<span className="px-3 py-1 bg-[#F5D6C6]/30 border border-[#F5D6C6] rounded-md text-xs text-gray-700">Sleep Patterns</span>
</div>
</div>
<div>
<div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Mood Trend (7 Days)</div>
<div className="h-24 flex items-end gap-2">
<div className="w-full bg-[#FAFAFA] rounded-md relative h-full flex items-end p-2 gap-1">
<div className="w-1/5 bg-[#CBDDCB] h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-[#CBDDCB] h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-[#DCE6F2] h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-[#DCE6F2] h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-[#F5D6C6] h-[80%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-6">
<div className="w-10 h-10 rounded-lg bg-[#CBDDCB] flex items-center justify-center text-[#2B2B2B]">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h2 className="text-3xl font-medium tracking-tight text-[#2B2B2B]">Therapist insights without extra work.</h2>
<p className="text-lg text-[#2B2B2B]/70 font-normal">
                        For clinicians, Mira provides weekly summaries, emotional trends, and language signals. Designed to fit seamlessly into your clinical workflow.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-[#E5E5E5]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-medium tracking-tight mb-12">Inspired by real moments of reflection</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-[#EFE7D8]/50 flex items-center justify-center relative">
<svg className="lucide lucide-coffee w-8 h-8 text-[#2B2B2B]/70" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
<div className="absolute w-full h-full border border-[#EFE7D8] rounded-full scale-110 opacity-50"></div>
</div>
<p className="text-sm text-gray-500">Morning coffee journal</p>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-[#DCE6F2]/50 flex items-center justify-center relative">
<svg className="lucide lucide-armchair w-8 h-8 text-[#2B2B2B]/70" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
<div className="absolute w-full h-full border border-[#DCE6F2] rounded-full scale-110 opacity-50"></div>
</div>
<p className="text-sm text-gray-500">Quiet corner at home</p>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-[#CBDDCB]/50 flex items-center justify-center relative">
<svg className="lucide lucide-clipboard-list w-8 h-8 text-[#2B2B2B]/70" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<div className="absolute w-full h-full border border-[#CBDDCB] rounded-full scale-110 opacity-50"></div>
</div>
<p className="text-sm text-gray-500">Pre-session review</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-4xl mx-auto text-center px-6">
<h3 className="text-lg font-medium text-[#2B2B2B] mb-2">Built with therapists. Designed for real life.</h3>
<p className="text-[#2B2B2B]/60 text-sm max-w-xl mx-auto">
                We’re collaborating with clinicians to ensure Mira improves therapeutic outcomes, not adds admin work.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-[#EFE7D8] relative overflow-hidden" id="early-access">

<div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none"></div>
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-[#2B2B2B]">Be the first to try Mira.</h2>
<p className="text-[#2B2B2B]/70 mb-8">
                Join early access for patients and therapists. We’ll invite new members as we expand our pilot.
            </p>
<form className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E5E5]/50 text-left">
<div className="mb-4">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
<input className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] text-sm transition-all" placeholder="name@example.com" type="email"/>
</div>
<div className="mb-6 space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-[#E5E5E5] rounded md:group-hover:border-[#2B2B2B] peer-checked:bg-[#2B2B2B] peer-checked:border-[#2B2B2B] transition-colors"></div>
<svg className="lucide lucide-check w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-gray-600 select-none">I am an individual looking for support</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-[#E5E5E5] rounded md:group-hover:border-[#2B2B2B] peer-checked:bg-[#2B2B2B] peer-checked:border-[#2B2B2B] transition-colors"></div>
<svg className="lucide lucide-check w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-gray-600 select-none">I am a therapist / clinician</span>
</label>
</div>
<button className="w-full bg-[#2B2B2B] text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-sm" type="submit">
                    Join Waitlist
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 bg-[#FAFAFA] border-t border-[#E5E5E5]">
<div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
<div className="flex items-center gap-2 opacity-80">
<svg className="text-[#2B2B2B] w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 21V4" strokeLinecap="round"></path>
<path d="M12 6C7 6 3 9 3 14C3 17 5 19 7 19C9.5 19 11 17 12 15" strokeLinecap="round"></path>
<path d="M12 6C17 6 21 9 21 14C21 17 19 19 17 19C14.5 19 13 17 12 15" strokeLinecap="round"></path>
</svg>
</div>
<div className="flex gap-6 text-sm text-[#2B2B2B]/60">
<a className="hover:text-[#2B2B2B] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#">Security</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-[#2B2B2B]/30">
                © 2024 Mira Health Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
