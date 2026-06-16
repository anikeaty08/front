import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // Image carousel
            const images = [
                'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'
            ];
            
            let currentIndex = 0;
            const heroImage = document.getElementById('heroImage');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            function updateImage(index) {
                heroImage.style.opacity = '0.8';
                setTimeout(() => {
                    heroImage.src = images[index];
                    heroImage.style.opacity = '1';
                }, 200);
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                updateImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                updateImage(currentIndex);
            });

            // Smooth scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('initial-hidden');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.initial-hidden').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 animate-fade-in-up">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 text-gray-900 font-medium text-lg tracking-tight hover:text-gray-700 transition-colors" href="#">
<svg className="lucide lucide-circle h-6 w-6 text-gray-900" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<span>AURA</span>
</a>
<nav className="hidden lg:flex gap-8 text-sm">
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Rooms</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Dining</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Spa</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Events</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<input className="h-9 w-64 rounded-lg border border-gray-200 bg-gray-50 px-4 pl-9 text-sm placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:bg-white" placeholder="Search..." type="text"/>
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="flex items-center gap-3">
<img alt="Profile" className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=1080&amp;q=80"/>
<div className="hidden sm:block text-sm">
<p className="font-medium text-gray-900">Alexander Chen</p>
<p className="text-gray-500 text-xs">Guest Member</p>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-5 gap-12">

<section className="lg:col-span-3 space-y-12">

<div className="relative animate-fade-in-up animate-delay-200">
<div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
<img alt="Hotel View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1726162843235-d1a48bfc9ad4?w=2160&amp;q=80"/>
<button className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 hover:opacity-100" id="prevBtn">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 hover:opacity-100" id="nextBtn">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="space-y-6 animate-fade-in-up animate-delay-300">
<div className="">
<h1 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">Hotel AURA</h1>
<div className="flex items-center gap-2 mt-2">
<svg className="lucide lucide-map-pin h-4 w-4 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-gray-600">Soho District, New York City</p>
</div>
<div className="flex items-center gap-3 mt-3">
<div className="flex items-center gap-1">
<div className="flex">
<svg className="lucide lucide-star h-4 w-4 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-medium ml-1">4.8</span>
</div>
<span className="text-sm text-gray-400">•</span>
<span className="text-sm text-gray-600">324 reviews</span>
</div>
</div>
<div className="prose prose-gray max-w-none">
<p className="text-gray-700 leading-relaxed">A refined boutique hotel experience in the heart of Manhattan's creative district. AURA combines contemporary luxury with understated elegance, featuring curated spaces that celebrate both comfort and style. Each room is thoughtfully designed with premium amenities and floor-to-ceiling windows offering stunning city views.</p>
</div>
</div>

<div className="space-y-6 animate-fade-in-up animate-delay-400">
<h2 className="text-xl font-medium text-gray-900">What we offer</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-wifi h-4 w-4 text-gray-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="text-sm">Complimentary WiFi</span>
</div>
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-car h-4 w-4 text-gray-600" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
<span className="text-sm">Valet parking</span>
</div>
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-dumbbell h-4 w-4 text-gray-600" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
<span className="text-sm">Fitness center</span>
</div>
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-utensils h-4 w-4 text-gray-600" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span className="text-sm">Restaurant &amp; bar</span>
</div>
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-shield-check h-4 w-4 text-gray-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">24-hour concierge</span>
</div>
<div className="flex items-center gap-3 py-3">
<svg className="lucide lucide-sparkles h-4 w-4 text-gray-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-sm">Spa services</span>
</div>
</div>
</div>

<div className="space-y-4 animate-fade-in-up animate-delay-500">
<h3 className="text-xl font-medium text-gray-900">Good to know</h3>
<div className="space-y-4 text-sm text-gray-600">
<div className="flex gap-3">
<svg className="lucide lucide-clock h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<div>
<p className="font-medium text-gray-900">Check-in 3:00 PM • Check-out 12:00 PM</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-calendar-x h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="calendar-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m14 14-4 4"></path><path d="m10 14 4 4"></path></svg>
<div>
<p className="font-medium text-gray-900">Free cancellation until 24 hours before arrival</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-ban h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="ban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
<div>
<p className="font-medium text-gray-900">No smoking throughout the property</p>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-2">
<div className="bg-gray-50 rounded-lg p-6 space-y-6 sticky top-24 animate-fade-in-up animate-delay-400">
<div>
<h2 className="text-lg font-medium text-gray-900 mb-1">Reserve room</h2>
<p className="text-2xl font-medium text-gray-900">$485<span className="text-base font-normal text-gray-600">/night</span></p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-sm text-gray-600">Check-in</label>
<input className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm focus:border-gray-400 focus:outline-none" type="date" value="2024-03-15"/>
</div>
<div className="space-y-1">
<label className="text-sm text-gray-600">Check-out</label>
<input className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm focus:border-gray-400 focus:outline-none" type="date" value="2024-03-18"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm text-gray-600">Guests</label>
<select className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm focus:border-gray-400 focus:outline-none appearance-none bg-white">
<option>2 guests</option>
<option>1 guest</option>
<option>3 guests</option>
<option>4 guests</option>
</select>
</div>

<div className="space-y-3 border-t border-gray-200 pt-6">
<div className="flex justify-between text-sm">
<span className="text-gray-600">$485 × 3 nights</span>
<span>$1,455</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Service fee</span>
<span className="">$87</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Taxes</span>
<span>$123</span>
</div>
<div className="border-t border-gray-200 pt-3">
<div className="flex justify-between items-center">
<span className="font-medium">Total</span>
<span className="font-medium text-lg">$1,665</span>
</div>
</div>
</div>

<button className="w-full h-11 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                        Reserve
                    </button>
<p className="text-xs text-gray-500 text-center">You won't be charged yet</p>
</div>
</aside>
</div>
</main>

<footer className="border-t border-gray-100 mt-16 initial-hidden animate-fade-in-up animate-delay-600">
<div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">
<div className="flex flex-col items-center justify-center text-center space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle h-5 w-5 text-gray-900" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium text-gray-900">AURA</span>
</div>
<p className="text-sm text-gray-500">© 2024 Hotel AURA. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
