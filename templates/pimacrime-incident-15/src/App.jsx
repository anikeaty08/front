import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Parsed data from the provided XML spreadsheet
        const rawData = [
            { id: "25-004383", nature: "Criminal Damage", reported: "13:43:06 04/01/25", address: "325 E US HIGHWAY 70; Speedway" },
            { id: "25-004378", nature: "VIN Inspection", reported: "12:29:09 04/01/25", address: "936 S 600 E" },
            { id: "25-004348", nature: "Welfare Check", reported: "23:31:44 03/31/25", address: "309 W 1300 S" },
            { id: "25-004342", nature: "Phlebotomy", reported: "19:18:58 03/31/25", address: "136 W CENTER ST" },
            { id: "25-004327", nature: "Citizen Assist", reported: "15:41:47 03/31/25", address: "1180 W 160 S" },
            { id: "25-004323", nature: "Wanted Person", reported: "14:06:05 03/31/25", address: "405 W DISCOVERY PARK BLVD" },
            { id: "25-004314", nature: "Theft", reported: "12:19:44 03/31/25", address: "144 E US HIGHWAY 70; Dollar General" },
            { id: "25-004308", nature: "Parking Problem", reported: "11:05:05 03/31/25", address: "E 300 S & E US HIGHWAY 70" },
            { id: "25-004307", nature: "Medical", reported: "10:25:17 03/31/25", address: "355 S 400 E" },
            { id: "25-004262", nature: "Follow Up", reported: "09:14:17 03/30/25", address: "237 S 100 W" },
            { id: "25-004256", nature: "Fire", reported: "00:12:15 03/30/25", address: "510 W 200 N" },
            { id: "25-004253", nature: "Domestic", reported: "23:09:41 03/29/25", address: "W 200 S & S 100 W" },
            { id: "25-004243", nature: "Disorderly", reported: "19:56:36 03/29/25", address: "49 N 200 W" },
            { id: "25-004239", nature: "Suspicious", reported: "15:50:40 03/29/25", address: "494 W 600 S" },
            { id: "25-004222", nature: "C34", reported: "09:33:01 03/29/25", address: "1200 S; Soccer fields" },
            { id: "25-004185", nature: "Sex Offense", reported: "13:40:33 03/28/25", address: "225 W CENTER ST" },
            { id: "25-004138", nature: "ATV", reported: "15:09:48 03/27/25", address: "E 400 S & S MAIN ST" },
            { id: "25-004131", nature: "Trespassing", reported: "12:37:15 03/27/25", address: "144 E US HIGHWAY 70" },
            { id: "25-004051", nature: "Unwanted Subjec", reported: "18:46:01 03/25/25", address: "43 S 100 E" },
            { id: "25-003992", nature: "Assault", reported: "17:02:06 03/24/25", address: "N MAIN ST & E CENTER ST" },
            { id: "25-003989", nature: "Traffic Offense", reported: "16:13:38 03/24/25", address: "325 E US HIGHWAY 70" },
            { id: "25-003976", nature: "Stolen Vehicle", reported: "13:57:34 03/24/25", address: "494 W 600 S" },
            { id: "25-003902", nature: "Animal Problem", reported: "12:57:15 03/22/25", address: "469 S 150 E" },
            { id: "25-003813", nature: "Alarm", reported: "12:31:11 03/20/25", address: "49 S 100 W" },
            { id: "25-003806", nature: "MVA W/NO Injury", reported: "10:52:26 03/20/25", address: "E 200 S & S MAIN ST" },
            { id: "25-003522", nature: "Pursuit", reported: "10:39:43 03/13/25", address: "100 W" },
            { id: "25-003492", nature: "Juvenile Prob", reported: "17:44:58 03/12/25", address: "382 W 450 S" },
            { id: "25-003417", nature: "Utility Problem", reported: "14:06:42 03/11/25", address: "28 E 300 S" }
        ];

        // System configuration for categories
        const categories = {
            violent: { label: "Violent & Persons", natures: ["Assault", "Domestic", "Sex Offense", "Disorderly"], color: "#ef4444", tailwind: "bg-red-500", border: "border-red-200" },
            property: { label: "Property Crime", natures: ["Theft", "Criminal Damage", "Trespassing", "Stolen Vehicle"], color: "#f59e0b", tailwind: "bg-amber-500", border: "border-amber-200" },
            traffic: { label: "Traffic & Vehicle", natures: ["ATV", "Parking Problem", "Traffic Offense", "MVA W/NO Injury", "Pursuit"], color: "#eab308", tailwind: "bg-yellow-500", border: "border-yellow-200" },
            service: { label: "Service Calls", natures: ["Welfare Check", "Medical", "Fire", "Citizen Assist", "Animal Problem", "Alarm", "Utility Problem"], color: "#3b82f6", tailwind: "bg-blue-500", border: "border-blue-200" },
            other: { label: "Admin & Other", natures: [], default: true, color: "#94a3b8", tailwind: "bg-slate-400", border: "border-slate-200" }
        };

        let activeFilters = new Set(Object.keys(categories));
        let map, markersLayer;
        let mappedData = [];

        // Mock geocoding based on Pima, AZ central coordinates
        const centerLat = 32.887;
        const centerLng = -109.827;

        function initMap() {
            // Initialize Leaflet map
            map = L.map('map', { zoomControl: false }).setView([centerLat, centerLng], 14);
            
            // Clean, light map tiles (CartoDB Positron) fitting the design style
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
            }).addTo(map);

            // Add zoom control to bottom right
            L.control.zoom({ position: 'bottomright' }).addTo(map);

            markersLayer = L.layerGroup().addTo(map);

            processData();
            renderFilters();
            updateView();
        }

        function getCategoryForNature(nature) {
            for (const [key, cat] of Object.entries(categories)) {
                if (cat.natures && cat.natures.includes(nature)) return key;
            }
            return 'other';
        }

        function processData() {
            // Add mock coordinates and category info to raw data
            mappedData = rawData.map(item => {
                const catKey = getCategoryForNature(item.nature);
                // Slight random offset to simulate different addresses around town
                const latOffset = (Math.random() - 0.5) * 0.015;
                const lngOffset = (Math.random() - 0.5) * 0.025;
                
                // Format date string nicely
                const dateParts = item.reported.split(' ');
                const formattedDate = dateParts[1] ? dateParts[1].substring(0,5) + ' ' + dateParts[0].substring(0,5) : item.reported;

                return {
                    ...item,
                    lat: centerLat + latOffset,
                    lng: centerLng + lngOffset,
                    category: catKey,
                    colorInfo: categories[catKey],
                    formattedDate
                };
            });
            
            // Sort by reported date descending (string sort works roughly here due to format)
            mappedData.sort((a, b) => b.reported.localeCompare(a.reported));
        }

        function toggleFilter(catKey) {
            if (activeFilters.has(catKey)) {
                activeFilters.delete(catKey);
            } else {
                activeFilters.add(catKey);
            }
            updateView();
        }

        function updateView() {
            const filteredData = mappedData.filter(item => activeFilters.has(item.category));
            
            document.getElementById('incident-count').innerText = `${filteredData.length} Incidents`;
            
            renderMap(filteredData);
            renderList(filteredData);
        }

        function renderFilters() {
            const container = document.getElementById('filter-container');
            container.innerHTML = Object.entries(categories).map(([key, cat]) => `
                <label class="flex items-center group cursor-pointer p-1 rounded hover:bg-slate-100 transition-colors">
                    <div class="relative flex items-center justify-center w-4 h-4 mr-3">
                        <input type="checkbox" checked class="peer sr-only" onchange="toggleFilter('${key}')">
                        <div class="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-slate-800 peer-checked:border-slate-800 transition-all flex items-center justify-center">
                            <iconify-icon icon="solar:check-read-linear" class="text-white opacity-0 peer-checked:opacity-100 transition-opacity" width="12" height="12"></iconify-icon>
                        </div>
                    </div>
                    <span class="flex-1 text-sm text-slate-600 group-hover:text-slate-900 transition-colors">${cat.label}</span>
                    <div class="w-2.5 h-2.5 rounded-full ${cat.tailwind}"></div>
                </label>
            `).join('');
        }

        function renderMap(data) {
            markersLayer.clearLayers();

            data.forEach(item => {
                const marker = L.circleMarker([item.lat, item.lng], {
                    radius: 5,
                    fillColor: item.colorInfo.color,
                    color: '#ffffff',
                    weight: 1.5,
                    opacity: 1,
                    fillOpacity: 0.9
                });

                // Custom popup style
                const popupContent = `
                    <div class="min-w-[150px]">
                        <div class="flex items-center gap-1.5 mb-1">
                            <div class="w-2 h-2 rounded-full ${item.colorInfo.tailwind}"></div>
                            <span class="text-xs font-medium tracking-tight text-slate-800 uppercase">${item.nature}</span>
                        </div>
                        <div class="text-xs text-slate-600">${item.address.split(';')[0]}</div>
                        <div class="text-xs text-slate-400 mt-1">${item.formattedDate}</div>
                    </div>
                `;

                marker.bindPopup(popupContent, {
                    closeButton: false,
                    className: 'custom-popup'
                });
                
                marker.on('click', () => {
                    showOverlay(item);
                    map.panTo([item.lat, item.lng]);
                });

                markersLayer.addLayer(marker);
            });
        }

        function renderList(data) {
            const container = document.getElementById('incident-list');
            
            if (data.length === 0) {
                container.innerHTML = `
                    <div class="p-8 text-center text-slate-400 text-sm">
                        No incidents match current filters.
                    </div>`;
                return;
            }

            container.innerHTML = data.map(item => `
                <div onclick="focusIncident('${item.id}')" class="p-4 mb-2 bg-white rounded-lg border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer hover:border-slate-300 hover:shadow-sm transition-all group fade-in">
                    <div class="flex items-start justify-between mb-1.5">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full ${item.colorInfo.tailwind} ring-2 ring-white"></span>
                            <span class="text-sm font-medium text-slate-800 tracking-tight group-hover:text-slate-900">${item.nature}</span>
                        </div>
                        <span class="text-xs text-slate-400">${item.formattedDate.split(' ')[0]}</span>
                    </div>
                    <div class="flex items-start gap-1.5 mt-2">
                        <iconify-icon icon="solar:map-point-linear" class="text-slate-400 mt-0.5" width="14" height="14"></iconify-icon>
                        <p class="text-xs text-slate-500 leading-tight pr-4 line-clamp-1 group-hover:text-slate-700">${item.address}</p>
                    </div>
                </div>
            `).join('');
        }

        function focusIncident(id) {
            const item = mappedData.find(d => d.id === id);
            if(item) {
                map.setView([item.lat, item.lng], 16);
                showOverlay(item);
            }
        }

        function showOverlay(item) {
            const overlay = document.getElementById('selection-overlay');
            document.getElementById('overlay-dot').className = `w-2.5 h-2.5 rounded-full ${item.colorInfo.tailwind}`;
            document.getElementById('overlay-nature').innerText = item.nature;
            document.getElementById('overlay-address').innerText = item.address;
            document.getElementById('overlay-time').innerText = item.formattedDate;
            document.getElementById('overlay-id').innerText = item.id;
            
            overlay.classList.remove('hidden');
        }

        function closeOverlay() {
            document.getElementById('selection-overlay').classList.add('hidden');
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', initMap);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-96 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-2/5 md:h-full z-20 relative shadow-[1px_0_10px_rgba(0,0,0,0.03)]">

<header className="p-5 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<h1 className="text-base font-medium tracking-tight uppercase">PIMACRIME</h1>
</div>
<span className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 rounded-md" id="incident-count">0 Incidents</span>
</header>

<div className="p-5 border-b border-slate-100 bg-slate-50/50">
<h2 className="text-sm font-medium tracking-tight text-slate-800 mb-3 flex items-center gap-2">
<iconify-icon height="16" icon="solar:filter-linear" width="16"></iconify-icon>
                Filter by Type
            </h2>
<div className="flex flex-col gap-2" id="filter-container">

</div>
</div>

<div className="flex-1 overflow-y-auto p-2" id="incident-list">

</div>
</aside>

<main className="flex-1 relative h-3/5 md:h-full z-10 bg-slate-50">
<div className="absolute inset-0 h-full w-full" id="map"></div>

<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-white rounded-lg shadow-lg border border-slate-200 p-4 hidden z-30 transition-all" id="selection-overlay">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full" id="overlay-dot"></div>
<h3 className="text-sm font-medium tracking-tight" id="overlay-nature"></h3>
</div>
<button className="text-slate-400 hover:text-slate-700" onclick="closeOverlay()">
<iconify-icon height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-600 mb-1" id="overlay-address"></p>
<div className="flex justify-between items-center text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
<span id="overlay-time"></span>
<span className="font-mono" id="overlay-id"></span>
</div>
</div>
</main>


    </>
  );
}
