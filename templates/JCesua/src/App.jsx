import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Flight type selection
            const roundtrip = document.getElementById('roundtrip');
            const oneway = document.getElementById('oneway');
            
            roundtrip.addEventListener('click', function() {
                roundtrip.classList.add('selected');
                oneway.classList.remove('selected');
            });
            
            oneway.addEventListener('click', function() {
                oneway.classList.add('selected');
                roundtrip.classList.remove('selected');
            });
            
            // Search button functionality
            const searchBtn = document.getElementById('searchBtn');
            const filtersModal = document.getElementById('filtersModal');
            
            searchBtn.addEventListener('click', function() {
                filtersModal.classList.toggle('hidden');
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === filtersModal) {
                    filtersModal.classList.add('hidden');
                }
                if (event.target === datePickerModal) {
                    datePickerModal.classList.add('hidden');
                }
            });
            
            // Reset filters button
            const resetFilters = document.getElementById('resetFilters');
            resetFilters.addEventListener('click', function() {
                // Reset all filters logic would go here
                alert('Filters have been reset');
            });
            
            // Date picker functionality
            const dateFields = document.querySelectorAll('.bg-opacity-10.bg-white');
            const datePickerModal = document.getElementById('datePickerModal');
            
            dateFields.forEach(field => {
                if (field.querySelector('svg path').getAttribute('d').includes('calendar')) {
                    field.addEventListener('click', function() {
                        datePickerModal.classList.toggle('hidden');
                    });
                }
            });
            
            // Interactive slider
            const sliderThumb = document.querySelector('.slider-thumb');
            const sliderProgress = document.querySelector('.slider-progress');
            const sliderTrack = document.querySelector('.slider-track');
            
            if (sliderThumb && sliderTrack) {
                let isDragging = false;
                
                sliderThumb.addEventListener('mousedown', function(e) {
                    isDragging = true;
                });
                
                document.addEventListener('mousemove', function(e) {
                    if (isDragging) {
                        const trackRect = sliderTrack.getBoundingClientRect();
                        let newPosition = (e.clientX - trackRect.left) / trackRect.width;
                        newPosition = Math.max(0, Math.min(1, newPosition));
                        
                        const percentage = newPosition * 100;
                        sliderThumb.style.left = `${percentage}%`;
                        sliderProgress.style.width = `${percentage}%`;
                    }
                });
                
                document.addEventListener('mouseup', function() {
                    isDragging = false;
                });
            }
            
            // Radio buttons in filters
            const radioCircles = document.querySelectorAll('.radio-circle');
            
            radioCircles.forEach(circle => {
                circle.addEventListener('click', function() {
                    // If in the same group, deselect others
                    const parent = this.closest('.space-y-3');
                    if (parent) {
                        parent.querySelectorAll('.radio-circle').forEach(c => {
                            c.classList.remove('selected');
                        });
                    }
                    this.classList.toggle('selected');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-xl w-full bg-gray-900 rounded-lg p-5 glass-effect">

<div className="mb-5">
<div className="flex space-x-5">
<div className="flex items-center space-x-2">
<div className="radio-circle selected" id="roundtrip"></div>
<span className="text-white">Roundtrip</span>
</div>
<div className="flex items-center space-x-2">
<div className="radio-circle" id="oneway"></div>
<span className="text-white">One way</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">From</div>
<div className="text-white text-base">MTL</div>
</div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">To</div>
<div className="text-white text-base">Tokyo</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Depart</div>
<div className="text-white text-base">Dec 15, 2023</div>
</div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Return</div>
<div className="text-white text-base">Jan 15, 2024</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Class</div>
<div className="text-white text-base">Economy</div>
</div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Travellers</div>
<div className="text-white text-base">1 Traveller</div>
</div>
</div>
</div>

<div className="flex justify-center">
<button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300" id="searchBtn">
                Search Flights
            </button>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 hidden" id="filtersModal">
<div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto glass-effect">
<div className="p-4 border-b border-white border-opacity-10 flex justify-between items-center">
<h2 className="text-xl font-medium">Filters</h2>
<button className="text-white" id="resetFilters">Reset</button>
</div>
<div className="p-4 border-b border-white border-opacity-10">
<h3 className="text-lg font-medium mb-3">Sort by</h3>
<div className="flex justify-between items-center">
<span>Price (lowest first)</span>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<div className="p-4 border-b border-white border-opacity-10">
<h3 className="text-lg font-medium mb-3">Stops</h3>
<div className="space-y-3">
<div className="flex items-center">
<div className="radio-circle selected mr-3"></div>
<span className="text-gray-400">Any number of stops</span>
</div>
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">Nonstop only</span>
</div>
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">1 stop or fewer</span>
</div>
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">2 stops or fewer</span>
</div>
</div>
</div>
<div className="p-4 border-b border-white border-opacity-10">
<h3 className="text-lg font-medium mb-3">Price</h3>
<div className="mb-3 flex justify-between">
<span>Up to CA$6000</span>
<span>Clear</span>
</div>
<div className="relative h-6 mb-4">
<div className="slider-track absolute w-full top-1/2 transform -translate-y-1/2"></div>
<div className="slider-progress absolute left-0 top-1/2 transform -translate-y-1/2" style={{width: '40%'}}></div>
<div className="slider-thumb" style={{left: '40%'}}></div>
</div>
<div className="bg-blue-500 text-white py-1 px-3 rounded-full inline-block">
                    CA$ 6000
                </div>
</div>
<div className="p-4 border-b border-white border-opacity-10">
<h3 className="text-lg font-medium mb-3">Travel and baggage</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">Seat choice</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">No cancel fee</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">No change fee</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="radio-circle mr-3"></div>
<span className="text-gray-400">Carry-on bag</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span>1</span>
<div className="w-6 h-6 rounded-full bg-opacity-10 bg-white border border-white border-opacity-10 flex items-center justify-center">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium mb-3">Airlines</h3>
<div className="flex items-center justify-between">
<span className="text-gray-400">Select all airlines</span>
<div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
<div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 hidden" id="datePickerModal">
<div className="bg-gray-900 rounded-lg max-w-md w-full glass-effect p-4">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<div className="w-6 h-6">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16 2V5" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M3.5 9.09H20.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M15.6947 13.7H15.7037" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15.6947 16.7H15.7037" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M11.9955 13.7H12.0045" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M11.9955 16.7H12.0045" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M8.29431 13.7H8.30329" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M8.29431 16.7H8.30329" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-white font-medium">November 2023</span>
</div>
<span className="text-sm text-white">Friday, November 17, 2023</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-gray-400 text-xs">SUN</div>
<div className="text-gray-400 text-xs">MON</div>
<div className="text-gray-400 text-xs">TUE</div>
<div className="text-gray-400 text-xs">WED</div>
<div className="text-gray-400 text-xs">THU</div>
<div className="text-gray-400 text-xs">FRI</div>
<div className="text-gray-400 text-xs">SAT</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-gray-500 text-sm py-2">26</div>
<div className="text-gray-500 text-sm py-2">27</div>
<div className="text-gray-500 text-sm py-2">28</div>
<div className="text-gray-500 text-sm py-2">29</div>
<div className="text-gray-500 text-sm py-2">30</div>
<div className="text-gray-500 text-sm py-2">31</div>
<div className="text-white text-sm py-2">1</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-white text-sm py-2">2</div>
<div className="text-white text-sm py-2">3</div>
<div className="text-white text-sm py-2">4</div>
<div className="text-white text-sm py-2">5</div>
<div className="text-white text-sm py-2">6</div>
<div className="text-white text-sm py-2">7</div>
<div className="text-white text-sm py-2">8</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-white text-sm py-2">9</div>
<div className="text-white text-sm py-2">10</div>
<div className="text-white text-sm py-2">11</div>
<div className="text-white text-sm py-2">12</div>
<div className="text-white text-sm py-2">13</div>
<div className="text-white text-sm py-2">14</div>
<div className="text-white text-sm py-2">15</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center">
<div className="text-white text-sm py-2">16</div>
<div className="relative text-sm py-2">
<div className="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
<span className="relative z-10 text-white">17</span>
</div>
<div className="text-white text-sm py-2">18</div>
<div className="text-white text-sm py-2">19</div>
<div className="text-white text-sm py-2">20</div>
<div className="text-white text-sm py-2">21</div>
<div className="text-white text-sm py-2">22</div>
</div>
</div>
</div>


    </>
  );
}
