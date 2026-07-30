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



        // Initialize map
        const map = L.map('map').setView([4.5709, -74.2973], 5);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Sample GeoJSON for Colombian departments (simplified)
        const colombiaDepts = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": { "name": "Antioquia", "usage": 0.95 },
                    "geometry": { 
                        "type": "Polygon", 
                        "coordinates": [[[-75.5, 8.1], [-75.0, 8.1], [-75.0, 6.5], [-75.5, 6.5], [-75.5, 8.1]]]
                    }
                },
                {
                    "type": "Feature",
                    "properties": { "name": "Chocó", "usage": 0.75 },
                    "geometry": { 
                        "type": "Polygon", 
                        "coordinates": [[[-76.5, 7.8], [-76.0, 7.8], [-76.0, 5.5], [-76.5, 5.5], [-76.5, 7.8]]]
                    }
                },
                {
                    "type": "Feature",
                    "properties": { "name": "Valle del Cauca", "usage": 0.40 },
                    "geometry": { 
                        "type": "Polygon", 
                        "coordinates": [[[-76.8, 4.5], [-76.0, 4.5], [-76.0, 3.2], [-76.8, 3.2], [-76.8, 4.5]]]
                    }
                }
            ]
        };

        // Function to get color based on usage value
        function getColor(usage) {
            return usage > 0.8 ? '#ef4444' :
                   usage > 0.6 ? '#f97316' :
                   usage > 0.4 ? '#eab308' :
                   usage > 0.2 ? '#84cc16' : 
                   '#3b82f6';
        }

        // Style function for the GeoJSON layer
        function style(feature) {
            return {
                fillColor: getColor(feature.properties.usage),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        // Function to handle feature interactions
        function highlightFeature(e) {
            const layer = e.target;
            layer.setStyle({
                weight: 3,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.8
            });
            layer.bringToFront();
            
            // Show tooltip
            layer.bindTooltip(
                `${layer.feature.properties.name} — ${Math.round(layer.feature.properties.usage * 100)}% match`,
                { permanent: false, direction: 'center' }
            ).openTooltip();
        }

        function resetHighlight(e) {
            geoJsonLayer.resetStyle(e.target);
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: function() {
                    document.getElementById('result-drawer').classList.remove('hidden');
                }
            });
        }

        // Add GeoJSON layer to map (initially hidden)
        const geoJsonLayer = L.geoJSON(colombiaDepts, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);
        geoJsonLayer.setStyle({fillOpacity: 0});

        // Search interaction
        const searchInput = document.getElementById('search-input');
        const searchSuggestions = document.getElementById('search-suggestions');
        const resultDrawer = document.getElementById('result-drawer');
        
        searchInput.addEventListener('focus', () => {
            searchSuggestions.classList.remove('hidden');
        });
        
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                searchSuggestions.classList.add('hidden');
            }, 200);
        });
        
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && searchInput.value.toLowerCase() === 'chimba') {
                searchSuggestions.classList.add('hidden');
                showSearchResults();
            }
        });
        
        // Show search results
        function showSearchResults() {
            // Show the heatmap by setting opacity
            geoJsonLayer.setStyle({fillOpacity: 0.7});
            
            // Open the result drawer
            resultDrawer.classList.remove('hidden');
        }
        
        // Close drawer
        document.getElementById('close-drawer').addEventListener('click', () => {
            resultDrawer.classList.add('hidden');
        });
        
        // Handle suggestion clicks
        document.querySelectorAll('#search-suggestions > div').forEach(suggestion => {
            suggestion.addEventListener('click', () => {
                searchInput.value = suggestion.querySelector('div').textContent;
                searchSuggestions.classList.add('hidden');
                showSearchResults();
            });
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
      

<nav className="absolute top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 py-3 flex justify-between items-center">
<div className="font-bold text-lg text-gray-800">🌍 Lingo Map</div>
<div className="flex gap-3">
<select className="text-sm border border-gray-300 rounded-md px-2 py-1">
<option>ES → EN</option>
<option>EN → ES</option>
</select>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded-md">
                ➕ Add Entry
            </button>
</div>
</nav>

<div className="search-container absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4 z-50">
<div className="search-bar flex items-center bg-white rounded-full px-4 py-2 w-full">
<input className="flex-grow outline-none text-gray-700 placeholder-gray-500" id="search-input" placeholder="Search slang or region..." type="text" />
<button className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="bg-white mt-1 rounded-lg shadow-lg hidden" id="search-suggestions">
<div className="p-2 hover:bg-gray-100 cursor-pointer">
<div className="font-medium">chimba</div>
<div className="text-sm text-gray-500">Colombian Spanish slang</div>
</div>
<div className="p-2 hover:bg-gray-100 cursor-pointer">
<div className="font-medium">guay</div>
<div className="text-sm text-gray-500">Spanish slang</div>
</div>
<div className="p-2 hover:bg-gray-100 cursor-pointer">
<div className="font-medium">Antioquia</div>
<div className="text-sm text-gray-500">Region in Colombia</div>
</div>
</div>
</div>

<div id="map"></div>

<div className="absolute bottom-5 left-5 bg-white p-2 rounded-md shadow-md z-40">
<div className="text-xs font-medium mb-1">Usage Frequency</div>
<div className="heat-legend h-2 w-40 rounded-full"></div>
<div className="flex justify-between text-xs mt-1">
<span>Low</span>
<span>High</span>
</div>
</div>

<div className="result-drawer fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg z-50 overflow-y-auto hidden" id="result-drawer">

<div className="sticky top-0 bg-white shadow-sm p-4 flex justify-between items-center">
<h2 className="font-bold text-xl">Term Details</h2>
<button className="text-gray-500 hover:text-gray-700" id="close-drawer">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-5">
<div className="flex justify-between items-start">
<h1 className="text-3xl font-bold text-gray-800">chimba</h1>
<div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">A2</div>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<div className="text-sm bg-gray-100 px-2 py-1 rounded">Colombian Spanish → English</div>
<div className="text-sm bg-gray-100 px-2 py-1 rounded">Adjective / Interjection</div>
<div className="text-sm bg-gray-100 px-2 py-1 rounded">Informal, Excited</div>
</div>
<div className="mt-6">
<h3 className="font-semibold text-gray-700">Common Meanings</h3>
<ol className="list-decimal pl-5 mt-2 space-y-1">
<li className="text-gray-800">Great / Cool / Dope</li>
<li className="text-gray-800">Fake (context-dependent)</li>
</ol>
</div>
<div className="mt-6">
<h3 className="font-semibold text-gray-700">Thesaurus-Like Equivalents</h3>
<ul className="mt-2 space-y-2">
<li className="flex items-start">
<span className="mr-2">🇺🇸</span>
<span>"way cool", "fire", "tight"</span>
</li>
<li className="flex items-start">
<span className="mr-2">🇬🇧</span>
<span>"brilliant", "sick"</span>
</li>
<li className="flex items-start">
<span className="mr-2">🇲🇽</span>
<span>"chingón"</span>
</li>
<li className="flex items-start">
<span className="mr-2">🧠</span>
<span className="italic text-gray-600">Add contributor notes here</span>
</li>
</ul>
</div>
<div className="mt-6">
<h3 className="font-semibold text-gray-700">Sample Usage</h3>
<div className="mt-2 bg-gray-50 p-3 rounded-md">
<p className="italic">¡Qué chimba de concierto!</p>
<p className="text-gray-600 mt-1">— That concert was so dope!</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
<span className="mr-2">🎧</span> Play pronunciation
                </button>
<button className="flex items-center border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
<span className="mr-2">❤️</span> Save
                </button>
</div>
<div className="mt-8">
<h3 className="font-semibold text-gray-700">Regional Usage</h3>
<div className="mt-2 space-y-2">
<div className="flex justify-between items-center">
<span>Antioquia, Colombia</span>
<div className="w-32 bg-gray-200 rounded-full h-2.5">
<div className="bg-red-600 h-2.5 rounded-full" style={{width: `95%`}}></div>
</div>
</div>
<div className="flex justify-between items-center">
<span>Chocó, Colombia</span>
<div className="w-32 bg-gray-200 rounded-full h-2.5">
<div className="bg-orange-500 h-2.5 rounded-full" style={{width: `75%`}}></div>
</div>
</div>
<div className="flex justify-between items-center">
<span>Valle del Cauca, Colombia</span>
<div className="w-32 bg-gray-200 rounded-full h-2.5">
<div className="bg-blue-500 h-2.5 rounded-full" style={{width: `40%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
