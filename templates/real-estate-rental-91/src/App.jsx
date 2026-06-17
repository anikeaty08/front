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



        // Init Icons
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

        // State
        let state = {
            loggedIn: false,
            isPremium: false,
            avatarSeed: 'Felix',
            history: ['view-explore'],
            mapInitialized: false,
            mapInstance: null,
            riveInstance: null
        };

        // --- Rive Initialization ---
        function initRive() {
            try {
                // Initialize Rive
                state.riveInstance = new rive.Rive({
                    src: 'https://jolly-cajeta-e6ef11.netlify.app/10873-20815-search-bar.riv',
                    canvas: document.getElementById('rive-search-bar'),
                    autoplay: true,
                    stateMachines: 'State Machine 1', // Default State Machine
                    layout: new rive.Layout({
                        fit: rive.Fit.Cover, // Ensure it fills the height
                        alignment: rive.Alignment.Center
                    }),
                    onLoad: () => {
                        state.riveInstance.resizeDrawingSurfaceToCanvas();
                        // Trigger a resize to ensure it fits correctly on load
                        window.dispatchEvent(new Event('resize'));
                    }
                });

                // Window Resize Handler for Rive
                window.addEventListener('resize', () => {
                    if (state.riveInstance) {
                        state.riveInstance.resizeDrawingSurfaceToCanvas();
                    }
                });

                // Optional: Connect Overlay Input to Rive Inputs (if available in file)
                // Since we use the default state machine, mouse events on the canvas (triggered via bubble-through)
                // usually handle "Hover". For "Focus", we can manually trigger if needed.
                const input = document.getElementById('search-input-overlay');
                const canvas = document.getElementById('rive-search-bar');
                
                // Pass pointer events from overlay to canvas for hover effects
                // Note: The input covers the canvas, so direct mouse events might be blocked. 
                // However, user asked for "Interactive Rive". If standard events fail, 
                // the visuals might be static. 
                // To allow clicking to type AND Rive hover, we keep the input opacity 0 but pointer-events: auto.
                // Rive interactions might be limited if input blocks mouse, but typing is preserved.

            } catch (e) {
                console.error("Rive failed to load:", e);
                // Fallback to a standard input style if Rive crashes (CSS fallback logic in head if needed)
            }
        }
        
        // Load Rive immediately
        if (typeof rive !== 'undefined') {
            initRive();
        } else {
            // Wait for script load
            window.addEventListener('load', initRive);
        }

        // --- Router ---
        function navigateTo(viewId) {
            window.scrollTo(0,0);
            
            // Hide all
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => { if(!el.classList.contains('active')) el.style.display = 'none'; }, 200);
            });

            // Show target
            const target = document.getElementById(viewId);
            target.style.display = (viewId === 'view-login' || viewId === 'view-complete-profile') ? 'flex' : (viewId === 'view-map' ? 'flex' : 'block');
            setTimeout(() => target.classList.add('active'), 10);

            // Special actions
            if(viewId === 'view-map') initMap();

            // History management
            if (state.history[state.history.length - 1] !== viewId) {
                state.history.push(viewId);
            }
        }

        function goBack() {
            if (state.history.length > 1) {
                state.history.pop();
                navigateTo(state.history[state.history.length - 1]);
            } else {
                navigateTo('view-explore');
            }
        }

        // --- Mapbox Logic ---
        function initMap() {
            if (state.mapInitialized) return;
            
            // NOTE: Replace with your actual Token
            mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2x5ZW5jbG4wMGR2djJpc2V6dW1tZ3Z6ZSJ9.111'; 

            try {
                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/light-v11',
                    center: [77.6101, 12.9538], // Central Bangalore
                    zoom: 12
                });

                state.mapInstance = map;
                state.mapInitialized = true;

                // Add Listings as Markers
                const listings = [
                    { lng: 77.6412, lat: 12.9716, title: 'Indiranagar, Stage 2', sub: 'Near 12th Main', badge: '2 BHK' },
                    { lng: 77.6245, lat: 12.9352, title: 'Koramangala 4th Block', sub: 'Opposite Sony Signal', badge: '1 RK' }
                ];

                listings.forEach(loc => {
                    // Custom Marker Element
                    const el = document.createElement('div');
                    el.className = 'custom-marker';
                    el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';

                    el.addEventListener('click', () => {
                        showMapCard(loc);
                        map.flyTo({ center: [loc.lng, loc.lat], zoom: 14 });
                    });

                    new mapboxgl.Marker(el)
                        .setLngLat([loc.lng, loc.lat])
                        .addTo(map);
                });

            } catch (e) {
                console.log("Mapbox error (likely missing token):", e);
            }
        }

        function showMapCard(data) {
            const card = document.getElementById('map-preview-card');
            document.getElementById('map-card-title').innerText = data.title;
            document.getElementById('map-card-sub').innerText = data.sub;
            document.getElementById('map-card-badge').innerText = data.badge;
            
            card.classList.remove('translate-y-[150%]');
        }

        function closeMapCard() {
            document.getElementById('map-preview-card').classList.add('translate-y-[150%]');
        }

        // --- Auth Logic ---
        function loginUser() {
            navigateTo('view-complete-profile');
        }
        
        function finishProfileSetup(e) {
            e.preventDefault();
            state.loggedIn = true;
            document.getElementById('nav-logged-out').classList.add('hidden');
            document.getElementById('nav-logged-in').classList.remove('hidden');
            document.getElementById('nav-logged-in').classList.add('flex');
            navigateTo('view-explore');
        }

        function logoutUser() {
            state.loggedIn = false;
            document.getElementById('nav-logged-out').classList.remove('hidden');
            document.getElementById('nav-logged-in').classList.add('hidden');
            navigateTo('view-explore');
        }

        // --- Feature Logic ---
        function checkPremiumAndNavigate(geoLink) {
            if (state.isPremium) {
                window.location.href = geoLink;
            } else {
                alert("🔒 Premium Feature\nUpgrade to get exact directions and map navigation.");
            }
        }

        function openPremiumModal() {
            alert("💎 Premium Plan\n₹49/week or ₹99/month.\n\nBenefits:\n- Exact Location\n- Directions\n- Save Posts");
        }

        function startUploadFlow() {
            if (!state.loggedIn) {
                navigateTo('view-login');
                return;
            }
            document.getElementById('upload-rules').style.display = 'block';
            document.getElementById('upload-camera').style.display = 'none';
            document.getElementById('upload-form').style.display = 'none';
            navigateTo('view-upload');
        }

        function capturePhoto() {
            document.getElementById('upload-camera').style.display = 'none';
            document.getElementById('upload-form').style.display = 'block';
        }

        function submitUpload(e) {
            e.preventDefault();
            alert("Upload Submitted! Status: Under Review");
            navigateTo('view-my-uploads');
        }

        function updateAvatar(seed) {
            state.avatarSeed = seed;
            const url = `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`;
            document.getElementById('user-avatar-img').src = url;
            document.getElementById('dashboard-avatar').src = url;
        }

        // Initial setup
        document.querySelectorAll('.view-section').forEach(el => {
            if(!el.classList.contains('active')) el.style.display = 'none';
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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-grain opacity-40 mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between gap-3">

<div className="flex items-center gap-3 md:gap-4 shrink-0">

<a className="cursor-pointer group flex items-center transform transition-transform hover:scale-105 duration-300" onclick="navigateTo('view-explore')">
<div className="relative bg-stone-900 text-white px-1.5 py-0.5 transform -rotate-2 shadow-sm">
<span className="font-black text-sm tracking-tighter font-sans">TOO</span>
</div>
<div className="relative bg-stone-900 text-white px-1.5 py-0.5 transform rotate-2 -ml-0.5 mt-0.5 shadow-sm">
<span className="font-black text-sm tracking-tighter font-sans">LET</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 cursor-pointer hover:bg-stone-100 px-2 py-1 rounded-lg transition-colors">
<i className="w-3.5 h-3.5 text-orange-600" data-lucide="map-pin"></i>
<span className="text-xs font-semibold text-stone-900">Bangalore</span>
<i className="w-3 h-3 text-stone-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex-1 max-w-[280px] md:max-w-xs relative flex items-center justify-center">

<div className="relative w-full h-[56px] overflow-hidden rounded-full flex items-center">
<canvas className="w-full h-full block cursor-text" id="rive-search-bar"></canvas>

<input aria-label="Search" className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-text" id="search-input-overlay" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2 md:gap-3 shrink-0">

<div className="flex items-center gap-2" id="nav-logged-out">
<button className="text-xs font-semibold text-stone-600 hover:text-stone-900" onclick="navigateTo('view-login')">Log in</button>
</div>

<div className="hidden flex items-center gap-3" id="nav-logged-in">

<button className="hidden md:flex items-center gap-1 bg-gradient-to-r from-amber-100 to-yellow-50 border border-yellow-200 px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-all" onclick="openPremiumModal()">
<i className="w-3 h-3 text-amber-600 fill-amber-600" data-lucide="crown"></i>
<span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">Premium</span>
</button>

<button className="relative p-1.5 hover:bg-stone-100 rounded-full transition-colors" onclick="navigateTo('view-credits')">
<i className="w-4 h-4 text-stone-600" data-lucide="wallet"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
</button>

<button className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all hover:scale-105" onclick="navigateTo('view-dashboard')">
<img alt="user" className="w-full h-full object-cover bg-stone-100" id="user-avatar-img" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-16 max-w-2xl mx-auto min-h-screen relative">

<section className="view-section active pb-20 relative" id="view-explore">

<div className="sticky top-16 z-30 bg-[#FDFCF8]/95 backdrop-blur-sm pt-3 pb-2 border-b border-stone-200/50 px-4">

<div className="md:hidden flex items-center gap-1.5 mb-3 text-stone-900" onclick="alert('Change City Feature')">
<i className="w-3.5 h-3.5 text-orange-600" data-lucide="map-pin"></i>
<span className="text-sm font-bold">Bangalore</span>
<i className="w-3 h-3 text-stone-400" data-lucide="chevron-down"></i>
</div>

<div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 snap-x">
<button className="snap-start flex items-center gap-1 px-3 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium border border-stone-900 whitespace-nowrap shadow-sm">
<i className="w-3 h-3" data-lucide="sliders-horizontal"></i> All
                    </button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">1 RK</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">1 BHK</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">2 BHK</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">Family</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">Rent &lt; ₹15k</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">&lt; 3km</button>
</div>
</div>

<div className="px-4 py-4 space-y-6">

<div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">

<div className="relative aspect-[4/3] bg-stone-100 cursor-pointer" onclick="navigateTo('view-detail')">

<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="bg-[#fff9e6] w-full h-full shadow-lg transform rotate-1 border border-stone-300 p-4 flex flex-col items-center justify-center text-center">
<span className="text-red-600 font-black text-3xl tracking-tighter border-b-2 border-stone-800 pb-1 mb-2">TO-LET</span>
<span className="text-stone-900 font-bold text-sm uppercase leading-tight">2 BHK, 1st Floor<br/>Parking<br/>9900...</span>
</div>
</div>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-stone-100">
                            2 days ago
                        </div>
<div className="absolute bottom-3 left-3 bg-stone-900/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="image"></i> 1 Photo
                        </div>
</div>

<div className="p-4">
<div className="flex justify-between items-start mb-2">
<div className="cursor-pointer" onclick="navigateTo('view-detail')">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase tracking-wide">2 BHK</span>
<span className="px-1.5 py-0.5 rounded bg-orange-50 text-[10px] font-bold text-orange-700 uppercase tracking-wide">For Rent</span>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 leading-tight group-hover:underline decoration-stone-300 underline-offset-2">Indiranagar, Stage 2</h3>
<p className="text-xs text-stone-500 mt-0.5">Near 12th Main Road</p>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
<a className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-xs font-bold hover:bg-green-100 transition-colors" href="tel:9845012345">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Call Owner
                            </a>

<button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-400 text-xs font-bold hover:bg-stone-50 transition-colors" onclick="checkPremiumAndNavigate('geo:12.9716,77.5946')">
<i className="w-3.5 h-3.5" data-lucide="lock"></i> Get Directions
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative aspect-[4/3] bg-stone-100 cursor-pointer" onclick="navigateTo('view-detail')">
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="bg-white w-full h-full shadow-lg transform -rotate-1 border border-stone-300 p-4 flex flex-col items-center justify-center text-center">
<span className="text-blue-700 font-black text-3xl tracking-tighter mb-2">RENT</span>
<span className="text-stone-900 font-bold text-sm uppercase leading-tight">1 RK<br/>Koramangala<br/>Bachelors</span>
</div>
</div>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-stone-100">
                            4 hrs ago
                        </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<div className="cursor-pointer" onclick="navigateTo('view-detail')">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase tracking-wide">1 RK</span>
<span className="px-1.5 py-0.5 rounded bg-orange-50 text-[10px] font-bold text-orange-700 uppercase tracking-wide">For Rent</span>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 leading-tight group-hover:underline decoration-stone-300 underline-offset-2">Koramangala 4th Block</h3>
<p className="text-xs text-stone-500 mt-0.5">Opposite Sony Signal</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<a className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-xs font-bold hover:bg-green-100 transition-colors" href="tel:9900223344">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Call Owner
                            </a>

<button className="premium-btn flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors shadow-sm" onclick="checkPremiumAndNavigate('geo:12.9352,77.6245')">
<i className="w-3.5 h-3.5" data-lucide="navigation"></i> Get Directions
                            </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
<button className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full shadow-xl shadow-stone-900/20 flex items-center gap-2 font-medium text-xs tracking-wide transform hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/20" onclick="navigateTo('view-map')">
<i className="w-3.5 h-3.5" data-lucide="map"></i> Map View
                </button>
</div>
</section>

<section className="view-section fixed inset-0 z-50 bg-stone-100 flex flex-col" id="view-map">

<div className="w-full h-full relative" id="map">

<div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-0">
<p className="text-stone-400 text-xs">Loading Mapbox...</p>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
<button className="bg-white text-stone-900 border border-stone-200 px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 font-medium text-xs tracking-wide hover:scale-105 active:scale-95 transition-all duration-300" onclick="navigateTo('view-explore')">
<i className="w-3.5 h-3.5" data-lucide="list"></i> List View
                </button>
</div>

<div className="absolute bottom-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-96 bg-white rounded-2xl shadow-2xl p-3 border border-stone-100 transform translate-y-[150%] transition-transform duration-300 z-20" id="map-preview-card">
<div className="flex gap-3">
<div className="w-20 h-20 bg-stone-100 rounded-lg shrink-0 overflow-hidden relative" onclick="navigateTo('view-detail')">

<div className="absolute inset-0 flex items-center justify-center p-1">
<div className="bg-[#fff9e6] w-full h-full border border-stone-200 flex items-center justify-center">
<span className="text-[8px] font-black text-red-600">TO-LET</span>
</div>
</div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center cursor-pointer" onclick="navigateTo('view-detail')">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase tracking-wide" id="map-card-badge">2 BHK</span>
<span className="text-[10px] text-stone-400 font-medium">₹15k/mo</span>
</div>
<h3 className="font-serif text-lg font-medium text-stone-900 truncate" id="map-card-title">Indiranagar, Stage 2</h3>
<p className="text-xs text-stone-500 truncate" id="map-card-sub">Near 12th Main Road</p>
</div>
<button className="self-start text-stone-400 p-1 hover:text-stone-900" onclick="closeMapCard()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
</section>

<section className="view-section fixed inset-0 z-50 bg-[#FDFCF8] flex items-center justify-center p-4 min-h-screen w-full" id="view-login">
<div className="w-full max-w-sm">
<button className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors" onclick="navigateTo('view-explore')">
<i className="w-6 h-6 text-stone-400" data-lucide="x"></i>
</button>
<div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-stone-100 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800"></div>
<div className="w-16 h-16 bg-stone-50 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-stone-100 rotate-3 shadow-sm">
<i className="w-8 h-8 text-stone-900" data-lucide="fingerprint"></i>
</div>
<h2 className="text-3xl font-serif text-stone-900 mb-3">Welcome Back</h2>
<p className="text-stone-500 text-sm mb-8 leading-relaxed px-4">Sign in to verify posters, earn credits, and access owner details.</p>
<button className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 font-medium py-3.5 rounded-xl transition-all mb-4 shadow-sm group" onclick="loginUser()">
<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                        Continue with Google
                    </button>
<p className="text-[10px] text-stone-400 mt-6">By continuing, you agree to our Terms.</p>
</div>
</div>
</section>

<section className="view-section fixed inset-0 z-50 bg-[#FDFCF8] flex items-center justify-center p-4 min-h-screen w-full" id="view-complete-profile">
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 p-6 md:p-8 relative overflow-hidden">
<div className="text-center mb-8">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-100">
<i className="w-6 h-6 text-stone-900" data-lucide="user-plus"></i>
</div>
<h2 className="text-2xl font-serif text-stone-900 mb-2">Complete Profile</h2>
<p className="text-xs text-stone-500">Just a few details to set up your account.</p>
</div>
<form className="space-y-5" onsubmit="finishProfileSetup(event)">
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Full Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-400 font-medium" placeholder="e.g. Arjun Kumar" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Email</label>
<div className="relative">
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-3 text-sm text-stone-500 cursor-not-allowed font-mono" disabled="" type="email" value="arjun@example.com"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" data-lucide="lock"></i>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">City</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm appearance-none focus:ring-2 focus:ring-stone-900 outline-none font-medium text-stone-800">
<option>Bangalore</option>
<option>Mumbai</option>
<option>Delhi</option>
<option>Hyderabad</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-2.5">I am here to...</label>
<div className="grid grid-cols-1 gap-2.5">
<label className="relative">
<input checked="" className="custom-radio-card sr-only" name="role" type="radio"/>
<div className="border border-stone-200 p-3.5 rounded-xl cursor-pointer hover:border-stone-400 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-orange-50 rounded-lg text-orange-600"><i className="w-4 h-4" data-lucide="search"></i></div>
<span className="text-sm font-semibold text-stone-700">Find a property</span>
</div>
<div className="radio-circle w-4 h-4 rounded-full border border-stone-300"></div>
</div>
</label>
<label className="relative">
<input className="custom-radio-card sr-only" name="role" type="radio"/>
<div className="border border-stone-200 p-3.5 rounded-xl cursor-pointer hover:border-stone-400 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-blue-50 rounded-lg text-blue-600"><i className="w-4 h-4" data-lucide="camera"></i></div>
<span className="text-sm font-semibold text-stone-700">Upload posters</span>
</div>
<div className="radio-circle w-4 h-4 rounded-full border border-stone-300"></div>
</div>
</label>
<label className="relative">
<input className="custom-radio-card sr-only" name="role" type="radio"/>
<div className="border border-stone-200 p-3.5 rounded-xl cursor-pointer hover:border-stone-400 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-stone-100 rounded-lg text-stone-600"><i className="w-4 h-4" data-lucide="layers"></i></div>
<span className="text-sm font-semibold text-stone-700">Both</span>
</div>
<div className="radio-circle w-4 h-4 rounded-full border border-stone-300"></div>
</div>
</label>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Phone Number <span className="normal-case font-medium text-stone-300 ml-1">(Optional)</span></label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-300 font-mono" placeholder="+91" type="tel"/>
</div>
<button className="w-full bg-stone-900 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:bg-stone-800 transition-all mt-4 flex items-center justify-center gap-2" type="submit">
                        Complete Setup <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>

<section className="view-section pb-24" id="view-detail">
<div className="sticky top-16 z-20 bg-[#FDFCF8]/95 backdrop-blur py-3 px-4 border-b border-stone-200/50 flex items-center justify-between">
<button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900" onclick="goBack()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
                </button>
<button className="text-stone-400 hover:text-stone-900" onclick="alert('Saved to favorites (Premium)')">
<i className="w-5 h-5" data-lucide="bookmark"></i>
</button>
</div>
<div className="px-4 py-6">
<div className="relative bg-stone-100 rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-6 border border-stone-200 shadow-inner">
<div className="bg-[#FFFBF0] w-[85%] aspect-[3/4] shadow-2xl transform rotate-1 border-4 border-stone-300 p-6 flex flex-col items-center justify-center text-center">
<div className="w-2 h-2 rounded-full bg-stone-300 mb-4 mx-auto shadow-inner"></div>
<span className="text-red-600 font-black text-3xl tracking-tighter border-b-2 border-stone-800 pb-1 mb-3 block">TO-LET</span>
<span className="text-stone-900 font-bold text-sm uppercase leading-relaxed font-sans">
                             2 BHK<br/>Ground Floor<br/>Parking<br/>9845012345
                         </span>
</div>
<div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
<span className="text-[10px] font-bold uppercase tracking-wide">Verified</span>
</div>
</div>
<h1 className="text-3xl font-serif text-stone-900 leading-none mb-2">2 BHK Independent Floor</h1>
<p className="text-stone-500 text-sm mb-6 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Indiranagar, Stage 2
                </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 rounded-lg bg-stone-100 text-xs font-semibold text-stone-700">2 BHK</span>
<span className="px-3 py-1.5 rounded-lg bg-stone-100 text-xs font-semibold text-stone-700">Ground Floor</span>
<span className="px-3 py-1.5 rounded-lg bg-green-50 text-xs font-semibold text-green-700">Available Immediately</span>
</div>
<div className="bg-stone-50 border border-stone-100 rounded-xl p-4 mb-8 flex gap-3">
<div className="shrink-0 pt-0.5">
<i className="w-4 h-4 text-stone-900" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs font-bold text-stone-900 mb-0.5">Manually Verified by TooLet</p>
<p className="text-[10px] text-stone-500 leading-relaxed">
                            No brokers. This is a direct owner listing verified on <span className="font-medium">Oct 24th</span>.
                        </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all" href="tel:9845012345">
<i className="w-4 h-4" data-lucide="phone"></i> Call Owner
                    </a>
<button className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-stone-900 text-white text-sm font-bold shadow-lg hover:bg-stone-800 transition-all" onclick="checkPremiumAndNavigate('geo:12.9716,77.5946')">
<i className="w-4 h-4" data-lucide="navigation"></i> Directions
                    </button>
</div>
<div className="mt-8 text-center">
<button className="text-[10px] text-stone-400 font-medium hover:text-red-500 transition-colors flex items-center justify-center gap-1 mx-auto" onclick="alert('Report submitted for review.')">
<i className="w-3 h-3" data-lucide="flag"></i> Report this property
                    </button>
</div>
</div>
</section>

<section className="view-section pb-24" id="view-dashboard">
<div className="px-4 py-6 bg-white border-b border-stone-100">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full overflow-hidden border border-stone-200">
<img alt="user" className="w-full h-full object-cover" id="dashboard-avatar" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div>
<h1 className="text-2xl font-serif text-stone-900">Hello, Arjun</h1>
<p className="text-xs text-stone-500 font-medium cursor-pointer hover:underline" onclick="navigateTo('view-profile')">View Profile</p>
</div>
</div>
</div>
<div className="p-4 space-y-6">
<div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl cursor-pointer group" onclick="navigateTo('view-credits')">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Balance</p>
<p className="text-4xl font-serif">250 <span className="text-sm font-sans text-stone-400 font-normal">Credits</span></p>
</div>
<i className="text-stone-500 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
<h2 className="text-sm font-bold text-stone-900 uppercase tracking-wide">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
<button className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left group" onclick="startUploadFlow()">
<div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-900" data-lucide="camera"></i>
</div>
<p className="font-medium text-stone-900">Upload Poster</p>
<p className="text-[10px] text-stone-400 mt-1">Earn 50 Credits</p>
</button>
<button className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left group" onclick="navigateTo('view-my-uploads')">
<div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-900" data-lucide="folder-open"></i>
</div>
<p className="font-medium text-stone-900">My Uploads</p>
<p className="text-[10px] text-stone-400 mt-1">Track Status</p>
</button>
</div>
</div>
</section>

<section className="view-section fixed inset-0 z-50 bg-[#FDFCF8] overflow-y-auto" id="view-upload">
<div className="sticky top-0 bg-[#FDFCF8]/95 backdrop-blur z-10 px-4 py-4 flex items-center justify-between border-b border-stone-200/50">
<h2 className="font-serif text-xl">Upload Poster</h2>
<button className="text-stone-500 hover:text-stone-900" onclick="navigateTo('view-dashboard')">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="p-6 max-w-lg mx-auto" id="upload-rules">
<h3 className="font-medium text-lg mb-4">Before you start</h3>
<div className="space-y-4 mb-8">
<div className="flex gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
<i className="w-5 h-5 text-green-600 shrink-0" data-lucide="check-circle"></i>
<div className="text-sm text-stone-700">
<span className="font-bold block mb-1 text-green-800">Allowed ✅</span>
                            Real TO-LET posters fixed on buildings. Must show contact number clearly.
                        </div>
</div>
<div className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="x-circle"></i>
<div className="text-sm text-stone-700">
<span className="font-bold block mb-1 text-red-800">Not Allowed ❌</span>
                            Old screenshots, WhatsApp forwards, random buildings, or digital ads.
                        </div>
</div>
</div>
<div className="text-center">
<button className="w-full bg-stone-900 text-white font-medium py-3.5 rounded-xl shadow-lg hover:bg-stone-800 transition-all" onclick="document.getElementById('upload-rules').style.display='none'; document.getElementById('upload-camera').style.display='block';">
                        I Understand, Open Camera
                    </button>
<p className="text-[10px] text-stone-400 mt-3">Max 5 uploads per day.</p>
</div>
</div>
<div className="hidden h-[calc(100vh-80px)] relative bg-black" id="upload-camera">
<div className="absolute inset-0 flex items-center justify-center">
<p className="text-white/50 text-sm">Camera Preview</p>
</div>
<button className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center" onclick="capturePhoto()">
<div className="w-14 h-14 bg-white rounded-full active:scale-90 transition-transform"></div>
</button>
<div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
<i className="w-3 h-3 text-green-400" data-lucide="map-pin"></i> GPS Active
                </div>
</div>
<div className="hidden p-4 pb-20 max-w-lg mx-auto" id="upload-form">
<div className="h-48 bg-stone-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-stone-800/10"></div>
<span className="text-xs font-mono text-stone-500">Captured Image</span>
</div>
<form className="space-y-6" onsubmit="submitUpload(event)">
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-2">Phone Number on Poster <span className="text-red-500">*</span></label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 font-mono text-stone-900 focus:ring-2 focus:ring-stone-900 outline-none" placeholder="Enter 10 digit number" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-2">Available For <span className="text-red-500">*</span></label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio sr-only" name="avail" type="radio"/>
<div className="border border-stone-200 rounded-xl py-3 text-center text-sm font-medium text-stone-600 transition-colors">Rent</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="avail" type="radio"/>
<div className="border border-stone-200 rounded-xl py-3 text-center text-sm font-medium text-stone-600 transition-colors">Sale</div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-2">Property Type <span className="text-red-500">*</span></label>
<div className="flex gap-2 overflow-x-auto pb-2">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-stone-200 rounded-lg px-4 py-2 text-sm font-medium text-stone-600 whitespace-nowrap">1 RK</div>
</label>
<label className="cursor-pointer">
<input checked="" className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-stone-200 rounded-lg px-4 py-2 text-sm font-medium text-stone-600 whitespace-nowrap">1 BHK</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-stone-200 rounded-lg px-4 py-2 text-sm font-medium text-stone-600 whitespace-nowrap">2 BHK</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-stone-200 rounded-lg px-4 py-2 text-sm font-medium text-stone-600 whitespace-nowrap">3 BHK</div>
</label>
</div>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-3.5 rounded-xl shadow-lg hover:bg-stone-800 transition-all" type="submit">
                         Submit for Review
                     </button>
</form>
</div>
</section>

<section className="view-section pb-20" id="view-my-uploads">
<div className="px-4 py-4 flex items-center gap-2 mb-4 border-b border-stone-100">
<button className="p-1 -ml-1" onclick="navigateTo('view-dashboard')"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="text-xl font-medium">My Uploads</h1>
</div>
<div className="px-4 space-y-4">
<div className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm">
<div className="w-16 h-16 bg-stone-100 rounded-xl shrink-0"></div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-bold rounded border border-orange-100 uppercase">Pending</span>
<span className="text-[10px] text-stone-400">Today</span>
</div>
<p className="text-sm font-medium text-stone-900">HSR Layout, Sector 4</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm">
<div className="w-16 h-16 bg-stone-100 rounded-xl shrink-0"></div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-100 uppercase">Verified</span>
<span className="text-[10px] text-green-600 font-bold">+50 Credits</span>
</div>
<p className="text-sm font-medium text-stone-900">Indiranagar 12th Main</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm opacity-70">
<div className="w-16 h-16 bg-stone-100 rounded-xl shrink-0 grayscale"></div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold rounded border border-stone-200 uppercase">Rejected</span>
</div>
<p className="text-sm font-medium text-stone-500">Duplicate Listing</p>
</div>
</div>
</div>
</section>

<section className="view-section pb-20" id="view-profile">
<div className="px-4 py-4 flex items-center gap-2 mb-4">
<button className="p-1 -ml-1" onclick="navigateTo('view-dashboard')"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="text-xl font-medium">Profile</h1>
</div>
<div className="px-4">
<p className="text-xs font-bold uppercase text-stone-500 mb-3">Choose Avatar</p>
<div className="grid grid-cols-4 gap-4 mb-8">
<button className="aspect-square rounded-full border border-stone-200 overflow-hidden hover:ring-2 hover:ring-stone-900 focus:ring-2" onclick="updateAvatar('Felix')">
<img className="w-full h-full bg-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</button>
<button className="aspect-square rounded-full border border-stone-200 overflow-hidden hover:ring-2 hover:ring-stone-900 focus:ring-2" onclick="updateAvatar('Aneka')">
<img className="w-full h-full bg-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka"/>
</button>
<button className="aspect-square rounded-full border border-stone-200 overflow-hidden hover:ring-2 hover:ring-stone-900 focus:ring-2" onclick="updateAvatar('Milo')">
<img className="w-full h-full bg-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Milo"/>
</button>
<button className="aspect-square rounded-full border border-stone-200 overflow-hidden hover:ring-2 hover:ring-stone-900 focus:ring-2" onclick="updateAvatar('Bella')">
<img className="w-full h-full bg-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Bella"/>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-1">Email</label>
<div className="p-3 bg-stone-100 rounded-xl text-stone-500 text-sm">arjun@example.com <span className="float-right text-xs pt-0.5 opacity-50"><i className="w-3 h-3 inline" data-lucide="lock"></i></span></div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-1">Phone</label>
<div className="p-3 bg-white border border-stone-200 rounded-xl text-stone-900 text-sm flex justify-between">
                            +91 99801 11223
                            <span className="text-xs text-stone-400">Verified</span>
</div>
</div>
</div>
<button className="w-full mt-12 py-3 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors" onclick="logoutUser()">
                    Log Out
                </button>
</div>
</section>

<section className="view-section p-4" id="view-credits">
<button className="mb-4" onclick="navigateTo('view-dashboard')"><i className="w-6 h-6" data-lucide="arrow-left"></i></button>
<h1 className="text-3xl font-serif mb-4">Credits</h1>
<div className="bg-stone-900 text-white rounded-3xl p-8 mb-4">
<h2 className="text-5xl font-serif mb-2">250</h2>
<p className="text-sm text-stone-400">Available Balance</p>
</div>
<p className="text-xs text-stone-500 bg-stone-100 p-3 rounded-xl">
<i className="w-3 h-3 inline mr-1" data-lucide="info"></i> Credits can be redeemed for vouchers. No cash withdrawals.
             </p>
</section>
</main>


    </>
  );
}
