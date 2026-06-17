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
sans: ['Inter', 'sans-serif'],
},
colors: {
royal: {
50: '#f0f4ff',
100: '#e0eaff',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
},
phonepe: {
bg: '#121212',
purple: '#5f259f'
}
}
}
}
}



        const ADMIN_PHONE = "918076273631"; 

        // 1. Submit Property Listing
        function submitProperty() {
            const type = document.getElementById('list-type').value;
            const loc = document.getElementById('list-loc').value;
            const price = document.getElementById('list-price').value;
            const area = document.getElementById('list-area').value;
            const name = document.getElementById('owner-name').value;
            const phone = document.getElementById('owner-phone').value;

            if(!name || !phone || !loc) {
                alert("Please fill required details (Location, Name, Phone).");
                return;
            }

            const message = `*New Property Listing Request*%0A%0AOwner: ${name}%0APhone: ${phone}%0AType: ${type}%0ALocation: ${loc}%0APrice: ${price}%0AArea: ${area}%0A%0APlease verify and list my property.`;
            const url = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
            window.open(url, '_blank');
        }

        // 2. Property Inquiry
        function sendPropertyInquiry(propertyName) {
            const message = `Hi, I am interested in: *${propertyName}*. Please share more details.`;
            const url = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
            window.open(url, '_blank');
        }

        // 3. Login Logic
        function performLogin() {
            const name = document.getElementById('login-name').value;
            const phone = document.getElementById('login-phone').value;
            if(!name || !phone) {
                alert("Please enter Name and Phone number");
                return;
            }
            const message = `*New User Login*%0A%0AUser Name: ${name}%0AUser Phone: ${phone}%0A%0AUser has registered on the website.`;
            window.open(`https://wa.me/${ADMIN_PHONE}?text=${message}`, '_blank');
            toggleModal('login-modal');
        }

        // 4. Hero Quick Search
        function sendQuickSearch() {
            const area = document.getElementById('hero-search').value;
            const type = document.getElementById('hero-type').value;
            let msg = "Hi, I am looking for property.";
            if(area) msg += ` Area: ${area}.`;
            if(type && type !== "Property Type") msg += ` Type: ${type}.`;
            window.open(`https://wa.me/${ADMIN_PHONE}?text=${msg}`, '_blank');
        }

        // Modal Logic
        function toggleModal(modalID){
            const modal = document.getElementById(modalID);
            const body = document.querySelector('body');
            if(modal.classList.contains('opacity-0')){
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modal.querySelector('.modal-container').classList.remove('scale-95');
                modal.querySelector('.modal-container').classList.add('scale-100');
                body.classList.add('modal-active');
            } else {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.querySelector('.modal-container').classList.remove('scale-100');
                modal.querySelector('.modal-container').classList.add('scale-95');
                body.classList.remove('modal-active');
            }
        }
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(m => {
                    if(!m.classList.contains('opacity-0')) toggleModal(m.id);
                });
            }
        };
    
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
      

<nav className="glass-nav fixed w-full z-50 top-0 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md bg-royal-700 text-white shadow-royal-200">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight leading-none text-blue-900">Ghaziabad Dream Homes</span>
<span className="text-xs font-medium tracking-wide text-royal-700">Apne Sapno Ka Ghar</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors text-blue-900 hover:text-royal-700" href="#buy">Buy</a>
<a className="text-sm font-medium text-blue-500 transition-colors hover:text-royal-700" href="#buy">Rent</a>
<a className="text-sm font-medium transition-colors text-royal-700 hover:text-royal-800" href="#list-property">Post Property</a>
<a className="text-sm font-medium text-blue-500 transition-colors hover:text-royal-700" href="#inquiry">Contact</a>
</div>

<div className="flex items-center gap-3">
<div className="hidden lg:flex flex-col items-end mr-2">
<span className="text-xs font-medium text-blue-400">Call us today</span>
<a className="text-sm font-semibold tracking-tight flex items-center gap-1 text-blue-900 hover:text-royal-700" href="tel:8076273631">
<iconify-icon className="text-royal-700" icon="solar:phone-calling-linear"></iconify-icon>
                            8076273631
                        </a>
</div>
<button className="hidden sm:flex text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm bg-royal-700 hover:bg-royal-800 text-white shadow-royal-200" onclick="toggleModal('login-modal')">
                        Login / Register
                    </button>
<button className="md:hidden p-2 text-blue-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent from-royal-50"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 bg-yellow-100"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-6 bg-white border-blue-200">
<span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
<span className="text-xs font-medium text-blue-600">No. 1 Property Portal in Ghaziabad</span>
</div>
<h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold tracking-tight max-w-4xl mr-auto mb-6 ml-auto text-blue-900">
                Discover Your <span className="text-royal-700">Dream Home</span> <br className="hidden md:block"/> in the Heart of Ghaziabad
            </h1>
<p className="md:text-lg leading-relaxed text-base text-blue-500 max-w-2xl mr-auto mb-10 ml-auto">
                Explore thousands of verified listings in Raj Nagar Extension, Indirapuram, Vaishali, and NH-24. Buy, sell, or rent with confidence.
            </p>

<div className="max-w-4xl mx-auto p-2 rounded-2xl shadow-xl border bg-white shadow-blue-200/50 border-blue-100">
<div className="grid grid-cols-1 md:grid-cols-12 gap-2">
<div className="md:col-span-5 relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<input className="w-full h-12 pl-11 pr-4 rounded-xl text-sm font-medium placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-royal-100 transition-all border-none bg-blue-50 text-blue-900" id="hero-search" placeholder="Search Area (e.g. Vaishali)" type="text"/>
</div>
<div className="md:col-span-4 relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
<iconify-icon className="" icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<select className="w-full h-12 pl-11 pr-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-royal-100 appearance-none cursor-pointer border-none bg-blue-50 text-blue-900" id="hero-type">
<option>Property Type</option>
<option>Flat (1/2/3 BHK)</option>
<option>Builder Floor</option>
<option>Villa / House</option>
<option>Plot / Land</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="md:col-span-3">
<button className="w-full h-12 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 bg-royal-700 hover:bg-royal-800 text-white" onclick="sendQuickSearch()">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="2" width="18"></iconify-icon>
                            Search
                        </button>
</div>
</div>
</div>
<div className="mt-8 flex flex-wrap justify-center gap-2">
<span className="text-xs font-medium mr-2 py-1.5 text-blue-400">Popular:</span>
<button className="px-3 py-1.5 rounded-full border text-xs font-medium hover:border-royal-500 transition-colors border-blue-200 bg-white text-blue-600 hover:text-royal-700">Raj Nagar Extension</button>
<button className="px-3 py-1.5 rounded-full border text-xs font-medium hover:border-royal-500 transition-colors border-blue-200 bg-white text-blue-600 hover:text-royal-700">Indirapuram</button>
<button className="px-3 py-1.5 rounded-full border text-xs font-medium hover:border-royal-500 transition-colors border-blue-200 bg-white text-blue-600 hover:text-royal-700">Crossings Republik</button>
</div>
</div>
</section>

<section className="pt-20 pb-20 relative bg-white" id="list-property">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide mb-3 bg-cyan-100 text-cyan-700">LIST YOUR PROPERTY</span>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-blue-900">Sell or Rent Your Property</h2>
<p className="text-blue-500 max-w-2xl mx-auto">Fill in the details below to list your flat, house, or plot on our portal. Thousands of buyers are waiting.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 rounded-2xl border shadow-xl p-6 md:p-8 bg-white border-blue-200 shadow-blue-100">
<h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-blue-900">
<iconify-icon className="text-royal-700" icon="solar:document-add-linear"></iconify-icon> Property Details
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">I want to</label>
<div className="flex gap-2 p-1 rounded-xl border bg-blue-50 border-blue-200">
<button className="flex-1 py-2 rounded-lg shadow-sm text-xs font-semibold border bg-white text-royal-700 border-blue-100">Sell</button>
<button className="flex-1 py-2 rounded-lg text-xs font-medium text-blue-500 transition-colors hover:bg-white">Rent / Lease</button>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Property Type</label>
<select className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 cursor-pointer bg-blue-50 border-blue-200 text-blue-900" id="list-type">
<option>Flat / Apartment</option>
<option>Independent House / Villa</option>
<option>Builder Floor</option>
<option>Residential Plot</option>
<option>Commercial Shop / Office</option>
</select>
</div>

<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Project / Society / Locality</label>
<input className="focus:outline-none focus:border-royal-500 text-sm font-medium w-full h-11 border rounded-lg pr-3 pl-3 text-blue-900 bg-blue-50 border-blue-200" id="list-loc" placeholder="e.g. Gaur City 2, Raj Nagar Extension" type="text"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Expected Price (₹)</label>
<input className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="list-price" placeholder="e.g. 65 Lakhs" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Area (Sq. Ft.)</label>
<input className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="list-area" placeholder="e.g. 1250" type="text"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Bedrooms</label>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-lg border hover:border-royal-500 text-sm font-medium transition-colors border-blue-200 hover:bg-royal-50">1</button>
<button className="w-10 h-10 rounded-lg border border-royal-500 text-sm font-bold transition-colors bg-royal-50 text-royal-700">2</button>
<button className="w-10 h-10 rounded-lg border hover:border-royal-500 text-sm font-medium transition-colors border-blue-200 hover:bg-royal-50">3</button>
<button className="w-10 h-10 rounded-lg border hover:border-royal-500 text-sm font-medium transition-colors border-blue-200 hover:bg-royal-50">4+</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Furnishing</label>
<select className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 cursor-pointer bg-blue-50 border-blue-200 text-blue-900">
<option>Semi-Furnished</option>
<option>Fully Furnished</option>
<option>Unfurnished</option>
</select>
</div>
<div className="md:col-span-2 pt-4 border-t mt-2 border-blue-100">
<h4 className="text-sm font-semibold mb-4 text-blue-900">Owner Details</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="owner-name" placeholder="Your Name" type="text"/>
<input className="w-full h-11 px-3 rounded-lg border text-sm font-medium focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="owner-phone" placeholder="Mobile Number" type="tel"/>
</div>
</div>
</div>
<button className="w-full mt-8 font-semibold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 bg-royal-700 hover:bg-royal-800 text-white shadow-royal-200" onclick="submitProperty()">
<span>Submit Listing Request</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-xs mt-4 text-blue-400">Details will be sent to admin for verification before publishing.</p>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24">
<div className="rounded-2xl p-6 mb-6 bg-royal-900 text-white">
<h3 className="text-lg font-semibold mb-2">Why List With Us?</h3>
<ul className="space-y-3 text-sm text-royal-100">
<li className="flex gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Verified Buyers</li>
<li className="flex gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Social Media Promotion</li>
<li className="flex gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Instant WhatsApp Leads</li>
</ul>
</div>

<div className="bg-phonepe-bg rounded-3xl p-6 border shadow-2xl relative overflow-hidden flex flex-col items-center border-blue-800">

<div className="w-full flex justify-center items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-phonepe-green flex items-center justify-center text-lg font-bold text-white">
<span className="text-base">Pe</span>
</div>
<span className="font-semibold text-lg tracking-tight text-white">PhonePe</span>
</div>
<p className="text-phonepe-green text-xs font-bold tracking-widest uppercase mb-6">ACCEPTED HERE</p>
<p className="text-xs mb-4 text-blue-300">Scan &amp; Pay Using PhonePe App</p>

<div className="relative w-48 h-48 p-2 rounded-xl mb-6 bg-white">
<div className="w-full h-full border-2 relative overflow-hidden border-black">

<img alt="Payment QR" className="w-full h-full object-contain" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=upi://pay?pa=9315062667@ybl&amp;pn=Ms%20Payal%20Sagar&amp;am=199&amp;cu=INR"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center p-0.5 shadow-sm bg-white">
<div className="w-full h-full rounded-full border flex items-center justify-center bg-white border-blue-200">
<span className="font-bold text-xs text-black">Pe</span>
</div>
</div>
</div>
</div>

<h3 className="text-base font-medium tracking-wide mb-8 text-white">Ms Payal Sagar</h3>

<div className="w-full border-t pt-4 text-center border-blue-800">
<p className="text-[10px] text-blue-500">© 2026, All rights reserved, PhonePe Ltd (Formerly known as 'PhonePe Private Ltd')</p>
</div>
</div>
<div className="mt-4 text-center">
<p className="text-sm font-medium text-blue-500 mb-2">Listing Fee: <span className="font-bold text-blue-900">₹199</span></p>
<button className="w-full py-3 rounded-xl border hover:border-cyan-500 text-sm font-semibold transition-all border-blue-200 bg-white text-blue-700 hover:text-cyan-600" onclick="window.location.href='https://wa.me/918076273631?text=Hi, I have paid the listing fee of 199 via PhonePe.'">
                                 I Have Paid
                             </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-50 pt-20 pb-20" id="buy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-blue-900">Featured Properties</h2>
<p className="text-sm text-blue-500 mt-2">Handpicked premium flats and houses.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-blue-200 hover:shadow-blue-200/50">
<div className="relative h-60 overflow-hidden bg-blue-200">
<span className="absolute top-4 left-4 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full z-10 bg-white/90 text-royal-700">Ready to Move</span>
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 p-2 rounded-lg shadow-sm bg-white">
<p className="text-sm font-bold text-blue-900">₹65 Lacs</p>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight mb-1 text-blue-900">3 BHK Luxury Apartment</h3>
<p className="text-sm text-blue-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Raj Nagar Extension
                        </p>
<div className="flex gap-2 mt-4">
<a className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-royal-50 hover:bg-royal-100 text-royal-700" href="tel:8076273631">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
                            </a>
<button className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700" onclick="sendPropertyInquiry('3 BHK Luxury Apartment - Raj Nagar')">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp
                            </button>
</div>
</div>
</div>

<div className="group rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-blue-200 hover:shadow-blue-200/50">
<div className="relative h-60 overflow-hidden bg-blue-200">
<span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full z-10 bg-royal-700 text-white">Premium</span>
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 p-2 rounded-lg shadow-sm bg-white">
<p className="text-sm font-bold text-blue-900">₹1.2 Cr</p>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight mb-1 text-blue-900">Independent Builder Floor</h3>
<p className="text-sm text-blue-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Indirapuram, Shakti Khand
                        </p>
<div className="flex gap-2 mt-4">
<a className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-royal-50 hover:bg-royal-100 text-royal-700" href="tel:8076273631">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
                            </a>
<button className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700" onclick="sendPropertyInquiry('Independent Builder Floor - Indirapuram')">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp
                            </button>
</div>
</div>
</div>

<div className="group rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-blue-200 hover:shadow-blue-200/50">
<div className="relative h-60 overflow-hidden bg-blue-200">
<span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full z-10 bg-blue-900 text-white">Investment</span>
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 p-2 rounded-lg shadow-sm bg-white">
<p className="text-sm font-bold text-blue-900">₹85 Lacs</p>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight mb-1 text-blue-900">Highway Facing High Rise</h3>
<p className="text-sm text-blue-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> NH-24, Ghaziabad
                        </p>
<div className="flex gap-2 mt-4">
<a className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-royal-50 hover:bg-royal-100 text-royal-700" href="tel:8076273631">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
                            </a>
<button className="flex-1 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700" onclick="sendPropertyInquiry('Highway Facing High Rise - NH24')">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t bg-blue-900 text-blue-300 border-blue-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="flex justify-center items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-royal-600 text-white">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Ghaziabad Dream Homes</span>
</div>
<p className="text-sm mb-6 text-blue-400">Apne Sapno Ka Ghar. Contact: 8076273631</p>
<p className="text-xs text-blue-600">© 2023 Ghaziabad Dream Homes. All rights reserved.</p>
</div>
</footer>

<div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-[60]" id="login-modal">
<div className="modal-overlay absolute w-full h-full opacity-50 bg-blue-900"></div>
<div className="modal-container w-11/12 md:max-w-md mx-auto rounded-2xl shadow-2xl z-50 overflow-y-auto transform scale-95 transition-transform duration-300 bg-white">
<div className="modal-content py-6 text-left px-6">

<div className="flex justify-between items-center pb-3">
<p className="text-xl font-bold text-blue-900">Welcome Back</p>
<div className="modal-close cursor-pointer z-50 p-2 rounded-full transition-colors bg-blue-100 hover:bg-blue-200" onclick="toggleModal('login-modal')">
<iconify-icon className="text-xl block text-blue-600" icon="solar:close-circle-linear"></iconify-icon>
</div>
</div>

<p className="text-sm text-blue-500 mb-6">Login to save your favorite properties.</p>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Name</label>
<input className="w-full h-11 px-3 rounded-lg border focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="login-name" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Phone</label>
<input className="w-full h-11 px-3 rounded-lg border focus:outline-none focus:border-royal-500 bg-blue-50 border-blue-200 text-blue-900" id="login-phone" placeholder="Mobile Number" type="tel"/>
</div>
<button className="w-full font-semibold py-3 rounded-xl transition-all shadow-lg mt-2 bg-royal-700 hover:bg-royal-800 text-white shadow-royal-200" onclick="performLogin()">
                        Continue
                    </button>
<div className="text-center mt-4">
<p className="text-xs text-blue-400">By continuing, your details will be sent to admin for verification.</p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 right-4 z-40 md:hidden flex flex-col gap-3">
<a className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg text-white shadow-cyan-200" href="https://wa.me/918076273631">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-royal-700 text-white shadow-royal-200" href="tel:8076273631">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</a>
</div>



    </>
  );
}
