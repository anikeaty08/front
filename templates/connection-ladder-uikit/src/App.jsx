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
      
<div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">

<header className="mb-24 border-b-4 border-black pb-8 flex items-center gap-4">
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-black">UI Component Kit</h1>
</header>

<section className="mb-24">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Color Palette</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Primary Dark</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-[#FDFBF7] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Background</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-purple-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Lavender</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-amber-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Soft Yellow</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-emerald-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Mint Green</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-rose-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Blush Pink</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-blue-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Sky Blue</span>
</div>
<div className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
<div className="h-24 rounded-xl bg-orange-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
<span className="text-base text-black font-semibold">Peach</span>
</div>
</div>
</section>

<section className="mb-24">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Typography</h2>
<div className="bg-white p-10 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-8 max-w-3xl">
<div>
<span className="text-base text-black bg-amber-100 px-2 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 inline-block font-semibold uppercase tracking-wider">Display Large</span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">Empowering Teams</h1>
</div>
<div>
<span className="text-base text-black bg-purple-200 px-2 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 inline-block font-semibold uppercase tracking-wider">Heading 1</span>
<h2 className="text-4xl font-semibold tracking-tight text-black">Join the best workplace</h2>
</div>
<div>
<span className="text-base text-black bg-emerald-300 px-2 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 inline-block font-semibold uppercase tracking-wider">Heading 2</span>
<h3 className="text-2xl font-semibold tracking-tight text-black">Welcome to the Synapse!</h3>
</div>
<div>
<span className="text-base text-black bg-blue-200 px-2 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 inline-block font-semibold uppercase tracking-wider">Body Text (Large)</span>
<p className="text-lg font-medium text-black leading-relaxed">
                        We are a platform on a mission with a critically needed to learn sign language. We make it fun and easy to learn the fundamentals of sign language in our online courses.
                    </p>
</div>
<div>
<span className="text-base text-black bg-rose-200 px-2 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 inline-block font-semibold uppercase tracking-wider">Body Text (Medium)</span>
<p className="text-base font-medium text-gray-800 leading-relaxed">
                        Our website offers 1,400+ vocabulary words you'll use right away, inside and video lectures in 4 different languages of the world.
                    </p>
</div>
</div>
</section>

<section className="mb-24">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Buttons &amp; Badges</h2>
<div className="flex flex-wrap items-center gap-6 bg-white p-10 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

<button className="bg-black text-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 py-4 text-lg font-semibold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center gap-2">
                    Get Started <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="bg-purple-300 text-black rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 py-4 text-lg font-semibold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    Plan Details
                </button>

<button className="bg-white text-black rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 py-4 text-lg font-semibold hover:bg-amber-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    Learn more about Juno
                </button>

<button className="bg-gray-100 text-black rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-4 text-lg font-semibold hover:bg-gray-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    Cancel
                </button>

<button className="p-4 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-emerald-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
</button>
<div className="w-full h-1 bg-black rounded-full my-4"></div>

<div className="flex gap-4 flex-wrap">
<span className="inline-flex items-center px-4 py-2 rounded-lg text-base font-semibold bg-emerald-300 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<span className="w-3 h-3 bg-black rounded-full mr-2 border border-black"></span> Active
                    </span>
<span className="inline-flex items-center px-4 py-2 rounded-lg text-base font-semibold bg-amber-200 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Pending
                    </span>
<span className="inline-flex items-center px-4 py-2 rounded-lg text-base font-semibold bg-gray-100 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<iconify-icon className="text-lg mr-2" icon="solar:global-linear"></iconify-icon> World
                    </span>
<span className="inline-flex items-center px-4 py-2 rounded-lg text-base font-semibold bg-white border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Validation in 3 days
                    </span>
</div>
</div>
</section>

<section className="mb-24">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Form Controls</h2>
<div className="bg-white p-10 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-12 max-w-3xl">

<div className="flex flex-col gap-6 flex-1">
<h3 className="text-lg font-semibold tracking-tight mb-2 rounded-md bg-rose-200 border-2 border-black px-3 py-1 w-max shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Checkboxes</h3>
<label className="flex items-center gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-8 h-8 rounded-md bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-purple-300 peer-checked:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] peer-checked:translate-x-[2px] peer-checked:translate-y-[2px] transition-all"></div>
<iconify-icon className="text-2xl text-black absolute opacity-0 peer-checked:opacity-100 transition-opacity peer-checked:translate-x-[2px] peer-checked:translate-y-[2px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg font-medium text-black group-hover:underline decoration-2 underline-offset-4">Under one roof</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-8 h-8 rounded-md bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-black peer-checked:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] peer-checked:translate-x-[2px] peer-checked:translate-y-[2px] transition-all"></div>
<iconify-icon className="text-2xl text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity peer-checked:translate-x-[2px] peer-checked:translate-y-[2px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg font-medium text-black group-hover:underline decoration-2 underline-offset-4">Carefully vetted partners</span>
</label>
</div>

<div className="flex flex-col gap-6 flex-1">
<h3 className="text-lg font-semibold tracking-tight mb-2 rounded-md bg-blue-200 border-2 border-black px-3 py-1 w-max shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Toggles</h3>
<label className="flex items-center justify-between cursor-pointer group p-4 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
<span className="text-lg font-semibold text-black">Notifications</span>
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-16 h-8 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] peer peer-checked:bg-emerald-300 after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-2 after:border-black after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-8"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group p-4 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
<span className="text-lg font-semibold text-black">Auto-renew</span>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-16 h-8 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] peer peer-checked:bg-black peer-checked:after:bg-white after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border-2 after:border-black after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-8"></div>
</div>
</label>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Card Components</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
<div className="flex justify-between items-start mb-12">
<div className="w-14 h-14 rounded-xl bg-blue-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<button className="text-black rounded-lg hover:bg-amber-100 p-2 border-2 border-transparent hover:border-black transition-colors"><iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div>
<span className="text-base text-black font-semibold mb-2 block bg-gray-100 rounded-md w-max px-2 py-1 border-2 border-black">Sales Revenue</span>
<div className="flex items-end gap-3">
<h3 className="text-5xl font-semibold tracking-tight text-black">230k</h3>
<span className="text-base text-black font-semibold rounded-md bg-emerald-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-1">+12%</span>
</div>
</div>
</div>

<div className="bg-purple-200 p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden group hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
<div className="relative z-10 flex flex-col h-full">
<div className="self-start rounded-md bg-white text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-semibold uppercase tracking-wider mb-8">
                            For Teams
                        </div>
<div className="mt-auto">
<h3 className="text-3xl font-semibold tracking-tight text-black mb-6 leading-tight">Empowering Teams with Flexible Benefits</h3>
<button className="bg-black text-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 text-base font-semibold flex items-center gap-2 w-max group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Is Juno right for my team? <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute -right-12 -top-12 w-48 h-48 rounded-3xl bg-purple-400 border-4 border-black group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"></div>
</div>

<div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold tracking-tight text-black rounded-md bg-amber-100 px-3 py-1 border-2 border-black">Holland</span>
<span className="bg-white text-black rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-3 py-1 text-sm font-semibold flex items-center">
<iconify-icon className="mr-2 text-base" icon="solar:wi-fi-linear"></iconify-icon> eSIM
                        </span>
</div>
<div className="mb-8">
<span className="text-base text-black font-medium block mb-2">Unlimited or 30 days</span>
<div className="flex items-baseline gap-1">
<span className="text-black font-semibold text-2xl">$</span>
<span className="text-6xl font-semibold tracking-tight text-black">10</span>
</div>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-lg font-medium text-black">
<div className="bg-emerald-300 rounded-md p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
<iconify-icon className="text-black text-lg" icon="solar:check-read-linear"></iconify-icon>
</div> 
                            1GB of internet
                        </li>
<li className="flex items-center gap-3 text-lg font-medium text-black">
<div className="bg-emerald-300 rounded-md p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
<iconify-icon className="text-black text-lg" icon="solar:check-read-linear"></iconify-icon>
</div> 
                            60min for calls
                        </li>
<li className="flex items-center gap-3 text-lg font-medium text-black">
<div className="bg-emerald-300 rounded-md p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
<iconify-icon className="text-black text-lg" icon="solar:check-read-linear"></iconify-icon>
</div> 
                            10 text messages
                        </li>
</ul>
<button className="w-full bg-black text-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-4 text-lg font-semibold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                        Plan Details
                    </button>
</div>

<div className="bg-amber-100 rounded-2xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col col-span-1 md:col-span-2 lg:col-span-1 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
<div className="flex items-center gap-4 mb-6">
<img alt="Avatar" className="w-16 h-16 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover bg-white" src="https://i.pravatar.cc/150?img=32"/>
<div>
<h4 className="text-xl font-semibold tracking-tight text-black">Sarah</h4>
<span className="text-base text-black font-semibold rounded-md bg-white px-2 py-1 border-2 border-black inline-block mt-1">Account Manager in Juno</span>
</div>
</div>
<p className="text-lg font-medium text-black leading-relaxed mb-8 flex-1">
                        "Juno is a revelation for us. We used to spend a lot of time and money on activities that weren't being used by our staff. It's saved us money."
                    </p>
<div className="flex flex-col gap-4 pt-6 border-t-4 border-black">
<div className="flex justify-between items-center text-base">
<span className="text-black font-bold uppercase rounded-md tracking-wider bg-white px-2 py-1 border-2 border-black">Loves to</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl bg-white px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] gap-2">
<span className="font-semibold text-black">Have fun with</span>
<span className="text-black font-medium rounded-md bg-rose-200 px-2 py-1 border-2 border-black">Royal Academy Lates</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl bg-white px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] gap-2">
<span className="font-semibold text-black">Up-skill with</span>
<span className="text-black font-medium rounded-md bg-blue-200 px-2 py-1 border-2 border-black">Design Course</span>
</div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
