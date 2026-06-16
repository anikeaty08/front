import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            /* -------------------------------------
               FRONT-END LOGIC
            -------------------------------------- */
            const searchBtn = document.getElementById('search-btn');
            const searchForm = document.getElementById('search-form');
            const searchResults = document.getElementById('search-results');
            const resultsList = document.getElementById('results-list');
            const resetBtn = document.getElementById('reset-btn');

            // Mock Database (Simulating a Backend DB)
            const mockDatabase = [
                { id: 1, name: "The Rustic Grill", cuisine: "American • Burgers", time: "20-30 min", rating: "4.8" },
                { id: 2, name: "Neon Sushi Bar", cuisine: "Japanese • Seafood", time: "35-45 min", rating: "4.9" },
                { id: 3, name: "Spice Route", cuisine: "Indian • Curries", time: "25-40 min", rating: "4.6" },
                { id: 4, name: "Napoli Pizza", cuisine: "Italian • Pizza", time: "15-25 min", rating: "4.7" },
                { id: 5, name: "Green Bowl", cuisine: "Healthy • Salads", time: "10-20 min", rating: "4.5" }
            ];

            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const originalText = searchBtn.innerHTML;
                
                // Simulate Network Latency
                searchBtn.innerHTML = `
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Querying Server...
                `;
                searchBtn.disabled = true;

                // Push log to Backend View
                addLog('INFO', 'GET /api/v1/search?location=Downtown&express=true', 'neutral-300');
                
                setTimeout(() => {
                    searchForm.classList.add('hidden');
                    searchResults.classList.remove('hidden');
                    
                    // Render Database Results to DOM
                    resultsList.innerHTML = mockDatabase.map(item => `
                        <div class="flex items-center justify-between p-3 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div>
                                <h4 class="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">${item.name}</h4>
                                <p class="text-xs text-neutral-500 mt-0.5">${item.cuisine}</p>
                                <p class="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                                    <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    ${item.time}
                                </p>
                            </div>
                            <div class="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
                                <span class="text-xs font-semibold">${item.rating}</span>
                                <iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
                            </div>
                        </div>
                    `).join('');
                    
                    searchBtn.innerHTML = originalText;
                    searchBtn.disabled = false;
                    addLog('SUCCESS', '200 OK - Returned 5 records (42ms latency)', 'green-400');
                }, 1200);
            });

            resetBtn.addEventListener('click', () => {
                searchResults.classList.add('hidden');
                searchForm.classList.remove('hidden');
                resultsList.innerHTML = '';
            });

            /* -------------------------------------
               VIEW TOGGLER LOGIC
            -------------------------------------- */
            const frontEndView = document.getElementById('front-end-view');
            const backEndView = document.getElementById('back-end-view');
            const navFrontend = document.getElementById('nav-frontend');
            const navBackend = document.getElementById('nav-backend');

            navBackend.addEventListener('click', (e) => {
                e.preventDefault();
                frontEndView.classList.add('hidden');
                backEndView.classList.remove('hidden');
                navBackend.classList.replace('text-neutral-500', 'text-neutral-900');
                navBackend.classList.add('font-medium');
                navFrontend.classList.replace('text-neutral-900', 'text-neutral-500');
                navFrontend.classList.remove('font-medium');
            });

            navFrontend.addEventListener('click', (e) => {
                e.preventDefault();
                backEndView.classList.add('hidden');
                frontEndView.classList.remove('hidden');
                navFrontend.classList.replace('text-neutral-500', 'text-neutral-900');
                navFrontend.classList.add('font-medium');
                navBackend.classList.replace('text-neutral-900', 'text-neutral-500');
                navBackend.classList.remove('font-medium');
            });

            /* -------------------------------------
               BACKEND LOGS SIMULATOR
            -------------------------------------- */
            const logContainer = document.getElementById('server-logs');
            const mockLogs = [
                { level: 'DB', msg: 'SELECT * FROM orders WHERE status="active"', color: 'blue-400' },
                { level: 'INFO', msg: 'Worker thread 3 spawned', color: 'neutral-400' },
                { level: 'CACHE', msg: 'Redis cache hit for key user:9421', color: 'purple-400' },
                { level: 'SUCCESS', msg: 'Payment gateway sync complete', color: 'green-400' },
                { level: 'WARN', msg: 'High latency on geo-routing API (120ms)', color: 'yellow-400' },
            ];

            function addLog(level, message, color) {
                const time = new Date().toISOString().split('T')[1].substring(0, 8);
                const logEl = document.createElement('div');
                logEl.innerHTML = `<span class="text-neutral-500">[${time}]</span> <span class="text-${color} font-medium">${level}</span> <span class="text-neutral-300">${message}</span>`;
                logContainer.appendChild(logEl);
                logContainer.scrollTop = logContainer.scrollHeight;
            }

            // Simulate random background server activity
            setInterval(() => {
                // Only log randomly
                if(Math.random() > 0.6) {
                    const log = mockLogs[Math.floor(Math.random() * mockLogs.length)];
                    addLog(log.level, log.msg, log.color);
                }
            }, 2500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-medium tracking-tighter uppercase text-red-600" href="#">
                    ZMTO
                </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-900 transition-colors" href="#" id="nav-frontend">Frontend</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Dining Out</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5" href="#" id="nav-backend">
<iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Backend Admin
                    </a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Log in</a>
<a className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors" href="#">
                    Sign up
                </a>
</div>
</div>
</header>

<div className="flex flex-col flex-grow" id="front-end-view">
<main className="flex-grow pt-24 pb-16">

<section className="md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-xs font-medium text-neutral-600">Now serving 10,000+ cities globally</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-950 leading-[1.1] mb-6">
                        Discover the city's best food.
                    </h1>
<p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
                        Explore top-rated restaurants, read authentic reviews from fellow foodies, and order delivery directly to your door in minutes.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="hover:bg-neutral-800 transition-colors flex text-sm font-medium text-white bg-neutral-900 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center">
                            Get the App
                            <iconify-icon icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="hover:bg-neutral-50 transition-colors flex gap-2 text-sm font-medium text-neutral-900 bg-white border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm gap-x-2 gap-y-2 items-center justify-center">
                            View Map
                            <iconify-icon icon="solar:map-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-white rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
<div className="bg-white rounded-3xl border border-neutral-200 shadow-xl p-6 relative z-10 min-h-[400px]">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
<h2 className="text-base font-medium tracking-tight">Find Food</h2>
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>

<div className="space-y-4" id="search-form">

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
<iconify-icon className="text-red-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<input className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm outline-none focus:border-neutral-400 focus:bg-white transition-colors" placeholder="Location" type="text" value="Downtown Metro"/>
</div>

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<input className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm outline-none focus:border-neutral-400 focus:bg-white transition-colors" placeholder="Search for restaurant, cuisine..." type="text"/>
</div>

<div className="flex items-center justify-between py-2">
<div>
<p className="text-sm font-medium text-neutral-900">Express Delivery</p>
<p className="text-xs text-neutral-500">Show places under 30 mins</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
</label>
</div>
<button className="hover:bg-neutral-800 transition-colors flex gap-2 text-sm font-medium text-white bg-neutral-900 w-full rounded-xl mt-4 pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" id="search-btn">
                                Search Restaurants
                            </button>
</div>

<div className="space-y-4" id="search-results">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-500">Live API Response</span>
</div>
<div className="space-y-3 h-[250px] overflow-y-auto pr-2" id="results-list">
<div className="flex items-center justify-between p-3 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div>
<h4 className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">The Rustic Grill</h4>
<p className="text-xs text-neutral-500 mt-0.5">American • Burgers</p>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    20-30 min
                                </p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
<span className="text-xs font-semibold">4.8</span>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<div className="flex hover:shadow-md transition-shadow cursor-pointer group bg-white border-neutral-100 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-sm items-center justify-between">
<div>
<h4 className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">Neon Sushi Bar</h4>
<p className="text-xs text-neutral-500 mt-0.5">Japanese • Seafood</p>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    35-45 min
                                </p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
<span className="text-xs font-semibold">4.9</span>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div>
<h4 className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">Spice Route</h4>
<p className="text-xs text-neutral-500 mt-0.5">Indian • Curries</p>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    25-40 min
                                </p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
<span className="text-xs font-semibold">4.6</span>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div>
<h4 className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">Napoli Pizza</h4>
<p className="text-xs text-neutral-500 mt-0.5">Italian • Pizza</p>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    15-25 min
                                </p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
<span className="text-xs font-semibold">4.7</span>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<div className="flex hover:shadow-md transition-shadow cursor-pointer group bg-white border-neutral-100 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-sm items-center justify-between">
<div>
<h4 className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">Green Bowl</h4>
<p className="text-xs text-neutral-500 mt-0.5">Healthy • Salads</p>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    10-20 min
                                </p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 border border-green-100">
<span className="text-xs font-semibold">4.5</span>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-white border border-neutral-200 text-neutral-900 py-2 rounded-xl text-xs font-medium mt-2 hover:bg-neutral-50 transition-colors" id="reset-btn">
                                New Search
                            </button>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-neutral-200 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-950 mb-4">Why choose us?</h2>
<p className="text-base text-neutral-500">Built for food lovers. We curate the best dining experiences and ensure pristine quality from kitchen to table.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Lightning Fast</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Our advanced routing algorithms ensure your food arrives piping hot and fresh, exactly when expected.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Verified Reviews</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Every review is strictly moderated. See actual photos and honest opinions from verified diners in your area.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">100% Quality Protected</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Partner restaurants must adhere to strict hygiene protocols, ensuring a safe dining and delivery experience.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="bg-neutral-950 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center">
<div className="p-12 md:p-16 flex-1">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Track every bite.</h2>
<p className="text-base text-neutral-400 mb-8 max-w-md">Real-time order tracking lets you watch your delivery partner approach your location. Receive precise ETAs and live kitchen status updates.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Live kitchen preparation status
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Real-time GPS delivery map
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Direct call with delivery partner
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 p-6 md:p-12 flex justify-center">
<div className="relative w-full max-w-sm aspect-square bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center p-8">
<div className="absolute inset-0 border border-neutral-800 rounded-full m-8"></div>
<div className="absolute inset-0 border border-neutral-800 rounded-full m-16"></div>
<div className="absolute inset-0 border border-neutral-800 rounded-full m-24"></div>
<div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-1/4 right-1/3 flex flex-col items-center z-10">
<div className="w-3 h-3 bg-red-500 rounded-full mb-1"></div>
<div className="bg-neutral-800 text-white text-xs px-2 py-1 rounded border border-neutral-700 font-medium">Arriving in 3 min</div>
<svg className="absolute top-2 left-1 -z-10 w-24 h-24 overflow-visible" style={{transform: 'rotate(45deg)'}}>
<path d="M0,0 Q10,20 20,40 T40,80" fill="none" opacity="0.5" stroke="#ef4444" stroke-dasharray="4,4" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2">
<span className="text-lg font-medium tracking-tighter uppercase text-red-600 block mb-4">ZMTO</span>
<p className="text-sm text-neutral-500 max-w-xs">
                            Connecting diners with the best local restaurants. Eat well, live better.
                        </p>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Discover</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Order Delivery</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Book a Table</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Pro Membership</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Add Restaurant</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2024 ZMTO Platform. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900" href="#">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden flex-grow flex flex-col pt-24 pb-16 bg-neutral-50 min-h-screen" id="back-end-view">
<div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-neutral-200 pb-6">
<div>
<h1 className="text-2xl font-medium tracking-tight text-neutral-900">Infrastructure Dashboard</h1>
<p className="text-sm text-neutral-500 mt-1">Real-time monitoring and database management.</p>
</div>
<div className="flex items-center gap-4 bg-white border border-neutral-200 px-4 py-2 rounded-lg shadow-sm">
<div className="flex items-center gap-2 border-r border-neutral-200 pr-4">
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-700">API: Healthy</span>
</div>
<div className="flex items-center gap-2 pl-2">
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-700">DB: Connected</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
<p className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-2">Total Requests (24h)</p>
<div className="flex items-end gap-3">
<p className="text-3xl font-medium tracking-tight text-neutral-900">1.24M</p>
<p className="text-xs font-medium text-green-600 mb-1 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                            12%
                        </p>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
<p className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-2">Avg Latency</p>
<div className="flex items-end gap-3">
<p className="text-3xl font-medium tracking-tight text-neutral-900">42ms</p>
<p className="text-xs font-medium text-green-600 mb-1 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon>
                            5ms
                        </p>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
<p className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-2">Active Restaurants</p>
<div className="flex items-end gap-3">
<p className="text-3xl font-medium tracking-tight text-neutral-900">8,492</p>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
<p className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-2">Error Rate</p>
<div className="flex items-end gap-3">
<p className="text-3xl font-medium tracking-tight text-neutral-900">0.01%</p>
<p className="text-xs font-medium text-neutral-400 mb-1">Stable</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">

<div className="lg:col-span-2 bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
<h3 className="text-sm font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:database-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Active Orders Table
                        </h3>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Export CSV</button>
</div>
<div className="overflow-x-auto flex-grow">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-100">
<th className="px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-tight">Order ID</th>
<th className="px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-tight">Status</th>
<th className="px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-tight">Restaurant</th>
<th className="px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-tight">Time</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-700 divide-y divide-neutral-50">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-5 py-3 font-mono text-xs">#ORD-9482</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Preparing</span>
</td>
<td className="px-5 py-3">Neon Sushi Bar</td>
<td className="px-5 py-3 text-neutral-500 text-xs">2 mins ago</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-5 py-3 font-mono text-xs">#ORD-9481</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-100">In Transit</span>
</td>
<td className="px-5 py-3">The Rustic Grill</td>
<td className="px-5 py-3 text-neutral-500 text-xs">14 mins ago</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-5 py-3 font-mono text-xs">#ORD-9480</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Delivered</span>
</td>
<td className="px-5 py-3">Spice Route</td>
<td className="px-5 py-3 text-neutral-500 text-xs">28 mins ago</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-5 py-3 font-mono text-xs">#ORD-9479</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Delivered</span>
</td>
<td className="px-5 py-3">Napoli Pizza</td>
<td className="px-5 py-3 text-neutral-500 text-xs">41 mins ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-neutral-950 rounded-xl border border-neutral-800 shadow-sm flex flex-col overflow-hidden h-[400px] lg:h-auto">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2 bg-neutral-900/50">
<iconify-icon className="text-neutral-400" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<h3 className="text-xs font-medium text-neutral-300">Live Production Logs</h3>
</div>
<div className="p-4 overflow-y-auto flex-grow font-['JetBrains_Mono',monospace] text-[11px] leading-relaxed space-y-1" id="server-logs">
<div className="text-neutral-500">System initialized. Waiting for incoming requests...</div>
<div><span className="text-neutral-500">[16:41:22]</span> <span className="text-neutral-300 font-medium">INFO</span> <span className="text-neutral-300">GET /api/v1/search?location=Downtown&amp;express=true</span></div><div><span className="text-neutral-500">[16:41:23]</span> <span className="text-green-400 font-medium">SUCCESS</span> <span className="text-neutral-300">200 OK - Returned 5 records (42ms latency)</span></div></div>
</div>
</div>
</div>
</div>


    </>
  );
}
