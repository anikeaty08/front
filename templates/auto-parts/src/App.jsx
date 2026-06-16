import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        let slideInterval;

        function setSlide(index) {
            // Reset all slides
            slides.forEach(slide => {
                slide.classList.remove('opacity-100', 'z-10');
                slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
            });
            
            // Reset all dots
            dots.forEach(dot => {
                dot.classList.remove('scale-125', 'bg-white');
                dot.classList.add('bg-white/40');
            });

            // Activate current
            slides[index].classList.remove('opacity-0', 'pointer-events-none', 'z-0');
            slides[index].classList.add('opacity-100', 'z-10');
            
            dots[index].classList.remove('bg-white/40');
            dots[index].classList.add('scale-125', 'bg-white');
            
            currentSlide = index;
            resetTimer();
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            setSlide(next);
        }

        function resetTimer() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Init
        setSlide(0);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="uppercase text-xs font-medium text-slate-600 tracking-wide text-center bg-slate-50 border-slate-200 border-b pt-2 pb-2" style={{}}>• High Quality Parts at Low Prices •</div>

<header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">
<div className="flex industrial-font group-hover:bg-red-600 transition-colors text-xl font-bold text-white bg-blue-900 w-9 h-9 skew-x-[-10deg] items-center justify-center">M</div>
<span className="industrial-font uppercase text-2xl font-semibold text-slate-900 tracking-tighter">Macks <span className="text-blue-900 group-hover:text-red-600 transition-colors">AUTO</span></span>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-slate-600 hover:text-blue-900 text-sm font-medium uppercase tracking-wide flex items-center gap-1 group transition-colors" href="#">
                        Shop Parts
                        <iconify-icon className="text-slate-400 group-hover:text-blue-900 transition-colors" icon="lucide:chevron-down" width="14"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-blue-900 text-sm font-medium uppercase tracking-wide transition-colors" href="#">Performance</a>
<a className="text-slate-600 hover:text-blue-900 text-sm font-medium uppercase tracking-wide transition-colors" href="#">Tools &amp; Garage</a>
<a className="text-red-600 hover:text-red-700 text-sm font-medium uppercase tracking-wide transition-colors" href="#">Clearance</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center">
<div className="relative group">
<input className="bg-slate-50 text-slate-900 text-sm pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-blue-900 border border-slate-200 w-56 rounded-full transition-all focus:w-64 placeholder-slate-400" placeholder="Search by Part # or VIN" type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-900">
<iconify-icon icon="lucide:search" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-5 text-slate-500">
<button className="hover:text-blue-900 transition-colors flex flex-col items-center gap-0.5">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</button>
<button className="hover:text-blue-900 transition-colors relative flex flex-col items-center gap-0.5">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
</button>
</div>
</div>
</div>
</div>
</header>

<main className="flex-grow">

<section className="overflow-hidden group bg-slate-900 h-[550px] relative">

<div className="carousel-slide flex bg-blue-700 w-full h-full absolute top-0 right-0 bottom-0 left-0 items-center opacity-100 z-10" id="slide-0">
<div className="hidden md:block bg-blue-700 w-1/2 z-10 absolute top-0 right-0 bottom-0"></div>

<div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 sm:px-6 lg:px-8 md:grid-cols-2 z-20 bg-blue-700 w-full h-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative gap-x-12 gap-y-12 items-center">
<div className="text-left animate-fade-in-up">
<span className="inline-block py-1 px-3 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">Seasonal Maintenance Event</span>
<h1 className="md:text-7xl leading-none text-5xl font-semibold text-white tracking-tight mb-6">
                            It's time for a  <span className="text-blue-400">tune-up!</span>
</h1>
<p className="text-slate-300 text-lg mb-8 max-w-md font-light leading-relaxed">
                            Get your ride into top gear with the right tools, treatments, and tech to make maintenance easy.
                        </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-none text-white bg-blue-600 hover:bg-blue-500 transition-all uppercase tracking-widest hover:px-10" href="#">
                            Shop Now
                        </a>
</div>
<div className="hidden md:flex bg-blue-700 h-full relative items-center justify-end">
<img alt="Motor Oil Collection" className="hover:scale-105 transition-transform duration-500 max-h-[400px] object-contain z-10 relative drop-shadow-2xl" src="https://images.unsplash.com/photo-1655103955676-c9fbc4b65525?w=1600&amp;q=80"/>
</div>
</div>
</div>

<div className="carousel-slide absolute inset-0 z-0 w-full h-full flex items-center bg-[#7f1d1d] opacity-0 pointer-events-none" id="slide-1">
<div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-red-500/20 rounded-full blur-3xl"></div>
<div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full">
<div className="text-left">
<span className="inline-block py-1 px-3 border border-red-400/30 rounded-full bg-red-500/10 text-red-200 text-xs font-semibold tracking-wider uppercase mb-6">Performance Braking</span>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none mb-6">
                            Stop on a <br/> <span className="text-red-400">Dime.</span>
</h1>
<p className="text-red-100/80 text-lg mb-8 max-w-md font-light leading-relaxed">
                            Upgrade your stopping power with ceramic pads, slotted rotors, and multi-piston calipers.
                        </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-sm font-semibold rounded-none text-white hover:bg-white hover:text-red-900 transition-all uppercase tracking-widest" href="#">
                            Shop Brakes
                        </a>
</div>
<div className="hidden md:flex justify-end relative h-full items-center">
<img alt="Brake Rotor" className="relative z-10 max-h-[400px] w-auto object-contain drop-shadow-2xl mix-blend-screen grayscale" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="carousel-slide absolute inset-0 z-0 w-full h-full flex items-center bg-[#115e59] opacity-0 pointer-events-none" id="slide-2">
<div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-teal-400/20 rounded-full blur-3xl"></div>
<div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full">
<div className="text-left">
<span className="inline-block py-1 px-3 border border-teal-400/30 rounded-full bg-teal-500/10 text-teal-200 text-xs font-semibold tracking-wider uppercase mb-6">Handling &amp; Control</span>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none mb-6">
                            Own the <br/> <span className="text-teal-300">Corners.</span>
</h1>
<p className="text-teal-100/80 text-lg mb-8 max-w-md font-light leading-relaxed">
                            Precision suspension components for track days and street performance. Feel the difference.
                        </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-none text-teal-900 bg-teal-300 hover:bg-white transition-all uppercase tracking-widest" href="#">
                            Shop Suspension
                        </a>
</div>
<div className="hidden md:flex justify-end relative h-full items-center">
<img alt="Suspension" className="relative z-10 max-h-[400px] object-contain drop-shadow-2xl mix-blend-overlay" src="https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg"/>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-30">
<button aria-label="Slide 1" className="carousel-dot w-3 h-3 rounded-full transition-all duration-300 transform scale-125 bg-white" onclick="setSlide(0)"></button>
<button aria-label="Slide 2" className="carousel-dot hover:bg-white/80 transition-all duration-300 bg-white/40 w-3 h-3 rounded-full" onclick="setSlide(1)"></button>
<button aria-label="Slide 3" className="carousel-dot hover:bg-white/80 transition-all duration-300 bg-white/40 w-3 h-3 rounded-full" onclick="setSlide(2)"></button>
</div>
</section>

<section className="z-10 bg-white border-slate-100 border-b relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
<div className="sm:px-6 lg:px-8 max-w-7xl border-slate-100 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4">
<div className="flex flex-col hover:bg-slate-50 transition-colors group cursor-default text-center border-slate-200 pt-8 pr-4 pb-8 pl-4 items-center justify-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-900" icon="lucide:truck" width="24"></iconify-icon>
</div>
<h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Same Day Delivery</h4>
<p className="text-[11px] text-slate-500 mt-1">Orders before 2PM</p>
</div>
<div className="flex flex-col hover:bg-slate-50 transition-colors group cursor-default text-center border-slate-100 border-l pt-8 pr-4 pb-8 pl-4 items-center justify-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-900" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Genuine Warranty</h4>
<p className="text-[11px] text-slate-500 mt-1">Authentic parts only</p>
</div>
<div className="flex flex-col hover:bg-slate-50 transition-colors group cursor-default text-center border-slate-100 border-l pt-8 pr-4 pb-8 pl-4 items-center justify-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-900" icon="lucide:refresh-cw" width="24"></iconify-icon>
</div>
<h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Easy Returns</h4>
<p className="text-[11px] text-slate-500 mt-1">30-day guarantee</p>
</div>
<div className="flex flex-col hover:bg-slate-50 transition-colors group cursor-default text-center border-slate-100 border-l pt-8 pr-4 pb-8 pl-4 items-center justify-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-900" icon="lucide:users" width="24"></iconify-icon>
</div>
<h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Expert Support</h4>
<p className="text-[11px] text-slate-500 mt-1">Certified mechanics</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight industrial-font uppercase">Featured Products</h2>
<div className="bg-blue-600 w-36 h-0.5 mt-4 mr-auto ml-auto"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-x-8 gap-y-8">

<div className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="relative bg-slate-50 aspect-square overflow-hidden p-6 flex items-center justify-center">
<img alt="Oil Filter" className="group-hover:scale-110 transition-transform duration-500 mix-blend-multiply w-3/4 h-3/4 object-contain" src="https://images.unsplash.com/photo-1590227763209-821c686b932f?w=800&amp;q=80"/>
</div>
<div className="p-6 text-center flex-grow flex flex-col items-center">
<h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 px-2">Premium Synthetic Oil Filter 5W-30 Kit</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Complete change kit including washers and gaskets.</p>
<div className="mt-auto">
<span className="block text-xl font-bold text-blue-900 mb-3">$42.99</span>
<button className="uppercase hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-xs font-semibold text-slate-600 tracking-wide w-full border-slate-200 border pt-2 pr-2 pb-2 pl-2">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="relative bg-slate-50 aspect-square overflow-hidden p-6 flex items-center justify-center">
<img alt="Car Battery" className="group-hover:scale-110 transition-transform duration-500 mix-blend-multiply w-3/4 h-3/4 object-contain" src="https://images.unsplash.com/photo-1676337167752-2062c6ca7366?w=800&amp;q=80"/>
</div>
<div className="flex-grow flex flex-col text-center pt-6 pr-6 pb-6 pl-6 items-center">
<h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 px-2">DieHard Platinum AGM Battery</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">High performance cold cranking amps for winter starts.</p>
<div className="mt-auto">
<span className="block text-xl font-bold text-blue-900 mb-3">$219.99</span>
<button className="uppercase hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-xs font-semibold text-slate-600 tracking-wide w-full border-slate-200 border pt-2 pr-2 pb-2 pl-2">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="relative bg-slate-50 aspect-square overflow-hidden p-6 flex items-center justify-center">
<img alt="Tool Set" className="group-hover:scale-110 transition-transform duration-500 mix-blend-multiply w-3/4 h-3/4 object-contain" src="https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?w=800&amp;q=80"/>
</div>
<div className="p-6 text-center flex-grow flex flex-col items-center">
<h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 px-2">Professional 200pc Mechanic Tool Set</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Chrome vanadium steel with lifetime warranty case.</p>
<div className="mt-auto">
<span className="block text-xl font-bold text-blue-900 mb-3">$149.50</span>
<button className="uppercase hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-xs font-semibold text-slate-600 tracking-wide w-full border-slate-200 border pt-2 pr-2 pb-2 pl-2">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="aspect-square overflow-hidden flex bg-slate-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<img alt="Car Wax" className="group-hover:scale-110 transition-transform duration-500 mix-blend-multiply w-3/4 h-3/4 object-contain" src="https://images.unsplash.com/photo-1660395767510-fe2a775dd67d?w=800&amp;q=80"/>
</div>
<div className="flex-grow flex flex-col text-center pt-6 pr-6 pb-6 pl-6 items-center">
<h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 px-2">Ceramic Coating Spray Kit</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Professional grade shine and protection for 6 months.</p>
<div className="mt-auto">
<span className="block text-xl font-bold text-blue-900 mb-3">$34.95</span>
<button className="uppercase hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-xs font-semibold text-slate-600 tracking-wide w-full border-slate-200 border pt-2 pr-2 pb-2 pl-2">Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600 transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-red-600 pb-1" href="#">
                        View All Categories
                    </a>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-8">

<div className="w-full md:w-64 flex-shrink-0">
<div className="sticky bg-white border-slate-200 border rounded-none pt-6 pr-6 pb-6 pl-6 top-24 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">Filters</h3>
<button className="text-[10px] text-red-600 font-semibold uppercase hover:underline">Clear</button>
</div>

<div className="border-b border-slate-100 pb-5 mb-5">
<h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase">Department</h4>
<div className="space-y-2.5">
<label className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 border border-slate-300 rounded-[2px] flex items-center justify-center bg-white group-hover:border-blue-600 transition-colors">
<iconify-icon className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Exterior (45)</span>
</label>
<label className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 border border-slate-300 rounded-[2px] flex items-center justify-center bg-white group-hover:border-blue-600 transition-colors"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Interior (28)</span>
</label>
<label className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 border border-slate-300 rounded-[2px] flex items-center justify-center bg-white group-hover:border-blue-600 transition-colors"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Performance (12)</span>
</label>
</div>
</div>

<div className="border-slate-100 border-b mb-5 pb-5">
<h4 className="uppercase text-xs font-semibold text-slate-900 mb-3">Price</h4>
<input className="appearance-none cursor-pointer text-stone-800 bg-slate-700 opacity-100 w-full h-1 rounded-lg mt-2" max="1000" min="0" type="range"/>
<div className="flex text-xs font-medium text-slate-500 mt-3 justify-between">
<span className="">$0</span>
<span>$1000+</span>
</div>
</div>

<div className="">
<h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase">Availability</h4>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative inline-flex items-center h-5 rounded-full w-9 transition-colors focus:outline-none bg-blue-900">
<span className="translate-x-4 inline-block w-3 h-3 transform bg-white rounded-full transition-transform"></span>
</div>
<span className="text-sm text-slate-900 font-medium">In Stock</span>
</label>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-slate-900 industrial-font uppercase">New Arrivals</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500 uppercase font-semibold">Sort:</span>
<select className="bg-transparent text-sm font-medium text-slate-900 border-none focus:ring-0 cursor-pointer pr-8">
<option>Featured</option>
<option>Price: Low to High</option>
</select>
</div>
</div>

<div className="space-y-4">

<div className="group bg-white border border-slate-200 p-4 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
<div className="w-full sm:w-48 h-48 bg-slate-50 flex-shrink-0 flex items-center justify-center">
<img alt="Part" className="mix-blend-multiply max-h-32 object-contain" src="https://images.unsplash.com/photo-1760689043810-d6eefaf80dab?w=800&amp;q=80"/>
</div>
<div className="flex-1 py-2">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1">New Arrival</p>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Sparco R100 Racing Seat</h3>
<p className="text-sm text-slate-500 mb-4 max-w-lg">Ergonomic design with improved lateral support. Breathable fabric and tubular steel frame for maximum safety.</p>
</div>
<div className="text-right">
<span className="block text-2xl font-bold text-slate-900">$329.00</span>
<span className="text-xs text-green-600 font-medium">In Stock</span>
</div>
</div>
<div className="mt-4 flex items-center gap-4">
<button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors">Add to Cart</button>
<button className="text-slate-400 hover:text-red-600 transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 p-4 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
<div className="w-full sm:w-48 h-48 bg-slate-50 flex-shrink-0 flex items-center justify-center">
<img alt="Part" className="mix-blend-multiply max-h-32 object-contain" src="https://images.unsplash.com/photo-1697209514178-ccfb779193e7?w=320&amp;q=80"/>
</div>
<div className="flex-1 py-2">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1">Best Seller</p>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Michelin Pilot Sport 4S</h3>
<p className="text-sm text-slate-500 mb-4 max-w-lg">Ultra-high performance summer tire. Born from endurance racing for your street car.</p>
</div>
<div className="text-right">
<span className="block text-2xl font-bold text-slate-900">$345.00</span>
<span className="text-xs text-green-600 font-medium">In Stock</span>
</div>
</div>
<div className="mt-4 flex items-center gap-4">
<button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors">Add to Cart</button>
<button className="text-slate-400 hover:text-red-600 transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pb-20">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-blue-900 rounded-none shadow-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-blue-800 transform skew-x-[-20deg] translate-x-10 z-0 hidden md:block"></div>
<div className="relative z-10 max-w-lg">
<h2 className="text-2xl font-bold text-white mb-2">Subscribe to hear about all our promotions.</h2>
<p className="text-blue-200 text-sm">Don't see what you want? Email us at <span className="font-semibold text-white">support@macksauto.parts</span></p>
</div>
<div className="relative z-10 w-full md:w-auto flex-shrink-0">
<div className="flex w-full md:w-96 bg-white p-1">
<input className="flex-1 px-4 py-2 text-sm text-slate-900 focus:outline-none placeholder-slate-400" placeholder="Email address" type="email"/>
<button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-wide transition-colors">
                                Subscribe
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="text-white bg-[#0B1E40] border-blue-900 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex industrial-font text-lg font-bold text-blue-900 bg-white w-8 h-8 skew-x-[-10deg] items-center justify-center">S</div>
<span className="industrial-font uppercase text-xl font-semibold text-white tracking-tighter">mack's <span className="text-blue-400">AUTO</span></span>
</div>
<div className="text-sm text-blue-200 space-y-1">
<p className="">Reach Us At:</p>
<p className="font-semibold text-white">123 Sunset Park</p>
<p className="">Miami, FL</p>
<p className=""><span className="block text-blue-200 mt-2">Contact Us</span> (305) 555-5555</p>
</div>
<div className="flex gap-4 mt-8 gap-x-4 gap-y-4">
<a className="w-8 h-8 bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all rounded-full" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="w-8 h-8 bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all rounded-full" href="#"><iconify-icon className="" icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all rounded-full" href="#"><iconify-icon icon="lucide:youtube" width="16"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="font-bold text-white mb-6 text-xs uppercase tracking-wider">Departments</h4>
<ul className="space-y-3 text-sm text-blue-200">
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Electrical</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Lighting</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Outdoor Living</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Kitchen</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Pet</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-white mb-6 text-xs uppercase tracking-wider opacity-0 md:opacity-100">More</h4>
<ul className="space-y-3 text-sm text-blue-200">
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Agriculture</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Plumbing</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Paint</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Automotive</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Hardware</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-white mb-6 text-xs uppercase tracking-wider">Support</h4>
<ul className="text-sm text-blue-200 space-y-3">
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Refund Policy</a></li><li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Shipping Policy</a></li><li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-white hover:underline transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-blue-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-blue-300">© 2026 Mack's Auto Parts Ltd.</p><div className="flex gap-2 bg-center text-xs text-blue-300 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/903baae0-6401-45ce-ab26-7784dbd39931_320w.jpg)] bg-cover gap-x-2 gap-y-2 items-center">
</div>
</div>
</div>
</footer>


    </>
  );
}
