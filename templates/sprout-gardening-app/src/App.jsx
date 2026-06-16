import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sprout: {
500: '#008489',
600: '#006C70',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
boxShadow: {
'floating': '0 6px 16px rgba(0,0,0,0.12)',
'card': '0 2px 4px rgba(0,0,0,0.08)',
'menu': '0 2px 16px rgba(0,0,0,0.10)',
'glow': '0 0 40px -10px rgba(0, 132, 137, 0.3)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        lucide.createIcons();

        // Initial Filter State
        let currentCategory = 'tropical';

        // Filter Logic
        function filterItems(category, element) {
            currentCategory = category;
            
            // 1. Update UI Buttons
            const buttons = document.querySelectorAll('.category-btn');
            
            // Reset all buttons
            buttons.forEach(btn => resetButtonStyle(btn));

            // Set active button
            if (element) {
                const btn = element.closest('.category-btn');
                if (btn) {
                    const icon = btn.querySelector('svg');
                    const text = btn.querySelector('span');
                    
                    btn.classList.remove('opacity-60');
                    icon.classList.remove('text-zinc-500');
                    icon.classList.add('text-black');
                    
                    text.classList.remove('text-zinc-500', 'border-transparent');
                    text.classList.add('text-black', 'border-black');
                }
            }

            // 2. Filter Grid Items
            const items = document.querySelectorAll('.listing-card');
            let visibleCount = 0;

            items.forEach(item => {
                const itemCategory = item.dataset.category;
                
                if (category === 'all' || itemCategory === category) {
                    item.classList.remove('hidden-item');
                    void item.offsetWidth;
                    item.classList.remove('fade-out');
                    visibleCount++;
                } else {
                    item.classList.add('fade-out');
                    setTimeout(() => {
                        if (item.classList.contains('fade-out')) {
                            item.classList.add('hidden-item');
                        }
                    }, 400); 
                }
            });

            // 3. Handle Empty State
            const emptyState = document.getElementById('empty-state');
            const grid = document.getElementById('listings-grid');
            
            if (visibleCount === 0) {
                setTimeout(() => {
                    if (visibleCount === 0) {
                        grid.classList.add('hidden');
                        emptyState.classList.remove('hidden');
                    }
                }, 400);
            } else {
                grid.classList.remove('hidden');
                emptyState.classList.add('hidden');
            }
        }

        function resetButtonStyle(btn) {
            const icon = btn.querySelector('svg');
            const text = btn.querySelector('span');
            
            if(icon && text) {
                btn.classList.add('opacity-60');
                icon.classList.remove('text-black');
                icon.classList.add('text-zinc-500');
                
                text.classList.remove('text-black', 'border-black');
                text.classList.add('text-zinc-500', 'border-transparent');
            }
        }

        // Toggle Scientific Names
        function toggleScientificNames(checkbox) {
            const names = document.querySelectorAll('.plant-name');
            names.forEach(name => {
                if (checkbox.checked) {
                    name.textContent = name.dataset.sci;
                    name.classList.add('italic', 'font-serif', 'font-medium');
                    name.classList.remove('font-semibold', 'font-sans');
                } else {
                    name.textContent = name.dataset.common;
                    name.classList.remove('italic', 'font-serif', 'font-medium');
                    name.classList.add('font-semibold', 'font-sans');
                }
            });
        }

        // Menu Toggle
        function toggleMenu(event) {
            event.stopPropagation();
            const menu = document.getElementById('user-menu');
            menu.classList.toggle('hidden');
        }

        function closeMenu() {
            const menu = document.getElementById('user-menu');
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        }

        // Scroll Shadow for Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 10) {
                header.classList.add('shadow-md');
                header.classList.remove('shadow-sm');
                header.classList.add('bg-white/95');
                header.classList.remove('bg-white/80');
            } else {
                header.classList.remove('shadow-md');
                header.classList.add('shadow-sm');
                header.classList.remove('bg-white/95');
                header.classList.add('bg-white/80');
            }
        });

        // Initialize grid state
        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.listing-card');
            items.forEach(item => {
                if (item.dataset.category !== 'tropical') {
                    item.classList.add('hidden-item', 'fade-out');
                }
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-200 transition-all duration-300" id="main-header">
<div className="px-6 md:px-12 h-20 flex items-center justify-between max-w-[1920px] mx-auto relative">

<div className="flex-1 flex items-center">
<a className="flex items-center gap-1 text-sprout-500 hover:text-sprout-600 transition-colors group" href="#">
<svg className="lucide lucide-sprout w-8 h-8 fill-current group-hover:scale-110 transition-transform" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
<span className="hidden lg:block font-semibold text-xl tracking-tight text-sprout-500 ml-1">sprout</span>
</a>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-black transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-600 hover:text-black transition-colors" href="#catalog">Catalog</a>
<a className="text-sm font-medium text-zinc-600 hover:text-black transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex-1 flex items-center justify-end gap-2 relative">
<button className="hidden md:block text-xs font-semibold hover:bg-zinc-100 px-4 py-3 rounded-full transition-colors text-zinc-800">
                    Propagate your home
                </button>
<button className="p-3 hover:bg-zinc-100 rounded-full transition-colors text-zinc-800">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>

<div className="relative">
<button className="flex items-center gap-3 border border-zinc-200 rounded-full p-1 pl-3 hover:shadow-md transition-all cursor-pointer ml-1 bg-white hover:bg-zinc-50" onclick="toggleMenu(event)">
<svg className="lucide lucide-menu w-4 h-4 text-zinc-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<div className="bg-zinc-500 rounded-full p-1">
<svg className="lucide lucide-user w-5 h-5 text-white fill-current" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</button>

<div className="hidden absolute right-0 top-[120%] w-[240px] bg-white rounded-xl shadow-menu border border-zinc-100 py-2 z-[60] origin-top-right transition-transform" id="user-menu">
<a className="block px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50" href="#">Sign up</a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-600 hover:bg-zinc-50" href="#">Log in</a>
<div className="h-[1px] bg-zinc-200 my-2"></div>
<a className="block px-4 py-3 text-sm font-normal text-zinc-600 hover:bg-zinc-50" href="#">Propagate your home</a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-600 hover:bg-zinc-50" href="#">Help Center</a>
</div>
</div>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-sprout-500/10 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
<span className="flex h-2 w-2 rounded-full bg-sprout-500"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">New Arrivals: Rare Philodendrons</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                    Bring the outdoors <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sprout-600 to-emerald-400">inside your home.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Discover a curated marketplace of rare, common, and home-grown plants. Delivered directly from passionate growers to your doorstep.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" href="#catalog">
                        Start Exploring
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-full font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2" href="#features">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        How it works
                    </a>
</div>
<div className="mt-16 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">14-Day Guarantee</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-xs font-medium">Safe Shipping</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-heart-handshake w-5 h-5" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<span className="text-xs font-medium">Grower Support</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="features">
<div className="max-w-[1920px] mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Cultivated with care</h2>
<p className="text-zinc-500">We handle the tricky parts so you can enjoy the greenery. Here is how Sprout ensures your plants arrive happy.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-floating transition-shadow duration-300">
<div className="w-12 h-12 bg-sprout-500/10 rounded-xl flex items-center justify-center mb-6 text-sprout-600">
<svg className="lucide lucide-thermometer-sun w-6 h-6" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="M12 8a4 4 0 0 0-1.645 7.647"></path><path d="M2 12h2"></path><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m6.34 17.66-1.41 1.41"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Climate Controlled</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Our packaging adapts to the weather. Heat packs for winter and moisture retention for summer ensure safe travels.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-floating transition-shadow duration-300">
<div className="w-12 h-12 bg-sprout-500/10 rounded-xl flex items-center justify-center mb-6 text-sprout-600">
<svg className="lucide lucide-sprout w-6 h-6" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Root Guarantee</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Every plant is inspected for root health before shipping. If it doesn't thrive within 14 days, we replace it for free.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-floating transition-shadow duration-300">
<div className="w-12 h-12 bg-sprout-500/10 rounded-xl flex items-center justify-center mb-6 text-sprout-600">
<svg className="lucide lucide-book-open w-6 h-6" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Expert Care Guides</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Don't know a Pothos from a Philodendron? Scan the QR code on your pot for instant, specific care instructions.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen pb-24" id="catalog">

<div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 pt-6 pb-2 mb-8 transition-all">
<div className="px-6 md:px-12 max-w-[1920px] mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Explore Collection</h2>

<div className="border border-zinc-200 rounded-xl p-2 md:p-3 flex items-center justify-between gap-4 w-full md:w-auto hover:bg-zinc-50 cursor-pointer shadow-sm transition-colors" onclick="document.getElementById('toggle').click()">
<span className="text-xs font-semibold text-zinc-800 px-2">Scientific names</span>
<div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer top-1 left-1 transition-all duration-300" id="toggle" name="toggle" onchange="toggleScientificNames(this)" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>

<div className="overflow-x-auto no-scrollbar pb-2">
<div className="flex items-center gap-8 min-w-max" id="category-container">
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer" data-category="tropical" onclick="filterItems('tropical', this)">
<svg className="lucide lucide-palmtree w-6 h-6 text-black transition-colors duration-200" data-lucide="palmtree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
<span className="text-xs font-semibold text-black pb-3 border-b-2 border-black transition-all duration-200">Tropical</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="desert" onclick="filterItems('desert', this)">
<svg className="lucide lucide-sun w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Desert</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="low-light" onclick="filterItems('low-light', this)">
<svg className="lucide lucide-cloud w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Low Light</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="pet-safe" onclick="filterItems('pet-safe', this)">
<svg className="lucide lucide-cat w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="cat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Pet Safe</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="rare" onclick="filterItems('rare', this)">
<svg className="lucide lucide-sparkles w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Rare</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="flowering" onclick="filterItems('flowering', this)">
<svg className="lucide lucide-flower-2 w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Flowering</span>
</button>
<button className="category-btn group flex flex-col items-center gap-2 min-w-[64px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity" data-category="edible" onclick="filterItems('edible', this)">
<svg className="lucide lucide-carrot w-6 h-6 text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200" data-lucide="carrot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"></path><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"></path></svg>
<span className="text-xs font-medium text-zinc-500 pb-3 border-b-2 border-transparent group-hover:border-zinc-200 transition-all duration-200">Edible</span>
</button>
</div>
</div>
</div>
</div>

<div className="px-6 md:px-12 max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10" id="listings-grid">

<div className="group cursor-pointer listing-card" data-category="tropical">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Monstera" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-zinc-800">Botanist Pick</span>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Monstera Deliciosa" data-sci="Monstera deliciosa">Monstera deliciosa</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.98</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Tropical, Indirect Light</p>
<p className="text-zinc-500 text-sm">Water every 7 days</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$45</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card" data-category="tropical">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Fiddle Leaf" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Fiddle Leaf Fig" data-sci="Ficus lyrata">Ficus lyrata</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.85</span>
</div>
</div>
<p className="text-zinc-500 text-sm">High Maintenance</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$82</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="desert">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Succulents" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Succulent Trio" data-sci="Echeveria elegans">Echeveria elegans</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>5.0</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Desert, Full Sun</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$24</span>
<span className="text-zinc-900 text-sm">set</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="low-light">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Pothos" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-zinc-800">Best Seller</span>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Golden Pothos" data-sci="Epipremnum aureum">Epipremnum aureum</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.92</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Beginner Friendly</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$18</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="desert">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Cactus" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Prickly Pear" data-sci="Opuntia ficus-indica">Opuntia ficus-indica</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.76</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Arid, Direct Sun</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$32</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="rare">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Pink Princess" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Pink Princess" data-sci="Philodendron erubescens">Philodendron erubescens</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.99</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Rare, Collector</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$120</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="low-light">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Snake Plant" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Snake Plant" data-sci="Sansevieria trifasciata">Sansevieria trifasciata</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.88</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Indestructible</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$35</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card" data-category="tropical">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Bird of Paradise" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-zinc-800">New Arrival</span>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Bird of Paradise" data-sci="Strelitzia reginae">Strelitzia reginae</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.75</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Statement Piece</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$95</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="pet-safe">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Fern" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Boston Fern" data-sci="Nephrolepis exaltata">Nephrolepis exaltata</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.6</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Pet Friendly</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$28</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>

<div className="group cursor-pointer listing-card hidden-item fade-out" data-category="flowering">
<div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-zinc-100 mb-3">
<img alt="Orchid" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" src="https://images.unsplash.com/photo-1596720230232-a055b85d470d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 text-white/70 hover:scale-110 transition-transform">
<svg className="lucide lucide-heart w-6 h-6 fill-black/50 stroke-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<h3 className="plant-name font-medium font-serif italic text-zinc-900 text-sm" data-common="Moth Orchid" data-sci="Phalaenopsis">Phalaenopsis</h3>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.82</span>
</div>
</div>
<p className="text-zinc-500 text-sm">Flowering, Indoor</p>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900 text-sm">$22</span>
<span className="text-zinc-900 text-sm">plant</span>
</div>
</div>
</div>
<div className="hidden py-20 text-center" id="empty-state">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-4">
<svg className="lucide lucide-search-x w-8 h-8 text-zinc-400" data-lucide="search-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900">No plants found</h3>
<p className="text-zinc-500 mt-2">Try selecting a different category.</p>
<button className="mt-6 px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors" onclick="filterItems('all', this)">
                        View all plants
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Rooted in trust</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100">
<div className="flex text-sprout-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 mb-6 leading-relaxed">"I was skeptical about ordering plants online, but Sprout changed my mind. My Monstera arrived perfectly packaged and larger than expected."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Sarah J.</h4>
<p className="text-xs text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100">
<div className="flex text-sprout-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 mb-6 leading-relaxed">"The scientific names toggle is such a nice touch. I'm learning so much just by browsing. The Pink Princess I bought is thriving!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Michael C.</h4>
<p className="text-xs text-zinc-500">Plant Collector</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100">
<div className="flex text-sprout-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 mb-6 leading-relaxed">"Customer service was incredible. When my delivery was delayed by a storm, they proactively reached out and ensured the plant was safe."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Emily R.</h4>
<p className="text-xs text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white" id="pricing">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Grow with Sprout+</h2>
<p className="text-zinc-400">Join our community for exclusive drops and free shipping.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-zinc-800 border border-zinc-700/50 hover:bg-zinc-800/80 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Seedling</h3>
<p className="text-zinc-400 text-sm mb-6">For the casual plant parent.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold">Free</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Access to marketplace
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Basic care guides
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Community support
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-600 font-semibold text-sm hover:bg-zinc-700 transition-colors">Sign Up Free</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-800 border border-sprout-500 relative shadow-glow">
<div className="absolute top-0 right-0 bg-sprout-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
<h3 className="text-lg font-medium text-white mb-2">Greenhouse</h3>
<p className="text-zinc-400 text-sm mb-6">Serious about your jungle.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold">$12</span>
<span className="text-zinc-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Free shipping &gt; $50
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                1-on-1 Botanist calls
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Early access to rare drops
                            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-sprout-500 text-white font-semibold text-sm hover:bg-sprout-600 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-800 border border-zinc-700/50 hover:bg-zinc-800/80 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Conservatory</h3>
<p className="text-zinc-400 text-sm mb-6">For offices and large spaces.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold">$49</span>
<span className="text-zinc-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Unlimited free shipping
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Interior design consult
                            </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-sprout-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Professional maintenance
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-600 font-semibold text-sm hover:bg-zinc-700 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40" onclick="closeMenu()">
<button className="bg-zinc-900 hover:scale-105 hover:shadow-floating active:scale-95 transition-all text-white px-5 py-3.5 rounded-full flex items-center gap-2 shadow-lg group">
<span className="text-sm font-semibold tracking-wide">Show Map</span>
<svg className="lucide lucide-map w-4 h-4 group-hover:text-zinc-200" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</button>
</div>

<div className="md:hidden fixed bottom-0 w-full bg-white border-t border-zinc-200 z-50 pb-safe">
<div className="grid grid-cols-3 h-16">
<div className="flex flex-col items-center justify-center gap-1 text-sprout-600">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium">Explore</span>
</div>
<div className="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-zinc-600">
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-[10px] font-medium">Wishlist</span>
</div>
<div className="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-zinc-600">
<svg className="lucide lucide-user-circle w-6 h-6" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
<span className="text-[10px] font-medium">Log in</span>
</div>
</div>
</div>

<footer className="hidden md:block bg-zinc-50 border-t border-zinc-200 py-12" onclick="closeMenu()">
<div className="max-w-[1920px] mx-auto px-12">
<div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">

<div className="lg:w-1/3">
<a className="flex items-center gap-2 text-sprout-500 mb-4" href="#">
<svg className="lucide lucide-sprout w-6 h-6 fill-current" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
<span className="font-semibold text-xl tracking-tight">sprout</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
                        The world's destination for plant lovers. Connect with growers, find rare species, and bring life into your home.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-sprout-500 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-400 hover:text-sprout-500 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-400 hover:text-sprout-500 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>

<div className="lg:w-2/3 grid grid-cols-3 gap-8">
<div className="">
<h5 className="font-semibold text-sm text-zinc-900 mb-4">Support</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Plant Care Help</a></li>
<li className=""><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">AirCover for Plants</a></li>
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Cancellation options</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold text-sm text-zinc-900 mb-4">Community</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Sprout.org</a></li>
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Combating deforestation</a></li>
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Gift cards</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold text-sm text-zinc-900 mb-4">Hosting</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Propagate your home</a></li>
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">AirCover for Hosts</a></li>
<li><a className="hover:text-sprout-500 hover:underline transition-colors" href="#">Community forum</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
<div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
<span className="" style={{}}>© 2026 Sprout, Inc.</span>
<span className="hidden lg:inline">·</span>
<a className="hover:underline hidden lg:inline" href="#">Privacy</a>
<span className="hidden lg:inline">·</span>
<a className="hover:underline hidden lg:inline" href="#">Terms</a>
<span className="hidden lg:inline">·</span>
<a className="hover:underline hidden lg:inline" href="#">Sitemap</a>
</div>
<div className="flex gap-6 font-semibold text-zinc-800">
<div className="flex items-center gap-2 cursor-pointer hover:underline">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        English (US)
                    </div>
<div className="flex items-center gap-2 cursor-pointer hover:underline">
                        $ USD
                    </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
