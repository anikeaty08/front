import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
wine: {
50: '#fbf5f6',
100: '#f6e8eb',
200: '#edccd4',
300: '#e1a3b1',
400: '#cf6d84',
500: '#bb4360',
600: '#a22d4a',
700: '#87213a',
800: '#721e33',
900: '#611a2d',
950: '#390b16', // Deepest Wine
},
orange: {
50: '#fff8f1',
100: '#ffebd4',
500: '#f97316',
600: '#ea580c',
},
stone: {
50: '#fafaf9',
100: '#f5f5f4',
800: '#292524',
900: '#1c1917',
}
},
spacing: {
'128': '32rem',
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
      

<nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-8">
<div className="glass-panel max-w-7xl mx-auto rounded-2xl border border-wine-100 shadow-sm flex items-center justify-between px-6 py-3 transition-all duration-300">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-wine-950 rounded-lg flex items-center justify-center text-white">
<span className="font-serif text-lg pt-1">C</span>
</div>
<span className="font-serif text-xl tracking-tight text-wine-950 group-hover:opacity-70 transition-opacity">City Diner</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-wine-800/80">
<a className="hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-orange-600 transition-colors" href="#story">Our Story</a>
<a className="hover:text-orange-600 transition-colors" href="#hours">Hours &amp; Location</a>
</div>

<div className="flex items-center gap-4">
<button className="md:hidden text-wine-950">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-wine-950 text-orange-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-900/10" href="#">
<span>Order Online</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-4 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-wine-200 bg-white/80 shadow-sm text-xs font-medium text-wine-800 uppercase tracking-wider backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Serving Kansas City since 1987
                    </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-wine-950">
                        Classic Comfort, <br/>
<span className="text-orange-600 italic font-serif">Modern Taste.</span>
</h1>
<p className="text-lg text-wine-800 max-w-md font-light leading-relaxed">
                        Experience the nostalgia of a traditional American diner, elevated with fresh ingredients and a contemporary soul in the heart of River Market.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="px-6 py-3 bg-wine-950 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-lg shadow-wine-900/10" href="#menu">
                            View Full Menu
                        </a>
<a className="px-6 py-3 bg-white border border-wine-200 text-wine-950 rounded-xl font-medium hover:border-orange-500 transition-colors flex items-center gap-2 group" href="#location">
<iconify-icon className="text-wine-400 group-hover:text-orange-600 transition-colors" icon="solar:map-point-linear" width="18"></iconify-icon>
                            Find Us
                        </a>
</div>
</div>

<div className="relative h-[500px] w-full hidden md:block">
<div className="absolute inset-0 bg-wine-200 rounded-3xl overflow-hidden shadow-2xl shadow-wine-900/10">
<img alt="Pancakes" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out mix-blend-overlay" src="https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-wine-950/40 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-wine-100 max-w-xs">
<div className="flex items-start gap-4">
<div className="bg-orange-100 text-orange-600 p-3 rounded-full">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-wine-950">"Best Breakfast in KC"</p>
<p className="text-xs text-wine-600 mt-1">Voted by locals for 5 years running.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-wine-200 rounded-full blur-3xl opacity-20 filter"></div>
</header>

<section className="py-20 px-4 bg-white border-y border-wine-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-wine-950">The City Experience</h2>
<p className="text-wine-600 max-w-md">More than just coffee and eggs. We craft mornings worth waking up for.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-wine-200 flex items-center justify-center hover:bg-wine-50 text-wine-700 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-wine-200 flex items-center justify-center hover:bg-wine-50 text-wine-700 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-wine-50/50 border border-wine-100 hover:border-orange-200 hover:shadow-lg hover:shadow-wine-900/5 transition-all duration-300">
<div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm border border-wine-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-wine-900">Locally Roasted Coffee</h3>
<p className="text-sm text-wine-700 leading-relaxed">
                        We partner with KC's finest roasters to bring you a bold, smooth cup every single morning. Bottomless, of course.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-wine-50/50 border border-wine-100 hover:border-orange-200 hover:shadow-lg hover:shadow-wine-900/5 transition-all duration-300">
<div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm border border-wine-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-wine-900">Scratch Kitchen</h3>
<p className="text-sm text-wine-700 leading-relaxed">
                        From our biscuits to our sausage gravy, everything is made in-house daily. No shortcuts, just flavor.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-wine-50/50 border border-wine-100 hover:border-orange-200 hover:shadow-lg hover:shadow-wine-900/5 transition-all duration-300">
<div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm border border-wine-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-wine-900">River Market Vibe</h3>
<p className="text-sm text-wine-700 leading-relaxed">
                        Located in the historic River Market, we are the perfect start to a day of exploring the city.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-wine-50" id="menu">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 space-y-4">
<span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">From the Kitchen</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-wine-950">Breakfast Favorites</h2>
<p className="text-wine-600">Served all day, every day.</p>
</div>
<div className="grid gap-4">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl border border-wine-100 hover:border-orange-300 hover:ring-1 hover:ring-orange-300 transition-all cursor-default shadow-sm">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-lg bg-wine-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?q=80&amp;w=2581&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-lg font-semibold text-wine-900 group-hover:text-orange-600 transition-colors">The City Breakfast</h3>
<p className="text-sm text-wine-500 mt-1 max-w-sm">Two eggs any style, choice of meat, hash browns or grits, and toast or biscuit.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
<span className="text-xs font-medium px-2 py-1 rounded bg-orange-100 text-orange-700">Popular</span>
<span className="font-serif text-xl font-medium text-wine-900">$12</span>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl border border-wine-100 hover:border-orange-300 hover:ring-1 hover:ring-orange-300 transition-all cursor-default shadow-sm">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-lg bg-wine-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-lg font-semibold text-wine-900 group-hover:text-orange-600 transition-colors">Biscuits &amp; Gravy</h3>
<p className="text-sm text-wine-500 mt-1 max-w-sm">House-baked buttermilk biscuits smothered in our signature spicy sausage gravy.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
<div className="flex gap-2">

</div>
<span className="font-serif text-xl font-medium text-wine-900">$10</span>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl border border-wine-100 hover:border-orange-300 hover:ring-1 hover:ring-orange-300 transition-all cursor-default shadow-sm">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-lg bg-wine-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-lg font-semibold text-wine-900 group-hover:text-orange-600 transition-colors">Reuben Sandwich</h3>
<p className="text-sm text-wine-500 mt-1 max-w-sm">Corned beef, swiss cheese, sauerkraut, 1000 island dressing on rye.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
<span className="font-serif text-xl font-medium text-wine-900">$14</span>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl border border-wine-100 hover:border-orange-300 hover:ring-1 hover:ring-orange-300 transition-all cursor-default shadow-sm">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-lg bg-wine-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-lg font-semibold text-wine-900 group-hover:text-orange-600 transition-colors">The Huge Burger</h3>
<p className="text-sm text-wine-500 mt-1 max-w-sm">1/2 lb beef patty, lettuce, tomato, onion, pickle, choice of cheese.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
<span className="text-xs font-medium px-2 py-1 rounded bg-wine-100 text-wine-600">Lunch</span>
<span className="font-serif text-xl font-medium text-wine-900">$13</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-wine-300 text-sm font-medium hover:bg-wine-900 hover:text-white hover:border-wine-900 transition-all text-wine-900">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                    Download Full Menu
                </button>
</div>
</div>
</section>

<section className="py-12 overflow-hidden bg-white">
<div className="flex gap-4 min-w-full px-4 justify-center">
<div className="w-64 h-80 rounded-2xl overflow-hidden relative group border border-wine-100">
<div className="absolute inset-0 bg-wine-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-64 h-80 rounded-2xl overflow-hidden relative group mt-12 border border-wine-100">
<div className="absolute inset-0 bg-wine-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=2581&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-64 h-80 rounded-2xl overflow-hidden relative group border border-wine-100">
<div className="absolute inset-0 bg-wine-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-64 h-80 rounded-2xl overflow-hidden relative group mt-12 hidden md:block border border-wine-100">
<div className="absolute inset-0 bg-wine-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 px-4 bg-wine-950 text-wine-50 relative overflow-hidden" id="hours">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-wine-900 to-wine-950 opacity-50 z-0"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
<div className="space-y-12">
<div>
<h2 className="text-4xl tracking-tight mb-6">Visit Us</h2>
<p className="text-wine-200/80 max-w-sm">We are located in the heart of the River Market district. Walk-ins always welcome.</p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-2 mb-3 text-orange-500">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase tracking-wider">Hours</span>
</div>
<ul className="space-y-2 text-wine-200 text-sm">
<li className="flex justify-between border-b border-wine-800 pb-2">
<span>Mon - Fri</span>
<span className="text-white">6:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between border-b border-wine-800 pb-2">
<span>Sat - Sun</span>
<span className="text-white">7:00 AM - 3:00 PM</span>
</li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-3 text-orange-500">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase tracking-wider">Location</span>
</div>
<address className="not-italic text-wine-200 text-sm space-y-1">
<p>301 Grand Blvd</p>
<p>Kansas City, MO 64106</p>
<p className="mt-4 text-white hover:text-orange-500 transition-colors cursor-pointer">
<a href="tel:816-471-5151">(816) 471-5151</a>
</p>
</address>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors" href="https://maps.google.com" target="_blank">
                        Get Directions
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-80 md:h-auto bg-wine-900/50 rounded-2xl overflow-hidden border border-wine-800 grayscale hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.862274486259!2d-94.58309192404764!3d39.0857310716854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f08cb3660505%3A0x6b4f0b2f15594b2a!2sCity%20Diner!5e0!3m2!1sen!2sus!4v1709425000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-wine-50 border-t border-wine-200 py-12 px-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-serif text-xl tracking-tight text-wine-950">City Diner</span>
<span className="text-wine-400 text-sm">© 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-wine-400 hover:text-wine-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-wine-400 hover:text-wine-900 transition-colors" href="#">
<iconify-icon icon="brandico:facebook-rect" width="18"></iconify-icon>
</a>
<a className="text-wine-400 hover:text-wine-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-xs text-wine-500 font-medium">
<a className="hover:text-wine-900" href="#">Privacy</a>
<a className="hover:text-wine-900" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
