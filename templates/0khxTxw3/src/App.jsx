import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-[350px] h-[650px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-gray-900 flex flex-col">

<div className="p-4 border-b border-gray-800">
<div className="flex justify-between items-center mb-3">
<h1 className="text-xl font-bold text-white">Hotels</h1>
<div className="flex gap-2">
<button className="p-2 text-gray-400 hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 text-gray-400 hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="bg-gray-800 rounded-lg p-3 flex items-center mb-3">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input className="bg-transparent text-white w-full outline-none text-sm" placeholder="Search hotels, locations..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">All</button>
<button className="px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs whitespace-nowrap">Hotels</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Flights</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Car Rentals</button>
</div>
</div>

<div className="flex-1 p-3 overflow-y-auto">

<div className="mb-5">
<div className="relative rounded-lg overflow-hidden h-40 mb-2 border border-gray-700">
<img alt="Luxury Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
<div className="absolute top-2 right-2 bg-blue-600/90 px-2 py-1 rounded text-xs text-white">
              Featured
            </div>
<div className="absolute bottom-0 left-0 p-3 text-white">
<h3 className="font-bold text-lg">The Grand Plaza</h3>
<div className="flex items-center text-xs">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                New York, USA • 5-star
              </div>
</div>
</div>
</div>

<h2 className="text-white font-medium mb-2">Top Rated</h2>
<div className="grid grid-cols-1 gap-3 mb-5">
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="flex">
<div className="w-24 h-24">
<img alt="Modern Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3 flex-1">
<div className="flex justify-between">
<h3 className="text-white font-medium">CitizenM</h3>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.8</span>
</div>
</div>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Times Square, NY
                </div>
<div className="flex justify-between items-center mt-1">
<div className="text-blue-400 font-bold">$219</div>
<div className="text-xs text-gray-400">per night</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="flex">
<div className="w-24 h-24">
<img alt="Boutique Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3 flex-1">
<div className="flex justify-between">
<h3 className="text-white font-medium">The Ritz-Carlton</h3>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.9</span>
</div>
</div>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Central Park, NY
                </div>
<div className="flex justify-between items-center mt-1">
<div className="text-blue-400 font-bold">$349</div>
<div className="text-xs text-gray-400">per night</div>
</div>
</div>
</div>
</div>
</div>

<h2 className="text-white font-medium mb-2">Best Deals</h2>
<div className="grid grid-cols-2 gap-3 mb-5">
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-24 relative">
<img alt="Hotel Deal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bg-green-500 px-2 py-1 text-xs text-white">
                -25%
              </div>
</div>
<div className="p-2">
<h3 className="text-white font-medium text-sm">Hotel Edison</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Broadway, NY
              </div>
<div className="flex justify-between items-center">
<div>
<span className="text-gray-500 text-xs line-through">$189</span>
<span className="text-blue-400 font-bold ml-1">$142</span>
</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.5</span>
</div>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-24 relative">
<img alt="Hotel Deal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bg-green-500 px-2 py-1 text-xs text-white">
                -15%
              </div>
</div>
<div className="p-2">
<h3 className="text-white font-medium text-sm">The Standard</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                High Line, NY
              </div>
<div className="flex justify-between items-center">
<div>
<span className="text-gray-500 text-xs line-through">$210</span>
<span className="text-blue-400 font-bold ml-1">$178</span>
</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.6</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-2 border-t border-gray-800 bg-gray-900">
<div className="flex justify-around">
<button className="p-2 text-blue-400 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Explore</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
