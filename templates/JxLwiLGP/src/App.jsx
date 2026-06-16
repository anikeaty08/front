import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#f0f7ff',
              100: '#e0eefe',
              200: '#bae0fd',
              300: '#7dcbfc',
              400: '#39acf7',
              500: '#1a91eb',
              600: '#0c73ca',
              700: '#0e5ca4',
              800: '#144e87',
              900: '#164270',
            },
            secondary: '#7C94B5',
            offwhite: '#f8f8f8'
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-offwhite flex flex-col">

<div className="p-6 flex items-center">
<button className="text-secondary hover:text-blue-800 mr-4">
<i className="bi bi-chevron-left text-xl"></i>
</button>
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">Precipitation</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-three-dots-vertical text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20">
<div className="flex justify-between items-start mb-2">
<div>
<h2 className="text-xl font-medium text-blue-800">San Francisco</h2>
<div className="text-xs text-secondary mt-1">Today, May 15</div>
</div>
<div className="flex items-center">
<i className="bi bi-droplet-fill text-blue-500 mr-1"></i>
<span className="text-blue-800 font-medium">15%</span>
</div>
</div>
<div className="flex items-center justify-between mt-4 mb-2">
<div className="text-xs text-secondary">Chance of precipitation</div>
<div className="text-xs text-blue-800 font-medium">0.03 in expected</div>
</div>
<div className="h-2 bg-blue-100 rounded-full w-full">
<div className="h-2 bg-blue-500 rounded-full" style={{width: '15%'}}></div>
</div>
<div className="flex justify-between text-xs text-secondary mt-1">
<span>0%</span>
<span>25%</span>
<span>50%</span>
<span>75%</span>
<span>100%</span>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Hourly Precipitation</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 p-4">
<div className="flex overflow-x-auto pb-2 gap-4">
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">Now</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[15%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">15%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">1 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[25%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">25%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">2 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[40%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">40%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">3 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[60%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">60%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">4 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[45%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">45%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">5 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[30%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">30%</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">6 PM</div>
<div className="h-24 w-6 bg-blue-100 rounded-full relative flex items-end mb-2">
<div className="absolute bottom-0 w-full h-[20%] bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs font-medium text-blue-800">20%</div>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">7-Day Precipitation</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Today</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '15%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">15%</span>
<span className="text-xs text-secondary">0.03 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Mon, May 16</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '40%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">40%</span>
<span className="text-xs text-secondary">0.12 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Tue, May 17</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '65%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">65%</span>
<span className="text-xs text-secondary">0.35 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Wed, May 18</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '80%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">80%</span>
<span className="text-xs text-secondary">0.58 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Thu, May 19</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '70%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">70%</span>
<span className="text-xs text-secondary">0.45 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Fri, May 20</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '30%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">30%</span>
<span className="text-xs text-secondary">0.08 in</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Sat, May 21</div>
<div className="flex-1 h-6 bg-blue-100 rounded-lg relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg" style={{width: '10%'}}></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs font-medium text-blue-800">10%</span>
<span className="text-xs text-secondary">0.01 in</span>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">Precipitation Map</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 p-4">
<div className="aspect-video bg-blue-50 rounded-lg relative overflow-hidden mb-3">

<div className="absolute inset-0 opacity-40">
<div className="absolute top-[20%] left-[30%] w-[40%] h-[30%] bg-blue-300 rounded-full blur-xl"></div>
<div className="absolute top-[30%] left-[20%] w-[50%] h-[40%] bg-blue-400 rounded-full blur-xl"></div>
<div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500 rounded-full blur-xl"></div>
<div className="absolute top-[25%] left-[50%] w-[35%] h-[35%] bg-blue-600 rounded-full blur-xl"></div>
</div>

<div className="absolute top-[40%] left-[45%]">
<div className="h-3 w-3 bg-white ring-2 ring-blue-600 rounded-full"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex-1">
<div className="h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700 rounded-full"></div>
<div className="flex justify-between text-xs mt-1">
<span className="text-secondary">Light</span>
<span className="text-secondary">Moderate</span>
<span className="text-secondary">Heavy</span>
</div>
</div>
<button className="ml-4 text-blue-600 text-sm font-medium">Full Map</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
