import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Poppins', 'sans-serif'],
},
colors: {
saffron: { 100: '#FFF0D4', 300: '#FFCBA4', 500: '#FFB347', 600: '#FF9933' },
mint: { 100: '#E0F7E9', 300: '#C4F4D4', 500: '#86EFAC' },
sky: { 100: '#E0F2FE', 300: '#A8DAFF', 500: '#7DD3FC' },
lavender: { 100: '#F3E8FF', 300: '#E6D4FF', 500: '#D8B4FE' },
cream: '#FFF8E7',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'dash': 'dash 3s linear infinite',
'plane-fly': 'fly 4s ease-in-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
dash: {
to: { strokeDashoffset: '-100' },
},
fly: {
'0%': { transform: 'translateX(0) translateY(0) rotate(45deg)', opacity: '0' },
'10%': { opacity: '1' },
'100%': { transform: 'translateX(300px) translateY(-100px) rotate(45deg)', opacity: '0' }
}
}
}
}
}



        // --- 1. Reveal Button Logic ---
        function revealReturnee() {
            const btnContainer = document.getElementById('reveal-container');
            const content = document.getElementById('reveal-content');
            
            btnContainer.style.opacity = '0';
            setTimeout(() => {
                btnContainer.style.display = 'none';
                content.classList.remove('hidden');
                // Trigger reflow
                void content.offsetWidth;
                content.classList.remove('opacity-0', 'scale-90', 'translate-y-4');
                
                // Simple confetti burst
                createConfetti();
            }, 300);
        }

        // --- 2. Chocolate Reveal Logic ---
        function revealChocolates() {
            const trigger = document.getElementById('choco-trigger');
            const content = document.getElementById('choco-content');
            
            trigger.style.display = 'none';
            content.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('opacity-0', 'translate-y-4');
            }, 50);
        }

        // --- 3. Map & Flight Logic ---
        // Coordinates: Dubai (25.2048, 55.2708), Hyderabad (17.3850, 78.4867)
        const dubaiCoords = [25.2048, 55.2708];
        const hydCoords = [17.3850, 78.4867];

        const map = L.map('map', {
            zoomControl: false,
            attributionControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false
        }).setView([21, 68], 4); // Centered between Dubai and India

        // Custom Pastel Map Tiles (CartoDB Voyager - Clean & Modern)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
            maxZoom: 10
        }).addTo(map);

        // Custom Icons
        const createIcon = (color, iconName) => L.divIcon({
            className: 'custom-pin',
            html: `<div style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 2px solid white;">
                    <iconify-icon icon="${iconName}" style="color: white; font-size: 18px;"></iconify-icon>
                   </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const dubaiMarker = L.marker(dubaiCoords, { icon: createIcon('#A8DAFF', 'lucide:plane-takeoff') }).addTo(map);
        const hydMarker = L.marker(hydCoords, { icon: createIcon('#FF9933', 'lucide:home') }).addTo(map);

        // Flight Path (Curved Line Logic)
        function getBezierPoints(start, end, height) {
            // Simple Quadratic Bezier logic for geo-coordinates (visual approximation)
            const midLat = (start[0] + end[0]) / 2 + height;
            const midLng = (start[1] + end[1]) / 2;
            
            const points = [];
            for(let t = 0; t <= 1; t += 0.02) {
                const lat = (1-t)*(1-t)*start[0] + 2*(1-t)*t*midLat + t*t*end[0];
                const lng = (1-t)*(1-t)*start[1] + 2*(1-t)*t*midLng + t*t*end[1];
                points.push([lat, lng]);
            }
            return points;
        }

        const pathPoints = getBezierPoints(dubaiCoords, hydCoords, 5);
        const flightPath = L.polyline(pathPoints, {
            color: '#FFB347',
            weight: 3,
            opacity: 0.8,
            dashArray: '10, 10',
            lineCap: 'round',
            className: 'flight-line'
        }).addTo(map);

        // Add CSS animation to the SVG path generated by Leaflet
        const pathElement = document.querySelector('.flight-line');
        if(pathElement) {
            pathElement.style.animation = 'dash 30s linear infinite reverse'; 
        }

        function animateFlight() {
            // 1. Zoom out slightly
            map.flyTo([21, 68], 4, { duration: 1 });
            
            // 2. Simulate plane movement (using simple zoom focus shift for this demo)
            setTimeout(() => {
                map.flyTo(hydCoords, 6, { duration: 3, easeLinearity: 0.5 });
            }, 1000);

            // 3. Celebration at end
            setTimeout(() => {
                createConfetti();
                // Pulse effect on Hyd marker
                const el = hydMarker.getElement();
                if(el) {
                    el.style.transform += ' scale(1.2)';
                    setTimeout(() => el.style.transform = el.style.transform.replace(' scale(1.2)', ''), 300);
                }
            }, 4000);
        }

        // --- 4. Confetti Utility ---
        function createConfetti() {
            const colors = ['#FF9933', '#FFFFFF', '#138808', '#FFCBA4', '#A8DAFF']; // Indian Flag + Pastels
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.opacity = Math.random();
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="painted-bg min-h-screen">

<div className="absolute inset-0 painted-overlay z-0 pointer-events-none"></div>
<div className="absolute inset-0 art-texture z-0 pointer-events-none opacity-40"></div>

<main className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12 flex flex-col gap-16 md:gap-24">

<section className="flex flex-col items-center text-center mt-10 animate-float">
<div className="mb-6 relative">
<div className="absolute -inset-4 bg-saffron-300 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
<div className="relative bg-white/60 p-4 rounded-full border border-white backdrop-blur-sm">
<iconify-icon className="text-saffron-600" icon="lucide:home" width="40"></iconify-icon>
</div>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 mb-4 leading-tight">
                    Welcome Back Home,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-rose-500">Bhavana!</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-md font-medium">
                    From Dubai to <span className="text-saffron-600 italic">Dil Se</span>. India missed its star!
                </p>
<div className="transition-all duration-500" id="reveal-container">
<button className="group relative px-8 py-3 bg-gradient-to-r from-saffron-300 to-rose-300 rounded-full shadow-lg shadow-orange-100 hover:shadow-orange-200 transition-all active:scale-95" onclick="revealReturnee()">
<span className="flex items-center gap-2 text-stone-800 font-medium tracking-wide">
<iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
                            Who's Back Home?
                        </span>
<div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
</button>
</div>
<div className="hidden transform scale-90 opacity-0 transition-all duration-700 mt-4" id="reveal-content">
<div className="glass px-8 py-4 rounded-2xl border-l-4 border-l-saffron-500">
<p className="text-xl font-medium text-stone-800 tracking-tight">
                            Bhavana <span className="text-saffron-500">×</span> Hyderabad
                        </p>
<p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Home Sweet Home</p>
</div>
</div>
</section>

<section className="w-full">
<div className="glass-card rounded-3xl p-2 shadow-xl shadow-saffron-100/50 relative overflow-hidden group">

<div className="absolute top-6 left-6 z-[400] bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="lucide:map-pin" width="16"></iconify-icon>
<span className="text-xs font-semibold text-stone-600 tracking-wide uppercase">Journey Home</span>
</div>
</div>

<div className="absolute bottom-6 right-6 z-[400] flex gap-3">
<div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm">
<p className="text-xs text-stone-500">Distance</p>
<p className="text-sm font-semibold text-stone-800">~3,000 km</p>
</div>
<div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm">
<p className="text-xs text-stone-500">Time</p>
<p className="text-sm font-semibold text-stone-800">4h Flight</p>
</div>
</div>

<div className="h-80 md:h-96 w-full rounded-2xl bg-saffron-100/30 mix-blend-multiply z-10 transition-transform duration-1000 group-hover:scale-[1.02]" id="map"></div>
</div>
</section>

<section className="flex flex-col items-center">
<button className="group w-full md:w-auto relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-200 via-lavender-200 to-sky-200 p-1 shadow-lg hover:shadow-sky-100 transition-all" onclick="animateFlight()">
<div className="relative bg-white/40 backdrop-blur-sm rounded-xl px-8 py-6 flex flex-col items-center gap-3 group-hover:bg-white/50 transition-colors">
<div className="p-3 bg-white rounded-full shadow-sm text-sky-500">
<iconify-icon className="group-hover:-rotate-45 transition-transform duration-500" icon="lucide:plane" width="24"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold text-stone-700">Replay the Journey</h3>
<p className="text-sm text-stone-500">Watch the flight back to Hyderabad</p>
</div>
</div>
</button>
</section>

<section className="w-full">
<div className="glass-card rounded-3xl p-8 relative overflow-hidden">

<div className="absolute -right-10 -top-10 w-32 h-32 bg-mint-300 rounded-full blur-3xl opacity-40"></div>
<h2 className="text-2xl font-semibold text-stone-800 mb-2 relative z-10">How was Dubai? ✨</h2>
<p className="text-sm text-stone-500 mb-6 relative z-10">We know you crushed that pitch!</p>
<div className="grid grid-cols-1 gap-4 relative z-10">
<div className="bg-white/60 p-4 rounded-xl border border-white/60 flex items-start gap-3 hover:bg-white/80 transition-colors cursor-default">
<iconify-icon className="text-saffron-500 mt-1" icon="lucide:mic" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-800">The Pitch</p>
<p className="text-xs text-stone-500">Did they love the presentation?</p>
</div>
</div>
<div className="bg-white/60 p-4 rounded-xl border border-white/60 flex items-start gap-3 hover:bg-white/80 transition-colors cursor-default">
<iconify-icon className="text-rose-500 mt-1" icon="lucide:camera" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-800">The Sights</p>
<p className="text-xs text-stone-500">Did you see the Burj Khalifa light up?</p>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-stone-200/50 text-center">
<p className="text-sm font-medium text-saffron-600 italic">"Your success story inspires us all!"</p>
</div>
</div>
</section>

<section className="flex justify-center w-full">
<div className="w-full">
<div className="cursor-pointer glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 border-dashed border-2 border-stone-300 hover:border-saffron-400" id="choco-trigger" onclick="revealChocolates()">
<iconify-icon className="text-stone-400 mb-2" icon="lucide:gift" width="28"></iconify-icon>
<p className="text-stone-600 font-medium">The Important Question...</p>
</div>
<div className="hidden opacity-0 transform translate-y-4 transition-all duration-500 mt-0" id="choco-content">
<div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 text-center shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<h3 className="text-xl font-medium text-saffron-100 mb-2 relative z-10">Did You Bring Chocolates? 🍫</h3>
<p className="text-xs text-stone-400 mb-6 relative z-10">The chocolate tax must be paid!</p>
<div className="flex justify-center gap-4 text-3xl animate-pulse-slow">
<span>🍫</span><span>🍬</span><span>🍪</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-center pb-12 pt-6">
<div className="relative inline-block">
<iconify-icon className="absolute -top-4 -left-6 text-saffron-400 opacity-50" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-stone-600 font-medium text-lg leading-relaxed">
                        Travel far, dream big, but remember<br/>
<span className="text-stone-800">Home</span> is where your story begins.
                    </p>
</div>
<div className="mt-8 flex justify-center items-center gap-2">
<span className="h-px w-8 bg-stone-300"></span>
<span className="text-xs text-stone-400 uppercase tracking-widest">Swagat</span>
<span className="h-px w-8 bg-stone-300"></span>
</div>
</section>
</main>
</div>




    </>
  );
}
