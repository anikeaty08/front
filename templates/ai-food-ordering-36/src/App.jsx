import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
},
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                            const burgers = [
                                { name: "Zincier Burger", price: 450, img: "1568901346375-23c9450c58cd" },
                                { name: "Zincier with Cheese Burger", price: 500, img: "1586190848861-99542a22be7b" },
                                { name: "Chicken Burger", price: 400, img: "1605591099581-0bf24ce0bc33" },
                                { name: "American Burger", price: 400, img: "1550547660-d9450f859349" },
                                { name: "Tikka Burger", price: 400, img: "1594212202615-18ee9111b157" },
                                { name: "Tower Burger", price: 600, img: "1586816001966-79b736744398" },
                                { name: "Double Decker Burger", price: 700, img: "1553979459-d2229ba7433b" },
                                { name: "Town Special Pizza Burger", price: 650, img: "1615719413546-125be73ce66b" }
                            ];
                            burgers.forEach(item => {
                                document.write(`
                                    <div class="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                                        <div class="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                                            <div>
                                                <h4 class="text-lg font-medium tracking-tight text-zinc-900">${item.name}</h4>
                                            </div>
                                            <div class="flex items-center justify-between mt-auto">
                                                <span class="text-lg font-medium">Rs ${item.price}</span>
                                                <button class="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
                                                    <i data-lucide="plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `);
                            });
                        


                            const chicken = [
                                { name: "1 Piece (Leg)", price: 250, img: "1626645738196-c2a7c87a8f58" },
                                { name: "1 Piece Chicken (Thai / Chest)", price: 270, img: "1569058251502-d3f3f51dfb36" },
                                { name: "8 Piece Full Broast", price: 2000, img: "1604908176997-125f25cc6f3d" },
                                { name: "4 Piece Half Broast", price: 1050, img: "1626645738196-c2a7c87a8f58" },
                                { name: "10 Piece Chicken Wings", price: 600, img: "1524114664604-cd8133cd6715" },
                                { name: "5 Piece Chicken Wings", price: 300, img: "1524114664604-cd8133cd6715" },
                                { name: "10 Piece Nuggets", price: 600, img: "1562967914671-6a1a0b5f10b7" },
                                { name: "10 Piece BBQ Wings", price: 600, img: "1608039829572-78ec51412df7" },
                                { name: "10 Piece Buffalo Wings", price: 750, img: "1567620832903-9ea7a166e578" }
                            ];
                            chicken.forEach(item => {
                                document.write(`
                                    <div class="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                                        <div class="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                                            <h4 class="text-lg font-medium tracking-tight text-zinc-900">${item.name}</h4>
                                            <div class="flex items-center justify-between mt-auto">
                                                <span class="text-lg font-medium">Rs ${item.price}</span>
                                                <button class="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
                                                    <i data-lucide="plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `);
                            });
                        


                            const shawarmas = [
                                { name: "Chicken Shawarma", price: 250, img: "1646754067347-167882255866" },
                                { name: "Chicken Cheese Shawarma", price: 300, img: "1528735602780-2552fd46c7af" },
                                { name: "Vegetarian Shawarma", price: 200, img: "1628840042765-356cda07504e" },
                                { name: "Zincier Shawarma", price: 450, img: "1646754067347-167882255866" },
                                { name: "Pratha Roll", price: 350, img: "1628840042765-356cda07504e" },
                                { name: "Zincier Pratha Roll", price: 450, img: "1528735602780-2552fd46c7af" }
                            ];
                            shawarmas.forEach(item => {
                                document.write(`
                                    <div class="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                                        <div class="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                                            <h4 class="text-lg font-medium tracking-tight text-zinc-900">${item.name}</h4>
                                            <div class="flex items-center justify-between mt-auto">
                                                <span class="text-lg font-medium">Rs ${item.price}</span>
                                                <button class="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
                                                    <i data-lucide="plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `);
                            });
                        


                            const deals = [
                                { id: 1, price: 1200, items: ["2 Zincier burger", "1 Medium French Fries", "1 500 ml Drink"] },
                                { id: 2, price: 1600, items: ["2 Chicken Burger", "2 Chicken Piece Thai", "1 Medium French Fries", "1 500 ml Drink"] },
                                { id: 3, price: 1900, items: ["2 Tikka Burger", "2 Chicken Burger", "1 Medium French Fries", "1 500 ml Drink"] },
                                { id: 4, price: 1740, items: ["2 Zincier Burger", "2 Chicken Piece Thai", "1 Medium French Fries", "1 500 ml Drink"] },
                                { id: 5, price: 2100, items: ["2 Tower Burger", "1 Medium French Fries", "1 500 ml Drink", "10 Chicken Wings"] },
                                { id: 6, price: 2000, items: ["2 Double Decker Burger", "2 Medium French Fries", "1 Ltr Drink"] },
                                { id: 7, price: 2760, items: ["8 Chicken Piece", "1 Large French Fries", "1 1.5 Ltr Drink"] },
                                { id: 8, price: 5500, items: ["6 Zincier Burger", "6 Chicken Piece", "10 Chicken Wings", "1 Large Fries", "1 1.5 Ltr Drink"] },
                                { id: 9, price: 5800, items: ["8 Chicken Burger", "8 Chicken Piece", "1 Large Fries", "1 1.5 Ltr Drink"] }
                            ];
                            deals.forEach(deal => {
                                document.write(`
                                    <div class="bg-white border-2 border-brand-100 rounded-2xl p-6 flex flex-col h-full hover:border-brand-300 transition-colors relative overflow-hidden">
                                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full z-0"></div>
                                        <div class="relative z-10 flex justify-between items-start mb-4">
                                            <div>
                                                <span class="inline-block bg-zinc-900 text-white text-sm font-medium px-3 py-1 rounded-full mb-2">Deal ${deal.id}</span>
                                            </div>
                                            <div class="text-right">
                                                <span class="block text-2xl font-medium tracking-tight text-brand-600">Rs. ${deal.price}</span>
                                            </div>
                                        </div>
                                        <ul class="relative z-10 space-y-2 mb-6 flex-grow">
                                            ${deal.items.map(item => `
                                                <li class="flex items-start gap-2 text-base text-zinc-600">
                                                    <i data-lucide="check" class="w-5 h-5 text-brand-500 shrink-0 mt-0.5"></i>
                                                    ${item}
                                                </li>
                                            `).join('')}
                                        </ul>
                                        <button class="relative z-10 w-full bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 py-3 rounded-xl text-base font-medium transition-colors flex justify-center items-center gap-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                `);
                            });
                        


        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // View Switcher Logic
        function switchView(viewName) {
            // Hide all views
            document.getElementById('view-customer').classList.add('hidden');
            document.getElementById('view-admin').classList.add('hidden');
            document.getElementById('view-rider').classList.add('hidden');
            
            // Reset tab styles
            const tabs = ['tab-customer', 'tab-admin', 'tab-rider'];
            tabs.forEach(tab => {
                const el = document.getElementById(tab);
                el.classList.remove('bg-white', 'shadow-sm', 'text-zinc-900');
                el.classList.add('text-zinc-500');
            });

            // Show selected view
            document.getElementById('view-' + viewName).classList.remove('hidden');
            
            // Highlight selected tab
            const activeTab = document.getElementById('tab-' + viewName);
            activeTab.classList.remove('text-zinc-500');
            activeTab.classList.add('bg-white', 'shadow-sm', 'text-zinc-900');

            // Toggle UI elements specific to customer view (like cart)
            const customerOnlyEls = document.querySelectorAll('.view-customer-only');
            customerOnlyEls.forEach(el => {
                if(viewName === 'customer') {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex flex-col justify-center">
<h1 className="text-xl tracking-tight font-medium flex items-center gap-2">
<i className="text-brand-500" data-lucide="pizza"></i>
                        Town Pizza Hut
                    </h1>
<div className="hidden sm:flex items-center gap-3 text-sm text-zinc-500 mt-0.5">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin"></i> Kabal Road Township Chowk</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="phone"></i> 0318 9659090</span>
</div>
</div>

<nav className="hidden md:flex space-x-1 bg-zinc-100 p-1 rounded-xl">
<button className="px-4 py-2 rounded-lg text-base font-medium bg-white shadow-sm text-zinc-900 transition-all" id="tab-customer" onclick="switchView('customer')">Order</button>
<button className="px-4 py-2 rounded-lg text-base font-medium text-zinc-500 hover:text-zinc-900 transition-all" id="tab-admin" onclick="switchView('admin')">Admin</button>
<button className="px-4 py-2 rounded-lg text-base font-medium text-zinc-500 hover:text-zinc-900 transition-all" id="tab-rider" onclick="switchView('rider')">Rider</button>
</nav>

<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-brand-50 text-brand-600 px-3 py-2 rounded-full hover:bg-brand-100 transition-colors">
<i data-lucide="bot"></i>
<span className="text-base font-medium hidden sm:inline">AI Assist</span>
</button>
<button className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors view-customer-only">
<i data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-1 bg-brand-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>

<button className="md:hidden p-2 text-zinc-600">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow">



<div className="w-full" id="view-customer">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="relative rounded-2xl overflow-hidden bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 shadow-sm">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-6 backdrop-blur-md">
<i className="w-4 h-4 text-brand-400" data-lucide="sparkles"></i> AI-Powered Menu
                        </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Fast Food, Crafted for Families.</h2>
<p className="text-lg text-zinc-300 mb-8">Let our AI suggest the perfect meal combination based on your cravings, or explore our classic favorites.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl text-base font-medium transition-colors">Order Now</button>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-base font-medium backdrop-blur-md transition-colors flex items-center gap-2">
<i data-lucide="wand-2"></i> Auto-Generate Combo
                            </button>
</div>
</div>
<div className="relative z-10 hidden md:block w-72 h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
<img alt="Featured Burger" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200 py-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex overflow-x-auto hide-scrollbar gap-3">
<a className="whitespace-nowrap px-5 py-2 rounded-full bg-zinc-900 text-white text-base font-medium" href="#burgers">Burgers</a>
<a className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 text-base font-medium transition-colors" href="#fried-chicken">Fried Chicken</a>
<a className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 text-base font-medium transition-colors" href="#shawarmas">Shawarmas</a>
<a className="whitespace-nowrap px-5 py-2 rounded-full bg-brand-50 text-brand-600 border border-brand-200 hover:bg-brand-100 text-base font-medium transition-colors flex items-center gap-2" href="#deals"><i className="w-4 h-4" data-lucide="tag"></i> Deals</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

<section className="scroll-mt-32" id="burgers">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-medium tracking-tight">Burgers</h3>
<span className="text-sm text-zinc-500 bg-zinc-200/50 px-2 py-1 rounded-md">8 items</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">


</div>
</section>

<section className="scroll-mt-32" id="fried-chicken">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-medium tracking-tight">Fried Chicken</h3>
<span className="text-sm text-zinc-500 bg-zinc-200/50 px-2 py-1 rounded-md">9 items</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

</div>
</section>

<section className="scroll-mt-32" id="shawarmas">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-medium tracking-tight">Shawarmas</h3>
<span className="text-sm text-zinc-500 bg-zinc-200/50 px-2 py-1 rounded-md">6 items</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

</div>
</section>

<section className="scroll-mt-32" id="deals">
<div className="flex items-center gap-3 mb-6">
<h3 className="text-2xl font-medium tracking-tight">Burger Deals</h3>
<span className="bg-brand-100 text-brand-600 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"><i className="w-3 h-3" data-lucide="zap"></i> Value</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

</div>
</section>
</div>
</div>



<div className="hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="view-admin">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight">Dashboard Overview</h2>
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-500">Last updated: Just now</span>
<button className="p-2 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50"><i className="w-4 h-4" data-lucide="refresh-cw"></i></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 text-zinc-500 mb-2">
<i className="w-5 h-5 text-brand-500" data-lucide="trending-up"></i>
<span className="text-base font-medium">Today's Revenue</span>
</div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">Rs 45,200</div>
<div className="mt-2 text-sm text-green-600 flex items-center gap-1">+12% from yesterday</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 text-zinc-500 mb-2">
<i className="w-5 h-5 text-blue-500" data-lucide="shopping-bag"></i>
<span className="text-base font-medium">Total Orders</span>
</div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">128</div>
<div className="mt-2 text-sm text-zinc-500 flex items-center gap-1">24 currently active</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 text-zinc-500 mb-2">
<i className="w-5 h-5 text-purple-500" data-lucide="bot"></i>
<span className="text-base font-medium">AI Recommendations</span>
</div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">34%</div>
<div className="mt-2 text-sm text-zinc-500 flex items-center gap-1">Conversion rate via AI assist</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-200 flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight">Recent Live Orders</h3>
<button className="text-brand-600 text-base font-medium hover:text-brand-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-base text-zinc-600">
<thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-200">
<tr>
<th className="px-6 py-4 font-medium">Order ID</th>
<th className="px-6 py-4 font-medium">Customer</th>
<th className="px-6 py-4 font-medium">Amount</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200">
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">#ORD-9012</td>
<td className="px-6 py-4">Ali Khan<br/><span className="text-sm text-zinc-400">0300 1234567</span></td>
<td className="px-6 py-4">Rs 1,200</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Preparing
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900"><i data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">#ORD-9011</td>
<td className="px-6 py-4">Sara Ahmed<br/><span className="text-sm text-zinc-400">0333 9876543</span></td>
<td className="px-6 py-4">Rs 3,450</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Ready for Rider
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900"><i data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">#ORD-9010</td>
<td className="px-6 py-4">Usman Tariq<br/><span className="text-sm text-zinc-400">0311 5556667</span></td>
<td className="px-6 py-4">Rs 850</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Delivered
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900"><i data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>



<div className="hidden w-full max-w-md mx-auto px-4 py-6" id="view-rider">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight">Deliveries</h2>
<p className="text-base text-zinc-500">You are currently online.</p>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
</label>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
<div className="flex justify-between items-start mb-3">
<span className="bg-brand-50 text-brand-600 text-xs font-medium px-2 py-1 rounded">New Assignment</span>
<span className="text-sm text-zinc-500">2 mins ago</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">#ORD-9011</h3>
<p className="text-base text-zinc-600 flex items-start gap-2 mb-4">
<i className="w-5 h-5 shrink-0 mt-0.5 text-zinc-400" data-lucide="map-pin"></i>
                        House 42, Street 5, Phase 2, Township Swat
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<div className="flex flex-col">
<span className="text-sm text-zinc-500">Cash to collect</span>
<span className="text-lg font-medium text-zinc-900">Rs 3,450</span>
</div>
<button className="bg-zinc-900 text-white px-5 py-2.5 rounded-xl font-medium text-base hover:bg-zinc-800 transition-colors">Accept</button>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-3">
<span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded flex items-center gap-1"><i className="w-3 h-3" data-lucide="navigation"></i> En Route</span>
<span className="text-sm text-zinc-500">Est. 5 mins</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">#ORD-9008</h3>
<p className="text-base text-zinc-600 flex items-start gap-2 mb-4">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="map-pin"></i>
                        Niamat Plaza, Near Main Chowk, Swat
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<button className="flex-1 bg-white border border-zinc-200 text-zinc-700 px-4 py-2.5 rounded-xl font-medium text-base hover:bg-zinc-50 transition-colors flex justify-center items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> Call</button>
<button className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors">Mark Delivered</button>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-xl font-medium tracking-tight text-zinc-900">
<i className="text-brand-500" data-lucide="pizza"></i> Town Pizza Hut
            </div>
<div className="text-center md:text-left text-base text-zinc-500 space-y-1">
<p>Kabal Road Township Chowk Niamat Plaza Swat, Pakistan</p>
<p>0318 9659090  •  +92 348 5922580</p>
</div>
<div className="text-base text-zinc-400">
                © 2023 Town Pizza Hut. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
