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
      

<header className="w-full border-b border-stone-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-stone-900 text-white p-1.5 rounded-lg">
<i className="w-5 h-5 fill-current" data-lucide="rocket"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-stone-900">rocketjobs.pl</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-lg text-stone-500 font-medium">
<a className="hover:text-stone-900 transition-colors" href="#">Job offers</a>
<a className="hover:text-stone-900 transition-colors" href="#">Salary calculator</a>
<a className="hover:text-stone-900 transition-colors" href="#">Employer profiles</a>
<a className="hover:text-stone-900 transition-colors" href="#">Blog</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button className="px-5 py-2.5 text-base font-medium text-stone-600 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors">
                    Post a job
                </button>
<button className="px-5 py-2.5 text-base font-medium text-stone-800 bg-[#F2F0EB] rounded-full hover:bg-[#EBE8E0] transition-colors">
                    Log in
                </button>
<div className="w-px h-6 bg-stone-200 mx-1"></div>
<button className="text-stone-400 hover:text-stone-600 transition-colors">
<i className="w-6 h-6" data-lucide="heart"></i>
</button>
<button className="text-stone-400 hover:text-stone-600 transition-colors">
<i className="w-6 h-6" data-lucide="bell"></i>
</button>
<button className="ml-2">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center overflow-hidden border border-stone-200">
<img alt="PL" className="w-full h-full object-cover opacity-80" src="https://flagcdn.com/pl.svg"/>
</div>
</button>
</div>

<button className="lg:hidden text-stone-600">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="max-w-[1440px] mx-auto px-4 md:px-6 py-6 md:py-8 space-y-12">

<section className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#EBE9E4] min-h-[500px] flex flex-col items-center justify-center text-center px-4 pt-16 pb-32 md:pb-16">

<div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#F5F4F0]/50 to-[#E3E0DA] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-10 md:mt-0">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-800 leading-[1.1]">
                    Dream job <br className="md:hidden"/>awaits you!
                </h1>
<p className="text-xl md:text-2xl text-stone-500 font-medium">
<span className="border-b-2 border-stone-400/50 text-stone-700 pb-0.5">29,388</span> current job offers
                </p>

<div className="mt-10 w-full max-w-3xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/50 p-2 flex flex-col md:flex-row items-center gap-2 md:gap-0 relative z-20">

<div className="flex-1 flex items-center px-4 h-14 w-full md:w-auto border-b md:border-b-0 md:border-r border-stone-100">
<i className="w-6 h-6 text-stone-400 mr-3" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none text-lg text-stone-700 placeholder:text-stone-400" placeholder="Search: Position, company, keyword" type="text"/>
</div>

<div className="flex-1 flex items-center px-4 h-14 w-full md:w-auto">
<i className="w-6 h-6 text-stone-400 mr-3" data-lucide="map-pin"></i>
<input className="w-full bg-transparent outline-none text-lg text-stone-700 placeholder:text-stone-400" placeholder="Location" type="text"/>
</div>

<button className="w-full md:w-auto bg-stone-800 hover:bg-stone-900 text-[#FDFDFC] rounded-full px-8 h-12 flex items-center justify-center gap-2 font-medium text-lg transition-all shadow-lg shadow-stone-900/10">
<i className="w-5 h-5" data-lucide="search"></i>
                        Search
                    </button>
</div>
</div>

<div className="hidden lg:block absolute bottom-0 right-0 h-[90%] w-auto pointer-events-none z-0">
<img alt="Happy Team" className="h-full w-auto object-cover opacity-90 mask-image-gradient" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)', maskImage: 'linear-gradient(to left, black 60%, transparent 100%)'}}/>
</div>
</section>

<section className="space-y-8">
<div className="flex items-center gap-2 text-stone-800 cursor-pointer group w-fit">
<h2 className="text-xl font-medium tracking-tight">See all categories</h2>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Sales</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            2882
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Marketing</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            1426
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Finance</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            571
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="landmark"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Banking</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            459
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="wrench"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Engineering</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            1024
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="headphones"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Customer Service</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            723
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Health &amp; Beauty</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            1283
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="utensils"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Gastronomy</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            162
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="plane"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Tourism</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            34
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Management</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            409
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between">
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors">
<i className="w-6 h-6" data-lucide="store"></i>
</div>
<div className="w-full">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Retail</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            1153
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-4 h-48 justify-between relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-stone-50 rounded-full z-0"></div>
<div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-stone-700 group-hover:bg-[#EBE9E4] transition-colors z-10 relative">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<div className="w-full z-10 relative">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Construction</h3>
<div className="mt-2 inline-flex px-2.5 py-1 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-500">
                            526
                        </div>
</div>

<div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg border border-stone-100 rounded-full flex items-center justify-center text-stone-800 cursor-pointer hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-20 border-t border-stone-200 py-12 bg-white">
<div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg text-stone-500">
                © 2024 RocketJobs.pl
            </div>
<div className="flex gap-6 text-lg text-stone-500">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
