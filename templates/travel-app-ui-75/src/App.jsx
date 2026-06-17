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
      

<div className="w-full max-w-[393px] h-[852px] bg-[#F7F3EC] rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col border-[6px] border-white/50">

<div className="h-12 w-full flex justify-between items-end px-8 pb-2">
<span className="text-sm font-normal text-[#3C362F]">9:41</span>
<div className="flex gap-1.5 mb-1 text-[#3C362F]">
<iconify-icon className="w-4 h-4" icon="solar:chart-vertical-linear"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-6 pt-2 pb-4 flex flex-col gap-6 relative z-10">

<div className="flex justify-between items-center">
<button className="flex items-center gap-2 text-[#8C7E6A] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-5 h-5 text-[#1A635F]" icon="solar:map-point-linear"></iconify-icon>
<span className="text-base font-light">San Francisco, CA</span>
<iconify-icon className="w-4 h-4 opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="flex gap-3 bg-[#FFFFFF] p-1.5 rounded-full shadow-sm border border-[#EAE4D9]">
<button className="bg-[#1A635F] text-[#FFFFFF] p-1.5 rounded-full shadow-sm">
<iconify-icon className="w-4 h-4" icon="solar:list-linear"></iconify-icon>
</button>
<button className="text-[#8C7E6A] p-1.5 rounded-full">
<iconify-icon className="w-4 h-4" icon="solar:map-linear"></iconify-icon>
</button>
</div>
</div>

<h1 className="text-3xl tracking-tight font-normal text-[#3C362F]">Explore the <span className="italic font-light text-[#D98A2C]">city</span></h1>

<div className="bg-[#EAE4D9]/50 p-1 rounded-2xl flex w-full">
<button className="flex-1 bg-[#FFFFFF] shadow-sm rounded-xl py-2.5 text-base font-normal text-[#3C362F] transition-all">
                    Landmarks
                </button>
<button className="flex-1 rounded-xl py-2.5 text-base font-light text-[#8C7E6A] transition-all">
                    Museums
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32 flex flex-col gap-5">

<div className="bg-[#FFFFFF] p-3.5 rounded-[32px] shadow-[0_8px_24px_-4px_rgba(217,138,44,0.12)] border border-[#EAE4D9] flex flex-col group cursor-pointer">

<div className="relative h-[220px] w-full rounded-[24px] overflow-hidden mb-4">
<img alt="Golden Gate Bridge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="bg-[#D98A2C] text-[#FFFFFF] text-xs font-normal px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#D98A2C]/20">
<iconify-icon className="w-3.5 h-3.5" icon="solar:stars-linear"></iconify-icon>
                            250 pts
                        </div>
</div>
<div className="absolute top-4 right-4">
<div className="bg-[#1A635F] text-[#FFFFFF] text-xs font-normal px-3 py-1.5 rounded-full shadow-md shadow-[#1A635F]/20">
                            $14.99
                        </div>
</div>
</div>

<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl tracking-tight font-normal text-[#3C362F]">Golden Gate Coastal Trail</h2>
</div>
<div className="flex items-center gap-4 text-base text-[#8C7E6A] font-light mb-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="w-4 h-4 text-[#8C7E6A]/70" icon="solar:clock-circle-linear"></iconify-icon>
                            2.5h
                        </div>
<div className="w-1 h-1 rounded-full bg-[#D4CFC6]"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="w-4 h-4 text-[#8C7E6A]/70" icon="solar:map-point-linear"></iconify-icon>
                            8 Stops
                        </div>
</div>
<button className="w-full py-3.5 rounded-2xl bg-[#1A635F] text-[#FFFFFF] text-base font-normal flex items-center justify-center gap-2 hover:bg-[#15504D] transition-colors duration-300">
                        View Details
                        <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#FFFFFF] p-3.5 rounded-[32px] shadow-[0_8px_24px_-4px_rgba(217,138,44,0.12)] border border-[#EAE4D9] flex flex-col group cursor-pointer">

<div className="relative h-[220px] w-full rounded-[24px] overflow-hidden mb-4">
<img alt="Palace of Fine Arts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="bg-[#D98A2C] text-[#FFFFFF] text-xs font-normal px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#D98A2C]/20">
<iconify-icon className="w-3.5 h-3.5" icon="solar:stars-linear"></iconify-icon>
                            120 pts
                        </div>
</div>
<div className="absolute top-4 right-4">
<div className="bg-[#1A635F] text-[#FFFFFF] text-xs font-normal px-3 py-1.5 rounded-full shadow-md shadow-[#1A635F]/20">
                            $9.99
                        </div>
</div>
</div>

<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl tracking-tight font-normal text-[#3C362F]">Palace of Fine Arts</h2>
</div>
<div className="flex items-center gap-4 text-base text-[#8C7E6A] font-light mb-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="w-4 h-4 text-[#8C7E6A]/70" icon="solar:clock-circle-linear"></iconify-icon>
                            1.5h
                        </div>
<div className="w-1 h-1 rounded-full bg-[#D4CFC6]"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="w-4 h-4 text-[#8C7E6A]/70" icon="solar:map-point-linear"></iconify-icon>
                            4 Stops
                        </div>
</div>
<button className="w-full py-3.5 rounded-2xl bg-[#1A635F] text-[#FFFFFF] text-base font-normal flex items-center justify-center gap-2 hover:bg-[#15504D] transition-colors duration-300">
                        View Details
                        <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[88px] bg-[#F7F3EC] border-t border-[#EAE4D9] flex justify-between items-center px-8 pb-6 pt-4 rounded-b-[42px] z-50 shadow-[0_-10px_40px_rgba(217,138,44,0.04)]">
<button className="flex flex-col items-center gap-1 text-[#1A635F]">
<iconify-icon className="w-6 h-6" icon="solar:compass-linear"></iconify-icon>
<span className="text-xs font-normal">Tours</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:scanner-linear"></iconify-icon>
<span className="text-xs font-normal">Scan</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-normal">For You</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-normal">Profile</span>
</button>
</div>
</div>

<div className="w-full max-w-[393px] h-[852px] bg-[#F7F3EC] rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col border-[6px] border-white/50">

<div className="absolute top-0 left-0 w-full h-12 flex justify-between items-end px-8 pb-2 z-50 text-white">
<span className="text-sm font-normal tracking-tight drop-shadow-md">9:41</span>
<div className="flex gap-1.5 mb-1 drop-shadow-md">
<iconify-icon className="w-4 h-4" icon="solar:chart-vertical-linear"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar pb-28">

<div className="relative h-[360px] w-full">
<img alt="Golden Gate Trail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EC] via-transparent to-black/40"></div>

<button className="absolute top-14 left-6 w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="relative z-10 bg-[#F7F3EC] rounded-t-[40px] px-7 pt-4 pb-10 -mt-10">

<div className="mb-6">
<h1 className="text-3xl tracking-tight font-normal text-[#3C362F] leading-tight mb-3">Golden Gate <br/>Coastal Trail</h1>
<p className="text-base text-[#8C7E6A] font-light leading-relaxed">
                        Experience the <span className="italic text-[#D98A2C]">dramatic</span> meeting of land and sea. This iconic route offers sweeping views of the bridge, historic batteries, and hidden coves along the rugged coastline.
                    </p>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-[#F5F0E6] rounded-[24px] p-5 border border-[#EAE4D9] flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center mb-1">
<iconify-icon className="w-5 h-5 text-[#1A635F]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-light text-[#8C7E6A]">Duration</span>
<span className="text-lg font-normal text-[#3C362F] tracking-tight">2.5 Hours</span>
</div>
<div className="bg-[#F5F0E6] rounded-[24px] p-5 border border-[#EAE4D9] flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center mb-1">
<iconify-icon className="w-5 h-5 text-[#1A635F]" icon="solar:map-linear"></iconify-icon>
</div>
<span className="text-sm font-light text-[#8C7E6A]">Stops</span>
<span className="text-lg font-normal text-[#3C362F] tracking-tight">8 Landmarks</span>
</div>
</div>

<div className="bg-[#FDF6E8] border border-[#F0E4D3] rounded-[24px] p-5 mb-8 flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#D98A2C]/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="w-6 h-6 text-[#D98A2C]" icon="solar:stars-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-normal text-[#D98A2C] mb-1">Earn 250 points</h3>
<p className="text-base font-light text-[#D98A2C]/80 leading-snug">Complete this tour to earn points towards exclusive experiences and local perks.</p>
</div>
</div>

<div className="flex items-center justify-between mb-10 pt-4 border-t border-[#EAE4D9]">
<div>
<span className="text-sm text-[#8C7E6A] font-light block mb-0.5">Total Price</span>
<span className="text-2xl font-normal text-[#3C362F] tracking-tight">$14.99</span>
</div>
<div className="flex items-center gap-3">
<span className="text-base font-normal text-[#3C362F]">Apply Points</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-8 bg-[#CFC7B8] rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-[#FFFFFF] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#FFFFFF] after:border-[#CFC7B8] after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#1A635F]"></div>
</label>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full bg-[#1A635F] text-[#FFFFFF] py-4 rounded-[20px] text-lg font-normal shadow-lg shadow-[#1A635F]/20 transition-transform active:scale-[0.98]">
                        Buy Tour — $14.99
                    </button>
<button className="w-full bg-[#FFFFFF] text-[#3C362F] border border-[#EAE4D9] py-4 rounded-[20px] text-lg font-normal transition-colors hover:bg-[#F5F0E6] active:scale-[0.98]">
                        Cancel
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[88px] bg-[#F7F3EC]/95 backdrop-blur-xl border-t border-[#EAE4D9] flex justify-between items-center px-8 pb-6 pt-4 rounded-b-[42px] z-50">
<button className="flex flex-col items-center gap-1 text-[#1A635F]">
<iconify-icon className="w-6 h-6" icon="solar:compass-linear"></iconify-icon>
<span className="text-xs font-normal">Tours</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:scanner-linear"></iconify-icon>
<span className="text-xs font-normal">Scan</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-normal">For You</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#8C8070] hover:text-[#3C362F] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-normal">Profile</span>
</button>
</div>
</div>

    </>
  );
}
