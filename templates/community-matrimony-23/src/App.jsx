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
      

<div className="fixed inset-0 z-0 grid grid-cols-3 md:grid-cols-6 opacity-30 pointer-events-none grayscale">

<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>

<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1521119989659-a83eee488058?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>

<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Profile" className="h-full w-full object-cover border border-white/5 hidden md:block" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="fixed inset-0 z-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/80 to-neutral-900/95"></div>

<header className="relative z-20 w-full bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="h-10 w-10 bg-rose-500 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
<i className="text-white h-6 w-6" data-lucide="users" strokeWidth="2"></i>
</div>

<div className="flex flex-col">
<h1 className="text-slate-900 text-xl font-semibold tracking-tight leading-tight">Vokkaliga<span className="text-rose-500">Matrimony</span>.com</h1>
<span className="text-slate-500 text-xs tracking-wide">From Matrimony.com Group</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-sm">
<span className="text-slate-600">Already a member?</span>
<button className="text-rose-600 font-medium hover:text-rose-700 transition-colors">Login</button>
</div>

<button className="md:hidden text-slate-700">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12 md:py-0">
<div className="w-full max-w-5xl space-y-8">

<div className="text-center space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-sm leading-tight">
                    No. 1 and official matrimony service <br className="hidden md:block"/> exclusively for Vokkaligas
                </h2>
<p className="text-lg md:text-xl text-neutral-300 font-normal">
                    Meet your soulmate here!
                </p>
</div>

<div className="bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden w-full mt-8 md:mt-12 ring-1 ring-white/10">
<form className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="flex-1 p-5 md:p-6 group hover:bg-slate-50/50 transition duration-200 relative">
<label className="block text-slate-500 text-xs uppercase tracking-wide font-medium mb-1.5">Matrimony Profile For</label>
<div className="relative">
<select className="w-full appearance-none bg-transparent text-slate-900 text-lg font-medium focus:outline-none cursor-pointer pr-8 py-1">
<option disabled="" selected="" value="">Select Profile</option>
<option value="self">Self</option>
<option value="son">Son</option>
<option value="daughter">Daughter</option>
<option value="brother">Brother</option>
<option value="sister">Sister</option>
<option value="friend">Friend</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex-1 p-5 md:p-6 group hover:bg-slate-50/50 transition duration-200">
<label className="block text-slate-500 text-xs uppercase tracking-wide font-medium mb-1.5">Name</label>
<input className="w-full bg-transparent text-slate-900 text-lg font-medium placeholder:text-slate-300 focus:outline-none py-1" placeholder="Enter Name" type="text"/>
</div>

<div className="flex-[1.2] p-5 md:p-6 group hover:bg-slate-50/50 transition duration-200">
<label className="block text-slate-500 text-xs uppercase tracking-wide font-medium mb-1.5">Mobile Number</label>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 border-r border-slate-200 pr-3">
<span className="text-slate-500 text-sm font-medium">+91</span>
<i className="text-slate-300 w-3 h-3" data-lucide="chevron-down"></i>
</div>
<input className="w-full bg-transparent text-slate-900 text-lg font-medium placeholder:text-slate-300 focus:outline-none py-1" placeholder="Enter Mobile Number" type="tel"/>
</div>
</div>

<div className="flex-none md:w-48">
<button className="w-full h-full bg-[#0E7490] hover:bg-[#155E75] text-white font-medium text-lg tracking-tight flex items-center justify-center gap-2 py-6 md:py-0 transition-colors duration-200 group" type="submit">
                            Register Free
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</div>

<p className="text-center text-neutral-400 text-sm md:text-base font-normal mt-6 max-w-3xl mx-auto">
                By clicking on Register Free, you agree to <a className="text-white hover:text-[#0E7490] underline underline-offset-2 transition-colors" href="#">Terms &amp; Conditions</a> and <a className="text-white hover:text-[#0E7490] underline underline-offset-2 transition-colors" href="#">Privacy Policy</a>
</p>
</div>
</main>



    </>
  );
}
