import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
50: '#fffbf0',
100: '#fff4c6',
200: '#ffe688',
300: '#ffd24a',
400: '#ffba18',
500: '#f99b07',
600: '#dd7602',
700: '#b75006',
800: '#943d0c',
900: '#7a330d',
950: '#461902',
},
dark: {
900: '#0a0a0a',
800: '#121212',
700: '#1c1c1c'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Data State
        let cart = [];
        
        // Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('opacity-0');
                setTimeout(() => loader.style.display = 'none', 500);
            }, 1000);
        });

        // Intersection Observer for Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-section').forEach((section) => {
            observer.observe(section);
        });

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-x-full');
        }

        // Cart Functions
        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            sidebar.classList.toggle('translate-x-full');
        }

        function addToCart(name, price) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCartUI();
            
            // Show feedback
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "ADDED";
            btn.classList.add('bg-gold-500', 'text-black', 'border-transparent');
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-gold-500', 'text-black', 'border-transparent');
            }, 1000);
            
            // Open cart
            const sidebar = document.getElementById('cart-sidebar');
            if (sidebar.classList.contains('translate-x-full')) {
                toggleCart();
            }
        }

        function removeFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            updateCartUI();
        }

        function updateQuantity(name, change) {
            const item = cart.find(item => item.name === name);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) removeFromCart(name);
                else updateCartUI();
            }
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const countEl = document.getElementById('cart-count');
            
            // Update Badge
            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            countEl.innerText = totalItems;
            countEl.style.opacity = totalItems > 0 ? 1 : 0;

            // Update List
            container.innerHTML = '';
            let total = 0;

            if (cart.length === 0) {
                container.innerHTML = '<div class="text-center text-zinc-500 mt-10 text-sm">Your cart is empty</div>';
            } else {
                cart.forEach(item => {
                    total += item.price * item.quantity;
                    container.innerHTML += `
                        <div class="flex justify-between items-center bg-dark-900 p-3 border border-white/5">
                            <div>
                                <h4 class="text-white text-sm font-serif">${item.name}</h4>
                                <p class="text-gold-400 text-xs">PKR ${item.price}</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <button onclick="updateQuantity('${item.name}', -1)" class="text-zinc-500 hover:text-white">-</button>
                                <span class="text-white text-sm w-4 text-center">${item.quantity}</span>
                                <button onclick="updateQuantity('${item.name}', 1)" class="text-zinc-500 hover:text-white">+</button>
                            </div>
                        </div>
                    `;
                });
            }
            
            totalEl.innerText = `PKR ${total}`;
        }

        // Filter Function
        function filterMenu(category) {
            // Update buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                if(btn.dataset.category === category) {
                    btn.classList.remove('text-zinc-400', 'border-white/10');
                    btn.classList.add('text-white', 'border-gold-500');
                } else {
                    btn.classList.add('text-zinc-400', 'border-white/10');
                    btn.classList.remove('text-white', 'border-gold-500');
                }
            });

            // Filter items
            const items = document.querySelectorAll('.menu-item');
            items.forEach(item => {
                if(category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    // slight fade in animation reset
                    item.style.opacity = '0';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Checkout Modal
        function openCheckout() {
            if(cart.length === 0) return alert("Your cart is empty");
            document.getElementById('checkout-modal').style.display = 'flex';
            toggleCart(); // Close sidebar
        }

        function closeCheckout() {
            document.getElementById('checkout-modal').style.display = 'none';
        }

        function processOrder(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="inline mr-2"></iconify-icon> ORDER PLACED';
            btn.classList.remove('bg-white', 'text-black');
            btn.classList.add('bg-green-600', 'text-white');
            
            setTimeout(() => {
                alert("Thank you for your order! We will contact you shortly.");
                cart = [];
                updateCartUI();
                closeCheckout();
                btn.innerHTML = 'PLACE ORDER';
                btn.classList.add('bg-white', 'text-black');
                btn.classList.remove('bg-green-600', 'text-white');
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center transition-opacity duration-500" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center">
<h1 className="font-serif text-3xl tracking-tight text-gold-400 mb-4">Ismaeel's Kitchen</h1>
<div className="loader ease-linear rounded-full border-2 border-t-2 border-zinc-800 h-8 w-8"></div>
</div>
</div>

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter text-white hover:text-gold-400 transition-colors" href="#">
                    ISMAEEL'S
                </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#about">Story</a>
<a className="hover:text-white transition-colors text-sm font-light text-zinc-400" href="#menu">Menu</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-6">
<button className="relative group" onclick="toggleCart()">
<iconify-icon className="text-white group-hover:text-gold-400 transition-colors" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="absolute -top-2 -right-2 w-4 h-4 bg-gold-500 text-black text-[10px] flex items-center justify-center rounded-full font-bold opacity-0 transition-opacity" id="cart-count">0</span>
</button>
<button className="hidden md:block hover:bg-gold-400 transition-colors duration-300 text-sm font-medium text-black tracking-wide bg-white pt-2 pr-6 pb-2 pl-6" onclick="document.getElementById('menu').scrollIntoView()">
                        RESERVE
                    </button>

<button className="md:hidden text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden fixed inset-0 bg-dark-900 z-40 transform translate-x-full transition-transform duration-300 pt-24 px-6" id="mobile-menu">
<div className="flex flex-col gap-6 items-center">
<a className="text-xl font-serif text-white" href="#about" onclick="toggleMobileMenu()">Story</a>
<a className="text-xl font-serif text-white" href="#menu" onclick="toggleMobileMenu()">Menu</a>
<a className="text-xl font-serif text-white" href="#gallery" onclick="toggleMobileMenu()">Gallery</a>
<a className="text-xl font-serif text-white" href="#contact" onclick="toggleMobileMenu()">Contact</a>
</div>
</div>
</nav>

<div className="fixed inset-y-0 right-0 w-full md:w-96 bg-dark-800 border-l border-white/10 z-[60] transform translate-x-full transition-transform duration-300 shadow-2xl flex flex-col" id="cart-sidebar">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<h2 className="font-serif text-xl text-white">Your Selection</h2>
<button className="text-zinc-400 hover:text-white" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items">

<div className="text-center text-zinc-500 mt-10 text-sm">Your cart is empty</div>
</div>
<div className="p-6 border-t border-white/5 bg-dark-900">
<div className="flex justify-between mb-4 text-white">
<span>Total</span>
<span className="font-serif text-gold-400" id="cart-total">PKR 0</span>
</div>
<button className="w-full py-3 bg-gold-500 text-black font-medium text-sm hover:bg-gold-400 transition-colors" onclick="openCheckout()">
                PROCEED TO CHECKOUT
            </button>
</div>
</div>

<div className="fixed inset-0 z-[70] bg-black/90 hidden items-center justify-center p-4 backdrop-blur-sm" id="checkout-modal">
<div className="bg-dark-800 border border-white/10 w-full max-w-md p-8 relative">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-white" onclick="closeCheckout()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h2 className="font-serif text-2xl text-white mb-6 text-center">Confirm Order</h2>
<form className="space-y-4" id="checkout-form" onsubmit="processOrder(event)">
<div>
<label className="block text-xs text-zinc-400 mb-1">Full Name</label>
<input className="w-full bg-dark-900 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1">Phone Number</label>
<input className="w-full bg-dark-900 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors" required="" type="tel"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1">Delivery Address</label>
<textarea className="w-full bg-dark-900 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors" required="" rows="3"></textarea>
</div>
<div className="flex items-center gap-2 pt-2">
<input checked="" className="accent-gold-500 h-4 w-4" disabled="" id="cod" type="checkbox"/>
<label className="text-sm text-zinc-300" htmlFor="cod">Cash on Delivery</label>
</div>
<button className="w-full py-3 mt-4 bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors" type="submit">
                    PLACE ORDER
                </button>
</form>
</div>
</div>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Dining" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in-section is-visible">
<p className="text-gold-400 tracking-[0.2em] text-xs md:text-sm uppercase mb-6">Gujranwala's Finest</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 tracking-tight">
                Where Taste Meets <span className="italic text-gold-400">Perfection</span>
</h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-gold-500 text-black text-sm font-medium tracking-wide hover:bg-white transition-colors duration-300 w-full sm:w-auto" onclick="document.getElementById('menu').scrollIntoView()">
                    ORDER ONLINE
                </button>
<button className="px-8 py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto" onclick="document.getElementById('contact').scrollIntoView()">
                    BOOK A TABLE
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white/50" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-dark-900 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative fade-in-section is-visible">
<div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/30 z-0"></div>
<img alt="Chef Plating" className="z-10 hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover relative grayscale" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-8 fade-in-section is-visible">
<div className="inline-flex items-center gap-2">
<span className="h-px w-8 bg-gold-500"></span>
<span className="text-gold-400 uppercase text-xs tracking-widest">Our Story</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight">Heritage on a Plate</h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                        At Ismaeel's Kitchen, we don't just serve food; we curate experiences. Located in the heart of Gujranwala, our culinary journey is rooted in the rich traditions of Pakistani hospitality, elevated by modern techniques and an uncompromising dedication to quality.
                    </p>
<p className="text-zinc-400 text-sm leading-relaxed">
                        From the smoky aroma of our charcoal-grilled BBQ to the delicate spices of our signature curries, every dish tells a story of passion.
                    </p>
<div className="pt-4">
<div className="flex items-center gap-4">
<img alt="Chef" className="w-12 h-12 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-white font-serif text-lg">M. Ismaeel</p>
<p className="text-zinc-500 text-xs uppercase tracking-wide">Executive Chef</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-dark-800 border-white/5 pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{maskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex fade-in-section mb-12 brightness-50 translate-y-1 items-end justify-between is-visible" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="" style={{maskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)'}}>
<span className="text-gold-400 uppercase text-xs tracking-widest block mb-2">Limited Time</span>
<h2 className="font-serif text-3xl md:text-4xl text-white">Exclusive Offers</h2>
</div>
<div className="hidden md:flex gap-x-2 gap-y-2">
<button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon className="" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="flex hover:bg-white hover:text-black transition-colors w-10 h-10 border-white/10 border items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 fade-in-section gap-x-6 gap-y-6 is-visible" style={{maskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="group relative h-64 overflow-hidden border border-white/10">
<img className="transition-transform duration-700 group-hover:scale-110 opacity-60 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

</div>
</div>
</section>

<section className="bg-dark-900 pt-24 pb-24" id="menu">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 fade-in-section is-visible">
<span className="text-gold-400 uppercase text-xs tracking-widest block mb-2">Savor the Flavor</span>
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-serif bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a7b8da3-eeb7-490f-98e1-5a3ab9cd1ca1_1600w.jpg?w=800&amp;q=80)] bg-cover bg-center">Our Menu</h2>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-section is-visible">
<button className="category-btn active hover:border-gold-500 transition-all text-sm text-zinc-400 border-white/10 border rounded-none pt-2 pr-6 pb-2 pl-6" data-category="all" onclick="filterMenu('all')">All</button>
<button className="category-btn px-6 py-2 text-sm border border-white/10 text-zinc-400 hover:text-white hover:border-gold-500 transition-all rounded-none" data-category="bbq" onclick="filterMenu('bbq')">BBQ</button>
<button className="category-btn hover:text-white hover:border-gold-500 transition-all text-sm text-zinc-400 border-white/10 border rounded-none pt-2 pr-6 pb-2 pl-6" data-category="pakistani" onclick="filterMenu('pakistani')">Pakistani</button>
<button className="category-btn hover:text-white hover:border-gold-500 transition-all text-sm border rounded-none pt-2 pr-6 pb-2 pl-6 text-white border-gold-500" data-category="fastfood" onclick="filterMenu('fastfood')">Fast Food</button>
<button className="category-btn hover:text-white hover:border-gold-500 transition-all text-sm text-zinc-400 border-white/10 border rounded-none pt-2 pr-6 pb-2 pl-6" data-category="chinese" onclick="filterMenu('chinese')">Chinese</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section gap-x-8 gap-y-8 is-visible" id="menu-grid">

<div className="menu-item group bg-dark-800 border border-white/5 p-4 hover:border-gold-500/30 transition-all" data-category="bbq" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Mutton Seekh Kabab</h3>
<span className="text-gold-400 font-medium">PKR 1200</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Premium minced mutton spiced with traditional herbs and charcoal grilled.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Mutton Seekh Kabab', 1200)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group bg-dark-800 border border-white/5 p-4 hover:border-gold-500/30 transition-all" data-category="pakistani" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full" src="https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Chicken Karahi</h3>
<span className="text-gold-400 font-medium">PKR 1800</span>
</div>
<p className="line-clamp-2 text-xs text-zinc-500 mb-4">A Lahori specialty cooked in a wok with tomatoes, ginger and green chilies.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Chicken Karahi', 1800)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group hover:border-gold-500/30 transition-all bg-dark-800 border-white/5 border pt-4 pr-4 pb-4 pl-4" data-category="chinese" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1605704922285-e82455dba38b?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Kung Pao Chicken</h3>
<span className="text-gold-400 font-medium">PKR 1100</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Spicy stir-fry with peanuts, vegetables, and chili peppers.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Kung Pao Chicken', 1100)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group hover:border-gold-500/30 transition-all bg-dark-800 border-white/5 border pt-4 pr-4 pb-4 pl-4" data-category="fastfood" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&amp;q=80"/>
</div>
<div className="flex mb-2 justify-between items-start">
<h3 className="font-serif text-xl text-white">Ismaeel's Gold Burger</h3>
<span className="text-gold-400 font-medium">PKR 950</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Double beef patty, cheddar melt, caramelized onions and secret sauce.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Ismaeel\'s Gold Burger', 950)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group bg-dark-800 border border-white/5 p-4 hover:border-gold-500/30 transition-all" data-category="bbq" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Chicken Malai Boti</h3>
<span className="text-gold-400 font-medium">PKR 1050</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Creamy, melt-in-your-mouth chicken cubes marinated in fresh cream.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Chicken Malai Boti', 1050)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group hover:border-gold-500/30 transition-all bg-dark-800 border-white/5 border pt-4 pr-4 pb-4 pl-4" data-category="chinese" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Beef Chilli Dry</h3>
<span className="text-gold-400 font-medium">PKR 1300</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Crispy beef strips tossed with green chilies, ginger and soy glaze.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Beef Chilli Dry', 1300)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group hover:border-gold-500/30 transition-all bg-dark-800 border-white/5 border pt-4 pr-4 pb-4 pl-4" data-category="chinese" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Chicken Chow Mein</h3>
<span className="text-gold-400 font-medium">PKR 950</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Traditional stir-fried noodles with chicken strips and fresh vegetables.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Chicken Chow Mein', 950)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group hover:border-gold-500/30 transition-all bg-dark-800 border-white/5 border pt-4 pr-4 pb-4 pl-4" data-category="chinese" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1563245312-0da6919c67dc?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Szechuan Prawns</h3>
<span className="text-gold-400 font-medium">PKR 1500</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Juicy prawns wok-tossed in our signature spicy Szechuan sauce.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Szechuan Prawns', 1500)">
                        Add to Cart
                    </button>
</div>

<div className="menu-item group bg-dark-800 border border-white/5 p-4 hover:border-gold-500/30 transition-all" data-category="pakistani" style={{display: 'none'}}>
<div className="relative overflow-hidden h-52 w-full mb-4">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://images.unsplash.com/photo-1475332363216-323c9b7f1e81?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-white">Special Salad</h3>
<span className="font-medium bg-[conic-gradient(from_345deg,var(--tw-gradient-stops))] from-white/50 via-white to-[#ffffff]/50 xl:bg-clip-text xl:text-transparent">PKR 450</span>
</div>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Fresh garden greens with our signature lemon dressing.</p>
<button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors" onclick="addToCart('Special Salad', 450)">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-dark-900 border-white/5 border-t pt-24 pb-24" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 fade-in-section is-visible">
<div>
<span className="text-gold-400 uppercase text-xs tracking-widest block mb-2">Ambience</span>
<h2 className="font-serif text-4xl text-white">The Experience</h2>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[600px] fade-in-section is-visible">
<div className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="col-span-2 relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800">
<div className="max-w-7xl mx-auto px-6 text-center fade-in-section">
<iconify-icon className="text-gold-500 mb-6 opacity-50" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<h2 className="font-serif text-3xl text-white mb-16">Guest Reviews</h2>
<div className="grid md:grid-cols-3 gap-8 text-left">
<div className="bg-dark-900 p-8 border border-white/5">
<div className="flex text-gold-400 gap-1 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">"The best fine dining experience in Gujranwala. The ambiance is breathtaking and the Mutton Karahi is authentic perfection."</p>
<p className="text-white font-serif">— Ahmed Raza</p>
</div>
<div className="bg-dark-900 p-8 border border-white/5 relative transform md:-translate-y-4 shadow-xl shadow-black/50">
<div className="flex text-gold-400 gap-1 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:alt-arrow-left-outline" style={{color: 'rgb(255, 186, 24)'}} width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">"Impeccable service and the black &amp; gold theme gives such a luxurious vibe. Highly recommended for family dinners."</p>
<p className="text-white font-serif">— Sara Khan</p>
</div>
<div className="bg-dark-900 p-8 border border-white/5">
<div className="flex text-gold-400 gap-1 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">"Taste meets perfection indeed. The online ordering was smooth, and food arrived piping hot."</p>
<p className="text-white font-serif">— Usman Ali</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="space-y-8 fade-in-section">
<div>
<span className="text-gold-400 uppercase text-xs tracking-widest block mb-2">Get in Touch</span>
<h2 className="font-serif text-4xl text-white">Visit Ismaeel's</h2>
</div>
<p className="text-zinc-400 text-sm">Experience the luxury dining in the heart of Gujranwala. Reservations are recommended for weekends.</p>
<div className="space-y-6 pt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif">Location</h4>
<p className="text-zinc-500 text-sm mt-1">GT Road, Near Satellite Town,<br/>Gujranwala, Pakistan</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif">Contact</h4>
<p className="text-zinc-500 text-sm mt-1">+92 300 1234567<br/>info@ismaeelskitchen.pk</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif">Hours</h4>
<p className="text-zinc-500 text-sm mt-1">Mon - Sun: 1:00 PM - 12:00 AM</p>
</div>
</div>
</div>
</div>
<div className="bg-dark-800 p-8 md:p-10 border border-white/5 fade-in-section">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Name</label>
<input className="w-full bg-dark-900 border-b border-white/10 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Phone</label>
<input className="w-full bg-dark-900 border-b border-white/10 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-700" placeholder="+92..." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Email</label>
<input className="w-full bg-dark-900 border-b border-white/10 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-700" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-dark-900 border-b border-white/10 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-700" placeholder="Reservation details..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-medium text-sm tracking-wide hover:bg-gold-500 transition-colors mt-4" type="submit">
                            SEND MESSAGE
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-80 grayscale invert opacity-80">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.812345678901!2d74.1234567!3d32.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298374837483%3A0x123456789abcdef!2sGujranwala%2C%20Pakistan!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" style={{border: '0'}} width="100%"></iframe>
</div>

<footer className="bg-black pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-serif text-3xl tracking-tighter text-white mb-6 block" href="#">ISMAEEL'S</a>
<p className="text-zinc-500 text-sm max-w-sm mb-6">
                        Where traditional Pakistani flavors meet modern luxury. A culinary destination for those who appreciate the finer things in life.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500 transition-all rounded-full" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500 transition-all rounded-full" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500 transition-all rounded-full" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-gold-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#menu">Full Menu</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#contact">Reservations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<p className="text-zinc-500 text-xs mb-4">Subscribe for exclusive offers and updates.</p>
<div className="flex border-b border-white/20 pb-2">
<input className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-zinc-700" placeholder="Email Address" type="email"/>
<button className="text-gold-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2023 Ismaeel's Kitchen. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
