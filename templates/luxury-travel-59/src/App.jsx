import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-white/70', 'bg-white/90');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/90', 'bg-white/70');
            }
        });

        // Guest Dropdown Logic
        const guestTrigger = document.getElementById('guest-trigger');
        const guestDropdown = document.getElementById('guest-dropdown');
        const guestCountDisplay = document.getElementById('guest-count');
        
        let guests = { adults: 2, children: 0 };

        guestTrigger.addEventListener('click', (e) => {
            if(e.target.closest('button')) return; 
            guestDropdown.classList.toggle('hidden');
            if(!guestDropdown.classList.contains('hidden')) {
                guestDropdown.classList.add('dropdown-enter-active');
            } else {
                guestDropdown.classList.remove('dropdown-enter-active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!guestTrigger.contains(e.target)) {
                guestDropdown.classList.add('hidden');
                guestDropdown.classList.remove('dropdown-enter-active');
            }
        });

        window.updateGuests = function(type, change) {
            let newVal = guests[type] + change;
            if (type === 'adults' && newVal < 1) newVal = 1; 
            if (type === 'children' && newVal < 0) newVal = 0; 
            
            guests[type] = newVal;
            document.getElementById(`${type}-val`).innerText = newVal;
            
            let total = guests.adults + guests.children;
            guestCountDisplay.innerText = `${total} Guest${total > 1 ? 's' : ''}`;
        };

        // Subtle entry animations
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach((el) => {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-black text-xl group-hover:rotate-12 transition-transform duration-300" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium text-base tracking-tighter text-black uppercase">HORIZONS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="font-normal text-sm text-black transition-colors" href="#">Stays</a>
<a className="font-normal text-sm text-gray-500 hover:text-black transition-colors" href="#">Flights</a>
<a className="font-normal text-sm text-gray-500 hover:text-black transition-colors" href="#">Experiences</a>
<a className="font-normal text-sm text-gray-500 hover:text-black transition-colors" href="#">Business</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="flex items-center gap-1 text-sm font-normal text-gray-500 hover:text-black transition-colors">
                    USD <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200"></div>
<button className="text-sm font-medium text-black hover:text-gray-600 transition-colors">Log in</button>
<button className="text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-200 active:scale-95 shadow-sm">
                    Sign up
                </button>
</div>
<button className="md:hidden text-black text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-[#FAFAFA] to-[#FAFAFA] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
<span className="text-xs font-medium text-black tracking-wide uppercase">Introducing Horizons Select</span>
</div>
<h1 className="font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black leading-[1.05] mb-6">
                The new standard<br/>in global travel.
            </h1>
<p className="font-normal text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto tracking-tight">
                Experience unparalleled curation. Seamlessly book exceptional stays, private flights, and extraordinary journeys worldwide.
            </p>

<div className="w-full max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-6 mb-4">
<button className="text-sm font-medium text-black border-b border-black pb-1">Stays</button>
<button className="text-sm font-normal text-gray-400 hover:text-black transition-colors pb-1">Flights</button>
<button className="text-sm font-normal text-gray-400 hover:text-black transition-colors pb-1">Cars</button>
</div>
<div className="bg-white rounded-full p-2 flex flex-col md:flex-row items-center border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 relative z-20">
<div className="flex-1 w-full md:w-auto px-4 py-2 md:py-0 md:border-r border-gray-100 flex items-center gap-3 group">
<iconify-icon className="text-gray-400 text-lg group-focus-within:text-black transition-colors" icon="solar:map-point-linear"></iconify-icon>
<div className="flex flex-col items-start w-full">
<label className="text-[0.65rem] font-medium tracking-widest uppercase text-gray-400">Where to?</label>
<input className="w-full text-sm font-medium text-black bg-transparent outline-none placeholder:text-gray-300 placeholder:font-normal" placeholder="Search destinations" type="text"/>
</div>
</div>
<div className="flex-1 w-full md:w-auto px-4 py-2 md:py-0 md:border-r border-gray-100 flex items-center gap-3 group border-t md:border-t-0">
<iconify-icon className="text-gray-400 text-lg group-focus-within:text-black transition-colors" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col items-start w-full cursor-pointer">
<label className="text-[0.65rem] font-medium tracking-widest uppercase text-gray-400">Dates</label>
<input className="w-full text-sm font-medium text-black bg-transparent outline-none placeholder:text-gray-300 placeholder:font-normal cursor-pointer" placeholder="Add dates" readonly="" type="text"/>
</div>
</div>
<div className="flex-1 w-full md:w-auto px-4 py-2 md:py-0 flex items-center justify-between border-t md:border-t-0 relative group" id="guest-trigger">
<div className="flex items-center gap-3 cursor-pointer w-full">
<iconify-icon className="text-gray-400 text-lg group-hover:text-black transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex flex-col items-start">
<label className="text-[0.65rem] font-medium tracking-widest uppercase text-gray-400">Who</label>
<span className="text-sm font-medium text-black" id="guest-count">2 Guests</span>
</div>
</div>
<div className="hidden absolute top-[calc(100%+16px)] right-0 w-[280px] bg-white border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-5 z-50 dropdown-enter" id="guest-dropdown">
<div className="flex items-center justify-between mb-6">
<div>
<span className="block text-sm font-medium text-black">Adults</span>
<span className="block text-xs text-gray-400 mt-0.5">Ages 13 or above</span>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors" onclick="updateGuests('adults', -1)">-</button>
<span className="text-sm font-medium w-4 text-center text-black" id="adults-val">2</span>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors" onclick="updateGuests('adults', 1)">+</button>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="block text-sm font-medium text-black">Children</span>
<span className="block text-xs text-gray-400 mt-0.5">Ages 2-12</span>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors" onclick="updateGuests('children', -1)">-</button>
<span className="text-sm font-medium w-4 text-center text-black" id="children-val">0</span>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors" onclick="updateGuests('children', 1)">+</button>
</div>
</div>
</div>
</div>
<button className="w-full md:w-auto mt-2 md:mt-0 bg-black text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 shadow-sm">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm font-medium md:hidden">Search</span>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 w-full grid grid-cols-3 gap-6 opacity-90 hover:opacity-100 transition-opacity duration-500 hidden md:grid">
<div className="h-[40vh] rounded-2xl overflow-hidden relative translate-y-8">
<img alt="Tokyo" className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-[45vh] rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10">
<img alt="Santorini" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-[40vh] rounded-2xl overflow-hidden relative translate-y-12">
<img alt="Bali" className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</header>

<section className="border-y border-gray-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-black" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-black">Vetted Properties</p>
<p className="text-xs text-gray-400">Top 1% of global stays</p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-gray-100"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-black" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-black">Global Access</p>
<p className="text-xs text-gray-400">150+ countries</p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-gray-100"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-black" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-black">Member Pricing</p>
<p className="text-xs text-gray-400">Average 15% savings</p>
</div>
</div>
<div className="hidden lg:block w-px h-8 bg-gray-100"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-black" icon="solar:headphones-round-sound-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-black">Concierge Support</p>
<p className="text-xs text-gray-400">24/7 dedicated service</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-medium text-3xl tracking-tight text-black mb-2">The Collection</h2>
<p className="text-gray-500 font-normal text-base tracking-tight">Handpicked properties defined by exceptional design and service.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">All</button>
<button className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:text-black border border-gray-200 transition-all hover:border-gray-300">Resorts</button>
<button className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:text-black border border-gray-200 transition-all hover:border-gray-300">Villas</button>
<button className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:text-black border border-gray-200 transition-all hover:border-gray-300">Urban</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200/50">
<img alt="Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-colors z-10">
<iconify-icon className="text-sm" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg text-black tracking-tight mb-1">Amanera Resort</h3>
<p className="text-gray-500 text-sm mb-2">Dominican Republic</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-black">$1,200 <span className="text-xs text-gray-400 font-normal">/night</span></p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-black mt-1">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon> 4.98
                            </div>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200/50">
<img alt="Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-colors z-10">
<iconify-icon className="text-sm" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg text-black tracking-tight mb-1">Hoshinoya Tokyo</h3>
<p className="text-gray-500 text-sm mb-2">Tokyo, Japan</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-black">$850 <span className="text-xs text-gray-400 font-normal">/night</span></p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-black mt-1">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon> 4.95
                            </div>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200/50">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-colors z-10">
<iconify-icon className="text-sm" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black text-[0.65rem] font-medium uppercase tracking-widest px-2 py-1 rounded">Rare Find</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg text-black tracking-tight mb-1">Villa Althea</h3>
<p className="text-gray-500 text-sm mb-2">Santorini, Greece</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-black">$1,450 <span className="text-xs text-gray-400 font-normal">/night</span></p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-black mt-1">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
</div>
</a>
</div>
<div className="text-center mt-12">
<button className="inline-flex items-center gap-2 text-sm font-medium text-black border border-gray-200 bg-white px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                    Explore all properties <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden bg-noise">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-medium text-3xl tracking-tight mb-2">Private &amp; First Class Routes</h2>
<p className="text-gray-400 font-normal text-base tracking-tight">Seamlessly book premium cabins and exclusive charter flights.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="group bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-6 w-full sm:w-auto relative z-10">
<div className="text-center sm:text-left">
<div className="text-2xl font-medium tracking-tighter mb-1">JFK</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">New York</div>
</div>
<div className="flex-1 min-w-[100px] flex items-center justify-center relative px-4">
<div className="w-full h-px border-t border-dashed border-gray-700"></div>
<iconify-icon className="absolute text-gray-500 bg-[#0A0A0A] px-2 text-sm group-hover:text-white group-hover:translate-x-4 transition-all duration-500" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-center sm:text-right">
<div className="text-2xl font-medium tracking-tighter mb-1">LHR</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">London</div>
</div>
</div>
<div className="w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 border-white/[0.08] pt-4 sm:pt-0 relative z-10">
<div className="text-left sm:text-right mb-0 sm:mb-2">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-1">First Class</p>
<p className="text-lg font-medium">From $4,200</p>
</div>
<iconify-icon className="text-xl text-gray-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-6 w-full sm:w-auto relative z-10">
<div className="text-center sm:text-left">
<div className="text-2xl font-medium tracking-tighter mb-1">SFO</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">San Fran</div>
</div>
<div className="flex-1 min-w-[100px] flex items-center justify-center relative px-4">
<div className="w-full h-px border-t border-dashed border-gray-700"></div>
<iconify-icon className="absolute text-gray-500 bg-[#0A0A0A] px-2 text-sm group-hover:text-white group-hover:translate-x-4 transition-all duration-500" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-center sm:text-right">
<div className="text-2xl font-medium tracking-tighter mb-1">HND</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">Tokyo</div>
</div>
</div>
<div className="w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 border-white/[0.08] pt-4 sm:pt-0 relative z-10">
<div className="text-left sm:text-right mb-0 sm:mb-2">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-1">First Class</p>
<p className="text-lg font-medium">From $6,800</p>
</div>
<iconify-icon className="text-xl text-gray-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-medium text-3xl tracking-tight text-black mb-2">Signature Journeys</h2>
<p className="text-gray-500 font-normal text-base tracking-tight">End-to-end curated itineraries for the world's most discerning travelers.</p>
</div>
<button className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors">
                    View all journeys <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative shadow-sm border border-gray-200/50">
<img alt="Swiss Alps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533230559526-9769db3bc928?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="text-white">
<p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">7 Days • 6 Nights</p>
<h3 className="text-2xl font-medium tracking-tight">Alpine Grandeur</h3>
</div>
<div className="text-white text-right">
<p className="text-xs uppercase tracking-widest mb-1 opacity-80">From</p>
<p className="text-lg font-medium">$8,500</p>
</div>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed px-1">Helicopter transfers from Geneva, private ski guides, and exclusive access to the region's finest Michelin-starred chalets.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative shadow-sm border border-gray-200/50">
<img alt="Desert Expedition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542401886-65d6c61de146?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="text-white">
<p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">10 Days • 9 Nights</p>
<h3 className="text-2xl font-medium tracking-tight">Namibian Odyssey</h3>
</div>
<div className="text-white text-right">
<p className="text-xs uppercase tracking-widest mb-1 opacity-80">From</p>
<p className="text-lg font-medium">$12,400</p>
</div>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed px-1">Traverse the Skeleton Coast via private light aircraft, stay in completely isolated luxury camps, and experience untouched wilderness.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-black mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-medium text-lg text-black tracking-tight mb-2">Smart Itineraries</h3>
<p className="text-gray-500 font-normal text-sm leading-relaxed">Our system automatically organizes your bookings, flights, and reservations into a single, beautiful timeline.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-black mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-medium text-lg text-black tracking-tight mb-2">Transparent Pricing</h3>
<p className="text-gray-500 font-normal text-sm leading-relaxed">No hidden fees. Taxes and resort charges are calculated upfront, ensuring absolute clarity at checkout.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-black mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:card-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-medium text-lg text-black tracking-tight mb-2">One-Click Booking</h3>
<p className="text-gray-500 font-normal text-sm leading-relaxed">Securely save your preferences and payment methods for instant reservations on future trips.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-b border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
<iconify-icon className="text-black text-sm" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-black tracking-wide uppercase">The Horizons Ethos</span>
</div>
<h2 className="font-medium text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black mb-6 leading-[1.1]">
                        Elevating the art<br/>of global exploration.
                    </h2>
<p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg tracking-tight">
                        We believe that true luxury lies in the unseen details. Horizons was founded to remove friction from premium travel, replacing it with seamless curation, unparalleled access, and absolute privacy.
                    </p>
<div className="flex gap-12">
<div>
<p className="text-3xl font-medium tracking-tighter text-black mb-1">150+</p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Global Partners</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tighter text-black mb-1">24/7</p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Concierge</p>
</div>
</div>
</div>
<div className="relative w-full max-w-md mx-auto lg:max-w-none">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-200/50">
<img alt="Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] hidden md:block w-64">
<div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-white" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm font-medium text-black mb-1">Members Only</p>
<p className="text-xs text-gray-500 leading-relaxed">Direct access to off-market estates and priority waitlists.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
<h2 className="font-medium text-3xl tracking-tight text-black mb-2">Global Network</h2>
<p className="text-gray-500 font-normal text-base tracking-tight max-w-xl">Unrestricted access to the world's most coveted destinations, supported by our local intelligence teams.</p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="relative w-full aspect-[4/3] md:aspect-[2.5/1] bg-[#FAFAFA] rounded-3xl border border-gray-200/60 overflow-hidden flex items-center justify-center shadow-inner">

<div className="absolute inset-0 bg-dot-grid opacity-60"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FAFAFA_100%)]"></div>


<div className="absolute top-[35%] left-[25%] group cursor-pointer">
<div className="w-2.5 h-2.5 bg-black rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
<div className="absolute inset-0 bg-black/20 rounded-full animate-ping"></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-[0.65rem] py-1.5 px-2.5 rounded shadow-lg font-medium uppercase tracking-widest whitespace-nowrap z-20">New York</div>
</div>

<div className="absolute top-[28%] left-[48%] group cursor-pointer">
<div className="w-2.5 h-2.5 bg-black rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
<div className="absolute inset-0 bg-black/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-[0.65rem] py-1.5 px-2.5 rounded shadow-lg font-medium uppercase tracking-widest whitespace-nowrap z-20">London</div>
</div>

<div className="absolute top-[42%] left-[82%] group cursor-pointer">
<div className="w-2.5 h-2.5 bg-black rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
<div className="absolute inset-0 bg-black/20 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-[0.65rem] py-1.5 px-2.5 rounded shadow-lg font-medium uppercase tracking-widest whitespace-nowrap z-20">Tokyo</div>
</div>

<div className="absolute top-[48%] left-[62%] group cursor-pointer">
<div className="w-2.5 h-2.5 bg-black rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
<div className="absolute inset-0 bg-black/20 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-[0.65rem] py-1.5 px-2.5 rounded shadow-lg font-medium uppercase tracking-widest whitespace-nowrap z-20">Dubai</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
<iconify-icon className="text-black text-sm" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] font-medium text-black tracking-widest uppercase">Live Radar Active</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] relative overflow-hidden bg-noise border-t border-gray-800">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white/[0.04] to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-5xl text-white/30 mb-8" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-medium text-4xl md:text-6xl tracking-tighter text-white mb-6 leading-[1.05]">Begin your journey.</h2>
<p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto font-normal tracking-tight">Join an exclusive community of discerning travelers. Request access to Horizons Select to unlock curated inventory and dedicated service.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<div className="relative w-full">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-full pl-11 pr-4 py-3.5 focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-medium" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="button">
                    Request Access
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-black text-xl" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium text-base tracking-tighter text-black uppercase">HORIZONS</span>
</a>
<p className="text-gray-500 font-normal text-sm leading-relaxed mb-6 max-w-xs">
                        The modern standard for booking premium travel experiences globally.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm text-black mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Stays</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Flights</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Experiences</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Horizons Select</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-black mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">About</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Press</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-black mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Privacy</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Terms</a></li>
<li><a className="text-gray-500 hover:text-black text-sm transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2024 Horizons Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-sm text-gray-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
