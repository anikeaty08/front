import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
sky: '#A8DAFF',
peach: '#FFD4C4',
mint: '#C4F4D4',
lavender: '#E6D4FF',
cream: '#FFF8E7',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 3s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // --- Map Configuration ---
        // Coordinates: Approx Delhi (India) -> Dubai
        const indiaCoords = [28.6139, 77.2090];
        const dubaiCoords = [25.2048, 55.2708];

        // Initialize Map
        const map = L.map('map', {
            zoomControl: false,
            scrollWheelZoom: false,
            dragging: false, // Keep it static for elegance
            doubleClickZoom: false,
            attributionControl: false
        });

        // Use a clean, light map style (CartoDB Positron)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(map);

        // Fit bounds to show both locations with padding
        const bounds = L.latLngBounds([indiaCoords, dubaiCoords]);
        map.fitBounds(bounds, { padding: [50, 50] });

        // Custom Markers
        const createPulseMarker = (coords) => {
            const icon = L.divIcon({
                className: 'custom-marker-icon',
                html: '<div class="marker-pulse"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            return L.marker(coords, { icon: icon }).addTo(map);
        };

        createPulseMarker(indiaCoords);
        createPulseMarker(dubaiCoords);

        // Dotted Polyline
        const pathLine = L.polyline([indiaCoords, dubaiCoords], {
            color: '#A8DAFF', // Sky blue
            weight: 2,
            opacity: 0.6,
            dashArray: '5, 10',
            className: 'animate-pulse'
        }).addTo(map);

        // Plane Icon Marker
        const planeIcon = L.divIcon({
            className: 'custom-marker-icon',
            html: `<div id="plane" style="transform: rotate(-45deg);"><span class="iconify text-slate-800 text-2xl drop-shadow-md" data-icon="lucide:plane"></span></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const planeMarker = L.marker(indiaCoords, { icon: planeIcon, zIndexOffset: 1000 }).addTo(map);

        // --- Flight Animation Logic ---
        let isFlying = false;

        function startFlight() {
            if (isFlying) return;
            isFlying = true;

            const btn = document.getElementById('flyBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2"></span><span class="text-sm font-medium">Flying...</span>`;

            const start = indiaCoords;
            const end = dubaiCoords;
            const duration = 3500; // ms
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const ease = 1 - Math.pow(1 - progress, 3);

                // Calculate current position
                const currentLat = start[0] + (end[0] - start[0]) * ease;
                const currentLng = start[1] + (end[1] - start[1]) * ease;

                // Update marker
                planeMarker.setLatLng([currentLat, currentLng]);

                // Calculate rotation (Angle between points)
                // Simplified for this route (approx West-South-West)
                // Actually, let's just make the plane bank slightly based on progress
                const planeEl = document.getElementById('plane');
                if(planeEl) {
                    // Base rotation for India -> Dubai is roughly 250 degrees (bearing)
                    // Visual rotation correction
                    planeEl.style.transform = `rotate(${240}deg) scale(${1 + Math.sin(progress * Math.PI) * 0.2})`; 
                }

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    finishFlight(btn, originalText);
                }
            }

            requestAnimationFrame(animate);
        }

        function finishFlight(btn, originalText) {
            // Confetti Explosion
            const mapContainer = document.getElementById('map').getBoundingClientRect();
            
            // Fire confetti
            var count = 200;
            var defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio),
                    colors: ['#A8DAFF', '#FFD4C4', '#C4F4D4', '#E6D4FF'] // Pastel colors
                }));
            }

            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });

            // Reset Button
            setTimeout(() => {
                btn.innerHTML = `<span class="iconify text-green-500" data-icon="lucide:check"></span><span class="text-sm font-medium">Arrived!</span>`;
                isFlying = false;
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    planeMarker.setLatLng(indiaCoords); // Reset plane
                }, 3000);
            }, 100);
        }

        // --- Secret Section Logic ---
        function toggleSecret() {
            const content = document.getElementById('secretContent');
            const icon = document.getElementById('chevronIcon');
            const btnText = document.querySelector('#secretBtn span:first-child');
            
            content.classList.toggle('open');
            
            if (content.classList.contains('open')) {
                icon.style.transform = 'rotate(180deg)';
                btnText.textContent = "Okay, I won't forget!";
                
                // Small confetti burst for the reveal
                confetti({
                    particleCount: 30,
                    spread: 50,
                    origin: { y: 0.9 },
                    colors: ['#fdba74', '#fb923c'] // Orange/Choco colors
                });
            } else {
                icon.style.transform = 'rotate(0deg)';
                btnText.textContent = "One little reminder...";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="font-semibold tracking-tighter text-lg text-slate-800">
            DB
        </div>
<div className="text-xs font-medium tracking-wide text-slate-400 uppercase">
            Farewell Edition
        </div>
</nav>

<main className="w-full max-w-3xl mx-auto px-6 pb-24 space-y-24">

<section className="text-center space-y-6 pt-10">
<div className="inline-flex items-center justify-center space-x-2 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-1.5 mb-4 animate-float">
<span className="iconify text-sky text-lg" data-icon="lucide:plane"></span>
<span className="text-xs font-medium text-slate-500 tracking-wide">Ready for Takeoff</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky via-lavender to-peach">D.Bhavana</span>
<span className="block text-slate-200 mt-2 mb-2 text-4xl md:text-6xl font-light">✕</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-peach via-mint to-sky">Dubai Bhavana</span>
</h1>
<div className="max-w-md mx-auto space-y-4">
<p className="text-lg md:text-xl text-slate-700 font-medium">
                    Wishing You an Amazing Journey to Dubai!
                </p>
<p className="text-slate-500 text-sm leading-relaxed">
                    All the best for your project pitching session. Go conquer the desert city with your ideas and charisma. We are rooting for you!
                </p>
</div>
</section>

<section className="relative w-full">
<div className="bg-white rounded-3xl p-2 shadow-xl shadow-slate-200/50 border border-slate-100/50">

<div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-slate-50 z-0 relative outline-none" id="map"></div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center z-[500]">
<button className="group relative overflow-hidden bg-white/90 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-3 px-8 flex items-center gap-3" id="flyBtn" onclick="startFlight()">
<div className="absolute inset-0 bg-gradient-to-r from-sky/20 via-lavender/20 to-peach/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="iconify text-slate-700 group-hover:rotate-45 transition-transform duration-300" data-icon="lucide:send" data-strokeWidth="1.5"></span>
<span className="font-medium text-slate-700 text-sm relative z-10">Begin Your Journey</span>
</button>
</div>
</div>
<div className="flex justify-between mt-4 px-2">
<div className="text-left">
<p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Origin</p>
<p className="text-sm font-medium text-slate-700">India</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Destination</p>
<p className="text-sm font-medium text-slate-700">Dubai</p>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-6">
<div className="bg-gradient-to-br from-mint/30 to-white border border-mint/20 rounded-2xl p-8 flex flex-col justify-center items-start space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="p-3 bg-white rounded-xl shadow-sm">
<span className="iconify text-emerald-400 text-2xl" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-800">You've Got This!</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Your hard work has led you here. Trust your preparation and let your passion for the project shine through during the pitch.
                </p>
</div>
<div className="bg-gradient-to-br from-lavender/30 to-white border border-lavender/20 rounded-2xl p-8 flex flex-col justify-center items-start space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="p-3 bg-white rounded-xl shadow-sm">
<span className="iconify text-purple-400 text-2xl" data-icon="lucide:heart-handshake" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-800">Safe Travels</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    May your flight be smooth, the food be good, and the views be spectacular. Enjoy every moment of this experience!
                </p>
</div>
</section>

<section className="flex flex-col items-center justify-center pt-12 pb-12 border-t border-slate-100">
<button className="text-xs font-medium text-slate-400 hover:text-peach transition-colors duration-300 flex items-center gap-2 cursor-pointer focus:outline-none" id="secretBtn" onclick="toggleSecret()">
<span>One little reminder...</span>
<span className="iconify" data-icon="lucide:chevron-down" id="chevronIcon"></span>
</button>
<div className="reveal-content w-full" id="secretContent">
<div className="mt-8 text-center bg-gradient-to-b from-white to-orange-50 rounded-2xl p-10 shadow-lg border border-orange-100 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
<div className="relative z-10 space-y-4">
<div className="flex justify-center gap-4 text-4xl animate-bounce">
                            🍫 🍬 🍫
                        </div>
<h2 className="text-2xl font-medium text-slate-800 tracking-tight">Don't Forget!</h2>
<p className="text-slate-600">
                            The most important part of the trip: <br/>
<span className="font-semibold text-orange-400">Bring back lots of Chocolates!</span>
</p>
<div className="text-xs text-slate-400 pt-2">(We are counting on you)</div>
</div>
</div>
</div>
</section>
</main>
<footer className="text-center py-8 text-[10px] text-slate-300 tracking-widest uppercase">
        Designed for Bhavana • Safe Travels
    </footer>




    </>
  );
}
