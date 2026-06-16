import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="w-full w-full mx-auto px-6 py-8 flex justify-center md:justify-start max-w-6xl">
<div className="tracking-tighter font-medium text-lg text-gray-900 uppercase">
            RENTALUSA
        </div>
</header>


<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-center text-gray-900 mb-4 max-w-2xl leading-tight">
            Find Cheap Apartments Near You in the USA 🇺🇸
        </h1>
       
            Instantly check available rental homes in your area <br className="hidden md:block"/>(No agent required)
        

<div className="w-full max-w-xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 sm:p-8 mb-10 relative z-10 transition-transform hover:-translate-y-0.5 duration-300">
<label className="block text-sm font-medium text-gray-800 mb-3 text-center sm:text-left" htmlFor="zipcode">
                Enter your ZIP Code to see available apartments
            </label>
<form action="#" className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-normal" id="zipcode" placeholder="Enter ZIP Code (e.g. 10001)" required="" type="text"/>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap" type="submit">
                    Search Now
                    <iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<a href="https://www.facebook.com/tanver.ahmead.santo.1/" target="_blank">
</a>
</form>
</div>

<div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 mb-3 border border-gray-100 group-hover:bg-white group-hover:shadow-sm group-hover:border-gray-200 transition-all">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-800 tracking-tight">No broker fees</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 mb-3 border border-gray-100 group-hover:bg-white group-hover:shadow-sm group-hover:border-gray-200 transition-all">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-800 tracking-tight">Verified listings only</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 mb-3 border border-gray-100 group-hover:bg-white group-hover:shadow-sm group-hover:border-gray-200 transition-all">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-800 tracking-tight">Instant access</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 mb-3 border border-gray-100 group-hover:bg-white group-hover:shadow-sm group-hover:border-gray-200 transition-all">
<iconify-icon className="text-2xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-800 tracking-tight">100% free search</span>
</div>
</div>

<a href="https://www.facebook.com/tanver.ahmead.santo.1/" target="_blank">
<button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 font-medium transition-all shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.12)] hover:-translate-y-0.5 text-base w-full sm:w-auto tracking-tight">
          Check Available Apartments Now
        </button>
</a>


<footer className="w-full mt-auto border-t border-gray-200/60 bg-[#fafafa]">
<div className="max-w-6xl mx-auto px-6 py-8 text-center">
<p className="text-xs text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
                This site is not affiliated with Zillow or any official property provider. Results may vary.
            </p>
</div>
</footer>

    </>
  );
}
