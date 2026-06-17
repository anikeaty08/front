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


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            // Navbar blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.remove('shadow-sm');
                }
            });

            // Scroll Reveal Animation via Intersection Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));

            // --- Interactive Dealer Locator Logic ---
            
            // Mock Data based on real Demeter info
            const dealerData = [
                { id: 1, city: "Lilongwe", region: "Central", outlets: ["Demeter HQ", "Farmers World", "AGORA", "Independent"], products: "All Seed Varieties" },
                { id: 2, city: "Blantyre", region: "Southern", outlets: ["Farmers World", "AGORA", "Independent"], products: "Maize, Legumes" },
                { id: 3, city: "Mzuzu", region: "Northern", outlets: ["Farmers World", "Independent"], products: "Maize, Vegetables" },
                { id: 4, city: "Balaka", region: "Southern", outlets: ["Mega Farm Area", "AGORA", "Independent"], products: "Drought-Resistant Maize, Legumes" },
                { id: 5, city: "Dedza", region: "Central", outlets: ["Farmers World", "Independent"], products: "Maize, Beans" },
                { id: 6, city: "Zomba", region: "Southern", outlets: ["Farmers World", "AGORA"], products: "Maize, Legumes" },
                { id: 7, city: "Kasungu", region: "Central", outlets: ["Farmers World", "Independent"], products: "Maize, Groundnuts" },
                { id: 8, city: "Karonga", region: "Northern", outlets: ["Independent"], products: "Maize varieties" }
            ];

            const listContainer = document.getElementById('dealerList');
            const searchInput = document.getElementById('dealerSearch');
            const regionTabs = document.querySelectorAll('.region-tab');
            
            const detailPane = document.getElementById('dealerDetails');
            const emptyPane = document.getElementById('dealerEmpty');
            const detailTitle = document.getElementById('detailTitle');
            const detailRegion = document.getElementById('detailRegion');
            const detailOutlets = document.getElementById('detailOutlets');
            const detailProducts = document.getElementById('detailProducts');

            let currentRegion = 'All';
            let searchQuery = '';
            let activeId = null;

            // Render the list
            function renderList() {
                listContainer.innerHTML = '';
                
                const filtered = dealerData.filter(d => {
                    const matchesRegion = currentRegion === 'All' || d.region === currentRegion;
                    const matchesSearch = d.city.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesRegion && matchesSearch;
                });

                if (filtered.length === 0) {
                    listContainer.innerHTML = `
                        <div class="p-8 text-center text-zinc-500">
                            <p class="text-sm">No locations found for this criteria.</p>
                        </div>
                    `;
                    return;
                }

                filtered.forEach(d => {
                    const isActive = activeId === d.id;
                    const item = document.createElement('div');
                    item.className = `p-4 border-b border-zinc-100 cursor-pointer transition-colors ${isActive ? 'bg-zinc-50/80 border-l-2 border-l-emerald-500' : 'hover:bg-zinc-50 border-l-2 border-l-transparent'}`;
                    item.onclick = () => selectDealer(d);
                    
                    item.innerHTML = `
                        <div class="flex justify-between items-center mb-1">
                            <h4 class="text-sm font-semibold ${isActive ? 'text-emerald-700' : 'text-zinc-900'}">${d.city}</h4>
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="${isActive ? 'text-emerald-500' : 'text-zinc-300'}"></iconify-icon>
                        </div>
                        <p class="text-xs text-zinc-500 mb-2">${d.region} Region</p>
                        <div class="flex flex-wrap gap-1">
                            ${d.outlets.slice(0, 2).map(o => `<span class="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-xs font-medium border border-zinc-200/60">${o}</span>`).join('')}
                            ${d.outlets.length > 2 ? `<span class="px-2 py-0.5 bg-zinc-50 text-zinc-400 rounded text-xs font-medium border border-zinc-200/60">+${d.outlets.length - 2}</span>` : ''}
                        </div>
                    `;
                    listContainer.appendChild(item);
                });
            }

            // Select a dealer and update UI
            function selectDealer(data) {
                activeId = data.id;
                renderList(); // Update active state in list
                
                emptyPane.classList.add('hidden');
                detailPane.classList.remove('hidden');
                
                detailTitle.textContent = `${data.city} Distribution`;
                detailRegion.textContent = `${data.region} Region`;
                detailProducts.textContent = data.products;
                
                detailOutlets.innerHTML = data.outlets.map(o => {
                    let style = 'bg-zinc-100 text-zinc-700 border-zinc-200';
                    if(o.includes('HQ') || o.includes('Mega')) style = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                    return `<span class="px-2.5 py-1 ${style} border rounded-md text-xs font-medium">${o}</span>`;
                }).join('');
            }

            // Search listener
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderList();
            });

            // Tab listeners
            regionTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    // Reset tab styles
                    regionTabs.forEach(t => {
                        t.className = 'region-tab flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all';
                    });
                    
                    // Set active tab style
                    const target = e.target;
                    target.className = 'region-tab flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm ring-1 ring-zinc-200 text-zinc-900 transition-all';
                    
                    currentRegion = target.getAttribute('data-region');
                    renderList();
                });
            });

            // Initial render
            renderList();
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
      

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a aria-label="Demeter Homepage" className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-emerald-600 text-xl group-hover:rotate-12 transition-transform" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-[0.15em] text-zinc-900 uppercase">Demeter</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#mission">Mission</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#farmers">Farmers Corner</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#impact">Impact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-700 rounded-full hover:bg-emerald-800 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" href="#locator">
                    Locate Dealer
                </a>
<button aria-label="Menu" className="md:hidden text-zinc-500 hover:text-zinc-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-emerald-50/20 to-transparent"></div>
<div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-50/80 border border-emerald-200/50 text-emerald-700 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                    Government Certified Seed Company
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Empowering Malawi's <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Harvest Since 2004</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Bridging the gap between high-yield research and smallholder accessibility. Producing seed in Malawi, for Malawi.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#portfolio">
                        Explore Our Seeds
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#farmers">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
                        Planting Guides
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="mission">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">"It Starts With The Seed"</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">Quality inputs are the foundation of food security and economic growth. As your partner in growth, we operate a state-of-the-art processing facility right here in Lilongwe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 reveal">
<div className="w-12 h-12 rounded-xl bg-amber-100/50 flex items-center justify-center text-amber-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Nationwide Reach</h3>
<p className="text-sm text-zinc-500 leading-relaxed">A leading supplier for the FISP, reaching farmers through approximately 900 agro-input shops across the country.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Global Research</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Partnering with CIMMYT and CIAT to develop and trial climate-resilient, high-yielding varieties tailored for our soil.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Unwavering Trust</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Strictly managed network of contract out-growers ensures every packet is a guarantee of government-certified quality.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
<div>
<span className="text-sm font-medium text-emerald-600 tracking-wide uppercase mb-2 block">Our Portfolio</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Certified for Yield.</h2>
</div>
<p className="text-sm text-zinc-500 max-w-sm md:text-right">Carefully selected and tested varieties designed to thrive in Malawian conditions.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="group bg-white rounded-3xl p-1 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 reveal">
<div className="h-48 rounded-t-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center border-b border-zinc-100 overflow-hidden relative">
<iconify-icon className="text-8xl text-amber-200 group-hover:scale-110 transition-transform duration-500" icon="solar:corn-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-6 md:p-8">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Maize Varieties</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Drought-tolerant options ensuring food security in changing climates.</p>
<div className="space-y-4">
<div>
<div className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Hybrid</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800">Mphangala</span>
</div>
<div>
<div className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">OPV</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800">Mchotsa Nkhawa</span>
</div>
</div>
</div>
</article>

<article className="group bg-white rounded-3xl p-1 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 reveal delay-100">
<div className="h-48 rounded-t-2xl bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center border-b border-zinc-100 overflow-hidden relative">
<iconify-icon className="text-8xl text-emerald-200 group-hover:scale-110 transition-transform duration-500" icon="solar:leaf-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-6 md:p-8">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Nutritious Legumes</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Essential proteins and soil nitrogen-fixers for sustainable farming.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/50">Tikolore (Soybeans)</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/50">CG7 (Groundnuts)</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/50">CHUMA (Sugar Beans)</span>
</div>
</div>
</article>

<article className="group bg-white rounded-3xl p-1 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 reveal delay-200">
<div className="h-48 rounded-t-2xl bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center border-b border-zinc-100 overflow-hidden relative">
<iconify-icon className="text-8xl text-red-200 group-hover:scale-110 transition-transform duration-500" icon="solar:apple-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-6 md:p-8">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Commercial Vegetables</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">High-germination seeds for market-ready, vibrant produce.</p>
<ul className="space-y-2 text-sm text-zinc-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Cabbage</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Onions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Tomatoes</li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="impact">

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/50 to-transparent -z-10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4 block">Impact &amp; Commercialization</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">The Balaka Mega Farm Project.</h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                            Recently toured by the President, the Balaka Mega Farm stands as our model for large-scale agricultural commercialization. It showcases the immense potential of our trial data applied in real-world, high-capacity environments.
                        </p>
<div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
<div>
<div className="text-3xl font-semibold text-white mb-1">20+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Years of Data</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">HQ</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Lilongwe Facility</div>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="aspect-square md:aspect-video lg:aspect-square bg-zinc-800 rounded-3xl border border-zinc-700 p-8 flex flex-col justify-between relative overflow-hidden group">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0yMCAyMGMxMSAwIDIwLTkgMjAtMjBoLTQwaTIwIDIweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
<div className="relative z-10 flex items-center justify-between">
<iconify-icon className="text-3xl text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-medium px-2 py-1 bg-zinc-900 rounded-md border border-zinc-700">Trial Results</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">Yield Optimization</h3>
<p className="text-sm text-zinc-400">Continuous testing ensures our varieties outperform standard bounds under local climate stress.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="farmers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Farmer's Corner</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">More than vendors, we are your educational authority. Access technical sheets and expert advice from our Farm Services Unit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="group border border-zinc-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300 reveal cursor-pointer">
<div className="flex items-start gap-4">
<div className="p-3 bg-zinc-100 text-zinc-600 rounded-xl group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-hands-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Meet the "Agronauts"</h3>
<p className="text-sm text-zinc-500 mb-4">Our dedicated field experts provide hands-on agronomy advice tailored to your specific region and soil type.</p>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1">Request a visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl p-6 hover:border-amber-300 hover:bg-amber-50/30 transition-all duration-300 reveal delay-100 cursor-pointer">
<div className="flex items-start gap-4">
<div className="p-3 bg-zinc-100 text-zinc-600 rounded-xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Technical Sheets</h3>
<p className="text-sm text-zinc-500 mb-4">Download comprehensive planting guides and pest management strategies, including Fall Armyworm defense.</p>
<span className="text-xs font-medium text-amber-600 flex items-center gap-1">Download PDFs <iconify-icon icon="solar:download-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/50" id="locator">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Find a Certified Dealer</h2>
<p className="text-base text-zinc-500 max-w-xl">Available at Farmers World, AGORA, and over 900 independent agro-dealers across Malawi. Select a region to view key distribution hubs.</p>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[600px] reveal delay-100">

<div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-200/60 flex flex-col bg-white z-10">

<div className="p-4 border-b border-zinc-200/60 bg-zinc-50/50">

<div className="relative mb-4">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white transition-shadow" id="dealerSearch" placeholder="Search district or town..." type="text"/>
</div>

<div className="flex p-1 bg-zinc-100 rounded-lg" id="regionTabs">
<button className="region-tab flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm ring-1 ring-zinc-200 text-zinc-900 transition-all" data-region="All">All</button>
<button className="region-tab flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all" data-region="Northern">North</button>
<button className="region-tab flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all" data-region="Central">Central</button>
<button className="region-tab flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all" data-region="Southern">South</button>
</div>
</div>

<div className="flex-1 overflow-y-auto" id="dealerList">

</div>
</div>

<div className="w-full lg:w-2/3 bg-zinc-50 relative overflow-hidden flex flex-col items-center justify-center p-8 bg-grid-pattern min-h-[400px]">

<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
<iconify-icon className="text-[300px] text-zinc-900" icon="solar:map-linear"></iconify-icon>
</div>

<div className="relative z-10 w-full max-w-md bg-white border border-zinc-200/60 rounded-2xl shadow-sm p-8 text-center hidden transition-all" id="dealerDetails">
<div className="w-16 h-16 bg-emerald-100/50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200/50">
<iconify-icon className="text-3xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1" id="detailTitle">Lilongwe Hub</h3>
<p className="text-sm text-zinc-500 mb-6 uppercase tracking-wide font-medium" id="detailRegion">Central Region</p>
<div className="space-y-4 text-left border-t border-zinc-100 pt-6">
<div>
<span className="text-xs text-zinc-400 uppercase tracking-wider font-medium block mb-2">Available Outlet Types</span>
<div className="flex flex-wrap gap-2" id="detailOutlets">

</div>
</div>
<div>
<span className="text-xs text-zinc-400 uppercase tracking-wider font-medium block mb-2">Key Products Supplied</span>
<p className="text-sm text-zinc-700 font-medium" id="detailProducts">Maize Hybrids, Legumes, Vegetables</p>
</div>
<div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 mt-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-zinc-500 leading-relaxed">Visit your local agro-dealer and specifically request Demeter Seed to guarantee government-certified quality.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 text-center" id="dealerEmpty">
<div className="w-16 h-16 bg-zinc-100 text-zinc-400 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Select a Location</h3>
<p className="text-sm text-zinc-500 max-w-xs mx-auto">Choose a district from the list to view regional distribution details and available outlets.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-50 pt-16 pb-8 border-t border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-sm font-semibold tracking-[0.15em] text-zinc-900 uppercase block mb-4">Demeter</span>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-6">
                        Part of the Meridian Group. A premier Malawian integrated seed company dedicated to sustainable agricultural transformation.
                    </p>
<div className="text-xs text-zinc-400">
<p>Headquarters: Lilongwe, Malawi</p>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Maize Seeds</a></li>
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Legumes</a></li>
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Vegetables</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Planting Guides</a></li>
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Dealer Portal</a></li>
<li><a className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">
                    ©  Demeter Seed Malawi. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<span>Partnered with CIMMYT &amp; CIAT</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
