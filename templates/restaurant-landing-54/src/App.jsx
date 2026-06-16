import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "Mother's Hut",
"image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
"address": {
"@type": "PostalAddress",
"streetAddress": "NH34, Krishnanagar",
"addressLocality": "Nadia",
"addressRegion": "West Bengal",
"postalCode": "741101",
"addressCountry": "IN"
},
"servesCuisine": "Multi-Cuisine",
"priceRange": "$$"
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

<a className="group flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white">
<span className="font-semibold text-lg tracking-tighter">M</span>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">Mother's Hut</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#about">Our Story</a>
<a className="hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-orange-600 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-orange-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-orange-600 transition-colors" href="#contact">Location</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-900 shadow-sm transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700" href="#order">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Order Online
                </a>
<a className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-stone-800" href="#reserve">
                    Book Table
                </a>

<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative mt-20 flex min-h-[85vh] w-full items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Mother's Hut Dining" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-50"></div>
</div>
<div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>West Bengal's Favorite Family Stop</span>
</div>
<h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl md:leading-[1.1]">
                Homely Flavors.<br/>
<span className="text-orange-200">Cooked With Care.</span>
</h1>
<p className="mb-10 text-lg font-medium text-stone-200 sm:text-xl">
                Experience the warmth of a mother’s kitchen on NH34. Fresh, healthy, multi-cuisine meals celebrating taste and togetherness.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-8 text-sm font-medium text-white transition-all hover:bg-orange-700 sm:w-auto" href="#menu">
                    View Full Menu
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto" href="#order">
                    Order Online
                </a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24" id="about">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div className="relative overflow-hidden rounded-2xl bg-stone-200">
<img alt="Interior Ambiance" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-6 backdrop-blur-md">
<div className="flex items-start gap-4">
<div className="rounded-full bg-orange-100 p-3 text-orange-600">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900">Women-Led Kitchen</h3>
<p className="mt-1 text-sm text-stone-600">Our pride lies in our staff. Empowering local women who bring authentic, homely techniques to every dish served.</p>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">More than just a highway stop.</h2>
<p className="mt-6 text-lg text-stone-600">
                    Located conveniently on NH34, Mother's Hut isn't just a place to eat—it's a destination. We believe food should nourish the soul. That's why we source fresh local ingredients and cook without artificial preservatives.
                </p>
<div className="mt-10 grid gap-6 sm:grid-cols-2">
<div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
<iconify-icon className="mb-3 text-green-600" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-900">Farm Fresh</h3>
<p className="mt-2 text-sm text-stone-500">Locally sourced vegetables and meats ensuring the highest quality standards.</p>
</div>
<div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
<iconify-icon className="mb-3 text-orange-600" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-900">Family Style</h3>
<p className="mt-2 text-sm text-stone-500">Portions designed for sharing, bringing families closer over a good meal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="menu">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Our Curated Menu</h2>
<p className="mt-3 text-stone-500">From local Bengali delicacies to continental favorites.</p>
</div>

<div className="no-scrollbar mb-10 flex w-full gap-3 overflow-x-auto pb-4 sm:justify-center">
<button className="whitespace-nowrap rounded-full bg-stone-900 px-6 py-2 text-sm font-medium text-white">All Items</button>
<button className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-6 py-2 text-sm font-medium text-stone-600 hover:border-stone-300 hover:bg-stone-50">Biryani &amp; Rice</button>
<button className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-6 py-2 text-sm font-medium text-stone-600 hover:border-stone-300 hover:bg-stone-50">North Indian</button>
<button className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-6 py-2 text-sm font-medium text-stone-600 hover:border-stone-300 hover:bg-stone-50">Chinese</button>
<button className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-6 py-2 text-sm font-medium text-stone-600 hover:border-stone-300 hover:bg-stone-50">Desserts</button>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative rounded-2xl bg-stone-50 p-3 transition-colors hover:bg-white hover:shadow-lg hover:shadow-stone-200/50">
<div className="aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Kolkata Biryani" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="font-semibold text-stone-900">Kolkata Chicken Biryani</h3>
<span className="text-sm font-semibold text-orange-600">₹320</span>
</div>
<p className="mt-1 text-xs text-stone-500 line-clamp-2">Aromatic basmati rice cooked with tender chicken, potato, and signature spices.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white py-2 text-xs font-medium text-stone-900 transition-colors hover:bg-stone-50">
                            Add to Order
                        </button>
</div>
</div>

<div className="group relative rounded-2xl bg-stone-50 p-3 transition-colors hover:bg-white hover:shadow-lg hover:shadow-stone-200/50">
<div className="aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Paneer Butter Masala" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="font-semibold text-stone-900">Paneer Butter Masala</h3>
<span className="text-sm font-semibold text-orange-600">₹240</span>
</div>
<p className="mt-1 text-xs text-stone-500 line-clamp-2">Cottage cheese cubes tossed in a rich, creamy tomato and cashew gravy.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white py-2 text-xs font-medium text-stone-900 transition-colors hover:bg-stone-50">
                            Add to Order
                        </button>
</div>
</div>

<div className="group relative rounded-2xl bg-stone-50 p-3 transition-colors hover:bg-white hover:shadow-lg hover:shadow-stone-200/50">
<div className="aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Hakka Noodles" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="font-semibold text-stone-900">Veg Hakka Noodles</h3>
<span className="text-sm font-semibold text-orange-600">₹180</span>
</div>
<p className="mt-1 text-xs text-stone-500 line-clamp-2">Wok-tossed noodles with fresh julienned vegetables and light soy sauce.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white py-2 text-xs font-medium text-stone-900 transition-colors hover:bg-stone-50">
                            Add to Order
                        </button>
</div>
</div>

<div className="group relative rounded-2xl bg-stone-50 p-3 transition-colors hover:bg-white hover:shadow-lg hover:shadow-stone-200/50">
<div className="aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Mutton Kasha" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="font-semibold text-stone-900">Mutton Kasha</h3>
<span className="text-sm font-semibold text-orange-600">₹380</span>
</div>
<p className="mt-1 text-xs text-stone-500 line-clamp-2">Slow-cooked spicy mutton curry, a traditional Bengali Sunday favorite.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white py-2 text-xs font-medium text-stone-900 transition-colors hover:bg-stone-50">
                            Add to Order
                        </button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-orange-600" href="#">
                    Download Full Menu PDF
                    <iconify-icon icon="solar:download-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="gallery">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Gallery</h2>
<p className="mt-2 text-stone-500">A glimpse into our ambiance and culinary art.</p>
</div>
<a className="hidden text-sm font-medium text-orange-600 hover:text-orange-700 sm:block" href="#">Follow on Instagram →</a>
</div>
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 h-96 md:h-[600px]">
<div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
<img alt="Restaurant Interior" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-2xl">
<img alt="Plating" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-2xl">
<img alt="Detail" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 overflow-hidden rounded-2xl">
<img alt="Group Dining" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="reviews">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-center text-3xl font-semibold tracking-tight text-stone-900">Loved by Locals &amp; Travelers</h2>
<div className="mt-12 grid gap-8 sm:grid-cols-3">

<div className="rounded-2xl border border-stone-100 bg-stone-50 p-6">
<div className="mb-4 flex text-orange-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-600">"The most hygienic and tasty food stop on NH34. The Mutton Kasha reminded me of home. Highly recommended for families."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Anirban Das</p>
<p className="text-[10px] text-stone-500">Local Guide • Google Reviews</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-stone-100 bg-stone-50 p-6">
<div className="mb-4 flex text-orange-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-600">"Clean washrooms, ample parking, and the staff is so polite. The women-led initiative is wonderful to see. Great coffee too!"</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Priya Sen</p>
<p className="text-[10px] text-stone-500">TripAdvisor</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-stone-100 bg-stone-50 p-6">
<div className="mb-4 flex text-orange-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-600">"Perfect pitstop. The thali system is very affordable and filling. Service was quick despite the crowd."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Rahul M.</p>
<p className="text-[10px] text-stone-500">Zomato</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 py-24" id="contact">
<div className="mx-auto max-w-5xl px-6">
<div className="overflow-hidden rounded-3xl bg-stone-900 shadow-2xl">
<div className="grid lg:grid-cols-2">
<div className="p-10 lg:p-14">
<h2 className="text-2xl font-semibold tracking-tight text-white">Visit Us</h2>
<p className="mt-2 text-stone-400">We are open every day from 11:00 AM to 10:30 PM.</p>
<div className="mt-10 space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-orange-500" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="font-medium text-white">Mother's Hut</p>
<p className="text-sm text-stone-400">NH34, Near Krishnanagar Bypass,<br/>Nadia, West Bengal - 741101</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-orange-500" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="font-medium text-white">Call for Reservations</p>
<p className="text-sm text-stone-400">+91 98765 43210</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-orange-500" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="font-medium text-white">Email</p>
<p className="text-sm text-stone-400">hello@mothershut.com</p>
</div>
</div>
</div>
<div className="mt-10 flex gap-4">
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-orange-600 hover:text-white" href="#">
<iconify-icon icon="prime:twitter" width="18"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-orange-600 hover:text-white" href="#">
<iconify-icon icon="prime:facebook" width="18"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-orange-600 hover:text-white" href="#">
<iconify-icon icon="prime:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="bg-stone-800 p-10 lg:p-14">
<h3 className="mb-6 text-lg font-medium text-white">Book a Table</h3>
<form className="space-y-4">
<div className="grid gap-4 sm:grid-cols-2">
<input className="w-full rounded-lg border-0 bg-stone-700 px-4 py-3 text-sm text-white placeholder-stone-400 focus:ring-2 focus:ring-orange-500" placeholder="Name" type="text"/>
<input className="w-full rounded-lg border-0 bg-stone-700 px-4 py-3 text-sm text-white placeholder-stone-400 focus:ring-2 focus:ring-orange-500" placeholder="Phone" type="text"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<input className="w-full rounded-lg border-0 bg-stone-700 px-4 py-3 text-sm text-white placeholder-stone-400 focus:ring-2 focus:ring-orange-500" type="date"/>
<select className="w-full rounded-lg border-0 bg-stone-700 px-4 py-3 text-sm text-white focus:ring-2 focus:ring-orange-500">
<option>2 Guests</option>
<option>4 Guests</option>
<option>6+ Guests</option>
</select>
</div>
<button className="mt-2 w-full rounded-lg bg-orange-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700" type="button">Confirm Reservation</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded bg-stone-900 text-white">
<span className="font-semibold text-xs">M</span>
</div>
<span className="font-semibold tracking-tight text-stone-900">Mother's Hut</span>
</div>
<p className="text-sm text-stone-500 max-w-xs">Celebrating taste, warmth, and community with healthy, freshly prepared meals in the heart of West Bengal.</p>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-orange-600" href="#">Home</a></li>
<li><a className="hover:text-orange-600" href="#">About Us</a></li>
<li><a className="hover:text-orange-600" href="#">Menu</a></li>
<li><a className="hover:text-orange-600" href="#">Private Dining</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-orange-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-600" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-600" href="#">FSSAI License</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-stone-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-stone-400">© 2024 Mother's Hut Restaurant. All rights reserved.</p>
<div className="flex gap-4">

<iconify-icon className="text-stone-300" icon="solar:card-linear" width="20"></iconify-icon>
<iconify-icon className="text-stone-300" icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
