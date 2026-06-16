import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
50: '#fff1f0',
100: '#ffdfdd',
500: '#db594b', // Original brand color
600: '#b93c30',
900: '#7f1d1d',
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

<a className="flex flex-col leading-none group" href="#">
<span className="font-display text-2xl font-semibold tracking-wide text-stone-900 group-hover:text-brand-500 transition-colors uppercase">Waterfront</span>
<span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-stone-500 font-medium">Pizza &amp; Mediterranean</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-brand-500 transition-colors" href="#menu">Menu</a>
<a className="hover:text-brand-500 transition-colors" href="#catering">Catering</a>
<a className="hover:text-brand-500 transition-colors" href="#hookah">Hookah</a>
<a className="hover:text-brand-500 transition-colors" href="#story">Our Story</a>
<a className="hover:text-brand-500 transition-colors" href="#events">Events</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#location">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Foster City</span>
</a>
<button className="bg-brand-500 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-500/20">
<span>Order Online</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Waterfront Pizza Ambience" className="w-full h-full object-cover object-center brightness-50 scale-105" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-stone-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Open Daily 11:30 AM - 9:00 PM
                </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1] text-shadow">
                    BEST PIZZA IN <br/>
<span className="text-brand-500">FOSTER CITY</span>
</h1>
<p className="text-stone-200 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                    Step into a Mediterranean haven where flavor meets relaxation. Savor mouthwatering pizzas, authentic kabobs, and relax by the water.
                </p>
<div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
<button className="bg-white text-stone-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-stone-100 transition-all hover:-translate-y-1 flex items-center gap-2">
                        View Menu
                        <iconify-icon icon="solar:clipboard-list-linear" width="18"></iconify-icon>
</button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center gap-2">
                        Book Table
                        <iconify-icon icon="solar:chair-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<section className="bg-white border-b border-stone-100 relative z-20">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-100">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:scooter-linear" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-800">Fast Delivery</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:bag-heart-linear" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-800">Easy Takeout</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:chef-hat-linear" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-800">Authentic Taste</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:armchair-2-linear" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-800">Outdoor Seating</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="menu">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-brand-500 text-xs font-bold tracking-widest uppercase mb-2 block font-display">Featured Items</span>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight font-display">Crafted for Taste</h2>
<p className="text-stone-500 mt-3 text-sm max-w-md">From our wood-fired pizzas to our authentic Mediterranean plates, explore the favorites.</p>
</div>
<a className="text-stone-900 border-b border-stone-200 pb-1 text-sm font-medium hover:border-stone-900 transition-all flex items-center gap-2" href="#">
                View Full Menu <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative overflow-hidden rounded-xl h-48 w-full bg-stone-100">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 rounded">POPULAR</div>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-lg font-medium text-stone-900 font-display">Combination Pizza</h3>
<p className="text-stone-500 text-xs leading-relaxed mt-1 mb-3 line-clamp-2">Salami, pepperoni, mushrooms, feta, sausage, linguica, beef, onions &amp; bell peppers.</p>
<div className="flex items-center justify-between">
<span className="text-brand-600 font-semibold text-sm">$18.99</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-brand-500 hover:text-white transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative overflow-hidden rounded-xl h-48 w-full bg-stone-100">
<img alt="Kebob" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626804475297-411d8c6b7eb6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-lg font-medium text-stone-900 font-display">Chicken Kebob Plate</h3>
<p className="text-stone-500 text-xs leading-relaxed mt-1 mb-3 line-clamp-2">Marinated chicken breast skewers served with rice, hummus, and salad.</p>
<div className="flex items-center justify-between">
<span className="text-brand-600 font-semibold text-sm">$16.95</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-brand-500 hover:text-white transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative overflow-hidden rounded-xl h-48 w-full bg-stone-100">
<img alt="Hummus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded">VEG</div>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-lg font-medium text-stone-900 font-display">Classic Hummus</h3>
<p className="text-stone-500 text-xs leading-relaxed mt-1 mb-3 line-clamp-2">Creamy blend of chickpeas, tahini, lemon, and garlic. Served with pita.</p>
<div className="flex items-center justify-between">
<span className="text-brand-600 font-semibold text-sm">$8.95</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-brand-500 hover:text-white transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative overflow-hidden rounded-xl h-48 w-full bg-stone-100">
<img alt="Greek Salad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded">VEG</div>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-lg font-medium text-stone-900 font-display">Greek Salad</h3>
<p className="text-stone-500 text-xs leading-relaxed mt-1 mb-3 line-clamp-2">Crisp romaine, tomatoes, cucumbers, onions, olives, and feta cheese.</p>
<div className="flex items-center justify-between">
<span className="text-brand-600 font-semibold text-sm">$12.50</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-brand-500 hover:text-white transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 py-24 border-y border-stone-200" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Pizza Oven" className="rounded-2xl shadow-lg translate-y-8 w-full h-64 object-cover" src="https://images.unsplash.com/photo-1542384557-0824d90731ee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Hookah Lounge" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full opacity-60"></div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<span className="text-brand-500 text-xs font-bold tracking-widest uppercase font-display">Our Experience</span>
<h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight font-display leading-[1.1]">Waterfront Bliss &amp; <br/>Authentic Flavors</h2>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                        Nestled in the heart of Foster City, Waterfront Pizza is more than just a pizzeria. We blend the vibrant traditions of Mediterranean cuisine with the comfort of classic Italian pizza. 
                    </p>
<p className="text-stone-600 leading-relaxed font-light">
                        Whether you are here for a feast or to unwind with our premium Hookah selection on our scenic patio, we promise an unforgettable vibe by the water.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg shadow-sm text-brand-500">
<iconify-icon icon="solar:wineglass-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 text-sm">Fine Hookah</h4>
<p className="text-xs text-stone-500 mt-1">Premium flavors on our patio.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg shadow-sm text-brand-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 text-sm">Catering</h4>
<p className="text-xs text-stone-500 mt-1">Perfect for events of any size.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight font-display">Loved by Foster City</h2>
<div className="flex justify-center gap-1 text-brand-500 mt-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-brand-100 transition-colors">
<div className="mb-4 text-brand-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"Amazing food with amazing views of the waterfront!! Quick service and great vegetarian options. We ordered the mezza family platter and veggie pizza :)"</p>
<div className="flex items-center gap-3 border-t border-stone-100 pt-4">
<div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">NS</div>
<span className="text-xs font-medium text-stone-900">Neha S.</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-brand-100 transition-colors md:-translate-y-4">
<div className="mb-4 text-brand-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"Went for lunch and hookah. Great to have an area to smoke hookah that is outdoors with good nature view. Good pizza and meat options and nice bar."</p>
<div className="flex items-center gap-3 border-t border-stone-100 pt-4">
<div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">IY</div>
<span className="text-xs font-medium text-stone-900">Iden Y.</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-brand-100 transition-colors">
<div className="mb-4 text-brand-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"This is 100% the best pizza in Foster City. The food is perfect, fast, and the views are incredible if you are sitting on the outside. 10/10"</p>
<div className="flex items-center gap-3 border-t border-stone-100 pt-4">
<div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">BS</div>
<span className="text-xs font-medium text-stone-900">Brawl S.</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-300 py-20 relative overflow-hidden" id="location">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div>
<span className="text-brand-500 text-xs font-bold tracking-widest uppercase mb-2 block font-display">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2 font-display">Find us by the Water</h2>
<p className="text-stone-400 text-sm max-w-sm">We don't take reservations via email. For 20+ group reservations, please call us directly.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-500 bg-stone-800 p-2 rounded-lg">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 font-display tracking-wide">Address</h4>
<p className="text-sm leading-relaxed max-w-xs">
                                969 Edgewater Blvd D,<br/>
                                Foster City, CA 94404
                            </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-500 bg-stone-800 p-2 rounded-lg">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 font-display tracking-wide">Contact</h4>
<p className="text-sm">(650) 573-6634</p>
<p className="text-xs text-stone-500 mt-1">WFPIZZAFC@gmail.com</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-500 bg-stone-800 p-2 rounded-lg">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 font-display tracking-wide">Hours</h4>
<p className="text-sm">Open Daily: 11:30 AM - 9:00 PM</p>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors flex justify-center items-center gap-2" href="https://maps.google.com/?q=969+Edgewater+Blvd+D,+Foster+City,+CA" target="_blank">
                        Get Directions
                        <iconify-icon icon="solar:map-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="h-96 w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.034768378124!2d-122.272806!3d37.5440501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f2c161d1deb%3A0x8b27a69b769773f1!2s969%20Edgewater%20Blvd%20D%2C%20Foster%20City%2C%20CA%2094404!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)', opacity: '0.8'}} width="100%">
</iframe>
<div className="absolute inset-0 pointer-events-none border-4 border-stone-800/50 rounded-2xl"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2026 WATERFRONT PIZZA LLC. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0 items-center">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
<div className="h-4 w-px bg-stone-700 mx-2"></div>
<a className="hover:text-brand-500 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon> Facebook
                </a>
</div>
</div>
</section>

    </>
  );
}
