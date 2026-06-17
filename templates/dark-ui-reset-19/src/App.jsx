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



        function selectProfileType(type) {
            const standardCard = document.getElementById('type-standard');
            const kidsCard = document.getElementById('type-kids');

            if (type === 'kids') {
                standardCard.classList.remove('selected');
                kidsCard.classList.add('selected');
            } else {
                kidsCard.classList.remove('selected');
                standardCard.classList.add('selected');
            }
        }
    
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
      

<header className="w-full p-6 flex justify-between items-center z-10 max-w-lg mx-auto">
<button className="text-white/70 hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-white/5 active:scale-95 duration-200">
<iconify-icon height="24" icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-xl font-medium tracking-tight text-white">Create Profile</h1>
<div className="w-10"></div> 
</header>

<main className="w-full max-w-md mx-auto px-6 flex flex-col items-center flex-grow pb-10 animate-enter">

<div className="relative group mt-4 mb-8">
<div className="w-32 h-32 rounded-full bg-[#121212] border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl shadow-black/20 group-hover:border-white/20 transition-all cursor-pointer">
<iconify-icon className="text-white/20" height="64" icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
<button className="absolute bottom-0 right-0 w-10 h-10 bg-[#2A2A2A] hover:bg-[#333] border border-[#121212] text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 group-hover:scale-110">
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<form className="w-full space-y-6" onsubmit="event.preventDefault();">

<div className="space-y-2">
<label className="text-xs font-medium text-white/50 ml-1">Profile Name</label>
<div className="relative group">
<input className="w-full bg-[#121212] border border-white/5 text-white text-base rounded-2xl px-5 py-4 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-white/20 font-light" placeholder="e.g. John Doe" type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors">
<iconify-icon height="20" icon="solar:pen-new-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-white/50 ml-1">Profile Type</label>
<div className="grid grid-cols-2 gap-4">

<div className="profile-type-card selected cursor-pointer bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#181818] transition-all duration-300" id="type-standard" onclick="selectProfileType('standard')">
<iconify-icon className="text-white/60 transition-colors" height="28" icon="solar:user-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/90">Standard</span>
</div>

<div className="profile-type-card cursor-pointer bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#181818] transition-all duration-300" id="type-kids" onclick="selectProfileType('kids')">
<iconify-icon className="text-white/60 transition-colors" height="28" icon="solar:smile-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/90">Kids</span>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-white/50 ml-1">Language</label>
<div className="relative">
<select className="w-full bg-[#121212] border border-white/5 text-white text-base rounded-2xl px-5 py-4 focus:outline-none focus:border-white/20 transition-all cursor-pointer font-light appearance-none">
<option value="en">English (EN)</option>
<option value="de">Deutsch (DE)</option>
<option value="fr">Français (FR)</option>
<option value="it">Italiano (IT)</option>
<option value="es">Español (ES)</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none flex items-center">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="h-4"></div>

<button className="w-full btn-gradient text-black font-semibold text-lg tracking-wide py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
<span>Save &amp; Continue</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</main>


    </>
  );
}
