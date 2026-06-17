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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<span className="text-lg font-semibold tracking-tighter text-gray-900">Aura</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#privacy">Privacy</a>
<a className="hover:text-gray-900 transition-colors" href="#manifesto">Manifesto</a>
</div>
<a className="bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10" href="#">
                Download
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6 opacity-0 animate-fade-in">
                Communication,<br className="hidden md:block"/> clarified.
            </h1>
<p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-in delay-100">
                Aura strips away the noise, leaving only what matters. <br className="hidden md:block"/>No stories. No clutter. Just connection.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in delay-200">
<button className="h-12 px-8 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:apple" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
<span>Download for iOS</span>
</button>
<button className="h-12 px-8 rounded-full bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
<span>Read the story</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="md:mt-32 animate-fade-in delay-300 opacity-0 max-w-5xl mt-20 mr-auto ml-auto pr-6 pl-6">
<div className="relative rounded-[2.5rem] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-200/60 p-2 md:p-3">

<div className="relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 aspect-[16/10] md:aspect-[2/1] flex">

<div className="hidden md:flex w-64 bg-gray-50/50 border-r border-gray-100 flex-col py-6 px-4">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<span className="text-sm font-medium text-gray-900">Profile</span>
</div>
<div className="space-y-1">
<div className="px-3 py-2 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<div className="flex-1">
<div className="text-xs font-medium text-gray-900">Sarah M.</div>
<div className="text-[10px] text-gray-400 truncate">Are we still on for coffee?</div>
</div>
</div>
<div className="px-3 py-2 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center gap-3 cursor-pointer">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
<div className="flex-1">
<div className="text-xs font-medium text-gray-600">Design Team</div>
<div className="text-[10px] text-gray-400 truncate">Files uploaded.</div>
</div>
</div>
<div className="px-3 py-2 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center gap-3 cursor-pointer">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
<div className="flex-1">
<div className="text-xs font-medium text-gray-600">Alex Chen</div>
<div className="text-[10px] text-gray-400 truncate">Sounds good!</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white relative">

<div className="h-16 border-b border-gray-50 flex items-center justify-between px-8 bg-white/80 backdrop-blur sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="text-sm font-medium text-gray-900">Sarah Miller</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center gap-4 text-gray-400">
<svg aria-hidden="true" className="iconify cursor-pointer hover:text-gray-600 transition-colors iconify--lucide" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify cursor-pointer hover:text-gray-600 transition-colors iconify--lucide" data-icon="lucide:video" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
<svg aria-hidden="true" className="iconify cursor-pointer hover:text-gray-600 transition-colors iconify--lucide" data-icon="lucide:info" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto no-scrollbar flex flex-col gap-6">
<div className="text-center">
<span className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">Today</span>
</div>

<div className="flex items-end gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">

<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-[10px]">SM</div>
</div>
<div className="space-y-1">
<div className="bg-gray-100 text-gray-900 text-sm px-5 py-3 rounded-2xl rounded-bl-sm leading-relaxed">
                                        Hey! Have you had a chance to look at the new Aura interface concepts?
                                    </div>
<div className="bg-gray-100 text-gray-900 text-sm px-5 py-3 rounded-2xl rounded-tl-sm leading-relaxed">
                                        I think the minimalist approach is going to be a game changer.
                                    </div>
</div>
</div>

<div className="flex items-end gap-3 max-w-[80%] self-end flex-row-reverse">
<div className="space-y-1">
<div className="bg-blue-600 text-white text-sm px-5 py-3 rounded-2xl rounded-br-sm leading-relaxed shadow-sm shadow-blue-500/20">
                                        Absolutely. It feels so much lighter.
                                    </div>
<div className="bg-blue-600 text-white text-sm px-5 py-3 rounded-2xl rounded-tr-sm leading-relaxed shadow-sm shadow-blue-500/20">
                                        The lack of distractions helps me focus on the actual conversation.
                                    </div>
</div>
</div>

<div className="flex items-end gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-[10px]">SM</div>
</div>
<div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
</div>
</div>
</div>
</div>

<div className="p-6 pt-0 bg-white">
<div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-5 py-3 transition-shadow focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200">
<svg aria-hidden="true" className="iconify text-gray-400 cursor-pointer hover:text-gray-600 iconify--lucide" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-400" placeholder="Type a message..." type="text"/>
<svg aria-hidden="true" className="iconify text-gray-400 cursor-pointer hover:text-gray-600 iconify--lucide" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
<svg aria-hidden="true" className="iconify text-blue-600 cursor-pointer iconify--lucide" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="features">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Designed for focus.</h2>
<p className="text-lg text-gray-500">We removed the status updates, the stories, and the algorithmic feeds. Aura restores the sanctity of direct communication.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-gray-100">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Instantaneous</h3>
<p className="text-sm leading-relaxed text-gray-500">
                            Built on a custom lightweight protocol, messages in Aura are delivered faster than you can blink. No bloatware slowing you down.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 md:opacity-100 transition-transform duration-700 group-hover:scale-105">

<div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10"></div>
<div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-60"></div>
</div>
</div>

<div className="row-span-2 bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/10">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 text-white border border-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Private by default</h3>
<p className="text-sm leading-relaxed text-gray-400 mb-8">
                            End-to-end encryption isn't a setting; it's the only way Aura works. We can't read your messages, and we don't want to.
                        </p>

<div className="mt-8 flex justify-center">
<div className="relative">
<div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)] iconify--lucide" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Quiet Mode</h3>
<p className="text-sm text-gray-500">Mute conversations intelligently based on your calendar status.</p>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-image" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="10" cy="12" r="2"></circle><path d="m20 17l-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Lossless Media</h3>
<p className="text-sm text-gray-500">Share photos and videos in their original quality, without compression artifacts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fbfbfd]">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Zen in your pocket.</h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    Most chat apps fight for your attention. Aura respects it. The interface recedes into the background, allowing the human connection to take center stage.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Zero ads or sponsored content</span>
</li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Minimalist, gesture-based navigation</span>
</li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Customizable, soothing soundscapes</span>
</li>
</ul>
</div>
<div className="md:w-1/2 relative">

<div className="relative w-full aspect-square max-w-sm mx-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2rem] opacity-50 blur-2xl"></div>
<div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2rem] shadow-xl p-8 flex flex-col justify-between">

<div className="space-y-4">
<div className="w-2/3 h-4 bg-white/60 rounded-full"></div>
<div className="w-1/2 h-4 bg-white/60 rounded-full"></div>
<div className="w-3/4 h-4 bg-blue-500/10 rounded-full self-end ml-auto"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-center h-32">
<span className="text-6xl font-light text-gray-800 tracking-tighter">Aa</span>
</div>
</div>
<div className="text-center text-xs font-medium text-gray-500">Typography First Design</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Ready to clear the air?</h2>
<p className="text-xl text-gray-500 mb-10">Join thousands of users who have switched to a calmer way of connecting.</p>
<div className="inline-flex flex-col items-center">
<a className="bg-gray-900 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 flex items-center gap-2" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
<span>Get Aura Free</span>
</a>
<span className="mt-4 text-xs text-gray-400">Available for iOS and macOS.</span>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-gray-900">Aura</span>
<p className="mt-4 text-xs text-gray-500 leading-relaxed">
                        San Francisco, CA.<br/>
                        Designed with love &amp; precision.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-xs text-gray-500 font-medium">
<li><a className="hover:text-gray-900 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Change Log</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Beta Program</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-xs text-gray-500 font-medium">
<li><a className="hover:text-gray-900 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-gray-500 font-medium">
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
<p className="text-[10px] text-gray-400">© 2024 Aura Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
