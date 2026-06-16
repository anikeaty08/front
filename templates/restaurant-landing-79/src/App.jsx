import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="flex flex-col leading-none group" href="#">
<span className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">AL GHAWALI</span>
<span className="text-sm font-medium text-stone-500 tracking-wide group-hover:text-orange-500 transition-colors">مطعم الغوالي</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900" href="tel:+971585706001">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
<span>+971 58 570 6001</span>
</a>
<a className="bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-sm flex items-center gap-2 hover:scale-105 transform active:scale-95" href="#order">
<span>Order Online</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 animate-fade-in">
<img alt="Turkish Mixed Grill" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 hero-gradient"></div>
<div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">

<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white animate-fade-in-up delay-100">
<span className="text-orange-400 iconify" data-icon="lucide:star" data-width="14"></span>
<span className="text-xs font-medium tracking-wide">4.7/5 from 376 Reviews</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] animate-fade-in-up delay-200">
                Authentic Flavors <br/> in Abu Dhabi
                <span className="block text-2xl md:text-4xl mt-3 text-stone-300 font-normal font-[Noto Sans Arabic]">النكهات الأصيلة في أبو ظبي</span>
</h1>
<p className="text-stone-300 text-sm md:text-base max-w-lg leading-relaxed animate-fade-in-up delay-300">
                Experience the finest Turkish grills, shawarma, and traditional dishes at Al Ghawali. Quality ingredients, unforgettable taste.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-fade-in-up delay-500">
<button className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
                    View Menu
                </button>
<button className="bg-orange-600 text-white border border-orange-600 px-8 py-3 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                    Get Directions
                </button>
</div>
</div>
</header>

<section className="py-20 md:py-32 border-b border-stone-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col gap-3 group animate-fade-in-up delay-100">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-stone-900">Dine-in Experience</h3>
<p className="text-xs text-stone-500 leading-relaxed">Enjoy our warm, family-friendly atmosphere in the heart of Al Ruwais.</p>
</div>

<div className="flex flex-col gap-3 group animate-fade-in-up delay-200">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:car" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-stone-900">Drive-through</h3>
<p className="text-xs text-stone-500 leading-relaxed">Quick and convenient pickup without leaving your vehicle.</p>
</div>

<div className="flex flex-col gap-3 group animate-fade-in-up delay-300">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-stone-900">No-contact Delivery</h3>
<p className="text-xs text-stone-500 leading-relaxed">Fresh, hot food delivered safely to your doorstep.</p>
</div>

<div className="flex flex-col gap-3 group animate-fade-in-up delay-500">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-stone-900">Open Late</h3>
<p className="text-xs text-stone-500 leading-relaxed">Serving you daily until 12:00 AM.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-fade-in-up">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">Our Favorites <span className="font-[Noto Sans Arabic] font-normal text-stone-500 ml-2">قائمتنا</span></h2>
<p className="text-stone-500 text-sm mt-2 max-w-md">Authentic recipes prepared daily. Prices range from AED 1–50.</p>
</div>

<div className="flex bg-stone-200 p-1 rounded-lg">
<button className="px-4 py-1.5 text-xs font-medium bg-white text-stone-900 shadow-sm rounded-md transition-all">All Items</button>
<button className="px-4 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 rounded-md transition-all hover:bg-stone-200/50">Grills</button>
<button className="px-4 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 rounded-md transition-all hover:bg-stone-200/50">Shawarma</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl border border-stone-200 overflow-hidden menu-card-hover cursor-pointer animate-fade-in-up delay-100">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Shawarma" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-stone-900">Classic Shawarma</h3>
<span className="text-xs font-medium bg-stone-100 text-stone-600 px-2 py-1 rounded">AED 15</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Marinated chicken, garlic sauce, pickles, wrapped in fresh bread.</p>
<button className="w-full py-2 border border-stone-200 rounded-lg text-xs font-medium text-stone-600 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            Add to Order
                        </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-stone-200 overflow-hidden menu-card-hover cursor-pointer animate-fade-in-up delay-200">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Mixed Grill" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-stone-900">Mixed Grill Platter</h3>
<span className="text-xs font-medium bg-stone-100 text-stone-600 px-2 py-1 rounded">AED 45</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Selection of lamb chops, kebab, tawook, served with grilled vegetables.</p>
<button className="w-full py-2 border border-stone-200 rounded-lg text-xs font-medium text-stone-600 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            Add to Order
                        </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-stone-200 overflow-hidden menu-card-hover cursor-pointer animate-fade-in-up delay-300">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Burrito" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-stone-900">Special Burrito</h3>
<span className="text-xs font-medium bg-stone-100 text-stone-600 px-2 py-1 rounded">AED 25</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Fusion style burrito with spicy meat, rice, beans and cheese.</p>
<button className="w-full py-2 border border-stone-200 rounded-lg text-xs font-medium text-stone-600 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            Add to Order
                        </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-stone-200 overflow-hidden menu-card-hover cursor-pointer animate-fade-in-up delay-500">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Fries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-stone-900">Loaded Fries</h3>
<span className="text-xs font-medium bg-stone-100 text-stone-600 px-2 py-1 rounded">AED 18</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Crispy french fries topped with cheese sauce and jalapeños.</p>
<button className="w-full py-2 border border-stone-200 rounded-lg text-xs font-medium text-stone-600 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            Add to Order
                        </button>
</div>
</div>
</div>
<div className="mt-12 text-center animate-fade-in-up delay-700">
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors hover:translate-x-1 duration-200" href="#">
                    View Full Menu
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="py-20 border-t border-stone-200" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center animate-fade-in-up">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">Testimonials</span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">Loved by Locals</h2>
<div className="flex items-center gap-1 mt-3">
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:star-half" data-width="16"></span>
<span className="text-sm font-medium text-stone-600 ml-2">4.7 Overall Rating</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-stone-300 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-100">
<div className="flex gap-1 text-orange-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-stone-700 italic mb-4">"The mixed grill is absolutely amazing. Best place in Al Ruwais for authentic taste."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">A</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-900">Ahmed Al-Mansouri</span>
<span className="text-[10px] text-stone-500">Local Guide</span>
</div>
</div>
</div>

<div className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-stone-300 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-200">
<div className="flex gap-1 text-orange-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-stone-700 italic mb-4 font-[Noto Sans Arabic]" dir="rtl">"والله زاكي! الأكل نظيف والخدمة ممتازة، أنصح فيه بشدة للعائلات."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">M</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-900">Mohammed S.</span>
<span className="text-[10px] text-stone-500">Verified Customer</span>
</div>
</div>
</div>

<div className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-stone-300 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-300">
<div className="flex gap-1 text-orange-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-stone-700 italic mb-4">"Great value for money. The shawarma is juicy and the service is very fast."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">S</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-900">Sarah Jones</span>
<span className="text-[10px] text-stone-500">Food Blogger</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

<div className="bg-stone-900 text-white p-12 lg:p-20 flex flex-col justify-center">
<h2 className="text-2xl font-semibold tracking-tight mb-8 animate-fade-in-up">Visit Us <span className="text-stone-500 font-normal">|</span> تواصل معنا</h2>
<div className="space-y-8 animate-fade-in-up delay-100">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 group hover:bg-orange-600 transition-colors duration-300">
<span className="iconify text-stone-300 group-hover:text-white" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Address</h4>
<p className="text-stone-400 text-sm leading-relaxed">Traditional Souk, Al Ruwais Industrial City,<br/>Abu Dhabi, United Arab Emirates</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 group hover:bg-orange-600 transition-colors duration-300">
<span className="iconify text-stone-300 group-hover:text-white" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Opening Hours</h4>
<p className="text-stone-400 text-sm">Open Daily</p>
<p className="text-stone-400 text-sm">Closes at 12:00 AM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 group hover:bg-orange-600 transition-colors duration-300">
<span className="iconify text-stone-300 group-hover:text-white" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Contact</h4>
<p className="text-stone-400 text-sm mb-2">+971 58 570 6001</p>
<div className="flex gap-3">
<a className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors" href="#">
                                Call Now
                            </a>
<span className="text-stone-700">|</span>
<a className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300 transition-colors" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="12"></span>
                                WhatsApp
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-stone-200 h-96 lg:h-auto w-full group overflow-hidden">

<img alt="Map Location" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:navigation" data-width="16"></span>
                    Open Google Maps
                 </button>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">AL GHAWALI RESTAURANT <br/><span className="text-stone-400 font-[Noto Sans Arabic] font-normal">مطعم الغوالي</span></h3>
<p className="text-stone-500 text-sm max-w-sm">Serving authentic flavors in Abu Dhabi with passion and quality since establishment.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Order Online</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Socials</h4>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-600 transition-colors hover:scale-110 duration-200" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-600 transition-colors hover:scale-110 duration-200" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Al Ghawali Restaurant. All rights reserved.</p>
<div className="flex gap-6 text-xs text-stone-400">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
