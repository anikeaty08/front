import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Modal Functions
        function openModal(title, location, price, rating, img) {
            const modal = document.getElementById('hostel-modal');
            const body = document.body;
            
            // Set content
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-location').innerText = location;
            document.getElementById('modal-price-display').innerText = '₹' + price;
            document.getElementById('modal-total').innerText = '₹' + price;
            document.getElementById('modal-rating').innerText = rating;
            document.getElementById('modal-img').src = img;

            // Show
            modal.classList.remove('hidden');
            body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Re-render icons inside modal if needed (mostly handles static, but good practice)
            lucide.createIcons();
        }

        function closeModal() {
            const modal = document.getElementById('hostel-modal');
            const body = document.body;
            modal.classList.add('hidden');
            body.style.overflow = 'auto';
        }

        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-40 w-full border-b border-slate-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-lg tracking-tight font-semibold text-slate-900">Hostel Lo</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#hostels">Stays</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Community</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2">Log in</button>
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition shadow-lg hover:shadow-xl ring-1 ring-white/20">
                        Get the App
                    </button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 mix-blend-multiply"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-medium tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New locations in Manali &amp; Goa
            </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                Modern hostels for the <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">new generation.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed font-normal">
                Curated community stays with hotel-grade amenities. <br/>Starting at just ₹399/night. No hidden fees.
            </p>

<div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-200/60 p-1.5 flex flex-col md:flex-row gap-1">
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="search"></i>
</div>
<input className="w-full h-12 pl-10 pr-4 bg-transparent rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none hover:bg-slate-50 focus:bg-slate-50 transition-colors" placeholder="Where to?" type="text"/>
</div>
<div className="w-px h-8 bg-slate-100 my-auto hidden md:block"></div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="calendar"></i>
</div>
<input className="w-full h-12 pl-10 pr-4 bg-transparent rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none hover:bg-slate-50 focus:bg-slate-50 transition-colors" placeholder="Add dates" type="text"/>
</div>
<button className="h-12 px-6 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-all shadow-md flex items-center justify-center gap-2">
                    Explore
                </button>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="hostels">
<div className="flex flex-col lg:flex-row gap-10">

<aside className="w-full lg:w-60 flex-shrink-0 space-y-8 h-fit lg:sticky lg:top-24">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Filters</h3>
<button className="text-[11px] font-medium text-slate-400 hover:text-slate-900 uppercase tracking-wide">Clear</button>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center text-xs font-medium text-slate-900">
<span>Price Range</span>
<span className="text-slate-500">Max ₹2000</span>
</div>
<input max="2000" min="0" type="range" value="800"/>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Room Type</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-slate-300 rounded shadow-sm transition checked:border-transparent" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium transition-colors">Private Room</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-slate-300 rounded shadow-sm transition checked:border-transparent" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium transition-colors">Mixed Dorm</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-slate-300 rounded shadow-sm transition checked:border-transparent" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium transition-colors">Female Only</span>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Amenities</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 bg-white transition-colors">WiFi</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 bg-white transition-colors">AC</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 bg-white transition-colors">Kitchen</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 bg-white transition-colors">Pool</button>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Top Rated in India</h2>
<select className="text-sm font-medium bg-transparent border-none focus:ring-0 text-slate-600 cursor-pointer outline-none hover:text-slate-900 transition-colors">
<option>Recommended</option>
<option>Lowest Price</option>
<option>Highest Rated</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('BlueWave Backpackers', 'Mumbai', '499', '4.8', 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/95 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wide text-slate-900 shadow-sm">Popular</span>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">BlueWave</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.8
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">Mumbai, Bandra West</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹499<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('Urban Nest', 'New Delhi', '399', '4.5', 'https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Urban Nest</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.5
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">South Delhi, Hauz Khas</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹399<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('The Social Hub', 'Bangalore', '550', '4.7', 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/95 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wide text-slate-900 shadow-sm">Fast WiFi</span>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">The Social Hub</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.7
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">Indiranagar, Bangalore</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹550<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('Salty Feet', 'Goa', '699', '4.9', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wide shadow-sm">Bestseller</span>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Salty Feet</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.9
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">Anjuna, North Goa</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹699<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('Mountain Echo', 'Manali', '450', '4.6', 'https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Mountain Echo</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.6
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">Old Manali</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹450<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative" onclick="openModal('Pink City Hostels', 'Jaipur', '350', '4.3', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Pink City Hostels</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-700">
<i className="w-3 h-3 fill-slate-900 text-slate-900" data-lucide="star"></i> 4.3
                                </div>
</div>
<p className="text-sm text-slate-500 mb-4">C Scheme, Jaipur</p>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500 font-medium">Dorms from</div>
<div className="text-sm font-semibold text-slate-900">₹350<span className="text-slate-400 font-normal">/night</span></div>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="group px-6 py-3 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 transition bg-white shadow-sm flex items-center gap-2">
                        Show More
                        <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="hostel-modal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
<div className="bg-white w-full max-w-4xl h-[90vh] sm:h-auto sm:max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row modal-animate ring-1 ring-white/20">

<div className="w-full sm:w-1/2 h-64 sm:h-auto bg-slate-100 relative">
<img className="w-full h-full object-cover" id="modal-img" src=""/>
<button className="absolute top-4 right-4 sm:hidden bg-white/50 backdrop-blur rounded-full p-2 text-slate-900" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur text-white px-2 py-1 rounded text-[10px] font-medium border border-white/10 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="image"></i> 1/8 Photos
                         </span>
</div>
</div>

<div className="w-full sm:w-1/2 flex flex-col h-full bg-white relative">
<button className="hidden sm:block absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition z-10" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wide">Hostel</span>
<div className="flex items-center gap-1 text-xs font-semibold text-slate-900">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<span id="modal-rating">4.8</span> (124 reviews)
                            </div>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-1" id="modal-title">Title</h2>
<div className="flex items-center text-slate-500 text-sm mb-6">
<i className="w-4 h-4 mr-1" data-lucide="map-pin"></i>
<span id="modal-location">Location</span>
</div>
<div className="space-y-6">
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Amenities</h4>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="wifi"></i> High-Speed WiFi
                                    </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="coffee"></i> Free Breakfast
                                    </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="wind"></i> Air Conditioning
                                    </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="lock"></i> Secure Lockers
                                    </div>
</div>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Room Selection</h4>
<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer p-3 bg-white border border-blue-500 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<input checked="" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" name="room" type="radio"/>
<div>
<p className="text-sm font-medium text-slate-900">6-Bed Mixed Dorm</p>
<p className="text-xs text-slate-500">Ensuite bathroom</p>
</div>
</div>
<span className="text-sm font-semibold text-slate-900" id="modal-price-display">₹499</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition">
<div className="flex items-center gap-3">
<input className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" name="room" type="radio"/>
<div>
<p className="text-sm font-medium text-slate-900">Private Double Room</p>
<p className="text-xs text-slate-500">Queen size bed</p>
</div>
</div>
<span className="text-sm font-semibold text-slate-900">₹1,499</span>
</label>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-slate-100 bg-white">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-xs text-slate-500">Total for 1 Night</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight" id="modal-total">₹499</p>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium mb-1">Free Cancellation</span>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-blue-600 text-white py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2" onclick="alert('Booking feature would activate here!')">
                            Reserve Now
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border-y border-slate-200 py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-blue-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">Verified Stays</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Every hostel is physically verified by our team for safety, hygiene, and vibe checks.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-blue-600">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">Community First</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Join daily events, city walks, and dinners. Connect with travelers before you even arrive.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-blue-600">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">Student Friendly</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Exclusive discounts for students and long-stay travelers. Save more, travel longer.
                    </p>
</div>
</div>
</div>
</div>

<footer className="bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="zap"></i>
</div>
<span className="text-base font-semibold text-slate-900">Hostel Lo</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Designing the future of shared living. <br/>Built for the modern nomad.
                    </p>
</div>
<div className="flex gap-12 sm:gap-24">
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Explore</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition" href="#">Locations</a></li>
<li><a className="hover:text-blue-600 transition" href="#">About</a></li>
<li><a className="hover:text-blue-600 transition" href="#">Safety</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition" href="#">Privacy</a></li>
<li><a className="hover:text-blue-600 transition" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex justify-between items-center">
<p className="text-xs text-slate-400">© 2024 Hostel Lo Inc.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500 font-medium">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
