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
            const nav = document.getElementById('mainNav');
            const menuToggle = document.getElementById('menuToggle');
            const mobileMenu = document.getElementById('mobileMenu');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('glass-nav');
                } else {
                    nav.classList.remove('glass-nav');
                }
            });

            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                if (mobileMenu.classList.contains('flex')) {
                    menuToggle.innerHTML = '<iconify-icon icon="solar:close-circle-linear"></iconify-icon>';
                } else {
                    menuToggle.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>';
                }
            });

            mobileMenu.addEventListener('click', (e) => {
                if(e.target.tagName === 'A') {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                    menuToggle.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>';
                }
            });

            // --- Number Counters ---
            const counters = document.querySelectorAll('.counter');
            const observerOptions = { threshold: 0.5 };
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = +entry.target.getAttribute('data-target');
                        let count = 0;
                        const increment = target / 50; // speed
                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                entry.target.innerText = Math.ceil(count);
                                requestAnimationFrame(updateCount);
                            } else {
                                entry.target.innerText = target;
                            }
                        };
                        updateCount();
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            counters.forEach(c => observer.observe(c));

            // --- Rental Fleet Tabs ---
            const tabBtns = document.querySelectorAll('.tab-btn');
            const rentalItems = document.querySelectorAll('.rental-item');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Active state styling
                    tabBtns.forEach(b => {
                        b.classList.remove('bg-[#F5C400]', 'text-black');
                        b.classList.add('border', 'border-gray-700', 'text-gray-300');
                    });
                    btn.classList.remove('border', 'border-gray-700', 'text-gray-300');
                    btn.classList.add('bg-[#F5C400]', 'text-black');

                    // Filtering logic
                    const filter = btn.getAttribute('data-filter');
                    rentalItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                            item.style.animation = 'fadeIn 0.5s ease forwards';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // --- Used Forklift Inventory App ---
            const mockInventory = [
                { id: 'EC-001', brand: 'Toyota', model: '8FD30', cat: 'Diesel Forklift', engine: 'Diesel', cap: '3.0T', height: '4.5m', year: 2018 },
                { id: 'EC-002', brand: 'Linde', model: 'E20', cat: 'Electric Forklift', engine: 'Electric', cap: '2.0T', height: '4.8m', year: 2020 },
                { id: 'EC-003', brand: 'Jungheinrich', model: 'ETV 214', cat: 'Reach Truck', engine: 'Electric', cap: '1.4T', height: '8.5m', year: 2019 },
                { id: 'EC-004', brand: 'Hyster', model: 'H2.5FT', cat: 'Diesel Forklift', engine: 'Diesel', cap: '2.5T', height: '4.3m', year: 2017 },
                { id: 'EC-005', brand: 'Toyota', model: '8FBE15', cat: 'Electric Forklift', engine: 'Electric', cap: '1.5T', height: '3.3m', year: 2021 },
                { id: 'EC-006', brand: 'Linde', model: 'H30D', cat: 'Diesel Forklift', engine: 'Diesel', cap: '3.0T', height: '4.7m', year: 2016 },
                { id: 'EC-007', brand: 'Jungheinrich', model: 'EJC 112', cat: 'Pallet Stacker', engine: 'Electric', cap: '1.2T', height: '3.6m', year: 2022 },
                { id: 'EC-008', brand: 'Toyota', model: 'RRE160', cat: 'Reach Truck', engine: 'Electric', cap: '1.6T', height: '9.0m', year: 2018 },
                { id: 'EC-009', brand: 'Hyster', model: 'J1.6XNT', cat: 'Electric Forklift', engine: 'Electric', cap: '1.6T', height: '4.5m', year: 2019 },
                { id: 'EC-010', brand: 'Linde', model: 'L14', cat: 'Pallet Stacker', engine: 'Electric', cap: '1.4T', height: '4.2m', year: 2020 },
                { id: 'EC-011', brand: 'Toyota', model: '8FD50', cat: 'Diesel Forklift', engine: 'Diesel', cap: '5.0T', height: '4.0m', year: 2015 },
                { id: 'EC-012', brand: 'Jungheinrich', model: 'EFG 216', cat: 'Electric Forklift', engine: 'Electric', cap: '1.6T', height: '4.8m', year: 2021 },
                { id: 'EC-013', brand: 'Toyota', model: 'SWE120', cat: 'Pallet Stacker', engine: 'Electric', cap: '1.2T', height: '4.1m', year: 2019 },
                { id: 'EC-014', brand: 'Linde', model: 'R14', cat: 'Reach Truck', engine: 'Electric', cap: '1.4T', height: '8.2m', year: 2017 },
                { id: 'EC-015', brand: 'Hyster', model: 'H5.0FT', cat: 'Diesel Forklift', engine: 'Diesel', cap: '5.0T', height: '4.5m', year: 2018 }
            ];

            let currentPage = 1;
            const itemsPerPage = 8;
            let filteredData = [...mockInventory];

            const tbody = document.getElementById('inventoryBody');
            const countSpan = document.getElementById('resultCount').querySelector('span');
            const paginationDiv = document.getElementById('pagination');

            // Filters
            const searchInput = document.getElementById('searchRef');
            const filterCat = document.getElementById('filterCat');
            const filterBrand = document.getElementById('filterBrand');
            const filterEngine = document.getElementById('filterEngine');
            const resetBtn = document.getElementById('resetFilters');

            function renderTable() {
                tbody.innerHTML = '';
                
                const start = (currentPage - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const paginatedData = filteredData.slice(start, end);

                countSpan.innerText = filteredData.length;

                if (paginatedData.length === 0) {
                    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-gray-500">No equipment matches your criteria.</td></tr>`;
                    paginationDiv.innerHTML = '';
                    return;
                }

                paginatedData.forEach(item => {
                    const row = document.createElement('tr');
                    row.className = 'inventory-row group';
                    row.innerHTML = `
                        <td class="p-4">
                            <div class="w-12 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-600 border border-gray-700 group-hover:border-[#F5C400]/50 transition-colors">
                                <iconify-icon icon="solar:gallery-minimalistic-linear"></iconify-icon>
                            </div>
                        </td>
                        <td class="p-4 font-mono text-[#F5C400] text-xs">${item.id}</td>
                        <td class="p-4">
                            <div class="font-semibold text-white">${item.brand} ${item.model}</div>
                            <div class="text-xs text-gray-500">${item.cat}</div>
                        </td>
                        <td class="p-4">
                            <div class="flex gap-2 text-xs text-gray-400">
                                <span class="bg-gray-800 px-2 py-0.5 rounded">${item.cap}</span>
                                <span class="bg-gray-800 px-2 py-0.5 rounded">${item.height} Lift</span>
                                <span class="bg-gray-800 px-2 py-0.5 rounded">${item.engine}</span>
                            </div>
                        </td>
                        <td class="p-4 text-gray-400">${item.year}</td>
                        <td class="p-4 text-right">
                            <button class="bg-transparent border border-gray-600 hover:border-[#F5C400] text-gray-300 hover:text-[#F5C400] px-3 py-1.5 rounded text-xs transition-colors">Enquire</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });

                renderPagination();
            }

            function renderPagination() {
                const totalPages = Math.ceil(filteredData.length / itemsPerPage);
                paginationDiv.innerHTML = '';

                if (totalPages <= 1) return;

                for (let i = 1; i <= totalPages; i++) {
                    const btn = document.createElement('button');
                    btn.innerText = i;
                    btn.className = `w-8 h-8 rounded flex items-center justify-center text-xs font-semibold transition-colors ${i === currentPage ? 'bg-[#F5C400] text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`;
                    btn.addEventListener('click', () => {
                        currentPage = i;
                        renderTable();
                    });
                    paginationDiv.appendChild(btn);
                }
            }

            function applyFilters() {
                const search = searchInput.value.toLowerCase();
                const cat = filterCat.value;
                const brand = filterBrand.value;
                const engine = filterEngine.value;

                filteredData = mockInventory.filter(item => {
                    const matchSearch = item.id.toLowerCase().includes(search) || item.model.toLowerCase().includes(search);
                    const matchCat = cat === 'all' || item.cat === cat;
                    const matchBrand = brand === 'all' || item.brand === brand;
                    const matchEngine = engine === 'all' || item.engine === engine;
                    
                    return matchSearch && matchCat && matchBrand && matchEngine;
                });

                currentPage = 1;
                renderTable();
            }

            // Event Listeners for filters
            searchInput.addEventListener('input', applyFilters);
            filterCat.addEventListener('change', applyFilters);
            filterBrand.addEventListener('change', applyFilters);
            filterEngine.addEventListener('change', applyFilters);

            resetBtn.addEventListener('click', () => {
                searchInput.value = '';
                filterCat.value = 'all';
                filterBrand.value = 'all';
                filterEngine.value = 'all';
                applyFilters();
            });

            // Initial Render
            renderTable();
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
      

<div className="bg-[#08121C] border-b border-gray-800 text-xs py-2 px-6 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400">
<div className="flex gap-6 items-center">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><iconify-icon icon="solar:phone-linear"></iconify-icon> +971 52 248 3348</span>
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><iconify-icon icon="solar:letter-linear"></iconify-icon> sales@equipcircle.ae</span>
</div>
<div className="flex items-center gap-2 text-[#F5C400] font-medium tracking-wide">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Serving All 7 Emirates
            </div>
</div>
</div>

<nav className="sticky top-0 z-50 transition-all duration-300 border-b border-transparent py-4 px-6" id="mainNav">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="font-heading font-extrabold text-2xl tracking-tighter text-white flex items-center gap-2 uppercase" href="#">
<span className="text-[#F5C400] text-sm leading-none pt-1">⬤</span> EQUIP CIRCLE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white hover:text-[#F5C400] transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#rentals">Rentals</a>
<a className="hover:text-white transition-colors" href="#inventory">Used Forklifts</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white text-2xl" id="menuToggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0D1B2A] z-40 hidden flex-col items-center justify-center gap-6 text-xl font-heading font-semibold tracking-tight" id="mobileMenu">
<a className="text-white hover:text-[#F5C400]" href="#">Home</a>
<a className="text-white hover:text-[#F5C400]" href="#rentals">Rentals</a>
<a className="text-white hover:text-[#F5C400]" href="#inventory">Used Forklifts</a>
<a className="text-white hover:text-[#F5C400]" href="#services">Services</a>
<a className="text-[#F5C400]" href="#contact">Contact Us</a>
</div>

<section className="relative min-h-[90vh] flex flex-col justify-center pt-12 pb-24 overflow-hidden border-b border-gray-800">
<div className="absolute inset-0 hero-bg opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/50 to-[#0D1B2A]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-4xl">
<h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-[0.9] mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
                    UAE's Trusted <br/>
<span className="text-[#F5C400]">Forklift Partner</span>
</h1>
<p className="font-heading text-2xl md:text-3xl text-gray-300 tracking-tight uppercase mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
                    Rentals. Sales. Service. Training.
                </p>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 animate-fade-up leading-relaxed" style={{animationDelay: '0.3s'}}>
                    Premium material handling solutions across all 7 Emirates — delivered fast, maintained expertly, guaranteed to perform.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
<a className="bg-[#F5C400] text-black font-semibold px-8 py-3.5 rounded text-sm text-center flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors" href="#contact">
                        Get a Rental Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm text-center hover:bg-white hover:text-black transition-all" href="#inventory">
                        Browse Used Forklifts
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-24 w-full overflow-hidden border-y border-white/5 bg-[#08121C]/50 py-3 backdrop-blur-sm z-10">
<div className="flex w-[200%] animate-marquee">
<div className="flex w-1/2 justify-around items-center font-heading font-semibold text-lg tracking-widest text-gray-500 uppercase">
<span>Linde</span><span className="text-[#F5C400]">·</span>
<span>Toyota</span><span className="text-[#F5C400]">·</span>
<span>Jungheinrich</span><span className="text-[#F5C400]">·</span>
<span>Caterpillar</span><span className="text-[#F5C400]">·</span>
<span>Komatsu</span><span className="text-[#F5C400]">·</span>
<span>Aisle Master</span><span className="text-[#F5C400]">·</span>
<span>Hyster</span><span className="text-[#F5C400]">·</span>
<span>Still</span><span className="text-[#F5C400]">·</span>
<span>BT</span>
</div>
<div className="flex w-1/2 justify-around items-center font-heading font-semibold text-lg tracking-widest text-gray-500 uppercase">
<span>Linde</span><span className="text-[#F5C400]">·</span>
<span>Toyota</span><span className="text-[#F5C400]">·</span>
<span>Jungheinrich</span><span className="text-[#F5C400]">·</span>
<span>Caterpillar</span><span className="text-[#F5C400]">·</span>
<span>Komatsu</span><span className="text-[#F5C400]">·</span>
<span>Aisle Master</span><span className="text-[#F5C400]">·</span>
<span>Hyster</span><span className="text-[#F5C400]">·</span>
<span>Still</span><span className="text-[#F5C400]">·</span>
<span>BT</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full translate-y-1/2 z-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-[#152436] border border-gray-700 p-6 rounded-lg text-center shadow-xl">
<div className="font-heading font-extrabold text-4xl text-white tracking-tighter mb-1"><span className="counter" data-target="20">0</span>+</div>
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Years Experience</div>
</div>
<div className="bg-[#152436] border border-gray-700 p-6 rounded-lg text-center shadow-xl">
<div className="font-heading font-extrabold text-4xl text-white tracking-tighter mb-1"><span className="counter" data-target="50">0</span>+</div>
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Locations UAE-wide</div>
</div>
<div className="bg-[#152436] border border-gray-700 p-6 rounded-lg text-center shadow-xl">
<div className="font-heading font-extrabold text-4xl text-white tracking-tighter mb-1"><span className="counter" data-target="500">0</span> KM</div>
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Service Radius</div>
</div>
<div className="bg-[#152436] border border-gray-700 p-6 rounded-lg text-center shadow-xl">
<div className="font-heading font-extrabold text-4xl text-white tracking-tighter mb-1"><span className="counter" data-target="100">0</span>+</div>
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Training Courses</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-20 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:refresh-circle-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">Forklift Rental</h3>
<p className="text-sm text-gray-400">Short and long-term flexible contracts.</p>
</div>
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:cart-large-minimalistic-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">Used Forklifts</h3>
<p className="text-sm text-gray-400">Certified, refurbished fleet ready to buy.</p>
</div>
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:settings-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:settings-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">Parts &amp; Service</h3>
<p className="text-sm text-gray-400">24/7 breakdown support and OEM parts.</p>
</div>
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:user-id-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:user-id-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">Operator Training</h3>
<p className="text-sm text-gray-400">Certified safety and operational courses.</p>
</div>
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:card-2-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:card-2-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">In-House Financing</h3>
<p className="text-sm text-gray-400">Flexible payment plans for equipment sales.</p>
</div>
<div className="min-w-[18rem] bg-[#152436] border border-gray-800 p-8 rounded-xl snap-start hover:border-[#F5C400] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-6xl text-[#F5C400]" icon="solar:box-minimalistic-linear"></iconify-icon></div>
<iconify-icon className="text-3xl text-[#F5C400] mb-4" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-2">Fleet Management</h3>
<p className="text-sm text-gray-400">Comprehensive oversight for large operations.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#0A1520] border-y border-gray-800" id="rentals">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="font-heading font-extrabold text-4xl text-white tracking-tighter uppercase mb-2">Our Rental Fleet</h2>
<p className="text-gray-400 text-sm">High-performance equipment for every material handling challenge.</p>
</div>

<div className="flex flex-wrap gap-2" id="rentalTabs">
<button className="tab-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F5C400] text-black transition-colors" data-filter="all">All</button>
<button className="tab-btn px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors" data-filter="electric">Electric</button>
<button className="tab-btn px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors" data-filter="diesel">Diesel</button>
<button className="tab-btn px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors" data-filter="pallet">Pallet Equipment</button>
<button className="tab-btn px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors" data-filter="specialist">Specialist</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="rentalGrid">

<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="electric">
<div className="text-4xl mb-4">⚡</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Electric Forklift</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">1.5T – 7T Capacity</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Zero emissions indoor use</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Low noise operation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Fast charging batteries</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="diesel">
<div className="text-4xl mb-4">⛽</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Diesel Forklift</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">3T – 32T Capacity</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Heavy-duty outdoor use</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Rough terrain capability</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> High torque engines</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="electric">
<div className="text-4xl mb-4">🏗️</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Reach Truck</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">Up to 13.5m Lift</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> High-density storage</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Narrow aisle navigation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Precision mast control</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="pallet">
<div className="text-4xl mb-4">📦</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Electric Pallet Truck</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">1.5T – 2T Capacity</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Pedestrian &amp; ride-on options</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Fast loading/unloading</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Compact design</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="specialist">
<div className="text-4xl mb-4">🔄</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Articulated / VNA</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">1.6m Aisle Operation</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Maximize warehouse capacity</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Indoor/Outdoor capable</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Aisle Master certified</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
<div className="rental-item block p-6 bg-[#152436] rounded-xl border border-gray-800" data-category="specialist">
<div className="text-4xl mb-4">❄️</div>
<h3 className="font-heading font-semibold text-2xl text-white tracking-tight mb-1">Cold Store Forklift</h3>
<div className="text-[#F5C400] text-sm font-semibold mb-4">-30°C Rated</div>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Heated cabins available</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Specialized hydraulic oils</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F5C400]" icon="solar:check-circle-linear"></iconify-icon> Condensation protection</li>
</ul>
<button className="w-full py-2.5 border border-gray-700 rounded text-sm font-semibold hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">Request Quote</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="inventory">
<div className="max-w-7xl mx-auto">
<div className="mb-10 text-center">
<h2 className="font-heading font-extrabold text-5xl text-white tracking-tighter uppercase mb-2">Used Forklift Stock</h2>
<p className="text-[#F5C400] text-lg font-medium">Certified, Refurbished &amp; Ready to Work</p>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-72 flex-shrink-0 space-y-6 bg-[#152436] p-6 rounded-xl border border-gray-800 h-fit">
<div>
<h4 className="text-white font-heading font-semibold text-xl uppercase tracking-tight mb-4 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filters
                        </h4>
</div>
<div className="space-y-4 text-sm">
<div>
<label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase tracking-wider">Search Ref #</label>
<input className="w-full p-2.5 rounded appearance-none" id="searchRef" placeholder="e.g. EC-001" type="text"/>
</div>
<div>
<label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase tracking-wider">Category</label>
<select className="w-full p-2.5 rounded appearance-none cursor-pointer" id="filterCat">
<option value="all">All Categories</option>
<option value="Electric Forklift">Electric Forklift</option>
<option value="Diesel Forklift">Diesel Forklift</option>
<option value="Reach Truck">Reach Truck</option>
<option value="Pallet Stacker">Pallet Stacker</option>
</select>
</div>
<div>
<label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase tracking-wider">Brand</label>
<select className="w-full p-2.5 rounded appearance-none cursor-pointer" id="filterBrand">
<option value="all">All Brands</option>
<option value="Toyota">Toyota</option>
<option value="Linde">Linde</option>
<option value="Jungheinrich">Jungheinrich</option>
<option value="Hyster">Hyster</option>
</select>
</div>
<div>
<label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase tracking-wider">Engine Type</label>
<select className="w-full p-2.5 rounded appearance-none cursor-pointer" id="filterEngine">
<option value="all">All Types</option>
<option value="Electric">Electric</option>
<option value="Diesel">Diesel</option>
<option value="LPG">LPG</option>
</select>
</div>
</div>
<button className="w-full py-2 mt-4 text-xs font-semibold text-gray-400 hover:text-white underline transition-colors" id="resetFilters">Reset All Filters</button>
</div>

<div className="flex-grow overflow-hidden">
<div className="flex justify-between items-center mb-4 text-sm">
<span className="text-gray-400 font-medium" id="resultCount">Showing <span className="text-white">0</span> results</span>
</div>
<div className="bg-[#152436] border border-gray-800 rounded-xl overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-gray-800 bg-[#0A1520] text-xs uppercase tracking-wider text-gray-400 font-semibold">
<th className="p-4 rounded-tl-xl">Img</th>
<th className="p-4">Ref #</th>
<th className="p-4">Brand / Model</th>
<th className="p-4">Specs</th>
<th className="p-4">Year</th>
<th className="p-4 text-right rounded-tr-xl">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-gray-800/50" id="inventoryBody">

</tbody>
</table>
</div>

<div className="flex justify-center items-center gap-2 mt-6" id="pagination">

</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#112030] border-y border-gray-800 relative overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0, #FFF 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-heading font-extrabold text-5xl text-white tracking-tighter uppercase mb-6 leading-none">Performance.<br/><span className="text-[#F5C400]">Guaranteed.</span></h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We don't just supply equipment; we supply reliability. Our operations are engineered to minimize downtime and maximize your productivity across the UAE.
                    </p>
<div className="flex flex-col gap-3">
<div className="inline-flex items-center gap-3 bg-[#F5C400]/10 border border-[#F5C400]/20 text-white px-4 py-2.5 rounded-lg w-fit">
<iconify-icon className="text-[#F5C400] text-xl" icon="solar:shield-check-bold"></iconify-icon>
<span className="font-heading tracking-wide uppercase text-sm">Equipment Reliability</span>
</div>
<div className="inline-flex items-center gap-3 bg-[#F5C400]/10 border border-[#F5C400]/20 text-white px-4 py-2.5 rounded-lg w-fit">
<iconify-icon className="text-[#F5C400] text-xl" icon="solar:clock-circle-bold"></iconify-icon>
<span className="font-heading tracking-wide uppercase text-sm">On-Time Delivery</span>
</div>
<div className="inline-flex items-center gap-3 bg-[#F5C400]/10 border border-[#F5C400]/20 text-white px-4 py-2.5 rounded-lg w-fit">
<iconify-icon className="text-[#F5C400] text-xl" icon="solar:wrench-bold"></iconify-icon>
<span className="font-heading tracking-wide uppercase text-sm">6-Hour Breakdown Support</span>
</div>
<div className="inline-flex items-center gap-3 bg-[#F5C400]/10 border border-[#F5C400]/20 text-white px-4 py-2.5 rounded-lg w-fit">
<iconify-icon className="text-[#F5C400] text-xl" icon="solar:chart-line-up-bold"></iconify-icon>
<span className="font-heading tracking-wide uppercase text-sm">Operational Efficiency</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-x-6 gap-y-10">
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:wallet-money-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">Zero Deposit</h4>
<p className="text-xs text-gray-400">Approved corporate accounts require no upfront deposit.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:truck-fast-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">Fast Delivery</h4>
<p className="text-xs text-gray-400">Next-day deployment available for standard fleet items.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:shield-keyhole-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">Maintained Fleet</h4>
<p className="text-xs text-gray-400">Rigorous 50-point checks before every deployment.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">Operator Supply</h4>
<p className="text-xs text-gray-400">Need a driver? We supply certified operators on demand.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">Flexible Terms</h4>
<p className="text-xs text-gray-400">Scale your fleet up or down with our flexible contracts.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-500 mb-3 block" icon="solar:map-point-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-1">UAE Coverage</h4>
<p className="text-xs text-gray-400">Support networks stationed across all Emirates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-[#0D1B2A]">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<h2 className="font-heading font-extrabold text-4xl text-white tracking-tighter uppercase mb-2 text-center">Nationwide Reach</h2>
<p className="text-gray-400 text-sm mb-12 text-center max-w-xl">Strategically positioned to deliver and service material handling equipment rapidly across the United Arab Emirates.</p>

<div className="relative w-full max-w-3xl aspect-[2/1] bg-[#152436] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>


<div className="absolute top-[60%] left-[25%] group">
<div className="w-3 h-3 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Abu Dhabi</div>
</div>

<div className="absolute top-[40%] left-[55%] group">
<div className="w-3.5 h-3.5 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Dubai (HQ)</div>
</div>

<div className="absolute top-[35%] left-[62%] group">
<div className="w-2.5 h-2.5 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Sharjah</div>
</div>

<div className="absolute top-[32%] left-[65%] group">
<div className="w-2 h-2 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Ajman</div>
</div>

<div className="absolute top-[28%] left-[68%] group">
<div className="w-2 h-2 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Umm Al Quwain</div>
</div>

<div className="absolute top-[20%] left-[72%] group">
<div className="w-2.5 h-2.5 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Ras Al Khaimah</div>
</div>

<div className="absolute top-[45%] left-[80%] group">
<div className="w-2.5 h-2.5 bg-[#F5C400] rounded-full pulse-marker relative z-10 cursor-pointer"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">Fujairah</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">JAFZA</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">KIZAD</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">DIC</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">DIP</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">SAIF Zone</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">Mussafah</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">RAK FTZ</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-full">Fujairah Port</span>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#0A1520] border-y border-gray-800">
<div className="max-w-7xl mx-auto text-center">
<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white tracking-tighter uppercase mb-16">7-Step Refurbishment Process</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-[5%] right-[5%] h-0.5 bg-gray-800 z-0"></div>
<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10 overflow-x-auto hide-scrollbar pb-4 snap-x">
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">1</div>
<h5 className="text-white font-semibold text-sm mb-2">Inspection</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Complete structural &amp; mechanical audit.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">2</div>
<h5 className="text-white font-semibold text-sm mb-2">Strip Down</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Removal of worn parts &amp; cleaning.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">3</div>
<h5 className="text-white font-semibold text-sm mb-2">Engine/Motor</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Overhaul or replacement of core drives.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">4</div>
<h5 className="text-white font-semibold text-sm mb-2">Hydraulics</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Mast, hoses and seal replacements.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">5</div>
<h5 className="text-white font-semibold text-sm mb-2">Bodywork</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Panel repair and industrial repainting.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-gray-700 text-gray-400 flex items-center justify-center font-heading font-bold text-xl mb-4 group-hover:border-[#F5C400] group-hover:text-[#F5C400] transition-colors">6</div>
<h5 className="text-white font-semibold text-sm mb-2">Reassembly</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Putting it back together with OEM parts.</p>
</div>
<div className="flex-shrink-0 md:flex-1 flex flex-col items-center snap-center group">
<div className="w-12 h-12 rounded-full bg-[#152436] border-2 border-[#F5C400] text-[#F5C400] flex items-center justify-center font-heading font-bold text-xl mb-4 bg-[#F5C400]/10 shadow-[0_0_15px_rgba(245,196,0,0.3)]">7</div>
<h5 className="text-white font-semibold text-sm mb-2">Certification</h5>
<p className="text-[11px] text-gray-500 text-center px-2">Load testing and final safety sign-off.</p>
</div>
</div>
</div>
<div className="mt-12 inline-block bg-[#F5C400] text-black font-heading font-bold uppercase tracking-wide text-sm px-6 py-2 rounded-full">
                Save up to 40% vs. new equipment
            </div>
</div>
</section>

<section className="py-24 px-6 bg-[#0D1B2A]" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="font-heading font-extrabold text-5xl text-white tracking-tighter uppercase mb-6">Ready to Move?</h2>
<p className="text-gray-400 mb-10 text-lg">Contact our specialists for immediate rental quotes, used equipment enquiries, or service requests.</p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-[#152436] border border-gray-800 flex items-center justify-center text-[#F5C400] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h5 className="text-white font-semibold text-sm mb-1">Call Us (24/7)</h5>
<p className="text-gray-400 text-sm">+971 52 248 3348</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-[#152436] border border-gray-800 flex items-center justify-center text-[#F5C400] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h5 className="text-white font-semibold text-sm mb-1">Email</h5>
<p className="text-gray-400 text-sm">sales@equipcircle.ae</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-[#152436] border border-gray-800 flex items-center justify-center text-[#F5C400] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h5 className="text-white font-semibold text-sm mb-1">Headquarters</h5>
<p className="text-gray-400 text-sm">Jebel Ali Industrial Area, Dubai, UAE</p>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="bg-[#152436] hover:bg-white hover:text-black transition-colors border border-gray-800 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:phone-bold"></iconify-icon> Call
                        </button>
<button className="bg-[#152436] hover:bg-[#25D366] hover:text-white transition-colors border border-gray-800 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon> WhatsApp
                        </button>
</div>
</div>

<div className="bg-[#152436] p-8 rounded-xl border border-gray-800">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Name</label>
<input className="w-full p-3 rounded text-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Company</label>
<input className="w-full p-3 rounded text-sm" placeholder="Logistics LLC" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Phone</label>
<input className="w-full p-3 rounded text-sm" placeholder="+971 50..." type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Email</label>
<input className="w-full p-3 rounded text-sm" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Interest</label>
<select className="w-full p-3 rounded text-sm appearance-none cursor-pointer">
<option>Rental Quote</option>
<option>Buy Used Equipment</option>
<option>Service &amp; Maintenance</option>
<option>Operator Training</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Message</label>
<textarea className="w-full p-3 rounded text-sm resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-[#F5C400] text-black font-semibold py-3.5 rounded text-sm hover:bg-yellow-400 transition-colors btn-sweep mt-2">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#08121C] pt-16 pb-8 px-6 border-t border-gray-800">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="font-heading font-extrabold text-2xl tracking-tighter text-white flex items-center gap-2 uppercase mb-4" href="#">
<span className="text-[#F5C400] text-sm pt-1">⬤</span> EQUIP CIRCLE
                    </a>
<p className="text-gray-400 text-sm mb-6">Keeping UAE Moving Since 2004. Premium material handling solutions, rentals, and sales.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-gray-800 text-white flex items-center justify-center hover:bg-[#F5C400] hover:text-black transition-colors" href="#"><iconify-icon icon="solar:plain-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-gray-800 text-white flex items-center justify-center hover:bg-[#F5C400] hover:text-black transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-gray-800 text-white flex items-center justify-center hover:bg-[#F5C400] hover:text-black transition-colors" href="#"><iconify-icon icon="solar:user-linear"></iconify-icon></a>
</div>
</div>
<div>
<h6 className="text-white font-semibold mb-4 text-sm">Services</h6>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Forklift Rental</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Used Sales</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Maintenance</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Training</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-semibold mb-4 text-sm">Equipment</h6>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Electric Forklifts</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Diesel Forklifts</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Reach Trucks</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Pallet Stackers</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-semibold mb-4 text-sm">Company</h6>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-[#F5C400] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#F5C400] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2023 Equip Circle LLC. All rights reserved.</p>
<div className="flex gap-2">
<span>Dubai</span>·<span>Abu Dhabi</span>·<span>Sharjah</span>·<span>Ajman</span>·<span>RAK</span>·<span>Fujairah</span>·<span>UAQ</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
