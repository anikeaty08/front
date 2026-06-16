import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<div className="w-full max-w-md bg-zinc-50 min-h-[850px] relative shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:rounded-[3rem] overflow-hidden flex flex-col sm:border border-zinc-200/60">

<div className="h-14 w-full"></div>

<div className="px-6 flex justify-center">
<button className="w-full max-w-[260px] py-3 px-5 bg-white border border-zinc-200/80 rounded-full flex items-center justify-between shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 group">
<span className="text-sm font-medium text-zinc-700">Select my meal plan</span>
<div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-white text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</button>
</div>

<div className="flex flex-col items-center mt-12 px-6">
<div className="mb-3">
<span className="text-xs font-semibold text-zinc-400 tracking-tighter uppercase">Vigour</span>
</div>
<h1 className="text-3xl font-medium tracking-tight text-zinc-900">Welcome Albie</h1>
</div>

<div className="mx-6 mt-10 mb-28 bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-200/60 flex flex-col group relative overflow-hidden">

<div className="w-full aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<img alt="Personalised Meal Prep" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a8ff6ce-9f9b-42d5-8fb6-63d616f29747_1600w.jpg"/>

<div className="absolute inset-0 border border-black/5 rounded-t-[2rem] pointer-events-none"></div>
</div>

<div className="p-6 flex flex-col relative z-10 bg-white">
<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    Expert coaching meets personalised meal prep—packed with flavor, macro built around each client.
                </p>
<button className="mt-6 w-full py-3.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
                    Explore Menu
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-zinc-200/60 px-6 py-3 pb-8 flex justify-between items-center z-50">

<button className="flex flex-col items-center gap-1.5 w-16 group">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:home-2-linear"></iconify-icon>
<span className="text-xs font-medium text-emerald-600">Home</span>
</button>

<button className="flex flex-col items-center gap-1.5 w-16 group">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="solar:calendar-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">Meals</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16 group">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">Cart</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16 group">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">Profile</span>
</button>
</nav>
</div>

    </>
  );
}
