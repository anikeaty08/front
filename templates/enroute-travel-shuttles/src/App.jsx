import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab Filtering Logic
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.fleet-tab');
            const cards = document.querySelectorAll('.fleet-card');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Reset tab styles
                    tabs.forEach(t => {
                        t.classList.remove('bg-white', 'text-black', 'active');
                        t.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
                    });
                    
                    // Activate clicked tab
                    tab.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
                    tab.classList.add('bg-white', 'text-black', 'active');

                    const target = tab.dataset.target;

                    // Show/Hide Cards
                    let index = 0;
                    cards.forEach(card => {
                        card.classList.remove('animate-fade-in');
                        
                        // Force reflow for animation
                        void card.offsetWidth;

                        if (target === 'all' || card.dataset.category === target) {
                            card.style.display = 'flex';
                            card.style.animationDelay = `${index * 50}ms`;
                            card.classList.add('animate-fade-in');
                            index++;
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Initialize visual state (only show airport on initial load if needed, but 'all' is default)
            document.querySelector('.fleet-tab[data-target="all"]').click();
        });

        // Booking Prefill Logic
        function prefillBooking(serviceValue) {
            const select = document.getElementById('service-select');
            if (select) {
                select.value = serviceValue;
                // Add a small highlight animation to indicate it was prefilled
                select.classList.add('ring-2', 'ring-white/50');
                setTimeout(() => select.classList.remove('ring-2', 'ring-white/50'), 1500);
            }
            window.location.href = '#contact';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
                Enroute
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-white hover:text-gray-300 transition-colors" href="#contact">Log in</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-full bg-[#e9e7e7] text-black text-sm font-medium hover:bg-white transition-colors shadow-[0_0_15px_rgba(233,231,231,0.2)]" href="#contact">
                    Book Now
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="md:pt-48 md:pb-32 overflow-hidden flex flex-col text-center border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
<img alt="Luxury Shuttle" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1765461734605-34657fa04db2?w=3840&amp;q=80" style={{objectPosition: 'center 30%'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-xs font-medium text-gray-300">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for bookings in Rosebank
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-6">Enroute Reliable Shuttle &amp; <br className="hidden md:block"/> Travel Services</h1>
<p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-normal">
                    Safe, Comfortable &amp; Professional Transport Solutions Across South Africa. From airport transfers to corporate events, we move you with excellence.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors" href="#contact">
                        Book a Shuttle
                    </a>
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors" href="#contact">
                        Get a Quote
                    </a>
</div>
</div>
</section>

<section className="border-b border-white/10 bg-black py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
<div className="flex items-center gap-2 text-sm font-medium text-gray-300">
<iconify-icon className="text-xl" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Airport Transfers
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-300">
<iconify-icon className="text-xl" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Shuttle Services
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-300">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Private Tours
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-300">
<iconify-icon className="text-xl" icon="solar:case-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Corporate Travel
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-300">
<iconify-icon className="text-xl" icon="solar:confetti-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Event Transport
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-[#e9e7e7] text-black" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Setting the standard in professional transport.</h2>
<p className="text-base text-gray-700 leading-relaxed mb-8">
                            Enroute Travel Shuttle &amp; Tours is a Rosebank-based transport company providing reliable, safe, and professional shuttle and travel services. We focus on delivering comfortable and punctual transport solutions tailored for individuals, tourists, and corporate clients alike.
                        </p>
<div className="p-6 rounded-2xl bg-white/50 border border-black/5">
<h3 className="text-sm font-semibold tracking-tight uppercase text-gray-500 mb-3">Our Mission</h3>
<p className="text-base font-medium text-black">
                                To provide safe, reliable, and efficient transport services with a relentless focus on customer satisfaction and uncompromising professionalism.
                            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl border border-black/10 bg-white hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-black" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Safety First</h4>
<p className="text-sm text-gray-600">Rigorous vehicle maintenance and highly trained, certified drivers ensure your peace of mind.</p>
</div>
<div className="p-6 rounded-2xl border border-black/10 bg-white hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-black" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Reliability</h4>
<p className="text-sm text-gray-600">Punctual scheduling and advanced route planning so you never miss a connection.</p>
</div>
<div className="p-6 rounded-2xl border border-black/10 bg-white hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-black" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Professionalism</h4>
<p className="text-sm text-gray-600">Courteous staff, immaculate vehicles, and a seamless booking experience from start to finish.</p>
</div>
<div className="p-6 rounded-2xl border border-black/10 bg-white hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-black" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Comfort</h4>
<p className="text-sm text-gray-600">Modern fleets equipped with premium amenities for a relaxing journey every time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-16 bg-black relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Comprehensive Transport Solutions</h2>
<p className="text-base text-gray-400">Designed to meet the diverse needs of modern travelers and businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-3xl text-white mb-6 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Airport Transfers</h3>
<p className="text-sm text-gray-400 leading-relaxed">Reliable pick-up and drop-off services to and from major airports with punctual, stress-free scheduling.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-3xl text-white mb-6 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Shuttle Services</h3>
<p className="text-sm text-gray-400 leading-relaxed">Daily and scheduled transport tailored for individuals and groups across various local destinations.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-3xl text-white mb-6 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Private Tours</h3>
<p className="text-sm text-gray-400 leading-relaxed">Customized, private travel experiences to popular tourist destinations and scenic attractions.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-3xl text-white mb-6 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:case-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Corporate Transport</h3>
<p className="text-sm text-gray-400 leading-relaxed">Discreet, professional transport solutions designed for business clients, staff, and executives.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="">
<iconify-icon className="text-3xl text-white mb-6 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:confetti-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Event Transport</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-xl">Coordinated group transport logistics for weddings, large-scale conferences, and special events, ensuring everyone arrives together and on time.</p>
</div>
<div className="md:ml-auto">
<a className="h-10 px-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap" href="#contact" onclick="prefillBooking('event')">
                                    Book Group Transport
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] border-white/5 border-t pt-16 pb-16" id="fleet">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Choose Your Vehicle</h2>
<p className="text-base text-gray-400">Select the ideal vehicle for your journey based on your service needs.</p>
</div>

<div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar mb-12 pb-2">
<button className="fleet-tab h-10 px-5 rounded-full text-sm font-medium transition-colors whitespace-nowrap" data-target="all">All</button>
<button className="fleet-tab transition-colors hover:text-white hover:bg-white/10 whitespace-nowrap text-sm font-medium h-10 border rounded-full pr-5 pl-5" data-target="airport">Airport</button>
<button className="fleet-tab h-10 px-5 rounded-full border border-white/10 text-sm font-medium transition-colors bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 whitespace-nowrap" data-target="shuttle">Shuttle</button>
<button className="fleet-tab h-10 px-5 rounded-full border border-white/10 text-sm font-medium transition-colors bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 whitespace-nowrap" data-target="tours">Tours</button>
<button className="fleet-tab h-10 px-5 rounded-full border border-white/10 text-sm font-medium transition-colors bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 whitespace-nowrap" data-target="corporate">Corporate</button>
<button className="fleet-tab h-10 px-5 rounded-full border border-white/10 text-sm font-medium transition-colors bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 whitespace-nowrap" data-target="events">Events</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6" id="fleet-container">

<div className="fleet-card flex flex-col bg-[#e9e7e7] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-category="airport" style={{display: 'flex', animationDelay: '0ms'}}>
<div className="h-44 w-full mb-6 flex items-center justify-center overflow-hidden">
<img alt="Mercedes Benz V-Class" className="contrast-125 opacity-90 mix-blend-multiply max-w-full max-h-full object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1260ab07-4fb0-4b93-af16-6029e002cf0b_320w.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-black mb-4">Mercedes Benz V-Class</h3>
<ul className="space-y-2 mb-4 text-black">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon> 2021 Model</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:users-group-rounded-linear"></iconify-icon> 3–6 passengers</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:suitcase-linear"></iconify-icon> 6–7 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">Premium airport transfer vehicle with luxury seating and ample luggage space.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('airport')">
                            + Book Now
                        </button>
</div>

<div className="fleet-card flex flex-col bg-[#e9e7e7] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-category="airport" style={{display: 'flex', animationDelay: '50ms'}}>
<div className="h-44 w-full mb-6 flex items-center justify-center overflow-hidden">
<img alt="Toyota Quantum" className="contrast-125 opacity-90 mix-blend-multiply max-w-3xl max-h-full object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3acda2fa-2ef4-4448-b90a-b1419e200e2e_800w.png"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-black mb-4">Toyota Quantum</h3>
<ul className="space-y-2 mb-4 text-black">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon> 2022 Model</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:users-group-rounded-linear"></iconify-icon> 10–14 passengers</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:suitcase-linear"></iconify-icon> 10 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">Ideal for group airport transfers with comfortable seating and vast storage.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('airport')">
                            + Book Now
                        </button>
</div>

<div className="fleet-card flex flex-col bg-[#e9e7e7] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hidden" data-category="shuttle" style={{animationDelay: '100ms', display: 'none'}}>
<div className="h-44 w-full mb-6 flex items-center justify-center overflow-hidden">
<img alt="Toyota Quantum" className="contrast-125 opacity-90 mix-blend-multiply max-w-full max-h-full object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa48f1eb-0af8-44fb-b439-a52563c4d106_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-black tracking-tight mb-4">Hyundai H1</h3>
<ul className="space-y-2 mb-4 text-black">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon> 2022 Model</li>
<li className="flex text-sm font-medium gap-x-3 gap-y-3 items-center">7-9 passengers</li>
<li className="flex text-sm font-medium gap-x-3 gap-y-3 items-center">6 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">Reliable and spacious, perfect for daily group commuting and affordable shuttling.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('shuttle')">
                            + Book Now
                        </button>
</div>

<div className="fleet-card flex flex-col bg-[#e9e7e7] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hidden" data-category="shuttle" style={{animationDelay: '150ms', display: 'none'}}>
<div className="h-44 w-full mb-6 flex items-center justify-center overflow-hidden">
<img alt="Hyundai H1" className="contrast-125 opacity-90 mix-blend-multiply max-w-full max-h-full object-cover rounded-xl grayscale" src="https://images.unsplash.com/photo-1764089859662-7b4773dff85b?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-black tracking-tight mb-4">Executive Sedan</h3>
<ul className="text-black mb-4 space-y-2">
<li className="flex text-sm font-medium gap-x-3 gap-y-3 items-center">2023 Model</li>
<li className="flex gap-3 text-sm font-medium gap-x-3 gap-y-3 items-center">2–3passengers</li>
<li className="flex gap-3 text-sm font-medium gap-x-3 gap-y-3 items-center">2-3 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">Comfortable mid-sized van offering smooth daily transport for smaller groups.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('shuttle')">
                            + Book Now
                        </button>
</div>

<div className="fleet-card flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hidden bg-[#e9e7e7] rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm" data-category="shuttle" style={{animationDelay: '200ms', display: 'none'}}>
<div className="flex overflow-hidden w-full h-44 mb-6 items-center justify-center">
<img alt="Mercedes Sprinter" className="contrast-125 opacity-90 mix-blend-multiply max-w-full max-h-full object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/572078cf-5fdf-4f88-967e-ff7dd561ef2a_800w.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-black tracking-tight mb-4">Mercedes Sprinter</h3>
<ul className="space-y-2 mb-4 text-black">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon> 2023 Model</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:users-group-rounded-linear"></iconify-icon> 16–22 passengers</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:suitcase-linear"></iconify-icon> 15 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">High-capacity shuttle ensuring safe, affordable, and efficient large group transit.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('shuttle')">
                            + Book Now
                        </button>
</div>

<div className="fleet-card flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hidden bg-[#e9e7e7] rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm" data-category="tours" style={{animationDelay: '250ms', display: 'none'}}>
<div className="h-44 w-full mb-6 flex items-center justify-center overflow-hidden">
<img alt="Mercedes Benz V-Class" className="contrast-125 opacity-90 mix-blend-multiply max-w-full max-h-full object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72ce6b98-0d13-4ec8-9108-9d2dbd72c1be_320w.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-black tracking-tight mb-4">SUV (Toyota LandCruiser)</h3>
<ul className="space-y-2 mb-4 text-black">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon> 2021 Model</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:users-group-rounded-linear"></iconify-icon> 3–6 passengers</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-lg text-gray-500" icon="solar:suitcase-linear"></iconify-icon> 6 bags</li>
</ul>
<p className="text-sm text-gray-600 mb-8 flex-grow">Premium comfort and panoramic views, ideal for private scenic tours.</p>
<button className="w-full h-12 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2" onclick="prefillBooking('tour')">
                            + Book Now
                        </button>
</div>






</div>
</div>
</section>

<section className="py-24 bg-[#e9e7e7]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-black mb-2">Our Fleet &amp; Journeys</h2>
<p className="text-sm text-gray-600">A glimpse into the Enroute experience.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
<img alt="Shuttle Vehicle" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Premium Fleet</span>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
<img alt="Tourist Destination" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1628347496893-fa6ad6769952?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Scenic Tours</span>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 lg:row-span-2 lg:aspect-auto">
<img alt="Corporate Travel" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1764090317565-46fe49fe2a31?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Corporate Transport</span>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 lg:col-span-2">
<img alt="Highway Travel" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center 60%'}}/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Reliable Journeys</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">Book your journey.</h2>
<p className="text-sm text-gray-400 mb-10">Fill out the form below to request a quote or book a service. Our team will get back to you promptly.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 ml-1">Full Name</label>
<input className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
<input className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 ml-1">Phone Number</label>
<input className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="+27 00 000 0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 ml-1">Service Required</label>
<div className="relative">
<select className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white appearance-none focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all cursor-pointer" id="service-select">
<option className="bg-black text-gray-400" value="">Select a service...</option>
<option className="bg-black text-white" value="airport">Airport Transfer</option>
<option className="bg-black text-white" value="shuttle">Shuttle Service</option>
<option className="bg-black text-white" value="tour">Private Tour</option>
<option className="bg-black text-white" value="corporate">Corporate Transport</option>
<option className="bg-black text-white" value="event">Event Transport</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 ml-1">Message / Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none" placeholder="Tell us about your trip (dates, number of passengers, locations...)" rows="4"></textarea>
</div>
<button className="w-full h-11 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors mt-2" type="button">
                                Submit Request
                            </button>
</form>
</div>

<div className="flex flex-col gap-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl border border-white/10 bg-white/5">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-gray-400 mb-1">Email Us</h4>
<a className="text-base font-medium text-white hover:text-gray-300 transition-colors break-all" href="mailto:info@enrouteshuttleandtours.co.za">info@enrouteshuttleandtours.co.za</a>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-white/5">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-gray-400 mb-1">Call Us</h4>
<a className="text-base font-medium text-white hover:text-gray-300 transition-colors" href="tel:+27000000000">+27 00 000 0000</a>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex-grow flex flex-col">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
<p className="text-base font-medium text-white mb-6">Rosebank, Johannesburg, South Africa</p>

<div className="w-full flex-grow min-h-[200px] rounded-xl overflow-hidden relative border border-white/10 bg-[#1a1a1a]">
<img alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2948&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-white text-xl font-semibold tracking-tighter uppercase inline-block mb-4" href="#">
                        Enroute
                    </a>
<p className="text-sm text-gray-500 max-w-sm mb-6">
                        Reliable, safe, and professional shuttle and travel services across South Africa. Based in Rosebank.
                    </p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-tight text-white mb-4">Quick Links</h5>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-tight text-white mb-4">Contact</h5>
<ul className="space-y-3">
<li className="text-sm text-gray-500">Rosebank, Johannesburg</li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="mailto:info@enrouteshuttleandtours.co.za">info@enrouteshuttleandtours.co.za</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="tel:+27000000000">+27 00 000 0000</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-600">
                    Copyright © 2026 Enroute Travel Shuttle &amp; Tours. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-xs text-gray-600 hover:text-gray-300 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-600 hover:text-gray-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
