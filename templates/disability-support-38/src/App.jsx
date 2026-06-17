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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[#f9fafb]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/50"></div>
<div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-purple-200/30 rounded-full blur-[130px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[900px] h-[900px] bg-indigo-200/30 rounded-full blur-[130px]"></div>
</div>

<main className="w-full max-w-[1500px] bg-white rounded-[40px] shadow-2xl shadow-indigo-100/60 p-3 lg:p-4 flex flex-col lg:flex-row relative overflow-hidden min-h-[850px] border border-white/60">

<div className="w-full lg:w-[45%] flex flex-col p-6 lg:p-12 lg:pr-10 relative z-10">

<nav className="flex items-center gap-12 mb-16 lg:mb-24">
<a className="flex items-center gap-3 group opacity-90 hover:opacity-100 transition-opacity" href="#">

<div className="text-purple-600 bg-purple-50 p-2 rounded-xl">
<iconify-icon icon="simple-icons:atlassian" width="28"></iconify-icon>
</div>
<span className="text-2xl font-medium tracking-tight text-slate-800">Lumina</span>
</a>
<div className="hidden xl:flex items-center gap-8 text-slate-500 text-lg font-medium tracking-tight">
<a className="hover:text-purple-600 transition-colors" href="#">About</a>
<a className="hover:text-purple-600 transition-colors" href="#">Services</a>
<a className="hover:text-purple-600 transition-colors" href="#">Programs</a>
<a className="hover:text-purple-600 transition-colors" href="#">Why us</a>
<a className="hover:text-purple-600 transition-colors" href="#">Locations</a>
</div>
</nav>

<div className="flex-1 flex flex-col justify-center mb-12">
<h1 className="text-5xl xl:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight mb-8">
                    Trusted Disability
                    <span className="relative inline-block whitespace-nowrap px-3 mx-1">

<span className="absolute inset-0 bg-purple-200 rounded-full -rotate-1 skew-x-3 mix-blend-multiply opacity-70"></span>
<span className="relative text-purple-950">Support</span>
</span>
<span className="relative inline-block whitespace-nowrap px-3 mx-1">

<span className="absolute inset-0 bg-purple-200 rounded-full rotate-1 skew-y-1 mix-blend-multiply opacity-70"></span>
<span className="relative text-purple-950">Provider</span>
</span>
                    in Los Angeles &amp; Surrounding Areas
                </h1>
<p className="text-xl text-slate-500 max-w-xl mb-12 font-normal leading-relaxed">
                    Personalized disability support tailored to individual physical, intellectual, and psychosocial needs.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">

<button className="relative group">
<div className="absolute -inset-[1px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
<div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full leading-none flex items-center shadow-md">
<span className="text-white font-medium text-lg">Start a Conversation</span>
</div>
</button>
<a className="text-lg font-medium text-slate-600 hover:text-purple-600 border-b-2 border-slate-200 hover:border-purple-600 pb-0.5 transition-all" href="#">
                        View Our Services
                    </a>
</div>
</div>

<div className="mt-auto relative w-full max-w-md group cursor-pointer">

<div className="absolute -inset-[1px] bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 rounded-[24px]"></div>

<div className="relative bg-purple-50/50 backdrop-blur-xl rounded-[23px] p-5 flex items-center gap-5 h-full transition-transform group-hover:-translate-y-1 duration-300">
<div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-purple-200 relative">
<img alt="Caregiver" className="object-cover w-full h-full mix-blend-overlay opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-purple-600/10"></div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-800 tracking-tight leading-tight mb-1">
                            Care <span className="text-purple-600 font-semibold">built around trust</span> and understanding
                        </h3>
<p className="text-base text-slate-500 leading-snug">
                            Supporting individuals and families across Los Angeles.
                        </p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] relative h-[600px] lg:h-auto rounded-[32px] overflow-hidden group ml-0 lg:ml-4 mt-4 lg:mt-0 shadow-inner">

<div className="absolute inset-0 bg-indigo-50">

<img alt="Abstract 3D Background" className="w-full h-full object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&amp;fit=crop&amp;q=80&amp;w=2564"/>

<div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-transparent to-white/20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-100/30"></div>
</div>

<div className="absolute top-8 right-8 flex items-center gap-4 z-20">
<button className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md text-slate-700 flex items-center justify-center hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white/50">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="px-8 h-14 rounded-full bg-white/70 backdrop-blur-md text-slate-800 font-medium text-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white/50">
                    Contact Us
                </button>
</div>


<div className="absolute top-[35%] left-[12%] animate-[fadeIn_1s_ease-out_0.5s_both]">
<div className="group/spot flex items-center gap-3 bg-white/80 backdrop-blur-md pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-purple-900/5 hover:scale-105 transition-transform cursor-pointer border border-white/60">
<span className="text-sm font-medium text-slate-700">At-home care</span>
<div className="w-9 h-9 rounded-full bg-purple-400 text-white flex items-center justify-center group-hover/spot:bg-purple-500 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-[52%] right-[20%] animate-[fadeIn_1s_ease-out_0.8s_both]">
<div className="group/spot flex items-center gap-3 bg-white/80 backdrop-blur-md pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-purple-900/5 hover:scale-105 transition-transform cursor-pointer border border-white/60">
<span className="text-sm font-medium text-slate-700">Independent living support</span>
<div className="w-9 h-9 rounded-full bg-purple-400 text-white flex items-center justify-center group-hover/spot:bg-purple-500 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-[25%] left-[28%] animate-[fadeIn_1s_ease-out_1.1s_both]">
<div className="group/spot flex items-center gap-3 bg-white/80 backdrop-blur-md pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-purple-900/5 hover:scale-105 transition-transform cursor-pointer border border-white/60">
<span className="text-sm font-medium text-slate-700">Guidance through major change</span>
<div className="w-9 h-9 rounded-full bg-purple-400 text-white flex items-center justify-center group-hover/spot:bg-purple-500 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
