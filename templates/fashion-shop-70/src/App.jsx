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



        lucide.createIcons();

        let currentSlide = 0;
        let productImages = [];

        // Filter function
        function filterProducts(category) {
            const products = document.querySelectorAll('.product-card');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            // Update button styles
            filterBtns.forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.classList.add('bg-black', 'text-white');
                    btn.classList.remove('text-gray-600');
                } else {
                    btn.classList.remove('bg-black', 'text-white');
                    btn.classList.add('text-gray-600');
                }
            });
            
            // Filter products
            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        function openModal(title, color, price, images, description, originalPrice) {
            productImages = images;
            currentSlide = 0;
            
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalColor').textContent = color;
            document.getElementById('modalPrice').textContent = price;
            document.getElementById('modalDescription').textContent = description;
            
            const originalPriceEl = document.getElementById('modalOriginalPrice');
            if (originalPrice) {
                originalPriceEl.textContent = originalPrice;
                originalPriceEl.classList.remove('hidden');
            } else {
                originalPriceEl.classList.add('hidden');
            }
            
            // Build carousel
            const carouselContainer = document.getElementById('carouselImages');
            carouselContainer.innerHTML = '';
            images.forEach((img, index) => {
                const imgEl = document.createElement('img');
                imgEl.src = img;
                imgEl.alt = `Product ${index + 1}`;
                imgEl.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
                imgEl.dataset.index = index;
                carouselContainer.appendChild(imgEl);
            });
            
            // Build indicators
            const indicatorsContainer = document.getElementById('slideIndicators');
            indicatorsContainer.innerHTML = '';
            images.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.className = `w-2 h-2 rounded-full transition-all ${index === 0 ? 'bg-white w-6' : 'bg-white/50'}`;
                indicator.onclick = () => goToSlide(index);
                indicatorsContainer.appendChild(indicator);
            });
            
            // Build thumbnails
            const thumbnailContainer = document.getElementById('thumbnailNav');
            thumbnailContainer.innerHTML = '';
            images.forEach((img, index) => {
                const thumb = document.createElement('button');
                thumb.className = `flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === 0 ? 'border-gray-900' : 'border-transparent hover:border-gray-300'}`;
                thumb.onclick = () => goToSlide(index);
                const thumbImg = document.createElement('img');
                thumbImg.src = img;
                thumbImg.alt = `Thumbnail ${index + 1}`;
                thumbImg.className = 'w-full h-full object-cover';
                thumb.appendChild(thumbImg);
                thumbnailContainer.appendChild(thumb);
            });
            
            const modal = document.getElementById('productModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => lucide.createIcons(), 10);
        }

        function closeModal() {
            const modal = document.getElementById('productModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        function changeSlide(direction) {
            currentSlide = (currentSlide + direction + productImages.length) % productImages.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        function updateCarousel() {
            // Update images
            const images = document.querySelectorAll('#carouselImages img');
            images.forEach((img, index) => {
                if (parseInt(img.dataset.index) === currentSlide) {
                    img.classList.remove('opacity-0');
                    img.classList.add('opacity-100');
                } else {
                    img.classList.remove('opacity-100');
                    img.classList.add('opacity-0');
                }
            });
            
            // Update indicators
            const indicators = document.querySelectorAll('#slideIndicators button');
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('bg-white', 'w-6');
                    indicator.classList.remove('bg-white/50');
                } else {
                    indicator.classList.remove('bg-white', 'w-6');
                    indicator.classList.add('bg-white/50');
                }
            });
            
            // Update thumbnails
            const thumbnails = document.querySelectorAll('#thumbnailNav button');
            thumbnails.forEach((thumb, index) => {
                if (index === currentSlide) {
                    thumb.classList.add('border-gray-900');
                    thumb.classList.remove('border-transparent');
                } else {
                    thumb.classList.remove('border-gray-900');
                    thumb.classList.add('border-transparent');
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            const modal = document.getElementById('productModal');
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'Escape') {
                    closeModal();
                } else if (e.key === 'ArrowLeft') {
                    changeSlide(-1);
                } else if (e.key === 'ArrowRight') {
                    changeSlide(1);
                }
            }
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
      

<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-8">
<h1 className="text-xl font-semibold tracking-tight">NOIRE</h1>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-gray-900 font-medium hover:text-gray-600 transition-colors" href="#">New Arrivals</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Women</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Men</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Accessories</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Sale</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-700" data-lucide="search"></i>
</button>
<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-700" data-lucide="user"></i>
</button>
<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
<i className="w-5 h-5 text-gray-700" data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
</button>
</div>
</div>
</div>
</header>

<section className="mt-16 relative h-[600px] bg-gray-50 overflow-hidden">
<img alt="Hero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-xl">
<h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-4">Spring Collection</h2>
<p className="text-lg text-white/90 mb-8">Discover the latest trends in contemporary fashion</p>
<button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Shop Now</button>
</div>
</div>
</div>
</section>

<div className="border-b border-gray-100 sticky top-16 bg-white z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
                        Filters
                    </button>
<button className="filter-btn px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors" data-category="all" onclick="filterProducts('all')">All</button>
<button className="filter-btn px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" data-category="dresses" onclick="filterProducts('dresses')">Dresses</button>
<button className="filter-btn px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" data-category="tops" onclick="filterProducts('tops')">Tops</button>
<button className="filter-btn px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" data-category="bottoms" onclick="filterProducts('bottoms')">Bottoms</button>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-600">Sort by:</span>
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                        Newest
                        <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="productGrid">

<div className="product-card group cursor-pointer" data-category="dresses" onclick='openModal("Silk Midi Dress", "Black", "$299", ["https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&amp;q=80", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&amp;q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80"], "A timeless silk midi dress crafted from luxurious fabric. Features a flattering silhouette with delicate draping.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Silk Midi Dress</h3>
<p className="text-sm text-gray-600 mb-2">Black</p>
<p className="font-semibold text-sm">$299</p>
</div>

<div className="product-card group cursor-pointer" data-category="tops" onclick='openModal("Linen Blazer", "Cream", "$459", ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;q=80", "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&amp;q=80", "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&amp;q=80"], "Premium linen blazer with a relaxed fit. Perfect for both professional and casual settings.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Linen Blazer</h3>
<p className="text-sm text-gray-600 mb-2">Cream</p>
<p className="font-semibold text-sm">$459</p>
</div>

<div className="product-card group cursor-pointer" data-category="bottoms" onclick='openModal("Wide Leg Trousers", "Navy", "$189", ["https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&amp;q=80", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;q=80", "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&amp;q=80", "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&amp;q=80"], "Contemporary wide leg trousers with a high waist. Comfortable yet elegant design.", "$249")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">Sale</div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Wide Leg Trousers</h3>
<p className="text-sm text-gray-600 mb-2">Navy</p>
<div className="flex items-center gap-2">
<p className="font-semibold text-sm text-red-500">$189</p>
<p className="text-sm text-gray-400 line-through">$249</p>
</div>
</div>

<div className="product-card group cursor-pointer" data-category="tops" onclick='openModal("Cashmere Knit", "Beige", "$379", ["https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&amp;q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80", "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&amp;q=80"], "Ultra-soft cashmere knit sweater. A wardrobe essential for cooler days.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Cashmere Knit</h3>
<p className="text-sm text-gray-600 mb-2">Beige</p>
<p className="font-semibold text-sm">$379</p>
</div>

<div className="product-card group cursor-pointer" data-category="tops" onclick='openModal("Tailored Shirt", "White", "$169", ["https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&amp;q=80", "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&amp;q=80", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;q=80", "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&amp;q=80"], "Classic tailored shirt with crisp lines. Essential piece for any wardrobe.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Tailored Shirt</h3>
<p className="text-sm text-gray-600 mb-2">White</p>
<p className="font-semibold text-sm">$169</p>
</div>

<div className="product-card group cursor-pointer" data-category="dresses" onclick='openModal("Pleated Midi Skirt", "Charcoal", "$229", ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&amp;q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80", "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&amp;q=80"], "Elegant pleated midi skirt with flowing fabric. Perfect for both day and evening wear.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded">New</div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Pleated Midi Skirt</h3>
<p className="text-sm text-gray-600 mb-2">Charcoal</p>
<p className="font-semibold text-sm">$229</p>
</div>

<div className="product-card group cursor-pointer" data-category="tops" onclick='openModal("Leather Jacket", "Black", "$799", ["https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&amp;q=80", "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&amp;q=80", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;q=80", "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&amp;q=80"], "Premium leather jacket with modern silhouette. A statement piece for any outfit.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Leather Jacket</h3>
<p className="text-sm text-gray-600 mb-2">Black</p>
<p className="font-semibold text-sm">$799</p>
</div>

<div className="product-card group cursor-pointer" data-category="tops" onclick='openModal("Satin Blouse", "Ivory", "$209", ["https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&amp;q=80", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&amp;q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&amp;q=80"], "Luxurious satin blouse with elegant draping. Sophisticated and versatile.")'>
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100" onclick="event.stopPropagation()">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors" onclick="event.stopPropagation()">Quick Add</button>
</div>
</div>
<h3 className="font-medium text-sm mb-1">Satin Blouse</h3>
<p className="text-sm text-gray-600 mb-2">Ivory</p>
<p className="font-semibold text-sm">$209</p>
</div>
</div>

<div className="flex justify-center mt-12">
<button className="px-8 py-3 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Load More</button>
</div>
</main>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="productModal" onclick="closeModal()">
<div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
<div className="grid md:grid-cols-2 gap-0">

<div className="relative bg-gray-100">
<div className="relative aspect-[3/4] overflow-hidden">
<div className="h-full" id="carouselImages">

</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors" id="prevBtn" onclick="changeSlide(-1)">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors" id="nextBtn" onclick="changeSlide(1)">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>

<button className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" id="slideIndicators">

</div>
</div>

<div className="flex gap-2 p-4 overflow-x-auto" id="thumbnailNav">

</div>
</div>

<div className="p-8 md:p-10">
<div className="mb-6">
<h2 className="text-3xl font-semibold tracking-tight mb-2" id="modalTitle"></h2>
<p className="text-gray-600 mb-4" id="modalColor"></p>
<div className="flex items-center gap-3">
<p className="text-2xl font-semibold" id="modalPrice"></p>
<p className="text-lg text-gray-400 line-through hidden" id="modalOriginalPrice"></p>
</div>
</div>
<div className="mb-6">
<p className="text-sm text-gray-600 leading-relaxed" id="modalDescription"></p>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium">Size</label>
<button className="text-xs text-gray-600 hover:text-gray-900 underline">Size Guide</button>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:border-gray-900 transition-colors">XS</button>
<button className="py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:border-gray-900 transition-colors">S</button>
<button className="py-2.5 border border-gray-900 bg-gray-50 rounded-lg text-sm font-medium">M</button>
<button className="py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:border-gray-900 transition-colors">L</button>
</div>
</div>

<div className="mb-6">
<label className="text-sm font-medium block mb-3">Quantity</label>
<div className="flex items-center gap-3">
<button className="w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<span className="w-12 text-center font-medium">1</span>
<button className="w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="space-y-3">
<button className="w-full bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">Add to Cart</button>
<button className="w-full border border-gray-200 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="heart"></i>
                            Add to Wishlist
                        </button>
</div>

<div className="mt-8 pt-8 border-t border-gray-100">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-sm font-medium mb-2">
                                Product Details
                                <i className="w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="text-sm text-gray-600 mt-3 space-y-2">
<p>• Premium quality fabric</p>
<p>• Made in Italy</p>
<p>• Dry clean only</p>
<p>• Model is 5'9" and wears size S</p>
</div>
</details>
</div>
<div className="pt-4 border-t border-gray-100 mt-4">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-sm font-medium mb-2">
                                Shipping &amp; Returns
                                <i className="w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="text-sm text-gray-600 mt-3 space-y-2">
<p>• Free shipping on orders over $200</p>
<p>• 30-day return policy</p>
<p>• Express delivery available</p>
</div>
</details>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-gray-100 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="font-semibold text-sm mb-4 tracking-tight">Shop</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Bestsellers</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Sale</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-sm mb-4 tracking-tight">Help</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Customer Service</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Shipping Info</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Returns</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-sm mb-4 tracking-tight">About</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-sm mb-4 tracking-tight">Newsletter</h3>
<p className="text-sm text-gray-600 mb-4">Subscribe to receive updates and exclusive offers.</p>
<div className="flex gap-2">
<input className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email address" type="email"/>
<button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
<p className="text-sm text-gray-600 mb-4 md:mb-0">© 2024 NOIRE. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
