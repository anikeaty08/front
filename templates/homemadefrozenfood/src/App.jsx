import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State management for checkout
        let currentOrder = {
            name: '',
            price: 0,
            quantity: 1
        };

        // Switch to Checkout View
        function buyNow(itemName, itemPrice, itemDesc, itemImg) {
            currentOrder.name = itemName;
            currentOrder.price = itemPrice;
            currentOrder.quantity = 1;

            document.getElementById('co-title').innerText = itemName;
            document.getElementById('co-price').innerText = `Rs. ${itemPrice}`;
            document.getElementById('co-desc').innerText = itemDesc;
            document.getElementById('co-img').src = itemImg;
            updateQuantityDisplay();

            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('admin-dashboard-view').classList.add('hidden');
            document.getElementById('checkout-view').classList.remove('hidden');
            
            document.getElementById('mobile-bar').classList.add('hidden');
            document.getElementById('desktop-whatsapp').classList.add('hidden');

            window.scrollTo(0, 0);
        }

        // Switch back to Main View
        function goBack() {
            document.getElementById('checkout-view').classList.add('hidden');
            document.getElementById('admin-dashboard-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            
            document.getElementById('mobile-bar').classList.remove('hidden');
            document.getElementById('desktop-whatsapp').classList.remove('hidden');
            document.getElementById('desktop-whatsapp').classList.add('sm:flex');
            
            // Restore header elements
            document.getElementById('top-bar').classList.remove('hidden');
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('main-footer').classList.remove('hidden');

            window.scrollTo(0, document.getElementById('menu').offsetTop - 80);
        }

        // Admin Dashboard Logic
        function loginAdmin(event) {
            event.preventDefault(); 
            
            document.getElementById('admin-modal').classList.add('hidden');
            document.getElementById('admin-modal').classList.remove('flex');
            
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('checkout-view').classList.add('hidden');
            document.getElementById('mobile-bar').classList.add('hidden');
            document.getElementById('desktop-whatsapp').classList.add('hidden');
            
            document.getElementById('top-bar').classList.add('hidden');
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('main-footer').classList.add('hidden');

            // Show Website Editor Dashboard
            document.getElementById('admin-dashboard-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function logoutAdmin() {
            const inputs = document.querySelectorAll('#admin-modal input');
            inputs.forEach(input => input.value = '');
            goBack();
            window.scrollTo(0, 0);
        }

        // Quantity Logic
        function updateQuantity(change) {
            const newQty = currentOrder.quantity + change;
            if (newQty >= 1) {
                currentOrder.quantity = newQty;
                updateQuantityDisplay();
            }
        }

        function updateQuantityDisplay() {
            document.getElementById('co-qty').innerText = currentOrder.quantity;
            document.getElementById('co-total').innerText = currentOrder.quantity * currentOrder.price;
        }

        // Submit Checkout via WhatsApp
        function submitCheckout(event) {
            event.preventDefault();
            const customerName = document.getElementById('co-name').value;
            const customerPhone = document.getElementById('co-phone').value;
            const customerAddress = document.getElementById('co-address').value;
            const notes = document.getElementById('co-notes').value;
            const total = currentOrder.quantity * currentOrder.price;

            const waNumber = "923170538774";
            let message = `*NEW ORDER CONFIRMATION*\n\n`;
            message += `*Item:* ${currentOrder.name}\n`;
            message += `*Quantity:* ${currentOrder.quantity}\n`;
            message += `*Total Amount:* Rs. ${total}\n\n`;
            message += `*Delivery Details:*\n`;
            message += `Name: ${customerName}\n`;
            message += `Phone: ${customerPhone}\n`;
            message += `Address: ${customerAddress}\n`;
            if (notes.trim() !== '') {
                message += `Notes: ${notes}\n`;
            }

            const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
            window.open(waLink, '_blank');
        }

        // Submit General Inquiry Form (Contact Section)
        function submitInquiry() {
            const name = document.getElementById('inquiry-name').value;
            const phone = document.getElementById('inquiry-phone').value;
            const details = document.getElementById('inquiry-details').value;
            const useWhatsApp = document.getElementById('whatsapp-reply').checked;

            if (!name || !phone || !details) return;

            if (useWhatsApp) {
                const waNumber = "923170538774";
                const message = `Hello HMFF,\n\nMy name is ${name} (${phone}).\n\n${details}`;
                const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                window.open(waLink, '_blank');
            } else {
                alert(`Thank you, ${name}! Your inquiry has been sent. We will contact you at ${phone} soon.`);
                document.getElementById('inquiry-name').value = '';
                document.getElementById('inquiry-phone').value = '';
                document.getElementById('inquiry-details').value = '';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-zinc-900 text-zinc-50 px-4 py-2.5 flex items-center justify-center gap-4 text-xs font-medium" id="top-bar">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Open 24 Hours</span>
</div>
<div className="w-px h-3 bg-zinc-700"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span>5.0 Local Rating</span>
</div>
</div>

<header className="sticky top-0 z-40 bg-zinc-50/80 backdrop-blur-xl border-b border-zinc-200/50" id="main-header">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button className="text-xl font-semibold tracking-tighter flex items-center gap-1 cursor-pointer" onclick="goBack()">
                HMFF.
            </button>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600" id="main-nav">
<a className="hover:text-zinc-900 transition-colors" href="#menu" onclick="goBack()">Menu</a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews" onclick="goBack()">Reviews</a>
<a className="hover:text-zinc-900 transition-colors" href="#payment" onclick="goBack()">Payment</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors" href="https://wa.me/923170538774">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                    WhatsApp
                </a>
<a className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm" href="tel:+923170538774">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">+92 3170538774</span>
<span className="sm:hidden">Call Now</span>
</a>
</div>
</div>
</header>

<div className="" id="home-view">

<section className="relative pt-24 pb-32 overflow-hidden px-6">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-zinc-50 to-zinc-50"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-800 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Fresh Stock Available Today
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-zinc-900">
                    Fresh, hygienic home made <br className="hidden md:block"/>
<span className="text-zinc-500">frozen foods.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Order now and enjoy authentic homemade taste without the hassle. Prepared with care, frozen for convenience, and ready whenever you are.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-medium px-8 py-3.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm" href="#menu">
                        View Menu
                        <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-200/50 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100">
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-zinc-400 mb-3" icon="solar:chef-hat-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight">100% Homemade</h3>
<p className="text-xs text-zinc-500 mt-1">Authentic recipes</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-zinc-400 mb-3" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight">Hygienic Prep</h3>
<p className="text-xs text-zinc-500 mt-1">Clean ingredients</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-zinc-400 mb-3" icon="solar:snow-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight">Flash Frozen</h3>
<p className="text-xs text-zinc-500 mt-1">Locks in freshness</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-zinc-400 mb-3" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight">24/7 Availability</h3>
<p className="text-xs text-zinc-500 mt-1">Order anytime</p>
</div>
</div>
</div>
</section>

<section className="bg-center bg-[url(https://images.unsplash.com/photo-1709290649154-54c725bd4484?w=2560&amp;q=80)] max-w-7xl bg-cover mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="menu">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-semibold tracking-tighter mb-2">Our Menu</h2>
<p className="text-sm text-zinc-500">Handcrafted daily, ready to cook whenever you need.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-zinc-900 text-white shadow-sm">All</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50">Parathas</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50">Snacks</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">


<div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Chicken Samosa" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/999e59db-c5b1-47b6-ba93-9588e6d292e2_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight">Chicken Nuggets</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 400</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Crispy and delicious homemade chicken nuggets made from high-quality fresh chicken. Perfectly seasoned and coated for a golden crunch, these nuggets are easy to cook and ideal for quick snacks or meals.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Chicken Samosa (Dozen)', 450, 'Crispy pastry triangles filled with savory minced chicken and mild spices.', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Chicken Samosa" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight">Chicken Samosa</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 350</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs)          Crispy pastry triangles filled with savory minced chicken and mild spices.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Chicken Samosa (Dozen)', 450, 'Crispy pastry triangles filled with savory minced chicken and mild spices.', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;q=80&amp;w=800')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div>
</div>

<div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bf9e3da-bf75-47c8-a79c-36f286a6540a_800w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight">Chicken Shami Kabab</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 450</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Soft, juicy, and flavorful homemade chicken shami kababs made with premium chicken, lentils, and traditional spices. Carefully blended to give a smooth texture and rich taste, these kababs are perfect for burgers, sandwiches, or as a delicious snack.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecea987a-dd8b-4590-ba3e-9fc15670b0e5_800w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex mb-2 items-start justify-between">
<h3 className="text-lg font-semibold tracking-tight">Chicken Kofta</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 500</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Juicy and tender homemade chicken koftas made from finely minced chicken and blended with traditional spices. Perfectly shaped and full of rich flavor, these koftas are ideal for curries, wraps, or as a delicious meal option.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3cd43c6-9fd4-4807-b5cf-363d309ec6f5_800w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight">Chicken Seekh Kabab</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 550</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Juicy and flavorful homemade chicken seekh kababs made from finely minced chicken, blended with traditional spices and herbs. Perfectly shaped on skewers, these kababs are ideal for grilling, sandwiches, or as a tasty snack.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24c64d7b-58f1-4ee4-ae54-2197fbff0240_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight">Chicken Gola Kabab</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 600</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">13-15 (Pcs) Soft and juicy homemade chicken gola kababs made from finely minced chicken, blended with traditional spices for a rich and flavorful taste. Perfectly shaped into round balls, these kababs are ideal for grilling, frying, or serving as a delicious snack.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon className="" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span>Order Now</span>
</button>
</div><div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5b7b9f7-cfbb-48c0-8e50-0800f5cd821e_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex mb-2 items-start justify-between">
<h3 className="text-lg font-semibold tracking-tight">Beef Shami Kabab</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 600</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Soft, juicy, and flavorful homemade beef shami kababs made from premium minced beef, lentils, and traditional spices. Carefully blended to give a smooth texture and rich taste, these kababs are perfect for burgers, sandwiches, or as a tasty snack.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div><div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
</div>
</div><div className="group transition-all hover:shadow-md flex flex-col bg-white h-full border-zinc-200/60 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Shami Kebab" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/201bdca6-ef46-401f-a6d0-16f1bf7aaff3_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex mb-2 items-start justify-between">
<h3 className="text-lg font-semibold tracking-tight">Chicken Seekh Kabab Roll</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">Rs. 550</span>
</div>
<p className="flex-1 line-clamp-2 text-sm text-zinc-500 mb-6">12 (Pcs) Delicious homemade chicken seekh kabab wrapped in soft flatbread with fresh vegetables and flavorful sauces. Juicy, well-spiced kababs make this roll a perfect quick meal or snack for any time of the day.</p>
<button className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm" onclick="buyNow('Beef Shami Kebab', 600, 'Tender, melt-in-your-mouth beef and lentil patties. Pack of 6.', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Order Now</span>
</button>
</div><div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4">
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50 px-6" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex gap-1 text-amber-400 mb-4 text-xl">
<iconify-icon className="" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-4">5.0 Local Rating</h2>
<p className="text-zinc-400 max-w-lg text-sm">Join hundreds of satisfied locals who rely on our hygienic and delicious frozen meals.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Very hygienic and tasty food. It's a lifesaver for our busy family dinners. The samosas are exactly like my mother used to make."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">S</div>
<div className="text-sm font-medium">Sara M.</div>
</div>
</div>
<div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Best homemade frozen items in town. Always fresh stock and the 24-hour availability is incredibly convenient for my night shifts."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">A</div>
<div className="text-sm font-medium">Ali K.</div>
</div>
</div>
<div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Their parathas cook perfectly every time. You can tell they use good quality oil and ingredients. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">F</div>
<div className="text-sm font-medium">Fatima R.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="">
<h2 className="text-3xl font-semibold tracking-tighter mb-2">Contact Us or Bulk Orders</h2>
<p className="text-sm text-zinc-500 mb-8">Need something customized or have a large order? Send us a message below.</p>
<form className="space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/60 shadow-sm" onsubmit="event.preventDefault(); submitInquiry();">
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="inquiry-name">Full Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" id="inquiry-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="inquiry-phone">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" id="inquiry-phone" placeholder="0317 0538774" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="inquiry-details">Message / Inquiry Details</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors resize-none" id="inquiry-details" placeholder="I have a bulk order inquiry for..." required="" rows="4"></textarea>
</div>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="appearance-none w-4 h-4 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 transition-colors cursor-pointer custom-checkbox" id="whatsapp-reply" type="checkbox"/>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Reply via WhatsApp</span>
</label>
<button className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-medium shadow-sm hover:bg-zinc-800 transition-colors mt-2 flex justify-center items-center gap-2" type="submit">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
                            Send Message
                        </button>
</form>
</div>

<div className="flex flex-col h-full justify-between gap-8">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-zinc-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Location</h4>
<p className="text-sm text-zinc-500 mt-1">Available for local pickup and delivery within city limits.</p>
<button className="text-xs font-medium mt-2 text-zinc-900 hover:underline">Get Directions →</button>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-zinc-600" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Direct Contact</h4>
<p className="text-sm text-zinc-500 mt-1">+92 3170538774</p>
<p className="text-xs text-zinc-400 mt-1">Available 24/7</p>
</div>
</div>
</div>

<div className="relative w-full aspect-[16/9] lg:aspect-auto lg:flex-1 rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/60 shadow-inner group">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106297.80911762061!2d72.98188206132515!3d33.63945892523296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df958d92cbce51%3A0xc6bf8061e888636b!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" style={{border: '0'}}></iframe>
<div className="absolute inset-0 bg-zinc-900/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-zinc-200 shadow-sm text-xs font-medium text-zinc-900 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-500">
<iconify-icon className="text-zinc-900" icon="solar:map-point-bold"></iconify-icon> Local Area
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200/50" id="payment">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tighter mb-2">Payment Instructions</h2>
<p className="text-sm text-zinc-500">We offer both Cash on Delivery (COD) and Advance Payment options for your convenience.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200/60 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight">1. Payment Methods</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">You can easily complete your payment via <strong>Cash on Delivery (COD)</strong>, <strong>Bank Transfer</strong>, <strong>EasyPaisa</strong>, or <strong>JazzCash</strong>.</p>
</div>

<div className="bg-zinc-900 text-zinc-50 border border-zinc-800 p-6 rounded-2xl shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-zinc-800 opacity-50 text-7xl pointer-events-none">
<iconify-icon icon="solar:card-transfer-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight">2. Account Details</h3>
</div>
<div className="space-y-4 relative z-10">
<div>
<p className="text-xs text-zinc-400 mb-0.5">Account Title</p>
<p className="text-sm font-medium">Nasir Pervez</p>
</div>
<div>
<p className="text-xs text-zinc-400 mb-0.5">Account Number (EasyPaisa)</p>
<p className="text-lg font-semibold tracking-tight text-amber-400">03145056301</p>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200/60 p-6 rounded-2xl shadow-sm flex flex-col gap-5 justify-center">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
<iconify-icon icon="solar:gallery-send-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight">3. Share Proof</h3>
<p className="text-xs text-zinc-500 mt-1">Send a screenshot or receipt on WhatsApp after transferring.</p>
</div>
</div>
<div className="w-px h-4 bg-zinc-200 ml-4 -my-3"></div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight">4. Confirmation</h3>
<p className="text-xs text-zinc-500 mt-1">Your order will be confirmed once payment is verified.</p>
</div>
</div>
<div className="w-px h-4 bg-zinc-200 ml-4 -my-3"></div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight">5. Need Help?</h3>
<p className="text-xs text-zinc-500 mt-1">Contact us at <a className="text-zinc-900 font-medium hover:underline" href="tel:+923170538774">+92 3170538774</a></p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden min-h-[80vh] pt-12 pb-24 px-6 max-w-3xl mx-auto" id="checkout-view">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8 group" onclick="goBack()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
            Back to Menu
        </button>
<h2 className="text-3xl font-semibold tracking-tighter mb-8 text-zinc-900">Confirm Your Order</h2>

<div className="bg-white p-4 sm:p-6 rounded-3xl border border-zinc-200/60 shadow-sm mb-8 flex flex-col sm:flex-row gap-6 items-start">
<div className="w-full sm:w-40 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200/50">
<img alt="Product" className="w-full h-full object-cover" id="co-img" src=""/>
</div>
<div className="flex-1 flex flex-col h-full justify-between w-full">
<div className="mb-6">
<div className="flex justify-between items-start mb-2 gap-4">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900" id="co-title">Product Name</h3>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 px-2.5 py-1 rounded-lg shrink-0" id="co-price">Rs. 0</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed" id="co-desc">Description goes here.</p>
</div>
<div className="flex items-center justify-between sm:justify-start gap-6 border-t border-zinc-100 sm:border-t-0 pt-4 sm:pt-0">
<span className="text-xs font-medium text-zinc-700">Select Quantity</span>
<div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden">
<button className="w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" onclick="updateQuantity(-1)" type="button">
<iconify-icon icon="solar:minus-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="w-10 text-center text-sm font-medium text-zinc-900" id="co-qty">1</span>
<button className="w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" onclick="updateQuantity(1)" type="button">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<form className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/60 shadow-sm space-y-6" onsubmit="submitCheckout(event)">
<h3 className="text-lg font-semibold tracking-tight mb-4">Delivery &amp; Payment Details</h3>
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Full Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" id="co-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" id="co-phone" placeholder="0317 0538774" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Delivery Address</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors resize-none" id="co-address" placeholder="House/Apartment, Street, Area..." required="" rows="2"></textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Special Instructions (Optional)</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" id="co-notes" placeholder="e.g., Please ring the bell when outside" type="text"/>
</div>
<div className="border-t border-zinc-200/60 pt-6 mt-6">
<div className="flex items-end justify-between mb-8">
<div>
<p className="text-sm font-medium text-zinc-500 mb-1">Total Amount</p>
<p className="text-xs text-zinc-400">Delivery charges separate if applicable</p>
</div>
<p className="text-3xl font-semibold tracking-tighter text-zinc-900">Rs. <span id="co-total">0</span></p>
</div>
<button className="w-full py-4 rounded-xl bg-zinc-900 text-white text-base font-medium shadow-sm hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2" type="submit">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
                    Confirm &amp; Send via WhatsApp
                </button>
</div>
</form>
</div>

<div className="hidden min-h-screen pt-12 pb-24 px-6 max-w-7xl mx-auto" id="admin-dashboard-view">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-1">Website Editor</h2>
<p className="text-sm text-zinc-500">Manage your website content, menu items, and settings.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm" onclick="goBack()">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
                    View Live Site
                </button>
<button className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm" onclick="logoutAdmin()">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
                    Log Out
                </button>
</div>
</div>

<div className="flex items-center gap-6 border-b border-zinc-200/60 mb-8 overflow-x-auto no-scrollbar">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-3 whitespace-nowrap">Content Editor</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-3 whitespace-nowrap transition-colors">Menu Manager</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-3 whitespace-nowrap transition-colors">Orders &amp; Stats</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-3 whitespace-nowrap transition-colors">Settings</button>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-8">

<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-200/60 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight">Hero Section</h3>
</div>
<button className="text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg transition-colors">Save</button>
</div>
<div className="p-6 space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Announcement Badge</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" type="text" value="Fresh Stock Available Today"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Main Heading</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors resize-none" rows="2">Fresh, hygienic home made frozen foods.</textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Subtext / Description</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors resize-none" rows="3">Order now and enjoy authentic homemade taste without the hassle. Prepared with care, frozen for convenience, and ready whenever you are.</textarea>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-200/60 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight">Active Menu Items</h3>
</div>
<button className="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> Add Item
                        </button>
</div>
<div className="divide-y divide-zinc-100">

<div className="p-4 sm:p-6 flex items-center gap-4 hover:bg-zinc-50 transition-colors">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Item" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 truncate">Stuffed Aloo Paratha</h4>
<p className="text-xs text-zinc-500 mt-0.5">Rs. 150 • Best Seller</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors shadow-sm">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-white border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 sm:p-6 flex items-center gap-4 hover:bg-zinc-50 transition-colors">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 truncate">Chicken Samosa (Dozen)</h4>
<p className="text-xs text-zinc-500 mt-0.5">Rs. 450</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors shadow-sm">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-white border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 sm:p-6 flex items-center gap-4 hover:bg-zinc-50 transition-colors">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
<img alt="Item" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 truncate">Beef Shami Kebab</h4>
<p className="text-xs text-zinc-500 mt-0.5">Rs. 600 • Pack of 6</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors shadow-sm">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-white border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-900 rounded-3xl border border-zinc-800 shadow-sm p-6 text-zinc-50">
<h3 className="text-sm font-semibold tracking-tight mb-4 text-zinc-400">Website Status</h3>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 mb-4">
<div className="flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</div>
<span className="text-sm font-medium">Accepting Orders</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:upload-linear" strokeWidth="1.5"></iconify-icon>
                        Publish All Changes
                    </button>
</div>

<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-6">
<h3 className="text-sm font-semibold tracking-tight mb-4">Edit Other Sections</h3>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Payment Methods</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Customer Reviews</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Contact Information</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-zinc-200/60 py-12 px-6" id="main-footer">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-900">
<span className="text-xl font-semibold tracking-tighter">HMFF.</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1.5 group" onclick="document.getElementById('admin-modal').classList.remove('hidden'); document.getElementById('admin-modal').classList.add('flex');">
<iconify-icon className="text-sm group-hover:text-zinc-900" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                    Admin Portal
                </button>
<p className="text-xs text-zinc-500">© 2023 Home Made Frozen Foods. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-zinc-200/60 sm:hidden z-40 flex gap-3" id="mobile-bar">
<a className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-700 shadow-sm" href="https://wa.me/923170538774">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
            WhatsApp
        </a>
<a className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-medium shadow-sm" href="tel:+923170538774">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
            Call Now
        </a>
</div>

<a className="hidden sm:flex fixed bottom-6 right-6 w-14 h-14 bg-zinc-900 text-white rounded-full items-center justify-center shadow-lg hover:bg-zinc-800 hover:-translate-y-1 transition-all z-40 group" href="https://wa.me/923170538774" id="desktop-whatsapp">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
        </span>
</a>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="admin-modal">

<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm cursor-pointer" onclick="document.getElementById('admin-modal').classList.add('hidden'); document.getElementById('admin-modal').classList.remove('flex');"></div>

<div className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl border border-zinc-200 p-8">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon className="text-xl" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1" onclick="document.getElementById('admin-modal').classList.add('hidden'); document.getElementById('admin-modal').classList.remove('flex');">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Admin Access</h3>
<p className="text-xs text-zinc-500 mb-6 leading-relaxed">Secure login to add/edit products, update content, and manage customer orders.</p>
<form className="space-y-4" onsubmit="loginAdmin(event)">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Username / Email</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" placeholder="admin@hmff.com" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Password</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-medium shadow-sm hover:bg-zinc-800 transition-colors mt-4 flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon>
                    Login to Dashboard
                </button>
</form>
<div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-medium">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                Protected Access &amp; 2FA Enabled
            </div>
</div>
</div>



    </>
  );
}
