import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize Lucide icons
    lucide.createIcons();

    // Hotel card mouse tracking effect
    document.querySelectorAll('.hotel-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
        card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
        card.style.setProperty('--o', '1');
      });

      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
        card.style.setProperty('--o', '0');
      });
    });

    // Filter chip interactions
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.classList.toggle('active');
      });
    });

    // Heart button interactions
    document.querySelectorAll('button:has(.lucide-heart)').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const heart = button.querySelector('.lucide-heart');
        if (heart.style.fill === 'currentColor') {
          heart.style.fill = 'none';
          heart.style.color = '';
        } else {
          heart.style.fill = 'currentColor';
          heart.style.color = '#ef4444';
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-js"><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '97.101%', top: '54.4882%', animation: '21.3457s linear 0.332826s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '76.4755%', top: '19.3267%', animation: '20.0559s linear 3.78762s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '58.3678%', top: '23.6318%', animation: '29.0696s linear 2.07847s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '74.0283%', top: '70.8365%', animation: '25.1475s linear 0.789347s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '37.197%', top: '57.6815%', animation: '26.2586s linear 1.81203s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '33.7172%', top: '68.1959%', animation: '22.832s linear 3.13662s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '27.5772%', top: '44.0424%', animation: '21.6251s linear 2.94568s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '60.7874%', top: '81.0807%', animation: '26.5437s linear 0.17308s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '18.2539%', top: '21.656%', animation: '22.6552s linear 0.535406s infinite normal none running float'}}></div><div className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20" style={{left: '37.2194%', top: '8.58301%', animation: '25.0363s linear 4.08334s infinite normal none running float'}}></div></div>

<style>
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.6;
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 1;
      }
    }
  </style>

<header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-map-pin w-6 h-6 text-white" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-xl font-semibold">StayFinder</span>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Hotels</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">About</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center space-x-4">
<button className="p-2 text-gray-400 hover:text-white transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-user w-4 h-4 text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>
</header>

<main className="relative z-10 max-w-7xl mx-auto px-6 py-8">

<div className="mb-8">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="">
<h1 className="text-3xl font-semibold mb-2">Find Your Perfect Stay</h1>
<p className="text-gray-400">Discover amazing hotels with the best deals</p>
</div>

<div className="flex flex-col sm:flex-row gap-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
<div className="flex-1 relative">
<svg className="lucide lucide-map-pin absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Where to?" type="text"/>
</div>
<div className="flex gap-2">
<input className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="date"/>
<input className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="date"/>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            Search
          </button>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex flex-wrap gap-3">
<button className="filter-chip px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-full text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all">
<svg className="lucide lucide-dollar-sign w-4 h-4 inline mr-1" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          Price Range
        </button>
<button className="filter-chip px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-full text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all">
<svg className="lucide lucide-star w-4 h-4 inline mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Rating
        </button>
<button className="filter-chip px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-full text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all">
<svg className="lucide lucide-wifi w-4 h-4 inline mr-1" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
          Amenities
        </button>
<button className="filter-chip px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-full text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all">
<svg className="lucide lucide-map w-4 h-4 inline mr-1" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
          Location
        </button>
<button className="filter-chip px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-full text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all">
<svg className="lucide lucide-home w-4 h-4 inline mr-1" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Property Type
        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="hotel-card group active" style={{-Rx: '0deg', -Ry: '0deg', -Mx: '45.22758122491305%', -My: '13.601184334677255%', -O: '0'}}>
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="Luxury Hotel" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">Free Cancellation</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Grand Plaza Hotel</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Downtown Manhattan
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.8</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Free WiFi</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Pool</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Spa</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$289</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hotel-card group">
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="Boutique Hotel" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">Pay at Hotel</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">The Artisan</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    SoHo District
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.6</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Free WiFi</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Restaurant</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Rooftop</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$195</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hotel-card group">
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="Waterfront Resort" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">Best Deal</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Ocean View Resort</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Miami Beach
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.9</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Beach Access</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Pool</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Spa</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$349</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hotel-card group">
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="Mountain Lodge" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-orange-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">Limited Time</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Alpine Lodge</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Aspen, Colorado
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.7</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Ski Access</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Fireplace</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Hot Tub</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$425</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hotel-card group">
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="City Hotel" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">Popular</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Metropolitan Inn</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Chicago Loop
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.5</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Business Center</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Gym</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Parking</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$159</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hotel-card group">
<div className="hotel-card__rotator bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
<div className="hotel-card__shine"></div>
<div className="hotel-card__content">
<div className="relative">
<img alt="Luxury Resort" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">All Inclusive</span>
</div>
<div className="absolute top-4 right-4">
<button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Paradise Resort</h3>
<div className="flex items-center text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Maldives
                  </div>
</div>
<div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">5.0</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Private Beach</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Water Villa</span>
<span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">Diving</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$899</span>
<span className="text-gray-400 text-sm">/night</span>
</div>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Book Now
                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-12">
<button className="px-8 py-3 bg-gray-800/60 border border-gray-600 rounded-xl text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all flex items-center gap-2">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Load More Hotels
      </button>
</div>
</main>



    </>
  );
}
