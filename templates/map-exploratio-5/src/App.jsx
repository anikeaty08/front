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



window.__MAPPLS_READY = false;
window.initMap = function () {
window.__MAPPLS_READY = true;
if (typeof window.__initMapImpl === 'function') {
window.__initMapImpl();
}
};



        try { window.lucide && window.lucide.createIcons && window.lucide.createIcons(); } catch (_) {}

        // Global map state
        const API_KEY = 'jtqwltvkjrvajtdjvqdvdpdmigocadmmlmgd';
        let map; 
        let marker = null;
        let userLocationMarker = null;
        let userLocation = { lat: 28.6139, lng: 77.2090 }; // Default: New Delhi

        // Map initialization (called by SDK callback via stub)
        window.__initMapImpl = function () {
            try {
                const defaultCenter = [77.2090, 28.6139]; // [lng, lat]
                map = new mappls.Map('map', { center: defaultCenter, zoom: 12 });

                if (map && typeof map.on === 'function') {
                    map.on('load', () => {
                        document.getElementById('loadingOverlay').classList.add('hidden');
                        detectUserLocation();
                    });
                } else {
                    setTimeout(() => {
                        document.getElementById('loadingOverlay').classList.add('hidden');
                        detectUserLocation();
                    }, 1000);
                }
            } catch (e) {
                document.getElementById('loadingOverlay').classList.add('hidden');
                showNotification('Failed to initialize map. Please refresh.', 'error');
                console.error('Map init error:', e);
            }
        };

        // If SDK already called initMap before impl was ready, impl is invoked by the stub above.

        // Geolocation to center map
        function detectUserLocation() {
            if (!navigator.geolocation) return;
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                    addOrMoveUserMarker(userLocation.lat, userLocation.lng);
                    safeFlyTo([userLocation.lng, userLocation.lat], 13);
                    showNotification('Location detected', 'success');
                },
                () => {
                    showNotification('Using default location', 'info');
                },
                { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
            );
        }

        // Helpers for map interactions
        function safeFlyTo(centerLngLat, zoom = 14) {
            try {
                if (map && typeof map.flyTo === 'function') {
                    map.flyTo({ center: centerLngLat, zoom });
                } else if (map && typeof map.setCenter === 'function') {
                    map.setCenter(centerLngLat);
                    if (typeof map.setZoom === 'function') map.setZoom(zoom);
                }
            } catch (e) {
                console.warn('flyTo fallback used', e);
            }
        }

        function addOrMoveMarker(lat, lng, title = '', address = '') {
            try {
                if (marker && typeof marker.remove === 'function') marker.remove();

                if (window.mappls && mappls.Marker) {
                    marker = new mappls.Marker({ color: '#8b5cf6' })
                        .setLngLat([lng, lat])
                        .addTo(map);

                    if (mappls.Popup) {
                        const html = `
                            <div style="min-width:180px">
                                <div style="font-weight:600;margin-bottom:4px">${title || 'Selected place'}</div>
                                <div style="font-size:12px;opacity:.8">${address || ''}</div>
                                <div style="font-size:12px;margin-top:6px">${lat.toFixed(6)}, ${lng.toFixed(6)}</div>
                            </div>
                        `;
                        new mappls.Popup({ offset: 12 }).setLngLat([lng, lat]).setHTML(html).addTo(map);
                    }
                }
            } catch (e) {
                console.error('Marker error:', e);
            }
        }

        function addOrMoveUserMarker(lat, lng) {
            try {
                if (userLocationMarker && typeof userLocationMarker.remove === 'function') {
                    userLocationMarker.remove();
                }
                if (window.mappls && mappls.Marker) {
                    userLocationMarker = new mappls.Marker({ color: '#22c55e' })
                        .setLngLat([lng, lat])
                        .addTo(map);
                }
            } catch (e) {
                console.error('User marker error:', e);
            }
        }

        // Search logic
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        const mockPlaces = [
            { name: 'India Gate', lat: 28.6129, lng: 77.2295, address: 'Rajpath, New Delhi' },
            { name: 'Red Fort', lat: 28.6562, lng: 77.2410, address: 'Netaji Subhash Marg, New Delhi' },
            { name: 'Qutub Minar', lat: 28.5244, lng: 77.1855, address: 'Mehrauli, New Delhi' },
            { name: 'Lotus Temple', lat: 28.5535, lng: 77.2588, address: 'Bahapur, New Delhi' },
            { name: 'Connaught Place', lat: 28.6304, lng: 77.2177, address: 'Central Delhi' }
        ];

        function renderResults(items) {
            if (items.length === 0) {
                searchResults.innerHTML = '<div class="px-4 py-3 text-gray-400 text-sm">No results found</div>';
                searchResults.classList.remove('hidden');
                return;
            }
            searchResults.innerHTML = items.map(place => `
                <div class="px-4 py-3 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 transition-colors duration-150" data-lat="${place.lat}" data-lng="${place.lng}" data-name="${place.name}" data-address="${place.address}">
                    <div class="flex items-start gap-3">
                        <i data-lucide="map-pin" class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" style="stroke-width: 1.5;"></i>
                        <div>
                            <div class="font-medium text-white">${place.name}</div>
                            <div class="text-xs text-gray-400 mt-0.5">${place.address}</div>
                        </div>
                    </div>
                </div>
            `).join('');
            searchResults.classList.remove('hidden');
            try { window.lucide && window.lucide.createIcons && window.lucide.createIcons(); } catch (_) {}

            searchResults.querySelectorAll('[data-lat]').forEach(item => {
                item.addEventListener('click', () => {
                    const lat = parseFloat(item.dataset.lat);
                    const lng = parseFloat(item.dataset.lng);
                    const name = item.dataset.name;
                    const address = item.dataset.address;
                    showPlace(lat, lng, name, address);
                    searchResults.classList.add('hidden');
                    searchInput.value = name;
                });
            });
        }

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 1) {
                searchResults.classList.add('hidden');
                return;
            }
            const filtered = mockPlaces.filter(place => 
                place.name.toLowerCase().includes(query) || 
                place.address.toLowerCase().includes(query)
            );
            renderResults(filtered);
        });

        // Close dropdown when clicking outside or pressing Escape
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchResults.classList.add('hidden');
        });

        function showPlace(lat, lng, name, address) {
            addOrMoveMarker(lat, lng, name, address);
            safeFlyTo([lng, lat], 14);
            showInfoPopup(name, `
                <div class="flex items-start gap-2">
                    <i data-lucide="map-pin" class="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" style="stroke-width: 1.5;"></i>
                    <span>${address}</span>
                </div>
                <div class="flex items-start gap-2 mt-2">
                    <i data-lucide="navigation-2" class="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" style="stroke-width: 1.5;"></i>
                    <span>${lat.toFixed(6)}, ${lng.toFixed(6)}</span>
                </div>
            `);
            try { window.lucide && window.lucide.createIcons && window.lucide.createIcons(); } catch (_) {}
            showNotification(`Showing ${name}`, 'success');
        }

        // Info popup
        function showInfoPopup(title, content) {
            document.getElementById('popupTitle').textContent = title;
            document.getElementById('popupContent').innerHTML = content;
            document.getElementById('infoPopup').classList.remove('hidden');
        }

        document.getElementById('closePopup').addEventListener('click', () => {
            document.getElementById('infoPopup').classList.add('hidden');
        });

        // Recenter controls
        document.getElementById('recenterBtn').addEventListener('click', () => {
            safeFlyTo([userLocation.lng, userLocation.lat], 13);
            showNotification('Centering to your location', 'info');
        });

        document.getElementById('locationBtn')?.addEventListener('click', () => {
            safeFlyTo([userLocation.lng, userLocation.lat], 13);
            showNotification('Centering to your location', 'info');
        });

        // Notification system
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            const colors = {
                success: 'bg-green-500/20 border-green-500/50 text-green-300',
                error: 'bg-red-500/20 border-red-500/50 text-red-300',
                info: 'bg-purple-500/20 border-purple-500/50 text-purple-300'
            };
            
            notification.className = `fixed top-4 right-4 px-4 py-3 rounded-lg border backdrop-blur-xl ${colors[type]} shadow-lg z-50`;
            notification.innerHTML = `
                <div class="flex items-center gap-2">
                    <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="w-4 h-4" style="stroke-width: 1.5;"></i>
                    <span class="text-sm font-medium">${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            try { window.lucide && window.lucide.createIcons && window.lucide.createIcons(); } catch (_) {}
            
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(-10px)';
                notification.style.transition = 'all 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    
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
      

<header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="map" style={{strokeWidth: '1.5'}}></i>
</div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Explore with MapMyIndia</h1>
</div>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200" id="locationBtn">
<i className="w-4 h-4" data-lucide="navigation" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">My Location</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

<div className="mb-4 sm:mb-6">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</div>
<input autocomplete="off" className="w-full pl-12 pr-4 py-3 sm:py-4 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 backdrop-blur-xl" id="searchInput" placeholder="Search for places, addresses, landmarks..." type="text"/>
<div className="absolute top-full mt-2 w-full bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-h-64 overflow-y-auto hidden z-50" id="searchResults"></div>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs sm:text-sm text-gray-400">
<div className="flex items-center gap-2 px-3 py-2 bg-black/20 border border-white/5 rounded-lg">
<i className="w-4 h-4" data-lucide="mouse-pointer-click" style={{strokeWidth: '1.5'}}></i>
<span>Click to view details</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 bg-black/20 border border-white/5 rounded-lg">
<i className="w-4 h-4" data-lucide="move" style={{strokeWidth: '1.5'}}></i>
<span>Drag to explore</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 bg-black/20 border border-white/5 rounded-lg">
<i className="w-4 h-4" data-lucide="zoom-in" style={{strokeWidth: '1.5'}}></i>
<span>Scroll to zoom</span>
</div>
</div>

<div className="map-container relative">
<div className="w-full h-full bg-black/30 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div id="map"></div>

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center" id="loadingOverlay">
<div className="text-center">
<div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
<p className="text-sm text-gray-300">Initializing map...</p>
</div>
</div>

<div className="hidden absolute top-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-sm bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl z-40" id="infoPopup">
<div className="flex items-start justify-between mb-3">
<h3 className="text-base sm:text-lg font-semibold text-white pr-4" id="popupTitle"></h3>
<button className="text-gray-400 hover:text-white transition-colors" id="closePopup">
<i className="w-5 h-5" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-2 text-sm text-gray-300" id="popupContent"></div>
</div>
</div>

<button className="absolute bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-30" id="recenterBtn">
<i className="w-6 h-6 text-white" data-lucide="locate-fixed" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</main>

<footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
<p>Powered by <span className="text-purple-400 font-medium">MapMyIndia</span></p>
<p>Built with <span className="text-purple-400 font-medium">Aura.build</span></p>
</div>
</div>
</footer>


    </>
  );
}
