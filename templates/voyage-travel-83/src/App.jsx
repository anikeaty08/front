import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Data Store ---
        const packages = [
            {
                id: 'PKG001',
                category: 'Asia',
                title: 'Bangkok & Pattaya Highlights',
                duration: '5 Days / 4 Nights',
                price: '$450',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Coral Island Tour', 'Floating Market Visit', 'Grand Palace Tour', 'River Cruise Dinner'],
                desc: 'Experience the vibrant culture of Bangkok combined with the relaxing beaches of Pattaya. Perfect for first-time visitors to Thailand seeking a mix of adventure and leisure.',
                tags: ['Family', 'Shopping', 'City'],
                inclusions: ['Breakfast', 'Transfers', 'Guide', '4 Star Hotel']
            },
            {
                id: 'PKG002',
                category: 'Domestic',
                title: 'Kerala Backwaters Bliss',
                duration: '4 Days / 3 Nights',
                price: '$320',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Alleppey Houseboat Stay', 'Munnar Tea Gardens', 'Cochin City Tour'],
                desc: 'Drift through the serene backwaters of Kerala on a traditional houseboat. Enjoy the cool breeze of Munnar hills and authentic South Indian cuisine.',
                tags: ['Honeymoon', 'Nature', 'Relaxing'],
                inclusions: ['Houseboat', 'Meals', 'Private Car']
            },
            {
                id: 'PKG003',
                category: 'International',
                title: 'Swiss Alps Escape',
                duration: '7 Days / 6 Nights',
                price: '$1800',
                image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Mt. Titlis Excursion', 'Lake Lucerne Cruise', 'Zurich Old Town', 'Interlaken Scenic Train'],
                desc: 'A dream journey through the snow-capped peaks of Switzerland. Experience the world-class trains, chocolate factories, and breathtaking alpine views.',
                tags: ['Luxury', 'Adventure', 'Scenic'],
                inclusions: ['Swiss Pass', 'Breakfast', '4 Star Hotel']
            },
            {
                id: 'PKG004',
                category: 'Asia',
                title: 'Bali Island Hopper',
                duration: '6 Days / 5 Nights',
                price: '$650',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Ubud Rice Terraces', 'Nusa Penida Day Trip', 'Sunset at Uluwatu', 'Monkey Forest'],
                desc: 'Discover the magic of the Island of Gods. From the spiritual temples of Ubud to the crystal clear waters of Nusa Penida.',
                tags: ['Beach', 'Culture', 'Adventure'],
                inclusions: ['Private Driver', 'Breakfast', 'Ferry Tickets']
            },
            {
                id: 'PKG005',
                category: 'International',
                title: 'Paris & Amsterdam',
                duration: '8 Days / 7 Nights',
                price: '$1450',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Eiffel Tower Summit', 'Louvre Museum', 'Canal Cruise', 'Van Gogh Museum'],
                desc: 'Two of Europes most iconic cities in one trip. Art, history, and romance combined with the unique charm of Dutch canals.',
                tags: ['History', 'Art', 'Urban'],
                inclusions: ['Train Tickets', 'City Pass', 'Breakfast']
            },
            {
                id: 'PKG006',
                category: 'Domestic',
                title: 'Rajasthan Royal Heritage',
                duration: '6 Days / 5 Nights',
                price: '$500',
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                highlights: ['Amber Fort Elephant Ride', 'Udaipur Lake Palace', 'Jaipur Pink City', 'Desert Safari'],
                desc: 'Walk like a king in the land of royals. Visit majestic forts, opulent palaces, and experience the colorful culture of Rajasthan.',
                tags: ['Heritage', 'Culture', 'Family'],
                inclusions: ['Guide', 'Heritage Hotels', 'Dinner']
            }
        ];

        // --- 2. Initial Render ---
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderPackages('all');
            
            // Set min date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('form-date').setAttribute('min', today);
        });

        // --- 3. Rendering Logic ---
        function renderPackages(filter) {
            const grid = document.getElementById('packages-grid');
            grid.innerHTML = '';

            const filtered = filter === 'all' 
                ? packages 
                : packages.filter(p => p.category === filter);

            filtered.forEach(pkg => {
                const card = `
                    <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer" onclick="openPackage('${pkg.id}')">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide text-slate-800 border border-white/50 shadow-sm">
                                ${pkg.category}
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="font-semibold text-lg text-slate-900 leading-tight group-hover:text-teal-600 transition-colors line-clamp-2">${pkg.title}</h3>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-500 mb-4">
                                <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${pkg.duration}</span>
                                <span class="flex items-center gap-1"><i data-lucide="user" class="w-3 h-3"></i> ${pkg.tags[0]}</span>
                            </div>
                            <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-slate-400 uppercase font-medium">Starting from</span>
                                    <span class="text-teal-600 font-bold text-lg">${pkg.price}</span>
                                </div>
                                <button class="bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-4 py-2 rounded-lg text-xs font-medium transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                grid.innerHTML += card;
            });
            lucide.createIcons();
            
            // Update Filter Buttons UI
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
            });
            const activeBtn = document.getElementById(`btn-${filter}`);
            activeBtn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
            activeBtn.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
        }

        function filterPackages(category) {
            renderPackages(category);
        }

        function scrollToPackages() {
            document.getElementById('packages-section').scrollIntoView({ behavior: 'smooth' });
        }

        // --- 4. Modal Logic ---
        function openPackage(id) {
            const pkg = packages.find(p => p.id === id);
            if(!pkg) return;

            // Populate Modal
            document.getElementById('modal-img').src = pkg.image;
            document.getElementById('modal-category').innerText = pkg.category;
            document.getElementById('modal-title').innerText = pkg.title;
            document.getElementById('modal-duration-text').innerText = pkg.duration;
            document.getElementById('modal-price').innerText = pkg.price;
            document.getElementById('modal-desc').innerText = pkg.desc;

            // Highlights
            const highlightsList = document.getElementById('modal-highlights');
            highlightsList.innerHTML = pkg.highlights.map(h => `<li class="flex items-start gap-2 text-sm text-slate-600"><i data-lucide="check-circle-2" class="w-4 h-4 text-teal-500 mt-0.5 shrink-0"></i> ${h}</li>`).join('');

            // Inclusions
            const inclusionsDiv = document.getElementById('modal-inclusions');
            inclusionsDiv.innerHTML = pkg.inclusions.map(inc => `<span class="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 shadow-sm">${inc}</span>`).join('');

            // Set Form Data
            document.getElementById('form-package-id').value = pkg.id;
            document.getElementById('form-package-name').value = pkg.title;

            // Show Modal with Animation
            const modal = document.getElementById('package-modal');
            const content = document.getElementById('modal-content');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // prevent bg scroll
            
            // Small delay for transition
            setTimeout(() => {
                content.classList.remove('translate-x-full');
            }, 10);
            
            lucide.createIcons();
        }

        function closeModal() {
            const modal = document.getElementById('package-modal');
            const content = document.getElementById('modal-content');
            
            content.classList.add('translate-x-full');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // --- 5. Booking & WhatsApp Logic ---
        function handleBooking(e) {
            e.preventDefault();
            
            // Gather Data
            const formData = {
                package_name: document.getElementById('form-package-name').value,
                name: document.getElementById('form-name').value,
                phone: document.getElementById('form-phone').value,
                email: document.getElementById('form-email').value,
                date: document.getElementById('form-date').value,
                pax: document.getElementById('form-travelers').value,
                notes: document.getElementById('form-notes').value
            };

            // Option A: Click-to-Chat Generation
            const businessNumber = "1234567890"; // REPLACE WITH REAL NUMBER
            const message = `*New Inquiry for ${formData.package_name}*\n\n` +
                          `👤 Name: ${formData.name}\n` +
                          `📅 Date: ${formData.date}\n` +
                          `👥 Travelers: ${formData.pax}\n` +
                          `📞 Phone: ${formData.phone}\n` +
                          `✉️ Email: ${formData.email}\n` +
                          `📝 Notes: ${formData.notes || 'None'}`;
            
            const waUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

            // Visual Feedback
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i> Opening WhatsApp...`;
            btn.classList.add('bg-slate-900', 'text-white');
            lucide.createIcons();

            setTimeout(() => {
                window.open(waUrl, '_blank');
                // Reset UI
                btn.innerHTML = originalText;
                btn.classList.remove('bg-slate-900');
                closeModal();
                
                // Show toast (simulated)
                alert("Thanks! We have opened WhatsApp to send your inquiry.");
            }, 1000);
            
            // OPTION B: Server Delivery (Visualization Only)
            // fetch('/api/form-submission', { method: 'POST', body: JSON.stringify(formData) })
        }

        // --- 6. Admin Logic ---
        function toggleAdmin() {
            const modal = document.getElementById('admin-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        function renderHome() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center cursor-pointer" onclick="renderHome()">
<span className="bg-teal-600 text-white p-1 rounded-lg mr-2">
<i className="w-5 h-5" data-lucide="compass"></i>
</span>
<span className="text-lg font-semibold tracking-tight text-slate-900">VOYAGE</span>
</div>

<div className="hidden md:flex space-x-8">
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" onclick="filterPackages('all')">All Packages</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" onclick="filterPackages('Domestic')">Domestic</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" onclick="filterPackages('International')">International</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" onclick="filterPackages('Asia')">Asia</button>
</div>

<div className="flex items-center space-x-4">
<button className="hidden md:block text-xs font-medium text-slate-400 hover:text-slate-900" onclick="toggleAdmin()">Admin</button>
<button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition shadow-sm" onclick="scrollToPackages()">
                        Plan My Trip
                    </button>
</div>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen pb-20" id="app-container">

<div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
<img alt="Travel" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2021&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/20"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide mb-4">
                    WORLD CLASS DESTINATIONS
                </span>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Find Your Next <br/> <span className="text-teal-400">Adventure</span>
</h1>
<p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto font-light">
                    Explore curated packages across Domestic, International, and Asian destinations. Book seamlessly via WhatsApp.
                </p>

<div className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto bg-white p-2 rounded-xl shadow-xl">
<div className="flex-1 flex items-center px-3 border-b md:border-b-0 md:border-r border-slate-100">
<i className="w-4 h-4 text-slate-400 mr-2" data-lucide="map-pin"></i>
<input className="w-full py-2 text-sm text-slate-700 placeholder:text-slate-400 bg-transparent border-none focus:ring-0" placeholder="Where do you want to go?" type="text"/>
</div>
<button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-teal-700 transition flex items-center justify-center gap-2" onclick="scrollToPackages()">
                        Search
                    </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
<div className="grid grid-cols-3 gap-4 md:gap-8">
<button className="bg-white hover:bg-slate-50 p-4 rounded-xl shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center border border-slate-100 transition-all hover:-translate-y-1" onclick="filterPackages('Domestic')">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
<i className="w-5 h-5" data-lucide="mountain"></i>
</div>
<span className="text-sm font-semibold text-slate-800">Domestic</span>
</button>
<button className="bg-white hover:bg-slate-50 p-4 rounded-xl shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center border border-slate-100 transition-all hover:-translate-y-1" onclick="filterPackages('International')">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<span className="text-sm font-semibold text-slate-800">International</span>
</button>
<button className="bg-white hover:bg-slate-50 p-4 rounded-xl shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center border border-slate-100 transition-all hover:-translate-y-1" onclick="filterPackages('Asia')">
<div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
<i className="w-5 h-5" data-lucide="palmtree"></i>
</div>
<span className="text-sm font-semibold text-slate-800">Asia</span>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" id="packages-section">
<div className="flex flex-col md:flex-row justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Curated Packages</h2>
<p className="text-slate-500 text-sm mt-1">Select a destination to view itinerary and book.</p>
</div>

<div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-white border border-slate-900 transition-all" id="btn-all" onclick="filterPackages('all')">All</button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all" id="btn-Domestic" onclick="filterPackages('Domestic')">Domestic</button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all" id="btn-International" onclick="filterPackages('International')">International</button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all" id="btn-Asia" onclick="filterPackages('Asia')">Asia Specials</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="packages-grid">

</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="package-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute inset-y-0 right-0 w-full md:w-[90%] lg:w-[1000px] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 translate-x-full" id="modal-content">
<button className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white transition" onclick="closeModal()">
<i className="w-5 h-5 text-slate-800" data-lucide="x"></i>
</button>
<div className="grid grid-cols-1 lg:grid-cols-5 min-h-full">

<div className="lg:col-span-3 p-6 md:p-10 pb-24 md:pb-10">
<div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 relative bg-slate-100" id="modal-image-container">
<img alt="" className="w-full h-full object-cover" id="modal-img" src=""/>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-2 py-1 bg-black/50 backdrop-blur text-white text-xs font-medium rounded" id="modal-category"></span>
<span className="px-2 py-1 bg-black/50 backdrop-blur text-white text-xs font-medium rounded flex items-center gap-1" id="modal-duration">
<i className="w-3 h-3" data-lucide="clock"></i> <span id="modal-duration-text"></span>
</span>
</div>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2" id="modal-title"></h2>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<span className="text-teal-600 font-semibold text-xl" id="modal-price"></span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>per person</span>
</div>
<div className="space-y-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Highlights</h3>
<ul className="space-y-2" id="modal-highlights">

</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Description</h3>
<p className="text-slate-600 leading-relaxed text-sm" id="modal-desc"></p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Inclusions</h3>
<div className="flex flex-wrap gap-2" id="modal-inclusions">

</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-slate-50 border-l border-slate-200 p-6 md:p-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Book This Tour</h3>
<p className="text-xs text-slate-500 mb-6">Fill details to get a quote via WhatsApp.</p>
<form className="space-y-4" id="booking-form" onsubmit="handleBooking(event)">
<input id="form-package-id" type="hidden"/>
<input id="form-package-name" type="hidden"/>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:border-teal-500 transition-colors" id="form-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone (with Country Code)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:border-teal-500 transition-colors" id="form-phone" placeholder="+91 987..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:border-teal-500 transition-colors" id="form-email" placeholder="john@doe.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Travel Date</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:border-teal-500 transition-colors" id="form-date" required="" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Travelers</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:border-teal-500 transition-colors" id="form-travelers" min="1" required="" type="number" value="2"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Special Requests</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:border-teal-500 transition-colors" id="form-notes" placeholder="Dietary restrictions, honeymoon..." rows="2"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-semibold text-sm shadow-md shadow-green-200 transition-all flex items-center justify-center gap-2" type="submit">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                                    Enquire via WhatsApp
                                </button>
<p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i> Your details are secure
                                </p>
</div>
</form>
</div>

<div className="mt-6 text-center">
<p className="text-xs text-slate-500 mb-2">Prefer email?</p>
<button className="text-xs font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5" onclick="alert('Email integration would go here (Server-side)')">
                            Send via Email instead
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="admin-modal">
<div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onclick="toggleAdmin()"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-2xl shadow-2xl p-8 max-h-[85vh] overflow-y-auto">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-2xl font-bold text-slate-900">Admin Dashboard</h2>
<p className="text-sm text-slate-500">View inquiries and manage integrations.</p>
</div>
<button className="p-2 hover:bg-slate-100 rounded-full" onclick="toggleAdmin()"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>

<div className="flex gap-4 border-b border-slate-200 mb-6">
<button className="pb-2 border-b-2 border-teal-600 text-teal-600 font-medium text-sm">Recent Submissions</button>
<button className="pb-2 border-b-2 border-transparent text-slate-500 font-medium text-sm hover:text-slate-700">Developer / API</button>
</div>

<div className="overflow-x-auto border border-slate-200 rounded-lg">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-4 py-3 font-medium text-slate-900">Date</th>
<th className="px-4 py-3 font-medium text-slate-900">Name</th>
<th className="px-4 py-3 font-medium text-slate-900">Package</th>
<th className="px-4 py-3 font-medium text-slate-900">Status</th>
<th className="px-4 py-3 font-medium text-slate-900">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3">Oct 24, 2023</td>
<td className="px-4 py-3 font-medium text-slate-900">Sarah Jenkins</td>
<td className="px-4 py-3">Bali Bliss</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Sent</span></td>
<td className="px-4 py-3"><button className="text-teal-600 hover:underline text-xs">Resend</button></td>
</tr>

<tr className="hover:bg-slate-50">
<td className="px-4 py-3">Oct 23, 2023</td>
<td className="px-4 py-3 font-medium text-slate-900">Mike Ross</td>
<td className="px-4 py-3">Rajasthan Royal</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Sent</span></td>
<td className="px-4 py-3"><button className="text-teal-600 hover:underline text-xs">Resend</button></td>
</tr>
</tbody>
</table>
</div>

<div className="mt-8 bg-slate-900 rounded-xl p-6 text-slate-300 font-mono text-xs overflow-x-auto">
<div className="flex justify-between mb-2">
<span className="text-teal-400 font-bold uppercase tracking-wider">Server-side Webhook Example (Node.js)</span>
<button className="text-white hover:text-teal-400">Copy</button>
</div>
<pre>
// POST /api/form-submission
app.post('/api/form-submission', async (req, res) =&gt; {
  const { package_name, name, phone, dates } = req.body;
  
  // Twilio Logic
  const client = require('twilio')(accountSid, authToken);
  
  await client.messages.create({
     body: `New Booking: ${package_name} by ${name} for ${dates}. Contact: ${phone}`,
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+1234567890' // Business Number
  });
  
  res.json({ status: 'success' });
});
</pre>
</div>
</div>
</div>

<a className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/20 hover:-translate-y-1 transition-transform z-40 flex items-center justify-center" href="https://wa.me/1234567890" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</a>

<footer className="bg-white border-t border-slate-200 mt-20 py-12">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex items-center justify-center mb-4 text-slate-900 font-bold tracking-tight text-xl">
                VOYAGE
            </div>
<p className="text-slate-500 text-sm mb-6">Premium tours to Domestic, International, and Asian destinations.</p>
<div className="text-xs text-slate-400">
                © 2023 Voyage Travels. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
