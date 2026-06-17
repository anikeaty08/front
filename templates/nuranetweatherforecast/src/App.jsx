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



        // --- Navigation Logic ---
        function navigateTo(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                // Smooth scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // --- Live Data & Theming Logic ---
        const CHANNEL_ID = '3205591';
        const API_KEY = 'PWMIH9UVQYMGUJ49';
        const REFRESH_RATE = 15000; // 15 seconds

        async function fetchWeatherData() {
            try {
                const response = await fetch(`https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds/last.json?api_key=${API_KEY}`);
                const data = await response.json();
                
                updateDashboard(data);
                updateTheme(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        function updateDashboard(data) {
            const temp = parseFloat(data.field1).toFixed(1) || '--';
            const hum = parseFloat(data.field2).toFixed(0) || '--';
            const press = parseFloat(data.field3).toFixed(0) || '--';
            const wind = parseFloat(data.field4).toFixed(1) || '--';
            const rainVal = parseFloat(data.field5); 
            const light = parseFloat(data.field6) || '--';

            document.getElementById('data-temp').innerText = temp;
            document.getElementById('data-hum').innerText = hum;
            document.getElementById('data-press').innerText = press;
            document.getElementById('data-wind').innerText = wind;
            document.getElementById('data-light').innerText = light;
            
            // Rain Logic
            let rainText = "Dry";
            let rainClass = "text-4xl font-medium tracking-tight text-white";
            
            if (rainVal > 0) {
                rainText = "Raining";
                rainClass = "text-4xl font-medium tracking-tight text-blue-400";
            }
            // Basic snow logic for display purposes if temp is freezing and moisture present
            if (parseFloat(temp) < 0 && parseFloat(hum) > 80) {
                rainText = "Snowing";
                rainClass = "text-4xl font-medium tracking-tight text-white";
            }

            const rainEl = document.getElementById('data-rain-text');
            rainEl.innerText = rainText;
            rainEl.className = rainClass;

            document.getElementById('last-updated').innerText = new Date().toLocaleTimeString();
        }

        function updateTheme(data) {
            const temp = parseFloat(data.field1);
            const rainVal = parseFloat(data.field5);
            const light = parseFloat(data.field6);
            
            const bg = document.getElementById('main-bg');
            const effects = document.getElementById('weather-effects');
            
            effects.innerHTML = ''; // Clear previous effects

            // Priority: Snow -> Rain -> Night -> Day
            if (temp < 0) {
                // Snow Theme
                bg.className = "fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-100 transition-colors duration-1000";
                createSnowflakes(effects);
            } else if (rainVal > 0) {
                // Rain Theme
                bg.className = "fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transition-colors duration-1000";
                createRain(effects);
            } else if (light < 50 && light >= 0) { 
                // Night Theme
                bg.className = "fixed inset-0 z-0 bg-slate-950 transition-colors duration-1000";
            } else {
                // Clear Day Theme (Standard)
                bg.className = "fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 transition-colors duration-1000";
            }
        }

        function createSnowflakes(container) {
            for (let i = 0; i < 40; i++) {
                const flake = document.createElement('div');
                flake.className = 'snowflake w-1 h-1 md:w-1.5 md:h-1.5 opacity-60';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 4) + 's';
                flake.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(flake);
            }
        }

        function createRain(container) {
            for (let i = 0; i < 80; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.style.left = Math.random() * 100 + 'vw';
                drop.style.animationDuration = (Math.random() * 0.3 + 0.5) + 's';
                drop.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(drop);
            }
        }

        // --- Form Handling ---
        function handleFormSubmit(e, type) {
            e.preventDefault();
            const modal = document.getElementById('success-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
            e.target.reset();
        }

        function closeModal() {
            const modal = document.getElementById('success-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Initialize
        fetchWeatherData();
        setInterval(fetchWeatherData, REFRESH_RATE);

    
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
      

<div className="fixed inset-0 z-0 bg-slate-950 transition-colors duration-1000" id="main-bg"></div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" id="weather-effects"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex items-center gap-3 cursor-pointer group" onclick="navigateTo('home')">
<img alt="Nura Net Logo" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5754a996-f431-4824-b207-3563b1a1ebfc_320w.png"/>
<div>
<h1 className="text-sm font-semibold tracking-tight leading-none text-white">Nura Net</h1>
<span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Weather Forecast</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-400">
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('home')">Home</button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('about')">About Us</button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('stations')">Stations</button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('research')">Research</button>
<button className="ml-2 pl-4 pr-4 py-2 flex items-center gap-2 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full border border-emerald-500/20 transition-all" onclick="navigateTo('live-data')">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Live Data
                </button>
<button className="px-4 py-2 hover:text-white transition-colors" onclick="navigateTo('contact')">Contact</button>
</div>

<button className="lg:hidden text-slate-300" onclick="toggleMobileMenu()">
<iconify-icon className="sweezy-custom-cursor-hover" height="24" icon="solar:hamburger-menu-linear" style={{cursor: 'url("data:image/png', color: 'rgb(203, 213, 225)'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 text-center absolute w-full top-16 left-0" id="mobile-menu">
<button className="py-2 text-slate-300" onclick="navigateTo('home')">Home</button>
<button className="py-2 text-slate-300" onclick="navigateTo('about')">About</button>
<button className="py-2 text-slate-300" onclick="navigateTo('stations')">Stations</button>
<button className="py-2 text-emerald-400 font-medium" onclick="navigateTo('live-data')">Live Data</button>
<button className="py-2 text-slate-300" onclick="navigateTo('contact')">Contact</button>
</div>
</nav>

<main className="relative z-10 pt-16 min-h-screen">

<section className="page-section min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden sweezy-custom-cursor-hover" id="home" style={{cursor: 'url("data:image/png'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="animate-float mb-8 relative z-10">
<img alt="Logo" className="sweezy-custom-cursor-hover opacity-90 w-auto h-24 drop-shadow-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/705be44c-79ef-47d9-8c68-a62dba45c940_800w.png" style={{cursor: 'url("data:image/png'}}/>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-[10px] font-medium tracking-wider mb-8 uppercase backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Official Meteorological Partner
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 max-w-5xl leading-[0.95] z-10">
                Weather Intelligence <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">For The Extremes.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light z-10">
                Deployment of autonomous weather stations and high-altitude research aircraft in the world's most hostile environments.
            </p>
<div className="flex flex-col sm:flex-row gap-3 w-full justify-center z-10">
<button className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-all" onclick="navigateTo('stations')">
                    Explore Stations <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 glass-card text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all" onclick="navigateTo('live-data')">
                    View Live Data <iconify-icon className="text-emerald-400" icon="solar:graph-new-linear" width="18"></iconify-icon>
</button>
</div>
</section>

<section className="page-section hidden py-24 px-6 max-w-7xl mx-auto" id="about">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">About Nura Net</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-sm">Innovation driven by passion for atmospheric science and technology.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wide">Founder</span>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Arsalan Reyaz</h3>
<div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed font-light">
<p>
                            Nura Net Weather Forecast is founded and developed by <strong className="text-slate-200 font-medium">Arsalan Reyaz</strong>, a young innovator and technology enthusiast from India with a strong interest in electronics, IoT, and smart weather systems. The organization focuses on delivering accurate, real-time, and localized weather data through reliable and user-friendly platforms.
                        </p>
<p>
                            Arsalan Reyaz is the founder of Nura Net Weather Forecast and also owns two other technology ventures, working across weather intelligence, space research, and advanced monitoring systems.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white">3</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Tech Ventures</span>
</div>
<div className="w-px bg-white/10 h-10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white">IoT</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Specialization</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4 text-purple-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide text-slate-300">Mentorship</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            This initiative has grown with the valuable guidance and mentorship of <span className="text-slate-200 font-medium">Saket Sir</span> and <span className="text-slate-200 font-medium">Aijaz Bhat</span>, whose technical insights and encouragement played a key role throughout development and deployment.
                        </p>
</div>

<div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4 text-emerald-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide text-slate-300">Gratitude</h4>
</div>
<div className="space-y-4 text-slate-400 text-sm leading-relaxed">
<p>
                                Special thanks to the <span className="text-slate-200 font-medium">Nura Net Team</span> for their continuous support during the setup, testing, and operation of weather stations and applications.
                            </p>
<div className="h-px bg-white/5 w-full"></div>
<p>
                                Heartfelt gratitude to family and parents for their constant motivation, belief, and support, which made this journey possible.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6 max-w-7xl mx-auto" id="stations">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Deployed Network</h2>
<p className="text-slate-400 text-sm max-w-md">Strategic sensor placement across varying altitudes to capture a complete atmospheric profile.</p>
</div>
<button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white transition-colors flex items-center gap-2" onclick="navigateTo('get-station')">
                    Request Installation <iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-1 hover:border-blue-500/30 group">
<div className="bg-slate-900/50 rounded-xl p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:mountains-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">ONLINE</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Karakoram Base I</h3>
<p className="text-xs text-slate-500 font-mono mb-4">ALT: 4,200m • LAT: 35.88° N</p>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">Primary glacial monitoring unit. Tracks ice sheet albedo and katabatic wind flows.</p>
<div className="flex items-center gap-3 text-slate-500 border-t border-white/5 pt-4 mt-auto">
<iconify-icon icon="solar:thermometer-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:wind-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:snowflake-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 hover:border-purple-500/30 group">
<div className="bg-slate-900/50 rounded-xl p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:cloud-rain-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">ONLINE</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Deosai Plains</h3>
<p className="text-xs text-slate-500 font-mono mb-4">ALT: 3,900m • LAT: 35.02° N</p>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">High-altitude plateau monitoring. Focus on sudden pressure drops and precipitation events.</p>
<div className="flex items-center gap-3 text-slate-500 border-t border-white/5 pt-4 mt-auto">
<iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:speedometer-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 hover:border-orange-500/30 group">
<div className="bg-slate-900/50 rounded-xl p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">ONLINE</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Urban Hub Alpha</h3>
<p className="text-xs text-slate-500 font-mono mb-4">ALT: 500m • LAT: 33.68° N</p>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">Dense urban network node analyzing heat island effects and AQI (Air Quality Index).</p>
<div className="flex items-center gap-3 text-slate-500 border-t border-white/5 pt-4 mt-auto">
<iconify-icon icon="solar:sun-2-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:fire-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6 max-w-7xl mx-auto" id="research">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Research Divisions</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-sm">Pushing the boundaries of atmospheric science with aerospace technology.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
<iconify-icon icon="solar:plane-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2">Low-Altitude Research Aircraft</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Nura Net utilizes specialized UAVs equipped with LiDAR and spectral sensors to map the atmospheric boundary layer. This data is crucial for analyzing local pollution dispersion and micro-burst prediction.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Boundary layer profiling
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Cloud condensation analysis
                            </li>
</ul>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:snowflake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2">High-Altitude Stations</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Engineered to withstand temperatures below -40°C and wind speeds exceeding 100 knots. Our units use redundant satellite uplinks to ensure data continuity during extreme blizzards.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Ruggedized ice-impact casing
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Methanol fuel cell power systems
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center" id="live-data">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-red-400 text-xs font-mono uppercase tracking-widest">Live Telemetry</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Real-Time Data Feed</h2>
</div>
<div className="text-right">
<p className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Last Synchronization</p>
<p className="text-sm text-slate-300 font-mono" id="last-updated">13:20:19</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Temperature</span>
<iconify-icon className="text-orange-400" icon="solar:thermometer-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-6xl font-light tracking-tighter text-white" id="data-temp">1.1</span>
<span className="text-xl text-slate-500 align-top ml-1">°C</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Humidity</span>
<iconify-icon className="text-cyan-400" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-6xl font-light tracking-tighter text-white" id="data-hum">95</span>
<span className="text-xl text-slate-500 align-top ml-1">%</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Pressure</span>
<iconify-icon className="text-purple-400" icon="solar:speedometer-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-6xl font-light tracking-tighter text-white" id="data-press">846</span>
<span className="text-xl text-slate-500 align-top ml-1">hPa</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Wind Speed</span>
<iconify-icon className="text-slate-300" icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-6xl font-light tracking-tighter text-white" id="data-wind">0.4</span>
<span className="text-xl text-slate-500 align-top ml-1">km/h</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 bg-gradient-to-br from-blue-900/10 to-transparent">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Condition</span>
<iconify-icon className="text-blue-400" icon="solar:cloud-rain-linear" width="24"></iconify-icon>
</div>
<div className="text-4xl font-medium tracking-tight text-white" id="data-rain-text">Dry</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Light</span>
<iconify-icon className="text-yellow-400" icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-5xl font-light tracking-tighter text-white" id="data-light">1</span>
<span className="text-lg text-slate-500 ml-1">lux</span>
</div>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1" href="https://nuracast.onhercules.app/" target="_blank">
                    Source: Primary Channel (ID 3205591) <iconify-icon icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</section>

<section className="page-section hidden py-24 px-6 max-w-3xl mx-auto" id="get-station">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold mb-2">Join The Network</h2>
<p className="text-slate-400 text-sm">Deploy a Nura Net station at your location to contribute to global weather intelligence.</p>
</div>
<form className="glass-panel p-8 md:p-10 rounded-3xl" id="station-form" onsubmit="handleFormSubmit(event, 'station')">
<div className="grid gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Email</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Phone</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Install Location</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" placeholder="City, Region, Approx Altitude" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Requirements</label>
<textarea className="input-base w-full rounded-lg p-3 text-white text-sm" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-blue-900/20" type="submit">
                        Submit Request
                    </button>
</div>
</form>
</section>

<section className="page-section hidden py-24 px-6 max-w-6xl mx-auto" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Let's Collaborate</h2>
<p className="text-lg text-slate-400 mb-10 font-light max-w-md">
                         We are always looking to partner with research institutions, governments, and private entities.
                     </p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="p-3 bg-slate-900 rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Headquarters</div>
<div className="text-white font-medium">Asia Pacific Research Center</div>
<div className="text-slate-400 text-sm">Sector H, Tech District</div>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-slate-900 rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-blue-400" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Email</div>
<div className="text-white font-medium">contact@nuranetweather.com</div>
<div className="text-slate-400 text-sm">Response time: 24hrs</div>
</div>
</div>
</div>
</div>

<form className="glass-panel p-8 rounded-3xl" id="contact-form" onsubmit="handleFormSubmit(event, 'contact')">
<div className="grid gap-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Name</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Email</label>
<input className="input-base w-full rounded-lg p-3 text-white text-sm" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Message</label>
<textarea className="input-base w-full rounded-lg p-3 text-white text-sm" required="" rows="5"></textarea>
</div>
<button className="w-full py-3 bg-white text-slate-950 hover:bg-slate-200 rounded-lg font-medium text-sm transition-colors" type="submit">
                            Send Message
                        </button>
</div>
</form>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-white/5 bg-slate-950 py-12 px-6 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2 opacity-80">
<img alt="Logo" className="h-6 w-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c53d986-44d0-49cc-80e3-6c6556a7218f_800w.png"/>
<span className="font-semibold text-white text-sm">Nura Net</span>
</div>
<p className="text-xs text-slate-600">© 2024 Nura Net Weather Forecast. All rights reserved.</p>
<p className="text-[10px] text-slate-700 mt-1">Founder: Arsalan Reyaz</p>
</div>
<div className="flex gap-6 text-slate-500 text-xs font-medium">
<button className="hover:text-white transition-colors" onclick="navigateTo('home')">Home</button>
<button className="hover:text-white transition-colors" onclick="navigateTo('research')">Research</button>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="success-modal">
<div className="glass-panel p-8 rounded-2xl text-center max-w-sm border border-emerald-500/30">
<div className="mx-auto w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Request Received</h3>
<p className="text-slate-400 mb-6 text-sm">We will review your submission and contact you shortly.</p>
<button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors" onclick="closeModal()">Close</button>
</div>
</div>


    </>
  );
}
