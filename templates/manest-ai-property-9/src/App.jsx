import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
function toggleView() {
const grid = document.getElementById('grid-view');
const btn = document.getElementById('view-toggle-btn');
const zoom = document.getElementById('map-zoom-controls');
const legends = document.getElementById('map-legends');
const pills = document.getElementById('map-filter-pills');
if (grid.classList.contains('hidden')) {
grid.classList.remove('hidden');
btn.innerHTML = '<iconify-icon icon="solar:map-linear" width="18" stroke-width="1.5"></iconify-icon> Map View';
if (zoom) zoom.style.display = 'none';
if (legends) legends.style.display = 'none';
if (pills) pills.style.display = 'none';
} else {
grid.classList.add('hidden');
btn.innerHTML = '<iconify-icon icon="solar:widget-5-linear" width="18" stroke-width="1.5"></iconify-icon> Grid View';
if (zoom) zoom.style.display = '';
if (legends) legends.style.display = '';
if (pills) pills.style.display = 'flex';
}
}
function showAllInGrid() {
const grid = document.getElementById('grid-view');
const btn = document.getElementById('view-toggle-btn');
const zoom = document.getElementById('map-zoom-controls');
const legends = document.getElementById('map-legends');
const pills = document.getElementById('map-filter-pills');
if (grid) grid.classList.remove('hidden');
if (btn) btn.innerHTML = '<iconify-icon icon="solar:map-linear" width="18" stroke-width="1.5"></iconify-icon> Map View';
if (zoom) zoom.style.display = 'none';
if (legends) legends.style.display = 'none';
if (pills) pills.style.display = 'none';
}
function startSearch() {
const input = document.getElementById('landing-input').value || "Properties in Bangalore";
document.getElementById('injected-user-query').innerText = input;
document.getElementById('landing-page').classList.add('opacity-0', 'pointer-events-none');
setTimeout(() => {
document.getElementById('landing-page').classList.add('hidden');
const main = document.getElementById('main-interface');
main.classList.remove('hidden');
void main.offsetWidth;
main.classList.remove('opacity-0');
if (window.map) {
window.map.invalidateSize();
}
}, 700);
}
function resetToLanding() {
const main = document.getElementById('main-interface');
main.classList.add('opacity-0');
setTimeout(() => {
main.classList.add('hidden');
const landing = document.getElementById('landing-page');
landing.classList.remove('hidden');
void landing.offsetWidth;
landing.classList.remove('opacity-0', 'pointer-events-none');
document.getElementById('landing-input').value = '';
document.getElementById('landing-input').focus();
}, 500);
}
function toggleFilters() {
const section = document.getElementById('filter-section');
const chevron = document.getElementById('collapse-chevron');
section.classList.toggle('collapsed');
chevron.classList.toggle('rotated');
}
function openPDP() {
const overlay = document.getElementById('pdp-overlay');
overlay.classList.remove('hide-overlay');
overlay.classList.add('show-overlay');
document.body.style.overflow = 'hidden';
if (window.pdpMap) {
setTimeout(() => { window.pdpMap.invalidateSize(); }, 300);
}
}
function closePDP() {
const overlay = document.getElementById('pdp-overlay');
overlay.classList.remove('show-overlay');
overlay.classList.add('hide-overlay');
document.body.style.overflow = '';
}
function startNewChat() {
const chatContainer = document.getElementById('chat-container');
chatContainer.innerHTML = `
<div class="px-5 py-4 mt-2">
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800 shadow-sm">
<iconify-icon icon="solar:cpu-linear" width="16" class="text-white" stroke-width="1.5"></iconify-icon>
</div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-1">
<span class="text-sm font-medium text-neutral-900">Manest AI</span>
</div>
<div class="bg-white rounded-2xl rounded-tl-sm border border-neutral-200 shadow-sm p-4 text-sm leading-relaxed text-neutral-700">
<p>Hi! 👋 Let's start a new search. What kind of property are you looking for today?</p>
</div>
</div>
</div>
</div>
<div id="chat-spacer" class="h-4"></div>
`;
}
function populateChatInput(text) {
const input = document.getElementById('chat-input');
input.value = text;
input.focus();
}
function handleSendMsg() {
const input = document.getElementById('chat-input');
const text = input.value.trim();
if(!text) return;
const chatContainer = document.getElementById('chat-container');
const spacer = document.getElementById('chat-spacer');
const scrollArea = document.getElementById('chat-scroll');
const userHTML = `
<div class="px-5 py-3 flex justify-end">
<div class="bg-orange-50 text-orange-950 border border-orange-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
<p class="text-sm leading-relaxed">${text}</p>
</div>
</div>
`;
spacer.insertAdjacentHTML('beforebegin', userHTML);
input.value = '';
scrollArea.scrollTop = scrollArea.scrollHeight;
setTimeout(() => {
const aiHTML = `
<div class="px-5 py-3">
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800 shadow-sm">
<iconify-icon icon="solar:cpu-linear" width="16" class="text-white" stroke-width="1.5"></iconify-icon>
</div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-1">
<span class="text-sm font-medium text-neutral-900">Manest AI</span>
</div>
<div class="bg-white rounded-2xl rounded-tl-sm border border-neutral-200 shadow-sm p-4 text-sm leading-relaxed text-neutral-700">
<p>Got it! I've taken note of your interest in "${text}". Updating your preferences and checking availability...</p>
</div>
</div>
</div>
</div>
`;
spacer.insertAdjacentHTML('beforebegin', aiHTML);
scrollArea.scrollTop = scrollArea.scrollHeight;
}, 800);
}
document.addEventListener("DOMContentLoaded", () => {
// Main Map Initialization
window.map = L.map('map', { zoomControl: false }).setView([13.2450, 77.7000], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
maxZoom: 19
}).addTo(window.map);
// Dynamic Property Markers with Popups
const mapProperties = [
{ lat: 13.2450, lng: 77.7000, price: '₹1.24 Cr', name: 'Birla Trimaya Phase 2', details: 'Devanahalli · 3 Bed · 1,650 sq ft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80' },
{ lat: 13.2350, lng: 77.7100, price: '₹1.85 Cr', name: 'Godrej Reserve', details: 'Devanahalli · 3 Bed · 1,850 sq ft', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
{ lat: 13.2550, lng: 77.6900, price: '₹2.10 Cr', name: 'Embassy Springs', details: 'Devanahalli · 3 Bed · 2,100 sq ft', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80' },
{ lat: 13.2150, lng: 77.6800, price: '₹1.50 Cr', name: 'Salarpuria Sattva', details: 'Devanahalli · 3 Bed · 1,550 sq ft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80' }
];
mapProperties.forEach(prop => {
const iconHtml = `<div class="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">${prop.price}</div>`;
const icon = L.divIcon({ className: 'map-marker-property', html: iconHtml, iconSize: [64, 28] });
const marker = L.marker([prop.lat, prop.lng], { icon }).addTo(window.map);
const popupContent = `
<div class="cursor-pointer group flex flex-col bg-white w-full h-full" onclick="openPDP()">
<div class="relative h-32 w-full">
<img src="${prop.img}" class="w-full h-full object-cover">
<div class="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-neutral-900 flex items-center gap-1 shadow-sm">
<span class="text-teal-600">★</span> Match
</div>
</div>
<div class="p-3 bg-white">
<div class="flex justify-between items-start mb-0.5">
<h4 class="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">${prop.name}</h4>
</div>
<p class="text-[11px] text-neutral-500 mb-2 truncate">${prop.details}</p>
<div class="flex items-center justify-between">
<span class="text-sm font-medium tracking-tight">${prop.price}</span>
<span class="text-[11px] font-medium text-teal-600 group-hover:text-teal-700 flex items-center gap-0.5 transition-colors">
View details <iconify-icon icon="solar:alt-arrow-right-linear" stroke-width="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
`;
marker.bindPopup(popupContent, { closeButton: false, offset: [0, -10] });
marker.on('popupopen', (e) => {
const el = e.target.getElement().querySelector('.marker-pill');
if(el) {
el.classList.remove('bg-white', 'text-neutral-900', 'border-neutral-300', 'hover:border-neutral-400');
el.classList.add('bg-neutral-900', 'text-white', 'border-neutral-900', 'scale-105');
}
});
marker.on('popupclose', (e) => {
const el = e.target.getElement().querySelector('.marker-pill');
if(el) {
el.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900', 'scale-105');
el.classList.add('bg-white', 'text-neutral-900', 'border-neutral-300', 'hover:border-neutral-400');
}
});
});
// Custom Amenity Pill Icons
const schoolIcon = L.divIcon({ className: 'map-marker-poi', html: '<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer"><iconify-icon icon="solar:diploma-linear" width="16" class="text-blue-900"></iconify-icon></div>', iconSize: [32, 32] });
const hospitalIcon = L.divIcon({ className: 'map-marker-poi', html: '<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer"><iconify-icon icon="solar:hospital-linear" width="16" class="text-red-500"></iconify-icon></div>', iconSize: [32, 32] });
const workIcon = L.divIcon({ className: 'map-marker-poi', html: '<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer"><iconify-icon icon="solar:case-linear" width="16" class="text-amber-500"></iconify-icon></div>', iconSize: [32, 32] });
L.marker([13.2400, 77.7050], { icon: schoolIcon }).addTo(window.map);
L.marker([13.2500, 77.6950], { icon: hospitalIcon }).addTo(window.map);
L.marker([13.2300, 77.6900], { icon: workIcon }).addTo(window.map);
// PDP Map Initialization
window.pdpMap = L.map('pdp-map', {
zoomControl: false,
dragging: false,
scrollWheelZoom: false
}).setView([13.2450, 77.7000], 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
maxZoom: 19
}).addTo(window.pdpMap);
const pdpActiveIcon = L.divIcon({ className: 'map-marker-property', html: '<div class="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">₹1.24 Cr</div>', iconSize: [64, 28] });
L.marker([13.2450, 77.7000], { icon: pdpActiveIcon }).addTo(window.pdpMap);
L.marker([13.2400, 77.7050], { icon: schoolIcon }).addTo(window.pdpMap);
L.marker([13.2500, 77.6950], { icon: hospitalIcon }).addTo(window.pdpMap);
});



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
      

<div className="fixed flex flex-col transition-all duration-700 ease-in-out bg-center z-[2000] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44019e07-161d-4f01-ae17-10dceb884fb0_3840w.png)] bg-cover top-0 right-0 bottom-0 left-0 items-center justify-center" id="landing-page">
<div className="flex flex-col -mt-20 w-full max-w-2xl pr-6 pl-6 gap-x-8 gap-y-x-8 items-center">
<div className="flex gap-3 mb-8 gap-x-3 gap-y-3 items-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-900 shadow-lg">
<iconify-icon className="text-white" icon="solar:home-smile-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h1 className="uppercase leading-none text-3xl font-medium text-neutral-900 tracking-tighter">
            MANEST
          </h1>
</div>
<h2 className="sm:text-3xl text-2xl font-bold text-red-950 tracking-tight text-center mb-8">
          Hey, what are you looking for?
        </h2>
<div className="w-full relative shadow-sm hover:shadow-md transition-shadow rounded-full">
<input className="sm:py-5 focus:outline-none focus:border-neutral-400 focus:bg-white placeholder:text-neutral-400 transition-colors text-base bg-neutral-50 w-full border-neutral-200 border rounded-full pt-4 pr-16 pb-4 pl-6" id="landing-input" placeholder="e.g. I'm looking for some properties in Bangalore..." type="text"/>
<button className="-translate-y-1/2 sm:w-12 sm:h-12 flex hover:bg-orange-700 transition-colors text-white bg-orange-600 w-10 h-10 rounded-full absolute top-1/2 right-3 items-center justify-center" onclick="startSearch()">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-wrap gap-2 sm:gap-3 mt-2 gap-x-2 gap-y-2 justify-center">
<button className="text-[11px] sm:text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-colors flex items-center gap-1.5" onclick="document.getElementById('landing-input').value='Properties near Whitefield, Bangalore'; startSearch()">
<iconify-icon className="text-neutral-400" icon="solar:buildings-linear" width="14"></iconify-icon>
            Whitefield, Bangalore
          </button>
<button className="text-[11px] sm:text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-colors flex items-center gap-1.5" onclick="document.getElementById('landing-input').value='3 BHK ready to move under 2 Cr'; startSearch()">
<iconify-icon className="text-neutral-400" icon="solar:key-linear" width="14"></iconify-icon>
            3 BHK ready to move
          </button>
<button className="text-[11px] sm:text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-colors flex items-center gap-1.5" onclick="document.getElementById('landing-input').value='Luxury villas near Airport'; startSearch()">
<iconify-icon className="text-neutral-400" icon="solar:star-linear" width="14"></iconify-icon>
            Luxury near Airport
          </button>
</div>
</div>
</div>

<main className="hidden opacity-0 flex flex-col lg:flex-row transition-opacity duration-700 h-screen w-full relative" id="main-interface">

<section className="h-[55vh] lg:h-full lg:w-[40%] flex flex-col z-20 bg-white flex-shrink-0 border-b lg:border-b-0 lg:border-r border-neutral-200">
<div className="flex-shrink-0 bg-white z-30 border-neutral-200 border-b p-3 px-5">
<div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800 shadow-sm">
<iconify-icon className="text-white" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h1 className="uppercase leading-none text-lg font-medium text-neutral-900 tracking-tighter mb-0.5">
                  MANEST
                </h1>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-green-600">
                    Online
                  </span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors tooltip" onclick="startNewChat()" title="Start New Chat">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto bg-neutral-50/50 scroll-smooth" id="chat-scroll">
<div className="flex flex-col max-w-4xl mx-auto w-full" id="chat-container">
<div className="px-5 py-5 pb-2 flex justify-end">
<div className="bg-orange-50 text-orange-950 border border-orange-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
<p className="text-sm leading-relaxed" id="injected-user-query">
                  I'm looking for some properties in Bangalore
                </p>
</div>
</div>
<div className="px-5 py-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800 shadow-sm">
<iconify-icon className="text-white" icon="solar:cpu-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-neutral-900">
                      Manest AI
                    </span>
</div>
<div className="bg-white rounded-2xl rounded-tl-sm border border-neutral-200 shadow-sm p-4 text-sm leading-relaxed text-neutral-700">
<p>
                      Hi! 👋 I've found
                      <strong className="text-neutral-900">12 properties</strong>
                      matching your criteria in North Bangalore (Devanahalli
                      area). Based on our match scores, here are the top
                      recommendations:
                    </p>
</div>
</div>
</div>
</div>
<div className="pt-1 px-5 pb-4">
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full flex-shrink-0 opacity-0 pointer-events-none"></div>
<div className="flex-1 w-full overflow-hidden">
<div className="space-y-3 w-full max-w-2xl">
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 sm:gap-4 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-1 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm sm:text-base font-medium tracking-tight text-neutral-900 truncate">
                              Birla Trimaya Phase 2
                            </h4>
<span className="text-xs font-medium px-2 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2 border border-neutral-200">
                              95% Match
                            </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5 truncate">
                            Devanahalli · 3 Bed · 1,650 sq ft
                          </p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm sm:text-base font-medium tracking-tight">
                            ₹1.24 Cr
                          </span>
<span className="text-xs font-medium text-teal-600 group-hover:text-teal-700 flex items-center gap-1 transition-colors">
                            View details
                            <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 sm:gap-4 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-1 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm sm:text-base font-medium tracking-tight text-neutral-900 truncate">
                              Godrej Reserve
                            </h4>
<span className="text-xs font-medium px-2 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2 border border-neutral-200">
                              88% Match
                            </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5 truncate">
                            Devanahalli · 3 Bed · 1,850 sq ft
                          </p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm sm:text-base font-medium tracking-tight">
                            ₹1.85 Cr
                          </span>
<span className="text-xs font-medium text-teal-600 group-hover:text-teal-700 flex items-center gap-1 transition-colors">
                            View details
                            <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 sm:gap-4 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-1 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm sm:text-base font-medium tracking-tight text-neutral-900 truncate">
                              Embassy Springs
                            </h4>
<span className="text-xs font-medium px-2 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2 border border-neutral-200">
                              84% Match
                            </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5 truncate">
                            Devanahalli · 3 Bed · 2,100 sq ft
                          </p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm sm:text-base font-medium tracking-tight">
                            ₹2.10 Cr
                          </span>
<span className="text-xs font-medium text-teal-600 group-hover:text-teal-700 flex items-center gap-1 transition-colors">
                            View details
                            <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<button className="w-full py-3 mt-2 flex items-center justify-center gap-2 text-sm font-medium border rounded-xl transition-colors text-teal-700 bg-teal-50 hover:bg-teal-100 border-teal-200 shadow-sm" id="toggle-listings-btn" onclick="showAllInGrid()">
<iconify-icon icon="solar:widget-5-linear" strokeWidth="1.5" width="18"></iconify-icon>
                      View all 12 properties in Grid
                    </button>
</div>
</div>
</div>
</div>
<div className="h-4" id="chat-spacer"></div>
</div>
</div>
<div className="flex-shrink-0 border-t border-neutral-200 bg-white px-5 py-3">
<div className="max-w-4xl mx-auto w-full">
<div className="flex gap-2 overflow-x-auto pb-2 gap-x-2 gap-y-2 items-center no-scrollbar">
<button className="suggestion-chip flex-shrink-0 flex text-xs font-medium text-neutral-600 bg-white border-neutral-200 border rounded-full px-4 py-2 gap-1.5 items-center" onclick="populateChatInput('Ready to move only')">
<iconify-icon className="text-neutral-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Ready to move only
              </button>
<button className="suggestion-chip flex-shrink-0 flex text-xs font-medium text-neutral-600 bg-white border-neutral-200 border rounded-full px-4 py-2 gap-1.5 items-center" onclick="populateChatInput('Compare top 3')">
<iconify-icon className="text-neutral-400" icon="solar:pie-chart-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Compare top 3
              </button>
<button className="suggestion-chip flex-shrink-0 flex text-xs font-medium text-neutral-600 bg-white border-neutral-200 border rounded-full px-4 py-2 gap-1.5 items-center" onclick="populateChatInput('Gated Community')">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Gated Community
              </button>
</div>
<div className="relative flex items-center mt-1">
<input className="w-full border rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-neutral-400 shadow-sm placeholder:text-neutral-400 bg-neutral-50 focus:bg-white transition-colors border-neutral-200" id="chat-input" onkeypress="if(event.key === 'Enter') handleSendMsg()" placeholder="Ask about properties, neighborhoods, pricing..." type="text"/>
<button className="absolute right-2 w-10 h-10 flex items-center justify-center rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors" id="send-btn" onclick="handleSendMsg()">
<iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="h-[45vh] lg:h-full lg:w-[60%] flex flex-col z-20 bg-white flex-shrink-0 relative">
<div className="flex-shrink-0 border-b border-neutral-200 bg-white z-30 shadow-sm">
<button className="flex hover:bg-neutral-50 transition-colors w-full pt-3 pr-5 pb-3 pl-5 items-center justify-between" id="filter-toggle" onclick="toggleFilters()">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:filter-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Filters</span>
<span className="text-white text-xs font-medium px-1.5 py-0.5 rounded-full min-w-[20px] text-center bg-orange-600">
                3
              </span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500 font-medium" id="filter-summary">
                3BHK · ₹1-4 Cr · Apartment
              </span>
<iconify-icon className="collapse-chevron rotated text-neutral-400" icon="solar:alt-arrow-down-linear" id="collapse-chevron" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</button>
<div className="filter-section px-5 pb-4 collapsed bg-white border-t border-neutral-100 mt-2 pt-4" id="filter-section">
<div className="flex items-center gap-2 mb-3">
<div className="flex-1 border rounded-xl px-3 py-2.5 border-neutral-200 bg-white focus-within:border-neutral-900 transition-colors">
<div className="text-xs text-neutral-400 mb-0.5">Location</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="text-sm font-medium text-neutral-900 outline-none w-full bg-transparent placeholder:text-neutral-400" placeholder="Search location..." type="text" value="Whitefield, Bangalore"/>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Home Type
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer hover:border-neutral-300">
<option selected="">Apartment</option>
</select>
</div>
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Bedrooms
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer hover:border-neutral-300">
<option selected="">3 BHK</option>
</select>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Min Price
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer hover:border-neutral-300">
<option selected="">₹1 Cr</option>
</select>
</div>
<span className="text-neutral-300 mt-5">—</span>
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Max Price
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer hover:border-neutral-300">
<option selected="">₹4 Cr</option>
</select>
</div>
</div>
<div className="flex items-center gap-2 flex-wrap mb-4">
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                3 BHK
                <button className="hover:text-neutral-900">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                ₹1 Cr - ₹4 Cr
                <button className="hover:text-neutral-900">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                Apartment
                <button className="hover:text-neutral-900">
<iconify-icon className="" icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
<button className="w-full rounded-xl py-3 text-sm font-medium text-white shadow-sm flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Apply Filters
            </button>
</div>
</div>

<div className="flex-1 overflow-hidden relative bg-neutral-50">

<div className="absolute top-4 left-4 z-[1000] flex gap-2 items-center flex-wrap max-w-full pr-4" id="map-filter-pills">
<button className="flex pointer-events-auto bg-neutral-900 text-white border-neutral-900 border rounded-full px-3.5 py-1.5 shadow-sm items-center gap-1.5 transition-colors">
<span className="text-xs font-medium">12 Properties</span>
</button>
<button className="flex pointer-events-auto bg-white/95 border-neutral-200 border rounded-full px-3.5 py-1.5 shadow-sm backdrop-blur-md items-center gap-1.5 hover:bg-neutral-50 transition-colors text-neutral-700">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Schools</span>
</button>
<button className="flex pointer-events-auto bg-white/95 border-neutral-200 border rounded-full px-3.5 py-1.5 shadow-sm backdrop-blur-md items-center gap-1.5 hover:bg-neutral-50 transition-colors text-neutral-700">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Hospitals</span>
</button>
<button className="flex pointer-events-auto bg-white/95 border-neutral-200 border rounded-full px-3.5 py-1.5 shadow-sm backdrop-blur-md items-center gap-1.5 hover:bg-neutral-50 transition-colors text-neutral-700">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Work</span>
</button>
</div>

<div className="w-full h-full relative leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" id="map" tabindex="0">
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/13/5864/3791@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '0'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.24 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.85 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '-60'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹2.10 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '179'}} tabindex="0">
<div className="marker-pill px-2.5 py-1.5 bg-white text-neutral-900 rounded-full text-xs font-semibold border border-neutral-300 shadow-sm whitespace-nowrap transition-all duration-200 cursor-pointer hover:border-neutral-400">
                    ₹1.50 Cr
                  </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '-30'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-amber-500" icon="solar:case-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                    Leaflet
                  </a>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 right-4 z-[1000] flex flex-col gap-2 pointer-events-auto" id="map-zoom-controls">
<button className="backdrop-blur bg-white/95 p-2.5 rounded-lg shadow-sm border border-neutral-200 hover:bg-white text-neutral-600 transition-colors" onclick="map.zoomIn()">
<iconify-icon className="" height="20" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="backdrop-blur bg-white/95 p-2.5 rounded-lg shadow-sm border border-neutral-200 hover:bg-white text-neutral-600 transition-colors" onclick="map.zoomOut()">
<iconify-icon height="20" icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="absolute inset-0 z-[900] bg-neutral-50 hidden overflow-y-auto p-5 pb-24" id="grid-view">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    95% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Birla Trimaya Phase 2
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.24 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,650 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    88% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Godrej Reserve
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.85 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,850 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    84% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Embassy Springs
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹2.10 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 2,100 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Few Left
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    82% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Salarpuria Sattva
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.50 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,550 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    79% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Brigade Orchards
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.15 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 2 Bed · 1,250 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    76% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Sobha Lifestyle
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹3.20 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 4 Bed · 3,100 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Few Left
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    75% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Prestige Tech Park
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.45 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,500 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    72% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Purva Zenium
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.35 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 2 Bed · 1,350 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    70% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Ozone Urbana
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.10 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,400 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Few Left
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    68% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Assetz Earth &amp; Essence
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹2.45 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 2,200 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    65% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Mahindra Eden
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.65 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,750 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-44">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    62% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Rohan Upavan
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.05 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 2 Bed · 1,150 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Few Left
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-auto">
<button className="flex transition-all text-sm font-medium text-white rounded-full pt-3 pr-5 pb-3 pl-5 shadow-lg gap-x-2 gap-y-2 items-center hover:bg-neutral-800 bg-neutral-900" id="view-toggle-btn" onclick="toggleView()">
<iconify-icon className="" height="18" icon="solar:widget-5-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
              Grid View
            </button>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[3000] overflow-y-auto transition-all duration-300 bg-white hide-overlay" id="pdp-overlay">
<nav className="sticky z-40 px-4 sm:px-6 lg:px-8 flex bg-white/90 border-neutral-200 border-b py-4 top-0 backdrop-blur-md items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800">
<iconify-icon className="text-white" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tighter uppercase text-neutral-800">
            MANEST
          </h1>
</div>
<div className="flex items-center gap-2">
<button className="flex hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-900 bg-white border-neutral-200 border rounded-lg px-4 py-2 shadow-sm gap-2 items-center" onclick="closePDP()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Close
          </button>
</div>
</nav>
<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
<div className="flex flex-col md:flex-row gap-3 h-[40vh] md:h-[500px] w-full">
<div className="w-full md:w-[70%] h-full relative bg-white p-2.5 border border-neutral-200 rounded-xl shadow-sm group">
<img className="w-full h-full object-cover rounded-lg transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&amp;q=80"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-medium text-neutral-900 border border-neutral-200 shadow-sm">
              1 / 24
            </div>
</div>
<div className="hidden md:flex w-[30%] flex-col gap-3 h-full">
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors m-2 rounded-lg">
<span className="text-xs font-medium border px-3 py-1.5 rounded-md backdrop-blur-sm text-white border-white/50 shadow-sm">
                  View all photos
                </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8 pb-8 border-b border-neutral-200">
<div className="flex-1">
<div className="text-3xl font-medium tracking-tight text-neutral-900 leading-none mb-3">
              ₹1.24 Cr
            </div>
<h1 className="text-base font-medium text-neutral-800 mb-4">
              Birla Trimaya Phase 2, Devanahalli, North Bangalore
            </h1>
<div className="flex flex-wrap gap-2">
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium border border-neutral-200">
                3 BHK
              </span>
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium border border-neutral-200">
                1,240 sq ft carpet
              </span>
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium border border-neutral-200">
                1,650 sq ft built-up
              </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 md:gap-4 flex-shrink-0">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
<button className="hidden sm:block border h-10 px-4 rounded-lg text-sm font-medium transition-colors border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100">
              Talk to Manest Expert
            </button>
<button className="hidden sm:block bg-orange-600 text-white h-10 px-5 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm">
              Schedule a Visit
            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 pb-24">
<div className="lg:col-span-8 space-y-10">
<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                About this home
              </h2>
<div className="text-sm text-neutral-600 leading-relaxed space-y-4">
<p>
                  Experience luxury living at Birla Trimaya Phase 2, an
                  exclusive residential enclave located in the rapidly growing
                  hub of Devanahalli, North Bangalore. Spread across lush green
                  landscapes, this community perfectly balances modern
                  architecture with nature-inspired living spaces.
                </p>
<p>
                  This thoughtfully designed 3 BHK apartment maximizes natural
                  light and cross-ventilation. It features premium vitrified
                  flooring, a spacious living area that extends into a wide
                  balcony overlooking the central courtyard, and generously
                  sized bedrooms with built-in wardrobe spaces.
                </p>
<p>
                  Residents will enjoy access to world-class amenities including
                  a 45,000 sq ft clubhouse, temperature-controlled swimming
                  pool, co-working spaces, and dedicated zones for sports and
                  wellness. Located just minutes away from major IT parks and
                  the airport, it offers unmatched convenience.
                </p>
</div>
</section>
<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Home Facts
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Type</span>
<span className="text-sm font-medium text-neutral-900">
                    Apartment
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Built-up area</span>
<span className="text-sm font-medium text-neutral-900">
                    1,650 sq ft
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Carpet area</span>
<span className="text-sm font-medium text-neutral-900">
                    1,240 sq ft
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Bedrooms</span>
<span className="text-sm font-medium text-neutral-900">3</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Bathrooms</span>
<span className="text-sm font-medium text-neutral-900">2</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Balconies</span>
<span className="text-sm font-medium text-neutral-900">2</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Parking</span>
<span className="text-sm font-medium text-neutral-900">
                    1 covered
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Furnishing</span>
<span className="text-sm font-medium text-neutral-900">
                    Semi-furnished
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Possession</span>
<span className="text-sm font-medium text-neutral-900">
                    Dec 2026 (Phase 2)
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Floor</span>
<span className="text-sm font-medium text-neutral-900">
                    8th of 18
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Facing</span>
<span className="text-sm font-medium text-neutral-900">
                    North-East
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Age</span>
<span className="text-sm font-medium text-neutral-900">
                    Under construction
                  </span>
</div>
</div>
</section>
<section>
<div className="flex items-center gap-2 mb-4">
<h2 className="text-lg font-medium tracking-tight text-neutral-900">
                  Location Intelligence
                </h2>
<span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded text-neutral-500 bg-neutral-100 border border-neutral-200">
                  Manest Insights
                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:diploma-linear" width="18"></iconify-icon>
                    Schools Proximity
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Stonehill International School
                      </span>
<span className="text-neutral-500">2.8 km • 7 min</span>
</div>
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Aditi Mallya International School
                      </span>
<span className="text-neutral-500">5.1 km • 14 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        Canadian International School
                      </span>
<span className="text-neutral-500">8.3 km • 22 min</span>
</div>
</div>
</div>
<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:hospital-linear" width="18"></iconify-icon>
                    Hospitals Nearby
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Columbia Asia Hebbal
                      </span>
<span className="text-neutral-500">6.2 km • 18 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        KIAL Health Centre
                      </span>
<span className="text-neutral-500">4.1 km • 12 min</span>
</div>
</div>
</div>
<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:case-linear" width="18"></iconify-icon>
                    Employment Hubs
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        KIADB Aerospace SEZ
                      </span>
<span className="text-neutral-500">2.9 km • 8 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        Manyata Tech Park
                      </span>
<span className="text-neutral-500">7.5 km • 20 min</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="border border-neutral-200 rounded-xl p-4 shadow-sm flex-1">
<h3 className="text-xs font-medium text-neutral-500 mb-1">
                      Air Quality
                    </h3>
<div className="flex justify-between items-end mb-2">
<span className="text-xl font-medium tracking-tight text-neutral-900 leading-none">
                        AQI 78
                      </span>
<span className="text-xs font-medium text-yellow-600">
                        Moderate
                      </span>
</div>
<div className="h-1.5 w-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 relative mt-3">
<div className="absolute w-2.5 h-2.5 bg-white border border-neutral-800 rounded-full top-1/2 -translate-y-1/2 shadow-sm" style={{left: '45%'}}></div>
</div>
<div className="flex justify-between text-[9px] text-neutral-400 mt-1.5 uppercase tracking-wider">
<span>Good</span>
<span>Mod</span>
<span>Unhealthy</span>
<span>Haz</span>
</div>
</div>
<div className="border border-neutral-200 rounded-xl p-4 shadow-sm flex-1">
<h3 className="text-xs font-medium text-neutral-500 mb-1">
                      Noise Level
                    </h3>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-xl font-medium tracking-tight text-neutral-900 leading-none">
                        62 dB
                      </span>
<span className="text-xs font-medium text-neutral-800">
                        Moderate traffic noise
                      </span>
</div>
<p className="text-[11px] text-neutral-500">
                      Peak hours 8-10 AM, 6-8 PM
                    </p>
</div>
</div>
<div className="md:col-span-2 border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-4">
                    Infrastructure Status
                  </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Water
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200 w-fit">
                        Borewell (BWSSB pending)
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Sewage
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        Municipal connection
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Power
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        24/7 backup
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Gas Pipeline
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        Available
                      </span>
</div>
</div>
</div>
</div>
</section>
<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Legal &amp; Compliance
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs text-neutral-600">
                      RERA Registration
                    </span>
</div>
<span className="flex items-center gap-1 text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Active
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:code-file-linear"></iconify-icon>
<span className="text-xs text-neutral-600">RERA Number</span>
</div>
<span className="text-xs font-medium text-neutral-900">
                    PRM/KA/RERA/1251/309
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs text-neutral-600">Title Status</span>
</div>
<span className="flex items-center gap-1 text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Clear
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xs text-neutral-600">BBMP Approval</span>
</div>
<span className="flex items-center gap-1 text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Obtained
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:checklist-linear"></iconify-icon>
<span className="text-xs text-neutral-600">OC Status</span>
</div>
<span className="flex items-center gap-1 text-xs font-medium bg-amber-500 text-white px-2 py-0.5 rounded">
                    Phase 1 only
                    <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:file-check-linear"></iconify-icon>
<span className="text-xs text-neutral-600">Khata Type</span>
</div>
<span className="flex items-center gap-1 text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    A-Khata
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</span>
</div>
</div>
</section>
<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Things to Know
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-neutral-200 border-l-[3px] border-l-orange-500 bg-orange-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:flag-bold"></iconify-icon>
                    Metro Dependency Risk
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    No operational metro within 25 min. Blue Line Devanahalli
                    extension expected 2027 — BMRCL has a history of delays.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-bold"></iconify-icon>
                    Bellary Road Congestion
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Peak-hour travel time Devanahalli → Hebbal has grown from 22
                    to 28 min over 18 months.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-bold"></iconify-icon>
                    BWSSB Connection Pending
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Currently on borewell. Confirm backup water plan with
                    builder before booking.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-bold"></iconify-icon>
                    Phase 2 OC Not Received
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Verify exact tower and possession timeline on RERA portal —
                    do not rely on verbal commitments.
                  </p>
</div>
</div>
</section>
<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Available Configurations
              </h2>
<div className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse bg-white">
<thead>
<tr className="border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-500 uppercase tracking-wider">
<th className="py-3 px-4 font-medium">Configuration</th>
<th className="py-3 px-4 font-medium">Carpet Area</th>
<th className="py-3 px-4 font-medium hidden sm:table-cell">
                        Built-up Area
                      </th>
<th className="py-3 px-4 font-medium">Price Range</th>
<th className="py-3 px-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-800">
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">2 BHK</td>
<td className="py-3.5 px-4">820 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,090 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹89 – 96 L</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Available
                        </span>
</td>
</tr>
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">
                        3 BHK
                        <span className="ml-1 text-[10px] font-normal text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                          Current
                        </span>
</td>
<td className="py-3.5 px-4">1,240 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,650 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹1.24 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Available
                        </span>
</td>
</tr>
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">3 BHK Large</td>
<td className="py-3.5 px-4">1,450 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,900 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹1.48 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Few Left
                        </span>
</td>
</tr>
<tr>
<td className="py-3.5 px-4 font-medium">4 BHK</td>
<td className="py-3.5 px-4">1,850 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        2,450 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹2.10 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Sold Out
                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-6">

<div className="border border-neutral-200 rounded-xl p-5 shadow-sm bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&amp;q=80"/>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900">
                      Priya Sharma
                    </h3>
<p className="text-xs text-neutral-500">Manest Area Expert</p>
</div>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">
                  Interested in this property?
                </h4>
<p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                  Connect with our experts to schedule a site visit, view the
                  floor plans, or get detailed pricing breakdowns.
                </p>
<div className="space-y-3">
<button className="w-full bg-orange-600 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-orange-700 transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                    Schedule a Free Visit
                  </button>
<button className="w-full bg-white text-neutral-900 border border-neutral-200 rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    Request Callback
                  </button>
<button className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl py-3.5 text-sm font-medium hover:bg-emerald-100 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                    Chat on WhatsApp
                  </button>
</div>
</div>

<div className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm bg-white">
<div className="p-4 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
<h3 className="text-sm font-medium text-neutral-900">
                    Explore Neighborhood
                  </h3>
<button className="text-xs font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors">
                    Expand map
                    <iconify-icon icon="solar:maximize-square-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>

<div className="h-[300px] w-full relative z-0 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-touch-zoom" id="pdp-map" tabindex="0">
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7584@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '150'}} tabindex="0">
<div className="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">
                          ₹1.24 Cr
                        </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '209'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                          Leaflet
                        </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7584@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '150'}} tabindex="0">
<div className="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">
                          ₹1.24 Cr
                        </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '209'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                          Leaflet
                        </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7584@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '150'}} tabindex="0">
<div className="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">
                          ₹1.24 Cr
                        </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '209'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                          Leaflet
                        </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7584@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '150'}} tabindex="0">
<div className="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">
                          ₹1.24 Cr
                        </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '209'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                          Leaflet
                        </a>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11728/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7583@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/14/11727/7584@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/14/11729/7584@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-32px', marginTop: '-14px', width: '64px', height: '28px', zIndex: '150'}} tabindex="0">
<div className="px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-semibold border border-neutral-900 shadow-md whitespace-nowrap cursor-pointer">
                          ₹1.24 Cr
                        </div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '209'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear" width="16"></iconify-icon>
</div>
</div>
<div className="leaflet-marker-icon map-marker-poi leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '90'}} tabindex="0">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-110 transition-transform cursor-pointer">
<iconify-icon className="text-red-500" icon="solar:hospital-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right">
<div className="leaflet-control-attribution leaflet-control">
<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
<svg aria-hidden="true" className="leaflet-attribution-flag" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h12v4H0z" fill="#4C7BE1"></path>
<path d="M0 4h12v3H0z" fill="#FFD500"></path>
<path d="M0 7h12v1H0z" fill="#E0BC00"></path>
</svg>
                          Leaflet
                        </a>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-200 flex gap-2 flex-wrap bg-white">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/50 border border-blue-100 text-blue-700">
<iconify-icon icon="solar:diploma-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase font-semibold tracking-wider">
                      Schools
                    </span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50/50 border border-red-100 text-red-600">
<iconify-icon icon="solar:hospital-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase font-semibold tracking-wider">
                      Hospitals
                    </span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50/50 border border-amber-100 text-amber-600">
<iconify-icon icon="solar:case-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase font-semibold tracking-wider">
                      Work
                    </span>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-5 shadow-sm bg-white bg-gradient-to-br from-white to-teal-50/30">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                    AI Match Analysis
                  </h3>
<span className="text-xl font-medium text-teal-700 tracking-tight">
                    95%
                  </span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-600 font-medium">
                        Budget Fit
                      </span>
<span className="text-emerald-600 font-medium">
                        Excellent
                      </span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-600 font-medium">
                        Location Preference
                      </span>
<span className="text-emerald-600 font-medium">Strong</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-600 font-medium">
                        Amenities Required
                      </span>
<span className="text-teal-600 font-medium">Good</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
