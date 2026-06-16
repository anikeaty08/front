import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple router to switch between sections
        function nav(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                // Optional fade effect class trigger
                target.classList.remove('animate-fade-in');
                void target.offsetWidth; // trigger reflow
                target.classList.add('animate-fade-in');
            }

            // Update nav active states (Desktop)
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('text-rose-700');
                el.classList.add('text-stone-500');
            });
            
            // Find buttons that navigate to this page and set them active
            const activeNavs = Array.from(document.querySelectorAll(`.nav-link`))
                .filter(btn => btn.getAttribute('onclick').includes(`nav('${pageId}')`));
            
            activeNavs.forEach(btn => {
                btn.classList.remove('text-stone-500');
                btn.classList.add('text-rose-700');
            });

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        // Add minimal custom CSS for animation in JS to avoid style block constraints if needed, but style block is allowed.
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.4s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
        
        // Initialize active state on load
        nav('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200 z-50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="flex items-center gap-2 group" onclick="nav('home')">
<span className="text-rose-700 font-serif text-xl tracking-tighter font-semibold group-hover:text-rose-800 transition-colors">VHP</span>
</button>

<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm font-medium text-rose-700 transition-colors tracking-tight" onclick="nav('home')">Home</button>
<button className="nav-link text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-tight" onclick="nav('menu')">Menu</button>
<button className="nav-link text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-tight" onclick="nav('about')">About Us</button>
<button className="nav-link text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-tight" onclick="nav('contact')">Contact</button>
<button className="bg-rose-700 text-stone-50 text-sm font-medium py-2 px-4 rounded-full hover:bg-rose-800 transition-colors shadow-sm tracking-tight flex items-center gap-2" onclick="nav('menu')">
                    Order Food
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<button className="md:hidden text-stone-800 p-2" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-stone-50 border-b border-stone-200 flex-col py-4 px-6 shadow-lg" id="mobile-menu">
<button className="text-left py-3 text-sm font-medium text-stone-800 border-b border-stone-100" onclick="nav('home'); toggleMobileMenu()">Home</button>
<button className="text-left py-3 text-sm font-medium text-stone-800 border-b border-stone-100" onclick="nav('menu'); toggleMobileMenu()">Menu</button>
<button className="text-left py-3 text-sm font-medium text-stone-800 border-b border-stone-100" onclick="nav('about'); toggleMobileMenu()">About Us</button>
<button className="text-left py-3 text-sm font-medium text-stone-800 mb-4" onclick="nav('contact'); toggleMobileMenu()">Contact</button>
<button className="bg-rose-700 text-stone-50 text-sm font-medium py-3 px-4 rounded-lg text-center w-full" onclick="nav('menu'); toggleMobileMenu()">Order Food</button>
</div>
</header>

<main className="flex-grow pt-16">

<section className="page-section animate-fade-in block" id="home">

<div className="max-w-6xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Västra Hamnen, Malmö
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-6">
                        Welcome to <br/>
<span className="text-rose-700 italic">Västra Hamnens Pizzeria</span>
</h1>
<p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                        Located in the heart of Västra Hamnen in Malmö, we serve delicious pizzas made with fresh ingredients and traditional recipes. Whether you want a quick lunch, dinner with friends, or takeaway by the waterfront, we are here to serve you great food in a friendly atmosphere.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-stone-900 text-stone-50 text-sm font-medium py-3 px-6 rounded-full hover:bg-stone-800 transition-colors shadow-sm tracking-tight" onclick="nav('menu')">
                            View Menu
                        </button>
<button className="bg-stone-50 text-stone-900 border border-stone-300 text-sm font-medium py-3 px-6 rounded-full hover:bg-stone-100 transition-colors tracking-tight" onclick="nav('contact')">
                            Contact Us
                        </button>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="Fresh Gourmet Pizza" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
</div>
</div>

<div className="bg-stone-100 py-16 md:py-24 border-y border-stone-200">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-serif text-stone-900 tracking-tight text-center mb-12">Experience Västra Hamnen</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative aspect-square rounded-2xl overflow-hidden group">
<img alt="Pizza being baked" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
<span className="text-stone-50 font-medium text-sm tracking-tight">Wood-fired perfection</span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group">
<img alt="Restaurant interior" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
<span className="text-stone-50 font-medium text-sm tracking-tight">Cozy atmosphere</span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group">
<img alt="Waterfront atmosphere" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
<span className="text-stone-50 font-medium text-sm tracking-tight">By the sea</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden animate-fade-in" id="menu">
<div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
<div className="text-center mb-16">
<h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">Our Menu</h1>
<p className="text-stone-500 text-sm max-w-md mx-auto">
                        Crafted with fresh ingredients and traditional recipes. <br/>
<span className="text-emerald-700 font-medium mt-2 inline-block bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">All pizzas include tomato sauce, cheese and pizza salad.</span>
</p>
</div>

<div className="space-y-20">

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Gourmet Pizzas</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Al Salame</h3><span className="text-sm font-medium text-stone-500">160 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, three types of salami and fresh basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Roma</h3><span className="text-sm font-medium text-stone-500">155 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, Milano salami, fresh garlic, jalapeño chili, parmesan and fresh basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Mila</h3><span className="text-sm font-medium text-stone-500">165 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, truffle salami, cherry tomatoes, parmesan and arugula.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Parma</h3><span className="text-sm font-medium text-stone-500">170 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, Parma ham, cherry tomatoes, arugula, parmesan and fresh basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Ninik</h3><span className="text-sm font-medium text-stone-500">170 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, Parma ham, chèvre cheese, arugula and honey.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">V.H.P</h3><span className="text-sm font-medium text-stone-500">170 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, Parma ham, fresh garlic, jalapeño chili, parmesan and fresh basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Chèvre</h3><span className="text-sm font-medium text-stone-500">150 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Chèvre cheese, walnuts, honey, pear and arugula.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Ventricina</h3><span className="text-sm font-medium text-stone-500">155 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, spicy ventricina salami, kalamata olives, jalapeño chili and fresh basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Venesia</h3><span className="text-sm font-medium text-stone-500">165 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, truffle salami, sun-dried tomatoes, parmesan, fresh garlic and basil.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Toscana</h3><span className="text-sm font-medium text-stone-500">165 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, bresaola, chèvre cheese, pine nuts, arugula and honey.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Bresaola</h3><span className="text-sm font-medium text-stone-500">165 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, bresaola, parmesan, fresh tomatoes, arugula and pine nuts.</p></div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Classic Pizzas</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Margherita</h3><span className="text-sm font-medium text-stone-500">120 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Tomato sauce and cheese.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Funghi</h3><span className="text-sm font-medium text-stone-500">125 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mushrooms.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Vesuvio</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Capricciosa</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham and mushrooms.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Hawaii</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham and pineapple.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Palermo</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham, shrimp and mushrooms.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Quattro</h3><span className="text-sm font-medium text-stone-500">150 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham, shrimp, olives, mushrooms and artichokes.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Pescatore</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Tuna and onion.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Bolognese</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Minced meat, onion and fresh garlic.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Mexicana</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Minced meat, taco sauce, jalapeño, onion, fresh garlic and taco seasoning.</p></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Vegetarian</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="space-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Nina Mozzarella</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, mushrooms, paprika and tomatoes.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Malmö FF</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mushrooms, paprika, olives, artichokes and onion.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Verde</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, kalamata olives, sun-dried tomatoes, arugula and parmesan.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Classico</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mozzarella, tomatoes, olives, paprika, artichokes and fresh garlic.</p></div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Folded Pizzas</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="space-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Calzone</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Ham.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Calzone Special</h3><span className="text-sm font-medium text-stone-500">155 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Kebab meat, ham, jalapeño and garlic sauce.</p></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Beef Tenderloin</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="space-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Dallas</h3><span className="text-sm font-medium text-stone-500">155 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Beef tenderloin, mushrooms, tomatoes and béarnaise sauce.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Lyx</h3><span className="text-sm font-medium text-stone-500">155 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Beef tenderloin, ham, mushrooms and béarnaise sauce.</p></div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Chicken Pizzas</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="space-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Chicken Pizza</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Chicken and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Tropicana</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Chicken, pineapple, banana and curry.</p></div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Gyros &amp; Kebab Pizzas</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Gyrospizza</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Gyros meat and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Gyrospizza Special</h3><span className="text-sm font-medium text-stone-500">150 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Gyros meat, lettuce, tomatoes, cucumber and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Kebabpizza</h3><span className="text-sm font-medium text-stone-500">140 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Kebab meat and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Kebabpizza Special</h3><span className="text-sm font-medium text-stone-500">150 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Kebab meat, lettuce, tomatoes, cucumber and pepperoncini.</p></div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Plates &amp; Wraps</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Kebab Plate</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Kebab meat, salad, tomato, cucumber, onion, pepperoncini and fries.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Kebab Wrap</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Fresh bread, kebab meat, salad, tomato, cucumber, onion and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Chicken Plate</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Chicken, salad, tomato, cucumber, onion, pepperoncini and fries.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Chicken Wrap</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Fresh bread, chicken, salad, tomato, cucumber, onion and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Gyros Plate</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Gyros meat, salad, tomato, cucumber, onion, pepperoncini and fries.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-rose-700 transition-colors">Gyros Wrap</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Fresh bread, gyros meat, salad, tomato, cucumber, onion and pepperoncini.</p></div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-serif text-rose-800 tracking-tight">Salads</h2>
<div className="h-px bg-rose-200 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Kebab Salad</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mixed salad, kebab meat, cucumber, cherry tomatoes, kalamata olives and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Chicken Salad</h3><span className="text-sm font-medium text-stone-500">130 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mixed salad, chicken, cherry tomatoes, cucumber, kalamata olives and pepperoncini.</p></div>
<div className="group"><div className="flex justify-between items-baseline mb-1"><h3 className="font-medium text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">Gyros Salad</h3><span className="text-sm font-medium text-stone-500">135 kr</span></div><p className="text-sm text-stone-500 leading-relaxed">Mixed salad, gyros meat, cucumber, cherry tomatoes, kalamata olives and pepperoncini.</p></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden animate-fade-in" id="about">
<div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 relative z-10">
<img alt="Pizza making process" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-stone-200 rounded-3xl -z-10"></div>
</div>
<div className="order-1 lg:order-2">
<h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-6">About Västra Hamnens Pizzeria</h1>
<div className="space-y-6 text-stone-600 leading-relaxed">
<p>
                                Västra Hamnens Pizzeria is a local restaurant passionate about great pizza and quality ingredients. Our pizzas are prepared with freshly made dough, rich tomato sauce and carefully selected toppings.
                            </p>
<p>
                                We combine classic pizzeria traditions with gourmet flavors to create a menu that everyone can enjoy. From traditional Margherita pizzas to specialty pizzas with Italian ingredients, there is something for every taste.
                            </p>
<p>
                                We are proud to serve the Västra Hamnen community and welcome both locals and visitors looking for delicious food in a relaxed environment near the sea.
                            </p>
</div>
<div className="mt-10 pt-10 border-t border-stone-200 grid grid-cols-2 gap-6">
<div>
<h4 className="font-serif text-xl text-rose-800 tracking-tight mb-2">Quality First</h4>
<p className="text-sm text-stone-500">Freshly made dough and carefully selected toppings daily.</p>
</div>
<div>
<h4 className="font-serif text-xl text-rose-800 tracking-tight mb-2">Local Community</h4>
<p className="text-sm text-stone-500">Proudly serving Västra Hamnen residents and visitors.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden animate-fade-in bg-stone-100" id="contact">
<div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
<div className="text-center mb-16">
<h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">Visit Us</h1>
<p className="text-stone-500 text-sm max-w-md mx-auto">
                        Call us to order takeaway or visit us for fresh pizza in Västra Hamnen.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="bg-stone-50 p-8 rounded-3xl shadow-sm border border-stone-200/50 flex gap-4 items-start">
<div className="bg-rose-50 p-3 rounded-full text-rose-700 flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 tracking-tight">Location</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                                    Västra Hamnens Pizzeria<br/>
                                    Västra Hamnen<br/>
                                    Malmö, Sweden
                                </p>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-3xl shadow-sm border border-stone-200/50 flex gap-4 items-start">
<div className="bg-rose-50 p-3 rounded-full text-rose-700 flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 tracking-tight">Order by Phone</h3>
<p className="text-sm text-stone-500 mb-3">Call us to place an order for pickup.</p>
<a className="inline-block font-medium text-rose-700 hover:text-rose-800 transition-colors" href="#">040-XX XX XX</a>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-3xl shadow-sm border border-stone-200/50 flex gap-4 items-start">
<div className="bg-emerald-50 p-3 rounded-full text-emerald-700 flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full">
<h3 className="font-medium text-stone-900 mb-4 tracking-tight">Opening Hours</h3>
<ul className="space-y-2 w-full text-sm">
<li className="flex justify-between border-b border-stone-100 pb-2">
<span className="text-stone-500">Mon – Thu</span>
<span className="font-medium text-stone-900">11:00 – 21:00</span>
</li>
<li className="flex justify-between border-b border-stone-100 pb-2">
<span className="text-stone-500">Fri – Sat</span>
<span className="font-medium text-stone-900">11:00 – 22:00</span>
</li>
<li className="flex justify-between pt-1">
<span className="text-stone-500">Sunday</span>
<span className="font-medium text-stone-900">12:00 – 21:00</span>
</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner min-h-[400px]">

<img alt="Map of Malmo" className="w-full h-full object-cover opacity-50 grayscale contrast-125 mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/10 backdrop-blur-sm">
<div className="bg-stone-50 px-6 py-4 rounded-2xl shadow-lg flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-rose-700" icon="solar:map-point-linear"></iconify-icon>
<span className="font-medium text-stone-900 text-sm tracking-tight">Västra Hamnen, Malmö</span>
<span className="text-xs text-stone-500">Interactive Map Here</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-stone-50 font-serif text-xl tracking-tighter font-semibold">VHP</span>
</div>
<div className="flex gap-6 text-sm">
<button className="hover:text-stone-50 transition-colors" onclick="nav('home')">Home</button>
<button className="hover:text-stone-50 transition-colors" onclick="nav('menu')">Menu</button>
<button className="hover:text-stone-50 transition-colors" onclick="nav('about')">About Us</button>
</div>
<p className="text-xs text-stone-600">
                © 2023 Västra Hamnens Pizzeria. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
