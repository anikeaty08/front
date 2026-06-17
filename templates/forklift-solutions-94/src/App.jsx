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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Sticky Nav & Mobile Menu ---
            const navbar = document.getElementById('navbar');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const drawer = document.getElementById('mobile-drawer');
            const overlay = document.getElementById('mobile-overlay');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 40) {
                    navbar.classList.add('bg-white', 'shadow-sm', 'border-gray-100');
                    navbar.classList.remove('bg-white/0', 'backdrop-blur-md', 'border-transparent');
                } else {
                    navbar.classList.remove('bg-white', 'shadow-sm', 'border-gray-100');
                    navbar.classList.add('bg-white/0', 'backdrop-blur-md', 'border-transparent');
                }
            });

            function toggleMenu() {
                const isOpen = !drawer.classList.contains('translate-x-full');
                if (isOpen) {
                    drawer.classList.add('translate-x-full');
                    overlay.classList.add('hidden');
                    overlay.classList.remove('opacity-100');
                } else {
                    drawer.classList.remove('translate-x-full');
                    overlay.classList.remove('hidden');
                    // Small delay for transition
                    setTimeout(() => overlay.classList.add('opacity-100'), 10);
                }
            }
            mobileBtn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));


            // --- Scroll Animations (Intersection Observer) ---
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Handle Counters
                        const counters = entry.target.querySelectorAll('.stat-counter');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000;
                            const increment = target / (duration / 16); // 60fps
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                            counter.classList.remove('stat-counter'); // Prevent re-trigger
                        });
                        
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));


            // --- Rental Data & Filtering ---
            const rentalData = [
                { id: 1, name: 'Toyota 8FBE15T', cat: 'electric', cap: '1.5T', mast: '4.3m Triplex', feature: 'Compact 3-Wheel', imgCat: 'Electric' },
                { id: 2, name: 'Linde E20', cat: 'electric', cap: '2.0T', mast: '4.8m Triplex', feature: 'Non-Marking Tires', imgCat: 'Electric' },
                { id: 3, name: 'Toyota 8FD25', cat: 'diesel', cap: '2.5T', mast: '4.5m Triplex', feature: 'Solid Tires', imgCat: 'Diesel' },
                { id: 4, name: 'Caterpillar DP30', cat: 'diesel', cap: '3.0T', mast: '4.5m Triplex', feature: 'Side Shift', imgCat: 'Diesel' },
                { id: 5, name: 'Hyster H7.0FT', cat: 'diesel', cap: '7.0T', mast: '3.5m Duplex', feature: 'Heavy Duty Cab', imgCat: 'Heavy' },
                { id: 6, name: 'Jungheinrich ETV 214', cat: 'reach', cap: '1.4T', mast: '8.5m Triplex', feature: 'Camera System', imgCat: 'Reach' },
                { id: 7, name: 'BT Reflex RRE160', cat: 'reach', cap: '1.6T', mast: '9.0m Triplex', feature: 'Cold Store Cab', imgCat: 'Reach' },
                { id: 8, name: 'Toyota LHE150', cat: 'pallet', cap: '1.5T', mast: '200mm Lift', feature: 'Lithium-Ion', imgCat: 'Pallet' },
                { id: 9, name: 'Linde T20', cat: 'pallet', cap: '2.0T', mast: 'Ride-On Platform', feature: 'Power Steering', imgCat: 'Pallet' }
            ];

            const rentalGrid = document.getElementById('rental-grid');
            const filterBtns = document.querySelectorAll('.filter-btn');

            function renderRentals(filter = 'all') {
                rentalGrid.style.opacity = 0;
                setTimeout(() => {
                    rentalGrid.innerHTML = '';
                    const filtered = filter === 'all' ? rentalData : rentalData.filter(item => item.cat === filter);
                    
                    filtered.forEach(item => {
                        const badgeColor = item.cat === 'electric' ? 'bg-green-100 text-green-700' : (item.cat === 'diesel' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700');
                        
                        const card = `
                            <div class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-1 relative group overflow-hidden">
                                <div class="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}">${item.imgCat}</div>
                                <div class="w-full h-32 bg-[#F4F7FB] rounded-lg mb-4 flex items-center justify-center group-hover:bg-[#EEF3FA] transition-colors">
                                    <iconify-icon icon="solar:box-minimalistic-linear" class="text-4xl text-[#0A2540]/20"></iconify-icon>
                                </div>
                                <h3 class="font-['Syne',sans-serif] text-lg font-semibold text-[#0A2540] mb-1">${item.name}</h3>
                                <p class="text-[#FF6B00] font-semibold text-sm mb-4">Capacity: ${item.cap}</p>
                                <ul class="space-y-1.5 mb-6">
                                    <li class="text-xs text-[#0A2540]/70 flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#FF6B00]"></iconify-icon> Mast: ${item.mast}</li>
                                    <li class="text-xs text-[#0A2540]/70 flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#FF6B00]"></iconify-icon> ${item.feature}</li>
                                    <li class="text-xs text-[#0A2540]/70 flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#FF6B00]"></iconify-icon> Fully Inspected</li>
                                </ul>
                                <a href="#contact" class="block w-full text-center py-2.5 bg-white border border-[#FF6B00] text-[#FF6B00] text-xs font-semibold rounded-lg hover:bg-[#FF6B00] hover:text-white transition-colors">Request Quote</a>
                            </div>
                        `;
                        rentalGrid.insertAdjacentHTML('beforeend', card);
                    });
                    rentalGrid.style.opacity = 1;
                }, 150);
            }

            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-[#FF6B00]', 'text-white', 'shadow-md');
                        b.classList.add('bg-[#F4F7FB]', 'text-[#0A2540]/70');
                    });
                    e.target.classList.add('bg-[#FF6B00]', 'text-white', 'shadow-md');
                    e.target.classList.remove('bg-[#F4F7FB]', 'text-[#0A2540]/70');
                    renderRentals(e.target.dataset.filter);
                });
            });
            renderRentals();


            // --- Inventory Data, Sorting & Pagination ---
            let inventoryData = [
                { ref: 'EC-01', brand: 'Toyota', model: '8FD25', height: '4.5m', year: 2019, engine: 'Diesel', cap: '2.5T' },
                { ref: 'EC-02', brand: 'Linde', model: 'E20', height: '4.8m', year: 2021, engine: 'Electric', cap: '2.0T' },
                { ref: 'EC-03', brand: 'Jungheinrich', model: 'ETV 214', height: '8.5m', year: 2018, engine: 'Electric', cap: '1.4T' },
                { ref: 'EC-04', brand: 'Hyster', model: 'H3.0FT', height: '4.5m', year: 2020, engine: 'Diesel', cap: '3.0T' },
                { ref: 'EC-05', brand: 'Toyota', model: '8FBE15T', height: '4.3m', year: 2022, engine: 'Electric', cap: '1.5T' },
                { ref: 'EC-06', brand: 'Linde', model: 'H30D', height: '4.7m', year: 2017, engine: 'Diesel', cap: '3.0T' },
                { ref: 'EC-07', brand: 'Toyota', model: '8FGU25', height: '4.8m', year: 2019, engine: 'LPG', cap: '2.5T' },
                { ref: 'EC-08', brand: 'Hyster', model: 'H7.0FT', height: '3.5m', year: 2016, engine: 'Diesel', cap: '7.0T' },
                { ref: 'EC-09', brand: 'Jungheinrich', model: 'EFG 216k', height: '4.5m', year: 2021, engine: 'Electric', cap: '1.6T' },
                { ref: 'EC-10', brand: 'Toyota', model: '7FBE15', height: '4.3m', year: 2015, engine: 'Electric', cap: '1.5T' },
                { ref: 'EC-11', brand: 'Linde', model: 'T20', height: '0.2m', year: 2022, engine: 'Electric', cap: '2.0T' },
                { ref: 'EC-12', brand: 'Hyster', model: 'J1.6XNT', height: '4.5m', year: 2018, engine: 'Electric', cap: '1.6T' },
            ];

            const tbody = document.getElementById('inventory-body');
            const brandFilter = document.getElementById('inv-brand');
            const engineFilter = document.getElementById('inv-engine');
            const searchInput = document.getElementById('inv-search');
            const resetBtn = document.getElementById('reset-filters');
            const paginationEl = document.getElementById('inv-pagination');
            const counterEl = document.getElementById('inv-counter');

            let currentData = [...inventoryData];
            let currentPage = 1;
            const itemsPerPage = 5;
            let sortCol = null;
            let sortAsc = true;

            function renderTable() {
                tbody.innerHTML = '';
                
                const start = (currentPage - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const paginatedData = currentData.slice(start, end);

                if (paginatedData.length === 0) {
                    tbody.innerHTML = `<tr><td colspan="8" class="px-6 py-8 text-center text-sm text-[#0A2540]/50">No equipment matches your search.</td></tr>`;
                }

                paginatedData.forEach(item => {
                    const engineBadge = item.engine === 'Electric' ? 'bg-green-100 text-green-700' : (item.engine === 'Diesel' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700');
                    
                    const row = `
                        <tr class="hover:bg-[#FF6B00]/5 transition-colors border-b border-gray-50 last:border-0">
                            <td class="px-6 py-4 font-semibold text-xs">${item.ref}</td>
                            <td class="px-6 py-4 text-xs font-medium">${item.brand}</td>
                            <td class="px-6 py-4 text-xs">${item.model}</td>
                            <td class="px-6 py-4 text-xs">${item.height}</td>
                            <td class="px-6 py-4 text-xs">${item.year}</td>
                            <td class="px-6 py-4 text-xs"><span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${engineBadge}">${item.engine}</span></td>
                            <td class="px-6 py-4 text-xs font-semibold">${item.cap}</td>
                            <td class="px-6 py-4 text-right">
                                <a href="#contact" class="inline-flex items-center px-3 py-1.5 border border-[#FF6B00] text-[#FF6B00] text-[10px] font-semibold rounded-full hover:bg-[#FF6B00] hover:text-white transition-colors">Enquire</a>
                            </td>
                        </tr>
                    `;
                    tbody.insertAdjacentHTML('beforeend', row);
                });

                // Update Pagination UI
                const totalPages = Math.ceil(currentData.length / itemsPerPage);
                paginationEl.innerHTML = '';
                for (let i = 1; i <= totalPages; i++) {
                    const activeClass = i === currentPage ? 'bg-[#FF6B00] text-white border-[#FF6B00]' : 'bg-white text-[#0A2540] border-gray-200 hover:bg-gray-50';
                    paginationEl.innerHTML += `<button class="page-btn w-8 h-8 rounded border text-xs font-semibold transition-colors ${activeClass}" data-page="${i}">${i}</button>`;
                }

                counterEl.innerText = `Showing ${currentData.length > 0 ? start + 1 : 0} to ${Math.min(end, currentData.length)} of ${currentData.length} entries`;

                document.querySelectorAll('.page-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        currentPage = parseInt(e.target.dataset.page);
                        renderTable();
                    });
                });
            }

            function applyFilters() {
                const b = brandFilter.value.toLowerCase();
                const e = engineFilter.value.toLowerCase();
                const s = searchInput.value.toLowerCase();

                currentData = inventoryData.filter(item => {
                    const matchBrand = b === '' || item.brand.toLowerCase() === b;
                    const matchEngine = e === '' || item.engine.toLowerCase() === e;
                    const matchSearch = s === '' || item.ref.toLowerCase().includes(s) || item.model.toLowerCase().includes(s);
                    return matchBrand && matchEngine && matchSearch;
                });
                
                if (sortCol) doSort();
                currentPage = 1;
                renderTable();
            }

            function doSort() {
                currentData.sort((a, b) => {
                    let valA = a[sortCol];
                    let valB = b[sortCol];
                    
                    if (sortCol === 'cap') {
                        valA = parseFloat(valA);
                        valB = parseFloat(valB);
                    }
                    if (sortCol === 'year') {
                        valA = parseInt(valA);
                        valB = parseInt(valB);
                    }

                    if (valA < valB) return sortAsc ? -1 : 1;
                    if (valA > valB) return sortAsc ? 1 : -1;
                    return 0;
                });
            }

            // Events
            brandFilter.addEventListener('change', applyFilters);
            engineFilter.addEventListener('change', applyFilters);
            searchInput.addEventListener('input', applyFilters);
            resetBtn.addEventListener('click', () => {
                brandFilter.value = ''; engineFilter.value = ''; searchInput.value = '';
                sortCol = null; currentData = [...inventoryData]; currentPage = 1; renderTable();
            });

            document.querySelectorAll('th[data-sort]').forEach(th => {
                th.addEventListener('click', () => {
                    const col = th.dataset.sort;
                    if (sortCol === col) {
                        sortAsc = !sortAsc;
                    } else {
                        sortCol = col;
                        sortAsc = true;
                    }
                    doSort();
                    renderTable();
                });
            });

            renderTable();


            // --- Testimonial Carousel ---
            const testimonials = [
                { name: 'Mr. Ibrar', role: 'Logistics Manager', comp: 'Al Maya Group', city: 'Dubai', quote: 'Equip Circle provided us with 5 reach trucks on zero deposit. Their 6-hour response time is no joke—when a battery failed, they swapped it in 4 hours.' },
                { name: 'Mr. Bagesh', role: 'Operations Head', comp: 'Gulf Contracting', city: 'Abu Dhabi', quote: 'The diesel 7-tonner we rented was in pristine condition. Their maintenance schedule is proactive, meaning zero downtime for our site.' },
                { name: 'Mr. Amaan', role: 'Warehouse Supervisor', comp: 'Noor Cold Store', city: 'Sharjah', quote: 'Finding reliable electric equipment for cold storage is tough. Equip Circle customized Linde units for us and they work flawlessly at -20°C.' },
                { name: 'Mr. Deepak', role: 'Procurement', comp: 'BuildPro UAE', city: 'RAK', quote: 'We bought 3 refurbished Toyota units. The 7-step process they showed us is legit. The machines looked and operated like brand new.' },
                { name: 'Mr. Faiz', role: 'Site Engineer', comp: 'Emaar Properties', city: 'Dubai', quote: 'Flexible monthly terms saved our budget during project delays. Highly recommend their professional team.' }
            ];

            const testTrack = document.getElementById('testimonial-track');
            
            testimonials.forEach(t => {
                const card = `
                    <div class="bg-white/5 border border-white/10 p-8 rounded-2xl w-[300px] sm:w-[350px] flex-shrink-0 relative group hover:bg-white/10 transition-colors cursor-default">
                        <div class="flex text-[#FFD100] text-sm mb-4"><iconify-icon icon="solar:star-bold" class="mr-0.5"></iconify-icon><iconify-icon icon="solar:star-bold" class="mr-0.5"></iconify-icon><iconify-icon icon="solar:star-bold" class="mr-0.5"></iconify-icon><iconify-icon icon="solar:star-bold" class="mr-0.5"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
                        <p class="text-sm text-white/80 font-light italic mb-6 leading-relaxed">"${t.quote}"</p>
                        <div class="flex justify-between items-end">
                            <div>
                                <h4 class="font-semibold text-white text-sm">${t.name}</h4>
                                <p class="text-xs text-white/50">${t.role}, ${t.comp}</p>
                            </div>
                            <span class="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-2 py-1 rounded">${t.city}</span>
                        </div>
                    </div>
                `;
                testTrack.innerHTML += card;
            });

            // Simple scroll logic
            const prevTest = document.getElementById('prev-test');
            const nextTest = document.getElementById('next-test');
            const container = document.getElementById('testimonial-container');
            
            const scrollAmt = 320; // card width + gap
            
            nextTest?.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
            });
            prevTest?.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
            });

            // Auto scroll loop
            let isHovered = false;
            container.addEventListener('mouseenter', () => isHovered = true);
            container.addEventListener('mouseleave', () => isHovered = false);
            
            setInterval(() => {
                if(!isHovered) {
                    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
                    }
                }
            }, 4000);

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
      

<div className="bg-[#FF6B00] text-white text-xs font-medium py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 z-50 relative tracking-wide">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> +971 52 248 3348</span>
<span className="hidden sm:inline opacity-50">·</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Fast Delivery Across All 7 Emirates</span>
<span className="hidden sm:inline opacity-50">·</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> No Security Deposit Required</span>
</div>

<nav className="sticky top-0 w-full z-40 transition-all duration-300 bg-white/0 backdrop-blur-md border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

<a className="flex items-center gap-1.5 group" href="#">
<span className="font-['Syne',sans-serif] text-xl sm:text-2xl font-semibold tracking-tighter text-[#0A2540] transition-colors group-hover:text-[#FF6B00]">EQUIP</span>
<span className="text-[#FF6B00] text-xl sm:text-2xl leading-none">⬤</span>
<span className="font-['Syne',sans-serif] text-xl sm:text-2xl font-semibold tracking-tighter text-[#0A2540] transition-colors group-hover:text-[#FF6B00]">CIRCLE</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#rentals">Rentals</a>
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#inventory">Used Forklifts</a>
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-[#0A2540]/80 hover:text-[#FF6B00] transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#FF6B00] rounded-full hover:bg-[#e66000] hover:scale-[1.02] transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)]" href="#contact">
                    Get a Quote
                </a>
<button className="lg:hidden text-[#0A2540] p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-50 flex flex-col" id="mobile-drawer">
<div className="p-4 flex justify-end border-b border-gray-100">
<button className="text-[#0A2540] p-2" id="close-menu-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex flex-col p-6 gap-6">
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#home">Home</a>
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#rentals">Rentals</a>
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#inventory">Used Forklifts</a>
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#services">Services</a>
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#about">About</a>
<a className="mobile-link text-base font-medium text-[#0A2540]" href="#contact">Contact</a>
<a className="mt-4 text-center px-6 py-3 text-sm font-semibold text-white bg-[#FF6B00] rounded-full shadow-lg" href="#contact">Get a Quote</a>
</div>
</div>

<div className="fixed inset-0 bg-[#0A2540]/20 backdrop-blur-sm hidden z-40 transition-opacity" id="mobile-overlay"></div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white" id="home">

<div className="absolute top-0 right-0 w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] bg-[radial-gradient(circle,rgba(255,107,0,0.08)_0%,rgba(255,209,0,0.05)_40%,transparent_70%)] animate-blob -z-10 translate-x-1/4 -translate-y-1/4"></div>
<div className="absolute inset-0 opacity-[0.03] -z-10" style={{backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

<div className="w-full lg:w-[60%] flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF3FA] border border-[#0A2540]/5 mb-6 animate-slide-up" style={{animationDelay: '100ms'}}>
<span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse"></span>
<span className="text-xs font-semibold text-[#0A2540] tracking-wide uppercase">UAE's Premier Partner</span>
</div>
<h1 className="font-['Syne',sans-serif] text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-[#0A2540] leading-[1.1] mb-6">
<div className="overflow-hidden"><span className="inline-block animate-slide-up" style={{animationDelay: '200ms'}}>UAE's #1 Forklift</span></div>
<div className="overflow-hidden"><span className="inline-block animate-slide-up" style={{animationDelay: '300ms'}}>Rental &amp; Sales</span></div>
<div className="overflow-hidden text-[#FF6B00]"><span className="inline-block animate-slide-up" style={{animationDelay: '400ms'}}>Partner.</span></div>
</h1>
<p className="text-base lg:text-lg text-[#0A2540]/70 font-light max-w-xl mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '500ms'}}>
                        Premium material handling solutions across all 7 Emirates. Inspected fleets, 6-hour breakdown support, and absolutely zero security deposit.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 animate-slide-up" style={{animationDelay: '600ms'}}>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#FF6B00] rounded-full hover:bg-[#e66000] hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_-4px_rgba(255,107,0,0.4)]" href="#contact">
                            Request a Quote <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#0A2540] bg-white border border-[#0A2540]/20 rounded-full hover:border-[#0A2540] hover:bg-[#F4F7FB] transition-all" href="#inventory">
                            Browse Used Forklifts
                        </a>
</div>

<div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-[#0A2540]/5 animate-slide-up" style={{animationDelay: '700ms'}}>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#0A2540]/80">
<iconify-icon className="text-[#FF6B00] text-base" icon="solar:check-circle-linear"></iconify-icon> No Deposit
                        </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#0A2540]/80">
<iconify-icon className="text-[#FF6B00] text-base" icon="solar:history-linear"></iconify-icon> 6-Hr Breakdown Support
                        </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#0A2540]/80">
<iconify-icon className="text-[#FF6B00] text-base" icon="solar:map-point-linear"></iconify-icon> Delivered UAE-Wide
                        </div>
</div>
</div>

<div className="w-full lg:w-[40%] flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '500ms'}}>
<div className="relative w-full max-w-md aspect-square bg-[#F4F7FB] rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_60%)]"></div>

<svg className="w-3/4 h-3/4 drop-shadow-xl relative z-10 transform hover:scale-105 transition-transform duration-700" viewbox="0 0 120 120">

<rect fill="#0A2540" height="70" rx="2" width="8" x="75" y="20"></rect>
<rect fill="#0A2540" height="60" opacity="0.8" rx="1" width="4" x="85" y="30"></rect>

<path d="M 85 85 L 115 85 L 115 90 L 80 90 Z" fill="#FF6B00"></path>

<rect fill="#0A2540" height="35" rx="6" width="55" x="25" y="50"></rect>

<path d="M 35 50 L 45 25 L 65 25 L 70 50 Z" fill="#EEF3FA" stroke="#0A2540" strokeLinejoin="round" strokeWidth="3"></path>

<rect fill="#0A2540" height="4" rx="2" width="26" x="42" y="22"></rect>

<circle cx="40" cy="90" fill="#111" r="12"></circle>
<circle cx="40" cy="90" fill="#F4F7FB" r="6"></circle>
<circle cx="70" cy="90" fill="#111" r="10"></circle>
<circle cx="70" cy="90" fill="#F4F7FB" r="4"></circle>

<path d="M 50 45 L 50 35 L 55 35" fill="none" stroke="#0A2540" strokeWidth="2"></path>
<circle cx="55" cy="33" fill="#FF6B00" r="3"></circle>
<rect fill="#0A2540" height="10" opacity="0.9" rx="2" width="8" x="40" y="40"></rect>

<rect fill="#FFD100" height="4" width="40" x="30" y="60"></rect>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-[#0A2540]/5 py-4 overflow-hidden flex shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
<div className="animate-marquee-content items-center gap-12 sm:gap-24 px-12">

<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">LINDE</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">TOYOTA</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">JUNGHEINRICH</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">CATERPILLAR</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">KOMATSU</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">HYSTER</span>

<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">LINDE</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">TOYOTA</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">JUNGHEINRICH</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">CATERPILLAR</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">KOMATSU</span>
<span className="font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-tight text-[#0A2540]/30 hover:text-[#0A2540]/60 transition-colors cursor-default">HYSTER</span>
</div>
</div>
</section>

<section className="bg-[#0A2540] py-16 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#FF6B00]/30">
<div className="text-center md:text-left md:pl-8 first:pl-0 reveal-on-scroll">
<div className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-semibold text-[#FF6B00] tracking-tight mb-2"><span className="stat-counter" data-target="20">0</span>+</div>
<div className="text-sm text-white/80 font-medium">Years in UAE Market</div>
</div>
<div className="text-center md:text-left md:pl-8 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-semibold text-[#FF6B00] tracking-tight mb-2"><span className="stat-counter" data-target="50">0</span>+</div>
<div className="text-sm text-white/80 font-medium">Service Locations</div>
</div>
<div className="text-center md:text-left md:pl-8 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-semibold text-[#FF6B00] tracking-tight mb-2"><span className="stat-counter" data-target="500">0</span></div>
<div className="text-sm text-white/80 font-medium">KM Coverage Radius</div>
</div>
<div className="text-center md:text-left md:pl-8 reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-semibold text-[#FF6B00] tracking-tight mb-2"><span className="stat-counter" data-target="100">0</span>+</div>
<div className="text-sm text-white/80 font-medium">Training Courses</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#EEF3FA]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight inline-block relative">
                    Everything You Need, Under One Roof
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B00] rounded-full"></span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">Forklift Rental</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Flexible daily, weekly, and monthly plans tailored to your project lifecycle. No hidden fees.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#rentals">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll" style={{transitionDelay: '50ms'}}>
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">Used Forklifts</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Certified, refurbished, and warrantied equipment passing our rigorous 7-step inspection.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#inventory">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">Parts &amp; Service</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Genuine OEM parts inventory and rapid mobile repair units ready to deploy across the UAE.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#contact">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">Operator Training</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Over 100+ certified safety and operational courses ensuring your workforce meets regulations.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#contact">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">In-House Financing</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Lease or finance your next fleet upgrade with ease through our competitive internal programs.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#contact">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-t-[#FF6B00] hover:-translate-y-1 reveal-on-scroll" style={{transitionDelay: '250ms'}}>
<div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] tracking-tight mb-3">Fleet Management</h3>
<p className="text-sm text-[#0A2540]/60 font-light mb-6 leading-relaxed">Comprehensive long-term solutions optimizing uptime and reducing TCO for large operations.</p>
<a className="inline-flex items-center text-xs font-semibold text-[#FF6B00] hover:text-[#e66000] transition-colors" href="#contact">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="rentals">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div>
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight mb-4">Our Rental Fleet</h2>
<p className="text-sm text-[#0A2540]/60 font-light max-w-xl">Maintained to perfection and ready for immediate deployment. Find the exact capability you need.</p>
</div>

<div className="flex flex-wrap gap-2" id="rental-filters">
<button className="filter-btn active px-4 py-2 rounded-full text-xs font-medium transition-colors bg-[#FF6B00] text-white shadow-md" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium transition-colors bg-[#F4F7FB] text-[#0A2540]/70 hover:bg-[#EEF3FA] hover:text-[#0A2540]" data-filter="electric">Electric</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium transition-colors bg-[#F4F7FB] text-[#0A2540]/70 hover:bg-[#EEF3FA] hover:text-[#0A2540]" data-filter="diesel">Diesel</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium transition-colors bg-[#F4F7FB] text-[#0A2540]/70 hover:bg-[#EEF3FA] hover:text-[#0A2540]" data-filter="reach">Reach Trucks</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium transition-colors bg-[#F4F7FB] text-[#0A2540]/70 hover:bg-[#EEF3FA] hover:text-[#0A2540]" data-filter="pallet">Pallet Equipment</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300" id="rental-grid">

</div>
</div>
</section>

<section className="py-20 bg-[#F4F7FB]" id="inventory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 reveal-on-scroll">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 mb-3 shadow-sm">
<iconify-icon className="text-[#FF6B00]" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-[10px] sm:text-xs font-semibold text-[#0A2540] uppercase tracking-wider">Certified · Refurbished · Warrantied</span>
</div>
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight">Used Forklift Stock</h2>
</div>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-4 items-center justify-between reveal-on-scroll z-20 relative">
<div className="flex flex-wrap gap-4 w-full lg:w-auto flex-1">
<select className="bg-[#F4F7FB] border border-transparent text-[#0A2540] text-sm rounded-lg focus:ring-[#FF6B00] focus:border-[#FF6B00] block w-full sm:w-auto p-2.5 outline-none cursor-pointer" id="inv-brand">
<option value="">All Brands</option>
<option value="Toyota">Toyota</option>
<option value="Linde">Linde</option>
<option value="Jungheinrich">Jungheinrich</option>
<option value="Hyster">Hyster</option>
</select>
<select className="bg-[#F4F7FB] border border-transparent text-[#0A2540] text-sm rounded-lg focus:ring-[#FF6B00] focus:border-[#FF6B00] block w-full sm:w-auto p-2.5 outline-none cursor-pointer" id="inv-engine">
<option value="">All Engines</option>
<option value="Electric">Electric</option>
<option value="Diesel">Diesel</option>
<option value="LPG">LPG</option>
</select>
<div className="relative w-full sm:w-auto flex-1 min-w-[200px]">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="bg-[#F4F7FB] border border-transparent text-[#0A2540] text-sm rounded-lg focus:ring-[#FF6B00] focus:border-[#FF6B00] block w-full pl-10 p-2.5 outline-none" id="inv-search" placeholder="Search by Ref No. or Model" type="text"/>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-2.5 text-sm font-semibold text-[#0A2540] bg-[#EEF3FA] hover:bg-gray-200 rounded-lg transition-colors" id="reset-filters">Reset</button>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal-on-scroll">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left text-[#0A2540]">
<thead className="text-xs text-[#0A2540] uppercase bg-[#EEF3FA] border-b border-gray-100">
<tr>
<th className="px-6 py-4 font-semibold cursor-pointer hover:text-[#FF6B00] transition-colors" data-sort="ref" scope="col">Ref # <iconify-icon className="inline align-middle" icon="solar:sort-vertical-linear"></iconify-icon></th>
<th className="px-6 py-4 font-semibold cursor-pointer hover:text-[#FF6B00] transition-colors" data-sort="brand" scope="col">Brand <iconify-icon className="inline align-middle" icon="solar:sort-vertical-linear"></iconify-icon></th>
<th className="px-6 py-4 font-semibold" scope="col">Model</th>
<th className="px-6 py-4 font-semibold" scope="col">Lift Height</th>
<th className="px-6 py-4 font-semibold cursor-pointer hover:text-[#FF6B00] transition-colors" data-sort="year" scope="col">Year <iconify-icon className="inline align-middle" icon="solar:sort-vertical-linear"></iconify-icon></th>
<th className="px-6 py-4 font-semibold" scope="col">Engine</th>
<th className="px-6 py-4 font-semibold cursor-pointer hover:text-[#FF6B00] transition-colors" data-sort="cap" scope="col">Capacity <iconify-icon className="inline align-middle" icon="solar:sort-vertical-linear"></iconify-icon></th>
<th className="px-6 py-4 font-semibold text-right" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50" id="inventory-body">

</tbody>
</table>
</div>

<div className="flex items-center justify-between p-4 border-t border-gray-50 bg-[#F4F7FB]/50">
<span className="text-xs text-[#0A2540]/60" id="inv-counter">Showing 1 to 5 of 15 entries</span>
<div className="flex gap-1" id="inv-pagination">

</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight mb-6">Performance.<br/><span className="text-[#FF6B00]">Guaranteed.</span></h2>
<p className="text-sm text-[#0A2540]/70 font-light mb-8 leading-relaxed max-w-md">
                        We don't just supply equipment; we supply peace of mind. Our operational framework is designed to eliminate downtime and keep your supply chain moving seamlessly across the UAE.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-[#F4F7FB] p-4 rounded-xl border-l-4 border-[#FF6B00]">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-semibold text-sm text-[#0A2540]">Equipment Reliability Guaranteed</span>
</div>
<div className="flex items-center gap-4 bg-[#F4F7FB] p-4 rounded-xl border-l-4 border-[#FF6B00]">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-semibold text-sm text-[#0A2540]">On-Time Delivery Guaranteed</span>
</div>
<div className="flex items-center gap-4 bg-[#F4F7FB] p-4 rounded-xl border-l-4 border-[#FF6B00]">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="font-semibold text-sm text-[#0A2540]">6-Hour Breakdown Response</span>
</div>
<div className="flex items-center gap-4 bg-[#F4F7FB] p-4 rounded-xl border-l-4 border-[#FF6B00]">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:graph-up-linear"></iconify-icon>
<span className="font-semibold text-sm text-[#0A2540]">Operational Efficiency Guaranteed</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">No Security Deposit</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">Fast UAE Delivery</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">Fully Maintained</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">Operators Available</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">Flexible Terms</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"><iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon></div>
<span className="text-xs font-semibold text-[#0A2540]">Service Every 250 Hrs</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#EEF3FA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight">Built for Every Industry</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll">
<div className="text-3xl">🏪</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Warehousing &amp; Logistics</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">High-reach and narrow aisle solutions for max density.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll" style={{transitionDelay: '50ms'}}>
<div className="text-3xl">🏗️</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Construction</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Rugged diesel equipment built for uneven terrain.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="text-3xl">⚓</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Port &amp; Container</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Heavy-duty lifters for fast cargo turnaround.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="text-3xl">🏭</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Manufacturing</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Reliable workhorses for continuous line feeding.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="text-3xl">❄️</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Cold Chain</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Specialized electrics modified for sub-zero conditions.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform reveal-on-scroll" style={{transitionDelay: '250ms'}}>
<div className="text-3xl">🌾</div>
<div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-1">Agriculture</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Versatile handling for seasonal high-volume demands.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">

<div className="w-full lg:w-1/2 relative aspect-[4/3] bg-[#F4F7FB] rounded-3xl p-8 flex items-center justify-center reveal-on-scroll border border-gray-100">

<svg className="w-full h-full opacity-20" viewbox="0 0 400 300">
<path d="M50 250 L100 200 L150 220 L250 150 L320 180 L350 120 L300 80 L200 120 L150 100 L80 150 Z" fill="#0A2540" stroke="#0A2540" strokeLinejoin="round" strokeWidth="4"></path>
</svg>


<div className="absolute top-[60%] left-[30%] group cursor-pointer">
<div className="relative w-4 h-4 bg-[#FF6B00] rounded-full z-10"></div>
<div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-75"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#0A2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium">Abu Dhabi (KIZAD, Mussafah)</div>
</div>

<div className="absolute top-[45%] left-[55%] group cursor-pointer">
<div className="relative w-4 h-4 bg-[#FF6B00] rounded-full z-10"></div>
<div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-75" style={{animationDelay: '200ms'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#0A2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium">Dubai (JAFZA, DIP, Al Quoz)</div>
</div>

<div className="absolute top-[40%] left-[62%] group cursor-pointer">
<div className="relative w-3 h-3 bg-[#FF6B00] rounded-full z-10"></div>
<div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-75" style={{animationDelay: '400ms'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#0A2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium">Sharjah (SAIF Zone)</div>
</div>

<div className="absolute top-[25%] left-[75%] group cursor-pointer">
<div className="relative w-3 h-3 bg-[#FF6B00] rounded-full z-10"></div>
<div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-75" style={{animationDelay: '600ms'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#0A2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium">RAK (FTZ)</div>
</div>

<div className="absolute top-[35%] left-[85%] group cursor-pointer">
<div className="relative w-3 h-3 bg-[#FF6B00] rounded-full z-10"></div>
<div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-75" style={{animationDelay: '800ms'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#0A2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium">Fujairah Port</div>
</div>
</div>

<div className="w-full lg:w-1/2 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight mb-4">Local Expertise,<br/>Nationwide Reach.</h2>
<p className="text-sm text-[#0A2540]/70 font-light mb-8 leading-relaxed">
                        With strategic service hubs across the UAE, we guarantee rapid deployment and breakdown response. We actively serve major industrial zones.
                    </p>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">JAFZA</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">KIZAD</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">DIC</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">DIP</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">SAIF Zone</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">Mussafah</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">Al Quoz</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">RAK FTZ</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">Fujairah Port</span>
<span className="px-4 py-1.5 border border-[#FF6B00]/30 text-[#0A2540] bg-white rounded-full text-xs font-semibold shadow-sm">ICAD</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A2540] relative overflow-hidden text-white">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 flex justify-between items-end reveal-on-scroll">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<iconify-icon className="text-[#FFD100] text-xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase text-[#FFD100]">Client Success</span>
</div>
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold tracking-tight">Trusted Across the UAE</h2>
</div>
<div className="hidden sm:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" id="prev-test"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors" id="next-test"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="w-full overflow-hidden relative z-10 cursor-grab active:cursor-grabbing" id="testimonial-container">
<div className="flex gap-6 px-4 sm:px-6 lg:px-8 w-max transition-transform duration-500 ease-out" id="testimonial-track">

</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight mb-4">Our 7-Step Refurbishment Process</h2>
<p className="text-sm text-[#0A2540]/60 font-light max-w-2xl mx-auto">Every piece of used equipment undergoes a rigorous transformation before it hits our inventory floor.</p>
</div>
<div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar reveal-on-scroll">

<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">01</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Incoming Inspection</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Comprehensive 45-point diagnostic check of structural and mechanical integrity.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">02</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">System Disassembly</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Careful strip-down of engine, transmission, and hydraulic components.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">03</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Component Refurb</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">OEM parts replacement, motor rewinding, and hydraulic resealing.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">04</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Surface Treatment</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Deep cleaning, rust removal, and professional industrial repainting.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">05</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Precision Reassembly</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Factory-spec torquing and full integration of all renewed systems.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#0A2540]/10 absolute top-4 right-4">06</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Final Inspection</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Load testing, emissions check, and safety feature verification under stress.</p>
</div>
<div className="min-w-[260px] max-w-[260px] snap-center bg-[#F4F7FB] p-6 rounded-2xl relative border border-gray-100 flex-shrink-0">
<div className="text-4xl font-['Syne',sans-serif] font-bold text-[#FF6B00]/20 absolute top-4 right-4">07</div>
<h4 className="font-semibold text-sm text-[#0A2540] mb-2 relative z-10">Standard Verification</h4>
<p className="text-xs text-[#0A2540]/60 font-light leading-relaxed">Certification issuance and addition of our comprehensive warranty.</p>
</div>
</div>

<div className="mt-8 bg-[#FF6B00] rounded-2xl p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 shadow-lg reveal-on-scroll">
<span className="text-white font-['Syne',sans-serif] text-xl sm:text-2xl font-semibold tracking-tight">Save up to 40% vs. New Equipment</span>
<div className="w-2 h-2 rounded-full bg-white/50 hidden sm:block"></div>
<span className="inline-flex items-center gap-2 text-white text-sm font-medium bg-white/20 px-4 py-2 rounded-full">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon> Full Warranty Included
                </span>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF3FA] relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-semibold text-[#0A2540] tracking-tight mb-4">Let's Get Moving.</h2>
<p className="text-sm text-[#0A2540]/70 font-light mb-10 max-w-md">Need a quick rental quote or looking for a specific used model? Our team responds within 30 minutes during business hours.</p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF6B00] flex-shrink-0"><iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<p className="text-xs font-semibold text-[#0A2540]/50 uppercase tracking-wider mb-1">Call Us (24/7 Support)</p>
<p className="text-base font-semibold text-[#0A2540]">+971 52 248 3348</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF6B00] flex-shrink-0"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></div>
<div>
<p className="text-xs font-semibold text-[#0A2540]/50 uppercase tracking-wider mb-1">Email</p>
<p className="text-base font-semibold text-[#0A2540]">sales@equipcircle.ae</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF6B00] flex-shrink-0"><iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon></div>
<div>
<p className="text-xs font-semibold text-[#0A2540]/50 uppercase tracking-wider mb-1">Headquarters</p>
<p className="text-sm font-medium text-[#0A2540]">JAFZA South, Dubai, United Arab Emirates<br/><span className="text-xs text-[#0A2540]/60 font-light">(Serving all 7 Emirates)</span></p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A2540] text-xs font-semibold rounded-full border border-gray-200 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors shadow-sm" href="tel:+971522483348"><iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> Call Now</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm" href="#"><iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon> WhatsApp</a>
</div>
</div>

<div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold text-[#0A2540] mb-6">Request a Quote</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Request sent successfully!');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Full Name</label>
<input className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Company</label>
<input className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all" placeholder="Your Company LLC" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Phone</label>
<input className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all" placeholder="+971 50 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Email</label>
<input className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Equipment Interest</label>
<select className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all cursor-pointer">
<option>Electric Forklift (1.5T - 3.5T)</option>
<option>Diesel Forklift (2.5T - 10T)</option>
<option>Reach Truck</option>
<option>Electric Pallet Stacker</option>
<option>Heavy Duty Counterbalance</option>
<option>Other / Not Sure</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Type</label>
<select className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all cursor-pointer">
<option>Rental Request</option>
<option>Purchase Used</option>
<option>Service/Parts</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Emirate</label>
<select className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all cursor-pointer">
<option>Dubai</option>
<option>Abu Dhabi</option>
<option>Sharjah</option>
<option>Ajman</option>
<option>Ras Al Khaimah</option>
<option>Fujairah</option>
<option>Umm Al Quwain</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#0A2540] mb-1.5">Message / Specific Requirements</label>
<textarea className="w-full bg-[#F4F7FB] border border-transparent focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-lg px-4 py-2.5 text-sm outline-none transition-all resize-none" placeholder="Tell us about capacity, mast height, or specific attachments..." rows="3"></textarea>
</div>
<label className="flex items-center gap-2 cursor-pointer pt-2">
<input checked="" type="checkbox"/>
<span className="text-xs text-[#0A2540]/60 select-none">I agree to the privacy policy.</span>
</label>
<button className="w-full py-3.5 mt-2 text-sm font-semibold text-white bg-[#FF6B00] rounded-xl hover:bg-[#e66000] hover:-translate-y-0.5 transition-all shadow-md flex justify-center items-center gap-2" type="submit">
                            Send Request <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A2540] pt-16 pb-8 border-t-[8px] border-[#FF6B00]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

<div className="lg:col-span-2">
<a className="flex items-center gap-1.5 mb-4" href="#">
<span className="font-['Syne',sans-serif] text-2xl font-semibold tracking-tighter text-white">EQUIP</span>
<span className="text-[#FF6B00] text-2xl leading-none">⬤</span>
<span className="font-['Syne',sans-serif] text-2xl font-semibold tracking-tighter text-white">CIRCLE</span>
</a>
<p className="text-xs text-white/60 font-light mb-6 max-w-sm leading-relaxed">Keeping UAE Moving for 20+ Years. Your trusted partner for premium forklift rentals, certified used sales, and complete material handling solutions.</p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Rental Equipment</h4>
<ul className="space-y-2.5 text-xs text-white/60 font-light">
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Electric Forklifts</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Diesel Forklifts</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Reach Trucks</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Pallet Stackers</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Specialist Equipment</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Used Forklifts</h4>
<ul className="space-y-2.5 text-xs text-white/60 font-light">
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Browse Inventory</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Refurbishment Process</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Financing Options</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Company</h4>
<ul className="space-y-2.5 text-xs text-white/60 font-light">
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Service Areas</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Training Center</a></li>
<li><a className="hover:text-[#FF6B00] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40 font-light">© 2023 Equip Circle L.L.C. All rights reserved.</p>
<div className="flex flex-wrap justify-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-semibold">
<span>Dubai</span> • <span>Abu Dhabi</span> • <span>Sharjah</span> • <span>Ajman</span> • <span>RAK</span> • <span>Fujairah</span> • <span>UAQ</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
