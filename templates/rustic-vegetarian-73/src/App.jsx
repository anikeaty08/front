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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#fcfbf9',
100: '#f5f2eb', // Beige/Sand
200: '#e8dec9',
300: '#d9c6a3',
800: '#5c5240', // Earthy Brown
900: '#3d362a',
},
accent: {
500: '#10b981', // Emerald/Green
600: '#059669',
700: '#047857',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "Shakaharis by Awadhpuri – The Shaka Cafe",
"image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
"description": "Rustic-chic vegetarian restaurant offering dumplings, sandwiches, noodle plates and more.",
"address": {
"@type": "PostalAddress",
"streetAddress": "101, Garden, opp. Prahlad Nagar",
"addressLocality": "Prahlad Nagar, Ahmedabad",
"addressRegion": "Gujarat",
"postalCode": "380015",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 23.0120,
"longitude": 72.5108
},
"telephone": "+918866572104",
"servesCuisine": ["Vegetarian", "Asian", "North Indian", "Sushi", "Chinese"],
"priceRange": "$$",
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
"opens": "11:00",
"closes": "23:00"
}
],
"menu": "https://link.zomato.com",
"acceptsReservations": "True"
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('open');
            // Prevent scrolling when menu is open
            if(menu.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));

        // Opening Hours Logic
        const now = new Date();
        const currentHour = now.getHours();
        const statusIndicator = document.getElementById('status-indicator');
        const statusText = document.getElementById('status-text');

        // Open between 11:00 (11) and 23:00 (23)
        if (currentHour >= 11 && currentHour < 23) {
            statusText.textContent = "Open Now";
            statusIndicator.classList.remove('bg-red-500');
            statusIndicator.classList.add('bg-green-500');
            
            // "Closes soon" warning (e.g. after 10 PM)
            if (currentHour >= 22) {
                statusText.textContent = "Closes Soon";
                statusIndicator.classList.remove('bg-green-500');
                statusIndicator.classList.add('bg-yellow-500');
            }
        } else {
            statusText.textContent = "Closed";
            statusIndicator.classList.remove('bg-green-500');
            statusIndicator.classList.add('bg-red-500');
        }
    
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
      

<div className="bg-brand-900 text-brand-50 text-xs py-2 px-4 text-center font-medium tracking-wide">
<span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" id="status-indicator"></span>
<span id="status-text">Closed</span> • Open Daily 11:00 AM – 11:00 PM
    </div>

<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-50/80 border-b border-brand-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 sm:h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="font-serif text-xl sm:text-2xl font-semibold tracking-tighter text-brand-900" href="#">
                        SHAKAHARIS<span className="text-accent-600 text-xs align-top ml-1">The Shaka Cafe</span>
</a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium hover:text-accent-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-accent-700 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium hover:text-accent-700 transition-colors" href="#experience">Experience</a>
<a className="text-sm font-medium hover:text-accent-700 transition-colors" href="#reservations">Reservations</a>
<a className="text-sm font-medium hover:text-accent-700 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full text-white bg-accent-700 hover:bg-accent-600 transition shadow-sm hover:shadow-md" href="#reservations">
                        Book a Table
                    </a>
<button aria-label="Menu" className="md:hidden p-2 text-brand-800 hover:text-accent-700" id="mobile-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-brand-50 flex flex-col pt-20 px-6 gap-6 md:hidden" id="mobile-menu">
<button className="absolute top-4 right-4 p-2 text-brand-800" id="close-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:x" data-width="24"></span>
</button>
<a className="text-2xl font-serif font-medium mobile-link" href="#about">About Us</a>
<a className="text-2xl font-serif font-medium mobile-link" href="#menu">Our Menu</a>
<a className="text-2xl font-serif font-medium mobile-link" href="#experience">Gallery</a>
<a className="text-2xl font-serif font-medium mobile-link" href="#reservations">Reservations</a>
<a className="text-2xl font-serif font-medium mobile-link" href="#contact">Contact</a>
<div className="mt-4 pt-6 border-t border-brand-200">
<a className="flex items-center gap-3 text-brand-800 py-2" href="tel:+918866572104">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span> +91 88665 72104
            </a>
</div>
</div>

<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Rustic Chic Restaurant Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/50 to-brand-900/30"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-brand-50">
<div className="mb-4 flex flex-wrap justify-center gap-2 animate-fade-up">
<span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium uppercase tracking-wider">Pure Vegetarian</span>
<span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium uppercase tracking-wider">Vegan Options</span>
</div>
<h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-tight mb-6 animate-fade-up delay-100">
                Rustic-Chic <br/> Vegetarian Dining.
            </h1>
<p className="text-brand-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-up delay-200">
                Crafted dumplings, artisan sandwiches, and signature noodle bowls by globally travelled <span className="text-white font-medium">Chef Rishabh Singh</span>.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
<a className="w-full sm:w-auto px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-medium transition transform hover:scale-105 flex items-center justify-center gap-2" href="#reservations">
<span className="iconify" data-icon="lucide:calendar-check-2" data-width="18"></span>
                    Book a Table
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition flex items-center justify-center gap-2" href="https://wa.me/918866572104?text=Hi,%20I%E2%80%99d%20like%20to%20book%20a%20table%20at%20Shakaharis." target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<section className="py-20 bg-brand-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="order-2 md:order-1">
<h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-6">A Culinary Journey by <br/> Awadhpuri</h2>
<p className="text-brand-800 mb-6 leading-relaxed">
                        Shakaharis is committed to redefining the vegetarian dining experience. As our name suggests, we are a pure 'Shakahari' kitchen where tradition meets modern global flavors.
                    </p>
<p className="text-brand-800 mb-8 leading-relaxed">
                        The menu is thoughtfully crafted by acclaimed Chef Rishabh Singh. From the rustic textures of our interiors to the stylish presentation of our Asian and North Indian delicacies, every detail is designed to make your visit memorable.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-white border border-brand-200 rounded-xl shadow-sm">
<span className="iconify text-accent-700 mb-2" data-icon="lucide:chef-hat" data-width="24"></span>
<h3 className="font-serif text-lg font-medium text-brand-900">Chef-Driven Menu</h3>
<p className="text-sm text-brand-600 mt-1">Global flavors, local soul.</p>
</div>
<div className="p-4 bg-white border border-brand-200 rounded-xl shadow-sm">
<span className="iconify text-accent-700 mb-2" data-icon="lucide:armchair" data-width="24"></span>
<h3 className="font-serif text-lg font-medium text-brand-900">Cozy Ambience</h3>
<p className="text-sm text-brand-600 mt-1">Rustic-chic &amp; quiet.</p>
</div>
</div>
</div>

<div className="order-1 md:order-2 grid grid-cols-2 gap-4">
<img alt="Plating Detail" className="rounded-2xl w-full h-64 object-cover shadow-lg translate-y-8" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Restaurant Vibe" className="rounded-2xl w-full h-64 object-cover shadow-lg" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-100" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-accent-700 font-semibold tracking-wider text-xs uppercase mb-2 block">Our Kitchen</span>
<h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight">Cuisines &amp; Favorites</h2>
<div className="flex flex-wrap justify-center gap-3 mt-6">
<span className="px-4 py-1.5 bg-white rounded-full text-sm text-brand-800 shadow-sm">Asian</span>
<span className="px-4 py-1.5 bg-white rounded-full text-sm text-brand-800 shadow-sm">Sushi</span>
<span className="px-4 py-1.5 bg-white rounded-full text-sm text-brand-800 shadow-sm">North Indian</span>
<span className="px-4 py-1.5 bg-white rounded-full text-sm text-brand-800 shadow-sm">Cafe</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
<div className="h-56 overflow-hidden">
<img alt="Sushi Platter" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl font-medium text-brand-900">Sushi Platter</h3>
<span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2 py-1 rounded">Chef's Special</span>
</div>
<p className="text-brand-600 text-sm mb-4">Assorted vegetarian sushi rolls prepared with organic ingredients and house-made wasabi.</p>
<span className="text-xs text-brand-400 uppercase tracking-wide">Japanese • Cold</span>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
<div className="h-56 overflow-hidden">
<img alt="Pad Thai Noodles" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl font-medium text-brand-900">Pad Thai Noodles</h3>
<span className="text-xs font-semibold text-orange-700 bg-orange-50 px-2 py-1 rounded">Most Loved</span>
</div>
<p className="text-brand-600 text-sm mb-4">Flat rice noodles stir-fried with tofu, bean sprouts, peanuts, and tangy tamarind sauce.</p>
<span className="text-xs text-brand-400 uppercase tracking-wide">Thai • Spicy</span>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
<div className="h-56 overflow-hidden">
<img alt="Gourmet Bao" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl font-medium text-brand-900">Signature Bao</h3>
<span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">Vegan</span>
</div>
<p className="text-brand-600 text-sm mb-4">Steamed fluffy buns filled with crispy mushroom tempura and pickled vegetables.</p>
<span className="text-xs text-brand-400 uppercase tracking-wide">Asian • Snack</span>
</div>
</div>
</div>

<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-brand-300 rounded-full text-brand-900 font-medium hover:bg-brand-200 transition" href="https://link.zomato.com" target="_blank">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
                    View Full Menu on Zomato
                </a>
</div>
</div>
</section>

<section className="py-16 bg-brand-900 text-brand-50 relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 pointer-events-none">
<span className="iconify" data-icon="lucide:utensils" data-width="400"></span>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="font-serif text-3xl font-medium mb-2">Unlimited Lunch Experience</h2>
<p className="text-brand-200 text-lg">Indulge in our 'All You Can Eat' service available for lunch and dinner.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="px-6 py-4 bg-white/10 backdrop-blur rounded-lg border border-white/10">
<span className="block text-2xl font-serif font-medium text-accent-400">Weekend Brunch</span>
<span className="text-sm text-brand-200">Special curated menu every Sat-Sun</span>
</div>
<div className="px-6 py-4 bg-white/10 backdrop-blur rounded-lg border border-white/10">
<span className="block text-2xl font-serif font-medium text-accent-400">Student Offers</span>
<span className="text-sm text-brand-200">Show ID for special treats</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-50 border-t border-brand-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-serif text-3xl text-center text-brand-900 tracking-tight mb-12">Designed for Comfort</h2>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:wifi" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">Free Wi-Fi</span>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:accessibility" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">Wheelchair Accessible</span>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:car" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">Valet Parking</span>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:baby" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">Kid Friendly</span>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:coffee" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">Great Coffee</span>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-accent-700">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<span className="text-sm font-medium text-brand-800">All Cards Accepted</span>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden" id="experience">
<div className="max-w-7xl mx-auto px-4 mb-8">
<h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight">The Ambience</h2>
<p className="text-brand-600 mt-2">Casual, cozy, and perfect for groups or solo dining.</p>
</div>

<div className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory">
<div className="flex-none w-80 sm:w-96 snap-center">
<img alt="Interior" className="rounded-xl h-64 w-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="mt-2 text-sm text-brand-500 font-medium">Main Dining Area</p>
</div>
<div className="flex-none w-80 sm:w-96 snap-center">
<img alt="Food Shot" className="rounded-xl h-64 w-full object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<p className="mt-2 text-sm text-brand-500 font-medium">Signature Platters</p>
</div>
<div className="flex-none w-80 sm:w-96 snap-center">
<img alt="Coffee" className="rounded-xl h-64 w-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="mt-2 text-sm text-brand-500 font-medium">Artisan Coffee</p>
</div>
<div className="flex-none w-80 sm:w-96 snap-center">
<img alt="Entrance" className="rounded-xl h-64 w-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="mt-2 text-sm text-brand-500 font-medium">Entrance</p>
</div>
</div>
</section>

<section className="py-20 bg-brand-100" id="reservations">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h2 className="font-serif text-4xl text-brand-900 tracking-tight mb-4">Reserve Your Spot</h2>
<p className="text-brand-600 mb-10 max-w-lg mx-auto">Lunch and dinner reservations are highly recommended. Or enjoy our crafted menu from the comfort of your home.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-200">
<h3 className="font-serif text-xl font-medium mb-4">Book a Table</h3>
<div className="flex flex-col gap-3">
<a className="w-full py-3 rounded-lg border border-red-200 bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition flex items-center justify-center gap-2" href="#">
                             Book on Zomato
                        </a>
<a className="w-full py-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-700 font-semibold hover:bg-orange-100 transition flex items-center justify-center gap-2" href="#">
                             Book on EazyDiner
                        </a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-200">
<h3 className="font-serif text-xl font-medium mb-4">Order Online</h3>
<div className="flex flex-col gap-3">
<a className="w-full py-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-700 font-semibold hover:bg-orange-100 transition flex items-center justify-center gap-2" href="#">
                             Order on Swiggy
                        </a>
<a className="w-full py-3 rounded-lg border border-red-200 bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition flex items-center justify-center gap-2" href="#">
                             Order on Zomato
                        </a>
</div>
</div>
</div>
<p className="text-xs text-brand-500 italic">No-contact delivery and Takeaway available.</p>
</div>
</section>

<section className="py-20 bg-brand-50">
<div className="max-w-7xl mx-auto px-4">
<h2 className="font-serif text-3xl text-center mb-12">What People Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm">
<div className="flex text-yellow-500 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-brand-700 text-sm italic mb-4">"The sushi platter was incredible! Best vegetarian place in Ahmedabad. Also, great coffee!"</p>
<p className="text-brand-900 font-semibold text-xs">— Priya S.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm">
<div className="flex text-yellow-500 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-brand-700 text-sm italic mb-4">"Rustic chic vibes are real. Loved the Bao and the presentation. Very friendly staff."</p>
<p className="text-brand-900 font-semibold text-xs">— Rahul M.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm">
<div className="flex text-yellow-500 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-brand-700 text-sm italic mb-4">"Great dessert options and plenty of parking. A perfect spot for family dinner."</p>
<p className="text-brand-900 font-semibold text-xs">— Anjali K.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-900 text-brand-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h2 className="font-serif text-3xl text-brand-50 tracking-tight mb-6">Visit Us</h2>
<address className="not-italic text-brand-200 mb-8 space-y-2">
<p className="font-medium text-white">The Shakahari by Awadhpuri</p>
<p>101, Garden, opp. Prahlad Nagar</p>
<p>Prahlad Nagar, Ahmedabad, Gujarat 380015</p>
</address>
<div className="flex flex-col gap-4 items-start">
<a className="flex items-center gap-3 text-white hover:text-accent-400 transition" href="tel:+918866572104">
<div className="bg-white/10 p-2 rounded-full">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<span className="font-medium">+91 88665 72104</span>
</a>
<a className="flex items-center gap-3 text-white hover:text-accent-400 transition" href="mailto:info@shakaharis.com">
<div className="bg-white/10 p-2 rounded-full">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<span>info@shakaharis.com</span>
</a>
<a className="flex items-center gap-3 text-white hover:text-accent-400 transition" href="https://wa.me/918866572104">
<div className="bg-white/10 p-2 rounded-full">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</div>
<span>Chat on WhatsApp</span>
</a>
</div>
</div>

<div className="h-80 bg-brand-800 rounded-2xl relative overflow-hidden group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9427670733733!2d72.5086!3d23.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2866632fdd%3A0xc54082269c799839!2sPrahlad%20Nagar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-brand-900 text-white text-xs px-3 py-1 rounded shadow-lg pointer-events-none">
                        Use Google Maps to navigate
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-950 border-t border-brand-800 text-brand-400 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-lg text-brand-200 block">SHAKAHARIS</span>
<span className="text-xs text-brand-500">by Awadhpuri</span>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Menu</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-white transition" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div className="text-center text-xs text-brand-700 mt-8">
            © 2023 Shakaharis. All rights reserved. Site by Senior Designer.
        </div>
</footer>



    </>
  );
}
