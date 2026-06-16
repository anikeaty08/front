import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Image Data
        const images = [
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2840a711-0800-40fa-8e55-ae8b0be6f7d2_1600w.png', // Main High Res
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a05c9a48-d79f-453c-bdba-7b281f9eb546_320w.png'.replace('320w', '1600w'), // Thumb 1 -> Attempt High Res
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67d1735c-23d5-40e1-80fd-9626d6fd289b_320w.png'.replace('320w', '1600w'), // Thumb 2 -> Attempt High Res
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/023afb1a-7469-4f0e-8096-59c63cd197c8_320w.png'.replace('320w', '1600w')  // Thumb 3 -> Attempt High Res
        ];
        
        // Fallback for attempted high-res URLs if they fail (just use low res for demo if needed, but modern browsers handle replace fine)
        // For this demo, we assume the high-res versions exist or the browser will just show the thumb version if we didn't replace.
        // I will use the actual thumb URLs in the array below to ensure no broken images in this specific preview if high-res naming differs.
        const safeImages = [
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2840a711-0800-40fa-8e55-ae8b0be6f7d2_1600w.png',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a05c9a48-d79f-453c-bdba-7b281f9eb546_320w.png',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67d1735c-23d5-40e1-80fd-9626d6fd289b_320w.png',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/023afb1a-7469-4f0e-8096-59c63cd197c8_320w.png'
        ];

        let currentIndex = 0;
        let intervalId;
        const mainImage = document.getElementById('main-product-image');
        const thumbs = document.querySelectorAll('.thumb-btn');
        const progressBar = document.getElementById('slide-progress');
        const duration = 5000;

        function updateCarousel(index) {
            // Update Image with opacity fade
            mainImage.style.opacity = '0.5';
            setTimeout(() => {
                mainImage.src = safeImages[index];
                mainImage.onload = () => {
                    mainImage.style.opacity = '1';
                }
            }, 150);

            // Update Thumbs
            thumbs.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.remove('border-zinc-200', 'opacity-70');
                    thumb.classList.add('border-pink-500', 'ring-1', 'ring-pink-200', 'opacity-100');
                } else {
                    thumb.classList.add('border-zinc-200', 'opacity-70');
                    thumb.classList.remove('border-pink-500', 'ring-1', 'ring-pink-200', 'opacity-100');
                }
            });

            currentIndex = index;
            resetProgress();
        }

        function resetProgress() {
            // Reset and restart CSS animation for progress bar
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.transition = `width ${duration}ms linear`;
                progressBar.style.width = '100%';
            }, 50);
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % safeImages.length;
            updateCarousel(nextIndex);
        }

        function selectImage(index) {
            clearInterval(intervalId); // Stop auto-rotation on interaction
            updateCarousel(index);
            startAutoSlide(); // Restart auto-rotation
        }

        function startAutoSlide() {
            resetProgress();
            intervalId = setInterval(nextSlide, duration);
        }

        // Initialize
        startAutoSlide();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100/50 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl tracking-tighter font-bold text-zinc-900 flex items-center gap-2" href="#">
                    pinkpaws
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Dogs</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Cats</a>
<a className="text-pink-600" href="#">Treats</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Sale</a>
</div>
</div>
<div className="flex items-center gap-5">
<button className="text-zinc-400 hover:text-zinc-900 transition-transform hover:scale-110 duration-200">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-900 transition-transform hover:scale-110 duration-200 relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 border-2 border-white rounded-full"></span>
</button>
</div>
</div>
</nav>

<main className="pt-28 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">

<div className="flex items-center gap-2 text-xs text-zinc-400 mb-8 font-medium overflow-x-auto no-scrollbar whitespace-nowrap">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors" href="#">Dog Treats</a>
<iconify-icon className="" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-pink-500">Brownies Honey Chicken Stick</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-7 w-full sticky top-24 space-y-4">

<div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="Brownies Honey Chicken Stick" className="transition-all duration-700 ease-in-out group-hover:scale-105 w-full h-full object-cover" id="main-product-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2840a711-0800-40fa-8e55-ae8b0be6f7d2_1600w.png"/>

<div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
<span className="px-3 py-1 bg-white/90 backdrop-blur text-pink-600 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-pink-100">
                                Best Seller
                            </span>
<span className="px-3 py-1 bg-zinc-900/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                                Grain Free
                            </span>
</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:scale-110 transition-all shadow-sm z-20 border border-zinc-100">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 h-1 bg-pink-500/20 w-full z-20">
<div className="h-full bg-pink-500 w-0 transition-all duration-[5000ms] ease-linear" id="slide-progress" style={{transition: 'none', width: '0%'}}></div>
</div>
</div>

<div className="grid grid-cols-5 gap-3 gap-x-3 gap-y-3" id="thumbnail-container">

<button className="thumb-btn aspect-[4/5] rounded-xl border-2 border-pink-500 overflow-hidden relative transition-all duration-300" onclick="selectImage(0)">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2840a711-0800-40fa-8e55-ae8b0be6f7d2_1600w.png"/>
</button>
<button className="thumb-btn aspect-[4/5] rounded-xl border border-zinc-200 overflow-hidden relative hover:border-zinc-400 transition-all duration-300 opacity-70 hover:opacity-100" onclick="selectImage(1)">
<img className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0844abe4-c263-4287-bff1-a38ec539cc96_1600w.png?w=800&amp;q=80"/>
</button>
<button className="thumb-btn aspect-[4/5] rounded-xl border border-zinc-200 overflow-hidden relative hover:border-zinc-400 transition-all duration-300 opacity-70 hover:opacity-100" onclick="selectImage(2)">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67d1735c-23d5-40e1-80fd-9626d6fd289b_320w.png"/>
</button>
<button className="thumb-btn aspect-[4/5] rounded-xl border border-zinc-200 overflow-hidden relative hover:border-zinc-400 transition-all duration-300 opacity-70 hover:opacity-100" onclick="selectImage(3)">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/023afb1a-7469-4f0e-8096-59c63cd197c8_320w.png"/>
</button>

</div>
</div>

<div className="lg:col-span-5 space-y-8 pt-2">

<div className="space-y-3 border-b border-zinc-100 pb-6">
<a className="text-xs font-bold text-pink-500 uppercase tracking-widest hover:underline decoration-pink-300 underline-offset-4" href="#">Pink Paws Signature</a>
<h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight leading-[1.15]">
                            Brownies Honey Chicken Stick
                        </h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-0.5 text-amber-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-200" icon="solar:star-bold-duotone" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 font-medium">4.2 (128 Reviews)</span>
</div>
</div>

<div className="flex items-baseline gap-3">
<span className="text-3xl font-bold text-zinc-900 tracking-tight">₹299</span>
<span className="text-lg text-zinc-400 line-through decoration-zinc-300">₹399</span>
<span className="px-2 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold border border-green-100">25% OFF</span>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-sm font-semibold text-zinc-900">Select Weight</label>
<span className="text-xs text-zinc-400">100g = approx 12 sticks</span>
</div>
<div className="flex flex-wrap gap-3">
<button className="group relative px-6 py-3 rounded-xl border bg-pink-50 border-pink-500 shadow-sm transition-all text-pink-700">
<span className="text-sm font-medium">100 g</span>
<div className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">Selected</div>
</button>
<button className="px-6 py-3 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 shadow-sm transition-all hover:shadow-md">
<span className="text-sm font-medium">200 g</span>
</button>
<button className="px-6 py-3 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 shadow-sm transition-all hover:shadow-md">
<span className="text-sm font-medium">500 g</span>
</button>
</div>
</div>

<div className="flex gap-3 pt-2">

<div className="h-14 flex items-center bg-white border border-zinc-200 rounded-2xl px-1 shadow-sm w-32 justify-between">
<button className="w-10 h-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:minus-linear" width="18"></iconify-icon>
</button>
<input className="w-8 text-center bg-transparent font-medium text-zinc-900 focus:outline-none" type="number" value="1"/>
<button className="w-10 h-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>

<button className="flex-1 h-14 bg-zinc-900 text-white rounded-2xl font-medium text-base hover:bg-zinc-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2 group">
<span>Add to Cart</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>

<button className="h-14 w-14 border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:border-pink-200 hover:bg-pink-50 transition-all shadow-sm bg-white">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-4 rounded-2xl bg-white border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-3">
<div className="flex items-start gap-3">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
<iconify-icon icon="solar:tag-price-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Bulk Savings</p>
<p className="text-xs text-zinc-500 mt-0.5">Buy 2 get 10% off. Use code: <span className="font-mono bg-zinc-100 px-1 rounded text-zinc-700">TREAT10</span></p>
</div>
</div>
</div>

<div className="pt-4">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2 block">Check Delivery</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-24 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-pink-500 transition-colors shadow-sm" placeholder="Enter Pincode" type="text"/>
<button className="absolute right-1 top-1 h-10 px-4 text-xs font-semibold text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                                CHECK
                            </button>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="">Order in next 2 hrs for delivery by tomorrow</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-600">Original Products</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-600">Secure Payments</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-600">Easy Returns</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-600">Brand Warranty</span>
</div>
</div>

<div className="space-y-4">
<div className="group">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Description</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Our Brownies Honey Chicken Sticks are crafted with real chicken and infused with natural honey for a taste your dog will crave. Grain-free and high in protein, these treats support healthy muscle growth while being gentle on the stomach. Perfect for training or just showing some love.
                            </p>
</div>
<div className="pt-4">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Key Ingredients</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs border border-zinc-200">Fresh Chicken</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs border border-zinc-200">Natural Honey</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs border border-zinc-200">Vegetable Glycerin</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs border border-zinc-200">Vitamins</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-zinc-100 border-t pt-12 pb-12">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 mb-4 opacity-50 grayscale">
<span className="font-bold text-lg">pinkpaws</span>
</div>
<p className="text-sm text-zinc-400">© 2023 Pink Paws. Designed for modern pets.</p>
</div>
</footer>


    </>
  );
}
