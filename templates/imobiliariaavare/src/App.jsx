import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a aria-label="Contact on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105" href="#">
<iconify-icon height="28" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</a>

<nav className="fixed top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900">A U R A</span>
</div>
<div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-slate-900" href="#home">Home</a>
<a className="transition-colors hover:text-slate-900" href="#properties">Properties</a>
<a className="transition-colors hover:text-slate-900" href="#spotlight">Spotlight</a>
<a className="transition-colors hover:text-slate-900" href="#about">Agency</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 md:block" href="#contact">Contact Us</a>
<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32" id="home">
<div className="mx-auto max-w-7xl px-6">
<div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden rounded-3xl">
<img alt="Modern Home" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Discover your perfect space
                    </h1>
<p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
                        Curated properties in the most desirable locations. Experience real estate with uncompromising standards.
                    </p>
</div>
</div>

<div className="relative -mt-16 mx-auto max-w-5xl px-4 sm:px-6 z-10">
<div className="rounded-2xl border border-slate-200/60 bg-white p-2 shadow-sm">
<div className="flex border-b border-slate-100 px-4 pt-2">
<button className="border-b-2 border-slate-900 pb-3 text-sm font-medium text-slate-900 px-2">Rent</button>
<button className="border-b-2 border-transparent pb-3 text-sm font-medium text-slate-500 px-4 hover:text-slate-900">Buy</button>
</div>
<form className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 md:gap-6">

<div className="flex flex-col">
<label className="mb-1 text-xs font-medium text-slate-500 uppercase tracking-wider">Location</label>
<div className="relative flex items-center border-b border-slate-200 py-2">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<input className="w-full bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400" placeholder="City, Neighborhood" type="text"/>
</div>
</div>

<div className="flex flex-col">
<label className="mb-1 text-xs font-medium text-slate-500 uppercase tracking-wider">Type</label>
<div className="relative flex items-center border-b border-slate-200 py-2">
<iconify-icon className="text-slate-400" icon="solar:home-2-linear" width="18"></iconify-icon>
<select className="w-full appearance-none bg-transparent px-2 text-sm text-slate-900 outline-none">
<option>All Types</option>
<option>Apartment</option>
<option>House</option>
<option>Villa</option>
<option>Penthouse</option>
</select>
<iconify-icon className="absolute right-0 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex flex-col">
<label className="mb-1 text-xs font-medium text-slate-500 uppercase tracking-wider">Price Range</label>
<div className="flex items-center gap-2 border-b border-slate-200 py-2">
<span className="text-sm text-slate-400">$</span>
<input className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" placeholder="Min" type="text"/>
<span className="text-slate-300">-</span>
<input className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" placeholder="Max" type="text"/>
</div>
</div>

<div className="flex items-end">
<button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-medium text-white transition-colors hover:bg-slate-800" type="button">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                                Search Properties
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="properties">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-10 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Featured Listings</h2>
<p className="mt-2 text-sm text-slate-500">Explore our handpicked selection of premium properties.</p>
</div>
<div className="hidden items-center gap-2 md:flex">
<button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
                        View all <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-shadow hover:shadow-md">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Villa" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">For Sale</div>
<button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 backdrop-blur-sm transition-colors hover:text-rose-500">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-2 text-xl font-semibold tracking-tight text-slate-900">$2,450,000</div>
<h3 className="mb-1 text-base font-medium text-slate-800">The Glass Residence</h3>
<p className="mb-4 text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Beverly Hills, CA
                        </p>
<div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 4 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 3 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 3,200 m²</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-shadow hover:shadow-md">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Apartment" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">For Rent</div>
<button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 backdrop-blur-sm transition-colors hover:text-rose-500">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-2 text-xl font-semibold tracking-tight text-slate-900">$8,500 <span className="text-sm font-normal text-slate-500">/mo</span></div>
<h3 className="mb-1 text-base font-medium text-slate-800">Downtown Penthouse</h3>
<p className="mb-4 text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Tribeca, NY
                        </p>
<div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 2 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 2.5 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 1,800 m²</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-shadow hover:shadow-md">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="House" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">For Sale</div>
<button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 backdrop-blur-sm transition-colors hover:text-rose-500">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-2 text-xl font-semibold tracking-tight text-slate-900">$1,150,000</div>
<h3 className="mb-1 text-base font-medium text-slate-800">Modern Minimalist Home</h3>
<p className="mb-4 text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Austin, TX
                        </p>
<div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 3 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 2 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 2,400 m²</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center md:hidden">
<button className="rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900">View all properties</button>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-slate-200/50 bg-white" id="spotlight">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Property Spotlight</h2>
<p className="mt-2 text-sm text-slate-500">An in-depth look at our most exclusive listing this week.</p>
</div>
<div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">

<div className="flex flex-col gap-4">
<div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
<img alt="Main View" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer border-2 border-slate-900">
<img alt="Thumb" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img alt="Thumb" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer opacity-70 hover:opacity-100 transition-opacity relative">
<img alt="Thumb" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center text-white text-sm font-medium">+5 Photos</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">About this property</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                            This stunning contemporary estate offers unparalleled luxury and breathtaking views. Featuring floor-to-ceiling windows, a state-of-the-art chef's kitchen, and custom finishes throughout. The outdoor space is an entertainer's dream with an infinity pool, sunken fire pit, and expansive decking.
                        </p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Location Map</h3>
<div className="aspect-[21/9] w-full rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
<div className="text-center flex flex-col items-center">
<iconify-icon className="text-slate-400 mb-2" icon="solar:map-linear" width="32"></iconify-icon>
<span className="text-xs text-slate-500">Interactive Map Embedded Here</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="mb-6 border-b border-slate-200 pb-6">
<div className="flex items-center justify-between mb-2">
<span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">For Sale</span>
<div className="flex gap-2">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="solar:share-linear" width="20"></iconify-icon></button>
<button className="text-slate-400 hover:text-rose-500 transition-colors"><iconify-icon icon="solar:heart-linear" width="20"></iconify-icon></button>
</div>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Oceanfront Oasis</h1>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Malibu Coast Highway, CA 90265
                        </p>
<div className="text-4xl font-semibold tracking-tight text-slate-900">$12,500,000</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-700">
<iconify-icon icon="solar:bed-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Bedrooms</div>
<div className="text-sm font-medium text-slate-900">5</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-700">
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Bathrooms</div>
<div className="text-sm font-medium text-slate-900">6.5</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-700">
<iconify-icon icon="solar:ruler-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Area</div>
<div className="text-sm font-medium text-slate-900">8,500 m²</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-700">
<iconify-icon icon="solar:garage-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Parking</div>
<div className="text-sm font-medium text-slate-900">4 Cars</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-900 mb-4">Inquire about this property</h3>
<form className="flex flex-col gap-4">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white" placeholder="Your Name" type="text"/>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white" placeholder="Email Address" type="email"/>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white" placeholder="Phone Number" type="tel"/>
<textarea className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white" placeholder="I'm interested in this property..." rows="3"></textarea>
<button className="mt-2 w-full rounded-xl bg-slate-900 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800" type="button">Request Details</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900 text-white" id="about">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-4 block">Our Agency</span>
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">Redefining modern real estate experiences.</h2>
<p className="text-slate-300 text-sm leading-relaxed mb-8">
                        At AURA, we believe finding a home should be as elegant as the properties we represent. Our team of dedicated professionals combines deep market knowledge with a refined aesthetic sensibility to match you with spaces that elevate your lifestyle.
                    </p>
<div className="grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">$2B+</div>
<div className="text-xs text-slate-400">Sales Volume</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">150+</div>
<div className="text-xs text-slate-400">Exclusive Listings</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">12</div>
<div className="text-xs text-slate-400">Years Experience</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl overflow-hidden">
<img alt="Agency Office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-800 rounded-2xl -z-10 hidden md:block"></div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">

<div className="col-span-1 lg:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-slate-900 block mb-4">A U R A</span>
<p className="text-sm text-slate-500 mb-6">Curating exceptional living spaces for those who appreciate the finer things.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Properties</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Buy a Home</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Rent a Home</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">New Developments</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>123 Design Boulevard<br/>Creative District, NY 10001</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-linear" width="18"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
<span>hello@aurarealestate.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">Subscribe for exclusive property drops and market insights.</p>
<div className="flex">
<input className="w-full rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:bg-white" placeholder="Email address" type="email"/>
<button className="rounded-r-xl border border-l-0 border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 text-xs text-slate-500">
<p>© 2023 AURA Real Estate. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
