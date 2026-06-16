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
slate: {
850: '#151e2e',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
shimmer: {
'from': { backgroundPosition: '0 0' },
'to': { backgroundPosition: '-200% 0' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-element');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
<iconify-icon height="18" icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tighter text-lg">UKCW<span className="text-slate-400 font-normal">SERVICES</span></span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200" href="#">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200" href="#">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200" href="#">Membership</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200" href="#">Business</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 hidden sm:block transition-colors" href="#">Log in</a>
<button className="group bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2 transform hover:-translate-y-0.5">
                        Book Now
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-[0.03] animate-pulse"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-fade-in-up opacity-0">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Now opening in Manchester &amp; Leeds
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] animate-fade-in-up delay-100 opacity-0">
                Premium car care for the <br className="hidden sm:block"/> modern driver.
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 opacity-0">
                Experience the UK's finest eco-friendly hand car wash and detailing service. Seamless booking, cashless payments, and uncompromising quality at over 50 locations.
            </p>

<div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col sm:flex-row gap-2 relative z-10 animate-fade-in-up delay-300 opacity-0 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-slate-900 transition-colors duration-300" icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 rounded-xl border-none ring-0 focus:ring-0 bg-transparent text-slate-900 placeholder-slate-400 text-sm transition-colors" placeholder="Enter postcode or city (e.g. London)" type="text"/>
</div>
<div className="h-px sm:h-auto sm:w-px bg-slate-100 my-2 sm:my-1"></div>
<button className="group bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm flex items-center justify-center gap-2 relative overflow-hidden">
<span className="relative z-10">Find Location</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>

<div className="mt-12 pt-8 border-t border-slate-100/50 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-0 animate-fade-in-up delay-[400ms]">

<span className="text-xs font-semibold tracking-widest text-slate-400 hover:text-slate-600 transition-colors cursor-default">TESLA</span>
<span className="text-xs font-semibold tracking-widest text-slate-400 hover:text-slate-600 transition-colors cursor-default">BMW</span>
<span className="text-xs font-semibold tracking-widest text-slate-400 hover:text-slate-600 transition-colors cursor-default">AUDI</span>
<span className="text-xs font-semibold tracking-widest text-slate-400 hover:text-slate-600 transition-colors cursor-default">MERCEDES-BENZ</span>
<span className="text-xs font-semibold tracking-widest text-slate-400 hover:text-slate-600 transition-colors cursor-default">PORSCHE</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-element p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Eco-Friendly Wash</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We use 100% biodegradable products and water reclamation systems to protect your car and the environment.
                    </p>
</div>

<div className="reveal-element delay-100 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="lucide:calendar-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Seamless Booking</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Book online in seconds. No queues, no waiting. Just drop off your keys and track progress via our app.
                    </p>
</div>

<div className="reveal-element delay-200 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Certified Detailers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Our technicians are trained in the latest paint correction and ceramic coating techniques for a showroom finish.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 reveal-element">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Services tailored to your needs</h2>
<p className="text-slate-500 max-w-xl">From a quick exterior refresh to a full interior detail, choose the package that suits your schedule and your vehicle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="reveal-element md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/20 backdrop-blur-sm border border-white/20 text-xs font-medium text-white mb-3">
                            Most Popular
                        </div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">The Platinum Valet</h3>
<p className="text-slate-300 text-sm max-w-sm opacity-90">Complete interior &amp; exterior deep clean, hand wax, leather treatment, and odour elimination.</p>
<button className="mt-4 text-white text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Details <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="reveal-element delay-100 md:col-span-2 md:row-span-1 p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Express Wash</h3>
<p className="text-slate-500 text-sm mt-2">Exterior hand wash, wheel clean, and tyre dressing.</p>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:timer" width="18"></iconify-icon>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center group-hover:border-slate-200 transition-colors">
<span className="text-slate-900 font-semibold">£15.00</span>
<span className="text-xs text-slate-400 group-hover:text-slate-500">~20 Mins</span>
</div>
</div>

<div className="reveal-element delay-200 md:col-span-1 md:row-span-1 p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center group cursor-pointer hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-out">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Ceramic Coating</h3>
<p className="text-xs text-slate-500 mt-1">Long term protection</p>
</div>

<div className="reveal-element delay-300 md:col-span-1 md:row-span-1 p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center group cursor-pointer hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out">
<iconify-icon icon="lucide:user-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Membership</h3>
<p className="text-xs text-slate-500 mt-1">Unlimited washes</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 reveal-element">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Simple Pricing</h2>
<p className="text-slate-500 mt-2">Select your car size for accurate pricing.</p>
</div>

<div className="reveal-element delay-100 bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex mx-auto mb-10 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium shadow-sm transition-all duration-200 hover:bg-slate-800">Small</button>
<button className="flex-1 sm:flex-none px-6 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200">Medium</button>
<button className="flex-1 sm:flex-none px-6 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200">Large/SUV</button>
</div>
<div className="reveal-element delay-200 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="p-8 group">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Gold Service</h3>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">Best Value</span>
</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight mb-6">£25<span className="text-lg font-normal text-slate-400">/wash</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                Hand wash &amp; wax
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                Wheel acid clean
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                Door shuts cleaned
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                Interior vacuum &amp; dash wipe
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-900 font-medium text-sm hover:border-slate-900 hover:bg-slate-50 transition-all duration-300">Select Plan</button>
</div>
<div className="p-8 bg-slate-50/50 group relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-0"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Platinum Service</h3>
</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight mb-6">£45<span className="text-lg font-normal text-slate-400">/wash</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="font-medium text-slate-900">Everything in Gold</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                    Leather care treatment
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                    HD Wax application
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                                    Odour elimination
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 transform group-hover:scale-[1.02]">Select Plan</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal-element">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Our Locations</h2>
<p className="text-slate-500 mt-2">Find your nearest UKCW centre.</p>
</div>
<a className="group text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all duration-300" href="#">
                    View all 50+ locations <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

<a className="reveal-element group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">London - City</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-100 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">London - Chelsea</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-200 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Brent Cross</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-300 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Canary Wharf</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Heathrow T5</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-100 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Oxford</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-200 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Reading</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-300 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Watford</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Bluewater</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="reveal-element delay-100 group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Birmingham</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-6 group cursor-default">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900 transition-transform duration-300 group-hover:rotate-12">
<iconify-icon height="18" icon="lucide:sparkles" width="18"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tighter text-lg">UKCW<span className="text-slate-500 font-normal">SERVICES</span></span>
</div>
<p className="text-sm max-w-xs leading-relaxed text-slate-500">
                        The UK's leading sustainable car wash network. Premium service, eco-friendly products, and state-of-the-art facilities.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors duration-200" href="#">Exterior Wash</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Interior Valet</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Ceramic Coating</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Machine Polishing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors duration-200" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Locations</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Franchise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors duration-200" href="#">Help Centre</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 UK Car Wash Services. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
