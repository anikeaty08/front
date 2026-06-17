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
      

<div className="w-full max-w-3xl mx-auto fade-in">

<div className="mb-10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm">PROFILE.OS</span>
</div>
<div className="text-xs font-medium text-neutral-500">STEP 1 OF 3</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 space-y-4">
<h1 className="text-3xl text-white font-medium tracking-tight leading-tight">Claim your <br/> digital identity.</h1>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Set up your public presence. This information will be displayed on your profile URL and can be edited later.
                </p>
<div className="pt-6">
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Data is encrypted</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Visible to team members</span>
</div>
</div>
</div>

<div className="lg:col-span-8">
<form className="space-y-8" onsubmit="event.preventDefault();">

<div className="group">
<label className="block text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wider">Profile Picture</label>
<div className="flex items-center gap-6">
<div className="relative w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden group-hover:border-neutral-700 transition-colors duration-300">
<iconify-icon className="text-neutral-600" icon="solar:user-linear" strokeWidth="1.5" width="32"></iconify-icon>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="solar:camera-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<button className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-medium rounded-md border border-neutral-800 transition-all flex items-center gap-2 w-max">
                                    Upload Image
                                </button>
<span className="text-xs text-neutral-600">Max size 5MB. JPG or PNG.</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-500" htmlFor="fname">First Name</label>
<input className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors duration-300" id="fname" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-500" htmlFor="lname">Last Name</label>
<input className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors duration-300" id="lname" placeholder="Doe" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-500" htmlFor="handle">Username</label>
<div className="flex items-center border-b border-neutral-800 focus-within:border-white transition-colors duration-300">
<span className="text-neutral-600 text-sm select-none">profile.os/</span>
<input className="w-full bg-transparent py-2 text-sm text-white placeholder-neutral-700 outline-none" id="handle" placeholder="username" type="text"/>
<iconify-icon className="text-green-500 opacity-0 transition-opacity" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Primary Role</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="role" type="radio"/>
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 hover:border-neutral-700 peer-checked:bg-neutral-100 peer-checked:border-neutral-100 peer-checked:text-black transition-all duration-200 h-full flex flex-col justify-between group">
<iconify-icon className="mb-3 text-neutral-500 group-hover:text-neutral-300 peer-checked:text-black transition-colors" icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Designer</span>
</div>
</label>

<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="role" type="radio"/>
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 hover:border-neutral-700 peer-checked:bg-neutral-100 peer-checked:border-neutral-100 peer-checked:text-black transition-all duration-200 h-full flex flex-col justify-between group">
<iconify-icon className="mb-3 text-neutral-500 group-hover:text-neutral-300 peer-checked:text-black transition-colors" icon="solar:code-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Developer</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="role" type="radio"/>
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 hover:border-neutral-700 peer-checked:bg-neutral-100 peer-checked:border-neutral-100 peer-checked:text-black transition-all duration-200 h-full flex flex-col justify-between group">
<iconify-icon className="mb-3 text-neutral-500 group-hover:text-neutral-300 peer-checked:text-black transition-colors" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Product</span>
</div>
</label>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-end">
<label className="text-xs font-medium text-neutral-500" htmlFor="bio">Bio</label>
<span className="text-[10px] text-neutral-600">0/160</span>
</div>
<textarea className="w-full bg-neutral-900/30 border border-neutral-800 rounded-lg p-3 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all resize-none" id="bio" placeholder="Write a short introduction..." rows="3"></textarea>
</div>

<div className="flex items-center justify-between py-2">
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Open to work</span>
<span className="text-xs text-neutral-500">Display a badge on your profile</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-200 peer-checked:after:bg-black"></div>
</label>
</div>

<div className="pt-6 border-t border-neutral-900 flex items-center justify-end gap-4">
<button className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                            Cancel
                        </button>
<button className="group bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
                            Create Profile
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>

    </>
  );
}
