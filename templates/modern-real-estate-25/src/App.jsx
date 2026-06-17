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



        // Property Data Store with Real Images
        const properties = [
            {
                id: 1,
                title: "Skyline Modern",
                address: "1420 Sunset Plaza Dr, Los Angeles",
                price: "$4,250,000",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2600&auto=format&fit=crop",
                beds: 4, baths: 3.5, sqft: "3,200",
                status: "Just Listed",
                description: "Perched above the city, this architectural masterpiece offers 270-degree views of the Los Angeles basin. Featuring floor-to-ceiling glass walls, a negative edge pool, and smart home technology throughout. The open-concept living area flows seamlessly into the outdoor entertainment deck.",
                amenities: ["Infinity Pool", "Wine Cellar", "Smart Home", "Home Theater", "Tesla Charger", "Rooftop Deck"]
            },
            {
                id: 2,
                title: "The Canyon Retreat",
                address: "890 Laurel Canyon, Hollywood Hills",
                price: "$3,100,000",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop",
                beds: 3, baths: 2, sqft: "2,100",
                status: null,
                description: "A serene escape in the heart of Laurel Canyon. This restored mid-century home features post-and-beam construction, rich walnut cabinetry, and lush landscaping that provides complete privacy. A true sanctuary for creatives.",
                amenities: ["Gated Entry", "Mature Gardens", "Guest Studio", "Chef's Kitchen", "Skylights"]
            },
            {
                id: 3,
                title: "Mid-Century Oasis",
                address: "455 Palm Springs Way, Palm Springs",
                price: "$2,850,000",
                image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2600&auto=format&fit=crop",
                beds: 3, baths: 3, sqft: "2,450",
                status: "Pending",
                description: "Classic desert modernism meets contemporary luxury. Recently renovated by an award-winning architect, this home features terrazzo floors, a sunken living room, and walls of glass opening to a private pool courtyard.",
                amenities: ["Saltwater Pool", "Fire Pit", "Mountain Views", "Outdoor Shower", "Original Fireplace"]
            },
            {
                id: 4,
                title: "Oceanfront Contemporary",
                address: "2201 PCH, Malibu",
                price: "$12,500,000",
                image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2600&auto=format&fit=crop",
                beds: 5, baths: 6, sqft: "5,400",
                status: "New",
                description: "Direct beach access and panoramic ocean views define this stunning contemporary residence. The master suite occupies the entire top floor, featuring a private terrace and spa bath overlooking the Pacific.",
                amenities: ["Private Beach Access", "Elevator", "Gym", "Sauna", "3-Car Garage"]
            },
            {
                id: 5,
                title: "Silver Lake Bungalow",
                address: "1550 Micheltorena St, Silver Lake",
                price: "$1,895,000",
                image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2600&auto=format&fit=crop",
                beds: 2, baths: 2, sqft: "1,450",
                status: null,
                description: "Charming Spanish bungalow reimagined for modern life. Steps from the reservoir, this home features clay tile roofing, arched doorways, and a drought-tolerant garden designed for outdoor dining.",
                amenities: ["Drought Tolerant Garden", "Hardwood Floors", "Updated HVAC", "Walk to Reservoir"]
            },
            {
                id: 6,
                title: "The Glass Pavilion",
                address: "700 Trousdale Estates, Beverly Hills",
                price: "$8,900,000",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
                beds: 4, baths: 5, sqft: "4,800",
                status: "Featured",
                description: "An iconic Trousdale estate offering single-level luxury living. The property centers around an atrium courtyard, flooding the interiors with natural light. Impeccable finishes and provenance.",
                amenities: ["Atrium", "Pool", "Guard Gated", "Staff Quarters", "Marble Floors"]
            }
        ];

        // Component: Property Card
        function createCard(p) {
            return `
            <div class="group cursor-pointer page-transition" onclick="viewProperty(${p.id})">
                <div class="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-stone-200">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    ${p.status ? `<div class="absolute top-4 left-4 bg-stone-900/90 text-white px-3 py-1 rounded-md text-xs font-medium backdrop-blur-sm">${p.status}</div>` : ''}
                </div>
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-medium text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors">${p.title}</h3>
                        <p class="text-stone-500 text-sm mt-1">${p.address}</p>
                    </div>
                    <p class="text-lg font-medium text-stone-900 tracking-tight">${p.price}</p>
                </div>
                <div class="flex gap-4 mt-4 text-xs text-stone-400 font-medium">
                    <span class="flex items-center gap-1.5"><span class="iconify" data-icon="lucide:bed-double" data-width="14"></span> ${p.beds} Beds</span>
                    <span class="flex items-center gap-1.5"><span class="iconify" data-icon="lucide:bath" data-width="14"></span> ${p.baths} Baths</span>
                    <span class="flex items-center gap-1.5"><span class="iconify" data-icon="lucide:maximize" data-width="14"></span> ${p.sqft} sqft</span>
                </div>
            </div>`;
        }

        // Render Lists
        document.getElementById('home-featured-grid').innerHTML = properties.slice(0, 3).map(createCard).join('');
        document.getElementById('all-listings-grid').innerHTML = properties.map(createCard).join('');

        // Navigation Logic
        function navigateTo(pageId, anchorId = null) {
            window.scrollTo(0, 0);
            
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
            
            // Show target page
            const target = document.getElementById(`page-${pageId}`);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('page-transition');
            }

            // Handle anchor within page
            if (anchorId) {
                setTimeout(() => {
                    const el = document.getElementById(anchorId);
                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        // View Detail Logic
        function viewProperty(id) {
            const p = properties.find(x => x.id === id);
            if (!p) return;

            const detailHtml = `
                <!-- Back Nav -->
                <div class="max-w-7xl mx-auto px-6 md:px-12 py-8">
                    <button onclick="navigateTo('listings')" class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors">
                        <span class="iconify" data-icon="lucide:arrow-left" data-width="16"></span> Back to Listings
                    </button>
                </div>

                <!-- Hero Image -->
                <div class="w-full h-[60vh] md:h-[75vh] bg-stone-200 overflow-hidden">
                    <img src="${p.image}" class="w-full h-full object-cover" alt="${p.title}">
                </div>

                <!-- Content Grid -->
                <div class="max-w-7xl mx-auto px-6 md:px-12 py-16">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        
                        <!-- Left Content -->
                        <div class="lg:col-span-8">
                            <div class="mb-2">
                                ${p.status ? `<span class="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-900 text-xs font-medium mb-4">${p.status}</span>` : ''}
                                <h1 class="text-3xl md:text-5xl font-medium text-stone-900 tracking-tight mb-2">${p.title}</h1>
                                <p class="text-xl text-stone-500 font-light">${p.address}</p>
                            </div>

                            <div class="flex gap-8 py-8 border-y border-stone-100 my-8">
                                <div><p class="text-sm text-stone-400 mb-1">Price</p><p class="text-xl font-medium text-stone-900">${p.price}</p></div>
                                <div><p class="text-sm text-stone-400 mb-1">Bedrooms</p><p class="text-xl font-medium text-stone-900">${p.beds}</p></div>
                                <div><p class="text-sm text-stone-400 mb-1">Bathrooms</p><p class="text-xl font-medium text-stone-900">${p.baths}</p></div>
                                <div><p class="text-sm text-stone-400 mb-1">Square Feet</p><p class="text-xl font-medium text-stone-900">${p.sqft}</p></div>
                            </div>

                            <h3 class="text-lg font-medium text-stone-900 mb-4">About the Property</h3>
                            <p class="text-stone-500 leading-relaxed mb-12 max-w-2xl">${p.description}</p>

                            <h3 class="text-lg font-medium text-stone-900 mb-6">Amenities</h3>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                ${p.amenities.map(a => `
                                    <div class="flex items-center gap-2 text-stone-600 text-sm p-3 bg-stone-50 rounded-lg">
                                        <span class="iconify text-stone-400" data-icon="lucide:check" data-width="14"></span> ${a}
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Right Sticky Sidebar -->
                        <div class="lg:col-span-4">
                            <div class="sticky top-28 p-8 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50 bg-white">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="h-12 w-12 rounded-full bg-stone-200 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" class="w-full h-full object-cover">
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-stone-900">Elena Vance</p>
                                        <p class="text-xs text-stone-500">Listing Agent</p>
                                    </div>
                                </div>
                                <p class="text-sm text-stone-500 mb-6">Interested in this property? Schedule a private viewing.</p>
                                <button class="w-full bg-stone-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all mb-3">Schedule Viewing</button>
                                <button class="w-full border border-stone-200 text-stone-900 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 transition-all">Request Info</button>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            
            document.getElementById('detail-content').innerHTML = detailHtml;
            navigateTo('detail');
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<button className="text-xl font-medium tracking-tighter text-stone-900 z-50" onclick="navigateTo('home')">
                EV.
            </button>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="navigateTo('listings')">Properties</button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="navigateTo('home', 'approach')">Approach</button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="navigateTo('home', 'journal')">Journal</button>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all hover:scale-[1.02] active:scale-[0.98]" onclick="navigateTo('home', 'contact')">
                    Get in touch
                </button>
</div>

<button className="md:hidden text-stone-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<main className="pt-20 min-h-screen" id="main-content">

<div className="page-section" id="page-home">

<section className="pt-12 pb-20 md:pt-28 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
<div className="lg:col-span-7">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-stone-900 tracking-tight leading-[0.95] mb-8">
                            Finding your place <br/>
<span className="text-stone-400">in the world.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed font-light mb-10">
                            Curating exceptional properties for those who appreciate the art of modern living. We bridge the gap between architectural vision and your reality.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all group" onclick="navigateTo('listings')">
                                Explore Listings
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-stone-900 border border-stone-200 hover:border-stone-400 hover:bg-white transition-all">
                                Sell with us
                            </button>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
<img alt="Modern Architecture" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
<p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-0.5">Featured</p>
<p className="text-sm font-medium text-stone-900">The Glass House, Beverly Hills</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="space-y-1"><p className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">$450M+</p><p className="text-sm text-stone-500">Volume Sold</p></div>
<div className="space-y-1"><p className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">12</p><p className="text-sm text-stone-500">Years Experience</p></div>
<div className="space-y-1"><p className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">240+</p><p className="text-sm text-stone-500">Happy Families</p></div>
<div className="space-y-1"><p className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Top 1%</p><p className="text-sm text-stone-500">Nationwide Agent</p></div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-3">Curated Collection</h2>
<p className="text-stone-500 max-w-sm">Exclusive listings selected for their design, location, and architectural integrity.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" onclick="navigateTo('listings')">
                        View all properties
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="home-featured-grid">

</div>
</section>

<section className="py-24 bg-stone-900 text-stone-300" id="approach">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="relative bg-stone-800 rounded-2xl p-8 border border-stone-700/50 shadow-2xl">
<div className="flex items-center gap-4 mb-8">
<div className="h-12 w-12 rounded-full bg-stone-700 flex items-center justify-center"><span className="text-white font-medium text-lg">EV</span></div>
<div><div className="text-white font-medium">Market Analysis</div><div className="text-stone-500 text-sm">Real-time valuation</div></div>
</div>
<div className="space-y-4">
<div className="h-2 bg-stone-700 rounded-full w-full overflow-hidden"><div className="h-full bg-white w-3/4 rounded-full"></div></div>
<div className="flex justify-between text-xs font-medium text-stone-400"><span>Demand</span><span className="text-white">High</span></div>
</div>
</div>
<div className="absolute -z-10 top-12 -left-12 w-full h-full border border-stone-800 rounded-2xl"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-stone-400 uppercase tracking-widest text-xs font-medium mb-4 block">The Approach</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">Real estate is not about houses. It's about life.</h2>
<p className="text-stone-400 font-light leading-relaxed mb-6">We believe that a home is more than a physical structure; it is the backdrop for your life's most meaningful moments.</p>
<div className="pt-6 border-t border-stone-800 flex gap-12">
<div><span className="block text-2xl text-white font-medium">98%</span><span className="text-sm text-stone-500">List to Sale Ratio</span></div>
<div><span className="block text-2xl text-white font-medium">24/7</span><span className="text-sm text-stone-500">Client Support</span></div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-listings">
<div className="bg-stone-50 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
<h1 className="text-4xl md:text-6xl font-medium text-stone-900 tracking-tight mb-6">Property Collection</h1>
<p className="text-lg text-stone-500 max-w-xl">Explore our exclusive portfolio of luxury homes, modern estates, and architectural masterpieces across the region.</p>
</div>
</div>

<div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex gap-4 overflow-x-auto no-scrollbar items-center">
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">All Properties</button>
<button className="bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-50 whitespace-nowrap">For Sale</button>
<button className="bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-50 whitespace-nowrap">For Rent</button>
<div className="h-6 w-px bg-stone-200 mx-2"></div>
<button className="flex items-center gap-2 text-stone-500 text-sm font-medium hover:text-stone-900">
                        Price Range <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12" id="all-listings-grid">

</div>
</div>
</div>

<div className="page-section hidden bg-white" id="page-detail">

<div id="detail-content"></div>
</div>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="contact">
<div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-stone-900 tracking-tight mb-4">Let's discuss your future.</h2>
<p className="text-stone-500 mb-12">Ready to move? Contact us for a private consultation.</p>
<form className="bg-white p-2 rounded-2xl shadow-sm border border-stone-200 flex flex-col sm:flex-row gap-2">
<input className="flex-1 bg-transparent px-6 py-3 text-stone-900 placeholder-stone-400 focus:outline-none text-sm rounded-xl" placeholder="Your email address" type="email"/>
<button className="bg-stone-900 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-stone-800 transition-colors whitespace-nowrap" type="button">Start Conversation</button>
</form>
</div>
</section>
</main>

<footer className="bg-white py-12 px-6 md:px-12 border-t border-stone-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-lg font-medium tracking-tighter text-stone-900" href="#" onclick="navigateTo('home'); return false;">EV.</a>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
<p className="text-xs text-stone-400 font-medium">© 2024 Elena Vance Real Estate.</p>
</div>
</footer>



    </>
  );
}
