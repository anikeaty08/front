import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const expandBtn = document.getElementById('expandBtn');
        const detailsContainer = document.getElementById('detailsContainer');
        const chevron = expandBtn.querySelector('i');
        
        expandBtn.addEventListener('click', function() {
            detailsContainer.classList.toggle('details-expanded');
            chevron.classList.toggle('rotate-180');
            
            if (detailsContainer.classList.contains('details-expanded')) {
                expandBtn.querySelector('span').textContent = 'Hide Details';
            } else {
                expandBtn.querySelector('span').textContent = 'Show Details';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md backdrop-blur-lg bg-white/80 rounded-lg shadow-lg border border-white/40 p-4">

<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">

<div className="w-6 h-6 text-blue-500">
<i className="fas fa-cloud-sun text-xl"></i>
</div>

<span className="text-base font-medium">Partly Cloudy</span>
</div>

<div className="text-sm text-right">
                Friday, November 17, 2023
            </div>
</div>

<div className="flex justify-between items-center mb-6 p-2 bg-blue-50/50 rounded-lg">
<div className="flex items-center gap-3">
<i className="fas fa-temperature-half text-2xl text-orange-500"></i>
<div>
<div className="text-3xl font-bold">72°F</div>
<div className="text-xs text-gray-500">Feels like 75°F</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-1">
<i className="fas fa-wind text-blue-400"></i>
<span className="text-sm">8 mph</span>
</div>
<div className="flex items-center gap-1">
<i className="fas fa-droplet text-blue-400"></i>
<span className="text-sm">45%</span>
</div>
</div>
</div>

<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-black/50 flex-1 text-center">SUN</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">MON</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">TUE</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">WED</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">THU</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">FRI</span>
<span className="text-xs font-medium text-black/50 flex-1 text-center">SAT</span>
</div>

<div className="flex justify-between mb-4">

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black/90">15</span>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black">16</span>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<div className="w-11 h-11 bg-blue-500 rounded-lg flex items-center justify-center">
<span className="text-base font-medium text-white">17</span>
</div>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black">18</span>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black">19</span>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black">20</span>
</div>

<div className="flex-1 h-10 flex items-center justify-center">
<span className="text-base font-medium text-black">21</span>
</div>
</div>

<button className="w-full flex items-center justify-center py-2 text-blue-500 hover:text-blue-700 transition-colors" id="expandBtn">
<span>Show Details</span>
<i className="fas fa-chevron-down ml-2 transition-transform duration-300"></i>
</button>

<div className="details-container" id="detailsContainer">
<div className="border-t border-gray-200 pt-4 mt-2">

<h3 className="text-sm font-semibold mb-3">Hourly Forecast</h3>
<div className="flex overflow-x-auto pb-2 gap-4">
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">Now</span>
<i className="fas fa-cloud-sun text-lg my-2 text-blue-500"></i>
<span className="text-sm font-medium">72°F</span>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">2 PM</span>
<i className="fas fa-sun text-lg my-2 text-yellow-500"></i>
<span className="text-sm font-medium">74°F</span>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">3 PM</span>
<i className="fas fa-sun text-lg my-2 text-yellow-500"></i>
<span className="text-sm font-medium">75°F</span>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">4 PM</span>
<i className="fas fa-cloud-sun text-lg my-2 text-blue-500"></i>
<span className="text-sm font-medium">73°F</span>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">5 PM</span>
<i className="fas fa-cloud text-lg my-2 text-gray-500"></i>
<span className="text-sm font-medium">70°F</span>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-xs">6 PM</span>
<i className="fas fa-cloud text-lg my-2 text-gray-500"></i>
<span className="text-sm font-medium">68°F</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-6">
<div className="bg-white/40 p-3 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Precipitation</div>
<div className="flex items-center">
<i className="fas fa-cloud-rain text-blue-400 mr-2"></i>
<span className="text-lg font-medium">20%</span>
</div>
</div>
<div className="bg-white/40 p-3 rounded-lg">
<div className="text-xs text-gray-500 mb-1">UV Index</div>
<div className="flex items-center">
<i className="fas fa-sun text-yellow-500 mr-2"></i>
<span className="text-lg font-medium">5 (Moderate)</span>
</div>
</div>
<div className="bg-white/40 p-3 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Sunrise</div>
<div className="flex items-center">
<i className="fas fa-sunrise text-orange-400 mr-2"></i>
<span className="text-lg font-medium">6:42 AM</span>
</div>
</div>
<div className="bg-white/40 p-3 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Sunset</div>
<div className="flex items-center">
<i className="fas fa-sunset text-red-400 mr-2"></i>
<span className="text-lg font-medium">5:38 PM</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
