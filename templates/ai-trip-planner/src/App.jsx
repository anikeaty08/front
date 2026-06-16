import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Constants for Tokyo
        const DEST_LAT = 35.6764;
        const DEST_LNG = 139.6500;
        const TIMEZONE = "Asia/Tokyo";
        const BUDGET_USD = 120;

        // --- 1. Weather API (Open-Meteo) ---
        async function fetchWeather() {
            try {
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${DEST_LAT}&longitude=${DEST_LNG}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=7`);
                const data = await res.json();
                
                // Update Current
                document.getElementById('current-temp').textContent = `${Math.round(data.current.temperature_2m)}°C`;
                const { icon, desc } = getWeatherDetails(data.current.weather_code);
                document.getElementById('weather-icon').setAttribute('icon', icon);
                document.getElementById('weather-desc').textContent = desc;

                // Build Forecast Strip
                const strip = document.getElementById('forecast-strip');
                strip.innerHTML = '';
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                
                for(let i=0; i<7; i++) {
                    const date = new Date(data.daily.time[i]);
                    const dayName = i === 0 ? 'Today' : days[date.getDay()];
                    const max = Math.round(data.daily.temperature_2m_max[i]);
                    const min = Math.round(data.daily.temperature_2m_min[i]);
                    const dailyWeather = getWeatherDetails(data.daily.weather_code[i]);

                    const card = document.createElement('div');
                    card.className = 'flex flex-col items-center justify-between min-w-[64px] p-2 rounded-lg bg-black/40 border border-white/5';
                    card.innerHTML = `
                        <span class="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">${dayName}</span>
                        <iconify-icon icon="${dailyWeather.icon}" class="text-xl my-2 text-white"></iconify-icon>
                        <div class="flex items-center gap-1.5 text-xs">
                            <span class="text-white font-medium">${max}°</span>
                            <span class="text-neutral-500">${min}°</span>
                        </div>
                    `;
                    strip.appendChild(card);
                }
            } catch (e) {
                console.error("Weather failed", e);
            }
        }

        // Weather Code Mapper
        function getWeatherDetails(code) {
            if (code <= 3) return { icon: 'solar:sun-2-linear', desc: 'Clear' };
            if (code <= 48) return { icon: 'solar:cloud-linear', desc: 'Cloudy' };
            if (code <= 67) return { icon: 'solar:cloud-water-linear', desc: 'Rain' };
            if (code <= 77) return { icon: 'solar:cloud-snow-linear', desc: 'Snow' };
            return { icon: 'solar:cloud-bolt-linear', desc: 'Storm' };
        }

        // --- 2. Local Time (Fallback to Browser Intl to ensure reliability in demo, simulates WorldTimeAPI) ---
        function updateLocalTime() {
            const now = new Date();
            const timeStr = new Intl.DateTimeFormat('en-US', { timeZone: TIMEZONE, hour: '2-digit', minute: '2-digit', hour12: false }).format(now);
            const dateStr = new Intl.DateTimeFormat('en-US', { timeZone: TIMEZONE, weekday: 'short', month: 'short', day: 'numeric' }).format(now);
            
            document.getElementById('local-time').textContent = timeStr;
            document.getElementById('local-date').textContent = dateStr;
        }
        setInterval(updateLocalTime, 1000);
        updateLocalTime();

        // --- 3. Currency API (Frankfurter) ---
        async function fetchCurrency() {
            try {
                const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=JPY');
                const data = await res.json();
                const rate = data.rates.JPY;
                const localAmount = Math.round(BUDGET_USD * rate);
                document.getElementById('local-budget').textContent = `¥${localAmount.toLocaleString()}`;
            } catch (e) {
                document.getElementById('local-budget').textContent = "Unavailable";
            }
        }

        // --- 4. Interactive Maps (Leaflet) ---
        function initMap() {
            // Fix Leaflet icons
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });

            const map = L.map('map', { zoomControl: false }).setView([35.6850, 139.7300], 12);
            
            // Dark tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

            L.control.zoom({ position: 'bottomright' }).addTo(map);

            // Mock POIs (Simulating Geocoded activities)
            const pois = [
                { lat: 35.6762, lng: 139.6503, day: 1, name: 'Meiji Shrine', time: 'Morning' },
                { lat: 35.6580, lng: 139.7016, day: 1, name: 'Shibuya Crossing', time: 'Afternoon' },
                { lat: 35.7148, lng: 139.7967, day: 2, name: 'Senso-ji Temple', time: 'Morning' }
            ];

            const bounds = L.latLngBounds();

            pois.forEach(poi => {
                const icon = L.divIcon({
                    html: `<div class="marker-pin">${poi.day}</div>`,
                    className: '',
                    iconSize: [28, 28],
                    iconAnchor: [14, 28],
                    popupAnchor: [0, -28]
                });

                L.marker([poi.lat, poi.lng], { icon })
                    .bindPopup(`<b>${poi.name}</b><br/><span style="color:#a3a3a3">Day ${poi.day} · ${poi.time}</span>`)
                    .addTo(map);
                
                bounds.extend([poi.lat, poi.lng]);
            });

            // Fit bounds with padding
            map.fitBounds(bounds, { padding: [50, 50] });
        }

        // --- 5. Text-to-Speech (Web Speech API) ---
        function speakText(text, lang) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = lang;
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            } else {
                alert("Text-to-speech not supported in this browser.");
            }
        }

        // --- 6. Clipboard API (Share) ---
        async function copyShareLink() {
            const url = window.location.href + "?trip=base64encodeddata_mock";
            const successEl = document.getElementById('share-success');
            
            try {
                await navigator.clipboard.writeText(url);
                successEl.classList.remove('opacity-0');
                setTimeout(() => {
                    successEl.classList.add('opacity-0');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }

        // Initialize App calls
        document.addEventListener('DOMContentLoaded', () => {
            fetchWeather();
            fetchCurrency();
            // Small timeout to ensure container is ready for Leaflet
            setTimeout(initMap, 100); 
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="font-semibold tracking-tighter text-lg text-white">WANDR</div>

<div className="relative hidden md:block w-80">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:map-point-search-linear"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/30 transition-colors" placeholder="Search destination..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral-400 hover:text-white flex items-center">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">

<div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden flex flex-col justify-end p-6 md:p-10 border border-white/10">

<img alt="Tokyo" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
<div className="relative z-20 w-full">
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white tracking-wide">
                        7 DAYS
                    </span>
<span className="text-sm font-medium text-orange-400">Autumn</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 drop-shadow-lg">Tokyo, Japan</h1>

<div className="flex flex-wrap gap-3 md:gap-4">

<div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
<iconify-icon className="text-2xl text-orange-400" icon="solar:cloud-sun-linear" id="weather-icon"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Current Weather</span>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-white" id="current-temp">--°C</span>
<span className="text-xs text-neutral-300" id="weather-desc">Loading...</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:clock-circle-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Local Time</span>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-white" id="local-time">--:--</span>
<span className="text-xs text-neutral-300" id="local-date">--</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
<span className="text-2xl drop-shadow-sm">🇯🇵</span>
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Currency &amp; Lang</span>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-white">JPY (¥)</span>
<span className="text-xs text-neutral-300">Japanese</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-white">
                    Overview
                </button>
<button className="px-4 py-2 text-sm font-medium rounded-lg text-neutral-400 hover:text-white transition-colors">
                    Itinerary
                </button>
<button className="px-4 py-2 text-sm font-medium rounded-lg text-neutral-400 hover:text-white transition-colors">
                    Culture
                </button>
</div>
<div className="flex items-center gap-3">
<button className="relative px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white flex items-center gap-2 overflow-hidden" id="btn-share" onclick="copyShareLink()">
<iconify-icon icon="solar:link-linear"></iconify-icon>
<span id="share-text">Share</span>
<div className="absolute inset-0 bg-green-500/20 text-green-400 flex items-center justify-center gap-1 opacity-0 transition-opacity duration-300 pointer-events-none" id="share-success">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Copied!</span>
</div>
</button>
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors text-white flex items-center gap-2" onclick="alert('PDF Generation triggered via jsPDF/html2canvas...')">
<iconify-icon icon="solar:document-linear"></iconify-icon>
                    Export PDF
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 flex flex-col gap-6">

<div className="glass-panel p-5 rounded-2xl flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-lg text-neutral-400" icon="solar:wallet-linear"></iconify-icon>
                            Daily Budget
                        </h3>
<span className="text-xs bg-white/10 px-2 py-1 rounded text-neutral-300">Moderate</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">$120</span>
<span className="text-sm text-neutral-400 mb-1">/ day</span>
</div>
<div className="pt-3 border-t border-white/10 flex items-center justify-between text-sm">
<span className="text-neutral-400">Local Equivalent</span>
<span className="font-medium text-white flex items-center gap-1" id="local-budget">
<iconify-icon className="animate-spin text-xs" icon="solar:refresh-linear"></iconify-icon>
</span>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 overflow-hidden">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-lg text-neutral-400" icon="solar:calendar-linear"></iconify-icon>
                        Forecast
                    </h3>
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2" id="forecast-strip">

</div>
</div>

<div className="glass-panel p-5 rounded-2xl flex flex-col gap-4">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-lg text-neutral-400" icon="solar:chat-round-line-linear"></iconify-icon>
                        Essential Phrases
                    </h3>
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 mb-0.5">Hello</span>
<span className="text-sm font-medium text-white">Konnichiwa</span>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-all focus:outline-none" onclick="speakText('Konnichiwa', 'ja-JP')">
<iconify-icon className="text-lg" icon="solar:volume-loud-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 mb-0.5">Thank you</span>
<span className="text-sm font-medium text-white">Arigatou gozaimasu</span>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-all focus:outline-none" onclick="speakText('Arigatou gozaimasu', 'ja-JP')">
<iconify-icon className="text-lg" icon="solar:volume-loud-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 mb-0.5">Excuse me</span>
<span className="text-sm font-medium text-white">Sumimasen</span>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-all focus:outline-none" onclick="speakText('Sumimasen', 'ja-JP')">
<iconify-icon className="text-lg" icon="solar:volume-loud-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 min-h-[500px] lg:min-h-0 bg-neutral-900">
<div className="absolute inset-0 w-full h-full z-0" id="map"></div>

<div className="absolute top-4 left-4 z-[400] glass-panel px-3 py-2 rounded-lg flex items-center gap-2 pointer-events-none">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-white drop-shadow-md">Day 1 Route</span>
</div>
</div>
</div>
</main>


    </>
  );
}
