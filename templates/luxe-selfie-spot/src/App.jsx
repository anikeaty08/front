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
serif: ['Playfair Display', 'serif'],
},
colors: {
purple: {
50: '#faf5ff',
100: '#f3e8ff',
200: '#e9d5ff',
300: '#d8b4fe',
400: '#c084fc',
500: '#a855f7',
600: '#9333ea',
700: '#7e22ce',
800: '#6b21a8',
900: '#581c87',
},
neutral: {
850: '#1f1f1f',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'fade-in': 'fadeIn 1s ease-out both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



        // Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-white/70', 'backdrop-blur-md', 'border-transparent');
                navBg.classList.add('bg-white/95', 'backdrop-blur-xl', 'border-neutral-200');
            } else {
                navBg.classList.add('bg-white/70', 'backdrop-blur-md', 'border-transparent');
                navBg.classList.remove('bg-white/95', 'backdrop-blur-xl', 'border-neutral-200');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 border-b transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-24 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 text-purple-600" id="logo-icon">
<svg className="" height="100%" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9 9l-7 3l7 3l3 7l3-7l7-3l-7-3z" fill="currentColor"></path></svg>
</div>
<span className="group-hover:opacity-80 transition-opacity text-xl font-medium tracking-tight font-serif text-neutral-900" id="logo-text">Luxe Selfie Spot</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600" id="nav-links">
<a className="hover:text-purple-600 transition-colors" href="#packages">Packages</a>
<a className="hover:text-purple-600 transition-colors" href="#experience">Experience</a>
<a className="hover:text-purple-600 transition-colors" href="#reviews">Stories</a>
<a className="hover:text-purple-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200" href="#booking">
                  Check Availability
                </a>
</div>

<button className="md:hidden p-2 text-neutral-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 md:hidden shadow-xl" id="mobile-menu">
<a className="text-lg font-serif text-neutral-900" href="#packages">Packages</a>
<a className="text-lg font-serif text-neutral-900" href="#experience">Experience</a>
<a className="text-lg font-serif text-purple-600" href="#booking">Book Now</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[750px] overflow-hidden bg-purple-50">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Event Photobooth" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30"></div>
</div>
<div className="flex flex-col z-10 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative justify-center">
<div className="max-w-3xl mt-16">


<h1 className="md:text-8xl leading-[0.95] animate-fade-in-up text-6xl text-neutral-900 tracking-tight font-serif mb-8" style={{animationDelay: '200ms'}}>
                    Elevate Every <span className="italic font-light text-purple-500">Moment.</span>
</h1>

<p className="text-lg text-neutral-600 font-light max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '300ms'}}>
                  Experience the next generation of event entertainment. Sleek design, instant sharing, and studio-quality lighting for weddings, corporate events, and parties.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors text-center shadow-lg shadow-neutral-200" href="#booking">
                    Book Now
                  </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 group shadow-sm" href="#packages">
                    View Packages
                    <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse">
<span className="text-[10px] uppercase tracking-widest text-neutral-900">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-neutral-900 to-transparent"></div>
</div>
</div>
</header>

<section className="bg-white pt-24 pb-24 px-6" id="packages">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-purple-600 text-xs font-bold tracking-widest uppercase mb-3 block">Our Collection</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-serif mb-6 text-neutral-900">Curated Experiences</h2>
<p className="text-neutral-500 max-w-2xl mx-auto font-light">Choose the perfect package for your celebration. All experiences include our signature sleek booth and professional attendant.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group flex flex-col reveal-on-scroll delay-100">
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8 relative shadow-lg shadow-neutral-100">
<img alt="Luxe Moment Package" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex flex-col flex-grow text-center px-4">
<h3 className="text-2xl mb-4 font-serif text-neutral-900">The Luxe Moment Package</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                            This package includes 2 hours of selfie booth fun, gorgeous LED lighting, and instant digital downloads. Simple, stylish, and designed to elevate any moment without the extra fuss. A booth attendant is included to assist guests and keep everything running smooth. <span className="text-neutral-900 font-medium block mt-2 text-lg">$300</span>
</p>
<div className="pt-4 border-t border-neutral-100">
<p className="text-sm font-medium text-neutral-900">Add-On: <span className="font-light text-neutral-500">Printer for physical prints - +$100</span></p>
</div>
<a className="mt-6 w-full py-3 border border-neutral-200 rounded-xl text-xs font-medium uppercase tracking-wider hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-neutral-900" href="#booking">Select Package</a>
</div>
</div>

<div className="group flex flex-col reveal-on-scroll delay-200">
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8 relative shadow-lg shadow-neutral-100">
<img alt="Signature Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-grow text-center px-4">
<h3 className="text-2xl mb-4 font-serif text-neutral-900">The Signature Experience</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                            This package includes 3 hours with unlimited digital photos, personalized templates, standard props, and a backdrop. A booth attendant is included to assist guests and keep everything running smoothly. <span className="text-neutral-900 font-medium block mt-2 text-lg">$450</span>
</p>
<div className="pt-4 border-t border-neutral-100">
<p className="text-sm font-medium text-neutral-900">Add-On: <span className="font-light text-neutral-500">Printer for physical prints - +$100</span></p>
</div>
<a className="mt-6 w-full py-3 bg-neutral-900 text-white rounded-xl text-xs font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200" href="#booking">Select Package</a>
</div>
</div>

<div className="group flex flex-col reveal-on-scroll delay-300">
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8 relative shadow-lg shadow-neutral-100">
<img alt="VIP Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616011739525-467dc06f6992?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex flex-col flex-grow text-center px-4">
<h3 className="text-2xl mb-4 font-serif text-neutral-900">The Luxe VIP Experience</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                            This package includes 4 hours of full-service coverage with a luxury backdrop, premium props, fully customized template, instant sharing, printer for physical prints, a red-carpet-style setup, and a booth attendant. This package is crafted for weddings, corporate events, and high-end celebrations. <span className="text-neutral-900 font-medium block mt-2 text-lg">$600</span>
</p>
<div className="pt-4 border-t border-neutral-100">
<p className="text-sm font-medium text-neutral-900">Includes: <span className="font-light text-neutral-500">Physical Prints &amp; Red Carpet</span></p>
</div>
<a className="mt-6 w-full py-3 border border-neutral-200 rounded-xl text-xs font-medium uppercase tracking-wider hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-neutral-900" href="#booking">Select Package</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-purple-50/50 relative overflow-hidden" id="booking">

<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 gap-x-12 gap-y-12">

<div className="lg:col-span-4 flex flex-col justify-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif mb-6 text-neutral-900">Secure Your <br/><span className="text-purple-600 italic">Date</span></h2>
<p className="text-neutral-500 mb-8 font-light">Select your preferred package and date. A 20% deposit is required to lock in your event.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-600">
<div className="p-2 rounded-full bg-white border border-neutral-200"><svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Instant Confirmation</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<div className="p-2 rounded-full bg-white border border-neutral-200"><svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></div>
<span>Free Rescheduling</span>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-purple-900/5 border border-neutral-100 text-neutral-900 reveal-on-scroll delay-200">

<div className="flex items-center gap-4 mb-8 text-xs font-bold tracking-widest uppercase text-neutral-400">
<span className="text-purple-600">01. Package</span>
<span className="w-8 h-px bg-neutral-200"></span>
<span className="">02. Date</span>
<span className="w-8 h-px bg-neutral-200"></span>
<span className="">03. Details</span>
</div>

<div className="grid grid-cols-1 gap-4 mb-8">
<button className="text-left p-4 rounded-xl border-2 border-purple-500 bg-purple-50 relative transition-all">
<div className="absolute top-4 right-4 text-purple-600"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
<span className="block font-medium text-base mb-1 text-neutral-900">The Signature Experience</span>
<span className="block text-xs text-neutral-500">3 Hours • Unlimited Digital • $450</span>
</button>
<button className="text-left p-4 rounded-xl border border-neutral-200 hover:border-purple-300 hover:bg-purple-50/50 transition-colors">
<span className="block font-medium text-base mb-1 text-neutral-900">The Luxe Moment Package</span>
<span className="block text-xs text-neutral-500">2 Hours • Digital Only • $300</span>
</button>
<button className="text-left p-4 rounded-xl border border-neutral-200 hover:border-purple-300 hover:bg-purple-50/50 transition-colors">
<span className="block font-medium text-base mb-1 text-neutral-900">The Luxe VIP Experience</span>
<span className="block text-xs text-neutral-500">4 Hours • Prints + Red Carpet • $600</span>
</button>
</div>

<div className="mb-8">
<h4 className="text-sm font-medium mb-4 text-neutral-900">Select Date</h4>
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-neutral-50 rounded-xl p-4 border border-neutral-100">
<div className="flex justify-between mb-4 text-sm font-medium text-neutral-900">
<span>October 2024</span>
<div className="flex gap-2 text-neutral-400">
<svg className="w-4 h-4 cursor-pointer hover:text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<svg className="w-4 h-4 cursor-pointer hover:text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-[10px] text-neutral-400 mb-2 uppercase tracking-wide">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-xs font-medium">
<span className="text-neutral-300">29</span>
<span className="text-neutral-300">30</span>
<span className="hover:bg-purple-100 text-neutral-700 rounded-full w-7 h-7 flex items-center justify-center mx-auto cursor-pointer">1</span>
<span className="hover:bg-purple-100 text-neutral-700 rounded-full w-7 h-7 flex items-center justify-center mx-auto cursor-pointer">2</span>
<span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/40">3</span>
<span className="hover:bg-purple-100 text-neutral-700 rounded-full w-7 h-7 flex items-center justify-center mx-auto cursor-pointer">4</span>
<span className="hover:bg-purple-100 text-neutral-700 rounded-full w-7 h-7 flex items-center justify-center mx-auto cursor-pointer">5</span>
</div>
</div>

<div className="flex-1">
<h4 className="text-sm font-medium mb-3 text-neutral-900">Start Time</h4>
<div className="grid grid-cols-2 gap-3 content-start">
<button className="py-2.5 px-3 rounded-lg text-xs border border-neutral-200 text-neutral-600 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">5:00 PM</button>
<button className="py-2.5 px-3 rounded-lg text-xs bg-neutral-900 text-white shadow-md">6:00 PM</button>
<button className="py-2.5 px-3 rounded-lg text-xs border border-neutral-200 text-neutral-600 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">7:00 PM</button>
<button className="py-2.5 px-3 rounded-lg text-xs border border-neutral-200 text-neutral-600 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">8:00 PM</button>
</div>
</div>
</div>
</div>

<button className="w-full py-4 bg-neutral-900 text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200 tracking-wide">
                        Continue to Details
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 border-t border-neutral-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex reveal-on-scroll mb-12 items-end justify-between">
<div>
<span className="text-purple-600 text-xs font-bold tracking-widest uppercase mb-2 block">Stories</span>
<h2 className="text-3xl font-serif text-neutral-900">Client Love</h2>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-900">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-900">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 reveal-on-scroll delay-100">

<div className="min-w-[300px] md:min-w-[400px] snap-center bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-purple-400 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700">"The highlight of our wedding! The booth looked so sleek and modern, and the photos were studio quality. Everyone loved the instant sharing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-900">Sarah Jenkins</p>
<p className="text-xs text-neutral-400">Luxe VIP Experience</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 p-8 rounded-2xl snap-center border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-purple-400 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700">"Hired for our corporate holiday party. The branding options on the template were perfect, and the attendant was professional and fun."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">James Wilson</p>
<p className="text-xs text-neutral-400">Signature Experience</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 p-8 rounded-2xl snap-center border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-purple-400 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700">"The best investment for my birthday bash. The props were high quality and the ring light made everyone look amazing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/22.jpg"/>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Priya Patel</p>
<p className="text-xs text-neutral-400">Luxe Moment Package</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-neutral-300 bg-neutral-900 border-neutral-800 border-t pt-20 pr-6 pb-20 pl-6" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<svg className="text-purple-400" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9 9l-7 3l7 3l3 7l3-7l7-3l-7-3z" fill="currentColor"></path></svg>
<span className="text-xl tracking-tight font-serif" style={{}}>Luxe Selfie Spot</span>
</div>
<p className="leading-relaxed text-xs font-light text-neutral-500 max-w-xs" style={{}}>Premium Photobooth Experiences for Your Most Exclusive Celebrations. Capturing moments, creating memories.</p>
<div className="flex gap-4">
<a className="hover:text-purple-400 transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-purple-400 transition-colors" href="#"><svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Explore</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-purple-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#packages">Packages</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#reviews">Client Stories</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Contact</h4>
<ul className="space-y-3 text-xs font-light">
<li className="flex gap-2 items-start">
<svg className="shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="" style={{}}>Westlake, FL</span>
</li>
<li className="flex gap-2 items-center">
<svg className="shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+971 50 123 4567</span>
</li>
<li className="flex gap-2 items-center">
<svg className="shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span>hello@luminaai.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">FAQ</h4>
<div className="space-y-3 text-xs font-light">
<details className="group cursor-pointer">
<summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
<span>How much space is needed?</span>
<svg className="group-open:rotate-180 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="pt-2 text-neutral-500">We require a 3x3 meter space for the optimal setup including the backdrop.</p>
</details>
<details className="group cursor-pointer">
<summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
<span>Do you provide props?</span>
<svg className="group-open:rotate-180 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="pt-2 text-neutral-500">Yes! We have a curated selection of premium props. Custom props available upon request.</p>
</details>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>©2025 Lumina AI. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
