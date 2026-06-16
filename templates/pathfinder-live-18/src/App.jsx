import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
extend: {
colors: {
brand: {
50: '#f0fdf4',
100: '#dcfce7',
400: '#34d399',
500: '#10b981', // Emerald 500
600: '#059669',
900: '#064e3b',
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
}
}
}
}



        // --- State Management ---
        const state = {
            theme: localStorage.getItem('theme') || 'light',
            view: 'landing', // 'landing' or 'app'
            riders: [
                { id: 1, name: 'You', lat: 34.0522, lng: -118.2437, color: '#10b981', self: true, trail: [] },
                { id: 2, name: 'Alex', lat: 34.0525, lng: -118.2440, color: '#3b82f6', trail: [] },
                { id: 3, name: 'Sarah', lat: 34.0520, lng: -118.2430, color: '#f59e0b', trail: [] },
                { id: 4, name: 'Mike', lat: 34.0528, lng: -118.2435, color: '#a855f7', trail: [] }
            ],
            map: null,
            markers: {},
            polylines: {},
            timerInterval: null,
            simulationInterval: null,
            startTime: null
        };

        // --- Theme Logic ---
        function initTheme() {
            if (state.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                state.theme = 'dark';
            } else {
                document.documentElement.classList.remove('dark');
                state.theme = 'light';
            }
            
            // Set Footer Year
            document.getElementById('current-year').textContent = new Date().getFullYear();
        }

        function toggleTheme() {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
            initTheme();
        }

        // --- Navigation ---
        function navigateToApp() {
            document.getElementById('landing-page').style.transform = 'translateY(-100%)';
            document.getElementById('app-view').classList.remove('hidden');
            document.getElementById('app-view').classList.add('flex');
            
            // Wait for transition then init map
            setTimeout(() => {
                if (!state.map) initMap();
                startSession();
            }, 300);
        }

        function navigateHome() {
            document.getElementById('landing-page').style.transform = 'translateY(0)';
            setTimeout(() => {
                document.getElementById('app-view').classList.add('hidden');
                document.getElementById('app-view').classList.remove('flex');
            }, 500);
            stopSession();
        }

        // --- Map Logic ---
        function initMap() {
            // Initialize Leaflet
            state.map = L.map('map', {
                zoomControl: false,
                attributionControl: false
            }).setView([34.0522, -118.2437], 16);

            // Add Tile Layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                className: 'map-tiles'
            }).addTo(state.map);

            renderRiders();
        }

        function createCustomIcon(rider) {
            const initials = rider.name.substring(0, 1);
            const isSelf = rider.self ? 'z-20' : 'z-10';
            const pulseClass = rider.self ? 'marker-pulse' : '';
            
            return L.divIcon({
                className: 'custom-div-icon',
                html: `
                    <div class="${pulseClass} w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-white text-xs font-semibold ${isSelf}" style="background-color: ${rider.color};">
                        ${initials}
                    </div>
                    <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap shadow-sm">
                        ${rider.name}
                    </div>
                `,
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });
        }

        function renderRiders() {
            state.riders.forEach(rider => {
                // Marker
                if (!state.markers[rider.id]) {
                    const marker = L.marker([rider.lat, rider.lng], {
                        icon: createCustomIcon(rider)
                    }).addTo(state.map);
                    state.markers[rider.id] = marker;
                }

                // Trail
                if (!state.polylines[rider.id]) {
                    const polyline = L.polyline([], {
                        color: rider.color,
                        weight: 4,
                        opacity: 0.7,
                        lineJoin: 'round'
                    }).addTo(state.map);
                    state.polylines[rider.id] = polyline;
                }
            });
            updateRiderList();
        }

        function updateRiderPositions() {
            state.riders.forEach(rider => {
                // Simulate movement
                const moveLat = (Math.random() - 0.5) * 0.0003;
                const moveLng = (Math.random() - 0.5) * 0.0003;
                
                rider.lat += moveLat;
                rider.lng += moveLng;

                // Update Trail Data
                rider.trail.push([rider.lat, rider.lng]);
                if (rider.trail.length > 50) rider.trail.shift();

                // Update UI Map Elements
                if (state.markers[rider.id]) {
                    state.markers[rider.id].setLatLng([rider.lat, rider.lng]);
                }
                if (state.polylines[rider.id]) {
                    state.polylines[rider.id].setLatLngs(rider.trail);
                }
            });
        }

        // --- Controls ---
        function centerSelf() {
            const self = state.riders.find(r => r.self);
            if (self && state.map) {
                state.map.flyTo([self.lat, self.lng], 17, { duration: 1.5 });
            }
        }

        function fitAllRiders() {
            if (!state.map) return;
            const bounds = L.latLngBounds(state.riders.map(r => [r.lat, r.lng]));
            state.map.flyToBounds(bounds, { padding: [50, 50], duration: 1 });
        }

        // --- UI Updates ---
        function updateRiderList() {
            const list = document.getElementById('rider-list-container');
            list.innerHTML = state.riders.map(r => `
                <div class="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition cursor-pointer" onclick="state.map.flyTo([${r.lat}, ${r.lng}], 18)">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-sm ring-2 ring-white dark:ring-gray-800" style="background-color: ${r.color}">
                            ${r.name.charAt(0)}
                        </div>
                        <div>
                            <p class="text-sm font-medium text-slate-800 dark:text-slate-200">${r.name} ${r.self ? '(You)' : ''}</p>
                            <p class="text-[10px] text-slate-400 font-mono">34.05° N, 118.24° W</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-1 text-xs text-brand-600 dark:text-brand-500">
                        <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    </div>
                </div>
            `).join('');
        }

        function updateTimer() {
            if (!state.startTime) return;
            const now = new Date();
            const diff = now - state.startTime;
            const minutes = Math.floor(diff / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            document.getElementById('session-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // --- Session Logic ---
        function startSession() {
            state.startTime = new Date();
            state.timerInterval = setInterval(updateTimer, 1000);
            state.simulationInterval = setInterval(updateRiderPositions, 1000); // Fast updates for smooth feel
            
            // Generate QR
            const qrContainer = document.getElementById('qrcode');
            qrContainer.innerHTML = '';
            new QRCode(qrContainer, {
                text: "https://pathfinder.app/join/ABC-123",
                width: 128,
                height: 128,
                colorDark : "#1e293b",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }

        function stopSession() {
            clearInterval(state.timerInterval);
            clearInterval(state.simulationInterval);
            state.startTime = null;
        }

        function endSession() {
            if(confirm("End current session?")) {
                navigateHome();
            }
        }

        function joinSimulatedSession() {
            // Fake loading state
            const btn = document.querySelector('#join-modal button:last-child');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Joining...';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                closeAllModals();
                navigateToApp();
            }, 1500);
        }

        // --- Modals ---
        function openShareModal() {
            const modal = document.getElementById('share-modal');
            const backdrop = document.getElementById('modal-backdrop');
            
            backdrop.classList.remove('hidden');
            modal.classList.remove('hidden');
            
            // Small delay for animation
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                modal.classList.remove('opacity-0', 'scale-95');
                modal.classList.add('opacity-100', 'scale-100');
            }, 10);
        }

        function openJoinModal() {
            const modal = document.getElementById('join-modal');
            const backdrop = document.getElementById('modal-backdrop');
            
            backdrop.classList.remove('hidden');
            modal.classList.remove('hidden');
            
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                modal.classList.remove('opacity-0', 'scale-95');
                modal.classList.add('opacity-100', 'scale-100');
            }, 10);
        }

        function closeAllModals() {
            const modals = [document.getElementById('share-modal'), document.getElementById('join-modal')];
            const backdrop = document.getElementById('modal-backdrop');
            
            backdrop.classList.add('opacity-0');
            modals.forEach(m => {
                m.classList.add('opacity-0', 'scale-95');
                m.classList.remove('opacity-100', 'scale-100');
            });

            setTimeout(() => {
                backdrop.classList.add('hidden');
                modals.forEach(m => m.classList.add('hidden'));
            }, 200);
        }

        function copyCode() {
            navigator.clipboard.writeText("ABC-123");
            alert("Code copied to clipboard!");
        }

        // --- Init ---
        initTheme();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-40 bg-gray-50 dark:bg-gray-950 overflow-y-auto transition-transform duration-500 ease-in-out scroll-smooth" id="landing-page">

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<div className="w-6 h-6 bg-brand-500 rounded-md flex items-center justify-center text-white text-xs font-semibold">P</div>
<span className="font-medium tracking-tight text-lg text-slate-900 dark:text-white">Pathfinder</span>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" onclick="openJoinModal()">
                        Join Session
                    </button>
<div className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
<button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-stars-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="max-w-5xl mx-auto px-6 pt-20 pb-12 pb-safe">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-medium border border-brand-100 dark:border-brand-900/50 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Live GPS Tracking v1.2
                </div>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Ride further,<br/>
<span className="text-gray-400 dark:text-gray-600">never lose the pack.</span>
</h1>
<p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-normal">
                    Real-time location sharing for cyclists, hikers, and adventurers. Create a private session, scan a QR code, and visualize everyone's trail on a unified map.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium transition hover:scale-[1.02] active:scale-[0.98]" onclick="navigateToApp()">
                        Start Session
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
                        How it Works
                    </button>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">
                    Have a code? <button className="text-brand-600 dark:text-brand-400 font-medium hover:underline decoration-brand-500/30 underline-offset-2" onclick="openJoinModal()">Join an existing session</button>
</p>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-32 scroll-mt-24" id="features">
<div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Live Tracking</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">See every rider's exact position update in real-time with unique colored markers.</p>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Trail History</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Visualize path history for the group. Know exactly where the squad went.</p>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Private &amp; Secure</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">No accounts required. Ephemeral sessions protected by 6-digit codes.</p>
</div>
</div>

<footer className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© <span id="current-year"></span> Pathfinder. Designed for the outdoors.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" href="#">Terms</a>
</div>
</footer>
</main>
</div>

<div className="absolute inset-0 z-0 bg-gray-100 dark:bg-gray-900 hidden flex-col" id="app-view">

<div className="absolute inset-0 z-0 bg-slate-200 dark:bg-slate-800" id="map"></div>

<div className="absolute top-0 left-0 right-0 z-10 px-4 pt-4 pb-2 bg-gradient-to-b from-white/90 to-transparent dark:from-gray-950/90 pointer-events-none">
<div className="flex items-center justify-between pointer-events-auto">
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-slate-300 shadow-sm flex items-center justify-center active:scale-95 transition hover:bg-gray-50 dark:hover:bg-gray-800" onclick="navigateHome()">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 shadow-sm flex items-center gap-3">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Session</span>
<span className="text-sm font-semibold tracking-tight dark:text-white" id="session-code-display">ABC-123</span>
</div>
<div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Time</span>
<span className="text-sm font-mono dark:text-white" id="session-timer">00:00</span>
</div>
</div>
</div>
<button className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-slate-300 shadow-sm flex items-center justify-center active:scale-95 transition hover:bg-gray-50 dark:hover:bg-gray-800" onclick="toggleTheme()">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none flex flex-col items-end sm:items-start p-4 pb-safe gap-3">

<div className="flex flex-col gap-2 pointer-events-auto self-end mb-2">
<button className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-slate-300 shadow-sm flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition" onclick="fitAllRiders()" title="Fit all">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-brand-600 dark:text-brand-500 shadow-sm flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition" onclick="centerSelf()" title="Locate me">
<iconify-icon icon="solar:gps-linear" width="20"></iconify-icon>
</button>
</div>

<div className="w-full sm:max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg pointer-events-auto transition-transform duration-300 transform translate-y-0" id="rider-panel">

<div className="w-full h-6 flex items-center justify-center sm:hidden" onclick="togglePanel()">
<div className="w-12 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
</div>
<div className="px-5 pb-5 pt-1 sm:pt-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">Active Riders <span className="ml-1 text-slate-400 font-normal text-xs" id="rider-count">(4)</span></h2>
<button className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1" onclick="openShareModal()">
<iconify-icon icon="solar:share-linear"></iconify-icon> Invite
                        </button>
</div>

<div className="space-y-3 max-h-48 overflow-y-auto pr-1 no-scrollbar" id="rider-list-container">

</div>
<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-3">
<button className="flex-1 px-4 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition border border-transparent" onclick="endSession()">
                            Leave
                        </button>
<button className="flex-1 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-xl hover:opacity-90 transition shadow-sm" onclick="openJoinModal()">
                            Switch Ride
                        </button>
</div>
</div>
</div>
</div>
</div>


<div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] hidden transition-opacity opacity-0" id="modal-backdrop" onclick="closeAllModals()"></div>

<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-[70] hidden opacity-0 scale-95 transition-all duration-200" id="share-modal">
<div className="p-6 text-center">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-1">Invite Riders</h3>
<p className="text-sm text-slate-500 mb-6">Share this code or scan to join.</p>
<div className="bg-white p-3 rounded-xl border border-gray-200 inline-block mb-4">
<div className="w-32 h-32" id="qrcode"></div>
</div>
<div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl mb-6">
<span className="font-mono text-xl font-bold flex-1 text-center tracking-widest text-slate-800 dark:text-slate-200">ABC-123</span>
<button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-slate-500 transition" onclick="copyCode()">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</button>
</div>
<button className="w-full py-3 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition shadow-sm shadow-brand-500/20" onclick="closeAllModals()">Done</button>
</div>
</div>

<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-[70] hidden opacity-0 scale-95 transition-all duration-200" id="join-modal">
<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">Join Session</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeAllModals()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">Session Code</label>
<input className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-lg font-mono text-center uppercase mb-4 focus:ring-2 focus:ring-brand-500 focus:outline-none dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" placeholder="XXX-XXX" type="text"/>
<button className="w-full py-3 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon> Scan QR Code
            </button>
<button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition shadow-sm" onclick="joinSimulatedSession()">
                Join Ride
            </button>
</div>
</div>


    </>
  );
}
