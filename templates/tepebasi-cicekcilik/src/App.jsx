import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Slider Logic ---
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active', 'z-20');
                slide.classList.add('opacity-0', 'z-10');
            });
            indicators.forEach(ind => {
                ind.classList.remove('w-8', 'bg-white');
                ind.classList.add('bg-white/40');
            });

            slides[index].classList.remove('opacity-0', 'z-10');
            slides[index].classList.add('active', 'z-20');
            
            indicators[index].classList.remove('bg-white/40');
            indicators[index].classList.add('w-8', 'bg-white');
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlideFn() {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        // Auto play
        function startSlideTimer() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetSlideTimer() {
            clearInterval(slideInterval);
            startSlideTimer();
        }

        nextBtn.addEventListener('click', () => { nextSlide(); resetSlideTimer(); });
        prevBtn.addEventListener('click', () => { prevSlideFn(); resetSlideTimer(); });
        
        indicators.forEach((ind, idx) => {
            ind.addEventListener('click', () => {
                showSlide(idx);
                resetSlideTimer();
            });
        });

        startSlideTimer();


        // --- Cart Logic ---
        const cartBtn = document.getElementById('cart-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        const cartBadge = document.getElementById('cart-badge');
        const cartContent = document.getElementById('cart-content');
        const emptyCartMsg = document.getElementById('empty-cart-msg');
        const cartTotalDisplay = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        let cart = [];

        function toggleCart() {
            const isOpen = cartSidebar.classList.contains('translate-x-0');
            if (isOpen) {
                cartSidebar.classList.remove('translate-x-0');
                cartSidebar.classList.add('translate-x-full');
                overlay.classList.add('hidden');
                setTimeout(() => overlay.classList.remove('opacity-100'), 0);
                document.body.style.overflow = '';
            } else {
                cartSidebar.classList.remove('translate-x-full');
                cartSidebar.classList.add('translate-x-0');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.add('opacity-100'), 10);
                document.body.style.overflow = 'hidden';
            }
        }

        function updateCartUI() {
            cartBadge.innerText = cart.length;
            
            if (cart.length > 0) {
                cartBadge.classList.remove('opacity-0', 'scale-0');
                emptyCartMsg.classList.add('hidden');
                cartContent.classList.remove('hidden');
                checkoutBtn.disabled = false;
                
                // Calculate Total
                let total = cart.reduce((sum, item) => sum + item.price, 0);
                cartTotalDisplay.innerText = `₺${total.toFixed(2)}`;
                
                // Render Items (Simplified for demo)
                cartContent.innerHTML = cart.map(item => `
                    <div class="flex gap-4 items-center">
                        <div class="h-16 w-16 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src="${item.img}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="text-sm font-medium text-stone-900">${item.name}</h4>
                            <p class="text-sm text-stone-500">₺${item.price}</p>
                        </div>
                        <button class="text-stone-400 hover:text-rose-500"><iconify-icon icon="lucide:trash-2" width="16"></iconify-icon></button>
                    </div>
                `).join('');

            } else {
                cartBadge.classList.add('opacity-0', 'scale-0');
                emptyCartMsg.classList.remove('hidden');
                cartContent.classList.add('hidden');
                checkoutBtn.disabled = true;
                cartTotalDisplay.innerText = '₺0.00';
            }
        }

        window.addToCart = function(btn) {
            // Find product info from DOM
            const card = btn.closest('.group') || btn.closest('.slide');
            const name = card.querySelector('h3, h1')?.innerText || "Özel Ürün";
            // Extract price nicely
            const priceText = card.querySelector('.text-3xl, .text-sm.font-semibold')?.innerText || "0";
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            const img = card.querySelector('img').src;

            cart.push({ name, price, img });
            updateCartUI();
            
            // Visual feedback
            const icon = btn.querySelector('iconify-icon');
            if(icon) {
                const originalIcon = icon.getAttribute('icon');
                // Don't change text buttons in slider too much, just maybe a quick pulse
                if(btn.tagName === 'BUTTON' && btn.classList.contains('bg-white')) {
                    // Slider button style
                     btn.innerText = "Eklendi!";
                     setTimeout(() => { 
                         btn.innerHTML = `Sepete Ekle <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>`; 
                     }, 1500);
                } else {
                    // Small + button style
                    btn.innerHTML = '<iconify-icon icon="lucide:check" width="20"></iconify-icon>';
                    btn.classList.add('bg-stone-900', 'text-white');
                    setTimeout(() => {
                        btn.innerHTML = `<iconify-icon icon="${originalIcon}" width="20"></iconify-icon>`;
                        btn.classList.remove('bg-stone-900', 'text-white');
                    }, 1500);
                }
            }
            
            toggleCart(); // Open cart to show item
        };

        // Event Listeners
        cartBtn.addEventListener('click', toggleCart);
        closeCartBtn.addEventListener('click', toggleCart);
        overlay.addEventListener('click', () => {
            if (cartSidebar.classList.contains('translate-x-0')) toggleCart();
            document.getElementById('mobile-menu').classList.add('-translate-x-full');
        });
        
        // Mobile Menu
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('-translate-x-full')) {
                menu.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.add('opacity-100'), 10);
            } else {
                menu.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
                overlay.classList.remove('opacity-100');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-stone-500 hover:text-stone-900" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter text-stone-900 flex items-center gap-2" href="#">
                FLORA.
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-500 absolute left-1/2 transform -translate-x-1/2">
<a className="hover:text-stone-900 transition-colors" href="#">Ana Sayfa</a>
<a className="hover:text-stone-900 transition-colors" href="#">Hakkımızda</a>
<a className="hover:text-stone-900 transition-colors" href="#">Ürünler</a>
</div>

<div className="flex items-center gap-3 sm:gap-6">

<div className="hidden sm:flex items-center gap-3 border-r border-stone-200 pr-4 mr-1">
<button className="text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors">Giriş Yap</button>
<button className="bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200">Kayıt Ol</button>
</div>

<div className="flex items-center gap-3">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-stone-500 hover:text-stone-900 transition-colors group" id="cart-btn">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-semibold h-4 w-4 rounded-full flex items-center justify-center opacity-0 scale-0 transition-all duration-300 group-hover:bg-rose-600" id="cart-badge">0</span>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white transform -translate-x-full transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6" id="mobile-menu">
<a className="py-4 text-lg font-medium text-stone-900 border-b border-stone-100" href="#">Ana Sayfa</a>
<a className="py-4 text-lg font-medium text-stone-900 border-b border-stone-100" href="#">Hakkımızda</a>
<a className="py-4 text-lg font-medium text-stone-900 border-b border-stone-100" href="#">Ürünler</a>
<div className="mt-8 flex flex-col gap-4">
<button className="w-full py-3 text-sm font-medium text-stone-900 border border-stone-200 rounded-full">Giriş Yap</button>
<button className="w-full py-3 text-sm font-medium text-white bg-stone-900 rounded-full">Kayıt Ol</button>
</div>
</div>

<div className="relative pt-20 h-[650px] sm:h-[750px] w-full overflow-hidden bg-stone-50">

<div className="relative w-full h-full" id="slider-container">

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out opacity-100 z-20 active" data-index="0">
<div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/40 to-transparent sm:from-stone-900/30"></div>
<img alt="Discount Flowers" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
<div className="max-w-xl slider-caption">
<span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-rose-600 bg-rose-50 border border-rose-100 rounded-full uppercase">
                            Haftanın İndirimi %20
                        </span>
<h1 className="text-5xl sm:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 shadow-black/5 drop-shadow-lg">
                            Baharın renkleri <br/>
<span className="text-rose-200">evinize dolsun.</span>
</h1>
<p className="text-lg text-stone-100 mb-8 max-w-md">Eskişehir Tepebaşı şubemize özel, mevsimin en taze lale buketlerinde büyük indirim.</p>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-3xl font-bold text-white tracking-tight">₺640</span>
<span className="text-sm text-stone-300 line-through">₺800.00</span>
</div>
<button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all flex items-center gap-2 group" onclick="addToCart(this)">
                                Sepete Ekle
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out opacity-0 z-10" data-index="1">
<div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-800/50 to-transparent"></div>
<img alt="New Arrival" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1599691883658-29e88d0c8651?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
<div className="max-w-xl slider-caption">
<span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-900/40 backdrop-blur border border-emerald-500/30 rounded-full uppercase">
                            Yeni Koleksiyon
                        </span>
<h1 className="text-5xl sm:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                            İthal Şakayık <br/>
<span className="text-emerald-200">Aranjmanları.</span>
</h1>
<p className="text-lg text-stone-100 mb-8 max-w-md">Hollanda'dan taze gelen şakayıklar ve okaliptüs dallarının eşsiz uyumu.</p>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-3xl font-bold text-white tracking-tight">₺1.200</span>
</div>
<button className="bg-emerald-50 text-emerald-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all flex items-center gap-2 group" onclick="addToCart(this)">
                                Şimdi Keşfet
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out opacity-0 z-10" data-index="2">
<div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
<img alt="Popular" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
<div className="max-w-xl slider-caption">
<span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-amber-300 bg-amber-900/40 backdrop-blur border border-amber-500/30 rounded-full uppercase">
                            Tepebaşı'nın Favorisi
                        </span>
<h1 className="text-5xl sm:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                            Premium Kırmızı <br/>
<span className="text-amber-200">Güller.</span>
</h1>
<p className="text-lg text-stone-100 mb-8 max-w-md">Eskişehir'de aşkı anlatmanın en zarif yolu. Özel tasarım kutusunda 24 adet gül.</p>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-3xl font-bold text-white tracking-tight">₺950</span>
</div>
<button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all flex items-center gap-2 group" onclick="addToCart(this)">
                                Sepete Ekle
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-6 sm:right-10 z-30 flex gap-4">
<button className="h-12 w-12 rounded-full border border-white/30 text-white backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all" id="prev-slide">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="h-12 w-12 rounded-full border border-white/30 text-white backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all" id="next-slide">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>

<div className="absolute bottom-12 left-6 sm:left-1/2 sm:-translate-x-1/2 z-30 flex gap-2">
<button className="indicator w-2 h-2 rounded-full bg-white transition-all w-8" data-index="0"></button>
<button className="indicator w-2 h-2 rounded-full bg-white/40 hover:bg-white transition-all" data-index="1"></button>
<button className="indicator w-2 h-2 rounded-full bg-white/40 hover:bg-white transition-all" data-index="2"></button>
</div>
</div>

<div className="sticky top-20 z-30 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-white">Tümü</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-stone-200 text-stone-600 hover:border-stone-300">İndirimdekiler</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-stone-200 text-stone-600 hover:border-stone-300">Doğum Günü</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-stone-200 text-stone-600 hover:border-stone-300">Yıldönümü</button>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 py-16 flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">Tüm Ürünler</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">

<div className="group relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-stone-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur text-stone-900 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-lg z-10" onclick="addToCart(this)" title="Sepete Ekle">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-stone-900">Popüler</span>
</div>
<h3 className="font-medium text-stone-900 tracking-tight">Romantik Güller</h3>
<p className="text-sm text-stone-500 mb-2">24'lü Kırmızı Gül Buketi</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-stone-900">₺850.00</span>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-stone-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1563241527-94f13e411378?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur text-stone-900 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-lg z-10" onclick="addToCart(this)">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
<span className="absolute top-4 left-4 bg-rose-500 text-white px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">-%20</span>
</div>
<h3 className="font-medium text-stone-900 tracking-tight">Bahar Buketi</h3>
<p className="text-sm text-stone-500 mb-2">Karışık Kır Çiçekleri</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-stone-900">₺360.00</span>
<span className="text-xs text-stone-400 line-through">₺450.00</span>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-stone-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595231776515-dd48c94d2d14?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur text-stone-900 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-lg z-10" onclick="addToCart(this)">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<h3 className="font-medium text-stone-900 tracking-tight">Vazolu Orkide</h3>
<p className="text-sm text-stone-500 mb-2">Çift Dallı Beyaz Orkide</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-stone-900">₺1,100.00</span>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-stone-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1596708304033-6bc35688536e?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur text-stone-900 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-lg z-10" onclick="addToCart(this)">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<h3 className="font-medium text-stone-900 tracking-tight">Kurutulmuş Aranjman</h3>
<p className="text-sm text-stone-500 mb-2">Dekoratif Pampas Otları</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-stone-900">₺550.00</span>
</div>
</div>
</div>
</main>

<footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
<div className="col-span-1 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-stone-900 flex items-center gap-2 mb-6" href="#">
                        FLORA.
                    </a>
<p className="text-sm text-stone-500 max-w-xs mb-6 leading-relaxed">
                        Eskişehir Tepebaşı'ndan, en taze çiçekleri sanatla buluşturup kapınıza getiriyoruz. Doğanın zarafeti evinizde.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Menü</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Ana Sayfa</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Ürünler</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Destek</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Sipariş Takibi</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Teslimat Bilgisi</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">İletişim</h4>
<address className="text-sm text-stone-500 not-italic leading-relaxed">
                        Tepebaşı, Eskişehir<br/>
                        İsmet İnönü-1 Cd. No:45<br/>
                        Türkiye<br/><br/>
<a className="text-stone-900 hover:text-rose-600 transition-colors" href="tel:+902220000000">+90 (222) 000 00 00</a>
</address>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
<p className="text-xs text-stone-400">© 2024 Flora Çiçekçilik Eskişehir.</p>
</div>
</div>
</footer>

<div className="fixed inset-y-0 right-0 z-[60] w-full sm:w-[400px] bg-white shadow-2xl transform translate-x-full transition-transform duration-500 flex flex-col" id="cart-sidebar">
<div className="p-6 border-b border-stone-100 flex items-center justify-between">
<h2 className="text-lg font-medium text-stone-900">Sepetiniz</h2>
<button className="text-stone-400 hover:text-stone-900 transition-colors" id="close-cart">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6" id="cart-items-container">

<div className="h-full flex flex-col items-center justify-center text-center" id="empty-cart-msg">
<div className="h-16 w-16 bg-stone-50 rounded-full flex items-center justify-center mb-4 text-stone-300">
<iconify-icon icon="lucide:shopping-bag" width="32"></iconify-icon>
</div>
<p className="text-stone-500 mb-4">Sepetinizde henüz ürün yok.</p>
<button className="text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-rose-600 hover:border-rose-600 transition-colors" onclick="document.getElementById('cart-sidebar').classList.add('translate-x-full'); document.getElementById('overlay').classList.add('hidden');">Alışverişe Dön</button>
</div>

<div className="hidden space-y-6" id="cart-content">

</div>
</div>
<div className="p-6 border-t border-stone-100 bg-stone-50">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-stone-500">Ara Toplam</span>
<span className="text-lg font-semibold text-stone-900" id="cart-total">₺0.00</span>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="checkout-btn">
                Sepete Git &amp; Öde
            </button>
</div>
</div>

<div className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300" id="overlay"></div>


    </>
  );
}
