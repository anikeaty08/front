import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#1a1a1a',
gold: '#c5a47e',
light: '#f9f9f9'
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-neutral-900/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-serif tracking-tight font-medium text-white">HOTEL DELICIOUS</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-neutral-900 transition-colors duration-200" href="#book-table">
                    Book a Table
                </a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-200 transition-colors duration-200 gap-2" href="https://wa.me/917004154006">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
                    Order Now
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none" data-collapse-toggle="navbar-sticky" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-neutral-300 md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-neutral-300 md:p-0 transition-colors" href="#menu">Menu</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-neutral-300 md:p-0 transition-colors" href="#location">Location</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-neutral-300 md:p-0 transition-colors" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>

<div className="hidden md:hidden bg-neutral-900 border-t border-gray-800" id="mobile-menu">
<ul className="flex flex-col p-4 space-y-4 font-medium text-center">
<li><a className="text-white block py-2" href="#about">About</a></li>
<li><a className="text-white block py-2" href="#menu">Menu</a></li>
<li><a className="text-white block py-2" href="#book-table">Book Table</a></li>
<li><a className="text-white block py-2" href="#location">Location</a></li>
</ul>
</div>
</nav>

<section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">
<img alt="Premium Dining" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 fade-in-up">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wide uppercase mb-2">
                est. 2024 • Danapur, Patna
            </span>
<h1 className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tight leading-tight">
                Where Flavor Meets <br/> <span className="italic text-neutral-300">Elegance.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
                Experience the finest Veg &amp; Non-Veg delicacies in a luxury setting. 
                Perfect for family dinners, romantic dates, and celebrations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2" href="https://wa.me/917004154006?text=Hi,%20I%20would%20like%20to%20order%20food.">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Order on WhatsApp
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#book-table">
                    Book a Table
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-neutral-100 rounded-full -z-10"></div>
<img alt="Restaurant Interior" className="w-full h-[500px] object-cover rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-100 hidden md:block">
<p className="font-serif text-3xl text-neutral-900">4.9</p>
<div className="flex text-yellow-500 text-sm my-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Customer Rating</p>
</div>
</div>
<div className="space-y-6">
<span className="text-neutral-500 font-medium text-sm tracking-widest uppercase">Our Story</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
                        A Culinary Gem in <br/> the Heart of Danapur.
                    </h2>
<p className="text-neutral-600 leading-relaxed">
                        At Hotel Delicious, we believe that food is not just about eating, but about the experience. Located near Radiant School, we offer a sanctuary for food lovers. Whether you crave the rich spices of traditional Indian curries or the subtle flavors of continental classics, our chefs craft every dish with passion.
                    </p>
<p className="text-neutral-600 leading-relaxed">
                        We pride ourselves on using the freshest ingredients to serve both Vegetarian and Non-Vegetarian options that delight the palate and warm the soul.
                    </p>
<div className="pt-4 grid grid-cols-2 gap-8">
<div>
<iconify-icon className="text-neutral-900 mb-2" icon="lucide:chef-hat" strokeWidth="1" width="32"></iconify-icon>
<h4 className="font-semibold text-neutral-900">Master Chefs</h4>
<p className="text-sm text-neutral-500 mt-1">Experienced culinary experts.</p>
</div>
<div>
<iconify-icon className="text-neutral-900 mb-2" icon="lucide:utensils" strokeWidth="1" width="32"></iconify-icon>
<h4 className="font-semibold text-neutral-900">Fresh Ingredients</h4>
<p className="text-sm text-neutral-500 mt-1">Farm-to-table quality.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-neutral-500 font-medium text-sm tracking-widest uppercase">Discover Flavors</span>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-3 tracking-tight">Curated Menu Highlights</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-neutral-900 font-medium">Paneer Butter Masala</h3>
<span className="text-neutral-900 font-semibold">₹240</span>
</div>
<p className="text-neutral-500 text-sm mb-4">Rich creamy tomato gravy with cottage cheese cubes and butter.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
<div className="w-2 h-2 rounded-full bg-green-600"></div> Veg
                    </span>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-neutral-900 font-medium">Chicken Biryani</h3>
<span className="text-neutral-900 font-semibold">₹320</span>
</div>
<p className="text-neutral-500 text-sm mb-4">Aromatic basmati rice cooked with tender chicken and authentic spices.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded">
<div className="w-2 h-2 rounded-full bg-red-600"></div> Non-Veg
                    </span>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-neutral-900 font-medium">Mutton Rogan Josh</h3>
<span className="text-neutral-900 font-semibold">₹450</span>
</div>
<p className="text-neutral-500 text-sm mb-4">Slow-cooked mutton with Kashmiri spices in a rich red gravy.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded">
<div className="w-2 h-2 rounded-full bg-red-600"></div> Non-Veg
                    </span>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors gap-2 shadow-lg hover:shadow-xl" href="#">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="18"></iconify-icon>
                    Download Full Menu (PDF)
                </a>
<p className="mt-4 text-xs text-neutral-400">Seasonal items available upon request.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-4 px-4">
<div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-neutral-900" icon="lucide:star" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Premium Quality</h3>
<p className="text-neutral-500 text-sm leading-relaxed">We source only the finest ingredients to ensure every dish meets our high standards of excellence.</p>
</div>
<div className="space-y-4 px-4">
<div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-neutral-900" icon="lucide:armchair" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Luxury Ambiance</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Designed for comfort and class, our interiors provide the perfect backdrop for your memorable moments.</p>
</div>
<div className="space-y-4 px-4">
<div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-neutral-900" icon="lucide:clock" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Fast Service</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Our attentive staff ensures that your food is served hot and your needs are met promptly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
<div>
<span className="text-neutral-500 font-medium text-sm tracking-widest uppercase">Gallery</span>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-3 tracking-tight">A Feast for the Eyes</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors mt-4 md:mt-0" href="https://wa.me/917004154006">
                View more on WhatsApp <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Restaurant Vibe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Food Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&amp;w=1980&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="book-table">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

<div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
<span className="text-neutral-400 font-medium text-xs tracking-widest uppercase mb-2">Reservations</span>
<h2 className="text-3xl font-serif text-white mb-6">Book a Table</h2>
<p className="text-neutral-400 text-sm mb-8">Secure your spot for an unforgettable dining experience. For immediate booking, please WhatsApp us.</p>
<form action="#" className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<input className="w-full bg-neutral-800 border-none rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-1 focus:ring-white/50 text-sm" placeholder="Your Name" type="text"/>
<input className="w-full bg-neutral-800 border-none rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-1 focus:ring-white/50 text-sm" placeholder="Phone Number" type="tel"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<input className="w-full bg-neutral-800 border-none rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-1 focus:ring-white/50 text-sm [color-scheme:dark]" type="date"/>
<select className="w-full bg-neutral-800 border-none rounded-lg px-4 py-3 text-white text-sm focus:ring-1 focus:ring-white/50">
<option>2 Guests</option>
<option>4 Guests</option>
<option>6 Guests</option>
<option>8+ Guests</option>
</select>
</div>
<button className="w-full py-3.5 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-200 transition-colors mt-4 text-sm" type="button">
                            Confirm Booking
                        </button>
</form>
<div className="mt-8 flex items-center gap-4">
<div className="h-px bg-neutral-800 flex-1"></div>
<span className="text-neutral-500 text-xs">OR</span>
<div className="h-px bg-neutral-800 flex-1"></div>
</div>
<a className="mt-6 flex items-center justify-center gap-2 text-white hover:text-neutral-300 transition-colors text-sm font-medium" href="https://wa.me/917004154006">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                        Book via WhatsApp
                    </a>
</div>

<div className="lg:w-1/2 relative h-64 lg:h-auto">
<img alt="Table Setting" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-900/20"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<span className="text-neutral-500 font-medium text-sm tracking-widest uppercase">Find Us</span>
<h2 className="text-3xl font-serif text-neutral-900 mt-3 tracking-tight">Location &amp; Contact</h2>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-full shadow-sm">
<iconify-icon className="text-neutral-900" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                                    Saguna More, Khagaul Road, Near Radiant School, Mustafapur, Danapur, Patna – 801503
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-full shadow-sm">
<iconify-icon className="text-neutral-900" icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Contact</h4>
<p className="text-neutral-600 text-sm">
<a className="hover:text-neutral-900 transition-colors" href="tel:+917004154006">+91 7004154006</a>
</p>
<p className="text-neutral-600 text-sm">
<a className="hover:text-neutral-900 transition-colors" href="mailto:admin@hoteldelicious.com">admin@hoteldelicious.com</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-full shadow-sm">
<iconify-icon className="text-neutral-900" icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Opening Hours</h4>
<p className="text-neutral-600 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
</div>
</div>
</div>
</div>

<div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-white">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.669887346747!2d85.0445!3d25.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed571f30800001%3A0x2a0a0a0a0a0a0a0a!2sSaguna%20More%2C%20Danapur%2C%20Patna!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-serif mb-6">Ready to taste the extraordinary?</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors gap-2" href="https://wa.me/917004154006">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                    Order via WhatsApp
                </a>
</div>
<div className="mt-16 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
<p>© 2024 Hotel Delicious. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</section>

    </>
  );
}
