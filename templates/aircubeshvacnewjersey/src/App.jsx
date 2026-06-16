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
},
colors: {
// Brand Red derived from source code #ff0000, tweaked slightly for better UI accessibility
brand: {
50: '#fef2f2',
100: '#fee2e2',
200: '#fecaca',
300: '#fca5a5',
400: '#f87171',
500: '#ef4444',
600: '#dc2626', // Primary Brand Color
700: '#b91c1c',
800: '#991b1b',
900: '#7f1d1d',
},
dark: {
900: '#0f172a',
800: '#1e293b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Mobile Menu Logic - Hidden by Default
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('menu-closed')) {
                menu.classList.remove('menu-closed');
                menu.classList.add('menu-open');
            } else {
                menu.classList.remove('menu-open');
                menu.classList.add('menu-closed');
            }
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.remove('menu-open');
            menu.classList.add('menu-closed');
        }

        // Modal Logic
        function openBookingModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeBookingModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // Restore scrolling
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="[mask-image:linear-gradient(to_bottom,white,transparent)] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<nav className="fixed z-50 glass-nav transition-all duration-300 top-0 right-0 left-0">

<div className="hidden md:block bg-brand-600 text-white py-2 px-6">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
<div className="flex items-center gap-4">
<span className="">License # 19HC00711900</span>
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
<span>Master HVACR Contractor NJ</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white/80 transition-colors" href="#locations">Serving Essex, Hudson, Middlesex &amp; Union Counties</a>
</div>
</div>
</div>

<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<img alt="Air Cubes HVAC" className="group-hover:scale-105 transition-transform duration-300 w-auto h-12 object-contain" src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ50Uvsmw6JXxL6MdOibEN_hffiwXe37wG1hAOWXdPqUjZcPvi6TYdfyjKBijzkn8BgYQ8bg_4SDEbXc2iO6a6dSjlTYXl0g8C2MUr91dK8jIWdXg7thjQ2LJPpjceOsdMxZzCtZy-zJasP26RHJzIPqQ-BIHrcZm4vul1Etch5LVIMTQ305-3H=w16383?w=800&amp;q=80"/>
</a>

<div className="hidden lg:flex items-center gap-8" style={{display: 'none'}}>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#resources">Resources</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4" style={{display: 'none'}}>
<a className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-brand-600 transition-colors" href="tel:9084000398">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            (908) 400-0398
        </a>
<button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 transform hover:-translate-y-0.5 transition-all" onclick="openBookingModal()">
                    Book Appointment
                </button>
</div>

<button className="flex lg:hidden text-neutral-950 bg-zinc-200/70 w-10 h-10 z-50 relative items-end justify-end" onclick="toggleMobileMenu()" style={{display: 'none'}}>
<iconify-icon className="" icon="solar:hamburger-menu-linear bg-zinc-200/70" width="28"></iconify-icon>
</button>
</div>

<div className="menu-closed absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl z-40 lg:hidden flex flex-col p-6 space-y-4" id="mobile-menu" style={{display: 'none'}}>
<a className="text-lg font-medium text-gray-900 border-gray-50 border-b pt-2 pb-2" href="#services" onclick="closeMobileMenu()">Services</a>
<a className="text-lg font-medium text-gray-900 border-gray-50 border-b pt-2 pb-2" href="#locations" onclick="closeMobileMenu()">Locations</a>
<a className="text-lg font-medium text-gray-900 border-gray-50 border-b pt-2 pb-2" href="#resources" onclick="closeMobileMenu()">Resources</a>
<a className="text-lg font-medium text-gray-900 border-gray-50 border-b pt-2 pb-2" href="#contact" onclick="closeMobileMenu()">Contact</a>
<div className="flex flex-col gap-3 pt-4">
<a className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-900 font-bold py-3.5 rounded-xl" href="tel:9084000398">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                    Call (908) 400-0398
                </a>
<button className="font-bold text-white bg-brand-600 w-full rounded-xl pt-3.5 pb-3.5 shadow-md" onclick="openBookingModal(); closeMobileMenu()">
                    Request Appointment
                </button>
</div>
</div>
</nav>

<section className="min-h-[90vh] flex flex-col overflow-hidden bg-gray-900 pt-28 pb-16 relative justify-center">

<div className="absolute inset-0 z-0">
<img alt="Air Cubes HVAC Tech" className="opacity-60 w-full h-full object-cover" src="https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="animate-slide-up max-w-3xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/20 border border-brand-500/30 backdrop-blur-md mb-6">
<span className="animate-pulse bg-brand-500 w-2 h-2 rounded-full"></span>
<span className="uppercase text-xs font-bold text-brand-100 tracking-wider">Family Owned &amp; Operated</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
                    Your Comfort Is <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-200">Our #1 Priority</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-200 max-w-2xl mb-8 drop-shadow-md">
                    We work year-round to provide customers with comfort, affordability, and satisfaction. Master HVACR Contractor serving NJ homes and small businesses.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-brand-600/30 transition-all transform hover:-translate-y-1" onclick="openBookingModal()">
                        Book Online
                    </button>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2" href="tel:9084000398">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                        (908) 400-0398
                    </a>
</div>

<div className="flex flex-wrap text-sm font-medium text-gray-300 border-white/10 border-t mt-12 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
                        Fully Licensed &amp; Insured
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:user-id-linear" width="18"></iconify-icon>
                        Lic #19HC00711900
                    </div>
<div className="flex gap-2 items-center">
<svg className="w-[18px] h-[14px]" data-icon-replaced="true" data-icon-set="solar" data-solar="map-point-linear" height="1em" strokeWidth="2" style={{width: '18px', height: '14px', color: 'rgb(248, 113, 113)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                        4 Counties Served
                    </div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-white pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Comprehensive HVAC Solutions</h2>
<p className="text-gray-600">Whether the job calls for an installation, repair, or maintenance, we can help. We service all systems including boilers, furnaces, and ductless units.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="flex group-hover:scale-110 transition-transform text-brand-600 bg-brand-100 w-14 h-14 rounded-xl mb-6 items-center justify-center">
<iconify-icon icon="solar:fire-bold-duotone" width="32"></iconify-icon>
<iconify-icon className="" height="24" icon="solar:stars-minimalistic-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon><iconify-icon className="" height="24" icon="solar:stars-minimalistic-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon></div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Heating</h3>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Expert repair and installation for furnaces, boilers, and heat pumps to keep you warm.
                    </p>
<a className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#" onclick="openBookingModal()">
                        Schedule Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="flex group-hover:scale-110 transition-transform text-blue-600 bg-blue-100 w-14 h-14 rounded-xl mb-6 items-center justify-center">
<iconify-icon icon="solar:snowflake-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Cooling</h3>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        High-efficiency AC installations and rapid repairs to beat the summer heat.
                    </p>
<a className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#" onclick="openBookingModal()">
                        Schedule Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Installations</h3>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Full system replacements and new construction installs with energy-efficient units.
                    </p>
<a className="text-green-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#" onclick="openBookingModal()">
                        Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h3>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Preventative plans to extend system life and prevent costly breakdowns.
                    </p>
<a className="text-orange-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#" onclick="openBookingModal()">
                        View Plans <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="absolute -inset-4 bg-brand-100 rounded-2xl transform rotate-2"></div>
<img alt="Jorge Amador HVAC Tech" className="bg-center w-full h-[400px] object-cover rounded-xl relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eca0dc3-8119-4a62-8ee6-51d1ab962484_1600w.png"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Meet The Master</h2>
<h3 className="text-xl font-semibold text-brand-600 mb-6">Jorge Amador, Master HVACR Contractor NJ</h3>
<div className="space-y-4 text-gray-600 leading-relaxed mb-8">
<p className="">We are a small family-owned NJ HVAC contractor company. We work year-round to provide our customers with comfort, affordability, and satisfaction.</p>
<p className="">Our company is fully licensed and insured. Whether you need uneven heating fixed, unusual sounds investigated, or high energy bills lowered, we have the expertise to help.</p>
</div>
<div className="inline-block bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm">
<p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">State License</p>
<p className="text-lg font-mono font-medium text-gray-900">#19HC00711900</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-bold text-gray-900 tracking-tight mb-4">Service Areas</h2>
<p className="text-gray-600">Proudly serving homeowners across these New Jersey counties.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
<h3 className="text-lg font-bold text-brand-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> Essex County
                    </h3>
<ul className="space-y-2 text-sm text-gray-600">
<li>Livingston</li>
<li>Maplewood</li>
<li>Millburn</li>
<li>Montclair</li>
<li>North Caldwell</li>
<li>Short Hills</li>
<li>South Orange</li>
<li>Upper Montclair</li>
<li>West Caldwell</li>
<li>West Orange</li>
</ul>
</div>

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
<h3 className="text-lg font-bold text-brand-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> Hudson County
                    </h3>
<ul className="space-y-2 text-sm text-gray-600">
<li>Bayonne</li>
<li>Hoboken</li>
<li>Jersey City</li>
<li>West New York</li>
</ul>
</div>

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
<h3 className="text-lg font-bold text-brand-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> Middlesex County
                    </h3>
<ul className="space-y-2 text-sm text-gray-600">
<li>East Brunswick</li>
<li>Edison</li>
<li>Iselin</li>
<li className="">Metuchen</li>
</ul>
</div>

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
<h3 className="text-lg font-bold text-brand-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> Union County
                    </h3>
<ul className="space-y-2 text-sm text-gray-600">
<li>Berkley Heights</li>
<li>Clark</li>
<li>Cranford</li>
<li>Fanwood</li>
<li>Kenilworth</li>
<li>Mountainside</li>
<li>New Providence</li>
<li>Scotch Plains</li>
<li>Springfield</li>
<li>Summit</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="resources">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 blur-[100px] rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center">Resources for Home Owners</h2>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
<h3 className="text-xl font-bold mb-4 text-brand-300">How to know when it’s time to replace your furnace?</h3>
<ul className="space-y-4 text-gray-300">
<li className="flex gap-3">
<iconify-icon className="text-brand-400 mt-1 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<div><strong className="text-white">Room Temperature:</strong> Uneven heat distribution often indicates duct issues or system failure.</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-400 mt-1 flex-shrink-0" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div><strong className="text-white">Age:</strong> Furnaces typically need replacement after 15 years, heat pumps after 10.</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-400 mt-1 flex-shrink-0" icon="solar:soundwave-linear" width="20"></iconify-icon>
<div className=""><strong className="text-white">Unusual Sounds:</strong> Excessive noise can indicate duct strain or internal mechanical failure.</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-400 mt-1 flex-shrink-0" icon="solar:bill-check-linear" width="20"></iconify-icon>
<div className=""><strong className="text-white">High Bills:</strong> Spikes in heating costs usually mean efficiency has dropped significantly.</div>
</li>
</ul>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-brand-300 hover:text-white transition-colors border-b border-brand-300/30 hover:border-white pb-0.5" href="https://www.houselogic.com/organize-maintain/home-maintenance-tips/replace-home-air-conditioning-equipment/" target="_blank">
                    Read more: Air Conditioner - Repair or Replace?
                    <iconify-icon icon="solar:link-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="reviews">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Client Reviews</h2>
<div className="flex justify-center gap-2 mb-8">
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 mb-8">See why your neighbors trust Air Cubes HVAC.</p>
<a className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all" href="#">
                Read our Google Reviews
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-20 bg-brand-600 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to restore your comfort?</h2>
<p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                Contact Jorge Amador and the team today. Fast response times for Essex, Hudson, Middlesex &amp; Union counties.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-brand-600 hover:bg-gray-50 text-lg font-semibold px-10 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1" onclick="openBookingModal()">
                    Request Appointment
                </button>
<a className="bg-brand-700 text-white hover:bg-brand-800 border border-brand-500 text-lg font-semibold px-10 py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2" href="mailto:Aircubeshvac@gmail.com">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                    Email Us
                </a>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-bold text-white">Air Cubes HVAC</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Your comfort is our #1 priority. Family owned and operated Master HVACR Contractor serving New Jersey.
                    </p>
<div className="text-sm text-gray-500">
<p>Jorge Amador</p>
<p>Master HVACR Contractor</p>
</div>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Services</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-gray-400 hover:text-brand-400 transition-colors" href="#services">Heating Repair &amp; Install</a></li>
<li><a className="text-gray-400 hover:text-brand-400 transition-colors" href="#services">AC Repair &amp; Install</a></li>
<li><a className="text-gray-400 hover:text-brand-400 transition-colors" href="#services">System Maintenance</a></li>
<li><a className="text-gray-400 hover:text-brand-400 transition-colors" href="#services">Ductless Systems</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Contact Info</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<a className="text-white hover:text-brand-400 transition-colors font-medium" href="tel:9084000398">
                                (908) 400-0398
                            </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-gray-400 hover:text-brand-400 transition-colors break-all" href="mailto:Aircubeshvac@gmail.com">
                                Aircubeshvac@gmail.com
                            </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:file-check-linear" width="18"></iconify-icon>
<span className="text-gray-400">License # 19HC00711900</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-xs">© 2026 Air Cubes HVAC. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="booking-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeBookingModal()"></div>

<div className="bg-white rounded-2xl w-full max-w-lg relative z-10 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl font-bold text-gray-900 tracking-tight">Request Appointment</h3>
<p className="text-sm text-gray-500 mt-1">We'll confirm availability shortly.</p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500" onclick="closeBookingModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Note: This is a demo form. Connect to EmailJS or Formspree for live functionality.'); closeBookingModal();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50" placeholder="Your Name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50" placeholder="(908) ..." required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Service Needed</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50">
<option>Heating Repair</option>
<option>AC Repair</option>
<option>New Installation</option>
<option>Maintenance</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">County</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50">
<option>Essex</option>
<option>Hudson</option>
<option>Middlesex</option>
<option>Union</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-gray-50 resize-none" placeholder="Describe your issue..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all mt-2" type="submit">
                        Submit Request
                    </button>
</form>
</div>
</div>
</div>



    </>
  );
}
