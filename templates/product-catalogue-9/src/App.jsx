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



        // Mock Data
        const mockCategories = [
            { id: 1, name: 'Commercial Lighting', slug: 'commercial-lighting', count: '240+', image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 2, name: 'Industrial Equipment', slug: 'industrial-equipment', count: '185', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 3, name: 'Office Furnishings', slug: 'office-furnishings', count: '95', image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 4, name: 'HVAC Systems', slug: 'hvac-systems', count: '60+', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
        ];

        const mockProducts = [
            { id: 1, name: 'Architectural Pendant A', slug: 'architectural-pendant-a', desc: 'Minimalist high-performance pendant designed for modern commercial spaces.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 2, name: 'Heavy Duty Compressor X2', slug: 'compressor-x2', desc: 'Industrial grade air compressor with noise reduction housing.', image: 'https://images.unsplash.com/photo-1615810220461-1316b110b489?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 3, name: 'Ergonomic Task Chair', slug: 'task-chair-pro', desc: 'Fully adjustable mesh back task chair for extended office use.', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 4, name: 'Commercial Diffuser Vent', slug: 'diffuser-vent', desc: 'Four-way directional air diffuser for drop ceilings.', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 5, name: 'LED Track Light Pro', slug: 'led-track-pro', desc: 'Adjustable spot track lighting with variable color temperatures.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 6, name: 'Modular Desk System', slug: 'modular-desk-sys', desc: 'Scalable desking solution for open-plan corporate environments.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 7, name: 'Industrial Extractor Fan', slug: 'extractor-fan-heavy', desc: 'High-volume exhaust fan for manufacturing facility ventilation.', image: 'https://images.unsplash.com/photo-1631541909061-71e34ddde0de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 8, name: 'Recessed Downlight Grid', slug: 'downlight-grid', desc: 'Low-glare architectural downlights for retail environments.', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
        ];

        // UI Components
        const skeletonCard = `
            <div class="animate-pulse bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div class="aspect-[4/3] bg-gray-200"></div>
                <div class="p-4 space-y-3">
                    <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div class="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
            </div>
        `;

        const skeletonProductCard = `
            <div class="animate-pulse flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden h-full">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-4 flex flex-col flex-1">
                    <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div class="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div class="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
                    <div class="mt-auto h-8 bg-gray-200 rounded w-full"></div>
                </div>
            </div>
        `;

        const emptyState = (message) => `
            <div class="col-span-full py-12 text-center border border-dashed border-gray-300 rounded-xl bg-gray-50">
                <p class="text-sm text-gray-500">${message}</p>
            </div>
        `;

        // Fetch Functions (Simulating API calls)
        async function fetchCategories() {
            return new Promise(resolve => setTimeout(() => resolve(mockCategories), 800));
        }

        async function fetchFeaturedProducts() {
            return new Promise(resolve => setTimeout(() => resolve(mockProducts), 1200));
        }

        // Render Functions
        async function loadCategories() {
            const container = document.getElementById('categories-container');
            container.innerHTML = skeletonCard.repeat(4);

            try {
                const categories = await fetchCategories();
                
                if (categories.length === 0) {
                    container.innerHTML = emptyState('No categories found.');
                    return;
                }

                container.innerHTML = categories.map(cat => `
                    <a href="/c/${cat.slug}" class="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
                        <div class="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div class="p-4">
                            <h3 class="text-sm font-medium text-gray-900 mb-1">${cat.name}</h3>
                            <p class="text-xs text-gray-500">${cat.count} Products</p>
                        </div>
                    </a>
                `).join('');
            } catch (error) {
                container.innerHTML = emptyState('Failed to load categories.');
            }
        }

        async function loadFeaturedProducts() {
            const container = document.getElementById('products-container');
            container.innerHTML = skeletonProductCard.repeat(8);

            try {
                const products = await fetchFeaturedProducts();

                if (products.length === 0) {
                    container.innerHTML = emptyState('No featured products available.');
                    return;
                }

                container.innerHTML = products.map(prod => `
                    <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all h-full">
                        <a href="/p/${prod.slug}" class="block aspect-square bg-gray-100 overflow-hidden">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="${prod.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        </a>
                        <div class="p-4 flex flex-col flex-1">
                            <a href="/p/${prod.slug}">
                                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-1">${prod.name}</h3>
                            </a>
                            <p class="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">${prod.desc}</p>
                            <a href="/p/${prod.slug}" class="mt-auto inline-flex items-center justify-center w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 text-xs font-medium rounded-lg transition-colors">
                                View Product
                            </a>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                container.innerHTML = emptyState('Failed to load featured products.');
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadCategories();
            loadFeaturedProducts();
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-base font-medium tracking-[0.2em] text-gray-900 uppercase" href="/">
                    Aura
                </a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="/products">Catalogue</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#categories">Categories</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#contact">Contact Us</a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex relative items-center">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-64 pl-9 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-300 focus:ring-0 transition-all outline-none" placeholder="Search catalogue..." style={{strokeWidth: '1.5'}} type="text"/>
</div>
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<section className="py-20 md:py-32 flex flex-col items-center text-center max-w-3xl mx-auto">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                Browse our product catalogue
            </h1>
<p className="text-base text-gray-500 mb-8 max-w-xl">
                Explore categories and request a quote for any product.
            </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm" href="#categories">
                    View Categories
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-sm font-medium rounded-lg transition-colors shadow-sm" href="#contact">
                    Contact / Request a Quote
                </a>
</div>
</section>

<section className="py-12 border-t border-gray-200" id="categories">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Categories</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="categories-container">

</div>
</section>

<section className="py-12 border-t border-gray-200 mb-12" id="featured-products">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Featured Products</h2>
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 transition-colors" href="/products">
                    View all products <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="products-container">

</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<span className="block text-sm font-medium tracking-[0.2em] text-gray-900 uppercase mb-2">
                        Aura
                    </span>
<p className="text-xs text-gray-500 max-w-xs">
                        Professional supply solutions. Browse our comprehensive catalogue and request custom project quotes seamlessly.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
<a className="inline-flex items-center gap-2 text-sm text-gray-900 font-medium hover:text-gray-600 transition-colors" href="mailto:quotes@aura.co">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> quotes@aura.co
                    </a>
<a className="inline-flex items-center gap-2 text-sm text-gray-900 font-medium hover:text-gray-600 transition-colors" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> +1 (555) 123-4567
                    </a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 Aura Supply Co. Ltd. All rights reserved.</p>
<div className="flex gap-6 text-xs">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="/products">Catalogue</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">Terms of Trade</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
