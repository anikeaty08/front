import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none"></div>

<main className="w-full max-w-md relative z-10">

<header className="flex items-center justify-between py-6 mb-4">
<button className="text-base font-light text-slate-400 hover:text-white transition-colors duration-200">
                Cancel
            </button>
<h1 className="text-xl font-medium tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Edit Profile
            </h1>
<div className="w-[50px]"></div> 
</header>

<div className="flex flex-col items-center mb-10 group cursor-pointer">
<div className="relative">

<div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-green-900 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>

<div className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-b from-emerald-400/50 to-transparent backdrop-blur-xl">
<img alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[#020804]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>

<div className="absolute bottom-1 right-1 bg-[#0a1f14] border border-emerald-500/30 text-emerald-400 p-2 rounded-full shadow-lg backdrop-blur-md group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-[#020804] transition-all duration-300">
<i className="w-4 h-4" data-lucide="pencil"></i>
</div>
</div>
<span className="mt-4 text-emerald-400 text-base font-medium tracking-wide drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] group-hover:text-emerald-300 transition-colors">
                Change Profile Photo
            </span>
</div>

<form className="space-y-7">

<div className="group">
<label className="block text-sm font-medium text-slate-500 mb-2 ml-1 group-focus-within:text-emerald-500 transition-colors">
                    Name
                </label>
<div className="relative">
<input className="w-full bg-white/[0.03] text-lg text-slate-200 rounded-2xl border border-white/10 px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 shadow-inner" type="text" value="Sarah Jenkins"/>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-500 mb-2 ml-1 group-focus-within:text-emerald-500 transition-colors">
                    Username
                </label>
<div className="relative">
<input className="w-full bg-white/[0.03] text-lg text-slate-200 rounded-2xl border border-white/10 px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 shadow-inner" type="text" value="@sarah_lifts"/>
</div>
</div>

<div className="group">
<div className="flex justify-between items-center mb-2 ml-1">
<label className="block text-sm font-medium text-slate-500 group-focus-within:text-emerald-500 transition-colors">
                        Bio
                    </label>
<span className="text-xs text-slate-600 font-mono">45/150</span>
</div>
<div className="relative">
<textarea className="w-full bg-white/[0.03] text-lg text-slate-200 rounded-2xl border border-white/10 px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-900/10 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 shadow-inner resize-none leading-relaxed" rows="3">Powerlifting enthusiast. Chasing a 300lb deadlift. 🏋️‍♀️</textarea>
</div>
</div>

<button className="w-full group flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-4 transition-all duration-300" type="button">
<div className="flex items-center gap-4">
<div className="bg-blue-500/20 text-blue-400 p-2.5 rounded-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="link"></i>
</div>
<span className="text-lg font-medium text-slate-200">Add Links</span>
</div>
<i className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" data-lucide="chevron-right"></i>
</button>

<div className="pt-8 pb-4">
<button className="w-full relative group overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-[#020804] text-lg font-semibold py-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300 active:scale-[0.98]" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Save Changes
                    </span>

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
</button>
</div>
</form>
</main>


    </>
  );
}
