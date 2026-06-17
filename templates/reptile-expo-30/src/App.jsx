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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();

        // Vendor Data Structure - Expanded for "Full List"
        const vendorData = {
            'charlotte': [
                { name: 'Cold Blooded Encounters', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Carolina Geckos', type: 'Breeder', color: 'amber', icon: 'egg' },
                { name: 'Queen City Feeders', type: 'Supplies', color: 'blue', icon: 'box' },
                { name: 'Python Palace', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'The Spider Shop', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Scale & Tail Art', type: 'Artisan', color: 'pink', icon: 'palette' },
                { name: 'NC Beardies', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Exotic Pet Enclosures', type: 'Supplies', color: 'blue', icon: 'home' },
                { name: 'Raptor Reptiles', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Sticky Tongue Chameleons', type: 'Lizards', color: 'green', icon: 'trees' },
                { name: 'Apex Predators', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'The Rat Pack', type: 'Feeders', color: 'blue', icon: 'box' },
                { name: 'Jungle Jewel Exotics', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Morph Market Local', type: 'Breeder', color: 'purple', icon: 'gem' },
                { name: 'Charlotte Arachnids', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Reptile Rescue of the Carolinas', type: 'Non-Profit', color: 'blue', icon: 'heart' },
                { name: 'Tiny Terrors', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Green Iguana Graphics', type: 'Artisan', color: 'pink', icon: 'palette' },
                { name: 'Swamp Things', type: 'Reptiles', color: 'emerald', icon: 'shell' },
                { name: 'BioActive Soils', type: 'Supplies', color: 'blue', icon: 'leaf' },
                { name: 'Dragon Dynamics', type: 'Lizards', color: 'amber', icon: 'flame' }
            ],
            'birmingham': [
                { name: 'Alabama Herps', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Magic City Dragons', type: 'Breeder', color: 'amber', icon: 'flame' },
                { name: 'Southern Scales', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Dixie Crickets', type: 'Supplies', color: 'blue', icon: 'box' },
                { name: 'Birmingham Boas', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Crimson Tide Geckos', type: 'Breeder', color: 'amber', icon: 'egg' },
                { name: 'Vulcan Vipers', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Sweet Home Exotics', type: 'Exotics', color: 'green', icon: 'trees' },
                { name: 'Iron City Inverts', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Bama Bugs', type: 'Feeders', color: 'blue', icon: 'box' },
                { name: 'Trussville Turtles', type: 'Reptiles', color: 'emerald', icon: 'shell' },
                { name: 'Gulf Coast Monitors', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Rocket City Reptiles', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Deep South Dart Frogs', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Cotton State Colubrids', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Yellowhammer Herps', type: 'Breeder', color: 'purple', icon: 'gem' }
            ],
            'atlanta': [
                { name: 'Georgia Reptile Zoo', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'ATL Amphibians', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Peach State Pythons', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Marietta Monitors', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Chameleon Corner', type: 'Lizards', color: 'purple', icon: 'trees' },
                { name: 'Gwinnett Geckos', type: 'Breeder', color: 'amber', icon: 'egg' },
                { name: 'Hotlanta Herps', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Savannah Serpents', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Dogwood Darts', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Piedmont Pythons', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Stone Mountain Skinks', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Metro Atl Feeders', type: 'Supplies', color: 'blue', icon: 'box' },
                { name: 'Red Clay Reptiles', type: 'Breeder', color: 'purple', icon: 'gem' },
                { name: 'Decatur Dragons', type: 'Lizards', color: 'amber', icon: 'flame' },
                { name: 'Buckhead Boas', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Georgia Exotics Rescue', type: 'Non-Profit', color: 'blue', icon: 'heart' },
                { name: 'Alpharetta Arachnids', type: 'Inverts', color: 'purple', icon: 'bug' }
            ],
            'orlando': [
                { name: 'Sunshine State Exotics', type: 'Exotics', color: 'amber', icon: 'sun' },
                { name: 'Gator Country', type: 'Reptiles', color: 'emerald', icon: 'paw-print' },
                { name: 'Orlando Geckos', type: 'Breeder', color: 'purple', icon: 'egg' },
                { name: 'Coastal Critters', type: 'Supplies', color: 'blue', icon: 'box' },
                { name: 'Disney District Dart Frogs', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Theme Park Tortoises', type: 'Reptiles', color: 'emerald', icon: 'shell' },
                { name: 'Space Coast Snakes', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Citrus City Chameleons', type: 'Lizards', color: 'green', icon: 'trees' },
                { name: 'Florida Feeder Farm', type: 'Supplies', color: 'blue', icon: 'box' },
                { name: 'Miami Morph Market', type: 'Breeder', color: 'purple', icon: 'gem' },
                { name: 'Everglades Exotics', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Orange County Oddities', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Palm Tree Pythons', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Universal Uromastyx', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Kissimmee Kings', type: 'Snakes', color: 'emerald', icon: 'scroll' }
            ],
            'houston': [
                { name: 'Lone Star Serpents', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Houston Herpetology', type: 'Education', color: 'blue', icon: 'book' },
                { name: 'Texas Tortoises', type: 'Reptiles', color: 'amber', icon: 'shell' },
                { name: 'Space City Scales', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Bayou City Boas', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Galveston Geckos', type: 'Breeder', color: 'purple', icon: 'egg' },
                { name: 'Oil City Oddities', type: 'Inverts', color: 'purple', icon: 'bug' },
                { name: 'Rodeo Reptiles', type: 'Exotics', color: 'emerald', icon: 'paw-print' },
                { name: 'Alamo Amphibians', type: 'Frogs', color: 'green', icon: 'droplets' },
                { name: 'Pasadena Pythons', type: 'Snakes', color: 'emerald', icon: 'scroll' },
                { name: 'Sam Houston Skinks', type: 'Lizards', color: 'amber', icon: 'sun' },
                { name: 'Gulf Coast Geckos', type: 'Breeder', color: 'amber', icon: 'egg' }
            ]
        };

        // Ticket Logic
        const tickets = {
            adult: { price: 15, count: 1, id: 'qty-adult', indicator: 'indicator-adult' },
            child: { price: 5, count: 0, id: 'qty-child', indicator: 'indicator-child' },
            vip: { price: 25, count: 0, id: 'qty-vip', indicator: 'indicator-vip' }
        };

        function updateTicket(type, change) {
            const ticket = tickets[type];
            const newCount = ticket.count + change;
            
            if (newCount >= 0) {
                ticket.count = newCount;
                document.getElementById(ticket.id).innerText = newCount;
                updateSummary();
                updateIndicators(type);
            }
        }

        function updateIndicators(type) {
            const ticket = tickets[type];
            const indicator = document.getElementById(ticket.indicator);
            const dot = indicator.querySelector('div');
            
            if (ticket.count > 0) {
                indicator.classList.remove('border-slate-700');
                indicator.classList.add('border-emerald-500');
                if(type === 'vip') {
                    indicator.classList.add('border-amber-500'); 
                    indicator.classList.remove('border-emerald-500'); 
                    dot.classList.remove('bg-emerald-500');
                    dot.classList.add('bg-amber-500');
                }
                dot.classList.remove('opacity-0');
            } else {
                indicator.classList.add('border-slate-700');
                indicator.classList.remove('border-emerald-500', 'border-amber-500');
                dot.classList.add('opacity-0');
            }
        }

        function updateSummary() {
            let totalCount = 0;
            let totalPrice = 0;
            
            Object.values(tickets).forEach(t => {
                totalCount += t.count;
                totalPrice += t.count * t.price;
            });

            document.getElementById('summary-count').innerText = `Total (${totalCount} item${totalCount !== 1 ? 's' : ''})`;
            document.getElementById('summary-total').innerText = '$' + totalPrice.toFixed(2);
            document.getElementById('cart-badge').innerText = totalCount;
        }

        // Render Vendors Function - Split into Featured and Full
        function renderVendors(locationKey) {
            const grid = document.getElementById('vendor-grid');
            const gridFull = document.getElementById('vendor-grid-full');
            const btn = document.getElementById('btn-toggle-vendors');
            const toggleText = document.getElementById('toggle-text');
            const searchInput = document.getElementById('vendor-search');
            
            // Reset state
            searchInput.value = '';
            grid.innerHTML = '';
            gridFull.innerHTML = '';
            gridFull.classList.add('hidden');
            toggleText.innerText = 'View Full Vendor List';
            document.getElementById('toggle-icon').style.transform = 'rotate(0deg)';
            
            const vendors = vendorData[locationKey] || vendorData['charlotte']; 
            
            // Render vendors
            vendors.forEach((v, index) => {
                const colorClasses = {
                    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
                    green: 'bg-green-500/10 text-green-400 border-green-500/20'
                };
                
                const card = `
                <div class="vendor-card flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900 hover:border-slate-700 transition-colors group">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${colorClasses[v.color] || colorClasses.emerald}">
                        <i data-lucide="${v.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h5 class="vendor-name text-white text-sm font-medium leading-none mb-1 group-hover:text-emerald-400 transition-colors">${v.name}</h5>
                        <p class="vendor-type text-xs text-slate-500">${v.type}</p>
                    </div>
                </div>
                `;

                if (index < 6) {
                    grid.innerHTML += card;
                } else {
                    gridFull.innerHTML += card;
                }
            });

            // Handle button visibility
            const extraVendorsCount = vendors.length - 6;
            if (extraVendorsCount > 0) {
                btn.classList.remove('hidden');
                toggleText.innerText = `View Full Vendor List (${extraVendorsCount} more)`;
            } else {
                btn.classList.add('hidden');
            }
            
            // Re-initialize icons
            lucide.createIcons();
        }

        // Toggle Full List
        function toggleFullList() {
            const gridFull = document.getElementById('vendor-grid-full');
            const text = document.getElementById('toggle-text');
            const icon = document.getElementById('toggle-icon');
            const isHidden = gridFull.classList.contains('hidden');
            const currentShow = document.getElementById('active-show-title').innerText; // get title to estimate count or just toggle text
            
            if (isHidden) {
                gridFull.classList.remove('hidden');
                text.innerText = "Show Less";
                icon.style.transform = 'rotate(180deg)';
            } else {
                gridFull.classList.add('hidden');
                // We need to recalculate "more" count, simpler to just reset:
                const locationKey = currentShow.toLowerCase().includes('charlotte') ? 'charlotte' :
                                    currentShow.toLowerCase().includes('birmingham') ? 'birmingham' :
                                    currentShow.toLowerCase().includes('atlanta') ? 'atlanta' :
                                    currentShow.toLowerCase().includes('orlando') ? 'orlando' : 'houston';
                
                const count = (vendorData[locationKey]?.length || 0) - 6;
                text.innerText = `View Full Vendor List (${count > 0 ? count : 0} more)`;
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Filter Vendors (Search)
        function filterVendors() {
            const input = document.getElementById('vendor-search').value.toLowerCase();
            const allCards = document.querySelectorAll('.vendor-card');
            const gridFull = document.getElementById('vendor-grid-full');
            const btn = document.getElementById('btn-toggle-vendors');
            
            // If searching, show all vendors container so results aren't hidden
            if (input.length > 0) {
                gridFull.classList.remove('hidden');
                btn.classList.add('hidden'); // Hide toggle button during search
            } else {
                // Reset to default collapsed state if input cleared
                gridFull.classList.add('hidden');
                btn.classList.remove('hidden');
                // Reset button text state
                const currentShow = document.getElementById('active-show-title').innerText;
                const locationKey = currentShow.toLowerCase().includes('charlotte') ? 'charlotte' :
                                    currentShow.toLowerCase().includes('birmingham') ? 'birmingham' :
                                    currentShow.toLowerCase().includes('atlanta') ? 'atlanta' :
                                    currentShow.toLowerCase().includes('orlando') ? 'orlando' : 'houston';
                const count = (vendorData[locationKey]?.length || 0) - 6;
                document.getElementById('toggle-text').innerText = `View Full Vendor List (${count > 0 ? count : 0} more)`;
                document.getElementById('toggle-icon').style.transform = 'rotate(0deg)';
            }

            allCards.forEach(card => {
                const name = card.querySelector('.vendor-name').innerText.toLowerCase();
                const type = card.querySelector('.vendor-type').innerText.toLowerCase();
                
                if (name.includes(input) || type.includes(input)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        // Show Selection Logic (Visual)
        function selectShow(element, title, locationKey) {
            // Remove active class from all
            document.querySelectorAll('.show-item').forEach(el => {
                el.classList.remove('active');
                el.classList.add('glass-panel', 'glass-panel-hover');
                el.querySelector('.map-icon')?.classList.add('opacity-0');
            });
            
            // Add active class to selected
            element.classList.add('active');
            element.classList.remove('glass-panel', 'glass-panel-hover');
            element.querySelector('.map-icon')?.classList.remove('opacity-0');
            
            // Update Title
            document.getElementById('active-show-title').innerText = title;
            document.getElementById('vendor-location-text').innerText = 'at ' + title.split(' Reptile')[0];
            
            // Update Vendors
            renderVendors(locationKey);
        }

        // Initial Load
        renderVendors('charlotte');

        // Checkout Button
        function handleCheckout() {
            const btn = document.getElementById('btn-checkout');
            const text = document.getElementById('checkout-text');
            
            const originalText = text.innerText;
            
            text.innerText = 'Processing...';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                text.innerText = 'Redirecting';
                setTimeout(() => {
                     // Reset for demo purposes
                    text.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                    alert("Redirecting to secure payment gateway...");
                }, 800);
            }, 1000);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div className="bg-emerald-900/20 border-b border-emerald-500/10 overflow-hidden py-3">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-base">
<div className="flex items-center gap-3 text-emerald-400">
<i className="w-4 h-4" data-lucide="ticket"></i>
<span className="font-medium tracking-wide text-xs uppercase">Box Office Open</span>
</div>
<div className="flex-1 mx-8 overflow-hidden relative h-6">
<p className="absolute w-full animate-marquee whitespace-nowrap text-slate-400 text-sm">
                    Charlotte, NC (Dec 14-15)   •   Birmingham, AL (Dec 14-15)   •   Atlanta, GA (Jan 4-5)   •   Orlando, FL (Jan 11-12)   •   Secure your tickets online to save $5 at the door!
                </p>
</div>
<div className="hidden md:flex gap-4 opacity-60">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-gradient-to-br from-emerald-400 to-green-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-950" data-lucide="gem"></i>
</div>
<span className="brand-font text-2xl font-semibold text-white tracking-tight">Repticon</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Locations</a>
<a className="hover:text-white transition-colors" href="#">Calendar</a>
<a className="hover:text-white transition-colors" href="#">Tickets</a>
<a className="text-white transition-colors" href="#">Vendors</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400/90 hover:text-emerald-300" href="https://repticon.jellypod.ai/" target="_blank">
<i className="w-4 h-4" data-lucide="podcast"></i>
                    Daily Podcast
                </a>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 w-48 transition-all placeholder:text-slate-600" placeholder="Find a show..." type="text"/>
</div>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="relative pt-16 pb-12 border-b border-slate-800 bg-slate-900/50">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Upcoming Shows &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Tickets</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-2xl">
                Select a show below to view ticket options and see which vendors are attending.
            </p>
</div>
</div>

<section className="py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 space-y-4">

<div className="flex gap-2 mb-2">
<div className="relative flex-1">
<select className="w-full bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-emerald-500/50">
<option>All States</option>
<option>North Carolina</option>
<option>Alabama</option>
<option>Georgia</option>
<option>Florida</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative flex-1">
<select className="w-full bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-emerald-500/50">
<option>Any Date</option>
<option>December</option>
<option>January</option>
<option>February</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="calendar"></i>
</div>
</div>

<div className="space-y-3 max-h-[600px] overflow-y-auto custom-scroll pr-1" id="show-list">

<button className="show-item active w-full text-left group relative rounded-xl p-4 transition-all duration-300 overflow-hidden" onclick="selectShow(this, 'Charlotte Reptile Expo', 'charlotte')">

<div className="map-icon absolute right-0 top-0 p-3 opacity-0 transition-opacity duration-300">
<i className="w-12 h-12 text-emerald-400" data-lucide="map-pin"></i>
</div>
<div className="flex items-center gap-4 relative z-10">
<div className="date-box bg-slate-900/50 border border-slate-800 rounded-lg p-2 text-center min-w-[60px] group-hover:border-emerald-500/30 transition-colors">
<span className="block text-xs text-emerald-400 font-bold uppercase tracking-wider">Dec</span>
<span className="block text-xl font-bold">14</span>
</div>
<div>
<h4 className="text-slate-200 font-medium text-lg tracking-tight group-hover:text-emerald-400 transition-colors">Charlotte, NC</h4>
<p className="text-slate-500 text-sm">Cabarrus Arena</p>
</div>
</div>
</button>

<button className="show-item glass-panel glass-panel-hover w-full text-left group rounded-xl p-4 transition-all duration-300" onclick="selectShow(this, 'Birmingham Reptile Expo', 'birmingham')">
<div className="flex items-center gap-4">
<div className="date-box bg-slate-900/50 border border-slate-800 rounded-lg p-2 text-center min-w-[60px] group-hover:border-slate-700 transition-colors">
<span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Dec</span>
<span className="block text-xl font-bold text-slate-300">14</span>
</div>
<div>
<h4 className="text-slate-200 font-medium text-base tracking-tight group-hover:text-white">Birmingham, AL</h4>
<p className="text-slate-500 text-sm">Trussville Civic Center</p>
</div>
</div>
</button>

<button className="show-item glass-panel glass-panel-hover w-full text-left group rounded-xl p-4 transition-all duration-300" onclick="selectShow(this, 'Atlanta Reptile Expo', 'atlanta')">
<div className="flex items-center gap-4">
<div className="date-box bg-slate-900/50 border border-slate-800 rounded-lg p-2 text-center min-w-[60px] group-hover:border-slate-700 transition-colors">
<span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Jan</span>
<span className="block text-xl font-bold text-slate-300">04</span>
</div>
<div>
<h4 className="text-slate-200 font-medium text-base tracking-tight group-hover:text-white">Atlanta, GA</h4>
<p className="text-slate-500 text-sm">Gwinnett Fairgrounds</p>
</div>
</div>
</button>

<button className="show-item glass-panel glass-panel-hover w-full text-left group rounded-xl p-4 transition-all duration-300" onclick="selectShow(this, 'Orlando Reptile Expo', 'orlando')">
<div className="flex items-center gap-4">
<div className="date-box bg-slate-900/50 border border-slate-800 rounded-lg p-2 text-center min-w-[60px] group-hover:border-slate-700 transition-colors">
<span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Jan</span>
<span className="block text-xl font-bold text-slate-300">11</span>
</div>
<div>
<h4 className="text-slate-200 font-medium text-base tracking-tight group-hover:text-white">Orlando, FL</h4>
<p className="text-slate-500 text-sm">Central Florida Fair</p>
</div>
</div>
</button>

<button className="show-item glass-panel glass-panel-hover w-full text-left group rounded-xl p-4 transition-all duration-300" onclick="selectShow(this, 'Houston Reptile Expo', 'houston')">
<div className="flex items-center gap-4">
<div className="date-box bg-slate-900/50 border border-slate-800 rounded-lg p-2 text-center min-w-[60px] group-hover:border-slate-700 transition-colors">
<span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Feb</span>
<span className="block text-xl font-bold text-slate-300">01</span>
</div>
<div>
<h4 className="text-slate-200 font-medium text-base tracking-tight group-hover:text-white">Houston, TX</h4>
<p className="text-slate-500 text-sm">Pasadena Convention</p>
</div>
</div>
</button>
</div>
</div>

<div className="lg:col-span-8">
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-800/50 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<h2 className="text-3xl font-semibold text-white tracking-tight" id="active-show-title">Charlotte Reptile Expo</h2>
<span className="bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Selected</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar-days"></i>
                                        Dec 14-15, 2023
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-500" data-lucide="clock"></i>
                                        Sat: 9-4, Sun: 10-4
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-500" data-lucide="map"></i>
                                        Cabarrus Arena &amp; Events Center
                                    </div>
</div>
</div>
<div className="text-right hidden md:block">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Starting At</p>
<p className="text-3xl font-bold text-white">$10<span className="text-lg font-normal text-slate-500">.00</span></p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4 mb-10">

<div className="glass-panel p-5 rounded-xl hover:bg-slate-800/50 transition-colors border-emerald-500/20 border group relative">
<div className="absolute top-3 right-3">
<div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center transition-colors" id="indicator-adult">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
</div>
</div>
<h3 className="text-white font-medium text-lg mb-1">Adult Admission</h3>
<p className="text-slate-500 text-sm mb-4">Valid for Saturday OR Sunday. Ages 13+.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-bold text-white">$15</span>
<div className="flex items-center gap-3 bg-slate-950 rounded-lg p-1 border border-slate-800">
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('adult', -1)"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="text-white font-medium w-4 text-center" id="qty-adult">1</span>
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('adult', 1)"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl hover:bg-slate-800/50 transition-colors group relative">
<div className="absolute top-3 right-3">
<div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center transition-colors" id="indicator-child">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 transition-opacity"></div>
</div>
</div>
<h3 className="text-white font-medium text-lg mb-1">Child Admission</h3>
<p className="text-slate-500 text-sm mb-4">Ages 5-12. Children 4 and under are free.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-bold text-white">$5</span>
<div className="flex items-center gap-3 bg-slate-950 rounded-lg p-1 border border-slate-800">
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('child', -1)"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="text-white font-medium w-4 text-center" id="qty-child">0</span>
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('child', 1)"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl hover:bg-slate-800/50 transition-colors md:col-span-2 border-amber-500/10 hover:border-amber-500/30 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 bg-amber-500/10 w-24 h-24 rounded-full blur-xl"></div>
<div className="absolute top-3 right-3">
<div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center transition-colors" id="indicator-vip">
<div className="w-2.5 h-2.5 rounded-full bg-amber-500 opacity-0 transition-opacity"></div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-white font-medium text-lg">VIP Two-Day Pass</h3>
<span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded tracking-wide border border-amber-500/20">BEST VALUE</span>
</div>
<p className="text-slate-500 text-sm">Includes Early Entry (9am Sat), Two-Day Access, and Official T-Shirt coupon.</p>
</div>
<div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between">
<span className="text-2xl font-bold text-white">$25</span>
<div className="flex items-center gap-3 bg-slate-950 rounded-lg p-1 border border-slate-800">
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('vip', -1)"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="text-white font-medium w-4 text-center" id="qty-vip">0</span>
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" onclick="updateTicket('vip', 1)"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="mb-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="store"></i>
                                    Exhibitors List
                                    <span className="text-xs text-slate-500 font-normal ml-1" id="vendor-location-text">at Charlotte</span>
</h3>
<div className="relative">
<input className="bg-slate-950 border border-slate-800 rounded-lg py-1.5 pl-8 pr-3 text-xs text-white focus:outline-none focus:border-emerald-500/50 w-40 sm:w-56 transition-all placeholder:text-slate-600" id="vendor-search" onkeyup="filterVendors()" placeholder="Search vendors..." type="text"/>
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" data-lucide="search"></i>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3" id="vendor-grid">

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 hidden" id="vendor-grid-full">

</div>
<button className="w-full mt-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group" id="btn-toggle-vendors" onclick="toggleFullList()">
<span id="toggle-text">View Full Vendor List</span>
<i className="w-3 h-3 transition-transform duration-300" data-lucide="chevron-down" id="toggle-icon"></i>
</button>
</div>

<div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800 relative z-20">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<div className="bg-slate-800 p-3 rounded-lg text-slate-400 relative">
<i className="w-6 h-6" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" id="cart-badge">1</span>
</div>
<div>
<p className="text-sm text-slate-500" id="summary-count">Total (1 item)</p>
<p className="text-xl font-bold text-white" id="summary-total">$15.00</p>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<input className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors w-full md:w-32" placeholder="Promo Code" type="text"/>
<button className="bg-white text-slate-950 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-all w-full md:w-auto flex items-center justify-center gap-2" id="btn-checkout" onclick="handleCheckout()">
<span id="checkout-text">Checkout</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<p className="text-center md:text-left text-xs text-slate-600 mt-4">
                                By proceeding, you agree to our <a className="underline hover:text-slate-400" href="#">Terms of Service</a>. All sales are final.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-800 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-white mb-10 text-center">Why Buy Online?</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h4 className="text-white font-medium mb-2">Skip the Line</h4>
<p className="text-slate-500 text-sm">Online ticket holders get a dedicated fast-lane entrance at the venue.</p>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
<i className="w-6 h-6" data-lucide="piggy-bank"></i>
</div>
<h4 className="text-white font-medium mb-2">Save Money</h4>
<p className="text-slate-500 text-sm">Tickets are $5 cheaper online than at the door. Kids 4 &amp; under are always free.</p>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h4 className="text-white font-medium mb-2">Guaranteed Entry</h4>
<p className="text-slate-500 text-sm">Shows often sell out. Secure your spot, especially for VIP hours.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-800 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">Exhibitor Portal</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Apply for a Table</h3>
<p className="text-slate-400 mt-2 font-light">Join the nation's largest reptile &amp; exotic show tour.</p>
</div>
<div className="flex gap-2">
<div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
<div className="h-1 w-8 bg-slate-800 rounded-full"></div>
<div className="h-1 w-8 bg-slate-800 rounded-full"></div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-10">

<div className="lg:col-span-8">
<form className="space-y-8">

<div className="glass-panel p-8 rounded-2xl border-t-2 border-t-emerald-500/50">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<span className="bg-emerald-500/10 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border border-emerald-500/20">1</span>
                                Business &amp; Contact
                            </h4>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Business Name</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="e.g. Scale Pros LLC" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Contact Person</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Phone</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<span className="bg-slate-800 text-slate-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">2</span>
                                Select Event
                            </h4>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 text-white text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-emerald-500/50">
<option>Charlotte, NC (Dec 14-15)</option>
<option>Birmingham, AL (Dec 14-15)</option>
<option>Atlanta, GA (Jan 4-5)</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="mt-4 p-4 bg-emerald-900/10 border border-emerald-500/10 rounded-lg flex gap-3 items-start">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-emerald-100/80">Tables for Charlotte are 85% sold out. End caps are no longer available for this location.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<span className="bg-slate-800 text-slate-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">3</span>
                                Configuration
                            </h4>
<div className="grid md:grid-cols-2 gap-4">

<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="table_type" type="radio"/>
<div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/5 transition-all relative">
<div className="flex justify-between items-start mb-2">
<span className="text-white font-medium">Standard Table</span>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500"></div>
</div>
<p className="text-slate-500 text-xs mb-3">6ft draped table. Includes 2 vendor badges.</p>
<p className="text-lg font-bold text-white">$85<span className="text-sm font-normal text-slate-500">/weekend</span></p>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="table_type" type="radio"/>
<div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/5 transition-all relative">
<div className="flex justify-between items-start mb-2">
<span className="text-white font-medium">Corner / End Cap</span>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500"></div>
</div>
<p className="text-slate-500 text-xs mb-3">Premium visibility. Includes 3 vendor badges.</p>
<p className="text-lg font-bold text-white">$125<span className="text-sm font-normal text-slate-500">/weekend</span></p>
</div>
</label>
</div>
<div className="mt-6 space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-600 rounded bg-slate-900 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors"></div>
<i className="w-3.5 h-3.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Add Electricity Access (+$45)</span>
</label>
</div>
<div className="mt-6">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide block mb-2">Description of Goods</label>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all h-24 resize-none" placeholder="Briefly describe what animals or products you will be selling..."></textarea>
</div>
</div>
<button className="w-full bg-white hover:bg-emerald-50 text-slate-950 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group" type="button">
                            Submit Application
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-xs text-slate-500">
                            By submitting, you agree to Repticon's <a className="underline hover:text-white" href="#">Vendor Rules &amp; Regulations</a>. Payment is required upon approval.
                        </p>
</form>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="glass-panel p-6 rounded-2xl sticky top-24">
<h4 className="text-white font-medium mb-4 pb-4 border-b border-slate-800">Why Exhibit?</h4>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="users"></i>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-1">Targeted Audience</h5>
<p className="text-xs text-slate-500 leading-relaxed">Direct access to thousands of passionate reptile enthusiasts ready to buy.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="megaphone"></i>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-1">Marketing Support</h5>
<p className="text-xs text-slate-500 leading-relaxed">We promote your presence via our social media channels and email lists.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-400" data-lucide="shield-check"></i>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-1">Vet Verified</h5>
<p className="text-xs text-slate-500 leading-relaxed">On-site veterinary inspections ensure a healthy environment for all animals.</p>
</div>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-slate-800">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Questions?</p>
<a className="flex items-center gap-2 text-sm text-white hover:text-emerald-400 transition-colors" href="mailto:vendors@repticon.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                                vendors@repticon.com
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-emerald-500" data-lucide="gem"></i>
<span className="text-xl font-semibold text-white tracking-tight">Repticon</span>
</div>
<div className="flex gap-8 text-slate-500 text-base">
<a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Terms</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Sponsorship</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Media</a>
</div>
<p className="text-slate-600 text-sm">© 2023 Repticon. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
