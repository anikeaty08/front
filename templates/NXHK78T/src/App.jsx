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



// User menu toggle
function toggleUserMenu() {
  const menu = document.getElementById('userMenu');
  menu.classList.toggle('hidden');
}

// Mobile filters toggle
function toggleFilters() {
  const filters = document.getElementById('searchFilters');
  filters.classList.toggle('hidden');
}

// Toggle favorite
function toggleFavorite(button) {
  button.classList.toggle('heart-liked');
  const icon = button.querySelector('svg');
  if (button.classList.contains('heart-liked')) {
    icon.setAttribute('fill', 'currentColor');
  } else {
    icon.setAttribute('fill', 'none');
  }
}

// Quick book
function quickBook(carId) {
  alert(`Quick booking ${carId}... (This would open a booking modal)`);
}

// View car details
function viewCarDetails(carId) {
  window.location.href = `#/car/${carId}`;
}

// Handle search input
function handleSearchInput(input) {
  if (input.value.length > 2) {
    // Simulate search suggestions
    console.log('Searching for:', input.value);
  }
}

// Clear input
function clearInput(button) {
  const input = button.previousElementSibling;
  input.value = '';
  input.focus();
}

// Handle date change
function handleDateChange() {
  console.log('Date changed, refreshing results...');
  showLoading();
  setTimeout(hideLoading, 1000);
}

// Handle type filter
function handleTypeFilter() {
  console.log('Type filter changed');
  showLoading();
  setTimeout(hideLoading, 800);
}

// Handle sort
function handleSort() {
  console.log('Sort changed');
  showLoading();
  setTimeout(hideLoading, 600);
}

// Toggle map view
function toggleMapView() {
  alert('Map view would be implemented here');
}

// Show/hide loading
function showLoading() {
  document.getElementById('carGrid').classList.add('hidden');
  document.getElementById('loadingState').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingState').classList.add('hidden');
  document.getElementById('carGrid').classList.remove('hidden');
}

// Load more cars
function loadMoreCars() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    alert('More cars loaded! (In a real app, this would load additional car cards)');
  }, 1200);
}

// Remove filter
function removeFilter(button) {
  button.parentElement.remove();
}

// Price filter toggle
function togglePriceFilter() {
  alert('Price filter dropdown would open here');
}

// Feature filter toggle
function toggleFeatureFilter() {
  alert('Feature filter dropdown would open here');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  const userMenu = document.getElementById('userMenu');
  if (!event.target.closest('.relative') && !userMenu.classList.contains('hidden')) {
    userMenu.classList.add('hidden');
  }
});

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
      

<header className="sticky top-0 z-50 shadow-sm border-b bg-black/95 backdrop-blur-sm border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center space-x-2 font-bold text-xl tracking-tight" href="#">
<span>DriveShare</span>
</a>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="transition text-blue-400 hover:text-blue-300 border-b-2 border-blue-400 pb-1" href="#">Browse Cars</a>
<a className="transition text-gray-400 hover:text-gray-100" href="#">List Your Car</a>
<a className="transition text-gray-400 hover:text-gray-100" href="#">How It Works</a>
<a className="transition text-gray-400 hover:text-gray-100" href="#">Support</a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-flex items-center hover:bg-blue-500 transition text-sm font-semibold text-black bg-gradient-to-b from-blue-400 to-blue-600 rounded-md pt-2 pr-4 pb-2 pl-4 shadow" href="#">
<svg className="lucide lucide-plus w-4 h-4 mr-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          List Car
        </a>
<button aria-label="Messages" className="relative transition text-gray-400 hover:text-gray-100">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-semibold bg-red-500 rounded-full text-black animate-pulse">2</span>
</button>
<div className="relative">
<button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-800 transition" onclick="toggleUserMenu()">
<img alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5113900d-1c55-4c45-a282-e60d9aea22d6_320w.jpg"/>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg filter-dropdown" id="userMenu">
<div className="py-1">
<a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800" href="#">Profile</a>
<a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800" href="#">My Bookings</a>
<a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800" href="#">Settings</a>
<hr className="my-1 border-gray-700"/>
<a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800" href="#">Sign Out</a>
</div>
</div>
</div>
<button aria-label="Menu" className="md:hidden transition text-gray-400 hover:text-gray-100" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

<section className="space-y-6">
<div className="flex items-center justify-between">
<h1 className="text-3xl font-semibold tracking-tight">Browse Cars</h1>
<button className="md:hidden flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg text-sm" onclick="toggleFilters()">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span>Filters</span>
</button>
</div>
<div className="space-y-4" id="searchFilters">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-black border border-gray-800 rounded-lg flex items-center px-4 py-3 focus-within:border-blue-500 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-gray-400 mr-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="flex-1 bg-transparent border-0 p-0 focus:ring-0 text-sm placeholder-gray-500" onkeyup="handleSearchInput(this)" placeholder="San Francisco, CA" type="text" value="San Francisco, CA"/>
<button className="ml-2 text-gray-400 hover:text-gray-200" onclick="clearInput(this)">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="bg-black border border-gray-800 rounded-lg flex items-center px-4 py-3 focus-within:border-blue-500 transition">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-400 mr-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="flex-1 bg-transparent border-0 p-0 focus:ring-0 text-sm placeholder-gray-500" onchange="handleDateChange()" type="date" value="2024-01-15"/>
</div>
<div className="bg-black border border-gray-800 rounded-lg flex items-center px-4 py-3 focus-within:border-blue-500 transition">
<svg className="lucide lucide-car w-4 h-4 text-gray-400 mr-3" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 9.6a2 2 0 0 0-1.8-1.1H7.4a2 2 0 0 0-1.8 1.1L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
<select className="flex-1 bg-transparent border-0 p-0 focus:ring-0 text-sm" onchange="handleTypeFilter()">
<option>All Vehicle Types</option>
<option>Convertible</option>
<option>SUV</option>
<option>Luxury</option>
<option>Electric</option>
<option>Sports Car</option>
</select>
</div>
</div>

<div className="flex flex-wrap gap-2">
<button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition" onclick="togglePriceFilter()">
<span>Price Range</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition" onclick="toggleFeatureFilter()">
<span>Features</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex items-center space-x-2 px-3 py-2 bg-green-900/20 text-green-300 rounded-lg text-sm">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Instant Book</span>
<button className="ml-1" onclick="removeFilter(this)">
<svg className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</section>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<p className="text-sm text-gray-400">Showing <span className="font-semibold text-white">12</span> of <span className="font-semibold text-white">128</span> cars</p>
<button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition" onclick="toggleMapView()">
<svg className="lucide lucide-map w-4 h-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<span>Map View</span>
</button>
</div>
<div className="flex items-center space-x-2">
<span className="text-sm text-gray-500">Sort by</span>
<select className="bg-black border border-gray-800 rounded-lg text-sm px-3 py-2 focus:ring-0 focus:border-blue-500 transition" onchange="handleSort()">
<option>Recommended</option>
<option>Price (Low → High)</option>
<option>Price (High → Low)</option>
<option>Rating</option>
<option>Distance</option>
</select>
</div>
</div>

<div className="hidden grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="loadingState">
<div className="bg-black border border-gray-800 rounded-xl overflow-hidden">
<div className="h-48 bg-gray-800 skeleton"></div>
<div className="p-4 space-y-3">
<div className="h-4 bg-gray-800 rounded skeleton"></div>
<div className="h-3 bg-gray-800 rounded w-3/4 skeleton"></div>
<div className="h-4 bg-gray-800 rounded w-1/2 skeleton"></div>
</div>
</div>
</div>

<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="carGrid">

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('bmw-x5')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Instant Book
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 BMW X5 M Sport</h3>
<p className="text-xs text-gray-500 mb-2">2.5 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.9</span>
<span className="ml-1">(127 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$189<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('bmw-x5')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('porsche-911')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
<svg className="lucide lucide-star w-3 h-3 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>All-Star Host
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70 heart-liked" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Manual</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">RWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Porsche 911 Carrera</h3>
<p className="text-xs text-gray-500 mb-2">4.1 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.530 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.8</span>
<span className="ml-1">(89 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$349<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-yellow-400">Few left</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('porsche-911')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('tesla-s')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Electric
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 Tesla Model S Plaid</h3>
<p className="text-xs text-gray-500 mb-2">1.8 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">5.0</span>
<span className="ml-1">(234 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$279<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('tesla-s')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('mercedes-g')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
<svg className="lucide lucide-crown w-3 h-3 mr-1" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25A1.5 1.5 0 0 1 19.203 19.5H4.797a1.5 1.5 0 0 1-1.487-1.25L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z"></path></svg>Luxury
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">4WD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Mercedes G63 AMG</h3>
<p className="text-xs text-gray-500 mb-2">3.2 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.7</span>
<span className="ml-1">(45 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$429<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-red-400">Booked</span>
</div>
<button className="w-full bg-gray-700 text-gray-400 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed" disabled="">
            Not Available
          </button>
</div>
</div>
</article>

</section><section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="carGrid">

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('bmw-x5')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Instant Book
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 BMW X5 M Sport</h3>
<p className="text-xs text-gray-500 mb-2">2.5 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.9</span>
<span className="ml-1">(127 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$189<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('bmw-x5')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('porsche-911')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
<svg className="lucide lucide-star w-3 h-3 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>All-Star Host
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70 heart-liked" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Manual</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">RWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Porsche 911 Carrera</h3>
<p className="text-xs text-gray-500 mb-2">4.1 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.530 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.8</span>
<span className="ml-1">(89 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$349<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-yellow-400">Few left</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('porsche-911')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('tesla-s')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1560009320-c01920eef9f8?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Electric
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 Tesla Model S Plaid</h3>
<p className="text-xs text-gray-500 mb-2">1.8 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">5.0</span>
<span className="ml-1">(234 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$279<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('tesla-s')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('mercedes-g')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
<svg className="lucide lucide-crown w-3 h-3 mr-1" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25A1.5 1.5 0 0 1 19.203 19.5H4.797a1.5 1.5 0 0 1-1.487-1.25L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z"></path></svg>Luxury
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">4WD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Mercedes G63 AMG</h3>
<p className="text-xs text-gray-500 mb-2">3.2 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.7</span>
<span className="ml-1">(45 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$429<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-red-400">Booked</span>
</div>
<button className="w-full bg-gray-700 text-gray-400 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed" disabled="">
            Not Available
          </button>
</div>
</div>
</article>

</section><section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="carGrid">

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('bmw-x5')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1614905218621-99262ff8f8e1?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Instant Book
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 BMW X5 M Sport</h3>
<p className="text-xs text-gray-500 mb-2">2.5 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.9</span>
<span className="ml-1">(127 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$189<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('bmw-x5')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('porsche-911')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=800&amp;q=80" style={{}}/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
<svg className="lucide lucide-star w-3 h-3 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>All-Star Host
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70 heart-liked" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Manual</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">RWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Porsche 911 Carrera</h3>
<p className="text-xs text-gray-500 mb-2">4.1 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.530 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.8</span>
<span className="ml-1">(89 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$349<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-yellow-400">Few left</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('porsche-911')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('tesla-s')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1517994112540-009c47ea476b?w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Electric
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">AWD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2023 Tesla Model S Plaid</h3>
<p className="text-xs text-gray-500 mb-2">1.8 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">5.0</span>
<span className="ml-1">(234 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$279<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-green-400">Available</span>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition" onclick="event.stopPropagation(); quickBook('tesla-s')">
            Quick Book
          </button>
</div>
</div>
</article>

<article className="relative bg-black border border-gray-800 rounded-xl shadow-sm flex flex-col overflow-hidden card-hover cursor-pointer" onclick="viewCarDetails('mercedes-g')">
<div className="relative">
<img alt="" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1528501028382-e587fcf3a03e?w=800&amp;q=80"/>
<span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
<svg className="lucide lucide-crown w-3 h-3 mr-1" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25A1.5 1.5 0 0 1 19.203 19.5H4.797a1.5 1.5 0 0 1-1.487-1.25L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z"></path></svg>Luxury
        </span>
<button aria-label="Save" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full transition hover:bg-black/70" onclick="event.stopPropagation(); toggleFavorite(this)">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-3 left-3 flex space-x-1">
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">Auto</span>
<span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">4WD</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-semibold mb-1 hover:text-blue-400 transition">2022 Mercedes G63 AMG</h3>
<p className="text-xs text-gray-500 mb-2">3.2 miles away</p>
<div className="flex items-center text-xs text-gray-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">4.7</span>
<span className="ml-1">(45 trips)</span>
</div>
<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<div className="text-lg font-bold">$429<span className="text-sm font-medium text-gray-400">/day</span></div>
<span className="text-xs text-red-400">Booked</span>
</div>
<button className="w-full bg-gray-700 text-gray-400 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed" disabled="">
            Not Available
          </button>
</div>
</div>
</article>

<div className="col-span-full flex justify-center pt-8">
<button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition" onclick="loadMoreCars()">
<span>Load More Cars</span>
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>
</section>
</main>

<footer className="bg-black border-t border-gray-800 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-4">
<h3 className="font-bold text-lg">DriveShare</h3>
<p className="text-sm text-gray-400">Experience premium cars from trusted local hosts. Drive extraordinary.</p>
</div>
<div className="space-y-4">
<h4 className="font-semibold">Browse</h4>
<div className="space-y-2 text-sm text-gray-400">
<a className="block hover:text-white transition" href="#">Find Cars</a>
<a className="block hover:text-white transition" href="#">Locations</a>
<a className="block hover:text-white transition" href="#">Car Types</a>
</div>
</div>
<div className="space-y-4">
<h4 className="font-semibold">Host</h4>
<div className="space-y-2 text-sm text-gray-400">
<a className="block hover:text-white transition" href="#">List Your Car</a>
<a className="block hover:text-white transition" href="#">Host Guide</a>
<a className="block hover:text-white transition" href="#">Earnings</a>
</div>
</div>
<div className="space-y-4">
<h4 className="font-semibold">Support</h4>
<div className="space-y-2 text-sm text-gray-400">
<a className="block hover:text-white transition" href="#">Help Center</a>
<a className="block hover:text-white transition" href="#">Safety</a>
<a className="block hover:text-white transition" href="#">Contact</a>
</div>
</div>
</div>
<hr className="my-8 border-gray-800"/>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p>© 2024 DriveShare. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
