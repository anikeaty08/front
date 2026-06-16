import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Image gallery functionality
        const thumbs = document.querySelectorAll('.thumb');
        const mainImage = document.getElementById('mainImage');
        
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbs.forEach(t => {
                    t.classList.remove('active', 'border-blue-600');
                    t.classList.add('border-gray-200');
                });
                
                // Add active class to clicked thumbnail
                thumb.classList.add('active', 'border-blue-600');
                thumb.classList.remove('border-gray-200');
                
                // Update main image
                const imgSrc = thumb.querySelector('img').src;
                mainImage.src = imgSrc.replace('320', '800'); // Get higher resolution
            });
        });

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;
                
                // Remove active styles from all tabs
                tabButtons.forEach(btn => {
                    btn.classList.remove('active', 'text-blue-600', 'border-blue-600', 'bg-white');
                    btn.classList.add('text-gray-600', 'border-transparent');
                });
                
                // Add active styles to clicked tab
                button.classList.add('active', 'text-blue-600', 'border-blue-600', 'bg-white');
                button.classList.remove('text-gray-600', 'border-transparent');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show selected tab content
                const activeContent = document.getElementById(tabId + '-tab');
                if (activeContent) {
                    activeContent.classList.remove('hidden');
                }
            });
        });

        // Color selection
        const colorOptions = document.querySelectorAll('.color-option');
        const selectedColor = document.getElementById('selectedColor');

        const colorNames = {
            joy: 'Joy (warm peachy pink)',
            hope: 'Hope (soft berry)',
            bliss: 'Bliss (coral peach)',
            happy: 'Happy (bright cherry)'
        };

        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                colorOptions.forEach(opt => {
                    opt.classList.remove('active', 'border-blue-600');
                    opt.classList.add('border-transparent');
                });
                
                // Add active class to clicked option
                option.classList.add('active', 'border-blue-600');
                option.classList.remove('border-transparent');
                
                // Update selected color text
                const colorKey = option.dataset.color;
                selectedColor.textContent = colorNames[colorKey];
            });
        });

        // Quantity controls
        const qtyMinus = document.getElementById('qtyMinus');
        const qtyPlus = document.getElementById('qtyPlus');
        const qtyInput = document.getElementById('qtyInput');

        qtyMinus.addEventListener('click', () => {
            const currentValue = parseInt(qtyInput.value);
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        qtyPlus.addEventListener('click', () => {
            const currentValue = parseInt(qtyInput.value);
            qtyInput.value = currentValue + 1;
        });

        // Add to cart functionality
        const addToCartBtn = document.getElementById('addToCart');
        const cartCount = document.getElementById('cartCount');

        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(qtyInput.value);
            const currentCartCount = parseInt(cartCount.textContent);
            const newCount = currentCartCount + quantity;
            
            // Update cart count with animation
            cartCount.style.transform = 'scale(1.3)';
            cartCount.textContent = newCount;
            
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
            
            // Show success message (optional)
            addToCartBtn.innerHTML = '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Added to Basket';
            
            setTimeout(() => {
                addToCartBtn.innerHTML = '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> Add to Basket';
            }, 2000);
        });

        // Wishlist toggle
        const wishlistBtn = document.getElementById('addToWishlist');
        wishlistBtn.addEventListener('click', () => {
            const heart = wishlistBtn.querySelector('svg');
            if (heart.classList.contains('fill-current')) {
                heart.classList.remove('fill-current', 'text-red-500');
                wishlistBtn.querySelector('span').textContent = 'Save to Loves';
            } else {
                heart.classList.add('fill-current', 'text-red-500');
                wishlistBtn.querySelector('span').textContent = 'Saved to Loves';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-gray-200/50 fade-in">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-10">
<a className="flex items-center gap-3 hover-lift" href="#">
<span className="text-xl font-semibold tracking-tight text-gray-900">Sephora</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Makeup</a>
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Skincare</a>
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Fragrance</a>
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Hair</a>
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Tools</a>
<a className="text-sm font-medium text-blue-600" href="#">Rare Beauty</a>
</nav>
</div>

<div className="flex items-center gap-2">
<button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200" id="searchBtn">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200" id="wishlistBtn">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button className="relative p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200" id="cartBtn">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="cart-count absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center" id="cartCount" style={{transform: 'scale(1)'}}>3</span>
</button>
</div>
</div>
</div>
</header>

<nav className="pt-20 pb-4 bg-gray-50/50 fade-in stagger-1">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<ol className="flex items-center gap-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Sephora</a></li>
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<li><a className="hover:text-gray-900 transition-colors" href="#">Makeup</a></li>
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<li><a className="hover:text-gray-900 transition-colors" href="#">Face</a></li>
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<li className="text-gray-900 font-medium">Soft Pinch Liquid Blush</li>
</ol>
</div>
</nav>

<main className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6" id="aura-emfkz7c4w">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7" id="aura-emfkzf70p">
<div className="sticky top-24" id="aura-emfkz7gr8">
<div className="flex gap-4">

<div className="flex flex-col gap-3 slide-in-up stagger-3">
<button className="thumb active border-2 border-blue-600 rounded-xl overflow-hidden hover-lift">
<img className="w-16 h-16 object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=320&amp;q=80"/>
</button>
<button className="thumb border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden hover-lift transition-all duration-200">
<img className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4e80d5b8-e4bd-4100-8caf-278d09d3a953_3840w.jpg"/>
</button>
<button className="thumb border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden hover-lift transition-all duration-200">
<img className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8e09b4-f7e4-4778-bb01-2600e5f66527_320w.jpg"/>
</button>
<button className="thumb border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden hover-lift transition-all duration-200">
<img className="w-16 h-16 object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=320&amp;q=80"/>
</button>
<button className="thumb border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden hover-lift transition-all duration-200">
<img className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f16f0b02-58bb-4f2f-937a-ac5e8c06c09b_320w.jpg"/>
</button>
</div>

<div className="relative overflow-hidden stagger-2 bg-gradient-to-br from-pink-50 to-rose-100 flex-1 rounded-3xl shadow-2xl blur-in">
<img alt="Rare Beauty Soft Pinch Liquid Blush" className="zoom-image aspect-square w-full object-cover" id="mainImage" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&amp;q=80"/>

<div className="absolute top-6 right-6 flex items-center gap-2 glass-morphism text-gray-900 px-3 py-2 rounded-full text-sm font-medium">
<svg className="lucide lucide-droplet w-[16px] h-[16px] text-neutral-950" data-icon-replaced="true" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<span className="">Buildable Coverage</span>
</div>
<div className="absolute top-6 left-6 text-sm font-semibold text-white bg-rose-500 rounded-full pt-2 pr-4 pb-2 pl-4">
                Bestseller
            </div>
<div className="absolute bottom-6 left-6 right-6 glass-morphism bg-neutral-50/20 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm text-neutral-950/60 mb-1">Long-wear</p>
<p className="text-2xl font-semibold text-neutral-950">12 hours</p>
<p className="text-sm text-zinc-950/60 mb-1">all-day wear</p>
</div>
<div className="flex bg-neutral-50/60 w-12 h-12 rounded-full items-center justify-center">
<svg className="lucide lucide-clock h-6 w-6 text-black-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">

<div className="mb-8 slide-in-up stagger-4">
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                        Rare Beauty Soft Pinch Liquid Blush
                    </h1>
<p className="text-lg text-gray-600 mb-6">
                        Weightless, long-lasting liquid blush
                    </p>
<div className="flex items-center gap-6 mb-4">
<div className="flex items-center gap-2">
<div className="flex text-amber-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-medium text-gray-900">4.6</span>
</div>
<a className="text-sm text-blue-600 hover:underline" href="#reviews">8,247 reviews</a>
<span className="inline-flex items-center text-xs font-medium text-neutral-950 bg-rose-200 rounded-full pt-1 pr-3 pb-1 pl-3">
<svg className="lucide lucide-award h-3 w-3 mr-1" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                            Sephora Favorite
                        </span>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 mb-8 slide-in-up stagger-5">
<div className="flex items-baseline gap-4 mb-4">
<span className="text-3xl font-semibold text-gray-900" id="currentPrice">$23</span>
<span className="text-lg text-gray-500 line-through">$26</span>
<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Save $3</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
<div className="flex gap-3 text-blue-600 items-center">
<svg className="lucide lucide-truck h-4 w-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="">Free shipping on $35+</span>
</div>
<div className="flex gap-3 text-blue-600 items-center">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">60-day returns</span>
</div>
</div>
</div>

<div className="mb-8 slide-in-up stagger-6">
<h3 className="font-semibold text-gray-900 mb-4">Shade: Joy (warm peachy pink)</h3>
<div className="flex items-center gap-3">
<button className="color-option active w-12 h-12 rounded-full bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center hover-lift" data-color="joy">
<div className="w-8 h-8 rounded-full bg-pink-300 border border-gray-200"></div>
</button>
<button className="color-option w-12 h-12 rounded-full bg-white border-2 border-transparent hover:border-gray-300 shadow-sm flex items-center justify-center hover-lift transition-all duration-200" data-color="hope">
<div className="w-8 h-8 rounded-full bg-rose-400"></div>
</button>
<button className="color-option w-12 h-12 rounded-full bg-white border-2 border-transparent hover:border-gray-300 shadow-sm flex items-center justify-center hover-lift transition-all duration-200" data-color="bliss">
<div className="w-8 h-8 rounded-full bg-coral-400"></div>
</button>
<button className="color-option w-12 h-12 rounded-full bg-white border-2 border-transparent hover:border-gray-300 shadow-sm flex items-center justify-center hover-lift transition-all duration-200" data-color="happy">
<div className="w-8 h-8 rounded-full bg-red-300"></div>
</button>
</div>
<p className="text-sm text-gray-600 mt-2" id="selectedColor">Joy (warm peachy pink)</p>
</div>

<div className="mb-8 slide-in-up stagger-6">
<h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-droplet h-4 w-4 text-blue-600 mt-0.5 shrink-0" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<span className="">Weightless, buildable liquid formula</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-clock h-4 w-4 text-blue-600 mt-0.5 shrink-0" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">Long-wearing, up to 12 hours</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-palette h-4 w-4 text-blue-600 mt-0.5 shrink-0" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="">True-color payoff with seamless blending</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-leaf h-4 w-4 text-blue-600 mt-0.5 shrink-0" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="">Vegan and cruelty-free formula</span>
</li>
</ul>
</div>

<div className="border-t border-gray-200 pt-8 mb-8 slide-in-up stagger-7">
<div className="flex items-center gap-4 mb-6">
<label className="text-sm font-medium text-gray-900">Quantity:</label>
<div className="flex items-center border border-gray-300 rounded-xl">
<button className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl" id="qtyMinus">
<svg className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="w-16 text-center border-x border-gray-300 py-3 outline-none" id="qtyInput" min="1" type="number" value="1"/>
<button className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl" id="qtyPlus">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<span className="text-sm text-green-600 font-medium" id="stockIndicator">In stock</span>
</div>
<div className="w-full mb-6 space-y-3">
<button className="flex gap-3 font-semibold text-white bg-rose-500 w-full rounded-xl pt-4 pr-6 pb-4 pl-6 items-center justify-center" id="addToCart"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Add to Basket</button>
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg" id="buyNow">
                            Buy with ShopPay
                        </button>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 hover-lift" id="addToWishlist">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm">Save to Loves</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 hover-lift" id="shareProduct">
<svg className="lucide lucide-share h-4 w-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="text-sm">Share</span>
</button>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 mb-6 slide-in-up stagger-7">
<div className="flex items-start justify-between">
<div className="">
<h4 className="font-semibold text-gray-900 mb-2">Rare Beauty by Selena Gomez</h4>
<div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
<div className="flex text-amber-400">
<svg className="lucide lucide-star h-3 w-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="">4.7 (850k ratings)</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="lucide lucide-shield-check h-3 w-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                    Clean at Sephora
                                </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-leaf h-3 w-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                                    Vegan &amp; Cruelty-Free
                                </span>
</div>
</div>
<a className="text-sm text-blue-600 hover:underline" href="#">Shop Brand</a>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 slide-in-up stagger-7">
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-map-pin h-4 w-4 text-blue-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Delivery &amp; Pickup
                    </h4>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-3">
<svg className="lucide lucide-truck h-4 w-4 text-green-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<div>
<p className="font-medium text-gray-900">Standard Delivery</p>
<p className="text-gray-600 text-xs">Free on orders $35+</p>
</div>
</div>
<span className="font-medium text-gray-900">3-5 days</span>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-3">
<svg className="lucide lucide-store h-4 w-4 text-blue-600" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<div>
<p className="font-medium text-gray-900">Same-day pickup</p>
<p className="text-gray-600 text-xs">Sephora Union Square</p>
</div>
</div>
<span className="font-medium text-gray-900">Today</span>
</div>
<div className="pt-3 border-t border-gray-200">
<button className="text-blue-600 hover:underline text-sm font-medium" id="checkDelivery">
                                Check more locations
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 slide-in-up stagger-8">
<div className="border-gray-200 border-t">

<nav className="flex border-b border-gray-200 bg-gray-50/50 rounded-t-2xl">
<button className="tab-button flex-1 px-6 py-4 text-sm font-medium border-b-2 rounded-tl-2xl transition-all duration-200 hover:text-blue-700 active text-blue-600 border-blue-600 bg-white" data-tab="overview">
<svg className="lucide lucide-info h-4 w-4 mr-2 inline" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        Details
                    </button>
<button className="tab-button flex-1 px-6 py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-all duration-200" data-tab="specifications">
<svg className="lucide lucide-list h-4 w-4 mr-2 inline" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
                        Ingredients
                    </button>
<button className="tab-button flex-1 px-6 py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-all duration-200" data-tab="reviews">
<svg className="lucide lucide-star h-4 w-4 mr-2 inline" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        Reviews
                    </button>
<button className="tab-button flex-1 px-6 py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-all duration-200 rounded-tr-2xl" data-tab="compatibility">
<svg className="lucide lucide-brush h-4 w-4 mr-2 inline" data-lucide="brush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
                        How to Use
                    </button>
</nav>

<div className="bg-white rounded-b-2xl">

<div className="tab-content p-8" id="overview-tab">
<div className="grid lg:grid-cols-2 gap-8">
<div className="">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Product Details</h3>
<div className="prose prose-gray max-w-none">
<p className="text-gray-700 mb-4">
                                        Get a soft pinch of long-lasting color with this weightless, buildable liquid blush. The true-to-color formula blends effortlessly to create the most natural-looking flush with just a few drops.
                                    </p>
<p className="text-gray-700 mb-4">
                                        The doe-foot applicator allows for precise application, while the lightweight formula means you can build coverage from a subtle wash of color to a more dramatic look. Perfect for all skin types and tones.
                                    </p>
<p className="text-gray-700">
                                        This vegan and cruelty-free formula is part of Rare Beauty's commitment to clean, inclusive beauty. One percent of all sales support the Rare Impact Fund for mental health resources.
                                    </p>
</div>
</div>
<div className="">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700">
<svg className="lucide lucide-check h-4 w-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                        Weightless, buildable liquid formula
                                    </li>
<li className="flex items-center gap-3 text-gray-700">
<svg className="lucide lucide-check h-4 w-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                        True-to-color payoff with seamless blending
                                    </li>
<li className="flex items-center gap-3 text-gray-700">
<svg className="lucide lucide-check h-4 w-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                        Long-wearing up to 12 hours
                                    </li>
<li className="flex items-center gap-3 text-gray-700">
<svg className="lucide lucide-check h-4 w-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                        Suitable for all skin types
                                    </li>
<li className="flex items-center gap-3 text-gray-700">
<svg className="lucide lucide-check h-4 w-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                        Vegan and cruelty-free
                                    </li>
</ul>
</div>
</div>
</div>

<div className="tab-content p-8 hidden" id="specifications-tab">
<div className="max-w-3xl">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Full Ingredients List</h3>
<p className="text-gray-700 mb-6">Water/Aqua/Eau, Dimethicone, Isododecane, Alcohol Denat., Butylene Glycol, Peg-10 Dimethicone, Disteardimonium Hectorite, Sodium Chloride, Dimethicone/Vinyl Dimethicone Crosspolymer, Phenoxyethanol, Propylene Carbonate, Dimethiconol, Ethylhexylglycerin, Disodium Edta, Sodium Dehydroacetate.</p>
<h4 className="font-semibold text-gray-900 mb-4">Key Ingredients</h4>
<div className="space-y-4">
<div className="p-4 border border-gray-200 rounded-lg">
<h5 className="font-medium text-gray-900 mb-2">Dimethicone</h5>
<p className="text-sm text-gray-600">Creates a smooth, silky texture and helps with blendability</p>
</div>
<div className="p-4 border border-gray-200 rounded-lg">
<h5 className="font-medium text-gray-900 mb-2">Butylene Glycol</h5>
<p className="text-sm text-gray-600">Helps maintain skin hydration and improves formula stability</p>
</div>
<div className="p-4 border border-gray-200 rounded-lg">
<h5 className="font-medium text-gray-900 mb-2">Water/Aqua/Eau</h5>
<p className="text-sm text-gray-600">Base ingredient for the lightweight liquid formula</p>
</div>
</div>
</div>
</div>

<div className="tab-content p-8 hidden" id="reviews-tab">
<div className="grid lg:grid-cols-3 gap-8 mb-8">
<div className="text-center">
<div className="text-4xl font-bold text-gray-900 mb-2">4.6</div>
<div className="flex items-center justify-center gap-1 mb-2">
<svg className="lucide lucide-star h-5 w-5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-gray-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-600">Based on 8,247 reviews</p>
</div>
<div className="col-span-2">
<div className="space-y-2">
<div className="flex items-center gap-3">
<span className="text-sm w-8">5★</span>
<div className="flex-1 bg-gray-200 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full w-3/4"></div>
</div>
<span className="text-sm text-gray-600 w-12">6,185</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm w-8">4★</span>
<div className="flex-1 bg-gray-200 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full w-1/4"></div>
</div>
<span className="text-sm text-gray-600 w-12">1,237</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm w-8">3★</span>
<div className="flex-1 bg-gray-200 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full w-1/12"></div>
</div>
<span className="text-sm text-gray-600 w-12">412</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm w-8">2★</span>
<div className="flex-1 bg-gray-200 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full w-1/24"></div>
</div>
<span className="text-sm text-gray-600 w-12">206</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm w-8">1★</span>
<div className="flex-1 bg-gray-200 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full w-1/24"></div>
</div>
<span className="text-sm text-gray-600 w-12">207</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="border-b border-gray-200 pb-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<span className="text-sm font-medium text-purple-700">SJ</span>
</div>
<div>
<p className="font-medium text-gray-900">Sarah J.</p>
<div className="flex items-center gap-2">
<div className="flex text-amber-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-gray-500">• 3 days ago</span>
</div>
</div>
</div>
<p className="text-gray-700">This liquid blush is absolutely amazing! The color Joy is perfect for my medium skin tone - it gives such a natural, healthy flush. The formula blends so smoothly and lasts all day without fading. Definitely repurchasing!</p>
<div className="flex items-center gap-4 mt-4">
<button className="text-sm text-gray-600 hover:text-gray-900">Helpful (12)</button>
<button className="text-sm text-gray-600 hover:text-gray-900">Report</button>
</div>
</div>
</div>
</div>

<div className="tab-content p-8 hidden" id="compatibility-tab">
<div className="max-w-3xl">
<h3 className="text-xl font-semibold text-gray-900 mb-6">How to Apply</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</div>
<div>
<h4 className="font-medium text-gray-900 mb-2">Prep Your Skin</h4>
<p className="text-gray-700">Start with clean, moisturized skin. Apply foundation and concealer first if using.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</div>
<div>
<h4 className="font-medium text-gray-900 mb-2">Apply to Apples of Cheeks</h4>
<p className="text-gray-700">Dot 1-2 drops directly onto the apples of your cheeks using the doe-foot applicator.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</div>
<div>
<h4 className="font-medium text-gray-900 mb-2">Blend Seamlessly</h4>
<p className="text-gray-700">Use clean fingers, a damp beauty sponge, or stippling brush to blend outward for a natural finish.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">4</div>
<div>
<h4 className="font-medium text-gray-900 mb-2">Build &amp; Set</h4>
<p className="text-gray-700">Build coverage gradually with additional drops. Set with translucent powder if desired for longer wear.</p>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-rose-50 rounded-2xl">
<h4 className="font-semibold text-gray-900 mb-3">Pro Tips</h4>
<ul className="space-y-2 text-gray-700">
<li className="flex items-start gap-2">
<svg className="lucide lucide-lightbulb h-4 w-4 text-rose-600 mt-0.5 shrink-0" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                        Less is more - start with one drop and build coverage as needed
                                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-lightbulb h-4 w-4 text-rose-600 mt-0.5 shrink-0" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                        Tap excess product off the applicator before applying
                                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-lightbulb h-4 w-4 text-rose-600 mt-0.5 shrink-0" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                        For draping, extend the blush upwards toward your temples
                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
